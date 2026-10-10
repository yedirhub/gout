# Prompt complet · Template C « Magazine affirmé »
# Par Yedidia Ruben - Digital Strategist. À coller tel quel dans une IA qui code (Claude, ChatGPT, Gemini).

Tu es un designer web senior. Construis une page de vente complète en un seul fichier HTML, avec exactement le rendu décrit ci-dessous : couleurs, polices, tailles, espacements, boutons, cartes, animations. La fiche de style fait foi ; en cas de doute, applique-la à la lettre plutôt que d'improviser.

## 1. La fiche de style (DESIGN.md)

# DESIGN.md : Style C « Magazine affirmé » (d'après la page « Jornada Digital », Fortes Digital)

> **Sources** : `refs/brut/ref4.webp` (ordinateur, 1400 px) et `refs/brut/ref3.webp` (le même site en mobile, 390 px). Relevé le 08/10/2026, session `fe30eec0`.
> **Mesures** : couleurs relevées au pixel (couleurs dominantes par zone). Tailles converties : 1400 px dans l'image = 1440 px réels (facteur 1,03). Le mobile est à l'échelle 1:1.
> **Template** : `reproduction.html` · **Sections** : `SECTIONS.md`, `sections/*.jpg` (ordinateur) et `sections/mobile/*.jpg`.

## 1. Ambiance et intention
« Magazine de mode. » Une formatrice qui parle à des débutant(e)s qui se sentent perdu(e)s, avec l'aplomb d'une couverture de magazine.
Fond crème chaud, un rouge sang qui frappe, des titres serrés à la Helvetica, et l'interface d'une story Instagram posée sur les photos.
On doit sentir « c'est sérieux et c'est désirable » avant d'avoir lu une ligne.

## 2. Palette et rôles
| Rôle | Valeur | Où on l'emploie |
|---|---|---|
| Fond crème (principal) | `#F5EFEA` | Hero, sections du haut, cartes de la FAQ |
| Fond crème clair | `#FCF9F3` | Bas de page (bonus, offre, avis, qui sommes-nous) |
| Fond crème sable | `#F8F3E9` | Section du mot géant, fond des bandes claires |
| Blanc | `#FFFFFF` | Cartes (programme, apprentissages, carte de prix) |
| Encre brune (titres) | `#362725` | Titres et gras, jamais de noir pur |
| Texte courant | `#6E615C` | Paragraphes (relevé à `#7B6E69`, foncé pour passer 4,5:1, voir §10) |
| Accent (UN SEUL) : rouge sang | `#8E0012` | Boutons, mot géant, prix, coches, mots clés des titres |
| Bordeaux (surface sombre) | `#5B0118` | Bandes inclinées, étiquettes, carte « qui sommes-nous », fond de la FAQ et du pied |
| Exception : rouge corail | `#CC3334` | Uniquement les anneaux derrière le portrait du hero |
| Texte discret | `#73665F` | Bandeau défilant, métadonnées (4,8:1) |
| Filet | `#E4D9D2` | Bordures du bandeau et des cartes |

Contrastes calculés : encre/crème `#362725`/`#F5EFEA` = 12,5:1 · texte/crème `#6E615C`/`#F5EFEA` = 5,2:1 · blanc/rouge `#FFF`/`#8E0012` = 9,7:1 · rouge/crème = 8,5:1 · blanc/bordeaux = 14,4:1.
🔴 **Le rouge et le bordeaux ne sont pas deux accents.** Le rouge sert à l'action, le bordeaux sert de surface. Jamais de bouton bordeaux, jamais de grand aplat rouge.

## 3. Typographie
| Usage | Police | Taille ordinateur / mobile | Graisse | Interlignage | Interlettrage |
|---|---|---|---|---|---|
| Mot géant | Inter Tight | 22 vw, max 330 px / 220 px rogné | 500 | 0,8 | -0,06 em |
| Titre 1 (hero) | Inter Tight | 52 px / 40 px | 400 | 1,04 | -0,04 em |
| Titre 2 (section) | Inter Tight | 44 px / 31 px | 400 | 1,06 | -0,04 em |
| Prix | Inter Tight | 128 px / 104 px | 600 | 0,8 | -0,07 em |
| Sur-titre `// …` | Inter Tight | 11 px | 600, capitales | 1 | +0,02 em |
| Texte courant | Inter Tight | 15 à 16 px / 13 px | 400 (+ 600 pour les mots clés) | 1,5 | 0 |
| Bouton | Inter Tight | 14 px / 13 px | 600, capitales | 1 | +0,01 em |

**1 seule famille.** Tout le caractère vient de l'interlettrage très serré et de l'écart de taille (11 px → 330 px).
🔴 **La signature : dans un titre, la fin passe en rouge sang** (« … *pour te sortir du doute et te mettre en action.* »), jamais un mot isolé au milieu.

## 4. Composants
- **Bouton principal** : rectangle presque droit (rayon 2 px), **hauteur 70 px**, fond `#8E0012`, capitales blanches 14 px, icône « entrer » →] à droite. Au survol : fond bordeaux, la flèche avance de 4 px. Au mobile, il prend toute la largeur.
- **Barre de story** : 3 traits de progression de 2 px, avatar de 16 px + identifiant + « 12 h », « ··· ✕ » à droite. Posée sur les photos du hero et de « qui sommes-nous ».
- **Colonne d'outils** : « Aa ∞ ▣ ◉ ⌃ » en rouge, verticale, à côté des photos. C'est l'éditeur de story qui fait office d'ornement.
- **Étiquette sur photo** : bloc bordeaux, texte crème 13 px avec mots clés en gras, et un filet blanc intérieur décalé de 4 px.
- **Pilule « Tu vas apprendre »** : rond rose pâle `#F7E7E8` avec une icône, suivi d'une pilule bordeaux en 9 px.
- **Ligne de programme** : fond crème, rayon 4 px, hauteur 92 px, coche ronde rouge de 22 px, texte 14 px en 600.
- **Sceau tournant** : cercle de 96 à 110 px, monogramme au centre, texte en cercle qui tourne en 30 s.
- **Accordéon FAQ** : carte crème, question en 22 px, carré de 40 px rayon 6 px (rouge plein fermé, contour encre ouvert).
- **Prix** : « 4x de / € » empilé à gauche, chiffre géant rouge, centimes en encre, puis une pilule pointillée « ou 699 € comptant ».

## 5. Mise en page
- Largeur maximale du contenu : **960 px**, centré. Ce qui déborde, c'est l'ornement : mot géant, bandes, carrousels.
- Grille : 2 colonnes 50/50 (hero, vérité, offre). **4 colonnes collées à 6 px** pour les photos de douleur. 3 colonnes à 10 px pour le programme.
- Rythme vertical : 90 à 110 px entre les sections. Le contenu respire, puis une bande ou un mot géant vient casser le rythme.
- Marge latérale au téléphone : 20 px (mesurée sur ref3 : 30 px de bord à bord pour le texte, 20 px pour les cartes).
- **Alternance** : crème, bandeau, crème, **bande inclinée**, crème, **mot géant**, programme en carte blanche, bonus, offre, avis, carte bordeaux, **FAQ pleine bordeaux**.

## 6. Profondeur et élévation
- **Ce qui crée la profondeur ici : la superposition.** Une photo passe devant le mot géant, un mot passe devant la photo, les bandes se croisent, le sceau chevauche la carte de prix.
- Ombres très rares : les cartes « tu vas apprendre » et le collage de téléphones (`0 20px 40px -30px rgba(54,39,37,.35)`).
- Le reflet du mot géant (miroir vertical, opacité 7 %, masque en dégradé) pose le mot sur un sol.

## 7. À faire, à ne pas faire
À faire :
- Des photos du ou de la formateur(ice) **détourées**, qui passent devant le texte géant.
- Les photos d'ambiance (douleurs, mosaïque) en **noir et blanc**, pour que le rouge reste seul en couleur.
- Un sur-titre `// en capitales` au-dessus de chaque titre.
- Un bouton plein rectangle à la fin de chaque section.
- Au moins deux ornements en mouvement : le bandeau horizontal et les bandes inclinées.

À ne pas faire :
- Pas de coins arrondis au-delà de 6 px (sauf pilules et sceau).
- Pas de noir pur : l'encre est un brun `#362725`.
- Pas de deuxième famille de police, pas d'italique.
- Pas de couleur en dehors du rouge, du bordeaux et des crèmes (le corail reste réservé aux anneaux du hero).
- Ne jamais mettre le rouge sang en grand aplat : c'est le rôle du bordeaux.

## 8. Comportement responsive (MESURÉ sur ref3, 390 px)
- Points de rupture : 1024 px (les 2 colonnes passent en 1) et 640 px (mise en page mobile complète).
- **La photo passe AVANT le texte** dans le hero et dans « qui sommes-nous ». Au téléphone, le visage arrive en premier.
- Le texte du hero, de la vérité, des titres et de l'offre se **centre**. Sur ordinateur, il est aligné à gauche.
- Les 4 photos de douleur s'empilent en 1 colonne, hauteur 190 px, étiquette resserrée au centre.
- Le **mot géant reste géant (≈ 220 px) et se fait rogner** sur les bords : on ne le réduit pas pour qu'il tienne.
- Le programme passe en 1 colonne de lignes de 92 px, texte 17 px.
- L'offre s'empile : la liste centrée sur fond crème, puis la carte de prix blanche.
- Ce qui ne change jamais : le bouton de 68 à 70 px de haut, les bandes inclinées, la FAQ bordeaux.

## 9. Mouvement
| Moment | Effet | Courbe | Durée | Décalage |
|---|---|---|---|---|
| Bandeau horizontal | défilement continu vers la gauche | `linear` | 40 s en boucle | aucun |
| Bandes inclinées | défilement en sens opposés (l'une inversée) | `linear` | 40 s en boucle | aucun |
| Sceau | rotation complète | `linear` | 30 s en boucle | aucun |
| Apparition au défilement (`data-rv`, moteur `commun/anim.js`) | montée de 26 px + fondu | `cubic-bezier(.16,1,.3,1)` | 800 ms | 70 ms par élément d'une même fratrie |
| Titres à plusieurs lignes (`data-lignes`) | chaque ligne monte derrière un masque | même courbe | 1 s | 90 ms par ligne |
| Mots rouges du titre du hero | un trait rouge de 2 px se dessine dessous, une fois les lignes arrivées | même courbe | 900 ms | 1,1 s |
| Chiffres +7, +300 et prix 179 (`data-compte`) | comptent de 0 à leur valeur à l'écran (la vraie valeur reste écrite avant) | sortie en puissance 4 | 1,6 s | aucun |
| Mot géant ATELIER (effet magazine) | se dévoile de bas en haut en volet, comme une une qu'on imprime ; puis glisse plus lentement que la page (`data-parallaxe` -0,1) | même courbe | 1,3 s | 100 ms |
| MONTAGE (section « nous ») | parallaxe légère (`data-parallaxe` 0,08) | aucun | au défilement | aucun |
| Barre de story (effet magazine) | la première barre se remplit en continu, comme une vraie story | `linear` | 6 s en boucle | aucun |
| Barre de lecture (`data-progression`) | trait rouge de 2 px en haut de page, suit le défilement | aucun | au défilement | aucun |
| Cartes, photos, app (`data-incline`) | s'inclinent vers la souris, 6° max (souris seulement) | même courbe | 500 ms | aucun |
| Boutons principaux (`.reflet` + `data-aimant`) | reflet qui balaie au survol, bouton attiré de 6 px vers la souris | même courbe | 900 ms / 350 ms | aucun |
| Survol du bouton | fond bordeaux, la flèche avance de 4 px | même courbe | 300 ms | aucun |
| FAQ | l'icône passe de plein à contour | même courbe | 300 ms | aucun |
Rien ne bouge sous `prefers-reduced-motion` : le moteur montre tout tel quel, les chiffres sont écrits en entier, les boucles (bandeaux, sceau, story) sont coupées.
Noms réservés par le moteur : ne pas utiliser `.reflet` ni `.ligne` pour autre chose (le miroir du mot géant s'appelle `.miroir`, la ligne « Tu montes » `.mots`).

## 10. Non mesuré, et choix tranchés seul (mode C)
- **Police** : l'original ressemble à Helvetica Now Display, payante. **Choix : Inter Tight** (Google Fonts), la plus proche en gratuit.
- **Texte courant** : relevé à `#7B6E69`, ce qui donne 4,3:1 sur la crème, sous la règle R2 (4,5:1). **Choix : foncé à `#6E615C`** (5,2:1).
- **Mouvement** : les images sont fixes, donc le §9 est une proposition. Seuls les bandeaux sont des défilements évidents dans l'original (texte coupé aux bords).
- **Carrousels** : bonus et avis sont des carrousels dans l'original (pagination visible). **Choix : rails statiques qui débordent**, sans JavaScript de glissement.
- **Photos** : aucune photo de l'original n'est reprise. Ce sont des images d'attente (silhouettes monochromes et dégradés), signalées par une étiquette.
- **Contenu** : entièrement inventé (formation fictive « Atelier Montage », à Paris).
- **Erreur de l'original non reproduite** : au mobile, le sur-titre de la FAQ dit « // INVESTIMENTO ». Nous avons mis « // FAQ ».

## 11. Consigne pour l'IA
« Respecte DESIGN.md à la lettre. Fond crème chaud, encre brune, un seul accent rouge sang `#8E0012` pour l'action et un bordeaux `#5B0118` pour les surfaces. Une seule police, Inter Tight, très serrée (-0,04 em). La fin de chaque titre passe en rouge. Boutons rectangles de 70 px en capitales. Un mot géant derrière une photo détourée, des bandes inclinées qui défilent, l'interface de story Instagram posée sur les photos. Photos d'ambiance en noir et blanc. Au mobile : photo d'abord, texte centré, mot géant rogné. Pas de coins ronds, pas de noir pur, pas de deuxième police. »

## 2. Les sections, dans l'ordre

01. #hero · Le hero : Dire qui, quoi, pour qui en une phrase, puis faire cliquer. Le geste : interface de story Instagram posée sur le portrait.
02. #verite · La douleur : Le visiteur se reconnaît : « c'est moi ». Le geste : citation soulignée d'un trait rouge.
03. #douleurs · La douleur : Le visiteur se reconnaît : « c'est moi ». Le geste : photos en noir et blanc, étiquettes rouges.
04. #bascule · La bascule : Montrer pourquoi cette solution est différente. Le geste : phrase répétée qui sort du cadre.
05. #geant · Le contenu : Rendre l'offre concrète, morceau par morceau. Le geste : la photo passe devant le mot géant.
06. #programme · Le contenu : Rendre l'offre concrète, morceau par morceau. Le geste : carte posée sur la couture de deux fonds.
07. #bonus · Les bonus : Faire basculer l'indécis : « si j'entre maintenant, j'ai plus ». Le geste : carrousel de couvertures.
08. #offre · L'offre : Convertir : le prix, ce qu'il contient, le bouton. Le geste : bandes « plus que 18 places » derrière la carte.
09. #avis · La preuve : Faire parler les autres : « ça a marché pour des gens comme moi ». Le geste : des messages plutôt que des citations.
10. #nous · Qui est derrière : Un humain derrière l'offre, et un lieu réel. Le geste : mot coupé par la photo.
11. #faq · La FAQ : Lever les dernières objections. Le geste : accordéons sur fond rouge sang.
12. #pied · Le pied : La légitimité : nom, mentions, contact.

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
