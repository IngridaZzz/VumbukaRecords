// 	JQUERY COLLAPSE BOX WITH TRANSITION
$(document).ready(function () {
    //action - when you click arrow1
    $("#arrow1").click(function () {
        //info sandy b slides open with transition
        $("#info-sandyb").slideToggle("300ms", "linear");
        //if info-simoneaha is open, it closes
        $("#info-simoneaha").slideUp("300ms", "linear");
    });
    //action - when you click arrow2
    $("#arrow2").click(function () {
        //info simone aha slides open with transition
        $("#info-simoneaha").slideToggle("300ms", "linear");
        //if info-sandyb is open, it closes
        $("#info-sandyb").slideUp("300ms", "linear");
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
*/


//ARROWS TURN ON CLICK
(function (document) {
    var div = document.getElementById('arrow1');
    var icon = document.getElementById('icon');
    var open = false;

    //action - when clicking on arrow 1
    div.addEventListener('click', function () {
        //If the arrow1 is not open (open=false)
        if (open) {
            //then arrow1 should turn
            icon.className = 'fas fa-chevron-down arrow1';
        } else {
            //If arrow1 is open, it should turn back
            icon.className = 'fas fa-chevron-down arrow1 open';
        }

        open = !open;
    });
})(document);


(function (document) {
    var div2 = document.getElementById('arrow2');
    var icon2 = document.getElementById('icon2');
    var open = false;

    //action - when clicking on arrow 2
    div2.addEventListener('click', function () {
        if (open) {
            //then arrow2 should turn
            icon2.className = 'fas fa-chevron-down arrow2';
        } else {
            //If arrow1 is open, it should turn back
            icon2.className = 'fas fa-chevron-down arrow2 open';
        }

        open = !open;
    });
})(document);
