# Prompt complet · Template B « Éditorial chaud »
# Par Yedidia Ruben - Digital Strategist. À coller tel quel dans une IA qui code (Claude, ChatGPT, Gemini).

Tu es un designer web senior. Construis une page de vente complète en un seul fichier HTML, avec exactement le rendu décrit ci-dessous : couleurs, polices, tailles, espacements, boutons, cartes, animations. La fiche de style fait foi ; en cas de doute, applique-la à la lettre plutôt que d'improviser.

## 1. La fiche de style (DESIGN.md)

# DESIGN.md : Style B « Éditorial chaud » (d'après la page de vente de l'e-book « Xô Câncer », @euluidesign)

> **Source** : `refs/brut/ref2.webp` (1400 × 10 638). Relevé le 08/10/2026, session `fe30eec0` (fork B).
> **Mesures** : couleurs relevées au pixel. L'image fait 1400 px de large pour un site d'environ 1440 px, soit un facteur d'environ 1,03 : on la lit presque à l'échelle 1.
> **Template** : `reproduction.html` · **Sections** : `SECTIONS.md` et `sections/*.jpg`.

## 1. Ambiance et intention
« Salon de velours. » Une experte qui parle à des femmes de 30 à 60 ans, inquiètes pour leur santé, avec la chaleur d'une confidente et la tenue d'une revue.
Le bordeaux presque noir enveloppe, le rose framboise réveille, le crème repose.
On alterne nuit et jour : chaque passage du sombre au crème relance la lecture.

## 2. Palette et rôles
| Rôle | Valeur | Où on l'emploie |
|---|---|---|
| Nuit (fond sombre) | `#200810` | Hero, garantie, pied, bas des sections sombres |
| Bordeaux (fond sombre 2) | `#4C0B1F` | Haut des sections sombres, en dégradé vers la nuit |
| Prune (carte sombre) | `#591029` | Cartes de contenu, offre « Essentiel » |
| Crème (fond clair) | `#F5EDE7` | Sections claires |
| Crème carte | `#F4F3EA` | Cartes posées sur la crème (e-book, avis, FAQ) |
| Blanc rosé | `#FFFAF9` | Section « Qui suis-je », FAQ |
| Encre | `#2A0A14` | Titres et texte sur la crème |
| Accent (UN SEUL) : framboise | `#E8336D` | Mots clés des titres, puces, flèches, prix |
| Bouton (dégradé) | `#5E1127` → `#E8336D` | Boutons pleins uniquement, avec une lueur rose |
| Rose poudré | `#E8ADB8` | Avatars, filets, détails décoratifs |
| Bordure sombre | `rgba(255,255,255,.12)` | Cartes et pastilles sur le sombre |
| Bordure claire | `#E6D9CF` | Cartes et pastilles sur la crème |

Contrastes calculés : encre/crème `#2A0A14`/`#F5EDE7` = 16,0:1 · blanc/nuit = 19,3:1 · framboise/nuit `#E8336D`/`#200810` = 4,6:1 · blanc/milieu du bouton `#A3224A` = 6,6:1.

## 3. Typographie
| Usage | Police | Taille | Graisse | Interlignage | Interlettrage |
|---|---|---|---|---|---|
| Titre 1 (hero) | Gilda Display | 44 px | 400 | 1,15 | 0 |
| Titre 2 (section) | Hanken Grotesk + Gilda Display | 38 px | 400 | 1,15 | -0,01 em |
| Titre de carte | Gilda Display | 34 px | 400 | 1 | 0 |
| Pastille de rubrique | Hanken Grotesk | 12 px | 500 | 1 | 0 |
| Texte courant | Hanken Grotesk | 15 px | 400 | 1,6 | 0 |
| Petit texte | Hanken Grotesk | 12 px | 400 | 1,5 | 0 |
| Label espacé | Hanken Grotesk | 11 px | 500, capitales | 1 | +0,3 em |

**2 familles.** 🔴 **La signature : un titre mélange les deux familles.** Le mot qui émeut (« 3 raisons », « 7 jours », « vous ») est en serif Gilda Display couleur framboise, le reste en grotesque droite blanche ou encre.

## 4. Composants
- **Bouton principal** : pilule (rayon 999 px), hauteur 64 px, largeur d'environ 300 px, dégradé horizontal `#5E1127` → `#E8336D`, texte blanc 16 px. Flèche → dans un rond blanc de 24 px. Lueur `0 0 28px rgba(232,51,109,.55)` et liseré intérieur `inset 0 0 0 1px rgba(255,255,255,.25)`.
- **Pastille de rubrique** (au-dessus de chaque titre) : pilule de 30 px de haut, bordure 1 px, icône de 14 px et un mot (« Bonus », « FAQ »). Blanche sur le sombre, encre sur la crème.
- **Carte « raison »** : fond `rgba(32,8,16,.6)`, bordure 1 px `#6D2D40`, rayon 6 px, padding 28 px. Étiquette « Raison 01 » en pilule prune avec une puce framboise.
- **Carte de contenu** : fond prune `#591029`, rayon 6 px, image en haut (rayon 6 px), losange orné, label espacé « CONTENU 01 », titre serif de 34 px centré.
- **Carte d'offre** : 2 côte à côte. « Essentiel » en prune, « Complet » en blanc ; la seconde est mise en avant par le contraste, pas par la taille. Prix géant de 64 px en dégradé rose.
- **Accordéon FAQ** : carte crème, bordure 1 px `#E6D9CF`, rayon 6 px, chevron framboise.
- **Encoche** : une bosse arrondie de 70 × 22 px avec un chevron ⌄ framboise, au bas des sections, de la couleur de la section suivante.

## 5. Mise en page
- Largeur maximale du contenu : **960 px**, centré.
- Grille : 2 colonnes 50/50 (texte + visuel) ; 2 colonnes pour les raisons et les offres ; un carrousel de cartes de 240 px qui déborde à droite.
- Rythme vertical entre sections : **120 px**. Généreux, c'est ce qui fait « revue ».
- Marge latérale au téléphone : 20 px.
- **Alternance** : nuit (hero), crème, bordeaux, bordeaux, crème, crème, bordeaux, nuit, blanc rosé, nuit. Les sections claires portent un très grand monogramme rose pâle en filigrane.

## 6. Profondeur et élévation
- **Ce qui crée la profondeur ici : la lumière.** Lueur rose sous les boutons, halo radial bordeaux dans les sections sombres, ombre colorée sous les mockups.
- Ombre de mockup : `0 30px 60px -20px rgba(94,17,39,.45)`.
- Lueur de bouton : `0 0 28px rgba(232,51,109,.55)`.
- Les cartes sombres n'ont pas d'ombre : une bordure prune de 1 px suffit.

## 7. À faire, à ne pas faire
À faire :
- Un mot clé de chaque titre en serif framboise, le reste en grotesque.
- Une pastille de rubrique avec une icône au-dessus de chaque titre.
- Montrer le produit en objet : tablette, téléphone, livre en 3D, toujours incliné, avec une ombre colorée.
- Un bandeau croisé qui défile (2 rubans en X) avant l'offre, pour marquer la rupture « Mais attendez… ».
- Ancrer le prix : d'abord la valeur barrée de chaque élément, puis l'offre.

À ne pas faire :
- Pas de noir pur, pas de gris : toutes les ombres et tous les sombres tirent vers le bordeaux.
- Pas de second accent : le rose poudré n'est qu'une nuance décorative, jamais un bouton.
- Pas de serif dans le texte courant : la serif est réservée aux titres et aux prix.
- Pas de coin carré : 6 px pour les cartes, pilule pour tout ce qui se clique.

## 8. Comportement responsive
- Points de rupture : 1024 px (les 2 colonnes passent en 1) et 640 px (la typo descend d'un cran, les offres s'empilent avec « Complet » en premier).
- Au téléphone : le portrait du hero passe au-dessus du titre et le carrousel se fait au doigt.
- Ce qui ne change jamais : la lueur du bouton, le mélange serif/grotesque des titres, l'alternance nuit/crème.

## 9. Mouvement
Le mouvement vient du moteur commun (`../../commun/anim.css` et `anim.js`), piloté par des attributs. Seuls les réglages propres à B vivent dans la page.

| Moment | Effet | Attribut / règle | Durée |
|---|---|---|---|
| Titres sur plusieurs lignes (h1, raisons, avis, valeur, offres) | chaque ligne monte derrière un masque, 90 ms d'écart | `data-lignes` | 1 s |
| Apparition au défilement | montée de 26 px + fondu, 70 ms par carte d'une même grille | `data-rv` | 800 ms |
| Chiffres (15 ans, 7 jours, 100 %) | comptent jusqu'à leur valeur à l'entrée dans l'écran ; la vraie valeur reste écrite dans le HTML | `data-compte` | 1,6 s |
| Barre de lecture | 2 px en haut, dégradé bordeaux → framboise → poudre | `data-progression` | au défilement |
| Mockups (tablettes, livre, téléphones, lettrine, fauteuil) | parallaxe douce, posée sur une **enveloppe** pour ne pas écraser leurs rotations 3D | `data-parallaxe` (−0,07 à 0,12) | au défilement |
| Cartes, scène 3D, éventail, offres | s'inclinent vers la souris (6° max), pas au tactile | `data-incline` | 500 ms |
| Boutons | attirés par la souris + reflet qui balaie au survol | `reflet data-aimant` | 350 / 900 ms |
| Bouton du hero | **la lueur rose respire** (28 → 46 px) | `@keyframes souffle` | 3,2 s, en boucle |
| Prix | **reflet qui glisse dans le dégradé du chiffre** | `@keyframes reflet-prix` | 6 s, en boucle |
| Sceau de cire | **tombe et se pose** (échelle 1,35 → 1, rotation −14° → 0, léger rebond) quand la garantie entre | `.cire-zone.vu .cire` | 900 ms |
| Bandeau croisé | défilement infini, sens opposés (gardé) | `linear` | 28 s |
| Texte du sceau | tourne (gardé) | `linear` | 40 s |

Règles : jamais `data-incline` ou `data-parallaxe` sur un élément qui porte déjà sa propre rotation (tablette, livre, téléphone) ; une carte qui porte `data-rv` et `data-incline` garde ses deux transitions (règle `[data-incline][data-rv]`). Sous `prefers-reduced-motion`, tout est montré tel quel : plus d'animation, de transition, de compteur ni de parallaxe.

## 10. Non mesuré, et choix tranchés seul (mode C)
- **Polices exactes** : l'original semble utiliser une didone de caractère et une grotesque type Helvetica Now. Aucune métadonnée, donc **choix : Gilda Display + Hanken Grotesk** (Google Fonts), les plus proches en licence libre.
- **Couleur exacte de l'accent du texte** : les glyphes sont trop fins pour un pixel fiable. `#E8336D` est pris entre le bouton (`#F62960`) et le rose des titres, puis assombri pour tenir 4,5:1 sur la nuit.
- **Fin du dégradé du bouton** : l'original finit en `#F62960`, ce qui donne un blanc à 3,6:1. **Choix : finir en `#E8336D`** pour garder le texte lisible.
- **Photos** : remplacées par des silhouettes monochromes et des dégradés (règle ① : aucun actif d'autrui).
- **Sceau en cire** : c'est une photo dans l'original. Il est refait en CSS (dégradé radial et relief), donc moins réaliste.
- **Mouvement et mobile** : image fixe en version ordinateur seulement. Les §8 et §9 sont nos propositions.

## 11. Consigne pour l'IA
« Respecte DESIGN.md à la lettre. Ambiance salon de velours : nuit bordeaux `#200810` en alternance avec la crème `#F5EDE7`, un seul accent framboise `#E8336D`. Chaque titre mélange une grotesque droite et un mot clé en Gilda Display framboise. Boutons pilule en dégradé bordeaux→framboise avec une lueur rose. Pastille de rubrique au-dessus de chaque titre. Produit montré en objet 3D incliné. Pas de noir pur, pas de gris, pas de second accent, pas de serif dans le texte courant. »

## 2. Les sections, dans l'ordre

01. #hero · Le hero : Dire qui, quoi, pour qui en une phrase, puis faire cliquer. Le geste : visage seul dans la lumière, sceau à l'épaule.
02. #ebook · Le contenu : Rendre l'offre concrète, morceau par morceau. Le geste : mockup qui déborde, arabesque derrière.
03. #raisons · La bascule : Montrer pourquoi cette solution est différente. Le geste : « Raison 01 » en pilule lumineuse.
04. #contenus · Le contenu : Rendre l'offre concrète, morceau par morceau. Le geste : carrousel qui déborde.
05. #bonus · Les bonus : Faire basculer l'indécis : « si j'entre maintenant, j'ai plus ». Le geste : monogramme géant, éventail de téléphones.
06. #avis · La preuve : Faire parler les autres : « ça a marché pour des gens comme moi ». Le geste : cartes qui débordent à droite.
07. #valeur · La valeur : Faire sentir le prix avant de le montrer. Le geste : lettre géante coupée par le cadre.
08. #bandeau · Le bandeau : Remettre du mouvement entre deux sections calmes. Le geste : deux bandes croisées en sens contraire.
09. #offres · L'offre : Convertir : le prix, ce qu'il contient, le bouton. Le geste : l'offre chère seule claire sur fond sombre.
10. #garantie · La garantie : Retirer le risque : « si ça ne vous va pas, je vous rembourse ». Le geste : sceau de cire qui tombe.
11. #qui · Qui est derrière : Un humain derrière l'offre, et un lieu réel. Le geste : cadre de story.
12. #faq · La FAQ : Lever les dernières objections. Le geste : colonne étroite.
13. #pied · Le pied : La légitimité : nom, mentions, contact.

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
