// Create the function that converts a given string into an md5 hash. The return value should be encoded in hexadecimal.

const crypto = require('crypto');

function passHash(str) {
    return crypto.createHash('md5').update(str).digest('hex')
}
