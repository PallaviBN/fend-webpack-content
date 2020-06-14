const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config();
var AYLIENTextAPI = require('aylien_textapi');

// set aylien API credentials
var textApi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("dist"));

// designates what port the app will listen to for incoming requests
app.listen(8899, function () {
    console.log('Example app listening on port 8899!')
})

//GET route
app.get('/', function (req, res) {
  res.sendFile("index.html")
})

//POST route
app.post("/resultFromAPI", function(req, res) {
  const text  = req.body.formText;
  console.log("Request= ", text);
  textApi.sentiment({ text }, (error, resp) => {
  console.log("Response= ", resp);
  res.send(resp);
  });
});


