document.addEventListener('contextmenu', event => {
    event.preventDefault();
});


function getColor() {
  return prompt("warna apa yang kamu inginkan? Jika sudah memilih warna untuk menggantinya refresh browser", "red");
}
function changeColor(element, callback) {
  element.style.color = callback();
}

const heading = document.getElementById("heading");
changeColor(heading, getColor);
