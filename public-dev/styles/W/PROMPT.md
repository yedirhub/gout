# Prompt complet · Template W « Bleu clinique »
# Par Yedidia Ruben - Digital Strategist. À coller tel quel dans une IA qui code (Claude, ChatGPT, Gemini).

Tu es un designer web senior. Construis une page de vente complète en un seul fichier HTML, avec exactement le rendu décrit ci-dessous : couleurs, polices, tailles, espacements, boutons, cartes, animations. La fiche de style fait foi ; en cas de doute, applique-la à la lettre plutôt que d'improviser.

## 1. La fiche de style (DESIGN.md)

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

## 2. Les sections, dans l'ordre

01. #hero · Le hero : Dire qui, quoi, pour qui en une phrase, puis faire cliquer. Le geste : tablette et téléphone entourés de bulles flottantes.
02. #intro · La valeur : Faire sentir le prix avant de le montrer. Le geste : collage de deux photos dans un panneau bleu pâle.
03. #solution · Le contenu : Rendre l'offre concrète, morceau par morceau. Le geste : six cartes à icône, photo en bas.
04. #quotidien · Le bandeau : Remettre du mouvement entre deux sections calmes. Le geste : encart bleu pâle à cheval sur deux fonds.
05. #appli · La bascule : Montrer pourquoi cette solution est différente. Le geste : tablette inclinée sur une bande bleue.
06. #plans · L'offre : Convertir : le prix, ce qu'il contient, le bouton. Le geste : carte blanche face à carte bleue vedette.
07. #marque-employeur · La valeur : Faire sentir le prix avant de le montrer. Le geste : photo cadrée, quatre bulles qui débordent.
08. #contact · La relance : Redonner le bouton à celui qui s'est décidé en route. Le geste : formulaire en carte blanche flottante.
09. #faq · La FAQ : Lever les dernières objections. Le geste : questions en cartes fines, chevron bleu.
10. #relance · La relance : Redonner le bouton à celui qui s'est décidé en route. Le geste : encart logo et deux boutons.
11. #pied · Le pied : La légitimité : nom, mentions, contact. Le geste : pied bleu marque en trois colonnes.

## 3. Les animations

Les animations passent par un petit moteur commun (anim.js + anim.css, fournis plus bas). On ne code pas d'animation à la main : on pose des attributs.
- data-rv : l'élément apparaît au défilement, décalé de 70 ms dans son groupe.
- data-lignes : un titre à <br> monte ligne par ligne derrière un masque.
- data-compte="3200" : le chiffre compte jusqu'à sa valeur quand il entre à l'écran.
- data-parallaxe="0.15" : l'élément glisse plus lentement que la page.
- data-incline : la carte s'incline vers la souris (6° au plus).
- data-aimant : le bouton est attiré par la souris (6 px au plus).
- data-progression : la barre de lecture en haut de page.
Tout s'arrête sous prefers-reduced-motion : la page reste lisible et complète.

Le moteur, à coller tel quel dans la page :

```css
/* anim.css : les états de départ des effets de anim.js. Sans la classe .anime (JS absent ou
   reduced-motion), tout est visible : une page ne doit jamais dépendre du JS pour s'afficher. */
.anime [data-rv]{opacity:0;transform:translateY(26px);transition:opacity .8s cubic-bezier(.16,1,.3,1) var(--d,0ms),transform .8s cubic-bezier(.16,1,.3,1) var(--d,0ms)}
.anime [data-rv].vu{opacity:1;transform:none}
.anime [data-rv][data-lignes]{opacity:1;transform:none}
.ligne{display:block;overflow:hidden;padding-bottom:.08em;margin-bottom:-.08em}
.ligne>span{display:block}
.anime [data-lignes] .ligne>span{transform:translateY(105%);transition:transform 1s cubic-bezier(.16,1,.3,1)}
.anime [data-lignes].vu .ligne>span{transform:none}
[data-parallaxe]{will-change:transform}
[data-aimant]{transition:translate .35s cubic-bezier(.16,1,.3,1)}
[data-progression]{position:fixed;top:0;left:0;right:0;height:2px;transform-origin:0 50%;transform:scaleX(0);z-index:100;pointer-events:none}
/* Reflet qui balaie un bouton au survol : ajouter la classe .reflet au bouton. */
.reflet{position:relative;overflow:hidden;isolation:isolate}
.reflet::after{content:"";position:absolute;inset:0;z-index:-1;pointer-events:none;
  background:linear-gradient(105deg,transparent 35%,rgba(255,255,255,.28) 50%,transparent 65%);transform:translateX(-120%)}
.reflet:hover::after{transform:translateX(120%);transition:transform .9s cubic-bezier(.16,1,.3,1)}
@media (prefers-reduced-motion:reduce){.reflet::after{display:none}}
```

```js
/* anim.js : le moteur de mouvement commun aux 4 styles (Goût IA, cycle 1).
   Chaque page choisit ses effets par attributs ; le style (couleurs, durées) reste dans la page.
   Rien ne bouge sous prefers-reduced-motion : tout est montré tel quel.

   data-rv               apparaît au défilement (classe .vu posée), décalé de 70 ms dans son groupe
   data-lignes           titre découpé ligne par ligne (<br>), chaque ligne monte à son tour
   data-compte="3200"    chiffre qui compte jusqu'à sa valeur quand il entre à l'écran
   data-parallaxe="0.15" glisse plus lentement que la page (facteur de vitesse)
   data-incline          carte qui s'incline vers la souris (max 6°)
   data-aimant           bouton attiré par la souris (max 6 px)
   data-progression      barre de lecture en haut de page
*/
(() => {
  const calme = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const tactile = matchMedia('(hover: none)').matches;
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // Titres en lignes : on enveloppe chaque ligne pour la faire monter derrière un masque.
  $$('[data-lignes]').forEach(t => {
    const lignes = t.innerHTML.split(/<br\s*\/?>/i);
    t.innerHTML = lignes.map((l, i) =>
      `<span class="ligne"><span style="transition-delay:${i * 90}ms">${l}</span></span>`).join('');
    t.setAttribute('data-rv', '');
  });

  if (calme) {
    $$('[data-rv]').forEach(e => e.classList.add('vu'));
    $$('[data-compte]').forEach(e => e.textContent = Number(e.dataset.compte).toLocaleString('fr-FR'));
    return;
  }
  document.documentElement.classList.add('anime');

  // Apparition : décalage par fratrie, pour que les cartes d'une grille arrivent l'une après l'autre.
  const vu = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('vu');
    vu.unobserve(e.target);
  }), { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  $$('[data-rv]').forEach(el => {
    const freres = [...el.parentElement.children].filter(f => f.hasAttribute('data-rv'));
    el.style.setProperty('--d', `${Math.min(freres.indexOf(el), 6) * 70}ms`);
    vu.observe(el);
  });

  // Compteurs.
  const compte = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    // Le chiffre final reste écrit tant qu'on ne le voit pas : une capture ou un robot lit la vraie valeur.
    const el = e.target, fin = Number(el.dataset.compte), t0 = performance.now(), duree = 1600;
    el.textContent = '0';
    const pas = t => {
      const p = Math.min((t - t0) / duree, 1), v = 1 - Math.pow(1 - p, 4);
      el.textContent = Math.round(fin * v).toLocaleString('fr-FR');
      if (p < 1) requestAnimationFrame(pas);
    };
    requestAnimationFrame(pas);
    compte.unobserve(el);
  }), { threshold: 0.6 });
  $$('[data-compte]').forEach(e => compte.observe(e));

  // Parallaxe et barre de lecture, sur une seule boucle.
  const para = $$('[data-parallaxe]'), barre = document.querySelector('[data-progression]');
  let attente = false;
  const defile = () => {
    attente = false;
    const h = innerHeight;
    para.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > h + 200) return;
      const decal = (r.top + r.height / 2 - h / 2) * Number(el.dataset.parallaxe);
      el.style.transform = `translate3d(0,${decal.toFixed(1)}px,0)`;
    });
    if (barre) barre.style.transform = `scaleX(${scrollY / Math.max(1, document.body.scrollHeight - h)})`;
  };
  addEventListener('scroll', () => { if (!attente) { attente = true; requestAnimationFrame(defile); } }, { passive: true });
  defile();

  if (tactile) return;

  // Inclinaison des cartes.
  $$('[data-incline]').forEach(c => {
    c.style.transition = 'transform .5s cubic-bezier(.16,1,.3,1)';
    c.addEventListener('mousemove', e => {
      const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      c.style.transform = `perspective(900px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateY(-3px)`;
    });
    c.addEventListener('mouseleave', () => c.style.transform = '');
  });

  // Boutons aimantés.
  $$('[data-aimant]').forEach(b => {
    b.addEventListener('mousemove', e => {
      const r = b.getBoundingClientRect();
      b.style.translate = `${((e.clientX - r.left) / r.width - .5) * 12}px ${((e.clientY - r.top) / r.height - .5) * 8}px`;
    });
    b.addEventListener('mouseleave', () => b.style.translate = '');
  });
})();
```

## 4. Les règles

- Un seul fichier HTML, CSS dans <style>, aucune bibliothèque en dehors des polices Google.
- Textes en français, écrits pour le métier donné. Aucun tiret long (cadratin ou demi-cadratin) dans les textes.
- Images : des silhouettes ou des dégradés de remplacement, jamais une photo inventée d'une vraie personne.
- Chaque section porte un id (celui de la liste plus haut) pour qu'on puisse la viser.
- Contraste du texte de 4,5 au moins. La page tient de 360 à 1920 px de large sans débordement horizontal.
- Le bouton principal et sa preuve tiennent dans le premier écran du téléphone.

## 5. Ce que tu rends

Le fichier HTML complet, prêt à ouvrir. Puis, en 5 lignes, ce que tu as dû deviner faute de précision dans la fiche.
