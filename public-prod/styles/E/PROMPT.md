# Prompt complet · Template E « Néon vert »
# Par Yedidia Ruben - Digital Strategist. À coller tel quel dans une IA qui code (Claude, ChatGPT, Gemini).

Tu es un designer web senior. Construis une page de vente complète en un seul fichier HTML, avec exactement le rendu décrit ci-dessous : couleurs, polices, tailles, espacements, boutons, cartes, animations. La fiche de style fait foi ; en cas de doute, applique-la à la lettre plutôt que d'improviser.

## 1. La fiche de style (DESIGN.md)

# DESIGN.md : Style E « Néon vert » (d'après la page « Código do Crescimento, Marcos Paulo », Rárison Lucas)

> **Source** : `inspi/behance/233512323/` (05.png = la page, 2328 × 5990 ; 02 à 04 = la planche de marque). Relevé le 08/10/2026, session `fe30eec0`.
> **Demande de Ruben** : « prend tout jusqu'à la police si possible ». La palette est nommée par l'auteur ; la police ne l'est pas (voir §3).
> **Mesures** : la page fait 988 px de large dans l'image réduite à 1200, soit environ 1190 px réels : facteur 1,2 appliqué.

## 1. Ambiance et intention

- Une formation pour devenir stratège de lancements : énergie, ambition, scène. Le visiteur doit sentir « ça va vite, ça brille ».
- Tout est noir profond, un seul vert qui va du sapin au néon. Le vert n'habille que ce qui compte : boutons, icônes, la grande bande « Pour qui ».
- La page entière est posée dans un cadre aux coins très arrondis, bordé d'un filet vert : on regarde un écran, une scène.
- Derrière les sections, des lettres géantes presque invisibles donnent de la profondeur sans bruit.

## 2. Palette et rôles

- **Noir autorité** `#030302` (nommé par l'auteur) : le fond de toute la page.
- **Vert stratégie** `#006546` (nommé) : le départ des dégradés, les fonds verts.
- **Vert échelle** `#19FFB5` (nommé) : la lueur, les sur-titres, les icônes. Jamais en fond derrière du texte blanc.
- **Blanc clarté** `#FFFFFF` (nommé) : les titres, la carte d'offre, la carte « Qui ».
- **Noir chaud des cartes** `#130A0B` (mesuré au pixel) : les cartes sombres ont une pointe de rouge, pas de bleu.
- **Gris des cartes vidéo** `#1E1E1E`, **gris FAQ** `#0E0E0E`.
- **Texte doux** `#B7B0B0` sur noir ; **texte de carte claire** `#33475B`, **titre de carte claire** `#0B2A3A` (bleu nuit, pas noir).
- **Prix barré** `#E5484D`.
- **Bouton** : dégradé `#006546` vers `#00845A`, lueur `#19FFB5` autour. Le vert néon reste dans la lueur et le liseré du haut.
- **Filet du cadre** `rgba(25,255,181,.22)`.

## 3. Typographie

- **La police n'est pas nommée sur la planche.** Relevé à l'œil sur le titre agrandi : grotesque géométrique, « a » à deux étages, « g » à un étage, « t » coupé en biais, « M » large. La plus proche sur Google Fonts : **Sora**. Le texte courant, plus étroit, est le plus proche de **Manrope**.
- **Logo** : capitales très larges en métal brossé : **Michroma**, remplissage dégradé argent, avec un éclair vert à la place d'une lettre. Sous-titre en capitales espacées, italique fin.

| Rôle | Police | Taille bureau / téléphone | Graisse | Interligne | Approche |
|---|---|---|---|---|---|
| Titre du hero | Sora | 36 / 27 px | 600 | 1,25 | -0,01 em |
| Titre de section | Sora | 22 à 26 / 20 px | 600 | 1,25 | 0 |
| Titre de carte | Sora | 17 / 16 px | 600 | 1,3 | 0 |
| Sur-titre | Manrope | 10 px | 600 | 1 | 0,42 em, capitales, vert néon |
| Texte | Manrope | 14 à 15 / 14 px | 400 | 1,55 | 0 |
| Bouton | Manrope | 14 px | 600 | 1 | 0,02 em, capitales |
| Prix | Sora | 46 px | 700 | 1 | -0,02 em |

## 4. Composants

- **Bouton principal** : 48 px de haut, coins 4 px, dégradé vert, capitales blanches, lueur `0 0 28px rgba(25,255,181,.45)` et liseré néon d'1 px en haut. Au survol, la lueur s'élargit.
- **Carte sombre** : fond `#130A0B`, filet blanc à 12 %, coins 6 px. Une icône carrée verte (36 px, dégradé, coins 6 px), un titre de 3 lignes à côté, un filet, puis 3 lignes de texte.
- **Carte « inclus »** : dégradé vertical du vert sapin vers le noir, filet néon à 25 %, numéro dans un carré au contour néon.
- **Carte d'offre** : blanche, étroite (300 px), un ruban vert en biais dans le coin haut droit, logo sombre, prix barré rouge, prix géant, bouton.
- **Carte « Qui »** : blanche, deux colonnes, le texte à gauche, le portrait en noir et blanc à droite, coins 10 px.
- **Carte FAQ** : fond `#0E0E0E`, question en blanc gras, petit carré vert « ? », filet, réponse en gris.

## 5. Mise en page

- Cadre de page : 1190 px au plus, coins 64 px (28 px au téléphone), marge extérieure 40 px.
- Colonne de contenu étroite : 720 px. La bande « Pour qui » déborde à 860 px.
- Grilles de 3 cartes, une rangée de 4 cartes « inclus ».
- Espacement vertical : 90 à 110 px entre sections.

## 6. Profondeur et élévation

- Les lueurs remplacent les ombres : les boutons et l'éclair brillent, les cartes ne portent pas d'ombre.
- Les cartes blanches (offre, qui) portent une ombre douce pour se détacher du noir.
- Lettres géantes `#0B0B0A` derrière les sections ; dans la section support, lettres géantes en contour gris.

## 7. À faire, à ne pas faire

- Faire : un seul vert, en dégradé. Le néon dans la lumière, pas dans les aplats derrière le texte.
- Faire : des titres courts, en phrase, avec un point d'exclamation au hero seulement.
- Ne pas faire : de couleur secondaire. Le rouge ne sert qu'au prix barré.
- Ne pas faire : d'ombre portée grise sur fond noir.

## 8. Comportement responsive

- Behance ne montre que le bureau (et des maquettes tablette). Le téléphone est notre proposition.
- Sous 820 px : le hero passe en colonne (texte, bouton, puis le duo) ; les grilles passent à 1 colonne ; les 4 cartes « inclus » en 2 × 2 ; la carte « Qui » met le portrait au-dessus.

## 9. Mouvement

- Moteur commun : `data-rv` partout, `data-lignes` sur le titre du hero, `data-compte` sur les chiffres, `data-incline` sur les cartes, `data-aimant` sur les boutons, `data-parallaxe` sur les faisceaux et les lettres géantes, barre de progression verte.
- Propre à E : l'éclair du logo palpite (lueur qui respire, 2,4 s) ; les faisceaux du hero balaient doucement ; la lueur des boutons s'élargit au survol ; les cartes vidéo montent de 4 px au survol.

## 10. Non mesuré, et choix tranchés seul

- Les polices (voir §3) : à l'œil, faute de nom.
- Le bouton : le vert de l'original est trop clair pour du texte blanc (contraste sous 3). Dégradé foncé à `#00845A` (contraste 4,7) ; la lueur garde l'effet néon.
- Le bouton WhatsApp : vert vif de l'original avec un texte sombre, pour la même raison.
- Les cartes vidéo vides de l'original reçoivent un bouton lecture et un prénom.
- Le téléphone (§8).

## 11. Consigne pour l'IA

Construis une page noire posée dans un cadre aux coins très arrondis bordé d'un filet vert. Un seul vert, du sapin `#006546` au néon `#19FFB5`, réservé aux boutons, icônes, sur-titres et à une grande bande « Pour qui ». Titres en Sora 600, texte en Manrope. Cartes sombres à pointe rouge `#130A0B`, deux cartes blanches (offre, portrait). Les boutons brillent, rien ne porte d'ombre grise. Lettres géantes presque invisibles derrière les sections.

## 2. Les sections, dans l'ordre

01. #hero · « Devenez stratège de lancements à fort impact avec Malik Diallo ! »
02. #carriere · « Faites grimper votre carrière »
03. #pour-qui · « C'est pour qui ? »
04. #temoignages · « Ce que disent mes élèves »
05. #inclus
06. #offre
07. #qui · « Qui est Malik Diallo ? »
08. #faq
09. #support · « Encore une question ? Écrivez à notre équipe sur WhatsApp. »

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
