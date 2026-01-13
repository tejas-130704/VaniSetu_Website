# VaniSetu - Bridging the Information Gap in Rural India 🇮🇳

![VaniSetu Logo](public/placeholder-logo.png)

**VaniSetu** (Voice Bridge) is an AI-powered voice agent designed to empower rural citizens by providing accessible information about government schemes, subsidies, and opportunities through simple voice calls in their native languages.

> **"Meaningful Technology Doesn't Need Screens. It Only Needs a Voice."**

## 🌟 Features

- **🗣️ Multilingual Voice Interface**: Supports interaction in multiple Indian languages (Hindi, Marathi, English, etc.).
- **📞 Accessible Demo**: Users can request a demo call directly from the website.
- **📊 Data Analytics Dashboard**: Visualizes rural demographics, literacy rates, and scheme awareness using interactive charts.
- **📱 Responsive Design**: Modern, glassmorphism-inspired UI capable of running on all devices.
- **🚀 Static Deployment**: Optimized for high-performance static hosting on GitHub Pages.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Lucide React](https://lucide.dev/), Custom Glassmorphism UI
- **Visualization**: [Recharts](https://recharts.org/)
- **Animation**: CSS Keyframes, Tailwind Animate
- **Deployment**: GitHub Pages (Static Export)

## 🚀 Getting Started

### Prerequisites
- Node.js (v20 or higher)
- npm or yarn

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/tejas-130704/VaniSetu_Website.git
    cd VaniSetu_Website
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Deployment

This project is configured for extensive **GitHub Pages** support via GitHub Actions.

### Manual Deployment
```bash
npm run deploy
```

### Automatic Deployment
Pushing to the `main` branch will automatically trigger the GitHub Action workflow defined in `.github/workflows/deploy.yml` and deploy the site to:
`https://tejas-130704.github.io/VaniSetu_Website/`

> **Note**: The `next.config.mjs` is configured with a conditional `basePath`. It is empty for local development but set to `/VaniSetu_Website` for production builds.

## 📁 Project Structure

```
VaniSetu/
├── app/                  # Next.js App Router pages
├── components/           # React UI components
│   ├── ui/               # Reusable small components (buttons, dialogs)
│   └── ...               # Feature-specific components (hero, stats)
├── public/               # Static assets (images, icons)
├── .github/workflows/    # CI/CD configurations
├── next.config.mjs       # Next.js configuration
└── package.json          # Project dependencies
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is created for educational and hackathon showcase purposes.

---
© 2026 VaniSetu - Empowering Rural India
