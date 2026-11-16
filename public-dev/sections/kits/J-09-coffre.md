# Prompt · Section « Les bonus » du template J « Calque émeraude »
# Par Yedidia Ruben - Digital Strategist. À coller dans une IA qui code, avec ta page.

Construis une section « Les bonus » pour ma page, dans le même esprit que le code de référence plus bas. Garde la structure, le geste et les proportions ; reprends mes couleurs, mes polices et mes textes à moi.

- Son rôle : Faire basculer l'indécis : « si j'entre maintenant, j'ai plus ».
- Où la placer : Juste après l'offre, ou entre l'offre et son rappel.
- Sa structure : Un titre « qui entre maintenant reçoit plus », un compte à rebours si la date est réelle, puis un bonus par carte avec sa valeur.
- La règle qui fait la différence : Chaque bonus a une forme physique (ticket, livre, carte), pas une icône.
- Le geste de cette variante : Quatre tiroirs inclinés à languette claire
- Animations : attributs data-rv, data-lignes, data-compte, data-incline, data-aimant (moteur anim.js). Sans le moteur, retire-les.
- Aucun tiret long dans les textes. Contraste de 4,5 au moins. Lisible de 360 à 1920 px.

## Le code de référence (HTML)

```html
<section class="coffre centre" id="coffre">
  <div class="wrap">
    <div class="tags" data-rv><span>Fonds</span><span>Éléments</span><span>Maquettes</span><span>Textures</span></div>
    <h2 data-rv>Le coffre créatif&nbsp;: une <em>bibliothèque qui grandit chaque mois</em>, réservée aux élèves de <em>Calque</em></h2>
    <p class="sous" data-rv>Une plateforme premium qui réunit tout ce qu'il faut pour créer des visuels pro, sans perdre des heures à chercher des fichiers sur internet.</p>
    <div class="tiroirs">
      <div class="tiroir" data-rv><div class="vis fonds" aria-hidden="true"><span></span><span></span><span></span></div><h3>Fonds modernes</h3><p>pour tous les styles de visuel</p></div>
      <div class="tiroir" data-rv><div class="vis formes" aria-hidden="true"><span></span></div><h3>Éléments exclusifs</h3><p>qui font sortir vos créations du lot</p></div>
      <div class="tiroir" data-rv><div class="vis maquettes" aria-hidden="true"><span></span><span></span><span></span><span></span></div><h3>Maquettes réalistes</h3><p>pour présenter vos travaux avec impact</p></div>
      <div class="tiroir" data-rv><div class="vis textures" aria-hidden="true"><span></span><span></span></div><h3>Textures pro</h3><p>qui élèvent le niveau de chaque création</p></div>
    </div>
    <div class="mises">
      <div class="fenetre" aria-hidden="true" data-rv><div class="haut"><i></i><i></i><i></i></div><div class="grille"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div><span class="orbe">c</span></div>
      <div>
        <h2 data-rv>Des mises à jour régulières pour les élèves de <em>Calque Premium</em></h2>
        <p data-rv>Pendant que d'autres graphistes perdent temps et argent sur des sites payants, vous avez une <u>bibliothèque premium illimitée</u> au bout des doigts.</p>
        <p data-rv>Le coffre créatif vaudrait à lui seul un abonnement mensuel. Comme élève, vous y avez <u>accès complet et gratuit</u>.</p>
      </div>
    </div>
  </div>
</section>
```

## Le CSS du template d'origine (la section en dépend, ne garde que ce qu'elle utilise)

```css
:root{
  --nuit:#011100; --nuit2:#051808; --foret:#111C0D; --carte:#1A2818; --carte2:#242F20; --filet:#2F3F2A;
  --sauge:#57743D; --sauge2:#65804E; --neon:#00FF71; --neon-f:#04210F; --menthe:#CFE3C8; --menthe2:#9FD39A;
  --perle:#EFEFEF; --perle2:#E4E4E4; --pied:#283E22; --clair:#DCE4DF; --doux:#A3AE9F; --encre:#121A10; --gris:#4B5449;
  --rouge:#F0525A; --courbe:cubic-bezier(.16,1,.3,1);
  --sans:'Plus Jakarta Sans',system-ui,sans-serif; --serif:'Instrument Serif',Georgia,serif;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:var(--sans);font-size:15px;line-height:1.6;color:var(--clair);background:var(--nuit);-webkit-font-smoothing:antialiased;overflow-x:clip}
svg{display:block}
a{color:inherit;text-decoration:none}
h1,h2,h3{font-family:var(--sans);font-weight:500;line-height:1.18;letter-spacing:-.015em;color:#F4F7F2}
h2{font-size:clamp(26px,2.7vw,36px)}
em,.it{font-family:var(--serif);font-style:italic;font-weight:400;letter-spacing:0;font-size:1.12em;color:var(--menthe2)}
.clair em,.clair .it{color:#2F6B2A}
b,strong{font-weight:700;color:#fff}
.wrap{width:min(1080px,100% - 40px);margin-inline:auto;position:relative;z-index:1}
section{position:relative}
.centre{text-align:center}

/* Surlignage + curseur de texte qui clignote : le geste « on édite le titre » */
.surligne{display:inline;padding:0 .18em;background:linear-gradient(transparent 8%,rgba(87,116,61,.55) 8% 92%,transparent 92%);color:#E9F6E4}
.clair .surligne{background:linear-gradient(transparent 8%,var(--menthe) 8% 92%,transparent 92%);color:#24521F}
.curseur{display:inline-block;width:2px;height:1.05em;margin-left:3px;vertical-align:-.12em;background:currentColor;animation:clignote 1.1s steps(1) infinite}
@keyframes clignote{50%{opacity:0}}

/* Bouton néon : pilule vert électrique, flèche dans un rond blanc */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:14px;min-height:54px;padding:0 12px 0 30px;border-radius:40px;background:var(--neon);color:var(--neon-f);
  font:800 14px/1.2 var(--sans);text-transform:uppercase;letter-spacing:.01em;box-shadow:0 0 0 4px rgba(0,255,113,.16),0 14px 40px rgba(0,255,113,.25);transition:box-shadow .4s var(--courbe),background .4s}
.btn:hover{box-shadow:0 0 0 7px rgba(0,255,113,.22),0 18px 50px rgba(0,255,113,.35)}
.btn .rond{width:30px;height:30px;border-radius:50%;background:#fff;color:var(--neon-f);display:grid;place-items:center;flex:none}
.btn .rond svg{width:14px;height:14px}
.btn-verre{display:inline-flex;align-items:center;justify-content:center;min-height:46px;padding:0 34px;border-radius:30px;border:1px solid rgba(220,228,223,.35);background:linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.02));font:700 12px/1 var(--sans);letter-spacing:.04em;text-transform:uppercase;color:#fff}
.paiements{display:flex;gap:8px;justify-content:inherit;margin-top:12px;opacity:.5}
.paiements i{width:22px;height:9px;border-radius:2px;background:#55604F}
.pill{display:inline-flex;align-items:center;height:28px;padding:0 14px;border-radius:20px;border:1px solid rgba(220,228,223,.3);background:rgba(255,255,255,.05);font:600 10.5px/1 var(--sans);letter-spacing:.14em;text-transform:uppercase;color:var(--clair)}
.fleches{display:flex;gap:8px}
.fleches button{width:42px;height:28px;border-radius:16px;border:0;background:#2E4A28;color:#fff;cursor:pointer;display:grid;place-items:center}
.fleches button svg{width:18px;height:10px}

/* Cadre de sélection d'éditeur : filet fin + 4 poignées */
.sel{position:relative;outline:1px solid rgba(220,228,223,.75);outline-offset:6px}
.sel>.p{position:absolute;width:10px;height:10px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--sauge);z-index:3}
.sel>.p:nth-of-type(1){left:-11px;top:-11px}.sel>.p:nth-of-type(2){right:-11px;top:-11px}
.sel>.p:nth-of-type(3){left:-11px;bottom:-11px}.sel>.p:nth-of-type(4){right:-11px;bottom:-11px}
/* Coins de visée */
.vise{position:relative}
.vise::before,.vise::after{content:"";position:absolute;width:18px;height:18px;border:2px solid rgba(220,228,223,.8);pointer-events:none}
.vise::before{left:14px;top:14px;border-right:0;border-bottom:0}
.vise::after{right:14px;bottom:14px;border-left:0;border-top:0}
.vise>.c2{position:absolute;inset:0;pointer-events:none}
.vise>.c2::before,.vise>.c2::after{content:"";position:absolute;width:18px;height:18px;border:2px solid rgba(220,228,223,.8)}
.vise>.c2::before{right:14px;top:14px;border-left:0;border-bottom:0}
.vise>.c2::after{left:14px;bottom:14px;border-right:0;border-top:0}

/* Emplacements d'image */
.emplacement{position:relative;overflow:hidden;aspect-ratio:3/4;border-radius:14px;background:radial-gradient(120% 90% at 70% 10%,#2A3E25,#0E1A0C 70%);border:1px solid rgba(207,227,200,.16)}
.emplacement[data-format="16:9"]{aspect-ratio:16/9}.emplacement[data-format="4:3"]{aspect-ratio:4/3}
.emplacement[data-format="1:1"]{aspect-ratio:1/1}.emplacement[data-format="9:16"]{aspect-ratio:9/16}
.emplacement::after{content:attr(data-format);position:absolute;left:50%;top:50%;translate:-50% -50%;padding:5px 12px;border-radius:20px;border:1px solid rgba(207,227,200,.28);font:600 11px/1 var(--sans);letter-spacing:.14em;color:rgba(207,227,200,.7)}
.emplacement.pale{background:radial-gradient(120% 90% at 70% 10%,#FAFAF8,#D9DDD6 75%);border-color:#CCD3C8}
.emplacement.pale::after{color:#4F5A4C;border-color:#AEB8AA}
.emplacement:has(img)::after{display:none}

/* Barre latérale d'éditeur */
.lateral{display:grid;gap:18px;padding:16px 10px;border-radius:12px;background:rgba(30,46,26,.86);border:1px solid rgba(220,228,223,.12);backdrop-filter:blur(6px);font:500 9.5px/1.2 var(--sans);color:#C5CEC1;text-align:center;box-shadow:0 20px 40px rgba(0,0,0,.4)}
.lateral svg{width:18px;height:18px;margin:0 auto 5px;color:#E9EEE6}

/* 01 · Hero */
.hero{padding:70px 0 0;background:radial-gradient(70% 80% at 72% 20%,#22401A,transparent 60%),radial-gradient(40% 50% at 0% 60%,#122A10,transparent 70%),var(--foret);overflow:hidden}
.hero .wrap{display:grid;grid-template-columns:1fr 1fr;gap:30px;align-items:end}
.hero .txt{padding-bottom:110px}
.logo{font:400 64px/1 var(--serif);font-style:italic;color:#fff;position:relative;display:inline-block}
.logo sup{position:absolute;left:44px;top:-4px;font:600 9px/1 var(--sans);font-style:normal;letter-spacing:.06em;padding:2px 5px;border:1px solid var(--sauge2);color:var(--menthe2);border-radius:3px}
.hero h1{font-size:clamp(26px,2.4vw,34px);margin:30px 0 16px;max-width:470px}
.hero p{font-size:13.5px;color:var(--doux);max-width:440px;margin-bottom:26px}
.scene{position:relative;padding:20px 30px 0 70px}
.scene .emplacement{width:100%;max-width:420px;margin-left:auto;border-radius:6px;border-color:rgba(220,228,223,.4)}
.scene .lateral{position:absolute;left:10px;top:110px;z-index:3;rotate:-4deg}
.scene .arc{position:absolute;right:-120px;top:-60px;width:420px;height:420px;border-radius:50%;border:40px solid rgba(101,128,78,.18)}
.scene .outils{position:absolute;right:-6px;top:58%;z-index:3;display:flex;gap:10px;padding:10px 14px;border-radius:10px;background:rgba(30,46,26,.9);color:#E9EEE6}
.scene .outils svg{width:16px;height:16px}
.barre{position:relative;z-index:2;margin-top:-56px;height:58px;background:linear-gradient(90deg,#4D6A36,#6B8853 50%,#4D6A36);display:flex;align-items:center;gap:36px;padding:0 4vw;white-space:nowrap;overflow:hidden;color:#E9F0E4;font:500 15px/1 var(--sans);box-shadow:0 20px 40px rgba(0,0,0,.35)}
.barre .nom{font-family:var(--serif);font-style:italic;font-size:21px;color:#F3F8EF}
.barre span{display:flex;align-items:center;gap:8px}
.barre svg{width:18px;height:18px}
.barre .sep{width:1px;height:26px;background:rgba(255,255,255,.25)}

/* 02 · L'opportunité : barre de texte sélectionnée */
.opportunite{padding:80px 0 70px;background:radial-gradient(60% 70% at 50% 0%,#0F2A0E,var(--nuit2) 70%)}
.outil-texte{position:relative;display:flex;align-items:center;justify-content:space-between;gap:90px;max-width:546px;margin:0 auto;height:40px;padding:0 18px;border-radius:4px;background:#3A4A35;font:500 10px/1 var(--sans);color:#D5DDD1;white-space:nowrap;overflow:visible}
.outil-texte .zone{display:flex;gap:16px;align-items:center;overflow:hidden}
.outil-texte .orbe{position:absolute;left:50%;top:50%;translate:-50% -50%;width:62px;height:62px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#7CF3A8,#1C8C4A 55%,#0C3B1E);display:grid;place-items:center;font:400 34px/1 var(--serif);font-style:italic;color:#fff;box-shadow:0 0 0 8px rgba(0,255,113,.08),0 0 40px rgba(0,255,113,.5)}
.opportunite h2{max-width:560px;margin:46px auto 14px;font-size:clamp(20px,1.9vw,25px)}
.opportunite .sous{font-size:13px;color:var(--doux)}
.douleurs{display:grid;grid-template-columns:1fr 1fr;gap:18px;max-width:580px;margin:34px auto 0;text-align:left}
.douleurs p{padding:12px 14px;border-radius:6px;border:1px solid var(--filet);background:rgba(255,255,255,.02);font-size:12px;line-height:1.5;color:#E6ECE3}
.douleurs p::before{content:"×";color:var(--rouge);font-weight:800;margin-right:6px}
.douleurs u{text-decoration-color:rgba(230,236,227,.5)}

/* 03 · Ressenti : fond clair quadrillé, téléphone et relevé */
.ressenti{background:var(--perle);background-image:linear-gradient(#E3E5E2 1px,transparent 1px),linear-gradient(90deg,#E3E5E2 1px,transparent 1px);background-size:34px 34px;color:var(--gris);padding:40px 0 0;overflow:hidden}
.ressenti .wrap{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center;width:min(940px,100% - 40px)}
.tel{position:relative;width:230px;height:290px;margin-left:60px;border-radius:34px 34px 0 0;background:#111;padding:10px 10px 0}
.tel .ecran{height:100%;border-radius:26px 26px 0 0;background:linear-gradient(180deg,var(--sauge) 0 70px,#fff 70px);position:relative}
.tel .ecran::before{content:"";position:absolute;left:50%;top:10px;translate:-50% 0;width:70px;height:18px;border-radius:12px;background:#111}
.tel .menu{position:absolute;left:14px;right:14px;bottom:12px;display:flex;justify-content:space-between;font:600 10px/1 var(--sans);color:#222}
.releve{position:absolute;left:-60px;top:72px;width:340px;padding:14px 16px 18px;border-radius:4px;background:#fff;box-shadow:0 20px 40px rgba(0,0,0,.18);color:#333;font-size:8.5px;line-height:1.4}
.releve .t{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #ddd;padding-bottom:8px;margin-bottom:12px}
.releve .t b{font:700 16px/1 var(--sans);color:var(--sauge)}
.releve .solde{display:inline-block;margin-top:14px;padding:10px 14px;border:1.5px solid #E2495A;border-radius:50%;rotate:-6deg}
.releve .solde b{display:block;font-size:12px;color:#2F6B2A}
.ressenti h2{font-family:var(--serif);font-style:italic;font-weight:400;font-size:clamp(30px,3vw,38px);color:var(--encre);margin-bottom:20px}
.ressenti h2 .surligne{color:#24521F}
.ressenti p{font-size:13px;color:#3B4339;margin-bottom:12px;max-width:430px}

/* 04 · Le chiffre : carte sombre, billets en 3D */
.chiffre{padding:60px 0;background:var(--foret);overflow:hidden}
.chiffre .filigrane{position:absolute;left:0;right:0;top:50%;translate:0 -50%;font:400 clamp(160px,20vw,300px)/1 var(--serif);font-style:italic;color:rgba(255,255,255,.035);white-space:nowrap;text-align:center}
.chiffre .carte{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:20px;max-width:670px;margin:0 auto;padding:44px 0 44px 74px;border-radius:14px;border:1px solid var(--filet);background:linear-gradient(135deg,rgba(255,255,255,.03),rgba(255,255,255,0))}
.chiffre h2{font-size:clamp(18px,1.7vw,21px);margin-bottom:18px}
.chiffre p{font-size:11.5px;color:var(--doux)}
.billets{position:relative;height:250px;perspective:900px;margin-right:-110px}
.billet{position:absolute;left:10%;width:280px;height:130px;border-radius:6px;background:linear-gradient(115deg,#CFE9E2,#9FD4C7 45%,#E6F4EF 70%,#8CC9BA);box-shadow:0 18px 30px rgba(0,0,0,.45);transform:rotateX(52deg) rotateZ(-28deg);transform-origin:center;overflow:hidden}
.billet::before{content:"10 000";position:absolute;right:16px;top:14px;font:800 26px/1 var(--sans);color:#3B8E7E;letter-spacing:-.03em}
.billet::after{content:"";position:absolute;left:18px;top:22px;width:70px;height:70px;border-radius:50%;border:2px solid rgba(59,142,126,.5);background:radial-gradient(circle,rgba(59,142,126,.25) 30%,transparent 31%)}
.billet:nth-child(1){top:150px}.billet:nth-child(2){top:110px;left:13%}.billet:nth-child(3){top:70px;left:16%}.billet:nth-child(4){top:30px;left:19%}

/* 05 · Services : carte verre centrale, deux pages floues */
.services{padding:20px 0 90px;background:linear-gradient(180deg,var(--foret),var(--nuit));overflow:hidden}
.services .wrap{display:grid;grid-template-columns:1fr 360px 1fr;gap:0;align-items:start}
.cote{margin-top:30px;height:320px;padding:30px;font-size:10.5px;line-height:1.5;filter:blur(.4px);opacity:.75}
.cote.g{background:linear-gradient(180deg,#E8EAE6,#B9BDB6);color:#2F352D;border-radius:2px;rotate:-2deg;margin-right:-20px}
.cote.g b{color:#1E241C}
.cote.d{background:linear-gradient(90deg,#1B2418,#D9DBD7 60%);color:#2F352D;padding-left:46%;margin-left:-20px}
.cote h4{font:700 13px/1.2 var(--sans);text-transform:uppercase;margin:0 0 10px}
.cote.d h4{text-transform:none;font-size:16px}
.verre{position:relative;z-index:2;padding:22px 22px 26px;border-radius:0 0 18px 18px;border:1px solid rgba(220,228,223,.14);border-top:0;background:linear-gradient(180deg,#26341F,#141E11);box-shadow:0 30px 60px rgba(0,0,0,.5);text-align:center}
.verre h2{font-size:18px;margin:12px 0 18px}
.verre ul{list-style:none;display:grid;gap:9px;text-align:left}
.verre li{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:9px 10px;border-radius:7px;border:1px solid rgba(220,228,223,.2);font-size:10.5px}
.verre li span{flex:none;padding:4px 9px;border-radius:12px;background:#4E5D47;font-size:9.5px;color:#F1F5EF}

/* 06 · Pour qui : cartes empilées numérotées */
.pour{padding:80px 0;background:radial-gradient(50% 60% at 70% 50%,#152614,var(--foret) 70%)}
.pour .wrap{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;width:min(820px,100% - 40px)}
.pour h2{font-size:clamp(26px,2.4vw,32px);margin:20px 0 20px}
.pour .fl{width:30px;height:12px;color:#fff;margin-bottom:46px}
.pile{display:grid;gap:0}
.pile .c{position:relative;display:flex;align-items:flex-start;gap:14px;height:88px;margin-top:-28px;padding:18px 22px;border-radius:12px;border:1px solid rgba(220,228,223,.1);background:linear-gradient(180deg,#2C3E25,#17241A);box-shadow:0 -12px 30px rgba(0,0,0,.35);overflow:hidden;transition:height .5s var(--courbe)}
.pile .c:first-child{margin-top:0}
.pile .c:last-child{height:120px}
.pile .c i{flex:none;width:24px;height:24px;border-radius:50%;background:#fff;color:var(--encre);display:grid;place-items:center}
.pile .c i svg{width:11px;height:11px}
.pile .c p{margin-top:1px;max-width:250px;font-size:11.5px;line-height:1.4;color:#E6ECE3}
.pile .c .n{position:absolute;right:14px;bottom:-26px;font:300 100px/1 var(--sans);color:transparent;-webkit-text-stroke:1px rgba(220,228,223,.18)}

/* 07 · Ruban qui défile */
.ruban{padding:28px 0;overflow:hidden;background:var(--nuit)}
.ruban .bande{rotate:-1.2deg;background:#33432E;padding:10px 0;white-space:nowrap}
.ruban .bande div{display:flex;width:max-content;gap:16px;animation:file 40s linear infinite;font:600 16px/1 var(--sans);font-style:italic;text-transform:uppercase;color:#F1F5EF}
@keyframes file{to{transform:translateX(-50%)}}

/* 08 · Programme : appareils + modules */
.programme{padding:30px 0 90px;background:radial-gradient(60% 40% at 50% 20%,#123012,var(--nuit) 70%);overflow:hidden}
.programme .geant{position:absolute;left:0;right:0;top:40px;text-align:center;font:400 clamp(200px,30vw,440px)/1 var(--serif);font-style:italic;color:rgba(255,255,255,.025);white-space:nowrap}
.programme .ecrans{position:relative;z-index:2;width:min(560px,100% - 40px);margin:0 auto -90px}
.programme .ecrans .emplacement{border-radius:12px;border:8px solid #1B1F1A;box-shadow:0 40px 70px rgba(0,0,0,.6)}
.programme .ecrans .socle{height:14px;margin:0 -30px;border-radius:0 0 18px 18px;background:linear-gradient(180deg,#C9CCC6,#7D827A)}
.module-carte{position:relative;width:min(670px,100% - 40px);margin:0 auto;padding:130px 24px 30px;border-radius:16px;border:1px solid rgba(220,228,223,.1);background:linear-gradient(180deg,#203A1C,#0D1A0C 40%)}
.module-carte h2{font-size:15px;margin-bottom:4px}
.module-carte h2 em{display:block;font-size:34px;color:#fff;line-height:1.1}
.module-carte .sous{font-size:11px;color:var(--menthe2);max-width:420px;margin:12px auto 22px}
.modules{display:grid;grid-template-columns:repeat(3,1fr);gap:9px;text-align:left}
.modules li{list-style:none;display:flex;align-items:center;gap:7px;min-height:34px;padding:6px 10px;border-radius:7px;border:1px solid rgba(220,228,223,.12);background:linear-gradient(180deg,#25331F,#1A2617);font-size:10px;line-height:1.3;color:#E3E9E0}
.modules li::before{content:"";width:9px;height:5px;border-left:1.5px solid var(--neon);border-bottom:1.5px solid var(--neon);rotate:-45deg;translate:0 -2px;flex:none}
.module-carte h3{font-size:19px;margin:30px 0 16px}
.module-carte .btn-verre{margin-top:26px}

/* 09 · Pratique : carte et ordinateur */
.pratique{padding:70px 0;border-top:1px solid #1B2A18;overflow:hidden;background:var(--nuit)}
.pratique::before{content:"";position:absolute;left:50%;top:-6px;translate:-50% 0;width:10px;height:10px;border-radius:50%;background:#fff;box-shadow:0 0 0 6px var(--nuit)}
.pratique .fantome{position:absolute;left:-40px;top:0;bottom:0;width:30%;background:radial-gradient(60% 50% at 40% 40%,rgba(87,116,61,.25),transparent 70%)}
.pratique .carte{display:grid;grid-template-columns:1fr 1.15fr;gap:30px;align-items:center;max-width:840px;margin:0 auto;padding:40px 40px;border-radius:14px;border:1px solid rgba(220,228,223,.08);background:linear-gradient(135deg,#1A2617,#0E180D)}
.pratique h2{font-size:clamp(17px,1.5vw,19px);margin-bottom:22px}
.pratique p{font-size:11px;color:var(--doux);margin-bottom:12px}
.ordi{position:relative}
.ordi .emplacement{border-radius:10px 10px 0 0;border:7px solid #111;border-bottom-width:12px}
.ordi .base{height:12px;margin:0 -24px;border-radius:0 0 14px 14px;background:linear-gradient(180deg,#D4D6D2,#8E928B)}
.ordi .sceau{position:absolute;right:-26px;top:-26px;width:80px;height:80px;border-radius:50%;background:radial-gradient(circle,#1F3A1E,#0D1A0C);border:1px solid rgba(220,228,223,.4);display:grid;place-items:center;font:400 30px/1 var(--serif);font-style:italic;color:#fff;box-shadow:0 0 0 6px rgba(87,116,61,.3)}

/* 10 · Le coffre créatif : étiquettes, cartes inclinées */
.coffre{padding:70px 0 80px;border-top:1px solid #1B2A18;background:radial-gradient(60% 50% at 50% 30%,#0F2A0E,var(--nuit) 70%);overflow:hidden}
.coffre .tags{display:flex;gap:8px;justify-content:center;flex-wrap:wrap}
.coffre .tags span{height:22px;padding:0 10px;border-radius:12px;border:1px solid rgba(220,228,223,.4);font:600 9px/20px var(--sans);letter-spacing:.06em;text-transform:uppercase}
.coffre h2{max-width:520px;margin:16px auto 10px;font-size:clamp(20px,2vw,24px)}
.coffre .sous{font-size:11px;color:var(--doux);max-width:420px;margin:0 auto}
.tiroirs{display:grid;grid-template-columns:repeat(4,1fr);gap:0;max-width:640px;margin:46px auto 0;text-align:left}
.tiroir{position:relative;height:250px;padding:16px;border-radius:12px;border:1px solid rgba(220,228,223,.1);background:linear-gradient(180deg,#222D1E,#141D12);box-shadow:0 20px 40px rgba(0,0,0,.5);display:flex;flex-direction:column;justify-content:flex-end}
.tiroir::before{content:"";position:absolute;left:24px;top:-3px;width:70px;height:4px;border-radius:2px;background:#D5DAD1}
.tiroir:nth-child(1){rotate:-2deg}.tiroir:nth-child(2){rotate:2deg;translate:0 -12px;z-index:2}
.tiroir:nth-child(3){rotate:-1deg;translate:0 16px;z-index:1}.tiroir:nth-child(4){rotate:3deg;translate:0 -6px}
.tiroir h3{font:500 14px/1.15 var(--sans);text-transform:uppercase;color:#F1F5EF}
.tiroir p{font-size:9px;color:var(--doux);margin-top:6px;line-height:1.35}
.tiroir .vis{position:absolute;left:16px;right:16px;top:26px;height:110px}
.vis.fonds span{position:absolute;width:60%;height:55%;border-radius:4px}
.vis.fonds span:nth-child(1){left:6%;top:0;background:linear-gradient(135deg,#3D2C6B,#C0532F)}
.vis.fonds span:nth-child(2){left:26%;top:24%;background:linear-gradient(135deg,#E88A55,#5B1E1E)}
.vis.fonds span:nth-child(3){left:14%;top:48%;background:radial-gradient(circle at 40% 40%,#FFC34D,#4A1608 70%)}
.vis.formes{display:grid;place-items:center}
.vis.formes span{width:84px;height:84px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#F5E6B8,#B78A2E 60%,#5B4012);box-shadow:inset 0 0 0 8px #E9E2CF}
.vis.maquettes{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}
.vis.maquettes span:nth-child(odd){background:#2B4A2C}.vis.maquettes span:nth-child(even){background:#1A2A1B}
.vis.maquettes span:nth-child(4){background:radial-gradient(circle at 50% 60%,#245C34 32%,#1A2A1B 33%)}
.vis.textures span{position:absolute;width:70%;height:60%;border-radius:4px;background:linear-gradient(135deg,#F4F4F2,#A8ABA5);box-shadow:0 8px 20px rgba(0,0,0,.4)}
.vis.textures span:nth-child(1){right:0;top:0;background:#2A2F29}
.vis.textures span:nth-child(2){left:0;top:30%}
.mises{display:grid;grid-template-columns:1fr 1fr;gap:50px;align-items:center;max-width:820px;margin:80px auto 0;text-align:left}
.fenetre{position:relative;padding:12px;border-radius:10px;background:#1C2A19;border:1px solid rgba(220,228,223,.12);box-shadow:0 30px 60px rgba(0,0,0,.55)}
.fenetre .haut{display:flex;gap:5px;margin-bottom:10px}
.fenetre .haut i{width:7px;height:7px;border-radius:50%;background:#55604F}
.fenetre .grille{display:grid;grid-template-columns:repeat(4,1fr);gap:7px}
.fenetre .grille span{aspect-ratio:3/4;border-radius:5px;background:linear-gradient(180deg,#34492E,#1A2617);border:1px solid rgba(220,228,223,.08)}
.fenetre .grille span:nth-child(3n){background:linear-gradient(180deg,#DADDD7,#9DA398)}
.fenetre .orbe{position:absolute;right:-24px;top:-30px;width:78px;height:78px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#7CF3A8,#1C8C4A 55%,#0C3B1E);display:grid;place-items:center;font:400 44px/1 var(--serif);font-style:italic;color:#fff;box-shadow:0 0 40px rgba(0,255,113,.45)}
.mises h2{font-size:clamp(20px,1.9vw,23px);margin-bottom:16px}
.mises p{font-size:11.5px;color:var(--doux);margin-bottom:12px}
.mises u{color:var(--menthe2)}

/* 11 · Résultats des élèves : bande claire, carrousel */
.eleves{background:var(--perle);color:var(--encre);padding:30px 0;overflow:hidden}
.eleves .wrap{display:grid;grid-template-columns:280px 1fr;gap:30px;align-items:center}
.eleves h2{font-size:clamp(20px,1.9vw,23px);color:var(--encre);margin-bottom:16px}
.eleves .fleches button{background:#2E4A28}
.piste{display:flex;gap:14px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding:6px 0}
.piste::-webkit-scrollbar{display:none}
.piste .emplacement{flex:0 0 200px;scroll-snap-align:start;border-radius:8px}

/* 12 · Recommandation : texte + deux cercles */
.recommande{padding:80px 0;background:radial-gradient(50% 60% at 70% 40%,#163015,var(--nuit) 70%);overflow:hidden}
.recommande .wrap{display:grid;grid-template-columns:1.1fr 1fr;gap:40px;align-items:center;width:min(840px,100% - 40px)}
.recommande h2{font-size:clamp(19px,1.8vw,22px);margin-bottom:22px}
.recommande p{font-size:11.5px;color:var(--doux);margin-bottom:12px}
.duo{display:flex;justify-content:center}
.duo>div{width:170px;height:170px;border-radius:50%;padding:18px;background:#283A24;box-shadow:0 0 0 1px rgba(220,228,223,.08)}
.duo>div+div{margin-left:-24px}
.duo .rond{width:100%;height:100%;border-radius:50%;overflow:hidden;position:relative;display:grid;place-items:center;background:radial-gradient(circle,#F2F3F0,#C9CDC6)}
.duo .emplacement{border-radius:50%;width:100%;border:0}
.diamant{width:80px;height:70px;clip-path:polygon(25% 0,75% 0,100% 35%,50% 100%,0 35%);background:conic-gradient(from 200deg at 50% 40%,#0B6B3A,#43E08A,#0E8C49,#A6F5C6,#0A5A30,#2FC473,#0B6B3A);filter:drop-shadow(0 10px 10px rgba(0,0,0,.35));animation:brille 6s ease-in-out infinite}
@keyframes brille{50%{filter:drop-shadow(0 10px 10px rgba(0,0,0,.35)) brightness(1.25)}}

/* 13 · Transformation : affiche au centre, avant / après autour */
.transfo{padding:30px 0 70px;background:var(--nuit);overflow:hidden}
.transfo .scene-t{display:grid;grid-template-columns:1fr 230px 1fr;gap:30px;align-items:center;max-width:680px;margin:0 auto;padding:50px 0}
.transfo .affiche{position:relative}
.transfo .affiche .emplacement{border-radius:4px}
.transfo .affiche .icones{display:flex;justify-content:center;gap:10px;margin-top:-16px;position:relative;z-index:2}
.transfo .affiche .icones span{width:28px;height:28px;border-radius:50%;background:#33432E;display:grid;place-items:center;color:#fff;font:600 11px/1 var(--serif)}
.transfo .affiche .icones svg{width:13px;height:13px}
.liste-t{display:grid;gap:22px;text-align:left}
.liste-t p{padding:12px 14px;border-radius:8px;border:1px solid rgba(220,228,223,.1);background:linear-gradient(180deg,#25331F,#1A2617);font-size:10px;line-height:1.45}
.liste-t.avant p::before{content:"× ";color:var(--rouge);font-weight:800}
.liste-t.apres p::before{content:"✓ ";color:var(--neon);font-weight:800}
.transfo h2{font-size:clamp(20px,1.9vw,24px)}

/* 14 · Témoignages : bulles de discussion */
.temoins{background:var(--perle2);color:var(--encre);border-radius:30px 30px 0 0;padding:60px 0 60px;overflow:hidden}
.temoins .compte{display:inline-flex;align-items:center;gap:8px;height:28px;padding:0 14px 0 6px;border-radius:16px;background:#0D1A0C;color:#fff;font-size:12px}
.temoins .compte i{width:18px;height:18px;border-radius:50%;border:2px solid #0D1A0C;margin-left:-8px;background:linear-gradient(135deg,#B98C6A,#5C3A26)}
.temoins .compte i:first-child{margin-left:0}
.temoins h2{color:var(--encre);margin:16px 0 14px;font-size:clamp(22px,2.2vw,26px)}
.temoins .fleches{justify-content:center}
.bulles{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin-top:40px;align-items:start;text-align:left}
.bulle{padding:8px;border-radius:10px;background:#D8DCD5}
.bulle .in{border-radius:8px;background:#16191A;color:#E6E8E4;padding:12px;font-size:10px;line-height:1.45}
.bulle .qui{display:flex;align-items:center;gap:8px;padding-bottom:10px;margin-bottom:10px;border-bottom:1px solid #2A2E2C;font:700 10.5px/1.2 var(--sans)}
.bulle .qui i{width:22px;height:22px;border-radius:50%;background:linear-gradient(135deg,#C59A72,#6C442C);flex:none}
.bulle .msg{padding:9px 10px;border-radius:10px;background:#262B29}
.bulle mark{background:none;color:#E6E8E4;text-decoration:underline 2px #E4D45A}
.bulle .vert{background:#1F3B26}

/* 15 · Mentor : grande carte claire, nom géant */
.mentor{background:var(--perle2);color:var(--encre);padding:0 0 0;overflow:hidden}
.mentor .bloc{position:relative;display:grid;grid-template-columns:1fr 1fr;gap:30px;align-items:center;background:var(--perle);border-radius:0 0 30px 30px;padding:40px 0 60px;overflow:hidden}
.mentor .gauche{position:relative;min-height:560px;background:linear-gradient(180deg,#FBFBFA,#F1F2EF);border-radius:0 160px 0 0;padding:40px 0 0 0}
.mentor .nom-geant{position:absolute;left:50%;translate:-50% 0;top:42%;font:400 clamp(110px,13vw,190px)/1 var(--serif);font-style:italic;color:#C8CCC4;white-space:nowrap}
.mentor .gauche .emplacement{position:relative;z-index:2;width:min(330px,80%);margin:40px auto 0;border-radius:4px}
.mentor .profil{position:absolute;left:8%;top:30px;z-index:3;display:flex;align-items:center;gap:12px;padding:10px 14px;border-radius:12px;background:#fff;box-shadow:0 10px 30px rgba(0,0,0,.1);font-size:10px;color:#333}
.mentor .profil i{width:46px;height:46px;border-radius:50%;background:conic-gradient(#F5B841,#E9447A,#8A3FD6,#F5B841);padding:3px}
.mentor .profil i::before{content:"";display:block;width:100%;height:100%;border-radius:50%;background:#C9CDC6;border:2px solid #fff}
.mentor .profil b{color:#111;display:block;font-size:11.5px}
.mentor .droite-m{padding-right:190px}
.mentor .q{font:400 16px/1 var(--serif);font-style:italic;color:#3B4339}
.mentor h2{font:400 clamp(38px,3.8vw,48px)/1.1 var(--serif);font-style:italic;color:var(--encre);margin:10px 0 22px}
.mentor p{font-size:11.5px;line-height:1.55;color:#3B4339;margin-bottom:12px}
.mentor p b{color:var(--encre)}
.mentor .vertical{position:absolute;right:-110px;top:50%;translate:0 -50%;rotate:-90deg;font:400 clamp(120px,12vw,170px)/1 var(--serif);font-style:italic;color:transparent;-webkit-text-stroke:1.2px #B4BAB0;white-space:nowrap;transform-origin:center;pointer-events:none}

/* 16 · Offre : deux cartes, rubans derrière */
.offre{padding:70px 0 80px;background:radial-gradient(50% 50% at 50% 40%,#123E18,var(--nuit) 70%);overflow:hidden}
.offre h2{max-width:520px;margin:0 auto}
.offre .rubans{position:absolute;left:-5%;right:-5%;top:52%;pointer-events:none}
.offre .rubans div{white-space:nowrap;font:600 22px/1 var(--sans);font-style:italic;text-transform:uppercase;color:rgba(220,228,223,.35);background:rgba(51,67,46,.45);padding:12px 0;rotate:4deg}
.offre .rubans div+div{rotate:-3deg;margin-top:20px}
.plans{position:relative;z-index:2;display:grid;grid-template-columns:repeat(2,minmax(0,290px));justify-content:center;gap:34px;margin-top:40px;text-align:left}
.plan{padding:28px 26px 22px;border-radius:16px;border:1px solid rgba(220,228,223,.18);background:linear-gradient(180deg,#203A1E,#0E1A0D 55%);box-shadow:0 30px 60px rgba(0,0,0,.5)}
.plan.phare{background:linear-gradient(180deg,#2B6A33,#0F2A12 45%,#0B160A);border-color:rgba(0,255,113,.5);box-shadow:0 0 0 1px rgba(0,255,113,.2),0 30px 60px rgba(0,0,0,.5),0 0 60px rgba(0,255,113,.12)}
.plan .tete{display:flex;justify-content:space-between;align-items:flex-start}
.plan .nom{font:400 40px/1 var(--serif);font-style:italic;color:#fff}
.plan .nom small{display:block;font-size:14px;color:var(--menthe2);text-align:right;margin-top:-2px}
.plan .badge{padding:4px 9px;border-radius:10px;background:#fff;color:var(--encre);font:700 8.5px/1 var(--sans);letter-spacing:.06em;text-transform:uppercase}
.plan .prix{display:flex;align-items:baseline;gap:6px;white-space:nowrap;margin:22px 0 12px;color:#fff}
.plan .prix span{font:400 22px/1 var(--serif);font-style:italic}
.plan .prix b{font:700 34px/1 var(--sans);letter-spacing:-.04em;font-style:italic}
.plan .prix small{margin-left:auto;white-space:normal;padding:4px 8px;border-radius:10px;background:rgba(255,255,255,.1);font-size:9px;line-height:1.2;color:var(--clair)}
.plan>p{font-size:10.5px;color:var(--doux)}
.plan h3{font:500 11px/1 var(--sans);color:var(--clair);margin:22px 0 10px}
.plan ul{list-style:none;display:grid;gap:5px;font-size:11px}
.plan li::before{content:"✓ ";color:var(--neon)}
.plan .btn-verre{width:100%;margin-top:22px;padding:0 14px}
.plan .btn{width:100%;margin-top:12px;font-size:12px;padding:0 10px 0 22px}
.plan .btn.doux{background:#8DF0B4}
.plan .paiements{justify-content:center}

/* 17 · Garantie : cadre de visée, sceau qui tourne */
.garantie{padding:30px 0 70px;background:var(--nuit)}
.garantie .carte{display:grid;grid-template-columns:240px 1fr;gap:50px;align-items:center;max-width:650px;margin:0 auto;padding:30px 60px;border-radius:12px;border:1px solid rgba(220,228,223,.12);background:radial-gradient(70% 90% at 30% 40%,#2A3B26,#121C10)}
.garantie .barre-p{display:block;height:3px;width:min(500px,80%);margin:0 auto;border-radius:2px;background:linear-gradient(90deg,transparent,#4CB16A,transparent)}
.sceau7{position:relative;width:190px;height:190px;border-radius:50%;border:8px solid #E9ECE7;display:grid;place-items:center;margin:0 auto}
.sceau7 svg.tour{position:absolute;inset:4px;width:calc(100% - 8px);height:calc(100% - 8px);animation:tourne 22s linear infinite;color:#F1F4EF}
.sceau7 svg.tour text{font:700 10px var(--sans);letter-spacing:.16em;fill:currentColor}
@keyframes tourne{to{rotate:360deg}}
.sceau7 .etoile{width:136px;height:136px;clip-path:polygon(50% 0,60% 40%,100% 50%,60% 60%,50% 100%,40% 60%,0 50%,40% 40%);background:linear-gradient(135deg,#F4F6F2,#9BA597);display:grid;place-items:center;font:800 30px/1 var(--sans);color:var(--encre)}
.garantie h2{font:400 32px/1.1 var(--serif);font-style:italic;color:#fff;margin-bottom:14px}
.garantie p{font-size:12.5px;color:var(--clair)}
.garantie .icones{display:flex;gap:10px;margin-top:20px}
.garantie .icones span{width:22px;height:22px;border-radius:50%;background:#4E5D47;display:grid;place-items:center;font:600 9px/1 var(--serif);color:#fff}
.garantie .icones svg{width:11px;height:11px}

/* 18 · L'espace membres : affiches en serif géant */
.membres{padding:70px 0 90px;background:radial-gradient(60% 60% at 50% 40%,#10260F,var(--nuit) 75%);overflow:hidden}
.membres .tete-m{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center;max-width:840px;margin:0 auto}
.membres h2{font:400 clamp(30px,3vw,36px)/1.1 var(--serif);font-style:italic;color:#fff;margin-bottom:16px}
.membres p{font-size:11.5px;color:var(--clair);margin-bottom:10px}
.membres .lateral{justify-self:center;grid-auto-flow:column;gap:22px;padding:14px 22px;rotate:-3deg}
.affiches{display:grid;grid-template-columns:repeat(5,1fr);gap:14px;margin-top:50px}
.aff{position:relative;aspect-ratio:2/3;padding:14px 12px;border-radius:6px;overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;box-shadow:0 20px 40px rgba(0,0,0,.4)}
.aff.cl{background:linear-gradient(180deg,#E6E7E4,#CFD2CC);color:var(--encre)}
.aff.so{background:linear-gradient(180deg,#183018,#0B160A);color:#fff;border:1px solid rgba(220,228,223,.1)}
.aff small{font:600 8px/1 var(--sans);letter-spacing:.1em;text-transform:uppercase;opacity:.7;display:flex;justify-content:space-between}
.aff .mot{font:400 clamp(30px,3.6vw,46px)/.9 var(--serif);font-style:italic;text-align:center}
.aff.so .mot{color:var(--menthe2)}
.aff .mot span{display:block;font:600 8.5px/1.2 var(--sans);font-style:italic;letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px;color:inherit}
.aff.so .mot span{color:#fff}
.aff .bar{height:3px;width:50%;margin:0 auto;border-radius:2px;background:#5E8A4A}
.aff .orbe{width:64px;height:64px;margin:0 auto;border-radius:50%;background:radial-gradient(circle at 35% 30%,#7CF3A8,#1C8C4A 55%,#0C3B1E);box-shadow:0 0 0 10px rgba(255,255,255,.05),0 0 30px rgba(0,255,113,.35);display:grid;place-items:center;font:400 34px/1 var(--serif);font-style:italic;color:#fff}

/* 19 · Bonus : carrousel, carte centrale */
.bonus{padding:60px 0 80px;border-top:1px solid #1B2A18;background:var(--nuit);overflow:hidden}
.bonus::before{content:"";position:absolute;left:50%;top:-14px;translate:-50% 0;width:26px;height:26px;border-radius:50%;background:#33432E;border:1px solid rgba(220,228,223,.3)}
.bonus h2{font:400 clamp(30px,3vw,36px)/1.1 var(--serif);font-style:italic;color:#fff;margin-bottom:12px}
.bonus .fleches{justify-content:center}
.manege{display:flex;justify-content:center;align-items:center;margin-top:30px}
.manege .lat{width:150px;aspect-ratio:3/4;border-radius:6px;padding:12px;display:flex;flex-direction:column;justify-content:flex-end;font:400 22px/1 var(--serif);font-style:italic;opacity:.55;filter:blur(1px)}
.manege .lat.cl{background:linear-gradient(180deg,#E4E6E2,#B8BCB4);color:var(--encre);margin-right:-14px}
.manege .lat.so{background:linear-gradient(180deg,#2B4A2C,#0F1F10);color:#fff;margin-left:-14px}
.manege .lat.loin{width:110px;opacity:.3}
.manege .centre-b{position:relative;z-index:2;width:220px}
.manege .centre-b .emplacement{border-radius:6px;border:2px solid #E8EBE6}
.manege .centre-b p{position:absolute;left:0;right:0;bottom:12px;z-index:2;font:400 26px/1 var(--serif);font-style:italic;color:#fff;text-shadow:0 2px 12px rgba(0,0,0,.6)}
.manege .centre-b p span{display:block;font:600 7.5px/1.3 var(--sans);font-style:normal;letter-spacing:.06em;text-transform:uppercase;margin-top:4px}

/* 20 · FAQ */
.faq{padding:40px 0 80px;background:var(--nuit)}
.faq .wrap{display:grid;grid-template-columns:240px 1fr;gap:40px;align-items:start;width:min(680px,100% - 40px)}
.faq .carte{padding:20px;border-radius:12px;border:1px solid rgba(220,228,223,.12);background:radial-gradient(80% 60% at 70% 90%,#2C5A2A,#16220F 70%)}
.faq .carte h2{font:400 26px/1.1 var(--serif);font-style:italic;color:#fff;margin:14px 0 10px}
.faq .carte p{font-size:11px;color:var(--clair);margin-bottom:16px}
.faq .carte a{display:flex;align-items:center;justify-content:center;gap:6px;min-height:44px;border-radius:24px;background:#D9DCD7;color:var(--encre);font:800 11px/1 var(--sans);text-transform:uppercase}
.faq .liste{display:grid;gap:12px}
.faq details{border-radius:8px;border:1px solid rgba(220,228,223,.12);background:#1A2618}
.faq summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:14px;min-height:48px;padding:0 18px;font-size:12px;color:#E6ECE3}
.faq summary::-webkit-details-marker{display:none}
.faq summary::after{content:"";width:7px;height:7px;border-right:1.5px solid currentColor;border-bottom:1.5px solid currentColor;rotate:45deg;translate:0 -2px;transition:rotate .3s var(--courbe);flex:none}
.faq details[open] summary::after{rotate:-135deg;translate:0 2px}
.faq details p{padding:0 18px 16px;font-size:11.5px;color:var(--doux)}

/* 21 · Pied */
#pied{background:var(--pied);color:#E3EADF;font-size:10.5px}
#pied .wrap{display:flex;justify-content:space-between;align-items:center;gap:20px;width:min(680px,100% - 40px);padding:22px 0}
#pied .droite{display:flex;gap:6px;text-align:right}
#pied a{text-decoration:underline;text-underline-offset:2px}

@media (max-width:1100px){
  .services .wrap{grid-template-columns:1fr 340px 1fr}
  .mentor .droite-m{padding-right:50px}
  .mentor .vertical{display:none}
}
@media (max-width:900px){
  .hero .wrap{grid-template-columns:1fr;text-align:center}
  .hero .txt{padding-bottom:10px}
  .hero p,.hero h1{margin-inline:auto}
  .paiements{justify-content:center}
  .scene{padding:20px 20px 0 60px;max-width:440px;margin:0 auto;width:100%}
  .scene .arc{display:none}
  .barre{gap:24px;font-size:13px}
  .services .wrap{grid-template-columns:1fr}
  .cote{display:none}
  .verre{border-radius:18px;border-top:1px solid rgba(220,228,223,.14);max-width:420px;margin:0 auto}
  .pour .wrap,.recommande .wrap,.mises,.membres .tete-m{grid-template-columns:1fr;gap:40px}
  .pratique .carte{grid-template-columns:1fr;padding:30px 24px}
  .ordi .sceau{right:-6px}
  .ordi,.fenetre{width:100%;max-width:460px;margin-inline:auto}
  .tiroirs{max-width:560px}
  .eleves .wrap{grid-template-columns:1fr}
  .bulles{grid-template-columns:1fr 1fr}
  .mentor .bloc{grid-template-columns:1fr}
  .mentor .gauche{min-height:0;padding-bottom:20px;border-radius:0 120px 0 0}
  .mentor .droite-m{padding:0 30px}
  .mentor .vertical{display:none}
  .affiches{grid-template-columns:repeat(3,1fr)}
  .faq .wrap{grid-template-columns:1fr}
  .transfo .scene-t{grid-template-columns:1fr 200px 1fr;gap:16px}
}
@media (max-width:640px){
  .logo{font-size:52px}
  .scene{padding-left:50px}
  .scene .lateral{left:0;top:60px;gap:12px;padding:12px 7px;font-size:8.5px}
  .scene .outils{right:-10px}
  .barre{margin-top:-30px;height:50px}
  .barre .cache{display:none}
  .outil-texte{justify-content:space-between;padding:0 12px}
  .outil-texte{gap:60px}
  .outil-texte .zone span:nth-child(n+3),.outil-texte .zone b,.outil-texte .zone i{display:none}
  .douleurs{grid-template-columns:1fr}
  .ressenti .wrap{grid-template-columns:1fr;gap:20px}
  .ressenti .texte-r{order:-1;padding-top:30px}
  .tel{margin:0 auto 0 auto;translate:30px 0}
  .releve{left:-70px;width:290px}
  .chiffre .carte{grid-template-columns:1fr;padding:34px 24px 0;text-align:center}
  .billets{margin:0 auto;width:280px;height:220px}
  .billet{width:220px;height:104px;left:0}
  .billet:nth-child(2){left:4%}.billet:nth-child(3){left:8%}.billet:nth-child(4){left:12%}
  .tiroirs{grid-template-columns:1fr 1fr;gap:18px}
  .tiroir{height:220px}
  .modules{grid-template-columns:1fr}
  .module-carte{padding:110px 16px 26px}
  .programme .ecrans{margin-bottom:-70px}
  .transfo .scene-t{grid-template-columns:1fr;max-width:300px}
  .transfo .affiche{order:-1}
  .bulles{grid-template-columns:1fr}
  .mentor .profil{left:4%}
  .mentor .droite-m{padding:0 20px}
  .plans{grid-template-columns:minmax(0,340px)}
  .offre .rubans{display:none}
  .garantie .carte{grid-template-columns:1fr;padding:40px 26px;text-align:center}
  .garantie .icones{justify-content:center}
  .affiches{grid-template-columns:1fr 1fr}
  .aff:last-child{display:none}
  .membres .lateral{grid-auto-flow:row;grid-template-columns:repeat(3,auto);rotate:0deg}
  .manege .lat.loin{display:none}
  .manege .lat{width:90px}
  .manege .centre-b{width:200px}
  #pied .wrap{flex-direction:column;text-align:center}
  #pied .droite{text-align:center}
}
@media (prefers-reduced-motion:reduce){.ruban .bande div,.sceau7 svg.tour,.curseur,.diamant{animation:none}}
```
