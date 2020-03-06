const cors = require("cors")({ origin: true });

const response = (req, res, message, code = undefined) => {
  cors(req, res, () => {
    res.status(code || 200).send(message);
  });
};

module.exports = { response };
