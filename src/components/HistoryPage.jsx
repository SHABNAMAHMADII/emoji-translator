import React from 'react';
import { ArrowLeft, Clock, Trash2 } from 'lucide-react';

function HistoryPage({ history, onDelete, onClearAll, onBack }) {
  return (
    <div className="min-h-screen bg-cream dark:bg-[#1a1a2e] py-6 sm:py-10 px-4 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-coral dark:hover:text-[#e94560] transition-colors mb-6"
        >
          <ArrowLeft size={20} /> Back to App
        </button>

        {/* History Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
            <Clock size={28} /> All History
            <span className="text-sm font-normal text-gray-400">({history.length})</span>
          </h1>
          {history.length > 0 && (
            <button
              onClick={onClearAll}
              className="text-sm text-red-400 hover:text-red-600 dark:hover:text-red-300 transition-colors font-semibold px-3 py-1 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20"
            >
              Clear All
            </button>
          )}
        </div>

        {/* History List */}
        {history.length > 0 ? (
          <div className="space-y-3">
            {history.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-[#16213e] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-[#2d3748]"
              >
                <div className="flex justify-between items-start gap-3">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.originalText}</p>
                    <p className="text-3xl sm:text-4xl mt-1">{item.emojiText}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                      {new Date(item.timestamp).toLocaleString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                  <button
                    onClick={() => onDelete(item.id)}
                    className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 dark:text-gray-500">No translations yet. Start translating!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default HistoryPage;
