# DESIGN.md : Style F « Lumière dorée » (d'après le site rarisondesigner.com, Rárison Lucas)

> **Source** : le site en ligne https://rarisondesigner.com/, relevé le 08/10/2026 (session `fe30eec0`) écran par écran en descendant, polices et couleurs lues dans le navigateur.
> **Demande de Ruben** : « copie conforme et surtout il y a des parties très propres, la carte qui déborde là avec les boutons devant et derrière ».
> **Même auteur que le style E** : Rárison Lucas signe aussi la page « Código do Crescimento ».

## 1. Ambiance et intention

- Le site d'un designer qui vend de l'autorité : noir profond, une seule lumière dorée, comme un projecteur sur une scène.
- Les titres sortent de l'ombre : chaque titre part du gris à gauche et finit en blanc ; un mot en italique doré porte la promesse.
- Les blocs arrivent flous et se mettent au point au défilement : le visiteur a l'impression que la page fait la mise au point sur lui.
- Une seule rupture claire : la bande gris perle du prix, d'où déborde une carte sombre.

## 2. Palette et rôles

- **Noir** `#000000` : le fond de la page.
- **Carte** `#111111` à `#171717` : dégradé vertical des cartes, filet blanc à 8 %.
- **Or brossé** : dégradé `#9C8350` vers `#E8D5A8` (boutons, pastille active, puces du prix) ; `#C9AE74` pour le mot doré.
- **Gris perle** `#E4E4E4` (mesuré) : la bande du prix.
- **Texte** `#8A8F96` sur noir, `#575C63` sur gris perle ; titres `#FFFFFF`.
- **Teintes des cartes projets** : chaque carte prend en haut la couleur de son projet (or, olive, émeraude, sable, rose, ambre) et finit en noir.

## 3. Typographie

- Relevé dans le navigateur : **SF Pro Display** (le texte, 57 blocs), **DM Sans** (les titres), **Manrope 300** (les paragraphes), **Benihana 800 italique** (les mots dorés).
- SF Pro et Benihana ne sont pas sur Google Fonts. Remplacements : **Inter** pour SF Pro, **Playfair Display 800 italique** pour Benihana.

| Rôle | Police | Taille bureau / téléphone | Graisse | Interligne | Approche |
|---|---|---|---|---|---|
| Titre du hero | DM Sans | 58 / 40 px | 400 | 1,12 | -0,02 em |
| Titre de section | DM Sans | 52 / 34 px | 400 | 1,15 | -0,02 em |
| Mot doré | Playfair Display | même taille | 800 italique | 1 | -0,01 em |
| Navigation, boutons | Inter | 18 à 19 px | 500 | 1 | -0,02 em |
| Titre de carte | Inter | 22 px | 500 | 1,38 | -0,02 em |
| Texte | Manrope / Inter | 17 à 20 px | 300 / 400 | 1,5 à 1,6 | 0 |
| Prix | Inter | 78 / 52 px | 400 | 1 | -0,02 em |

## 4. Composants

- **Barre de navigation** : verre sombre collé en haut (flou 18 px), 94 px de haut, coins 16 px, filet blanc à 12 %, bouton or à droite.
- **Bouton or** : 56 px, coins 12 px, dégradé or brossé, texte blanc avec ombre portée brune, halo doré dessous. Toujours suivi d'un **carré blanc** de 56 px avec une flèche, puis d'un lien gris.
- **Pastille de section** : 56 px de haut, coins 12 px, dégradé noir, filet, halo blanc très doux.
- **Carte projet** : coins 28 px, teinte du projet en haut, image aux coins 22 px, titre blanc sur 2 ou 3 lignes.
- **Carte d'étape** : coins 30 px, une étiquette en contour gris ; l'étape au centre de l'écran passe en or.
- **Carte de prix** : coins 24 px, dégradé `#3A3A3A` vers `#111`, prix qui se mélange avant de se poser, bouton or.

## 5. Mise en page

- Contenu : 1080 px au plus ; la bande du prix s'élargit à 1280 px en trois colonnes (pastille et marque, carte, liste).
- Projets : grille de 3 sur 2 lignes, 58 px d'écart. Étapes : 2 sur 2, la colonne de droite décalée de 8 px.
- Derrière la méthode : 4 filets verticaux qui s'effacent en haut et en bas.
- Espacement vertical : 110 à 150 px entre sections.

## 6. Profondeur et élévation

- **La carte qui déborde** : la carte de prix commence dans la bande gris perle et descend de 300 px dans le noir ; un coin noir en biais entame la bande en haut à droite. Le bouton or passe devant le bord de la bande, la pastille « Investissement » flotte à gauche.
- Les halos dorés remplacent les ombres sur les boutons ; les cartes noires portent une ombre noire profonde.
- Le hero : des pages de vente inclinées en 3D derrière le portrait, un halo de lumière blanche derrière la tête, des chiffres posés en surimpression.
- De petites étoiles respirent dans le noir.

## 7. À faire, à ne pas faire

- Faire : un seul mot doré par titre, à la fin de la phrase.
- Faire : bouton or, puis carré blanc, puis lien : toujours ce trio.
- Ne pas faire : de deuxième couleur vive. L'or est la seule lumière.
- Ne pas faire : de photos en couleur dans « C'est pour vous ? » : tout y est en noir et blanc.

## 8. Comportement responsive

- Sous 1000 px : la navigation se réduit au bouton menu ; le hero met la scène au-dessus du texte, centré ; projets et étapes en 1 colonne ; la bande du prix empile ses trois colonnes et la carte ne déborde plus.
- Sous 560 px : le bouton or de la barre disparaît, les cartes « pour vous » passent en 1 colonne.

## 9. Mouvement

- Moteur commun : `data-rv` partout, `data-compte` sur le premier chiffre, `data-parallaxe` sur le fond et les pages 3D, `data-incline` sur le portrait, `data-aimant` sur les boutons or, `.reflet` qui balaie les boutons, barre de progression dorée.
- **Net au défilement** (classe `.flou`) : les cartes arrivent floues (14 px) et se mettent au point en 1,1 s.
- **L'étape au centre** prend l'or (observateur au milieu de l'écran).
- **Le prix se mélange** : des signes au hasard (`?`, `_`, `<`, chiffres) puis le vrai montant se pose de gauche à droite.
- **La phrase finale** est éclairée par une lampe qui suit la souris (dégradé radial sur le texte).

## 10. Non mesuré, et choix tranchés seul

- Les polices remplacées (§3).
- Les images : portraits et pages remplacés par des silhouettes et des pages dessinées ; les photos noir et blanc de « pour vous » par des objets dessinés (livre, entonnoir, étiquette, pierre, lampe, miroir).
- Le prix : l'original le cache (« R$ ? ») ; le nôtre affiche un montant en francs après le mélange.
- Le sixième objet (miroir) : l'original en a cinq ; six remplissent la grille.
- Le téléphone : la carte de prix ne déborde plus sous 1000 px (elle recouvrait la liste).

## 11. Consigne pour l'IA

Construis une page noire éclairée par une seule lumière dorée. Titres en DM Sans 400 en dégradé du gris au blanc, un mot en Playfair Display italique doré à la fin. Barre de navigation en verre collée en haut, boutons or brossé suivis d'un carré blanc à flèche. Les cartes arrivent floues et se mettent au point. Une bande gris perle porte une carte de prix sombre qui déborde dans le noir en dessous. Termine par une grande phrase éclairée par la souris.
