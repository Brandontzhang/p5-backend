const db = require('../db');

const createList = async (journalId, list) => {
  let createListSQL = `INSERT INTO Lists (journalId, text, title) 
                      VALUES (${journalId}, "${list.text}", "${list.title}")`
  const [rows, fields] = await db.pool.query(createListSQL);
  return rows;
}

const getLists = async (journalId) => {
  let getListsSQL = `SELECT * FROM Lists WHERE journalId = ${journalId}`;
  const [rows, fields] = await db.pool.query(getListsSQL);
  return rows;
}

const updateList = async (journalId, id, list) => {
  let updateListSQL = `UPDATE Lists SET title="${list.title}", text="${list.text}", journalId=${list.journalId}
                      WHERE journalId=${journalId} AND id=${id}`;
  const [rows, fields] = await db.pool.query(updateListSQL);
}

const deleteList = async (journalId, id) => {
  let deleteListSQL = `DELETE FROM Lists WHERE journalId=${journalId} AND id=${id}`;
  const [rows, fields] = await db.pool.query(deleteListSQL);
}

module.exports = {
  createList,
  getLists,
  updateList,
  deleteList
}