# Prompt complet · Template O « Faisceau de scène »
# Par Yedidia Ruben - Digital Strategist. À coller tel quel dans une IA qui code (Claude, ChatGPT, Gemini).

Tu es un designer web senior. Construis une page de vente complète en un seul fichier HTML, avec exactement le rendu décrit ci-dessous : couleurs, polices, tailles, espacements, boutons, cartes, animations. La fiche de style fait foi ; en cas de doute, applique-la à la lettre plutôt que d'improviser.

## 1. La fiche de style (DESIGN.md)

# DESIGN.md : Style O « Faisceau de scène » (d'après la page « Página de Vendas - Formação Oratória de Alto Impacto », Gustavo Loff)

> **Source** : `inspi/behance/240933795/01.png` (1505 × 16383 px), page de vente d'une formation à la prise de parole, Behance 240933795. Relevé le 16/11/2026.
> **Demande de Ruben** : pas de consigne de détail, lot du 16/11/2026.

## 1. Ambiance et intention

- Une page de vente longue et directe, qui parle fort : tout en capitales grasses, noir pur, orange en aplats.
- Le geste du hero : un faisceau orange vertical, comme un projecteur de scène, derrière l'oratrice.
- Un seul bouton répété partout : pilule vert lime qui luit, comme un néon. C'est la seule couleur froide de la page, elle ne sert qu'à l'action.
- Le rythme alterne noir, une respiration blanche, et deux bandes orange pleines.

## 2. Palette et rôles

- **Noir** `#000000` : fond de presque toute la page ; **nuit** `#101010` : le pied.
- **Orange** `#F5761D` : bande d'infos, carte d'appel, étiquettes « Cours », pastilles, en-têtes des formules, bande « Pourquoi », rangées de FAQ.
- **Vert lime** `#89F21B` : tous les boutons d'achat, avec un halo du même vert.
- **Blanc** `#FFFFFF` : titres, fond de la section d'appel, bouton sur orange.
- **Filigrane** `#EBEBEB` (relevé `#E1E1E1` à `#CFCFCF`) : le mot géant derrière la carte d'appel.
- **Filet** `#BABABA` : contour fin des cartes du programme, des formules, des lignes.
- **Rouge** `#FF2A1A` : le triangle d'alerte et « Les places sont limitées ».
- **Vert WhatsApp** `#2DC547` : le seul bouton de contact.

## 3. Typographie

- Relevé à l'œil : grotesque neutre, très proche d'**Inter** (Google Fonts), seule police de la page. Le logo est en Inter 900 italique.

| Rôle | Police | Taille bureau / téléphone | Graisse | Interligne | Approche |
|---|---|---|---|---|---|
| Logo | Inter italique | 30 px | 900 | 1 | -0,02 em, capitales |
| Titre du hero | Inter | 34 / 24 px | 700 | 1,3 | capitales |
| Titre de section | Inter | 30 / 24 px | 700 | 1,2 à 1,4 | capitales |
| Titre de cours | Inter | 18 px | 600 | 1,4 | capitales |
| Texte | Inter | 16 px | 400 | 1,4 à 1,5 | 0 |
| Prix | Inter | 100 / 54 px | 700 | 1,05 | -0,03 em |
| Bouton | Inter | 16 px | 700 | 1,2 | capitales |

## 4. Composants

- **Bouton néon** : pilule vert lime 48 px, texte noir en capitales, halo vert de 22 px qui grandit au survol.
- **Bande d'infos** : orange pleine sous le hero, 4 infos à pictogramme blanc (dates, heure, Zoom, places).
- **Carte d'appel** : orange, coins 14 px, titre en capitales blanches, bouton blanc ; elle chevauche un mot géant gris clair en italique.
- **Carte de cours** : filet gris, coins 16 px, étiquette orange « Cours 1 », titre en capitales, puces rondes orange à chevron.
- **Vignette vidéo** : carré, bouton lecture en verre dépoli.
- **Ligne de bénéfice** : rond orange à flèche, début en gras, filet gris dessous.
- **Carte « pour qui »** : filet gris, numéro dans un rond orange.
- **Formule** : en-tête orange, avantages en petites cartes à filet et coche orange, ancien prix barré, prix géant, bouton néon.
- **FAQ** : rangées orange pleines, rond blanc à « + » orange qui tourne en croix à l'ouverture ; le mot « FAQ » géant s'efface du blanc au noir.

## 5. Mise en page

- Colonne de 920 px ; les listes et grilles se resserrent à 560 à 710 px au centre.
- Ordre : hero et bande d'infos, appel (fond blanc), programme, résultats, ce que vous saurez faire, pour qui, offre, formatrice, pourquoi ce prix (bande orange), alerte, FAQ, contact, pied.
- Un bouton néon après chaque bloc de preuve.
- Espacement vertical : 90 à 120 px entre sections.

## 6. Profondeur et élévation

- Presque plat : des filets gris, pas d'ombre, sauf la grande ombre douce de la carte d'appel sur le blanc.
- La lumière fait la profondeur : halo vert des boutons, faisceau et lueur orange derrière les portraits.

## 7. Images

| Id | Format | Rôle |
|---|---|---|
| O-hero | 1:1 | Clarisse devant le faisceau orange, sourire ouvert |
| O-temoin-1 à O-temoin-4 | 1:1 | Vignettes des témoignages vidéo |
| O-mentore | 4:3 | Clarisse sur scène, micro serre-tête |
| O-scene-1 | 4:3 | Clarisse face à une salle pleine |
| O-scene-2 | 4:3 | Le public dans la salle |

- **Personnage** : Clarisse Mbarga, 45 ans, Yaoundé, peau brun moyen, cheveux naturels très courts grisonnants aux tempes, pommettes hautes, gestuelle ouverte ; grandes boucles d'oreilles géométriques, micro serre-tête discret.

## 8. À faire, à ne pas faire

- Faire : tout titre en capitales, une partie en orange.
- Faire : le vert lime pour l'action seulement, jamais pour un texte ou un décor.
- Ne pas faire : de texte blanc sur le vert lime (le texte des boutons reste noir).
- Ne pas faire : d'ombre portée sur le noir : la profondeur vient de la lumière.

## 9. Comportement responsive

- Behance ne montre que le bureau. Le téléphone est notre proposition.
- Sous 860 px : hero en colonne, portrait sous le texte, faisceau affiné ; titres de cours sous leur étiquette ; formatrice en colonne ; alerte et rappel des formules empilés.
- Sous 620 px : « pour qui » et avantages des formules en une colonne ; vignettes vidéo gardées en 2 colonnes.

## 10. Mouvement

- Moteur commun : `data-rv`, `data-parallaxe` sur le faisceau, le mot géant et les petites photos de la formatrice, `data-aimant` et `.reflet` sur les boutons, barre de progression orange.
- Propre à O : le halo vert des boutons s'intensifie au survol ; le « + » de la FAQ tourne en croix.

## 11. Non mesuré, et choix tranchés seul

- La police (§3).
- La marque « Parole d'impact », les textes, les prix en francs CFA (15 000 F et 35 000 F, au lieu de 75 000 F et 190 000 F).
- Le hero montre une seule personne (la source en montre deux).
- 4 vignettes de témoignages au lieu de 6.
- Le téléphone (§9).

## 12. Consigne pour l'IA

Construis une page de vente de formation à la prise de parole sur fond noir pur, en Inter capitales grasses. Un faisceau orange `#F5761D` vertical derrière l'oratrice dans le hero, puis une bande orange d'infos. Une carte orange sur fond blanc devant un mot géant gris clair en italique. Programme en 5 cartes à filet gris avec étiquette orange « Cours ». Tous les boutons en pilule vert lime `#89F21B` qui luit. Deux formules à en-tête orange et prix géant. FAQ en rangées orange pleines.

## 2. Les sections, dans l'ordre

01. #hero · Le hero : Dire qui, quoi, pour qui en une phrase, puis faire cliquer. Le geste : Faisceau orange derrière l'oratrice, bande d'infos orange.
02. #appel · La douleur : Le visiteur se reconnaît : « c'est moi ». Le geste : Carte orange sur blanc, mot géant en filigrane.
03. #programme · Le contenu : Rendre l'offre concrète, morceau par morceau. Le geste : Cinq cartes à filet, étiquette orange Cours.
04. #resultats · La preuve : Faire parler les autres : « ça a marché pour des gens comme moi ». Le geste : Vignettes vidéo carrées en deux colonnes.
05. #capable · La valeur : Faire sentir le prix avant de le montrer. Le geste : Lignes à flèche orange sous un trait épais.
06. #pour-qui · Pour qui : Trier : celui qui n'est pas la cible s'en va, celui qui l'est se sent choisi. Le geste : Six cartes numérotées dans des ronds orange.
07. #offre · L'offre : Convertir : le prix, ce qu'il contient, le bouton. Le geste : En-tête orange, prix géant, bouton néon vert.
08. #mentore · Qui est derrière : Un humain derrière l'offre, et un lieu réel. Le geste : Portrait dans la lueur, deux photos flottantes.
09. #pourquoi · La bascule : Montrer pourquoi cette solution est différente. Le geste : Bande orange pleine, bouton blanc.
10. #alerte · La relance : Redonner le bouton à celui qui s'est décidé en route. Le geste : Triangle rouge face au rappel des deux prix.
11. #faq · La FAQ : Lever les dernières objections. Le geste : Mot FAQ qui s'efface, rangées orange pleines.
12. #contact · La relance : Redonner le bouton à celui qui s'est décidé en route. Le geste : Un seul bouton WhatsApp vert.
13. #pied · Le pied : La légitimité : nom, mentions, contact. Le geste : Bande quasi noire en petites capitales.

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
