var player = 1;

function startGame(square) {
  if (player === 1){
    document.getElementById(square).value = "x";
    document.getElementById(square).disabled = "disabled";
    player -=1;
    winner();
  } else {
    document.getElementById(square).value = "o";
    document.getElementById(square).disabled = "disabled";
    player +=1;
    winner();
  };

  };

function winner () {

  if (document.getElementById("cell0").value === "x" &&
    document.getElementById("cell1").value === "x" &&
    document.getElementById("cell2").value === "x")
}












}









