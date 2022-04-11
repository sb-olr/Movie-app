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
      title: 'Harry Potter and the Sorcerer\'s Stone',
      author: 'J.K. Rowling'
    },
    {
      title: 'Lord of the Rings',
      author: 'J.R.R. Tolkien'
    },
    {
      title: 'Twilight',
      author: 'Stephanie Meyer'
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