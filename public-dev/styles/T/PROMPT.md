# Prompt complet · Template T « Verdict 365 »
# Par Yedidia Ruben - Digital Strategist. À coller tel quel dans une IA qui code (Claude, ChatGPT, Gemini).

Tu es un designer web senior. Construis une page de vente complète en un seul fichier HTML, avec exactement le rendu décrit ci-dessous : couleurs, polices, tailles, espacements, boutons, cartes, animations. La fiche de style fait foi ; en cas de doute, applique-la à la lettre plutôt que d'improviser.

## 1. La fiche de style (DESIGN.md)

# DESIGN.md : Style T « Verdict 365 » (d'après la page « Página de Vendas - Adv Sustentável », Jared Simplicio)

> **Source** : `inspi/behance/254804569/01.jpg` (1920 x 23 833), page de vente d'une formation pour avocats, Behance 254804569. Relevé le 16/11/2026, découpé en 9 tranches de 1000 x 1600.
> **Demande de Ruben** : pas de consigne de détail, lot du 16/11/2026.

## 1. Ambiance et intention

- Une formation d'avocats vendue comme un dossier d'enquête : fond noir total, fils rouges tendus, portraits en noir et blanc.
- Le rouge dit l'urgence et la preuve (chiffres, garanties), le vert ne sert qu'à l'action (boutons, cartes « pour toi »).
- Trois panneaux blancs arrondis coupent la nuit : accès, méthode, résultats, garantie. Chacun porte une grille fine et un coin rose.
- Des chiffres géants en dégradé portent l'offre : **365** (garantie), **60** (programme IA), **12** (conférences), **GARANTIE**.

## 2. Palette et rôles

Relevé au pixel avec PIL sur l'image d'origine.

- **Noir** `#000000` : fond de page ; **carte** `#0B0B0B` : cartes, FAQ, bonus, tableau.
- **Rouge** `#C02020` : mots clés des titres, cartes d'étapes ; **rouge vif** `#E73535` : chiffres, puces, étiquettes mono.
- **Rouge profond** `#5F0403` et **lueur** `#660E0D` : bas des dégradés, halos en haut des sections sombres.
- **Bordeaux** `#2D0F0F` : cartes « ce n'est pas pour toi », duel « Arrête de ».
- **Vert bouton** `#00B043` : tous les boutons d'action, texte noir dessus.
- **Vert carte** `#0F2E1F`, filet `#134F33` : cartes « pour toi » ; **mousse** `#141F0F` : carte « Passe à ».
- **Rose** `#FEC2C2` : coin haut droit des panneaux blancs.
- **Gris texte** `#A29C9E` : texte courant sur noir ; **blanc** `#FFFFFF` : titres.

## 3. Typographie

- Non nommée par l'auteur. Relevé à l'œil : grotesque serrée, approche négative forte (Inter Display ou proche). La plus proche sur Google Fonts : **Inter Tight**. Les étiquettes en chasse fixe espacée : **JetBrains Mono**.

| Rôle | Police | Taille bureau / téléphone | Graisse | Interligne | Approche |
|---|---|---|---|---|---|
| Titre du hero | Inter Tight | 64 / 34 px | 600 | 1,08 | -0,035 em |
| Titre de section | Inter Tight | 50 / 28 px | 600 | 1,08 | -0,035 em |
| Chiffre géant | Inter Tight | 210 à 416 px | 700 | 1 | -0,06 em |
| Texte | Inter Tight | 15 à 18 px | 400 | 1,55 | 0 |
| Étiquette | JetBrains Mono | 10 à 11 px | 500 | 1 | 0,3 em, capitales |
| Prix du tableau | JetBrains Mono | 14 px | 500 | 1,4 | 0 |
| Bouton | Inter Tight | 15 px | 700 | 1,15 | -0,02 em, capitales |

## 4. Composants

- **Bouton** : pilule verte en dégradé, texte noir en capitales, flèche ; halo vert doux. Variante rouge pour le contact du suivi.
- **Logo** : un A rouge à flèche montante dessiné en SVG, nom sur deux lignes, petit « formation » mono rouge.
- **Carte à languette** : blanche, filet clair, une languette rouge sur le haut gauche, icône dans un carré filet.
- **Carte garantie 365** : rouge en dégradé vers le sang, chiffre 365 géant qui s'efface vers le bas.
- **Carte d'étape** : numéro mono, titre blanc ; une sur deux en rouge plein, l'autre noire à filet bordeaux.
- **Carte bonus** : noire, texte à gauche, visuel à droite, étiquette mono encadrée « BONUS 1 ».
- **Tableau de valeur** : lignes alternées, prix mono rouges, ligne total bordeaux.
- **Accordéon** : filets gris, plus rouge qui tourne à l'ouverture.
- **Séparateur** : filet rouge pleine largeur, rond noir à chevron au centre.

## 5. Mise en page

- Colonnes étroites et centrées : 1200 px (hero), 960 px (étapes, bonus), 830 px (tableau, FAQ, garanties).
- Lignes verticales très fines sur tout le fond noir (une tous les 10 %).
- Les panneaux blancs prennent toute la largeur, coins de 28 px.
- Rythme : une section, un bouton vert ; 90 à 130 px entre les sections.

## 6. Profondeur et élévation

- Profondeur par la lumière, pas par l'ombre : halos rouges en haut des sections, bandes rouges sur les bords du tableau de valeur.
- Le bouton de la méthode chevauche le bas du panneau blanc.
- Les chiffres géants passent derrière les arcs et les portraits.

## 7. À faire, à ne pas faire

- Faire : un seul vert, réservé à l'action.
- Faire : photos en noir et blanc dans les cartes de méthode et le portrait final.
- Ne pas faire : de texte rouge foncé `#7A1414` sur noir (contraste 2) ; les numéros d'étape passent à `#B42626`.
- Ne pas faire : de texte sous 12 px hors bureau large ; le Behance descend à 9 px, nous non.

## 8. Comportement responsive

- Behance ne montre que le bureau. Le téléphone est notre proposition.
- Sous 820 px : hero en colonne (photo d'abord), cartes d'accès, méthode, duel, bonus, garanties en une colonne ; étapes et ateliers en 2 colonnes, puis 1 sous 480 px.
- Le 60 géant passe à 190 px, le 365 à 110 px.

## 9. Mouvement

- Moteur commun : `data-rv` partout, `data-lignes` sur les titres, `data-aimant` sur les boutons, `.reflet` sur les deux boutons clés, barre de progression rouge.
- Propre à T : le plus de l'accordéon tourne en croix.

## 10. Non mesuré, et choix tranchés seul

- Les polices (§3).
- La marque « Cabinet Solide », la cohorte 9, les textes, les prix en FCFA (12 x 275 000 F, 3 000 000 F comptant), la garantie de 3 millions par mois.
- Les logos d'outils d'IA du Behance remplacés par des pastilles neutres ; le badge Zoom par une pastille « visio » ; les billets d'événement dessinés en CSS.
- La vidéo de témoignages devient un emplacement 16:9.
- Le téléphone (§8).

## 11. Images

Personnage : **Rodrigue Agbodjan**, 47 ans, Cotonou, peau brun foncé, cheveux poivre et sel très courts, barbe grise taillée court ; signature : lunettes demi-cerclées, costume avec pochette rouge. Il apparaît sur 8 images sur 12.

| id | format | rôle |
|---|---|---|
| T-hero | 3:4 | portrait du fondateur, fils rouges derrière |
| T-ecran | 4:3 | ordinateur sur socle de pierre, panneau d'accès |
| T-plan | 16:9 | carte « Le plan », noir et blanc |
| T-niches | 16:9 | carte « Les niches », noir et blanc |
| T-prospection | 16:9 | carte « La prospection », noir et blanc |
| T-accueil | 16:9 | carte « L'accueil client », main qui écrit |
| T-direct | 4:3 | séance de suivi en visio |
| T-temoignages | 16:9 | mosaïque de témoignages d'élèves |
| T-bonus-carnet | 3:4 | carnet des 14 niches |
| T-bonus-mentorat | 4:3 | mentorat de groupe |
| T-bonus-conferences | 1:1 | portrait buste devant le 12 |
| T-portrait | 3:4 | portrait final « Qui je suis », noir et blanc |

Les consignes complètes sont dans `images/commandes.json`.

## 12. Consigne pour l'IA

Construis une page de vente de formation sur fond noir total à fines lignes verticales, titres en Inter Tight 600 très serrés avec un mot clé en rouge `#C02020`, étiquettes en JetBrains Mono espacé rouge vif. Tous les boutons sont des pilules vertes `#00B043` à texte noir en capitales. Coupe la nuit par des panneaux blancs arrondis à grille fine et coin rose. Pose des chiffres géants en dégradé rouge qui s'efface (365, 60, 12) derrière les blocs clés. Damier de cartes d'étapes rouges et noires, bonus en cartes noires texte et visuel, tableau de valeur aux prix mono rouges, garanties en cartes blanches à filet rouge.

## 2. Les sections, dans l'ordre

01. #hero · Le hero : Dire qui, quoi, pour qui en une phrase, puis faire cliquer. Le geste : portrait barré de fils rouges, titre rouge et blanc.
02. #acces · La valeur : Faire sentir le prix avant de le montrer. Le geste : panneau blanc, cartes à languette rouge, 365 géant.
03. #douleur · La douleur : Le visiteur se reconnaît : « c'est moi ». Le geste : titre dégradé, chiffre rouge entre deux filets.
04. #pour-qui · Pour qui : Trier : celui qui n'est pas la cible s'en va, celui qui l'est se sent choisi. Le geste : cartes vertes oui, cartes bordeaux non.
05. #methode · Le contenu : Rendre l'offre concrète, morceau par morceau. Le geste : 4 cartes avec photo noir et blanc.
06. #a-vie · La bascule : Montrer pourquoi cette solution est différente. Le geste : carte bordeaux, infini en dégradé.
07. #parcours · Le contenu : Rendre l'offre concrète, morceau par morceau. Le geste : damier de cartes rouges et noires numérotées.
08. #ia · Les bonus : Faire basculer l'indécis : « si j'entre maintenant, j'ai plus ». Le geste : 60 géant, arc de pastilles IA.
09. #ateliers · Le contenu : Rendre l'offre concrète, morceau par morceau. Le geste : 4 cartes noires « en direct ».
10. #soutien · La bascule : Montrer pourquoi cette solution est différente. Le geste : liste et photo, duel rouge et vert.
11. #resultats · La preuve : Faire parler les autres : « ça a marché pour des gens comme moi ». Le geste : panneau blanc, grand cadre vidéo.
12. #bonus · Les bonus : Faire basculer l'indécis : « si j'entre maintenant, j'ai plus ». Le geste : 5 cartes bonus, texte et visuel.
13. #rapide · Les bonus : Faire basculer l'indécis : « si j'entre maintenant, j'ai plus ». Le geste : rangs en lignes, étiquettes mono rouges.
14. #valeur · La valeur : Faire sentir le prix avant de le montrer. Le geste : tableau aux prix mono rouges, total bordeaux.
15. #inclus · L'offre : Convertir : le prix, ce qu'il contient, le bouton. Le geste : liste à puces rouges sous le logo.
16. #offre · L'offre : Convertir : le prix, ce qu'il contient, le bouton. Le geste : carte prix bordeaux lumineuse, bouton vert.
17. #garantie · La garantie : Retirer le risque : « si ça ne vous va pas, je vous rembourse ». Le geste : mot GARANTIE géant, 3 cartes à filet rouge.
18. #qui · Qui est derrière : Un humain derrière l'offre, et un lieu réel. Le geste : portrait noir et blanc, 3 chiffres rouges.
19. #objections · La FAQ : Lever les dernières objections. Le geste : accordéon de citations, plus rouges.
20. #faq · La FAQ : Lever les dernières objections. Le geste : accordéon sur gris nuit, bouton rouge.
21. #pied · Le pied : La légitimité : nom, mentions, contact. Le geste : logo centré, mentions sobres.

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
