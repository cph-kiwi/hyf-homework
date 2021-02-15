const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations");

router.get("/", async (request, response) => {
  try {
    response.json(reservations);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    const id = Number(request.params.id);

    const reservationToDisplay = reservations.find(
      (reservation) => reservation.id === id
    );

    if (reservationToDisplay != undefined) {
      response.json(reservationToDisplay);
    } else {
      response.status(400).json({ msg: "No reservation matches the given id" });
    }
  } catch (error) {
    throw error;
  }
});

module.exports = router;
