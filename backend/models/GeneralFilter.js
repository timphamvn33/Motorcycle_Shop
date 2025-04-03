const mongoose = require("mongoose");

const generalFilterSchema = new mongoose.Schema({
    typeFilter: {type: String, required: true, unique: true},
    detail: [
        {name: {type: String, required: true}, 
        subDetail: {type: String, required: true}}
    ]
}, {collection: "generalFilters"})

const GeneralFilter = mongoose.model("GeneralFilter", generalFilterSchema);

module.exports = GeneralFilter;