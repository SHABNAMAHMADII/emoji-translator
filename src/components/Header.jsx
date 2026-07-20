import React from 'react';

function Header() {
  return (
    <header className="text-center mb-8 sm:mb-12">
      <h1 className="text-4xl sm:text-5xl font-extrabold">
        <span className="text-coral dark:text-[#e94560]">Emoji</span>
        <span className="text-teal dark:text-[#00d2d3]">Translator</span>
      </h1>
      <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg font-medium">
        Turn words into emojis. 🎉 No letters allowed.
      </p>
    </header>
  );
}

export default Header;
