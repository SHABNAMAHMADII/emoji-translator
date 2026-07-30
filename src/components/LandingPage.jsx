import React from 'react';

function LandingPage({ onGetStarted }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream via-white to-coral/10">
      <div className="max-w-4xl w-full text-center py-12 sm:py-16">
        {/* Emoji Animation */}
        <div className="text-8xl sm:text-9xl mb-6 animate-float">
          😄✨
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 tracking-tight">
          <span className="text-coral">Emoji</span>
          <span className="text-teal">Translator</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-light mb-2">
          The art of expressing without words.
        </p>
        <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-10">
          Turn your sentences into emojis. No letters. No limits. Just emotions.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto mb-12">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100/50">
            <div className="text-4xl mb-2">🤖</div>
            <p className="text-sm font-semibold text-gray-700">AI Translation</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100/50">
            <div className="text-4xl mb-2">📋</div>
            <p className="text-sm font-semibold text-gray-700">Copy to Clipboard</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100/50">
            <div className="text-4xl mb-2">📚</div>
            <p className="text-sm font-semibold text-gray-700">History</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100/50">
            <div className="text-4xl mb-2">🌙</div>
            <p className="text-sm font-semibold text-gray-700">Dark Mode</p>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onGetStarted}
          className="bg-coral hover:bg-coral/90 text-white text-lg sm:text-xl font-bold px-10 sm:px-14 py-4 sm:py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
        >
          🚀 Get Started
        </button>

        {/* Footer */}
        <p className="text-xs sm:text-sm text-gray-400 mt-10 tracking-wide">
          Powered by OpenRouter AI • Built with React & Tailwind
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
