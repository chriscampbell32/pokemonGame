var charmander = {
    name: "Charmander",
    health: 100,
    lvl: 12,
    effect: null,
    moves: [{
        name: "EMBER",
        type: "Attack",
        power: 20,
        acuracy: .80
        },
        {
        name: "SCRATCH",
        type: "Attack",
        power: 10,
        acuracy: .90
        },
        {
        name: "LEER",
        type: "Defense",
        power: .20,
        acuracy: 1.0
        },
        {
        name: "GROWL",
        type: "Defense",
        power: .20,
        acuracy: .70
        },]
        
};

var pikachu = {
    name: "Pikachu",
    health: 100,
    lvl: 9,
    effect: null,
    moves: [{
        name: "THUNDER SHOCK",
        type: "Attack",
        power: 10,
        acuracy: .95
        },
        {
        name: "THUNDER WAVE",
        type: "Attack",
        power: 25,
        acuracy: .50
        },
        {
        name: "TAIL WHIP",
        type: "Defense",
        power: .15,
        acuracy: 1.0
        },
        {
        name: "GROWL",
        type: "Defense",
        power: .55,
        acuracy: .55
        },]
        
};

var currentState;
var cpuPokemon;
var userPokemon;

var cpuTurn = {
    play: function() {
        var randomMove = Math.floor(Math.random() * 4);
        var currentCPUmove = cpuPokemon.moves[randomMove];

        var setUpCPUField = function() {
            $('#chat-text').text("What will " + cpuPokemon.name + " do?")
        };
    }


    };

var playerTurn = {
    play: function(){

    }


};

var loop = function (){
    if(cpuPokemon.health <= 0 || userPokemon <= 0){
        $("#game-over").removeClass("hide");
        console.log("Game-Over!");
    } else {
        currentState.play();
    }
}

var init = function() {
    cpuPokemon = pikachu;
    userPokemon = charmander;
    $("#cpu-name").text(cpuPokemon.name);
    $("#cpu-lvl").text("lvl " + cpuPokemon.lvl);
    $("#user-name").text(userPokemon.name);
    $("#user-lvl").text("lvl " + userPokemon.lvl);
    currentState = playerTurn;
    loop();
    

};

init();