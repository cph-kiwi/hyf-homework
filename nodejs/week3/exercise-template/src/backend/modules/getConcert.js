const assert = require("assert");
const knex = require("../database");

const concertById = async (id) => {
  const concertById = await knex("concerts").where({ id: id });
  assert.strictEqual(concertById.length < 2, true);
  return concertById[0];
};

module.exports = concertById;
