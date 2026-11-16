# Prompt complet · Template R « Violet atelier »
# Par Yedidia Ruben - Digital Strategist. À coller tel quel dans une IA qui code (Claude, ChatGPT, Gemini).

Tu es un designer web senior. Construis une page de vente complète en un seul fichier HTML, avec exactement le rendu décrit ci-dessous : couleurs, polices, tailles, espacements, boutons, cartes, animations. La fiche de style fait foi ; en cas de doute, applique-la à la lettre plutôt que d'improviser.

## 1. La fiche de style (DESIGN.md)

# DESIGN.md : Style R « Violet atelier » (d'après la page « Lançamento - Marcelo Kimura », Diego Henrique)

> **Source** : `inspi/behance/201269095/` (6 images : couverture, palette, typographie, boutons, prototype bureau 1920 px, fin), page d'inscription à un atelier en ligne de design « ID Lab », Behance 201269095. Relevé le 16/11/2026.
> **Demande de Ruben** : pas de consigne de détail, lot du 16/11/2026.

## 1. Ambiance et intention

- Un designer qui vend un atelier de 2 jours : la page alterne photos de lui en pleine largeur, aplats violets et grandes bandes presque noires.
- Le ton est celui d'un studio : filets fins, pastilles en capitales espacées, curseur et poignées de logiciel de dessin.
- Le blanc et le ciel lavande servent de respiration entre les blocs sombres ; le violet guide l'œil, le rose ne sert qu'au bouton d'achat.

## 2. Palette et rôles

Relevé au pixel (PIL) sur `05.png` et `02.png` (la planche « Cores » donne les mêmes valeurs).

- **Violet** `#7A67D6` relevé (`#7967D6` au pixel) : aplat « Pourquoi participer », lot ouvert, tuile logo. Pour le texte blanc, foncé à `#7360D3` (4,8 au lieu de 4,4).
- **Violet profond** `#5F49B9` : bouton billet, étiquette du nom, logo.
- **Lilas** `#AFB3F2`, **brume** `#CED1F7`, **nacre** `#E4E6FB` : bandeau du lot ouvert, formes, emplacements vides.
- **Ciel** `#EFF2FA` : fond de la section « Secrets ».
- **Rose** `#FF3175` : accent ; bouton d'achat foncé à `#E01A60` pour le texte blanc (4,7).
- **Nuit** `#0F0F11` : toutes les bandes sombres ; **nuit du pied** `#1C1B20`.
- **Ardoise** `#5D5E66` : bouton du lot fermé.
- **Menthe** `#A6F5DD` : forme du visuel « Pourquoi si peu cher » et première pastille.
- Halo violet `rgba(95,73,185,.35)` en dégradé radial derrière les blocs sombres.

## 3. Typographie

- L'auteur nomme « Kimura Sans » (police de marque). Plus proche sur Google Fonts : **Red Hat Display** (grotesque géométrique, a à deux étages, gras ronds).

| Rôle | Police | Taille bureau / téléphone | Graisse | Interligne | Approche |
|---|---|---|---|---|---|
| Titre du hero | Red Hat Display | 42 / 28 px | 800 | 1,12 | -0,02 em |
| Titre de section | Red Hat Display | 46 / 30 px | 800 | 1,12 | -0,02 em |
| Pastille de rubrique | Red Hat Display | 10,5 px | 600 | 1 | 0,2 em, capitales |
| Texte | Red Hat Display | 14 à 16 px | 400 | 1,6 | 0 |
| Bouton | Red Hat Display | 13 px | 700 | 1,2 | capitales |
| Prix | Red Hat Display | 40 / 30 px | 800 | 1 | -0,02 em |
| Nom géant du pied | Red Hat Display | 280 / 80 px | 800 | 0,9 | contour 1 px |

## 4. Composants

- **Bouton billet** : violet profond, capitales blanches, talon blanc carré avec un ticket ; lien vers les lots.
- **Bouton d'achat** : rose, coins 5 px, ombre pleine décalée en bas à gauche (`-8px 8px 0 #1E1E24`) qui se resserre au survol ; version ardoise pour le lot fermé.
- **Pastille de rubrique** : capsule à filet 1 px, capitales espacées (« DESIGN », « ÉVÉNEMENT EXCLUSIF »).
- **Carte de lot** : bandeau haut avec deux étiquettes (« Labo » plein, « Lot 1 » à filet), montant gras, bouton, jauge circulaire des places.
- **Tableau à filets** : 4 lignes, la première en violet, une colonne de note à droite.
- **Carte formateur** : curseur triangulaire violet et étiquette du nom (comme dans un logiciel de dessin), photo fondue dans le noir, tampon rond qui tourne.
- **Invité mystère** : carte sombre, silhouette en dégradé gris, « Qui suis-je ? ».
- **Tablette** : dessinée en CSS, certificat lavande à l'écran, stylet.
- **Cases cochées** : carrés bleus `#4964D8`, lignes encadrées d'un filet gris.
- **FAQ** : accordéon natif, triangles blancs qui tournent, filets gris.

## 5. Mise en page

- Colonne de 1040 px ; les photos du hero et de « Quand et comment » prennent toute la largeur en 16:9, texte posé dessus.
- Ordre : hero photo, pourquoi (photo et aplat violet), design et marché (nuit), secrets (ciel), quand (photo), prix et « si peu cher » et avantages (blanc), formateur, réalisations, invités, certificat, résumé, pour qui (nuit), FAQ (nuit, photo à droite), pied.
- Espacement vertical : 90 à 130 px.

## 6. Profondeur et élévation

- Peu d'ombres : la profondeur vient des halos violets flous derrière les blocs sombres et des photos fondues dans le noir.
- Les autocollants de marques débordent du mockup d'affiche ; le tampon déborde de la carte formateur.
- Seul le bouton rose porte une ombre dure.

## 7. À faire, à ne pas faire

- Faire : une pastille de rubrique au-dessus de chaque titre important.
- Faire : remontrer le formateur en photo à chaque grande étape (hero, pourquoi, quand, formateur, FAQ).
- Ne pas faire : de rose ailleurs que sur l'achat et la jauge.
- Ne pas faire : de texte blanc sur `#7A67D6` en petite taille : foncer à `#7360D3`.

## 8. Comportement responsive

- Behance ne montre que le bureau. Le téléphone est notre proposition.
- Sous 820 px : les photos pleine largeur restent en 16:9 en haut, le texte passe dessous sur la nuit ; toutes les grilles en une colonne ; mosaïque en 2 colonnes ; la photo de la FAQ passe au-dessus des questions.

## 9. Mouvement

- Moteur commun : `data-rv` partout, `data-lignes` sur les titres, `data-aimant` sur les boutons, barre de progression violette, `.reflet` sur le bouton billet.
- Propre à R : le **tampon « Immersion · Labo Marque » tourne** (16 s) ; l'ombre dure du bouton rose se resserre au survol.

## 10. Images

Le personnage : **Thierry Kalala**, 36 ans, Kinshasa, peau brun foncé, cheveux courts bouclés, barbe pleine courte, épaules larges ; signature : lunettes rectangulaires noires, sweat uni. Designer d'identité visuelle et formateur. Il apparaît sur 6 images sur 12.

| id | format | rôle | personnage |
|---|---|---|---|
| R-hero | 16:9 | photo pleine largeur du hero, au bureau | oui |
| R-nuancier | 1:1 | « Pourquoi participer », nuancier en main | oui |
| R-affiche | 4:3 | mockup d'affiches sur un immeuble | non |
| R-tablette | 16:9 | « Quand et comment », sur une tablette | oui |
| R-portrait | 9:16 | « Pourquoi si peu cher », portrait studio | oui |
| R-formateur | 4:3 | carte formateur | oui |
| R-projet-1 | 1:1 | réalisation : livret rouge | non |
| R-projet-2 | 1:1 | réalisation : affiche rose | non |
| R-profil-1 | 4:3 | pour qui : reconversion | non |
| R-profil-2 | 4:3 | pour qui : débutante | non |
| R-profil-3 | 4:3 | pour qui : confirmé | non |
| R-faq | 3:4 | FAQ, clair-obscur à la lampe | oui |

Consignes complètes : `images/commandes.json`.

## 11. Non mesuré, et choix tranchés seul

- La police (§3).
- La marque « Labo Marque », l'organisateur « Kin Créative », les textes, les prix en FCFA (lot 1 à 9 900 FCFA).
- Les logos du portfolio et les autocollants : dessinés en CSS ou SVG, noms inventés.
- Le violet et le rose foncés pour le contraste (§2).
- Écarts : la couverture (bordure festonnée, poignées de sélection autour du logo) et le ticket QR de fin ne sont pas des sections de la page, non repris ; les 3 cartes d'invités gardent leurs silhouettes.
- Le téléphone (§8).

## 12. Consigne pour l'IA

Construis une page d'inscription à un atelier en ligne de design en violet `#7360D3`, nuit `#0F0F11` et blanc, avec un ciel lavande `#EFF2FA` pour respirer. Tout en Red Hat Display, titres en 800. Le formateur revient en photo pleine largeur (hero, « Quand et comment ») et en carte avec un curseur violet et son nom en étiquette. Chaque titre porte une pastille en capitales espacées. Termine par deux lots en cartes, le lot ouvert en violet avec un bouton rose à ombre dure décalée, puis la FAQ sur la nuit et un nom géant en contour dans le pied.

## 2. Les sections, dans l'ordre

01. #hero · Le hero : Dire qui, quoi, pour qui en une phrase, puis faire cliquer. Le geste : photo pleine largeur, bouton billet à talon blanc.
02. #pourquoi · La valeur : Faire sentir le prix avant de le montrer. Le geste : photo carrée contre aplat violet à filets.
03. #design · La douleur : Le visiteur se reconnaît : « c'est moi ». Le geste : mockup d'affiche entouré d'autocollants de marques.
04. #marche · La preuve : Faire parler les autres : « ça a marché pour des gens comme moi ». Le geste : tableau à filets, première ligne violette.
05. #secrets · La bascule : Montrer pourquoi cette solution est différente. Le geste : carte à filet violet, pastille très confidentiel.
06. #quand · Le contenu : Rendre l'offre concrète, morceau par morceau. Le geste : photo pleine largeur, liste sur verre dépoli.
07. #prix · L'offre : Convertir : le prix, ce qu'il contient, le bouton. Le geste : deux lots, bouton rose à ombre décalée.
08. #pas-cher · La garantie : Retirer le risque : « si ça ne vous va pas, je vous rembourse ». Le geste : carte cadrée, portrait et formes lilas, menthe.
09. #avantages · Les bonus : Faire basculer l'indécis : « si j'entre maintenant, j'ai plus ». Le geste : courbe vectorielle à poignées comme dans un logiciel.
10. #formateur · Qui est derrière : Un humain derrière l'offre, et un lieu réel. Le geste : curseur et étiquette, tampon qui tourne.
11. #realisations · La preuve : Faire parler les autres : « ça a marché pour des gens comme moi ». Le geste : mosaïque de projets, tuile logo violette.
12. #invites · Les bonus : Faire basculer l'indécis : « si j'entre maintenant, j'ai plus ». Le geste : silhouettes mystère, qui suis-je ?.
13. #certificat · Les bonus : Faire basculer l'indécis : « si j'entre maintenant, j'ai plus ». Le geste : tablette dessinée en CSS avec stylet.
14. #programme · Le contenu : Rendre l'offre concrète, morceau par morceau. Le geste : cases cochées bleues en deux colonnes.
15. #pour-qui · Pour qui : Trier : celui qui n'est pas la cible s'en va, celui qui l'est se sent choisi. Le geste : trois rangées photo et texte.
16. #faq · La FAQ : Lever les dernières objections. Le geste : accordéon à triangles, portrait en clair-obscur.
17. #pied · Le pied : La légitimité : nom, mentions, contact. Le geste : nom géant en contour fin.

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
