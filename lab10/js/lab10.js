/*
 * Author: Tszho Mak <tsmak@ucsc.edu>
 * Created: 5/6/2021
 * License: Public Domain
 */

 // sortUserName - a clickable link that directly showing lab9 index.html
 // of their name

// test function

inputValue = document.getElementById('user-name').value;

var button = document.getElementById('my-button');
button.addEventListener('click', function() {
    inputValue = document.getElementById('my-input').value;
    console.log("You input:", inputValue);
