const express = require("express");
const app = express();
const jsonParser = express.json();
const userRouter = require("./routers/users");
const orderRouter = require("./routers/orders");
const productRouter = require("./routers/products");
const categoryRouter = require("./routers/categories");
const loginRouter = require("./routers/auth");

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use(jsonParser);
app.use("/users", userRouter);
app.use("/orders", orderRouter);
app.use("/products", productRouter);
app.use("/categories", categoryRouter);
app.use("/auth", loginRouter);

app.listen(3000, function () {
  console.log("server is running on port 3000");
});
