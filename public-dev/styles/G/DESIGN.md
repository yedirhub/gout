# DESIGN.md : Style G « Récit néon » (d'après la page « Storytelling Lucrativo », Felipe Santos)

> **Source** : `inspi/behance/218430833/01.png` (1920 × 13256), « Página de Vendas - Lançamento », Behance 218430833. Relevé le 08/10/2026, session `fe30eec0`.
> **Demande de Ruben** : « sur la partie témoignage il y a un flou qui attire l'attention, certainement que si la souris passe sur une carte elle va se révéler ». C'est le geste central de ce style : il est construit ainsi.

## 1. Ambiance et intention

- Une communauté de créateurs de contenu : studio la nuit, néons, énergie de lancement.
- Bleu nuit presque noir partout, une seule couleur chaude (l'orange) pour les mots qui comptent, du violet et du rose seulement dans la lumière des images.
- Le récit avant / après porte la page : « des posts ignorés à la référence du marché ».
- Le visiteur est intrigué : les avis sont flous, il faut passer la souris pour les lire.

## 2. Palette et rôles

- **Nuit** `#09081D` (mesuré au pixel) : le fond de toute la page.
- **Carte** `#12103A` à `#211C6A` : les cartes d'avis (dégradé radial plus clair en haut).
- **Brun nuit** `#21111D` : les cartes FAQ et la bande de garantie (une pointe de rouge).
- **Orange** `#F56610` (bouton) et `#FF7B2D` (mots, filets) ; **pêche** `#FFAE6E` (plaques derrière les cartes, pied).
- **Violet** `#7B2CF5` et **rose** `#E0329A` : seulement dans les dégradés de lumière (hero, jetons, éclair).
- **Texte** `#B9B7CF` ; **texte doux** `#8E8BAE`.
- **Filet orange** `rgba(255,123,45,.45)` : le contour de presque toutes les cartes.
- **Vert WhatsApp** `#8CF59A` : le seul vert, sur le bouton de contact.

## 3. Typographie

- Non nommée par l'auteur. Relevé à l'œil : grotesque géométrique serrée, très grasse dans les titres, « a » à deux étages. La plus proche sur Google Fonts : **Plus Jakarta Sans** (titres, approche -0,035 em). Texte courant : **Inter**. Rubans : **Archivo 800 italique**.

| Rôle | Police | Taille bureau / téléphone | Graisse | Interligne | Approche |
|---|---|---|---|---|---|
| Titre du hero | Plus Jakarta Sans | 34 / 28 px | 700 | 1,18 | -0,035 em |
| Titre de section | Plus Jakarta Sans | 40 / 28 px | 700 | 1,15 | -0,035 em |
| Titre de carte | Plus Jakarta Sans | 12 à 15 px | 700 | 1,3 | -0,01 em |
| Texte | Inter | 13 à 15 px | 400 | 1,6 à 1,75 | 0 |
| Bouton | Plus Jakarta Sans | 14 px | 800 | 1 | capitales |
| Rubans | Archivo | 22 px | 800 italique | 1 | 0,02 em, capitales |
| Prix | Plus Jakarta Sans | 54 px | 800 | 1 | -0,04 em, dégradé blanc vers gris |

## 4. Composants

- **Bouton orange** : 56 px, coins 12 px, dégradé `#FF8A3D` vers `#F56610`, texte brun foncé en capitales, double anneau orange translucide autour (7 px). Une ligne « paiement sécurisé » sous le bouton.
- **Carte avant / après** : coins 16 px, filet orange, une **plaque pêche décalée** derrière (8 px en bas à droite), une barre « Hana en 2021 » à 3 points, une photo inclinée sur un papier blanc.
- **Pastille BONUS** : 34 px, coins 12 px, filet orange, petit cadeau orange.
- **Jeton** : rond de 58 px, dégradé orange vers violet, double anneau.
- **Carte d'avis** : coins 16 px, filet orange à 30 %, **contenu flou à 5 px** ; net au survol, au focus clavier et au toucher.
- **Carte d'étape** : 196 px, une barre orange collée en haut, image, titre en deux tons, posée en éventail.
- **Carte de prix** : plaque pêche décalée derrière à gauche, panneau de liste qui dépasse à droite avec une lumière orange en bas.
- **Sceau de garantie** : rosace pêche, chiffre géant dans un rond.
- **FAQ** : accordéon natif (`details`), cartes brunes à filet orange, « + » qui tourne en « × ».

## 5. Mise en page

- Colonne de 940 px ; les avis s'élargissent à 1080 px en 3 colonnes façon mosaïque (hauteurs libres).
- Les sections s'enchaînent sur une grille de fond (filets de 96 px), séparées par un filet orange avec une pastille à flèche au centre.
- Hero et « Qui » : texte à gauche, personne à droite, coupée en bas par la section suivante.
- Espacement vertical : 80 à 120 px.

## 6. Profondeur et élévation

- Les plaques pêche décalées donnent un relief de carte à jouer.
- Les étapes se chevauchent en éventail (rotations de -6° à 7°) ; la carte survolée se redresse et passe devant.
- La boule de cristal brille et respire ; les images de bonus sont des écrans posés en perspective.
- Deux rubans croisés traversent la page en biais.

## 7. À faire, à ne pas faire

- Faire : un titre en deux lignes, la deuxième (ou la fin) en orange.
- Faire : des cartes sombres à filet orange, jamais d'ombre grise.
- Ne pas faire : de violet dans le texte. Le violet vit dans la lumière.
- Ne pas faire : de flou sur autre chose que les avis : le flou doit rester une énigme rare.

## 8. Comportement responsive

- Behance ne montre que le bureau. Le téléphone est notre proposition.
- Sous 820 px : hero et « Qui » en colonne, centrés ; avant / après l'un sous l'autre ; jetons en 2 × 2 ; avis en 1 colonne ; étapes à plat ; carte de prix puis liste empilées.
- Sous 480 px : l'éventail se remet droit, la liste des salons de la communauté disparaît.
- Au toucher, un avis se révèle quand on le touche (focus).

## 9. Mouvement

- Moteur commun : `data-rv` partout, `data-compte` sur le prix, `data-parallaxe` sur la personne du hero, `data-incline` sur les cartes avant / après, `data-aimant` sur les boutons, `.reflet` sur le bouton orange, barre de progression violet vers orange.
- Propre à G : **les avis se révèlent au survol** (flou 5 px vers net, 0,5 s) ; **les rubans défilent** en sens opposés (38 s) ; **la boule respire** (4 s) ; **l'éventail se redresse** au survol.

## 10. Non mesuré, et choix tranchés seul

- Les polices (§3).
- Les images : personnes en silhouettes, studio en dégradés et néons dessinés, écrans dessinés, logos d'outils remplacés par des formes neutres.
- Le flou : mesuré à l'œil (environ 5 px) ; la révélation au survol est la lecture de Ruben, pas vue en mouvement.
- Le prix : en euros, 12 × 17 € ou 197 € en une fois.
- Le téléphone (§8).

## 11. Consigne pour l'IA

Construis une page bleu nuit `#09081D` éclairée par des néons orange, violets et roses. Titres en Plus Jakarta Sans 700 très serrés, la fin du titre en orange `#FF7B2D`. Cartes sombres à filet orange, avec une plaque pêche décalée derrière les cartes importantes. Les avis clients sont floutés et se révèlent au survol ou au toucher. Deux rubans en biais défilent en sens opposés. Les étapes sont des cartes posées en éventail. Le pied est une bande orange dégradée.
