const express = require("express");
const app = express();
const router = express.Router();

router.use("/", (req, res) => {
  try {
    const result = res.send("nodejs week3 homework");
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
