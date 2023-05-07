// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    let img = document.querySelector('img')
    let speech = window.speechSynthesis;
    let voices = [];

    let voiceSelect = document.getElementById("voice-select");
    
    // Some credit to the SpeechSynthesis docs
    function populateVoiceList(){
        voices = speech.getVoices();
        for (let i = 0; i < voices.length; i++) {
            const option = document.createElement("option");
            option.textContent = `${voices[i].name})`;
            option.setAttribute("voice", voices[i].name);
            voiceSelect.appendChild(option);
        }
    }

    populateVoiceList();
    
    // SpeechSynthesis docs, to ensure that the site will load the voices if the voice options change
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
      }
    
    const button = document.querySelector('button');
    button.addEventListener("click", (event)=>{
        let image = document.querySelector("[alt='Smiling face']");
        let text = document.getElementById("text-to-speak");
        


        const utterThis = new SpeechSynthesisUtterance(text.value);
        const selectedOption =
          voiceSelect.selectedOptions[0].getAttribute("data-name");
        for (let i = 0; i < voices.length; i++) {
          if (voices[i].name === selectedOption) {
            utterThis.voice = voices[i];
          }
          img.src="assets\\images\\smiling.png";
        }
        
        speech.speak(utterThis);
      

        
    });
    

}