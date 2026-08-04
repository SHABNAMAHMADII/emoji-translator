import React from 'react';
import { PenLine, Sparkles, Smile, Share2 } from 'lucide-react';

function HowItWorks() {
  return (
    <div className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-[#334155]">
      <h3 className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-5 flex items-center gap-2">
        <Sparkles size={18} className="text-coral" /> 
        How It Works
      </h3>

      <div className="space-y-5">
        {/* Step 1 */}
        <div className="flex items-start gap-3">
          <div className="bg-coral/10 dark:bg-[#e94560]/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
            <PenLine size={16} className="text-coral dark:text-[#e94560]" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-800 dark:text-white">Type Your Sentence</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Write anything you want to translate</p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-start gap-3">
          <div className="bg-teal/10 dark:bg-[#00d2d3]/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
            <Sparkles size={16} className="text-teal dark:text-[#00d2d3]" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-800 dark:text-white">Click Translate</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">AI reads and understands your message</p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-start gap-3">
          <div className="bg-yellow-100 dark:bg-yellow-900/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
            <Smile size={16} className="text-yellow-600 dark:text-yellow-400" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-800 dark:text-white">Get Emojis</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Your sentence becomes emoji-only magic</p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex items-start gap-3">
          <div className="bg-purple-100 dark:bg-purple-900/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
            <Share2 size={16} className="text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-800 dark:text-white">Copy & Share</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Copy with one click and share anywhere</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
