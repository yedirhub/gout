# Prompt · Section « Les bonus » du template A « Luxe sombre »
# Par Yedidia Ruben - Digital Strategist. À coller dans une IA qui code, avec ta page.

Construis une section « Les bonus » pour ma page, dans le même esprit que le code de référence plus bas. Garde la structure, le geste et les proportions ; reprends mes couleurs, mes polices et mes textes à moi.

- Son rôle : Faire basculer l'indécis : « si j'entre maintenant, j'ai plus ».
- Où la placer : Juste après l'offre, ou entre l'offre et son rappel.
- Sa structure : Un titre « qui entre maintenant reçoit plus », un compte à rebours si la date est réelle, puis un bonus par carte avec sa valeur.
- La règle qui fait la différence : Chaque bonus a une forme physique (ticket, livre, carte), pas une icône.
- Le geste de cette variante : compte à rebours sobre comme une horloge
- Animations : attributs data-rv, data-lignes, data-compte, data-incline, data-aimant (moteur anim.js). Sans le moteur, retire-les.
- Aucun tiret long dans les textes. Contraste de 4,5 au moins. Lisible de 360 à 1920 px.

## Le code de référence (HTML)

```html
<section class="bloc centre" id="bonus" style="border-top:0;padding-top:56px">
  <div class="sep" data-rv style="margin-bottom:56px"></div>
  <span class="etiq" data-rv>Bonus</span>
  <h2 data-lignes>Qui entre maintenant reçoit plus</h2>
  <p class="intro" data-rv>Il vous reste peu de temps pour obtenir les <b>bonus exclusifs et inédits :</b></p>
  <div class="minuterie" data-rv id="minuterie"><div><strong id="h">23</strong><small>Heures</small></div><div><strong id="m">59</strong><small>Minutes</small></div><div><strong id="s">59</strong><small>Secondes</small></div></div>
</section>
```

## Le CSS du template d'origine (la section en dépend, ne garde que ce qu'elle utilise)

```css
:root{
  --noir:#000; --beige:#D6D1CA; --beige-2:#C9C4BB; --encre:#19130C;
  --titre-n:#F2EEE8; --texte-n:#A6A4A0; --gras-n:#E3E1E2;
  --brun:#1B100B; --etiq:#E8DCCB; --cuivre:#AC6E48; --braise:#D98C4D;
  --pierre-a:#B8B4AE; --pierre-b:#DAD6C8; --filet:#1E1E1E; --filet-b:#9E978D;
  --olive:#5C6336; --brique:#A9320D;
  --courbe:cubic-bezier(.16,1,.3,1);
  --serif:'Newsreader',Georgia,serif; --sans:'Inter Tight','Helvetica Neue',Arial,sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:var(--noir);color:var(--texte-n);font-family:var(--sans);font-size:14px;line-height:1.7;-webkit-font-smoothing:antialiased;overflow-x:clip}
img,svg{display:block;max-width:100%}
a{color:inherit;text-decoration:none}
b,strong{color:var(--gras-n);font-weight:600}
.beige b,.beige strong{color:var(--encre)}

/* cadre de page : le carnet ligné */
.cadre{width:min(1280px,100% - 160px);margin-inline:auto;border-left:1px solid var(--filet);border-right:1px solid var(--filet)}
.bloc{position:relative;padding:96px 0;border-top:1px solid var(--filet)}
.bloc:first-child{border-top:0}
.lire{width:min(680px,100% - 40px);margin-inline:auto}
.large{width:min(880px,100% - 40px);margin-inline:auto}
.centre{text-align:center}

/* typo */
h1,h2,h3{font-family:var(--serif);font-weight:300;color:var(--titre-n);letter-spacing:-.012em}
h1{font-size:clamp(34px,3.6vw,52px);line-height:1.15}
h2{font-size:clamp(28px,2.6vw,38px);line-height:1.2}
h3{font-size:24px;line-height:1.25}
.beige h1,.beige h2,.beige h3{color:var(--encre)}
p+p{margin-top:16px}
.intro{margin-top:18px;font-size:14px}

/* étiquette */
.etiq{display:inline-block;background:var(--brun);color:var(--etiq);font-size:11px;font-weight:500;letter-spacing:.16em;text-transform:uppercase;padding:9px 18px;line-height:1;margin-bottom:26px}
.beige .etiq{background:var(--beige-2);color:#4E4943}
.etiq.cheval{position:absolute;top:0;left:50%;transform:translate(-50%,-50%);margin:0}
.bandeau{display:inline-block;background:#171312;color:#EDE6DC;font-size:14px;font-weight:500;text-transform:uppercase;padding:11px 20px;letter-spacing:.01em}

/* bouton lueur */
.cta{display:flex;flex-direction:column;align-items:center;gap:16px;margin-top:40px}
.cta.g{align-items:flex-start}
.btn{position:relative;isolation:isolate;display:inline-flex;align-items:center;justify-content:center;width:min(380px,100%);height:64px;border-radius:999px;
  background:linear-gradient(90deg,var(--pierre-a),#C2BAB1 55%,var(--pierre-b));border:1.5px solid rgba(255,255,255,.55);
  color:#111;font-weight:700;font-size:15px;text-transform:uppercase;letter-spacing:.01em;box-shadow:inset 0 1px 0 rgba(255,255,255,.6),16px 0 26px -8px rgba(255,138,61,.6);transition:filter .3s ease-out,box-shadow .3s ease-out}
.btn::before{content:"";position:absolute;right:-30px;top:50%;width:112px;height:112px;transform:translateY(-50%);border-radius:50%;z-index:-1;
  background:radial-gradient(circle,#FFC48A 0%,#FF8A3D 30%,rgba(217,120,60,.65) 46%,rgba(172,110,72,0) 68%);filter:blur(7px);animation:braise 3.2s ease-in-out infinite;transition:right .3s ease-out}
.btn::after{content:"";position:absolute;right:0;top:0;bottom:0;width:90px;border-radius:999px;background:radial-gradient(55% 90% at 78% 50%,rgba(255,246,236,.95),rgba(255,226,200,.35) 55%,rgba(255,240,225,0) 80%);box-shadow:inset -2px 0 0 rgba(255,160,90,.7);pointer-events:none}
.btn:hover{filter:brightness(1.06)}
.btn:hover::before{right:-38px;filter:blur(9px) saturate(1.3)}
.btn:hover{box-shadow:inset 0 1px 0 rgba(255,255,255,.6),22px 0 32px -8px rgba(255,138,61,.75)}
@keyframes braise{0%,100%{opacity:.75;transform:translateY(-50%) scale(1)}50%{opacity:1;transform:translateY(-50%) scale(1.08)}}
.mention{font-size:11px;font-style:italic;color:#8E8C88;max-width:300px;text-align:center;line-height:1.5}

/* séparateur signature */
.sep{position:relative;height:1px;background:#2A2A2A;margin:0 auto;width:100%}
.sep::after{content:"";position:absolute;left:50%;top:-1px;width:70px;height:2px;transform:translateX(-50%);background:var(--beige);box-shadow:0 0 0 14px var(--noir)}

/* images d'attente */
.ph{position:relative;overflow:hidden;background:linear-gradient(160deg,#3A2A20,#140C08);border-radius:10px}
.ph.sepia{background:linear-gradient(170deg,#E9D2BE 0%,#B98463 45%,#5B3A26 100%)}
.ph.pierre{background:linear-gradient(160deg,#DCD5CB,#A8A096)}
.ph .lab{position:absolute;left:12px;top:10px;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#F1E7DC;background:rgba(0,0,0,.45);padding:3px 8px;border-radius:3px;z-index:2}
.ph.pierre .lab{color:#2B241D;background:rgba(255,255,255,.5)}
.silh{position:absolute;left:50%;bottom:0;transform:translateX(-50%);height:92%;width:auto}

/* 01 hero */
.hero{padding:56px 0 64px}
.hero-g{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center;width:calc(100% - 128px);margin-inline:auto}
.marque{display:flex;align-items:center;gap:10px;font-family:var(--serif);font-size:22px;color:var(--titre-n);margin-bottom:60px}
.marque i{font-style:italic;font-size:32px;line-height:1}
.hero .intro{max-width:470px;font-size:14.5px}
.hero .bandeau{margin-top:30px}
.membres{display:flex;align-items:center;gap:14px;margin-top:56px;padding-top:36px;border-top:1px solid var(--filet);font-size:13px}
.membres>span{display:flex;gap:6px}
.membres>span i{width:32px;height:32px;border-radius:3px;border:1px solid #333;background:linear-gradient(160deg,#6B5A4B,#2A211B)}
.mosaique{position:relative;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:10px;height:560px}
.mosaique .ph:nth-child(1){grid-row:1;grid-column:1}
.mosaique .ph:nth-child(2){grid-row:1;grid-column:2}
.mosaique .ph:nth-child(3){grid-row:2;grid-column:1/3}
.mosaique .portrait{position:absolute;left:18%;right:4%;bottom:-40px;height:108%;pointer-events:none}
.mosaique .portrait svg{position:absolute;bottom:0;left:50%;transform:translateX(-50%);height:100%;width:auto}
.mosaique::after{content:"";position:absolute;left:-4%;right:-4%;bottom:-64px;height:180px;background:linear-gradient(transparent,var(--noir) 75%);pointer-events:none}

/* 02 messages */
.rail{display:flex;gap:22px;overflow-x:auto;scroll-snap-type:x mandatory;padding:0 64px 8px;scrollbar-width:none}
.rail::-webkit-scrollbar{display:none}
.msg{flex:0 0 240px;height:310px;scroll-snap-align:start;background:linear-gradient(180deg,#0B0B0C,#050506);border:1px solid #141416;border-radius:8px;padding:22px 18px;display:flex;align-items:flex-start;gap:8px}
.msg .bulle{background:#1A1A1C;color:#E8E6E3;border-radius:10px;padding:12px 14px;font-size:12.5px;line-height:1.45}
.msg .av{flex:none;width:18px;height:18px;border-radius:50%;background:linear-gradient(135deg,#9C8370,#4C3A2E);align-self:flex-end}

/* 04 pilier live */
.ecran{position:relative;margin:48px auto 0;width:min(560px,100%);aspect-ratio:16/10.4;background:#0D0D0E;border:2px solid #2C2C2E;border-radius:14px;padding:12px 10px 26px}
.ecran .barre{display:flex;gap:5px;margin-bottom:8px}.ecran .barre i{width:7px;height:7px;border-radius:50%;background:#FF5F57}.ecran .barre i:nth-child(2){background:#FEBC2E}.ecran .barre i:nth-child(3){background:#28C840}
.ecran .ph{height:calc(100% - 15px);border-radius:3px;background:radial-gradient(60% 70% at 50% 40%,rgba(255,236,214,.35),transparent 70%),repeating-linear-gradient(90deg,#3B2A20 0 9px,#5A3E2C 9px 14px,#2A1E17 14px 22px,#6B4A33 22px 26px),#2A1E17}
.ecran .ph::before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 0 30%,#1C140F 30% 33%,transparent 33% 63%,#1C140F 63% 66%,transparent 66%),linear-gradient(transparent 55%,rgba(0,0,0,.55))}
.ecran .silh{height:78%}
.pastille{position:absolute;padding:13px 26px;border-radius:999px;background:rgba(10,10,10,.85);border:1px solid rgba(255,255,255,.25);color:#fff;font-size:12.5px;font-weight:500;text-transform:uppercase;box-shadow:0 10px 30px rgba(0,0,0,.6);white-space:nowrap}

/* 05 grille méthode */
.grille-m{display:grid;grid-template-columns:repeat(4,1fr);margin-top:44px;border-top:1px solid var(--filet);border-left:1px solid var(--filet)}
.grille-m div{border-right:1px solid var(--filet);border-bottom:1px solid var(--filet);padding:30px 28px 34px;text-align:left}
.grille-m small{display:grid;place-items:center;width:22px;height:22px;background:#D7D4CC;color:#111;font-size:11px;margin-bottom:44px}
.grille-m span{font-family:var(--serif);font-size:19px;color:var(--titre-n);font-weight:300}

/* duos */
.duo{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center}
.duo p{max-width:380px}
.tel{position:relative;width:200px;height:400px;border:3px solid #2C2C2E;border-radius:32px;background:linear-gradient(180deg,#111,#050505);margin:0 auto;padding:16px 12px}
.tel::before{content:"";position:absolute;top:8px;left:50%;transform:translateX(-50%);width:60px;height:14px;border-radius:10px;background:#000}
.bulles{position:absolute;left:54%;top:24px;display:grid;gap:12px;width:220px}
.bulles div{background:#1A1A1A;color:#E8E6E3;font-size:11px;line-height:1.4;padding:9px 12px;border-radius:4px;box-shadow:0 8px 20px rgba(0,0,0,.6)}
.tel .marque-tel{position:absolute;bottom:40px;left:0;right:0;text-align:center;font-family:var(--serif);color:var(--titre-n);font-size:18px}
.tel .marque-tel small{display:block;font-family:var(--sans);font-size:9px;letter-spacing:.14em;color:var(--cuivre);text-transform:uppercase}
.wa{background:linear-gradient(180deg,#0B1412,#070B0A)}
.wa .entete{display:flex;gap:8px;align-items:center;font-size:11px;color:#fff;padding:12px 4px 10px;border-bottom:1px solid #1C2624}
.wa .entete i{width:22px;height:22px;border-radius:50%;background:#7A6152}
.wa .mess{margin-top:12px;background:#0E5E54;color:#EAF5F2;border-radius:8px;padding:10px;font-size:10px;line-height:1.45}
.ruban{position:absolute;inset:10px 40px;border:7px solid #161616;border-radius:50%;transform:rotate(-58deg) scaleX(.55);z-index:-1;box-shadow:inset 0 0 14px #000,0 0 14px #000}

/* beige */
.beige{background:var(--beige);color:#3A352F}
.beige .bloc{border-color:transparent}
.fleches{display:flex;gap:12px}
.fleches i{width:34px;height:34px;border-radius:50%;border:1px solid var(--cuivre);display:grid;place-items:center;color:#6E4128;font-style:normal;font-size:14px}
.fleches i:first-child{border-color:#B9A797}
.cartes-v{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:40px}
.cv{position:relative;height:300px;border-radius:8px}
.cv p{position:absolute;left:24px;right:20px;bottom:56px;color:#fff;font-weight:600;font-size:15px;line-height:1.35}
.cv small{position:absolute;left:24px;bottom:24px;color:#fff;font-size:11px}
.cv.flou>*:not(.lire-v){filter:blur(4px);opacity:.5}
.lire-v{position:absolute;left:50%;top:42%;transform:translate(-50%,-50%);width:76px;height:76px;border-radius:50%;background:rgba(255,255,255,.25);backdrop-filter:blur(6px);display:grid;place-items:center}
.lire-v::after{content:"";width:52px;height:52px;border-radius:50%;background:rgba(245,242,238,.95) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M9 7l9 5-9 5z' fill='%23111'/%3E%3C/svg%3E") center/22px no-repeat}
.cv::before{content:"";position:absolute;inset:0;border-radius:8px;background:linear-gradient(transparent 40%,rgba(0,0,0,.75));z-index:1}
.cv>p,.cv>small{z-index:2}

/* 09 récit */
.recit{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:start}
.recit .ph{aspect-ratio:1/1.02}
.barre-cuivre{height:6px;background:var(--cuivre);margin-top:56px}

/* 10 ancrage */
.ancrage{width:min(420px,100%);margin:36px auto 0;border:1px solid #BDB6AC;padding:20px 44px 48px}
.ancrage s{display:block;font-family:var(--serif);font-size:24px;color:#2A241E;padding:22px 0;border-bottom:1px solid #BDB6AC;text-decoration-thickness:1.5px}
.ancrage .vrai{margin-top:30px;font-size:12px;color:#4E4943}
.ancrage .vrai strong{display:block;font-family:var(--serif);font-weight:300;font-size:30px;color:var(--encre);margin-top:8px}
.bande-c{width:min(420px,100%);margin:32px auto 0;background:#8F5737;color:#FFF6EF;font-size:12.5px;padding:13px 16px;text-align:center}
.bande-c b{color:#fff}

/* 11 carte offre */
.ecrin{display:grid;grid-template-columns:1fr minmax(0,420px) 1fr;border-bottom:1px solid var(--filet)}
.raye{background:repeating-linear-gradient(135deg,transparent 0 14px,#1A1A1A 14px 15px)}
.offre{border-left:1px solid var(--filet);border-right:1px solid var(--filet);padding:36px 22px 30px;text-align:center;
  background:radial-gradient(120% 50% at 70% 0%,rgba(90,60,40,.45),transparent 60%),#050403}
.offre .logo{font-family:var(--serif);font-size:20px;color:var(--titre-n);padding-bottom:22px;border-bottom:1px solid #222}
.offre .logo i{font-size:28px}
.offre .bandeau{display:block;margin:22px 0;font-size:12.5px;font-weight:600;background:#211915;color:#F1E3D6}
.offre .prix{font-family:var(--serif);font-weight:300;font-size:clamp(46px,5vw,64px);line-height:1;color:var(--titre-n);padding-top:22px;border-top:1px solid #222;letter-spacing:-.02em}
.offre .comptant{font-size:12px;margin-top:6px;color:#C9C6C1}
.offre .cta{margin-top:22px}
.offre .rass{margin-top:22px;padding-top:20px;border-top:1px solid #222;font-size:12.5px;color:#BDBAB5}

/* 12 compte à rebours */
.minuterie{display:inline-flex;gap:12px;padding:16px;background:#0D0D0D;margin-top:30px}
.minuterie div{width:78px;height:78px;background:#020000;display:grid;place-content:center;text-align:center;color:#fff}
.minuterie strong{color:#fff;font-size:26px;font-weight:500;line-height:1}
.minuterie small{font-size:8.5px;text-transform:uppercase;margin-top:6px;color:#D5D2CD}

/* 13 bonus */
.bonus-cadre{width:min(880px,100% - 40px);margin-inline:auto;border-left:1px solid var(--filet);border-right:1px solid var(--filet)}
.bonus-cadre>.bloc{padding:72px 48px}
.satin{background:radial-gradient(60% 80% at 90% 10%,rgba(120,80,50,.22),transparent 60%),radial-gradient(40% 60% at 10% 90%,rgba(90,60,40,.18),transparent 60%),#040302}
.carte-mentale{position:relative;height:420px;margin-top:8px;border-radius:12px;border:1px solid #1A1A1A;background:radial-gradient(50% 60% at 50% 50%,rgba(110,70,45,.25),transparent 70%),#080706}
.carte-mentale .noeud{position:absolute;transform:translate(-50%,-50%);padding:12px 22px;border:1px solid #333;border-radius:4px;background:#121212;color:#DAD6D0;font-size:12px;text-transform:uppercase;text-align:center;line-height:1.35;box-shadow:0 10px 24px rgba(0,0,0,.6)}
.carte-mentale .coeur{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:180px;height:180px;border-radius:50%;background:radial-gradient(circle at 50% 40%,#5A3825,#1E120B 70%);border:14px solid #161210;box-shadow:0 0 0 1px #2A2420;display:grid;place-items:center;font-family:var(--serif);font-size:22px;color:#F2EEE8}
.carte-mentale svg{position:absolute;inset:0;width:100%;height:100%}
.ticket{position:relative;width:240px;height:330px;margin:0 auto;background:#1A120D;border-radius:10px;padding:30px 24px;
  --enc:radial-gradient(circle 11px at 30% 0,#0000 98%,#000),radial-gradient(circle 11px at 50% 0,#0000 98%,#000),radial-gradient(circle 11px at 70% 0,#0000 98%,#000);-webkit-mask:var(--enc);-webkit-mask-composite:source-in;mask:var(--enc);mask-composite:intersect}
.ticket .haut{height:90px;background:#060504;display:grid;place-items:center;font-family:var(--serif);color:#F2EEE8;font-size:18px}
.ticket .bas{background:#D6D1CA;color:#1D1915;text-align:center;padding:26px 10px;font-size:10.5px;text-transform:uppercase}
.ticket .bas strong{display:block;color:#111;font-family:var(--serif);font-weight:400;font-size:36px;text-transform:none;margin:4px 0}

/* 14 vous emportez */
.rangees{display:grid;gap:26px;width:min(680px,100%);margin:40px auto 0}
.rangee{display:grid;grid-template-columns:1fr 1fr}
.rangee .ph{border-radius:0;height:220px;border:1px solid #BDB6AC}
.rangee .txt{border:1px solid #BDB6AC;border-left:0;padding:36px 22px;display:flex;flex-direction:column;justify-content:center;margin:10px 0}
.rangee h3{font-size:22px;margin-bottom:10px}
.rangee p{font-size:12.5px;max-width:220px}

/* 16 pour qui */
.qui{display:grid;grid-template-columns:1fr 1fr;gap:18px;align-items:start;margin-top:40px;text-align:left}
.qui>div{padding:30px 28px;border:1px solid #262626}
.qui .oui{background:var(--beige);border:0;padding-bottom:48px}
.qui h3{font-size:24px;margin-bottom:20px}
.qui .oui h3{color:var(--encre)}
.qui ul{list-style:none;display:grid;gap:16px}
.qui li{display:grid;grid-template-columns:18px 1fr;gap:12px;font-size:13px;line-height:1.55}
.qui .oui li{color:#1F1A15}
.qui li::before{content:"✕";display:grid;place-items:center;width:18px;height:18px;border-radius:2px;background:var(--brique);color:#fff;font-size:9px;margin-top:2px}
.qui .oui li::before{content:"✓";background:var(--olive)}

/* 17 garantie */
.garantie{border:1px solid #1E1E1E;padding:64px 40px 72px;text-align:center;background:linear-gradient(115deg,rgba(60,40,28,.55),transparent 35%),linear-gradient(200deg,rgba(150,95,60,.25),transparent 30%),radial-gradient(70% 60% at 85% 20%,rgba(80,52,34,.35),transparent 70%),#020101}
.medaille{width:64px;height:64px;margin:0 auto 26px;border-radius:50%;border:1px solid #4A3426;display:grid;place-items:center;background:radial-gradient(circle,#2A1A12,#0A0604)}
.medaille i{width:42px;height:42px;border-radius:50%;background:radial-gradient(circle at 40% 35%,#E2A27B,#9A5A38 70%);display:grid;place-items:center;color:#FFF3EA;font-style:normal;font-size:16px;box-shadow:0 0 18px rgba(217,140,77,.5)}

/* 19 récap */
.recap{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start}
.liste{border:1px solid #262626;padding:34px 22px 30px}
.liste h4{font-size:14px;color:#F1EEEA;font-weight:600;margin-bottom:12px}
.liste>p{font-size:13px;margin-bottom:20px}
.liste ul{list-style:none;display:grid;gap:12px;padding-bottom:22px;margin-bottom:22px;border-bottom:1px solid #262626}
.liste ul:last-child{border:0;margin:0;padding:0}
.liste li{display:grid;grid-template-columns:18px 1fr;gap:12px;font-size:13px;color:#E0DDD8}
.liste li::before{content:"✓";display:grid;place-items:center;width:18px;height:18px;border-radius:2px;background:var(--olive);color:#fff;font-size:9px}
.liste ul.b li::before{content:"✦";background:var(--cuivre)}
.liste ul.c li::before{content:"+";background:#2A2A2A}
.recap .offre{border:1px solid #2A2A2A}

/* 20 faq */
.faq{width:min(560px,100%);margin:40px auto 0;display:grid;gap:18px}
.faq details summary{list-style:none;display:flex;justify-content:space-between;align-items:center;border:1px solid var(--filet-b);border-radius:6px;padding:16px 16px;font-weight:600;font-size:13.5px;color:#15110C;cursor:pointer}
.faq details summary::-webkit-details-marker{display:none}
.faq details summary::after{content:"+";font-size:18px;font-weight:400;transition:transform .3s}
.faq details[open] summary::after{transform:rotate(45deg)}
.faq details p{font-size:13px;color:#3A352F;margin-top:12px;line-height:1.65}

/* 21 final */
.final{margin:56px auto;width:min(1080px,100% - 40px);border:1px solid #1E1E1E;padding:56px 24px 56px;text-align:center;background:linear-gradient(160deg,rgba(70,48,34,.55),transparent 30%),radial-gradient(40% 50% at 90% 15%,rgba(170,110,70,.25),transparent 70%),#020101}
.final .avant{max-width:420px;margin:0 auto 18px;font-size:13px}
.final h2{max-width:560px;margin:0 auto}
.final .dec{margin-top:16px;color:#F1EEEA;font-weight:600;font-size:13px}
footer{border-top:1px solid var(--filet);padding:28px 20px;text-align:center;font-size:11px;color:#8A8783}
footer u{text-underline-offset:3px;text-decoration-color:#555}
.barre-fin{height:8px;background:var(--cuivre)}

/* mouvement propre au style : le moteur commun vit dans ../../commun/anim.* */
/* reflet de pierre polie : une couche de plus sur le fond, pour garder la braise (::before) et l'éclat (::after) */
.btn{background:linear-gradient(105deg,transparent 42%,rgba(255,255,255,.7) 50%,transparent 58%) -160% 0/70% 100% no-repeat,linear-gradient(90deg,var(--pierre-a),#C2BAB1 55%,var(--pierre-b));transition:filter .3s ease-out,box-shadow .3s ease-out,background-position 0s}
.btn:hover{background-position:260% 0,0 0;transition:filter .3s ease-out,box-shadow .3s ease-out,background-position .9s cubic-bezier(.16,1,.3,1)}
/* le séparateur signature se dessine depuis le centre */
.anime .sep{transform:scaleX(0);transition:transform 1.4s cubic-bezier(.16,1,.3,1)}
.anime .sep.vu{transform:none}
/* les prix d'ancrage se barrent l'un après l'autre */
.ancrage s{text-decoration:none;background:linear-gradient(currentColor,currentColor) 0 46%/100% 1.5px no-repeat}
.anime .ancrage s{background-size:0 1.5px;transition:background-size .7s cubic-bezier(.65,0,.35,1)}
.anime .ancrage.vu s{background-size:var(--barre,100%) 1.5px}
.anime .ancrage.vu s:nth-of-type(1){transition-delay:.3s}.anime .ancrage.vu s:nth-of-type(2){transition-delay:.6s}
.anime .ancrage.vu s:nth-of-type(3){transition-delay:.9s}.anime .ancrage.vu s:nth-of-type(4){transition-delay:1.2s}
.ancrage s{width:fit-content;margin-inline:auto}
@media (prefers-reduced-motion:reduce){*{animation:none!important}}

/* responsive */
@media (max-width:1024px){
  .cadre{width:100%;border:0}
  main,section,.bonus-cadre{overflow-x:clip}
  .mosaique::after{left:0;right:0}
  .hero-g,.recit,.recap,.garantie,.barre-cuivre{width:calc(100% - 48px)!important}
  .duo{gap:40px}
  .mosaique{height:480px}
  .rail{padding:0 24px 8px}
}
@media (max-width:860px){
  .hero-g,.duo,.recit,.recap{grid-template-columns:1fr}
  .hero-g,.recit,.recap,.garantie,.barre-cuivre{width:calc(100% - 40px)!important}
  .bonus-cadre .duo{width:100%}
  .hero-g{gap:24px}
  .mosaique{height:440px}
  .cartes-v{grid-template-columns:repeat(2,1fr)}
  .duo .ordre-1{order:-1}
  .recit .ph{aspect-ratio:4/3;max-height:420px}
  .rail{padding:0 20px 8px}
}
@media (max-width:640px){
  .bloc{padding:72px 0}
  .marque{margin-bottom:36px}
  .grille-m{grid-template-columns:repeat(2,1fr)}
  .grille-m small{margin-bottom:24px}
  .ecrin{grid-template-columns:1fr}
  .raye{display:none}
  .cartes-v{grid-template-columns:1fr}
  .qui,.rangee{grid-template-columns:1fr}
  .rangee .txt{border-left:1px solid #BDB6AC;margin:0}
  .bonus-cadre>.bloc{padding:56px 20px}
  .pastille{font-size:10.5px;padding:9px 16px}
  .p-gauche{left:4px!important}.p-droite{right:4px!important}
  .btn{width:calc(100% - 44px);padding:0 50px 0 14px;font-size:13px;white-space:nowrap}
  .ruban{inset:20px 70px}

  .bulles{left:30%;width:190px}
  .carte-mentale{height:460px}
  .carte-mentale .coeur{width:130px;height:130px;font-size:18px}
  .garantie{padding:48px 20px}
  .minuterie div{width:68px;height:68px}
}
```
