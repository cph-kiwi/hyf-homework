const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");
const reviews = require("./../data/reviews");

const mealsWithReviews = getMealsWithReviews();

function getMealsWithReviews() {
  return meals.map((meal) => {
    return {
      ...meal,
      reviews: reviews.filter((review) => review.mealId === meal.id),
    };
  });
}

router.get("/", async (request, response) => {
  try {
    const mealsToDisplay = mealsWithReviews
      .filter((meal) => {
        const maxPrice = request.query.maxPrice;
        if (request.query.maxPrice != undefined) {
          return meal.price <= Number(maxPrice);
        } else {
          return true;
        }
      })
      .filter((meal) => {
        const searchTerm = request.query.title;
        if (request.query.title != undefined) {
          return meal.title.toLowerCase().includes(searchTerm.toLowerCase());
        } else {
          return true;
        }
      })
      .filter((meal) => {
        const createdAfter = request.query.createdAfter;
        if (request.query.createdAfter != undefined) {
          return meal.createdAt >= createdAfter.replace(/\-/g, "/");
        } else {
          return true;
        }
      })
      .filter((meal, i) => {
        const limit = Number(request.query.limit);
        if (request.query.limit != undefined) {
          return i < limit;
        } else {
          return true;
        }
      });

    if (mealsToDisplay.length > 0) {
      response.json(mealsToDisplay);
    } else {
      response
        .status(400)
        .json({ msg: "No meal matches your search parameters" });
    }
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    const id = Number(request.params.id);

    const mealToDisplay = mealsWithReviews.find((meal) => meal.id === id);

    if (mealToDisplay != undefined) {
      response.json(mealToDisplay);
    } else {
      response.status(400).json({ msg: "No meal matches the given id" });
    }
  } catch (error) {
    throw error;
  }
});

module.exports = router;
