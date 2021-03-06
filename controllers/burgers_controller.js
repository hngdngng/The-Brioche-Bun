const express = require("express");

// Import the model (cat.js) to use its database functions.
const burger = require("../models/burger");
const router = express.Router();

// create a / route to get all burgers from database
// render index.handlebars with the data
router.get("/", (req, res) => {
    burger.selectAll((data) => {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    // insertOne: (cols, vals, cb)
    burger.insertOne(
        ["burger_name", "devoured"], 
        [req.body.burger_name, req.body.devoured], 
        (result) => {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    const condition = "id = " + req.params.id;
    console.log("condition", condition);

    // updateOne: (objColVals, condition, cb) => {
    burger.updateOne({devoured: req.body.devoured}, condition, (result) => {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;