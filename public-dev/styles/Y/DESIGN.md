# DESIGN.md : Style Y « Nuit champagne » (d'après la page « Landing Page para Cirurgião Plástico », Jose Justo)

> **Source** : `inspi/behance/254909225/` (01.png bureau 2880 × 14406, 02.png téléphone 630 × 16212), page d'un chirurgien plasticien, Behance 254909225. Relevé le 16/11/2026.
> **Demande de Ruben** : pas de consigne de détail, lot du 16/11/2026.

## 1. Ambiance et intention

- Un chirurgien vendu comme une maison de luxe discrète : bleu nuit presque noir, blanc perle, et une seule touche champagne.
- Le ton est celui d'une conversation, pas d'une promesse : « avant toute chirurgie, il y a une conversation ».
- Trois signes reconnaissables : le **monogramme à la plume** dans un rond, entouré d'un texte qui tourne ; les **radiographies** lumineuses pour montrer les interventions sans montrer de corps ; les **grandes initiales manuscrites** en filigrane dans le fond.
- Le rythme alterne nuit et perle, avec des passages doux : encoche à flèche, coins de 60 px, vagues.
- Différent du Style D (médical) : ici serif fine Marcellus, nuit verdâtre `#09161C` et champagne, au lieu d'Inter et d'un bleu institutionnel.

## 2. Palette et rôles

Relevés au pixel (PIL) sur `01.png`.

- **Abysse** `#020D11` : fond du hero et du rendez-vous.
- **Nuit** `#09161C` : sections sombres, pied ; **nuit basse** `#061113` : bas du pied.
- **Ardoise** `#16272F` / `#172A31` → `#293A42` : cartes « réalise aussi » en dégradé.
- **Perle** `#F5F6F8` : sections claires ; **blanc** `#FFFFFF` : cartes, FAQ, panneau des étapes.
- **Champagne** `#BDA37E` → `#EEE1CF` : dégradé des boutons sur fond sombre ; bandeau `#C0A685` → `#D1BBA3` → `#ECDFCE`.
- **Or texte** `#DDC49D` : mots en couleur des titres sur la nuit, chiffres.
- **Bouton ardoise** `#0B181D` → `#4B585D` : boutons sur fond clair.
- **Encre** `#0B181D` : titres sur le clair, pastilles d'icônes, numéros.

## 3. Typographie

- Non nommée par l'auteur. Relevé à l'œil : serif fine à empattements évasés pour les titres ; grotesque nette pour le texte ; signature manuscrite pour le nom. Les plus proches sur Google Fonts : **Marcellus**, **Manrope**, **Pinyon Script** ; l'italique dorée « avant, pendant et après » en **Cormorant Garamond** italique.

| Rôle | Police | Taille bureau / téléphone | Graisse | Interligne | Approche |
|---|---|---|---|---|---|
| Titre du hero | Marcellus | 40 / 30 px | 400 | 1,18 | 0,01 em |
| Titre de section | Marcellus | 36 / 26 px | 400 | 1,2 | 0,01 em |
| Mot en italique doré | Cormorant Garamond italique | 1,12 em | 500 | 1,2 | 0 |
| Surtitre | Manrope capitales | 10,5 px | 500 | 1 | 0,06 em |
| Texte | Manrope | 11,5 à 14 px | 400 | 1,5 | 0 |
| Bouton | Manrope | 13 px | 600 | 1,2 | 0 |
| Signature | Pinyon Script | 22 à 24 px | 400 | 1 | 0 |
| Numéros | Marcellus | 11 px | 400 | 1 | 0 |

## 4. Composants

- **Bouton champagne** (sur la nuit) : 46 px, coins 7 px, dégradé `#BDA37E` → `#EEE1CF`, texte encre, rond blanc à flèche oblique.
- **Bouton ardoise** (sur le clair) : même forme, dégradé `#0B181D` → `#4B585D`, texte blanc, rond translucide.
- **Sceau** : rond nuit à initiales « LE » en Pinyon Script, entouré d'un texte en cercle qui tourne (22 s) ; posé sur le portrait du hero, à cheval sur le cadre de la conversation, au centre de la mosaïque.
- **Pastille de peur** : capsule blanche, petit tracé de pouls champagne.
- **Fil des 3 pas** : ronds cerclés reliés par un trait vertical.
- **Carte d'intervention** : moitié texte (titre serif, sous-titre en capitales soulignées d'un filet, étiquettes en capsules, bouton), moitié radiographie ; blanche sur le clair, ardoise sur la nuit, alternée.
- **Carte de soin** : blanche, coins 12 px, pastille d'icône encre ; rangée qui glisse (scroll-snap) avec 2 boutons ronds.
- **Frise des étapes** : carrés encre numérotés en serif, reliés par un trait.
- **Carte de garantie** : blanche, pastille d'icône encre, hauteurs inégales.
- **Chiffres vitrés** : cartouches translucides floutées sur la photo du rendez-vous.
- **FAQ** : rangées blanches à filet, « + » champagne qui tourne en « × » ; carte « Encore un doute ? » avec bouton WhatsApp.

## 5. Mise en page

- Colonne de 1000 px ; textes centrés resserrés à 780 px ; cartes d'intervention à 780 px.
- Ordre : hero, envie et peurs, conversation, interventions, « réalise aussi », le docteur, bandeau, suivi, étapes, garanties, rendez-vous, FAQ, pied.
- Passages : encoche à flèche sous le hero et avant « réalise aussi », panneau perle aux coins de 60 px qui monte sur la nuit, vague vers la section du docteur, vague claire en bas à droite du rendez-vous.
- Espacement vertical : 40 à 70 px, serré : la page enchaîne vite.

## 6. Profondeur et élévation

- Photos penchées (-6° et +8°) à cadre blanc de 3 px qui débordent des bords de la section « envie ».
- Ombres longues et bleutées sous les photos et les cartes blanches, jamais grises.
- Initiales géantes en filigrane (opacité 3 à 5 %) derrière le hero, la conversation, le suivi et la FAQ.

## 7. À faire, à ne pas faire

- Faire : le champagne seulement sur les boutons de la nuit, les mots-clés des titres et le bandeau.
- Faire : montrer les interventions par radiographie, jamais par un corps réel.
- Ne pas faire : de bleu vif ni de vert ; la nuit reste verdâtre `#09161C`.
- Ne pas faire : d'avant / après photo : la page vend la consultation, pas le résultat.

## 8. Comportement responsive

- Le téléphone suit 02.png : texte du hero d'abord, portrait dessous ; photos penchées empilées autour du texte ; cartes d'intervention en colonne (radiographie dessous) ; mosaïque gardée en 2 colonnes ; panneau des étapes en colonne ; garanties en 1 colonne ; chiffres vitrés sur la photo du rendez-vous.
- Sous 1000 px : nav réduite à la signature et au bouton Contact ; garanties en 2 × 2.

## 9. Mouvement

- Moteur commun : `data-rv`, `data-lignes` sur les titres, `data-aimant` sur les boutons, barre de progression champagne.
- Propre à Y : **le texte du sceau tourne** ; **la rangée de soins glisse** au doigt et aux boutons, démarrée au centre ; le « + » de la FAQ pivote.

## 10. Images

Le personnage : **Laurent Essomba**, 52 ans, Yaoundé, peau brun foncé, crâne rasé, barbe grise courte, mains soignées, sourire rassurant ; signature : tenue de bloc, montre classique à bracelet cuir. Ici chirurgien plasticien.

| id | Format | Section | Rôle | Laurent |
|---|---|---|---|---|
| Y-hero | 3:4 | hero | portrait au bureau, mains jointes, fondu dans la nuit | oui |
| Y-miroir | 3:4 | envie | femme de dos devant un miroir (photo penchée) | non |
| Y-patiente | 1:1 | envie | femme souriante, lumière de fenêtre (photo penchée) | non |
| Y-consultation | 3:4 | conversation | portrait au cabinet, montre visible | oui |
| Y-radio-sein | 3:4 | interventions | radiographie du buste | non |
| Y-radio-ventre | 3:4 | aussi | radiographie de l'abdomen | non |
| Y-radio-silhouette | 3:4 | aussi | radiographie taille et hanches | non |
| Y-apropos-1 | 3:4 | apropos | debout devant ses diplômes | oui |
| Y-apropos-2 | 4:3 | apropos | souriant à son bureau | oui |
| Y-apropos-3 | 4:3 | apropos | en tenue de bloc, mains jointes | oui |
| Y-apropos-4 | 3:4 | apropos | prend des notes en consultation | oui |
| Y-rdv | 4:3 | rdv | au bureau, prêt à recevoir, fondu à droite | oui |

- Commandes détaillées : `images/commandes.json`. Le hero et le rendez-vous sont des photos pleine hauteur : leur cadre suit la section, l'image est recadrée (`object-fit:cover`).

## 11. Non mesuré, et choix tranchés seul

- Les polices (§3).
- Le nom, les textes, les chiffres (20 ans, 2 000 chirurgies, adaptés à l'âge du personnage) ; aucun numéro d'Ordre inventé.
- Les 6 cartes de soin (la source en montre 4 entières et 2 coupées).
- La vague et l'encoche : redessinées en SVG, formes approchées.
- Le téléphone (§8) suit 02.png, sauf la mosaïque gardée en 2 colonnes.

## 12. Consigne pour l'IA

Construis une page de chirurgien plasticien en bleu nuit `#09161C`, blanc perle `#F5F6F8` et champagne `#BDA37E` → `#EEE1CF`. Titres en Marcellus fine, texte en Manrope, nom en Pinyon Script. Un sceau rond à initiales manuscrites, entouré d'un texte qui tourne, revient sur les portraits. Les interventions se montrent en radiographies lumineuses dans des cartes moitié texte, moitié image. Alterne nuit et perle avec des encoches, des coins de 60 px et des vagues. Les boutons sont champagne sur la nuit, ardoise sur le clair. Termine par un rendez-vous à chiffres vitrés et une FAQ blanche.
