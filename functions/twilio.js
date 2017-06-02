const twilio = require('twilio');

const accountSid = 'AC2433ed8ddf4805762ed960cb8a310fb2';
const authToken = '2346f62937f88edc43d5db373c2f0240';

module.exports = new twilio.Twilio(accountSid, authToken);
