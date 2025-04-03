const express = require("express");
const GeneralFilter = require("../models/GeneralFilter");
const router = express.Router();

const getGeneralFilterHandler = async (req, res) => {
    try {
        const generalFilters = await GeneralFilter.find({});
        res.json(generalFilters);
    } catch (error) {
        console.error("An error occurred while getting generalFilter:", error);
        res.status(500).json({ message: "Server encountered an error while retrieving generalFilter" });
    }
};

router.get("/generalFilter", getGeneralFilterHandler);

// ✅ Export the router so it can be used in your main application file
module.exports = router;
