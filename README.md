# Windows Clone

A nostalgic desktop OS simulator built with [Next.js](https://nextjs.org), React, and TypeScript. This project recreates a Windows-like desktop experience in the browser, complete with a taskbar, start menu, desktop icons, draggable windows, and a file explorer.

## Features

- 🖥️ **Desktop Environment** - Fully interactive desktop with familiar Windows UI
- 🪟 **Draggable Windows** - Open and manage multiple windows
- 📁 **File Explorer** - Browse and interact with files
- 🎨 **Theme Support** - Dark and light mode themes
- 📱 **Responsive Design** - Works on various screen sizes
- ⚡ **Fast Performance** - Built with Next.js for optimized loading
- 🎯 **Portfolio Integration** - Showcase projects and portfolio content

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd Windows_Clone
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   ├── about/           # About page
│   ├── contact/         # Contact page
│   └── project/[slug]/  # Dynamic project pages
├── components/          # Reusable React components
│   ├── os/              # OS components (Taskbar, Window, DesktopIcon, etc.)
│   ├── apps/            # Application components (FileExplorer)
│   ├── home/            # Home view component
│   └── theme-provider.tsx
└── lib/                 # Utilities and data
    ├── data.ts          # Content data
    ├── os-data.ts       # OS configuration data
    └── utils.ts         # Helper functions
```

## Key Components

- **DesktopLayout** - Main container for the desktop environment
- **Taskbar** - Bottom navigation bar with app shortcuts
- **StartMenu** - Windows-style start menu
- **Window** - Draggable window component
- **DesktopIcon** - Interactive desktop shortcuts
- **FileExplorer** - File browsing interface
- **HomeView** - Main home page content

## Technologies Used

- **Framework**: [Next.js 14](https://nextjs.org)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Component Library**: React
- **Icons**: Custom SVG icons in `/public/Icons`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization

- **Theme**: Modify theme configuration in `components/theme-provider.tsx`
- **Content**: Update portfolio data in `lib/data.ts`
- **OS Data**: Configure OS settings in `lib/os-data.ts`
- **Styling**: Customize with Tailwind CSS in `tailwind.config.ts`

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## License

This project is open source and available under the MIT License.
