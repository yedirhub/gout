# Prompt complet · Template J « Calque émeraude »
# Par Yedidia Ruben - Digital Strategist. À coller tel quel dans une IA qui code (Claude, ChatGPT, Gemini).

Tu es un designer web senior. Construis une page de vente complète en un seul fichier HTML, avec exactement le rendu décrit ci-dessous : couleurs, polices, tailles, espacements, boutons, cartes, animations. La fiche de style fait foi ; en cas de doute, applique-la à la lettre plutôt que d'improviser.

## 1. La fiche de style (DESIGN.md)

# DESIGN.md : Style J « Calque émeraude » (d'après la page « Página de Vendas e Área de Membros - Lançamento », Felipe Santos)

> **Source** : `inspi/behance/249402355/` (02.png = la page de vente, 1696 × 16 383 ; 04 à 18 = les vignettes de l'espace membres ; 01 = carte de fin de l'auteur, non reprise). Behance 249402355. Relevé le 16/11/2026.
> **Demande de Ruben** : pas de consigne de détail, lot du 16/11/2026.

## 1. Ambiance et intention

- La page de vente d'une formation de design sur Canva, mise en scène comme si on était **dans l'éditeur** : barres d'outils, poignées de sélection, barre latérale « Modèles, Éléments, Importer, Texte, Photos ».
- Vert mousse presque noir, des bandes claires gris perle pour respirer (le relevé bancaire, les résultats des élèves, les témoignages, le mentor).
- Le geste qui la signe : **le mot clé en serif italique fin, surligné en vert comme une sélection de texte, suivi d'un curseur qui clignote**.
- Objets en 3D posés dans la page : liasse de billets, diamant émeraude, orbe vert lumineux, sceau « 07 ».
- Différence avec E « Néon vert » (fond noir, néon partout) et K : ici le néon ne sert qu'aux boutons ; le reste est mousse, sauge et serif.

## 2. Palette et rôles (relevé au pixel, PIL, sur 02.png)

- **Nuit mousse** `#011100` (fond des grandes sections) ; `#051808` sous le hero.
- **Forêt** `#111C0D` (hero, carte du chiffre) ; **carte** `#1A2818` / `#1C2B18` (FAQ, cartes) ; `#242F20` (pastilles de modules).
- **Sauge** `#57743D` à `#65804E` : la barre d'éditeur sous le hero et le surlignage sur fond sombre.
- **Néon** `#00FF71` : boutons d'achat seulement, texte `#04210F` dessus (contraste 13,9).
- **Menthe pâle** `#CFE3C8` : surlignage sur fond clair ; **menthe** `#9FD39A` : serif italique sur fond sombre.
- **Perle** `#EFEFEF` / `#E4E4E4` : bandes claires ; encre `#121A10`.
- **Pied** `#283E22`. Croix rouges `#F0525A`.
- Cartes de prix : `#41654B` en haut (phare, filet néon) et `#41523E` (seconde).

## 3. Typographie

- Non nommées par l'auteur. Relevé à l'œil : grotesque géométrique (proche de Satoshi), serif didone italique étroite. Google Fonts les plus proches : **Plus Jakarta Sans** et **Instrument Serif** italique.

| Rôle | Police | Taille bureau / téléphone | Graisse | Interligne | Approche |
|---|---|---|---|---|---|
| Logo | Instrument Serif italique | 64 / 52 px | 400 | 1 | 0 |
| Titre du hero | Plus Jakarta Sans + serif italique | 34 / 26 px | 500 | 1,18 | -0,015 em |
| Titre de section | Plus Jakarta Sans | 20 à 36 px | 500 | 1,18 | -0,015 em |
| Mot clé | Instrument Serif italique | 1,12 em du titre | 400 | 1 | 0 |
| Titre éditorial (garantie, plateforme, bonus, mentor) | Instrument Serif italique | 26 à 48 px | 400 | 1,1 | 0 |
| Texte | Plus Jakarta Sans | 11 à 13,5 px | 400 | 1,55 | 0 |
| Bouton | Plus Jakarta Sans | 12 à 14 px | 800 | 1,2 | capitales |
| Prix | Plus Jakarta Sans italique | 34 px | 700 | 1 | -0,04 em |

## 4. Composants

- **Bouton néon** : pilule 54 px, `#00FF71`, halo vert, rond blanc à flèche ; lien WhatsApp prérempli. Variante menthe `#8DF0B4` sur la 2e offre.
- **Bouton verre** : pilule à filet clair, fond presque transparent (« Voir la liste des leçons »).
- **Cadre de sélection** (`.sel`) : filet clair décalé de 6 px et 4 poignées rondes, autour de la photo du hero et de la barre de texte.
- **Coins de visée** (`.vise`) : 4 équerres aux coins (transformation, garantie).
- **Surlignage + curseur** (`.surligne` + `.curseur`) : fond vert sur 84 % de la hauteur de ligne, barre de 2 px qui clignote.
- **Barre latérale d'éditeur** (`.lateral`) : 5 icônes légendées, inclinée de 3 à 4°.
- **Pile numérotée** : 4 cartes qui se chevauchent, flèche dans un rond blanc, chiffre géant en contour.
- **Carte de modules** : grille de 3 colonnes de pastilles à coche néon.
- **Tiroirs** : 4 cartes inclinées avec une languette claire en haut (le coffre créatif).
- **Bulles de discussion** : capture de messagerie sombre dans un cadre gris, phrase clé soulignée de jaune.
- **Sceau 07** : étoile à 4 branches dans un cercle, texte qui tourne autour.
- **Affiches de l'espace membres** : vignettes 2:3 claires ou sombres, un mot géant en serif italique.

## 5. Mise en page

- Colonne de 1080 px ; les cartes centrales tiennent entre 360 et 840 px, beaucoup d'air autour.
- Rythme sombre, clair, sombre : 3 bandes claires coupent la page (relevé, résultats, témoignages et mentor).
- Les sections sombres sont séparées par un filet fin et un petit rond au centre (le « point de jonction »).
- Espacement vertical : 60 à 90 px.

## 6. Profondeur et élévation

- Lueurs radiales vertes derrière les cartes, jamais d'ombre grise sur fond sombre.
- Les objets 3D (billets, diamant, orbe, appareils) sortent de leur carte.
- Mots géants en filigrane (« F 100 000 », « Calque », « Koffi ») à 3 à 4 % d'opacité.

## 7. À faire, à ne pas faire

- Faire : un seul mot clé en serif italique par titre, au plus trois.
- Faire : le curseur qui clignote seulement sur les titres surlignés.
- Ne pas faire : de néon ailleurs que sur les boutons d'achat.
- Ne pas faire : de texte gris sous `#A3AEA0` sur la nuit mousse (contraste minimum 7).

## 8. Comportement responsive

- Behance ne montre que le bureau. Le téléphone est notre proposition.
- Sous 900 px : hero en colonne, pages floues des services retirées, cartes en une colonne, ordinateur et fenêtre limités à 460 px.
- Sous 640 px : barre d'éditeur réduite à 3 outils, billets réduits, modules en une colonne, affiches en 2 colonnes, offres empilées.

## 9. Mouvement

- Moteur commun : `data-rv` partout, `data-parallaxe` sur les billets, `data-aimant` sur les boutons, barre de progression néon.
- Propre à J : **le curseur de texte clignote** derrière chaque mot surligné ; **le ruban défile** en italique capitales ; **le sceau 07 tourne** ; **le diamant scintille**.

## 10. Non mesuré, et choix tranchés seul

- Les polices (§3).
- La marque « Calque », le mentor Koffi Mensah (Lomé), les textes et les prix en F CFA (12 x 2 500 F, 12 x 4 500 F).
- Les 2 offres : la carte phare reste à gauche comme chez l'auteur ; chez nous elle est aussi la moins chère (chez lui, l'inverse).
- L'espace membres réduit à une section d'affiches (5 sur 15).
- Le téléphone (§8).

## 11. Images

Personnage : **Koffi Mensah**, 38 ans, Lomé, graphiste formateur ; peau brun foncé, crâne rasé net, barbe courte bien taillée, carrure moyenne, sourire calme ; signature : lunettes rondes fines à monture dorée, montre acier. Tenue : tee-shirt blanc ou veste vert sapin.

| id | Format | Rôle | Personnage |
|---|---|---|---|
| J-hero | 3:4 | Portrait du hero, dans le cadre de sélection | oui |
| J-appareils | 16:9 | Écran d'ordinateur ouvert sur l'espace élève | oui |
| J-ecran | 4:3 | Écran d'ordinateur, grille de vignettes de leçons | non |
| J-eleve-1 | 3:4 | Travail d'élève : affiche de mode | non |
| J-eleve-2 | 3:4 | Travail d'élève : visuel Instagram | non |
| J-eleve-3 | 3:4 | Travail d'élève : portfolio noir et blanc | non |
| J-cercle | 1:1 | Portrait rond de la recommandation | oui |
| J-affiche | 3:4 | Affiche éditoriale au centre de la transformation | oui |
| J-mentor | 3:4 | Le mentor assis, en pied | oui |
| J-bonus | 3:4 | Couverture de la classe de maître | oui |

## 12. Consigne pour l'IA

Construis une page de vente de formation en vert mousse presque noir `#011100`, avec des bandes gris perle `#EFEFEF`. Titres en Plus Jakarta Sans 500, chaque mot clé en Instrument Serif italique, surligné de vert comme une sélection de texte et suivi d'un curseur qui clignote. Mets la page dans un éditeur graphique : poignées de sélection autour de la photo, barre d'outils sous le hero, barre latérale d'icônes. Pose des objets 3D (billets, diamant, orbe vert). Le néon `#00FF71` ne sert qu'aux boutons d'achat. Termine par deux offres en cartes vertes, un sceau de garantie qui tourne et une FAQ en deux colonnes.

## 2. Les sections, dans l'ordre

01. #hero · Le hero : Dire qui, quoi, pour qui en une phrase, puis faire cliquer. Le geste : Photo en cadre de sélection, barre d'éditeur dessous.
02. #opportunite · La douleur : Le visiteur se reconnaît : « c'est moi ». Le geste : Barre de texte sélectionnée, orbe vert au centre.
03. #ressenti · Qui est derrière : Un humain derrière l'offre, et un lieu réel. Le geste : Fond quadrillé clair, relevé posé sur téléphone.
04. #chiffre · La preuve : Faire parler les autres : « ça a marché pour des gens comme moi ». Le geste : Liasse de billets en 3D hors de la carte.
05. #services · La valeur : Faire sentir le prix avant de le montrer. Le geste : Carte verre centrale entre deux pages floues.
06. #pour-qui · Pour qui : Trier : celui qui n'est pas la cible s'en va, celui qui l'est se sent choisi. Le geste : Cartes chevauchées, chiffres géants en contour.
07. #programme · Le contenu : Rendre l'offre concrète, morceau par morceau. Le geste : Ordinateur posé sur la carte de modules.
08. #pratique · La bascule : Montrer pourquoi cette solution est différente. Le geste : Ordinateur et sceau CK hors de la carte.
09. #coffre · Les bonus : Faire basculer l'indécis : « si j'entre maintenant, j'ai plus ». Le geste : Quatre tiroirs inclinés à languette claire.
10. #eleves · La preuve : Faire parler les autres : « ça a marché pour des gens comme moi ». Le geste : Bande claire, carrousel d'affiches à flèches.
11. #recommande · La bascule : Montrer pourquoi cette solution est différente. Le geste : Deux cercles : diamant 3D et portrait.
12. #transformation · La valeur : Faire sentir le prix avant de le montrer. Le geste : Affiche centrale en visée, croix et coches.
13. #temoignages · La preuve : Faire parler les autres : « ça a marché pour des gens comme moi ». Le geste : Captures de messagerie, phrase clé soulignée.
14. #mentor · Qui est derrière : Un humain derrière l'offre, et un lieu réel. Le geste : Nom géant en filigrane, mot vertical en contour.
15. #offre · L'offre : Convertir : le prix, ce qu'il contient, le bouton. Le geste : Deux cartes vertes, rubans inclinés derrière.
16. #garantie · La garantie : Retirer le risque : « si ça ne vous va pas, je vous rembourse ». Le geste : Sceau 07 qui tourne, cadre de visée.
17. #espace-membres · Le contenu : Rendre l'offre concrète, morceau par morceau. Le geste : Affiches de modules, un mot serif géant.
18. #bonus · Les bonus : Faire basculer l'indécis : « si j'entre maintenant, j'ai plus ». Le geste : Manège : carte nette au centre, voisines floues.
19. #faq · La FAQ : Lever les dernières objections. Le geste : Carte support à gauche, accordéon à droite.
20. #pied · Le pied : La légitimité : nom, mentions, contact. Le geste : Bande sauge, liens soulignés.

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
