// Business Logic

var player1 = "";
var player2 = "";

// roller
var rolldice = function() {
  return Math.floor(6*Math.random())+1;
}

// player constructer
function Player(turn) {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.playerName;
}

 // number 1 checker
Player.prototype.rollone = function() {
  if (this.roll === 1) {
  this.tempscore = 0;
  alert("Sorry " + this.playerName + ", you rolled a 1! Your turn is over!")
  // this.changeturn();
  } else {
  this.tempscore += this.roll;
  }
}






// Front End Logic
$(document).ready(function() {

  $("button#letsPlay").click(function(event) {
    event.preventDefault();
    player1 = new Player(true);
    player2 =  new Player(false);
    $(".signInRow").hide();
    $(".playerConsole").show();
    $("#new-game").show();

    var player1Name = $(".player1Name").val();
    $("#player1Name").text(player1Name);
    var player2Name = $(".player2Name").val();
    $("#player2Name").text(player2Name);

    player1.playerName=player1Name;
    player2.playerName=player2Name;
  });


  $("button#player1-roll").click(function(event){
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
});
