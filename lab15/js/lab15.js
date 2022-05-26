/*
 * Author: Tszho Mak <tsmak@ucsc.edu>
 * Created: 5/25/2021
 * License: Public Domain
 */

 // sortUserName - a clickable link that directly showing lab9 index.html
 // of their name

// test function

$("activate").click(function(){
  var t = $("#in1").val();
// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://www.googleapis.com/youtube/v3",
    // The data to send (will be converted to a query string)
    data: {
            // here is where any data required by the api
            //   goes (check the api docs)
            id: pure-episode-351209,
            api_key: "AIzaSyCLvJMV4dskytV1i8RvjZU2fWTLFaJXOfw",
          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        console.log(data);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})
}
