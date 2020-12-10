var slider1 = document.getElementById("imageslider1");
var teller1 = 1;

var slider2 = document.getElementById("imageslider2");
var teller2 = 1;

var slider3 = document.getElementById("imageslider3");
var teller3 = 1;

slider1.style.backgroundImage = "url(img/oog1.png)"
slider1.addEventListener("click", function() {
    slide1();
    slider1.style.backgroundImage = "url(img/oog"+teller1+".png)";
})

slider2.style.backgroundImage = "url(img/neus1.png)";
slider2.addEventListener("click", function() {
    slide2();
    slider2.style.backgroundImage = "url(img/neus"+teller2+".png)";
})

slider3.style.backgroundImage = "url(img/mond1.png)";
slider3.addEventListener("click", function() {
    slide3();
    slider3.style.backgroundImage = "url(img/mond"+teller3+".png)";
})


function slide1() {
    if (teller1 == 3) {
        teller1 = 1;
    } else {
        teller1++;
    }
}
function slide2() {
    if (teller2 == 3) {
        teller2 = 1;
    } else {
        teller2++;
    }
}
function slide3() {
    if (teller3 == 3) {
        teller3 = 1;
    } else {
        teller3++;
    }
}