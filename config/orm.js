// Import MySQL connection.
const connection = require("./connection");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
    const arr = [];
    num.forEach(ind => arr.push("?"));
    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    const arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (const key in ob) {
        let value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }
    // translate array of strings to a single comma-separated string
    return arr.toString();
}

// Object for all SQL
const orm = {
    selectAll: (table, cb) => {
        console.log("Selecting");

        const queryString = "SELECT * FROM " + table;
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        })
    },
    insertOne: (table, cols, vals, cb) => {
        console.log("Inserting");

        let queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, (err, res) => {
            if (err) throw err;
            cb(res);
        });

    },
    updateOne: (table, objColVals, condition, cb) => {
        console.log("Updating");

        let queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;