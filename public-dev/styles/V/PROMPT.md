# Prompt complet · Template V « Mosaïque dorée »
# Par Yedidia Ruben - Digital Strategist. À coller tel quel dans une IA qui code (Claude, ChatGPT, Gemini).

Tu es un designer web senior. Construis une page de vente complète en un seul fichier HTML, avec exactement le rendu décrit ci-dessous : couleurs, polices, tailles, espacements, boutons, cartes, animations. La fiche de style fait foi ; en cas de doute, applique-la à la lettre plutôt que d'improviser.

## 1. La fiche de style (DESIGN.md)

# DESIGN.md : Style V « Mosaïque dorée » ❗~~« Noir et or »~~ (même nom que P · 16/11/2026 17:05) (d'après la page « Landing Page - Golden Ads », Jean Lucas)

> **Source** : `inspi/behance/209134873/` (5 images : couverture, typographie, palette, titre, page entière de 1920 x 12 687 px), page de vente d'un mentorat en publicité en ligne, Behance 209134873. Relevé le 16/11/2026.
> **Demande de Ruben** : pas de consigne de détail, lot du 16/11/2026.

## 1. Ambiance et intention

- Un mentorat « gagner sa vie en ligne » vendu comme un club privé : noir profond, or chaud, lumière de studio.
- Le fondateur est partout : portrait du haut, vidéo, affiches de modules, carte de présentation. La page repose sur sa présence.
- Le fond n'est jamais vide : des tuiles de photos fantômes, presque noires, forment une mosaïque derrière le hero et la vidéo.
- Un seul geste de couleur : le bouton dégradé or pâle qui brille comme une lampe, répété après chaque section.

## 2. Palette et rôles

Relevés au pixel sur `05.png` (PIL) et confirmés par la planche `03.png` de l'auteur.

- **Noir** `#111111` : fond de page, pied, carte de prix sombre.
- **Graphite** `#1F1F1F` : cartes (excuses, méthode, pour qui, liste de l'offre, garanties), bande « Pour qui ».
- **Filet** `#2C2C2C` / `#3A3A3A` : contours des cartes, séparateurs.
- **Or** `#D99C63` (relevé `#D99C63` sur le titre du hero, `#DA9F67` sur le bonus) : titres en capitales, mots clés, nom du fondateur.
- **Or clair** `#F9C58C` : coches, icônes, gros prix sur fond sombre.
- **Dégradé du bouton** `#FFB862` vers `#F1D4B8` (valeurs de l'auteur ; relevé `#FAC381` à gauche, `#F5CA9B` à droite) : boutons, petit trait en haut des cartes.
- **Beige** `#EEE9E3` (relevé `#EDEAE4`) : carte de prix, bande FAQ.
- **Blanc cassé** `#EFEFEF` : texte courant sur noir.
- **Or foncé** `#9A6430` : gros prix sur la carte beige (choix pour le contraste, voir §10).

## 3. Typographie

- Nommée par l'auteur : **Inter** (planche « Tipografia »). Les affiches et le logo utilisent une serif fine à fort contraste : la plus proche sur Google Fonts, **Cormorant Garamond**.

| Rôle | Police | Taille bureau / téléphone | Graisse | Interligne | Approche |
|---|---|---|---|---|---|
| Accroche du hero (capitales or) | Inter | 24 / 19 px | 800 | 1,2 | -0,01 em |
| Texte principal du hero | Inter | 20 / 17 px | 400, mots clés 700 | 1,4 | 0 |
| Titre de section | Inter | 34 / 24 px | 600 à 700 | 1,2 | -0,02 em |
| Titre « phrase » (vidéo, douleur, méthode) | Inter | 26 / 20 px | 400 avec gras | 1,3 | 0 |
| Gros prix | Inter | 58 / 44 px | 800 | 1,05 | -0,03 em |
| Texte de carte | Inter | 11,5 à 14 px | 400 | 1,45 | 0 |
| Bouton | Inter | 12,5 px | 700, capitales | 1,25 | -0,01 em |
| Titre d'affiche, logo | Cormorant Garamond | 22 à 25 px | 400, capitales | 1 | 0,01 em |

## 4. Composants

- **Bouton** : 56 px de haut, pilule, dégradé `#FFB862` vers `#F1D4B8`, texte noir en capitales, halo doré flou. Sous chaque bouton, une ligne de petits moyens de paiement en capsules grises.
- **Logo** : monogramme dans une arche dorée en trait fin, nom en serif capitales, « Académie » espacé en dessous.
- **Barre d'excuse** : graphite, coins 5 px, tuile noire à icône or clair à gauche, mots clés en gras blanc.
- **Carte de méthode** : graphite, coins 8 px, un objet (tableau de bord, téléphones, ordinateur, dessinés en CSS) qui déborde par le haut.
- **Carte « pour qui »** : fond de la bande, filet gris, petit trait doré en haut à gauche, coche dans un rond fileté.
- **Affiche de module** : photo verticale qui se fond dans le noir, titre en serif doré capitales, petit monogramme dessous.
- **Capture d'élève** : carte blanche à liseré vert clair, montant en gros, phrases surlignées en jaune, réaction bleue.
- **Duo d'offre** : carte liste graphite (titre capitales or et blanc, coches, filets) face à une carte prix beige plus basse.
- **Carte de garantie** : graphite, trait doré en haut, icône ronde à cheval sur le bord, titre or.
- **Carte bonus** : image à gauche, badge « Bonus » en capsule, titre capitales or.
- **Carte « qui »** : grande carte noire filetée, portrait plein cadre à gauche, prénom en or.
- **FAQ** : bande beige, questions en petit sur filets gris, signe plus à droite.

## 5. Mise en page

- Colonne de 1040 px ; les blocs d'offre et de garantie se resserrent à 700 px, la carte « qui » s'élargit à 1000 px.
- Ordre : hero, vidéo, douleur, méthode (3 + 2 cartes), pour qui (bande graphite), modules (carrousel), preuves (carrousel), offre, garanties et bonus, qui, FAQ (bande beige), pied.
- Les carrousels sortent de la colonne et prennent toute la largeur, avec des points dorés en dessous.
- Espacement vertical : 60 à 90 px ; un bouton termine presque chaque section.

## 6. Profondeur et élévation

- Profondeur par la lumière, pas par l'ombre : halos chauds derrière le portrait, halo doré sous les boutons.
- Les objets des cartes de méthode débordent par le haut ; l'icône des garanties est posée sur le bord.
- Les photos d'affiches et du hero se fondent dans le noir par un masque en dégradé.

## 7. Images

| Id | Format | Section | Rôle |
|---|---|---|---|
| V-hero | 3:4 | hero | portrait du fondateur, mains jointes |
| V-video | 16:9 | video | image d'accroche de la vidéo, sujet à droite |
| V-mockup | 4:3 | douleur | ordinateur, tablette et affiches de la formation |
| V-module-1 à V-module-6 | 3:4 | modules | six affiches de modules |
| V-bonus | 4:3 | garanties | ordinateur en appel vidéo sur un bloc de béton |
| V-portrait | 3:4 | qui | portrait de présentation |

- **Personnage** : Ousmane Kanté, 32 ans, Conakry ; peau très foncée, twists courts, mâchoire carrée, regard intense ; signature : chaîne fine dorée, chemise en satin. Métier : formateur en publicité en ligne. Il apparaît sur les 11 images.
- Les consignes complètes sont dans `images/commandes.json`.

## 8. À faire, à ne pas faire

- Faire : un bouton doré après chaque section, avec sa ligne de paiements.
- Faire : réserver l'or aux mots qui vendent (sommet, résultats, offre, prénom).
- Ne pas faire : de fond plat sans texture derrière le hero ; garder la mosaïque fantôme.
- Ne pas faire : l'or `#D99C63` en texte sur le beige (contraste 2,2) : passer à `#9A6430`.

## 9. Comportement responsive

- Behance ne montre que le bureau. Le téléphone est notre proposition.
- Sous 820 px : hero en colonne (texte puis portrait), douleur en colonne, cartes de méthode et « pour qui » en 2 colonnes, offre, garanties, bonus et carte « qui » empilés.
- Sous 560 px : cartes en 1 colonne, boutons pleine largeur.
- Les carrousels restent des carrousels (glissé et points), seuls éléments qui bougent de côté.

## 10. Mouvement

- Moteur commun : `data-rv` partout, `data-lignes` sur les titres des modules et de la FAQ, `data-compte` sur le prix, `data-aimant` et `.reflet` sur les boutons, barre de progression dorée.
- Propre à V : les points des carrousels suivent le glissé et ramènent à la carte touchée.

## 11. Non mesuré, et choix tranchés seul

- La serif des affiches et du logo (§3).
- La marque « Kanté Ads Académie », les textes, les prix en FCFA (12 x 25 000 F ou 250 000 FCFA).
- Les captures d'élèves refaites en CSS, avec des chiffres fictifs.
- Les objets des cartes de méthode dessinés en CSS au lieu des maquettes photo.
- L'or foncé `#9A6430` du prix sur beige, pour passer le seuil des grands textes.
- Le téléphone (§9).

## 12. Consigne pour l'IA

Construis une page de vente de mentorat sur fond noir `#111111` avec des cartes graphite `#1F1F1F`. Titres en Inter, accroches en capitales or `#D99C63`, affiches en Cormorant Garamond doré. Chaque section finit par un bouton pilule dégradé `#FFB862` vers `#F1D4B8` qui brille, suivi d'une ligne de paiements. Le fondateur revient partout : portrait qui sort d'une mosaïque de photos fantômes, vidéo, carrousel d'affiches, grande carte de présentation. Termine par une carte liste graphite face à une carte prix beige, puis une FAQ sur bande beige.

## 2. Les sections, dans l'ordre

01. #hero · Le hero : Dire qui, quoi, pour qui en une phrase, puis faire cliquer. Le geste : portrait doré qui sort d'une mosaïque sombre.
02. #video · Le contenu : Rendre l'offre concrète, morceau par morceau. Le geste : vidéo encadrée, titre en capitales or et blanc.
03. #douleur · La douleur : Le visiteur se reconnaît : « c'est moi ». Le geste : quatre excuses en barres graphite à icône.
04. #methode · La bascule : Montrer pourquoi cette solution est différente. Le geste : objets qui débordent du haut des cartes.
05. #pour-qui · Pour qui : Trier : celui qui n'est pas la cible s'en va, celui qui l'est se sent choisi. Le geste : cartes filetées, trait doré en haut, coche ronde.
06. #modules · Le contenu : Rendre l'offre concrète, morceau par morceau. Le geste : carrousel d'affiches, titres en serif doré.
07. #preuves · La preuve : Faire parler les autres : « ça a marché pour des gens comme moi ». Le geste : captures de messages à liseré vert.
08. #offre · L'offre : Convertir : le prix, ce qu'il contient, le bouton. Le geste : carte liste graphite face à carte prix beige.
09. #garanties · La garantie : Retirer le risque : « si ça ne vous va pas, je vous rembourse ». Le geste : icône ronde à cheval sur le bord, carte bonus.
10. #qui · Qui est derrière : Un humain derrière l'offre, et un lieu réel. Le geste : grande carte, portrait plein cadre à gauche.
11. #faq · La FAQ : Lever les dernières objections. Le geste : bande beige, questions sur filets fins.
12. #pied · Le pied : La légitimité : nom, mentions, contact. Le geste : logo centré entre deux filets.

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
