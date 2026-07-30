import React from 'react';

function LandingPage({ onGetStarted }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-amber-50/80 via-orange-50/60 to-rose-50/80">
      <div className="max-w-2xl w-full text-center">
        {/* Emoji */}
        <div className="text-6xl mb-5">✨</div>

        {/* Title */}
        <h1 className="text-5xl font-bold tracking-tight text-slate-800 mb-3">
          Emoji <span className="text-coral">Translator</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl text-slate-600 font-medium mb-2">
          The art of expressing without words.
        </p>

        {/* Description */}
        <p className="text-sm text-slate-500 max-w-sm mx-auto mb-8">
          Turn your sentences into emojis. No letters. No limits. Just emotions.
        </p>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <span className="bg-white/90 backdrop-blur-sm text-slate-700 px-4 py-1.5 rounded-full text-sm font-medium shadow-sm border border-slate-200/60">
            🤖 AI
          </span>
          <span className="bg-white/90 backdrop-blur-sm text-slate-700 px-4 py-1.5 rounded-full text-sm font-medium shadow-sm border border-slate-200/60">
            📋 Copy
          </span>
          <span className="bg-white/90 backdrop-blur-sm text-slate-700 px-4 py-1.5 rounded-full text-sm font-medium shadow-sm border border-slate-200/60">
            📚 History
          </span>
          <span className="bg-white/90 backdrop-blur-sm text-slate-700 px-4 py-1.5 rounded-full text-sm font-medium shadow-sm border border-slate-200/60">
            🌙 Dark Mode
          </span>
        </div>

        {/* Button */}
        <button
          onClick={onGetStarted}
          className="bg-coral hover:bg-coral/80 text-white text-base font-semibold px-9 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
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
