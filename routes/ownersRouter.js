const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");

router.get("/", function(req, res){
    res.send("hey it's owner's page")
});

router.post("/create", async function(req, res){
    let owners = await ownerModel.find();
    // console.log(owners);
    if (owners.length > 0) {
        return res
            .status(502)
            .send("You dont have permission to create multiple owner");
    }

    let {username, email, password} = req.body;
    
    let createdOwner = await ownerModel.create({
        username,
        email,
        password
    });
    res.status(201).send(createdOwner);
});

module.exports = router;