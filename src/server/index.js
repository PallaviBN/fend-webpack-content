const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config();
var AYLIENTextAPI = require('aylien_textapi');

// set aylien API credentials
var textApi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  // application_id: "68837b99",
  application_key: process.env.API_KEY
  // application_key: "0c18469543844e03b477be1a884e87bc"
});
console.log(`Your API key is ${process.env.API_KEY}`);

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("dist"));

app.post("/api", function(req, res) {
  const text  = req.body.formText;
  console.log("Request to '/api' endpoint is,", text);
  textApi.sentiment({ text }, (error, response, remaining) => {
    console.log("Aylien Callback", response, remaining);
    res.send(response);
  });
});

app.get('/', function (req, res) {
    res.sendFile('index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8899, function () {
    console.log('Example app listening on port 8899!')
})
