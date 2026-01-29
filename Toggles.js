function DisplayToggles(){
    document.getElementById("toggle1").classList.toggle("hidden", game.QOLU[1])
    document.getElementById("toggle2").classList.toggle("hidden", game.QOLU[3])
}
function Toggle(vars){
    if(typeof vars === "boolean"){
        vars = !vars
    }
    else{
        console.log(`${vars}`)
    }
}
function DisplayActive(id, vars){
    if(typeof vars != "boolean"){
        document.getElementById(id).textContent = "Unknown"
    }
    else if(vars){
        document.getElementById(id).textContent = "Enabled"
    }
    else if(!vars){
        document.getElementById(id).textContent = "Disabled"
    }
}