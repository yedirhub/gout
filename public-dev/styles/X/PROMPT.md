# Prompt complet · Template X « Braise de cinéma »
# Par Yedidia Ruben - Digital Strategist. À coller tel quel dans une IA qui code (Claude, ChatGPT, Gemini).

Tu es un designer web senior. Construis une page de vente complète en un seul fichier HTML, avec exactement le rendu décrit ci-dessous : couleurs, polices, tailles, espacements, boutons, cartes, animations. La fiche de style fait foi ; en cas de doute, applique-la à la lettre plutôt que d'improviser.

## 1. La fiche de style (DESIGN.md)

# DESIGN.md : Style X « Braise de cinéma » (d'après la page « Página Castrum Mídias - Tráfego Pago », Jose Justo)

> **Source** : `inspi/behance/236475491/` (01.png bureau 2880 × 10365, 02.png téléphone 630 × 13694), page d'une agence de publicité payante « Castrum Mídias », Behance 236475491. Relevé le 16/11/2026.
> **Demande de Ruben** : pas de consigne de détail, lot du 16/11/2026.

## 1. Ambiance et intention

- Une agence de publicité vendue comme un film noir : tout est sombre, la lumière vient d'une lampe et d'une lueur orange dans les coins.
- Le noir n'est jamais plat : des halos braise (`#7F341D`) glissent en haut à gauche du hero, en coin du tableau, au bord de la décision.
- Un seul accent, l'orange brûlé, réservé à l'action : boutons, pastilles d'icônes, têtes de tableau, numéros, flèches.
- Les titres mêlent une fine en capitales ou en bas de casse avec une chute en **italique extra-grasse** : le mot qui compte claque.
- La preuve est mise en scène : des notifications « Vous avez reçu un paiement » flottent sur le portrait.

## 2. Palette et rôles

Relevés au pixel (PIL) sur `01.png` réduit à 1000 px.

- **Noir** `#000000` : fond du hero, de la FAQ, du pied.
- **Nuit** `#070707` : fond des sections problème et piliers.
- **Carte** `#0C0C0C` / `#101010` : panneau « Qui », cartes d'avis, bande des témoignages.
- **Rangée** `#0D0F12` (relevé `#0B0F10` / `#0E0F11`) : rangées de la FAQ, très légèrement bleutées.
- **Orange** `#FF4C01` : tête droite du tableau, boutons carrés de la FAQ, pastilles ; `#F85707` : dégradé des boutons.
- **Orange brûlé** `#B03702` : tête gauche du tableau (« les autres »).
- **Braise** `#7F341D` / `#88381F` : halos de lumière dans les coins.
- **Fond portrait** `#D4592F` : le fond orange de la photo « Qui dirige ».
- **Gris** `#8A8A8A` (relevé `#737373`, éclairci pour AA) : colonne « les autres » du tableau.

## 3. Typographie

- Non nommée par l'auteur. Relevé à l'œil : grotesque géométrique à graisses extrêmes, fine 300 et italique 800. La plus proche sur Google Fonts : **Inter Tight**. Le logo du pied est manuscrit : **Caveat** 700.

| Rôle | Police | Taille bureau / téléphone | Graisse | Interligne | Approche |
|---|---|---|---|---|---|
| Titre du hero | Inter Tight capitales | 48 / 32 px | 300 puis 800 | 1,08 | -0,01 em |
| Titre de section | Inter Tight | 32 / 26 px | 300 + italique 800 | 1,3 | -0,01 em |
| Surtitre | Inter Tight italique capitales | 12 px | 300 | 1 | 0,55 em (0,32 au téléphone) |
| Texte | Inter Tight | 12,5 à 16 px | 400 | 1,5 | 0 |
| Bouton | Inter Tight capitales | 13 px | 700 | 1,2 | 0,02 em |
| Question FAQ | Inter Tight | 14 px | 600 | 1,35 | 0 |
| Logo du pied | Caveat | 34 px | 700 | 0,8 | 0 |

## 4. Composants

- **Bouton** : bloc orange `#FF4C01` aux coins 6 px, 48 px de haut, capitales grasses, petit carré translucide à flèche à droite, halo orange dessous.
- **Surtitre** : capitales italiques fines très espacées, orange, au-dessus de chaque titre.
- **Notification de paiement** : carte vitrée sombre, carré orange à flamme, « Vous avez reçu un paiement », montant en FCFA et heure ; elle flotte (6 s).
- **Pastilles de chiffres** : petits cadres à filet `#2A2A2A`, chiffre orange puis libellé blanc gras.
- **Carte pilier** : filet orange en haut, pastille orange accrochée au filet (coins bas arrondis), dégradé noir vers transparent.
- **Tableau comparatif** : deux têtes (brûlé / orange vif), rangées séparées d'un filet, colonne gauche grise, colonne droite blanche.
- **Chemin numéroté** : carte sombre avec un carré orange chiffré collé au bord haut (1 à droite, 2 à gauche).
- **Panneau scindé** : photo sur fond orange à gauche, texte sur carte noire à droite, coins 10 px.
- **Carrousel d'avis** : cartes de 230 px, vignette carrée, 5 étoiles orange, bords effacés par masque, flèches rondes orange.
- **FAQ** : rangée sombre à filet, bouton carré orange à chevron collé à droite ; accordéon natif.

## 5. Mise en page

- Colonne de 1080 px ; FAQ resserrée à 1000 px.
- Ordre : hero, problème (image gauche / texte droite), piliers en 4 colonnes, comparaison en tableau, décision (2 cartes autour d'une image), qui (panneau scindé), témoignages en carrousel, FAQ (titre à gauche / questions à droite), pied à 4 colonnes.
- Sections séparées par un filet `#1E1E1E` ; chaque section relance avec le même bouton orange.
- Espacement vertical : 60 à 110 px.

## 6. Profondeur et élévation

- Profondeur par la lumière, pas par l'ombre : halos braise en `radial-gradient` dans les coins, portrait fondu dans le noir à gauche et en bas.
- Seuls les boutons et les notifications portent une ombre (halo orange, ombre noire profonde).
- La nav est une barre vitrée (`backdrop-filter`) posée sur le hero.

## 7. À faire, à ne pas faire

- Faire : un seul accent orange, uniquement sur ce qui se clique ou se compte.
- Faire : finir chaque titre par un mot en italique 800.
- Ne pas faire : de fond gris clair ou de section blanche ; tout reste entre `#000` et `#121212`.
- Ne pas faire : le gris relevé `#737373` pour du texte : trop faible sur noir, monter à `#8A8A8A`.

## 8. Comportement responsive

- Le téléphone suit 02.png : portrait en haut, texte centré dessous, piliers empilés, tableau gardé en 2 colonnes serrées, chemins 1 et 2 côte à côte sous l'image, panneau « Qui » photo au-dessus, FAQ centrée puis questions.
- Sous 1000 px : nav réduite au logo et au bouton Contact ; piliers en 2 × 2.
- Sous 560 px : piliers en 1 colonne, une seule notification, pied en 1 colonne.

## 9. Mouvement

- Moteur commun : `data-rv` partout, `data-lignes` sur les titres, `data-aimant` sur les boutons, barre de progression orange.
- Propre à X : **les notifications de paiement flottent** en décalé ; **le carrousel** défile par flèches et au doigt (scroll-snap), démarré au centre.

## 10. Images

Le personnage : **Kevin Ondo**, 28 ans, Brazzaville, peau brun foncé, mini-dreads courts, mince, décontracté ; signature : casque audio autour du cou, sweat à capuche. Ici gestionnaire de publicité payante, fondateur de Mayombe Médias.

| id | Format | Section | Rôle | Kevin |
|---|---|---|---|---|
| X-hero | 3:4 | hero | portrait en clair-obscur, fondu dans le noir | oui |
| X-probleme | 1:1 | probleme | patron de dos dans un couloir, billets qui tombent | non |
| X-decision | 4:3 | decision | Kevin confiant devant un commerçant inquiet | oui |
| X-portrait | 3:4 | qui | portrait sur fond orange, main au menton | oui |
| X-temoin-1 | 1:1 | temoignages | vignette d'avis, Aminata Koné | non |
| X-temoin-2 | 1:1 | temoignages | vignette d'avis, Merveille Nzaba | non |
| X-temoin-3 | 1:1 | temoignages | vignette d'avis, Fatou Diop | non |
| X-faq | 4:3 | faq | Kevin au bureau, de nuit, répond à un message | oui |

- Commandes détaillées : `images/commandes.json`.

## 11. Non mesuré, et choix tranchés seul

- Les polices (§3).
- La marque « Mayombe Médias », les textes, les montants en FCFA.
- Le décor du hall à colonnes derrière les piliers : rendu en dégradés CSS, pas en photo.
- Les avatars du hero : initiales en CSS. Les 2 avis du bord du carrousel : sans photo, décoratifs (`aria-hidden`).
- L'emplacement `X-faq` : ajouté (la source n'a pas d'image en FAQ) pour que Kevin tienne la moitié des images.
- Le gris de la colonne « les autres » éclairci pour le contraste.

## 12. Consigne pour l'IA

Construis une page d'agence de publicité payante en noir profond `#000000`, avec un seul accent orange `#FF4C01` et des halos braise `#7F341D` dans les coins. Titres en Inter Tight fine, chaque titre finit par un mot en italique extra-gras. Surtitres orange en capitales italiques très espacées. Le hero montre un portrait en clair-obscur fondu dans le noir, avec des notifications de paiement qui flottent. Puis : problème en image et texte, 4 piliers à pastille orange, un tableau comparatif à deux têtes orange, deux chemins numérotés, un panneau « qui » sur fond orange, un carrousel d'avis, une FAQ à boutons carrés orange.

## 2. Les sections, dans l'ordre

01. #hero · Le hero : Dire qui, quoi, pour qui en une phrase, puis faire cliquer. Le geste : portrait en clair-obscur, paiements qui flottent.
02. #probleme · La douleur : Le visiteur se reconnaît : « c'est moi ». Le geste : photo carrée à gauche, chute en italique grasse.
03. #piliers · La bascule : Montrer pourquoi cette solution est différente. Le geste : 4 cartes à pastille orange accrochée au filet.
04. #comparaison · La bascule : Montrer pourquoi cette solution est différente. Le geste : tableau à deux têtes : braise contre orange vif.
05. #decision · La relance : Redonner le bouton à celui qui s'est décidé en route. Le geste : deux chemins numérotés autour d'une image.
06. #qui · Qui est derrière : Un humain derrière l'offre, et un lieu réel. Le geste : panneau scindé, portrait sur fond orange.
07. #temoignages · La preuve : Faire parler les autres : « ça a marché pour des gens comme moi ». Le geste : carrousel aux bords effacés, flèches orange.
08. #faq · La FAQ : Lever les dernières objections. Le geste : rangées sombres à bouton orange carré.
09. #pied · Le pied : La légitimité : nom, mentions, contact. Le geste : logo manuscrit, 4 colonnes de liens.

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
