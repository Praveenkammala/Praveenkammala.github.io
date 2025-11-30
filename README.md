# 🌐 Praveen Kammala — Personal Portfolio Website

[![GitHub Pages Status](https://img.shields.io/badge/Deployed-GitHub%20Pages-brightgreen?style=flat-square)](https://praveenkammala.github.io)
![React](https://img.shields.io/badge/React-18-blue?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square)
![Vite](https://img.shields.io/badge/Vite-Build-orange?style=flat-square)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-38B2AC?style=flat-square)

🔗 **Live Portfolio:** https://Praveenkammala.github.io

---

## About This Project

This is my personal portfolio website built to showcase:
- Skills, certifications and projects  
- Resume download  
- Contact information  

The site is built with **React + TypeScript**, styled with **Tailwind CSS**, uses **Framer Motion** for animations, and is deployed on **GitHub Pages**.

---

## Features

- Modern UI with light/dark mode  
- Responsive layout (mobile, tablet, desktop)  
- Featured projects with links to live demo and code  
- Downloadable resume and certificates  
- Contact section with email link

---

## Tech Stack

- **Frontend:** React, TypeScript, Vite  
- **Styling:** Tailwind CSS, ShadCN UI  
- **Animations:** Framer Motion  
- **Deployment:** GitHub Pages  
- **Version Control:** Git & GitHub

---

## Project Structure (overview)

```
public/
  ├─ praveen_cv.pdf
  ├─ certificates/*.pdf

src/
  ├─ components/
  ├─ pages/
  ├─ hooks/
  ├─ lib/
  ├─ App.tsx
  └─ main.tsx

dist/                # Auto-generated build output
package.json
tsconfig.json
tailwind.config.ts
vite.config.ts
README.md
```

---

## Installation & Development

### Clone the repo
```bash
git clone https://github.com/Praveenkammala/Praveenkammala.github.io
cd Praveenkammala.github.io
```

### Install dependencies
```bash
npm install
```

### Start dev server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

---

## Deployment (GitHub Pages)

### Automatic (recommended)
Push to `main` — GitHub Actions (if configured) will build and deploy automatically.

### Manual (optional)
```bash
npm run build
git checkout gh-pages
# copy contents of dist/ to repo root (or use a deploy tool)
git add .
git commit -m "Deploy"
git push origin gh-pages --force
git checkout main
```

---

## Contact

- **Email:** praveenkammala01@gmail.com  
- **Portfolio:** https://Praveenkammala.github.io  
- **LinkedIn:** https://www.linkedin.com/in/praveen-kammala/  
- **GitHub:** https://github.com/Praveenkammala

---

## Want improvements?

I can:
- Add screenshots or a GIF demo  
- Add SEO meta tags and sitemap.xml  
- Add a working contact form (Formspree / EmailJS)  
- Improve README with badges and project details

Tell me which and I’ll update it.

