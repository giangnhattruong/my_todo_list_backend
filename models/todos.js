const mongoose = require("mongoose");
const {Schema} = mongoose;

mongoose.connect("mongodb://localhost/todos-backend")
    .then(() => {console.log("Database is conected")})
    .catch((e) => {console.log(e)})

mongoose.set("debug", true);
mongoose.Promise = Promise;

const todoSchema = new Schema({
    task: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    creationDate: {
        type: Date,
        default: Date.now()
    }
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
