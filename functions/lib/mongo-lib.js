const mongodb = require("mongodb");

const { ObjectId } = mongodb;

const uri =
  "mongodb+srv://chetinchog:chetinchog@ictg-aola2.gcp.mongodb.net/test?retryWrites=true&w=majority";
const nameDB = "gestionforense";
let client = null;

const clean = obj => JSON.parse(JSON.stringify(obj));

const connect = async () => {
  const reusedConnection = client != null;
  if (client == null) {
    client = await mongodb.MongoClient.connect(uri, {
      useUnifiedTopology: true
    });
  }
  !reusedConnection && console.log("New Connection!");
  return client;
};

const collection = name => client.db(nameDB).collection(name);

const inserted = response =>
  clean(response).ops.find(
    op => op._id.toString() === response.insertedId.toString()
  );

const list = async response => await response.toArray();

module.exports = { connect, collection, ObjectId, inserted, list };
