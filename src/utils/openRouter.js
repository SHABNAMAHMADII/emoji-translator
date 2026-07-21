import OpenAI from 'openai';
import { getEmojisForText } from './emojiMap';

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: import.meta.env.VITE_OPENROUTER_API_KEY,
  defaultHeaders: {
    'HTTP-Referer': window.location.origin,
    'X-Title': 'EmojiTranslator',
  },
  dangerouslyAllowBrowser: true,
});

export async function translateToEmojis(text) {
  // Step 1: Try manual mapping first (100% reliable)
  const manualEmojis = getEmojisForText(text);
  if (manualEmojis && manualEmojis.length > 0) {
    console.log('✅ Using manual emoji mapping:', manualEmojis);
    return manualEmojis.join('');
  }

  // Step 2: Fallback to AI if manual mapping fails
  try {
    const completion = await openai.chat.completions.create({
      model: 'google/gemini-2.0-flash-exp:free',
      messages: [
        {
          role: 'system',
          content: `You are an emoji translator. Convert the following text to emojis only.

RULES:
- ONLY return emojis
- NO words, NO letters, NO numbers
- Match the meaning exactly

EXAMPLES:
"good morning" → 🌅☀️🌞
"good night" → 🌙😴💤
"i love coding" → 💻❤️🔥
"I'm feeling so grateful" → 🙏😊❤️
"It's sunny today" → ☀️🌤️🌞

Text: "${text}"`
        }
      ],
      temperature: 0.5,
      max_tokens: 30,
    });

    let result = completion.choices[0]?.message?.content?.trim() || '';

    // Remove any non-emoji characters
    const emojiRegex = /[\p{Emoji}]/gu;
    const emojisOnly = result.match(emojiRegex) || [];
    
    if (emojisOnly.length === 0) {
      console.warn('No emojis found, using fallback');
      return '😊✨';
    }

    return emojisOnly.join('');
    
  } catch (error) {
    console.error('OpenRouter error:', error);
    return '😊✨';
  }
}
