import React from 'react';

function Header() {
  return (
    <header className="text-center mb-8 sm:mb-12">
      <div className="flex items-center justify-center gap-3 mb-2">
        <span className="text-5xl animate-float">😄</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold">
          <span className="text-coral">Emoji</span>
          <span className="text-teal">Translator</span>
        </h1>
      </div>
      <p className="text-gray-500 text-base sm:text-lg font-medium">
        Turn words into emojis. ✨ No letters allowed.
      </p>
    </header>
  );
}

export default Header;