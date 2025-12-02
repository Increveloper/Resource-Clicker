function GoPrestige(){
    game.points = 0;
    game.prestigeAmount += game.prestigeGain;
};
function GoBooster(){
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
};
function ResetAscension(){
    //console.log(game.points, "before reset")
    if(game.boosters >= 4){
        game.PauseAuto = 0
        if(!game.QOLU[7]){
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
        }
        if(game.RankLevel < 3){
            game.QOLU[0] = false
        }
        if(game.RankLevel < 5){
            game.QOLU[1] = false
            game.QOLU[2] = false
        }
        game.QOLU[3] = false
    
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
        game.PauseAuto = 0
    }
    game.ifAscend = true
    //console.log(game.points, "after reset")
};
function GoAscension(){
    ResetAscension()
};