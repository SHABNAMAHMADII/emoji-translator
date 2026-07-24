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
  'google/gemini-2.0-flash-exp:free',
  'meta-llama/llama-3.1-8b-instruct:free',
  'microsoft/phi-3-mini-128k-instruct:free',
];

const SYSTEM_PROMPT = `You are an emoji translator. Convert the user's text into emojis only.

RULES:
- Output ONLY emojis, nothing else
- NO words, letters, numbers, or punctuation
- Use 2-5 emojis that capture the meaning

EXAMPLES:
"i am sad" → 😢💔🥀
"i am happy" → 😊🎉✨
"call me later" → 📞⏰📱
"she is so cool" → 😎🔥✨
"it is hot today" → 🔥🌞🥵
"I am beautiful" → 😍✨💕`;

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

  // Try AI models first
  for (const model of MODELS) {
    try {
      console.log(`⏳ Trying model: ${model}`);
      const result = await tryModel(model, text);
      if (result.length > 0) {
        console.log(`✅ ${model} succeeded:`, result);
        return result;
      } else {
        console.warn(`⚠️ ${model} returned no emojis`);
      }
    } catch (error) {
      console.warn(`⚠️ ${model} failed:`, error.message);
    }
  }

  console.warn('⚠️ All AI models failed. Using fallback map.');
  const fallback = getFallbackEmojis(text);
  console.log('🔁 Fallback result:', fallback);
  return fallback;
}

function getFallbackEmojis(text) {
  const lower = text.toLowerCase();

  const map = {
    happy: ['😊', '🎉', '✨'],
    sad: ['😢', '💔', '🥀'],
    love: ['❤️', '😍', '💕'],
    beautiful: ['😍', '✨', '💕'],
    pretty: ['😍', '✨', '💕'],
    cool: ['😎', '🔥', '✨'],
    hot: ['🔥', '🌞', '🥵'],
    cold: ['❄️', '🥶', '🧊'],
    call: ['📞', '⏰', '📱'],
    later: ['⏰', '🕐', '⌛'],
    morning: ['🌅', '☀️', '🌞'],
    night: ['🌙', '😴', '💤'],
    coding: ['💻', '❤️', '🔥'],
    tired: ['😴', '💤', '🥱'],
    hungry: ['🍕', '😋', '🍔'],
    party: ['🎉', '🥳', '🍾'],
    grateful: ['🙏', '😊', '❤️'],
    excited: ['🤩', '🎉', '✨'],
    angry: ['😡', '💢', '🔥'],
    scared: ['😨', '😱', '💀'],
  };

  for (const [key, emojis] of Object.entries(map)) {
    if (lower.includes(key)) {
      return emojis.join('');
    }
  }

  return '😊✨';
}
