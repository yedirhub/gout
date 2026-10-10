# DESIGN.md : Style H « Sauge apaisée » (d'après la page « Eunoia », Jean Lucas)

> **Source** : `inspi/behance/247594873/`, page de vente d'un complément naturel « Eunoia », Behance 247594873. Relevé le 08/10/2026, session `fe30eec0`.
> **Demande de Ruben** : la mettre dans le lot de 5 (« Eunoia »). Aucune consigne de détail : tout est relevé sur l'image.

## 1. Ambiance et intention

- Un complément bien-être vendu comme un rituel : calme, doux, presque une page de spa.
- Vert sauge partout, du blanc cassé et du gris perle pour respirer, une seule touche jaune pâle pour les économies.
- Le produit (un pot vert à couvercle crème) revient dans chaque section : hero, ingrédients, vedette, kits.
- Beaucoup de pastilles arrondies : chaque idée tient dans une capsule.

## 2. Palette et rôles

- **Sauge** `#55645C` / `#566A61` : boutons, panneaux, pastilles d'icônes.
- **Sauge claire** `#86948D` : cartes d'ingrédients ; `#66746D` pour les cartes « pour qui » (texte blanc lisible).
- **Sauge pâle** `#A9B4AE` : pastilles de liste.
- **Nuit** `#2A3833` : texte des titres ; **forêt** `#0F251B` : carte « après » et pots.
- **Perle** `#E5E7E7` : bandes de fond, FAQ fermée ; **crème** `#F4F2EE` : cartes de kits et de moments.
- **Jaune pâle** `#F0E2A6` : badges d'économie ; pastels bleu, menthe, jaune, rose pour les 4 conseils.
- **Bois** `#8A6A40` vers `#5A4224` : le socle sous le pot vedette.

## 3. Typographie

- Non nommée par l'auteur. Relevé à l'œil : grotesque arrondie, aérée. La plus proche sur Google Fonts : **Manrope**. Le nom de marque : **Tenor Sans** (capitales fines à empattement léger).

| Rôle | Police | Taille bureau / téléphone | Graisse | Interligne | Approche |
|---|---|---|---|---|---|
| Titre du hero | Manrope | 44 / 32 px | 500 | 1,15 | -0,02 em |
| Titre de section | Manrope | 32 / 26 px | 500 | 1,2 | -0,02 em |
| Nom de marque | Tenor Sans | 56 à 230 px | 400 | 1 | 0,01 em |
| Texte | Manrope | 13 à 16 px | 400 | 1,5 | 0 |
| Pastille | Manrope | 13 à 15 px | 500 | 1,3 | 0 |
| Bouton | Manrope | 12 px | 700 | 1,2 | capitales |
| Prix | Manrope | 34 px | 700 | 1 | -0,02 em |

## 4. Composants

- **Pot** : dessiné en CSS (`.pot`, taille réglée par `--l`), corps vert dégradé, couvercle crème, rond doré et nom en Tenor Sans.
- **Bouton** : 52 px, pilule sauge, texte blanc en capitales, rond blanc à flèche à droite. Lien WhatsApp avec message prérempli.
- **Pastille d'étape** : rond sauge avec icône blanche + capsule sauge pâle avec le texte.
- **Carte « pour qui »** : coins 12 px, filet gris, fond sauge, petite tuile blanche à fleur en haut.
- **Carte d'ingrédient** : coins 12 px, sauge claire, tuile blanche à icône, « Action » et « Résultat » en gras.
- **Duel avant / après** : colonne sauge avec croix rouges, carte forêt avec coches.
- **Carte de kit** : crème, pots qui débordent par le haut, badge jaune, bouton, 3 garanties en icônes ; le kit du milieu porte un filet.
- **FAQ** : accordéon natif, gris perle fermé, sauge ouvert avec texte blanc.
- **Tampon tournant** : texte en cercle autour d'une fleur, sur la carte « Qui ».

## 5. Mise en page

- Colonne de 1080 px ; les grands panneaux sauge s'élargissent à 1066 px aux coins de 48 px.
- Les sections alternent blanc, perle et panneau sauge ; plusieurs panneaux chevauchent la frontière entre deux fonds.
- « Pour qui » : 5 photos en éventail, puis une grille de 4 colonnes de cartes, le tout cerclé d'un texte en ellipse.
- Espacement vertical : 80 à 120 px.

## 6. Profondeur et élévation

- Les photos débordent de leur carte (intro, rituel) ; les pots débordent des cartes de kits.
- Le pot vedette se pose sur un socle en bois devant le nom géant en filigrane, une cartouche blanche par-dessus.
- Ombres vertes très douces sous les pots, jamais grises.

## 7. À faire, à ne pas faire

- Faire : une idée par pastille, une icône par pastille.
- Faire : remontrer le pot à chaque grande section.
- Ne pas faire : de couleur vive. Le jaune pâle ne sert qu'aux économies.
- Ne pas faire : de texte blanc sur la sauge claire `#86948D` : trop faible (3,2), foncer à `#66746D`.

## 8. Comportement responsive

- Behance ne montre que le bureau. Le téléphone est notre proposition.
- Sous 820 px : hero en colonne, cartes « pour qui » en 2 colonnes, ingrédients en 1, duel empilé, kits empilés, conseils en 2 × 2.
- Le pot vedette passe à 170 px ; l'ellipse de texte reste derrière.

## 9. Mouvement

- Moteur commun : `data-rv` partout, `data-parallaxe` sur les photos, `data-aimant` sur les boutons, barre de progression sauge.
- Propre à H : **le texte en ellipse tourne** (startOffset animé, 12 s) ; **le tampon tourne** sur lui-même ; **deux bandeaux défilent** (puces et phrase en capitales).

## 10. Non mesuré, et choix tranchés seul

- Les polices (§3).
- La marque « Sérène », les textes, les prix en euros (trio 3 × 17 €, duo 2 × 19 €, cure 6 × 15 €).
- Les images : personnes en silhouettes, pots dessinés en CSS, ingrédients en icônes.
- La sauge claire des cartes « pour qui » foncée pour le contraste.
- Le téléphone (§8).

## 11. Consigne pour l'IA

Construis une page de vente bien-être en vert sauge `#55645C`, blanc cassé et gris perle. Titres en Manrope 500, nom de marque en Tenor Sans. Chaque idée tient dans une pastille arrondie avec son icône. Un pot vert à couvercle crème revient dans chaque section et déborde des cartes. Un texte tourne en ellipse autour des cartes « pour qui ». Termine par trois kits crème, le kit du milieu mis en avant, un badge jaune pâle pour l'économie.
