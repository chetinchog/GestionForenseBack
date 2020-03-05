const functions = require("firebase-functions");

exports.check = functions.https.onRequest((request, response) => {
  response.send("Connected!");
});

exports.newevidence = require("./src/Evidences/NewEvidence");
exports.listevidence = require("./src/Evidences/ListEvidence");
exports.viewevidence = require("./src/Evidences/ViewEvidence");
