import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { copyToClipboard } from '../utils/clipboard';

function TranslationResult({ result, originalText }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(result);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="card bg-gradient-to-br from-coral/5 to-teal/5 border-2 border-coral/20 dark:border-[#e94560]/30 dark:bg-[#16213e] mt-6 animate-slideUp">
      <div className="flex justify-between items-start mb-3">
        <span className="text-sm text-gray-500 dark:text-gray-400 font-semibold">📝 Original</span>
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 italic">"{originalText}"</p>
      
      <div className="flex justify-between items-center gap-4 flex-wrap">
        <div className="text-4xl sm:text-5xl leading-relaxed break-all">
          {result}
        </div>
        <button
          onClick={handleCopy}
          className={`bg-coral dark:bg-[#e94560] text-white px-5 py-3 rounded-xl transition-all duration-200 hover:scale-105 flex items-center gap-2 font-bold shadow-md hover:shadow-lg ${
            copied ? 'bg-green-500 dark:bg-green-500' : ''
          }`}
        >
          {copied ? (
            <>
              <Check size={20} />
              Copied! 🎉
            </>
          ) : (
            <>
              <Copy size={20} />
              Copy
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default TranslationResult;