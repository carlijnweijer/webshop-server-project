const { Router } = require("express");
router = new Router();

const Product = require("../models").product;

router.get("/", async (req, res, next) => {
  try {
    const allProducts = await Product.findAll();
    res.json(allProducts);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
