function startGame(){
for (var i =1; i <=9, i = i +1){
  clearBox(i);
}



  document.turn = "x";
  if (Math.random()<0.5){
  document.turn = "o";
  document.winner = null;
  setMessage(document.turn + " gets to start.");
}

function setMessage(msg){
document.getElementById("message").innerText=msg;
}


function nextMove(square) {
  if (document.winner !=== null){
  setMessage (document.winner + " already won the game.")
} else if{square.innerText === "")
  setMessage ("That square is already used.");
}

function switchTurn(){
if (checkForWinner(document.turn)){
  setMessage ("Congratulations," + document.turn + "! You win!");
  document.winner = document.turn;
}else if(document.turn === "x"){
  document.turn = "O"
  setMessage ("It's " + document.turn + "  's turn.")
}else{
document.turn = "x";
setMessage("It's " + document.turn + " 's turn.");
}

function checkForWinner(move){
  var result = false;
  if (checkRow(1,2,3,move)||
      checkRow(4,5,6,move)||
      checkRow(7,8,9,move)||
      checkRow(1,5,9,move)||
      checkRow(3,5,7,move)||
      checkRow(1,4,7,move)||
      checkRow(2,5,8,move)||
      checkRow(3,6,9,move)){

    result= true;
}

}












