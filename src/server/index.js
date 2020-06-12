const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config();
var AYLIENTextAPI = require('aylien_textapi');

// set aylien API credentials
var textapi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});
console.log(`Your API key is ${process.env.API_KEY}`);

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'));

console.log(__dirname);

app.post("/api", function(req, res) {
  const { text } = req.body;
  console.log("Request to '/api' endpoint is,", text);
  textApi.sentiment({ text }, function (error, response, remaining) {
    console.log("Aylien Callback", response, remaining);
    res.send(response);
  });
});

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8899, function () {
    console.log('Example app listening on port 8899!')
})
