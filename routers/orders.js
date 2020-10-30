const { Router } = require("express");
const router = new Router();
const { toJWT, toData } = require("../auth/jwt");

const User = require("../models").user;
const Order = require("../models").order;

router.post("/", async (req, res, next) => {
  const auth =
    req.headers.authorization && req.headers.authorization.split(" ");
  console.log("what us auth ", auth);
  if (auth && auth[0] === "Bearer" && auth[1]) {
    try {
      const data = toData(auth[1]);
      console.log("what is data, ", data);
    } catch (error) {
      return res.status(400).send("Invalid token");
    }

    const userId = data.userId;

    const newOrder = await Order.create();
  }
});

// router.post("/:orderId/products/:productId", async (req, res, next) => {
//   try {
//     const orderId = req.params.orderId;
//     const productId = req.params.productId;

//     const result = await Order.create({req.body})

//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
