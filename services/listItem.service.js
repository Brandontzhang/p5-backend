const db = require('../db');

const createListItem = async(listId, listItem) => {
  createListItemSQL = `INSERT INTO ListItems (listId, text) VALUES(${listId}, "${listItem.text}")`;
  await db.pool.query(createListItemSQL);
}

const getListItems = async(listId) => {
  getListItemsSQL = `SELECT * FROM ListItems WHERE ListId = ${listId}`;
  const [rows] = await db.pool.query(getListItemsSQL);
  return rows;
}

const updateListItem = async(listId, listItemId, listItem) => {
  updateListItemSQL = `UPDATE ListItems SET text="${listItem.text}", ListId=${listItem.ListId} 
                      WHERE ListId=${listId} AND id=${listItemId}`;
  await db.pool.query(updateListItemSQL);
}

const deleteListItem = async(listId, listItemId) => {
  deleteListItemSQL = `DELETE FROM ListItems WHERE ListId=${listId} AND id=${listItemId}`;
  await db.pool.query(deleteListItemSQL);
}

module.exports = {
  createListItem,
  getListItems,
  updateListItem,
  deleteListItem
}