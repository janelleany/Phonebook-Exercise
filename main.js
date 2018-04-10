var fs = require("fs");
var rl = require("readline");
var http = require("http");
var promisify = require("util").promisify;

var getDatabase = function(database) {
    JSON.stringify(database);
}

var writeTo = function(database) {

}

var routes = [
    {}
]

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


// Router
var server = http.createServer(function(incomingRequest, response) {
    console.log("What up, homey?");
})

server.listen(3000);