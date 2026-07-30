import React, { useState } from 'react';
import { ArrowLeftRight, Copy, Check } from 'lucide-react';
import { copyToClipboard } from '../utils/clipboard';

const emojiToTextMap = {
  '😊': 'happy',
  '🎉': 'celebrate',
  '✨': 'magic',
  '😢': 'sad',
  '💔': 'heartbroken',
  '🥀': 'sad',
  '❤️': 'love',
  '😍': 'love',
  '💕': 'love',
  '👋': 'hello',
  '🌅': 'morning',
  '☀️': 'sunny',
  '🌞': 'sunny',
  '🌙': 'night',
  '😴': 'sleepy',
  '💤': 'sleeping',
  '🔥': 'fire',
  '🥵': 'hot',
  '❄️': 'cold',
  '🥶': 'cold',
  '📞': 'call',
  '⏰': 'later',
  '📱': 'phone',
  '💻': 'coding',
  '😎': 'cool',
  '😂': 'laughing',
  '🥳': 'party',
  '🍕': 'pizza',
  '😋': 'yummy',
  '🍔': 'burger',
  '☕': 'coffee',
  '🐶': 'dog',
  '🐱': 'cat',
  '🌸': 'flower',
  '🌺': 'flower',
  '🌻': 'flower',
  '🌈': 'rainbow',
  '⭐': 'star',
  '🌟': 'star',
  '💪': 'strong',
  '🏆': 'winner',
  '🎯': 'goal',
  '🎮': 'gaming',
  '🕹️': 'gaming',
  '📚': 'study',
  '📖': 'reading',
  '✏️': 'writing',
  '🎵': 'music',
  '🎶': 'music',
  '🎧': 'music',
  '🏠': 'home',
  '🏡': 'home',
  '✈️': 'travel',
  '🌍': 'world',
  '🗺️': 'map',
  '🎬': 'movie',
  '🍿': 'movie',
  '🎥': 'movie',
  '💰': 'money',
  '💵': 'money',
  '🤑': 'money',
  '⏳': 'wait',
  '🕐': 'time',
  '⌛': 'time',
};

function ReverseTranslate() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [copied, setCopied] = useState(false);

  const handleReverse = () => {
    if (!input.trim()) return;

    // Split emojis and map each to text
    const emojiRegex = /[\p{Emoji}]/gu;
    const emojis = input.match(emojiRegex) || [];
    
    const words = emojis.map(emoji => {
      return emojiToTextMap[emoji] || emoji;
    });

    // Join into a sentence
    let sentence = words.join(' ');
    
    // Simple capitalization
    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
    
    setResult(sentence);
  };

  const handleCopy = async () => {
    const success = await copyToClipboard(result);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="card dark:bg-[#16213e] dark:border dark:border-[#0f3460] mt-6">
      <h3 className="text-lg font-bold text-charcoal dark:text-white mb-3 flex items-center gap-2">
        <ArrowLeftRight size={20} /> Reverse Translate
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
        Paste emojis and convert them back to text!
      </p>

      <div className="relative">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste emojis here... 😊🎉✨"
          className="w-full p-3 border-2 border-gray-200 dark:border-[#2d3748] rounded-xl focus:border-coral dark:focus:border-[#e94560] focus:outline-none transition-all resize-none text-lg bg-cream/50 dark:bg-[#0f3460] dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
          rows="2"
          disabled={false}
        />
      </div>

      <button
        onClick={handleReverse}
        disabled={!input.trim()}
        className="btn-primary w-full mt-3 flex items-center justify-center gap-2 text-md"
      >
        <ArrowLeftRight size={18} />
        Reverse Translate
      </button>

      {result && (
        <div className="mt-4 p-4 bg-gray-50 dark:bg-[#0f3460] rounded-xl border border-gray-200 dark:border-[#2d3748]">
          <div className="flex justify-between items-start">
            <p className="text-gray-700 dark:text-gray-300 text-lg">{result}</p>
            <button
              onClick={handleCopy}
              className="p-2 rounded-lg text-gray-400 hover:text-teal dark:hover:text-[#00d2d3] transition-all"
              title="Copy result"
            >
              {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReverseTranslate;
