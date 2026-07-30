import React from 'react';

function LandingPage({ onGetStarted }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream via-white to-coral/10">
      <div className="max-w-3xl w-full text-center py-10 sm:py-14">
        {/* Emoji */}
        <div className="text-6xl sm:text-7xl mb-5 animate-float">
          😄✨
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3">
          <span className="text-coral">Emoji</span>
          <span className="text-teal">Translator</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-light mb-1">
          The art of expressing without words.
        </p>
        <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto mb-8">
          Turn your sentences into emojis. No letters. No limits. Just emotions.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto mb-10">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-100/50">
            <div className="text-3xl mb-1">🤖</div>
            <p className="text-xs font-semibold text-gray-700">AI Translation</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-100/50">
            <div className="text-3xl mb-1">📋</div>
            <p className="text-xs font-semibold text-gray-700">Copy to Clipboard</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-100/50">
            <div className="text-3xl mb-1">📚</div>
            <p className="text-xs font-semibold text-gray-700">History</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-100/50">
            <div className="text-3xl mb-1">🌙</div>
            <p className="text-xs font-semibold text-gray-700">Dark Mode</p>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={onGetStarted}
          className="bg-coral hover:bg-coral/90 text-white text-base sm:text-lg font-semibold px-10 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
        >
          🚀 Get Started
        </button>

        {/* Footer */}
        <p className="text-xs text-gray-400 mt-8">
          Powered by OpenRouter AI • Built with React & Tailwind
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
