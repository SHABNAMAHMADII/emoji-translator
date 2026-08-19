import React, { useState } from 'react';
import { ArrowLeftRight, Copy, Check } from 'lucide-react';
import { copyToClipboard } from '../utils/clipboard';

const emojiToTextMap = {
  // 😊 Emotions
  '😊': 'happy',
  '😂': 'laughing',
  '🤣': 'laughing',
  '🥰': 'love',
  '😍': 'love',
  '😘': 'kiss',
  '😗': 'kiss',
  '😙': 'kiss',
  '😚': 'kiss',
  '🥲': 'grateful',
  '😋': 'yummy',
  '😛': 'playful',
  '😝': 'playful',
  '😜': 'playful',
  '🤪': 'crazy',
  '🥳': 'party',
  '😎': 'cool',
  '🤓': 'nerdy',
  '🧐': 'thinking',
  '🤔': 'thinking',
  '🤨': 'suspicious',
  '😏': 'smirk',
  '😒': 'annoyed',
  '🙄': 'rolling eyes',
  '😬': 'nervous',
  '😑': 'bored',
  '😶': 'speechless',
  '😐': 'neutral',
  '😕': 'confused',
  '😟': 'worried',
  '😤': 'frustrated',
  '😠': 'angry',
  '😡': 'angry',
  '😢': 'sad',
  '😭': 'crying',
  '😱': 'shocked',
  '😨': 'scared',
  '😰': 'anxious',
  '😥': 'disappointed',
  '😓': 'stressed',
  '😩': 'exhausted',
  '😫': 'tired',
  '🥱': 'bored',
  '😴': 'sleepy',
  '💤': 'sleeping',
  '💭': 'thinking',
  '💖': 'love',
  '💕': 'love',
  '❤️': 'love',
  '🧡': 'love',
  '💛': 'love',
  '💚': 'love',
  '💙': 'love',
  '💜': 'love',
  '🤍': 'love',
  '🖤': 'love',
  '💔': 'heartbroken',
  '❤️‍🔥': 'passion',
  '❤️‍🩹': 'healing',

  // 👋 Greetings
  '👋': 'hello',
  '🤝': 'handshake',
  '🙌': 'celebrate',
  '👏': 'clap',
  '🙏': 'thank you',
  '🤲': 'pray',

  // 🌤️ Weather
  '☀️': 'sunny',
  '🌤️': 'sunny',
  '🌅': 'sunrise',
  '🌄': 'sunrise',
  '🌞': 'sunny',
  '🌙': 'moon',
  '🌛': 'moon',
  '🌜': 'moon',
  '☁️': 'cloudy',
  '⛅': 'partly cloudy',
  '🌧️': 'rainy',
  '🌨️': 'snowy',
  '❄️': 'cold',
  '🥶': 'cold',
  '🔥': 'hot',
  '🥵': 'hot',
  '🌊': 'wave',
  '🌈': 'rainbow',

  // 🍕 Food
  '🍕': 'pizza',
  '🍔': 'burger',
  '🍟': 'fries',
  '🌭': 'hot dog',
  '🍗': 'chicken',
  '🥩': 'steak',
  '🥓': 'bacon',
  '🧇': 'waffle',
  '🥞': 'pancake',
  '🧈': 'butter',
  '🍳': 'egg',
  '🥚': 'egg',
  '🥯': 'bagel',
  '🥖': 'bread',
  '🍞': 'bread',
  '🧀': 'cheese',
  '🥪': 'sandwich',
  '🥙': 'wrap',
  '🌮': 'taco',
  '🌯': 'burrito',
  '🥗': 'salad',
  '🍿': 'popcorn',
  '🧂': 'salt',
  '🍚': 'rice',
  '🍛': 'curry',
  '🍣': 'sushi',
  '🍱': 'bento',
  '🍜': 'noodles',
  '🍲': 'soup',
  '🍢': 'oden',
  '🍡': 'dango',
  '🥟': 'dumpling',
  '🍦': 'ice cream',
  '🍨': 'ice cream',
  '🍧': 'shaved ice',
  '🍩': 'donut',
  '🍪': 'cookie',
  '🎂': 'cake',
  '🍰': 'cake',
  '🧁': 'cupcake',
  '🥧': 'pie',
  '🍫': 'chocolate',
  '🍬': 'candy',
  '🍭': 'lollipop',
  '🍮': 'custard',
  '☕': 'coffee',
  '🍵': 'tea',
  '🧃': 'juice',
  '🥤': 'soda',
  '🧋': 'bubble tea',

  // 📚 Activities
  '📚': 'study',
  '📖': 'reading',
  '📝': 'writing',
  '✏️': 'writing',
  '💻': 'coding',
  '🖥️': 'computer',
  '⌨️': 'typing',
  '📱': 'phone',
  '📞': 'call',
  '📧': 'email',
  '✉️': 'mail',
  '📬': 'mail',
  '📭': 'mail',
  '📪': 'mail',
  '📫': 'mail',
  '📮': 'mail',

  // 🎵 Music
  '🎵': 'music',
  '🎶': 'music',
  '🎧': 'listening',
  '🎤': 'singing',
  '🎸': 'guitar',
  '🎹': 'piano',
  '🎺': 'trumpet',
  '🎷': 'saxophone',
  '🎻': 'violin',
  '🥁': 'drums',

  // 🏠 Home
  '🏠': 'home',
  '🏡': 'home',
  '🏢': 'office',
  '🏬': 'store',
  '🏣': 'post office',
  '🏤': 'post office',
  '🏥': 'hospital',
  '🏦': 'bank',
  '🏨': 'hotel',
  '🏩': 'love hotel',
  '🏪': 'convenience store',
  '🏫': 'school',
  '🏛️': 'government',
  '⛪': 'church',
  '🕌': 'mosque',
  '🕍': 'synagogue',
  '🛕': 'temple',

  // ✈️ Travel
  '✈️': 'travel',
  '🛫': 'departure',
  '🛬': 'arrival',
  '🚗': 'car',
  '🚕': 'taxi',
  '🚙': 'suv',
  '🚌': 'bus',
  '🚎': 'trolley',
  '🚓': 'police',
  '🚑': 'ambulance',
  '🚒': 'fire truck',
  '🚐': 'van',
  '🚚': 'truck',
  '🚛': 'truck',
  '🚜': 'tractor',
  '🚲': 'bicycle',
  '🛴': 'scooter',
  '🛵': 'motorcycle',
  '🏍️': 'motorcycle',
  '🚂': 'train',
  '🚃': 'train',
  '🚄': 'bullet train',
  '🚅': 'bullet train',
  '🚇': 'subway',
  '🚈': 'monorail',
  '🚉': 'station',
  '🚊': 'tram',
  '🚝': 'monorail',
  '🚞': 'mountain railway',
  '🚋': 'tram',
  '🚌': 'bus',
  '🚍': 'bus',
  '🚎': 'trolleybus',

  // ⚽ Sports
  '⚽': 'football',
  '🏀': 'basketball',
  '🏈': 'football',
  '⚾': 'baseball',
  '🥎': 'softball',
  '🎾': 'tennis',
  '🏐': 'volleyball',
  '🏉': 'rugby',
  '🥏': 'frisbee',
  '🎱': 'pool',
  '🪀': 'yo-yo',
  '🪁': 'kite',
  '🏸': 'badminton',
  '🏒': 'hockey',
  '🏑': 'field hockey',
  '🥍': 'lacrosse',
  '🏏': 'cricket',
  '🎿': 'skiing',
  '⛷️': 'skiing',
  '🏂': 'snowboarding',
  '🪂': 'parachuting',
  '🏋️': 'weightlifting',
  '🤼': 'wrestling',
  '🤸': 'gymnastics',
  '⛹️': 'basketball',
  '🤾': 'handball',
  '🏌️': 'golf',
  '🏇': 'horse racing',
  '🧘': 'yoga',

  // 🦁 Animals
  '🐶': 'dog',
  '🐕': 'dog',
  '🐱': 'cat',
  '🐈': 'cat',
  '🐭': 'mouse',
  '🐹': 'hamster',
  '🐰': 'rabbit',
  '🦊': 'fox',
  '🐻': 'bear',
  '🐼': 'panda',
  '🐨': 'koala',
  '🐯': 'tiger',
  '🦁': 'lion',
  '🐮': 'cow',
  '🐷': 'pig',
  '🐽': 'pig',
  '🐸': 'frog',
  '🐵': 'monkey',
  '🐔': 'chicken',
  '🐧': 'penguin',
  '🐦': 'bird',
  '🦉': 'owl',
  '🦇': 'bat',
  '🐺': 'wolf',
  '🐗': 'boar',
  '🐴': 'horse',
  '🦄': 'unicorn',
  '🐝': 'bee',
  '🐞': 'ladybug',
  '🦋': 'butterfly',
  '🐙': 'octopus',
  '🐠': 'fish',
  '🐟': 'fish',
  '🐬': 'dolphin',
  '🐳': 'whale',
  '🐋': 'whale',
  '🦈': 'shark',
  '🐊': 'crocodile',
  '🐅': 'tiger',
  '🐆': 'leopard',
  '🦍': 'gorilla',
  '🦧': 'orangutan',
  '🦣': 'mammoth',
  '🦛': 'hippopotamus',
  '🦏': 'rhinoceros',
  '🦒': 'giraffe',
  '🦘': 'kangaroo',
  '🦡': 'badger',
  '🦨': 'skunk',
  '🦦': 'otter',
  '🦥': 'sloth',
  '🦩': 'flamingo',
  '🦚': 'peacock',
  '🦜': 'parrot',
  '🦝': 'raccoon',
  '🦙': 'llama',
  '🦌': 'deer',
  '🦫': 'beaver',

  // 🌸 Nature
  '🌸': 'flower',
  '🌺': 'flower',
  '🌻': 'flower',
  '🌹': 'rose',
  '🌷': 'tulip',
  '🌱': 'plant',
  '🌿': 'plant',
  '🌳': 'tree',
  '🌲': 'tree',
  '🌴': 'palm tree',
  '🌵': 'cactus',
  '🌾': 'rice',
  '🌽': 'corn',
  '🍄': 'mushroom',
  '🪸': 'coral',
  '🐚': 'shell',
  '🌊': 'wave',
  '🌋': 'volcano',
  '🗻': 'mountain',

  // 🇦🇫 Flags
  '🇦🇫': 'Afghanistan',

  // 🧩 Misc
  '⭐': 'star',
  '🌟': 'star',
  '✨': 'magic',
  '💫': 'magic',
  '🎯': 'goal',
  '🎮': 'gaming',
  '🕹️': 'gaming',
  '🎲': 'game',
  '🧩': 'puzzle',
  '🎨': 'art',
  '🖌️': 'art',
  '🖼️': 'art',
  '📸': 'photo',
  '📷': 'photo',
  '🎬': 'movie',
  '🍿': 'movie',
  '🎥': 'movie',
  '🎞️': 'movie',
  '📺': 'tv',
  '📻': 'radio',
  '🎙️': 'podcast',
  '🎚️': 'podcast',
  '🎛️': 'podcast',
  '📟': 'pager',
  '☎️': 'phone',
  '📠': 'fax',
  '💾': 'save',
  '💿': 'disk',
  '📀': 'disk',
  '🧮': 'abacus',
  '🧵': 'sewing',
  '🧶': 'knitting',
  '🪡': 'needle',
  '🪢': 'knot',
  '🪣': 'bucket',
  '🪤': 'trap',
  '🪥': 'toothbrush',
  '🪦': 'gravestone',
  '🪧': 'sign',
  '🪪': 'id',
  '🪬': 'hamsa',
  '🪭': 'fan',
  '🪮': 'comb',
  '🪯': 'khanda',
  '🪰': 'fly',
  '🪱': 'worm',
  '🪲': 'beetle',
  '🪳': 'cockroach',
  '🪴': 'plant',
  '🪵': 'wood',
  '🪶': 'feather',
  '🪷': 'lotus',
  '🪸': 'coral',
  '🪹': 'nest',
  '🪺': 'nest',
  '🪻': 'flower',
  '🪼': 'jellyfish',
  '🪽': 'wing',
  '🪿': 'goose',
  '🫀': 'heart',
  '🫁': 'lungs',
  '🫂': 'hug',
  '🫃': 'pregnant',
  '🫄': 'pregnant',
  '🫅': 'royalty',
  '🫎': 'moose',
  '🫏': 'donkey',
  '🫐': 'blueberry',
  '🫑': 'pepper',
  '🫒': 'olive',
  '🫓': 'flatbread',
  '🫔': 'tamale',
  '🫕': 'fondue',
  '🫖': 'teapot',
};

function ReverseTranslate() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [copied, setCopied] = useState(false);

  const handleReverse = () => {
    if (!input.trim()) {
      setResult('Please paste some emojis first!');
      return;
    }

    // Extract emojis from input
    const emojiRegex = /[\p{Emoji}]/gu;
    const emojis = input.match(emojiRegex) || [];

    if (emojis.length === 0) {
      setResult('No emojis found. Please paste valid emojis.');
      return;
    }

    // Map each emoji to text
    const words = emojis.map(emoji => {
      return emojiToTextMap[emoji] || emoji;
    });

    // Build sentence
    let sentence = words.join(' ');

    // Capitalize first letter
    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

    setResult(sentence);
  };

  const handleCopy = async () => {
    if (!result) return;
    const success = await copyToClipboard(result);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="card dark:bg-[#1e293b] dark:border dark:border-[#334155] mt-6">
      <h3 className="text-lg font-bold text-charcoal dark:text-white mb-3 flex items-center gap-2">
        <ArrowLeftRight size={20} className="text-coral" /> Reverse Translate
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
        Paste emojis and convert them back to text!
      </p>

      <div className="relative">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste emojis here... 😊🎉✨"
          className="w-full p-3 border-2 border-gray-200 dark:border-[#2d3748] rounded-xl focus:border-coral dark:focus:border-[#e94560] focus:outline-none transition-all resize-none text-lg bg-cream/50 dark:bg-[#0f172a] dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
          rows="2"
        />
      </div>

      <button
        onClick={handleReverse}
        disabled={!input.trim()}
        className="btn-primary w-full mt-3 flex items-center justify-center gap-2 text-md disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ArrowLeftRight size={18} />
        Reverse Translate
      </button>

      {result && (
        <div className="mt-4 p-4 bg-gray-50 dark:bg-[#0f172a] rounded-xl border border-gray-200 dark:border-[#2d3748]">
          <div className="flex justify-between items-start gap-3">
            <p className="text-gray-700 dark:text-gray-300 text-lg break-words flex-1">
              {result}
            </p>
            {result !== 'Please paste some emojis first!' && result !== 'No emojis found. Please paste valid emojis.' && (
              <button
                onClick={handleCopy}
                className="p-2 rounded-lg text-gray-400 hover:text-teal dark:hover:text-[#00d2d3] transition-all flex-shrink-0"
                title="Copy result"
              >
                {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ReverseTranslate;
