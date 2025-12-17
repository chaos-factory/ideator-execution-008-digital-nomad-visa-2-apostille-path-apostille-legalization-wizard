# Apostille Path – Apostille & Legalization Wizard

A client‑side decision‑tree tool that tells users exactly which authority (state/federal/consular) handles their document, with steps, fees, official links, and printable checklists.

## 🌐 Live Site

Visit the landing page: **[https://chaos-factory.github.io/ideator-execution-008-digital-nomad-visa-2-apostille-path-apostille-legalization-wizard/](https://chaos-factory.github.io/ideator-execution-008-digital-nomad-visa-2-apostille-path-apostille-legalization-wizard/)**

## 📋 Features

- **Instant Routing**: Know whether your document needs state apostille, federal apostille, or consular legalization
- **Step-by-Step Guidance**: Complete checklists with official links, fees, and processing times
- **100% Self-Serve**: No account required, no uploads, no document handling
- **Official Sources Only**: All information based on Secretary of State offices, U.S. Department of State, and embassy websites
- **Printable Checklists**: Export detailed routing information as PDF ($7 per country workflow)

## 🚀 Quick Start

### View the Site Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/chaos-factory/ideator-execution-008-digital-nomad-visa-2-apostille-path-apostille-legalization-wizard.git
   cd ideator-execution-008-digital-nomad-visa-2-apostille-path-apostille-legalization-wizard
   ```

2. Open the site in your browser:
   ```bash
   # On macOS:
   open site/index.html
   
   # On Linux:
   xdg-open site/index.html
   
   # Or use a local server:
   python -m http.server 8000 --directory site
   # Then visit http://localhost:8000
   ```

### Deploy to GitHub Pages

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions.

**Prerequisites:**
1. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Under "Source", select "GitHub Actions"

**Deployment:**
- **Production**: Pushes to `main` branch automatically deploy to GitHub Pages
- **Preview**: Pull requests generate build artifacts that can be downloaded and previewed locally

## 📁 Project Structure

```
site/
├── index.html              # Main landing page
├── .nojekyll              # Disables Jekyll processing
├── assets/
│   ├── styles.css         # Complete design system
│   ├── script.js          # Interactive functionality
│   └── icons.svg          # SVG icon library
├── wizard/                # Wizard placeholder
├── how-it-works/          # How it works page
├── sources/               # Sources information
└── privacy/               # Privacy policy

.github/
└── workflows/
    └── pages.yml          # GitHub Pages deployment workflow
```

## 🎨 Design System

- **Clean, minimal, ADA-compliant design**
- **Color-coded routes**:
  - State Apostille: Blue (`#3b82f6`)
  - Federal Apostille: Navy (`#1e40af`)
  - Consular Legalization: Teal (`#0d9488`)
- **Semantic HTML** with proper ARIA labels
- **Responsive design** for mobile, tablet, and desktop
- **High contrast** for accessibility
- **Focus indicators** for keyboard navigation

## 🔧 Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern layouts with CSS Grid and Flexbox
- **Vanilla JavaScript** - No frameworks, no build step
- **GitHub Actions** - Automated deployment
- **GitHub Pages** - Free hosting

## 📝 Content Guidelines

- Plain English, no jargon
- Emphasis on "We don't handle documents"
- All fees include "as-of" dates
- Official source links for every step
- Transparency about government fees vs. service fee

## 🔄 Quarterly Review Workflow

Content accuracy is maintained through quarterly reviews of:
- Route logic and decision trees
- Fee information from official sources
- Processing time estimates
- Official website links
- Country coverage and requirements

## 📄 License

See repository for license information.

## 🤝 Contributing

This is a managed repository. For issues or suggestions, please open a GitHub issue.