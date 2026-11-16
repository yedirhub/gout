# DESIGN.md : Style S « Néon juridique » (d'après la page « Yasmin Nery - Lançamento », Alex D'ávila)

> **Source** : `inspi/behance/219309937/` (5 images : ordinateur et visuel carré, visuel principal, affiches de lancement ×2, page de vente sur ordinateur), lancement du programme « Escalada Digital 360 » d'une avocate mentore, Behance 219309937. Relevé le 16/11/2026.
> **Demande de Ruben** : pas de consigne de détail, lot du 16/11/2026.

## 1. Ambiance et intention

- Une avocate qui vend un programme en ligne à d'autres avocats : le sérieux du métier, l'énergie d'un lancement numérique.
- Nuit violette partout, un seul éclat : la pilule vert néon vers citron qui porte « 360 ».
- La preuve est mise en scène : des notifications en verre « a signé le document » flottent autour de la mentore.
- La source ne montre que des mockups (visuels, affiches, la page sur un ordinateur) : la page est reconstruite à partir de ces éléments, sans style ajouté.

## 2. Palette et rôles

Relevé au pixel (PIL) sur `02.png`, `01.png` et `05.png`.

- **Nuit** `#181828` (bas du visuel) et `#181848` (haut) : fonds ; **nuit aube** `#19101C` : écran de la page ; **aubergine** `#28191E` : carte du visuel carré, carte d'offre.
- **Violet** `#381EA8` / `#3917A0` : l'arc derrière la mentore, affiche « monde digital », panneau prix.
- **Néon** `#09F84F` et **citron** `#C6F808` : la pilule, les cases cochées, le bouton ; **vert** `#08CB32` / `#05B01F` : barres lumineuses, affiches vertes.
- **Bleu** `#518DCD` : barres lumineuses de gauche, affiche conversion (`#1E3FA0` en fond).
- **Verre** `#383848` : boîtes et notifications, en transparence avec flou.
- Texte : blanc pour les titres, `#C9C6D6` pour le courant (contraste 10 sur la nuit).

## 3. Typographie

- Non nommée. Relevé à l'œil : grotesque géométrique ronde et grasse, « g » à une boucle, capitales larges. La plus proche sur Google Fonts : **Sora**.

| Rôle | Police | Taille bureau / téléphone | Graisse | Interligne | Approche |
|---|---|---|---|---|---|
| Nom du programme | Sora | 92 / 44 px | 700 | 0,98 | -0,02 em |
| Titre de section | Sora | 52 / 30 px | 700 | 1,05 | -0,02 em |
| Pilule « 360 » | Sora | 34 px | 700 | 1 | 0 |
| Signature (nom, métier) | Sora | 11 px | 500 | 1,4 | 0,32 em, capitales |
| Texte | Sora | 14 à 16 px | 400 | 1,6 | 0 |
| Bouton | Sora | 14 px | 700 | 1,2 | capitales |

## 4. Composants

- **Pilule lumineuse** : dégradé `#08CB32 → #09F84F → #C6F808`, contour nuit 3 px puis liseré crème, halo vert ; grande (360) ou petite (mot clé).
- **Notification en verre** : fond `#383848` translucide et flou, case verte cochée, nom en capitales, « a signé » et date à droite.
- **Arc violet** : demi-anneau épais derrière la mentore.
- **Barres lumineuses** : fines colonnes verticales en dégradé vert ou bleu, comme un égaliseur.
- **Tampon tournant** : rond violet translucide, texte en cercle, icône alerte ou coche au centre.
- **Affiche de module** : format vertical, photo puis fondu dans la couleur (violet, vert, bleu), petit « Module n » espacé, titre gras avec un mot en néon.
- **Bouton** : néon vers citron, texte nuit en capitales, flèche.
- **FAQ** : cartes en verre, plus néon qui pivote en croix.

## 5. Mise en page

- Colonne de 1120 px ; hero en deux colonnes (titre centré à gauche, mentore et notifications à droite).
- Ordre : hero, chiffres, alerte (douleur), modules, bienvenue et alignement, avis signés, offre, FAQ, relance avec ordinateur sur un bloc, pied.
- Espacement vertical : 80 à 120 px ; halos radiaux violets ou verts derrière chaque section.

## 6. Profondeur et élévation

- Les notifications flottent devant la photo et dépassent son cadre ; les tampons mordent le bord des affiches.
- Ombres longues et noires sous les cartes ; halos de couleur à la place des ombres grises.

## 7. À faire, à ne pas faire

- Faire : un seul vert néon, toujours en dégradé vers le citron.
- Faire : la signature « nom | métier » en capitales très espacées sous chaque grand titre de marque.
- Ne pas faire : de fond clair. Tout vit sur la nuit.
- Ne pas faire : de texte blanc sur le néon : le néon porte du texte nuit `#0E0D16`.

## 8. Comportement responsive

- La source ne montre que le bureau (sur ordinateur). Le téléphone est notre proposition.
- Sous 820 px : hero en colonne (titre puis mentore, deux notifications gardées), chiffres en 2 puis 1 colonne, affiches en 2 colonnes, offre empilée.

## 9. Mouvement

- Moteur commun : `data-rv`, `data-lignes`, `data-compte` sur 320, `data-aimant` et `.reflet` sur les boutons, barre de progression néon.
- Propre à S : les **tampons tournent** (18 s) ; le plus de la FAQ pivote en croix.

## 10. Images

Le personnage : **Salimata Coulibaly**, 30 ans, Ouagadougou, peau brun foncé, longues locs fines aux pointes cuivrées, visage allongé ; signature : anneau fin au nez, veste oversize. Avocate et mentore. Elle apparaît sur 5 images sur 10.

| id | format | rôle | personnage |
|---|---|---|---|
| S-hero | 3:4 | mentore détourée devant l'arc | oui |
| S-alerte | 3:4 | affiche de la douleur, tablette en main | oui |
| S-module-1 | 9:16 | module 1, smartphone et icônes | non |
| S-module-2 | 9:16 | module 2, tableau de bord | non |
| S-module-3 | 9:16 | module 3, globe et mains | non |
| S-module-4 | 9:16 | module 4, séance de groupe | oui |
| S-bienvenue | 3:4 | bienvenue, mains jointes | oui |
| S-temoin-1 | 1:1 | avis, avocat | non |
| S-temoin-2 | 1:1 | avis, avocate | non |
| S-relance | 16:9 | écran de visioconférence | oui |

Consignes complètes : `images/commandes.json`.

## 11. Non mesuré, et choix tranchés seul

- La police (§3).
- La structure de page : reconstruite depuis les mockups (hero de `02.png`, affiches de `03.png` et `04.png`, modules et ordinateur de `05.png`) ; les chiffres, avis, offre et FAQ n'existent pas dans la source et reprennent ses composants.
- La marque « Ascension Digitale 360 », les textes, les prix en FCFA (197 000 FCFA).
- Le téléphone (§8).

## 12. Consigne pour l'IA

Construis une page de vente de programme en ligne pour avocats sur une nuit violette `#181828`, titres en Sora 700. Le nom du programme est centré, très gras, au-dessus d'une pilule « 360 » en dégradé vert néon `#09F84F` vers citron `#C6F808` à double contour. La mentore se tient devant un arc violet épais `#381EA8`, entourée de barres lumineuses vertes et bleues et de notifications en verre « a signé le contrat ». Les modules sont des affiches verticales qui se fondent en violet, vert ou bleu. Le bouton est néon à texte nuit.
