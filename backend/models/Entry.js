const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    done: {
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        default: "NA"
    },
    location: {
        type: String,
        default: "NA"
    },
    map: {
        type: String,
        default: "NA"
    },
    menu: {
        type: String,
        default: "NA"
    },
    type: {
        type: String,
        default: "NA"
    },
    vegetarian: {
        type: Boolean,
        default: false
    },
    halal: {
        type: Boolean,
        default: false
    },
    socials: {
        type: [],
        default: []
    }
    // openHours: []
});

const TodoModel = mongoose.model("todos", TodoSchema);
module.exports = TodoModel;