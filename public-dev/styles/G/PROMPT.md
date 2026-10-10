# Prompt complet · Template G « Récit néon »
# Par Yedidia Ruben - Digital Strategist. À coller tel quel dans une IA qui code (Claude, ChatGPT, Gemini).

Tu es un designer web senior. Construis une page de vente complète en un seul fichier HTML, avec exactement le rendu décrit ci-dessous : couleurs, polices, tailles, espacements, boutons, cartes, animations. La fiche de style fait foi ; en cas de doute, applique-la à la lettre plutôt que d'improviser.

## 1. La fiche de style (DESIGN.md)

# DESIGN.md : Style G « Récit néon » (d'après la page « Storytelling Lucrativo », Felipe Santos)

> **Source** : `inspi/behance/218430833/01.png` (1920 × 13256), « Página de Vendas - Lançamento », Behance 218430833. Relevé le 08/10/2026, session `fe30eec0`.
> **Demande de Ruben** : « sur la partie témoignage il y a un flou qui attire l'attention, certainement que si la souris passe sur une carte elle va se révéler ». C'est le geste central de ce style : il est construit ainsi.

## 1. Ambiance et intention

- Une communauté de créateurs de contenu : studio la nuit, néons, énergie de lancement.
- Bleu nuit presque noir partout, une seule couleur chaude (l'orange) pour les mots qui comptent, du violet et du rose seulement dans la lumière des images.
- Le récit avant / après porte la page : « des posts ignorés à la référence du marché ».
- Le visiteur est intrigué : les avis sont flous, il faut passer la souris pour les lire.

## 2. Palette et rôles

- **Nuit** `#09081D` (mesuré au pixel) : le fond de toute la page.
- **Carte** `#12103A` à `#211C6A` : les cartes d'avis (dégradé radial plus clair en haut).
- **Brun nuit** `#21111D` : les cartes FAQ et la bande de garantie (une pointe de rouge).
- **Orange** `#F56610` (bouton) et `#FF7B2D` (mots, filets) ; **pêche** `#FFAE6E` (plaques derrière les cartes, pied).
- **Violet** `#7B2CF5` et **rose** `#E0329A` : seulement dans les dégradés de lumière (hero, jetons, éclair).
- **Texte** `#B9B7CF` ; **texte doux** `#8E8BAE`.
- **Filet orange** `rgba(255,123,45,.45)` : le contour de presque toutes les cartes.
- **Vert WhatsApp** `#8CF59A` : le seul vert, sur le bouton de contact.

## 3. Typographie

- Non nommée par l'auteur. Relevé à l'œil : grotesque géométrique serrée, très grasse dans les titres, « a » à deux étages. La plus proche sur Google Fonts : **Plus Jakarta Sans** (titres, approche -0,035 em). Texte courant : **Inter**. Rubans : **Archivo 800 italique**.

| Rôle | Police | Taille bureau / téléphone | Graisse | Interligne | Approche |
|---|---|---|---|---|---|
| Titre du hero | Plus Jakarta Sans | 34 / 28 px | 700 | 1,18 | -0,035 em |
| Titre de section | Plus Jakarta Sans | 40 / 28 px | 700 | 1,15 | -0,035 em |
| Titre de carte | Plus Jakarta Sans | 12 à 15 px | 700 | 1,3 | -0,01 em |
| Texte | Inter | 13 à 15 px | 400 | 1,6 à 1,75 | 0 |
| Bouton | Plus Jakarta Sans | 14 px | 800 | 1 | capitales |
| Rubans | Archivo | 22 px | 800 italique | 1 | 0,02 em, capitales |
| Prix | Plus Jakarta Sans | 54 px | 800 | 1 | -0,04 em, dégradé blanc vers gris |

## 4. Composants

- **Bouton orange** : 56 px, coins 12 px, dégradé `#FF8A3D` vers `#F56610`, texte brun foncé en capitales, double anneau orange translucide autour (7 px). Une ligne « paiement sécurisé » sous le bouton.
- **Carte avant / après** : coins 16 px, filet orange, une **plaque pêche décalée** derrière (8 px en bas à droite), une barre « Hana en 2021 » à 3 points, une photo inclinée sur un papier blanc.
- **Pastille BONUS** : 34 px, coins 12 px, filet orange, petit cadeau orange.
- **Jeton** : rond de 58 px, dégradé orange vers violet, double anneau.
- **Carte d'avis** : coins 16 px, filet orange à 30 %, **contenu flou à 5 px** ; net au survol, au focus clavier et au toucher.
- **Carte d'étape** : 196 px, une barre orange collée en haut, image, titre en deux tons, posée en éventail.
- **Carte de prix** : plaque pêche décalée derrière à gauche, panneau de liste qui dépasse à droite avec une lumière orange en bas.
- **Sceau de garantie** : rosace pêche, chiffre géant dans un rond.
- **FAQ** : accordéon natif (`details`), cartes brunes à filet orange, « + » qui tourne en « × ».

## 5. Mise en page

- Colonne de 940 px ; les avis s'élargissent à 1080 px en 3 colonnes façon mosaïque (hauteurs libres).
- Les sections s'enchaînent sur une grille de fond (filets de 96 px), séparées par un filet orange avec une pastille à flèche au centre.
- Hero et « Qui » : texte à gauche, personne à droite, coupée en bas par la section suivante.
- Espacement vertical : 80 à 120 px.

## 6. Profondeur et élévation

- Les plaques pêche décalées donnent un relief de carte à jouer.
- Les étapes se chevauchent en éventail (rotations de -6° à 7°) ; la carte survolée se redresse et passe devant.
- La boule de cristal brille et respire ; les images de bonus sont des écrans posés en perspective.
- Deux rubans croisés traversent la page en biais.

## 7. À faire, à ne pas faire

- Faire : un titre en deux lignes, la deuxième (ou la fin) en orange.
- Faire : des cartes sombres à filet orange, jamais d'ombre grise.
- Ne pas faire : de violet dans le texte. Le violet vit dans la lumière.
- Ne pas faire : de flou sur autre chose que les avis : le flou doit rester une énigme rare.

## 8. Comportement responsive

- Behance ne montre que le bureau. Le téléphone est notre proposition.
- Sous 820 px : hero et « Qui » en colonne, centrés ; avant / après l'un sous l'autre ; jetons en 2 × 2 ; avis en 1 colonne ; étapes à plat ; carte de prix puis liste empilées.
- Sous 480 px : l'éventail se remet droit, la liste des salons de la communauté disparaît.
- Au toucher, un avis se révèle quand on le touche (focus).

## 9. Mouvement

- Moteur commun : `data-rv` partout, `data-compte` sur le prix, `data-parallaxe` sur la personne du hero, `data-incline` sur les cartes avant / après, `data-aimant` sur les boutons, `.reflet` sur le bouton orange, barre de progression violet vers orange.
- Propre à G : **les avis se révèlent au survol** (flou 5 px vers net, 0,5 s) ; **les rubans défilent** en sens opposés (38 s) ; **la boule respire** (4 s) ; **l'éventail se redresse** au survol.

## 10. Non mesuré, et choix tranchés seul

- Les polices (§3).
- Les images : personnes en silhouettes, studio en dégradés et néons dessinés, écrans dessinés, logos d'outils remplacés par des formes neutres.
- Le flou : mesuré à l'œil (environ 5 px) ; la révélation au survol est la lecture de Ruben, pas vue en mouvement.
- Le prix : en euros, 12 × 17 € ou 197 € en une fois.
- Le téléphone (§8).

## 11. Consigne pour l'IA

Construis une page bleu nuit `#09081D` éclairée par des néons orange, violets et roses. Titres en Plus Jakarta Sans 700 très serrés, la fin du titre en orange `#FF7B2D`. Cartes sombres à filet orange, avec une plaque pêche décalée derrière les cartes importantes. Les avis clients sont floutés et se révèlent au survol ou au toucher. Deux rubans en biais défilent en sens opposés. Les étapes sont des cartes posées en éventail. Le pied est une bande orange dégradée.

## 2. Les sections, dans l'ordre

01. #hero · « Réveillez votre authenticité et donnez au marché entier l'envie de votre présence. »
02. #avant-apres · « Des posts ignorés à la référence du marché »
03. #promesse · « Un petit aperçu de ce qui vous attend dans la communauté »
04. #temoignages · « Bienvenue dans l'ère de l'authenticité »
05. #etapes · « Les 4 étapes de votre transformation »
06. #bonus · « Les réseaux du futur »
07. #offre · « Le prix de la communauté va DOUBLER ! »
08. #garantie · « Garantie de 8 jours »
09. #qui · « Hana Diop »
10. #faq · « Encore un doute ? Une question ? »

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
