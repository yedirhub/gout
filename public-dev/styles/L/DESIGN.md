# DESIGN.md : Style L « Ruban jaune nuit » (d'après la page « Página de Vendas - Marketing e Vendas », Felipe Santos)

> **Source** : `inspi/behance/211920099/01.png` (1920 × 14672), page de vente d'une formation pour équipes commerciales « SalesMax », Behance 211920099. Relevé le 16/11/2026.
> **Demande de Ruben** : pas de consigne de détail, lot du 16/11/2026.

## 1. Ambiance et intention

- Une formation pour équipes commerciales vendue comme une montée en régime : nuit violette, lumière jaune fluo, énergie de salle des ventes.
- Une seule couleur vive, le jaune fluo, pour les mots qui comptent, les boutons, les filets et les rubans ; tout le reste est nuit.
- Le geste fort : **deux rubans jaunes croisés** (comme des rubans de chantier) qui portent les mots « Ventes · Prévisibilité · Objectifs · Signature · Qualification ».
- Chaque carte porte un repère jaune (onglet en haut, barre en bas, point sur la ligne du temps) : l'œil suit le jaune de haut en bas.

## 2. Palette et rôles

Relevé au pixel avec PIL (quantification par zone) sur l'image source.

- **Nuit** `#0B051B` : le fond principal (bas de page, FAQ, cartes de modules).
- **Nuit 2** `#0D0722` et **nuit 3** `#150B2C` : les fonds des sections hautes, un cran plus violets.
- **Carte** `#190F30` ; **carte FAQ** `#160C2F` : cartes pleines.
- **Violet profond** `#220E54` : les anneaux de l'orbite et les halos de fond (`#3B1E85` en lumière).
- **Jaune fluo** `#C6EA0B` (relevé `#C2E70B` à `#CCED17` sur titres et boutons, `#C1E901` sur le pied) : mots, boutons, filets, pied.
- **Jaune ruban** `#D2F201` : les rubans croisés ; **jaune pâle** `#EAFAA1` : reflet du bouton.
- **Blanc lilas** `#FAF6FF` : le seul panneau clair (la différence).
- **Rouge** `#FF4953` (croix, barre vidéo, « En direct ») ; **vert** `#5BD702` (coches du panneau blanc, foncé à `#3E9E06` pour le contraste).
- **Texte** `#D9D4E6` ; **texte doux** `#A49DB8`.

## 3. Typographie

- Non nommée par l'auteur. Relevé à l'œil : grotesque serrée, chasse étroite, « a » à deux étages, titres en 500 et 600. La plus proche sur Google Fonts : **Inter Tight**. Texte courant : **Inter**. Rubans : **Barlow Condensed 700 italique** (capitales penchées et étroites de la source). G (Récit néon) prend Plus Jakarta et Archivo : L garde une voix plus étroite.

| Rôle | Police | Taille bureau / téléphone | Graisse | Interligne | Approche |
|---|---|---|---|---|---|
| Titre du hero | Inter Tight | 46 / 30 px | 600 | 1,15 | -0,025 em |
| Titre de section | Inter Tight | 40 / 26 px | 600 | 1,15 | -0,025 em |
| Grands numéros (01 02 03) | Inter Tight | 74 / 48 px | 500 | 1 | -0,02 em |
| Prix | Inter Tight | 66 / 50 px | 700 | 1 | -0,04 em |
| Ruban | Barlow Condensed italique | 30 / 22 px | 700 | 1 | 0,03 em, capitales |
| Texte | Inter | 13,5 à 16 px | 400 | 1,6 | 0 |
| Bouton | Inter Tight | 15 px | 700 | 1,2 | capitales |

## 4. Composants

- **Bouton** : 48 px, rectangle à peine arrondi (4 px), jaune en dégradé vers le pâle, texte nuit en capitales, halo jaune ; reflet qui balaie au survol (`.reflet`).
- **Logo** : étiquette de prix dans un rond jaune à halo + « VENDIX » en Inter Tight 800, X jaune.
- **Vidéo du hero** : cadre à filet jaune, voile nuit à gauche, appel en capitales, bouton lecture carré jaune, barre de progression rouge.
- **Carte à onglet** : fond carte, onglet jaune de 64 × 5 px qui brille en haut à gauche, icône dans une tuile, titre jaune.
- **Rubans croisés** : deux bandes jaunes à ±4°, texte nuit en italique étroit qui défile en sens contraires.
- **Téléphone** : coque arrondie qui s'efface vers le bas, discussion d'équipe en bulles violettes, noms en jaune ou rose.
- **Panneau blanc à encoche** : coin découpé nuit au centre du bord haut avec un chevron, pastille nuit, duel croix rouges / coches vertes en cartes blanches.
- **Orbite** : trois anneaux violets, cœur jaune au logo, 4 pastilles d'outils et 4 points blancs qui tournent (40 s).
- **Carte de module** : haute (9:16), photo ou dessin plein cadre, pastille « MODULE 0x », titre en bas, signature du logo, barre jaune qui brille.
- **Ligne du temps des bonus** : fil jaune vertical, points jaunes à halo, écran à filet jaune (appel vidéo avec commandes, ou kit de dossiers).
- **Carte prix** : médaille au logo à cheval sur le bord, prix barré rouge, gros chiffre jaune, moyens de paiement, bouton pleine largeur.
- **Sceau de garantie** : cercle jaune festonné (trait arrondi en pointillés), anneau nuit, « 7 » géant, se balance doucement.
- **Carte histoire** : texte à gauche, photo à droite, bouton lecture rond jaune entre les deux.
- **FAQ** : accordéon natif numéroté, « + » jaune qui tourne en « × ».

## 5. Mise en page

- Colonne de 860 à 1080 px, contenu centré ; les sections à deux colonnes alternent visuel à gauche et texte à droite.
- Une trame de 6 colonnes verticales très fines sur certaines sections, comme la source.
- Des filets jaunes horizontaux, plus vifs au centre, séparent les grands blocs (après le hero, l'équipe, les histoires, le formateur).
- Une flèche dans une gélule invite à descendre (après les techniques, après l'offre).
- Espacement vertical : 60 à 100 px.

## 6. Profondeur et élévation

- Tout est lumière : halos radiaux violets en fond, halo jaune sous les boutons, les onglets, les points et le sceau.
- Les rubans portent une ombre noire marquée ; la carte prix une ombre profonde de 80 px.
- Le portrait du formateur déborde de son cadre jaune par le haut.

## 7. Images

| id | format | rôle | personnage |
|---|---|---|---|
| L-hero | 16:9 | la vignette de la vidéo du hero | oui |
| L-module-abord | 9:16 | module 03, l'approche commerciale | oui |
| L-module-signature | 9:16 | module 04, négociation et signature | oui |
| L-module-objections | 9:16 | module 06, objections (dominos) | non |
| L-module-reglages | 9:16 | module 07, régler la performance | non |
| L-masterclass | 16:9 | bonus 1, la masterclass en direct | oui |
| L-temoin-1 | 3:4 | histoire vidéo 1 | non |
| L-temoin-2 | 3:4 | histoire vidéo 2 | non |
| L-temoin-3 | 3:4 | histoire vidéo 3 | non |
| L-portrait | 1:1 | le formateur sur fond jaune | oui |

- **Personnage** : Yannick Ekambi, 34 ans, Douala ; peau brun foncé, cheveux courts en dégradé avec une raie tracée, moustache fine, grand sourire ; signature : veste bomber, chaîne fine argentée. Métier : coach et directeur commercial.
- Les modules 01, 02, 05 et 08 sont dessinés en CSS (entonnoir, écrans, réseau, puce), pas en photo.

## 8. À faire, à ne pas faire

- Faire : un seul accent, le jaune ; un mot jaune par titre, jamais la phrase entière.
- Faire : un repère jaune lumineux sur chaque carte.
- Ne pas faire : de jaune en texte courant long ; il sert aux titres, mots clés et liens.
- Ne pas faire : de vert clair `#5BD702` sous un texte blanc : foncé à `#3E9E06` pour les coches.

## 9. Comportement responsive

- Behance ne montre que le bureau. Le téléphone est notre proposition.
- Sous 900 px : cartes de techniques en 2 colonnes, modules en 2, carte prix centrée entre son titre et sa liste, histoires empilées.
- Sous 820 px : les trois temps s'empilent (chevrons tournés vers le bas), toutes les sections à deux colonnes passent en une, rubans plus fins.
- Sous 520 px : techniques en 1 colonne, kit de dossiers empilé, bouton du hero pleine largeur.

## 10. Mouvement

- Moteur commun : `data-rv`, `data-lignes` sur les titres, `data-aimant` sur les boutons, barre de progression jaune.
- Propre à L : **les deux rubans défilent en sens contraires** (34 s et 40 s) ; **l'orbite tourne** et ses pastilles restent droites ; **le sceau se balance** ; la flèche de descente respire ; le point « En direct » clignote ; les cartes de modules montent au survol.

## 11. Non mesuré, et choix tranchés seul

- Les polices (§3).
- La marque « Vendix », les textes, les noms, les prix en FCFA (390 000 F barré, 12 × 19 900 F, 199 000 F comptant).
- Le présentateur de la masterclass devient le formateur lui-même (la source montre un autre homme).
- Les avatars des 6 avis sont des initiales, pas des photos.
- Le téléphone (§9).

## 12. Consigne pour l'IA

Construis une page de vente de formation commerciale sur fond nuit violette `#0B051B`, avec un seul accent jaune fluo `#C6EA0B`. Titres en Inter Tight 600, un mot jaune par titre. Deux rubans jaunes croisés à ±4° défilent en sens contraires avec les mots de la vente. Chaque carte porte un repère jaune lumineux (onglet, barre, point). Un panneau blanc à encoche pour le duel avant / après, une orbite d'outils, des modules en cartes hautes, une ligne du temps jaune pour les bonus, une carte prix centrale, un sceau festonné de 7 jours, et un pied jaune plein.
