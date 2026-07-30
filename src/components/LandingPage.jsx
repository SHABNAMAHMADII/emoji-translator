import React from 'react';

function LandingPage({ onGetStarted }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-cream/80 via-white to-coral/10">
      <div className="max-w-2xl w-full text-center">
        {/* Emoji */}
        <div className="text-6xl mb-5">✨</div>

        {/* Title */}
        <h1 className="text-5xl font-bold tracking-tight text-slate-800 mb-3">
          Emoji <span className="text-coral">Translator</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl text-slate-500 font-light mb-2">
          The art of expressing without words.
        </p>

        {/* Description */}
        <p className="text-sm text-slate-400 max-w-sm mx-auto mb-8">
          Turn your sentences into emojis. No letters. No limits. Just emotions.
        </p>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <span className="bg-white/70 backdrop-blur-sm text-slate-600 px-4 py-1.5 rounded-full text-sm font-medium shadow-sm border border-slate-100/50">🤖 AI</span>
          <span className="bg-white/70 backdrop-blur-sm text-slate-600 px-4 py-1.5 rounded-full text-sm font-medium shadow-sm border border-slate-100/50">📋 Copy</span>
          <span className="bg-white/70 backdrop-blur-sm text-slate-600 px-4 py-1.5 rounded-full text-sm font-medium shadow-sm border border-slate-100/50">📚 History</span>
          <span className="bg-white/70 backdrop-blur-sm text-slate-600 px-4 py-1.5 rounded-full text-sm font-medium shadow-sm border border-slate-100/50">🌙 Dark Mode</span>
        </div>

        {/* Button */}
        <button
          onClick={onGetStarted}
          className="bg-coral hover:bg-coral/90 text-white text-base font-medium px-9 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          Get Started
        </button>

        {/* Footer */}
        <p className="text-xs text-slate-400 mt-8">
          Powered by OpenRouter AI
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
