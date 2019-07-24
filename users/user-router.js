const router = require("express").Router();

const Users = require("./user-model");
const restricted = require("../auth/auth-middleware");

router.get("/", restricted, (req, res) => {
  Users.find()
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({ message: "Restricted access." });
    });
});

module.exports = router;
