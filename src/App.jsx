import React, { useState } from 'react';
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
  const { isLoading, translate } = useEmojiTranslation();

  const handleTranslate = async (text) => {
    // Clear previous result immediately
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

  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 py-6 sm:py-10">
      <Header />
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Main Content - Takes 3/5 on large screens */}
        <div className="lg:col-span-3">
          <TranslationForm onTranslate={handleTranslate} isLoading={isLoading} />
          
          {currentTranslation && (
            <TranslationResult 
              result={currentTranslation.emojiText} 
              originalText={currentTranslation.originalText}
            />
          )}
        </div>
        
        {/* How It Works Sidebar - Takes 2/5 on large screens */}
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
              <h2 className="text-xl sm:text-2xl font-bold text-charcoal flex items-center gap-2">
                📚 History
                <span className="text-sm font-normal text-gray-400">({history.length})</span>
              </h2>
              {history.length > 1 && (
                <button
                  onClick={handleClearAll}
                  className="text-sm text-red-400 hover:text-red-600 transition-colors font-semibold px-3 py-1 rounded-lg hover:bg-red-50"
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