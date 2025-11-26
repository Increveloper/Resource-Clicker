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
}
function RespecAllocations(){
    game.APU = [[false, false, false], [false, false, false], [false, false, false]]
    game.APamount[1] = game.APamount[0]
}

// The Void Items

function ToggleVoid(){
    if(game.InVoid){
        game.VoidEnergy[1] += game.VoidEnergy[0]
        if(game.points >= game.BestPoints){
            game.BestPoints = game.points
        }
    }
    game.InVoid = !game.InVoid
    game.points = 0
}
function GainVoidPower(){
    game.VoidPower += game.VoidEnergy[3]
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
