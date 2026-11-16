# DESIGN.md : Style R « Violet atelier » (d'après la page « Lançamento - Marcelo Kimura », Diego Henrique)

> **Source** : `inspi/behance/201269095/` (6 images : couverture, palette, typographie, boutons, prototype bureau 1920 px, fin), page d'inscription à un atelier en ligne de design « ID Lab », Behance 201269095. Relevé le 16/11/2026.
> **Demande de Ruben** : pas de consigne de détail, lot du 16/11/2026.

## 1. Ambiance et intention

- Un designer qui vend un atelier de 2 jours : la page alterne photos de lui en pleine largeur, aplats violets et grandes bandes presque noires.
- Le ton est celui d'un studio : filets fins, pastilles en capitales espacées, curseur et poignées de logiciel de dessin.
- Le blanc et le ciel lavande servent de respiration entre les blocs sombres ; le violet guide l'œil, le rose ne sert qu'au bouton d'achat.

## 2. Palette et rôles

Relevé au pixel (PIL) sur `05.png` et `02.png` (la planche « Cores » donne les mêmes valeurs).

- **Violet** `#7A67D6` relevé (`#7967D6` au pixel) : aplat « Pourquoi participer », lot ouvert, tuile logo. Pour le texte blanc, foncé à `#7360D3` (4,8 au lieu de 4,4).
- **Violet profond** `#5F49B9` : bouton billet, étiquette du nom, logo.
- **Lilas** `#AFB3F2`, **brume** `#CED1F7`, **nacre** `#E4E6FB` : bandeau du lot ouvert, formes, emplacements vides.
- **Ciel** `#EFF2FA` : fond de la section « Secrets ».
- **Rose** `#FF3175` : accent ; bouton d'achat foncé à `#E01A60` pour le texte blanc (4,7).
- **Nuit** `#0F0F11` : toutes les bandes sombres ; **nuit du pied** `#1C1B20`.
- **Ardoise** `#5D5E66` : bouton du lot fermé.
- **Menthe** `#A6F5DD` : forme du visuel « Pourquoi si peu cher » et première pastille.
- Halo violet `rgba(95,73,185,.35)` en dégradé radial derrière les blocs sombres.

## 3. Typographie

- L'auteur nomme « Kimura Sans » (police de marque). Plus proche sur Google Fonts : **Red Hat Display** (grotesque géométrique, a à deux étages, gras ronds).

| Rôle | Police | Taille bureau / téléphone | Graisse | Interligne | Approche |
|---|---|---|---|---|---|
| Titre du hero | Red Hat Display | 42 / 28 px | 800 | 1,12 | -0,02 em |
| Titre de section | Red Hat Display | 46 / 30 px | 800 | 1,12 | -0,02 em |
| Pastille de rubrique | Red Hat Display | 10,5 px | 600 | 1 | 0,2 em, capitales |
| Texte | Red Hat Display | 14 à 16 px | 400 | 1,6 | 0 |
| Bouton | Red Hat Display | 13 px | 700 | 1,2 | capitales |
| Prix | Red Hat Display | 40 / 30 px | 800 | 1 | -0,02 em |
| Nom géant du pied | Red Hat Display | 280 / 80 px | 800 | 0,9 | contour 1 px |

## 4. Composants

- **Bouton billet** : violet profond, capitales blanches, talon blanc carré avec un ticket ; lien vers les lots.
- **Bouton d'achat** : rose, coins 5 px, ombre pleine décalée en bas à gauche (`-8px 8px 0 #1E1E24`) qui se resserre au survol ; version ardoise pour le lot fermé.
- **Pastille de rubrique** : capsule à filet 1 px, capitales espacées (« DESIGN », « ÉVÉNEMENT EXCLUSIF »).
- **Carte de lot** : bandeau haut avec deux étiquettes (« Labo » plein, « Lot 1 » à filet), montant gras, bouton, jauge circulaire des places.
- **Tableau à filets** : 4 lignes, la première en violet, une colonne de note à droite.
- **Carte formateur** : curseur triangulaire violet et étiquette du nom (comme dans un logiciel de dessin), photo fondue dans le noir, tampon rond qui tourne.
- **Invité mystère** : carte sombre, silhouette en dégradé gris, « Qui suis-je ? ».
- **Tablette** : dessinée en CSS, certificat lavande à l'écran, stylet.
- **Cases cochées** : carrés bleus `#4964D8`, lignes encadrées d'un filet gris.
- **FAQ** : accordéon natif, triangles blancs qui tournent, filets gris.

## 5. Mise en page

- Colonne de 1040 px ; les photos du hero et de « Quand et comment » prennent toute la largeur en 16:9, texte posé dessus.
- Ordre : hero photo, pourquoi (photo et aplat violet), design et marché (nuit), secrets (ciel), quand (photo), prix et « si peu cher » et avantages (blanc), formateur, réalisations, invités, certificat, résumé, pour qui (nuit), FAQ (nuit, photo à droite), pied.
- Espacement vertical : 90 à 130 px.

## 6. Profondeur et élévation

- Peu d'ombres : la profondeur vient des halos violets flous derrière les blocs sombres et des photos fondues dans le noir.
- Les autocollants de marques débordent du mockup d'affiche ; le tampon déborde de la carte formateur.
- Seul le bouton rose porte une ombre dure.

## 7. À faire, à ne pas faire

- Faire : une pastille de rubrique au-dessus de chaque titre important.
- Faire : remontrer le formateur en photo à chaque grande étape (hero, pourquoi, quand, formateur, FAQ).
- Ne pas faire : de rose ailleurs que sur l'achat et la jauge.
- Ne pas faire : de texte blanc sur `#7A67D6` en petite taille : foncer à `#7360D3`.

## 8. Comportement responsive

- Behance ne montre que le bureau. Le téléphone est notre proposition.
- Sous 820 px : les photos pleine largeur restent en 16:9 en haut, le texte passe dessous sur la nuit ; toutes les grilles en une colonne ; mosaïque en 2 colonnes ; la photo de la FAQ passe au-dessus des questions.

## 9. Mouvement

- Moteur commun : `data-rv` partout, `data-lignes` sur les titres, `data-aimant` sur les boutons, barre de progression violette, `.reflet` sur le bouton billet.
- Propre à R : le **tampon « Immersion · Labo Marque » tourne** (16 s) ; l'ombre dure du bouton rose se resserre au survol.

## 10. Images

Le personnage : **Thierry Kalala**, 36 ans, Kinshasa, peau brun foncé, cheveux courts bouclés, barbe pleine courte, épaules larges ; signature : lunettes rectangulaires noires, sweat uni. Designer d'identité visuelle et formateur. Il apparaît sur 6 images sur 12.

| id | format | rôle | personnage |
|---|---|---|---|
| R-hero | 16:9 | photo pleine largeur du hero, au bureau | oui |
| R-nuancier | 1:1 | « Pourquoi participer », nuancier en main | oui |
| R-affiche | 4:3 | mockup d'affiches sur un immeuble | non |
| R-tablette | 16:9 | « Quand et comment », sur une tablette | oui |
| R-portrait | 9:16 | « Pourquoi si peu cher », portrait studio | oui |
| R-formateur | 4:3 | carte formateur | oui |
| R-projet-1 | 1:1 | réalisation : livret rouge | non |
| R-projet-2 | 1:1 | réalisation : affiche rose | non |
| R-profil-1 | 4:3 | pour qui : reconversion | non |
| R-profil-2 | 4:3 | pour qui : débutante | non |
| R-profil-3 | 4:3 | pour qui : confirmé | non |
| R-faq | 3:4 | FAQ, clair-obscur à la lampe | oui |

Consignes complètes : `images/commandes.json`.

## 11. Non mesuré, et choix tranchés seul

- La police (§3).
- La marque « Labo Marque », l'organisateur « Kin Créative », les textes, les prix en FCFA (lot 1 à 9 900 FCFA).
- Les logos du portfolio et les autocollants : dessinés en CSS ou SVG, noms inventés.
- Le violet et le rose foncés pour le contraste (§2).
- Écarts : la couverture (bordure festonnée, poignées de sélection autour du logo) et le ticket QR de fin ne sont pas des sections de la page, non repris ; les 3 cartes d'invités gardent leurs silhouettes.
- Le téléphone (§8).

## 12. Consigne pour l'IA

Construis une page d'inscription à un atelier en ligne de design en violet `#7360D3`, nuit `#0F0F11` et blanc, avec un ciel lavande `#EFF2FA` pour respirer. Tout en Red Hat Display, titres en 800. Le formateur revient en photo pleine largeur (hero, « Quand et comment ») et en carte avec un curseur violet et son nom en étiquette. Chaque titre porte une pastille en capitales espacées. Termine par deux lots en cartes, le lot ouvert en violet avec un bouton rose à ombre dure décalée, puis la FAQ sur la nuit et un nom géant en contour dans le pied.
