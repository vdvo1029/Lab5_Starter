// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    let speech = window.speechSynthesis;
    let voices = [];
    
    

    let voiceSelect = document.getElementById("voice-select");
    console.log("hello");
    
    function populateVoiceList(){
        voices = speech.getVoices();
        for (let i = 0; i < voices.length; i++) {
            const option = document.createElement("option");
            option.textContent = `${voices[i].name} (${voices[i].lang})`;
        
            option.setAttribute("data-name", voices[i].name);
            voiceSelect.appendChild(option);
        }
    }
    populateVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
      }
      const button = document.querySelector('button');
    button.addEventListener("click", (event)=>{
        let text = document.getElementById("text-to-speak");
        


        const utterThis = new SpeechSynthesisUtterance(text.value);
        const selectedOption =
          voiceSelect.selectedOptions[0].getAttribute("data-name");
        for (let i = 0; i < voices.length; i++) {
          if (voices[i].name === selectedOption) {
            utterThis.voice = voices[i];
          }
        }
        
        speech.speak(utterThis);
      

        
    });

}