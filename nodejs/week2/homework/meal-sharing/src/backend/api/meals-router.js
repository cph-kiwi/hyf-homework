const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");
const reviews = require("./../data/reviews");
const reservations = require("./../data/reservations");

function getMealsWithReviews() {
  const copiedMeals = JSON.parse(JSON.stringify(meals));
  const mealsWithReviews = copiedMeals.map((meal) => {
    meal.reviews = reviews.filter((review) => review.mealId === meal.id);
    return meal;
  });
  return mealsWithReviews;
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

router.get("/", async (request, response) => {
  try {
    console.log(meals);
    console.log("in /api/meals");
  } catch (error) {
    throw error;
  }
});

module.exports = router;

/*

app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});

app.get("/meals", async (request, response) => {
  response.json(getMealsWithReviews());
});

app.get("/cheap-meals", async (request, response) => {
  response.json(getMealsWithReviews().filter((meal) => meal.price < 100));
});

app.get("/large-meals", async (request, response) => {
  response.json(
    getMealsWithReviews().filter((meal) => meal.maxNumberOfGuests > 6)
  );
});

app.get("/meal", async (request, response) => {
  const index = Math.round(
    getRandomNumber(0, getMealsWithReviews().length - 1)
  );
  response.json(getMealsWithReviews()[index]);
});

app.get("/reservations", async (request, response) => {
  response.json(reservations);
});

app.get("/reservation", async (request, response) => {
  const index = Math.round(getRandomNumber(0, reservations.length - 1));
  response.json(reservations[index]);
});


*/
