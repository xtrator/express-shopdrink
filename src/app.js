require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;

app.use(cors());
//http://expressjs.com/en/api.html#express.json
app.use(express.json());
//http://expressjs.com/en/5x/api.html#express.urlencoded
app.use(express.urlencoded({ extended: false }));

const productRouter = require("./routes/products");

app.use("/products", productRouter);
app.get("/", (req, res, next) => {
  res.send("Welcome to app.");
});

app.listen(PORT, () => {
  console.info(`App listening on port http://localhost:${PORT}`);
});
