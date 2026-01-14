const pool = require('../config/db');

const createUser = async (name, email) => {
  const [result] = await pool.query(
    'INSERT INTO users (name, email) VALUES (?, ?) ',[name, email]
  );
  return {
    id: result.insertId,
    name,
    email
  };
};

const getUsers = async () => {
  const [rows] = await pool.execute('SELECT * FROM users');
  return rows;
};

module.exports = { createUser, getUsers };