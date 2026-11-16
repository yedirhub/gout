# Prompt complet · Template Y « Nuit champagne »
# Par Yedidia Ruben - Digital Strategist. À coller tel quel dans une IA qui code (Claude, ChatGPT, Gemini).

Tu es un designer web senior. Construis une page de vente complète en un seul fichier HTML, avec exactement le rendu décrit ci-dessous : couleurs, polices, tailles, espacements, boutons, cartes, animations. La fiche de style fait foi ; en cas de doute, applique-la à la lettre plutôt que d'improviser.

## 1. La fiche de style (DESIGN.md)

# DESIGN.md : Style Y « Nuit champagne » (d'après la page « Landing Page para Cirurgião Plástico », Jose Justo)

> **Source** : `inspi/behance/254909225/` (01.png bureau 2880 × 14406, 02.png téléphone 630 × 16212), page d'un chirurgien plasticien, Behance 254909225. Relevé le 16/11/2026.
> **Demande de Ruben** : pas de consigne de détail, lot du 16/11/2026.

## 1. Ambiance et intention

- Un chirurgien vendu comme une maison de luxe discrète : bleu nuit presque noir, blanc perle, et une seule touche champagne.
- Le ton est celui d'une conversation, pas d'une promesse : « avant toute chirurgie, il y a une conversation ».
- Trois signes reconnaissables : le **monogramme à la plume** dans un rond, entouré d'un texte qui tourne ; les **radiographies** lumineuses pour montrer les interventions sans montrer de corps ; les **grandes initiales manuscrites** en filigrane dans le fond.
- Le rythme alterne nuit et perle, avec des passages doux : encoche à flèche, coins de 60 px, vagues.
- Différent du Style D (médical) : ici serif fine Marcellus, nuit verdâtre `#09161C` et champagne, au lieu d'Inter et d'un bleu institutionnel.

## 2. Palette et rôles

Relevés au pixel (PIL) sur `01.png`.

- **Abysse** `#020D11` : fond du hero et du rendez-vous.
- **Nuit** `#09161C` : sections sombres, pied ; **nuit basse** `#061113` : bas du pied.
- **Ardoise** `#16272F` / `#172A31` → `#293A42` : cartes « réalise aussi » en dégradé.
- **Perle** `#F5F6F8` : sections claires ; **blanc** `#FFFFFF` : cartes, FAQ, panneau des étapes.
- **Champagne** `#BDA37E` → `#EEE1CF` : dégradé des boutons sur fond sombre ; bandeau `#C0A685` → `#D1BBA3` → `#ECDFCE`.
- **Or texte** `#DDC49D` : mots en couleur des titres sur la nuit, chiffres.
- **Bouton ardoise** `#0B181D` → `#4B585D` : boutons sur fond clair.
- **Encre** `#0B181D` : titres sur le clair, pastilles d'icônes, numéros.

## 3. Typographie

- Non nommée par l'auteur. Relevé à l'œil : serif fine à empattements évasés pour les titres ; grotesque nette pour le texte ; signature manuscrite pour le nom. Les plus proches sur Google Fonts : **Marcellus**, **Manrope**, **Pinyon Script** ; l'italique dorée « avant, pendant et après » en **Cormorant Garamond** italique.

| Rôle | Police | Taille bureau / téléphone | Graisse | Interligne | Approche |
|---|---|---|---|---|---|
| Titre du hero | Marcellus | 40 / 30 px | 400 | 1,18 | 0,01 em |
| Titre de section | Marcellus | 36 / 26 px | 400 | 1,2 | 0,01 em |
| Mot en italique doré | Cormorant Garamond italique | 1,12 em | 500 | 1,2 | 0 |
| Surtitre | Manrope capitales | 10,5 px | 500 | 1 | 0,06 em |
| Texte | Manrope | 11,5 à 14 px | 400 | 1,5 | 0 |
| Bouton | Manrope | 13 px | 600 | 1,2 | 0 |
| Signature | Pinyon Script | 22 à 24 px | 400 | 1 | 0 |
| Numéros | Marcellus | 11 px | 400 | 1 | 0 |

## 4. Composants

- **Bouton champagne** (sur la nuit) : 46 px, coins 7 px, dégradé `#BDA37E` → `#EEE1CF`, texte encre, rond blanc à flèche oblique.
- **Bouton ardoise** (sur le clair) : même forme, dégradé `#0B181D` → `#4B585D`, texte blanc, rond translucide.
- **Sceau** : rond nuit à initiales « LE » en Pinyon Script, entouré d'un texte en cercle qui tourne (22 s) ; posé sur le portrait du hero, à cheval sur le cadre de la conversation, au centre de la mosaïque.
- **Pastille de peur** : capsule blanche, petit tracé de pouls champagne.
- **Fil des 3 pas** : ronds cerclés reliés par un trait vertical.
- **Carte d'intervention** : moitié texte (titre serif, sous-titre en capitales soulignées d'un filet, étiquettes en capsules, bouton), moitié radiographie ; blanche sur le clair, ardoise sur la nuit, alternée.
- **Carte de soin** : blanche, coins 12 px, pastille d'icône encre ; rangée qui glisse (scroll-snap) avec 2 boutons ronds.
- **Frise des étapes** : carrés encre numérotés en serif, reliés par un trait.
- **Carte de garantie** : blanche, pastille d'icône encre, hauteurs inégales.
- **Chiffres vitrés** : cartouches translucides floutées sur la photo du rendez-vous.
- **FAQ** : rangées blanches à filet, « + » champagne qui tourne en « × » ; carte « Encore un doute ? » avec bouton WhatsApp.

## 5. Mise en page

- Colonne de 1000 px ; textes centrés resserrés à 780 px ; cartes d'intervention à 780 px.
- Ordre : hero, envie et peurs, conversation, interventions, « réalise aussi », le docteur, bandeau, suivi, étapes, garanties, rendez-vous, FAQ, pied.
- Passages : encoche à flèche sous le hero et avant « réalise aussi », panneau perle aux coins de 60 px qui monte sur la nuit, vague vers la section du docteur, vague claire en bas à droite du rendez-vous.
- Espacement vertical : 40 à 70 px, serré : la page enchaîne vite.

## 6. Profondeur et élévation

- Photos penchées (-6° et +8°) à cadre blanc de 3 px qui débordent des bords de la section « envie ».
- Ombres longues et bleutées sous les photos et les cartes blanches, jamais grises.
- Initiales géantes en filigrane (opacité 3 à 5 %) derrière le hero, la conversation, le suivi et la FAQ.

## 7. À faire, à ne pas faire

- Faire : le champagne seulement sur les boutons de la nuit, les mots-clés des titres et le bandeau.
- Faire : montrer les interventions par radiographie, jamais par un corps réel.
- Ne pas faire : de bleu vif ni de vert ; la nuit reste verdâtre `#09161C`.
- Ne pas faire : d'avant / après photo : la page vend la consultation, pas le résultat.

## 8. Comportement responsive

- Le téléphone suit 02.png : texte du hero d'abord, portrait dessous ; photos penchées empilées autour du texte ; cartes d'intervention en colonne (radiographie dessous) ; mosaïque gardée en 2 colonnes ; panneau des étapes en colonne ; garanties en 1 colonne ; chiffres vitrés sur la photo du rendez-vous.
- Sous 1000 px : nav réduite à la signature et au bouton Contact ; garanties en 2 × 2.

## 9. Mouvement

- Moteur commun : `data-rv`, `data-lignes` sur les titres, `data-aimant` sur les boutons, barre de progression champagne.
- Propre à Y : **le texte du sceau tourne** ; **la rangée de soins glisse** au doigt et aux boutons, démarrée au centre ; le « + » de la FAQ pivote.

## 10. Images

Le personnage : **Laurent Essomba**, 52 ans, Yaoundé, peau brun foncé, crâne rasé, barbe grise courte, mains soignées, sourire rassurant ; signature : tenue de bloc, montre classique à bracelet cuir. Ici chirurgien plasticien.

| id | Format | Section | Rôle | Laurent |
|---|---|---|---|---|
| Y-hero | 3:4 | hero | portrait au bureau, mains jointes, fondu dans la nuit | oui |
| Y-miroir | 3:4 | envie | femme de dos devant un miroir (photo penchée) | non |
| Y-patiente | 1:1 | envie | femme souriante, lumière de fenêtre (photo penchée) | non |
| Y-consultation | 3:4 | conversation | portrait au cabinet, montre visible | oui |
| Y-radio-sein | 3:4 | interventions | radiographie du buste | non |
| Y-radio-ventre | 3:4 | aussi | radiographie de l'abdomen | non |
| Y-radio-silhouette | 3:4 | aussi | radiographie taille et hanches | non |
| Y-apropos-1 | 3:4 | apropos | debout devant ses diplômes | oui |
| Y-apropos-2 | 4:3 | apropos | souriant à son bureau | oui |
| Y-apropos-3 | 4:3 | apropos | en tenue de bloc, mains jointes | oui |
| Y-apropos-4 | 3:4 | apropos | prend des notes en consultation | oui |
| Y-rdv | 4:3 | rdv | au bureau, prêt à recevoir, fondu à droite | oui |

- Commandes détaillées : `images/commandes.json`. Le hero et le rendez-vous sont des photos pleine hauteur : leur cadre suit la section, l'image est recadrée (`object-fit:cover`).

## 11. Non mesuré, et choix tranchés seul

- Les polices (§3).
- Le nom, les textes, les chiffres (20 ans, 2 000 chirurgies, adaptés à l'âge du personnage) ; aucun numéro d'Ordre inventé.
- Les 6 cartes de soin (la source en montre 4 entières et 2 coupées).
- La vague et l'encoche : redessinées en SVG, formes approchées.
- Le téléphone (§8) suit 02.png, sauf la mosaïque gardée en 2 colonnes.

## 12. Consigne pour l'IA

Construis une page de chirurgien plasticien en bleu nuit `#09161C`, blanc perle `#F5F6F8` et champagne `#BDA37E` → `#EEE1CF`. Titres en Marcellus fine, texte en Manrope, nom en Pinyon Script. Un sceau rond à initiales manuscrites, entouré d'un texte qui tourne, revient sur les portraits. Les interventions se montrent en radiographies lumineuses dans des cartes moitié texte, moitié image. Alterne nuit et perle avec des encoches, des coins de 60 px et des vagues. Les boutons sont champagne sur la nuit, ardoise sur le clair. Termine par un rendez-vous à chiffres vitrés et une FAQ blanche.

## 2. Les sections, dans l'ordre

01. #hero · Le hero : Dire qui, quoi, pour qui en une phrase, puis faire cliquer. Le geste : portrait au bureau, monogramme qui tourne.
02. #envie · La douleur : Le visiteur se reconnaît : « c'est moi ». Le geste : deux photos penchées, peurs en pastilles.
03. #conversation · La valeur : Faire sentir le prix avant de le montrer. Le geste : portrait cadré, 3 pas sur un fil.
04. #interventions · L'offre : Convertir : le prix, ce qu'il contient, le bouton. Le geste : panneau perle arrondi, carte et radiographie.
05. #aussi · L'offre : Convertir : le prix, ce qu'il contient, le bouton. Le geste : cartes ardoise, radiographies alternées.
06. #apropos · Qui est derrière : Un humain derrière l'offre, et un lieu réel. Le geste : mosaïque de 4 photos autour du sceau.
07. #bandeau · Le bandeau : Remettre du mouvement entre deux sections calmes. Le geste : bande champagne en capitales serif.
08. #suivi · La valeur : Faire sentir le prix avant de le montrer. Le geste : rangée de cartes blanches qui glisse.
09. #etapes · Le contenu : Rendre l'offre concrète, morceau par morceau. Le geste : panneau blanc, frise de 8 carrés numérotés.
10. #garanties · La garantie : Retirer le risque : « si ça ne vous va pas, je vous rembourse ». Le geste : 4 cartes blanches en marches.
11. #rdv · La relance : Redonner le bouton à celui qui s'est décidé en route. Le geste : photo fondue, chiffres vitrés, vague claire.
12. #faq · La FAQ : Lever les dernières objections. Le geste : rangées blanches, carte « encore un doute ».
13. #pied · Le pied : La légitimité : nom, mentions, contact. Le geste : signature à la plume, 4 colonnes.

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
