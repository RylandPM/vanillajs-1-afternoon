console.log("Hello");

let progressArr = [];

function play(boxId) {
  const clickedElement = document.getElementById(boxId);
  const playerSpan = document.getElementById("player");

  if (playerSpan.innerText === "X") {
    playerSpan.innerText = "O";
    clickedElement.innerText = "X";
    progressArr[boxId] = "X";
  } else {
    playerSpan.innerText = "X";
    clickedElement.innerText = "O";
    progressArr[boxId] = "O";
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
    window.alert(`${topLeft} Wins!`);
    return;
  } else if (
    midLeft !== undefined &&
    midLeft === midCenter &&
    midCenter === midRight
  ) {
    window.alert(`${midLeft} Wins!`);
    return;
  } else if (
    botLeft !== undefined &&
    botLeft === botCenter &&
    botCenter === botRight
  ) {
    window.alert(`${botLeft} Wins!`);
    return;
  } else if (
    topLeft !== undefined &&
    topLeft === midLeft &&
    midLeft === botLeft
  ) {
    window.alert(`${topLeft} Wins!`);
    return;
  } else if (
    topCenter !== undefined &&
    topCenter === midCenter &&
    midCenter === botCenter
  ) {
    window.alert(`${topCenter} Wins!`);
    return;
  } else if (
    topRight !== undefined &&
    topRight === midRight &&
    midRight === botRight
  ) {
    window.alert(`${topRight} Wins!`);
    return;
  } else if (
    topLeft !== undefined &&
    topLeft === midCenter &&
    midCenter === botRight
  ) {
    window.alert(`${topLeft} Wins!`);
    return;
  } else if (
    topRight !== undefined &&
    topRight === midCenter &&
    midCenter === botLeft
  ) {
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

function boardReset() {}
