var fs = require("fs");
var rl = require("readline");
var promisify = require("util").promisify;


var prompt = "Electronic Phone Book\
=====================\
1. Look up an entry\
2. Set an entry\
3. Delete an entry\
4. List all entries\
5. Save entries\
6. Restore saved entries\
7. Quit\
What would you like to do (1-7)? "


var interface = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

var phonebook = [];


interface.question(prompt, runThisCodeUsingThe(answer));


var runThisCodeUsingThe = function(answer) {
    
    if (answer === )
}


var janellesRidiculousPromiseExercise = new Promise(function(theNativeSetStateToResolvedFunction, theNativeSetStateToRejectedFunction) {
    var num1 = 2;
    var num2 = 3;
    var sum = num1 + num2;
    if (sum === 5) {
        theNativeSetStateToResolvedFunction("when this promise's state is set to 'resolved' by invoking the native 'Resolve' callback function, JS also created this value I can pass around/use later. Optional.");
    } else {
        theNativeSetStateToRejectedFunction("when this promise's state is set to 'rejected' by invoking the native 'Reject' callback function, JS also created this value I can pass around/use later. Optional. Should probably be the error object.")
    }
})

var promiseStateEqualsResolved = function(theResultValueISetInThePromise) {
    console.log("I passed this long-ass sentence into here from the promise: " + theResultValueISetInThePromise);
}

var promiseStateEqualsRejected = function(theResultValueISetInThePromise) {
    console.log("I passed this long-ass sentence into here from the promise: " + theResultValueISetInThePromise);
}

janellesRidiculousPromiseExercise.then(promiseStateEqualsResolved, promiseStateEqualsRejected);