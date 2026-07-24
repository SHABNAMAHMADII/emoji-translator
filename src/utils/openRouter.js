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
  // Try AI first
  try {
    const completion = await openai.chat.completions.create({
      model: 'openai/gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: `You are an emoji translator. Convert text to emojis only.

RULES:
- ONLY return emojis
- NO words, NO letters, NO numbers
- Use 2-5 emojis

EXAMPLES:
"i am sad today" → 😢💔🥀
"i am happy today" → 😊🎉✨
"call me later" → 📞⏰📱
"today is so hot" → 🔥🌞🥵
"you look beautiful" → 😍✨💕

Text: "${text}"`
        }
      ],
      temperature: 0.3,
      max_tokens: 30,
    });

    let result = completion.choices[0]?.message?.content?.trim() || '';
    const emojiRegex = /[\p{Emoji}]/gu;
    const emojisOnly = result.match(emojiRegex) || [];

    if (emojisOnly.length > 0) {
      // AI gave us emojis, check if they make sense
      const aiEmojis = emojisOnly.join('');
      const manualEmojis = getEmojisForText(text);
      
      // If manual map has better emojis, use those
      if (manualEmojis && manualEmojis.length > 0 && manualEmojis.join('') !== aiEmojis) {
        console.log('🔍 Using manual fallback for:', text);
        return manualEmojis.join('');
      }
      
      return aiEmojis;
    }

    // Fallback to manual if AI returned nothing
    const manualEmojis = getEmojisForText(text);
    return manualEmojis.join('');
    
  } catch (error) {
    // If AI fails, use manual map
    console.error('OpenRouter error, using manual fallback:', error);
    const manualEmojis = getEmojisForText(text);
    return manualEmojis.join('');
  }
}
