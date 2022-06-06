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

let users = [
  {
    id: 1,
    name: "User1",
    favMovies: []
  },
  {
    id: 2,
    name: "User2",
    favMovies: ['test1', 'test2', 'test3']
  },
]

let movies = [
    {
        id: 0,
    title: 'The Shawshank Redemption',
        genre: {name: 'drama'},
    director: { 'name': 'Frank Darabont' }
    },
    {
        id: 1,
        title: 'The Godfather',
        genre: {name: 'drama'},
      director: { 'name': 'Francis Ford Coppola' }
    },
    {
        id: 2,
      title: 'The Dark Knight',
        genre: {name: 'drama'},
      director: { 'name': 'Christopher Nolan' }
    },
    {
      id: 3,
      title: 'The Lord of the Rings: The Return of the King',
      genre: {name: 'drama'},
      director: { 'name': 'Peter Jackson' }
    },
    {
      id: 4,
      title: 'Schindler\'s List',
      genre: {name: 'drama'},
      director: { 'name': 'Steven Spielberg' }
    },
    {
      id: 5,
      title: 'The Godfather: Part II',
      genre: {name: 'drama'},
      director: { 'name': 'Francis Ford Coppola' }
    },
    {
        id: 6,
        title: '12 Angry Men',
        genre: {name: 'drama'},
      director: { 'name': 'Sidney Lumet' }
    },
    {
        id: 7,
      title: 'The Lord of the Rings: The Fellowship of the Ring',
        genre: {name: 'drama'},
      director: { 'name': 'Peter Jackson' }
    },
    {
        id: 8,
      title: 'Pulp Fiction',
        genre: {name: 'drama'},
      director: { 'name': 'Quentin Tarantino' }
    },
    {
        id: 9,
      title: 'Inception',
      genre: { name: 'drama' },
      director: { 'name': 'Christopher Nolan' }
    }
    ];

  // GET requests for movies
app.get('/', (req, res) => {
    res.status(200).send('Welcome to the myFlix app!!!');
  });

  //GET all movies
  app.get('/movies', (req, res) => {
    res.status(200).json(movies);
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
  const { Username, Password, Email, Birthday } = req.params;

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
            Birthday
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


//PUT or update a user name
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;

  let user = users.find(user => user.id == id);

  if (!user) {
    res.status(400).send("no such user");
  }
  user.name = updatedUser.name;
  res.status(200).json(user);
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