# DESIGN.md : Style D « Médical premium » (d'après la page du Dr Bruno Monteiro, Grupo Milano)

> **Source** : `refs/brut/ref6.webp` (après) et `ref5.webp` (avant/après). Relevé le 08/10/2026, session `fe30eec0`.
> **Mesures** : couleurs relevées au pixel sur l'image Behance. Tailles converties : le site fait 1163 px dans l'image, soit 1440 px réels (facteur 1,238).
> **Template** : `reproduction.html` · **Sections** : `SECTIONS.md` et `sections/*.jpg`.

## 1. Ambiance et intention
« Cabinet de confiance. » Un spécialiste de santé qui rassure par la netteté, pas par la chaleur.
Beaucoup de blanc cassé, un bleu nuit d'institution, et une seule section sombre pour respirer.
On vise le patient de 35 à 65 ans qui a mal et compare deux médecins : il doit voir le sérieux en 3 secondes.

## 2. Palette et rôles
| Rôle | Valeur | Où on l'emploie |
|---|---|---|
| Fond de page | `#F8F8F8` → `#F1F1F1` | Sections claires, en alternance avec du blanc pur |
| Blanc | `#FFFFFF` | Une section sur deux, cartes, formulaire |
| Encre (titres) | `#06122A` | Titres, texte gras |
| Texte courant | `#4A5568` | Paragraphes (non mesuré exactement, voir §10) |
| Accent (UN SEUL) | `#0B5A82` | Le mot clé en gras des titres, puces, numéros, liens |
| Bouton (dégradé de l'accent) | `#042B52` → `#0A6A96` | Boutons pleins uniquement |
| Halo du bouton | `#D2DBE6` | Anneau de 5 px autour du bouton principal |
| Bleu nuit (section sombre) | `#0B2847` | La section « Pourquoi moi », une seule fois par page |
| Pied de page | `#07162C` | Pied de page, et fond extérieur de la maquette |
| Bordure | `#DCE3EA` | Cartes, champs, séparateurs de liste |
| Exception : WhatsApp | `#1E9E45` → `#0D5E1F` | Seul vert autorisé, uniquement sur le bouton WhatsApp |

Contrastes calculés : encre/fond `#06122A`/`#F8F8F8` = 17,6:1 · accent/blanc `#0B5A82`/`#FFF` = 7,0:1 · blanc/bouton `#FFF`/`#042B52` = 13,6:1.

## 3. Typographie
| Usage | Police | Taille | Graisse | Interlignage | Interlettrage |
|---|---|---|---|---|---|
| Titre 1 (hero) | Inter | 52 px | 300 + 700 | 1,05 | -0,03 em |
| Titre 2 (section) | Inter | 38 px | 300 + 700 | 1,1 | -0,025 em |
| Sur-titre | Inter | 11 px | 500, capitales | 1 | +0,18 em |
| Titre de carte | Inter | 15 px | 600 | 1,3 | -0,01 em |
| Texte courant | Poppins | 14 px | 400 | 1,6 | 0 |
| Petit texte (preuve) | Poppins | 11 px | 400 | 1,4 | 0 |

**2 familles.** Inter porte toute l'autorité. Poppins arrondit le texte et le rend plus humain.
🔴 **La signature : chaque titre a deux graisses.** Une ligne en 300 (le contexte), puis la promesse en 700, souvent en accent.

## 4. Composants
- **Bouton principal** : pilule (rayon 999 px), hauteur 56 px, dégradé horizontal `#042B52` → `#0A6A96`, texte blanc 14 px. À droite, une flèche ↗ dans un rond blanc de 26 px. Halo `0 0 0 5px #D2DBE6`.
- **Preuve sous le bouton** (toujours) : 3 avatars superposés + « +3 200 patients » + 5 étoiles bleu nuit, en 11 px.
- **Carte de service** : rayon 8 px, bordure 1,5 px `#C9D6E2`, fond blanc, padding 24 px. Icône dans un carré plein accent de 26 px, rayon 4 px.
- **Carte sombre (glass)** : fond `rgba(255,255,255,.04)`, bordure `rgba(255,255,255,.08)`, rayon 10 px, avec une barre accent de 50 × 3 px en haut à gauche.
- **Pastille sur la photo** : verre dépoli (`backdrop-filter: blur(8px)`, fond `rgba(255,255,255,.55)`), rayon 999 px, coche ✓ en accent.
- **Champ de formulaire** : hauteur 40 px, rayon 6 px, bordure 1 px `#DCE3EA`, focus en bordure 2 px accent.
- **Accordéon FAQ** : carte blanche, rayon 6 px, ombre longue et douce, « 01 | » en accent, « + » à droite.
- **Encoche de section** : un petit onglet de 60 × 18 px avec un chevron ⌄, centré au bas d'une section et de la couleur de cette section. C'est la couture visuelle entre deux fonds.

## 5. Mise en page
- Largeur maximale du contenu : **960 px**, centré. Très étroit pour un 1440 px, d'où le calme.
- Grille : 2 colonnes 50/50 pour les sections texte + image ; 3 colonnes, gouttière 16 px, pour les cartes.
- Rythme vertical entre sections : **96 px** en haut et en bas.
- Marge latérale au téléphone : 20 px.
- **Alternance des fonds** : gris clair, blanc, gris, blanc, **bleu nuit**, gris, etc. Jamais deux fonds identiques de suite.

## 6. Profondeur et élévation
- **Ce qui crée la profondeur ici : la bordure fine et l'alternance des fonds.** Les ombres sont réservées à deux usages.
- Ombre FAQ : `0 10px 30px -12px rgba(6,18,42,.18)`.
- Ombre photo de cabinet : `0 20px 40px -20px rgba(6,18,42,.25)`.
- Le halo du bouton (anneau plein, pas une ombre floue) le fait ressortir sans le faire flotter.

## 7. À faire, à ne pas faire
À faire :
- Titre en deux graisses, la promesse en gras.
- Un bouton et sa preuve sociale à la fin de **chaque** section.
- Un sur-titre court avec un trait de 24 px devant, au-dessus de chaque titre.
- Une photo détourée du praticien sur un fond très clair, avec 2 à 3 pastilles de crédibilité en verre.
- Des listes numérotées « 01 » avec un séparateur fin pour les actes.

À ne pas faire :
- Pas de second accent : le bleu fait tout. Le vert ne sert qu'à WhatsApp.
- Pas de gros rayon sur les cartes : 8 px maximum. Seuls les boutons et les pastilles sont en pilule.
- Pas d'ombre sur les cartes de service, seulement une bordure.
- Pas de photo de banque générique : la photo du vrai praticien porte toute la confiance.
- Jamais plus d'une section sombre par page.

## 8. Comportement responsive
- Points de rupture : 1024 px (les 2 colonnes passent en 1) et 640 px (les cartes passent en 1 colonne).
- Au téléphone : la photo du hero passe sous le texte, le titre descend à 36 px, les pastilles en verre restent posées sur la photo.
- Ce qui ne change jamais : le bouton pleine pilule et sa preuve sociale, les deux graisses du titre.

## 9. Mouvement
Moteur commun : `../../commun/anim.js` + `anim.css`. La page choisit ses effets par attributs.
| Moment | Effet | Courbe | Durée | Décalage |
|---|---|---|---|---|
| Entrée des titres | chaque ligne monte derrière un masque (`data-lignes`) | `cubic-bezier(.16,1,.3,1)` | 1000 ms | 90 ms par ligne |
| Apparition au défilement | montée de 26 px + fondu (`data-rv`) | même courbe | 800 ms | 70 ms entre frères |
| Preuve sociale | « +3 200 » compte depuis 0 quand il entre à l'écran (`data-compte`) | ease-out quartique | 1600 ms | aucun |
| Survol du bouton | reflet qui balaie (`.reflet`), le dégradé glisse, la flèche tourne de 45°, le bouton suit la souris de 6 px (`data-aimant`) | même courbe | 250 à 900 ms | aucun |
| Cartes de service et cartes sombres | s'inclinent vers la souris, 6° maximum (`data-incline`) | même courbe | 500 ms | aucun |
| Défilement | filigrane du hero et photos de la section douleur en parallaxe (`data-parallaxe`), barre de lecture bleue en haut | aucun | continu | aucun |
| Ambiant | pastilles de verre qui flottent de ± 4 px, sceau qui tourne en 30 s | `ease-in-out` / linéaire | 6 s / 30 s | 1,5 s |
Rien ne bouge sous `prefers-reduced-motion`. Sur écran tactile : ni inclinaison ni aimant.

## 10. Non mesuré
- **Polices exactes** : déduites à l'œil (Inter + Poppins) parce que l'image ne porte aucune métadonnée.
- **Couleur exacte du texte courant** : l'antialiasing de l'image compressée fausse le pixel, donc `#4A5568` est une estimation.
- **Mouvement** : c'est une image fixe. Le §9 est notre proposition, pas un relevé. Il a été enrichi le 08/10 à la demande de Ruben (« anime un peu plus »).
- **Mobile** : Behance ne montre pas cette page en mobile. Le §8 est notre proposition.

## 11. Consigne pour l'IA
« Respecte DESIGN.md à la lettre. Bleu nuit d'institution, un seul accent bleu, Inter en deux graisses pour chaque titre, Poppins pour le texte. Contenu étroit de 960 px, fonds alternés, une seule section sombre. Bouton pilule en dégradé avec un halo, suivi de sa preuve sociale à la fin de chaque section. Bordures fines plutôt qu'ombres. Pas de second accent, pas de gros rayons, pas de photo de banque. »
