import React, { useState } from 'react';
import { Sparkles, Send } from 'lucide-react';

function TranslationForm({ onTranslate, isLoading }) {
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.trim() && !isLoading) {
      const textToTranslate = text.trim();
      setText('');
      await onTranslate(textToTranslate);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card dark:bg-[#16213e] dark:border dark:border-[#0f3460]">
      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something fun... 😎"
          className="w-full p-4 pr-16 border-2 border-gray-200 dark:border-[#2d3748] rounded-xl focus:border-coral dark:focus:border-[#e94560] focus:outline-none transition-all resize-none text-lg bg-cream/50 dark:bg-[#0f3460] dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
          rows="3"
          maxLength="200"
          disabled={isLoading}
        />
        <span className="absolute bottom-4 right-4 text-sm text-gray-400 dark:text-gray-500 font-medium">
          {text.length}/200
        </span>
      </div>
      
      <button
        type="submit"
        disabled={!text.trim() || isLoading}
        className={`btn-primary w-full mt-4 flex items-center justify-center gap-2 text-lg ${
          (!text.trim() || isLoading) ? 'opacity-50 cursor-not-allowed scale-100' : ''
        } dark:bg-[#e94560] dark:hover:bg-[#c73652]`}
      >
        {isLoading ? (
          <>
            <span className="flex gap-1">
              <span className="animate-bounce">●</span>
              <span className="animate-bounce delay-100">●</span>
              <span className="animate-bounce delay-200">●</span>
            </span>
            Thinking of emojis...
          </>
        ) : (
          <>
            Translate to Emojis
            <Send size={18} />
          </>
        )}
      </button>
    </form>
  );
}

export default TranslationForm;
