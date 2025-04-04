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

// get item by id
router.get("/Items/:id", async (req, res) => {
    try {
        console.log("hello get item id")
        const { id } = req.params;
        console.log("id: ", id);
        const item = await Items.findById(id);
        
    
        if (!item) {
            return res.status(404).json({message: "item not found"});
        }
    
        res.json(item)

    } catch (error) {
        res.status(500).json({message: "Server to get items get error"});
    }

})




module.exports = router;