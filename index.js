const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

var path = require('path');
app.use(express.static(path.join(__dirname, 'static')));

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// app.use(express.static('static'))

app.get('/', function(req, res){
    res.sendFile('index.html');
});

app.post('/api/hello', (req, res) => {
    // res.json({requestBody: req.body})  // <==== req.body will be a parsed JSON object
    return res.type('html').status(200)
        .send(`<div>hello, ${req.body.name}</div>`)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})