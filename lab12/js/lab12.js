/*
 * Author: Tszho Mak <tsmak@ucsc.edu>
 * Created: 5/6/2021
 * License: Public Domain
 */

 // sortUserName - a clickable link that directly showing lab9 index.html
 // of their name

// test function

function sortingHat(str){
  len = str.length;
  mod = len % 4;
  if(mod == 0){
    return "Line 1"
  }
  else if (mod == 1){
    return "Line 2"
  }
  else if (mod == 2){
    return "Line 3"
  }
  else if (mod == 3){
    return "Line 4"
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function(){
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p>You are in " + house + "</p>";
  document.getElementById("output").innerHTML = newText;
})
