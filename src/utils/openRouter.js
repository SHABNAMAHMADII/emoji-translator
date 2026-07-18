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
      model: 'openrouter/free', // This uses a free AI model
      messages: [
        {
          role: 'system',
          content: `You are a creative emoji translator. Convert the user's sentence into emojis only. 
          Rules: 
          - NEVER use letters, numbers, or words
          - ONLY use emojis
          - Be expressive and capture the emotion
          - Use 3-10 emojis depending on the message length`
        },
        {
          role: 'user',
          content: text
        }
      ],
      temperature: 0.8,
      max_tokens: 60,
    });

    const result = completion.choices[0]?.message?.content?.trim();
    if (!result || /[a-zA-Z0-9]/.test(result)) {
      throw new Error('AI returned text instead of emojis');
    }
    return result;
  } catch (error) {
    console.error('OpenRouter error:', error);
    throw new Error(error.message || 'Failed to translate. Please try again.');
  }
}