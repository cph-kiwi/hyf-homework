const express = require("express");
const { request } = require("http");
const app = express();
const router = express.Router();

// app.get("/", (request, response) => response.send("nodejs week3 homework"));

router.use("/add", (request, response) => {
  try {
    response.send("add");
  } catch (err) {
    if (err) {
      return response.status(400).send(err);
    } else {
      return next(err);
    }
  }
});

router.use("/subtract", (request, response) => {
  try {
    response.send("subtract");
  } catch (err) {
    if (err) {
      return response.status(400).send(err);
    } else {
      return next(err);
    }
  }
});

router.use("/multiply", (request, response) => {
  try {
    response.send("multiply");
  } catch (err) {
    if (err) {
      return response.status(400).send(err);
    } else {
      return next(err);
    }
  }
});

router.use("/divide", (request, response) => {
  try {
    response.send("divide");
  } catch (err) {
    if (err) {
      return response.status(400).send(err);
    } else {
      return next(err);
    }
  }
});

app.use("/calculator", router);

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
