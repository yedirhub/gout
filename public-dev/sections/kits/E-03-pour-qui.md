# Prompt · Section « Pour qui » du template E « Néon vert »
# Par Yedidia Ruben - Digital Strategist. À coller dans une IA qui code, avec ta page.

Construis une section « Pour qui » pour ma page, dans le même esprit que le code de référence plus bas. Garde la structure, le geste et les proportions ; reprends mes couleurs, mes polices et mes textes à moi.

- Son rôle : Trier : celui qui n'est pas la cible s'en va, celui qui l'est se sent choisi.
- Où la placer : Avant ou après l'offre.
- Sa structure : Deux colonnes : « ce n'est pas pour vous si… » et « c'est pour vous si… ».
- La règle qui fait la différence : L'asymétrie des fonds (sombre, clair) donne la réponse avant la lecture.
- Animations : attributs data-rv, data-lignes, data-compte, data-incline, data-aimant (moteur anim.js). Sans le moteur, retire-les.
- Aucun tiret long dans les textes. Contraste de 4,5 au moins. Lisible de 360 à 1920 px.

## Le code de référence (HTML)

```html
<section class="pour-qui" id="pour-qui">
  <div class="bande" data-rv>
    <svg class="eclair-g" viewBox="0 0 100 160" preserveAspectRatio="none" aria-hidden="true"><path d="M70 0 L0 96 H44 L20 160 L100 52 H54 Z"/></svg>
    <svg class="eclair-d" viewBox="0 0 30 90" preserveAspectRatio="none" aria-hidden="true"><path d="M30 0 L4 52 H16 L8 90 L26 34 H14 Z"/></svg>
    <div><div class="sur">Qui</div><h2>C'est pour qui ?</h2></div>
    <ul>
      <li>Les entrepreneurs du web et les lanceurs qui veulent passer à l'échelle et vendre gros, mois après mois.</li>
      <li>Les créateurs de formations qui veulent une structure pour sortir de l'improvisation et lancer des produits qui comptent.</li>
      <li>Les professionnels ambitieux qui veulent maîtriser les lancements avec des chiffres et des idées neuves.</li>
    </ul>
  </div>
</section>
```

## Le CSS du template d'origine (la section en dépend, ne garde que ce qu'elle utilise)

```css
:root{
  --noir:#030302; --carte:#130A0B; --gris-v:#1E1E1E; --gris-f:#0E0E0E;
  --sapin:#006546; --sapin-f:#00845A; --neon:#19FFB5; --blanc:#FFFFFF;
  --doux:#B7B0B0; --nuit:#0B2A3A; --texte-c:#33475B; --rouge:#E5484D;
  --filet:rgba(25,255,181,.22); --filet-b:rgba(255,255,255,.12);
  --courbe:cubic-bezier(.16,1,.3,1);
  --titre:'Sora',system-ui,sans-serif; --texte:'Manrope',system-ui,sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:var(--texte);font-size:15px;line-height:1.55;color:var(--doux);background:var(--noir);-webkit-font-smoothing:antialiased;overflow-x:clip}
svg{display:block}
a{color:inherit;text-decoration:none}
h1,h2,h3{font-family:var(--titre);font-weight:600;color:var(--blanc);line-height:1.25}
.wrap{width:min(720px,100% - 40px);margin-inline:auto;position:relative;z-index:1}
section{position:relative}

/* Le cadre : toute la page posée dans un écran aux coins très arrondis */
.cadre{width:min(1190px,100% - 80px);margin:40px auto;border:1px solid var(--filet);border-radius:64px;overflow:hidden;position:relative;background:var(--noir)}

/* Sur-titre */
.sur{font-size:10px;font-weight:600;letter-spacing:.42em;text-transform:uppercase;color:var(--neon)}

/* Bouton principal */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;height:48px;padding:0 26px;border-radius:4px;
  background:linear-gradient(90deg,var(--sapin),var(--sapin-f));color:#fff;font:600 14px/1 var(--texte);letter-spacing:.02em;text-transform:uppercase;
  box-shadow:inset 0 1px 0 rgba(25,255,181,.7),0 0 28px rgba(25,255,181,.42);transition:box-shadow .4s var(--courbe)}
.btn:hover{box-shadow:inset 0 1px 0 rgba(25,255,181,.9),0 0 46px rgba(25,255,181,.65)}
.centre{text-align:center}

/* Lettres géantes presque invisibles derrière les sections */
.geant::before{content:attr(data-mot)}
.geant{position:absolute;left:-20%;right:-20%;text-align:center;font:700 clamp(160px,30vw,380px)/.8 var(--titre);color:#0B0B0A;white-space:nowrap;pointer-events:none;z-index:0;letter-spacing:-.04em}

/* Logo */
.logo{display:inline-flex;flex-direction:column;gap:6px}
.logo .mot{font:400 26px/1 'Michroma',var(--titre);letter-spacing:.02em;display:flex;align-items:center;
  background:linear-gradient(180deg,#FFFFFF 0%,#BFC3C2 45%,#6F7473 55%,#E6E8E7 100%);-webkit-background-clip:text;background-clip:text;color:transparent}
.logo .eclair{width:16px;height:30px;margin:0 2px;filter:drop-shadow(0 0 6px rgba(25,255,181,.9));animation:respire 2.4s ease-in-out infinite}
.logo small{font:300 italic 11px/1 var(--texte);letter-spacing:.62em;color:#E7E9E8;text-transform:uppercase;padding-left:4px}
@keyframes respire{50%{filter:drop-shadow(0 0 14px rgba(25,255,181,1))}}

/* 01 · Hero */
.hero{min-height:560px;padding:96px 0 0;overflow:hidden}
.foule{position:absolute;inset:0;opacity:.32;filter:blur(1.5px);
  background:
   radial-gradient(60% 70% at 70% 30%,rgba(0,101,70,.55),transparent 70%),
   radial-gradient(circle at 50% 50%,#13201B 0 14px,transparent 15px) 0 0/46px 52px,
   radial-gradient(circle at 50% 50%,#0F1A16 0 16px,transparent 17px) 23px 26px/46px 52px;
  -webkit-mask-image:linear-gradient(180deg,#000 30%,transparent 92%);mask-image:linear-gradient(180deg,#000 30%,transparent 92%)}
.faisceaux{position:absolute;right:0;top:0;width:58%;height:100%;pointer-events:none}
.faisceau{position:absolute;inset:-6% 0;filter:blur(3px);opacity:.85}
.faisceau.f1{background:linear-gradient(225deg,rgba(25,255,181,.8),rgba(0,101,70,.5) 40%,transparent 72%);clip-path:polygon(70% 0,100% 0,100% 12%,30% 100%,0 100%,0 88%)}
.faisceau.f2{background:linear-gradient(135deg,rgba(25,255,181,.55),rgba(0,101,70,.35) 45%,transparent 75%);clip-path:polygon(18% 0,42% 0,100% 74%,100% 100%,84% 100%)}
.faisceau{animation:balaie 7s ease-in-out infinite alternate}
.faisceau.f2{animation-delay:-3.5s}
@keyframes balaie{to{opacity:.6;transform:translateX(18px)}}
.hero .grille{position:relative;z-index:1;width:min(1000px,100% - 80px);margin-inline:auto;display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:start}
.hero .texte{padding:24px 0 0 80px}
.hero h1{font-size:clamp(26px,2.25vw,33px);letter-spacing:-.01em;margin-top:34px}
.hero p{font-size:14px;margin-top:14px;max-width:390px;color:#C9C4C4}
.hero .btn{margin-top:26px}
.duo{position:relative;height:470px;align-self:end}
.duo .p{position:absolute;bottom:0}
.duo .p1{left:2%;width:62%;height:84%;z-index:2}
.duo .p2{right:-6%;width:66%;height:100%;z-index:1}
.duo .p svg{width:100%;height:100%}
.duo .halo{position:absolute;left:30%;bottom:20%;width:50%;height:60%;background:radial-gradient(closest-side,rgba(25,255,181,.55),transparent);filter:blur(20px)}
.defile{position:absolute;left:50%;bottom:34px;width:14px;height:26px;border:1.5px solid rgba(25,255,181,.8);border-radius:9px;z-index:3;transform:translateX(-50%)}
.defile::after{content:"";position:absolute;left:50%;top:5px;width:2px;height:6px;margin-left:-1px;background:var(--neon);border-radius:2px;animation:molette 1.8s ease-in-out infinite}
@keyframes molette{60%{transform:translateY(8px);opacity:0}}

/* 02 · Carrière */
.carriere{padding:40px 0 100px}
.carriere .tete{display:grid;grid-template-columns:1fr 200px;gap:40px;align-items:end;padding-bottom:22px;border-bottom:1px solid var(--filet-b)}
.carriere h2{font-size:22px;margin-top:12px}
.carriere .tete p{font-size:13px;line-height:1.5;color:#D8D3D3}
.trois{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:26px}
.carte{background:var(--carte);border:1px solid var(--filet-b);border-radius:6px;padding:20px 16px 22px}
.carte .h{display:flex;gap:12px;align-items:flex-start;padding-bottom:16px;border-bottom:1px solid rgba(255,255,255,.14)}
.ico{flex:none;width:36px;height:36px;border-radius:6px;background:linear-gradient(160deg,#19D394,var(--sapin));display:grid;place-items:center;box-shadow:0 0 16px rgba(25,255,181,.25)}
.ico svg{width:18px;height:18px}
.carte h3{font-size:15.5px;line-height:1.3}
.carte p{font-size:12.5px;line-height:1.5;margin-top:14px;color:#C2BCBC}
.carriere .btn{margin-top:30px}

/* 03 · Pour qui : la bande verte */
.pour-qui{padding:10px 0 110px;background:linear-gradient(180deg,#0A0A0A 0 50%,var(--noir) 50%)}
.bande{position:relative;z-index:1;width:min(860px,100% - 40px);margin-inline:auto;border-radius:6px;overflow:hidden;
  background:linear-gradient(100deg,#00563C 0%,#0A8C62 55%,#0FA673 100%);display:grid;grid-template-columns:1fr 1.25fr;gap:40px;padding:48px 48px 50px}
.bande .eclair-g{position:absolute;left:-4%;top:-20%;width:48%;height:150%;fill:#004A33;opacity:.85}
.bande .eclair-d{position:absolute;right:-1%;top:-8%;width:7%;height:62%;fill:#26C98F;opacity:.4}
.bande>div,.bande>ul{position:relative}
.bande .sur{color:#D9FFF1}
.bande h2{font-size:22px;margin-top:12px}
.bande ul{list-style:none}
.bande li{font-size:13.5px;line-height:1.5;color:#F2FFF9;padding:16px 0;border-bottom:1px solid rgba(255,255,255,.35)}
.bande li:first-child{padding-top:0}
.bande li:last-child{border:0;padding-bottom:0}

/* 04 · Témoignages */
.temoignages{padding:30px 0 100px;overflow:hidden}
.temoignages .geant{top:-30px}
.temoignages h2{font-size:22px;margin-top:10px}
.temoignages .sous{font-size:13px;margin-top:8px;color:#D8D3D3}
.videos{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:30px}
.video{aspect-ratio:9/12.6;border-radius:8px;background:linear-gradient(180deg,#232323,#1A1A1A);position:relative;overflow:hidden;transition:transform .5s var(--courbe),box-shadow .5s var(--courbe)}
.video:hover{transform:translateY(-4px);box-shadow:0 0 0 1px var(--filet),0 18px 40px -20px rgba(25,255,181,.4)}
.video svg.silh{position:absolute;left:12%;right:12%;bottom:0;width:76%;height:72%;opacity:.55}
.video .lire{position:absolute;left:50%;top:42%;width:48px;height:48px;margin:-24px 0 0 -24px;border-radius:50%;background:rgba(3,3,2,.55);border:1px solid rgba(25,255,181,.6);display:grid;place-items:center;backdrop-filter:blur(4px)}
.video .lire::after{content:"";border-left:12px solid var(--neon);border-block:8px solid transparent;margin-left:4px}
.video .nom{position:absolute;left:14px;bottom:12px;font-size:12px;color:#fff;font-weight:600}
.video .nom small{display:block;font-weight:400;color:#C2BCBC;font-size:11px}
.temoignages .btn{margin-top:30px}

/* 05 · Ce qui est inclus */
.inclus{padding:0 0 110px}
.quatre{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
.inc{border:1px solid rgba(25,255,181,.25);border-radius:6px;padding:20px 14px 30px;text-align:center;
  background:linear-gradient(180deg,#0B6E4F 0%,#06402E 55%,#04140F 100%)}
.num{display:inline-grid;place-items:center;width:30px;height:30px;border:1.5px solid rgba(25,255,181,.85);border-radius:4px;font:700 14px/1 var(--titre);color:#fff;position:relative}
.num::before{content:"";position:absolute;right:-5px;top:-5px;width:8px;height:8px;border-top:1.5px solid rgba(25,255,181,.85);border-right:1.5px solid rgba(25,255,181,.85)}
.inc p{font:600 12.5px/1.4 var(--titre);color:#F2FFF9;margin-top:14px}

/* 06 · L'offre */
.offre{padding:0 0 120px;overflow:hidden}
.offre .geant{top:10px;color:#0A0A09}
.prix{position:relative;z-index:1;width:min(300px,100%);margin-inline:auto;background:#fff;border-radius:6px;padding:30px 22px 26px;text-align:center;overflow:hidden;box-shadow:0 30px 70px -30px rgba(25,255,181,.35)}
.ruban{position:absolute;right:-34px;top:18px;width:130px;transform:rotate(45deg);background:linear-gradient(90deg,var(--sapin),var(--sapin-f));color:#fff;font:600 7.5px/1 var(--texte);letter-spacing:.08em;text-transform:uppercase;padding:5px 0}
.prix .logo .mot{font-size:19px;background:linear-gradient(180deg,#3C4241,#0E1211 60%,#454B4A);-webkit-background-clip:text;background-clip:text}
.prix .logo small{color:#1C2120;font-size:8.5px}
.prix .de{font-size:11px;color:#3A3A3A;margin-top:22px}
.prix .de s{color:var(--rouge)}
.prix .gros{font:700 46px/1 var(--titre);color:#060606;letter-spacing:-.02em;margin-top:8px}
.prix .ou{font-size:11px;color:#3A3A3A;margin-top:6px}
.prix .btn{width:100%;margin-top:22px}

/* 07 · Qui est derrière */
.qui{padding:0 0 110px}
.fiche{display:grid;grid-template-columns:1.25fr 1fr;background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 40px 80px -40px rgba(0,0,0,.9)}
.fiche .t{padding:40px 36px 40px 44px}
.fiche h2{color:var(--nuit);font-size:22px}
.fiche p{color:var(--texte-c);font-size:13px;line-height:1.5;margin-top:14px}
.fiche p b{color:var(--nuit)}
.fiche .btn{margin-top:26px}
.fiche .photo{position:relative;background:linear-gradient(180deg,#C9C9C9,#9D9D9D);min-height:340px}
.fiche .photo svg{position:absolute;left:6%;right:6%;bottom:0;width:88%;height:88%}

/* 08 · FAQ */
.faq{padding:0 0 100px}
.faq .grille{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.q{background:var(--gris-f);border-radius:6px;padding:20px 16px 24px}
.q .h{display:flex;justify-content:space-between;gap:12px;align-items:center;padding-bottom:12px;border-bottom:1px solid rgba(255,255,255,.14)}
.q h3{font-size:13.5px;line-height:1.3}
.q .i{flex:none;width:18px;height:18px;border-radius:3px;background:linear-gradient(160deg,#19D394,var(--sapin));display:grid;place-items:center;font:700 10px/1 var(--titre);color:#fff}
.q p{font-size:12px;line-height:1.5;margin-top:12px;color:#A9A2A2}

/* 09 · Support */
.support{border-top:1px solid rgba(255,255,255,.4);padding:100px 0 110px;overflow:hidden}
.support .geant{top:16px;color:transparent;-webkit-text-stroke:1.5px #262626}
.support h2{font-size:24px;max-width:360px;margin-inline:auto}
.btn-wa{display:inline-flex;align-items:center;gap:10px;height:46px;padding:0 24px;border-radius:4px;margin-top:22px;background:#1ED543;color:#031B07;font:700 13.5px/1 var(--texte);text-transform:uppercase;transition:box-shadow .4s var(--courbe)}
.btn-wa:hover{box-shadow:0 0 30px rgba(30,213,67,.55)}
.btn-wa svg{width:20px;height:20px}

/* 10 · Pied */
footer{background:#0A0A0A;padding:28px 20px 34px;text-align:center;font-size:12.5px;color:#C9C4C4}
footer b{color:#fff;font-weight:600}

/* Téléphone */
@media (max-width:980px){
  .hero .texte{padding-left:40px}
}
@media (max-width:820px){
  .cadre{width:calc(100% - 20px);margin:10px auto;border-radius:28px}
  .hero{padding-top:54px}
  .hero .grille{grid-template-columns:1fr;width:calc(100% - 40px)}
  .hero .texte{padding:0}
  .duo{height:360px;margin-top:20px}
  .defile{display:none}
  .carriere .tete{grid-template-columns:1fr;gap:12px}
  .trois,.videos,.faq .grille{grid-template-columns:1fr}
  .videos{grid-template-columns:repeat(3,72%);overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:6px}
  .video{scroll-snap-align:start}
  .quatre{grid-template-columns:1fr 1fr}
  .bande{grid-template-columns:1fr;padding:34px 24px;gap:22px}
  .fiche{grid-template-columns:1fr}
  .fiche .photo{order:-1;min-height:300px}
  .fiche .t{padding:30px 24px 32px}
  .logo .mot{font-size:21px}
}
@media (prefers-reduced-motion:reduce){.faisceau,.logo .eclair,.defile::after{animation:none}}
```
