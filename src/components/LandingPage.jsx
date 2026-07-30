import React from 'react';

function LandingPage({ onGetStarted }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-cream to-coral/10">
      <div className="max-w-3xl w-full text-center">
        {/* Emoji Animation */}
        <div className="text-7xl mb-6 animate-float">
          😄✨
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4">
          <span className="text-coral">Emoji</span>
          <span className="text-teal">Translator</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl text-gray-600 mb-2">
          The art of expressing without words.
        </p>
        <p className="text-gray-400 text-sm sm:text-base mb-8">
          Turn your sentences into emojis. No letters. No limits. Just emotions.
        </p>

        {/* Features Preview */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm">
            <div className="text-3xl mb-1">🤖</div>
            <p className="text-xs font-semibold text-gray-600">AI Translation</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm">
            <div className="text-3xl mb-1">📋</div>
            <p className="text-xs font-semibold text-gray-600">Copy to Clipboard</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm">
            <div className="text-3xl mb-1">📚</div>
            <p className="text-xs font-semibold text-gray-600">History</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm">
            <div className="text-3xl mb-1">🌙</div>
            <p className="text-xs font-semibold text-gray-600">Dark Mode</p>
          </div>
        </div>

        {/* Get Started Button */}
        <button
          onClick={onGetStarted}
          className="btn-primary text-lg px-10 py-4 shadow-lg hover:shadow-xl"
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
