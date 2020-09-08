const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

// create a / route to get all burgers from database
// render index.handlebars with the data
router.get("/", (req, res) => {
    res.render("index");
})

module.exports = router;