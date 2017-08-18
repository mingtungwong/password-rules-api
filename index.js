const app = require('express')();
const mongoClient = require('mongodb').MongoClient;
const config = require('./config.json');
const bodyParser = require('body-parser');

const siteRouter = require('./routes/site');
const validationRouter = require('./routes/validation');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 1337;
const options = {
  keepAlive: 1,
  connectTimeoutMS: 30000
};
let db;
let site;

mongoClient.connect(config.mongodbURL, options, (error, database) => {
    if(error) throw error;
    else {
        db = database;
        site = db.collection('site');
        app.listen(port, () => console.log("I'm listening"));
    }
})

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(siteRouter);
app.use(validationRouter);




