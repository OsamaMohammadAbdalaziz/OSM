const express = require("express");
const app = express();
const dotenv = require("dotenv");
const port = 3000;

dotenv.config();
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(process || port, () =>
  console.log(`Example app listening on port ${port}!`)
);
