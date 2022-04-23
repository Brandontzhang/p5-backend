const db = require('../db');

const createJournal = async (title, date, text) => {
  sql = `INSERT INTO Journals (title, date, text) VALUES ("${title}", "${date}", "${text}")`;
  const res = await db.pool.execute(sql);
  const [rows] = res;
}

const getJournals = async () => {
  sql = `SELECT * FROM Journals`;
  const res = await db.pool.execute(sql);

  return res;
}

const getJournal = async (journalId) => {
  let findJournalSQL = `SELECT * FROM Journals WHERE id = ${journalId}`;
  const [rows, fields] = await db.pool.query(findJournalSQL);
  const [journal] = rows;
  return journal;
}

const getJournalByDate = async (date) => {
  let findJournalSQL = `SELECT * FROM Journals WHERE date = "${date}"`;
  const [journal] = await db.pool.query(findJournalSQL);
  return journal;
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
  getJournal,
  getJournalByDate,
  updateJournal,
  deleteJournal
}