/*
 * Author: Tszho Mak <tsmak@ucsc.edu>
 * Created: 4/25/2021
 * License: Public Domain
 */

 // sortUserName - a function that takes user input and sorts the letters
 // of their name
function isOdd(x){
  return (x % 2 != 0);
}

// test function
console.log("Is 1 odd? ", isOdd(1));
console.log("Is 2 odd? ", isOdd(2));

array = [522, 54, 510, 72, 331, 61, 1224]
console.log("My array", array);

var result = array.map(isOdd);
console.log("Test of evenness of array:", result);

var result = array.map(function(x){
  return x ** 0.5;
})
console.log("squareroot of array:", result);

var outputEl = document.getElementById("output");
var new1El = document.createElement("p")
new1El.innerHTML = "mapresults.";
var new2El = document.createElement("p")
new2El.innerHTML = "mapoutput.";
outputEl.appendChind(new1El);
outputEl.appendChind(new2El);
