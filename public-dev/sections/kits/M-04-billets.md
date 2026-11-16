# Prompt · Section « La preuve » du template M « Verre bleu nuit »
# Par Yedidia Ruben - Digital Strategist. À coller dans une IA qui code, avec ta page.

Construis une section « La preuve » pour ma page, dans le même esprit que le code de référence plus bas. Garde la structure, le geste et les proportions ; reprends mes couleurs, mes polices et mes textes à moi.

- Son rôle : Faire parler les autres : « ça a marché pour des gens comme moi ».
- Où la placer : Juste après la promesse, puis en rappel avant l'offre.
- Sa structure : Un titre court ou aucun, puis des avis, des messages ou des vidéos, en grille ou en rangée qui déborde.
- La règle qui fait la différence : Des avis ou des messages au format réel (Google, WhatsApp) font plus vrai que des citations encadrées.
- Le geste de cette variante : trois écrans de réservation payés en points
- Animations : attributs data-rv, data-lignes, data-compte, data-incline, data-aimant (moteur anim.js). Sans le moteur, retire-les.
- Aucun tiret long dans les textes. Contraste de 4,5 au moins. Lisible de 360 à 1920 px.

## Le code de référence (HTML)

```html
<section class="billets centre trame" id="billets">
  <div class="wrap">
    <h2 data-lignes>Des billets d'avion<br><em>bien moins chers que vous ne l'imaginez</em></h2>
    <div class="ecrans-vol" data-rv aria-label="Exemples de billets réglés en points" role="img">
      <div class="ui">
        <div class="bar">Air Horizon<em>Dakar → Abidjan</em></div>
        <div class="vol"><span class="h">11:45</span><span class="d">2 h 05<i></i>direct</span><span class="h">13:50</span><span class="p"><span class="tag">Direct</span><span>dès <b>9 310</b> points</span></span></div>
        <div class="vol"><span class="h">05:25</span><span class="d">5 h 15<i></i>1 escale</span><span class="h">10:40</span><span class="p"><span class="tag">1 escale</span><span>dès <b>15 563</b> points</span></span></div>
      </div>
      <div class="ui sombre">
        <div class="bar">Air Horizon<em>Économique · 2 passagers</em></div>
        <div class="vol"><span class="h">21:15 DSS</span><span class="d">7 h 05<i></i>1 escale</span><span class="h">05:20 CDG</span><span class="p"><span>Recommandé</span><span>dès <b>64 113</b> points</span></span></div>
        <div class="vol"><span class="h">21:15 DSS</span><span class="d">9 h 50<i></i>1 escale</span><span class="h">07:05 CDG</span><span class="p"><span>Le plus économique</span><span>dès <b>58 400</b> points</span></span></div>
        <div class="vol"><span class="h">23:40 DSS</span><span class="d">6 h 10<i></i>direct</span><span class="h">05:50 CDG</span><span class="p"><span>Direct</span><span>dès <b>71 900</b> points</span></span></div>
      </div>
      <div class="ui">
        <div class="bar">Dakar (DSS) → Casablanca<em>08/02</em></div>
        <div class="prixv"><span>À partir de</span><span><b>10 500</b> points<br>ou 10 500 points + 6 500 F</span></div>
        <div class="vol"><span class="h">22:25</span><span class="d">3 h 00<i></i>vol direct</span><span class="h">01:25</span></div>
        <div class="prixv"><span>À partir de</span><span><b>7 000</b> points<br>ou 7 000 points + 6 300 F</span></div>
      </div>
    </div>
  </div>
</section>
```

## Le CSS du template d'origine (la section en dépend, ne garde que ce qu'elle utilise)

```css
:root{
  --nuit:#0D1423; --nuit2:#0B111C; --carte:#141D30; --carte2:#101829; --faq:#1F2631;
  --cyan:#4FDAFE; --cyan2:#0DACF4; --bande:#3EC3FC; --cyan-p:#8BE4FF; --sem:#322125; --avec:#012F50;
  --rouge:#F0606A; --or:#FFD02B; --texte:#C9D3E2; --doux:#93A0B5; --blanc:#F4F8FC;
  --verre:linear-gradient(160deg,rgba(255,255,255,.09),rgba(255,255,255,.02));
  --filet:rgba(120,200,255,.18);
  --courbe:cubic-bezier(.16,1,.3,1);
  --titre:'Bai Jamjuree',system-ui,sans-serif; --large:'Michroma','Bai Jamjuree',sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:var(--titre);font-size:15px;line-height:1.6;color:var(--texte);background:var(--nuit);-webkit-font-smoothing:antialiased;overflow-x:clip}
svg{display:block}
a{color:inherit;text-decoration:none}
h1,h2,h3{font-family:var(--titre);color:#fff;font-weight:500;letter-spacing:-.01em;line-height:1.15}
h2{font-size:clamp(26px,2.8vw,38px)}
h1 em,h2 em,h3 em{font-style:normal;color:var(--cyan2)}
h2 em{color:var(--bande)}
b,strong{color:#fff;font-weight:600}
.c{color:var(--bande)}
.wrap{width:min(1000px,100% - 40px);margin-inline:auto;position:relative;z-index:1}
section{position:relative}
.centre{text-align:center}
.trame{background-image:linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);background-size:calc(100% / 6) 100%}
.sep{border-top:1px solid rgba(120,200,255,.12)}

/* Bouton : pilule cyan, halo */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:48px;padding:12px 30px;border-radius:30px;background:linear-gradient(90deg,#33CFFD,var(--cyan) 50%,#8BE4FF);color:#04121E;
  font:700 14px/1.2 var(--titre);text-transform:uppercase;letter-spacing:.01em;box-shadow:0 0 0 3px rgba(79,218,254,.18),0 0 28px rgba(79,218,254,.5);transition:box-shadow .4s var(--courbe)}
.btn:hover{box-shadow:0 0 0 3px rgba(79,218,254,.35),0 0 44px rgba(79,218,254,.75)}
.btn:focus-visible,summary:focus-visible,.fleches button:focus-visible{outline:2px solid #fff;outline-offset:3px}

/* Logo : mot large sur bande cyan */
.logo{display:inline-grid;line-height:1;text-transform:uppercase}
.logo span{font:400 clamp(24px,2.6vw,32px)/1 var(--large);color:#fff;letter-spacing:.02em}
.logo b{display:block;margin-top:4px;padding:3px 8px 2px;background:var(--bande);font:400 clamp(13px,1.4vw,17px)/1.1 var(--large);color:#04121E;letter-spacing:.08em;text-align:center}

/* Carte de verre : fond translucide, flou, filet clair */
.verre{background:var(--verre),rgba(20,29,48,.55);border:1px solid rgba(255,255,255,.12);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);box-shadow:0 30px 60px rgba(0,0,0,.35),inset 0 1px 0 rgba(255,255,255,.12)}

/* Emplacement d'image : bleu profond, filet cyan, format au centre */
.emplacement{position:relative;overflow:hidden;width:100%;background:radial-gradient(110% 80% at 60% 25%,#173A63,#0E1A2E 70%);border:1px solid var(--filet)}
.emplacement[data-format="16:9"]{aspect-ratio:16/9}
.emplacement[data-format="4:3"]{aspect-ratio:4/3}
.emplacement[data-format="1:1"]{aspect-ratio:1/1}
.emplacement[data-format="3:4"]{aspect-ratio:3/4}
.emplacement[data-format="9:16"]{aspect-ratio:9/16}
.emplacement::after{content:attr(data-format);position:absolute;left:50%;top:50%;translate:-50% -50%;padding:4px 10px;border:1px solid rgba(79,218,254,.35);border-radius:20px;font:600 11px/1 var(--titre);letter-spacing:.14em;color:rgba(139,228,255,.75)}
.emplacement:has(img)::after{display:none}

/* Notification flottante (relevé de points) */
.notif{width:230px;padding:9px 12px;border-radius:8px;font-size:10.5px;line-height:1.35;color:#fff;background:linear-gradient(120deg,rgba(13,172,244,.75),rgba(79,218,254,.45));border:1px solid rgba(255,255,255,.25);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:0 14px 30px rgba(0,0,0,.3)}
.notif .h{display:flex;align-items:center;gap:6px;font-size:8.5px;letter-spacing:.06em;text-transform:uppercase;opacity:.85;margin-bottom:3px}
.notif .h i{width:12px;height:12px;border-radius:3px;background:#fff}
.notif .h em{margin-left:auto;font-style:normal;text-transform:none}
.notif b{display:block;font-size:11px}

/* 01 · Hero */
.hero{min-height:560px;padding:90px 0 0;overflow:hidden;background:radial-gradient(40% 60% at 75% 30%,rgba(13,120,220,.35),transparent 70%),radial-gradient(30% 30% at 15% 0%,rgba(13,120,220,.3),transparent),linear-gradient(180deg,#0E1B33,var(--nuit))}
.hero::after{content:"";position:absolute;left:0;right:0;bottom:0;height:2px;background:linear-gradient(90deg,transparent,var(--cyan2),transparent)}
.hero .wrap{display:grid;grid-template-columns:1fr 1fr;gap:30px;align-items:end}
.hero .txt{padding-bottom:90px}
.hero h1{font-size:clamp(30px,3.2vw,42px);margin:30px 0 22px}
.hero p{color:#8FD9FF;font-size:15px;max-width:440px;margin-bottom:34px}
.hero .scene{position:relative;align-self:end}
.hero .portrait{width:min(400px,90%);margin-inline:auto;border-radius:200px 200px 0 0;overflow:hidden}
.hero .portrait .emplacement{border-bottom:0}
.hero .notifs{position:absolute;right:-30px;top:40px;display:grid;gap:12px}
.hero .notifs .notif:nth-child(3){opacity:.65}
.hero .notifs .notif:nth-child(4){opacity:.35}
.hero .notifs .notif{animation:flotte 6s ease-in-out infinite}
.hero .notifs .notif:nth-child(2){animation-delay:-2s}.hero .notifs .notif:nth-child(3){animation-delay:-4s}
@keyframes flotte{50%{translate:0 -8px}}

/* 02 · Opportunités : le calendrier en verre */
.opportunites{padding:100px 0;overflow:hidden}
.opportunites .wrap{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:center;max-width:860px}
.cal-scene{position:relative;padding:40px 0 40px 0}
.cal-fond{position:absolute;left:0;top:0;width:78%;height:100%;border-radius:6px;background:linear-gradient(160deg,#1B2A47,#0E1626);border:1px solid rgba(255,255,255,.08)}
.cal-fond::after{content:"";position:absolute;left:14%;bottom:0;width:60%;height:4px;background:var(--cyan);box-shadow:0 0 16px rgba(79,218,254,.6)}
.bulle-verre{position:absolute;left:4%;top:44%;width:90px;height:90px;border-radius:50%;background:radial-gradient(circle at 35% 30%,rgba(255,255,255,.5),rgba(120,180,255,.1) 40%,rgba(10,20,40,.4) 70%);box-shadow:inset -8px -10px 20px rgba(0,0,0,.4)}
.cal{position:relative;margin-left:20%;width:80%;padding:28px 26px 20px;border-radius:6px}
.cal .tete{display:flex;justify-content:space-between;font:500 14px/1 var(--titre);color:#fff;padding-bottom:12px;border-bottom:1px solid rgba(255,255,255,.4);margin-bottom:14px}
.cal .tete em{font-style:normal;color:var(--bande)}
.jours{display:grid;grid-template-columns:repeat(7,1fr);gap:8px 4px;text-align:center;font:400 15px/1.6 var(--titre);color:#fff}
.jours span.on{border-radius:50%;background:var(--rouge);box-shadow:0 0 14px rgba(240,96,106,.6)}
.curseur{position:relative;margin-top:22px;height:2px;background:linear-gradient(90deg,var(--cyan) 60%,#fff 60%)}
.curseur i{position:absolute;left:60%;top:50%;translate:-50% -50%;width:22px;height:22px;border-radius:50%;border:1px solid #fff;background:var(--nuit);display:grid;place-items:center;color:#fff}
.curseur i svg{width:11px;height:11px}
.cal .bornes{display:flex;justify-content:space-between;font-size:10px;margin-top:12px}
.cal .bornes em{font-style:normal;color:var(--bande)}
.kicker{display:flex;align-items:center;gap:8px;font:500 12px/1 var(--titre);letter-spacing:.08em;text-transform:uppercase;color:var(--texte);margin-bottom:22px}
.kicker svg{width:14px;height:14px;color:var(--or)}
.opportunites h2{margin-bottom:24px}
.opportunites p{font-size:14px;margin-bottom:16px}
.opportunites .btn{margin-top:16px}

/* 03 · Avantages : cartes de verre en éventail */
.avantages{padding:80px 0 110px;overflow:hidden;background:radial-gradient(60% 40% at 50% 100%,rgba(23,58,99,.55),transparent 70%),var(--nuit)}
.avantages h2{margin-bottom:46px}
.eventail{display:flex;justify-content:center;max-width:880px;margin:0 auto;text-align:left}
.eventail .v{position:relative;flex:1;min-width:0;padding:44px 22px 34px;border-radius:6px;margin-left:-14px;transition:translate .5s var(--courbe),rotate .5s var(--courbe);background:linear-gradient(160deg,#18233A,#0F1728);border:1px solid rgba(255,255,255,.08);box-shadow:-18px 0 30px rgba(0,0,0,.35)}
.eventail .v:first-child{margin-left:0}
.eventail .v::before{content:"";position:absolute;left:22px;top:0;width:76px;height:4px;background:var(--cyan);box-shadow:0 6px 18px rgba(79,218,254,.6)}
.eventail .v:last-child{rotate:6deg;translate:14px -16px;z-index:2;background:linear-gradient(160deg,#1C2944,#111A2D)}
.eventail .v:hover{translate:0 -12px;rotate:0deg;z-index:3}
.eventail .ic{width:36px;height:36px;border-radius:8px;background:linear-gradient(160deg,#B5ECFF,var(--cyan));display:grid;place-items:center;color:#06263A;margin-bottom:20px}
.eventail .ic svg{width:20px;height:20px}
.eventail h3{font-size:20px;margin-bottom:12px}
.eventail p{font-size:12.5px;line-height:1.5}

/* 04 · Billets : les écrans de réservation */
.billets{padding:80px 0 90px;border-top:1px solid rgba(120,200,255,.12);overflow:hidden}
.billets h2{margin-bottom:56px}
.ecrans-vol{position:relative;display:grid;grid-template-columns:.75fr 1.3fr .95fr;gap:14px;max-width:860px;margin:0 auto;padding-bottom:30px;text-align:left}
.ecrans-vol::before{content:"";position:absolute;inset:60px -20px 0;border-radius:8px;border:1px solid rgba(255,255,255,.08);background:rgba(20,29,48,.6);z-index:-1}
.ecrans-vol::after{content:"";position:absolute;left:22%;right:22%;bottom:0;height:4px;background:var(--cyan);box-shadow:0 0 16px rgba(79,218,254,.6)}
.ui{border-radius:6px;background:#fff;color:#1A2236;font-size:10px;line-height:1.35;box-shadow:0 20px 40px rgba(0,0,0,.4);overflow:hidden}
.ui .bar{display:flex;align-items:center;gap:8px;padding:8px 10px;background:#1D2A6B;color:#fff;font:700 10px/1 var(--titre)}
.ui .bar em{margin-left:auto;font-style:normal;font-weight:500;opacity:.8}
.vol{display:grid;grid-template-columns:auto 1fr auto;gap:6px;align-items:center;padding:10px 10px;border-top:1px solid #E6EAF2}
.vol .h{font:500 15px/1 var(--titre)}
.vol .d{text-align:center;color:#6B7590;font-size:8.5px}
.vol .d i{display:block;height:1px;background:#C9D0DE;margin:3px 0}
.vol .p{grid-column:1/-1;display:flex;justify-content:space-between;font-size:9px;color:#6B7590}
.vol .p b{color:#1A2236;font-size:11px}
.vol .tag{display:inline-block;padding:2px 6px;border-radius:3px;background:#1E8C62;color:#fff;font-size:8px}
.ui.sombre{background:#16213A;color:#fff}
.ui.sombre .vol{border-color:rgba(255,255,255,.1)}
.ui.sombre .vol .p,.ui.sombre .vol .d{color:#A9B6CC}
.ui.sombre .vol .p b{color:var(--cyan)}
.ui .prixv{padding:12px 12px;display:flex;justify-content:space-between;align-items:end;color:#6B7590;font-size:9px;border-top:1px solid #E6EAF2}
.ui .prixv b{font:500 18px/1 var(--titre);color:#1E78C8}

/* 05 · Pourquoi : sans / avec */
.pourquoi{padding:80px 0 100px}
.pourquoi h2{margin-bottom:40px}
.deux{display:grid;grid-template-columns:1fr 1fr;gap:14px;max-width:860px;margin:0 auto;text-align:left}
.deux>div{padding:34px 30px 30px;border-radius:6px}
.deux .sans{background:linear-gradient(160deg,#3A2329,var(--sem) 40%,#1A1720);border:1px solid rgba(240,96,106,.4)}
.deux .avec{background:linear-gradient(160deg,#03416B,var(--avec) 40%,#0A1C30);border:1px solid rgba(79,218,254,.45)}
.deux h3{text-align:center;font-size:clamp(20px,2vw,24px);margin-bottom:26px}
.deux .sans h3 em{color:#FF7D84}
.deux ul{list-style:none;display:grid;gap:20px}
.deux li{display:flex;gap:14px;font-size:13px;line-height:1.45}
.deux li i{width:20px;height:20px;border-radius:50%;flex:none;display:grid;place-items:center;margin-top:1px}
.deux li i svg{width:10px;height:10px}
.deux .sans li i{background:#C9424C;color:#fff}
.deux .avec li i{background:var(--cyan2);color:#fff}
.deux u{color:#fff;font-weight:600;text-underline-offset:3px}

/* 06 · Parcours : cartes bancaires et étapes */
.parcours{padding:80px 0 90px;overflow:hidden}
.parcours h2{margin-bottom:50px}
.cadre-parcours{max-width:860px;margin:0 auto;padding:44px 60px;border-radius:8px;border:1px solid rgba(255,255,255,.08);background:radial-gradient(60% 80% at 60% 30%,rgba(30,60,110,.3),transparent),var(--carte2);display:grid;gap:18px;text-align:left}
.pas{display:grid;grid-template-columns:1fr 1.45fr;gap:30px;align-items:center}
.porte-carte{position:relative;height:78px;border-radius:4px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.02)}
.porte-carte::after{content:"";position:absolute;left:8%;bottom:-1px;width:45%;height:3px;background:var(--cyan2)}
.carte-b{position:absolute;right:0;top:50%;translate:0 -50%;width:82%;height:66px;border-radius:6px;padding:8px 12px;font:600 11px/1 var(--titre);color:#fff;box-shadow:0 10px 20px rgba(0,0,0,.45);transition:translate .5s var(--courbe)}
.pas:hover .carte-b{translate:-8px -54%}
.carte-b::before{content:"";position:absolute;left:12px;bottom:9px;width:22px;height:16px;border-radius:3px;background:linear-gradient(135deg,#E9D9A6,#B39A55)}
.carte-b::after{content:attr(data-n);position:absolute;right:12px;bottom:12px;font:400 8px/1 var(--large);letter-spacing:.2em;opacity:.8}
.carte-b.noire{background:linear-gradient(135deg,#2B2B2E,#08080A)}
.carte-b.argent{background:linear-gradient(135deg,#E7E9EC,#9EA4AC);color:#1B1D22}
.carte-b.bleue{background:linear-gradient(135deg,#1C3E8A,#0A1838)}
.pas .t{display:flex;align-items:center;gap:20px;min-height:78px;padding:12px 24px;border-radius:4px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.02);font-size:13px;line-height:1.45}
.pas .t i{width:36px;height:36px;border-radius:8px;flex:none;background:linear-gradient(160deg,#B5ECFF,var(--cyan));display:grid;place-items:center;color:#06263A}
.pas .t i svg{width:20px;height:20px}

/* 07 · Contenus : le carrousel des modules */
.contenus{padding:80px 0 70px;border-top:1px solid rgba(120,200,255,.12);overflow:hidden}
.contenus h2{margin-bottom:46px}
.piste{display:flex;gap:16px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding:6px max(20px,calc((100% - 1000px)/2)) 14px;-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}
.piste::-webkit-scrollbar{display:none}
.mod{position:relative;flex:0 0 160px;scroll-snap-align:center;border-radius:6px;overflow:hidden;border:1px solid rgba(255,255,255,.12);background:var(--carte)}
.mod .emplacement{border:0}
.mod .voile{position:absolute;inset:0;background:linear-gradient(180deg,rgba(13,20,35,.3),transparent 25%,transparent 45%,rgba(13,20,35,.95) 78%);pointer-events:none}
.mod .num{position:absolute;left:50%;top:12px;translate:-50% 0;padding:3px 10px;border-radius:12px;background:rgba(13,20,35,.7);border:1px solid rgba(255,255,255,.2);font:500 9px/1.2 var(--titre);letter-spacing:.06em;color:#fff;white-space:nowrap}
.mod h3{position:absolute;left:8px;right:8px;bottom:42px;text-align:center;font-size:18px;line-height:1.05}
.mod h3 em{display:block}
.mod .sig{position:absolute;left:0;right:0;bottom:20px;text-align:center;font:500 7.5px/1 var(--titre);letter-spacing:.12em;text-transform:uppercase;color:var(--doux)}
.mod::after{content:"";position:absolute;left:26%;right:26%;bottom:0;height:4px;background:var(--cyan);box-shadow:0 -4px 14px rgba(79,218,254,.6)}
.fleches{display:flex;justify-content:center;align-items:center;gap:18px;margin-top:26px}
.fleches button{width:44px;height:44px;border:0;background:none;color:#fff;cursor:pointer;display:grid;place-items:center}
.fleches button svg{width:18px;height:12px}
.fleches .pts{display:flex;gap:6px}
.fleches .pts i{width:14px;height:2px;background:#fff;opacity:.6}
.fleches .pts i:first-child{background:var(--cyan);opacity:1}

/* 08 · Programme complet */
.programme{padding:30px 0 100px}
.grade{max-width:860px;margin:0 auto;padding:50px 64px 50px;border-radius:12px;border:1px solid rgba(255,255,255,.06);background:linear-gradient(180deg,#152038,#0F1729)}
.grade h2{font-size:clamp(22px,2.2vw,28px);margin-bottom:46px}
.grade ul{list-style:none}
.grade li{display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid rgba(255,255,255,.18);font-size:14.5px;color:#fff}
.grade li i{width:16px;height:16px;border-radius:3px;background:#5B8BD8;display:grid;place-items:center;color:#fff;flex:none}
.grade li i svg{width:10px;height:10px}
.grade li em{margin-left:auto;font-style:normal;color:var(--bande)}
.grade .plus{display:flex;justify-content:center;margin-top:40px}
.grade .plus a{display:inline-flex;align-items:center;min-height:44px;padding:0 22px;border-radius:6px;background:#fff;color:#0D1423;font:500 14px/1 var(--titre);box-shadow:0 0 0 4px rgba(255,255,255,.1),0 0 22px rgba(255,255,255,.25)}

/* 09 · Bonus : la communauté */
.bonus{padding:60px 0 100px;border-top:1px solid rgba(79,218,254,.35);overflow:hidden;background:radial-gradient(40% 40% at 50% 10%,rgba(23,58,99,.45),transparent 70%),var(--nuit)}
.pastille-or{display:inline-flex;align-items:center;gap:6px;min-height:28px;padding:0 16px;border-radius:16px;background:var(--or);color:#2A1E00;font:600 13px/1 var(--titre);text-transform:uppercase}
.pastille-or svg{width:13px;height:13px}
.bonus .de{margin:22px 0 14px;font:500 14px/1 var(--titre);color:#fff}
.bonus .de s{color:#FF7D84}
.bonus .de b{color:#5CE08A}
.bonus h2{margin-bottom:20px}
.bonus h2 em{color:var(--cyan)}
.bonus .chapo{max-width:460px;margin:0 auto 50px;font-size:13.5px}
.commu{position:relative;max-width:620px;margin:0 auto}
.commu .appel{position:relative;padding:14px;border-radius:10px;background:#16213A;border:1px solid rgba(255,255,255,.08)}
.commu .appel .emplacement{border-radius:6px}
.salons{position:absolute;left:-130px;top:30px;width:160px;padding:16px 14px;border-radius:6px;background:#1A2338;border:1px solid rgba(255,255,255,.1);text-align:left;font-size:10.5px;z-index:2;box-shadow:0 20px 40px rgba(0,0,0,.4)}
.salons b{display:block;font-size:9.5px;text-transform:uppercase;margin-bottom:10px}
.salons span{display:block;padding:3px 6px;color:#D8E0EC}
.salons span::before{content:"# ";color:var(--cyan)}
.salons span.on{background:rgba(255,255,255,.08);border-radius:3px}
.medaillon{position:absolute;right:-110px;top:-30px;width:180px;height:180px;border-radius:50%;border:8px solid rgba(40,60,100,.6);background:radial-gradient(circle,#1A2A48,#111A2D);display:grid;place-items:center;color:#5C6F92;z-index:-1}
.medaillon svg{width:80px;height:80px}
.commandes{position:absolute;right:20px;bottom:-24px;display:flex;gap:10px;padding:8px 12px;border-radius:12px;background:#1B2236;border:1px solid rgba(255,255,255,.08);z-index:2}
.commandes span{width:36px;height:36px;border-radius:50%;background:#2A3350;display:grid;place-items:center;color:#fff}
.commandes span svg{width:16px;height:16px}
.commandes span.r{background:#E5343E}

/* 10 · Offre */
.offre{padding:70px 0 90px;border-top:1px solid rgba(120,200,255,.12);overflow:hidden}
.offre h2{margin-bottom:46px}
.offre h2 em{display:block}
.trio{display:grid;grid-template-columns:1fr auto 1fr;gap:40px;align-items:center;max-width:860px;margin:0 auto;text-align:left}
.trio ul{list-style:none;display:grid;gap:20px}
.trio li{display:flex;gap:10px;font-size:13px;line-height:1.4;color:#fff}
.trio li svg{width:13px;height:13px;color:var(--cyan);flex:none;margin-top:3px}
.pile{position:relative;width:280px;max-width:100%}
.pile::before,.pile::after{content:"";position:absolute;top:30px;bottom:30px;width:40px;border-radius:6px;background:linear-gradient(160deg,#1B2A47,#0F1729);border:1px solid rgba(255,255,255,.08)}
.pile::before{left:-30px}.pile::after{right:-30px}
.prix{position:relative;z-index:1;padding:26px 22px 30px;border-radius:6px;text-align:center}
.prix .logo{margin-bottom:20px}
.prix .avant{font:600 19px/1 var(--titre);color:var(--bande)}
.prix .avant s{color:#FF7D84;text-decoration-thickness:2px}
.prix .fois{font:500 14px/1 var(--titre);color:#fff;margin-top:8px;text-transform:uppercase}
.prix .gros{display:block;white-space:nowrap;font:600 clamp(46px,4.6vw,60px)/1 var(--titre);letter-spacing:-.03em;background:linear-gradient(180deg,#8BE4FF,var(--cyan2));-webkit-background-clip:text;background-clip:text;color:transparent;margin:8px 0 6px}
.prix .gros small{font-size:.35em;letter-spacing:0}
.prix .comptant{font:500 12px/1 var(--titre);color:#fff;text-decoration:underline;text-underline-offset:3px;text-transform:uppercase}
.moyens{display:flex;flex-wrap:wrap;justify-content:center;gap:5px;margin:18px 0}
.moyens span{padding:3px 6px;border-radius:3px;background:rgba(255,255,255,.14);font:600 9px/1 var(--titre);color:#E6EEF8}
.prix .btn{width:100%}
.prix .sur{display:block;margin-top:12px;font-size:9px;text-transform:uppercase;color:var(--doux)}
.prix::after{content:"";position:absolute;left:30%;right:30%;bottom:0;height:4px;background:var(--cyan);box-shadow:0 0 14px rgba(79,218,254,.6)}

/* 11 · Garantie : sceau tournant, avion, grand 7 */
.garantie{padding:90px 0;overflow:hidden;clip-path:polygon(0 0,42% 0,44.5% 30px,55.5% 30px,58% 0,100% 0,100% 100%,0 100%);background:var(--nuit);border-top:1px solid rgba(120,200,255,.12)}
.garantie .wrap{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;max-width:860px}
.sceau{position:relative;width:min(320px,90%);aspect-ratio:1;margin-inline:auto}
.sceau .sept{position:absolute;right:-16%;top:10%;font:600 clamp(160px,17vw,230px)/.8 var(--titre);background:linear-gradient(180deg,#4FDAFE,rgba(13,172,244,0) 95%);-webkit-background-clip:text;background-clip:text;color:transparent}
.sceau .cercle{position:absolute;inset:0;border-radius:50%;border:1px solid rgba(79,218,254,.2);background:radial-gradient(circle,#13213A 55%,#0D1423)}
.sceau .texte{position:absolute;inset:8%;animation:tourne 26s linear infinite}
.sceau .texte text{font:600 12.5px var(--titre);letter-spacing:.14em;fill:#fff;text-transform:uppercase}
@keyframes tourne{to{rotate:360deg}}
.sceau .avion{position:absolute;inset:32%;border-radius:50%;background:linear-gradient(160deg,#4FDAFE,#0DACF4);display:grid;place-items:center;color:#06263A;box-shadow:0 0 40px rgba(79,218,254,.45)}
.sceau .avion svg{width:52%;height:52%}
.sceau .etoiles{position:absolute;left:50%;top:22%;translate:-50% 0;color:var(--or);font-size:13px;letter-spacing:.3em;white-space:nowrap}
.garantie h2{margin-bottom:24px}
.garantie p{font-size:13.5px;margin-bottom:16px;max-width:400px}

/* 12 · L'experte */
.experte{padding:60px 0 0;border-top:1px solid rgba(120,200,255,.12);overflow:hidden}
.experte .scene{position:relative;max-width:700px;margin:0 auto}
.experte .rond{position:absolute;left:4%;right:4%;top:14%;bottom:0;border-radius:50% 50% 0 0;background:radial-gradient(70% 70% at 50% 30%,#1E3B6E,#0F1B32)}
.experte .photo{position:relative;width:min(420px,72%);margin:0 auto}
.experte .photo .emplacement{border-bottom:0;background:transparent;border-color:rgba(79,218,254,.15)}
.experte .notif{position:absolute;z-index:2}
.bande-nom{position:relative;padding:40px 0;background:radial-gradient(40% 100% at 50% 0%,rgba(30,90,170,.45),transparent 70%),var(--nuit2)}
.bande-nom .wrap{display:grid;grid-template-columns:auto auto 1fr;gap:30px;align-items:center;max-width:760px}
.bande-nom .ic{width:54px;height:54px;border-radius:8px;background:linear-gradient(160deg,#B5ECFF,var(--cyan));display:grid;place-items:center;color:#06263A}
.bande-nom .ic svg{width:28px;height:28px}
.bande-nom h2{font-size:clamp(28px,3vw,38px);line-height:1}
.bande-nom h2 em{display:block;color:var(--cyan)}
.bande-nom p{font-size:13.5px;max-width:330px}

/* 13 · Avis */
.avis{padding:90px 0;overflow:hidden}
.pastille-b{display:inline-flex;align-items:center;min-height:30px;padding:0 20px;border-radius:16px;background:#fff;color:#0D1423;font:600 12px/1 var(--titre);letter-spacing:.14em;text-transform:uppercase}
.avis h2{margin:16px 0 14px}
.avis .chapo{font-size:13px;margin-bottom:46px}
.rangee{display:flex;gap:22px;width:max-content;animation:file 60s linear infinite;margin-bottom:22px}
.rangee.r2{animation-direction:reverse;margin-left:-120px}
.defile{overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 15%,#000 85%,transparent);mask-image:linear-gradient(90deg,transparent,#000 15%,#000 85%,transparent)}
.defile:hover .rangee{animation-play-state:paused}
@keyframes file{to{transform:translateX(-50%)}}
.a{width:270px;padding:20px 22px 24px;border-radius:4px;border:1px solid rgba(255,255,255,.08);background:#121B2D;text-align:left}
.a .id{display:flex;align-items:center;gap:10px;margin-bottom:10px}
.a .av{width:26px;height:26px;border-radius:50%;display:grid;place-items:center;background:#2A3A5A;font:600 10px/1 var(--titre);color:#fff;flex:none}
.a h3{font-size:15px}
.a .et{margin-left:auto;color:var(--or);font-size:12px;letter-spacing:.06em}
.a p{padding-left:36px;font-size:12px;line-height:1.55;color:var(--doux)}

/* 14 · FAQ */
.faq{padding:60px 0 100px}
.faq .wrap{display:grid;grid-template-columns:.9fr 1.1fr;gap:60px;align-items:center;max-width:860px}
.faq .geant{font:400 clamp(70px,9vw,104px)/1 var(--large);letter-spacing:-.04em;background:linear-gradient(90deg,#4FDAFE,#2B6C8C 70%,#1C3A55);-webkit-background-clip:text;background-clip:text;color:transparent}
.faq h2{font-weight:400;margin:6px 0 16px}
.faq h2 em{color:var(--cyan2)}
.faq .q{font-style:italic;color:var(--bande);font-size:14.5px;line-height:1.4;margin-bottom:30px;max-width:260px}
.faq .btn{text-transform:none;font-weight:500;font-size:16px}
.faq .liste{display:grid;gap:14px}
.faq details{border-radius:4px;background:var(--faq);border:1px solid rgba(255,255,255,.07)}
.faq details[open]{border-color:rgba(79,218,254,.35)}
.faq summary{list-style:none;cursor:pointer;display:flex;align-items:center;gap:14px;min-height:50px;padding:10px 18px;font:500 15px/1.3 var(--titre);color:#fff}
.faq summary::-webkit-details-marker{display:none}
.faq summary::after{content:"+";margin-left:auto;font:300 24px/1 var(--titre);color:var(--cyan);transition:rotate .3s var(--courbe)}
.faq details[open] summary::after{rotate:45deg}
.faq details p{padding:0 18px 16px;font-size:13.5px}

/* 15 · Pied cyan clair */
#pied{background:var(--cyan-p);color:#0D1423;font-size:12.5px}
#pied .wrap{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:22px 0;max-width:860px}
#pied .droite{display:flex;gap:20px}
#pied .droite a{display:inline-flex;align-items:center;min-height:44px}
#pied .droite a:hover{text-decoration:underline}

@media (max-width:900px){
  .hero .notifs{right:0}
  .salons{left:-20px;top:auto;bottom:-40px;width:150px}
  .medaillon{display:none}
  .trio{grid-template-columns:1fr 1fr;gap:30px}
  .trio .pile{grid-column:1/-1;grid-row:1;margin-inline:auto}
  .eventail{flex-wrap:wrap;gap:14px}
  .eventail .v{flex:1 1 calc(33% - 14px);margin-left:0;box-shadow:none}
  .eventail .v:last-child{rotate:3deg;translate:0 0}
}
@media (max-width:820px){
  .hero{padding-top:50px}
  .hero .wrap,.opportunites .wrap,.garantie .wrap,.faq .wrap{grid-template-columns:1fr;gap:40px}
  .hero .txt{padding-bottom:0;text-align:center}
  .hero p{margin-inline:auto}
  .hero .notifs{right:-10px;top:30px;transform:scale(.8);transform-origin:right top}
  .ecrans-vol{grid-template-columns:1fr 1fr}
  .ecrans-vol .ui:nth-child(2){grid-column:1/-1;grid-row:1}
  .ecrans-vol::before{inset:40px -10px 0}
  .deux{grid-template-columns:1fr}
  .cadre-parcours{padding:30px 20px}
  .pas{grid-template-columns:1fr;gap:10px}
  .grade{padding:36px 22px}
  .bande-nom .wrap{grid-template-columns:auto 1fr;gap:20px}
  .bande-nom p{grid-column:1/-1;max-width:none}
  .garantie{clip-path:none}
  .sceau{width:min(260px,72%)}
  .commu{margin-bottom:40px}
}
@media (max-width:520px){
  .eventail .v{flex:1 1 100%}
  .trio{grid-template-columns:1fr}
  .ecrans-vol{grid-template-columns:1fr}
  .ecrans-vol .ui:nth-child(2){grid-row:auto}
  .salons{position:relative;left:0;bottom:0;width:auto;margin-top:16px}
  .commandes{right:50%;translate:50% 0;bottom:auto;top:calc(100% - 60px)}
  .hero .notifs{transform:scale(.62)}
  .experte .notif{display:none}
  .a{width:240px}
  #pied .wrap{flex-direction:column;text-align:center;padding:16px 0}
}
@media (prefers-reduced-motion:reduce){.hero .notifs .notif,.sceau .texte,.rangee{animation:none}}
```
