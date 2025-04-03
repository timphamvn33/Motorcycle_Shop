const express = require("express");
const Items = require("../models/Items");
const router = express.Router();

// get all the items
const getItemsHandler = async (req, res) => {
    
    try {
        const itemsRes = await Items.find({});
        res.json(itemsRes);

    } catch (err) {
        console.log("Error to get the items: ", err);
        res.status(500).json({message: "Server to get items get error"});
    }

}

router.get("/Items", getItemsHandler);

module.exports = router;