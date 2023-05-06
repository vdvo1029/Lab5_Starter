// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const element = document.getElementById('horn-select');
  element.addEventListener("change", (event) => {
    var img = document.querySelector('img');
    if (event.target.value == 'air-horn') {
      img.src="assets\\images\\air-horn.svg";
    } else if (event.target.value == 'car-horn') {
      img.src="assets\\images\\car-horn.svg";
    } else if (event.target.value == 'party-horn') {
      img.src= "assets\\images\\party-horn.svg";
    } else {
      img.src= "assets\\images\\no-image.png";
    }
  });
}