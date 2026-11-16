# Prompt complet · Template S « Néon juridique »
# Par Yedidia Ruben - Digital Strategist. À coller tel quel dans une IA qui code (Claude, ChatGPT, Gemini).

Tu es un designer web senior. Construis une page de vente complète en un seul fichier HTML, avec exactement le rendu décrit ci-dessous : couleurs, polices, tailles, espacements, boutons, cartes, animations. La fiche de style fait foi ; en cas de doute, applique-la à la lettre plutôt que d'improviser.

## 1. La fiche de style (DESIGN.md)

# DESIGN.md : Style S « Néon juridique » (d'après la page « Yasmin Nery - Lançamento », Alex D'ávila)

> **Source** : `inspi/behance/219309937/` (5 images : ordinateur et visuel carré, visuel principal, affiches de lancement ×2, page de vente sur ordinateur), lancement du programme « Escalada Digital 360 » d'une avocate mentore, Behance 219309937. Relevé le 16/11/2026.
> **Demande de Ruben** : pas de consigne de détail, lot du 16/11/2026.

## 1. Ambiance et intention

- Une avocate qui vend un programme en ligne à d'autres avocats : le sérieux du métier, l'énergie d'un lancement numérique.
- Nuit violette partout, un seul éclat : la pilule vert néon vers citron qui porte « 360 ».
- La preuve est mise en scène : des notifications en verre « a signé le document » flottent autour de la mentore.
- La source ne montre que des mockups (visuels, affiches, la page sur un ordinateur) : la page est reconstruite à partir de ces éléments, sans style ajouté.

## 2. Palette et rôles

Relevé au pixel (PIL) sur `02.png`, `01.png` et `05.png`.

- **Nuit** `#181828` (bas du visuel) et `#181848` (haut) : fonds ; **nuit aube** `#19101C` : écran de la page ; **aubergine** `#28191E` : carte du visuel carré, carte d'offre.
- **Violet** `#381EA8` / `#3917A0` : l'arc derrière la mentore, affiche « monde digital », panneau prix.
- **Néon** `#09F84F` et **citron** `#C6F808` : la pilule, les cases cochées, le bouton ; **vert** `#08CB32` / `#05B01F` : barres lumineuses, affiches vertes.
- **Bleu** `#518DCD` : barres lumineuses de gauche, affiche conversion (`#1E3FA0` en fond).
- **Verre** `#383848` : boîtes et notifications, en transparence avec flou.
- Texte : blanc pour les titres, `#C9C6D6` pour le courant (contraste 10 sur la nuit).

## 3. Typographie

- Non nommée. Relevé à l'œil : grotesque géométrique ronde et grasse, « g » à une boucle, capitales larges. La plus proche sur Google Fonts : **Sora**.

| Rôle | Police | Taille bureau / téléphone | Graisse | Interligne | Approche |
|---|---|---|---|---|---|
| Nom du programme | Sora | 92 / 44 px | 700 | 0,98 | -0,02 em |
| Titre de section | Sora | 52 / 30 px | 700 | 1,05 | -0,02 em |
| Pilule « 360 » | Sora | 34 px | 700 | 1 | 0 |
| Signature (nom, métier) | Sora | 11 px | 500 | 1,4 | 0,32 em, capitales |
| Texte | Sora | 14 à 16 px | 400 | 1,6 | 0 |
| Bouton | Sora | 14 px | 700 | 1,2 | capitales |

## 4. Composants

- **Pilule lumineuse** : dégradé `#08CB32 → #09F84F → #C6F808`, contour nuit 3 px puis liseré crème, halo vert ; grande (360) ou petite (mot clé).
- **Notification en verre** : fond `#383848` translucide et flou, case verte cochée, nom en capitales, « a signé » et date à droite.
- **Arc violet** : demi-anneau épais derrière la mentore.
- **Barres lumineuses** : fines colonnes verticales en dégradé vert ou bleu, comme un égaliseur.
- **Tampon tournant** : rond violet translucide, texte en cercle, icône alerte ou coche au centre.
- **Affiche de module** : format vertical, photo puis fondu dans la couleur (violet, vert, bleu), petit « Module n » espacé, titre gras avec un mot en néon.
- **Bouton** : néon vers citron, texte nuit en capitales, flèche.
- **FAQ** : cartes en verre, plus néon qui pivote en croix.

## 5. Mise en page

- Colonne de 1120 px ; hero en deux colonnes (titre centré à gauche, mentore et notifications à droite).
- Ordre : hero, chiffres, alerte (douleur), modules, bienvenue et alignement, avis signés, offre, FAQ, relance avec ordinateur sur un bloc, pied.
- Espacement vertical : 80 à 120 px ; halos radiaux violets ou verts derrière chaque section.

## 6. Profondeur et élévation

- Les notifications flottent devant la photo et dépassent son cadre ; les tampons mordent le bord des affiches.
- Ombres longues et noires sous les cartes ; halos de couleur à la place des ombres grises.

## 7. À faire, à ne pas faire

- Faire : un seul vert néon, toujours en dégradé vers le citron.
- Faire : la signature « nom | métier » en capitales très espacées sous chaque grand titre de marque.
- Ne pas faire : de fond clair. Tout vit sur la nuit.
- Ne pas faire : de texte blanc sur le néon : le néon porte du texte nuit `#0E0D16`.

## 8. Comportement responsive

- La source ne montre que le bureau (sur ordinateur). Le téléphone est notre proposition.
- Sous 820 px : hero en colonne (titre puis mentore, deux notifications gardées), chiffres en 2 puis 1 colonne, affiches en 2 colonnes, offre empilée.

## 9. Mouvement

- Moteur commun : `data-rv`, `data-lignes`, `data-compte` sur 320, `data-aimant` et `.reflet` sur les boutons, barre de progression néon.
- Propre à S : les **tampons tournent** (18 s) ; le plus de la FAQ pivote en croix.

## 10. Images

Le personnage : **Salimata Coulibaly**, 30 ans, Ouagadougou, peau brun foncé, longues locs fines aux pointes cuivrées, visage allongé ; signature : anneau fin au nez, veste oversize. Avocate et mentore. Elle apparaît sur 5 images sur 10.

| id | format | rôle | personnage |
|---|---|---|---|
| S-hero | 3:4 | mentore détourée devant l'arc | oui |
| S-alerte | 3:4 | affiche de la douleur, tablette en main | oui |
| S-module-1 | 9:16 | module 1, smartphone et icônes | non |
| S-module-2 | 9:16 | module 2, tableau de bord | non |
| S-module-3 | 9:16 | module 3, globe et mains | non |
| S-module-4 | 9:16 | module 4, séance de groupe | oui |
| S-bienvenue | 3:4 | bienvenue, mains jointes | oui |
| S-temoin-1 | 1:1 | avis, avocat | non |
| S-temoin-2 | 1:1 | avis, avocate | non |
| S-relance | 16:9 | écran de visioconférence | oui |

Consignes complètes : `images/commandes.json`.

## 11. Non mesuré, et choix tranchés seul

- La police (§3).
- La structure de page : reconstruite depuis les mockups (hero de `02.png`, affiches de `03.png` et `04.png`, modules et ordinateur de `05.png`) ; les chiffres, avis, offre et FAQ n'existent pas dans la source et reprennent ses composants.
- La marque « Ascension Digitale 360 », les textes, les prix en FCFA (197 000 FCFA).
- Le téléphone (§8).

## 12. Consigne pour l'IA

Construis une page de vente de programme en ligne pour avocats sur une nuit violette `#181828`, titres en Sora 700. Le nom du programme est centré, très gras, au-dessus d'une pilule « 360 » en dégradé vert néon `#09F84F` vers citron `#C6F808` à double contour. La mentore se tient devant un arc violet épais `#381EA8`, entourée de barres lumineuses vertes et bleues et de notifications en verre « a signé le contrat ». Les modules sont des affiches verticales qui se fondent en violet, vert ou bleu. Le bouton est néon à texte nuit.

## 2. Les sections, dans l'ordre

01. #hero · Le hero : Dire qui, quoi, pour qui en une phrase, puis faire cliquer. Le geste : pilule néon 360, arc violet, notifications en verre.
02. #chiffres · La preuve : Faire parler les autres : « ça a marché pour des gens comme moi ». Le geste : chiffres en dégradé néon sur cartes sombres.
03. #alerte · La douleur : Le visiteur se reconnaît : « c'est moi ». Le geste : affiche portrait, tampon alerte qui tourne.
04. #modules · Le contenu : Rendre l'offre concrète, morceau par morceau. Le geste : quatre affiches verticales violet, vert, bleu.
05. #bienvenue · Qui est derrière : Un humain derrière l'offre, et un lieu réel. Le geste : rond vert plus, étapes numérotées en filet néon.
06. #avis · La preuve : Faire parler les autres : « ça a marché pour des gens comme moi ». Le geste : fil de notifications « a signé » entre deux avis.
07. #offre · L'offre : Convertir : le prix, ce qu'il contient, le bouton. Le geste : carte deux tons, prix sur violet, bouton néon.
08. #faq · La FAQ : Lever les dernières objections. Le geste : accordéon en verre, plus néon qui pivote.
09. #relance · La relance : Redonner le bouton à celui qui s'est décidé en route. Le geste : ordinateur posé sur un bloc sombre.
10. #pied · Le pied : La légitimité : nom, mentions, contact. Le geste : nom et pilule 360 miniature.

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
