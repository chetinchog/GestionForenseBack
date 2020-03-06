const functions = require("firebase-functions");
const Mongo = require("../../lib/mongo-lib");
const HTTPLib = require("../../lib/http-lib");

const Evidence = require("../../models/Evidence");

const ListEvidence = functions.https.onRequest(async (req, res) => {
  try {
    await Mongo.connect();
    const response = await Mongo.collection(Evidence.self)
      .find()
      .sort({ updatedAt: -1 });
    const listEvidence = await Mongo.list(response);

    HTTPLib.response(req, res, listEvidence);
  } catch (e) {
    HTTPLib.response(req, res, e, 500);
  }
});

module.exports = ListEvidence;
