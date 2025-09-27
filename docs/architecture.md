--- filename: docs/architecture.md ---

# Architektur & Struktur – CURAMUS Facility Services GmbH Homepage

## Ziel

Technische und strukturelle Grundlage für die Umsetzung der CURAMUS-Homepage.
Fokus: schnelle Realisierung mit Codex, modernes und responsives Design.

## Seitenstruktur

1. **Startseite**

   * Claim, Hero-Bild, Kurzübersicht Services, Call-to-Action „Kontakt“
2. **Über uns**

   * Unternehmensprofil, Werte, HRB-Information optional
3. **Dienstleistungen**

   * Unterseiten-Abschnitte für jede Service-Kategorie (Reinigung, Hausmeister, Technik, Sicherheit, Grünpflege, Entsorgung)
4. **Referenzen / Kompetenzen**

   * Kurzer Überblick, Stärken, Kundenvertrauen
5. **Kontakt**

   * Telefonnummer, E-Mail
   * Formular: **Serverless Function** → Weiterleitung per E-Mail an [info@curamus-facility.de](mailto:info@curamus-facility.de)
   * Standortkarte: Übersicht Berlin & Brandenburg (ohne exakte Adresse)
6. **Rechtliches**

   * Impressum, Datenschutzerklärung

## Technologiestack

* **Frontend:** React / Next.js, TailwindCSS für schnelles, modernes Styling
* **Deployment:** statisch exportierbar (z. B. Vercel oder Netlify)
* **Formular-Handling:** Serverless Function (z. B. Vercel Functions) → leitet Anfragen direkt an [info@curamus-facility.de](mailto:info@curamus-facility.de)
* **Responsive Design:** Mobile First, optimiert für Smartphone & Tablet
* **Sprachen:** Nur Deutsch

## Design-Richtlinien

* **Farben:** Blau/Grau (laut Logo, siehe PDF Seite 2)
* **Typografie:** Moderne serifenlose Schrift, klare Lesbarkeit
* **Bilder:** ausschließlich OneDrive, keine Dopplungen mit vtec-berlin.de
* **Layout:** Angelehnt an wgs-dienstleistungen.de, jedoch moderner und luftiger

## Sicherheits- und Performance-Aspekte

* SSL-Verschlüsselung (https)
* DSGVO-konformes Kontaktformular
* Minimierung von Ladezeiten (optimierte Bilder, Caching)

