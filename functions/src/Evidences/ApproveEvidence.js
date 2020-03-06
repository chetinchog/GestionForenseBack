const functions = require("firebase-functions");
const Mongo = require("../../lib/mongo-lib");
const HTTPLib = require("../../lib/http-lib");

const Evidence = require("../../models/Evidence");
const { EvidenceStates } = require("../../models/StatesEnum");

const ApproveEvidence = functions.https.onRequest(async (req, res) => {
  try {
    const { _id, state } = req.body;
    const newState = state ? EvidenceStates.ACCEPTED : EvidenceStates.REJECTED;
    await Mongo.connect();
    await Mongo.collection(Evidence.self).updateOne(
      { _id: Mongo.ObjectId(_id) },
      {
        $set: {
          state: newState
        }
      }
    );

    HTTPLib.response(res, "Evidence.state: " + newState);
  } catch (e) {
    HTTPLib.response(res, e, 500);
  }
});

module.exports = ApproveEvidence;
