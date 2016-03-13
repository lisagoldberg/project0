var cells = ["cell0","cell1","cell2","cell3","cell4","cell5","cell6","cell7","cell8"]




function startGame(){
  document.turn = "Player X";

  setMessage(document.turn + " gets to start.")
}

function setMessage(msg){
document.getElementById("message").innerText=msg;)

}


function nextMove(square) {
  if (square.innerText === ""){
  square.innerText = document.turn;
  switchTurn ();
} else {
  setMessage ("That square is already used.");
}

function switchTurn(){
if (document.turn ==="x")
  document.turn === "o"
else
  document.turn = "x"

setMessage ("It's " document.turn + " turn.")

}

function clearTable(elementId)
{
  document.getElementById(elementId).innerHTML = "";
}












}












