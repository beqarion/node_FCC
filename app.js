const express = require("express")
const app = express()
const tasks = require("./routes/tasks")

// middleware
app.use(express.json())

// routes
app.get("/hello", (req, res, next) => {
  res.send("Well, hello there")
})

app.use("/api/v1/tasks", tasks)

//app.get('/api/v1/tasks')          -get all the tasks
//app.post('/api/v1/tasks')         -create a new task
//app.get('/api/v1/tasks/:id')      -get single task
//app.patch('/api/v1/tasks/:id')    -update task
//app.delete('/api/v1/tasks/:id')   -delete task

const port = 3000

app.listen(port, () => {
  console.log(`serveri is listening on port ${port}`)
})
