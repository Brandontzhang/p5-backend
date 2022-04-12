const db = require('../db');

const getUsers = async () => {
  const [rows, fields] = await db.pool.query(`SELECT * FROM user`);
};

module.exports = {
  getUsers
};

