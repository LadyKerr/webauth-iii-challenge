const router = require("express").Router();

const Users = require("./user-model");
const restricted = require("../auth/auth-middleware");

router.get("/", restricted, (req, res) => {
  console.log("req.jwtToken", req.jwtToken);

  Users.find()
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({ message: "You shall not pass." });
    });
});

module.exports = router;
