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
      model: 'openai/gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: `You are a precise emoji translator.

Your task: Convert the given text into a short sequence of emojis that exactly represent the meaning.

Rules:
- ONLY return emojis
- NO words, NO letters, NO numbers
- Match the meaning as closely as possible
- Use 2–5 emojis

Examples:
"good morning" → 🌅☀️🌞
"good night" → 🌙😴💤
"i love coding" → 💻❤️🔥
"I'm tired" → 😴💤🥱
"Let's party" → 🎉🥳🍾
"I'm hungry" → 🍕😋🍔
"It's sunny" → ☀️🌤️🌞
"It's raining" → 🌧️☔💧
"I'm happy" → 😊🎉✨
"I'm sad" → 😢💔🥀

Now convert this text to emojis only: "${text}"`
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
