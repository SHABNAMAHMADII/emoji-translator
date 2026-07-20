import React, { useState } from 'react';
import { Send } from 'lucide-react';

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
    <form onSubmit={handleSubmit} className="card">
      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something fun... 😄"
          className="w-full p-4 pr-16 border-2 border-gray-200 rounded-xl focus:border-coral focus:outline-none transition-all resize-none text-lg bg-cream/50"
          rows="3"
          maxLength="200"
          disabled={isLoading}
        />
        <span className="absolute bottom-4 right-4 text-sm text-gray-400 font-medium">
          {text.length}/200
        </span>
      </div>
      
      <button
        type="submit"
        disabled={!text.trim() || isLoading}
        className={`btn-primary w-full mt-4 flex items-center justify-center gap-2 text-lg ${
          (!text.trim() || isLoading) ? 'opacity-50 cursor-not-allowed scale-100' : ''
        }`}
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
