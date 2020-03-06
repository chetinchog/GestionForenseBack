const functions = require("firebase-functions");
const Mongo = require("../../lib/mongo-lib");
const HTTPLib = require("../../lib/http-lib");

const User = require("../../models/User");
const Role = require("../../models/Role");

const Login = functions.https.onRequest(async (req, res) => {
  try {
    const { username, password } = req.body;

    await Mongo.connect();
    const user = await Mongo.collection(User.self).findOne({
      username,
      password
    });
    if (!user) {
      HTTPLib.response(res, "User not found!", 400);
      return;
    }

    const role = await Mongo.collection(Role.self).findOne({
      _id: Mongo.ObjectId(user.role)
    });
    if (!role) {
      HTTPLib.response(res, "Role not found!", 400);
      return;
    }
    user.role = role.name;

    HTTPLib.response(res, user);
  } catch (e) {
    HTTPLib.response(res, e, 500);
  }
});

module.exports = Login;
