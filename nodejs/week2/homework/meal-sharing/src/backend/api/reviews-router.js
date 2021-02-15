const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews");

router.get("/", async (request, response) => {
  try {
    response.json(reviews);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    const id = Number(request.params.id);

    const reviewToDisplay = reviews.find((review) => review.id === id);

    if (reviewToDisplay != undefined) {
      response.json(reviewToDisplay);
    } else {
      response.status(400).json({ msg: "No review matches the given id" });
    }
  } catch (error) {
    throw error;
  }
});

module.exports = router;
