const winston = require('winston');

//function catches any errors in the request processing pipeline
module.exports = function(err, req, res, next){
    winston.error(err.message, err);
    res.status(500).send('something failed');
}