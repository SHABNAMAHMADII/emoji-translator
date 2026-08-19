import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

function SpeechButton({ text }) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const getPreferredVoice = () => {
    const preferredNames = [
      'Google UK English Female',
      'Google US English Female',
      'Microsoft Zira',
      'Microsoft Jessa',
      'Microsoft Hazel',
      'Samantha',
      'Victoria',
      'Karen',
      'Moira',
    ];

    for (const name of preferredNames) {
      const matchedVoice = voices.find(voice =>
        voice.name.toLowerCase().includes(name.toLowerCase())
      );
      if (matchedVoice) return matchedVoice;
    }

    const femalePatterns = ['female', 'zira', 'jessa', 'hazel', 'samantha', 'victoria', 'karen', 'moira'];
    for (const pattern of femalePatterns) {
      const matchedVoice = voices.find(voice =>
        voice.lang.startsWith('en') &&
        voice.name.toLowerCase().includes(pattern)
      );
      if (matchedVoice) return matchedVoice;
    }

    const usVoice = voices.find(voice => voice.lang === 'en-US');
    if (usVoice) return usVoice;

    const englishVoice = voices.find(voice => voice.lang.startsWith('en'));
    if (englishVoice) return englishVoice;

    return voices[0] || null;
  };

  const handleSpeak = () => {
    if (!text || isSpeaking) return;

    if (!window.speechSynthesis) {
      alert('Sorry, your browser does not support speech synthesis.');
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;    // slower and more relaxed
    utterance.pitch = 1.0;   // natural, not too high
    utterance.volume = 1;

    const preferredVoice = getPreferredVoice();
    if (preferredVoice) {
      utterance.voice = preferredVoice;
      console.log('Using voice:', preferredVoice.name);
    }

    setIsSpeaking(true);

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

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
