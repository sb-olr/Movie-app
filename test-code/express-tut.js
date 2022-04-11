// YT LearnWebCode

const express = require('express');
app = express();

app.get('/', (req, res) => {
    res.send('Welcome to our homepage.')
})

app.get('/about', (req, res) => {
    res.send('Welcome to our about page.')
})


app.listen(3000)