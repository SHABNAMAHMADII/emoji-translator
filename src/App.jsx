import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TranslationForm from './components/TranslationForm';
import TranslationResult from './components/TranslationResult';
import HistoryItem from './components/HistoryItem';
import EmptyState from './components/EmptyState';
import HowItWorks from './components/HowItWorks';
import useEmojiTranslation from './hooks/useEmojiTranslation';

function App() {
  const [history, setHistory] = useState([]);
  const [currentTranslation, setCurrentTranslation] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    // Check if dark mode was previously enabled
    return localStorage.getItem('darkMode') === 'true';
  });
  const { isLoading, translate } = useEmojiTranslation();

  // Save dark mode preference
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleTranslate = async (text) => {
    setCurrentTranslation(null);
    
    const emojiResult = await translate(text);
    if (emojiResult) {
      const newEntry = {
        id: Date.now().toString(),
        originalText: text,
        emojiText: emojiResult,
        timestamp: new Date().toISOString()
      };
      
      setCurrentTranslation(newEntry);
      setHistory(prevHistory => [newEntry, ...prevHistory]);
    }
  };

  const handleDelete = (id) => {
    setHistory(history.filter(item => item.id !== id));
  };

  const handleClearAll = () => {
    if (window.confirm('Delete all translations? 😢')) {
      setHistory([]);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 py-6 sm:py-10 transition-colors duration-300">
      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 text-2xl"
        aria-label="Toggle dark mode"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>

      <Header />
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
          <TranslationForm onTranslate={handleTranslate} isLoading={isLoading} />
          
          {currentTranslation && (
            <TranslationResult 
              result={currentTranslation.emojiText} 
              originalText={currentTranslation.originalText}
            />
          )}
        </div>
        
        <div className="lg:col-span-2">
          <div className="sticky top-6">
            <HowItWorks />
          </div>
        </div>
      </div>

      <div className="mt-12">
        {history.length > 0 ? (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-charcoal dark:text-white flex items-center gap-2">
                📚 History
                <span className="text-sm font-normal text-gray-400">({history.length})</span>
              </h2>
              {history.length > 1 && (
                <button
                  onClick={handleClearAll}
                  className="text-sm text-red-400 hover:text-red-600 dark:hover:text-red-300 transition-colors font-semibold px-3 py-1 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20"
                >
                  Clear all
                </button>
              )}
            </div>
            <div className="space-y-3 max-h-96 overflow-y-auto pr-1 custom-scrollbar">
              {history.map((item) => (
                <HistoryItem key={item.id} item={item} onDelete={handleDelete} />
              ))}
            </div>
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
}

export default App;
