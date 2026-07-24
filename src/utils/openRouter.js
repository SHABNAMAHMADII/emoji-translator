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

export async function translateToEmojis(text) {
  try {
    const completion = await openai.chat.completions.create({
      model: 'openai/gpt-4o-mini',  // ← THIS WILL WORK
      messages: [
        {
          role: 'system',
          content: `You are an emoji translator. Convert text to emojis only.

STRICT RULES:
- ONLY return emojis
- NO words, NO letters, NO numbers
- Use 2-5 emojis

EXAMPLES:
"i am sad today" → 😢💔🥀
"i am happy today" → 😊🎉✨
"call me later" → 📞⏰📱
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

    if (emojisOnly.length === 0) {
      return '😊✨';
    }

    return emojisOnly.join('');
    
  } catch (error) {
    console.error('OpenRouter error:', error);
    return '😊✨';
  }
}
