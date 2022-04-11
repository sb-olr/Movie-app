// YT LearnWebCode

const express = require('express');
app = express();

// app.get('/', (req, res) => {
//     res.send('Welcome to our homepage.')
// })

app.get('/', (req, res) => {
    res.send(`
    <h1>What color is the sky on a clear day?</h1>
    <form action="/result" method="POST">
        <input type="text name="color">
        <button>Submit</>
    </form>
    `)
})

app.get('/about', (req, res) => {
    res.send('Welcome to our about page.')
})

app.get('/result', (req, res) => {
    res.send('why are you trying to acccess this page.')
})

app.post('/result', (req, res) => {
    res.send('Thanks for submitting the answer.')
})

app.listen(3000)