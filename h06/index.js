pics = document.getElementById("playfield");


var click = 0;
var img1;
var img2;
var pointsrc = document.getElementById("points");
const array = [];
const array2 = [];
var points = 0;

createPicsHolders();
createAapImages();

function createPicsHolders() {
    for (let i = 0; i < 18; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + i;
        pics.appendChild(pictureHolder);
    }
}

function generateRandomNumber (){
    random = Math.random();
    random = random * 9 + 1;
    random = parseInt(random);
    return random;
}

function createAapImages() {
    pictureHolders = document.getElementsByClassName("picture-holder");
    let i= 0;
    while (i <= 8){
        const randomNumber = generateRandomNumber();
        if (!array.includes(randomNumber)) {
            array.push(randomNumber);
            i++;
        }
    }

    let y = 0;
    while (y <= 8){
        const randomNumber = generateRandomNumber();
        if (!array2.includes(randomNumber)) {
            array2.push(randomNumber);
            array.push(array2[y]);
            y++;
        }
    }
    console.log(array);

    for (let i = 0; i < 18; i++) {

        aapPlaatje = document.createElement("img");
        aapPlaatje.src = "../h03/img/monke" + array[i] + ".png";

        aapPlaatje.id = i + 1;
        document.getElementById("picture-holder-" + i).appendChild(aapPlaatje);

        done = document.createElement("img");
        done.src = "img/done.png";
        done.id = "done"+(i + 1);
        done.className = "done";
        done.style.opacity = "0";
        document.getElementById("picture-holder-" + i).appendChild(done);

        vraagteken = document.createElement("img");
        vraagteken.src = "img/questionmark.png";
        vraagteken.id = "vraagteken" + (i + 1);
        vraagteken.className = "vraagteken";
        vraagteken.addEventListener("click", function() {
            turn("../h03/img/monke"+array[i]+".png", (i + 1));
        });
        document.getElementById("picture-holder-" + i).appendChild(vraagteken);
    }

}
function turn(src, id) {
    click++;
    if (click === 1) {

        img1 = src;
        id1 = id;
        document.getElementById("vraagteken"+id1).style.opacity = "0";

    } else if (click === 2){

        img2 = src;
        id2 = id;
        document.getElementById("vraagteken"+id2).style.opacity = "0";
        if (img1 === img2) {

            setTimeout(function(){
                document.getElementById("vraagteken"+id1).style.display = "none";
                document.getElementById("vraagteken"+id2).style.display = "none";
                points++;
                pointsrc.innerHTML = points;
                document.getElementById("done"+id1).style.opacity = "0.5";
                document.getElementById("done"+id2).style.opacity = "0.5";
                click = 0;
                if (points >= 9) {
                    document.getElementById("playfield").innerHTML = "<img class='amix' src='img/amix.png'> <h2 class='amix'>Je hebt gewonnen shoutout van amix</h2>";
                }
            }, 300);

        } else {
            setTimeout(function(){
                document.getElementById("vraagteken" + id1).style.opacity = "1";
                document.getElementById("vraagteken" + id2).style.opacity = "1";
                click = 0;
            },1000);
        }
    }
}