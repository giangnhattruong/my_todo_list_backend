const Todo = require("../models/todos");
const wrapAsync = require("../ultils/wrapAsync");

module.exports.renderTodo = wrapAsync(async(req, res, next) => {
    const todos = await Todo.find({});
    res.json(todos);
})

module.exports.createTodo = wrapAsync(async(req, res, next) => {
    const {task} = req.body;
    const todo = new Todo({task});
    await todo.save();
    res.status(201).json(todo);
})

module.exports.toggleTodo = wrapAsync(async(req, res, next) => {
    const {todoId} = req.params;
    const {completed} = req.body;
    const todo = await Todo.findByIdAndUpdate({_id: todoId}, {completed});
    res.json(todo);

})

module.exports.removeTodo = wrapAsync(async(req, res, next) => {
    const {todoId} = req.params;
    const todo = await Todo.findByIdAndRemove({_id: todoId});
    res.json(todo);
})