function runautomation(){
    //console.log("Triggered automation!", game.PointAuto, game.points)
    if(game.PauseAuto >= 0.2 && !game.InVoid){
        // ^ fixes reset bugs
        game.points += game.ppc * game.autoeff[0] / 20
        game.prestigeAmount += game.prestigeGain * game.autoeff[1] / 20
        game.powerAmount += game.powerGain * game.autoeff[2] / 20
        game.AutoAmount += game.AutoGain * game.autoeff[3] / 20
    }
    else if(game.PauseAuto < 0.2){
        game.PauseAuto += 1/20
    }
    if(game.QOLU[0]){
        game.PU1 = true
        game.PU2 = true
        game.PU3 = true
    }
    if(game.QOLU[1] && game.Toggles[0]){
        if (game.powerAmount >= game.powB1cost && game.powB1 < game.powB1max) {
            if(!game.QOLU[2]){
                game.powerAmount -= game.powB1cost;
            }
            game.powB1 += 1;
        }
        if (game.powerAmount >= game.powB2cost && game.powB2 < game.powB2max) {
            if(!game.QOLU[2]){
                game.powerAmount -= game.powB2cost;
            }
            game.powB2 += 1;
        }
        if (game.powerAmount >= game.powB3cost && game.powB3 < game.powB3max) {
            if(!game.QOLU[2]){
                game.powerAmount -= game.powB3cost;
            }
            game.powB3 += 1;
        }
    }
    if(game.QOLU[4] && game.Toggles[1]){
        if(game.points >= game.boosterrequirement){
            if(!game.QOLU[3]){
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
    if(game.QOLU[5]){
        game.BU1 = true
        game.BU2 = true
        game.BU3 = true
    }
    if(game.QOLU[6]){
        game.PU4 = true
        game.PU5 = true
        game.PU6 = true
    }
    if(game.QOLU[7]){
        game.QOLU[0] = true
        game.QOLU[1] = true
        game.QOLU[2] = true
        game.QOLU[3] = true
    }
}
Automated = setInterval (function(){
    runautomation()
}, 50)
