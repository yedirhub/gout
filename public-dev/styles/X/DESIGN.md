# DESIGN.md : Style X « Braise de cinéma » (d'après la page « Página Castrum Mídias - Tráfego Pago », Jose Justo)

> **Source** : `inspi/behance/236475491/` (01.png bureau 2880 × 10365, 02.png téléphone 630 × 13694), page d'une agence de publicité payante « Castrum Mídias », Behance 236475491. Relevé le 16/11/2026.
> **Demande de Ruben** : pas de consigne de détail, lot du 16/11/2026.

## 1. Ambiance et intention

- Une agence de publicité vendue comme un film noir : tout est sombre, la lumière vient d'une lampe et d'une lueur orange dans les coins.
- Le noir n'est jamais plat : des halos braise (`#7F341D`) glissent en haut à gauche du hero, en coin du tableau, au bord de la décision.
- Un seul accent, l'orange brûlé, réservé à l'action : boutons, pastilles d'icônes, têtes de tableau, numéros, flèches.
- Les titres mêlent une fine en capitales ou en bas de casse avec une chute en **italique extra-grasse** : le mot qui compte claque.
- La preuve est mise en scène : des notifications « Vous avez reçu un paiement » flottent sur le portrait.

## 2. Palette et rôles

Relevés au pixel (PIL) sur `01.png` réduit à 1000 px.

- **Noir** `#000000` : fond du hero, de la FAQ, du pied.
- **Nuit** `#070707` : fond des sections problème et piliers.
- **Carte** `#0C0C0C` / `#101010` : panneau « Qui », cartes d'avis, bande des témoignages.
- **Rangée** `#0D0F12` (relevé `#0B0F10` / `#0E0F11`) : rangées de la FAQ, très légèrement bleutées.
- **Orange** `#FF4C01` : tête droite du tableau, boutons carrés de la FAQ, pastilles ; `#F85707` : dégradé des boutons.
- **Orange brûlé** `#B03702` : tête gauche du tableau (« les autres »).
- **Braise** `#7F341D` / `#88381F` : halos de lumière dans les coins.
- **Fond portrait** `#D4592F` : le fond orange de la photo « Qui dirige ».
- **Gris** `#8A8A8A` (relevé `#737373`, éclairci pour AA) : colonne « les autres » du tableau.

## 3. Typographie

- Non nommée par l'auteur. Relevé à l'œil : grotesque géométrique à graisses extrêmes, fine 300 et italique 800. La plus proche sur Google Fonts : **Inter Tight**. Le logo du pied est manuscrit : **Caveat** 700.

| Rôle | Police | Taille bureau / téléphone | Graisse | Interligne | Approche |
|---|---|---|---|---|---|
| Titre du hero | Inter Tight capitales | 48 / 32 px | 300 puis 800 | 1,08 | -0,01 em |
| Titre de section | Inter Tight | 32 / 26 px | 300 + italique 800 | 1,3 | -0,01 em |
| Surtitre | Inter Tight italique capitales | 12 px | 300 | 1 | 0,55 em (0,32 au téléphone) |
| Texte | Inter Tight | 12,5 à 16 px | 400 | 1,5 | 0 |
| Bouton | Inter Tight capitales | 13 px | 700 | 1,2 | 0,02 em |
| Question FAQ | Inter Tight | 14 px | 600 | 1,35 | 0 |
| Logo du pied | Caveat | 34 px | 700 | 0,8 | 0 |

## 4. Composants

- **Bouton** : bloc orange `#FF4C01` aux coins 6 px, 48 px de haut, capitales grasses, petit carré translucide à flèche à droite, halo orange dessous.
- **Surtitre** : capitales italiques fines très espacées, orange, au-dessus de chaque titre.
- **Notification de paiement** : carte vitrée sombre, carré orange à flamme, « Vous avez reçu un paiement », montant en FCFA et heure ; elle flotte (6 s).
- **Pastilles de chiffres** : petits cadres à filet `#2A2A2A`, chiffre orange puis libellé blanc gras.
- **Carte pilier** : filet orange en haut, pastille orange accrochée au filet (coins bas arrondis), dégradé noir vers transparent.
- **Tableau comparatif** : deux têtes (brûlé / orange vif), rangées séparées d'un filet, colonne gauche grise, colonne droite blanche.
- **Chemin numéroté** : carte sombre avec un carré orange chiffré collé au bord haut (1 à droite, 2 à gauche).
- **Panneau scindé** : photo sur fond orange à gauche, texte sur carte noire à droite, coins 10 px.
- **Carrousel d'avis** : cartes de 230 px, vignette carrée, 5 étoiles orange, bords effacés par masque, flèches rondes orange.
- **FAQ** : rangée sombre à filet, bouton carré orange à chevron collé à droite ; accordéon natif.

## 5. Mise en page

- Colonne de 1080 px ; FAQ resserrée à 1000 px.
- Ordre : hero, problème (image gauche / texte droite), piliers en 4 colonnes, comparaison en tableau, décision (2 cartes autour d'une image), qui (panneau scindé), témoignages en carrousel, FAQ (titre à gauche / questions à droite), pied à 4 colonnes.
- Sections séparées par un filet `#1E1E1E` ; chaque section relance avec le même bouton orange.
- Espacement vertical : 60 à 110 px.

## 6. Profondeur et élévation

- Profondeur par la lumière, pas par l'ombre : halos braise en `radial-gradient` dans les coins, portrait fondu dans le noir à gauche et en bas.
- Seuls les boutons et les notifications portent une ombre (halo orange, ombre noire profonde).
- La nav est une barre vitrée (`backdrop-filter`) posée sur le hero.

## 7. À faire, à ne pas faire

- Faire : un seul accent orange, uniquement sur ce qui se clique ou se compte.
- Faire : finir chaque titre par un mot en italique 800.
- Ne pas faire : de fond gris clair ou de section blanche ; tout reste entre `#000` et `#121212`.
- Ne pas faire : le gris relevé `#737373` pour du texte : trop faible sur noir, monter à `#8A8A8A`.

## 8. Comportement responsive

- Le téléphone suit 02.png : portrait en haut, texte centré dessous, piliers empilés, tableau gardé en 2 colonnes serrées, chemins 1 et 2 côte à côte sous l'image, panneau « Qui » photo au-dessus, FAQ centrée puis questions.
- Sous 1000 px : nav réduite au logo et au bouton Contact ; piliers en 2 × 2.
- Sous 560 px : piliers en 1 colonne, une seule notification, pied en 1 colonne.

## 9. Mouvement

- Moteur commun : `data-rv` partout, `data-lignes` sur les titres, `data-aimant` sur les boutons, barre de progression orange.
- Propre à X : **les notifications de paiement flottent** en décalé ; **le carrousel** défile par flèches et au doigt (scroll-snap), démarré au centre.

## 10. Images

Le personnage : **Kevin Ondo**, 28 ans, Brazzaville, peau brun foncé, mini-dreads courts, mince, décontracté ; signature : casque audio autour du cou, sweat à capuche. Ici gestionnaire de publicité payante, fondateur de Mayombe Médias.

| id | Format | Section | Rôle | Kevin |
|---|---|---|---|---|
| X-hero | 3:4 | hero | portrait en clair-obscur, fondu dans le noir | oui |
| X-probleme | 1:1 | probleme | patron de dos dans un couloir, billets qui tombent | non |
| X-decision | 4:3 | decision | Kevin confiant devant un commerçant inquiet | oui |
| X-portrait | 3:4 | qui | portrait sur fond orange, main au menton | oui |
| X-temoin-1 | 1:1 | temoignages | vignette d'avis, Aminata Koné | non |
| X-temoin-2 | 1:1 | temoignages | vignette d'avis, Merveille Nzaba | non |
| X-temoin-3 | 1:1 | temoignages | vignette d'avis, Fatou Diop | non |
| X-faq | 4:3 | faq | Kevin au bureau, de nuit, répond à un message | oui |

- Commandes détaillées : `images/commandes.json`.

## 11. Non mesuré, et choix tranchés seul

- Les polices (§3).
- La marque « Mayombe Médias », les textes, les montants en FCFA.
- Le décor du hall à colonnes derrière les piliers : rendu en dégradés CSS, pas en photo.
- Les avatars du hero : initiales en CSS. Les 2 avis du bord du carrousel : sans photo, décoratifs (`aria-hidden`).
- L'emplacement `X-faq` : ajouté (la source n'a pas d'image en FAQ) pour que Kevin tienne la moitié des images.
- Le gris de la colonne « les autres » éclairci pour le contraste.

## 12. Consigne pour l'IA

Construis une page d'agence de publicité payante en noir profond `#000000`, avec un seul accent orange `#FF4C01` et des halos braise `#7F341D` dans les coins. Titres en Inter Tight fine, chaque titre finit par un mot en italique extra-gras. Surtitres orange en capitales italiques très espacées. Le hero montre un portrait en clair-obscur fondu dans le noir, avec des notifications de paiement qui flottent. Puis : problème en image et texte, 4 piliers à pastille orange, un tableau comparatif à deux têtes orange, deux chemins numérotés, un panneau « qui » sur fond orange, un carrousel d'avis, une FAQ à boutons carrés orange.
