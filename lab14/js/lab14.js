/*
 * Author: Tszho Mak <tsmak@ucsc.edu>
 * Created: 5/6/2021
 * License: Public Domain
 */

 // sortUserName - a clickable link that directly showing lab14 index.html
 // of their name

// test function

function getFactorObj(){
  var factorObj = {};
  for (var factor =0; factor<maxFactors; factor++){
    numId = "num" + factor;
    textId = "text" + factor;
    numValue = document.getElementById(numId).value;
    textValue = document.getElementById(textId).value;
    debugger;
    console.log(factor + ") num:", numValue, "text":", textValue)
    }
}

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

function reportError(str){
  outputEl.innerHTML = "<div class='error'>" + str + "</div>";
}

document.getElementById("submit").addEventListener("click",function(){
  console.log("Button pushed.");
  var max = document.getElementById("max").value;
  if (! max){
    reportError("You must provide a maximum");
    return
  }
  var factorObj = getFactorObj();
  console.log("factorObj:", factorObj);
  if (Object.key(factorObj).length === 0){
    reportError("You must provide at least one factor and text");
    return;
  }

  //console.log("Error checks passed.");
  //outputEl.innerHTML = "";
  //console.log("Running fizzBuzz..");
  //fizzBuzzBoom(max, factorObj);
  //document.writeln(foo());
  //console.log("Done running FizzBuzz.");
  //outputEl.classList.add("cols");
})
