// src/utils/emojiMap.js

export function getEmojisForText(text) {
  const lowerText = text.toLowerCase();
  const emojis = [];

  // Keyword → Emoji mapping
  const emojiMap = {
    // Greetings
    morning: ['🌅', '☀️', '🌞'],
    night: ['🌙', '😴', '💤'],
    hello: ['👋', '😊'],
    hi: ['👋', '😊'],
    hey: ['👋', '😊'],
    goodbye: ['👋', '😢'],
    bye: ['👋', '😢'],

    // Emotions
    happy: ['😊', '🎉', '✨'],
    sad: ['😢', '💔', '🥀'],
    love: ['❤️', '😍', '💕'],
    grateful: ['🙏', '😊', '❤️'],
    tired: ['😴', '💤', '🥱'],
    excited: ['🤩', '🎉', '✨'],
    angry: ['😡', '💢', '🔥'],
    scared: ['😨', '😱', '💀'],

    // Activities
    coding: ['💻', '❤️', '🔥'],
    study: ['📚', '📖', '✏️'],
    studying: ['📚', '📖', '✏️'],
    party: ['🎉', '🥳', '🍾'],
    eat: ['🍕', '😋', '🍔'],
    hungry: ['🍕', '😋', '🍔'],
    drink: ['☕', '🥤', '🍵'],

    // Weather
    sunny: ['☀️', '🌤️', '🌞'],
    rain: ['🌧️', '☔', '💧'],
    raining: ['🌧️', '☔', '💧'],
    cloudy: ['☁️', '⛅', '🌥️'],
    snow: ['❄️', '☃️', '🌨️'],

    // Nature
    beach: ['🏖️', '🌊', '🌴'],
    sea: ['🌊', '🐠', '🐚'],
    ocean: ['🌊', '🐠', '🐚'],
    nature: ['🌳', '🌿', '🌸'],
    flower: ['🌸', '🌺', '🌻'],
    tree: ['🌳', '🌲', '🌴'],

    // Food
    coffee: ['☕', '😋', '🔥'],
    pizza: ['🍕', '😋', '🇮🇹'],
    cake: ['🎂', '🍰', '😋'],
    chocolate: ['🍫', '😋', '❤️'],

    // Jobs
    work: ['💼', '💻', '📊'],
    school: ['🏫', '📚', '✏️'],
    university: ['🏛️', '📚', '🎓'],
    college: ['🏛️', '📚', '🎓'],

    // Travel
    travel: ['✈️', '🌍', '🗺️'],
    vacation: ['🏖️', '🌴', '🍹'],
    holiday: ['🎄', '🎅', '🎁'],

    // Animals
    dog: ['🐕', '🐶', '🦴'],
    cat: ['🐈', '🐱', '🧶'],
    bird: ['🐦', '🕊️', '🪶'],
    fish: ['🐟', '🐠', '🐡'],

    // Sports
    football: ['⚽', '🏃', '🥅'],
    basketball: ['🏀', '🏃', '🏆'],
    tennis: ['🎾', '🏃', '🎯'],

    // Music
    music: ['🎵', '🎶', '🎧'],
    song: ['🎵', '🎤', '🎶'],
    guitar: ['🎸', '🎵', '🎶'],
    piano: ['🎹', '🎵', '🎶'],

    // Misc
    love: ['❤️', '😍', '💕'],
    friend: ['🤝', '😊', '💕'],
    family: ['👨‍👩‍👦', '❤️', '🏠'],
    book: ['📖', '📚', '✏️'],
    movie: ['🎬', '🍿', '🎥'],
    game: ['🎮', '🕹️', '🎯'],
    phone: ['📱', '📞', '💬'],
    car: ['🚗', '🏎️', '🛣️'],
    home: ['🏠', '❤️', '🏡'],
  };

  // Check each keyword in the text
  for (const [keyword, emojiList] of Object.entries(emojiMap)) {
    if (lowerText.includes(keyword)) {
      emojis.push(...emojiList);
    }
  }

  // If no keywords found, return default emojis
  if (emojis.length === 0) {
    return ['😊', '✨'];
  }

  // Return unique emojis (remove duplicates) and limit to 5
  const uniqueEmojis = [...new Set(emojis)];
  return uniqueEmojis.slice(0, 5);
}
