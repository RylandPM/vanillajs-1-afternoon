console.log("Hello");

let progressArr = [];
let winner = false;

function play(boxId) {
  const clickedElement = document.getElementById(boxId);
  const playerSpan = document.getElementById("player");
  if (winner === true) {
    alert("Winner already declared, please reset game.");
    return;
  } else if (
    clickedElement.innerText === "X" ||
    clickedElement.innerText === "O"
  ) {
    alert("Choose an unchosen square please.");
  } else {
    if (playerSpan.innerText === "X") {
      playerSpan.innerText = "O";
      clickedElement.innerText = "X";
      progressArr[boxId] = "X";
    } else {
      playerSpan.innerText = "X";
      clickedElement.innerText = "O";
      progressArr[boxId] = "O";
    }
  }
  const topLeft = progressArr[0];
  const topCenter = progressArr[1];
  const topRight = progressArr[2];
  const midLeft = progressArr[3];
  const midCenter = progressArr[4];
  const midRight = progressArr[5];
  const botLeft = progressArr[6];
  const botCenter = progressArr[7];
  const botRight = progressArr[8];

  if (
    topLeft !== undefined &&
    topLeft === topCenter &&
    topCenter === topRight
  ) {
    winner = true;
    window.alert(`${topLeft} Wins!`);
    return;
  } else if (
    midLeft !== undefined &&
    midLeft === midCenter &&
    midCenter === midRight
  ) {
    winner = true;
    window.alert(`${midLeft} Wins!`);
    return;
  } else if (
    botLeft !== undefined &&
    botLeft === botCenter &&
    botCenter === botRight
  ) {
    winner = true;
    window.alert(`${botLeft} Wins!`);
    return;
  } else if (
    topLeft !== undefined &&
    topLeft === midLeft &&
    midLeft === botLeft
  ) {
    winner = true;
    window.alert(`${topLeft} Wins!`);
    return;
  } else if (
    topCenter !== undefined &&
    topCenter === midCenter &&
    midCenter === botCenter
  ) {
    winner = true;
    window.alert(`${topCenter} Wins!`);
    return;
  } else if (
    topRight !== undefined &&
    topRight === midRight &&
    midRight === botRight
  ) {
    winner = true;
    window.alert(`${topRight} Wins!`);
    return;
  } else if (
    topLeft !== undefined &&
    topLeft === midCenter &&
    midCenter === botRight
  ) {
    winner = true;
    window.alert(`${topLeft} Wins!`);
    return;
  } else if (
    topRight !== undefined &&
    topRight === midCenter &&
    midCenter === botLeft
  ) {
    winner = true;
    window.alert(`${topRight} Wins!`);
    return;
  }
  let boardFull = true;
  for (i = 0; i <= 8; i++) {
    if (progressArr[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert("Tie Game");
  }
  console.log(progressArr);
}

function boardReset() {
  progressArr = [];
  const playerReset = document.getElementById("player");
  playerReset.innerText = "X";
  for (i = 0; i <= 8; i++) {
    let wipe = document.getElementById(i);
    wipe.innerText = "";
    winner = false;
  }
}
