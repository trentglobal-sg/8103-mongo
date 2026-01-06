// REQUIRES
const express = require('express');
require('dotenv').config();  // put the variables in the .env file into process.env
const cors = require('cors');
const { connect } = require("./db");

// SETUP EXPRESS
const app = express();
app.use(cors()); // enable CORS for API
app.use(express.json()); // tell Express that we are sending and reciving JSON

// SETUP DATABASE
const mongoUri = process.env.MONGO_URI;
const dbName = "8103_recipe_book";

async function main() {
    const db = await connect(mongoUri, dbName);

    // ROUTES
    app.get('/test', function (req, res) {
        res.json({
            "message": "Hello world"
        })
    });

    app.get('/recipes', async function(req,res){
        const recipes = await db.collection('recipes').find().project({
            name: 1, cuisine: 1, tags: 1, prepTime: 1
        }).toArray();
        res.json({
            "recipes": recipes
        })
    })
}
main();



// START SERVER
app.listen(3000, function () {
    console.log("Server has started");
})