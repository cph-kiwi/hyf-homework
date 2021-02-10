const express = require("express");
// const { response } = require("../app");
const router = express.Router();

const movies = require("../data/movies.json");

router.get("/", async (request, response) => {
  let beginYear = Number(request.query.beginYear);
  let endYear = Number(request.query.endYear);
  let minRating = parseFloat(request.query.minRating);

  beginYear = beginYear > 0 ? beginYear : 0;
  endYear =
    endYear < Number.POSITIVE_INFINITY ? endYear : Number.POSITIVE_INFINITY;
  minRating = minRating > 0 ? minRating : 0;

  let filteredMovies = movies.filter(
    (movie) =>
      movie.year >= beginYear &&
      movie.year <= endYear &&
      movie.rating >= minRating
  );
  if (filteredMovies.length > 0) {
    response.send({ data: filteredMovies });
  } else {
    response.status(404).json({
      msg: `No movie with these search parameters exits`,
    });
  }
});

router.get("/:year", async (request, response) => {
  const found = movies.some(
    (movie) => movie.year === Number(request.params.year)
  );

  if (found) {
    response.send({
      data: movies.filter(
        (movie) => movie.year === Number(request.params.year) // request.params.year is a string and must be converted to a number before comparison
      ),
    });
  } else {
    response
      .status(404)
      .json({ msg: `No movie with the year of ${request.params.year}` });
  }
});

module.exports = router;
