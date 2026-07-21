import React from 'react';

function EmojiStats({ history }) {
  // Count emojis from history
  const allEmojis = history.flatMap(item => [...item.emojiText]);
  const emojiCount = {};
  allEmojis.forEach(emoji => {
    emojiCount[emoji] = (emojiCount[emoji] || 0) + 1;
  });

  const topEmojis = Object.entries(emojiCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  if (topEmojis.length === 0 || history.length === 0) {
    return null;
  }

  return (
    <div className="card dark:bg-[#16213e] dark:border dark:border-[#0f3460] mt-6">
      <h3 className="text-lg font-bold text-charcoal dark:text-white mb-3 flex items-center gap-2">
        📊 Your Top Emojis
      </h3>
      <div className="flex flex-wrap gap-4 text-3xl">
        {topEmojis.map(([emoji, count]) => (
          <div key={emoji} className="text-center">
            <div className="text-4xl">{emoji}</div>
            <span className="text-xs text-gray-400 dark:text-gray-500 block mt-1">
              {count}×
            </span>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-400 dark:text-gray-500 mt-3 text-center">
        Based on your {history.length} translation{history.length > 1 ? 's' : ''}
      </p>
    </div>
  );
}

export default EmojiStats;
