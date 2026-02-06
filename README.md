# Sticks n' Festival Website

Official website for **Sticks n' Festival** — the first Latin American festival dedicated to AI-powered creative cinema and arts.

🌐 **Live Site:** [https://ai-festival-website.vercel.app](https://ai-festival-website.vercel.app)  
📅 **Festival Dates:** May 28-29, 2026  
📍 **Location:** Life Cinema, Montevideo, Uruguay

---

## 🎬 About the Festival

Sticks n' Festival is a pioneering event exploring the intersection of Artificial Intelligence and creative storytelling. We showcase films, video art, interactive experiences, and music videos that push the boundaries of AI-assisted creativity.

**Key Features:**
- International AI Film Competition
- Pitch Competition for emerging projects
- Workshops and training sessions
- Panels with industry leaders
- Awards ceremony

---

## 🛠️ Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **3D Graphics:** Three.js / React Three Fiber
- **Routing:** React Router
- **i18n:** react-i18next (English + Spanish)
- **Deployment:** Vercel (auto-deploy on push to `main`)

---

## 🚀 Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
git clone https://github.com/VAPAI-Studio/ai-festival-website.git
cd ai-festival-website
npm install
```

### Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```bash
npm run build
npm run preview  # Preview production build locally
```

---

## 📂 Project Structure

```
src/
├── pages/          # Main route pages (Home, Submit, Partners, Rules)
├── components/     # Reusable UI components
│   ├── ui/         # Base UI components (Button, Card)
│   ├── 3d/         # Three.js components
│   └── effects/    # Visual effects (ScrollRGB)
├── data/           # JSON data files (program, partners, jury)
├── config/         # Site configuration
└── public/
    └── locales/    # Translation files (en, es)
```

---

## 🌍 Internationalization

The site supports **English** and **Spanish**. Translation files are located in:
- `public/locales/en/translation.json`
- `public/locales/es/translation.json`

Language toggle is available in the header.

---

## 🎨 Content Updates

### Partners
Edit `src/data/partners.json` to add/update festival partners and sponsors.

### Program
Edit `src/data/program.json` to update festival programming (workshops, screenings, etc).

### Jury
Edit `src/data/jury.json` to add jury members (automatically displays on home page).

### Site Config
Edit `src/config/site.ts` for global settings (festival name, dates, contact info, social links).

---

## 🚢 Deployment

Deployment is **automatic** via Vercel:
1. Push to `main` branch
2. Vercel automatically builds and deploys
3. Live in ~2 minutes

**Vercel Dashboard:** [https://vercel.com/vapai-studio](https://vercel.com/vapai-studio)

---

## 📋 Pages

| Route | Description |
|-------|-------------|
| `/` | Home page (hero, program, jury, dates) |
| `/submit` | Submission form and competition details |
| `/partners` | Partners, sponsors, and press information |
| `/rules` | Full rules, eligibility, and terms & conditions |

---

## 🎯 Roadmap

- [x] Rebranding: SALADO → Sticks n' Festival
- [x] Update dates: May 21-22 → May 28-29
- [x] SEO meta tags
- [x] Submission form with correct deadlines
- [x] Rules & Terms page
- [x] Partners page with real institutions
- [ ] Add real jury members (pending confirmation)
- [ ] Social media links (Instagram, etc)
- [ ] Newsletter integration
- [ ] Ticketing integration
- [ ] Press kit download

---

## 🤝 Contributing

This is an internal project for **VAPAI Studio** and **SOUTS**. For questions or issues, contact:

**Festival Lead:** festival-lead@openclaw  
**Technical Contact:** yves@vapai.studio

---

## 📄 License

© 2026 VAPAI Studio / SOUTS. All rights reserved.

---

## 🙏 Acknowledgments

- **Venue Partner:** Life Cinema
- **Institutional Partners:** ECU (Escuela de Cine del Uruguay), Cinemateca Uruguaya
- **Technology Partners:** Runway, Midjourney, OpenAI (pending confirmation)

Built with 🤖 by the SOUTS team.
