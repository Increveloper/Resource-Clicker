function formatNumber(num) {
    if (num < 1e6) return num.toFixed(2); // show normal up to 1M

    const exponent = Math.floor(Math.log10(num));
    const mantissa = num / Math.pow(10, exponent);
    // remove unnecessary decimals like 1.00 -> 1
    const cleanMantissa = parseFloat(mantissa.toFixed(2)).toString();

    return `${cleanMantissa}e${exponent}`;
    // Done by ChatGPT
}
function formatNumberEdit(num) {
    if (num < 1e6) return num; // show normal up to 1M

    const exponent = Math.floor(Math.log10(num));
    const mantissa = num / Math.pow(10, exponent);
    // remove unnecessary decimals like 1.00 -> 1
    const cleanMantissa = parseFloat(mantissa.toFixed(2)).toString();

    return `${cleanMantissa}e${exponent}`;
    // Done by ChatGPT
}
function logbase(value, base){
    return Math.log(value) / Math.log(base)
}
function UpdateUnlockDisplay(){
    if(game.unlockAmount >= 1){
        document.getElementById("unlock1").classList.remove("hidden")
    }
    else{
        document.getElementById("unlock1").classList.add("hidden")
    }
    if(game.unlockAmount >= 2){
        document.getElementById("unlock2").classList.remove("hidden")
    }
    else{
        document.getElementById("unlock2").classList.add("hidden")
    }
    if(game.unlockAmount >= 3){
        document.getElementById("unlock3").classList.remove("hidden")
    }
    else{
        document.getElementById("unlock3").classList.add("hidden")
    }
    if(game.unlockAmount >= 4){
        document.getElementById("unlock4").classList.remove("hidden")
    }
    else{
        document.getElementById("unlock4").classList.add("hidden")
    }
    if(game.unlockAmount >= 5){
        document.getElementById("unlock5").classList.remove("hidden")
    }
    else{
        document.getElementById("unlock5").classList.add("hidden")
    }
    if(game.unlockAmount >= 6){
        document.getElementById("unlock6").classList.remove("hidden")
    }
    else{
        document.getElementById("unlock6").classList.add("hidden")
    }
    if(game.unlockAmount >= 7){
        document.getElementById("unlock7").classList.remove("hidden")
    }
    else{
        document.getElementById("unlock7").classList.add("hidden")
    }
    if(game.unlockAmount >= 8){
        document.getElementById("unlock8").classList.remove("hidden")
    }
    else{
        document.getElementById("unlock8").classList.add("hidden")
    }
}
function calculatePS1(){
    game.PointSoftcapStart = 10 ** 50
    game.PointSoftcapEffect = 0.4

    if(game.RankLevel >= 10){
        game.PointSoftcapEffect += 0.05
    }
    if(game.RankLevel >= 11){
        game.PointSoftcapEffect += 0.05
    }
    if(game.LumenMilestones[1]){
        game.PointSoftcapEffect += 0.05
    }
}
function calculatePS2(){
    game.SecondPointSoftcapEffect = 0.1
    game.SecondPointSoftcapStart = 10 ** 75

    if(game.LumenMilestones[1]){
        game.SecondPointSoftcapEffect += 0.02
    }
}
function displayPointSoftcap(){
    if(game.points >= game.PointSoftcapStart){
        document.getElementById("PS1").classList.remove("hidden")
    }
    else{
        document.getElementById("PS1").classList.add("hidden")
    }
    if(game.points >= game.SecondPointSoftcapStart){
        document.getElementById("PS2").classList.remove("hidden")
    }
    else{
        document.getElementById("PS2").classList.add("hidden")
    }
}
function calculatePPC(){
    game.ppc = 1

    if(game.PU1){
        game.ppc *=2
    }
    if(game.PU2){
        game.ppc *= 3
    }
    if(game.PU3){
        game.ppc *=5
    }
    if(game.BM2 && game.boosters === 2){
        game.ppc *= 20
    }
    if(game.BU1){
        game.ppc *= game.BU1effect
    }
    if(game.RankLevel >= 1){
        game.ppc *= 10
    }
    if(game.RankLevel >= 6){
        game.ppc *= 100
    }
    if(game.AscU2 && game.InVoid){
        game.ppc *= 10 ** 5
    }
    if(game.APU[0][1]){
        game.ppc *= 10
    }
    if(game.APU[0][2]){
        game.ppc *= 1.5 ** game.upgamnt
    }
    if(game.ActiveEffect[0]){
        game.ppc *= game.VoidBooster1[0]
    }
    if(game.ActiveEffect[0] && game.APU[0][3]){
        game.ppc *= 1.5 ** game.VoidBoosters
    }
    if(game.RankLevel >= 10){
        game.ppc *= 100
    }
    if(game.RankLevel >= 11){
        game.ppc /= 100000
    }
    if(game.LumenMilestones[1]){
        game.ppc /= 1000
    }
    if(game.LumenMilestones[2]){
        game.ppc **= 1.1
    }

    game.ppc *= game.powB1base ** game.powB1
    game.ppc *= game.AscB1[2]
    game.ppc *= game.powerEffect
    game.ppc *= game.boostereffect
    game.ppc *= game.VoidEffect[0]
    game.ppc *= game.WavelengthEffect[1]

    if(game.InVoid){
        game.ppc **= 0.25
        game.ppc /= 100000
    }

    game.ppc *= game.VoidEnergy[2]
    if(game.RankLevel >= 8){
        if(game.InVoid){
            game.ppc *= 1.1 ** game.APamount[0]
        }
        else{
            game.ppc *= 1.5 ** game.APamount[0]
        }
    }

    if(game.ppc >= game.PointSoftcapStart){
        game.ppc /= game.PointSoftcapStart
        game.ppc **= game.PointSoftcapEffect
        game.ppc *= game.PointSoftcapStart
    }
    if(game.ppc >= game.SecondPointSoftcapStart){
        game.ppc /= game.SecondPointSoftcapStart
        game.ppc **= game.SecondPointSoftcapEffect
        game.ppc *= game.SecondPointSoftcapStart
    }
}
function calculatePP(){
    var BeaconActive = false
    game.prestigeGain = Math.floor((game.points / 10) ** 0.5)

    if(game.BU2){
        game.prestigeGain *= game.BU2effect
    }
    if(game.PU5){
        game.prestigeGain *= 10
    }
    if(game.RankLevel >= 1){
        game.prestigeGain *= 5
    }
    if(game.RankLevel >= 6){
        game.prestigeGain *= 10
    }
    if(game.APU[1][1]){
        game.prestigeGain *= 10
    }
    if(game.APU[1][2]){
        game.prestigeGain *= 1.2 ** game.APamount[0]
    }
    if(game.ActiveEffect[0]){
        game.prestigeGain *= game.VoidBooster1[1]
    }
    if(game.ActiveEffect[0] && game.APU[1][3]){
        game.prestigeGain *= 1.5 ** game.VoidBoosters
    }
    game.prestigeGain *= game.powB2base ** game.powB2
    game.prestigeGain *= game.VoidEffect[1]
    game.prestigeGain *= game.WavelengthEffect[2]

    for(let i = 1; i < game.BeaconChals.length; i++){
        if(game.BeaconChals[i]){
            BeaconActive = true
        }
    }

    if(BeaconActive){
        game.prestigeGain **= 0.2
    }
}
function calculatePPow(){
    game.powerGain = Math.floor(game.prestigeAmount ** 0.5)

    if(game.PU5){
        game.powerGain *= 10
    }
    if(game.BU3){
        game.powerGain *= game.BU3effect
    }
    if(game.RankLevel >= 1){
        game.powerGain *= 3
    }
    if(game.RankLevel >= 6){
        game.powerGain *= 5
    }
    if(game.APU[1][1]){
        game.powerGain *= 10
    }
    if(game.APU[1][2]){
        game.powerGain *= 1.2 ** game.APamount[0]
    }
    if(game.ActiveEffect[0]){
        game.powerGain *= game.VoidBooster1[2] 
    }
    if(game.ActiveEffect[0] && game.APU[1][3]){
        game.powerGain *= 1.5 ** game.VoidBoosters
    }
    game.powerGain *= game.powB3base ** game.powB3
    game.powerGain *= game.VoidEffect[2]
    game.powerGain *= game.WavelengthEffect[3]
}
function calculatePBBASE(){
    game.powB1base = 2
    game.powB2base = 2
    game.powB3base = 2
    var BeaconActive = false

    if(game.BM1){
        game.powB1base += 1
    }
    if(game.APU[1][0]){
        game.powB2base += 1
        game.powB3base += 1
    }

    for(let i = 2; i < game.BeaconChals.length; i++){
        if(game.BeaconChals[i]){
            BeaconActive = true
        }
    }

    if(BeaconActive){
        game.powB1base = 1
        game.powB2base = 1
        game.powB3base = 1
    }
}
function calculatePBMAX(){
    game.powB1max = 10
    game.powB2max = 10
    game.powB3max = 10

    if(game.PU4){
        game.powB1max += 10
    }
    if(game.ActiveEffect[0]){
        game.powB1max += game.VoidBooster1[3]
        game.powB2max += game.VoidBooster1[3]
        game.powB3max += game.VoidBooster1[3]
    }
}
function calculatePPowEffExp(){
    game.powerEffectExp = 0.5

    if(game.PU6){
        game.powerEffectExp += 0.05
    }
    if(game.LumenMilestones[2]){
        game.powerEffectExp += 0.05
    }
}
function calculateBoosterBase(){
    game.boosterbase = 2
    var BeaconActive = false

    if(game.APU[0][0]){
        game.boosterbase += 1
    }

    for(let i = 3; i < game.BeaconChals.length; i++){
        if(game.BeaconChals[i]){
            BeaconActive = true
        }
    }

    if(BeaconActive){
        game.boosterbase **= 0.25
    }
}
function DisplayBoostCost(){
    for (let el of document.getElementsByClassName("boostercost")) {
        el.textContent = game.boostupgcost[game.bstrupgamnt];
    };
}
function calculateupgs(){
    game.upgamnt = 0
    game.presupgamnt = 0
    game.bstrupgamnt = 0
    game.ascupgamnt = 0
    game.QOLUBought = 0
    if(game.PU1){
        game.upgamnt += 1
        game.presupgamnt += 1
    }
    if(game.PU2){
        game.upgamnt += 1
        game.presupgamnt += 1
    }
    if(game.PU3){
        game.upgamnt += 1
        game.presupgamnt += 1
    }
    if(game.PU4){
        game.upgamnt += 1
        game.presupgamnt += 1
    }
    if(game.PU5){
        game.upgamnt += 1
        game.presupgamnt += 1
    }
    if(game.PU6){
        game.upgamnt += 1
        game.presupgamnt += 1
    }
    if(game.BU1){
        game.upgamnt += 1
        game.bstrupgamnt += 1
    }
    if(game.BU2){
        game.upgamnt += 1
        game.bstrupgamnt += 1
    }
    if(game.BU3){
        game.upgamnt += 1
        game.bstrupgamnt += 1
    }
    if(game.AscU1){
        game.upgamnt += 1
        game.ascupgamnt += 1
    }
    for (let i = 0; i <= 3; i++){
        for (let j = 0; j <= 3; j++){
            if(game.APU[i][j]){
                game.upgamnt += 1
                game.ascupgamnt += 1
            }
        }
    }
    if(game.QOLU[0]){
        game.upgamnt += 1
        game.QOLUBought += 1
    }
    if(game.QOLU[1]){
        game.upgamnt += 1
        game.QOLUBought += 1
    }
    if(game.QOLU[2]){
        game.upgamnt += 1
        game.QOLUBought += 1
    }
    if(game.QOLU[3]){
        game.upgamnt += 1
        game.QOLUBought += 1
    }
}
function calculateMiles(){
    game.miles = 0
    game.bstrmiles = 0
    game.LumenMilesAmnt = 0

    if(game.BM1){
        game.miles += 1
        game.bstrmiles += 1
    }
    if(game.BM2){
        game.miles += 1
        game.bstrmiles += 1
    }
    if(game.BM3){
        game.miles += 1
        game.bstrmiles += 1
    }
    for(i = 0; i <= 2; i++){
        if(game.LumenMilestones[i]){
            game.miles += 1
            game.LumenMilesAmnt += 1 
        }
    }
}
function calculateAsc(){
    game.AscGain = game.boostereffect / Math.max(1, game.boosters) ** 2
    if(game.RankLevel >= 1){
        game.AscGain *= 2
    }
    if(game.RankLevel >= 4){
        game.AscGain *= game.rank4reward
    }
    if(game.APU[2][1]){
        game.AscGain *= 10
    }
    if(game.APU[2][2]){
        game.AscGain *= 1.1 ** game.APamount[0]
    }
    if(game.VoidEffect[1]){
        game.AscGain *= game.VoidBooster2[0]
    }
    if(game.VoidEffect[1] && game.APU[2][3]){
        game.AscGain *= 1.5 ** game.VoidBoosters
    }

    game.AscGain *= game.VoidEffect[3]
    game.AscGain *= game.WavelengthEffect[4]
}
function calculateRankRewards(){
    game.rank4exp = 1

    if(game.APU[2][0]){
        game.rank4exp += 1
    }
    if(game.RankLevel >= 8){
        game.rank4exp += 1
    }
    if(game.ActiveEffect[1]){
        game.rank4exp += game.VoidBooster2[1]
    }

    game.rank4reward = game.RankLevel

    game.rank4reward **= game.rank4exp
}
function RankUpdates(){
    if(game.VoidBuyables[2][0] >= 5){
        game.RankRequirement = [1, 2, 5, 15, 200, 500, 10 ** 6, 10 ** 8, 5 * 10 ** 10, 10 ** 13, 10 ** 15, 10 ** 300]
        game.RankEffect = ["Boost points by 10, Prestige by 5, Power by 3 and Ascension points by 2", "Keep 1 of each of the first three automations on ascension", "Unlock more Prestige upgrades and keep QOL I on Ascend", "Boost Ascension points based on Ranks and unlock some Ascension upgrades", "Keep QOL II and QOL III on Ascension, each rank after 4 gives 1 extra AP", "Gain another extra AP per rank after 4, boost points, prestige, powers by 100, 10 and 5 respectively", "Boost Points by 100 after exponents and unlock 2 more Ascension Upgrades", "Each AP boosts points by 1.5 (1.1 in The Void) after exponents and increase Rank 4 reward exponent by 1", "Gain 100x more Void Power, unlock a new row and column of AP upgrades", "Gain 100x more points, points softcap exponent is weakened (^0.4 -> ^0.45)", "First Point softcap is weakened further (^0.45 -> ^0.5) but divide Points by 100000", "-"]
    }
    else if(game.VoidBuyables[2][0] >= 4){
        game.RankRequirement = [1, 2, 5, 15, 200, 500, 10 ** 6, 10 ** 8, 5 * 10 ** 10, 10 ** 13, 10 ** 300]
        game.RankEffect = ["Boost points by 10, Prestige by 5, Power by 3 and Ascension points by 2", "Keep 1 of each of the first three automations on ascension", "Unlock more Prestige upgrades and keep QOL I on Ascend", "Boost Ascension points based on Ranks and unlock some Ascension upgrades", "Keep QOL II and QOL III on Ascension, each rank after 4 gives 1 extra AP", "Gain another extra AP per rank after 4, boost points, prestige, powers by 100, 10 and 5 respectively", "Boost Points by 100 after exponents and unlock 2 more Ascension Upgrades", "Each AP boosts points by 1.5 (1.1 in The Void) after exponents and increase Rank 4 reward exponent by 1", "Gain 100x more Void Power, unlock a new row and column of AP upgrades", "Gain 100x more points, points softcap exponent is weakened (^0.4 -> ^0.45)", "-", "-"]
    }
    else if(game.VoidBuyables[2][0] >= 3){
        game.RankRequirement = [1, 2, 5, 15, 200, 500, 10 ** 6, 10 ** 8, 5 * 10 ** 10, 10 ** 300]
        game.RankEffect = ["Boost points by 10, Prestige by 5, Power by 3 and Ascension points by 2", "Keep 1 of each of the first three automations on ascension", "Unlock more Prestige upgrades and keep QOL I on Ascend", "Boost Ascension points based on Ranks and unlock some Ascension upgrades", "Keep QOL II and QOL III on Ascension, each rank after 4 gives 1 extra AP", "Gain another extra AP per rank after 4, boost points, prestige, powers by 100, 10 and 5 respectively", "Boost Points by 100 after exponents and unlock 2 more Ascension Upgrades", "Each AP boosts points by 1.5 (1.1 in The Void) after exponents and increase Rank 4 reward exponent by 1", "Gain 100x more Void Power, unlock a new row and column of AP upgrades", "-", "-", "-"]
    }
    else if(game.VoidBuyables[2][0] >= 2){
        game.RankRequirement = [1, 2, 5, 15, 200, 500, 10 ** 6, 10 ** 8, 10 ** 300]
        game.RankEffect = ["Boost points by 10, Prestige by 5, Power by 3 and Ascension points by 2", "Keep 1 of each of the first three automations on ascension", "Unlock more Prestige upgrades and keep QOL I on Ascend", "Boost Ascension points based on Ranks and unlock some Ascension upgrades", "Keep QOL II and QOL III on Ascension, each rank after 4 gives 1 extra AP", "Gain another extra AP per rank after 4, boost points, prestige, powers by 100, 10 and 5 respectively", "Boost Points by 100 after exponents and unlock 2 more Ascension Upgrades", "Each AP boosts points by 1.5 (1.1 in The Void) after exponents and increase Rank 4 reward exponent by 1", "-", "-", "-", "-",]
    }
    else if(game.VoidBuyables[2][0] >= 1){
        game.RankRequirement = [1, 2, 5, 15, 200, 500, 10 ** 6, 10 ** 300]
        game.RankEffect = ["Boost points by 10, Prestige by 5, Power by 3 and Ascension points by 2", "Keep 1 of each of the first three automations on ascension", "Unlock more Prestige upgrades and keep QOL I on Ascend", "Boost Ascension points based on Ranks and unlock some Ascension upgrades", "Keep QOL II and QOL III on Ascension, each rank after 4 gives 1 extra AP", "Gain another extra AP per rank after 4, boost points, prestige, powers by 100, 10 and 5 respectively", "Boost Points by 100 after exponents and unlock 2 more Ascension Upgrades", "-", "-", "-", "-", "-",]
    }
    else if(game.unlockAmount >= 5 && game.AscU1){
        game.RankRequirement = [1, 2, 5, 15, 200, 500, 10 ** 300]
        game.RankEffect = ["Boost points by 10, Prestige by 5, Power by 3 and Ascension points by 2", "Keep 1 of each of the first three automations on ascension", "Unlock more Prestige upgrades and keep QOL I on Ascend", "Boost Ascension points based on Ranks and unlock some Ascension upgrades", "Keep QOL II and QOL III on Ascension, each rank after 4 gives 1 extra AP", "Gain another extra AP per rank after 4, boost points, prestige, powers by 100, 10 and 5 respectively", "-", "-", "-", "-", "-", "-"]
    }
    else{
        game.RankRequirement = [1, 2, 5, 15, 10 ** 300]
        game.RankEffect = ["Boost points by 10, Prestige by 5, Power by 3 and Ascension points by 2", "Keep 1 of each of the first three automations on ascension", "Unlock more Prestige upgrades and keep QOL I on Ascend", "Boost Ascension points based on Ranks and unlock some Ascension upgrades", "-", "-", "-", "-", "-", "-", "-", "-"]
    }
}
function calculateAP(){
    game.APamount[0] = game.APbuyables[0][0] + game.APbuyables[1][0] + game.APbuyables[2][0] + game.APbuyables[3][0] + game.APbuyables[4][0]
    if(game.RankLevel >= 5){
        game.APamount[0] += game.RankLevel - 4
    }
    if(game.RankLevel >= 6){
        game.APamount[0] += game.RankLevel - 4
    }
    if(game.ActiveEffect[1]){
        game.APamount[0] += game.VoidBooster2[3]
    }
    game.APamount[0] += game.WavelengthEffect[5]

    game.APamount[1] = game.APamount[0]
    if(game.APU[0][0]){
        game.APamount[1] -= 1
    }
    if(game.APU[0][1]){
        game.APamount[1] -= 1
    }
    if(game.APU[0][2]){
        game.APamount[1] -= 2
    }
    if(game.APU[0][3]){
        game.APamount[1] -= 10
    }
    if(game.APU[1][0]){
        game.APamount[1] -= 1
    }
    if(game.APU[1][1]){
        game.APamount[1] -= 2
    }
    if(game.APU[1][2]){
        game.APamount[1] -= 5
    }
    if(game.APU[1][3]){
        game.APamount[1] -= 10
    }
    if(game.APU[2][0]){
        game.APamount[1] -= 2
    }
    if(game.APU[2][1]){
        game.APamount[1] -= 5
    }
    if(game.APU[2][2]){
        game.APamount[1] -= 14
    }
    if(game.APU[2][3]){
        game.APamount[1] -= 20
    }
    if(game.APU[3][0]){
        game.APamount[1] -= 10
    }
    if(game.APU[3][1]){
        game.APamount[1] -= 10
    }
    if(game.APU[3][2]){
        game.APamount[1] -= 20
    }
    if(game.APU[3][3]){
        game.APamount[1] -= 30
    }
}
function calculateVoidEnergy(){
    game.VoidEnergy[0] = game.points ** 0.2

    if(game.AscU2){
        game.VoidEnergy[0] *= 100
    }
    if(game.ActiveEffect[2]){
        game.VoidEnergy[0] *= game.VoidBooster3[0]
    }
    if(game.RankLevel >= 9){
        game.VoidEnergy[0] *= 100
    }
    if(game.APU[3][1]){
        game.VoidEnergy[0] *= 10
    }
    if(game.APU[3][2]){
        game.VoidEnergy[0] *= 1.05 ** game.APamount[0]
    }
    if(game.ActiveEffect[2] && game.APU[3][3]){
        game.VoidEnergy[0] *= 1.5 ** game.VoidBoosters
    }

    game.VoidEnergy[0] *= game.VoidBuyables[0][2] ** game.VoidBuyables[0][0]

    if(game.VoidEnergy[0] >= 10 ** 6){
        game.VoidEnergy[0] /= 10 ** 6
        game.VoidEnergy[0] **= 0.7
        game.VoidEnergy[0] *= 10 ** 6
    }
    if(game.VoidEnergy[0] >= 10 ** 10){
        game.VoidEnergy[0] /= 10 ** 10
        game.VoidEnergy[0] **= 0.6
        game.VoidEnergy[0] *= 10 ** 10
    }
    game.VoidEnergy[0] *= game.WavelengthEffect[6]
}
function calculateVoidPower(){
    game.VoidEnergy[3] = game.VoidEnergy[1] ** 0.8

    if(game.ActiveEffect[2]){
        game.VoidEnergy[3] *= game.VoidBooster3[1]
    }
    if(game.RankLevel >= 9){
        game.VoidEnergy[3] *= 100
    }
    if(game.APU[3][1]){
        game.VoidEnergy[3] *= 10
    }
    if(game.APU[3][2]){
        game.VoidEnergy[3] *= 1.1 ** game.APamount[0]
    }
    if(game.ActiveEffect[2] && game.APU[3][3]){
        game.VoidEnergy[3] *= 1.5 ** game.VoidBoosters
    }

    game.VoidEnergy[3] *= game.VoidBuyables[1][2] ** game.VoidBuyables[1][0]
}
function calculateVBBases(){
    game.VoidBuyables[0][2] = 2
    game.VoidBuyables[1][2] = 2

    if(game.APU[3][0]){
        game.VoidBuyables[0][2] += 1
        game.VoidBuyables[1][2] += 1
    }
}
function calculateRankExtensionCap(){
    if(game.ActiveEffect[2] && game.VoidBooster3[2] >= 3){
        game.VoidBuyables[2][1] =  [1000, 100000, 10 ** 10, 10 ** 12, 10 ** 15, 10 ** 300]
    }
    else if(game.ActiveEffect[2] && game.VoidBooster3[2] >= 2){
        game.VoidBuyables[2][1] =  [1000, 100000, 10 ** 10, 10 ** 12, 10 ** 300, 10 ** 300]
    }
    else if(game.ActiveEffect[2] && game.VoidBooster3[2] >= 1){
        game.VoidBuyables[2][1] =  [1000, 100000, 10 ** 10, 10 ** 300, 10 ** 300, 10 ** 300]
    }
    else{
        game.VoidBuyables[2][1] = [1000, 100000, 10 ** 300, 10 ** 300, 10 ** 300, 10 ** 300]
    }
}
function DisplayVoidToggle(){
    if(!game.InVoid){
        document.getElementById("VoidToggle").textContent = "Enter"
        document.getElementById("VoidEnergy").classList.add("hidden")
        document.getElementById("VES1").classList.add("hidden")
        document.getElementById("VES2").classList.add("hidden")
    }
    else if(game.InVoid){
        document.getElementById("VoidToggle").textContent = "Exit"
        document.getElementById("VoidEnergy").classList.remove("hidden")
        document.getElementById("VoidEnergyGain").textContent = formatNumber(game.VoidEnergy[0])
        if(game.VoidEnergy[0] >= 10 ** 6){
            document.getElementById("VES1").classList.remove("hidden")
        }
        else{
            document.getElementById("VES1").classList.add("hidden")
        }
        if(game.VoidEnergy[0] >= 10 ** 10){
            document.getElementById("VES2").classList.remove("hidden")
        }
        else{
            document.getElementById("VES2").classList.add("hidden")
        }
    }
}
function calculateVoidEffects(){
    game.VoidEffect[0] = 1 + game.VoidPower ** 0.2
    game.VoidEffect[1] = 1 + game.VoidPower ** 0.4
    game.VoidEffect[2] = 1 + game.VoidPower ** 0.2
    game.VoidEffect[3] = 1 + Math.log(game.VoidPower + 1)

    if(game.AscU3){
        game.VoidEffect[3] **= 2
        game.VoidEffect[3] /= 4
    }
    if(game.ActiveEffect[2]){
        game.VoidEffect[0] *= game.VoidBooster3[3]
        game.VoidEffect[1] *= game.VoidBooster3[3]
        game.VoidEffect[2] *= game.VoidBooster3[3]
        game.VoidEffect[3] *= game.VoidBooster3[3]
    }
}
function calculateMaxActiveVBs(){
    game.MaxVBAmount = 1
}
function calculateactivevoidboosters(){
    game.ActiveVBAmount = 0

    if(game.ActiveEffect[0]){
        game.ActiveVBAmount += 1
    }
    if(game.ActiveEffect[1]){
        game.ActiveVBAmount += 1
    }
    if(game.ActiveEffect[2]){
        game.ActiveVBAmount += 1
    }
}
function calculatemaxVB3(){
    game.VB3max = 2

    if(game.ActiveEffect[2]){
        game.VB3max += game.VoidBooster3[2]
    }
}
function CalculateWavelengthGains(){
    let ReqMet = true
    game.WavelengthGain = [game.BeaconPower, game.BeaconPower, game.BeaconPower, game.BeaconPower, game.BeaconPower, game.BeaconPower, game.BeaconPower, game.BeaconPower]

    game.WavelengthGain[0] *= 0.005
    game.WavelengthGain[1] *= 0.35
    game.WavelengthGain[2] *= 0.08
    game.WavelengthGain[3] *= 0.05
    game.WavelengthGain[4] *= 0.2
    game.WavelengthGain[5] *= 0.12
    game.WavelengthGain[6] *= 0.19
    game.WavelengthGain[7] *= 0.005
    for(let i = 0; i < 8; i++){
        if(i != 0){
            game.WavelengthGain[i] *= game.WavelengthEffect[0]
        }
        if(i != 7){
            game.WavelengthGain[i] *= game.WavelengthEffect[7]
        }
    }
    for(let i = 1; i < 7; i++){
        if(game.WavelengthGain[i] < 1000){
            ReqMet = false
        }
    }
    if(ReqMet){
        game.WavelengthGain[0] *= logbase(game.BeaconPower, 10)
        game.WavelengthGain[7] *= logbase(game.BeaconPower, 10)
    }
}
function CalculateWavelengthEffects(){
    game.WavelengthEffect = [1 + logbase(game.WavelengthAmount[0] + 1, 2), 1 + game.WavelengthAmount[1] ** 0.7, 1 + game.WavelengthAmount[2] ** 0.6, 1 + game.WavelengthAmount[3] ** 0.5, 1 + game.WavelengthAmount[4] ** 0.3, Math.floor(logbase(game.WavelengthAmount[5] + 1, 5) ** 1.2), 1 + game.WavelengthAmount[6] ** 0.2, 1 + logbase(game.WavelengthAmount[7] + 1, 2)]
}
function CalculateLumenBase(){
    game.Lumens[2] = 1

    game.Lumens[2] += game.LumenRebuyables[0][0]
    game.Lumens[2] *= 1.1 ** game.LumenRebuyables[1][0]
    game.Lumens[2] **= game.LumenMilesEffect
}
function CalculateLumenMilesEffect(){
    game.LumenMilesEffect = 1 + 0.1 * game.LumenMilesAmnt
}
function CalculateLumenBuyableCost(){
    game.LumenRebuyables[0][1] = 1 + game.LumenRebuyables[0][0]
    game.LumenRebuyables[1][1] = 1 + game.LumenRebuyables[1][0]

    if(game.LumenMilestones[2]){
        game.LumenRebuyables[0][1] -= 2
        game.LumenRebuyables[1][1] -= 2
    }

    if(game.LumenRebuyables[0][1] < 0){
        game.LumenRebuyables[0][1] = 0
    }
    if(game.LumenRebuyables[1][1] < 0){
        game.LumenRebuyables[1][1] = 0
    }
}
function calculateBuyablePoints(){
    let CostReduction1 = 0
    let CostReduction2 = 0
    let BPDecrease1 = 0
    let BPDecrease2 = 0
    if(game.LumenMilestones[2]){
        CostReduction1 += 2
        CostReduction2 += 2
    }

    game.BuyablePoints = game.Lumens[0] ** 2

    for(let i = 0; i < game.LumenRebuyables[0][0]; i++){
        BPDecrease1 = 1 + i - CostReduction1
        if(BPDecrease1 < 0){
            BPDecrease1 = 0
        }
        game.BuyablePoints -= BPDecrease1
    }
    for(let j = 0; j < game.LumenRebuyables[1][0]; i++){
        BPDecrease1 = 1 + j - CostReduction2
        if(BPDecrease2 < 0){
            BPDecrease2 = 0
        }
        game.BuyablePoints -= BPDecrease2
    }
}
setInterval(function(){
    UpdateUnlockDisplay();
    calculatePS1();
    calculatePS2();
    displayPointSoftcap();
    calculatePPC();
    calculatePP();
    calculatePPow();
    calculatePPowEffExp();
    calculatePBBASE();
    calculatePBMAX();
    calculateBoosterBase();
    DisplayBoostCost();
    calculateupgs();
    calculateMiles();
    calculateAsc();
    calculateRankRewards();
    RankUpdates();
    calculateAP();
    DisplayVoidToggle();
    if(game.InVoid){
        calculateVoidEnergy();
    }
    calculateVoidPower();
    calculateVBBases();
    calculateRankExtensionCap();
    calculateVoidEffects();
    calculateactivevoidboosters();
    calculatemaxVB3();
    CalculateWavelengthGains();
    CalculateWavelengthEffects();
    CalculateLumenBase();
    CalculateLumenMilesEffect();
    calculateBuyablePoints();
    game.boostereffect = game.boosterbase ** game.boosters;
},50);
