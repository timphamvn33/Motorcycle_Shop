const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    price: {type: String, required: true}, 
    star: {type: String, required: true}, 
    image: {type: String, required: true} 
}, {collection: "items"});

const Items = mongoose.model("items", itemsSchema);

module.exports = Items;


