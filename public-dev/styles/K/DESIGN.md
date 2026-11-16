# DESIGN.md : Style K « Bascule menthe » (d'après la page « Página de Vendas - Produtividade », Felipe Santos)

> **Source** : `inspi/behance/211996631/01.png` (la page entière, 1920 × 13 779). Behance 211996631. Relevé le 16/11/2026.
> **Demande de Ruben** : pas de consigne de détail, lot du 16/11/2026.

## 1. Ambiance et intention

- Une méthode de productivité vendue comme un tableau de bord : sombre, net, précis, presque une interface d'application.
- Noir anthracite partout, une seule couleur vive : la **menthe électrique**, réservée aux mots clés, aux icônes et aux boutons.
- Le geste qui la signe : **la carte à interrupteurs** (trois réglages allumés en menthe) et **les titres en deux tons** (1re ligne grise en dégradé, 2e ligne menthe).
- Des lignes verticales très fines rythment le fond, comme une grille de mise en page laissée visible.
- Différence avec E « Néon vert » (néon vert-jaune, Michroma) et J « Calque émeraude » (vert mousse, serif italique, éditeur) : ici le fond est gris-noir neutre, la couleur tire sur le turquoise, une seule police sans serif, et le décor est celui d'une application.

## 2. Palette et rôles (relevé au pixel, PIL, sur 01.png)

- **Anthracite** `#0D0C0F` : fond de toute la page ; `#040907` à `#06120F` dans le hero.
- **Carte** `#1C1C1C`, haut de carte `#333333` (témoignages, offre en dégradé vertical).
- **Menthe électrique** `#11F7CE` (titres) et `#01F6B3` (pied, grand 7, interrupteurs).
- **Bouton** : dégradé `#00D7A1` vers `#83FBDE`, texte `#00261C` (contraste 11,6).
- **Piste de barre** `#1E312F`.
- **Rouge** : cartes « avant » de `#3B0A0F` vers le noir, filet `#6A1A20`, pastille `#C62F3A`.
- **Gris titre** `#8D8D8D` en dégradé vers `#D7D7DA`.
- **Or** `#FCDB49` : les 5 étoiles du sceau seulement.
- **Blanc** `#FFFFFF` vers `#E9E9E9` : FAQ et la carte de témoignage mise en avant.

## 3. Typographie

- Non nommée par l'auteur. Relevé à l'œil : grotesque serrée et moderne (proche de Inter Display). Google Fonts la plus proche et différente des styles voisins : **Geist**.

| Rôle | Police | Taille bureau / téléphone | Graisse | Interligne | Approche |
|---|---|---|---|---|---|
| Titre du hero | Geist | 40 / 30 px | 600 | 1,15 | -0,025 em |
| Titre en deux tons | Geist | 38 / 28 px | 500 | 1,15 | -0,025 em |
| Nom du mentor | Geist | 80 / 56 px | 600 | 0,95 | -0,04 em |
| Prix | Geist | 46 px | 700 | 1 | -0,05 em |
| Texte | Geist | 11 à 15,5 px | 400 | 1,55 à 1,7 | 0 |
| Pastille | Geist | 11 px | 500 à 600 | 1 | 0,06 à 0,16 em, capitales |
| Bouton | Geist | 12,5 px | 600 | 1,2 | capitales |

## 4. Composants

- **Bouton** : rectangle de 46 px aux coins de 4 px, dégradé menthe, halo menthe, flèche fine ; le dégradé glisse au survol.
- **Pastille** : capsule sombre à filet gris avec petite icône menthe ; variante blanche à texte noir espacé (« Témoignages »).
- **Tuile d'icône** : carré de 46 px aux coins de 9 px, dégradé gris, icône menthe.
- **Interrupteur** (`.bascule`, `role="switch"`) : piste de 40 × 24 px, menthe et lumineuse quand il est allumé ; cliquable.
- **Duel** : 3 cartes rouges à croix contre 3 cartes vertes à coche, coins de 5 px.
- **Mur de témoignages** : 3 colonnes en maçonnerie, cartes grises en dégradé, une carte blanche mise en avant avec une flèche de souris.
- **Courbe de progression** : carte noire, courbe exponentielle à points lumineux, barre à 91 %.
- **Éventail de modules** : 5 affiches 9:16 qui se chevauchent, la centrale plus haute, trait menthe en bas.
- **Liste de modules** : lignes à « + » menthe et nombre de leçons à droite.
- **Carte prix** : logo, prix barré, prix en dégradé blanc vers gris, liste des inclusions dans un volet collé à droite.
- **Sceau** : cercle sombre, texte qui tourne, 5 étoiles or, cœur menthe à flèche, grand « 7 » menthe qui dépasse.
- **FAQ** : barres blanches numérotées, « + » à droite.

## 5. Mise en page

- Colonne étroite : la plupart des blocs tiennent entre 520 et 780 px dans une page de 1100.
- Tout est centré sauf les blocs en deux colonnes (réglages, vidéo, garantie, mentor).
- Filets horizontaux fins entre les sections ; un filet menthe lumineux sous le hero et au-dessus de la structure.
- Espacement vertical : 70 à 90 px.

## 6. Profondeur et élévation

- Ombres noires longues sous les cartes (30 px de flou, 60 % d'opacité).
- Halos menthe sous les boutons, autour des interrupteurs allumés et derrière la courbe.
- Le portrait du hero et celui du mentor se fondent dans le noir (masque en dégradé), sans cadre.

## 7. À faire, à ne pas faire

- Faire : une seule couleur vive, la menthe ; tout le reste en gris.
- Faire : la 2e ligne du titre en menthe, la 1re en gris dégradé.
- Ne pas faire : de coins très arrondis ; les cartes restent à 4 à 12 px.
- Ne pas faire : de texte gris sous `#9B9CA1` sur l'anthracite (contraste minimum 7).

## 8. Comportement responsive

- Behance ne montre que le bureau. Le téléphone est notre proposition.
- Sous 900 px : hero en colonne, réglages, vidéo, garantie et mentor en une colonne, mur de témoignages en 2 colonnes, offre en 2 lignes.
- Sous 640 px : piliers et duel en une colonne, éventail réduit à 3 modules, mur en 1 colonne, carte prix et volet empilés.

## 9. Mouvement

- Moteur commun : `data-rv` partout, `data-parallaxe` sur les bulles du hero, `data-aimant` sur les boutons, barre de progression menthe.
- Propre à K : **les interrupteurs basculent** au clic ; **la barre de progression se remplit** jusqu'à 91 % ; **le texte du sceau tourne** ; **le dégradé du bouton glisse** au survol.

## 10. Non mesuré, et choix tranchés seul

- La police (§3).
- La marque « Méthode Axe », la mentore Awa Sangaré (Bamako), les textes et les prix en F CFA (99 000 F au lieu de 250 000 F, ou 12 x 9 900 F).
- Les logos d'applications du dock remplacés par des pictos neutres (aucune marque réelle).
- Les avatars des témoignages remplacés par des initiales.
- Le téléphone (§8).

## 11. Images

Personnage : **Awa Sangaré**, 31 ans, Bamako, coach en organisation personnelle ; peau brun moyen, tresses fines sans nœud relevées en chignon haut, visage ovale, regard direct ; signature : petites créoles dorées, carnet noir à élastique. Tenue : chemise noire, accents menthe.

| id | Format | Rôle | Personnage |
|---|---|---|---|
| K-hero | 3:4 | Portrait du hero, fondu dans le noir | oui |
| K-video | 16:9 | Vignette de la leçon vidéo dans l'ordinateur | oui |
| K-module-1 | 9:16 | Module « Planifier et organiser » | non |
| K-module-2 | 9:16 | Module « Énergie et efficacité » | oui |
| K-module-3 | 9:16 | Module « L'essence de l'équilibre » (central) | non |
| K-module-4 | 9:16 | Module « L'architecture des habitudes » | oui |
| K-module-5 | 9:16 | Module « Constance et discipline » | non |
| K-mentor | 3:4 | Portrait noir et blanc de la mentore | oui |

## 12. Consigne pour l'IA

Construis une page de vente de méthode de productivité sur fond anthracite `#0D0C0F`, en Geist. Une seule couleur vive : la menthe électrique `#11F7CE`. Chaque titre tient en deux lignes, la 1re en gris dégradé, la 2e en menthe. Ajoute une carte de réglages à trois interrupteurs allumés, un duel de cartes rouges et vertes, un mur de témoignages gris avec une carte blanche mise en avant, une courbe de progression lumineuse, un éventail de 5 modules, une carte prix sombre avec son volet d'inclusions et un sceau de garantie à grand 7 menthe. Boutons rectangulaires en dégradé menthe.
