/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import * as functions from 'firebase-functions';
// import * as admin from 'firebase-admin';
import express = require('express')
import cors = require('cors');
import { onRequest } from "firebase-functions/v2/https";

const app: express.Application = express();
const port = 3000;

app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}));

// admin.initializeApp({
//   credential: admin.credential.applicationDefault(),
//   databaseURL: 'https://thats-my-slam.firebaseio.com/'
// }); 

app.listen(port, () => {
  console.log('Listening to port: ' + port);
});

app.get('/test', (req, res) => {
  res.json({result: "test ABC"});
});

exports.app = functions.https.onRequest(app);

// public URL: https://us-central1-thats-my-slam.cloudfunctions.net/getData
exports.getData = onRequest(async (req, res) => {
  res.json({result: "test 123"});
});

// import * as logger from "firebase-functions/logger";
// import {initializeApp} from "firebase-admin/app";
// import {getFirestore} from "firebase-admin/firestore";

// initializeApp();

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// Take the text parameter passed to this HTTP endpoint and insert it into
// Firestore under the path /messages/:documentId/original
// exports.addmessage = onRequest(async (req, res) => {
//   // Grab the text parameter.
//   const original = req.query.text;
//   // Push the new message into Firestore using the Firebase Admin SDK.
//   const writeResult = await getFirestore()
//     .collection("messages")
//     .add({original: original});
//   // Send back a message that we've successfully written the message
//   res.json({result: `Message with ID: ${writeResult.id} added.`});
// });
