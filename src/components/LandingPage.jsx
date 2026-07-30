import React from 'react';

function LandingPage({ onGetStarted }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#F5EDE3]">
      <div className="max-w-2xl w-full text-center">
        {/* Emoji */}
        <div className="text-6xl mb-5">😄</div>

        {/* Title */}
        <h1 className="text-5xl font-extrabold tracking-tight mb-3">
          <span className="text-coral">Emoji</span>
          <span className="text-teal">Translator</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl text-gray-800 font-medium mb-2">
          The art of expressing without words.
        </p>

        {/* Description */}
        <p className="text-sm text-gray-700 max-w-sm mx-auto mb-8">
          Express yourself in a whole new way — through emojis.
        </p>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <span className="bg-white shadow-sm text-gray-800 px-4 py-1.5 rounded-full text-sm font-medium border border-gray-300/60">
            🤖 AI Translation
          </span>
          <span className="bg-white shadow-sm text-gray-800 px-4 py-1.5 rounded-full text-sm font-medium border border-gray-300/60">
            📋 Instant Copy
          </span>
          <span className="bg-white shadow-sm text-gray-800 px-4 py-1.5 rounded-full text-sm font-medium border border-gray-300/60">
            📚 Smart History
          </span>
          <span className="bg-white shadow-sm text-gray-800 px-4 py-1.5 rounded-full text-sm font-medium border border-gray-300/60">
            🌙 Dark Mode
          </span>
        </div>

        {/* Button */}
        <button
          onClick={onGetStarted}
          className="bg-coral hover:bg-coral/80 text-white text-base font-bold px-9 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          🚀 Get Started
        </button>

        {/* Footer */}
        <p className="text-xs text-gray-500 mt-8">
          Powered by OpenRouter AI • Built with React & Tailwind
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
