const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations");

function getAReservationById(id) {
  const copiedReservations = JSON.parse(JSON.stringify(reservations));
  const reservation = copiedReservations.filter(
    (reservation) => reservation.id === id
  );
  return reservation;
}

router.get("/", async (request, response) => {
  try {
    response.json(reservations);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    let id = Number(request.params.id);
    response.json(getAReservationById(id));
  } catch (error) {
    throw error;
  }
});

module.exports = router;
