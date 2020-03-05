const functions = require("firebase-functions");
const Mongo = require("../../lib/mongo-lib");

const Evidence = require("../../models/Evidence");

const ListEvidence = functions.https.onRequest(async (req, res) => {
  await Mongo.connect();
  const response = await Mongo.collection(Evidence.self).find();
  const listEvidence = await Mongo.list(response);
  res.set("Access-Control-Allow-Origin", "*");
  res.send(listEvidence);
});

module.exports = ListEvidence;
