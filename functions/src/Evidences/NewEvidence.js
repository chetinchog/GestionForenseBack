const functions = require("firebase-functions");
const Mongo = require("../../lib/mongo-lib");

const Evidence = require("../../models/Evidence");

const NewEvidence = functions.https.onRequest(async (req, res) => {
  await Mongo.connect();
  const response = await Mongo.collection(Evidence.self).insertOne(
    new Evidence(req.body)
  );
  const newEvidence = Mongo.inserted(response);
  res.set("Access-Control-Allow-Origin", "*");
  res.send(newEvidence);
});

module.exports = NewEvidence;
