# Prompt complet · Template Q « Ciel clair »
# Par Yedidia Ruben - Digital Strategist. À coller tel quel dans une IA qui code (Claude, ChatGPT, Gemini).

Tu es un designer web senior. Construis une page de vente complète en un seul fichier HTML, avec exactement le rendu décrit ci-dessous : couleurs, polices, tailles, espacements, boutons, cartes, animations. La fiche de style fait foi ; en cas de doute, applique-la à la lettre plutôt que d'improviser.

## 1. La fiche de style (DESIGN.md)

# DESIGN.md : Style Q « Ciel clair » (d'après la page « Página de Vendas - Área de Membros | Eduarda Escobar », Padu Designer)

> **Source** : `inspi/behance/198747963/` (17 images : portrait, palette, typographie, page de vente bureau `04.png` 1400 px, téléphone `05.png` 500 px, 11 visuels de modules, bannière), Behance 198747963. La page de vente est assemblée depuis `04.png` et `05.png` ; les visuels de modules servent de référence aux cartes. Relevé le 16/11/2026.
> **Demande de Ruben** : pas de consigne de détail, lot du 16/11/2026.

## 1. Ambiance et intention

- Une formation en développement personnel vendue avec douceur : beaucoup de blanc, une brume bleu ciel, rien de criard.
- Une seule personne, détourée sur blanc, devant un nœud bleu à trois boucles flouté.
- Le bleu marche en deux temps : bleu nuit pour la gravité, bleu ciel pour l'élan. Les bandes pleines passent de l'un à l'autre en dégradé.
- Le noir n'apparaît que pour la preuve (captures WhatsApp), les modules et le bouton final.

## 2. Palette et rôles

Relevé au pixel (PIL) sur `04.png` ; la planche `02.png` donne les teintes de l'auteur (`#419BEC`, `#192F95`, `#171717`, `#FFFFFF`).

- **Ciel** `#339EEF` : boutons, badges, nœud, mots en relief (relevé sur les boutons et la pastille).
- **Nuit** `#06429C` : départ des bandes dégradées (relevé `#053E9A` et `#06429C`).
- **Bleu titre** `#0B47A8` : la partie en gras des titres.
- **Brume** `#EFF8FE` / `#D8EDFC` / `#F8FCFF` : fonds de section et halos sur les bords (relevés).
- **Encre** `#171717` : texte des titres, fond des cartes de modules, bouton d'achat (teinte de l'auteur, relevée sur les cartes).
- **Texte** `#2B2F36`, **doux** `#5A6270` : texte courant et petites lignes.
- **WhatsApp** `#0D1418`, `#202C33`, `#005C4B` : captures de messages refaites en CSS.

## 3. Typographie

- L'auteur nomme **Inter** (léger, normal, gras) : elle est sur Google Fonts, reprise telle quelle.

| Rôle | Police | Taille bureau / téléphone | Graisse | Interligne | Approche |
|---|---|---|---|---|---|
| Titre du hero | Inter | 38 / 28 px | 400 + 700 sur la fin | 1,18 | -0,01 em |
| Titre de section | Inter | 32 / 26 px | 400 + 700 en bleu | 1,2 | -0,01 em |
| Marque | Inter | 30 px | 700 | 1 | -0,02 em |
| Texte | Inter | 13,5 à 19 px | 400 | 1,3 à 1,45 | 0 |
| Bouton | Inter, capitales | 14 px | 400 | 1,2 | 0,01 em |
| Chiffre de badge | Inter | 28 px | 300 | 1 | 0 |
| Prix | Inter | 58 / 44 px | 700 | 1 | -0,02 em |

## 4. Composants

- **Bouton** : rectangle bleu `#1878CC` (le `#339EEF` du Behance ne tient pas l'AA avec du blanc : 2,9), coins 6 px, capitales fines, ombre bleue ; le bouton d'achat passe en noir.
- **Badge numéroté** : carré bleu ciel à coins 6 px, chiffre léger blanc, losange au trait gris-bleu foncé derrière.
- **Nœud** : SVG `#noeud` au trait épais, flouté, derrière les portraits.
- **Portrait en arche** : emplacement aux coins hauts très arrondis, bas fondu dans le blanc.
- **Ordinateur portable** : cadre noir et socle aluminium en CSS, penché de 8°, écran = emplacement 16:9.
- **Capture WhatsApp** : bandeau gris à avatar, bulles grises et vertes, heure en bas à droite, fond tramé.
- **Carte de module** : noire, image carrée fondue vers le bas, titre blanc, filet, « MODULE 02 » très espacé, petite marque bleue.
- **Sceau coché** : étoile dentelée blanche au trait avec une coche, pour les piliers.

## 5. Mise en page

- Colonne étroite de 800 px, sauf les bandes dégradées pleine largeur.
- Ordre : hero, vidéo, blocages, pourquoi, témoignages, piliers, contenus, mentore, offre, relance, pied.
- Alternance : blanc et brume, bande bleue, blanc, bande bleue inversée, brume, blanc, bande bleue.
- Espacement vertical : 60 à 100 px. Un bouton répété après chaque grand bloc.

## 6. Profondeur et élévation

- Peu d'ombres : la vidéo et les modules flottent sur une ombre bleutée.
- L'ordinateur déborde de la bande bleue par le haut.
- Les portraits sortent du nœud flouté ; le quadrillage très pâle donne une texture au fond.

## 7. À faire, à ne pas faire

- Faire : une moitié de titre en noir léger, l'autre en bleu gras.
- Faire : répéter le même bouton entre les sections.
- Ne pas faire : de bleu ciel pour du texte fin sur blanc en dessous de 18 px (contraste 2,9) : utiliser le bleu titre `#0B47A8`.
- Ne pas faire : de couleur chaude, sauf dans les images de modules.

## 8. Comportement responsive

- Behance montre bureau et téléphone : le téléphone suit leur maquette.
- Sous 820 px : portrait au-dessus du texte, ordinateur au-dessus du texte de la bande, modules en carrousel glissé, mentore centrée, badges en 2 colonnes.
- Sous 520 px : badges en 1 colonne, témoignages en 1 colonne (4 captures gardées).

## 9. Mouvement

- Moteur commun : `data-rv` partout, `data-parallaxe` sur les nœuds, `data-aimant` et `.reflet` sur les boutons, barre de progression bleu ciel.
- Propre à Q : rien d'autre, la page reste calme.

## 10. Images

| Id | Format | Section | Rôle | Personnage |
|---|---|---|---|---|
| Q-hero | 3:4 | hero | portrait, menton sur la main | oui |
| Q-video | 16:9 | video | vignette de vidéo en noir et blanc | oui |
| Q-ecran | 16:9 | pourquoi | écran de l'ordinateur, page de la formation | oui |
| Q-module-1 | 1:1 | contenus | de dos face à une galaxie | oui |
| Q-module-2 | 1:1 | contenus | chemin de lumière | non |
| Q-module-3 | 1:1 | contenus | billets dans un drapé irisé | non |
| Q-mentore | 3:4 | mentore | profil, bras croisés | oui |

- **Personnage** : Grâce Akakpo, 27 ans, Lomé, peau brun moyen, afro volumineux, visage fin, sourire franc avec fossettes ; signature : lunettes rondes à monture transparente. Consignes complètes : `images/commandes.json`.

## 11. Non mesuré, et choix tranchés seul

- La marque « L'Élan », les textes, les prix en F CFA (6 x 9 900 ou 49 000 comptant).
- Les 6 blocages : le Behance répète 3 phrases deux fois, ici 6 phrases distinctes.
- Les captures WhatsApp refaites en CSS, avec des messages écrits pour la marque.
- Les boutons foncés en `#1878CC`, les badges en `#2B8FE0` et le départ de la bande des piliers en `#1878CC`, pour le contraste du texte blanc.
- Le nœud du Behance (triquetra) redessiné à la main au trait.
- La zone « espace membres » (11 visuels de modules) n'est pas une section de la page de vente : seules 3 cartes de modules sont reprises, comme sur la page.

## 12. Consigne pour l'IA

Construis une page de vente de formation en ligne sur fond blanc et brume bleu ciel `#EFF8FE`, en Inter. Chaque titre a une moitié en noir léger et une moitié en bleu gras. Le portrait détouré de la mentore sort d'un nœud bleu ciel `#339EEF` flouté. Deux bandes pleine largeur en dégradé bleu nuit `#06429C` vers bleu ciel portent le pourquoi (avec un ordinateur penché) et les 4 piliers. Six blocages en badges numérotés dans un losange. La preuve est un mur de captures WhatsApp sombres. L'offre finit sur une bande bleue avec les valeurs barrées, un prix géant et un bouton noir.

## 2. Les sections, dans l'ordre

01. #hero · Le hero : Dire qui, quoi, pour qui en une phrase, puis faire cliquer. Le geste : portrait en arche devant un nœud bleu flouté.
02. #video · La preuve : Faire parler les autres : « ça a marché pour des gens comme moi ». Le geste : vidéo en noir et blanc, ombre bleutée.
03. #defis · La douleur : Le visiteur se reconnaît : « c'est moi ». Le geste : six badges numérotés dans un losange au trait.
04. #pourquoi · La bascule : Montrer pourquoi cette solution est différente. Le geste : bande dégradée, ordinateur penché qui déborde.
05. #temoignages · La preuve : Faire parler les autres : « ça a marché pour des gens comme moi ». Le geste : mur de captures WhatsApp en colonnes.
06. #piliers · La valeur : Faire sentir le prix avant de le montrer. Le geste : bande dégradée inversée, sceaux cochés blancs.
07. #contenus · Le contenu : Rendre l'offre concrète, morceau par morceau. Le geste : trois cartes de modules noires, image fondue.
08. #mentore · Qui est derrière : Un humain derrière l'offre, et un lieu réel. Le geste : portrait en arche, nœud bleu, texte dense.
09. #offre · L'offre : Convertir : le prix, ce qu'il contient, le bouton. Le geste : valeurs barrées, prix géant, bouton noir.
10. #relance · La relance : Redonner le bouton à celui qui s'est décidé en route. Le geste : pastille au filet bleu, bouton WhatsApp.
11. #pied · Le pied : La légitimité : nom, mentions, contact. Le geste : logo centré, une ligne en capitales.

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
