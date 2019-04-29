console.log("The house always wins!");

let id = document.getElementById("idInput");
let color = document.getElementById("colorInput");
console.log(id);
console.log(color);

function setCard() {
  const card = document.getElementById(id.value);
  card.style.color = color.value;
}
