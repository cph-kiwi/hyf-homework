const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews");

function getAReviewById(id) {
  const copiedReviews = JSON.parse(JSON.stringify(reviews));
  const review = copiedReviews.filter((review) => review.id === id);
  return review;
}

router.get("/", async (request, response) => {
  try {
    response.json(reviews);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    let id = Number(request.params.id);
    response.json(getAReviewById(id));
  } catch (error) {
    throw error;
  }
});

module.exports = router;
