# Prompt complet · Template I « Rose scène »
# Par Yedidia Ruben - Digital Strategist. À coller tel quel dans une IA qui code (Claude, ChatGPT, Gemini).

Tu es un designer web senior. Construis une page de vente complète en un seul fichier HTML, avec exactement le rendu décrit ci-dessous : couleurs, polices, tailles, espacements, boutons, cartes, animations. La fiche de style fait foi ; en cas de doute, applique-la à la lettre plutôt que d'improviser.

## 1. La fiche de style (DESIGN.md)

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

## 2. Les sections, dans l'ordre

01. #haut · « Votre meilleur portfolio de social media, c'est votre propre profil. »
02. #pour-qui · « Cette méthode est pour vous qui : »
03. #secret · « Parce qu'une social media qui devient une référence (et se paie comme telle), c'est une social media qui le prouve sur son propre profil. »
04. #methode · « La méthode ÉCLAT est une méthode à moi, en 5 étapes, créée pour les social media qui ne savent pas créer du contenu pour elles-mêmes. »
05. #avis · « et détendez-vous, je ne vous demande pas de me croire les yeux fermés. Croyez plutôt ce que d'autres social media ont dit après leur premier contact avec la méthode : »
06. #contenu · « Jetez un œil à ce que vous allez trouver à l'intérieur (petits spoilers) »
07. #prix
08. #qui · « Maëlle Ouattara ? »
09. #faq · « Il vous reste une question ? Détendez-vous, j'y réponds »
10. #fin · « montez sur cette scène, une bonne fois pour toutes »

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
