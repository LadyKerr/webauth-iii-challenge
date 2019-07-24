const jwt = require("jsonwebtoken");

const secrets = require("../config/secrets");

module.exports = (req, res, next) => {
  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json(err);
      } else {
        req.decodedJwt = decodedToken;
        console.log("decoded token", req.decodedJwt);
        next();
      }
    });
  } else {
    res.status(401).json({ message: "You shall not pass" });
  }
};

//This is the restricted global middleware.
