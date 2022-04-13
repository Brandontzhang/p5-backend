const db = require('../db');

const createJournal = async (title, date, text) => {
  sql = `INSERT INTO Journals (title, date, text) VALUES ("${title}", "${date}", "${text}")`;
  const res = await db.pool.execute(sql);
  const [rows] = res;

  return rows;
}

const getJournals = async () => {
  sql = `SELECT * FROM Journals`;
  const res = await db.pool.execute(sql);

  return res;
}

const updateJournal = async (id, journal) => {
  const blob = Buffer.from(journal.text, 'utf-8');
  sql = `UPDATE Journals SET title = "${journal.title}", date = "${journal.date}", text = "${blob}"
        WHERE id = ${id}`;
  
  const res = await db.pool.execute(sql);
  return res;
}

const deleteJournal = async (id) => {
  sql = `DELETE FROM Journals where id = ${id}`
  
  const res = await db.pool.execute(sql);
  return res;
}

module.exports = {
  createJournal,
  getJournals,
  updateJournal,
  deleteJournal
}