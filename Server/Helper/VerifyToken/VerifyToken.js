const crypto = require('crypto');

function base64UrlEncode(str) {
    return Buffer.from(str)
        .toString('base64')
        .replace(/=/g, '')      
        .replace(/\+/g, '-')      
        .replace(/\//g, '_');     
}

function createHmacSignature(secret, message) {
    return crypto
        .createHmac('sha256', secret)
        .update(message)
        .digest('base64')
        .replace(/=/g, '')       
        .replace(/\+/g, '-')     
        .replace(/\//g, '_');    

}
function verifyToken(token, secret) {
    const [headerB64, payloadB64, signature] = token.split('.');

    const unsignedToken = `${headerB64}.${payloadB64}`;

    const expectedSignature = createHmacSignature(secret, unsignedToken);

    if (expectedSignature === signature) {
        const payloadJson = Buffer.from(payloadB64, 'base64').toString('utf-8');
        const payload = JSON.parse(payloadJson);
        return { valid: true, payload };
    } else {
        return { valid: false, message: "Token verification failed" };
    }
}


module.exports =verifyToken;
