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
    <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-coral/30 group">
      <div className="flex justify-between items-start gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-500 truncate">{item.originalText}</p>
          <div className="text-3xl sm:text-4xl mt-1 break-all">{item.emojiText}</div>
          <div className="flex items-center gap-1 mt-2 text-xs text-gray-400">
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
            className="p-2 rounded-lg text-gray-400 hover:text-teal hover:bg-teal/10 transition-all"
            title="Copy emojis"
          >
            {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
          </button>
          <button
            onClick={() => onDelete(item.id)}
            className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all"
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