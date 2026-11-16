# DESIGN.md : Style J « Calque émeraude » (d'après la page « Página de Vendas e Área de Membros - Lançamento », Felipe Santos)

> **Source** : `inspi/behance/249402355/` (02.png = la page de vente, 1696 × 16 383 ; 04 à 18 = les vignettes de l'espace membres ; 01 = carte de fin de l'auteur, non reprise). Behance 249402355. Relevé le 16/11/2026.
> **Demande de Ruben** : pas de consigne de détail, lot du 16/11/2026.

## 1. Ambiance et intention

- La page de vente d'une formation de design sur Canva, mise en scène comme si on était **dans l'éditeur** : barres d'outils, poignées de sélection, barre latérale « Modèles, Éléments, Importer, Texte, Photos ».
- Vert mousse presque noir, des bandes claires gris perle pour respirer (le relevé bancaire, les résultats des élèves, les témoignages, le mentor).
- Le geste qui la signe : **le mot clé en serif italique fin, surligné en vert comme une sélection de texte, suivi d'un curseur qui clignote**.
- Objets en 3D posés dans la page : liasse de billets, diamant émeraude, orbe vert lumineux, sceau « 07 ».
- Différence avec E « Néon vert » (fond noir, néon partout) et K : ici le néon ne sert qu'aux boutons ; le reste est mousse, sauge et serif.

## 2. Palette et rôles (relevé au pixel, PIL, sur 02.png)

- **Nuit mousse** `#011100` (fond des grandes sections) ; `#051808` sous le hero.
- **Forêt** `#111C0D` (hero, carte du chiffre) ; **carte** `#1A2818` / `#1C2B18` (FAQ, cartes) ; `#242F20` (pastilles de modules).
- **Sauge** `#57743D` à `#65804E` : la barre d'éditeur sous le hero et le surlignage sur fond sombre.
- **Néon** `#00FF71` : boutons d'achat seulement, texte `#04210F` dessus (contraste 13,9).
- **Menthe pâle** `#CFE3C8` : surlignage sur fond clair ; **menthe** `#9FD39A` : serif italique sur fond sombre.
- **Perle** `#EFEFEF` / `#E4E4E4` : bandes claires ; encre `#121A10`.
- **Pied** `#283E22`. Croix rouges `#F0525A`.
- Cartes de prix : `#41654B` en haut (phare, filet néon) et `#41523E` (seconde).

## 3. Typographie

- Non nommées par l'auteur. Relevé à l'œil : grotesque géométrique (proche de Satoshi), serif didone italique étroite. Google Fonts les plus proches : **Plus Jakarta Sans** et **Instrument Serif** italique.

| Rôle | Police | Taille bureau / téléphone | Graisse | Interligne | Approche |
|---|---|---|---|---|---|
| Logo | Instrument Serif italique | 64 / 52 px | 400 | 1 | 0 |
| Titre du hero | Plus Jakarta Sans + serif italique | 34 / 26 px | 500 | 1,18 | -0,015 em |
| Titre de section | Plus Jakarta Sans | 20 à 36 px | 500 | 1,18 | -0,015 em |
| Mot clé | Instrument Serif italique | 1,12 em du titre | 400 | 1 | 0 |
| Titre éditorial (garantie, plateforme, bonus, mentor) | Instrument Serif italique | 26 à 48 px | 400 | 1,1 | 0 |
| Texte | Plus Jakarta Sans | 11 à 13,5 px | 400 | 1,55 | 0 |
| Bouton | Plus Jakarta Sans | 12 à 14 px | 800 | 1,2 | capitales |
| Prix | Plus Jakarta Sans italique | 34 px | 700 | 1 | -0,04 em |

## 4. Composants

- **Bouton néon** : pilule 54 px, `#00FF71`, halo vert, rond blanc à flèche ; lien WhatsApp prérempli. Variante menthe `#8DF0B4` sur la 2e offre.
- **Bouton verre** : pilule à filet clair, fond presque transparent (« Voir la liste des leçons »).
- **Cadre de sélection** (`.sel`) : filet clair décalé de 6 px et 4 poignées rondes, autour de la photo du hero et de la barre de texte.
- **Coins de visée** (`.vise`) : 4 équerres aux coins (transformation, garantie).
- **Surlignage + curseur** (`.surligne` + `.curseur`) : fond vert sur 84 % de la hauteur de ligne, barre de 2 px qui clignote.
- **Barre latérale d'éditeur** (`.lateral`) : 5 icônes légendées, inclinée de 3 à 4°.
- **Pile numérotée** : 4 cartes qui se chevauchent, flèche dans un rond blanc, chiffre géant en contour.
- **Carte de modules** : grille de 3 colonnes de pastilles à coche néon.
- **Tiroirs** : 4 cartes inclinées avec une languette claire en haut (le coffre créatif).
- **Bulles de discussion** : capture de messagerie sombre dans un cadre gris, phrase clé soulignée de jaune.
- **Sceau 07** : étoile à 4 branches dans un cercle, texte qui tourne autour.
- **Affiches de l'espace membres** : vignettes 2:3 claires ou sombres, un mot géant en serif italique.

## 5. Mise en page

- Colonne de 1080 px ; les cartes centrales tiennent entre 360 et 840 px, beaucoup d'air autour.
- Rythme sombre, clair, sombre : 3 bandes claires coupent la page (relevé, résultats, témoignages et mentor).
- Les sections sombres sont séparées par un filet fin et un petit rond au centre (le « point de jonction »).
- Espacement vertical : 60 à 90 px.

## 6. Profondeur et élévation

- Lueurs radiales vertes derrière les cartes, jamais d'ombre grise sur fond sombre.
- Les objets 3D (billets, diamant, orbe, appareils) sortent de leur carte.
- Mots géants en filigrane (« F 100 000 », « Calque », « Koffi ») à 3 à 4 % d'opacité.

## 7. À faire, à ne pas faire

- Faire : un seul mot clé en serif italique par titre, au plus trois.
- Faire : le curseur qui clignote seulement sur les titres surlignés.
- Ne pas faire : de néon ailleurs que sur les boutons d'achat.
- Ne pas faire : de texte gris sous `#A3AEA0` sur la nuit mousse (contraste minimum 7).

## 8. Comportement responsive

- Behance ne montre que le bureau. Le téléphone est notre proposition.
- Sous 900 px : hero en colonne, pages floues des services retirées, cartes en une colonne, ordinateur et fenêtre limités à 460 px.
- Sous 640 px : barre d'éditeur réduite à 3 outils, billets réduits, modules en une colonne, affiches en 2 colonnes, offres empilées.

## 9. Mouvement

- Moteur commun : `data-rv` partout, `data-parallaxe` sur les billets, `data-aimant` sur les boutons, barre de progression néon.
- Propre à J : **le curseur de texte clignote** derrière chaque mot surligné ; **le ruban défile** en italique capitales ; **le sceau 07 tourne** ; **le diamant scintille**.

## 10. Non mesuré, et choix tranchés seul

- Les polices (§3).
- La marque « Calque », le mentor Koffi Mensah (Lomé), les textes et les prix en F CFA (12 x 2 500 F, 12 x 4 500 F).
- Les 2 offres : la carte phare reste à gauche comme chez l'auteur ; chez nous elle est aussi la moins chère (chez lui, l'inverse).
- L'espace membres réduit à une section d'affiches (5 sur 15).
- Le téléphone (§8).

## 11. Images

Personnage : **Koffi Mensah**, 38 ans, Lomé, graphiste formateur ; peau brun foncé, crâne rasé net, barbe courte bien taillée, carrure moyenne, sourire calme ; signature : lunettes rondes fines à monture dorée, montre acier. Tenue : tee-shirt blanc ou veste vert sapin.

| id | Format | Rôle | Personnage |
|---|---|---|---|
| J-hero | 3:4 | Portrait du hero, dans le cadre de sélection | oui |
| J-appareils | 16:9 | Écran d'ordinateur ouvert sur l'espace élève | oui |
| J-ecran | 4:3 | Écran d'ordinateur, grille de vignettes de leçons | non |
| J-eleve-1 | 3:4 | Travail d'élève : affiche de mode | non |
| J-eleve-2 | 3:4 | Travail d'élève : visuel Instagram | non |
| J-eleve-3 | 3:4 | Travail d'élève : portfolio noir et blanc | non |
| J-cercle | 1:1 | Portrait rond de la recommandation | oui |
| J-affiche | 3:4 | Affiche éditoriale au centre de la transformation | oui |
| J-mentor | 3:4 | Le mentor assis, en pied | oui |
| J-bonus | 3:4 | Couverture de la classe de maître | oui |

## 12. Consigne pour l'IA

Construis une page de vente de formation en vert mousse presque noir `#011100`, avec des bandes gris perle `#EFEFEF`. Titres en Plus Jakarta Sans 500, chaque mot clé en Instrument Serif italique, surligné de vert comme une sélection de texte et suivi d'un curseur qui clignote. Mets la page dans un éditeur graphique : poignées de sélection autour de la photo, barre d'outils sous le hero, barre latérale d'icônes. Pose des objets 3D (billets, diamant, orbe vert). Le néon `#00FF71` ne sert qu'aux boutons d'achat. Termine par deux offres en cartes vertes, un sceau de garantie qui tourne et une FAQ en deux colonnes.
