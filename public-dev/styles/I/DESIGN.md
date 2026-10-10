# DESIGN.md : Style I « Rose scène » (d'après la page « Seja seu maior case », Jean Lucas)

> **Source** : `inspi/behance/256080557/01.png` (1920 × 8424), « Landing Page - Seja seu maior case », Behance 256080557. Relevé le 08/10/2026, session `fe30eec0`.
> **Demande de Ruben** : la mettre dans le lot de 5 (« Seja seu maior case »). Aucune consigne de détail : tout est relevé sur l'image.

## 1. Ambiance et intention

- Une méthode vendue par une social media à d'autres social media : ton complice, drôle, un peu insolent.
- Une page de carnet de collage : crème quadrillé, rose vif, blocs noirs, rubans de scotch imprimés, bords de papier déchiré, étoiles découpées, notes manuscrites.
- Tout penche un peu : étiquettes, cartes, rubans. Rien n'est parfaitement droit.

## 2. Palette et rôles

- **Crème** `#FFF9F6` (mesuré au pixel), quadrillé à 4,5 % de noir : le fond clair.
- **Rose** `#DE5DB8` (mesuré) : étoiles, ombres décalées, mots sur fond noir.
- **Rose soutenu** `#C44199` : les sections roses et les encadrés à texte blanc (le rose mesuré ne porte pas le blanc : contraste 3,1).
- **Rose foncé** `#B83A93` : mots roses sur fond crème.
- **Rose pâle** `#FCD3EE` / `#F6B9E2` : grandes étoiles de fond.
- **Noir** `#111111` (mesuré) : blocs, boutons, FAQ ; `#1E1E1E` pour les cartes sur noir.
- **Violet message** `#6A3DE8` : seulement dans les bulles des messages reçus.

## 3. Typographie

- Non nommée par l'auteur. Relevé à l'œil : grotesque serrée, approche très négative. La plus proche sur Google Fonts : **Inter Tight**. Notes manuscrites : **Gochi Hand**.

| Rôle | Police | Taille bureau / téléphone | Graisse | Interligne | Approche |
|---|---|---|---|---|---|
| Logo | Inter Tight | 34 px | 600 | 0,86 | -0,06 em |
| Titre du hero | Inter Tight | 46 / 31 px | 500 | 1,08 | -0,045 em |
| Titre de section | Inter Tight | 30 à 40 / 27 px | 500 à 600 | 1,1 à 1,2 | -0,035 em |
| Texte | Inter Tight | 15 à 18 px | 400 | 1,55 | 0 |
| Étiquette | Inter Tight | 12 à 13 px | 500 à 600 | 1 | 0 |
| Note manuscrite | Gochi Hand | 19 à 21 px | 400 | 1,4 | 0,01 em |
| Prix | Inter Tight | 120 / 76 px | 600 | 1 | -0,06 em |

## 4. Composants

- **Encadré** : le mot important dans un rectangle rose soutenu, texte blanc, filet noir de 1,5 px (sur noir : filet blanc).
- **Bouton** : pilule noire (ou blanche sur noir), 50 px, rond rose à cœur à droite, **ombre rose décalée** de 4 px. Le cœur bat au survol.
- **Ruban** : bande de 34 px, bords noirs, phrases en capitales douces qui défilent ; deux rubans croisés (rose et noir).
- **Bloc noir** : coins 30 px, quadrillage blanc à 5 %, ombre rose décalée de 6 × 8 px.
- **Étiquette** : pilule blanche à filet noir et ombre noire décalée, posée de travers.
- **Carte de module** : carte blanche à ombre rose, un cartouche noir qui déborde en haut (titre, numéro dans une pastille rose), un dessin au trait dessous, une étoile rose au coin. Les cartes penchent et se redressent au survol.
- **Ticket de prix** : bloc noir à deux encoches rondes, étiquette rose penchée qui dépasse en haut, mensualité dans une ellipse rose, total géant.
- **Message reçu** : capture de messagerie dessinée (tête, story, bulles grises et violettes).

## 5. Mise en page

- Colonne de 1040 px. Les blocs noirs chevauchent la frontière entre deux fonds (rose puis crème).
- Hero : texte à gauche, collage à droite (photo sur carte rose penchée, publications flottantes, compteurs de vues).
- Les sections se séparent par des **bords déchirés** (crème vers rose, blanc vers noir, noir vers rose) et par une **pastille à flèche** rose au milieu.
- Espacement vertical : 60 à 150 px.

## 6. Profondeur et élévation

- Aucune ombre floue sur les éléments principaux : des **ombres pleines décalées** (rose ou noire), comme un collage.
- Les rubans du prix passent derrière le ticket, floutés (2 px), pour donner de la profondeur.
- Les étoiles découpées débordent des blocs.

## 7. À faire, à ne pas faire

- Faire : un encadré rose par titre, au plus.
- Faire : pencher les petits éléments (2 à 12°), jamais les blocs de texte.
- Ne pas faire : de texte blanc sur le rose mesuré `#DE5DB8` : prendre `#C44199`.
- Ne pas faire : d'ombre floue grise. L'ombre est pleine et décalée.

## 8. Comportement responsive

- Behance ne montre que le bureau. Le téléphone est notre proposition.
- Sous 900 px : tout passe en une colonne, le collage du hero sous le texte, modules en 2 colonnes, chats de la FAQ masqués.
- Sous 560 px : modules en 1 colonne, ticket sans encoches, étiquette du ticket sur deux lignes, prix à 76 px.

## 9. Mouvement

- Moteur commun : `data-rv` partout, `data-compte` sur le prix, `data-parallaxe` sur les photos, `data-incline` sur la feuille et la photo, `data-aimant` sur les boutons, `.reflet` sur les boutons, barre de progression rose vers noir.
- Propre à I : **les rubans défilent** en sens opposés (40 s) ; **le tampon tourne** (22 s) ; **le cœur bat** au survol du bouton ; **les modules se redressent** au survol ; **le carrousel** de messages défile par flèches.

## 10. Non mesuré, et choix tranchés seul

- Les polices (§3).
- La méthode : « SSCMC » devient « ÉCLAT » (évidence, capacité, légitimité, avantage, tisser le lien).
- Les images : personnes en silhouettes, téléphones et messages dessinés, dessins au trait refaits en SVG, chats de la FAQ remplacés par des médaillons « ? » et « ! ».
- Le rose des sections foncé pour le contraste (§2).
- Le prix en euros : 12 × 17 € ou 197 € comptant.
- Le téléphone (§8).

## 11. Consigne pour l'IA

Construis une page de vente façon carnet de collage : fond crème quadrillé `#FFF9F6`, sections rose `#C44199`, blocs noirs `#111` à ombre rose pleine décalée. Titres en Inter Tight 500 très serrés, un mot clé encadré en rose. Deux rubans imprimés se croisent et défilent. Les sections se séparent par des bords de papier déchiré. Des étoiles découpées, des étiquettes penchées et des notes en Gochi Hand partout. Le prix tient dans un ticket noir à encoches avec une étiquette rose penchée.
