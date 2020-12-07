var numbers = new Array;
for (var i = 0; i < 9; i++) {
    var random = Math.random();
    random = parseInt(random * 9 + 1);
    if (numbers.includes(random)) {
        i--;
    } else {
        numbers.push(random);
    }
}
for (i = 0; i < 9; i++) {
    document.getElementById("shuffle").innerHTML += "<img src=img/monke"+numbers[i]+".png grid-area:a;>"
}