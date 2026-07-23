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
          content: `You are an emoji translator. Your ONLY job is to convert text to emojis.

STRICT RULES:
- ONLY return emojis
- NEVER use letters, numbers, or words
- NEVER explain anything
- NEVER say what you're doing
- JUST emojis, nothing else

EXAMPLES:
Input: "I am so happy today"
Output: 😊😍🎉✨

Input: "I love coding"
Output: ❤️💻🔥

Input: "Good morning"
Output: 🌅☀️🌞

Now convert this text to emojis only. Do NOT add any text, explanations, or extra characters. ONLY EMOJIS.`
        },
        {
          role: 'user',
          content: text
        }
      ],
      temperature: 0.7,
      max_tokens: 50,
    });

    const result = completion.choices[0]?.message?.content?.trim() || '';

    // Remove any non-emoji characters
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
