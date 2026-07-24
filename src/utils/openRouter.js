import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: import.meta.env.VITE_OPENROUTER_API_KEY,
  defaultHeaders: {
    'HTTP-Referer': window.location.origin,
    'X-Title': 'EmojiTranslator',
  },
  dangerouslyAllowBrowser: true,
});

const MODELS = [
  'google/gemini-2.0-flash-lite-preview-02-05:free',
  'nvidia/nemotron-3-ultra-550b-a55b:free',
  'poolside/laguna-s-2.1:free',
];

const SYSTEM_PROMPT = `Translate to emojis. Only emojis. No words.

Examples:
"good morning" → 🌅☀️🌞
"good night" → 🌙😴💤
"i love coding" → 💻❤️🔥
"i am happy" → 😊🎉✨
"i am sad" → 😢💔🥀
"it is raining" → 🌧️☔💧
"sunny day" → ☀️🌤️🌞

Now translate this:`;

async function tryModel(model, text) {
  const completion = await openai.chat.completions.create({
    model,
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      { role: 'user', content: text },
    ],
    temperature: 0.1,
    max_tokens: 20,
  });

  const raw = completion.choices[0]?.message?.content?.trim() || '';
  const emojiRegex = /[\p{Emoji}]/gu;
  const emojis = raw.match(emojiRegex) || [];
  return emojis.join('');
}

export async function translateToEmojis(text) {
  if (!text?.trim()) return '';

  console.log('🔍 Translating:', text);

  // Try AI models first
  for (const model of MODELS) {
    try {
      console.log(`⏳ Trying: ${model}`);
      const result = await tryModel(model, text);
      if (result.length > 0) {
        console.log(`✅ Success:`, result);
        return result;
      }
    } catch (error) {
      console.warn(`⚠️ ${model} failed:`, error.message);
    }
  }

  // Fallback map (if all AI models fail)
  console.warn('⚠️ All AI models failed. Using fallback.');
  return getFallbackEmojis(text);
}

function getFallbackEmojis(text) {
  const lower = text.toLowerCase();

  const map = {
    // 👋 GREETINGS
    hi: ['👋', '😊'],
    hey: ['👋', '💕', '✨'],
    hello: ['👋', '😊'],
    'good morning': ['🌅', '☀️', '🌞'],
    morning: ['🌅', '☀️', '🌞'],
    'good night': ['🌙', '😴', '💤'],
    night: ['🌙', '😴', '💤'],

    // 😊 EMOTIONS
    happy: ['😊', '🎉', '✨'],
    sad: ['😢', '💔', '🥀'],
    love: ['❤️', '😍', '💕'],
    beautiful: ['😍', '✨', '💕'],
    cool: ['😎', '🔥', '✨'],

    // 🌤️ WEATHER
    hot: ['🔥', '🌞', '🥵'],
    cold: ['❄️', '🥶', '🧊'],
    raining: ['🌧️', '☔', '💧'],
    rain: ['🌧️', '☔', '💧'],
    sunny: ['☀️', '🌤️', '🌞'],

    // 📞 ACTIVITIES
    call: ['📞', '⏰', '📱'],
    coding: ['💻', '❤️', '🔥'],
    tired: ['😴', '💤', '🥱'],
    hungry: ['🍕', '😋', '🍔'],
    party: ['🎉', '🥳', '🍾'],
  };

  for (const [key, emojis] of Object.entries(map)) {
    if (lower.includes(key)) {
      console.log(`✅ Fallback: "${key}" → ${emojis.join('')}`);
      return emojis.join('');
    }
  }

  return '😊✨';
}
