function BuyPU1(){
    if(!game.PU1 && game.prestigeAmount >= 1){
        game.PU1 = true
        game.ppc *= 2
        document.getElementById("PU2").classList.remove("hidden")
    }
}
function BuyPU2(){
    if(!game.pu2 && game.prestigeAmount >=5){
        game.PU2 = true
        game.ppc *= 3
        document.getElementById("PU3").classList.remove("hidden")
    }
}
function BuyPU3(){
    if(!game.PU3 && game.prestigeAmount >= 10){
        game.PU3 = true
        game.ppc *= 5
        updateTabs()
    }
}
function BuyPU4(){
    if(!game.PU4 && game.prestigeAmount >= 10 ** 15){
        game.PU4 = true
    }
}
function BuyPU5(){
    if(!game.PU5 && game.prestigeAmount >= 10 ** 19){
        game.PU5 = true
    }
}
function BuyPU6(){
    if(!game.PU6 && game.prestigeAmount >= 2 * 10 ** 20){
        game.PU6 = true
    }
}

// Power buyables
function BuyB1(){
    if (game.powerAmount >= game.powB1cost && game.powB1 < game.powB1max) {
        game.powerAmount -= game.powB1cost;
        game.powB1 += 1;
    }
    else {
        console.log("Not enough powers!")
    }
};
function BuyB2(){
    if (game.powerAmount >= game.powB2cost && game.powB2 < game.powB2max) {
        game.powerAmount -= game.powB2cost;
        game.powB2 += 1;
    }
    else {
        console.log("Not enough powers!")
    }
};
function BuyB3(){
    if (game.powerAmount >= game.powB3cost && game.powB3 < game.powB3max) {
        game.powerAmount -= game.powB3cost;
        game.powB3 += 1;
    }
    else {
        console.log("Not enough powers!")
    }
};

// Booster upgrades

function BuyBU1(){
    if(!game.BU1 && game.boosters >= game.boostupgcost[game.bstrupgamnt]){
        if(game.boosters >= game.boostupgcost[game.bstrupgamnt]){
            document.getElementById("BU1").classList.remove("unbought")
            document.getElementById("BU1").classList.add("bought")
            game.boosters -= game.boostupgcost[game.bstrupgamnt]
        }
        game.BU1 = true
    }
}
function BuyBU2(){
    if(!game.BU2 && game.boosters >= game.boostupgcost[game.bstrupgamnt]){
        if(game.boosters >= game.boostupgcost[game.bstrupgamnt]){
            document.getElementById("BU2").classList.remove("unbought")
            document.getElementById("BU2").classList.add("bought")
            game.boosters -= game.boostupgcost[game.bstrupgamnt]
        }
        game.BU2 = true
    }
}
function BuyBU3(){
    if(!game.BU3 && game.boosters >= game.boostupgcost[game.bstrupgamnt]){
        if(game.boosters >= game.boostupgcost[game.bstrupgamnt]){
            document.getElementById("BU3").classList.remove("unbought")
            document.getElementById("BU3").classList.add("bought")
            game.boosters -= game.boostupgcost[game.bstrupgamnt]
        }
        game.BU3 = true
    }
}

// Ascension Upgrades

function BuyAscU1(){
    if(game.AscAmount >= 100 && !game.AscU1){
        game.AscAmount -= 100
        game.AscU1 = true
    }
}

// Ascension Buyables

function BuyAscB1(){

}
// QOL Upgrades

function BuyQOLU1(){
    if(game.AutoAmount >= 100000){
        game.AutoAmount -= 100000
        game.QOLU[1] = true
    }
}
function BuyQOLU2(){
    if(game.AutoAmount >= 10 ** 7){
        game.AutoAmount -= 10 ** 7
        game.QOLU[2] = true
    }
}
function BuyQOLU3(){
    if(game.AutoAmount >= 10 ** 10){
        game.AutoAmount -= 10 ** 10
        game.QOLU[3] = true
    }
}
function BuyQOLU4(){
    if(game.AutoAmount >= 10 ** 15){
        game.AutoAmount -= 10 ** 15
        game.QOLU[4] = true
    }
}

// Upgrade Checks
function checkPresUpgs(){
    if(game.PU1){
        document.getElementById("PU1").classList.remove("unbought")
        document.getElementById("PU1").classList.add("bought")
        document.getElementById("PU2").classList.remove("hidden")
    }
    else{
        document.getElementById("PU1").classList.remove("bought")
        document.getElementById("PU1").classList.add("unbought")
        document.getElementById("PU2").classList.add("hidden")
    }
    if(game.PU2){
        document.getElementById("PU2").classList.remove("unbought")
        document.getElementById("PU2").classList.add("bought")
        document.getElementById("PU3").classList.remove("hidden")
    }
    else{
        document.getElementById("PU2").classList.remove("bought")
        document.getElementById("PU2").classList.add("unbought")
        document.getElementById("PU3").classList.add("hidden")
    }
    if(game.PU3){
        document.getElementById("PU3").classList.remove("unbought")
        document.getElementById("PU3").classList.add("bought")
    }
    else{
        document.getElementById("PU3").classList.remove("bought")
        document.getElementById("PU3").classList.add("unbought")
    }
    if(game.RankLevel >= 3 && game.PU3){
        document.getElementById("PU4").classList.remove("hidden")
    }
    else{
        document.getElementById("PU4").classList.add("hidden")
    }
    if(game.PU4){
        document.getElementById("PU4").classList.remove("unbought")
        document.getElementById("PU4").classList.add("bought")
        document.getElementById("PU5").classList.remove("hidden")
    }
    else{
        document.getElementById("PU4").classList.remove("bought")
        document.getElementById("PU4").classList.add("unbought")
        document.getElementById("PU5").classList.add("hidden")
    }
    if(game.PU5){
        document.getElementById("PU5").classList.remove("unbought")
        document.getElementById("PU5").classList.add("bought")
        document.getElementById("PU6").classList.remove("hidden")
    }
    else{
        document.getElementById("PU5").classList.remove("bought")
        document.getElementById("PU5").classList.add("unbought")
        document.getElementById("PU6").classList.add("hidden")
    }
    if(game.PU6){
        document.getElementById("PU6").classList.remove("unbought")
        document.getElementById("PU6").classList.add("bought")
    }
    else{
        document.getElementById("PU6").classList.remove("bought")
        document.getElementById("PU6").classList.add("unbought")
    }
}
function checkBstrUpgs(){
    if(game.BU1){
        document.getElementById("BU1").classList.remove("unbought")
        document.getElementById("BU1").classList.add("bought")
    }
    else{
        document.getElementById("BU1").classList.remove("bought")
        document.getElementById("BU1").classList.add("unbought")
    }
    if(game.BU2){
        document.getElementById("BU2").classList.remove("unbought")
        document.getElementById("BU2").classList.add("bought")
    }
    else{
        document.getElementById("BU2").classList.remove("bought")
        document.getElementById("BU2").classList.add("unbought")
    }
    if(game.BU3){
        document.getElementById("BU3").classList.remove("unbought")
        document.getElementById("BU3").classList.add("bought")
    }
    else{
        document.getElementById("BU3").classList.remove("bought")
        document.getElementById("BU3").classList.add("unbought")
    }
}
function checkAscUpgs(){
    if(game.AscU1){
        document.getElementById("AscU1").classList.remove("unbought")
        document.getElementById("AscU1").classList.add("bought")
    }
    else{
        document.getElementById("AscU1").classList.remove("bought")
        document.getElementById("AscU1").classList.add("unbought")
    }
}
function CheckQOLUpgs(){
    if(game.QOLU[1]){
        document.getElementById("QOLU1").classList.remove("unbought")
        document.getElementById("QOLU1").classList.add("bought")
        document.getElementById("QOLU2").classList.remove("hidden")
    }
    else{
        document.getElementById("QOLU1").classList.add("unbought")
        document.getElementById("QOLU1").classList.remove("bought")
        document.getElementById("QOLU2").classList.add("hidden")
    }
    if(game.QOLU[2]){
        document.getElementById("QOLU2").classList.remove("unbought")
        document.getElementById("QOLU2").classList.add("bought")
        document.getElementById("QOLU3").classList.remove("hidden")
    }
    else{
        document.getElementById("QOLU2").classList.add("unbought")
        document.getElementById("QOLU2").classList.remove("bought")
        document.getElementById("QOLU3").classList.add("hidden")
    }
    if(game.QOLU[3]){
        document.getElementById("QOLU3").classList.remove("unbought")
        document.getElementById("QOLU3").classList.add("bought")
        document.getElementById("QOLU4").classList.remove("hidden")
    }
    else{
        document.getElementById("QOLU3").classList.add("unbought")
        document.getElementById("QOLU3").classList.remove("bought")
        document.getElementById("QOLU4").classList.add("hidden")
    }
    if(game.QOLU[4]){
        document.getElementById("QOLU4").classList.remove("unbought")
        document.getElementById("QOLU4").classList.add("bought")
    }
    else{
        document.getElementById("QOLU4").classList.add("unbought")
        document.getElementById("QOLU4").classList.remove("bought")
    }
}
