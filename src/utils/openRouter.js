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

// Only free models that actually work for chat
const MODELS = [
  'google/gemini-2.0-flash-exp:free',
  'meta-llama/llama-3.1-8b-instruct:free',
  'microsoft/phi-3-mini-128k-instruct:free',
];

// Matches all emojis (including flags, families, skin tones)
const EMOJI_REGEX = /(\p{Emoji_Presentation}|\p{Extended_Pictographic})(\u200d(\p{Emoji_Presentation}|\p{Extended_Pictographic}))*|\p{Regional_Indicator}{2}/gu;

const SYSTEM_PROMPT = `You are an emoji translator. Convert the user's text into emojis only.

RULES:
- Output ONLY emojis, nothing else
- NO words, letters, numbers, or punctuation
- Use 2-5 emojis that capture the meaning

EXAMPLES:
"i am sad" → 😢💔🥀
"i am happy" → 😊🎉✨
"call me later" → 📞⏰📱`;

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
  const emojis = raw.match(EMOJI_REGEX) || [];
  return emojis.join('');
}

export async function translateToEmojis(text) {
  if (!text?.trim()) return '';

  for (const model of MODELS) {
    try {
      const result = await tryModel(model, text);
      if (result.length > 0) {
        console.log(`✅ ${model} succeeded`);
        return result;
      }
    } catch (error) {
      console.warn(`⚠️ ${model} failed:`, error.message);
    }
  }

  // If all AI models fail, use a simple fallback map
  console.warn('All AI models failed. Using fallback map.');
  return getFallbackEmojis(text);
}

// 🔥 FALLBACK: Manual emoji map (NO AI, 100% reliable)
function getFallbackEmojis(text) {
  const lower = text.toLowerCase();
  const map = {
    happy: ['😊', '🎉', '✨'],
    sad: ['😢', '💔', '🥀'],
    love: ['❤️', '😍', '💕'],
    beautiful: ['😍', '✨', '💕'],
    pretty: ['😍', '✨', '💕'],
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
  };

  for (const [key, emojis] of Object.entries(map)) {
    if (lower.includes(key)) {
      return emojis.join('');
    }
  }

  return '😊✨';
}
