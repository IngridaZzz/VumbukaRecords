// 	JQUERY COLLAPSE BOX WITH TRANSITION
$(document).ready(function(){
  $("#arrow1").click(function(){
    $("#info-sandyb").slideToggle("300ms","linear");
    $("#info-simoneaha").slideUp("300ms","linear");
  });
  $("#arrow2").click(function(){
    $("#info-simoneaha").slideToggle("300ms","linear");
    $("#info-sandyb").slideUp("300ms","linear");
  });
});

// 	VANILLA JS WITHOUT TRANSITION FOR COLLAPSE INFO-BOX 
/*
function sandybFunction() {
    var x = document.getElementById("info-sandyb");
    var y = document.getElementById("info-simoneaha");
    //check whether info-sandyb is displayed
    if (x.style.display == "block") {
        //Display x info-sandyb
        x.style.display = "none";
        
    } else {
        // Hide x info-sandyb
        x.style.display = "block";
        //don't display y info-simoneaha
        y.style.display = "none";
    }
}

function simoneFunction() {
    var y = document.getElementById("info-simoneaha");
    var x = document.getElementById("info-sandyb");
    //check whether info-simoneaha is displayed
    if (y.style.display == "block") {
        //Display y info-simoneaha
        y.style.display = "none";

    } else {
        // Hide y info-simoneaha
        y.style.display = "block";
        //don't display x info-sandyb
        x.style.display = "none";
    }
}

(function (document) {
    var div = document.getElementById('arrow1');
    var icon = document.getElementById('icon');
    var div2 = document.getElementById('arrow2');
    var icon2 = document.getElementById('icon2');
    var open = false;

    div.addEventListener('click', function () {
        if (open) {
            icon.className = 'fas fa-chevron-down arrow1';
            icon2.className = 'fas fa-chevron-down arrow2 open';
        } else {
            icon.className = 'fas fa-chevron-down arrow1 open';
            icon2.className = 'fas fa-chevron-down arrow2';
        }

        open = !open;
    });
})(document);
*/

//(function (document) {
//    var div2 = document.getElementById('arrow2');
//    var icon2 = document.getElementById('icon2');
//    var open = false;
//
//    div2.addEventListener('click', function() {
//        if (open) {
//            icon2.className = 'fas fa-chevron-down arrow2';
//        } else {
//            icon2.className = 'fas fa-chevron-down arrow2 open';
//        }
//
//        open = !open;
//    });
//})(document);
