require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

//middleare
app.use(express.json());

//routes

app.get("/", (req, res) => {
  res.send(
    `<h1>Store API App</h1><a href="/api/v1/products">products routes</a>`
  );
});

app.use("/api/v1/products", productsRouter);

const port = process.env.PORT || 3000;
// products route

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const start = async () => {
  try {
    //Connect DB
    await connectDB(process.env.MONGO_URI);
    console.log("Connect to the DB........");
    app.listen(port, console.log(`Listening on port: ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
