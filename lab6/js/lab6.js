/*
 * Author: Tszho Mak <tsmak@ucsc.edu>
 * Created: 4/25/2021
 * License: Public Domain
 */

 // Define variables
 myCat = ["Russian Blue", "Garfield", "Domestic short-haired cat", "Persian"];

 myFirstCat = {
   make : "cat",
   model : "Garfield",
   color :"White",
   year : 2019,
   age : function() {
        return 2019 - age;
   }
}


// output
document.writeln("Breeds of cats I own: ", myCat, "</br>");
document.writeln("My first cat: <pre>",
    JSON.stringify(myFirstCat, null, '\t'), "</pre>");
