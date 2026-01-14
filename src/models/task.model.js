const pool = require('../config/db');

const createTask = async (title, userId) => {
      const [result] = await pool.query(
        'INSERT INTO tasks (title, user_id) VALUES (?,?)',[title, userId]
          );
          return{
            id: result.insertId,
            title,
            userId

          }
};


const getTasks = async () => {
      const [rows] = await pool.execute(
            'SELECT t.*, u.name AS user_name FROM tasks t JOIN users u ON t.user_id = u.id'
              );
            return rows;
};



const getTask = async (idTask) => {
      const [rows] = await pool.execute(
            'SELECT t.id,t.title,t.user_id,u.name AS user_name FROM tasks t JOIN users u ON t.user_id = u.id WHERE t.id = ?',[idTask]
              );
            return rows[0];
};

module.exports = { createTask, getTasks, getTask};