const express = require('express'),
  morgan = require('morgan'),
  fs = require('fs'),
  path = require('path'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose');
const { check, validationResult } = require('express-validator');

const port = process.env.PORT || 3000;
const dbname = process.env.DBNAME || 'myFlixDB';
const connection_string = process.env.CONNECTION_URI || `mongodb://localhost:27017/${dbname}`;

mongoose.connect(connection_string, { useNewUrlParser: true, useUnifiedTopology: true });

const Models = require('./models.js');

const Movies = Models.Movie;
const Users = Models.User;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const cors = require('cors');
app.use(cors());

// Allow only certain origins to have access, replace app.use(cors()) with:
// let allowedOrigins = ['http://localhost:8080', 'http://testsite.com'];

// app.use(cors({
//   origin: (origin, callback) => {
//     if(!origin) return callback(null, true);
//     if(allowedOrigins.indexOf(origin) === -1){ // If a specific origin isn’t found on the list of allowed origins
//       let message = 'The CORS policy for this application doesn’t allow access from origin ' + origin;
//       return callback(new Error(message ), false);
//     }
//     return callback(null, true);
//   }
// }));

// Authentication - must be placed after middleware
let auth = require('./auth')(app);
const passport = require('passport');
require('./passport');

app.use(express.static('public')); //to specify static files folder
  // create a write stream (in append mode)
  // a ‘log.txt’ file is created in root directory
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), {flags: 'a'})
  
  // setup the logger
app.use(morgan('combined', {stream: accessLogStream}));

  // home
  app.get('/', (req, res) => {
    res.status(200).send('Welcome to the myFlix app!!!');
  });

  //GET all movies
  app.get('/movies', passport.authenticate('jwt', { session: false }), (req, res) => {
    Movies.find()
    .then(movies => res.status(201).json(movies))
    .catch(err => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});


//GET movie by name
app.get('/movies/:Title', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { Title } = req.params;
  Movies.findOne({ Title })
    .then(movie => {
      if (!movie) {
        res.status(400).end(`Could not find Movie with title: ${Title}`);
      } else {
        res.status(200).json(movie);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});

//GET genre
app.get('/movies/genres/:genreName', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { genreName } = req.params;
  Movies.findOne({ 'Genre.Name' : genreName })
    .then(movie => {
      if (!movie) {
        res.status(400).end(`genre ${genreName} not found`);
      } else {
        res.status(201).json(movie.Genre);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
  });


//GET director
app.get('/movies/directors/:directorName', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { directorName } = req.params;
  Movies.findOne({'Director.Name' : directorName})
    .then(movie => {
      if (!movie) {
        res.status(400).send(`director ${directorName} not found`);
      } else {
        res.status(201).json(movie.Director);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});


//GET all users
app.get('/users', passport.authenticate('jwt', { session: false }), (req, res) => {
  Users.find()
    .then((users) => {
      res.status(201).json(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});

//GET user by name
app.get('/users/name/:Username', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { Username } = req.params;
  Users.findOne({ Username })
    .then(user => {
      if (!user) {
        res.status(400).send(`Username ${Username} not found`);
      }
      res.json(user);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});

//GET user by id
app.get('/users/:_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { _id } = req.params;
  Users.findOne({ _id })
    .then(user => {
      if (!user) {
        res.status(400).send(`User id ${_id} not found`);
      }
      res.json(user);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});

//POST or create a new user
app.post('/users',
  // Validation logic here for request
  //you can either use a chain of methods like .not().isEmpty()
  //which means "opposite of isEmpty" in plain english "is not empty"
  //or use .isLength({min: 5}) which means
  //minimum value of 5 characters are only allowed
  [
    check('Username', 'Username is required and should be minimum 5 chars').isLength({min: 5}),
    check('Username', 'Username should contain alphanumeric characters only').isAlphanumeric(),
    check('Password', 'Password is required').not().isEmpty(),
    check('Email', 'Please enter a valid Email').isEmail()
  ], (req, res) => {
  // check the validation object for errors
  let errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { Username, Email, Birthday, FavoriteMovies } = req.body;
  const Password = Users.hashPassword(req.body.Password);

  Users.findOne({ Username })
    .then(user => {
      if (user) {
        return res.status(400).send(`Username: ${Username} already exists`);
      } else {
        Users
          .create({
            Username,
            Password,
            Email,
            Birthday,
            FavoriteMovies
          })
          .then( user => res.status(201).json(user))
          .catch(error => {
            console.error(error);
            res.status(500).send('Error: ' + error);
          })
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Error: ' + error);
    });
});


//PUT or update a user by name
app.put('/users/name/:Username', passport.authenticate('jwt', { session: false }),
  [
    check('Username', 'Username is required and should be minimum 5 chars').isLength({min: 5}).optional(),
    check('Username', 'Username should contain alphanumeric characters only').isAlphanumeric().optional(),
    check('Password', 'Password is required').not().isEmpty().optional(),
    check('Email', 'Please enter a valid Email').isEmail().optional()
  ], (req, res) => {

  // check the validation object for errors
  let errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  
  const { Username, Email, Birthday, FavoriteMovies } = req.body
  let { Password } = req.body;

  if (Password) {
    Password = Users.hashPassword(Password)
  } 

  Users.findOneAndUpdate({ Username: req.params.Username },
    {
      $set:
      {
        Username,
        Password,
        Email,
        Birthday,
        FavoriteMovies
      }
    },
  { new: true }, // This line makes sure that the updated document is returned
  (err, updatedUser) => {
    if(err) {
      console.error(err);
      res.status(500).send('Error: ' + err);
    } else {
      if (!updatedUser) {
        res.status(400).send(`Username ${Username} was not found`);
      } else {
        res.json(updatedUser);
      }
    }
  });
});

//DELETE a user by name
app.delete('/users/name/:Username', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { Username } = req.params;
  Users.findOneAndRemove({ Username })
    .then(user => {
      if (!user) {
        res.status(400).send(`Username ${Username} was not found`);
      } else {
        res.status(200).send(`Username ${Username} was deleted.`);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});

//POST a fav movie for a user
app.post('/users/:Username/:MovieID', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { Username, MovieID } = req.params;

  Users.findOneAndUpdate({ Username },
    { $addToSet: { FavoriteMovies: MovieID } },
    { new: true }, // This line makes sure that the updated document is returned
    (err, updatedUser) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error: ' + err);
      } else {
        res.json(updatedUser);
      }
    });
  });

//DELETE a movie from the users fav movie list
app.delete('/users/:Username/:MovieID', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { Username, MovieID } = req.params;

  Users.findOneAndUpdate({ Username },
    { $pull: { FavoriteMovies: MovieID } },
    { new: true }, // return updated document
    (err, updatedUser) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error: ' + err);
      } else {
        res.json(updatedUser);
      }
  });
});

//GET documentation
app.get('/documentation', (req, res) => {                  
    res.sendFile('public/documentation.html', { root: __dirname });
});


//error handling middleware function
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('An Error was encountered!');
});
// listen for requests
app.listen(port, () => {
    console.log(`Your app is listening on port ${port}.`);
})