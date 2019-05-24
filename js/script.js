function sandybFunction() {
    var x = document.getElementById("info-sandyb");
    var y = document.getElementById("info-simoneaha");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
    }
}

function simoneFunction() {
    var y = document.getElementById("info-simoneaha");
    var x = document.getElementById("info-sandyb");
    if (y.style.display === "none") {
        y.style.display = "block";
        x.style.display = "none";
        
    } else {
        y.style.display = "none";
    }
}

(function (document) {
    var div = document.getElementById('arrow1');
    var icon = document.getElementById('icon');
    var open = false;

    div.addEventListener('click', function () {
        if (open) {
            icon.className = 'fas fa-chevron-down arrow1';
        } else {
            icon.className = 'fas fa-chevron-down arrow1 open';
        }

        open = !open;
    });
})(document);

(function (document) {
    var div2 = document.getElementById('arrow2');
    var icon2 = document.getElementById('icon2');
    var open = false;

    div2.addEventListener('click', function () {
        if (open) {
            icon2.className = 'fas fa-chevron-down arrow2';
        } else {
            icon2.className = 'fas fa-chevron-down arrow2 open';
        }

        open = !open;
    });
})(document);


