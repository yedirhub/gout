# DESIGN.md : Style W « Bleu clinique » (d'après la page « Site Institucional - MedicZ Empresas », Jean Lucas)

> **Source** : `inspi/behance/253385723/01.png` (1920 x 7 867 px), page d'accueil institutionnelle d'une offre de télémédecine pour entreprises, Behance 253385723. Relevé le 16/11/2026.
> **Demande de Ruben** : pas de consigne de détail, lot du 16/11/2026.

## 1. Ambiance et intention

- Un site d'entreprise, pas une page de vente : il présente, rassure et mène vers une demande de proposition.
- Propre comme une clinique : blanc, gris très pâle, bleu vif pour l'action, bleu marque pour les grands aplats.
- L'application est le héros : tablette et téléphone mis en scène, entourés de petites bulles bleu pâle qui nomment les services.
- Chaque bloc s'ouvre sur une petite pastille bleue qui dit de quoi on parle.

## 2. Palette et rôles

Relevés au pixel sur `01.png` (PIL).

- **Bleu vif** `#125CFE` : boutons pleins, chevrons de la FAQ, phrase finale en lien.
- **Bleu marque** `#005AB2` (relevé `#005AB2`) : bande derrière la tablette, carte de formule vedette, pied, filets des listes.
- **Marine** `#0D2D3D` (relevé `#0D2D3D`) : titres ; **bleu nuit** `#021B52` : le logo.
- **Texte** `#484F58` ; **texte doux** `#6B7076` (relevé `#7E8182`, foncé pour le contraste).
- **Fond gris** `#EFF1F3` : hero, formules, application ; **bleu pâle** `#F0F6FF` : panneaux et encarts.
- **Pastille** `#E4EDFF` avec texte `#2350C9` (relevé `#325FE2`, foncé pour le contraste).
- **Vert** `#1FA35B` : coches ; **jaune** `#FFC83D` : badge « La plus choisie ».

## 3. Typographie

- Non nommée par l'auteur. Relevé à l'œil : grotesque serrée, titres en graisse moyenne, approche négative. Le plus proche sur Google Fonts : **Inter Tight** pour les titres, **Inter** pour le texte.

| Rôle | Police | Taille bureau / téléphone | Graisse | Interligne | Approche |
|---|---|---|---|---|---|
| Titre du hero | Inter Tight | 44 / 30 px | 500 | 1,12 | -0,03 em |
| Titre de section | Inter Tight | 30 à 36 / 24 px | 500 (2e ligne en 600) | 1,12 | -0,03 em |
| Titre de carte | Inter Tight | 17 px | 600 | 1,12 | -0,015 em |
| Logo | Inter Tight | 26 px | 800 | 1 | -0,05 em |
| Texte | Inter | 12 à 13,5 px | 400, gras 600 | 1,55 | 0 |
| Pastille, bulle | Inter | 11 à 12 px | 600 | 1,2 | 0 |
| Bouton | Inter | 13 px | 600 | 1,25 | 0 |
| Étiquette de champ | Inter | 9,5 px | 700, capitales | 1 | 0,06 em |

## 4. Composants

- **Bouton plein** : 46 px, coins 9 px, bleu vif, flèche à droite, ombre bleue douce. **Bouton contour** : blanc, filet gris, texte marine.
- **Pastille de section** : capsule bleu pâle, texte bleu en 11 px.
- **Bulle flottante** : capsule bleu pâle à bord blanc, ombre légère, posée à cheval sur les images ; une version pleine bleu marque pour l'idée forte.
- **Bandeau d'atouts** : capsule large filetée, 5 coches vertes en ligne.
- **Carte de service** : blanche qui tourne au bleu très pâle en bas, icône dans un carré bleu pâle, titre, texte gris, photo en bas.
- **Liste à filet** : chaque avantage précédé d'un trait vertical bleu marque.
- **Carte de formule** : blanche ou bleu marque (vedette, badge jaune), nom en capitales espacées, coches vertes, bouton pleine largeur.
- **Formulaire** : carte blanche à grande ombre, champs gris pâle de 44 px, étiquettes en capitales.
- **FAQ** : questions en cartes blanches fines, chevron bleu qui pivote.
- **Application dessinée en CSS** : tablette et téléphone avec en-tête bleu, recherche, liste des spécialités.

## 5. Mise en page

- Colonne de 1040 px ; encarts resserrés à 700 à 840 px.
- Ordre : hero, intro (panneau), solution (6 cartes), encart « du discours au quotidien », application, formules, marque employeur, contact, FAQ, relance, pied.
- Alternance de fonds : gris, blanc, panneau bleu pâle, gris ; l'encart « quotidien » chevauche la frontière blanc / gris.
- Une grande bande bleu marque en biais passe derrière la tablette de l'application.
- Espacement vertical : 40 à 60 px, plus serré qu'une page de vente.

## 6. Profondeur et élévation

- Ombres longues et bleutées sous les appareils, le formulaire et la formule vedette.
- Les bulles débordent des images et de leur cadre ; le cadre de la photo « marque employeur » est doublé d'un aplat bleu pâle décalé.
- Le hero porte deux grands anneaux blancs transparents en fond.

## 7. Images

| Id | Format | Section | Rôle |
|---|---|---|---|
| W-hero | 4:3 | hero | téléconsultation vue sur tablette, la médecin à l'écran |
| W-equipe | 4:3 | intro | collègues autour d'un téléphone |
| W-collaboratrice | 1:1 | intro | collaboratrice qui ouvre l'application |
| W-generaliste | 16:9 | solution | consultation vidéo sur téléphone |
| W-specialites | 16:9 | solution | téléphone sur la liste des spécialités |
| W-suivi | 16:9 | solution | deux soignantes devant une tablette |
| W-trajet | 16:9 | solution | application utilisée dans un bus |
| W-examens | 16:9 | solution | téléphone sur des résultats d'analyse |
| W-ordonnances | 16:9 | solution | la médecin valide une ordonnance |
| W-equipe-medicale | 4:3 | marque-employeur | visioconférence de l'équipe médicale |

- **Personnage** : Aïcha Mahamat, 44 ans, N'Djamena ; peau brun moyen, voile léger, visage serein, petites rides d'expression ; signature : blouse blanche, stéthoscope autour du cou. Métier : médecin généraliste, directrice médicale. Elle apparaît sur 5 images sur 10.
- Les consignes complètes sont dans `images/commandes.json`.

## 8. À faire, à ne pas faire

- Faire : une pastille au-dessus de chaque titre de section.
- Faire : nommer les services en bulles autour des images.
- Ne pas faire : de ton « vendeur » ni de compte à rebours : c'est un site institutionnel.
- Ne pas faire : le texte gris relevé `#7E8182` sur blanc pour du petit texte (3,9) : passer à `#6B7076`.

## 9. Comportement responsive

- Behance ne montre que le bureau. Le téléphone est notre proposition.
- Sous 820 px : toutes les grilles à deux colonnes passent en une, cartes de service en 2 colonnes, formules empilées, bande en biais retirée.
- Sous 560 px : cartes en 1 colonne, boutons du hero pleine largeur, atouts en liste, téléphone de la section application masqué.

## 10. Mouvement

- Moteur commun : `data-rv` partout, `data-lignes` sur trois titres, `data-aimant` sur les boutons pleins, barre de progression bleue.
- Pas d'effet propre : un site institutionnel reste calme.

## 11. Non mesuré, et choix tranchés seul

- Les polices (§3).
- La marque « MédiKa », les textes, les formules sans prix affiché (proposition sur demande, comme la source).
- L'application dessinée en CSS ; les photos de la source deviennent des emplacements.
- Le formulaire envoie vers WhatsApp.
- Les gris et le bleu des pastilles foncés pour le contraste.
- Le téléphone (§9).

## 12. Consigne pour l'IA

Construis la page d'accueil institutionnelle d'une offre de télémédecine pour entreprises, sur fond blanc et gris pâle `#EFF1F3`. Titres en Inter Tight 500 marine `#0D2D3D`, texte en Inter. Boutons bleu vif `#125CFE` à coins de 9 px. Chaque section s'ouvre sur une petite pastille bleu pâle. Mets l'application en scène sur tablette et téléphone, entourée de bulles qui nomment les services. Six cartes de service à photo, deux formules dont une bleu marque `#005AB2` avec badge jaune, un formulaire de demande de proposition, une FAQ en cartes fines et un pied bleu marque.
