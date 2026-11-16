# DESIGN.md : Style P « Noir et or » (d'après la page « Página de Vendas, Criativos | Pri Zanelatto », Jack Luan)

> **Source** : `inspi/behance/211043431/` (4 images : planche typo et couleurs, bannière, page bureau 1920 px et téléphone 380 px côte à côte, carte de l'auteur), Behance 211043431. Relevé le 16/11/2026.
> **Demande de Ruben** : pas de consigne de détail, lot du 16/11/2026.

## 1. Ambiance et intention

- Un atelier de style en 5 jours vendu comme un objet de luxe : fond noir total, or brossé, serif partout.
- La lumière vient toujours de derrière la personne : halo or, anneau, triangle doré au sol.
- Un emblème à trois pétales (deux ailes et une goutte) revient comme sceau : hero, duel, garantie, mentore, offre.
- Une seule respiration claire au milieu (témoignages, garantie, mentore) en gris perle, puis retour au noir pour l'achat.

## 2. Palette et rôles

Relevé au pixel (PIL) sur `03.jpg` et la planche `01.jpg` ; les deux teintes nommées par l'auteur sont `#F3A240` et `#522700`.

- **Noir** `#000000` : fond de toutes les sections sombres (relevé à 3 endroits : hero, offre, FAQ).
- **Or emblème** `#D99C44` : logo, emblème, flèches, coches.
- **Or vif** `#F3A240` (auteur) : filet lumineux du bénéfice, halos.
- **Lingot** `#D5AC50` vers `#B37E1E` : dégradé du bouton (relevé haut et bas du bouton du hero).
- **Brun** `#522700` (auteur) : fonds de dégradés, pastilles d'avatar.
- **Or texte** `#D29A4E` : mots en relief dans les titres et les listes (le relevé brut `#936D39` est trop sombre pour l'AA sur noir, éclairci).
- **Carte** `#262626` vers `#0C0C0C` : cartes problèmes et bénéfices (relevé `#1F1F1F` / `#111111`).
- **Barre** `#1D1D1D` : questions de la FAQ (relevé `#1D1D1D`).
- **Rouge** `#E0585F` : intitulés des problèmes (relevé `#702931` en anticrénelage, éclairci pour l'AA).
- **Perle** `#EDEDED` / `#CFCFCF` : bande des témoignages et de la mentore (relevé `#CFCFCF`, `#B0B0AE`).
- **Or sombre** `#8A5A12` : nom de la mentore et « Satisfaction garantie » sur fond clair (relevé `#A06810`, foncé pour l'AA).

## 3. Typographie

- L'auteur nomme **Sylfaen** (titres) et **Source Serif** (texte). Sylfaen n'est pas sur Google Fonts : la plus proche, **Spectral** 400 en capitales. Texte en **Source Serif 4**. Le mot-symbole « Trio » à fort contraste : **Playfair Display**.

| Rôle | Police | Taille bureau / téléphone | Graisse | Interligne | Approche |
|---|---|---|---|---|---|
| Titre du hero | Spectral, capitales | 36 / 24 px | 400 | 1,1 | 0,01 em |
| Titre de section | Spectral, capitales | 34 / 26 px | 400 | 1,15 | 0,01 em |
| Titre de carte, FAQ | Source Serif 4 | 20 à 30 px | 400 | 1,2 | 0 |
| Texte | Source Serif 4 | 14 à 17 px | 400 | 1,45 | 0 |
| Bouton | Source Serif 4 ou Spectral capitales | 12,5 à 15 px | 600 | 1,2 | 0,06 em en capitales |
| Prix | Source Serif 4 | 52 / 42 px | 500 | 1 | -0,02 em |
| Mot-symbole | Playfair Display | 38 à 46 px | 400 | 0,82 | -0,02 em |

## 4. Composants

- **Bouton lingot** : coins 3 px, dégradé or vertical, texte serif brun-noir, flèche oblique, halo or sous le bouton, reflet au survol.
- **Emblème** : SVG `#embleme`, deux ailes et une goutte au trait, or, lueur `drop-shadow`.
- **Carte de jour** : fond noir dégradé, filet brun-or `#3A2C17`, photo 4:3 en haut, « Jour n » gris, titre, filet, description grise.
- **Carrousel** : piste à défilement accroché (scroll-snap), flèches triangles or ; 3 cartes au bureau, 2 en tablette, 1 au téléphone.
- **Cartes du duel** : coins 14 px, dégradé gris-noir, un filet lumineux en haut (rouge pour les problèmes, or pour les bénéfices), icône triangle d'alerte ou case cochée.
- **Capture de message** : fond vert-noir tramé, bulle grise à heure, prénom et ville sous la bulle.
- **Carte prix** : noire, filet `#303030`, mot-symbole, prix géant, bouton pleine largeur, puces de moyens de paiement, deux encarts gris.
- **FAQ** : barres `#1D1D1D` fines, chevron gris.

## 5. Mise en page

- Colonne de 1080 px ; offre et FAQ resserrées à 860 et 640 px.
- Ordre : hero, programme, duel, témoignages, garantie, mentore, offre, FAQ, relance, pied.
- La bande claire a le haut biseauté en toit (pointe à 52 %) ; la section mentore finit par une encoche noire en bas à droite.
- Espacement vertical : 60 à 110 px.

## 6. Profondeur et élévation

- Les cartes sombres flottent par l'ombre noire et un filet, pas par la couleur.
- L'emblème coiffe les deux cartes du duel, à cheval sur leur bord haut.
- Le portrait de la mentore se pose sur un rectangle doré décalé, un anneau lumineux à emblème déborde à droite.
- Le portrait du hero se fond dans le noir par le bas (masque en dégradé).

## 7. À faire, à ne pas faire

- Faire : l'or seulement pour ce qui compte (mots clés, boutons, emblème).
- Faire : du serif partout, même dans les boutons.
- Ne pas faire : de gris moyen sur noir pour le texte courant : `#ABABAB` minimum.
- Ne pas faire : de rouge ailleurs que dans la carte des problèmes.

## 8. Comportement responsive

- Behance montre le bureau (1920) et le téléphone (380) : le téléphone suit leur maquette (photo en haut, texte dessous, cartes empilées).
- Sous 820 px : hero en colonne photo d'abord, duel empilé, garantie centrée, mentore en colonne, offre en colonne.
- Sous 520 px : 1 carte par vue dans les carrousels, pied en colonne.

## 9. Mouvement

- Moteur commun : `data-rv`, `data-lignes` sur le titre du hero, `data-parallaxe` sur le halo et les feuilles, `data-aimant` sur les boutons, barre de progression or.
- Propre à P : carrousels à flèches (défilement doux), reflet sur les boutons lingot.

## 10. Images

| Id | Format | Section | Rôle | Personnage |
|---|---|---|---|---|
| P-hero | 3:4 | hero | portrait main levée, fondu dans le noir | oui |
| P-jour-1 | 4:3 | atelier | assise dans un fauteuil de cuir | oui |
| P-jour-2 | 4:3 | atelier | portrait veste blanche | oui |
| P-jour-3 | 4:3 | atelier | portrait qui rit | oui |
| P-jour-4 | 4:3 | atelier | compose une tenue au portant | oui |
| P-jour-5 | 4:3 | atelier | debout, bras croisés | oui |
| P-mentore | 3:4 | mentore | assise, tenue claire | oui |

- **Personnage** : Leïla Benali, 33 ans, Casablanca, peau mate olive, cheveux noirs ondulés mi-longs, sourcils marqués ; signature : rouge à lèvres terracotta, bague dorée épaisse, pull col roulé. Consignes complètes : `images/commandes.json`.

## 11. Non mesuré, et choix tranchés seul

- Les polices (§3) : Sylfaen remplacée par Spectral.
- La marque « Trio d'Allure », les textes, le prix (25 000 F CFA), la date.
- Les témoignages : refaits en CSS (pas de capture), le Behance montre des captures WhatsApp.
- Le carrousel du programme passe à 5 jours (le Behance en montre 3).
- La maquette d'ordinateur portable et la carte de l'auteur ne font pas partie de la page : non reprises.
- Le rouge et l'or texte éclaircis pour le contraste.

## 12. Consigne pour l'IA

Construis une page de vente d'atelier de style sur fond noir total, or `#D99C44` et boutons en lingot doré `#D5AC50` vers `#B37E1E`. Titres en Spectral capitales, texte en Source Serif 4, mot-symbole en Playfair Display. Un emblème à trois pétales au trait or sert de sceau dans chaque section. Le portrait du hero baigne dans un halo or et se fond dans le noir. Deux cartes sombres opposent problèmes (filet rouge) et bénéfices (filet or). Une seule bande claire gris perle porte témoignages, garantie et mentore, puis la page finit en noir avec la carte prix.
