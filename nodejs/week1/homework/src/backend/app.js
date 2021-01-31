const express = require("express");
const app = express();

const meals = require("./data/meals");
const reviews = require("./data/reviews");
const reservations = require("./data/reservations");

app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});



app.get("/meals", async (request, response) => {
  response.json(

    const copiedMeals = JSON.parse(JSON.stringify(meals));
    const mealsWithReviews = copiedMeals.map((meal) => {
      meal.reviews = reviews.filter((review) => review.mealId === meal.id);
      return meal;

    };
    );
    );
  });

// need to include reviews
app.get("/cheap-meals", async (request, response) => {
  response.json(meals.filter((meal) => meal.price < 100));
});

// need to include reviews
app.get("/large-meals", async (request, response) => {
  response.json(meals.filter((meal) => meal.maxNumberOfGuests > 6));
});

// random meal including reviews
app.get("/meal", async (request, response) => {
  response.json(meals); // need to complete this
});

app.get("/reservations", async (request, response) => {
  response.json(reservations);
});

// random reservation
app.get("/reservation", async (request, response) => {
  response.json(reservations); // need to complete this
});

module.exports = app;
