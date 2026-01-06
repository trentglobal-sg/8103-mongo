// REQUIRES
const express = require('express');
require('dotenv').config();  // put the variables in the .env file into process.env
const cors = require('cors');

// SETUP EXPRESS
const app = express();
app.use(cors()); // enable CORS for API
app.use(express.json()); // tell Express that we are sending and reciving JSON

// ROUTES
app.get('/test', function(req,res){
    res.send("It's alive");
})

// START SERVER
app.listen(3000, function(){
    console.log("Server has started");
})