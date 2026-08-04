import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TranslationForm from './components/TranslationForm';
import TranslationResult from './components/TranslationResult';
import HowItWorks from './components/HowItWorks';
import EmojiStats from './components/EmojiStats';
import ReverseTranslate from './components/ReverseTranslate';
import LandingPage from './components/LandingPage';
import HistoryPage from './components/HistoryPage';
import { Home, Moon, Sun } from 'lucide-react';
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
      {/* Fixed Buttons */}
      <button
        onClick={() => setShowLanding(true)}
        className="fixed top-4 left-4 z-50 p-3 rounded-full bg-white dark:bg-[#1e293b] shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
        aria-label="Back to home"
      >
        <Home className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      </button>

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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <Header />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Left Column: Translation Form & Result */}
          <div className="lg:col-span-2 space-y-6">
            <TranslationForm onTranslate={handleTranslate} isLoading={isLoading} />
            
            {currentTranslation && (
              <TranslationResult 
                result={currentTranslation.emojiText} 
                originalText={currentTranslation.originalText}
              />
            )}
          </div>
          
          {/* Right Column: How It Works */}
          <div className="lg:col-span-1">
            <HowItWorks />
          </div>
        </div>

        {/* Bottom Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <EmojiStats history={history} />
          <ReverseTranslate />
        </div>
      </div>
    </div>
  );
}

export default App;
