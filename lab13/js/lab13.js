/*
 * Author: Tszho Mak <tsmak@ucsc.edu>
 * Created: 5/17/2021
 * License: Public Domain
 */

 // sortUserName - a clickable link that directly showing lab9 index.html
 // of their name

// test function

function fizzBuzzBoom(maxNums, factorObj){
  for (var num=0; num<maxNums; num++){
    var outputStr = "";
    for (var factor in factorObj){
      if (num % factor == 0){
        outputStr += factorObj[factor];

      }
    }
    if(outputStr){
      outputStr = " - " + outputStr + "!";
    }
    outputToPage(num.toString() + outputStr)
  }
}

oneLongString += num + " Fizz!<br>";
$("#output").html(oneLongString);
