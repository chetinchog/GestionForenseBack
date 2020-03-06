const response = (res, message, code = undefined) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.status(code || 200).send(message);
};

module.exports = { response };
