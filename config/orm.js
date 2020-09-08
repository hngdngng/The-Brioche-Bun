// Import MySQL connection.
const connection = require("./connection");

const orm = {
    selectAll: function () {
        console.log("selectAll");
    },
    insertOne: function () {
        console.log("insertOne");
    },
    updateOne: function () {
        console.log("updateOne");
    }
};

module.exports = orm;