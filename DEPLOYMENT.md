# 🚀 Deployment Guide - ExpressRäumung Website

Dieses Dokument erklärt, wie Sie die ExpressRäumung Website deployen.

## ⚡ Schnellstart - Vercel (Empfohlen)

Vercel ist die beste Option - kostenlos, schnell und einfach.

### Option 1: Mit GitHub (Beste Methode)

**Schritt 1: Repository auf GitHub erstellen**

1. Gehen Sie zu [github.com/new](https://github.com/new)
2. Repository Name: `expressraeumung`
3. "Create repository" klicken
4. Kopieren Sie die Befehle für "...or push an existing repository from the command line"

**Schritt 2: Code zu GitHub pushen**

```bash
# Im Projektordner:
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/expressraeumung.git
git push -u origin main
```

**Schritt 3: Mit Vercel deployen**

1. Gehen Sie zu [vercel.com](https://vercel.com)
2. Mit GitHub anmelden
3. "Import Project" klicken
4. Ihr Repository auswählen
5. "Import" klicken
6. Deploy läuft automatisch!

### Option 2: Direkt mit Vercel CLI

```bash
# 1. Vercel CLI installieren
npm install -g vercel

# 2. Im Projektordner
vercel

# 3. Fragen beantworten:
# - Welches Projekt? → Neues erstellen
# - Folder setpoint? → ./ (aktueller Ordner)
# - Build command? → Leer lassen (Enter)

# Fertig! Vercel gibt Ihnen die URL
```

### Option 3: Zip Upload (Einfachste Methode)

1. Alle Dateien komprimieren zu `expressraeumung.zip`
2. [vercel.com/new](https://vercel.com/new) öffnen
3. Zip auf die Seite ziehen
4. Deploy!

## 🔧 Custom Domain verbinden

### Mit Vercel kaufter Domain (Easiest)

1. Im Vercel Dashboard: Project Settings
2. "Domains" → "Add"
3. Domain kaufen direkt über Vercel (kostet $12-15/Jahr)
4. Automatisch konfiguriert! ✅

### Mit bestehender Domain (z.B. GoDaddy, 1&1)

1. Im Vercel Dashboard: Project Settings → Domains
2. Add: `expressraeumung.de`
3. Vercel gibt Ihnen Nameserver:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
   - `ns3.vercel-dns.com`
   - `ns4.vercel-dns.com`

4. Bei Ihrem Domain-Provider (z.B. GoDaddy):
   - Nameserver ändern zu den Vercel-Werten
   - Speichern (kann 24h dauern)

5. Warten Sie, dann ist es live! ✅

## 📋 Schritt-für-Schritt: Von Anfang bis Live

### 1. Vorbereitung

```bash
# Projekt Ordner erstellen
mkdir expressraeumung
cd expressraeumung

# Alle Dateien hier einfügen:
# - index.html
# - style.css
# - script.js
# - impressum.html
# - datenschutz.html
# - robots.txt
# - sitemap.xml
# - vercel.json
# - package.json
# - .gitignore
# - README.md
```

### 2. Git vorbereiten

```bash
git init
git config user.name "Ihr Name"
git config user.email "ihre-email@example.com"
```

### 3. Erster Commit

```bash
git add .
git commit -m "Initial website commit"
```

### 4. Zu GitHub pushen

```bash
# GitHub.com: Neues Repository erstellen
# Dann diese Befehle:
git branch -M main
git remote add origin https://github.com/IHR_USERNAME/expressraeumung.git
git push -u origin main
```

### 5. Auf Vercel deployen

```bash
npm install -g vercel
vercel
```

Oder: vercel.com öffnen → GitHub verbinden → Repository auswählen → Deploy

### 6. Domain hinzufügen

- Vercel Dashboard → Project
- Settings → Domains
- Ihre Domain eingeben
- Nameserver konfigurieren

## 🔍 Deployment überprüfen

Nach dem Deploy:

1. ✅ **Website öffnen**: `https://expressraeumung.vercel.app`
2. ✅ **Mobile testen**: Auf dem Smartphone öffnen
3. ✅ **Links testen**: Alle Links klicken
4. ✅ **Form testen**: Kontaktformular absenden
5. ✅ **Performance**: [PageSpeed Insights](https://pagespeed.web.dev/) testen

## 🐛 Probleme beheben

### "404 Not Found" auf Custom Domain

- Nameserver korrekt eingegeben?
- Vercel Dashboard überprüfen
- 24 Stunden warten (DNS Propagation)
- `nslookup expressraeumung.de` testen

### Form funktioniert nicht

- FORM_ENDPOINT in script.js überprüfen
- Formspree/API Status überprüfen
- Browser Console öffnen (F12) → Fehler suchen

### Bilder laden nicht

- Pfade in HTML überprüfen
- Bilder müssen im gleichen Ordner sein
- Absolut URLs verwenden wenn nötig

### Website ist langsam

- Bilder komprimieren (TinyPNG)
- CSS/JS ist schon optimiert
- Browser Cache löschen
- Vercel Analytics überprüfen

## 📊 Monitoring & Analytics

### Google Search Console

1. [google.com/webmasters/tools](https://search.google.com/search-console)
2. Property hinzufügen → Domain eingeben
3. Eigentümer bestätigen
4. Sitemap hochladen (bereits in robots.txt)
5. Suchleistung monitoren

### Google Analytics

1. [analytics.google.com](https://analytics.google.com) öffnen
2. Account erstellen
3. Tracking Code kopieren
4. In `index.html` vor `</head>` einfügen:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXX');
</script>
```

### Vercel Analytics

- Vercel Dashboard → Project → Analytics
- Real-time Traffic sehen
- Performance Insights

## 🔐 SSL/HTTPS

**Automatisch auf Vercel aktiviert!** ✅

- Alle Verbindungen sind verschlüsselt
- Zertifikat wird automatisch erneuert
- Kein Setup nötig

## 📝 Regelmäßige Wartung

### Monatlich

- [ ] Google Search Console überprüfen
- [ ] Performance checken (PageSpeed)
- [ ] Links überprüfen (404er?)
- [ ] Analytics anschauen

### Quartalsweise

- [ ] SEO überprüfen
- [ ] Konkurrenz analysieren
- [ ] Inhalte updaten
- [ ] Backup machen

### Jährlich

- [ ] Domain Vertrag verlängern
- [ ] SSL Zertifikat überprüfen
- [ ] Datenschutzerklärung updaten
- [ ] Rechtliches überprüfen

## 💡 Pro Tips

### Verbesserungen für noch bessere Performance

```html
<!-- Preload für kritische Ressourcen -->
<link rel="preload" as="font" href="font.woff2" type="font/woff2" crossorigin>

<!-- DNS Prefetch für externe Services -->
<link rel="dns-prefetch" href="//formspree.io">

<!-- Prefetch für wahrscheinliche nächste Seiten -->
<link rel="prefetch" href="datenschutz.html">
```

### Automatische Backups mit GitHub

GitHub speichert automatisch Ihre Dateien. Zum Wiederherstellen:

```bash
git log  # Frühere Versionen sehen
git revert <commit-hash>  # Zu alter Version zurück
git push  # Deployen
```

## 🎯 Nächste Schritte

Nach dem Launch:

1. **Google Business Profile** → Für lokale Suche
2. **Social Media** → Facebook, Instagram Business
3. **Email Marketing** → Mailchimp Integration
4. **Reviews** → Google Reviews Link einbauen
5. **Ads** → Google Ads für schnelleres Growth

## 📞 Support

Bei Problemen:

- Vercel Support: [vercel.com/support](https://vercel.com/support)
- GitHub Issues: Dokumentieren Sie Bugs
- Stack Overflow: Allgemeine HTML/CSS/JS Fragen

## 📚 Weitere Ressourcen

- [Vercel Docs](https://vercel.com/docs)
- [Web Vitals Guide](https://web.dev/vitals/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [SEO Checklist](https://www.semrush.com/seo-checklist/)

---

**Glückwunsch! Ihre Website ist live! 🎉**

Bei Fragen: info@expressraeumung.de
