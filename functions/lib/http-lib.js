const response = (res, message, code = undefined) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  res.set("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token");
  res.status(code || 200).send(message);
};

module.exports = { response };
