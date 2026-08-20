# htb-writeups

Site de writeups Hack The Box, construit avec [Astro](https://astro.build).

## Structure

```
src/
├── content/
│   ├── config.ts              # Schema de la collection "writeups"
│   └── writeups/
│       └── <machine>/index.md # Un dossier par machine, images à côté du .md
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── MachineCard.astro      # Carte utilisée sur la home et la liste des writeups
│   ├── Badge.astro            # Badges OS / difficulté
│   ├── Terminal.astro         # Bloc terminal stylé pour le contenu markdown
│   └── TableOfContents.astro  # Sommaire sticky généré depuis les headings
├── layouts/
│   └── WriteupLayout.astro    # Layout d'un writeup (hero + TOC + contenu)
├── pages/
│   ├── index.astro            # Accueil
│   ├── about.astro
│   ├── cheatsheets/index.astro
│   └── writeups/
│       ├── index.astro        # Liste de tous les writeups
│       └── [...slug].astro    # Route dynamique par writeup
└── styles/
    └── global.css             # Variables de thème + styles .prose
```

## Ajouter un writeup

1. Crée `src/content/writeups/<nom-machine>/index.md`
2. Remplis le frontmatter (voir `content/config.ts` pour le schema exact)
3. Place les images dans le même dossier ou dans `public/images/`
4. Lance `npm run dev` pour prévisualiser

## Commandes

| Commande          | Action                                      |
| ----------------- | -------------------------------------------- |
| `npm install`     | Installe les dépendances                     |
| `npm run dev`     | Serveur de dev sur `localhost:4321`          |
| `npm run build`   | Build de production dans `./dist/`           |
| `npm run preview` | Prévisualise le build en local               |

## Déploiement

Déployé automatiquement sur GitHub Pages via `.github/workflows/deploy.yml`
à chaque push sur `main`. Voir ce fichier pour le détail du pipeline.

Avant le premier déploiement :

1. Mets à jour `site` (et `base` si besoin) dans `astro.config.mjs`
2. Dans les settings GitHub du repo → Pages → source = "GitHub Actions"
