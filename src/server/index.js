var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();
var AYLIENTextAPI = require('aylien_textapi');

// set aylien API credentials
var textapi = new AYLIENTextAPI({
  application_id: apiCred.env.API_ID,
  application_key: apiCred.env.API_KEY
  
});
console.log(`Your API key is ${apiCred.env.API_KEY}`);

textapi.sentiment({
    'text': 'John is a very good football player!'
  }, function(error, response) {
    if (error === null) {
      console.log(response);
    }
  });
  

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
