# Prompt complet · Template U « Colonnes de bronze »
# Par Yedidia Ruben - Digital Strategist. À coller tel quel dans une IA qui code (Claude, ChatGPT, Gemini).

Tu es un designer web senior. Construis une page de vente complète en un seul fichier HTML, avec exactement le rendu décrit ci-dessous : couleurs, polices, tailles, espacements, boutons, cartes, animations. La fiche de style fait foi ; en cas de doute, applique-la à la lettre plutôt que d'improviser.

## 1. La fiche de style (DESIGN.md)

# DESIGN.md : Style U « Colonnes de bronze » (d'après la page « Landing Page - Método PRO Lucro », Jean Lucas)

> **Source** : `inspi/behance/243974351/01.png` (1920 x 10 534), page de vente d'une méthode de gestion financière pour entrepreneuses, Behance 243974351. Relevé le 16/11/2026, découpé en 4 tranches de 1000 x 1600.
> **Demande de Ruben** : pas de consigne de détail, lot du 16/11/2026.

## 1. Ambiance et intention

- La gestion financière vendue comme un héritage solide : colonnes antiques, crème, bronze, nuit chaude.
- Deux plans de lumière : le crème lumineux (contenu, preuves) et la nuit brune (hero, formules, qui je suis), raccordés par des vagues et des arcs.
- Tout ce qui se clique est un lingot de bronze brossé.
- Un papillon fin revient comme signature (diagramme, cachet, bandeau final).

## 2. Palette et rôles

Relevé au pixel avec PIL sur l'image d'origine.

- **Nuit** `#100C07` : bandes sombres (pour qui, formules, qui) ; **noir** `#070707` : fond du hero.
- **Crème** `#F8F2EB` : fond principal ; **crème froide** `#F3F1ED` : FAQ et fin de page.
- **Or** `#B79E80` : mots clés sur nuit, en-tête du plan premium, pastilles de coche, carrés des réseaux.
- **Bronze** `#9C7E5F` : en-têtes de modules, chevrons, FAQ ouverte ; dégradé du bouton `#D0BDA8` vers `#AD8C67`.
- **Brun texte** `#452D18` : titres et mots en gras sur crème.
- **Ardoise** `#323435` et **carte noire** `#1B1B1B` : le plan de base.
- **Bordeaux** `#280101` / **rubis** `#8F1110` : « les autres méthodes » ; **forêt** `#0F2907` / **mousse** `#1F3211` : notre méthode.
- **Vert WhatsApp** `#018816` : le seul bouton de contact.

## 3. Typographie

- Non nommée par l'auteur. Relevé à l'œil : grotesque géométrique douce, grand œil, très lisible. La plus proche sur Google Fonts : **Plus Jakarta Sans** (une seule famille, graisses 400 à 800).

| Rôle | Police | Taille bureau / téléphone | Graisse | Interligne | Approche |
|---|---|---|---|---|---|
| Titre du hero | Plus Jakarta Sans | 46 / 32 px | 600 | 1,25 | -0,02 em |
| Titre de section | Plus Jakarta Sans | 36 / 25 px | 400, mots clés 700 | 1,22 | -0,02 em |
| Logo « CAP » | Plus Jakarta Sans | 46 px | 800, dégradé bronze | 1 | -0,04 em |
| Texte | Plus Jakarta Sans | 15 à 22 px | 400 | 1,55 | 0 |
| Prix | Plus Jakarta Sans | 116 / 56 px | 700 | 1 | -0,05 em |
| Étiquette | Plus Jakarta Sans | 13 px | 500, barre bronze devant | 1 | 0 |
| Bouton | Plus Jakarta Sans | 16 px | 700 | 1,2 | 0 |

## 4. Composants

- **Bouton lingot** : coins de 8 px, dégradé bronze brossé, carré blanc à flèche ; variante contour pour le plan de base.
- **Colonne** : colonne antique en SVG à cannelures, dégradé pierre, tige et point bronze avec le nom du pilier au-dessus.
- **Diagramme** : trois cercles doublés au trait bronze, papillon au centre, noms en deux tons.
- **Module** : en-tête bronze avec pastille « Module 1 », sous-thèmes en accordéons blancs à chevron rond.
- **Carte « pour toi »** : dégradé blanc vers crème, carré or à coche, petit filet en haut.
- **Formule** : tête arrondie (ardoise ou or avec « Le choix idéal ») et code-barres décoratif, corps de liste à coches vertes ou croix grises, prix géant dans un cartouche.
- **Bulle de dialogue** : pilule or avec une queue à gauche.
- **Publication** : carte façon réseau social, photo 3:4, légende blanche à filet rubis posée dessus.
- **Duel** : deux blocs aux pilules arrondies, rubis à croix contre mousse à coches, titre en pilule qui déborde.
- **Cachet** : texte en cercle qui tourne autour d'un papillon.

## 5. Mise en page

- Colonne de 1280 px ; textes de titre centrés sur 1040 px.
- Grille fine de 64 px sur tout le crème.
- Transitions : arc sous le hero, vague nuit sous la carte « pour toi », vague crème sous les formules, filet bronze à languette entre « qui » et la FAQ.
- Espacement vertical : 60 à 80 px.

## 6. Profondeur et élévation

- Ombres brunes et longues sous les boutons, la vidéo et les publications.
- La carte « pour toi » chevauche la vague ; les titres de duel chevauchent leur bloc ; la carte de chiffre d'affaires chevauche le téléphone.

## 7. À faire, à ne pas faire

- Faire : un mot clé en gras par titre, jamais tout le titre.
- Faire : réserver l'or au texte sur fond nuit et aux pastilles.
- Ne pas faire : de texte or pâle `#CDB8A0` sur crème (contraste 1,8) ; les petits noms du diagramme passent à `#8E7152`.
- Ne pas faire : de vert ailleurs que dans les coches, le duel et WhatsApp.

## 8. Comportement responsive

- Behance ne montre que le bureau. Le téléphone est notre proposition.
- Sous 1100 px : modules et cartes « pour toi » en 2 colonnes. Sous 820 px : photo du hero au-dessus du titre, formules et duel empilés, une seule publication visible, bandeau final en colonne. Sous 560 px : tout en une colonne, colonnes antiques réduites à 50 px.

## 9. Mouvement

- Moteur commun : `data-rv`, `data-lignes`, `data-aimant`, `.reflet` sur les boutons clés, barre de progression or.
- Propre à U : le cachet tourne (22 s) ; les chevrons pivotent à l'ouverture des accordéons.

## 10. Non mesuré, et choix tranchés seul

- La police (§3).
- La marque « Méthode Cap Marge », les textes, les prix en FCFA (250 000 et 380 000), les trois clientes.
- Les publications Instagram : reprises comme cartes génériques, sans marque de réseau.
- Le téléphone et sa carte de chiffre d'affaires dessinés en HTML.
- Le téléphone (§8).

## 11. Images

Personnage : **Estelle Nkoghe**, 39 ans, Libreville, peau brun clair, carré lisse noir au menton, visage anguleux ; signature : boucles d'oreilles perle, chemise ample. Elle apparaît sur 4 images sur 7 ; les 3 autres sont ses clientes.

| id | format | rôle |
|---|---|---|
| U-hero | 4:3 | la fondatrice à son bureau, fondue à droite du hero |
| U-video | 16:9 | image de la vidéo de présentation |
| U-cas-1 | 3:4 | cliente architecte d'intérieur |
| U-cas-2 | 3:4 | cliente consultante en marque |
| U-cas-3 | 3:4 | cliente esthéticienne |
| U-qui-fond | 9:16 | gros plan pâle en bord de page, bloc « qui » |
| U-portrait | 3:4 | portrait assis du bloc « qui » |

Les consignes complètes sont dans `images/commandes.json`.

## 12. Consigne pour l'IA

Construis une page de vente de méthode financière en crème `#F8F2EB` sur grille fine, avec des bandes nuit `#100C07` raccordées par des arcs et des vagues. Titres en Plus Jakarta Sans 400 avec un passage en gras brun `#452D18`. Tous les boutons sont des lingots de bronze brossé avec un carré blanc à flèche. Montre quatre colonnes antiques dorées pour les quatre piliers, puis un diagramme de cercles au trait bronze, des modules en accordéon, deux formules côte à côte (ardoise et or mise en avant) aux prix géants, un duel rubis contre forêt en pilules, et une FAQ dont la question ouverte devient bronze.

## 2. Les sections, dans l'ordre

01. #hero · Le hero : Dire qui, quoi, pour qui en une phrase, puis faire cliquer. Le geste : photo fondue à droite, bas en arc, rond fléché.
02. #video · La preuve : Faire parler les autres : « ça a marché pour des gens comme moi ». Le geste : lecteur vidéo crème, boutons ronds bronze.
03. #piliers · Le contenu : Rendre l'offre concrète, morceau par morceau. Le geste : quatre colonnes antiques, cercles entrelacés, modules en accordéon.
04. #pour-qui · Pour qui : Trier : celui qui n'est pas la cible s'en va, celui qui l'est se sent choisi. Le geste : carte blanche posée sur une vague nuit.
05. #plans · L'offre : Convertir : le prix, ce qu'il contient, le bouton. Le geste : deux plans : ardoise barrée, bronze mis en avant.
06. #sur-mesure · La bascule : Montrer pourquoi cette solution est différente. Le geste : bulle de dialogue bronze.
07. #cas · La preuve : Faire parler les autres : « ça a marché pour des gens comme moi ». Le geste : publications sociales, puis duel bordeaux contre forêt.
08. #qui · Qui est derrière : Un humain derrière l'offre, et un lieu réel. Le geste : portrait, cachet tournant au papillon.
09. #faq · La FAQ : Lever les dernières objections. Le geste : accordéon bronze, bandeau nuit WhatsApp.
10. #final · La relance : Redonner le bouton à celui qui s'est décidé en route. Le geste : téléphone et carte de chiffre d'affaires.
11. #pied · Le pied : La légitimité : nom, mentions, contact. Le geste : trois carrés bronze pour les réseaux.

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
