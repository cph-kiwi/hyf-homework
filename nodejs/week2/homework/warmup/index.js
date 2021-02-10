const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("nodejs week2 homework");
});

// GET /numbers/add?first=<number here>&second=<number here>. In response send sum (first + second).

app.get("/numbers/add/", (request, response) => {
  let sum = Number(request.query.first) + Number(request.query.second);

  if (sum) {
    response.send(`${sum}`);
  } else {
    response.status(404).send("Input invalid");
  }
});

// GET /numbers/multiply/<first number here>/<second number here>. in response send multiplication (first * second).

app.get("/numbers/multiply/:first/:second", (request, response) => {
  let product = Number(request.params.first) * Number(request.params.second);

  if (product) {
    response.send(`${product}`);
  } else {
    response.status(404).send("Input invalid");
  }
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
