import React from 'react';

function HowItWorks() {
  return (
    <div className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-md p-6 border border-gray-100 dark:border-[#334155]">
      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
        <span>💡</span> How It Works
      </h3>
      
      <div className="space-y-4">
        <div className="flex gap-3 items-start">
          <span className="bg-coral dark:bg-[#e94560] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
          <div>
            <p className="font-semibold text-sm text-gray-800 dark:text-white">Type Your Sentence</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Write anything you want to translate</p>
          </div>
        </div>
        
        <div className="flex gap-3 items-start">
          <span className="bg-coral dark:bg-[#e94560] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
          <div>
            <p className="font-semibold text-sm text-gray-800 dark:text-white">Click Translate</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">AI reads and understands your message</p>
          </div>
        </div>
        
        <div className="flex gap-3 items-start">
          <span className="bg-coral dark:bg-[#e94560] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
          <div>
            <p className="font-semibold text-sm text-gray-800 dark:text-white">Get Emojis</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Your sentence becomes emoji-only magic</p>
          </div>
        </div>
        
        <div className="flex gap-3 items-start">
          <span className="bg-coral dark:bg-[#e94560] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</span>
          <div>
            <p className="font-semibold text-sm text-gray-800 dark:text-white">Copy & Share</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Copy with one click and share anywhere</p>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-[#334155]">
        <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
          ✨ Powered by OpenRouter AI
        </p>
      </div>
    </div>
  );
}

export default HowItWorks;
