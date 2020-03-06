const functions = require("firebase-functions");
const Mongo = require("../../lib/mongo-lib");
const HTTPLib = require("../../lib/http-lib");

const Evidence = require("../../models/Evidence");

const NewEvidence = functions.https.onRequest(async (req, res) => {
  try {
    const reqEvidence = new Evidence(req.body);
    if (
      !Object.keys(reqEvidence)
        .filter(key => key !== "_id")
        .reduce((state, key) => (reqEvidence[key] ? state : false), true)
    ) {
      HTTPLib.response(req, res, "Missing required fields!", 400);
      return;
    }

    await Mongo.connect();
    const response = await Mongo.collection(Evidence.self).insertOne(
      reqEvidence
    );
    const newEvidence = Mongo.inserted(response);

    HTTPLib.response(req, res, newEvidence);
  } catch (e) {
    HTTPLib.response(req, res, e, 500);
  }
});

module.exports = NewEvidence;
