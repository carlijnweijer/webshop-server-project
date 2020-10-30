const { Router } = require("express");
router = new Router();

const Category = require("../models").category;
const Product = require("../models").product;

router.get("/", async (req, res, next) => {
  try {
    const allCategories = await Category.findAll();
    res.json(allCategories);
  } catch (e) {
    next(e);
  }
});

router.get("/:categoryId/products", async (req, res, next) => {
  try {
    const id = req.params.categoryId;
    const category = await Category.findByPk(id, { include: [Product] });
    console.log("What is this?", category);
    if (!category) {
      res.status(404).send("Category not found!");
      return;
    }
    res.json(category.products);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
