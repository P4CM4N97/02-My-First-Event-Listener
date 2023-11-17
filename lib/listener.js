// TODO: React to a click on the button!
const boton = document.getElementById("clickme");

const audio = document.getElementById("miAudio");


boton.addEventListener("click", () => {
  boton.textContent = 'Bingo';
  boton.classList.add('disabled');
  audio.play();
});
