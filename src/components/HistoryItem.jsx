import React, { useState } from 'react';
import { Copy, Check, Trash2, Clock } from 'lucide-react';
import { copyToClipboard } from '../utils/clipboard';

function HistoryItem({ item, onDelete }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(item.emojiText);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-white dark:bg-[#16213e] rounded-xl p-4 shadow-sm dark:shadow-[0_4px_6px_rgba(0,0,0,0.3)] hover:shadow-md dark:hover:shadow-[0_8px_12px_rgba(0,0,0,0.5)] transition-all duration-200 border border-gray-100 dark:border-[#2d3748] hover:border-coral/30 dark:hover:border-[#e94560]/30 group">
      <div className="flex justify-between items-start gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{item.originalText}</p>
          <div className="text-3xl sm:text-4xl mt-1 break-all">{item.emojiText}</div>
          <div className="flex items-center gap-1 mt-2 text-xs text-gray-400 dark:text-gray-500">
            <Clock size={12} />
            {new Date(item.timestamp).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </div>
        </div>
        <div className="flex gap-1 flex-shrink-0">
          <button
            onClick={handleCopy}
            className="p-2 rounded-lg text-gray-400 dark:text-gray-500 hover:text-teal dark:hover:text-[#00d2d3] hover:bg-teal/10 dark:hover:bg-[#00d2d3]/10 transition-all"
            title="Copy emojis"
          >
            {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
          </button>
          <button
            onClick={() => onDelete(item.id)}
            className="p-2 rounded-lg text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all"
            title="Delete"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HistoryItem;