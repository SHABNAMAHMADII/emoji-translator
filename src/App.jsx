import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TranslationForm from './components/TranslationForm';
import TranslationResult from './components/TranslationResult';
import HowItWorks from './components/HowItWorks';
import EmojiStats from './components/EmojiStats';
import ReverseTranslate from './components/ReverseTranslate';
import LandingPage from './components/LandingPage';
import HistoryPage from './components/HistoryPage';
import { Home, Moon, Sun, Clock } from 'lucide-react';
import useEmojiTranslation from './hooks/useEmojiTranslation';

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [showHistoryPage, setShowHistoryPage] = useState(false);
  const [history, setHistory] = useState([]);
  const [currentTranslation, setCurrentTranslation] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });
  const { isLoading, translate } = useEmojiTranslation();

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const savedHistory = localStorage.getItem('emojiHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('emojiHistory', JSON.stringify(history));
  }, [history]);

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
    if (window.confirm('Delete all translations?')) {
      setHistory([]);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (showLanding) {
    return (
      <LandingPage
        onGetStarted={() => setShowLanding(false)}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
    );
  }

  if (showHistoryPage) {
    return (
      <HistoryPage
        history={history}
        onDelete={handleDelete}
        onClearAll={handleClearAll}
        onBack={() => setShowHistoryPage(false)}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f0eb] dark:bg-[#0f172a] transition-colors duration-300">
      {/* Back to Home Button */}
      <button
        onClick={() => setShowLanding(true)}
        className="fixed top-4 left-4 z-50 p-3 rounded-full bg-white dark:bg-[#1e293b] shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
        aria-label="Back to home"
      >
        <Home className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      </button>

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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <Header />
        
        {/* History Button in Header */}
        <div className="flex justify-end mt-2">
          <button
            onClick={() => setShowHistoryPage(true)}
            className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-coral dark:hover:text-[#e94560] transition-colors font-medium"
          >
            <Clock size={16} />
            History ({history.length})
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-4">
          <div className="lg:col-span-3 space-y-6">
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

        <EmojiStats history={history} />
        <ReverseTranslate />
      </div>
    </div>
  );
}

export default App;
