var fs = require("fs");
var rl = require("readline");
var http = require("http");
var promisify = require("util").promisify;

var routes = [
    {}
]

// Router
var server = http.createServer(function(incoming, response) {
    if (incoming.method === "GET" && incoming.url === "/create") {
        response.
    }
    response.end();
})

server.listen(3000);

var phonebook = [
    {
        id: 0,
        first: "Janelle",
        last: "Alexander",
        mobile: "917-721-5767",
        email: "janelle@janelle.com"
    },
    {
        id: 1,
        first: "Greg",
        last: "Harris",
        mobile: "917-678-4372",
        email: "greg@greg.com"
    }
];

var lastID = 1;

//function: LOOK UP AN ENTRY BY ID
var lookup = function(id) {
    phonebook.forEach(function(item, i, array) {
            if (item.id === id) {
                console.log("Found entry for: " + item.first + " " + item.last);
                return true;
            } else {
                console.log("Entry not found");
                return false;
            }
        })
}

//function: NEW ENTRY
var add = function(first, last, mobile, email) {
    var newID = lastID + 1; //this is horrible, janelle
    lastID = newID; //horrible, part II

    var newEntry = {
        "id": newID,
        "first": first,
        "last": last,
        "mobile": mobile,
        "email": email
    };
    phonebook.push(newEntry);
    console.log("Entry stored for " + first + " " + last);
}

//function: DELETE AN ENTRY
// var del = function(firstName) {
//     phonebook.findIndex(function(element, index, array) {

//     })