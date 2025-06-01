# AP Researcher Platform

A modern React-based platform designed to showcase AP Seminar and AP Research student work, inspired by nature journal aesthetics.

## 🌿 Project Overview

The AP Researcher platform provides a beautiful, academic-focused interface for students to showcase their research projects, seminar work, and collaborative studies. The design draws inspiration from nature journals, featuring earth tones, organic layouts, and typography that evokes the feeling of browsing through research notebooks.

## ✨ Features

- **News Section**: Latest updates, announcements, and featured student work
- **AP Seminar**: Showcase of team-based research projects and performance tasks
- **AP Research**: Individual research papers and academic studies
- **Repetitive Research**: Longitudinal studies, comparative research, and meta-analyses
- **Nature Journal Design**: Organic, academic aesthetic with earth-tone color palette
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Advanced Search**: Filter and search across all content types
- **Modern Tech Stack**: Built with React, TypeScript, and Styled Components

## 🚀 Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite (for fast development and optimized builds)
- **Styling**: Styled Components with custom theme system
- **Routing**: React Router DOM
- **Icons**: React Icons
- **Animations**: Framer Motion
- **Development**: ESLint, TypeScript, SWC

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout/         # Layout components (Header, Footer, etc.)
│   ├── Navigation/     # Navigation components
│   ├── Card/          # Card components for content display
│   ├── Button/        # Button components
│   └── ...
├── pages/              # Page components
│   ├── Home/          # Homepage
│   ├── News/          # News section
│   ├── APSeminar/     # AP Seminar projects
│   ├── APResearch/    # AP Research papers
│   └── RepetitiveResearch/ # Repetitive research studies
├── styles/             # Global styles and theme
│   ├── theme.ts       # Theme configuration
│   ├── GlobalStyles.ts # Global CSS styles
│   └── ...
├── data/               # Mock data and type definitions
│   ├── types.ts       # TypeScript type definitions
│   ├── mockNews.ts    # Mock news data
│   └── ...
├── utils/              # Utility functions
│   ├── constants.ts   # Application constants
│   ├── dateUtils.ts   # Date formatting utilities
│   └── ...
└── assets/             # Static assets (images, fonts, etc.)
```

## 🎨 Design System

### Color Palette
- **Primary**: Nature-inspired greens (#3d8b3d to #1a3a1a)
- **Secondary**: Earth tones (#b8925a to #5c4530)
- **Neutral**: Paper tones (#fdfcfa to #544a40)
- **Accents**: Sage, moss, bark, and leaf colors

### Typography
- **Headings**: Crimson Text (serif) for academic feel
- **Body**: Source Sans Pro (sans-serif) for readability
- **Accent**: Kalam (handwritten) for journal-like elements
- **Code**: Fira Code (monospace) for technical content

### Components
- Journal-style cards with subtle shadows
- Nature-inspired buttons and form elements
- Organic spacing and border radius
- Smooth transitions and micro-animations

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ap-researcher
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Development Roadmap

### Phase 1: Foundation ✅
- [x] Project setup with Vite and TypeScript
- [x] Folder structure and organization
- [x] Theme system and design tokens
- [x] Type definitions and constants

### Phase 2: Core Components (In Progress)
- [ ] Layout and Navigation components
- [ ] Card and Button components
- [ ] Loading and Error states
- [ ] Search and Filter components

### Phase 3: Pages and Content
- [ ] Homepage with hero section
- [ ] News section with articles
- [ ] AP Seminar project showcase
- [ ] AP Research paper display
- [ ] Repetitive Research studies

### Phase 4: Features and Functionality
- [ ] Search and filtering system
- [ ] Pagination and sorting
- [ ] Responsive design implementation
- [ ] Animations and transitions

### Phase 5: Polish and Optimization
- [ ] Performance optimization
- [ ] Accessibility improvements
- [ ] Cross-browser testing
- [ ] SEO optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Code Style

- Use TypeScript for all new code
- Follow the established folder structure
- Use the theme system for styling
- Write meaningful commit messages
- Add comments for complex logic

## 🔮 Future Enhancements

- Backend integration for dynamic content
- User authentication and submissions
- Advanced data visualizations
- Export functionality for research papers
- Collaboration features
- Mobile app version

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Inspired by nature journal aesthetics and academic research platforms
- Built for the AP Research and AP Seminar community
- Special thanks to educators and students who provided feedback

---

**Happy Researching! 🌱📚**
