const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const ProductRoute = require("./routes/Products");
const UsersRoute = require("./routes/Users");
const CartRoute = require("./routes/Cart");
const OrdersRoute = require("./routes/Orders");
const port = 3000;

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/api/", authRoute);
app.use("/api/Products", ProductRoute);
app.use("/api/Users", UsersRoute);
app.use("/api/Cart", CartRoute);
app.use("/api/Orders", OrdersRoute);

app.listen(process.env.PORT || port, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
