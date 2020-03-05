const functions = require("firebase-functions");
const Mongo = require("../../lib/mongo-lib");

const Evidence = require("../../models/Evidence");

const ListEvidence = functions.https.onRequest(async (req, res) => {
  const { _id } = req.query;
  await Mongo.connect();
  const evidence = await Mongo.collection(Evidence.self).findOne({
    _id: Mongo.ObjectId(_id)
  });
  res.set("Access-Control-Allow-Origin", "*");
  res.send(evidence);
});

module.exports = ListEvidence;
