# Prompt complet · Template A « Luxe sombre »
# Par Yedidia Ruben - Digital Strategist. À coller tel quel dans une IA qui code (Claude, ChatGPT, Gemini).

Tu es un designer web senior. Construis une page de vente complète en un seul fichier HTML, avec exactement le rendu décrit ci-dessous : couleurs, polices, tailles, espacements, boutons, cartes, animations. La fiche de style fait foi ; en cas de doute, applique-la à la lettre plutôt que d'improviser.

## 1. La fiche de style (DESIGN.md)

# DESIGN.md : Style A « Luxe sombre » (d'après la page « Clube dos 5% », mentorat de Jacob Petry)

> **Source** : `refs/brut/ref1.webp` (1143 × 16 383). Le haut de l'image est une planche de marque : typographie (Tiempos Headline Light + Helvetica Now Display) et palette nommée. Relevé le 08/10/2026, session `fe30eec0` (fork A).
> **Mesures** : couleurs relevées au pixel sur l'image et sur la planche. La page fait 1143 px dans l'image, soit 1440 px réels (facteur 1,26).
> **Template** : `reproduction.html` · **Sections** : `SECTIONS.md` et `sections/*.jpg` (21 sections).

## 1. Ambiance et intention
« Cercle privé. » Une page de vente longue, posée comme une lettre du mentor, lue à la lumière d'une lampe.
Un noir absolu, un beige pierre pour les moments de calcul et de raison, et une seule chaleur : le cuivre, qui brûle au bord de chaque bouton.
On vise l'adulte de 35 à 60 ans en quête de sens. Il doit sentir l'exclusivité et la gravité, jamais l'excitation du marketing.

## 2. Palette et rôles
| Rôle | Valeur | Où on l'emploie |
|---|---|---|
| Fond de page | `#000000` (planche : Brand/Black) | 80 % de la page |
| Beige pierre | `#D6D1CA` (relevé) · planche : Brand/Beige `#F0EFE9` | Sections de raison : témoignages, ancrage de prix, « vous emportez », FAQ |
| Encre sur beige | `#19130C` | Titres et texte sur beige |
| Titre sur noir | `#F2EEE8` | Titres serif |
| Texte courant sur noir | `#A6A4A0` | Paragraphes ; le gras passe en `#E3E1E2` |
| Brun profond | `#1B100B` (planche : Brand/Brown) | Fond des étiquettes « PILIER 1 », « BONUS » |
| Accent (UN SEUL) : cuivre | `#AC6E48` (relevé) → lueur `#D98C4D` | Lueur des boutons, bandeau de prix, barre sous la photo, pictos bonus |
| Bouton (pierre) | `#B8B4AE` → `#DAD6C8` | Le corps des boutons : jamais de bouton cuivre plein |
| Filet | `#1E1E1E` | Cadre vertical de la page, séparateurs, grilles |
| Pêche (planche : Brand/Yellow) | `#FFDEC9` | Réservée aux reflets de la lueur |
| Exceptions sémantiques | olive `#5C6336` (✓), brique `#A9320D` (✗) | Uniquement dans « pour qui » et le récapitulatif |

Contrastes calculés : `#F2EEE8`/`#000` = 18,5:1 · `#A6A4A0`/`#000` = 8,4:1 · `#19130C`/`#D6D1CA` = 13,1:1 · `#111`/`#C2BAB1` (bouton) = 10,2:1.

## 3. Typographie
| Usage | Police | Taille | Graisse | Interlignage | Interlettrage |
|---|---|---|---|---|---|
| Titre 1 (hero) | Newsreader (au lieu de Tiempos Headline) | 50 px | 300 | 1,15 | -0,015 em |
| Titre 2 (section) | Newsreader | 36 px | 300 | 1,2 | -0,01 em |
| Prix géant | Newsreader | 72 px | 300 | 1 | -0,02 em |
| Étiquette | Inter Tight (au lieu de Helvetica Now) | 11 px | 500, capitales | 1 | +0,16 em |
| Bouton | Inter Tight | 15 px | 700, capitales | 1 | +0,01 em |
| Texte courant | Inter Tight | 14 px | 400 | 1,7 | 0 |
| Mention (sous le bouton) | Inter Tight | 11 px | 400 italique | 1,5 | 0 |

**2 familles**, celles de la planche de marque. La serif ne passe **jamais** en gras : son autorité vient de sa finesse et de sa taille.

## 4. Composants
- **Bouton lueur** (la signature) : pilule de 64 px de haut et 380 px de large, dégradé pierre `#B8B4AE` → `#DAD6C8`, bord 1,5 px `rgba(255,255,255,.55)`, texte noir en capitales grasses. **Une braise cuivrée** (`#D98C4D` vers `#FF9A4D`, flou 18 px) est collée à son bord droit, comme une lampe derrière.
- **Étiquette de section** : rectangle plein `#1B100B`, texte `#E8DCCB` 11 px en capitales espacées, padding 9 × 18 px, **rayon 0**. Sur beige : fond `#C9C4BB`, texte `#5A554E`.
- **Bandeau d'information** : la même forme en plus large, par exemple « EN DIRECT CHAQUE LUNDI À 20 H ».
- **Cadre de page** : 2 filets verticaux `#1E1E1E` à 80 px des bords, et des filets horizontaux entre les blocs. La page ressemble à un carnet ligné.
- **Séparateur signature** : un filet de 1 px `#2A2A2A` sur toute la largeur, interrompu au centre par un segment clair de 70 × 2 px `#D6D1CA`.
- **Carte de prix** : colonne centrale noire bordée de filets, avec des **panneaux rayés** de chaque côté (`repeating-linear-gradient` à 45°, filets `#1A1A1A` tous les 14 px). Au-dessus, un bandeau cuivre `#AC6E48`.
- **Grille de méthode** : 4 × 2 cases bordées de 1 px `#1E1E1E`, avec un numéro dans un carré beige de 22 px et le nom en serif.
- **Pastille sur vidéo** : pilule noire `rgba(10,10,10,.85)`, bord `rgba(255,255,255,.25)`, texte blanc en capitales.
- **Coche ✓ / croix ✗** : carré plein de 18 px, rayon 2 px, olive `#5C6336` ou brique `#A9320D`.
- **Accordéon FAQ (beige)** : boîte bordée de 1 px `#9E978D`, rayon 6 px, question en gras 14 px, « + » à droite. La réponse s'affiche **sous** la boîte, hors du cadre.

## 5. Mise en page
- Cadre de page : **1280 px** entre les filets verticaux. Contenu de lecture : **680 px** centré pour les blocs texte, **880 px** pour les duos texte + image.
- Duos : 2 colonnes 50/50, gouttière 64 px, alternées gauche / droite d'un pilier à l'autre.
- Rythme vertical : **96 px** dans un bloc, et des filets horizontaux à la place des marges entre les blocs.
- Marge latérale au téléphone : 20 px ; les filets verticaux disparaissent.
- **Rythme des fonds** : noir (de longues plages) et beige (4 respirations) ; un bandeau cuivre fait la couture entre l'ancrage de prix et l'offre.

## 6. Profondeur et élévation
- **Ce qui crée la profondeur ici : la LUMIÈRE, pas l'ombre.** Lueur cuivrée des boutons, halos chauds derrière les photos, plis de satin sombre (`radial-gradient` brun sur noir) en fond des blocs de garantie et d'offre.
- Aucune ombre portée sur les cartes : des filets de 1 px seulement.
- Photo du hero : un dégradé noir vers le bas (`linear-gradient(transparent 60%, #000)`) fond le portrait dans la page.

## 7. À faire, à ne pas faire
À faire :
- Une étiquette brune au-dessus de chaque titre (« PILIER 2 », « BONUS 3 »).
- Des titres serif fins, en phrases complètes, avec un ton de lettre personnelle (« Quanto vale reencontrar quem você realmente é? »).
- Un ancrage de prix en escalier barré, puis le vrai prix en serif géant.
- Un bouton lueur après chaque grand bloc, toujours le même et toujours centré.
- Des captures de messages réels (WhatsApp, Instagram) comme preuve, en cartes sombres.

À ne pas faire :
- Pas de bouton cuivre plein : le cuivre est une lumière, pas une surface.
- Pas de serif en gras, pas d'italique décoratif dans les titres.
- Pas de rayon sur les étiquettes ni les cadres : seuls le bouton, les bulles et la FAQ sont arrondis.
- Pas de couleur vive en dehors des coches olive et brique.
- Pas de fond gris : c'est noir pur ou beige, jamais entre les deux.

## 8. Comportement responsive
- Points de rupture : 1024 px (les duos passent en 1 colonne, le cadre vertical disparaît) et 640 px (la grille de méthode passe en 2 × 4, la carte de prix perd ses panneaux rayés).
- Au téléphone : le titre du hero descend à 34 px, le bouton prend toute la largeur moins 40 px, et la braise reste à droite.
- Ce qui ne change jamais : la braise du bouton, les étiquettes brunes, le prix en serif géant.

## 9. Mouvement
> Moteur partagé : `commun/anim.js` + `commun/anim.css`, branchés par attributs. Les effets propres au style A vivent dans la page.

| Moment | Effet | Courbe | Durée | Décalage |
|---|---|---|---|---|
| Titres (`data-lignes`) | chaque ligne monte derrière un masque | `cubic-bezier(.16,1,.3,1)` | 1 s | 90 ms par ligne |
| Apparition au défilement (`data-rv`) | fondu + montée de 26 px | même courbe | 800 ms | 70 ms par élément d'une fratrie |
| Filet signature (`.sep`) | se dessine depuis le centre (scaleX 0 → 1) | même courbe | 1,4 s | |
| Prix d'ancrage (25 000 → 5 000 €) | barrés l'un après l'autre, trait de 1,5 px | `cubic-bezier(.65,0,.35,1)` | 700 ms | 300 ms par prix |
| Chiffres (`data-compte`) | comptent jusqu'à la valeur (18 000, 2 490) | sortie en puissance 4 | 1,6 s | |
| Braise du bouton | respire : opacité .75 ↔ 1, échelle 1 ↔ 1,08 | `ease-in-out` | 3,2 s en boucle | |
| Survol du bouton | reflet de pierre polie qui balaie le corps, braise qui glisse et s'intensifie | même courbe | 900 ms | |
| Boutons (`data-aimant`) | attirés par la souris, 6 px max | même courbe | 350 ms | |
| Cartes avis et rangées (`data-incline`) | s'inclinent vers la souris, 6° max | même courbe | 500 ms | |
| Portrait du hero, mentor en extérieur (`data-parallaxe`) | glissent plus lentement que la page (-0,05 et 0,06) | linéaire au défilement | | |
| Barre de lecture (`data-progression`) | 2 px cuivre en haut, lueur braise | linéaire au défilement | | |
| Compte à rebours | les secondes défilent | | 1 s | |

- **Le reflet n'utilise pas `.reflet` du commun** : il imposerait `overflow:hidden` et prendrait le `::after`, ce qui couperait la braise et effacerait l'éclat. Ici, le reflet est une couche de fond qui glisse.
- **Les chiffres finaux sont écrits dans le HTML** : une capture ou un robot lit la vraie valeur.
- **Sous `prefers-reduced-motion`** : tout est montré tel quel, aucune boucle, aucun suivi de souris ; seul le compte à rebours continue, car c'est une information. Au tactile, ni aimant ni inclinaison.

## 10. Non mesuré
- **Polices** : Tiempos Headline et Helvetica Now Display sont payantes. Choix du fork, en mode C : **Newsreader 300** (empattements fins, contraste proche) et **Inter Tight** (grotesque serrée proche d'Helvetica Now). Les ajuster si Ruben a les licences.
- **Écart de beige** : la planche annonce Brand/Beige `#F0EFE9`, mais les sections relevées au pixel donnent `#D6D1CA`. On garde la valeur **vue à l'écran** (`#D6D1CA`). La planche a probablement été exportée avec une autre gestion des couleurs.
- **Le swatch « Brand/Yellow »** affiche en réalité un pêche `#FFDEC9`. Il est rangé comme reflet de lueur, faute d'usage visible ailleurs.
- **Mouvement** : image fixe, donc le §9 est notre proposition.
- **Mobile** : Behance montre seulement une tablette dans la planche. Le §8 est notre proposition.
- **Bandeau « mais pour ceux qui entrent maintenant »** : du blanc sur le cuivre `#AC6E48` ne donne que 4,14:1. Le bandeau passe donc en cuivre profond `#8F5737` (contraste ≥ 5,5:1). Le cuivre clair reste réservé à la lumière et aux filets décoratifs.
- **Plis de satin** en fond (garantie, offre) : ce sont des photos dans l'original, que nous simulons en dégradés CSS.

## 11. Consigne pour l'IA
« Respecte DESIGN.md à la lettre. Noir pur et beige pierre, rien entre les deux. Serif fine (Newsreader 300) pour tous les titres, jamais en gras, et Inter Tight pour le reste. Une étiquette brune rectangulaire au-dessus de chaque titre. Bouton pilule couleur pierre avec une braise cuivrée qui respire à son bord droit, et aucun bouton cuivre plein. Profondeur par la lumière chaude, jamais par l'ombre. Cadre de page en filets fins. Pas de couleur vive, pas de rayon sur les étiquettes. »

## 2. Les sections, dans l'ordre

01. #hero · Le hero : Dire qui, quoi, pour qui en une phrase, puis faire cliquer. Le geste : portrait qui déborde d'une mosaïque sépia.
02. #messages · La preuve : Faire parler les autres : « ça a marché pour des gens comme moi ». Le geste : aucun titre, la dernière carte coupée par le bord.
03. #piliers · Le contenu : Rendre l'offre concrète, morceau par morceau. Le geste : étiquette à cheval sur le filet.
04. #pilier-1 · Le contenu : Rendre l'offre concrète, morceau par morceau. Le geste : pastilles qui débordent de l'écran.
05. #pilier-2 · Le contenu : Rendre l'offre concrète, morceau par morceau. Le geste : grille de tableur, une étape par case.
06. #pilier-3 · Le contenu : Rendre l'offre concrète, morceau par morceau. Le geste : bulles qui débordent du téléphone.
07. #pilier-4 · Le contenu : Rendre l'offre concrète, morceau par morceau. Le geste : le seul vert reste dans la capture.
08. #relance · La relance : Redonner le bouton à celui qui s'est décidé en route. Le geste : bouton lueur centré.
09. #temoignages · La preuve : Faire parler les autres : « ça a marché pour des gens comme moi ». Le geste : vidéos, celle du milieu floutée sous un bouton lecture.
10. #recit · La valeur : Faire sentir le prix avant de le montrer. Le geste : barre cuivre qui coud vers la section suivante.
11. #ancrage · La valeur : Faire sentir le prix avant de le montrer. Le geste : 4 prix barrés l'un après l'autre.
12. #offre · L'offre : Convertir : le prix, ce qu'il contient, le bouton. Le geste : panneaux rayés en écrin.
13. #bonus · Les bonus : Faire basculer l'indécis : « si j'entre maintenant, j'ai plus ». Le geste : compte à rebours sobre comme une horloge.
14. #bonus-1 · Les bonus : Faire basculer l'indécis : « si j'entre maintenant, j'ai plus ». Le geste : capture de visio.
15. #bonus-2 · Les bonus : Faire basculer l'indécis : « si j'entre maintenant, j'ai plus ». Le geste : carte mentale.
16. #bonus-3 · Les bonus : Faire basculer l'indécis : « si j'entre maintenant, j'ai plus ». Le geste : téléphone d'écoute.
17. #bonus-4 · Les bonus : Faire basculer l'indécis : « si j'entre maintenant, j'ai plus ». Le geste : ticket découpé.
18. #aussi · Les bonus : Faire basculer l'indécis : « si j'entre maintenant, j'ai plus ». Le geste : image et texte en cases jointives.
19. #offre-2 · L'offre : Convertir : le prix, ce qu'il contient, le bouton. Le geste : rappel de la carte d'offre.
20. #pour-qui · Pour qui : Trier : celui qui n'est pas la cible s'en va, celui qui l'est se sent choisi. Le geste : asymétrie noir et beige.
21. #garantie · La garantie : Retirer le risque : « si ça ne vous va pas, je vous rembourse ». Le geste : médaillon cuivre, seul objet en relief.
22. #temoignages-2 · La preuve : Faire parler les autres : « ça a marché pour des gens comme moi ». Le geste : rappel des preuves avant l'offre finale.
23. #recap · L'offre : Convertir : le prix, ce qu'il contient, le bouton. Le geste : 3 familles de pictos qui classent la valeur.
24. #faq · La FAQ : Lever les dernières objections. Le geste : réponses visibles sans clic.
25. #final · La relance : Redonner le bouton à celui qui s'est décidé en route. Le geste : lueur de braise derrière la dernière phrase.
26. #pied · Le pied : La légitimité : nom, mentions, contact.

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
