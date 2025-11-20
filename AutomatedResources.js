function runautomation(){
    //console.log("Triggered automation!", game.PointAuto, game.points)
    if(!game.pausedauto){
        // fixes reset bugs
        game.points += game.ppc * game.autoeff[0] / 20
        game.prestigeAmount += game.prestigeGain * game.autoeff[1] / 20
        game.powerAmount += game.powerGain * game.autoeff[2] / 20
        game.AutoAmount += game.AutoGain * game.autoeff[3] / 20
    }
    if(game.QOLU[1]){
        game.PU1 = true
        game.PU2 = true
        game.PU3 = true
    }
    if(game.QOLU[2]){
        if (game.powerAmount >= game.powB1cost && game.powB1 < game.powB1max) {
            if(!game.QOLU[3]){
                game.powerAmount -= game.powB1cost;
            }
            game.powB1 += 1;
        }
        if (game.powerAmount >= game.powB2cost && game.powB2 < game.powB2max) {
            if(!game.QOLU[3]){
                game.powerAmount -= game.powB2cost;
            }
            game.powB2 += 1;
        }
        if (game.powerAmount >= game.powB3cost && game.powB3 < game.powB3max) {
            if(!game.QOLU[3]){
                game.powerAmount -= game.powB3cost;
            }
            game.powB3 += 1;
        }
    }
    //if(game.QOLU[3]){
    //    game.BU1 = true
    //    game.BU2 = true
    //    game.BU3 = true
    //}
}
Automated = setInterval (function(){
    runautomation()
}, 50)
