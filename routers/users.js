const { Router } = require("express");
router = new Router();

const User = require("../models").user;

router.get("/", async (req, res, next) => {
  res.send("hello user");
});

module.exports = router;
