console.log("The house always wins!");

let id = document.getElementById("idInput");
let color = document.getElementById("colorInput");
console.log(id);
console.log(color);

function setCard() {
  const card = document.getElementById(id.value);
  card.style.color = color.value;
}

function resetCards() {
  const diamonds = document.getElementById("diamonds");
  diamonds.style.color = "grey";
  const clubs = document.getElementById("clubs");
  clubs.style.color = "grey";
  const hearts = document.getElementById("hearts");
  hearts.style.color = "grey";
  const spades = document.getElementById("spades");
  spades.style.color = "grey";
}
