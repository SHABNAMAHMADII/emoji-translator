import React from 'react';
import { Bot, Copy, History, Moon, Github, Linkedin, Mail } from 'lucide-react';

function LandingPage({ onGetStarted, darkMode, toggleDarkMode }) {
  return (
    <div className={`min-h-screen flex items-center justify-center px-4 transition-colors duration-300 ${
      darkMode ? 'bg-[#1a1a2e]' : 'bg-[#F5EDE3]'
    }`}>
      <div className="max-w-2xl w-full text-center">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 text-2xl"
          aria-label="Toggle dark mode"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>

        {/* Emoji */}
        <div className="text-6xl mb-5">😄</div>

        {/* Title */}
        <h1 className={`text-5xl font-extrabold tracking-tight mb-3 ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}>
          <span className="text-coral">Emoji</span>
          <span className="text-teal">Translator</span>
        </h1>

        {/* Tagline */}
        <p className={`text-xl font-medium mb-2 ${
          darkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          The art of expressing without words.
        </p>

        {/* Description */}
        <p className={`text-sm max-w-sm mx-auto mb-8 ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Express yourself in a whole new way — through emojis.
        </p>

        {/* Features with Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          <div className={`p-3 rounded-xl border ${
            darkMode ? 'bg-[#1e293b] border-[#334155]' : 'bg-white border-gray-200'
          } shadow-sm`}>
            <Bot className="w-6 h-6 text-coral mx-auto mb-1" />
            <p className={`text-xs font-medium ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>AI Translation</p>
          </div>
          <div className={`p-3 rounded-xl border ${
            darkMode ? 'bg-[#1e293b] border-[#334155]' : 'bg-white border-gray-200'
          } shadow-sm`}>
            <Copy className="w-6 h-6 text-teal mx-auto mb-1" />
            <p className={`text-xs font-medium ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>Instant Copy</p>
          </div>
          <div className={`p-3 rounded-xl border ${
            darkMode ? 'bg-[#1e293b] border-[#334155]' : 'bg-white border-gray-200'
          } shadow-sm`}>
            <History className="w-6 h-6 text-coral mx-auto mb-1" />
            <p className={`text-xs font-medium ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>Smart History</p>
          </div>
          <div className={`p-3 rounded-xl border ${
            darkMode ? 'bg-[#1e293b] border-[#334155]' : 'bg-white border-gray-200'
          } shadow-sm`}>
            <Moon className="w-6 h-6 text-teal mx-auto mb-1" />
            <p className={`text-xs font-medium ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>Dark Mode</p>
          </div>
        </div>

        {/* Get Started Button */}
        <button
          onClick={onGetStarted}
          className="bg-coral hover:bg-coral/80 text-white text-base font-bold px-9 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          🚀 Get Started
        </button>

        {/* Connect Section */}
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://github.com/shabnamahmadii"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${
              darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/shabnam-ahmadi-755b56390"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${
              darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:shabnam.ahmadi0018@gmail.com"
            className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${
              darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Footer */}
        <p className={`text-xs mt-8 ${
          darkMode ? 'text-gray-500' : 'text-gray-400'
        }`}>
          Powered by OpenRouter AI • Built with React & Tailwind
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
