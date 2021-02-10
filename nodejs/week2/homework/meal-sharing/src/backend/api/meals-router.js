const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");
const reviews = require("./../data/reviews");

let mealsToDisplay = [];

function getMealsWithReviews() {
  const copiedMeals = JSON.parse(JSON.stringify(mealsToDisplay));
  const mealsWithReviews = copiedMeals.map((meal) => {
    meal.reviews = reviews.filter((review) => review.mealId === meal.id);
    return meal;
  });
  return mealsWithReviews;
}

function getAMealById(id) {
  const copiedMeals = JSON.parse(JSON.stringify(meals));
  const meal = copiedMeals.filter((meal) => meal.id === id);
  return meal;
}

router.get("/", async (request, response) => {
  try {
    let maxPrice = Number(request.query.maxPrice);
    let titleSearch = request.query.title;
    let createdAfter = request.query.createdAfter;
    let limit = Number(request.query.limit);

    mealsToDisplay = meals
      .filter((meal) => {
        if (maxPrice) {
          return meal.price <= maxPrice;
        } else {
          return true;
        }
      })
      .filter((meal) => {
        // This one is not working
        if (titleSearch) {
          return meal.title.toLowerCase().includes(titleSearch.toLowerCase());
        } else {
          return true;
        }
      })
      .filter((meal) => {
        // This one is not working
        if (createdAfter) {
          return meal.createdAt > createdAfter;
        } else {
          return true;
        }
      })
      .filter((meal, i) => {
        if (limit) {
          return i < limit;
        } else {
          return true;
        }
      });
    response.json(getMealsWithReviews());
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    let id = Number(request.params.id);
    response.json(getAMealById(id));
  } catch (error) {
    throw error;
  }
});

module.exports = router;
