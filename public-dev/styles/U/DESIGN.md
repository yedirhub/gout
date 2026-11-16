# DESIGN.md : Style U « Colonnes de bronze » (d'après la page « Landing Page - Método PRO Lucro », Jean Lucas)

> **Source** : `inspi/behance/243974351/01.png` (1920 x 10 534), page de vente d'une méthode de gestion financière pour entrepreneuses, Behance 243974351. Relevé le 16/11/2026, découpé en 4 tranches de 1000 x 1600.
> **Demande de Ruben** : pas de consigne de détail, lot du 16/11/2026.

## 1. Ambiance et intention

- La gestion financière vendue comme un héritage solide : colonnes antiques, crème, bronze, nuit chaude.
- Deux plans de lumière : le crème lumineux (contenu, preuves) et la nuit brune (hero, formules, qui je suis), raccordés par des vagues et des arcs.
- Tout ce qui se clique est un lingot de bronze brossé.
- Un papillon fin revient comme signature (diagramme, cachet, bandeau final).

## 2. Palette et rôles

Relevé au pixel avec PIL sur l'image d'origine.

- **Nuit** `#100C07` : bandes sombres (pour qui, formules, qui) ; **noir** `#070707` : fond du hero.
- **Crème** `#F8F2EB` : fond principal ; **crème froide** `#F3F1ED` : FAQ et fin de page.
- **Or** `#B79E80` : mots clés sur nuit, en-tête du plan premium, pastilles de coche, carrés des réseaux.
- **Bronze** `#9C7E5F` : en-têtes de modules, chevrons, FAQ ouverte ; dégradé du bouton `#D0BDA8` vers `#AD8C67`.
- **Brun texte** `#452D18` : titres et mots en gras sur crème.
- **Ardoise** `#323435` et **carte noire** `#1B1B1B` : le plan de base.
- **Bordeaux** `#280101` / **rubis** `#8F1110` : « les autres méthodes » ; **forêt** `#0F2907` / **mousse** `#1F3211` : notre méthode.
- **Vert WhatsApp** `#018816` : le seul bouton de contact.

## 3. Typographie

- Non nommée par l'auteur. Relevé à l'œil : grotesque géométrique douce, grand œil, très lisible. La plus proche sur Google Fonts : **Plus Jakarta Sans** (une seule famille, graisses 400 à 800).

| Rôle | Police | Taille bureau / téléphone | Graisse | Interligne | Approche |
|---|---|---|---|---|---|
| Titre du hero | Plus Jakarta Sans | 46 / 32 px | 600 | 1,25 | -0,02 em |
| Titre de section | Plus Jakarta Sans | 36 / 25 px | 400, mots clés 700 | 1,22 | -0,02 em |
| Logo « CAP » | Plus Jakarta Sans | 46 px | 800, dégradé bronze | 1 | -0,04 em |
| Texte | Plus Jakarta Sans | 15 à 22 px | 400 | 1,55 | 0 |
| Prix | Plus Jakarta Sans | 116 / 56 px | 700 | 1 | -0,05 em |
| Étiquette | Plus Jakarta Sans | 13 px | 500, barre bronze devant | 1 | 0 |
| Bouton | Plus Jakarta Sans | 16 px | 700 | 1,2 | 0 |

## 4. Composants

- **Bouton lingot** : coins de 8 px, dégradé bronze brossé, carré blanc à flèche ; variante contour pour le plan de base.
- **Colonne** : colonne antique en SVG à cannelures, dégradé pierre, tige et point bronze avec le nom du pilier au-dessus.
- **Diagramme** : trois cercles doublés au trait bronze, papillon au centre, noms en deux tons.
- **Module** : en-tête bronze avec pastille « Module 1 », sous-thèmes en accordéons blancs à chevron rond.
- **Carte « pour toi »** : dégradé blanc vers crème, carré or à coche, petit filet en haut.
- **Formule** : tête arrondie (ardoise ou or avec « Le choix idéal ») et code-barres décoratif, corps de liste à coches vertes ou croix grises, prix géant dans un cartouche.
- **Bulle de dialogue** : pilule or avec une queue à gauche.
- **Publication** : carte façon réseau social, photo 3:4, légende blanche à filet rubis posée dessus.
- **Duel** : deux blocs aux pilules arrondies, rubis à croix contre mousse à coches, titre en pilule qui déborde.
- **Cachet** : texte en cercle qui tourne autour d'un papillon.

## 5. Mise en page

- Colonne de 1280 px ; textes de titre centrés sur 1040 px.
- Grille fine de 64 px sur tout le crème.
- Transitions : arc sous le hero, vague nuit sous la carte « pour toi », vague crème sous les formules, filet bronze à languette entre « qui » et la FAQ.
- Espacement vertical : 60 à 80 px.

## 6. Profondeur et élévation

- Ombres brunes et longues sous les boutons, la vidéo et les publications.
- La carte « pour toi » chevauche la vague ; les titres de duel chevauchent leur bloc ; la carte de chiffre d'affaires chevauche le téléphone.

## 7. À faire, à ne pas faire

- Faire : un mot clé en gras par titre, jamais tout le titre.
- Faire : réserver l'or au texte sur fond nuit et aux pastilles.
- Ne pas faire : de texte or pâle `#CDB8A0` sur crème (contraste 1,8) ; les petits noms du diagramme passent à `#8E7152`.
- Ne pas faire : de vert ailleurs que dans les coches, le duel et WhatsApp.

## 8. Comportement responsive

- Behance ne montre que le bureau. Le téléphone est notre proposition.
- Sous 1100 px : modules et cartes « pour toi » en 2 colonnes. Sous 820 px : photo du hero au-dessus du titre, formules et duel empilés, une seule publication visible, bandeau final en colonne. Sous 560 px : tout en une colonne, colonnes antiques réduites à 50 px.

## 9. Mouvement

- Moteur commun : `data-rv`, `data-lignes`, `data-aimant`, `.reflet` sur les boutons clés, barre de progression or.
- Propre à U : le cachet tourne (22 s) ; les chevrons pivotent à l'ouverture des accordéons.

## 10. Non mesuré, et choix tranchés seul

- La police (§3).
- La marque « Méthode Cap Marge », les textes, les prix en FCFA (250 000 et 380 000), les trois clientes.
- Les publications Instagram : reprises comme cartes génériques, sans marque de réseau.
- Le téléphone et sa carte de chiffre d'affaires dessinés en HTML.
- Le téléphone (§8).

## 11. Images

Personnage : **Estelle Nkoghe**, 39 ans, Libreville, peau brun clair, carré lisse noir au menton, visage anguleux ; signature : boucles d'oreilles perle, chemise ample. Elle apparaît sur 4 images sur 7 ; les 3 autres sont ses clientes.

| id | format | rôle |
|---|---|---|
| U-hero | 4:3 | la fondatrice à son bureau, fondue à droite du hero |
| U-video | 16:9 | image de la vidéo de présentation |
| U-cas-1 | 3:4 | cliente architecte d'intérieur |
| U-cas-2 | 3:4 | cliente consultante en marque |
| U-cas-3 | 3:4 | cliente esthéticienne |
| U-qui-fond | 9:16 | gros plan pâle en bord de page, bloc « qui » |
| U-portrait | 3:4 | portrait assis du bloc « qui » |

Les consignes complètes sont dans `images/commandes.json`.

## 12. Consigne pour l'IA

Construis une page de vente de méthode financière en crème `#F8F2EB` sur grille fine, avec des bandes nuit `#100C07` raccordées par des arcs et des vagues. Titres en Plus Jakarta Sans 400 avec un passage en gras brun `#452D18`. Tous les boutons sont des lingots de bronze brossé avec un carré blanc à flèche. Montre quatre colonnes antiques dorées pour les quatre piliers, puis un diagramme de cercles au trait bronze, des modules en accordéon, deux formules côte à côte (ardoise et or mise en avant) aux prix géants, un duel rubis contre forêt en pilules, et une FAQ dont la question ouverte devient bronze.
