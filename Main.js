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

function GoPrestige(){
    game.points = 0;
    game.prestigeAmount += game.prestigeGain;
};

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

function GoBooster(){
    if(game.points >= game.boosterrequirement){
        if(!game.QOLU[4]){
            game.points = 0
            game.prestigeAmount = 0
            game.PU1 = false
            game.PU2 = false
            game.PU3 = false
            game.powerAmount = 0
            game.powB1 = 0
            game.powB2 = 0
            game.powB3 = 0
        }
        game.boosters += 1
    }
    game.powerEffect = 1 + game.powerAmount ** 0.5;
}

function CheckBoosters(){
    if(game.boosters >= 18){
        game.boosterrequirement = 10 ** 308
    }
    else{
        game.boosterrequirement = (10 ** 9) * (10 ** (game.boosters ** 2))
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

function ResetAscension(){
    //console.log(game.points, "before reset")
    if(game.boosters >= 4){
        if(game.RankLevel >= 2){
            game.PointAuto = 1
            game.Presauto = 1
            game.Powauto = 1
            game.Autoauto = 0
        }
        else{
            game.PointAuto = 0
            game.Presauto = 0
            game.Powauto = 0
            game.Autoauto = 0
        }
        if(game.RankLevel < 3){
            game.QOLU[1] = false
        }
        if(game.RankLevel < 5){
            game.QOLU[2] = false
            game.QOLU[3] = false
        }
        game.QOLU[4] = false
    
        game.AscAmount += game.AscGain
        game.points = 0
        game.prestigeAmount = 0
        game.PU1 = false
        game.PU2 = false
        game.PU3 = false
        game.powerAmount = 0
        game.powB1 = 0
        game.powB2 = 0
        game.powB3 = 0
        game.boosters = 0
        game.BM1 = false
        game.BM2 = false
        game.BM3 = false
        game.BU1 = false
        game.BU2 = false
        game.BU3 = false
        game.AutoAmount = 0
    }
    game.ifAscend = true
    //console.log(game.points, "after reset")
}
function GoAscension(){
    clearInterval(Automated)
    ResetAscension()
    Automated = setInterval (function(){
        runautomation()
    }, 50)
}

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
}
function RespecAllocations(){
    game.APU = [[false, false, false], [false, false, false], [false, false, false]]
    game.APamount[1] = game.APamount[0]
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
