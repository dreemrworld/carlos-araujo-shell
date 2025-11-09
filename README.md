# Next.js + ShadCN + Cloudflare Workers Quick Start Template 🚀

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/dreemrworld/nextjs-shadcn-cf-workers)

A modern, production-ready template for building scalable web applications with **Next.js 15**, **ShadCN UI**, and **Cloudflare Workers**. Deploy globally in seconds with instant previews and edge computing.

## ✨ Features

- ⚡ **Next.js 15** - App Router, Server Components, and Turbopack
- 🎨 **ShadCN UI** - Beautiful, accessible components with Tailwind CSS
- 🎭 **Magic UI Design MCP** - Advanced UI components and animations
- 🌐 **Cloudflare Workers** - Global edge deployment with instant cold boots
- 🔥 **TypeScript** - Full type safety throughout your application
- 🎯 **ESLint + Prettier** - Consistent code quality
- 📱 **Responsive Design** - Mobile-first approach
- 🚀 **One-Click Deploy** - Deploy directly to Cloudflare Workers/Pages

## 🚀 Quick Start

### Deploy Instantly

Click the "Deploy to Cloudflare Workers" button above and get your app live in under 2 minutes!

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/dreemrworld/nextjs-shadcn-cf-workers.git
   cd nextjs-shadcn-cf-workers
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see your app!

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
- **Deployment:** [Cloudflare Workers](https://workers.cloudflare.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Package Manager:** [pnpm](https://pnpm.io/) (recommended)

## 📁 Project Structure

```
nextjs-shadcn-cf-workers/
├── public/              # Static assets
├── src/
│   ├── app/            # Next.js App Router
│   │   ├── layout.tsx   # Root layout
│   │   ├── page.tsx     # Home page
│   │   └── globals.css  # Global styles
│   └── lib/
│       └── utils.ts     # Utility functions
├── components.json      # ShadCN configuration
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS config
├── wrangler.jsonc       # Cloudflare Workers config
└── package.json         # Project dependencies
```

## 🚀 Deployment

### Cloudflare Workers/Pages

This template is optimized for **Cloudflare Workers** deployment with zero cold starts and global edge computing.

#### Option 1: One-Click Deploy
Click the "Deploy to Cloudflare Workers" button at the top of this README.

#### Option 2: Manual Deploy

1. **Install Wrangler CLI**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**
   ```bash
   wrangler auth login
   ```

3. **Deploy**
   ```bash
   npm run deploy
   # or
   wrangler deploy
   ```

### Other Platforms

This template can also be deployed to:
- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)
- [Railway](https://railway.app/)

## 🎨 Customization

### Adding ShadCN Components

```bash
pnpm dlx shadcn-ui@latest add button
```

### Modifying Theme

Edit `src/app/globals.css` to customize your theme colors and styles.

### Adding New Pages

Create new pages in the `src/app/` directory following Next.js App Router conventions.

## 📝 Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm deploy` - Deploy to Cloudflare Workers

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Carlos Araújo**
- Portfolio: [carlos.goat.africa](https://carlos.goat.africa)
- Email: [carlos@goat.africa](mailto:carlos@goat.africa)
- Need help? Feel free to reach out!

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [ShadCN UI](https://ui.shadcn.com/) - Beautiful UI Components
- [Cloudflare Workers](https://workers.cloudflare.com/) - Global Edge Computing
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS Framework

---

## 🌐 Leia-me em Português (PT-PT)

### Template de Início Rápido Next.js + ShadCN + Cloudflare Workers 🚀

Um template moderno e pronto para produção para criar aplicações web escaláveis com **Next.js 15**, **ShadCN UI** e **Cloudflare Workers**. Implemente globalmente em segundos com pré-visualizações instantâneas e computação de borda.

#### 🚀 Início Rápido

1. **Clone o repositório**
   ```bash
   git clone https://github.com/dreemrworld/nextjs-shadcn-cf-workers.git
   cd nextjs-shadcn-cf-workers
   ```

2. **Instale as dependências**
   ```bash
   pnpm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   pnpm dev
   ```

4. **Abra seu navegador**

   Navegue para [http://localhost:3000](http://localhost:3000) para ver a sua aplicação!

#### 🎯 Funcionalidades

- ⚡ **Next.js 15** - App Router, Server Components e Turbopack
- 🎨 **ShadCN UI** - Componentes bonitos e acessíveis com Tailwind CSS
- 🎭 **Magic UI Design MCP** - Componentes de UI avançados e animações
- 🌐 **Cloudflare Workers** - Implementação global de borda com arranques frios instantâneos

Este template inclui uma configuração completa para começar a desenvolver aplicações modernas com as melhores ferramentas disponíveis.

---

<div align="center">
  <p>Built with ❤️ by Carlos Araújo using Next.js, ShadCN, and Cloudflare Workers</p>
  <p>
    <a href="#nextjs--shadcn--cloudflare-workers-quick-start-template-">⭐ Star this repo</a> •
    <a href="https://github.com/dreemrworld/nextjs-shadcn-cf-workers/issues">🐛 Report Issues</a> •
    <a href="https://github.com/dreemrworld/nextjs-shadcn-cf-workers/discussions">💬 Discussions</a>
  </p>
</div>
