// keys.js figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
    // we are inn production - return the prod set
    module.exports = require('./prod');
} else {
    // we are inn development - return the dev set
    module.exports = require('./dev');
}