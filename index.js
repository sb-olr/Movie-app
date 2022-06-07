const express = require('express'),
  morgan = require('morgan'),
  fs = require('fs'),
  path = require('path'),
  uuid = require('uuid'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose');

const port = process.env.port || 3000;
const dbname = process.env.dbname || 'myFlixDB';
mongoose.connect(`mongodb://localhost:27017/${dbname}`, { useNewUrlParser: true, useUnifiedTopology: true });

const Models = require('./models.js');

const Movies = Models.Movie;
const Users = Models.User;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public')); //to specify static files folder
  // create a write stream (in append mode)
  // a ‘log.txt’ file is created in root directory
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), {flags: 'a'})
  
  // setup the logger
app.use(morgan('combined', {stream: accessLogStream}));

let movies;

  // home
  app.get('/', (req, res) => {
    res.status(200).send('Welcome to the myFlix app!!!');
  });

  //GET all movies
  app.get('/movies', (req, res) => {
    Movies.find()
    .then(movies => res.status(201).json(movies))
    .catch(err => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});


//GET movie by name
app.get('/movies/:title', (req, res) => {
  const { title } = req.params;
  const movie = movies.find(movie => movie.title === title);
  if (!movie) {
    res.status(400).send(`title ${title} not found`);
}

  res.status(200).json(movie);
});
  
//GET genre
app.get('/movies/genre/:genreName', (req, res) => {
  const { genreName } = req.params;
  const movie = movies.find(movie => movie.genre.name === genreName);
  if (!movie) {
    res.status(400).send(`genre ${genreName} not found`);
  }

  res.status(200).json(movie.genre);
});

//GET director
app.get('/movies/directors/:directorName', (req, res) => {
  const { directorName } = req.params;
  const movie = movies.find(movie => movie.director.name === directorName);
  if (!movie) {
    res.status(400).send(`director ${directorName} not found`);
  }

  res.status(200).json(movie.director);
});
// });

//GET all users
app.get('/users', (req, res) => {
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
app.get('/users/name/:Username', (req, res) => {
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
app.get('/users/:_id', (req, res) => {
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
/* We’ll expect JSON in this format
{
  Username: String, *
  Password: String, *
  Email: String, *
  Birthday: Date
}*/
app.post('/users', (req, res) => {
  const { Username, Password, Email, Birthday, FavoriteMovies } = req.body;

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
app.put('/users/name/:Username', (req, res) => {
  const { Username, Password, Email, Birthday, FavoriteMovies } = req.body;
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

//DElETE a user by name
app.delete('/users/name/:Username', (req, res) => {
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
// Add a movie to a user's list of favorites
app.post('/users/name/:Username/movies/:MovieID', (req, res) => {
  const { Username, MovieID } = req.params;
  Users.findOneAndUpdate({ Username }, {
     $push: { FavoriteMovies: MovieID }
   },
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
app.post('/users/:id/:movie', (req, res) => {
  const {id, movie} = req.params;
  let user = users.find(user => user.id == id);

  if (!user) {
      res.status(400).send(`user ${id} not found`);
  }

  user.favMovies.push(movie);
  res.status(201).json(user);

})

//DELETE a movie from the users fav movie list

// app.delete('/users/:id/:movie', (req, res) => {
//   const { id, movie } = req.params;
//   let user = users.find(user => user.id == id);

//   if (!user) {
//       res.status(400).send(`user ${id} not found`);
//   }

//   user.favMovies = user.favMovies.filter(favMovie => favMovie !== movie);
//   // user.favMovies = updatedMovies;
//   res.status(200).json(user);

// })

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