const ping = require('net-ping');
const router = require('express').Router();

router.get('/valid/:siteName', (req, res, next) => {
    const session = ping.createSession()
    const pingPromise = new Promise((resolve, reject) => {
        session.pingHost(req.params.siteName, (error, target) => {
            if(error) {
                reject(new Error(error instanceof ping.RequestTimedOutError ? 'Invalid site' : error.toString()))
            } else resolve(target)
        })
    })
    pingPromise.then(result => {
        console.log(result)
        res.status(200).send(null)
    }).catch(error => {
        console.log(error)
        res.status(400).send(null)
    })
    // ping.promise.probe(req.params.siteName, { timeout: 3 })
    // .then(result => {
    //     console.log(result)
    //     res.send({alive: result.alive})
    // })
    // .catch(error => console.log(error));
});

module.exports = router;
