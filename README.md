# ExpressRäumung - Premium Website

Eine moderne, responsive und SEO-optimierte Website für ExpressRäumung - Professionelle Entrümpelung zum Festpreis.

## 📋 Features

✅ **Premium Design**
- Schwarzer Hintergrund mit Orange-Akzenten (#F5A623)
- Glassmorphismus-Effekte
- Smooth Animations
- Modern Cards Design
- Professionelle Typography

✅ **Responsive Design**
- Mobile-first Approach
- Optimiert für Desktop, Tablet und Mobile
- Flexible Layouts
- Touch-friendly Navigation

✅ **Performance**
- Fast Loading (< 2 Sekunden)
- Lazy Loading für Bilder
- Optimierte CSS/JavaScript
- Keine Frameworks - Pure HTML, CSS, JS

✅ **SEO Optimiert**
- Meta Tags (Title, Description, Keywords)
- Open Graph Tags
- Schema.org LocalBusiness Markup
- Semantic HTML
- robots.txt & sitemap.xml

✅ **Funktionen**
- Sticky Navigation mit Mobile Menu
- Hero Section mit Animation
- Floating Call & WhatsApp Buttons
- FAQ Accordion
- Contact Form mit JavaScript Fetch
- Footer mit Links

✅ **Sicherheit & Rechtliches**
- GDPR konform
- Impressum & Datenschutz Pages
- SSL-Verschlüsselung ready
- Konfigurierbare Kontaktdaten

## 📁 Dateistruktur

```
expressraeumung/
├── index.html              # Hauptseite
├── impressum.html          # Impressum (Legal)
├── datenschutz.html        # Datenschutzerklärung
├── style.css               # Styling (Responsive)
├── script.js               # JavaScript (Funktionalität)
├── robots.txt              # SEO - Crawling Anleitung
├── sitemap.xml             # SEO - Website Struktur
└── README.md               # Diese Datei
```

## 🚀 Quick Start

### 1. Lokal testen

Einfach die `index.html` Datei im Browser öffnen:

```bash
open index.html
# oder im Browser: file:///pfad/zum/index.html
```

### 2. Auf Vercel deployen

#### Option A: Mit GitHub (Empfohlen)

1. Repository erstellen auf GitHub
2. Dateien hochladen
3. Auf [vercel.com](https://vercel.com) anmelden
4. Projekt importieren
5. Deploy wird automatisch ausgelöst

#### Option B: Direkt mit Vercel CLI

```bash
npm install -g vercel
vercel
```

#### Option C: Mit Zip Upload auf Vercel

1. Alle Dateien in einen Ordner
2. Auf vercel.com hochladen
3. Auto-Deploy aktiviert

## ⚙️ Konfiguration

### Email-Adresse ändern

In `script.js` diese Zeile anpassen:

```javascript
const COMPANY = {
    email: "deine-email@example.com"  // ← Hier ändern
};
```

Die Email wird automatisch überall auf der Website aktualisiert.

### Contact Form Endpoint

Wenn Sie das Kontaktformular mit einem Service verbinden möchten:

```javascript
const FORM_ENDPOINT = "https://formspree.io/f/YOUR_ID"; // ← Endpoint eintragen
```

**Unterstützte Services:**
- [Formspree](https://formspree.io/)
- [Resend](https://resend.com/)
- [EmailJS](https://www.emailjs.com/)
- [Brevo](https://www.brevo.com/)
- Eigene API

**Beispiele:**

**Formspree:**
```javascript
const FORM_ENDPOINT = "https://formspree.io/f/mnqoqxwl";
```

**EmailJS:**
```javascript
// Braucht mehr Setup - siehe EmailJS Docs
```

### Telefonnummer & WhatsApp

In `index.html`:

```html
<!-- Telefonnummer ändern: -->
<a href="tel:+491522845333">+49 1522 8457333</a>

<!-- WhatsApp Link bleibt immer gleich - verwendet die Telefonnummer -->
```

## 🎨 Design Anpassungen

### Farben ändern

In `style.css`, oben der Datei:

```css
:root {
    --primary: #F5A623;              /* Orange - Akzentfarbe */
    --primary-dark: #E59200;         /* Orange Dunkel */
    --background: #0A0E27;           /* Dunkelblau */
    --background-secondary: #1A1E3F; /* Helleres Dunkelblau */
    --text-primary: #FFFFFF;         /* Weiß */
    --text-secondary: #B4B7C3;       /* Hellgrau */
}
```

### Fonts ändern

In `style.css`, in der `body` Regel:

```css
body {
    font-family: 'Deine Font', sans-serif; /* ← Hier ändern */
}
```

### Weitere Anpassungen

- **Abstände:** Suchen Sie nach `padding`, `margin`, `gap`
- **Breiten:** Suchen Sie nach `max-width`, `width`
- **Eckenradius:** Suchen Sie nach `border-radius`
- **Shadows:** Suchen Sie nach `box-shadow`

## 📱 Responsive Breakpoints

- **Desktop:** 1200px+
- **Tablet:** 768px - 1199px
- **Mobile:** < 768px

## 🔍 SEO Optimierungen

### Meta Tags

In `index.html` anpassen:

```html
<meta name="description" content="Ihre Beschreibung">
<meta name="keywords" content="keyword1, keyword2">
```

### OpenGraph Tags

```html
<meta property="og:title" content="Titel">
<meta property="og:description" content="Beschreibung">
```

### Schema.org Markup

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ExpressRäumung",
    ...
}
</script>
```

## 🔐 Sicherheit

- ✅ SSL/TLS ready (automatisch auf Vercel)
- ✅ GDPR konform
- ✅ Input Sanitization im Formular
- ✅ Keine sensiblen Daten in Code
- ✅ Externe Links mit `target="_blank"` und `rel="noopener"`

## ♿ Barrierefreiheit

- ✅ Semantic HTML5
- ✅ ARIA Labels
- ✅ Keyboard Navigation
- ✅ Color Contrast (WCAG AA)
- ✅ Skip Links für Screenreader

## ⚡ Performance Tipps

1. **Bilder optimieren:** Nutzen Sie [TinyPNG](https://tinypng.com/)
2. **CDN Fonts:** Google Fonts sind schnell
3. **Browser Caching:** Vercel macht das automatisch
4. **Monitoring:** Nutzen Sie Google PageSpeed Insights

## 🐛 Troubleshooting

### Form wird nicht versendet

1. Überprüfen Sie, dass `FORM_ENDPOINT` korrekt ist
2. Öffnen Sie Browser Console (F12)
3. Suchen Sie nach Fehlermeldungen
4. Testen Sie den Endpoint mit Postman

### Bilder laden nicht

1. Überprüfen Sie den `src` Pfad
2. Stellen Sie sicher, dass Dateien uploaded sind
3. Nutzen Sie absolute URLs auf Vercel

### Mobile Menu funktioniert nicht

1. Überprüfen Sie, dass `script.js` geladen ist
2. Überprüfen Sie Browser Console auf Fehler
3. Löschen Sie Browser Cache (Ctrl+Shift+Delete)

## 📧 Support & Kontakt

**ExpressRäumung Support**
- 📞 +49 1522 8457333
- 💬 WhatsApp: https://wa.me/4915228457333
- 📧 Email: u.yavuz@expressraeumungneu.vercel.app

## 📄 Lizenz

Diese Website wurde speziell für ExpressRäumung erstellt.

---

**Version:** 1.0.0
**Zuletzt aktualisiert:** Januar 2024
**Status:** Production Ready ✅
