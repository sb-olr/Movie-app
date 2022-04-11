const express = require('express'),
    morgan = require('morgan');

const app = express();
app.use(morgan('common'));

const port = 3000;

let topBooks = [
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
    res.send('Welcome to my book club!');
  });
  
  app.get('/documentation', (req, res) => {                  
    res.sendFile('public/documentation.html', { root: __dirname });
  });
  
  app.get('/books', (req, res) => {
    res.json(topBooks);
  });
  
  
  // listen for requests
  app.listen(port, () => {
    console.log(`Your app is listening on port ${port}.`);
  })