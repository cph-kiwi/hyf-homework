const express = require("express");
const app = express();
const router = express.Router();

router.use("/", (req, res) => res.send("nodejs week3 homework"));

app.use("/calculator", router);

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
