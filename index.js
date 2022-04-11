const express = require('express'),
    morgan = require('morgan'),
    fs = require('fs'), // import built in node modules fs and path 
    path = require('path');

const port = 3000;

const app = express();
app.use(express.static('public')); //to specify static files folder
  // create a write stream (in append mode)
  // a ‘log.txt’ file is created in root directory
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), {flags: 'a'})
  
  // setup the logger
app.use(morgan('combined', {stream: accessLogStream}));

let topMovies = [
    {
        id: 0,
        title: 'The Shawshank Redemption',
        director: 'Frank Darabont'
    },
    {
        id: 1,
        title: 'The Godfather',
        director: 'Francis Ford Coppola'
    },
    {
        id: 2,
        title: 'The Dark Knight',
        director: 'Christopher Nolan'
    },
    {
        id: 3,
        title: 'The Lord of the Rings: The Return of the King',
        director: 'Peter Jackson'
    },
    {
        id: 4,
        title: 'Schindler\'s List',
        director: 'Steven Spielberg'
    },
    {
        id: 5,
        title: 'The Godfather: Part II',
        director: 'Francis Ford Coppola'
    },
    {
        id: 6,
        title: '12 Angry Men',
        director: 'Sidney Lumet'
    },
    {
        id: 7,
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        director: 'Peter Jackson'
    },
    {
        id: 8,
        title: 'Pulp Fiction',
        director: 'Quentin Tarantino'
    },
    {
        id: 9,
        title: 'Inception',
        director: 'Christopher Nolan'
    }
    ];

  // GET requests
  app.get('/', (req, res) => {
    res.send('Welcome to the myFlix app!!!');
  });
  
  app.get('/documentation', (req, res) => {                  
    res.sendFile('public/documentation.html', { root: __dirname });
  });
  
  app.get('/movies', (req, res) => {
    res.json(topMovies);
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