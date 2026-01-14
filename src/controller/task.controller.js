const taskModel = require('../models/task.model');

const createTask = async (req, res) => {
    
  const { title, user_id } = req.body;
  if (!title || !user_id) {
    return res.status(400).json({ message: 'Title and user_id are required' });
  }
  const task = await taskModel.createTask(title, user_id);
  res.status(201).json(task);
};

const getTasks = async (req, res) => {
  const tasks = await taskModel.getTasks();
  res.json(tasks);
};


const getTask = async (req, res) => {
  const { id } = req.params;
    const task = await taskModel.getTask(id);
 if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }


  res.json(task);
};

module.exports = { createTask, getTasks, getTask };
