import { getEmojisForText } from './emojiMap';

export async function translateToEmojis(text) {
  // Use ONLY manual mapping (no AI)
  const manualEmojis = getEmojisForText(text);
  console.log('Manual emojis for text:', manualEmojis);
  return manualEmojis.join('');
}
