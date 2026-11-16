# Prompt complet · Template N « Braise de salle »
# Par Yedidia Ruben - Digital Strategist. À coller tel quel dans une IA qui code (Claude, ChatGPT, Gemini).

Tu es un designer web senior. Construis une page de vente complète en un seul fichier HTML, avec exactement le rendu décrit ci-dessous : couleurs, polices, tailles, espacements, boutons, cartes, animations. La fiche de style fait foi ; en cas de doute, applique-la à la lettre plutôt que d'improviser.

## 1. La fiche de style (DESIGN.md)

# DESIGN.md : Style N « Braise de salle » (d'après la page « Página de Captura - Personal Trainer », Felipe Santos)

> **Source** : `inspi/behance/211065299/01.png` (1920 × 4493 px), page de capture d'un coach sportif « RV30 », Behance 211065299. Relevé le 16/11/2026.
> **Demande de Ruben** : pas de consigne de détail, lot du 16/11/2026.

## 1. Ambiance et intention

- Une page courte qui ne vend qu'une chose : s'inscrire à 3 cours gratuits.
- Noir de salle de sport, lumière de braise : tout ce qui compte brille en jaune, pêche ou orange.
- Le coach occupe la moitié droite du hero, fondu dans le noir par la gauche, comme éclairé par une lampe orange.
- Des cartes sombres aux coins inégaux (un coin bien plus arrondi), soulignées d'un petit trait orange.

## 2. Palette et rôles

- **Noir** `#141414` : fond des sections ; **nuit** `#181614` : fond du hero, réchauffé d'un halo `#5A3218`.
- **Carte** `#1E1E1E` / `#1B1B1B` : cartes et onglets ; filet `#2E2E2E`.
- **Jaune** `#FFD055` vers **orange** `#FF9E53` : le dégradé des boutons et du pied.
- **Orange** `#FB8F44` : onglet actif ; **orange icône** `#FEA055` : tuiles d'icônes, traits sous les cartes, mots mis en avant.
- **Or** `#FFE36F` et **pêche** `#FFB27A` : les mots colorés des titres, les dates géantes.
- **Doré** `#ECBB73` : le filet lumineux entre les sections, le contour des photos.
- **Vert** `#57E000` : les cases cochées de « Pourquoi », seule couleur froide.
- **Gris** `#484848` : le bandeau de mots qui défile ; **pied** `#FFCA76` vers `#FFD055`.

## 3. Typographie

- Non nommée par l'auteur. Relevé à l'œil : grotesque large aux courbes carrées. La plus proche sur Google Fonts : **Bai Jamjuree**, seule police de la page.

| Rôle | Police | Taille bureau / téléphone | Graisse | Interligne | Approche |
|---|---|---|---|---|---|
| Logo | Bai Jamjuree | 40 px | 500 | 1 | -0,02 em |
| Titre du hero | Bai Jamjuree | 42 / 28 px | 500 | 1,15 | -0,01 em |
| Titre de section | Bai Jamjuree | 34 / 26 px | 500 | 1,15 | -0,01 em |
| Titre « Pourquoi » | Bai Jamjuree | 36 / 28 px | 600 | 1,2 | capitales |
| Dates géantes | Bai Jamjuree | 84 / 50 px | 600 | 1,05 | -0,02 em |
| Texte | Bai Jamjuree | 13 à 15 px | 400 | 1,5 | 0 |
| Bouton | Bai Jamjuree | 13 à 16 px | 600 | 1,2 | capitales |

## 4. Composants

- **Bouton** : rectangle à coins 6 px, dégradé jaune vers orange, texte noir en capitales, flèche, halo orange qui grossit au survol.
- **Carte d'atout** : coins 14 px avec un coin à 36 px, tuile d'icône orange 56 px, titre en deux couleurs, petit trait orange collé au bas. La carte du milieu monte de 18 px et son trait s'allonge.
- **Onglets des cours** : 3 boutons empilés (« COURS 01 / 26-01 »), l'actif plein orange ; ils changent la vidéo et la fiche à côté.
- **Vignette vidéo** : photo 3:4 à contour doré, bouton lecture blanc avec halo.
- **Fiche du cours** : étiquette à filet orange, titre en deux couleurs, trait orange au bas.
- **Liste cochée** : cases vertes, début de phrase souligné en pêche.
- **Pile du coach** : 3 photos décalées devant les dates 26, 27, 28 en blanc, or et orange.

## 5. Mise en page

- Colonne de 1080 px ; les cartes tiennent dans 860 px au centre.
- Fond strié de fines colonnes verticales à 3,5 % de blanc, comme les néons d'une salle.
- Ordre : hero, atouts, programme, pourquoi, bandeau qui défile, coach, pied jaune.
- Espacement vertical : 60 à 100 px ; un filet doré ferme le hero et le programme.

## 6. Profondeur et élévation

- Ombres noires longues sous les cartes (0 20 40 px), jamais colorées sauf le halo des boutons.
- Halo orange flou derrière le coach et sur les bords du programme.
- La photo du coach se fond dans le noir par un masque à gauche, sans bord.

## 7. Images

| Id | Format | Rôle |
|---|---|---|
| N-hero | 1:1 | Ismaël en débardeur, face caméra, salle en lumière orange |
| N-cours-1 | 3:4 | Vignette du cours 1 : cordes ondulatoires |
| N-cours-2 | 3:4 | Vignette du cours 2 : assiette de sportif |
| N-cours-3 | 3:4 | Vignette du cours 3 : Ismaël corrige un élève |
| N-coach | 3:4 | Portrait d'Ismaël, barre chargée au premier plan |
| N-salle-1 | 9:16 | Haltères alignés |
| N-salle-2 | 9:16 | Main sur la barre d'un appareil |

- **Personnage** : Ismaël Bamba, 29 ans, Abidjan, peau très foncée, silhouette athlétique sèche, cheveux ras, barbe de trois jours ; bracelet de sport au poignet gauche, tenue technique près du corps (noir et orange).

## 8. À faire, à ne pas faire

- Faire : un ou deux mots colorés par titre, jamais toute la phrase.
- Faire : un seul appel à l'action par écran, toujours le même dégradé.
- Ne pas faire : de fond clair ailleurs que le pied.
- Ne pas faire : de texte blanc sur l'orange : le texte des boutons et de l'onglet actif reste noir.

## 9. Comportement responsive

- Behance ne montre que le bureau. Le téléphone est notre proposition.
- Sous 860 px : hero en colonne, photo sous le texte fondue par le haut ; cartes en colonne ; onglets en ligne au-dessus de la vidéo et de la fiche ; « Pourquoi » empilé.
- Sous 560 px : onglets empilés, vidéo en 4:3, pile du coach réduite.

## 10. Mouvement

- Moteur commun : `data-rv`, `data-parallaxe` sur les photos de la pile, `data-aimant` et `.reflet` sur les boutons, barre de progression en dégradé.
- Propre à N : la flèche « descendre » flotte ; le bandeau de mots défile ; les onglets changent le cours affiché.

## 11. Non mesuré, et choix tranchés seul

- La police (§3).
- La marque « IB30 », les textes, les dates (26, 27 et 28 janvier).
- La section programme a 3 vignettes (une par onglet) au lieu d'une.
- Le téléphone (§9).

## 12. Consigne pour l'IA

Construis une page de capture de coach sportif sur fond noir `#141414` strié de fines colonnes, en Bai Jamjuree. Le coach occupe la droite du hero, fondu dans le noir. Boutons en dégradé jaune `#FFD055` vers orange `#FF9E53`, texte noir. Trois cartes sombres à coin inégal avec tuile orange et trait orange au bas, celle du milieu relevée. Trois onglets de cours qui changent une vignette vidéo. Dates géantes blanc, or, orange derrière une pile de photos. Pied jaune.

## 2. Les sections, dans l'ordre

01. #hero · Le hero : Dire qui, quoi, pour qui en une phrase, puis faire cliquer. Le geste : Coach fondu dans le noir, mots en braise.
02. #unique · La bascule : Montrer pourquoi cette solution est différente. Le geste : Carte du milieu relevée, trait orange au bas.
03. #programme · Le contenu : Rendre l'offre concrète, morceau par morceau. Le geste : Trois onglets datés qui changent la vignette vidéo.
04. #pourquoi · La valeur : Faire sentir le prix avant de le montrer. Le geste : Titre en capitales face aux cases vertes.
05. #coach · Qui est derrière : Un humain derrière l'offre, et un lieu réel. Le geste : Dates géantes derrière une pile de photos.
06. #pied · Le pied : La légitimité : nom, mentions, contact. Le geste : Bande jaune en dégradé.

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
