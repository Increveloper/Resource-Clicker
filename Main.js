// The three lines below are from ChatGPT, used to check for duplicate IDs so i don't accidentally bug the game
const ids = [...document.querySelectorAll('[id]')].map(el => el.id);
const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);
console.log([...new Set(duplicates)]);

// Main Tab Items

function GainPoints(){
    game.points += game.ppc
};

function BuyUnlocker(){
    if (game.points >= game.unlockCost[game.unlockAmount]) {
        game.points -= game.unlockCost[game.unlockAmount];
        game.unlockAmount += 1;
    }
    else {
        console.log("Not enough points!")
    }
    updateTabs()
};

// Prestige Tab Items

function BuyPresUpg(){
    if(game.prestigeAmount >= game.presupgcost[game.presupgamnt]){
        document.getElementById(game.presupg[game.presupgamnt]).classList.remove("unbought")
        document.getElementById(game.presupg[game.presupgamnt]).classList.add("bought")
        game.prestigeAmount -= game.presupgcost[game.presupgamnt]
        game.upgamnt += 1
        game.presupgamnt += 1
    }
}

// Power Tab Items

function gainPowers(){
    game.powerAmount += game.powerGain;
};

// Booster Tab Items

function CheckBoosters(){
    if(game.boosters >= 18){
        game.boosterrequirement = 10 ** 308
    }
    else{
        game.boosterrequirement = (10 ** 8) * (10 ** (game.boosters ** 2))
    }
    if(game.boosters >= 1){
        game.BM1 = true
    }
    if(game.boosters >= 2){
        game.BM2 = true
    }
    if(game.boosters >= 3){
        game.BM3 = true
    }
}

function CheckMilestones(){
    if(game.BM1){
        document.getElementById("bm1").classList.remove("unachieved")
        document.getElementById("bm1").classList.add("achieved")
        document.getElementById("bm2").classList.remove("hidden")
    }
    else{
        document.getElementById("bm1").classList.remove("achieved")
        document.getElementById("bm1").classList.add("unachieved")
        document.getElementById("bm2").classList.add("hidden")
    }
    if(game.BM2){
        document.getElementById("bm2").classList.remove("unachieved")
        document.getElementById("bm2").classList.add("achieved")
        document.getElementById("bm3").classList.remove("hidden")
    }
    else{
        document.getElementById("bm2").classList.remove("achieved")
        document.getElementById("bm2").classList.add("unachieved")
        document.getElementById("bm3").classList.add("hidden")
    }
    if(game.BM3){
        document.getElementById("bm3").classList.remove("unachieved")
        document.getElementById("bm3").classList.add("achieved")
    }
    else{
        document.getElementById("bm3").classList.remove("achieved")
        document.getElementById("bm3").classList.add("unachieved")
    }
}

// Ascension Tab Items

function UpgradeRank(){
    if(game.AscAmount >= game.RankRequirement[game.RankLevel]){
        game.AscAmount = 0
        game.RankLevel += 1
    }
}
function updateRankRewards(){
    if(game.RankLevel >= 1){
        document.getElementById("RR1").classList.remove("hidden")
    }
    else{
        document.getElementById("RR1").classList.add("hidden")
    }
    if(game.RankLevel >= 2){
        document.getElementById("RR2").classList.remove("hidden")
    }
    else{
        document.getElementById("RR2").classList.add("hidden")
    }
    if(game.RankLevel >= 3){
        document.getElementById("RR3").classList.remove("hidden")
    }
    else{
        document.getElementById("RR3").classList.add("hidden")
    }
    if(game.RankLevel >= 4){
        document.getElementById("RR4").classList.remove("hidden")
    }
    else{
        document.getElementById("RR4").classList.add("hidden")
    }
    if(game.RankLevel >= 5){
        document.getElementById("RR5").classList.remove("hidden")
    }
    else{
        document.getElementById("RR5").classList.add("hidden")
    }
    if(game.RankLevel >= 6){
        document.getElementById("RR6").classList.remove("hidden")
    }
    else{
        document.getElementById("RR6").classList.add("hidden")
    }
    if(game.RankLevel >= 7){
        document.getElementById("RR7").classList.remove("hidden")
    }
    else{
        document.getElementById("RR7").classList.add("hidden")
    }
    if(game.RankLevel >= 8){
        document.getElementById("RR8").classList.remove("hidden")
    }
    else{
        document.getElementById("RR8").classList.add("hidden")
    }
    if(game.RankLevel >= 9){
        document.getElementById("RR9").classList.remove("hidden")
    }
    else{
        document.getElementById("RR9").classList.add("hidden")
    }
    if(game.RankLevel >= 10){
        document.getElementById("RR10").classList.remove("hidden")
    }
    else{
        document.getElementById("RR10").classList.add("hidden")
    }
    if(game.RankLevel >= 11){
        document.getElementById("RR11").classList.remove("hidden")
    }
    else{
        document.getElementById("RR11").classList.add("hidden")
    }
}
function RespecAllocations(){
    game.APU = [[false, false, false], [false, false, false], [false, false, false]]
    game.APamount[1] = game.APamount[0]
}

// The Void Items

function ToggleVoid(){
    game.PauseAuto = 0
    if(game.InVoid){
        game.VoidEnergy[1] += game.VoidEnergy[0]
        if(game.points >= game.BestPoints){
            game.BestPoints = game.points
        }
    }
    game.InVoid = !game.InVoid
    game.points = 0
    game.PauseAuto = 0
}
function GainVoidPower(){
    game.VoidPower += game.VoidEnergy[3]
}
function deactivateVB(){
    document.getElementById("VoidBooster1").classList.remove("activeVB")
    document.getElementById("VoidBooster1").classList.add("inactiveVB")
    game.ActiveEffect[0] = false
    document.getElementById("VoidBooster2").classList.remove("activeVB")
    document.getElementById("VoidBooster2").classList.add("inactiveVB")
    game.ActiveEffect[1] = false
    document.getElementById("VoidBooster3").classList.remove("activeVB")
    document.getElementById("VoidBooster3").classList.add("inactiveVB")
    game.ActiveEffect[2] = false
}
function activateVB(id, num){
    if(game.ActiveVBAmount < game.MaxVBAmount){
        document.getElementById(id).classList.remove("inactiveVB")
        document.getElementById(id).classList.add("activeVB")
        game.ActiveEffect[num] = true
    }
}
function CheckActiveVB(){
    if(game.ActiveVBAmount === game.MaxVBAmount){
        document.getElementById("VBButton1").textContent = "Max Void Boosters active!"
        document.getElementById("VBButton2").textContent = "Max Void Boosters active!"
        document.getElementById("VBButton3").textContent = "Max Void Boosters active!"
    }

    if(game.ActiveEffect[0]){
        document.getElementById("VBButton1").textContent = "Void Booster activated."
    }
    if(game.ActiveEffect[1]){
        document.getElementById("VBButton2").textContent = "Void Booster activated."
    }
    if(game.ActiveEffect[2]){
        document.getElementById("VBButton3").textContent = "Void Booster activated."
    }

    else{
        document.getElementById("VBButton1").textContent = "Click to activate this Void Booster!"
        document.getElementById("VBButton2").textContent = "Click to activate this Void Booster!"
        document.getElementById("VBButton3").textContent = "Click to activate this Void Booster!"
    }
}

// The Beacon Tab Items

function EnterBeacon(index){
    let AllFalse = true
    for(let i = 0; i < game.BeaconChals.length; i++){
        if(game.BeaconChals[i]){
            AllFalse = false
        }
    }
    if(AllFalse){
        EnterBeaconReset()
        game.BeaconChals[index] = true
        game.InVoid = true
    }
}

function ExitBeacon(){
    for (let i = 0; i < 4; i++){
        if(game.BeaconChals[i]){
            if(i === 0 && game.BeaconChalsBest[i] < game.points){
                game.BeaconChalsBest[0] = game.points
            }
            else if(i === 1 && game.BeaconChalsBest[1] < game.prestigeAmount){
                game.BeaconChalsBest[1] = game.prestigeAmount
            }
            else if(i === 2 && game.BeaconChalsBest[2] < game.powerAmount){
                game.BeaconChalsBest[2] = game.powerAmount
            }
            else if(i === 3 && game.BeaconChalsBest[3] < game.boosters){
                game.BeaconChalsBest[3] = game.boosters
            }
        }
    }
    game.BeaconChals = [false, false, false, false]
    game.InVoid = false
}
function BeaconDisplay(){
    if(game.BeaconEnergies[0] >= 4){
        document.getElementById("Beacon2").classList.remove("hidden")
    }
    else{
        document.getElementById("Beacon2").classList.add("hidden")
    }
    if(game.BeaconEnergies[1] >= 4){
        document.getElementById("Beacon3").classList.remove("hidden")
    }
    else{
        document.getElementById("Beacon3").classList.add("hidden")
    }
    if(game.BeaconEnergies[2] >= 4){
        document.getElementById("Beacon4").classList.remove("hidden")
    }
    else{
        document.getElementById("Beacon4").classList.add("hidden")
    }
}
function DisplayActiveBeacon(){
    if(game.BeaconChals[0]){
        document.getElementById("ActiveBeacon").textContent = "Point Beacon"
    }
    else if(game.BeaconChals[1]){
        document.getElementById("ActiveBeacon").textContent = "Prestige Beacon"
    }
    else if(game.BeaconChals[2]){
        document.getElementById("ActiveBeacon").textContent = "Power Beacon"
    }
    else if(game.BeaconChals[3]){
        document.getElementById("ActiveBeacon").textContent = "Booster Beacon"
    }
    else{
        document.getElementById("ActiveBeacon").textContent = "None"
    }
}

function GainWavelength(){
    let ReqMet = true
    for(let i = 1; i < 7; i++){
        game.WavelengthAmount[i] += game.WavelengthGain[i]
        if(game.WavelengthAmount[i] < 1000){
            ReqMet = false
        }
    }
    if(ReqMet){
        game.WavelengthAmount[0] += game.WavelengthGain[0]
        game.WavelengthAmount[7] += game.WavelengthGain[7]
    }
}
function CheckIRUV(){
    let ReqMet = true
    for(let i = 1; i < 7; i++){
        if(game.WavelengthAmount[i] < 1000){
            ReqMet = false
        }
    }

    if(ReqMet){
        document.getElementById("IRUV").classList.remove("hidden")
    }
    else{
        document.getElementById("IRUV").classList.add("hidden")
    }
}
function RespecBP(){
    game.LumenBuyables[0][0] = 0
    game.LumenBuyables[1][0] = 0
}
// Automation Tab Items

function GainAuto(){
    game.AutoAmount += game.AutoGain
}
function BuyPointAuto(){
    if(game.AutoAmount >= game.autocost[0]){
        game.AutoAmount -= game.autocost[0]
        game.PointAuto += 1
        console.log("Bought point automation!")
    }
}
function BuyPresAuto(){
    if(game.AutoAmount >= game.autocost[1]){
        game.AutoAmount -= game.autocost[1]
        game.Presauto += 1
    }
}
function BuyPowAuto(){
    if(game.AutoAmount >= game.autocost[2]){
        game.AutoAmount -= game.autocost[2]
        game.Powauto += 1
    }
}
function BuyAutoAuto(){
    if(game.AutoAmount >= game.autocost[3]){
        game.AutoAmount -= game.autocost[3]
        game.Autoauto += 1
    }
}
function UpdateAutoVisibility(){
    if(game.PointAuto >= 5){
        document.getElementById("presauto").classList.remove("hidden")
    }
    if(game.Presauto >= 5){
        document.getElementById("powauto").classList.remove("hidden")
    }
    if(game.Powauto >= 5){
        document.getElementById("autoauto").classList.remove("hidden")
    }
}
