import React from 'react';

function HowItWorks() {
  return (
    <div className="card bg-gradient-to-br from-coral/5 to-teal/5 border-2 border-coral/20 dark:border-[#e94560]/30 dark:bg-[#16213e]">
      <h3 className="text-xl font-bold text-charcoal dark:text-white mb-4 flex items-center gap-2">
        <span>💡</span> How It Works
      </h3>
      
      <div className="space-y-4">
        <div className="flex gap-3 items-start">
          <span className="bg-coral dark:bg-[#e94560] text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
          <div>
            <p className="font-semibold text-sm dark:text-white">Type Your Sentence</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Write anything you want to translate</p>
          </div>
        </div>
        
        <div className="flex gap-3 items-start">
          <span className="bg-coral dark:bg-[#e94560] text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
          <div>
            <p className="font-semibold text-sm dark:text-white">Click Translate</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">AI reads and understands your message</p>
          </div>
        </div>
        
        <div className="flex gap-3 items-start">
          <span className="bg-coral dark:bg-[#e94560] text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
          <div>
            <p className="font-semibold text-sm dark:text-white">Get Emojis</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Your sentence becomes emoji-only magic!</p>
          </div>
        </div>
        
        <div className="flex gap-3 items-start">
          <span className="bg-coral dark:bg-[#e94560] text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
          <div>
            <p className="font-semibold text-sm dark:text-white">Copy & Share</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Copy with one click and share anywhere</p>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
          ✨ Powered by OpenRouter AI
        </p>
      </div>
    </div>
  );
}

export default HowItWorks;
