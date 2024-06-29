const textInput = document.getElementById('text-input');
const voiceSelect = document.getElementById('voice-select');

const synth = window.speechSynthesis;
let voices;
function createVoiceOptions() {
  voices = synth.getVoices();

  voices.forEach(voice => {
    const option = document.createElement('option');
    option.textContent = `${voice.name} - ${voice.lang}`;
    option.setAttribute('data-name', voice.name);
    voiceSelect.appendChild(option);
  });
}

function onSubmit(e) {
  e.preventDefault();

  const input = textInput.value;
  const selectedOption =
    voiceSelect.selectedOptions[0].getAttribute('data-name');

  const utterance = new SpeechSynthesisUtterance(input);
  utterance.voice = voices.find(voice => voice.name === selectedOption);

  synth.speak(utterance);
}

if (synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = createVoiceOptions;
}

document.getElementById('form').addEventListener('submit', onSubmit);
