const express = require("express");
const app = express();
const userRouter = require("./routers/users");
const orderRouter = require("./routers/orders");
const productRouter = require("./routers/products");
const categoryRouter = require("./routers/categories");

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use("/users", userRouter);
app.use("/orders", orderRouter);
app.use("/products", productRouter);
app.use("/categories", categoryRouter);

app.listen(3000, function () {
  console.log("server is running on port 3000");
});
