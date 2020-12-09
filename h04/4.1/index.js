var mijnauto = {
    merk: "Ford",
    type: "Mondeo",
    aantalwielen: "4",
    kleur: "blauw",
    toeteren: function() {
        console.log("toet!");
    },
    snelheid: 0,
    gasgeven: function() {
        this.snelheid += 5;
        console.log(this.snelheid);
    }
}
console.log("de kleur van de auto is " + mijnauto['kleur']);