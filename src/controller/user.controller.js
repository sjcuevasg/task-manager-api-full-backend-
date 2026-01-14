const userModel = require('../models/user.model');

const createUser = async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required' });
  }
  const user = await userModel.createUser(name, email);
  res.status(201).json(user);
};

const getUsers = async (req, res) => {
  const users = await userModel.getUsers();
  res.json(users);
};

module.exports = { createUser, getUsers };
