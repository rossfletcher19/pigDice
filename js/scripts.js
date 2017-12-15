// Business Logic
// var aiPigName = "aiPig";
var player1 = "";
var player2 = "";

// roller
var rolldice = function() {
  return Math.floor(6*Math.random())+1;
}

var playerCheck = function() {

  if ($(".player2Name").val() === "") {
    var aiPigName = "aiPig";
    $("#player2Name").text(aiPigName);
    // console.log("No player2, playing aiPig");
    $(".player2Console").hide();
    $(".aiPig").show();
    aiPig1.playerName=aiPigName;
  } else {
  }


}

var aiPig = function() {
  // debugger;
  var roundTurn = 1;
  while (roundTurn <= 2) {
    aiPig1.roll = rolldice();
    $("#die-roll-3").text(aiPig1.roll);
    aiPig1.rolloneAiPig();
    $("#round-total-3").text(aiPig1.tempscore);
    // aiPig1.hold();
    roundTurn += 1;
  }
  if (aiPig1.tempscore > 5) {
    aiPig1.holdAiPig();
  }
  $("#total-score-3").text(aiPig1.totalscore);
}

Player.prototype.rolloneAiPig = function() {
  if (this.roll === 1) {
  this.tempscore = 0;
  alert("Sorry " + this.playerName + ", you rolled a 1! Your turn is over!")
  } else {
  this.tempscore += this.roll;
  }
}

Player.prototype.holdAiPig = function () {
  this.totalscore += this.tempscore;
  this.tempscore = 0;
  alert(this.playerName + ", your turn is over, pass the mouse!");
}

// player constructer
function Player(turn) {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.playerName;
}

 // number 1 checker, round score, aiPig initialization....
Player.prototype.rollone = function() {
  if (this.roll === 1) {
  this.tempscore = 0;
  alert("Sorry " + this.playerName + ", you rolled a 1! Your turn is over!")
  } else {
  this.tempscore += this.roll;
  }

  if (this.tempscore === 0) {
    console.log("playing with aiPig");
    aiPig();
  }
}

// hold
Player.prototype.hold = function () {
  this.totalscore += this.tempscore;
  this.tempscore = 0;
  alert(this.playerName + ", your turn is over, pass the mouse!");

  if (this.tempscore === 0) {
    console.log("playing with aiPig");
    aiPig();
  }
}

// Check for winner
Player.prototype.winnerCheck = function () {
  if (this.totalscore >= 100) {
    alert(this.playerName + " You are the winner!");
  }
}

// Newgame
Player.prototype.newGame = function () {
  //debugger;
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.playerName ="";
}

var clearValues = function(){
  $(".player1Name").val("");
  $(".player2Name").val("");
}




// Front End Logic
$(document).ready(function() {

  $("button#letsPlay").click(function(event) {
    event.preventDefault();
    player1 = new Player(true);
    player2 =  new Player(false);
    aiPig1 =  new Player(false);
    $(".signInRow").hide();
    $(".playerConsole").show();
    $("#new-game").show();


    var player1Name = $(".player1Name").val();
    $("#player1Name").text(player1Name);
    var player2Name = $(".player2Name").val();
    $("#player2Name").text(player2Name);

    player1.playerName=player1Name;
    player2.playerName=player2Name;
    playerCheck();
  });

  $("button#new-game").click(function(event){
    $(".playerConsole").hide();
    clearValues();
    player1.newGame();
    player2.newGame();
    $("#round-total-1").empty();
    $("#total-score-1").empty();
    $("#die-roll-1").empty();
    $("#round-total-2").empty();
    $("#total-score-2").empty();
    $("#die-roll-2").empty();

    $(".signInRow").show();
  });


// Player Buttons
  $("button#player1-roll").click(function(event) {
    player1.roll = rolldice();
    $("#die-roll-1").text(player1.roll);
    player1.rollone();
    $("#round-total-1").text(player1.tempscore);
  });

  $("button#player2-roll").click(function(event){
     player2.roll = rolldice();
     $("#die-roll-2").text(player2.roll);
     player2.rollone();
     $("#round-total-2").text(player2.tempscore);
  });

  $("button#player1-hold").click(function(event){
    player1.hold();
    $("#total-score-1").text(player1.totalscore);
    $("#round-total-1").empty();
    $("#die-roll-1").empty();
    player1.winnerCheck();
  });

  $("button#player2-hold").click(function(event){
    player2.hold();
    $("#total-score-2").text(player2.totalscore);
    $("#round-total-2").empty();
    $("#die-roll-2").empty();
    player2.winnerCheck();
  });
});
