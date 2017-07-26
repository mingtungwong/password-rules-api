const app = require('express')();
const mongoClient = require('mongodb').MongoClient;
const config = require('./config.json');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

const port = process.env.PORT || 3000;
let db;
let site;

mongoClient.connect(config.mongodbURL, (error, database) => {
    if(error) throw error;
    else {
        db = database;
        site = db.collection('site');
        app.listen(port, () => console.log("I'm listening"));
    }
})

app.get('/site', (req, res, next) => {
    site.find().toArray((error, results) => res.send(error ? error : results));
})

app.get('/site/:siteName', (req, res, next) => {
    site.find({site: req.params.siteName}).toArray((error, results) => res.send(error ? error : results));
})

app.post('/site', (req, res, next) => {
    site.save(req.body, (error, result) => res.send(error ? error : "Done"));
})

app.put('/site/:siteName', (req, res, next) => {

})

app.delete('/site/:siteName', (req, res, next) => {
    
})



