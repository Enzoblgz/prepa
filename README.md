---
created: 2026-07-26
updated: 2026-07-26
---
# Hub Prépa — page d'accueil des sites d'entraînement

Page d'entrée unique vers mes deux sites d'exos, **aux couleurs de enzo.bellenguez.fr**
(ink `#0e0a06`, ambre `#e07800`/`#ffaa00`, cream `#ffdfc0`, Playpen Sans + Sorren,
grille animée et halo ambre qui suivent le curseur).

Lié à → [[etudiant]] · projet [[prépa prépa]]

## En ligne

| Site | URL | Dépôt |
|---|---|---|
| **Hub** | <https://enzoblgz.github.io/prepa/> | `Enzoblgz/prepa` |
| Automatismes (maths) | <https://enzoblgz.github.io/automatismes-pcsi/> | `Enzoblgz/automatismes-pcsi` |
| Numérique (info) | <https://enzoblgz.github.io/numerique-pcsi/> | `Enzoblgz/numerique-pcsi` |

Les trois sites sont indépendants (un dépôt + un GitHub Pages chacun). Le hub pointe vers les
deux autres, et chacun des deux a un bouton **← Prépa** dans sa barre du haut pour revenir ici.

## Modifier

Trois fichiers, zéro dépendance :

- `index.html` — hero, les deux cartes, la section « la suite », le footer
- `style.css` — tokens repris du site perso + cartes + responsive
- `script.js` — halo/grille au curseur + menu mobile

Test en local : ouvrir `index.html` en double-clic (aucun serveur nécessaire, contrairement au
site Numérique). Publication : `git push` — GitHub Pages reconstruit en ~1 min.

## Ajouter un troisième site

Dupliquer un bloc `<a class="card">` dans `index.html` (sigle, tag, titre, description,
3 `card-facts`, lien). La grille passe automatiquement en une colonne sous 860 px ; au-delà de
deux cartes, penser à passer `.cards` en `repeat(auto-fit, minmax(320px, 1fr))`.
