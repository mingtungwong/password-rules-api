const ping = require('ping');
const router = require('express').Router();

router.get('/valid/:siteName', (req, res, next) => {
    ping.promise.probe(req.params.siteName, { timeout: 3 })
    .then(result => {
        console.log(result)
        res.send({alive: result.alive})
    })
    .catch(error => console.log(error));
});

module.exports = router;
