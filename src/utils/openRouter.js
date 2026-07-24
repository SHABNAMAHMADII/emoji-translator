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
          content: `You are an emoji translator. You convert English sentences into a sequence of emojis that represent the meaning.

RULES (FIXED):
- ONLY return emojis
- NEVER use letters, numbers, or words
- NEVER explain anything
- Use 2-5 emojis

EXAMPLES OF EXACT TRANSLATIONS:
"call me later" → 📞⏰📱
"i am so happy" → 😊😍🎉
"today is so hot" → 🔥🌞🥵
"you look beautiful" → 😍✨💕
"good morning" → 🌅☀️🌞
"good night" → 🌙😴💤
"i love you" → ❤️😍💕
"let's go out" → 🚶‍♀️🌳✨
"i'm tired" → 😴💤🥱
"i'm hungry" → 🍕😋🍔
"i'm bored" → 🥱😑💤

Now convert this text into emojis only. NO WORDS. NO LETTERS. NO NUMBERS. ONLY EMOJIS.

Text: "${text}"`
        }
      ],
      temperature: 0.5,
      max_tokens: 30,
    });

    const result = completion.choices[0]?.message?.content?.trim() || '';

    // Extract only emojis
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
