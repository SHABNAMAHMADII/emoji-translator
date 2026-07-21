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
      model: 'google/gemini-2.0-flash-exp:free',
      messages: [
        {
          role: 'system',
          content: `You are an emoji translator. Convert the following text to emojis.

RULES:
- ONLY return emojis
- NO words, NO letters, NO numbers
- Match the meaning EXACTLY

EXAMPLES:
"good night" → 🌙😴💤
"i love coding" → 💻❤️🔥
"I'm feeling so grateful" → 🙏😊❤️
"It's sunny today" → ☀️🌤️🌞
"I'm tired" → 😴💤🥱
"Let's party" → 🎉🥳🍾
"Good morning" → 🌅☀️🌞
"I'm hungry" → 🍕😋🍔

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
