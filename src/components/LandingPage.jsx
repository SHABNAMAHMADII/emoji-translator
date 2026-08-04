import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Moon, Sun, Bot, Copy, History, MoonStar } from 'lucide-react';

const emojis = ['😄', '🥰', '😉', '😝', '😎', '☀️', '🌛', '🌈', '🩷'];

function LandingPage({ onGetStarted, darkMode, toggleDarkMode }) {
  const [currentEmoji, setCurrentEmoji] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEmoji((prev) => (prev + 1) % emojis.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 transition-colors duration-300 ${
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

      {/* Main Card */}
      <div className={`max-w-4xl w-full rounded-2xl shadow-xl overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-[#1e293b]' : 'bg-white'
      }`}>
        <div className="flex flex-col md:flex-row">
          {/* Left Side: Rotating Emoji */}
          <div className={`w-full md:w-2/5 flex items-center justify-center p-10 md:p-14 ${
            darkMode ? 'bg-[#16213e]' : 'bg-[#faf6f2]'
          }`}>
            <div className="text-8xl md:text-9xl transition-all duration-500 animate-float">
              {emojis[currentEmoji]}
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full md:w-3/5 p-8 md:p-10">
            {/* Title */}
            <h1 className={`text-4xl md:text-5xl font-bold tracking-tight mb-1 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              <span className="text-coral">Emoji</span>
              <span className="text-teal">Translator</span>
            </h1>

            {/* Tagline */}
            <p className={`text-lg md:text-xl font-medium mb-1 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              The art of expressing without words.
            </p>

            {/* Description */}
            <p className={`text-sm md:text-base mb-6 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Express yourself in a whole new way — through emojis.
            </p>

            {/* Features with Icons */}
            <div className="grid grid-cols-2 gap-2.5 mb-7">
              <div className={`flex items-center gap-3 p-2.5 rounded-lg ${
                darkMode ? 'bg-[#0f172a]' : 'bg-[#f5f0eb]'
              }`}>
                <Bot className={`w-4 h-4 ${darkMode ? 'text-[#e94560]' : 'text-coral'}`} />
                <span className={`text-sm font-medium ${
                  darkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>AI Translation</span>
              </div>
              <div className={`flex items-center gap-3 p-2.5 rounded-lg ${
                darkMode ? 'bg-[#0f172a]' : 'bg-[#f5f0eb]'
              }`}>
                <Copy className={`w-4 h-4 ${darkMode ? 'text-[#00d2d3]' : 'text-teal'}`} />
                <span className={`text-sm font-medium ${
                  darkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>Instant Copy</span>
              </div>
              <div className={`flex items-center gap-3 p-2.5 rounded-lg ${
                darkMode ? 'bg-[#0f172a]' : 'bg-[#f5f0eb]'
              }`}>
                <History className={`w-4 h-4 ${darkMode ? 'text-[#e94560]' : 'text-coral'}`} />
                <span className={`text-sm font-medium ${
                  darkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>Smart History</span>
              </div>
              <div className={`flex items-center gap-3 p-2.5 rounded-lg ${
                darkMode ? 'bg-[#0f172a]' : 'bg-[#f5f0eb]'
              }`}>
                <MoonStar className={`w-4 h-4 ${darkMode ? 'text-[#00d2d3]' : 'text-teal'}`} />
                <span className={`text-sm font-medium ${
                  darkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>Dark Mode</span>
              </div>
            </div>

            {/* Get Started Button */}
            <button
              onClick={onGetStarted}
              className="bg-coral hover:bg-coral/80 text-white text-base font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              Get Started <ArrowRight size={18} />
            </button>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/shabnamahmadii"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${
                  darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-gray-700'
                }`}
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/shabnam-ahmadi-755b56390"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${
                  darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-gray-700'
                }`}
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:shabnam.ahmadi0018@gmail.com"
                className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${
                  darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-gray-700'
                }`}
              >
                <Mail size={18} />
              </a>
            </div>

            {/* Footer */}
            <p className={`text-xs mt-5 ${
              darkMode ? 'text-gray-500' : 'text-gray-400'
            }`}>
              Powered by OpenRouter AI • Built with React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
