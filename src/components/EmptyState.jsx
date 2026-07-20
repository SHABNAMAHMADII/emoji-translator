import React from 'react';

function EmptyState() {
  return (
    <div className="text-center py-12 animate-slideUp">
      <div className="text-7xl mb-4 animate-float">
        🤔💬✨
      </div>
      <h3 className="text-2xl font-bold text-gray-500 dark:text-gray-400 mb-2">
        Your emoji diary is empty!
      </h3>
      <p className="text-gray-400 dark:text-gray-500 text-lg">
        Type something above and watch the magic happen. 🎩✨
      </p>
      <div className="mt-6 text-4xl opacity-20 select-none">
        😊😂😍🤩😎🥳🤗😇
      </div>
    </div>
  );
}

export default EmptyState;