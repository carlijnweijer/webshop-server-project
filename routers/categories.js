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

router.post("/:categoryId/products", async (req, res, next) => {
  try {
    const { name, description, priceEuroCents, imageUrl } = req.body;
    const categoryId = req.params.categoryId;

    if (!name || !description || !priceEuroCents || !imageUrl || !categoryId) {
      res
        .status(400)
        .send(
          "Please provide a name, description, price in Eurocents and an imageUrl!"
        );
      return;
    }

    const newProdcut = await Product.create({ categoryId, ...req.body });
    res.json(newProdcut);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
