var charmander = {
    name: "Charmander",
    health: 100,
    lvl: 12,
    effect: null,
    moves: [{
        name: "EMBER",
        type: "Attack",
        power: 20,
        accuracy: .80
        },
        {
        name: "SCRATCH",
        type: "Attack",
        power: 10,
        accuracy: .90
        },
        {
        name: "LEER",
        type: "Defense",
        power: .20,
        accuracy: .6
        },
        {
        name: "GROWL",
        type: "Defense",
        power: .20,
        accuracy: .70
        }]
        
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
        accuracy: .95
        },
        {
        name: "THUNDER WAVE",
        type: "Attack",
        power: 25,
        accuracy: .50
        },
        {
        name: "TAIL WHIP",
        type: "Defense",
        power: .15,
        accuracy: .6
        },
        {
        name: "GROWL",
        type: "Defense",
        power: .55,
        accuracy: .55
        }]
        
};

var currentState;
var cpuPokemon;
var userPokemon;

var cpuTurn = {
    play: function() {
        var randomMove = Math.floor(Math.random() * 4);
        var currentCPUmove = cpuPokemon.moves[randomMove];

        var setUpCPUField = function() {
            $('#chat-text').text("What will " + cpuPokemon.name + " do?");
            prepareToAttack();
        };

        var prepareToAttack = function() {
            $('#pikachu-img').animate({
                top: "-=25",
            }, 200, function(){
                $('#pikachu-img').animate({
                top: "+=25",
                }, 200)
            });
            getAccuracy();
        };

        var getAccuracy = function(){
            var setAccuracy = Math.random();

            if (setAccuracy <= currentCPUmove.accuracy){
                $("#chat-text").text(cpuPokemon.name + " used " + currentCPUmove.name + "!");

                getMoveType();
                

            } else {
                $("#chat-text").text(cpuPokemon.name + " missed with " + currentCPUmove.name + "!");
                currentState = playerTurn;
                setTimeout(loop, 1500);
            }
        };

        var getMoveType = function(){
            showMoveAnimation();
            if(currentCPUmove.type == "Attack") {
                setTimeout(attackingMove, 1500);
            } else{
                setTimeout(defensiveMove, 1500);
            }
        };

        var showMoveAnimation = function() {
            $("#attack-img").addClass("cpu-attack-img");
            $("#attack-img").removeClass("hide");
            $("#attack-img").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100);
        };

        var attackingMove = function() {
            $("#attack-img").addClass("hide");
            $("#attack-img").removeClass("cpu-attack-img");
            if (!cpuPokemon.effect){
                userPokemon.health -= currentCPUmove.power;
            } else {
                userPokemon.health -= (currentCPUmove.power) - (currentCPUmove.power * cpuPokemon.effect);
                cpuPokemon.effect = null;
            }
            $("#user-health-bar").css("width", userPokemon.health + "%");
            currentState = playerTurn;
            loop();
        };

        var defensiveMove = function() {
            $("#attack-img").addClass("hide");
            $("#attack-img").removeClass("cpu-attack-img");
            userPokemon.effect = currentCPUmove.power;
            currentState = playerTurn;
            loop();
        }

        





        setUpCPUField();
    }


    }

var playerTurn = {
    play: function(){
        var setUpUserfield = function(){
            var moveButtons = ["move1-text", "move2-text", "move3-text", "move4-text"];


            $("#user-buttons").removeClass("hide");
            $("#chat-text").text("What will " + userPokemon.name + "do?");

            for (var i = moveButtons.length - 1; i >= 0; i--) {
                $(moveButtons[i]).text(userPokemon.moves[i].name);
            };
        };
        setUpUserfield();

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
    currentState = cpuTurn;
    loop();
    

};

init();