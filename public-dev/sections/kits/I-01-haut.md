# Prompt · Section « Le hero » du template I « Rose scène »
# Par Yedidia Ruben - Digital Strategist. À coller dans une IA qui code, avec ta page.

Construis une section « Le hero » pour ma page, dans le même esprit que le code de référence plus bas. Garde la structure, le geste et les proportions ; reprends mes couleurs, mes polices et mes textes à moi.

- Son rôle : Dire qui, quoi, pour qui en une phrase, puis faire cliquer.
- Où la placer : Toujours, en premier.
- Sa structure : Sur-titre court, titre en 2 à 3 lignes, 2 à 3 lignes de promesse, bouton, preuve sous le bouton. Un portrait ou l'objet de l'autre côté.
- La règle qui fait la différence : Une seule promesse. Le bouton et sa preuve tiennent dans le premier écran du téléphone.
- Le geste de cette variante : bords déchirés et gribouillis
- Animations : attributs data-rv, data-lignes, data-compte, data-incline, data-aimant (moteur anim.js). Sans le moteur, retire-les.
- Aucun tiret long dans les textes. Contraste de 4,5 au moins. Lisible de 360 à 1920 px.

## Le code de référence (HTML)

```html
<header class="hero grille" id="haut">
  <div class="etoile" style="right:-60px;top:-40px;width:380px;height:380px;color:#FCD3EE"><svg><use href="#e8"/></svg></div>
  <div class="etoile" style="left:-80px;bottom:30px;width:220px;height:220px;color:#FCD3EE"><svg><use href="#e6"/></svg></div>
  <div class="wrap">
    <div>
      <a class="logo" href="#haut" aria-label="Devenez votre vitrine, accueil" data-rv><i><svg><use href="#e8"/></svg></i>Devenez<br>votre <b>vitrine</b></a>
      <h1 data-rv style="--d:80ms">Votre meilleur <span class="sou">portfolio</span> de social media, c'est <span class="boite">votre propre profil.</span></h1>
      <p data-rv style="--d:160ms">Apprenez à devenir votre plus belle preuve en créant du contenu pour vous, et remplissez votre agenda de <b>clients</b> qui vous estiment et vous paient bien.</p>
      <div class="actions" data-rv style="--d:240ms"><a class="btn reflet" href="https://wa.me/22500000000?text=Bonjour%20Ma%C3%ABlle%2C%20je%20veux%20devenir%20ma%20propre%20vitrine." target="_blank" rel="noopener" data-aimant>Je veux devenir ma vitrine <span class="coeur"><svg><use href="#coeur"/></svg></span></a></div>
      <p class="note main" data-rv style="--d:320ms">(oui, il est encore temps de devenir une référence)</p>
    </div>
    <div class="scene" aria-hidden="true">
      <div class="fantome"></div>
      <div class="carte" data-parallaxe="0.06"><svg><use href="#femme"/></svg></div>
      <span class="micro"></span>
      <div class="post p1" data-rv><div class="img"></div><div class="bar"><span></span><span></span><span></span></div></div>
      <div class="post p2" data-rv style="--d:120ms"><div class="img"></div><div class="bar"><span></span><span></span></div></div>
      <div class="post p3" data-rv style="--d:220ms"><div class="img"></div><div class="bar"><span></span><span></span></div></div>
      <span class="vue" style="left:30px;top:0"><svg><use href="#oeil"/></svg>101 k</span>
      <span class="vue" style="right:0;top:150px"><svg><use href="#oeil"/></svg>1,7 M</span>
      <span class="vue" style="right:30px;bottom:20px"><svg><use href="#oeil"/></svg>259 k</span>
    </div>
  </div>
</header>
```

## Le CSS du template d'origine (la section en dépend, ne garde que ce qu'elle utilise)

```css
:root{
  --creme:#FFF9F6; --rose:#DE5DB8; --rose-s:#C44199; --rose-f:#B83A93; --rose-p:#FFD6F0; --rose-l:#F6B9E2;
  --noir:#111111; --noir2:#1E1E1E; --texte:#2B2B2B; --doux:#5E5A58;
  --titre:"Inter Tight",system-ui,sans-serif; --main:"Gochi Hand",cursive;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:var(--creme);color:var(--texte);font:400 16px/1.55 var(--titre);overflow-x:hidden}
img,svg{display:block}
a{color:inherit}
.wrap{width:min(1040px,100% - 40px);margin-inline:auto;position:relative}
.grille{background-image:linear-gradient(rgba(17,17,17,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(17,17,17,.045) 1px,transparent 1px);background-size:56px 56px}
.grille-n{background-image:linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px);background-size:40px 40px}
h1,h2,h3{font-family:var(--titre);font-weight:500;letter-spacing:-.035em;line-height:1.08;color:var(--noir)}
.sou{text-decoration:underline;text-decoration-thickness:2px;text-underline-offset:4px}
.boite{background:var(--rose-s);color:#fff;padding:0 .12em;box-shadow:0 0 0 1.5px var(--noir)}
.boite-c{background:var(--creme);color:var(--rose-f);padding:0 .12em;box-shadow:0 0 0 1.5px #fff}
.rose{color:var(--rose)}
.rose-f{color:var(--rose-f)}
.main{font-family:var(--main);font-weight:400;letter-spacing:.01em}
.etoile{position:absolute;pointer-events:none}
.etoile svg{width:100%;height:100%}

/* Logo */
.logo{font:600 34px/.86 var(--titre);letter-spacing:-.06em;color:var(--noir);display:inline-block;position:relative;text-decoration:none}
.logo b{font-weight:600;color:var(--rose-f)}
.logo i{position:absolute;left:46px;top:-8px;width:12px;height:12px;color:var(--rose)}
.logo i svg{width:100%;height:100%}

/* Boutons */
.btn{display:inline-flex;align-items:center;gap:22px;height:50px;padding:0 8px 0 22px;border-radius:30px;background:var(--noir);color:#fff;text-decoration:none;font:500 14px/1 var(--titre);letter-spacing:-.01em;box-shadow:4px 4px 0 var(--rose)}
.btn .coeur{width:34px;height:34px;border-radius:50%;background:var(--rose);display:grid;place-items:center;color:#fff}
.btn .coeur svg{width:16px;height:16px}
.btn.blanc{background:#fff;color:var(--noir);box-shadow:4px 4px 0 var(--rose)}
.btn:hover .coeur{animation:bat .7s ease}
@keyframes bat{30%{scale:1.25}60%{scale:.95}}

/* Hero */
.hero{position:relative;padding:72px 0 90px;overflow:hidden}
.hero .wrap{display:grid;grid-template-columns:1.05fr 1fr;align-items:center;gap:30px}
.hero h1{font-size:46px;margin:44px 0 22px;letter-spacing:-.045em}
.hero h1 .boite{display:inline-block;margin-top:6px}
.hero p{font-size:18px;max-width:440px;color:var(--texte)}
.hero p b{font-weight:600;text-decoration:underline;text-underline-offset:3px}
.hero .actions{margin-top:28px}
.hero .note{margin-top:20px;font-size:21px;color:var(--rose-f)}
.scene{position:relative;height:500px}
.scene .carte{position:absolute;left:60px;top:40px;width:330px;height:420px;border-radius:26px;background:linear-gradient(160deg,#F28CD2,#D24FAE);rotate:-4deg;box-shadow:0 30px 60px rgba(196,65,153,.25);overflow:hidden}
.scene .carte::before{content:"";position:absolute;inset:-20px;background:linear-gradient(140deg,rgba(255,255,255,.35),transparent 40%)}
.scene .carte svg{position:absolute;left:0;right:0;bottom:0;height:92%;width:100%}
.scene .fantome{position:absolute;left:84px;top:60px;width:330px;height:420px;border-radius:26px;background:rgba(222,93,184,.18);rotate:6deg}
.scene .post{position:absolute;width:150px;padding:6px;border-radius:12px;background:#fff;box-shadow:0 16px 30px rgba(17,17,17,.18)}
.scene .post .img{height:96px;border-radius:8px;background:linear-gradient(150deg,#E8D4CC,#A98F86 60%,#5E4A44)}
.scene .post .bar{display:flex;gap:6px;margin-top:6px}
.scene .post .bar span{flex:1;height:5px;border-radius:3px;background:#E9E1DE}
.scene .p1{left:0;top:260px;rotate:-10deg}
.scene .p2{left:330px;top:150px;width:120px;rotate:8deg}
.scene .p2 .img{height:74px;background:linear-gradient(150deg,#FBE3F2,#E07BC4)}
.scene .p3{left:390px;top:220px;width:110px;rotate:-6deg}
.scene .vue{position:absolute;display:flex;align-items:center;gap:6px;font:500 15px/1 var(--titre);color:var(--rose-f)}
.scene .vue svg{width:16px;height:16px}
.scene .micro{position:absolute;left:50px;top:120px;width:70px;height:16px;border-radius:8px;background:#1A1A1A;rotate:-35deg}
.scene .micro::before{content:"";position:absolute;left:-18px;top:-9px;width:30px;height:30px;border-radius:50%;background:radial-gradient(circle at 35% 35%,#555,#111)}

/* Rubans */
.rubans{position:relative;height:130px;margin-top:-40px;z-index:3;overflow:hidden}
.ruban{position:absolute;left:-5%;width:110%;height:34px;display:flex;align-items:center;overflow:hidden;border-block:2px solid var(--noir)}
.ruban.r1{top:34px;background:var(--rose-s);rotate:2.4deg}
.ruban.r2{top:62px;background:var(--noir);border-color:var(--rose);rotate:-2.2deg}
.ruban .piste{display:flex;gap:32px;white-space:nowrap;font:600 13px/1 var(--titre);color:#fff;animation:defile 40s linear infinite;padding-left:20px}
.ruban.r2 .piste{animation-direction:reverse}
@keyframes defile{to{translate:-50% 0}}

/* Pour qui */
.pourqui{position:relative;background:var(--rose-s);padding:60px 0 120px;overflow:hidden;color:#fff}
.pourqui .wrap{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center}
.pourqui .gauche{position:relative;height:520px}
.pourqui .gauche .grosse{position:absolute;left:-40px;top:70px;width:360px;height:360px;color:rgba(255,255,255,.18)}
.pourqui .assise{position:absolute;left:110px;top:10px;width:300px;height:480px}
.pourqui .tel{position:absolute;left:20px;top:220px;width:230px;height:300px;border-radius:30px;background:#121212;border:6px solid #2A2A2A;rotate:-12deg;padding:18px 14px;color:#fff;box-shadow:0 30px 50px rgba(0,0,0,.3)}
.tel .nom{font:600 11px/1 var(--titre)}
.tel .stat{display:flex;gap:14px;margin:12px 0;font:600 11px/1.2 var(--titre)}
.tel .stat small{display:block;font-weight:400;opacity:.7}
.tel .bio{font-size:9.5px;line-height:1.4;opacity:.8}
.tel .storys{display:flex;gap:8px;margin-top:14px}
.tel .storys span{width:30px;height:30px;border-radius:50%;border:2px solid var(--rose);background:#444}
.cercle-txt{position:absolute;inset:0;pointer-events:none}
.cercle-txt text{font:400 20px var(--titre);letter-spacing:.12em;fill:rgba(255,255,255,.35)}
.pourqui h2{color:#fff;font-size:40px;margin-bottom:26px}
.pourqui ol{list-style:none;display:grid;gap:18px}
.pourqui li{display:grid;grid-template-columns:30px 1fr;gap:12px;font-size:15px;line-height:1.45;color:#fff}
.pourqui li .n{width:28px;height:24px;border-radius:12px;border:1.5px solid #fff;display:grid;place-items:center;font:600 13px/1 var(--titre);color:#fff;background:rgba(255,255,255,.12)}
.pourqui li u{text-decoration-thickness:1.5px;text-underline-offset:3px;font-weight:600}
.puce-bas{position:absolute;left:50%;bottom:-18px;translate:-50% 0;width:46px;height:28px;border-radius:14px;background:var(--rose);border:3px solid var(--creme);display:grid;place-items:center;color:#fff;z-index:5}
.puce-bas svg{width:14px;height:14px}

/* Secret */
.secret{position:relative;margin-top:-60px;z-index:4}
.secret .bloc{position:relative;background:var(--noir);border-radius:30px;padding:60px 60px 70px;display:grid;grid-template-columns:.9fr 1.1fr;gap:50px;align-items:center;color:#E8E3E1;box-shadow:6px 8px 0 var(--rose)}
.secret .feuille{position:relative;background:#fff;border-radius:6px;padding:22px 22px 28px;rotate:2deg;color:var(--noir);box-shadow:-14px -12px 0 var(--rose)}
.secret .feuille .ecran{height:150px;border-radius:4px;background:linear-gradient(120deg,#EFE9E5 55%,#C9B5AE);position:relative}
.secret .feuille .ecran::before{content:"";position:absolute;left:24px;top:30px;width:120px;height:8px;border-radius:4px;background:var(--rose-l);box-shadow:0 18px 0 #E3DAD6,0 32px 0 #E3DAD6,0 46px 0 #E3DAD6}
.secret .feuille h4{font:500 15px/1.3 var(--titre);margin-top:18px}
.secret .feuille .rep{display:inline-block;margin-top:10px;padding:4px 18px;border:2px solid var(--rose);border-radius:50%;rotate:-6deg;font:500 15px/1.4 var(--titre);color:var(--doux)}
.etiquette{position:absolute;padding:6px 14px;border-radius:20px;background:#fff;border:1.5px solid var(--noir);font:600 12px/1 var(--titre);color:var(--noir);box-shadow:2px 3px 0 var(--noir);white-space:nowrap;z-index:3}
.secret .pastille{display:inline-block;padding:7px 18px;border-radius:16px 16px 16px 4px;background:var(--rose-s);color:#fff;font:500 12.5px/1 var(--titre)}
.secret p{margin-top:18px;font-size:17px;line-height:1.6}
.secret p .boite{box-shadow:0 0 0 1.5px #fff}
.secret h2{color:#fff;font-size:34px;margin-top:30px}
.secret .tags{display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin-top:24px}
.secret .tags span{padding:6px 12px;border-radius:14px;font:500 12px/1 var(--titre);background:var(--rose-s);color:#fff}
.secret .tags span.b{background:#fff;color:var(--noir)}
.secret .tags span.main{font-size:19px;color:#E8E3E1;rotate:-4deg;background:none;padding:0 6px}

/* Méthode */
.methode{position:relative;padding:130px 0 150px}
.methode .wrap{display:grid;grid-template-columns:1.05fr 1fr;gap:40px;align-items:center}
.methode h2{font-size:30px;line-height:1.2}
.methode h2 b{font-weight:600}
.methode p{margin-top:22px;font-size:16px;max-width:430px}
.methode p u{font-weight:600}
.lettres{display:flex;flex-wrap:wrap;gap:8px;margin-top:24px;max-width:430px}
.lettres span{padding:6px 12px;border-radius:14px;background:var(--noir);color:#fff;font:500 13px/1 var(--titre)}
.lettres span b{color:var(--rose);font-weight:700}
.lettres span:hover{background:var(--rose-s)}
.lettres span:hover b{color:#fff}
.methode .droite{position:relative;height:500px}
.methode .tel{position:absolute;left:90px;top:10px;width:250px;height:480px;border-radius:40px;background:#161616;border:7px solid #2D2D2D;padding:44px 18px;color:#fff;rotate:3deg;box-shadow:0 40px 60px rgba(17,17,17,.3);overflow:hidden}
.methode .tel .stat{justify-content:space-between}
.methode .tel .avatar{width:58px;height:58px;border-radius:50%;border:2px solid #555;background:#333}
.toile{position:absolute;inset:0;opacity:.45}
.methode .etiquette.e1{right:-10px;top:250px;rotate:-6deg}
.methode .etiquette.e2{left:-10px;top:330px;rotate:6deg}
.methode .rayon{position:absolute;left:30px;top:-30px;width:180px;height:180px;color:var(--rose-l)}

/* Bord déchiré */
.dechire{display:block;width:100%;height:60px}

/* Avis */
.avis{position:relative;background:var(--rose-s);padding:30px 0 70px;text-align:center;color:#fff;overflow:hidden}
.avatars{display:inline-flex;padding:6px 10px;border-radius:30px;background:rgba(255,255,255,.25);border:1.5px solid rgba(255,255,255,.6)}
.avatars span{width:36px;height:36px;border-radius:50%;border:2px solid #fff;margin-inline:-4px;background:linear-gradient(160deg,#E9D2C8,#8C6E64)}
.avatars span:nth-child(2n){background:linear-gradient(160deg,#4A3A36,#1C1414)}
.avis h2{color:#fff;font-size:30px;line-height:1.2;max-width:640px;margin:22px auto 40px;font-weight:400}
.avis h2 .boite-c{display:inline;box-decoration-break:clone;-webkit-box-decoration-break:clone}
.carrousel{display:flex;gap:16px;overflow-x:auto;scroll-snap-type:x mandatory;padding:6px 20px 20px;scrollbar-width:none;align-items:flex-start;max-width:1160px;margin:0 auto}
.carrousel::-webkit-scrollbar{display:none}
.dm{flex:0 0 220px;scroll-snap-align:start;background:#fff;border-radius:10px;padding:12px;text-align:left;color:var(--noir);box-shadow:0 14px 30px rgba(80,10,60,.2)}
.dm .tete{display:flex;align-items:center;gap:8px;font:600 11px/1.2 var(--titre);padding-bottom:8px;border-bottom:1px solid #EEE}
.dm .tete i{width:24px;height:24px;border-radius:50%;background:linear-gradient(160deg,#E9D2C8,#8C6E64);flex:none}
.dm .heure{font-size:9px;color:#757575;text-align:center;margin:8px 0}
.dm .story{width:56px;height:90px;border-radius:6px;background:#1C1C1C;margin:6px 0 8px}
.bulle{font-size:11px;line-height:1.4;padding:8px 10px;border-radius:12px;margin-top:6px;max-width:92%}
.bulle.elle{background:#EFEFEF;color:#222}
.bulle.moi{background:#6A3DE8;color:#fff;margin-left:auto}
.fleches{display:flex;justify-content:center;gap:12px;margin-top:20px}
.fleches button{width:40px;height:40px;border-radius:50%;border:2px solid #fff;background:transparent;color:#fff;display:grid;place-items:center;cursor:pointer}
.fleches button svg{width:16px;height:16px}
.fleches button:hover{background:#fff;color:var(--rose-s)}

/* Contenu */
.contenu{position:relative;padding-bottom:90px;background:linear-gradient(var(--rose-s) 0 140px,var(--creme) 140px)}
.contenu .bloc{position:relative;background:var(--noir);border-radius:30px;padding:76px 50px 60px;text-align:center;box-shadow:6px 8px 0 var(--rose)}
.contenu h2{color:#fff;font-size:34px;line-height:1.15}
.contenu h2 .boite{display:inline-block;margin-top:6px;box-shadow:0 0 0 1.5px #fff}
.modules{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin:46px 0 40px;text-align:left}
.mod{position:relative;background:#fff;border-radius:14px;padding:8px 8px 10px;box-shadow:0 5px 0 var(--rose);transition:rotate .4s,translate .4s}
.mod:nth-child(odd){rotate:-1.6deg}
.mod:nth-child(even){rotate:1.4deg}
.mod:hover{rotate:0deg;translate:0 -8px}
.mod .haut{position:relative;background:var(--noir2);color:#fff;border-radius:10px;padding:14px 14px 16px;min-height:132px;rotate:-1deg;translate:-4px -10px}
.mod h3{color:#fff;font-size:14px;font-weight:600;letter-spacing:-.02em;line-height:1.2}
.mod h3 .no{display:inline-grid;place-items:center;width:22px;height:18px;border-radius:9px;background:var(--rose-s);font-size:11px;margin-right:4px;vertical-align:1px}
.mod p{font-size:11.5px;line-height:1.4;margin-top:8px;color:#CFCACA}
.mod .dessin{height:120px;margin-top:4px;color:#222}
.mod .dessin svg{width:100%;height:100%}
.mod .et{position:absolute;width:26px;height:26px;color:var(--rose)}
.mod .et.a{right:-8px;top:-18px}
.mod .et.b{left:-10px;top:100px}

/* Prix */
.prix{position:relative;padding:60px 0 110px;overflow:hidden}
.prix .rubans{position:absolute;left:0;right:0;top:120px;margin:0;filter:blur(2px);opacity:.9;z-index:0}
.ticket{position:relative;z-index:2;width:min(660px,100%);margin:0 auto;background:var(--noir);border-radius:26px;padding:76px 50px 60px;text-align:center;color:#fff;box-shadow:6px 8px 0 var(--rose)}
.ticket .encoche{position:absolute;top:290px;width:60px;height:60px;border-radius:50%;background:var(--creme)}
.ticket .encoche.g{left:-30px}
.ticket .encoche.d{right:-30px}
.ticket .label{position:absolute;left:50%;top:-34px;translate:-50% 0;rotate:-3deg;padding:14px 44px;background:var(--rose-s);color:#fff;font:500 27px/1.15 var(--titre);letter-spacing:-.03em;border:2px solid var(--noir);white-space:nowrap}
.ticket .label::before,.ticket .label::after{content:"";position:absolute;top:50%;width:10px;height:10px;border-radius:50%;background:var(--noir);translate:0 -50%}
.ticket .label::before{left:16px}
.ticket .label::after{right:16px}
.ticket p{font-size:28px;line-height:1.25;letter-spacing:-.03em;margin-top:30px}
.ticket p b{font-weight:600}
.ticket .points{display:flex;align-items:center;justify-content:center;gap:40px;margin-top:40px}
.ticket .points i{display:flex;gap:6px}
.ticket .points i::before,.ticket .points i::after,.ticket .points i span{content:"";width:14px;height:14px;border-radius:50%;background:#fff;display:block}
.ticket .mensuel{padding:12px 50px;border-radius:50%;background:var(--rose-s);font:500 30px/1 var(--titre);letter-spacing:-.03em}
.ticket .total{display:flex;align-items:baseline;justify-content:center;gap:12px;margin-top:20px;font-size:20px}
.ticket .total strong{font:600 120px/1 var(--titre);letter-spacing:-.06em}
.ticket .btn{margin-top:30px}
.prix .e1{left:calc(50% - 420px);top:330px;width:170px;height:170px;color:var(--rose)}
.prix .e2{right:calc(50% - 450px);top:200px;width:130px;height:130px;color:var(--rose-l)}

/* Qui */
.qui{position:relative;background:#fff;padding:70px 0 120px}
.qui .wrap{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center}
.qui .photo{position:relative;justify-self:center;width:300px;height:360px;border-radius:16px;background:var(--rose-p);border:3px solid var(--rose);padding:10px;rotate:-3deg}
.qui .photo .img{height:100%;border-radius:10px;background:linear-gradient(170deg,#F3EEEA,#DCD2CC);overflow:hidden;position:relative}
.qui .photo .img svg{position:absolute;inset:0;width:100%;height:100%}
.qui .tampon{position:absolute;left:-90px;top:-50px;width:150px;height:150px;color:var(--rose-l);animation:tourne 22s linear infinite}
.qui .tampon text{font:600 13px var(--titre);letter-spacing:.3em;fill:var(--noir);color:var(--noir)}
.qui .tampon .m{font:700 22px/1 var(--titre);fill:var(--noir)}
@keyframes tourne{to{rotate:360deg}}
.qui .bulle-m{position:absolute;left:-40px;bottom:40px;padding:6px 14px;border-radius:18px;background:var(--rose-s);color:#fff;border:1.5px solid var(--noir);font:15px/1.1 var(--main);rotate:-10deg}
.qui .et{position:absolute;right:-40px;bottom:-30px;width:70px;height:70px;color:var(--rose)}
.qui .pre{font-size:20px;color:var(--rose-f)}
.qui h2{font-size:34px;font-weight:600;position:relative;display:inline-block}
.qui h2 svg{position:absolute;left:10px;bottom:-14px;width:180px;height:16px;color:var(--rose)}
.qui p{margin-top:20px;font-size:15px;line-height:1.6;color:var(--doux)}
.qui p b{color:var(--noir);font-weight:600}

/* FAQ */
.faq{position:relative;background:var(--noir);color:#fff;padding:40px 0 60px;text-align:center}
.faq .pastille{display:inline-block;padding:8px 20px;border-radius:16px;background:var(--rose-s);font:500 12px/1 var(--titre)}
.faq h2{color:#fff;font-size:34px;font-weight:600;margin-top:20px}
.faq h2 span{display:block;font-weight:400}
.faq .liste{max-width:400px;margin:36px auto 0;display:grid;gap:12px;text-align:left}
.faq details{border-radius:26px;background:var(--noir2)}
.faq summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:16px;padding:16px 22px;font:500 13px/1.3 var(--titre);color:#fff}
.faq summary::-webkit-details-marker{display:none}
.faq summary i{width:20px;height:20px;border-radius:50%;background:#4A4A4A;display:grid;place-items:center;flex:none;color:var(--rose);transition:rotate .3s}
.faq summary i svg{width:10px;height:10px}
.faq details[open] summary{background:var(--rose-s);border-radius:26px}
.faq details[open] summary i{background:#fff;rotate:180deg}
.faq details p{padding:12px 22px 6px;font-size:13px;color:#E6E1DF}
.faq .chat{position:absolute;width:150px;height:150px;color:var(--rose)}
.faq .chat.c1{right:calc(50% - 470px);top:40px}
.faq .chat.c2{left:calc(50% - 450px);top:180px;width:90px;height:90px}
.faq .chat .tete{position:absolute;inset:22%;border-radius:50%;background:radial-gradient(circle at 40% 40%,#F2C9A8,#C98D63)}
.faq .chat .tete{display:grid;place-items:center;background:#fff;color:var(--noir);font:600 40px/1 var(--titre)}
.faq .chat.c2 .tete{font-size:24px}

/* Fin */
.fin{position:relative;background:var(--rose-s);color:#fff;text-align:center;padding:40px 0 30px;overflow:hidden}
.fin .tag{display:inline-block;padding:5px 10px;background:var(--noir);font:600 12px/1 var(--titre);rotate:-3deg}
.fin h2{color:#fff;font-size:38px;font-weight:600;margin-top:12px;letter-spacing:-.045em}
.fin p{font-size:13px;margin-top:8px;max-width:360px;margin-inline:auto}
.fin .logo{margin:22px auto 0;color:var(--noir)}
.fin .logo b{color:#fff}
.fin .e1{left:-60px;top:40px;width:200px;height:200px;color:var(--noir)}
.fin .e2{right:-40px;top:120px;width:240px;height:240px;color:var(--noir)}
footer{position:relative;border-top:1px solid rgba(255,255,255,.35);margin-top:40px;padding-top:18px;font-size:12px}
footer .wrap{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;text-align:left}
footer .droite{display:flex;gap:18px;flex-wrap:wrap}
footer a{text-decoration:none}
footer a:hover{text-decoration:underline}

/* Responsive */
@media (max-width:900px){
  .hero .wrap,.pourqui .wrap,.secret .bloc,.methode .wrap,.qui .wrap{grid-template-columns:1fr}
  .hero{padding-top:40px}
  .hero h1{font-size:38px;margin-top:30px}
  .scene{height:440px;max-width:500px;width:100%;margin:0 auto}
  .scene .carte,.scene .fantome{width:280px;height:360px}
  .scene .p2{left:290px}
  .scene .p3{left:330px;top:260px}
  .pourqui .gauche{height:460px;max-width:440px;width:100%;margin:0 auto}
  .secret .bloc{padding:44px 26px 50px}
  .secret .feuille{max-width:380px;margin:0 auto}
  .methode{padding:90px 0 100px}
  .methode .droite{max-width:440px;width:100%;margin:0 auto}
  .modules{grid-template-columns:1fr 1fr}
  .contenu .bloc{padding:60px 20px 40px}
  .qui .photo{margin-top:40px}
  .faq .chat{display:none}
}
@media (max-width:560px){
  .hero h1{font-size:31px}
  .hero p{font-size:16px}
  .scene{height:380px}
  .scene .carte,.scene .fantome{left:30px;width:240px;height:310px}
  .scene .p1{top:230px;width:120px}
  .scene .p1 .img{height:70px}
  .scene .p2{left:220px;top:110px;width:100px}
  .scene .p3{display:none}
  .pourqui h2{font-size:32px}
  .pourqui .assise{left:60px;width:250px;height:400px}
  .pourqui .tel{left:0;top:190px;width:190px;height:250px}
  .secret h2,.contenu h2,.qui h2,.faq h2{font-size:27px}
  .avis h2{font-size:23px}
  .modules{grid-template-columns:1fr}
  .ticket{padding:70px 20px 44px}
  .ticket .label{font-size:18px;padding:10px 30px;white-space:normal;width:86%}
  .ticket p{font-size:21px}
  .ticket .encoche{display:none}
  .mod .haut{min-height:0}
  .mod .dessin{height:96px}
  .ticket .points{gap:12px}
  .ticket .points i{display:none}
  .ticket .mensuel{font-size:22px;padding:10px 26px}
  .ticket .total strong{font-size:76px}
  .qui .photo{width:250px;height:300px}
  .qui .tampon{left:-40px;width:110px;height:110px}
  .fin h2{font-size:30px}
}
@media (prefers-reduced-motion:reduce){
  .ruban .piste,.qui .tampon{animation:none}
}

/* Checkup banque 16/11/2026 : le décor qui sort de l'écran est coupé par SA section, plus par le body. */ #qui,#secret{overflow-x:clip}
```
