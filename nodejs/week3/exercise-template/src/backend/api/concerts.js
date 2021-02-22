const { request, response } = require("express");
const express = require("express");
const router = express.Router();
const knex = require("../database");
const getConcert = require("../modules/getConcert");

router.get("/", async (request, response) => {
  // can think of '1e500' as infinity in MySQL
  const maxPrice = Number(request.query.maxPrice) || "1e500";
  const title = request.query.title || "";
  const band = request.query.band || "";
  let createdAfter = new Date(request.query.createdAfter);
  createdAfter = createdAfter > 0 ? createdAfter.toISOString() : 0;

  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const concerts = await knex("concerts")
      .where("band", "like", `%${band}%`) // SQL and javascript combined
      .where("title", "like", `%${title}%`) // SQL and javascript combined
      .where("price", "<=", maxPrice)
      .where("created_date", ">", createdAfter);
    return response.json(concerts);
  } catch (err) {
    if (err) {
      return response.status(400).send(err);
    } else {
      return next(err);
    }
  }
});

router.get("/:id", async (request, response) => {
  try {
    const concertById = await getConcert(Number(request.params.id));
    return concertById
      ? response.json(concertById)
      : response.status(404).json("Not found");
  } catch (err) {
    if (err) {
      return response.status(400).send(err);
    } else {
      return next(err);
    }
  }
});

// router.post("/", async (request, response) => {
//   try {
//     const insertedConcert = await knex("concerts").insert(request.body);

//     response.status(201).json(insertedConcert);
//   } catch (error) {
//     throw error;
//   }
// });

router.post("/", async (request, response) => {
  try {
    return await knex("concerts")
      .insert(request.body)
      .then((concertId) => {
        knex("concerts")
          .where({ id: concertId[0] })
          .then((selectedConcert) => {
            response.status(201).json(selectedConcert[0]);
          });
      });
  } catch (err) {
    if (err) {
      return response.status(400).send(err);
    } else {
      return next(err);
    }
  }
});

// router.put("/:id", async (request, response) => {
//   try {
//     const concerts = await knex("concerts")
//       .where({
//         id: Number(request.params.id),
//       })
//       .update("price", request.body.price);
//     response.json(concerts);
//   } catch (error) {
//     throw error;
//   }
// });

router.put("/:id", async (request, response) => {
  try {
    await knex("concerts")
      .where({ id: Number(request.params.id) })
      .update(request.body);
    return response
      .status(201)
      .json(await getConcert(Number(request.params.id)));
  } catch (err) {
    if (err) {
      return response.status(400).send(err);
    } else {
      return next(err);
    }
  }
});

// router.delete("/:id", async (request, response) => {
//   try {
//     const deletedConcert = await knex("concerts")
//       // .where("id", "=", request.params.id)
//       .where({
//         id: Number(request.params.id),
//       })
//       .delete();
//     response.json(deletedConcert);
//   } catch (error) {
//     throw error;
//   }
// });

router.delete("/:id", async (request, response) => {
  try {
    await knex("concerts")
      .where({ id: parseInt(request.params.id) })
      .del();
    return response.status(204).json({});
  } catch (err) {
    if (err) {
      console.log(err);
      return response.status(400).send(err);
    } else {
      return next(err);
    }
  }
});

module.exports = router;

// .where({request.body.price < Number(request.query.price)})

/*

const express = require("express");
const router = express.Router();
const knex = require("../database");
const getConcert = require("../modules/getConcert");

module.exports = router;

*/
