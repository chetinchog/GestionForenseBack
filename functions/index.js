const functions = require("firebase-functions");

exports.check = functions.https.onRequest((request, response) => {
  response.send("Connected!");
});

exports.newevidence = require("./src/Evidences/NewEvidence");
exports.listevidence = require("./src/Evidences/ListEvidence");
exports.viewevidence = require("./src/Evidences/ViewEvidence");
exports.approveevidence = require("./src/Evidences/ApproveEvidence");

exports.login = require("./src/Security/Login");
