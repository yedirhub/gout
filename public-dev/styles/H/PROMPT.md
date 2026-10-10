# Prompt complet · Template H « Sauge apaisée »
# Par Yedidia Ruben - Digital Strategist. À coller tel quel dans une IA qui code (Claude, ChatGPT, Gemini).

Tu es un designer web senior. Construis une page de vente complète en un seul fichier HTML, avec exactement le rendu décrit ci-dessous : couleurs, polices, tailles, espacements, boutons, cartes, animations. La fiche de style fait foi ; en cas de doute, applique-la à la lettre plutôt que d'improviser.

## 1. La fiche de style (DESIGN.md)

# DESIGN.md : Style H « Sauge apaisée » (d'après la page « Eunoia », Jean Lucas)

> **Source** : `inspi/behance/247594873/`, page de vente d'un complément naturel « Eunoia », Behance 247594873. Relevé le 08/10/2026, session `fe30eec0`.
> **Demande de Ruben** : la mettre dans le lot de 5 (« Eunoia »). Aucune consigne de détail : tout est relevé sur l'image.

## 1. Ambiance et intention

- Un complément bien-être vendu comme un rituel : calme, doux, presque une page de spa.
- Vert sauge partout, du blanc cassé et du gris perle pour respirer, une seule touche jaune pâle pour les économies.
- Le produit (un pot vert à couvercle crème) revient dans chaque section : hero, ingrédients, vedette, kits.
- Beaucoup de pastilles arrondies : chaque idée tient dans une capsule.

## 2. Palette et rôles

- **Sauge** `#55645C` / `#566A61` : boutons, panneaux, pastilles d'icônes.
- **Sauge claire** `#86948D` : cartes d'ingrédients ; `#66746D` pour les cartes « pour qui » (texte blanc lisible).
- **Sauge pâle** `#A9B4AE` : pastilles de liste.
- **Nuit** `#2A3833` : texte des titres ; **forêt** `#0F251B` : carte « après » et pots.
- **Perle** `#E5E7E7` : bandes de fond, FAQ fermée ; **crème** `#F4F2EE` : cartes de kits et de moments.
- **Jaune pâle** `#F0E2A6` : badges d'économie ; pastels bleu, menthe, jaune, rose pour les 4 conseils.
- **Bois** `#8A6A40` vers `#5A4224` : le socle sous le pot vedette.

## 3. Typographie

- Non nommée par l'auteur. Relevé à l'œil : grotesque arrondie, aérée. La plus proche sur Google Fonts : **Manrope**. Le nom de marque : **Tenor Sans** (capitales fines à empattement léger).

| Rôle | Police | Taille bureau / téléphone | Graisse | Interligne | Approche |
|---|---|---|---|---|---|
| Titre du hero | Manrope | 44 / 32 px | 500 | 1,15 | -0,02 em |
| Titre de section | Manrope | 32 / 26 px | 500 | 1,2 | -0,02 em |
| Nom de marque | Tenor Sans | 56 à 230 px | 400 | 1 | 0,01 em |
| Texte | Manrope | 13 à 16 px | 400 | 1,5 | 0 |
| Pastille | Manrope | 13 à 15 px | 500 | 1,3 | 0 |
| Bouton | Manrope | 12 px | 700 | 1,2 | capitales |
| Prix | Manrope | 34 px | 700 | 1 | -0,02 em |

## 4. Composants

- **Pot** : dessiné en CSS (`.pot`, taille réglée par `--l`), corps vert dégradé, couvercle crème, rond doré et nom en Tenor Sans.
- **Bouton** : 52 px, pilule sauge, texte blanc en capitales, rond blanc à flèche à droite. Lien WhatsApp avec message prérempli.
- **Pastille d'étape** : rond sauge avec icône blanche + capsule sauge pâle avec le texte.
- **Carte « pour qui »** : coins 12 px, filet gris, fond sauge, petite tuile blanche à fleur en haut.
- **Carte d'ingrédient** : coins 12 px, sauge claire, tuile blanche à icône, « Action » et « Résultat » en gras.
- **Duel avant / après** : colonne sauge avec croix rouges, carte forêt avec coches.
- **Carte de kit** : crème, pots qui débordent par le haut, badge jaune, bouton, 3 garanties en icônes ; le kit du milieu porte un filet.
- **FAQ** : accordéon natif, gris perle fermé, sauge ouvert avec texte blanc.
- **Tampon tournant** : texte en cercle autour d'une fleur, sur la carte « Qui ».

## 5. Mise en page

- Colonne de 1080 px ; les grands panneaux sauge s'élargissent à 1066 px aux coins de 48 px.
- Les sections alternent blanc, perle et panneau sauge ; plusieurs panneaux chevauchent la frontière entre deux fonds.
- « Pour qui » : 5 photos en éventail, puis une grille de 4 colonnes de cartes, le tout cerclé d'un texte en ellipse.
- Espacement vertical : 80 à 120 px.

## 6. Profondeur et élévation

- Les photos débordent de leur carte (intro, rituel) ; les pots débordent des cartes de kits.
- Le pot vedette se pose sur un socle en bois devant le nom géant en filigrane, une cartouche blanche par-dessus.
- Ombres vertes très douces sous les pots, jamais grises.

## 7. À faire, à ne pas faire

- Faire : une idée par pastille, une icône par pastille.
- Faire : remontrer le pot à chaque grande section.
- Ne pas faire : de couleur vive. Le jaune pâle ne sert qu'aux économies.
- Ne pas faire : de texte blanc sur la sauge claire `#86948D` : trop faible (3,2), foncer à `#66746D`.

## 8. Comportement responsive

- Behance ne montre que le bureau. Le téléphone est notre proposition.
- Sous 820 px : hero en colonne, cartes « pour qui » en 2 colonnes, ingrédients en 1, duel empilé, kits empilés, conseils en 2 × 2.
- Le pot vedette passe à 170 px ; l'ellipse de texte reste derrière.

## 9. Mouvement

- Moteur commun : `data-rv` partout, `data-parallaxe` sur les photos, `data-aimant` sur les boutons, barre de progression sauge.
- Propre à H : **le texte en ellipse tourne** (startOffset animé, 12 s) ; **le tampon tourne** sur lui-même ; **deux bandeaux défilent** (puces et phrase en capitales).

## 10. Non mesuré, et choix tranchés seul

- Les polices (§3).
- La marque « Sérène », les textes, les prix en euros (trio 3 × 17 €, duo 2 × 19 €, cure 6 × 15 €).
- Les images : personnes en silhouettes, pots dessinés en CSS, ingrédients en icônes.
- La sauge claire des cartes « pour qui » foncée pour le contraste.
- Le téléphone (§8).

## 11. Consigne pour l'IA

Construis une page de vente bien-être en vert sauge `#55645C`, blanc cassé et gris perle. Titres en Manrope 500, nom de marque en Tenor Sans. Chaque idée tient dans une pastille arrondie avec son icône. Un pot vert à couvercle crème revient dans chaque section et déborde des cartes. Un texte tourne en ellipse autour des cartes « pour qui ». Termine par trois kits crème, le kit du milieu mis en avant, un badge jaune pâle pour l'économie.

## 2. Les sections, dans l'ordre

01. #hero · « Votre corps le sent quand votre esprit est en paix. »
02. #intro
03. #rituel
04. #pour-qui · « Pour qui ? »
05. #resultats · « Les résultats attendus »
06. #conseils · « Nos conseils de prise : »
07. #savoir · « Le saviez-vous ? »
08. #abonnement · « Comment ça marche : »
09. #simplifier · « Simplifiez votre routine avec Sérène »
10. #offre · « Les kits Sérène »
11. #qui
12. #faq · « Questions fréquentes »

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
