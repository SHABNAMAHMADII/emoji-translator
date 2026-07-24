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
  'nvidia/nemotron-3-ultra-550b-a55b:free',
  'poolside/laguna-s-2.1:free',
];

const SYSTEM_PROMPT = `You are an emoji translator. Convert text to emojis only.

RULES:
- ONLY return emojis
- NO words, NO letters, NO numbers
- Use 2-5 emojis

EXAMPLES:
"hi" → 👋😊
"hey bestie" → 👋💕✨
"it is so hot today" → 🔥🌞🥵
"i am happy" → 😊🎉✨
"i am sad" → 😢💔🥀`;

async function tryModel(model, text) {
  const completion = await openai.chat.completions.create({
    model,
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      { role: 'user', content: text },
    ],
    temperature: 0.3,
    max_tokens: 30,
  });

  const raw = completion.choices[0]?.message?.content?.trim() || '';
  const emojiRegex = /[\p{Emoji}]/gu;
  const emojis = raw.match(emojiRegex) || [];
  return emojis.join('');
}

export async function translateToEmojis(text) {
  if (!text?.trim()) return '';

  console.log('🔍 Translating:', text);

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

  console.warn('⚠️ All AI models failed. Using fallback.');
  return getFallbackEmojis(text);
}

function getFallbackEmojis(text) {
  const lower = text.toLowerCase();

  const map = {
    hi: ['👋', '😊'],
    hey: ['👋', '💕', '✨'],
    hello: ['👋', '😊'],
    happy: ['😊', '🎉', '✨'],
    sad: ['😢', '💔', '🥀'],
    hot: ['🔥', '🌞', '🥵'],
    cold: ['❄️', '🥶', '🧊'],
    love: ['❤️', '😍', '💕'],
    beautiful: ['😍', '✨', '💕'],
    cool: ['😎', '🔥', '✨'],
    call: ['📞', '⏰', '📱'],
    morning: ['🌅', '☀️', '🌞'],
    night: ['🌙', '😴', '💤'],
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
