const express = require("express");
const { request } = require("http");
const app = express();
const router = express.Router();

// app.get("/", (request, response) => response.send("nodejs week3 homework"));

// router.use("/add", (request, response) => {
//   response.send("add");
// });

// router.use("/subtract", (request, response) => {
//   response.send("subtract");
// });

// router.use("/multiply", (request, response) => {
//   response.send("multiply");
// });

// router.use("/divide", (request, response) => {
//   response.send("divide");
// });

router.get("/add", (request, response) => {
  const sum = Object.values(request.query)
    .reduce((accumulator, currentValue) => accumulator.concat(currentValue), [])
    .map((param) => Number(param))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  response.send(`${sum}`);
});

router.get("/subtract", (request, response) => {
  const difference = Object.values(request.query)
    .reduce((accumulator, currentValue) => accumulator.concat(currentValue), [])
    .map((param) => Number(param))
    .reduce((previous, current) => previous - current);
  response.send(`${difference}`);
});

router.get("/multiply", (request, response) => {
  const product = Object.values(request.query)
    .reduce((accumulator, currentValue) => accumulator.concat(currentValue), [])
    .map((param) => Number(param))
    .reduce((previous, current) => previous * current);
  response.send(`${product}`);
});

router.get("/divide", (request, response) => {
  const quotient = Object.values(request.query)
    .reduce((accumulator, currentValue) => accumulator.concat(currentValue), [])
    .map((param) => Number(param))
    .reduce((previous, current) => previous / current);
  response.send(`${quotient}`);
});

router.post("/add", (request, response) => {
  console.log(request.body);
  // const sum = Object.values(request.body)
  //     .reduce((accumulator, currentValue) => accumulator.concat(currentValue), [])
  //     .map((param) => Number(param))
  //     .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  // response.send(`${sum}`);
  response.send("add");
});

//   router.post("/subtract", (request, response) => {
//     const difference = ;
//     response.send(`${difference}`);
//   });

//   router.post("/multiply", (request, response) => {
//     const product = ;
//     response.send(`${product}`);
//   });

//   router.post("/divide", (request, response) => {
//     const quotient = ;
//     response.send(`${quotient}`);
//   });

app.use("/calculator", router);

app.listen(3000, () => console.log("Calculator:listening on port 3000"));
