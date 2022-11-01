const getAllTasks = (req, res, next) => {
  res.send("all tasks")
}

const createTask = (req, res, next) => {
  res.json(req.body)
}

const getTask = (req, res, next) => {
  res.json({ id: req.params.id })
}

const updateTask = (req, res, next) => {
  res.send("update task")
}

const deleteTask = (req, res, next) => {
  res.send("delete task")
}

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
}