const express = require('express');
const router = express.Router();
const taskController = require('../controller/task.controller');

router.post('/', taskController.createTask);
router.get('/', taskController.getTasks);
router.get('/:id', taskController.getTask);
module.exports = router;