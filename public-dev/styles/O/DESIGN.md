# DESIGN.md : Style O « Faisceau de scène » (d'après la page « Página de Vendas - Formação Oratória de Alto Impacto », Gustavo Loff)

> **Source** : `inspi/behance/240933795/01.png` (1505 × 16383 px), page de vente d'une formation à la prise de parole, Behance 240933795. Relevé le 16/11/2026.
> **Demande de Ruben** : pas de consigne de détail, lot du 16/11/2026.

## 1. Ambiance et intention

- Une page de vente longue et directe, qui parle fort : tout en capitales grasses, noir pur, orange en aplats.
- Le geste du hero : un faisceau orange vertical, comme un projecteur de scène, derrière l'oratrice.
- Un seul bouton répété partout : pilule vert lime qui luit, comme un néon. C'est la seule couleur froide de la page, elle ne sert qu'à l'action.
- Le rythme alterne noir, une respiration blanche, et deux bandes orange pleines.

## 2. Palette et rôles

- **Noir** `#000000` : fond de presque toute la page ; **nuit** `#101010` : le pied.
- **Orange** `#F5761D` : bande d'infos, carte d'appel, étiquettes « Cours », pastilles, en-têtes des formules, bande « Pourquoi », rangées de FAQ.
- **Vert lime** `#89F21B` : tous les boutons d'achat, avec un halo du même vert.
- **Blanc** `#FFFFFF` : titres, fond de la section d'appel, bouton sur orange.
- **Filigrane** `#EBEBEB` (relevé `#E1E1E1` à `#CFCFCF`) : le mot géant derrière la carte d'appel.
- **Filet** `#BABABA` : contour fin des cartes du programme, des formules, des lignes.
- **Rouge** `#FF2A1A` : le triangle d'alerte et « Les places sont limitées ».
- **Vert WhatsApp** `#2DC547` : le seul bouton de contact.

## 3. Typographie

- Relevé à l'œil : grotesque neutre, très proche d'**Inter** (Google Fonts), seule police de la page. Le logo est en Inter 900 italique.

| Rôle | Police | Taille bureau / téléphone | Graisse | Interligne | Approche |
|---|---|---|---|---|---|
| Logo | Inter italique | 30 px | 900 | 1 | -0,02 em, capitales |
| Titre du hero | Inter | 34 / 24 px | 700 | 1,3 | capitales |
| Titre de section | Inter | 30 / 24 px | 700 | 1,2 à 1,4 | capitales |
| Titre de cours | Inter | 18 px | 600 | 1,4 | capitales |
| Texte | Inter | 16 px | 400 | 1,4 à 1,5 | 0 |
| Prix | Inter | 100 / 54 px | 700 | 1,05 | -0,03 em |
| Bouton | Inter | 16 px | 700 | 1,2 | capitales |

## 4. Composants

- **Bouton néon** : pilule vert lime 48 px, texte noir en capitales, halo vert de 22 px qui grandit au survol.
- **Bande d'infos** : orange pleine sous le hero, 4 infos à pictogramme blanc (dates, heure, Zoom, places).
- **Carte d'appel** : orange, coins 14 px, titre en capitales blanches, bouton blanc ; elle chevauche un mot géant gris clair en italique.
- **Carte de cours** : filet gris, coins 16 px, étiquette orange « Cours 1 », titre en capitales, puces rondes orange à chevron.
- **Vignette vidéo** : carré, bouton lecture en verre dépoli.
- **Ligne de bénéfice** : rond orange à flèche, début en gras, filet gris dessous.
- **Carte « pour qui »** : filet gris, numéro dans un rond orange.
- **Formule** : en-tête orange, avantages en petites cartes à filet et coche orange, ancien prix barré, prix géant, bouton néon.
- **FAQ** : rangées orange pleines, rond blanc à « + » orange qui tourne en croix à l'ouverture ; le mot « FAQ » géant s'efface du blanc au noir.

## 5. Mise en page

- Colonne de 920 px ; les listes et grilles se resserrent à 560 à 710 px au centre.
- Ordre : hero et bande d'infos, appel (fond blanc), programme, résultats, ce que vous saurez faire, pour qui, offre, formatrice, pourquoi ce prix (bande orange), alerte, FAQ, contact, pied.
- Un bouton néon après chaque bloc de preuve.
- Espacement vertical : 90 à 120 px entre sections.

## 6. Profondeur et élévation

- Presque plat : des filets gris, pas d'ombre, sauf la grande ombre douce de la carte d'appel sur le blanc.
- La lumière fait la profondeur : halo vert des boutons, faisceau et lueur orange derrière les portraits.

## 7. Images

| Id | Format | Rôle |
|---|---|---|
| O-hero | 1:1 | Clarisse devant le faisceau orange, sourire ouvert |
| O-temoin-1 à O-temoin-4 | 1:1 | Vignettes des témoignages vidéo |
| O-mentore | 4:3 | Clarisse sur scène, micro serre-tête |
| O-scene-1 | 4:3 | Clarisse face à une salle pleine |
| O-scene-2 | 4:3 | Le public dans la salle |

- **Personnage** : Clarisse Mbarga, 45 ans, Yaoundé, peau brun moyen, cheveux naturels très courts grisonnants aux tempes, pommettes hautes, gestuelle ouverte ; grandes boucles d'oreilles géométriques, micro serre-tête discret.

## 8. À faire, à ne pas faire

- Faire : tout titre en capitales, une partie en orange.
- Faire : le vert lime pour l'action seulement, jamais pour un texte ou un décor.
- Ne pas faire : de texte blanc sur le vert lime (le texte des boutons reste noir).
- Ne pas faire : d'ombre portée sur le noir : la profondeur vient de la lumière.

## 9. Comportement responsive

- Behance ne montre que le bureau. Le téléphone est notre proposition.
- Sous 860 px : hero en colonne, portrait sous le texte, faisceau affiné ; titres de cours sous leur étiquette ; formatrice en colonne ; alerte et rappel des formules empilés.
- Sous 620 px : « pour qui » et avantages des formules en une colonne ; vignettes vidéo gardées en 2 colonnes.

## 10. Mouvement

- Moteur commun : `data-rv`, `data-parallaxe` sur le faisceau, le mot géant et les petites photos de la formatrice, `data-aimant` et `.reflet` sur les boutons, barre de progression orange.
- Propre à O : le halo vert des boutons s'intensifie au survol ; le « + » de la FAQ tourne en croix.

## 11. Non mesuré, et choix tranchés seul

- La police (§3).
- La marque « Parole d'impact », les textes, les prix en francs CFA (15 000 F et 35 000 F, au lieu de 75 000 F et 190 000 F).
- Le hero montre une seule personne (la source en montre deux).
- 4 vignettes de témoignages au lieu de 6.
- Le téléphone (§9).

## 12. Consigne pour l'IA

Construis une page de vente de formation à la prise de parole sur fond noir pur, en Inter capitales grasses. Un faisceau orange `#F5761D` vertical derrière l'oratrice dans le hero, puis une bande orange d'infos. Une carte orange sur fond blanc devant un mot géant gris clair en italique. Programme en 5 cartes à filet gris avec étiquette orange « Cours ». Tous les boutons en pilule vert lime `#89F21B` qui luit. Deux formules à en-tête orange et prix géant. FAQ en rangées orange pleines.
