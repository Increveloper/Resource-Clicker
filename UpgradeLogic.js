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
    if(game.AscAmount >= 50 && !game.AscU1){
        game.AscAmount -= 50
        game.AscU1 = true
    }
}

function BuyAscU2(){
    if(game.AscAmount >= 10 ** 8 && !game.AscU2){
        game.AscU2 = true
        game.AscAmount -= 10 ** 8
    }
}
function BuyAscU3(){
    if(game.AscAmount >= 10 ** 10 && !game.AscU3){
        game.AscAmount -= 10 ** 10
        game.AscU3 = true
    }
}

// Ascension Buyables

function BuyAscB1(){
    if(game.AscAmount >= game.AscB1[3]){
        game.AscAmount -= game.AscB1[3]
        game.AscB1[0] += 1
    }
}

// Allocation points upgrades

function BuyPointAllocation(){
    if(game.points >= game.APbuyables[0][1]){
        game.APbuyables[0][0] += 1
        game.APbuyables[0][1] *= 10000
        game.APamount[1] += 1
    }
}
function BuyPrestigeAllocation(){
    if(game.prestigeAmount >= game.APbuyables[1][1]){
        game.APbuyables[1][0] += 1
        game.APbuyables[1][1] *= 2500
        game.APamount[1] += 1
    }
}
function BuyPowerAllocation(){
    if(game.powerAmount >= game.APbuyables[2][1]){
        game.APbuyables[2][0] += 1
        game.APbuyables[2][1] *= 500
        game.APamount[1] += 1
    }
}
function BuyAscensionAllocation(){
    if(game.AscAmount >= game.APbuyables[3][1]){
        game.APbuyables[3][0] += 1
        game.APbuyables[3][1] *= 4
        game.APamount[1] += 1
    }
}
function BuyVoidAllocation(){
    if(game.VoidPower >= game.APbuyables[4][1]){
        game.APbuyables[4][0] += 1
        game.APbuyables[4][1] *= 100
        game.APamount[1] += 1
    }
}

function BuyAPU11(){
    if(game.APamount[1] >= 1){
        game.APamount[1] -= 1
        game.APU[0][0] = true
    }
}
function BuyAPU12(){
    if(game.APamount[1] >= 1){
        game.APamount[1] -= 1
        game.APU[0][1] = true
    }
}
function BuyAPU13(){
    if(game.APamount[1] >= 2){
        game.APamount[1] -= 2
        game.APU[0][2] = true
    }
}
function BuyAPU14(){
    if(game.APamount[1] >= 10){
        game.APamount[1] -= 10
        game.APU[0][3] = true
    }
}
function BuyAPU21(){
    if(game.APamount[1] >= 1){
        game.APamount[1] -= 1
        game.APU[1][0] = true
    }
}
function BuyAPU22(){
    if(game.APamount[1] >= 2){
        game.APamount[1] -= 2
        game.APU[1][1] = true
    }
}
function BuyAPU23(){
    if(game.APamount[1] >= 5){
        game.APamount[1] -= 5
        game.APU[1][2] = true
    }
}
function BuyAPU24(){
    if(game.APamount[1] >= 10){
        game.APamount[1] -= 10
        game.APU[1][3] = true
    }
}
function BuyAPU31(){
    if(game.APamount[1] >= 2){
        game.APamount[1] -= 2
        game.APU[2][0] = true
    }
}
function BuyAPU32(){
    if(game.APamount[1] >= 5){
        game.APamount[1] -= 5
        game.APU[2][1] = true
    }
}
function BuyAPU33(){
    if(game.APamount[1] >= 14){
        game.APamount[1] -= 14
        game.APU[2][2] = true
    }
}
function BuyAPU34(){
    if(game.APamount[1] >= 20){
        game.APamount[1] -= 20
        game.APU[2][3] = true
    }
}
function BuyAPU41(){
    if(game.APamount[1] >= 10){
        game.APamount[1] -= 10
        game.APU[3][0] = true
    }
}
function BuyAPU42(){
    if(game.APamount[1] >= 10){
        game.APamount[1] -= 10
        game.APU[3][1] = true
    }
}
function BuyAPU43(){
    if(game.APamount[1] >= 20){
        game.APamount[1] -= 20
        game.APU[3][2] = true
    }
}
function BuyAPU44(){
    if(game.APamount[1] >= 40){
        game.APamount[1] -= 40
        game.APU[3][3] = true
    }
}

// Void Buyables

function BuyVB1(){
    if(game.VoidPower >= game.VoidBuyables[0][1]){
        game.VoidPower -= game.VoidBuyables[0][1]
        game.VoidBuyables[0][0] += 1
    }
}
function BuyVB2(){
    if(game.VoidPower >= game.VoidBuyables[1][1]){
        game.VoidPower -= game.VoidBuyables[1][1]
        game.VoidBuyables[1][0] += 1
    }
}
function BuyVB3(){
    if(game.VoidPower >= game.VoidBuyables[2][1][game.VoidBuyables[2][0]]){
        game.VoidPower -= game.VoidBuyables[2][1][game.VoidBuyables[2][0]]
        game.VoidBuyables[2][0] += 1
    }
}
// QOL Upgrades

function BuyQOLU1(){
    if(game.AutoAmount >= 100000){
        game.AutoAmount -= 100000
        game.QOLU[0] = true
    }
}
function BuyQOLU2(){
    if(game.AutoAmount >= 10 ** 7){
        game.AutoAmount -= 10 ** 7
        game.QOLU[1] = true
    }
}
function BuyQOLU3(){
    if(game.AutoAmount >= 10 ** 10){
        game.AutoAmount -= 10 ** 10
        game.QOLU[2] = true
    }
}
function BuyQOLU4(){
    if(game.AutoAmount >= 10 ** 15){
        game.AutoAmount -= 10 ** 15
        game.QOLU[3] = true
    }
}
function BuyQOLU5(){
    if(game.AutoAmount >= 10 ** 20){
        game.AutoAmount -= 10 ** 20
        game.QOLU[4] = true
    }
}
function BuyQOLU6(){
    if(game.AutoAmount >= 10 ** 25){
        game.AutoAmount -= 10 ** 25
        game.QOLU[5] = true
    }
}
function BuyQOLU7(){
    if(game.AutoAmount >= 10 ** 35){
        game.AutoAmount -= 10 ** 35
        game.QOLU[6] = true
    }
}
function BuyQOLU8(){
    if(game.AutoAmount >= 10 ** 40){
        game.AutoAmount -= 10 ** 40
        game.QOLU[7] = true
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
    if(game.RankLevel >= 7){
        document.getElementById("AscU2").classList.remove("hidden")
    }
    else{
        document.getElementById("AscU2").classList.add("hidden")
    }
    if(game.AscU2){
        document.getElementById("AscU2").classList.remove("unbought")
        document.getElementById("AscU2").classList.add("bought")
        document.getElementById("AscU3").classList.remove("hidden")
    }
    else{
        document.getElementById("AscU2").classList.remove("bought")
        document.getElementById("AscU2").classList.add("unbought")
        document.getElementById("AscU3").classList.add("hidden")
    }
    if(game.AscU3){
        document.getElementById("AscU3").classList.remove("unbought")
        document.getElementById("AscU3").classList.add("bought")
    }
    else{
        document.getElementById("AscU3").classList.remove("bought")
        document.getElementById("AscU3").classList.add("unbought")
    }
}
function checkAPU(){
    if(game.APU[0][0]){
        document.getElementById("APU11").classList.remove("unbought")
        document.getElementById("APU11").classList.add("bought")
        document.getElementById("APU12").classList.remove("hidden")
        document.getElementById("APU21").classList.remove("hidden")
    }
    else{
        document.getElementById("APU11").classList.remove("bought")
        document.getElementById("APU11").classList.add("unbought")
        document.getElementById("APU12").classList.add("hidden")
        document.getElementById("APU21").classList.add("hidden")
    }
    if(game.APU[0][1]){
        document.getElementById("APU12").classList.remove("unbought")
        document.getElementById("APU12").classList.add("bought")
        document.getElementById("APU13").classList.remove("hidden")
    }
    else{
        document.getElementById("APU12").classList.remove("bought")
        document.getElementById("APU12").classList.add("unbought")
        document.getElementById("APU13").classList.add("hidden")
    }
    if(game.APU[0][2]){
        document.getElementById("APU13").classList.remove("unbought")
        document.getElementById("APU13").classList.add("bought")
    }
    else{
        document.getElementById("APU13").classList.remove("bought")
        document.getElementById("APU13").classList.add("unbought")
    }
    if(game.APU[0][3]){
        document.getElementById("APU14").classList.remove("unbought")
        document.getElementById("APU14").classList.add("bought")
    }
    else{
        document.getElementById("APU14").classList.remove("bought")
        document.getElementById("APU14").classList.add("unbought")
    }
    if(game.APU[1][0]){
        document.getElementById("APU21").classList.remove("unbought")
        document.getElementById("APU21").classList.add("bought")
        document.getElementById("APU31").classList.remove("hidden")
    }
    else{
        document.getElementById("APU21").classList.remove("bought")
        document.getElementById("APU21").classList.add("unbought")
        document.getElementById("APU31").classList.add("hidden")
    }
    if(game.APU[1][1]){
        document.getElementById("APU22").classList.remove("unbought")
        document.getElementById("APU22").classList.add("bought")
    }
    else{
        document.getElementById("APU22").classList.remove("bought")
        document.getElementById("APU22").classList.add("unbought")
    }
    if(game.APU[1][2]){
        document.getElementById("APU23").classList.remove("unbought")
        document.getElementById("APU23").classList.add("bought")
    }
    else{
        document.getElementById("APU23").classList.remove("bought")
        document.getElementById("APU23").classList.add("unbought")
    }
    if(game.APU[1][3]){
        document.getElementById("APU24").classList.remove("unbought")
        document.getElementById("APU24").classList.add("bought")
    }
    else{
        document.getElementById("APU24").classList.remove("bought")
        document.getElementById("APU24").classList.add("unbought")
    }
    if(game.APU[2][0]){
        document.getElementById("APU31").classList.remove("unbought")
        document.getElementById("APU31").classList.add("bought")
    }
    else{
        document.getElementById("APU31").classList.remove("bought")
        document.getElementById("APU31").classList.add("unbought")
    }
    if(game.APU[2][1]){
        document.getElementById("APU32").classList.remove("unbought")
        document.getElementById("APU32").classList.add("bought")
    }
    else{
        document.getElementById("APU32").classList.remove("bought")
        document.getElementById("APU32").classList.add("unbought")
    }
    if(game.APU[2][2]){
        document.getElementById("APU33").classList.remove("unbought")
        document.getElementById("APU33").classList.add("bought")
    }
    else{
        document.getElementById("APU33").classList.remove("bought")
        document.getElementById("APU33").classList.add("unbought")
    }
    if(game.APU[2][3]){
        document.getElementById("APU34").classList.remove("unbought")
        document.getElementById("APU34").classList.add("bought")
    }
    else{
        document.getElementById("APU34").classList.remove("bought")
        document.getElementById("APU34").classList.add("unbought")
    }
    if(game.APU[3][0]){
        document.getElementById("APU41").classList.remove("unbought")
        document.getElementById("APU41").classList.add("bought")
    }
    else{
        document.getElementById("APU41").classList.remove("bought")
        document.getElementById("APU41").classList.add("unbought")
    }
    if(game.APU[3][1]){
        document.getElementById("APU42").classList.remove("unbought")
        document.getElementById("APU42").classList.add("bought")
    }
    else{
        document.getElementById("APU42").classList.remove("bought")
        document.getElementById("APU42").classList.add("unbought")
    }
    if(game.APU[3][2]){
        document.getElementById("APU43").classList.remove("unbought")
        document.getElementById("APU43").classList.add("bought")
    }
    else{
        document.getElementById("APU43").classList.remove("bought")
        document.getElementById("APU43").classList.add("unbought")
    }
    if(game.APU[3][3]){
        document.getElementById("APU44").classList.remove("unbought")
        document.getElementById("APU44").classList.add("bought")
    }
    else{
        document.getElementById("APU44").classList.remove("bought")
        document.getElementById("APU44").classList.add("unbought")
    }
    if(game.APU[0][1] && game.APU[1][0]){
        document.getElementById("APU22").classList.remove("hidden")
    }
    else{
        document.getElementById("APU22").classList.add("hidden")
    }
    if(game.APU[0][2] && game.APU[1][1]){
        document.getElementById("APU23").classList.remove("hidden")
    }
    else{
        document.getElementById("APU23").classList.add("hidden")
    }
    if(game.APU[1][1] && game.APU[2][0]){
        document.getElementById("APU32").classList.remove("hidden")
    }
    else{
        document.getElementById("APU32").classList.add("hidden")
    }
    if(game.APU[1][2] && game.APU[2][1]){
        document.getElementById("APU33").classList.remove("hidden")
    }
    else{
        document.getElementById("APU33").classList.add("hidden")
    }
    if(game.APU[0][3] && game.APU[1][2]){
        document.getElementById("APU24").classList.remove("hidden")
    }
    else{
        document.getElementById("APU24").classList.add("hidden")
    }
    if(game.APU[1][3] && game.APU[2][2]){
        document.getElementById("APU34").classList.remove("hidden")
    }
    else{
        document.getElementById("APU34").classList.add("hidden")
    }
    if(game.APU[2][1] && game.APU[3][0]){
        document.getElementById("APU42").classList.remove("hidden")
    }
    else{
        document.getElementById("APU42").classList.add("hidden")
    }
    if(game.APU[2][2] && game.APU[3][1]){
        document.getElementById("APU43").classList.remove("hidden")
    }
    else{
        document.getElementById("APU43").classList.add("hidden")
    }
    if(game.APU[2][3] && game.APU[3][2]){
        document.getElementById("APU44").classList.remove("hidden")
    }
    else{
        document.getElementById("APU44").classList.add("hidden")
    }
    if(game.RankLevel >= 9){
        document.getElementById("VoidAllocationRebuyable").classList.remove("hidden")
        document.getElementById("APU14").classList.remove("hidden")
        document.getElementById("APU41").classList.remove("hidden")
    }
    else{
        document.getElementById("VoidAllocationRebuyable").classList.add("hidden")
        document.getElementById("APU14").classList.add("hidden")
        document.getElementById("APU41").classList.add("hidden")
    }
}
function CheckQOLUpgs(){
    if(game.QOLU[0]){
        document.getElementById("QOLU1").classList.remove("unbought")
        document.getElementById("QOLU1").classList.add("bought")
        document.getElementById("QOLU2").classList.remove("hidden")
    }
    else{
        document.getElementById("QOLU1").classList.add("unbought")
        document.getElementById("QOLU1").classList.remove("bought")
        document.getElementById("QOLU2").classList.add("hidden")
    }
    if(game.QOLU[1]){
        document.getElementById("QOLU2").classList.remove("unbought")
        document.getElementById("QOLU2").classList.add("bought")
        document.getElementById("QOLU3").classList.remove("hidden")
    }
    else{
        document.getElementById("QOLU2").classList.add("unbought")
        document.getElementById("QOLU2").classList.remove("bought")
        document.getElementById("QOLU3").classList.add("hidden")
    }
    if(game.QOLU[2]){
        document.getElementById("QOLU3").classList.remove("unbought")
        document.getElementById("QOLU3").classList.add("bought")
        document.getElementById("QOLU4").classList.remove("hidden")
    }
    else{
        document.getElementById("QOLU3").classList.add("unbought")
        document.getElementById("QOLU3").classList.remove("bought")
        document.getElementById("QOLU4").classList.add("hidden")
    }
    if(game.QOLU[3]){
        document.getElementById("QOLU4").classList.remove("unbought")
        document.getElementById("QOLU4").classList.add("bought")
        document.getElementById("QOLU5").classList.remove("hidden")
    }
    else{
        document.getElementById("QOLU4").classList.add("unbought")
        document.getElementById("QOLU4").classList.remove("bought")
        document.getElementById("QOLU5").classList.add("hidden")
    }
    if(game.QOLU[4]){
        document.getElementById("QOLU5").classList.remove("unbought")
        document.getElementById("QOLU5").classList.add("bought")
        document.getElementById("QOLU6").classList.remove("hidden")
    }
    else{
        document.getElementById("QOLU5").classList.add("unbought")
        document.getElementById("QOLU5").classList.remove("bought")
        document.getElementById("QOLU6").classList.add("hidden")
    }
    if(game.QOLU[5]){
        document.getElementById("QOLU6").classList.remove("unbought")
        document.getElementById("QOLU6").classList.add("bought")
        document.getElementById("QOLU7").classList.remove("hidden")
    }
    else{
        document.getElementById("QOLU6").classList.add("unbought")
        document.getElementById("QOLU6").classList.remove("bought")
        document.getElementById("QOLU7").classList.add("hidden")
    }
    if(game.QOLU[6]){
        document.getElementById("QOLU7").classList.remove("unbought")
        document.getElementById("QOLU7").classList.add("bought")
        document.getElementById("QOLU8").classList.remove("hidden")
    }
    else{
        document.getElementById("QOLU7").classList.add("unbought")
        document.getElementById("QOLU7").classList.remove("bought")
        document.getElementById("QOLU8").classList.add("hidden")
    }
    if(game.QOLU[7]){
        document.getElementById("QOLU8").classList.remove("unbought")
        document.getElementById("QOLU8").classList.add("bought")
    }
    else{
        document.getElementById("QOLU8").classList.add("unbought")
        document.getElementById("QOLU8").classList.remove("bought")
    }
}
