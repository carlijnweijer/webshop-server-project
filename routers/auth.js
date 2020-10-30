const { Router } = require("express");
const { toJWT, toData } = require("../auth/jwt");
const User = require("../models").user;

const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || email === " ") {
      res.status(400).send("must provide an emailaddress");
    } else if (!password || password === " ") {
      res.status(400).send("must provide a password");
    } else {
      const user = await User.findOne({ where: { email: email } });
      if (!user) {
        res.satus(400).send("User with that email doesn't exist");
      } else if (password === user.password) {
        const jwt = toJWT({ userId: user.id });
        res.send({ jwt });
      } else {
        res.status(400).send("Password was incorrect");
      }
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
