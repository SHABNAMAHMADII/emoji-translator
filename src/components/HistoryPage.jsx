import React from 'react';
import { ArrowLeft, Trash2, Clock, Moon, Sun } from 'lucide-react';

function HistoryPage({ history, onDelete, onClearAll, onBack, darkMode, toggleDarkMode }) {
  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-[#0f172a]' : 'bg-[#f5f0eb]'
    }`}>
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 p-3 rounded-full bg-white dark:bg-[#1e293b] shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <Sun className="w-5 h-5 text-yellow-400" />
        ) : (
          <Moon className="w-5 h-5 text-gray-600" />
        )}
      </button>

      <div className="max-w-3xl mx-auto px-4 py-6 sm:py-10">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-coral dark:hover:text-[#e94560] transition-colors mb-6 text-sm font-medium"
        >
          <ArrowLeft size={18} /> Back to App
        </button>

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className={`text-2xl sm:text-3xl font-bold flex items-center gap-2 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>
            <Clock size={26} className="text-coral" /> 
            All History
            <span className="text-sm font-normal text-gray-400">({history.length})</span>
          </h1>
          {history.length > 0 && (
            <button
              onClick={onClearAll}
              className="text-sm text-red-400 hover:text-red-600 dark:hover:text-red-300 transition-colors font-medium px-3 py-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20"
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
                className={`rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 border ${
                  darkMode
                    ? 'bg-[#1e293b] border-[#334155]'
                    : 'bg-white border-gray-100'
                }`}
              >
                <div className="flex justify-between items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm truncate ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {item.originalText}
                    </p>
                    <p className="text-3xl sm:text-4xl mt-1 break-all">{item.emojiText}</p>
                    <p className={`text-xs mt-1 ${
                      darkMode ? 'text-gray-500' : 'text-gray-400'
                    }`}>
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
                    className={`p-2 rounded-lg transition-all flex-shrink-0 ${
                      darkMode
                        ? 'text-gray-500 hover:text-red-400 hover:bg-red-900/20'
                        : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                    }`}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">📭</div>
            <p className={`text-lg ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              No translations yet. Start translating! 😊
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default HistoryPage;
