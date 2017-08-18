const router = require('express').Router();

router.get('/site', (req, res, next) => {
    site.find().toArray((error, results) => res.send(error ? error : results));
})

router.get('/search/:query', (req, res, next) => {
    site.find({site: new RegExp(req.params.query)}).toArray((error, results) => res.send(error ? error: results));
})

router.get('/site/:siteName', (req, res, next) => {
    site.find({site: req.params.siteName}).toArray((error, results) => res.send(error ? error : results));
})

router.post('/site', (req, res, next) => {
    site.save(req.body, (error, result) => res.send(error ? error : "Done"));
})

router.put('/site/:siteName', (req, res, next) => {

})

router.delete('/site/:siteName', (req, res, next) => {
    
})

module.exports = router;
