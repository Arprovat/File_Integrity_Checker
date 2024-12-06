
function base64UrlEncode(str) {
    return Buffer.from(str)
        .toString('base64')
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
}

const crypto = require('crypto');

function createHmacSignature(secret, message) {
    return crypto
        .createHmac('sha256', secret)
        .update(message)
        .digest('base64')
        .replace(/=/g, '')       // Remove padding
        .replace(/\+/g, '-')      // Replace + with -
        .replace(/\//g, '_');     // Replace / with _
}


function createJWT(payload, secret) {

    const header = {
        alg: "HS256",
        typ: "JWT"
    };

    const encodedHeader = base64UrlEncode(JSON.stringify(header));
    const encodedPayload = base64UrlEncode(JSON.stringify(payload));


    const unsignedToken = `${encodedHeader}.${encodedPayload}`;

    const signature = createHmacSignature(secret, unsignedToken);

    const jwt = `${unsignedToken}.${signature}`;

    return jwt;
}



module.exports = createJWT
