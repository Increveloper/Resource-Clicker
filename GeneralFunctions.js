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

    game.ppc *= game.powB1base ** game.powB1
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
    game.powerGain *= game.powB3base ** game.powB3
}
function calculatePB1BASE(){
    game.powB1base = 2

    if(game.BM1){
        game.powB1base += 1
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
    if(game.QOLU[4]){
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
}
setInterval(function(){
    calculatePPC();
    calculatePP();
    calculatePPow();
    calculatePPowEffExp();
    calculatePB1BASE();
    calculatePB1MAX();
    calculateupgs();
    calculateMiles();
    calculateAsc();
    game.boostereffect = game.boosterbase ** game.boosters;
},50);
