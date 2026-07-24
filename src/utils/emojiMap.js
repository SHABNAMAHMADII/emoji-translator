// src/utils/emojiMap.js

export function getEmojisForText(text) {
  const lowerText = text.toLowerCase();
  const emojis = [];

  // Keyword → Emoji mapping
  const emojiMap = {
    // ----- EMOTIONS -----
    sad: ['😢', '💔', '🥀'],
    happy: ['😊', '🎉', '✨'],
    love: ['❤️', '😍', '💕'],
    grateful: ['🙏', '😊', '❤️'],
    tired: ['😴', '💤', '🥱'],
    excited: ['🤩', '🎉', '✨'],
    angry: ['😡', '💢', '🔥'],
    scared: ['😨', '😱', '💀'],
    proud: ['😌', '🏆', '💪'],
    lonely: ['🥺', '😔', '💔'],
    confused: ['😕', '🤔', '😵‍💫'],
    surprised: ['😲', '🤯', '😮'],
    calm: ['😌', '🌸', '🧘'],
    bored: ['🥱', '😑', '💤'],
    stressed: ['😫', '🤯', '💆‍♀️'],

    // ----- GREETINGS -----
    morning: ['🌅', '☀️', '🌞'],
    night: ['🌙', '😴', '💤'],
    hello: ['👋', '😊'],
    hi: ['👋', '😊'],
    hey: ['👋', '😊'],
    goodbye: ['👋', '😢'],
    bye: ['👋', '😢'],
    welcome: ['👋', '🤗'],

    // ----- ACTIVITIES -----
    coding: ['💻', '❤️', '🔥'],
    code: ['💻', '⚡', '🔥'],
    study: ['📚', '📖', '✏️'],
    studying: ['📚', '📖', '✏️'],
    party: ['🎉', '🥳', '🍾'],
    eat: ['🍕', '😋', '🍔'],
    hungry: ['🍕', '😋', '🍔'],
    drink: ['☕', '🥤', '🍵'],
    coffee: ['☕', '😋', '🔥'],
    work: ['💼', '💻', '📊'],
    meeting: ['🤝', '💼', '📅'],
    call: ['📞', '⏰', '📱'],
    later: ['⏰', '🕐', '⌛'],
    phone: ['📱', '📞', '💬'],
    text: ['📱', '💬', '✉️'],
    message: ['💬', '📱', '✉️'],
    wait: ['⏳', '🕐', '⌛'],
    soon: ['⏰', '✨', '🕐'],
    today: ['📅', '☀️', '🌞'],
    tomorrow: ['📅', '☀️', '🌞'],

    // ----- APPEARANCE -----
    beautiful: ['😍', '✨', '💕'],
    pretty: ['😍', '✨', '💕'],
    handsome: ['😍', '✨', '💕'],
    gorgeous: ['😍', '✨', '💕'],
    cute: ['🥰', '✨', '💕'],
    nice: ['😊', '👍', '✨'],
    cool: ['😎', '🔥', '✨'],
    awesome: ['😎', '🔥', '✨'],

    // ----- WEATHER -----
    hot: ['🔥', '🌞', '🥵'],
    cold: ['❄️', '🥶', '🧊'],
    sunny: ['☀️', '🌤️', '🌞'],
    rain: ['🌧️', '☔', '💧'],
    raining: ['🌧️', '☔', '💧'],
    cloudy: ['☁️', '⛅', '🌥️'],
    snow: ['❄️', '☃️', '🌨️'],
    windy: ['💨', '🍃', '🌬️'],
    storm: ['⛈️', '⚡', '🌩️'],
    foggy: ['🌫️', '😶‍🌫️', '🌁'],

    // ----- NATURE -----
    beach: ['🏖️', '🌊', '🌴'],
    sea: ['🌊', '🐠', '🐚'],
    ocean: ['🌊', '🐠', '🐚'],
    nature: ['🌳', '🌿', '🌸'],
    flower: ['🌸', '🌺', '🌻'],
    tree: ['🌳', '🌲', '🌴'],
    mountain: ['🏔️', '⛰️', '🌄'],
    forest: ['🌳', '🌲', '🦌'],
    desert: ['🏜️', '☀️', '🌵'],
    river: ['🌊', '🏞️', '🦆'],
    lake: ['🏞️', '🌊', '🦢'],

    // ----- FOOD -----
    pizza: ['🍕', '😋', '🇮🇹'],
    cake: ['🎂', '🍰', '😋'],
    chocolate: ['🍫', '😋', '❤️'],
    bread: ['🍞', '🥖', '😋'],
    rice: ['🍚', '🥢', '😋'],
    noodles: ['🍜', '🥢', '😋'],
    fruit: ['🍎', '🍌', '🍊', '🍇'],
    icecream: ['🍦', '🍨', '😋'],

    // ----- ANIMALS -----
    dog: ['🐕', '🐶', '🦴'],
    cat: ['🐈', '🐱', '🧶'],
    bird: ['🐦', '🕊️', '🪶'],
    fish: ['🐟', '🐠', '🐡'],
    horse: ['🐴', '🐎', '🏇'],
    cow: ['🐄', '🐮', '🥛'],
    sheep: ['🐑', '🐏', '☁️'],
    pig: ['🐖', '🐷', '🐽'],
    bear: ['🐻', '🐼', '🐻‍❄️'],
    lion: ['🦁', '👑', '🌍'],
    tiger: ['🐯', '🐅', '⚡'],

    // ----- TRAVEL -----
    travel: ['✈️', '🌍', '🗺️'],
    vacation: ['🏖️', '🌴', '🍹'],
    holiday: ['🎄', '🎅', '🎁'],
    flight: ['✈️', '☁️', '🛩️'],
    airport: ['🛫', '🛬', '✈️'],
    adventure: ['🧭', '🏔️', '⚡'],

    // ----- SPORTS -----
    football: ['⚽', '🏃', '🥅'],
    soccer: ['⚽', '🏃', '🥅'],
    basketball: ['🏀', '🏃', '🏆'],
    tennis: ['🎾', '🏃', '🎯'],
    cricket: ['🏏', '🏃', '🏏'],
    swimming: ['🏊', '🏊‍♀️', '🌊'],
    running: ['🏃', '🏃‍♀️', '💨'],
    yoga: ['🧘', '🧘‍♀️', '🕉️'],
    gym: ['🏋️', '💪', '🏋️‍♀️'],

    // ----- MUSIC -----
    music: ['🎵', '🎶', '🎧'],
    song: ['🎵', '🎤', '🎶'],
    guitar: ['🎸', '🎵', '🎶'],
    piano: ['🎹', '🎵', '🎶'],
    concert: ['🎵', '🎤', '🎶'],

    // ----- WORK & SCHOOL -----
    school: ['🏫', '📚', '✏️'],
    college: ['🏛️', '📚', '🎓'],
    university: ['🏛️', '📚', '🎓'],
    teacher: ['👨‍🏫', '👩‍🏫', '📚'],
    student: ['👨‍🎓', '👩‍🎓', '📚'],
    homework: ['📚', '✏️', '📝'],
    exam: ['📝', '📚', '✏️'],
    test: ['📝', '📚', '✏️'],
    project: ['📁', '💻', '📊'],
    presentation: ['📊', '🎤', '📁'],

    // ----- FAMILY -----
    family: ['👨‍👩‍👦', '❤️', '🏠'],
    mother: ['👩', '❤️', '🌹'],
    father: ['👨', '❤️', '🌟'],
    brother: ['👨', '🤝', '❤️'],
    sister: ['👩', '🤝', '❤️'],
    baby: ['👶', '🧸', '🍼'],
    friend: ['🤝', '😊', '💕'],

    // ----- TECHNOLOGY -----
    computer: ['💻', '🖥️', '⌨️'],
    laptop: ['💻', '🖥️', '⌨️'],
    internet: ['🌐', '💻', '📶'],
    wifi: ['📶', '🌐', '💻'],
    email: ['📧', '💻', '✉️'],
    website: ['🌐', '💻', '🖥️'],
    app: ['📱', '💻', '📲'],
    game: ['🎮', '🕹️', '🎯'],

    // ----- HOME -----
    home: ['🏠', '❤️', '🏡'],
    house: ['🏠', '🏡', '❤️'],
    garden: ['🌻', '🌳', '🌸'],

    // ----- COLORS -----
    red: ['🔴', '❤️', '🍎'],
    blue: ['🔵', '💙', '🌊'],
    green: ['🟢', '💚', '🌳'],
    yellow: ['🟡', '💛', '🌞'],
    purple: ['🟣', '💜', '🍇'],
    black: ['⚫', '🖤', '🌑'],
    white: ['⚪', '🤍', '❄️'],
    pink: ['🩷', '🌸', '💕'],

    // ----- MISC -----
    book: ['📖', '📚', '✏️'],
    movie: ['🎬', '🍿', '🎥'],
    tv: ['📺', '🎬', '🍿'],
    art: ['🎨', '🖌️', '🖼️'],
    photo: ['📸', '🖼️', '📷'],
    camera: ['📸', '📷', '🎥'],
    gift: ['🎁', '🎀', '🎄'],
    money: ['💰', '💵', '🤑'],
    time: ['⏰', '🕐', '⌛'],
    clock: ['⏰', '🕐', '⌛'],
    heart: ['❤️', '💕', '💖'],
    star: ['⭐', '🌟', '✨'],
    moon: ['🌙', '🌚', '🌛'],
    sun: ['☀️', '🌞', '🌅'],
    rainbow: ['🌈', '☀️', '🌤️'],
    dream: ['💭', '🌙', '✨'],
    peace: ['✌️', '🕊️', '☮️'],
    thanks: ['🙏', '😊', '❤️'],
    thank: ['🙏', '😊', '❤️'],
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
