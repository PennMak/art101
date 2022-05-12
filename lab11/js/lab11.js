/*
 * Author: Tszho Mak <tsmak@ucsc.edu>
 * Created: 5/6/2021
 * License: Public Domain
 */

 // sortUserName - a clickable link that directly showing lab9 index.html
 // of their name

// test function

$("button.green").click(function(){
  // remove possible existing class
  $("#target").removeClass("red");
  // now toggle red class
  $("#target").toggleClass("green");
});
