const response = (res, message, code = undefined) => {
  res.set("Allow", "*");
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  res.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  res.set(
    "Access-Control-Allow-Headers",
    "Origin, Content-Type, X-Auth-Token, Access-Control-Allow-Headers, Authorization, X-Requested-With"
  );
  res.set("Access-Control-Allow-Credentials", "true");
  res.status(code || 200).send(message);
};

module.exports = { response };
