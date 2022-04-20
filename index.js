const express = require('express'),
  morgan = require('morgan'),
  fs = require('fs'), // import built in node modules fs and path 
  path = require('path'),
  uuid = require('uuid'),
  bodyParser = require('body-parser');

const port = 3000;

const app = express();
app.use(bodyParser.json());

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
    favMovies: []
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
app.get('/genre/:genreName', (req, res) => {
  const { genreName } = req.params;
  const movie = movies.find(movie => movie.genre.name === genreName);
  if (!movie) {
    res.status(400).send(`genre ${genreName} not found`);
  }

  res.status(200).json(movie.genre);
});

//GET director
app.get('/directors/:directorName', (req, res) => {
  const { directorName } = req.params;
  const movie = movies.find(movie => movie.director.name === directorName);
  if (!movie) {
    res.status(400).send(`director ${directorName} not found`);
  }

  res.status(200).json(movie.director);
});

//GET all users
app.get('/users', (req, res) => {
  res.status(200).json(users);
});

//GET user by name
app.get('/users/:name', (req, res) => {
  const { name } = req.params;
  const user = users.find(user => user.name === name);
  if (!user) {
    res.status(400).send(`user ${name} not found`);
  }

  res.status(200).json(user);
});

//GET user by id
app.get('/users/id/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find(user => user.id == id);
  if (!user) {
    res.status(400).send(`user id ${id} not found`);
  }

  res.status(200).json(user);
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