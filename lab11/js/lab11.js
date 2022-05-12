/*
 * Author: Tszho Mak <tsmak@ucsc.edu>
 * Created: 5/11/2021
 * License: Public Domain
 */

 // sortUserName - a clickable link that directly showing lab9 index.html
 // of their name

// test function

function init(){
  $(document).ready(function(){
    var cha = $('<button class="button">Challenges</button>');
    $('#challenges').append(cha);
    cha.on('click',function(){
      $(this).parent().toggleClass('special')
    });

    var pro = $('<button class="button">Problem</button>');
    $('#problem').append(pro);
    pro.on('click',function(){
      $(this).parent().toggleClass('special')
    });

    var res = $('<button class="button">Results</button>');
    $('#results').append(res);
    res.on('click',function(){
      $(this).parent().toggleClass('special')
    });



  });
}
