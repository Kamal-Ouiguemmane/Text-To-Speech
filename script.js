const synth = window.speechSynthesis;

function createVoiceOptions() {
  const voices = synth.getVoices();

  voices.forEach(voice => {
    const option = document.createElement('option');
    option.textContent = `${voice.name} ${voice.lang}`;
    option.setAttribute('data-');
    document.getElementById('voice-select').appendChild(option);
  });
}

function onSubmit(e) {
  e.preventDefault();

  const inputText = document.getElementById('text-input').value;

  const utterance = new SpeechSynthesisUtterance(inputText);
}

if (synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = createVoiceOptions;
}

document.getElementById('form').addEventListener('submit', onSubmit);
