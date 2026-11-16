# DESIGN.md : Style Q « Ciel clair » (d'après la page « Página de Vendas - Área de Membros | Eduarda Escobar », Padu Designer)

> **Source** : `inspi/behance/198747963/` (17 images : portrait, palette, typographie, page de vente bureau `04.png` 1400 px, téléphone `05.png` 500 px, 11 visuels de modules, bannière), Behance 198747963. La page de vente est assemblée depuis `04.png` et `05.png` ; les visuels de modules servent de référence aux cartes. Relevé le 16/11/2026.
> **Demande de Ruben** : pas de consigne de détail, lot du 16/11/2026.

## 1. Ambiance et intention

- Une formation en développement personnel vendue avec douceur : beaucoup de blanc, une brume bleu ciel, rien de criard.
- Une seule personne, détourée sur blanc, devant un nœud bleu à trois boucles flouté.
- Le bleu marche en deux temps : bleu nuit pour la gravité, bleu ciel pour l'élan. Les bandes pleines passent de l'un à l'autre en dégradé.
- Le noir n'apparaît que pour la preuve (captures WhatsApp), les modules et le bouton final.

## 2. Palette et rôles

Relevé au pixel (PIL) sur `04.png` ; la planche `02.png` donne les teintes de l'auteur (`#419BEC`, `#192F95`, `#171717`, `#FFFFFF`).

- **Ciel** `#339EEF` : boutons, badges, nœud, mots en relief (relevé sur les boutons et la pastille).
- **Nuit** `#06429C` : départ des bandes dégradées (relevé `#053E9A` et `#06429C`).
- **Bleu titre** `#0B47A8` : la partie en gras des titres.
- **Brume** `#EFF8FE` / `#D8EDFC` / `#F8FCFF` : fonds de section et halos sur les bords (relevés).
- **Encre** `#171717` : texte des titres, fond des cartes de modules, bouton d'achat (teinte de l'auteur, relevée sur les cartes).
- **Texte** `#2B2F36`, **doux** `#5A6270` : texte courant et petites lignes.
- **WhatsApp** `#0D1418`, `#202C33`, `#005C4B` : captures de messages refaites en CSS.

## 3. Typographie

- L'auteur nomme **Inter** (léger, normal, gras) : elle est sur Google Fonts, reprise telle quelle.

| Rôle | Police | Taille bureau / téléphone | Graisse | Interligne | Approche |
|---|---|---|---|---|---|
| Titre du hero | Inter | 38 / 28 px | 400 + 700 sur la fin | 1,18 | -0,01 em |
| Titre de section | Inter | 32 / 26 px | 400 + 700 en bleu | 1,2 | -0,01 em |
| Marque | Inter | 30 px | 700 | 1 | -0,02 em |
| Texte | Inter | 13,5 à 19 px | 400 | 1,3 à 1,45 | 0 |
| Bouton | Inter, capitales | 14 px | 400 | 1,2 | 0,01 em |
| Chiffre de badge | Inter | 28 px | 300 | 1 | 0 |
| Prix | Inter | 58 / 44 px | 700 | 1 | -0,02 em |

## 4. Composants

- **Bouton** : rectangle bleu `#1878CC` (le `#339EEF` du Behance ne tient pas l'AA avec du blanc : 2,9), coins 6 px, capitales fines, ombre bleue ; le bouton d'achat passe en noir.
- **Badge numéroté** : carré bleu ciel à coins 6 px, chiffre léger blanc, losange au trait gris-bleu foncé derrière.
- **Nœud** : SVG `#noeud` au trait épais, flouté, derrière les portraits.
- **Portrait en arche** : emplacement aux coins hauts très arrondis, bas fondu dans le blanc.
- **Ordinateur portable** : cadre noir et socle aluminium en CSS, penché de 8°, écran = emplacement 16:9.
- **Capture WhatsApp** : bandeau gris à avatar, bulles grises et vertes, heure en bas à droite, fond tramé.
- **Carte de module** : noire, image carrée fondue vers le bas, titre blanc, filet, « MODULE 02 » très espacé, petite marque bleue.
- **Sceau coché** : étoile dentelée blanche au trait avec une coche, pour les piliers.

## 5. Mise en page

- Colonne étroite de 800 px, sauf les bandes dégradées pleine largeur.
- Ordre : hero, vidéo, blocages, pourquoi, témoignages, piliers, contenus, mentore, offre, relance, pied.
- Alternance : blanc et brume, bande bleue, blanc, bande bleue inversée, brume, blanc, bande bleue.
- Espacement vertical : 60 à 100 px. Un bouton répété après chaque grand bloc.

## 6. Profondeur et élévation

- Peu d'ombres : la vidéo et les modules flottent sur une ombre bleutée.
- L'ordinateur déborde de la bande bleue par le haut.
- Les portraits sortent du nœud flouté ; le quadrillage très pâle donne une texture au fond.

## 7. À faire, à ne pas faire

- Faire : une moitié de titre en noir léger, l'autre en bleu gras.
- Faire : répéter le même bouton entre les sections.
- Ne pas faire : de bleu ciel pour du texte fin sur blanc en dessous de 18 px (contraste 2,9) : utiliser le bleu titre `#0B47A8`.
- Ne pas faire : de couleur chaude, sauf dans les images de modules.

## 8. Comportement responsive

- Behance montre bureau et téléphone : le téléphone suit leur maquette.
- Sous 820 px : portrait au-dessus du texte, ordinateur au-dessus du texte de la bande, modules en carrousel glissé, mentore centrée, badges en 2 colonnes.
- Sous 520 px : badges en 1 colonne, témoignages en 1 colonne (4 captures gardées).

## 9. Mouvement

- Moteur commun : `data-rv` partout, `data-parallaxe` sur les nœuds, `data-aimant` et `.reflet` sur les boutons, barre de progression bleu ciel.
- Propre à Q : rien d'autre, la page reste calme.

## 10. Images

| Id | Format | Section | Rôle | Personnage |
|---|---|---|---|---|
| Q-hero | 3:4 | hero | portrait, menton sur la main | oui |
| Q-video | 16:9 | video | vignette de vidéo en noir et blanc | oui |
| Q-ecran | 16:9 | pourquoi | écran de l'ordinateur, page de la formation | oui |
| Q-module-1 | 1:1 | contenus | de dos face à une galaxie | oui |
| Q-module-2 | 1:1 | contenus | chemin de lumière | non |
| Q-module-3 | 1:1 | contenus | billets dans un drapé irisé | non |
| Q-mentore | 3:4 | mentore | profil, bras croisés | oui |

- **Personnage** : Grâce Akakpo, 27 ans, Lomé, peau brun moyen, afro volumineux, visage fin, sourire franc avec fossettes ; signature : lunettes rondes à monture transparente. Consignes complètes : `images/commandes.json`.

## 11. Non mesuré, et choix tranchés seul

- La marque « L'Élan », les textes, les prix en F CFA (6 x 9 900 ou 49 000 comptant).
- Les 6 blocages : le Behance répète 3 phrases deux fois, ici 6 phrases distinctes.
- Les captures WhatsApp refaites en CSS, avec des messages écrits pour la marque.
- Les boutons foncés en `#1878CC`, les badges en `#2B8FE0` et le départ de la bande des piliers en `#1878CC`, pour le contraste du texte blanc.
- Le nœud du Behance (triquetra) redessiné à la main au trait.
- La zone « espace membres » (11 visuels de modules) n'est pas une section de la page de vente : seules 3 cartes de modules sont reprises, comme sur la page.

## 12. Consigne pour l'IA

Construis une page de vente de formation en ligne sur fond blanc et brume bleu ciel `#EFF8FE`, en Inter. Chaque titre a une moitié en noir léger et une moitié en bleu gras. Le portrait détouré de la mentore sort d'un nœud bleu ciel `#339EEF` flouté. Deux bandes pleine largeur en dégradé bleu nuit `#06429C` vers bleu ciel portent le pourquoi (avec un ordinateur penché) et les 4 piliers. Six blocages en badges numérotés dans un losange. La preuve est un mur de captures WhatsApp sombres. L'offre finit sur une bande bleue avec les valeurs barrées, un prix géant et un bouton noir.
