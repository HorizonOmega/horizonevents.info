# Horizon Events - Astro Site

Modern, performant website for Horizon Events built with Astro, Tailwind CSS, and MDX.

## 🚀 Project Structure

```
/
├── public/           # Static assets
├── src/
│   ├── components/   # Astro components
│   ├── content/      # Content collections
│   ├── data/         # JSON data files
│   ├── layouts/      # Page layouts
│   ├── pages/        # Site pages
│   └── styles/       # Global styles
└── package.json
```

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 🌐 Deployment

### Cloudflare Pages

1. Push your code to a git repository (GitHub, GitLab, etc.)
2. Log in to the Cloudflare dashboard
3. Go to Pages and create a new project
4. Connect your git repository
5. Use these build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: 20

### Environment Variables

No environment variables are required for the basic site functionality.

## 📝 Content Management

### Events

Edit `/src/data/events.json` to add or update events.

### Collaborators

Edit `/src/data/collaborators.json` to update team members.

### Partners

Edit `/src/data/partners.json` to update partner organizations.

## 🎨 Design System

- **Colors**: Dark theme with orange accent (#ff7a1a)
- **Typography**: Inter font family
- **Components**: Reusable Astro components with Tailwind CSS
- **Animations**: Subtle transitions, respects prefers-reduced-motion

## ♿ Accessibility

- WCAG 2.2 AA compliant
- Keyboard navigation support
- Screen reader friendly
- Focus indicators
- Skip to content link

## 🔍 SEO

- Automatic sitemap generation
- Meta tags and OpenGraph support
- Structured data ready
- robots.txt configured