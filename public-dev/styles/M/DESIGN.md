# DESIGN.md : Style M « Verre bleu nuit » (d'après la page « Página de Vendas - Milhas e Crédito », Felipe Santos)

> **Source** : `inspi/behance/210639047/01.jpg` (1920 × 13607), page de vente d'une formation aux miles aériens et aux cartes de crédit « Expert em Milhas », Behance 210639047. Relevé le 16/11/2026.
> **Demande de Ruben** : pas de consigne de détail, lot du 16/11/2026.

## 1. Ambiance et intention

- Une formation pour voyager moins cher grâce aux cartes et aux miles : salle d'embarquement la nuit, écrans, reflets bleus.
- Bleu nuit partout, un cyan électrique pour les mots qui comptent et les boutons, un cyan pâle pour le pied.
- Le geste fort : **le verre**. Cartes translucides floutées (calendrier, prix), cartes d'avantages posées en éventail dont la dernière penche, notifications de points qui flottent autour de la personne.
- La preuve passe par des interfaces : relevés de points, écrans de réservation, cartes bancaires.

## 2. Palette et rôles

Relevé au pixel avec PIL (quantification par zone) sur l'image source.

- **Nuit** `#0D1423` : le fond de toute la page ; **nuit 2** `#0B111C` : la bande du nom.
- **Carte** `#141D30` et `#101829` : cartes d'avantages, cadre du parcours ; **FAQ** `#1F2631`.
- **Cyan** `#4FDAFE` : boutons (dégradé vers `#8BE4FF`), filets, barres sous les cartes.
- **Cyan vif** `#0DACF4` : mots en couleur des titres ; **bande du logo** `#3EC3FC`.
- **Cyan pâle** `#8BE4FF` : le pied.
- **Sans** `#322125` (bordeaux nuit, filet rouge) et **avec** `#012F50` (bleu pétrole, filet cyan) : le duel.
- **Rouge** `#F0606A` : jour coché du calendrier, prix barré ; **or** `#FFD02B` : étoiles et pastille bonus.
- **Texte** `#C9D3E2` ; **texte doux** `#93A0B5`.

## 3. Typographie

- Non nommée par l'auteur. Relevé à l'œil : grotesque un peu carrée, terminaisons droites, chiffres larges. La plus proche sur Google Fonts : **Bai Jamjuree** (titres et texte). Le logo et le grand « FAQ » sont en capitales très larges : **Michroma**.

| Rôle | Police | Taille bureau / téléphone | Graisse | Interligne | Approche |
|---|---|---|---|---|---|
| Titre du hero | Bai Jamjuree | 42 / 30 px | 500 | 1,15 | -0,01 em |
| Titre de section | Bai Jamjuree | 38 / 26 px | 500 | 1,15 | -0,01 em |
| Logo, grand FAQ | Michroma | 32 et 104 px | 400 | 1 | 0,02 em, capitales |
| Prix | Bai Jamjuree | 60 / 46 px | 600 | 1 | -0,03 em, dégradé cyan |
| Grand 7 | Bai Jamjuree | 230 / 160 px | 600 | 0,8 | dégradé qui s'efface |
| Texte | Bai Jamjuree | 12,5 à 15 px | 400 | 1,6 | 0 |
| Bouton | Bai Jamjuree | 14 px | 700 | 1,2 | capitales |

## 4. Composants

- **Bouton** : pilule de 48 px, dégradé cyan, texte nuit, double halo cyan ; reflet au survol.
- **Logo** : « EXPERTE » en Michroma blanc sur une bande cyan « EN MILES ».
- **Notification de points** : petite carte de verre cyan, en-tête « Relevé de points · il y a 2 h », ligne en gras, flotte doucement ; les dernières s'effacent.
- **Carte de verre** : fond translucide, flou de 14 px, filet blanc à 12 %, reflet en haut.
- **Calendrier** : carte de verre devant une carte pleine et une bille de verre, jour en rouge lumineux, curseur avion de 0 F à +950 000 F.
- **Éventail d'avantages** : 5 cartes qui se chevauchent avec ombre à gauche, onglet cyan, icône en tuile dégradée ; la 5e penche de 6° et toutes se redressent au survol.
- **Écrans de réservation** : trois interfaces (claire, sombre, claire) en points, posées sur un cadre avec une barre cyan.
- **Duel sans / avec** : deux colonnes, bordeaux à croix rouges, bleu pétrole à coches cyan, mots soulignés.
- **Parcours** : une carte bancaire dans un porte-carte (glisse au survol) face à une étape à icône.
- **Carrousel de modules** : cartes 9:16, glissé avec accroche, flèches et tirets ; les bords s'effacent.
- **Programme** : liste à filets, nombre de leçons en cyan, bouton blanc lumineux « + Tout voir ».
- **Bonus** : pastille or, prix barré, appel vidéo avec liste de salons à gauche et commandes d'appel.
- **Carte prix** : verre entre deux cartes en retrait, prix en dégradé cyan, barre cyan au pied.
- **Sceau** : cercle nuit, texte qui tourne, étoiles or, avion dans un rond cyan, grand 7 en dégradé derrière.
- **Avis** : deux rangées de cartes qui défilent en sens contraires, bords effacés, pause au survol.
- **FAQ** : « FAQ » géant en dégradé à gauche, accordéon numéroté à droite.

## 5. Mise en page

- Colonne de 860 à 1000 px ; trame de 6 colonnes verticales très fines sur plusieurs sections.
- Les sections sont séparées par des filets cyan très légers ; la garantie est coupée par une encoche trapèze au centre de son bord haut.
- Alternance visuel / texte en deux colonnes (calendrier, garantie, FAQ), le reste centré.
- Espacement vertical : 80 à 100 px.

## 6. Profondeur et élévation

- Le verre fait la profondeur : flou d'arrière-plan, reflet en haut, ombre de 60 px.
- Les cartes se superposent (éventail, carte prix entre deux cartes, calendrier devant sa carte).
- Halos radiaux bleus derrière la personne et sous les avantages.

## 7. Images

| id | format | rôle | personnage |
|---|---|---|---|
| M-hero | 3:4 | portrait du hero, arche arrondie | oui |
| M-module-intro | 9:16 | module 01, bien débuter | oui |
| M-module-voyages | 9:16 | module 02, voyages économiques | oui (de dos) |
| M-module-fidelite | 9:16 | module 03, carte de fidélité | non |
| M-module-cartes | 9:16 | module 04, carte de crédit | non |
| M-module-salons | 9:16 | module 05, salon privé | non |
| M-module-revente | 9:16 | module 06, revendre ses miles | oui |
| M-bonus | 16:9 | l'appel vidéo de la communauté | oui |
| M-portrait | 1:1 | l'experte devant son arche | oui |

- **Personnage** : Rokia Touré, 41 ans, Dakar ; peau brun foncé, visage rond, foulard noué haut sur la tête, port de tête droit ; signature : lunettes œil-de-chat, foulard noué haut. Métier : experte en miles et en cartes de voyage.
- Le calendrier, les écrans de réservation, les cartes bancaires, les notifications et le sceau sont dessinés en CSS.

## 8. À faire, à ne pas faire

- Faire : du verre sur les cartes qui portent une information clé (calendrier, prix).
- Faire : un mot cyan par titre, souvent sur la 2e ligne.
- Ne pas faire : de vraies marques de compagnies ou de banques (noms fictifs : Air Horizon, Carte Platine, Banque du Fleuve).
- Ne pas faire : de texte doux sous `#93A0B5` sur la nuit (contraste).

## 9. Comportement responsive

- Behance ne montre que le bureau. Le téléphone est notre proposition.
- Sous 900 px : l'éventail passe en grille de 3 sans chevauchement, la carte prix monte au-dessus de ses deux listes.
- Sous 820 px : hero, calendrier, garantie et FAQ en une colonne ; écrans de vol en 2 puis 1 ; duel empilé ; parcours empilé ; plus d'encoche sur la garantie.
- Sous 520 px : avantages en 1 colonne, liste des salons sous l'appel vidéo, notifications réduites.

## 10. Mouvement

- Moteur commun : `data-rv`, `data-lignes`, `data-aimant`, barre de progression cyan.
- Propre à M : **les notifications flottent** (6 s, décalées) ; **le texte du sceau tourne** (26 s) ; **les avis défilent** en deux rangées contraires ; **l'éventail se redresse** au survol ; la carte bancaire glisse hors du porte-carte ; le carrousel glisse au doigt et aux flèches.

## 11. Non mesuré, et choix tranchés seul

- Les polices (§3).
- La marque « Experte en miles », les textes, les noms, les prix en FCFA (350 000 F barré, 12 × 14 900 F, 149 000 F comptant ; bonus 65 000 F offert).
- Les compagnies, banques et trajets (Dakar, Abidjan, Casablanca) sont fictifs ou génériques.
- Les avatars des avis sont des initiales.
- Le téléphone (§9).

## 12. Consigne pour l'IA

Construis une page de vente de formation aux miles sur fond bleu nuit `#0D1423`, accent cyan `#4FDAFE` et `#0DACF4`, pied cyan pâle. Titres en Bai Jamjuree 500, logo et « FAQ » géant en Michroma. Mets du verre partout où l'information compte : calendrier, carte prix, notifications de points qui flottent autour de la personne. Les cinq avantages se chevauchent en éventail, le dernier penche. Termine par un sceau tournant avec un avion et un grand 7 en dégradé, puis des avis qui défilent.
