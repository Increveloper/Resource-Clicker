function updateTabs(){
    if(game.unlockAmount >= 1){
        document.getElementById("Prestige").classList.remove("hidden")
    }
    else{
        document.getElementById("Prestige").classList.add("hidden")
    };
    if(game.unlockAmount >= 2 && game.PU3 === true){
        document.getElementById("Powers").classList.remove("hidden")
    }
    else{
        document.getElementById("Powers").classList.add("hidden")
    };
    if(game.unlockAmount >= 3){
        document.getElementById("Booster").classList.remove("hidden")
    }
    else{
        document.getElementById("Booster").classList.add("hidden")
    };
    if(game.BM3){
        document.getElementById("BstrUpg").classList.remove("hidden")
    }
    else{
        document.getElementById("BstrUpg").classList.add("hidden")
    }
    if(game.unlockAmount >= 4){
        document.getElementById("Auto").classList.remove("hidden")
    }
    else{
        document.getElementById("Auto").classList.add("hidden")
    };
    if(game.unlockAmount >= 5 && (game.boosters >= 4 || game.ifAscend)){
        document.getElementById("Ascend").classList.remove("hidden")
    }
    else{
        document.getElementById("Ascend").classList.add("hidden")
    };
    if(game.RankLevel >= 4){
        document.getElementById("AscUpg").classList.remove("hidden")
    }
    else{
        document.getElementById("AscUpg").classList.add("hidden")
    }
    if(game.AscU1){
        document.getElementById("AscBuyables").classList.remove("hidden")
    }
    else{
        document.getElementById("AscBuyables").classList.add("hidden")
    }
    if(game.unlockAmount >= 6 && game.AscU1){
        document.getElementById("AllocationPoints").classList.remove("hidden")
    }
    else{
        document.getElementById("AllocationPoints").classList.add("hidden")
    }
    if(game.unlockAmount >= 7){
        document.getElementById("Void").classList.remove("hidden")
    }
    else{
        document.getElementById("Void").classList.add("hidden")
    }
    if(game.unlockAmount >= 8){
        document.getElementById("VBoosters").classList.remove("hidden")
    }
    else{
        document.getElementById("VBoosters").classList.add("hidden")
    }
};

function SwitchTabs(tab){
    document.getElementById("MainTab").classList.add("hidden")
    document.getElementById("PresTab").classList.add("hidden")
    document.getElementById("BoostTab").classList.add("hidden")
    document.getElementById("AscTab").classList.add("hidden")
    document.getElementById("VoidTab").classList.add("hidden")
    document.getElementById("AutoTab").classList.add("hidden")
    document.getElementById("SettingsTab").classList.add("hidden")
    if(tab === "PresTab" || tab === "MainPresTab" || tab === "PowPresTab"){
        document.getElementById("PresTab").classList.remove("hidden")
        document.getElementById("MainPresTab").classList.remove("hidden")
        document.getElementById("PowPresTab").classList.add("hidden")
        if(tab === "MainPresTab"){
            document.getElementById("PresTab").classList.remove("hidden")
            document.getElementById("MainPresTab").classList.remove("hidden")
            document.getElementById("PowPresTab").classList.add("hidden")
        }
        else if(tab === "PowPresTab"){
            document.getElementById("PresTab").classList.remove("hidden")
            document.getElementById("MainPresTab").classList.add("hidden")
            document.getElementById("PowPresTab").classList.remove("hidden")
        }
    }
    else if(tab === "BoostTab" || tab === "MainBoostTab" || tab === "UpgBoostTab"){
        document.getElementById("BoostTab").classList.remove("hidden")
        document.getElementById("MainBoostTab").classList.remove("hidden")
        document.getElementById("UpgBoostTab").classList.add("hidden")
        if(tab === "MainBoostTab"){
            document.getElementById("BoostTab").classList.remove("hidden")
            document.getElementById("MainBoostTab").classList.remove("hidden")
            document.getElementById("UpgBoostTab").classList.add("hidden")
        } else if(tab === "UpgBoostTab"){
            document.getElementById("BoostTab").classList.remove("hidden")
            document.getElementById("MainBoostTab").classList.add("hidden")
            document.getElementById("UpgBoostTab").classList.remove("hidden")
        }
    }
    else if(tab === "AscTab" || tab === "AscRankTab" || tab === "AscRankRewardTab" || tab === "AscUpgTab" || tab === "AscBuyableTab" || tab === "AllocationTab"){
        document.getElementById("AscTab").classList.remove("hidden")
        document.getElementById("AscRankTab").classList.remove("hidden")
        document.getElementById("AscRankRewardTab").classList.add("hidden")
        document.getElementById("AscUpgTab").classList.add("hidden")
        document.getElementById("AscBuyableTab").classList.add("hidden")
        document.getElementById("AllocationTab").classList.add("hidden")
        if(tab === "AscRankTab"){
            document.getElementById("AscTab").classList.remove("hidden")
            document.getElementById("AscRankTab").classList.remove("hidden")
            document.getElementById("AscRankRewardTab").classList.add("hidden")
            document.getElementById("AscUpgTab").classList.add("hidden")
            document.getElementById("AscBuyableTab").classList.add("hidden")
            document.getElementById("AllocationTab").classList.add("hidden")
        }
        else if(tab === "AscRankRewardTab"){
            document.getElementById("AscTab").classList.remove("hidden")
            document.getElementById("AscRankTab").classList.add("hidden")
            document.getElementById("AscRankRewardTab").classList.remove("hidden")
            document.getElementById("AscUpgTab").classList.add("hidden")
            document.getElementById("AscBuyableTab").classList.add("hidden")
            document.getElementById("AllocationTab").classList.add("hidden")
        }
        else if(tab === "AscUpgTab"){
            document.getElementById("AscTab").classList.remove("hidden")
            document.getElementById("AscRankTab").classList.add("hidden")
            document.getElementById("AscRankRewardTab").classList.add("hidden")
            document.getElementById("AscUpgTab").classList.remove("hidden")
            document.getElementById("AscBuyableTab").classList.add("hidden")
            document.getElementById("AllocationTab").classList.add("hidden")
        }
        else if(tab === "AscBuyableTab"){
            document.getElementById("AscTab").classList.remove("hidden")
            document.getElementById("AscRankTab").classList.add("hidden")
            document.getElementById("AscRankRewardTab").classList.add("hidden")
            document.getElementById("AscUpgTab").classList.add("hidden")
            document.getElementById("AscBuyableTab").classList.remove("hidden")
            document.getElementById("AllocationTab").classList.add("hidden")
        }
        else if(tab === "AllocationTab"){
            document.getElementById("AscTab").classList.remove("hidden")
            document.getElementById("AscRankTab").classList.add("hidden")
            document.getElementById("AscRankRewardTab").classList.add("hidden")
            document.getElementById("AscUpgTab").classList.add("hidden")
            document.getElementById("AscBuyableTab").classList.add("hidden")
            document.getElementById("AllocationTab").classList.remove("hidden")
        }
    }
    else if(tab === "VoidTab" || tab === "MainVoidTab" || tab === "VoidBoosterTab"){
        document.getElementById("VoidTab").classList.remove("hidden")
        document.getElementById("MainVoidTab").classList.remove("hidden")
        document.getElementById("VoidBoosterTab").classList.add("hidden")

        if(tab === "MainVoidTab"){
            document.getElementById("VoidTab").classList.remove("hidden")
            document.getElementById("MainVoidTab").classList.remove("hidden")
            document.getElementById("VoidBoosterTab").classList.add("hidden")
        }

        if(tab === "VoidBoosterTab"){
            document.getElementById("VoidTab").classList.remove("hidden")
            document.getElementById("MainVoidTab").classList.add("hidden")
            document.getElementById("VoidBoosterTab").classList.remove("hidden")
        }
    }
    else if(tab === "AutoTab" || tab === "MainAutoTab" || tab === "QOLAutoTab"){
        document.getElementById("AutoTab").classList.remove("hidden")
        document.getElementById("MainAutoTab").classList.remove("hidden")
        document.getElementById("QOLAutoTab").classList.add("hidden")
        if(tab === "MainAutoTab"){
            document.getElementById("AutoTab").classList.remove("hidden")
            document.getElementById("MainAutoTab").classList.remove("hidden")
            document.getElementById("QOLAutoTab").classList.add("hidden")
        } else if(tab === "QOLAutoTab"){
            document.getElementById("AutoTab").classList.remove("hidden")
            document.getElementById("MainAutoTab").classList.add("hidden")
            document.getElementById("QOLAutoTab").classList.remove("hidden")
        }
    }
    else{
        document.getElementById(tab).classList.remove("hidden")
    }
}
