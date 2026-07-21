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
          content: `You are a precise emoji translator. Convert the following text into a short sequence of emojis that EXACTLY match the meaning.

STRICT RULES:
- ONLY return emojis
- NEVER use letters, numbers, or words
- NEVER add extra text or explanations
- Use 2-5 emojis that best represent the sentence

IMPORTANT GUIDELINES:
- Match the exact meaning of each word
- Use specific, relevant emojis
- Be creative but accurate

EXAMPLES:
"It's sunny today" → ☀️🌤️🌞
"It's raining outside" → 🌧️☔💧
"I love coding" → 💻❤️🔥
"I'm so happy" → 😊🎉✨
"I'm tired" → 😴💤🥱
"Let's go to the beach" → 🏖️🌊🌴
"Good morning" → 🌅☀️🌞
"Good night" → 🌙😴💤
"I'm hungry" → 🍕😋🍔
"I'm studying" → 📚📖✏️

Now convert this text to emojis only:
Input: "${text}"
Output:`
        },
        {
          role: 'user',
          content: text
        }
      ],
      temperature: 0.7,
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
