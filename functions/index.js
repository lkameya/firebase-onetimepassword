const admin = require('firebas-admin');
const functions = require('firebase-functions');
const createUser = require('./create-user');
const serviceAccount = require('./service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://one-time-password-35e10.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);

