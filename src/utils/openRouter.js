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
      model: 'openrouter/free',
      messages: [
        {
          role: 'system',
          content: `You are an emoji translator. Your ONLY task is to convert English text into a sequence of emojis.

RULES:
- ONLY return emojis
- NO words, NO letters, NO numbers
- NO explanations
- Use 2-5 emojis

EXAMPLES:
"call me later" → 📞⏰📱
"i am so happy" → 😊🎉✨
"today is so hot" → 🔥🌞🥵
"you look beautiful" → 😍✨💕
"good morning" → 🌅☀️🌞
"good night" → 🌙😴💤
"i love coding" → 💻❤️🔥
"let's party" → 🎉🥳🍾
"i'm tired" → 😴💤🥱
"i'm hungry" → 🍕😋🍔

Now convert this text to emojis only: "${text}"`
        }
      ],
      temperature: 0.3,
      max_tokens: 30,
    });

    let result = completion.choices[0]?.message?.content?.trim() || '';

    // Extract only emojis
    const emojiRegex = /[\p{Emoji}]/gu;
    const emojisOnly = result.match(emojiRegex) || [];

    if (emojisOnly.length === 0) {
      // Fallback if no emojis found
      return '😊✨';
    }

    return emojisOnly.join('');
    
  } catch (error) {
    console.error('OpenRouter error:', error);
    return '😊✨';
  }
}
