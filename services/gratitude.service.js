const db = require('../db');

const createGratitude = async (journalId, gratitude) => {
  // find journal with this id
  let findJournalSQL = `SELECT * FROM Journals WHERE id = "${journalId}"`;
  const journal = await db.pool.query(findJournalSQL);
  console.log(journal);
  // insert new Gratitude with journalId
}

const getGratitudes = async (journalId) => {

}

const updateGratitude = async (id, gratitude) => {

}

const deleteGratitude = async (journalId, id) => {

}

module.exports = {
  createGratitude,
  getGratitudes,
  updateGratitude,
  deleteGratitude
}