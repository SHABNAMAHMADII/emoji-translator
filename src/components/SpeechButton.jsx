import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

function SpeechButton({ text }) {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = () => {
    if (!text || isSpeaking) return;

    // Check if browser supports speech synthesis
    if (!window.speechSynthesis) {
      alert('Sorry, your browser does not support speech synthesis.');
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    utterance.pitch = 1;

    setIsSpeaking(true);

    utterance.onend = () => {
      setIsSpeaking(false);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  return (
    <button
      onClick={isSpeaking ? handleStop : handleSpeak}
      className="p-2 rounded-lg text-gray-400 hover:text-teal dark:hover:text-[#00d2d3] hover:bg-teal/10 dark:hover:bg-[#00d2d3]/10 transition-all"
      title={isSpeaking ? 'Stop speaking' : 'Read aloud'}
      aria-label={isSpeaking ? 'Stop speaking' : 'Read aloud'}
    >
      {isSpeaking ? <VolumeX size={18} /> : <Volume2 size={18} />}
    </button>
  );
}

export default SpeechButton;
