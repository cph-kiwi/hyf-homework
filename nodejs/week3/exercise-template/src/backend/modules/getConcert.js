const assert = require("assert");
const knex = require("../database");

const concertAtId = async (id) => {
  const concertAtId = await knex("concerts").where({ id: id });
  assert.strictEqual(concertAtId.length < 2, true);
  return concertAtId[0];
};

module.exports = concertAtId;
