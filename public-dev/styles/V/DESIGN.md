# DESIGN.md : Style V « Mosaïque dorée » ❗~~« Noir et or »~~ (même nom que P · 16/11/2026 17:05) (d'après la page « Landing Page - Golden Ads », Jean Lucas)

> **Source** : `inspi/behance/209134873/` (5 images : couverture, typographie, palette, titre, page entière de 1920 x 12 687 px), page de vente d'un mentorat en publicité en ligne, Behance 209134873. Relevé le 16/11/2026.
> **Demande de Ruben** : pas de consigne de détail, lot du 16/11/2026.

## 1. Ambiance et intention

- Un mentorat « gagner sa vie en ligne » vendu comme un club privé : noir profond, or chaud, lumière de studio.
- Le fondateur est partout : portrait du haut, vidéo, affiches de modules, carte de présentation. La page repose sur sa présence.
- Le fond n'est jamais vide : des tuiles de photos fantômes, presque noires, forment une mosaïque derrière le hero et la vidéo.
- Un seul geste de couleur : le bouton dégradé or pâle qui brille comme une lampe, répété après chaque section.

## 2. Palette et rôles

Relevés au pixel sur `05.png` (PIL) et confirmés par la planche `03.png` de l'auteur.

- **Noir** `#111111` : fond de page, pied, carte de prix sombre.
- **Graphite** `#1F1F1F` : cartes (excuses, méthode, pour qui, liste de l'offre, garanties), bande « Pour qui ».
- **Filet** `#2C2C2C` / `#3A3A3A` : contours des cartes, séparateurs.
- **Or** `#D99C63` (relevé `#D99C63` sur le titre du hero, `#DA9F67` sur le bonus) : titres en capitales, mots clés, nom du fondateur.
- **Or clair** `#F9C58C` : coches, icônes, gros prix sur fond sombre.
- **Dégradé du bouton** `#FFB862` vers `#F1D4B8` (valeurs de l'auteur ; relevé `#FAC381` à gauche, `#F5CA9B` à droite) : boutons, petit trait en haut des cartes.
- **Beige** `#EEE9E3` (relevé `#EDEAE4`) : carte de prix, bande FAQ.
- **Blanc cassé** `#EFEFEF` : texte courant sur noir.
- **Or foncé** `#9A6430` : gros prix sur la carte beige (choix pour le contraste, voir §10).

## 3. Typographie

- Nommée par l'auteur : **Inter** (planche « Tipografia »). Les affiches et le logo utilisent une serif fine à fort contraste : la plus proche sur Google Fonts, **Cormorant Garamond**.

| Rôle | Police | Taille bureau / téléphone | Graisse | Interligne | Approche |
|---|---|---|---|---|---|
| Accroche du hero (capitales or) | Inter | 24 / 19 px | 800 | 1,2 | -0,01 em |
| Texte principal du hero | Inter | 20 / 17 px | 400, mots clés 700 | 1,4 | 0 |
| Titre de section | Inter | 34 / 24 px | 600 à 700 | 1,2 | -0,02 em |
| Titre « phrase » (vidéo, douleur, méthode) | Inter | 26 / 20 px | 400 avec gras | 1,3 | 0 |
| Gros prix | Inter | 58 / 44 px | 800 | 1,05 | -0,03 em |
| Texte de carte | Inter | 11,5 à 14 px | 400 | 1,45 | 0 |
| Bouton | Inter | 12,5 px | 700, capitales | 1,25 | -0,01 em |
| Titre d'affiche, logo | Cormorant Garamond | 22 à 25 px | 400, capitales | 1 | 0,01 em |

## 4. Composants

- **Bouton** : 56 px de haut, pilule, dégradé `#FFB862` vers `#F1D4B8`, texte noir en capitales, halo doré flou. Sous chaque bouton, une ligne de petits moyens de paiement en capsules grises.
- **Logo** : monogramme dans une arche dorée en trait fin, nom en serif capitales, « Académie » espacé en dessous.
- **Barre d'excuse** : graphite, coins 5 px, tuile noire à icône or clair à gauche, mots clés en gras blanc.
- **Carte de méthode** : graphite, coins 8 px, un objet (tableau de bord, téléphones, ordinateur, dessinés en CSS) qui déborde par le haut.
- **Carte « pour qui »** : fond de la bande, filet gris, petit trait doré en haut à gauche, coche dans un rond fileté.
- **Affiche de module** : photo verticale qui se fond dans le noir, titre en serif doré capitales, petit monogramme dessous.
- **Capture d'élève** : carte blanche à liseré vert clair, montant en gros, phrases surlignées en jaune, réaction bleue.
- **Duo d'offre** : carte liste graphite (titre capitales or et blanc, coches, filets) face à une carte prix beige plus basse.
- **Carte de garantie** : graphite, trait doré en haut, icône ronde à cheval sur le bord, titre or.
- **Carte bonus** : image à gauche, badge « Bonus » en capsule, titre capitales or.
- **Carte « qui »** : grande carte noire filetée, portrait plein cadre à gauche, prénom en or.
- **FAQ** : bande beige, questions en petit sur filets gris, signe plus à droite.

## 5. Mise en page

- Colonne de 1040 px ; les blocs d'offre et de garantie se resserrent à 700 px, la carte « qui » s'élargit à 1000 px.
- Ordre : hero, vidéo, douleur, méthode (3 + 2 cartes), pour qui (bande graphite), modules (carrousel), preuves (carrousel), offre, garanties et bonus, qui, FAQ (bande beige), pied.
- Les carrousels sortent de la colonne et prennent toute la largeur, avec des points dorés en dessous.
- Espacement vertical : 60 à 90 px ; un bouton termine presque chaque section.

## 6. Profondeur et élévation

- Profondeur par la lumière, pas par l'ombre : halos chauds derrière le portrait, halo doré sous les boutons.
- Les objets des cartes de méthode débordent par le haut ; l'icône des garanties est posée sur le bord.
- Les photos d'affiches et du hero se fondent dans le noir par un masque en dégradé.

## 7. Images

| Id | Format | Section | Rôle |
|---|---|---|---|
| V-hero | 3:4 | hero | portrait du fondateur, mains jointes |
| V-video | 16:9 | video | image d'accroche de la vidéo, sujet à droite |
| V-mockup | 4:3 | douleur | ordinateur, tablette et affiches de la formation |
| V-module-1 à V-module-6 | 3:4 | modules | six affiches de modules |
| V-bonus | 4:3 | garanties | ordinateur en appel vidéo sur un bloc de béton |
| V-portrait | 3:4 | qui | portrait de présentation |

- **Personnage** : Ousmane Kanté, 32 ans, Conakry ; peau très foncée, twists courts, mâchoire carrée, regard intense ; signature : chaîne fine dorée, chemise en satin. Métier : formateur en publicité en ligne. Il apparaît sur les 11 images.
- Les consignes complètes sont dans `images/commandes.json`.

## 8. À faire, à ne pas faire

- Faire : un bouton doré après chaque section, avec sa ligne de paiements.
- Faire : réserver l'or aux mots qui vendent (sommet, résultats, offre, prénom).
- Ne pas faire : de fond plat sans texture derrière le hero ; garder la mosaïque fantôme.
- Ne pas faire : l'or `#D99C63` en texte sur le beige (contraste 2,2) : passer à `#9A6430`.

## 9. Comportement responsive

- Behance ne montre que le bureau. Le téléphone est notre proposition.
- Sous 820 px : hero en colonne (texte puis portrait), douleur en colonne, cartes de méthode et « pour qui » en 2 colonnes, offre, garanties, bonus et carte « qui » empilés.
- Sous 560 px : cartes en 1 colonne, boutons pleine largeur.
- Les carrousels restent des carrousels (glissé et points), seuls éléments qui bougent de côté.

## 10. Mouvement

- Moteur commun : `data-rv` partout, `data-lignes` sur les titres des modules et de la FAQ, `data-compte` sur le prix, `data-aimant` et `.reflet` sur les boutons, barre de progression dorée.
- Propre à V : les points des carrousels suivent le glissé et ramènent à la carte touchée.

## 11. Non mesuré, et choix tranchés seul

- La serif des affiches et du logo (§3).
- La marque « Kanté Ads Académie », les textes, les prix en FCFA (12 x 25 000 F ou 250 000 FCFA).
- Les captures d'élèves refaites en CSS, avec des chiffres fictifs.
- Les objets des cartes de méthode dessinés en CSS au lieu des maquettes photo.
- L'or foncé `#9A6430` du prix sur beige, pour passer le seuil des grands textes.
- Le téléphone (§9).

## 12. Consigne pour l'IA

Construis une page de vente de mentorat sur fond noir `#111111` avec des cartes graphite `#1F1F1F`. Titres en Inter, accroches en capitales or `#D99C63`, affiches en Cormorant Garamond doré. Chaque section finit par un bouton pilule dégradé `#FFB862` vers `#F1D4B8` qui brille, suivi d'une ligne de paiements. Le fondateur revient partout : portrait qui sort d'une mosaïque de photos fantômes, vidéo, carrousel d'affiches, grande carte de présentation. Termine par une carte liste graphite face à une carte prix beige, puis une FAQ sur bande beige.
