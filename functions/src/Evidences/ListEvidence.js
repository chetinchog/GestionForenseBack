const functions = require("firebase-functions");
const Mongo = require("../../lib/mongo-lib");
const HTTPLib = require("../../lib/http-lib");

const Evidence = require("../../models/Evidence");

const ListEvidence = functions.https.onRequest(async (req, res) => {
  try {
    await Mongo.connect();
    const response = await Mongo.collection(Evidence.self).find();
    const listEvidence = await Mongo.list(response);

    HTTPLib.response(res, listEvidence);
  } catch (e) {
    HTTPLib.response(res, e, 500);
  }
});

module.exports = ListEvidence;
