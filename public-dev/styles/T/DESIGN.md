# DESIGN.md : Style T « Verdict 365 » (d'après la page « Página de Vendas - Adv Sustentável », Jared Simplicio)

> **Source** : `inspi/behance/254804569/01.jpg` (1920 x 23 833), page de vente d'une formation pour avocats, Behance 254804569. Relevé le 16/11/2026, découpé en 9 tranches de 1000 x 1600.
> **Demande de Ruben** : pas de consigne de détail, lot du 16/11/2026.

## 1. Ambiance et intention

- Une formation d'avocats vendue comme un dossier d'enquête : fond noir total, fils rouges tendus, portraits en noir et blanc.
- Le rouge dit l'urgence et la preuve (chiffres, garanties), le vert ne sert qu'à l'action (boutons, cartes « pour toi »).
- Trois panneaux blancs arrondis coupent la nuit : accès, méthode, résultats, garantie. Chacun porte une grille fine et un coin rose.
- Des chiffres géants en dégradé portent l'offre : **365** (garantie), **60** (programme IA), **12** (conférences), **GARANTIE**.

## 2. Palette et rôles

Relevé au pixel avec PIL sur l'image d'origine.

- **Noir** `#000000` : fond de page ; **carte** `#0B0B0B` : cartes, FAQ, bonus, tableau.
- **Rouge** `#C02020` : mots clés des titres, cartes d'étapes ; **rouge vif** `#E73535` : chiffres, puces, étiquettes mono.
- **Rouge profond** `#5F0403` et **lueur** `#660E0D` : bas des dégradés, halos en haut des sections sombres.
- **Bordeaux** `#2D0F0F` : cartes « ce n'est pas pour toi », duel « Arrête de ».
- **Vert bouton** `#00B043` : tous les boutons d'action, texte noir dessus.
- **Vert carte** `#0F2E1F`, filet `#134F33` : cartes « pour toi » ; **mousse** `#141F0F` : carte « Passe à ».
- **Rose** `#FEC2C2` : coin haut droit des panneaux blancs.
- **Gris texte** `#A29C9E` : texte courant sur noir ; **blanc** `#FFFFFF` : titres.

## 3. Typographie

- Non nommée par l'auteur. Relevé à l'œil : grotesque serrée, approche négative forte (Inter Display ou proche). La plus proche sur Google Fonts : **Inter Tight**. Les étiquettes en chasse fixe espacée : **JetBrains Mono**.

| Rôle | Police | Taille bureau / téléphone | Graisse | Interligne | Approche |
|---|---|---|---|---|---|
| Titre du hero | Inter Tight | 64 / 34 px | 600 | 1,08 | -0,035 em |
| Titre de section | Inter Tight | 50 / 28 px | 600 | 1,08 | -0,035 em |
| Chiffre géant | Inter Tight | 210 à 416 px | 700 | 1 | -0,06 em |
| Texte | Inter Tight | 15 à 18 px | 400 | 1,55 | 0 |
| Étiquette | JetBrains Mono | 10 à 11 px | 500 | 1 | 0,3 em, capitales |
| Prix du tableau | JetBrains Mono | 14 px | 500 | 1,4 | 0 |
| Bouton | Inter Tight | 15 px | 700 | 1,15 | -0,02 em, capitales |

## 4. Composants

- **Bouton** : pilule verte en dégradé, texte noir en capitales, flèche ; halo vert doux. Variante rouge pour le contact du suivi.
- **Logo** : un A rouge à flèche montante dessiné en SVG, nom sur deux lignes, petit « formation » mono rouge.
- **Carte à languette** : blanche, filet clair, une languette rouge sur le haut gauche, icône dans un carré filet.
- **Carte garantie 365** : rouge en dégradé vers le sang, chiffre 365 géant qui s'efface vers le bas.
- **Carte d'étape** : numéro mono, titre blanc ; une sur deux en rouge plein, l'autre noire à filet bordeaux.
- **Carte bonus** : noire, texte à gauche, visuel à droite, étiquette mono encadrée « BONUS 1 ».
- **Tableau de valeur** : lignes alternées, prix mono rouges, ligne total bordeaux.
- **Accordéon** : filets gris, plus rouge qui tourne à l'ouverture.
- **Séparateur** : filet rouge pleine largeur, rond noir à chevron au centre.

## 5. Mise en page

- Colonnes étroites et centrées : 1200 px (hero), 960 px (étapes, bonus), 830 px (tableau, FAQ, garanties).
- Lignes verticales très fines sur tout le fond noir (une tous les 10 %).
- Les panneaux blancs prennent toute la largeur, coins de 28 px.
- Rythme : une section, un bouton vert ; 90 à 130 px entre les sections.

## 6. Profondeur et élévation

- Profondeur par la lumière, pas par l'ombre : halos rouges en haut des sections, bandes rouges sur les bords du tableau de valeur.
- Le bouton de la méthode chevauche le bas du panneau blanc.
- Les chiffres géants passent derrière les arcs et les portraits.

## 7. À faire, à ne pas faire

- Faire : un seul vert, réservé à l'action.
- Faire : photos en noir et blanc dans les cartes de méthode et le portrait final.
- Ne pas faire : de texte rouge foncé `#7A1414` sur noir (contraste 2) ; les numéros d'étape passent à `#B42626`.
- Ne pas faire : de texte sous 12 px hors bureau large ; le Behance descend à 9 px, nous non.

## 8. Comportement responsive

- Behance ne montre que le bureau. Le téléphone est notre proposition.
- Sous 820 px : hero en colonne (photo d'abord), cartes d'accès, méthode, duel, bonus, garanties en une colonne ; étapes et ateliers en 2 colonnes, puis 1 sous 480 px.
- Le 60 géant passe à 190 px, le 365 à 110 px.

## 9. Mouvement

- Moteur commun : `data-rv` partout, `data-lignes` sur les titres, `data-aimant` sur les boutons, `.reflet` sur les deux boutons clés, barre de progression rouge.
- Propre à T : le plus de l'accordéon tourne en croix.

## 10. Non mesuré, et choix tranchés seul

- Les polices (§3).
- La marque « Cabinet Solide », la cohorte 9, les textes, les prix en FCFA (12 x 275 000 F, 3 000 000 F comptant), la garantie de 3 millions par mois.
- Les logos d'outils d'IA du Behance remplacés par des pastilles neutres ; le badge Zoom par une pastille « visio » ; les billets d'événement dessinés en CSS.
- La vidéo de témoignages devient un emplacement 16:9.
- Le téléphone (§8).

## 11. Images

Personnage : **Rodrigue Agbodjan**, 47 ans, Cotonou, peau brun foncé, cheveux poivre et sel très courts, barbe grise taillée court ; signature : lunettes demi-cerclées, costume avec pochette rouge. Il apparaît sur 8 images sur 12.

| id | format | rôle |
|---|---|---|
| T-hero | 3:4 | portrait du fondateur, fils rouges derrière |
| T-ecran | 4:3 | ordinateur sur socle de pierre, panneau d'accès |
| T-plan | 16:9 | carte « Le plan », noir et blanc |
| T-niches | 16:9 | carte « Les niches », noir et blanc |
| T-prospection | 16:9 | carte « La prospection », noir et blanc |
| T-accueil | 16:9 | carte « L'accueil client », main qui écrit |
| T-direct | 4:3 | séance de suivi en visio |
| T-temoignages | 16:9 | mosaïque de témoignages d'élèves |
| T-bonus-carnet | 3:4 | carnet des 14 niches |
| T-bonus-mentorat | 4:3 | mentorat de groupe |
| T-bonus-conferences | 1:1 | portrait buste devant le 12 |
| T-portrait | 3:4 | portrait final « Qui je suis », noir et blanc |

Les consignes complètes sont dans `images/commandes.json`.

## 12. Consigne pour l'IA

Construis une page de vente de formation sur fond noir total à fines lignes verticales, titres en Inter Tight 600 très serrés avec un mot clé en rouge `#C02020`, étiquettes en JetBrains Mono espacé rouge vif. Tous les boutons sont des pilules vertes `#00B043` à texte noir en capitales. Coupe la nuit par des panneaux blancs arrondis à grille fine et coin rose. Pose des chiffres géants en dégradé rouge qui s'efface (365, 60, 12) derrière les blocs clés. Damier de cartes d'étapes rouges et noires, bonus en cartes noires texte et visuel, tableau de valeur aux prix mono rouges, garanties en cartes blanches à filet rouge.
