const functions = require("firebase-functions");
const Mongo = require("../../lib/mongo-lib");
const HTTPLib = require("../../lib/http-lib");

const Evidence = require("../../models/Evidence");

const ListEvidence = functions.https.onRequest(async (req, res) => {
  await Mongo.connect();
  const response = await Mongo.collection(Evidence.self).find();
  const listEvidence = await Mongo.list(response);

  HTTPLib.response(res, listEvidence);
});

module.exports = ListEvidence;
