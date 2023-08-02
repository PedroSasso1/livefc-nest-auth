const base64url = require('base64-url');
const crypt = require('crypto');

const header = {
  alg: 'HS256', // Hmac + sha256
  typ: 'JWT',
};

const payload = {
  username: 'user@user.com',
  name: 'Pedro Sasso',
  exp: new Date().getTime(),
};

// header + payload + key
const headerEncoded = base64url.encode(JSON.stringify(header));
const payloadEncoded = base64url.encode(JSON.stringify(payload));

console.log(headerEncoded, payloadEncoded);

const key = 'abcd123456';

const signature = crypt
  .createHmac('sha256', key)
  .update(`${headerEncoded}.${payloadEncoded}`)
  .digest('bin');

console.log(
  `${headerEncoded}.${payloadEncoded}.${base64url.encode(signature)}`,
);
