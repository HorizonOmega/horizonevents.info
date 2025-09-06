# horizonevents.info

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

### GitHub Pages

1. Push your code to the main branch
2. Go to Settings → Pages in your GitHub repository
3. Under "Build and deployment":
   - Source: GitHub Actions
4. The site will automatically deploy on push to main
5. Access your site at: https://HorizonOmega.github.io/horizonevents.info

### Custom Domain (Optional)

1. Add a CNAME file with your domain in the public folder
2. Configure DNS settings to point to GitHub Pages
3. Enable HTTPS in repository settings

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
