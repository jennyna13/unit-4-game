
$(document).ready(function(){

    var targetNumber;
    var totalScore = 0;
    var wins = 0;
    var losses = 0;
    var crystal1Num;
    var crystal2Num;
    var crystal3Num;
    var crystal4Num;


function gameNumbers () {
    targetNumber = Math.floor(Math.random()*70) + 30;
    crystal1Num = Math.floor(Math.random()*20) + 1;
    crystal2Num = Math.floor(Math.random()*20) + 1;
    crystal3Num = Math.floor(Math.random()*20) + 1;
    crystal4Num = Math.floor(Math.random()*20) + 1;
}

function gameStarts () {
    gameNumbers();
    totalScore = 0;
    $("#total-score").text(totalScore);
    $("#number").text(targetNumber);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#crystal1").attr("value", crystal1Num);
    $("#crystal2").attr("value", crystal2Num);
    $("#crystal3").attr("value", crystal3Num);
    $("#crystal4").attr("value", crystal4Num);
};

gameStarts();

function resetGame (){
    totalScore = 0;
    gameNumbers();
    $("#total-score").text(totalScore);
    $("#number").text(targetNumber);
    $("#wins").text(" " + wins);
    $("#losses").text(" " + losses);
    
}

function Win (){
    wins ++;
    $("#wins").text(" " + wins);
}

function Loss (){
    losses ++;
    $("#losses").text(" " + losses);
}


$("#crystal1").on("click", function(){
    totalScore = totalScore + crystal1Num;
    $("#total-score").text(totalScore);
    if (totalScore === targetNumber) {
       Win();
    } else if ( totalScore > targetNumber) {
        Loss();
    }

    if (totalScore >= targetNumber){
        resetGame();
    }

});

$("#crystal2").on("click", function(){
    totalScore = totalScore + crystal2Num;
    $("#total-score").text(totalScore);
    if (totalScore === targetNumber) {
        Win();
     } else if ( totalScore > targetNumber) {
         Loss();
     }
 
     if (totalScore >= targetNumber){
         resetGame();
     }

});

$("#crystal3").on("click", function(){
    totalScore = totalScore + crystal3Num;
    $("#total-score").text(totalScore);
    if (totalScore === targetNumber) {
        Win();
     } else if ( totalScore > targetNumber) {
         Loss();
     }
 
     if (totalScore >= targetNumber){
         resetGame();
     }

});

$("#crystal4").on("click", function(){
    totalScore = totalScore + crystal4Num;
    $("#total-score").text(totalScore);
    if (totalScore === targetNumber) {
        Win();
     } else if ( totalScore > targetNumber) {
         Loss();
     }
 
     if (totalScore >= targetNumber){
         resetGame();
     }
});
});
