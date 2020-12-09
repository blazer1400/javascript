var number = [1,2,3,4,5,6,7,8,9];
var imageslider = document.getElementById("imageslider");
var teller = 1;

imageslider.style.backgroundImage = "url(../../h03/img/monke1.png)";

imageslider.addEventListener("click", function() {
    getAap();
    imageslider.style.backgroundImage = "url(../../h03/img/monke"+teller+".png)";
})

function getAap() {
    if (teller == 9) {
        teller = 1;
    } else {
        teller++;
    }
}
