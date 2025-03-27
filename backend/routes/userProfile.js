const express = require('express');
const User = require('../models/User')
const authMiddleware = require('../middleware/auth');

const router =  express.Router();

router.get("/UserProfile", authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if(!user) {
            return res.status(404).json({message: "User not found"});
        }
        res.json(user);
    } catch(err) {  
        console.error("Error retrieving user profile:", err);
        res.status(500).json({message: "server error"})

    }

});

router.put("/UpdateUser", authMiddleware, async (req, res) => {
    try {
        console.log("hello update");
        const userId = req.user.id;
        const updateData = req.body;

        // if (updatedData.email && !/\S+@\S+\.\S+/.test(updatedData.email)) {
        //     return res.status(400).json({ message: "Invalid email format" });
        // }

        const userUpdated = await User.findByIdAndUpdate(
            userId,
            updateData,
            {new: true}
        );
    
    
        if(!userUpdated) {
            res.status(404).json({message: "User not found to update"});
        } 
        res.status(200).json(userUpdated);

    } catch(err) {
        return res.status(500).json({message: "Server error"});
    }


    

})



module.exports = router;