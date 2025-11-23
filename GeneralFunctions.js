function formatNumber(num) {
    if (num < 1e6) return num.toFixed(2); // show normal up to 1M

    const exponent = Math.floor(Math.log10(num));
    const mantissa = num / Math.pow(10, exponent);
    // remove unnecessary decimals like 1.00 -> 1
    const cleanMantissa = parseFloat(mantissa.toFixed(2)).toString();

    return `${cleanMantissa}e${exponent}`;
    // Done by ChatGPT
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
    if(game.APU[0][1]){
        game.ppc *= 10
    }
    if(game.APU[0][2]){
        game.ppc *= 1.5 ** game.upgamnt
    }

    game.ppc *= game.powB1base ** game.powB1
    game.ppc *= game.AscB1[3]
    game.ppc *= game.powerEffect
    game.ppc *= game.boostereffect
}
function calculatePP(){
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
    game.prestigeGain *= game.powB2base ** game.powB2
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
    game.powerGain *= game.powB3base ** game.powB3
}
function calculatePBBASE(){
    game.powB1base = 2
    game.powB2base = 2
    game.powB3base = 2

    if(game.BM1){
        game.powB1base += 1
    }
    if(game.APU[1][0]){
        game.powB2base += 1
        game.powB3base += 1
    }
}
function calculatePB1MAX(){
    game.powB1max = 10

    if(game.PU4){
        game.powB1max += 10
    }
}
function calculatePPowEffExp(){
    game.powerEffectExp = 0.5

    if(game.PU6){
        game.powerEffectExp += 0.05
    }
}
function calculateBoosterBase(){
    game.boosterbase = 2

    if(game.APU[0][0]){
        game.boosterbase += 1
    }
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
    for (let i = 0; i <= 2; i++){
        for (let j = 0; j <= 2; j++){
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
    if(game.BM1){
        game.miles += 1
        game.bstrmiles += 1
    }
}
function calculateAsc(){
    game.AscGain = game.boostereffect / Math.max(1, game.boosters) ** 2
    //console.log("Base AP gain:", game.AscGain)
    if(game.RankLevel >= 1){
        game.AscGain *= 2
        //console.log("Applied rank 1 boost!")
    }
    //console.log("New AP gain:", game.AscGain)
    if(game.RankLevel >= 4){
        game.AscGain *= game.rank4reward
    }
    if(game.APU[2][1]){
        game.AscGain *= 10
    }
    if(game.APU[2][2]){
        game.AscGain *= 1.1 ** game.APamount[0]
    }
}
function calculateRankRewards(){
    game.rank4exp = 1

    if(game.APU[2][0]){
        game.rank4exp += 1
    }

    game.rank4reward = game.RankLevel ** game.rank4exp
}
function RankUpdates(){
    if(game.unlockAmount >= 5 && game.AscU1){
        game.RankRequirement = [1, 2, 10, 100, 200, 500, 10 ** 300]
        game.RankEffect = ["Boost points by 10, Prestige by 5, Power by 3 and Ascension points by 2", "Keep 1 of each of the first three automations on ascension", "Unlock more Prestige upgrades and keep QOL I on Ascend", "Boost Ascension points based on Ranks and unlock some Ascension upgrades", "Keep QOL II and QOL III on Ascension, each rank after 4 gives 1 extra AP", "Gain another extra AP per rank, boost points, prestige, powers by 100, 10 and 5 respectively", "-"]
    }
    else{
        game.RankRequirement = [1, 2, 10, 100, 10 ** 300]
        game.RankEffect = ["Boost points by 10, Prestige by 5, Power by 3 and Ascension points by 2", "Keep 1 of each of the first three automations on ascension", "Unlock more Prestige upgrades and keep QOL I on Ascend", "Boost Ascension points based on Ranks and unlock some Ascension upgrades", "-"]
    }
}
setInterval(function(){
    calculatePPC();
    calculatePP();
    calculatePPow();
    calculatePPowEffExp();
    calculatePBBASE();
    calculatePB1MAX();
    calculateBoosterBase();
    calculateupgs();
    calculateMiles();
    calculateAsc();
    calculateRankRewards();
    RankUpdates();
    game.boostereffect = game.boosterbase ** game.boosters;
},50);
