import { useState } from 'react';
import { translateToEmojis } from '../utils/openRouter';

function useEmojiTranslation() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const translate = async (text) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await translateToEmojis(text);
      return result;
    } catch (err) {
      setError(err.message);
      return '😊✨🎉';
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, translate };
}

export default useEmojiTranslation;
