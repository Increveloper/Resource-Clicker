setInterval (function(){
    // Call necessary functions
    updateTabs();
    checkPresUpgs();
    CheckBoosters();
    CheckMilestones();
    checkBstrUpgs();
    checkAscUpgs();
    checkAPU();
    CheckQOLUpgs();
    UpdateAutoVisibility();
    updateRankRewards();

    // Calculate necessary variables
    game.powerEffect = 1 + game.powerAmount ** game.powerEffectExp;
    game.powB1cost = 100 * 2 ** (game.powB1 * (1 + Math.floor(game.powB1 / 10)));
    game.powB2cost = 500 * 5 ** game.powB2;
    game.powB3cost = 1000 * 10 ** game.powB3;
    game.powB1effect = game.powB1base ** game.powB1;
    game.powB2effect = game.powB2base ** game.powB2;
    game.powB3effect = game.powB3base ** game.powB3;
    game.BU1effect = 2 ** game.bstrupgamnt;
    game.BU2effect = 2 ** game.bstrupgamnt;
    game.BU3effect = 2 ** game.bstrupgamnt;
    game.AutoGain = Math.floor(15 ** (Math.max(0, Math.log10((game.points + 1) / 10 ** 13)) ** 0.9)) - 1;
    game.autocost = [10 * (1.1 ** (game.PointAuto ** 2)), 1000 * (2 ** game.Presauto), (10 ** 6) * (1.01 ** (game.Powauto ** 3)), (10 ** 10) * (3 ** game.Autoauto)];
    game.autoeff = [game.PointAuto ** 2, game.Presauto, game.Powauto ** 2, game.Autoauto ** 3];
    game.rank4reward = game.RankLevel ** game.rank4exp
    game.AscB1[1] = Math.log10(game.AscAmount + 1) + 1
    game.AscB1[2] = game.AscB1[1] ** game.AscB1[0]
    game.AscB1[3] = 5 ** (game.AscB1[0] ** 2)

    // Update Text Content

    document.getElementById("points").textContent = formatNumber(game.points);
    document.getElementById("ppc").textContent = formatNumber(game.ppc);
    document.getElementById("unlock").textContent = game.unlocks[game.unlockAmount];
    document.getElementById("unlockprice").textContent = formatNumber(game.unlockCost[game.unlockAmount]);
    document.getElementById("unlockeramnt").textContent = game.unlockAmount;
    document.getElementById("prestigegain").textContent = formatNumber(game.prestigeGain);
    document.getElementById("prestigepoints").textContent = formatNumber(game.prestigeAmount);
    document.getElementById("poweramount").textContent = formatNumber(game.powerAmount);
    document.getElementById("powereffect").textContent = formatNumber(game.powerEffect);
    document.getElementById("powerclick").textContent = formatNumber(game.powerGain);
    document.getElementById("powB1base").textContent = game.powB1base;
    document.getElementById("powB1effect").textContent = formatNumber(game.powB1effect);
    document.getElementById("powB1cost").textContent = formatNumber(game.powB1cost);
    document.getElementById("powB1amount").textContent = game.powB1;
    document.getElementById("powB1max").textContent = game.powB1max;
    document.getElementById("powB2base").textContent = game.powB2base;
    document.getElementById("powB2effect").textContent = formatNumber(game.powB2effect);
    document.getElementById("powB2cost").textContent = formatNumber(game.powB2cost);
    document.getElementById("powB2amount").textContent = game.powB2;
    document.getElementById("powB2max").textContent = game.powB2max;
    document.getElementById("powB3base").textContent = game.powB3base;
    document.getElementById("powB3effect").textContent = formatNumber(game.powB3effect);
    document.getElementById("powB3cost").textContent = formatNumber(game.powB3cost);
    document.getElementById("powB3amount").textContent = game.powB3;
    document.getElementById("powB3max").textContent = game.powB3max;
    document.getElementById("boosters").textContent = game.boosters;
    document.getElementById("boostereff").textContent = formatNumber(game.boostereffect);
    document.getElementById("boosterreq").textContent = formatNumber(game.boosterrequirement);
    for (let el of document.getElementsByClassName("boostercost")) {
        el.textContent = game.boostupgcost[game.bstrupgamnt];
    };
    document.getElementById("BU1effect").textContent = game.BU1effect;
    document.getElementById("BU2effect").textContent = game.BU2effect;
    document.getElementById("BU3effect").textContent = game.BU3effect;
    document.getElementById("AutoAmount").textContent = formatNumber(game.AutoAmount);
    document.getElementById("AutoGain").textContent = formatNumber(game.AutoGain)
    document.getElementById("pointsautocost").textContent = formatNumber(game.autocost[0])
    document.getElementById("pointsautoeffect").textContent = game.autoeff[0]
    document.getElementById("presautocost").textContent = formatNumber(game.autocost[1])
    document.getElementById("presautoeffect").textContent = game.autoeff[1]
    document.getElementById("powautocost").textContent = formatNumber(game.autocost[2])
    document.getElementById("powautoeffect").textContent = game.autoeff[2]
    document.getElementById("autoautocost").textContent = formatNumber(game.autocost[3])
    document.getElementById("autoautoeffect").textContent = game.autoeff[3]
    document.getElementById("AscPoints").textContent = formatNumber(game.AscAmount)
    document.getElementById("AscReward").textContent = formatNumber(game.AscGain)
    document.getElementById("rankamount").textContent = game.RankLevel
    document.getElementById("RankReward").textContent = game.RankEffect[game.RankLevel]
    document.getElementById("RankRequirement").textContent = formatNumber(game.RankRequirement[game.RankLevel])
    document.getElementById("rank4reward").textContent = formatNumber(game.rank4reward)
    document.getElementById("Asc1base").textContent = game.AscB1[1]
    document.getElementById("Asc1effect").textContent = game.AscB1[2]
    document.getElementById("Asc1cost").textContent = game.AscB1[3]
    document.getElementById("TotalAllocationPoints").textContent = game.APamount[0]
    document.getElementById("UnspentAllocationPoints").textContent = game.APamount[1]
    document.getElementById("PointAllocationCost").textContent = formatNumber(game.APbuyables[0][1])
    document.getElementById("PrestigeAllocationCost").textContent = formatNumber(game.APbuyables[1][1])
    document.getElementById("PowerAllocationCost").textContent = formatNumber(game.APbuyables[2][1])
    document.getElementById("AscensionAllocationCost").textContent = formatNumber(game.APbuyables[3][1])
}, 50)
