# Prompt complet · Template F « Lumière dorée »
# Par Yedidia Ruben - Digital Strategist. À coller tel quel dans une IA qui code (Claude, ChatGPT, Gemini).

Tu es un designer web senior. Construis une page de vente complète en un seul fichier HTML, avec exactement le rendu décrit ci-dessous : couleurs, polices, tailles, espacements, boutons, cartes, animations. La fiche de style fait foi ; en cas de doute, applique-la à la lettre plutôt que d'improviser.

## 1. La fiche de style (DESIGN.md)

# DESIGN.md : Style F « Lumière dorée » (d'après le site rarisondesigner.com, Rárison Lucas)

> **Source** : le site en ligne https://rarisondesigner.com/, relevé le 08/10/2026 (session `fe30eec0`) écran par écran en descendant, polices et couleurs lues dans le navigateur.
> **Demande de Ruben** : « copie conforme et surtout il y a des parties très propres, la carte qui déborde là avec les boutons devant et derrière ».
> **Même auteur que le style E** : Rárison Lucas signe aussi la page « Código do Crescimento ».

## 1. Ambiance et intention

- Le site d'un designer qui vend de l'autorité : noir profond, une seule lumière dorée, comme un projecteur sur une scène.
- Les titres sortent de l'ombre : chaque titre part du gris à gauche et finit en blanc ; un mot en italique doré porte la promesse.
- Les blocs arrivent flous et se mettent au point au défilement : le visiteur a l'impression que la page fait la mise au point sur lui.
- Une seule rupture claire : la bande gris perle du prix, d'où déborde une carte sombre.

## 2. Palette et rôles

- **Noir** `#000000` : le fond de la page.
- **Carte** `#111111` à `#171717` : dégradé vertical des cartes, filet blanc à 8 %.
- **Or brossé** : dégradé `#9C8350` vers `#E8D5A8` (boutons, pastille active, puces du prix) ; `#C9AE74` pour le mot doré.
- **Gris perle** `#E4E4E4` (mesuré) : la bande du prix.
- **Texte** `#8A8F96` sur noir, `#575C63` sur gris perle ; titres `#FFFFFF`.
- **Teintes des cartes projets** : chaque carte prend en haut la couleur de son projet (or, olive, émeraude, sable, rose, ambre) et finit en noir.

## 3. Typographie

- Relevé dans le navigateur : **SF Pro Display** (le texte, 57 blocs), **DM Sans** (les titres), **Manrope 300** (les paragraphes), **Benihana 800 italique** (les mots dorés).
- SF Pro et Benihana ne sont pas sur Google Fonts. Remplacements : **Inter** pour SF Pro, **Playfair Display 800 italique** pour Benihana.

| Rôle | Police | Taille bureau / téléphone | Graisse | Interligne | Approche |
|---|---|---|---|---|---|
| Titre du hero | DM Sans | 58 / 40 px | 400 | 1,12 | -0,02 em |
| Titre de section | DM Sans | 52 / 34 px | 400 | 1,15 | -0,02 em |
| Mot doré | Playfair Display | même taille | 800 italique | 1 | -0,01 em |
| Navigation, boutons | Inter | 18 à 19 px | 500 | 1 | -0,02 em |
| Titre de carte | Inter | 22 px | 500 | 1,38 | -0,02 em |
| Texte | Manrope / Inter | 17 à 20 px | 300 / 400 | 1,5 à 1,6 | 0 |
| Prix | Inter | 78 / 52 px | 400 | 1 | -0,02 em |

## 4. Composants

- **Barre de navigation** : verre sombre collé en haut (flou 18 px), 94 px de haut, coins 16 px, filet blanc à 12 %, bouton or à droite.
- **Bouton or** : 56 px, coins 12 px, dégradé or brossé, texte blanc avec ombre portée brune, halo doré dessous. Toujours suivi d'un **carré blanc** de 56 px avec une flèche, puis d'un lien gris.
- **Pastille de section** : 56 px de haut, coins 12 px, dégradé noir, filet, halo blanc très doux.
- **Carte projet** : coins 28 px, teinte du projet en haut, image aux coins 22 px, titre blanc sur 2 ou 3 lignes.
- **Carte d'étape** : coins 30 px, une étiquette en contour gris ; l'étape au centre de l'écran passe en or.
- **Carte de prix** : coins 24 px, dégradé `#3A3A3A` vers `#111`, prix qui se mélange avant de se poser, bouton or.

## 5. Mise en page

- Contenu : 1080 px au plus ; la bande du prix s'élargit à 1280 px en trois colonnes (pastille et marque, carte, liste).
- Projets : grille de 3 sur 2 lignes, 58 px d'écart. Étapes : 2 sur 2, la colonne de droite décalée de 8 px.
- Derrière la méthode : 4 filets verticaux qui s'effacent en haut et en bas.
- Espacement vertical : 110 à 150 px entre sections.

## 6. Profondeur et élévation

- **La carte qui déborde** : la carte de prix commence dans la bande gris perle et descend de 300 px dans le noir ; un coin noir en biais entame la bande en haut à droite. Le bouton or passe devant le bord de la bande, la pastille « Investissement » flotte à gauche.
- Les halos dorés remplacent les ombres sur les boutons ; les cartes noires portent une ombre noire profonde.
- Le hero : des pages de vente inclinées en 3D derrière le portrait, un halo de lumière blanche derrière la tête, des chiffres posés en surimpression.
- De petites étoiles respirent dans le noir.

## 7. À faire, à ne pas faire

- Faire : un seul mot doré par titre, à la fin de la phrase.
- Faire : bouton or, puis carré blanc, puis lien : toujours ce trio.
- Ne pas faire : de deuxième couleur vive. L'or est la seule lumière.
- Ne pas faire : de photos en couleur dans « C'est pour vous ? » : tout y est en noir et blanc.

## 8. Comportement responsive

- Sous 1000 px : la navigation se réduit au bouton menu ; le hero met la scène au-dessus du texte, centré ; projets et étapes en 1 colonne ; la bande du prix empile ses trois colonnes et la carte ne déborde plus.
- Sous 560 px : le bouton or de la barre disparaît, les cartes « pour vous » passent en 1 colonne.

## 9. Mouvement

- Moteur commun : `data-rv` partout, `data-compte` sur le premier chiffre, `data-parallaxe` sur le fond et les pages 3D, `data-incline` sur le portrait, `data-aimant` sur les boutons or, `.reflet` qui balaie les boutons, barre de progression dorée.
- **Net au défilement** (classe `.flou`) : les cartes arrivent floues (14 px) et se mettent au point en 1,1 s.
- **L'étape au centre** prend l'or (observateur au milieu de l'écran).
- **Le prix se mélange** : des signes au hasard (`?`, `_`, `<`, chiffres) puis le vrai montant se pose de gauche à droite.
- **La phrase finale** est éclairée par une lampe qui suit la souris (dégradé radial sur le texte).

## 10. Non mesuré, et choix tranchés seul

- Les polices remplacées (§3).
- Les images : portraits et pages remplacés par des silhouettes et des pages dessinées ; les photos noir et blanc de « pour vous » par des objets dessinés (livre, entonnoir, étiquette, pierre, lampe, miroir).
- Le prix : l'original le cache (« R$ ? ») ; le nôtre affiche un montant en francs après le mélange.
- Le sixième objet (miroir) : l'original en a cinq ; six remplissent la grille.
- Le téléphone : la carte de prix ne déborde plus sous 1000 px (elle recouvrait la liste).

## 11. Consigne pour l'IA

Construis une page noire éclairée par une seule lumière dorée. Titres en DM Sans 400 en dégradé du gris au blanc, un mot en Playfair Display italique doré à la fin. Barre de navigation en verre collée en haut, boutons or brossé suivis d'un carré blanc à flèche. Les cartes arrivent floues et se mettent au point. Une bande gris perle porte une carte de prix sombre qui déborde dans le noir en dessous. Termine par une grande phrase éclairée par la souris.

## 2. Les sections, dans l'ordre

01. #hero · « Votre autorité existe déjà, elle n'est juste pas encore vue »
02. #projets · « Chaque projet est une œuvre unique. »
03. #methode · « Je livre une méthode construite en 4 étapes. »
04. #qui · « Je m'appelle Inès Kaboré, j'ai 27 ans, je suis designer et créatrice de la Méthode Lueur. »
05. #pour-qui · « La Méthode Lueur a été construite pour vous si : »
06. #prix · « Combien ça coûte ? »
07. #relance

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
