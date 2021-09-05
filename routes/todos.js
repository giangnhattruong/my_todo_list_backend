const express = require("express");
const router = express.Router();
const {renderTodo, createTodo, toggleTodo, removeTodo} = require("../controllers/todos");

router
    .route("/")
    .get(renderTodo)
    .post(createTodo)

router
    .route("/:todoId")
    .put(toggleTodo)
    .delete(removeTodo)

module.exports = router;