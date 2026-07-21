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
          content: `You are a creative emoji translator. Your ONLY job is to convert text into a short sequence of emojis that accurately represent the meaning.

STRICT RULES:
- ONLY return emojis
- NEVER use letters, numbers, spaces, or punctuation
- NEVER explain what you're doing
- NEVER say anything in words
- JUST emojis, nothing else

GUIDELINES:
- Match the exact meaning of the sentence
- Use specific, relevant emojis (not generic ones)
- Use 2-6 emojis depending on the message length

EXAMPLES:
Input: "It's sunny today"
Output: ☀️🌤️🌞

Input: "I love coding"
Output: 💻❤️🔥

Input: "I'm so happy"
Output: 😊🎉✨

Input: "Let's go to the beach"
Output: 🏖️🌊🌴

Now convert this text to emojis only:`
        },
        {
          role: 'user',
          content: text
        }
      ],
      temperature: 0.8,
      max_tokens: 60,
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
