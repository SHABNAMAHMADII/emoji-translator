#  Emoji Translator

**Turn words into emojis. No letters allowed.**

Emoji Translator is a fun AI-powered web application that converts any sentence into expressive emoji-only messages. Perfect for chatting with friends, spicing up your social media posts, or just having fun with language!

## 🌐 Live Demo

https://emoji-translator-p2lkkut7q-shabnam-ahmadi-s-projects.vercel.app/

## ✨ Features

- 🤖 **AI Translation** – Uses OpenRouter AI to convert text into emojis
- 📋 **Copy to Clipboard** – Copy emojis with one click
- 📚 **Translation History** – Automatically saves all your translations
- 🗑️ **Delete History** – Remove individual or all translations
- 🎨 **Beautiful UI** – Clean, modern design with Tailwind CSS
- 📱 **Responsive** – Works on desktop, tablet, and mobile

## 🛠️ Technologies

- **React** – Frontend framework
- **Tailwind CSS** – Styling
- **OpenRouter AI** – AI translation API
- **Vite** – Build tool
- **Netlify** – Deployment

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- OpenRouter API key (free)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shabnamahmadii/emoji-translator.git
   cd emoji-translator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` file**
   ```
   VITE_OPENROUTER_API_KEY=your-api-key-here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Go to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## 📁 Project Structure

```
emoji-translator/
├── src/
│   ├── components/
│   │   ├── EmptyState.jsx
│   │   ├── Header.jsx
│   │   ├── HistoryItem.jsx
│   │   ├── TranslationForm.jsx
│   │   └── TranslationResult.jsx
│   ├── hooks/
│   │   └── useEmojiTranslation.js
│   ├── utils/
│   │   ├── clipboard.js
│   │   └── openRouter.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── .env
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## 🔧 Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_OPENROUTER_API_KEY` | Your OpenRouter API key |

## 🤝 Contributing

This is a capstone project for CodeWeekend Bootcamp. Feel free to fork and experiment!

## 📝 License

MIT

## 🙏 Acknowledgements

- [CodeWeekend Bootcamp](https://codeweekend.dev) – For the amazing learning experience
- [OpenRouter](https://openrouter.ai) – For providing free AI access
- [Lucide React](https://lucide.dev/) – For beautiful icons

---

**Made with ❤️ by Shabnam Ahmadi**
