pics = document.getElementById("pics");
createPicsHolders();
createAapImages();

function createPicsHolders () {
    for (var i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + i;
        pics.appendChild(pictureHolder);
    }
}

function createAapImages() {
    pictureHolders = document.getElementsByClassName("picture-holder")
    for (var i = 0; i < pictureHolders.length; i++){
        favoriet = document.createElement("div");
        favoriet.className = "favoriet";
        favoriet.id = "favoriet_" + (i+1);
        aapPlaatje = document.createElement("img");
        aapPlaatje.src = "../h03/img/monke" + (i+1) + ".png";
        aapPlaatje.id = (i+1);
        aapPlaatje.addEventListener("click", function () {
            maakFavoriet(this.id);
        });
        pictureHolders [i].appendChild(favoriet);
        pictureHolders [i].appendChild(aapPlaatje);
    }
}

function maakFavoriet(id) {
    notsofavoriet = document.getElementsByClassName("favoriet");

    for (var i = 0; i < notsofavoriet.length; i++) {
        notsofavoriet[i].style.backgroundImage = "none";
    }

    favoriet = document.getElementById("favoriet_" + id);
    favoriet.style.backgroundImage = "url('img/hartje.png')";
}