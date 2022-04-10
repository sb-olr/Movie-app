const fs = require('fs');

fs.readFile('./file.txt', 'utf-8', (err, data) => {
  if (err) { throw err; }
  console.log('data: ', data);
});


const url = require('url');
let addr = 'http://localhost:8080/default.html?year=2017&month=february';
let q = url.parse(addr, true);

console.log('q:', q);
console.log('host:', q.host); // returns 'localhost:8080'
console.log('pathname:', q.pathname); // returns '/default.html'
console.log('search:', q.search); // returns '?year=2017&month=february'

let qdata = q.query; // returns an object: { year: 2017, month: 'february' }
console.log('query:', qdata); // returns 'february'
console.log('query.month:', qdata.month); // returns 'february'