Portfolio

A clean, privacy-focused portfolio website built with Next.js, React, and Tailwind CSS. This portfolio showcases my projects, skills, and experience as a full-stack developer.
Features
Privacy-First**: No tracking, no analytics, no cookies
Responsive Design**: Works seamlessly on all devices
Fast Performance**: Optimized with Next.js App Router
Smooth Animations**: Subtle transitions with Framer Motion
Resume Viewer**: Embedded PDF viewer with download option
SEO Optimized**: Meta tags and semantic HTML
Accessible**: WCAG compliant with proper ARIA labels

Live Demo

Visit the live site: https://portfolio-one-gilt-47.vercel.app/

#Built With

- **Framework**: [Next.js 15](https://nextjs.org/) - React framework with App Router
- **UI Library**: [React 18](https://reactjs.org/) - Component-based UI
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Production-ready animations
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful icon library
- **Deployment**: [Vercel](https://vercel.com/) - Serverless deployment platform

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles
├── public/
│   └── resume.pdf          # Resume file
├── components/             # React components (optional)
├── package.json            # Dependencies
├── tailwind.config.ts      # Tailwind configuration
├── next.config.ts          # Next.js configuration
└── README.md               # This file
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn or pnpm

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/k1ndnessforever/portfolio.git
cd portfolio
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Add your resume**

Place your resume PDF in the `public` folder:

```bash
public/resume.pdf
```

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Update Personal Information

Edit `app/page.tsx` to update:

- Name and title
- Bio and summary
- Contact information
- Projects list
- Skills and technologies

### Change Colors

The primary accent color is defined throughout the code as `#0B3954`. To change it:

```tsx
// Find and replace all instances of #0B3954 with your color
className="text-[#0B3954]"  // Change to your color
className="bg-[#0B3954]"    // Change to your color
```

Or update Tailwind config for theme colors:

```js
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#0B3954', // Your custom color
      },
    },
  },
}
```

### Add More Pages

Create new pages in the `app` directory:

```bash
app/
├── blog/
│   └── page.tsx        # Blog page at /blog
├── contact/
│   └── page.tsx        # Contact page at /contact
```

## 📦 Build for Production

```bash
npm run build
npm run start
```

This creates an optimized production build in the `.next` folder.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/k1ndnessforever/portfolio.git
git push -u origin main
```

2. **Import to Vercel**

- Go to [vercel.com](https://vercel.com)
- Click "Import Project"
- Select your GitHub repository
- Click "Deploy"

Vercel will automatically detect Next.js and configure everything.

### Deploy to Other Platforms

<details>
<summary>Netlify</summary>

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod
```

</details>

<details>
<summary>GitHub Pages</summary>

Next.js requires a server, so static hosting like GitHub Pages requires additional configuration with static export. Use Vercel or Netlify instead for easier deployment.

</details>

## 🔒 Privacy & Security

This portfolio follows privacy-first principles:

- ✅ No tracking scripts (Google Analytics, Facebook Pixel, etc.)
- ✅ No cookies
- ✅ No user data collection
- ✅ No third-party embeds
- ✅ No external dependencies (except CDN libraries)
- ✅ All assets served from your domain
- ✅ HTTPS enforced on Vercel

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Yash Pandit**

- Website: [yashpandit.dev](https://your-portfolio-url.vercel.app)
- GitHub: [@k1ndnessforever](https://github.com/k1ndnessforever)
- LinkedIn: [yashpandit](https://linkedin.com/in/yashpandit)
- Email: yash.pandit.dev01@gmail.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

## 📞 Contact

For any questions or feedback, feel free to reach out:

- Email: yash.pandit.dev01@gmail.com
- LinkedIn: [linkedin.com/in/yashpandit](https://linkedin.com/in/yashpandit)
- GitHub Issues: [Create an issue](https://github.com/k1ndnessforever/portfolio/issues)

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)
- [Vercel](https://vercel.com) for hosting

---

<div align="center">
  Made with ❤️ by Yash Pandit
  <br>
  <sub>Built with Next.js, React, and Tailwind CSS</sub>
</div>
