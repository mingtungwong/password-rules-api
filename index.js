const app = require('express')();
const mongoClient = require('mongodb').MongoClient;
const config = require('./config.json');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

const port = process.env.PORT || 3000;
let db;

mongoClient.connect(config.mongodbURL, (error, database) => {
    if(error) throw error;
    else {
        db = database;
        app.listen(port, () => console.log("I'm listening"));
    }
})


