// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selector = document.getElementById('horn-select');
  const confetti = new JSConfetti();

  // Change image based on user selection
  selector.addEventListener("change", (event) => {
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
  
  // Play audio on button press
  const button = document.querySelector('button');
  button.addEventListener("click", (event) => {
    var audio = document.querySelector('audio')
    if (selector.value == 'air-horn') {
      audio.src="assets\\audio\\air-horn.mp3";
    } else if (selector.value == 'car-horn') {
      audio.src="assets\\audio\\car-horn.mp3";
    } else if (selector.value == 'party-horn') {
      audio.src="assets\\audio\\party-horn.mp3";
    } else {
      audio.src="";
    }
    audio.play();
    if (selector.value == 'party-horn') {
      confetti.addConfetti();
    }
  });

  // Volume icon changes according to value on slider
  let volume = document.getElementById("volume");
  volume.addEventListener("click", (event) =>{
    let volumeicon = document.querySelector("[alt='Volume level 2']");
    volumeicon.src = "assets/icons/volume-level-3.svg";
    if(volume.value < 67){
      volumeicon.src = "assets/icons/volume-level-2.svg";
    }
    if(volume.value < 33){
      volumeicon.src = "assets/icons/volume-level-1.svg";
    }

    if(volume.value==0){

      volumeicon.src = "assets/icons/volume-level-0.svg";
    }


  });
}