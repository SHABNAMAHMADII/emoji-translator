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
      model: 'meta-llama/llama-3.2-3b-instruct:free',
      messages: [
        {
          role: 'system',
          content: `You are an emoji translator. Convert text to emojis.

IMPORTANT RULES:
1. ONLY return emojis. NO words, NO letters, NO numbers.
2. Match the EXACT meaning of the text.
3. Be specific — don't use generic emojis.

EXAMPLES:
- "I love coding" → 💻❤️🔥
- "It's sunny today" → ☀️🌤️🌞
- "Good morning" → 🌅☀️🌞
- "I'm tired" → 😴💤🥱
- "Let's party" → 🎉🥳🍾
- "I'm hungry" → 🍕😋🍔
- "I'm studying" → 📚📖✏️
- "I'm happy" → 😊🎉✨

Now convert this text to emojis only: "${text}"`
        }
      ],
      temperature: 0.6,
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
