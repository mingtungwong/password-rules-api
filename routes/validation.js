const router = require('express').Router;

router.get('/valid/:siteName', (req, res, next) => {
    ping.promise.probe(req.query.siteName)
    .then(result => res.send({alive: res.alive}));
});

module.exports = router;