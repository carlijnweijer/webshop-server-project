const { Router } = require("express");
router = new Router();

const User = require("../models").user;

router.get("/", async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    res.send(allUsers);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      password,
      phone,
      email,
      address,
      isAdmin,
    } = req.body;
    if (!firstName || !lastName || !password || !email || !address) {
      res.status(400).send("Please fill in all the forms!");
    } else {
      const newUser = await User.create({
        firstName,
        lastName,
        password,
        email,
        address,
        phone,
        isAdmin,
      });
      res.json(newUser);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
