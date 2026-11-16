# DESIGN.md : Style N « Braise de salle » (d'après la page « Página de Captura - Personal Trainer », Felipe Santos)

> **Source** : `inspi/behance/211065299/01.png` (1920 × 4493 px), page de capture d'un coach sportif « RV30 », Behance 211065299. Relevé le 16/11/2026.
> **Demande de Ruben** : pas de consigne de détail, lot du 16/11/2026.

## 1. Ambiance et intention

- Une page courte qui ne vend qu'une chose : s'inscrire à 3 cours gratuits.
- Noir de salle de sport, lumière de braise : tout ce qui compte brille en jaune, pêche ou orange.
- Le coach occupe la moitié droite du hero, fondu dans le noir par la gauche, comme éclairé par une lampe orange.
- Des cartes sombres aux coins inégaux (un coin bien plus arrondi), soulignées d'un petit trait orange.

## 2. Palette et rôles

- **Noir** `#141414` : fond des sections ; **nuit** `#181614` : fond du hero, réchauffé d'un halo `#5A3218`.
- **Carte** `#1E1E1E` / `#1B1B1B` : cartes et onglets ; filet `#2E2E2E`.
- **Jaune** `#FFD055` vers **orange** `#FF9E53` : le dégradé des boutons et du pied.
- **Orange** `#FB8F44` : onglet actif ; **orange icône** `#FEA055` : tuiles d'icônes, traits sous les cartes, mots mis en avant.
- **Or** `#FFE36F` et **pêche** `#FFB27A` : les mots colorés des titres, les dates géantes.
- **Doré** `#ECBB73` : le filet lumineux entre les sections, le contour des photos.
- **Vert** `#57E000` : les cases cochées de « Pourquoi », seule couleur froide.
- **Gris** `#484848` : le bandeau de mots qui défile ; **pied** `#FFCA76` vers `#FFD055`.

## 3. Typographie

- Non nommée par l'auteur. Relevé à l'œil : grotesque large aux courbes carrées. La plus proche sur Google Fonts : **Bai Jamjuree**, seule police de la page.

| Rôle | Police | Taille bureau / téléphone | Graisse | Interligne | Approche |
|---|---|---|---|---|---|
| Logo | Bai Jamjuree | 40 px | 500 | 1 | -0,02 em |
| Titre du hero | Bai Jamjuree | 42 / 28 px | 500 | 1,15 | -0,01 em |
| Titre de section | Bai Jamjuree | 34 / 26 px | 500 | 1,15 | -0,01 em |
| Titre « Pourquoi » | Bai Jamjuree | 36 / 28 px | 600 | 1,2 | capitales |
| Dates géantes | Bai Jamjuree | 84 / 50 px | 600 | 1,05 | -0,02 em |
| Texte | Bai Jamjuree | 13 à 15 px | 400 | 1,5 | 0 |
| Bouton | Bai Jamjuree | 13 à 16 px | 600 | 1,2 | capitales |

## 4. Composants

- **Bouton** : rectangle à coins 6 px, dégradé jaune vers orange, texte noir en capitales, flèche, halo orange qui grossit au survol.
- **Carte d'atout** : coins 14 px avec un coin à 36 px, tuile d'icône orange 56 px, titre en deux couleurs, petit trait orange collé au bas. La carte du milieu monte de 18 px et son trait s'allonge.
- **Onglets des cours** : 3 boutons empilés (« COURS 01 / 26-01 »), l'actif plein orange ; ils changent la vidéo et la fiche à côté.
- **Vignette vidéo** : photo 3:4 à contour doré, bouton lecture blanc avec halo.
- **Fiche du cours** : étiquette à filet orange, titre en deux couleurs, trait orange au bas.
- **Liste cochée** : cases vertes, début de phrase souligné en pêche.
- **Pile du coach** : 3 photos décalées devant les dates 26, 27, 28 en blanc, or et orange.

## 5. Mise en page

- Colonne de 1080 px ; les cartes tiennent dans 860 px au centre.
- Fond strié de fines colonnes verticales à 3,5 % de blanc, comme les néons d'une salle.
- Ordre : hero, atouts, programme, pourquoi, bandeau qui défile, coach, pied jaune.
- Espacement vertical : 60 à 100 px ; un filet doré ferme le hero et le programme.

## 6. Profondeur et élévation

- Ombres noires longues sous les cartes (0 20 40 px), jamais colorées sauf le halo des boutons.
- Halo orange flou derrière le coach et sur les bords du programme.
- La photo du coach se fond dans le noir par un masque à gauche, sans bord.

## 7. Images

| Id | Format | Rôle |
|---|---|---|
| N-hero | 1:1 | Ismaël en débardeur, face caméra, salle en lumière orange |
| N-cours-1 | 3:4 | Vignette du cours 1 : cordes ondulatoires |
| N-cours-2 | 3:4 | Vignette du cours 2 : assiette de sportif |
| N-cours-3 | 3:4 | Vignette du cours 3 : Ismaël corrige un élève |
| N-coach | 3:4 | Portrait d'Ismaël, barre chargée au premier plan |
| N-salle-1 | 9:16 | Haltères alignés |
| N-salle-2 | 9:16 | Main sur la barre d'un appareil |

- **Personnage** : Ismaël Bamba, 29 ans, Abidjan, peau très foncée, silhouette athlétique sèche, cheveux ras, barbe de trois jours ; bracelet de sport au poignet gauche, tenue technique près du corps (noir et orange).

## 8. À faire, à ne pas faire

- Faire : un ou deux mots colorés par titre, jamais toute la phrase.
- Faire : un seul appel à l'action par écran, toujours le même dégradé.
- Ne pas faire : de fond clair ailleurs que le pied.
- Ne pas faire : de texte blanc sur l'orange : le texte des boutons et de l'onglet actif reste noir.

## 9. Comportement responsive

- Behance ne montre que le bureau. Le téléphone est notre proposition.
- Sous 860 px : hero en colonne, photo sous le texte fondue par le haut ; cartes en colonne ; onglets en ligne au-dessus de la vidéo et de la fiche ; « Pourquoi » empilé.
- Sous 560 px : onglets empilés, vidéo en 4:3, pile du coach réduite.

## 10. Mouvement

- Moteur commun : `data-rv`, `data-parallaxe` sur les photos de la pile, `data-aimant` et `.reflet` sur les boutons, barre de progression en dégradé.
- Propre à N : la flèche « descendre » flotte ; le bandeau de mots défile ; les onglets changent le cours affiché.

## 11. Non mesuré, et choix tranchés seul

- La police (§3).
- La marque « IB30 », les textes, les dates (26, 27 et 28 janvier).
- La section programme a 3 vignettes (une par onglet) au lieu d'une.
- Le téléphone (§9).

## 12. Consigne pour l'IA

Construis une page de capture de coach sportif sur fond noir `#141414` strié de fines colonnes, en Bai Jamjuree. Le coach occupe la droite du hero, fondu dans le noir. Boutons en dégradé jaune `#FFD055` vers orange `#FF9E53`, texte noir. Trois cartes sombres à coin inégal avec tuile orange et trait orange au bas, celle du milieu relevée. Trois onglets de cours qui changent une vignette vidéo. Dates géantes blanc, or, orange derrière une pile de photos. Pied jaune.
