# Prompt · Section « La garantie » du template G « Récit néon »
# Par Yedidia Ruben - Digital Strategist. À coller dans une IA qui code, avec ta page.

Construis une section « La garantie » pour ma page, dans le même esprit que le code de référence plus bas. Garde la structure, le geste et les proportions ; reprends mes couleurs, mes polices et mes textes à moi.

- Son rôle : Retirer le risque : « si ça ne vous va pas, je vous rembourse ».
- Où la placer : Après l'offre.
- Sa structure : Un objet (sceau, médaillon), un titre « le risque est pour moi », 3 lignes, un bouton.
- La règle qui fait la différence : Un objet réel plutôt qu'un bouclier. Une durée chiffrée.
- Animations : attributs data-rv, data-lignes, data-compte, data-incline, data-aimant (moteur anim.js). Sans le moteur, retire-les.
- Aucun tiret long dans les textes. Contraste de 4,5 au moins. Lisible de 360 à 1920 px.

## Le code de référence (HTML)

```html
<section class="garantie" id="garantie">
  <div class="wrap">
    <div class="bande" data-rv>
      <div class="sceau" aria-hidden="true"><b>8</b></div>
      <h2>Garantie<br><span class="o">de 8 jours</span></h2>
      <p>Si, pour une raison ou une autre, vous n'êtes pas satisfaite du contenu ou des premiers résultats, prévenez-nous dans les 8 jours suivant l'achat : nous vous remboursons 100 % du montant.</p>
    </div>
  </div>
</section>
```

## Le CSS du template d'origine (la section en dépend, ne garde que ce qu'elle utilise)

```css
:root{
  --nuit:#09081D; --nuit2:#0E0C2A; --carte:#12103A; --carte-b:#1A1442; --brun:#21111D;
  --orange:#F56610; --orange2:#FF7B2D; --peche:#FFAE6E; --violet:#7B2CF5; --rose:#E0329A;
  --blanc:#fff; --texte:#B9B7CF; --doux:#8E8BAE;
  --filet:rgba(255,123,45,.45); --filet-b:rgba(255,255,255,.1);
  --courbe:cubic-bezier(.16,1,.3,1);
  --titre:'Plus Jakarta Sans',system-ui,sans-serif; --texte-f:'Inter',system-ui,sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:var(--texte-f);font-size:15px;line-height:1.6;color:var(--texte);background:var(--nuit);-webkit-font-smoothing:antialiased;overflow-x:clip}
svg{display:block}
a{color:inherit;text-decoration:none}
h1,h2,h3{font-family:var(--titre);font-weight:700;color:var(--blanc);line-height:1.15;letter-spacing:-.035em}
h2{font-size:clamp(28px,3.2vw,40px)}
.o{color:var(--orange2)}
.wrap{width:min(940px,100% - 40px);margin-inline:auto;position:relative;z-index:1}
section{position:relative}
.centre{text-align:center}
.intro{max-width:560px;margin:16px auto 0;font-size:15px;color:var(--texte)}

/* La grille de fond : filets fins et petites croix, comme un plan de studio */
.grille-fond{background-image:linear-gradient(rgba(120,110,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(120,110,255,.07) 1px,transparent 1px);background-size:96px 96px}

/* Le séparateur : un filet orange avec une pastille à flèche au centre */
.sep{position:relative;height:1px;background:linear-gradient(90deg,transparent,var(--filet) 20%,var(--filet) 80%,transparent)}
.sep span{position:absolute;left:50%;top:50%;translate:-50% -50%;width:22px;height:22px;border-radius:50%;border:1px solid var(--orange2);background:var(--nuit);display:grid;place-items:center}
.sep svg{width:10px;height:10px;color:var(--peche)}

/* Bouton orange */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;height:56px;padding:0 30px;border-radius:12px;
  background:linear-gradient(180deg,#FF8A3D,var(--orange));color:#1A0A00;font:800 14px/1 var(--titre);letter-spacing:-.01em;text-transform:uppercase;
  box-shadow:0 0 0 7px rgba(245,102,16,.16),0 12px 34px rgba(245,102,16,.35);transition:box-shadow .4s var(--courbe)}
.btn:hover{box-shadow:0 0 0 10px rgba(245,102,16,.22),0 16px 44px rgba(245,102,16,.5)}
.btn svg{width:18px;height:18px}
.sur{display:flex;align-items:center;gap:8px;margin-top:14px;font:600 10px/1 var(--texte-f);color:#D9D7EA;text-transform:uppercase;letter-spacing:.02em}

/* Pastille « BONUS » */
.pastille{display:inline-flex;align-items:center;gap:8px;height:34px;padding:0 16px;border-radius:12px;border:1px solid var(--orange2);background:rgba(245,102,16,.1);color:#fff;font:700 14px/1 var(--titre);letter-spacing:.01em}
.pastille i{width:14px;height:14px;border-radius:3px;background:linear-gradient(180deg,#FFB36B,#E0451A);box-shadow:inset 0 -5px 0 rgba(0,0,0,.18)}

/* Logo : l'éclair dégradé et le nom sur deux lignes */
.logo{display:inline-flex;align-items:center;gap:8px;color:#fff}
.logo svg{width:34px;height:52px;filter:drop-shadow(0 0 10px rgba(224,50,154,.55))}
.logo span{font:500 22px/1.05 var(--titre);letter-spacing:-.01em}
.logo b{display:block;font-weight:800;font-size:22px}

/* 01 · Hero : un studio la nuit, néons orange et violets */
.hero{min-height:620px;overflow:hidden;background:
  radial-gradient(40% 55% at 78% 45%,rgba(255,123,45,.55),transparent 70%),
  radial-gradient(35% 50% at 12% 30%,rgba(123,44,245,.55),transparent 70%),
  radial-gradient(30% 40% at 95% 85%,rgba(224,50,154,.4),transparent 70%),
  linear-gradient(180deg,#1A0F3A,#0B0920 85%)}
.hero .decor{position:absolute;inset:0;pointer-events:none}
.hero .decor i{position:absolute;border:2px solid;border-radius:10px;opacity:.55}
.hero .decor .n1{right:9%;top:6%;width:110px;height:110px;border-color:#E0329A;box-shadow:0 0 30px #E0329A}
.hero .decor .n2{left:5%;top:24%;width:90px;height:150px;border-color:#7B6CFF;box-shadow:0 0 24px #7B6CFF;border-radius:4px}
.hero .decor .n3{right:30%;top:7%;font:800 italic 44px/1 'Archivo';border:0;color:#FF4FB1;text-shadow:0 0 18px #FF4FB1}
.hero .decor .lampe{position:absolute;right:16%;top:48%;width:90px;height:90px;border-radius:50%;background:radial-gradient(circle,#FFD7A0,#FF7B2D 45%,transparent 70%);filter:blur(2px)}
.hero .wrap{display:grid;grid-template-columns:1fr 1fr;align-items:center;min-height:620px}
.hero h1{font-size:clamp(28px,2.6vw,34px);line-height:1.18;margin:26px 0 14px;max-width:440px}
.hero p{font-size:15px;color:#E8E6F5;max-width:440px;margin-bottom:28px}
.hero .persona{position:relative;align-self:end;height:560px}
.hero .persona svg{position:absolute;bottom:0;left:50%;translate:-50% 0;height:100%}

/* 02 · Avant, après */
.avant{padding:70px 0 110px}
.duo{display:flex;justify-content:center;gap:50px;margin-top:40px}
.ca{position:relative;width:268px}
.ca::before{content:"";position:absolute;inset:8px -6px -8px 6px;border-radius:16px;background:linear-gradient(180deg,var(--orange2),var(--peche));z-index:-1}
.ca .in{position:relative;padding:22px 24px 28px;border-radius:16px;border:1px solid var(--filet);background:linear-gradient(180deg,#0E0C2A,#0A0920)}
.ca .barre{display:flex;align-items:center;justify-content:space-between;height:32px;padding:0 14px 0 16px;border-radius:16px;border:1px solid rgba(255,255,255,.35);font:700 13px/1 var(--titre);color:#fff}
.ca .points{display:flex;gap:5px}
.ca .points b{width:9px;height:9px;border-radius:50%;border:1px solid #9C99B8}
.ca .points b.on{background:#fff;border-color:#fff}
.ca .photo{position:relative;width:160px;height:166px;margin:24px auto 22px}
.ca .photo::before{content:"";position:absolute;inset:-4px -8px 4px 8px;background:#fff;border-radius:4px;transform:rotate(4deg)}
.ca .photo div{position:absolute;inset:0;border-radius:4px;overflow:hidden;border:4px solid #fff}
.ca .photo svg{position:absolute;bottom:0;left:50%;translate:-50% 0;height:92%}
.ca.avant-nb .photo div{background:linear-gradient(180deg,#9A9A9A,#3E3E3E)}
.ca.apres .photo div{background:linear-gradient(160deg,#2A6BFF,#0B2A8A 60%,#E9ECF7 60%)}
.ca p{font-size:12px;line-height:1.55;text-align:center;color:#E3E1F0}
.secret{display:inline-block;margin-top:46px;padding:12px 44px;border-radius:6px;border:1px dashed var(--filet);background:rgba(33,17,29,.75);font-size:13px;color:#E8E6F5}
.secret u{font-weight:700;color:#fff}

/* Les rubans croisés qui défilent */
.rubans{position:relative;height:230px;overflow:hidden;margin-top:-40px;pointer-events:none}
.ruban{position:absolute;left:-10%;width:120%;padding:12px 0;white-space:nowrap;overflow:hidden;font:800 italic 22px/1 'Archivo',var(--titre);letter-spacing:.02em;text-transform:uppercase}
.ruban div{display:inline-block;animation:defile 38s linear infinite}
.ruban.r1{top:60px;transform:rotate(5deg);background:linear-gradient(90deg,#3A2A3A,#F2C7A6 40%,#FFE3CF 60%,#6B4B4E);color:#2A1A20}
.ruban.r2{top:96px;transform:rotate(-6deg);background:linear-gradient(90deg,#FFB27A,#C86A3A 45%,#3A2D45 75%,#2A2240);color:#2A1206}
.ruban.r2 div{animation-direction:reverse}
@keyframes defile{to{transform:translateX(-50%)}}

/* 03 · Promesse : la boule de cristal et les 4 cartes */
.promesse{padding:20px 0 110px}
.boule{position:relative;width:240px;height:280px;margin:0 auto 30px}
.boule .verre{position:absolute;left:10px;top:0;width:220px;height:220px;border-radius:50%;
  background:radial-gradient(circle at 38% 32%,#FFF3C8 0%,#FFB23D 22%,#F56610 45%,#9B1E8C 75%,#3A1470 100%);box-shadow:0 0 80px rgba(255,140,40,.65),inset -18px -24px 40px rgba(60,10,90,.6);animation:respire 4s ease-in-out infinite}
.boule .verre svg{position:absolute;inset:0;margin:auto;width:84px;height:84px;color:#FFE1A8;filter:drop-shadow(0 0 10px #FFB23D)}
.boule .socle{position:absolute;left:50%;bottom:22px;translate:-50% 0;width:110px;height:34px;border-radius:50% 50% 12px 12px;background:linear-gradient(180deg,#4A3A2A,#1A120C)}
.boule .trait{position:absolute;left:-40px;right:-40px;bottom:8px;height:40px;border:2px solid #FFC14D;border-color:#FFC14D transparent transparent;border-radius:50%;filter:drop-shadow(0 0 6px #FFC14D);transform:rotate(-4deg)}
@keyframes respire{50%{box-shadow:0 0 120px rgba(255,140,40,.85),inset -18px -24px 40px rgba(60,10,90,.6)}}
.quatre{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;max-width:670px;margin:40px auto 0}
.qc{padding:28px 14px 26px;border-radius:14px;background:linear-gradient(180deg,#151236,#0F0D2B);box-shadow:0 20px 40px rgba(0,0,0,.35);transition:translate .4s var(--courbe)}
.qc:hover{translate:0 -4px}
.jeton{width:58px;height:58px;margin:0 auto 18px;border-radius:50%;display:grid;place-items:center;color:#fff;font:800 18px/1 var(--titre);
  background:linear-gradient(135deg,#FF9A3D 0%,#F56610 40%,#C02BC9 70%,#6A2BF5 100%);box-shadow:0 0 0 3px #1C1440,0 0 0 4px rgba(255,255,255,.4),0 8px 22px rgba(245,102,16,.35)}
.jeton svg{width:26px;height:26px}
.qc h3{font:700 12px/1.3 var(--titre);color:var(--orange2);letter-spacing:-.01em}
.qc p{margin-top:8px;font-size:11px;line-height:1.45;color:var(--doux)}

/* 04 · Témoignages : tout est flou ; la carte survolée se révèle */
.temoignages{padding:30px 0 100px}
.temoignages .wrap{width:min(1080px,100% - 40px)}
.mur{columns:3;column-gap:30px;margin-top:56px;text-align:left}
.t{break-inside:avoid;margin-bottom:28px;padding:34px 34px 30px;border-radius:16px;border:1px solid rgba(255,123,45,.3);cursor:default;outline:none;
  background:radial-gradient(90% 60% at 50% 0%,#211C6A,#141055 55%,#0F0C3D)}
.t>*{filter:blur(5px);transition:filter .5s var(--courbe)}
.t:hover>*,.t:focus>*,.t:focus-within>*{filter:none}
.t:focus-visible{box-shadow:0 0 0 2px var(--orange2)}
.t h3{font:700 15px/1.4 var(--titre);color:var(--orange2);margin-bottom:16px}
.t p{font-size:13px;line-height:1.7;color:#D3D1E6}
.t .qui-t{display:flex;align-items:center;gap:12px;margin-top:22px;font:700 14px/1 var(--titre);color:#fff}
.t .qui-t span{width:32px;height:32px;border-radius:50%;background:radial-gradient(circle at 40% 35%,#F7D6B8,#A0663E 60%,#3A2010)}
.astuce{display:inline-flex;align-items:center;gap:8px;margin-top:14px;font-size:13px;color:var(--doux)}
.astuce svg{width:16px;height:16px;color:var(--peche)}

/* 05 · Les 4 étapes en éventail */
.etapes{padding:80px 0 120px}
.eventail{display:flex;justify-content:center;margin-top:60px;padding:0 20px}
.ec{position:relative;width:196px;flex:none;margin-inline:-14px;padding:0 0 22px;border-radius:14px;overflow:hidden;
  background:linear-gradient(180deg,#2A1F5E,#141043);border:1px solid rgba(255,255,255,.12);box-shadow:0 30px 50px rgba(0,0,0,.5);text-align:center;transition:transform .5s var(--courbe),z-index 0s .25s}
.ec::before{content:"";position:absolute;top:0;left:22px;width:90px;height:5px;background:var(--orange2);z-index:2}
.ec,.anime .ec[data-rv]{transition:rotate .5s var(--courbe),translate .5s var(--courbe),scale .5s var(--courbe),opacity .8s var(--courbe),transform .8s var(--courbe)}
.ec:nth-child(1){rotate:-6deg;translate:0 10px}
.ec:nth-child(2){rotate:-2deg;translate:0 -14px;z-index:2}
.ec:nth-child(3){rotate:3deg;translate:0 8px;z-index:1}
.ec:nth-child(4){rotate:7deg;translate:0 -6px}
.ec:hover{rotate:0deg;translate:0 -22px;scale:1.04;z-index:5}
.ec .img{height:170px;position:relative;overflow:hidden}
.ec .img svg{position:absolute;bottom:0;left:50%;translate:-50% 0;height:92%}
.ec:nth-child(1) .img{background:radial-gradient(circle at 50% 30%,#FFD9A0,#B5562A 50%,#2A1240)}
.ec:nth-child(2) .img{background:radial-gradient(circle at 60% 35%,#FFB86B,#6A2A12 55%,#160F2E)}
.ec:nth-child(3) .img{background:radial-gradient(circle at 50% 30%,#E7C3B0,#7A4A5A 55%,#1E1438)}
.ec:nth-child(4) .img{background:radial-gradient(circle at 50% 40%,#FF4F7A,#7A1C6A 55%,#1E1050)}
.ec h3{margin:16px 0 8px;font:800 15px/1.1 var(--titre);text-transform:uppercase;letter-spacing:.01em}
.ec h3 span{display:block;color:var(--orange2)}
.ec p{padding:0 14px;font-size:10.5px;line-height:1.5;color:#C9C6E0}

/* 06 · Bonus */
.bonus{padding:60px 0 120px}
.bloc-bonus{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:center;padding:60px 0}
.bloc-bonus h2{margin:24px 0 26px}
.bloc-bonus p{font-size:14px;line-height:1.75;color:#D3D1E6;margin-bottom:18px;max-width:330px}
.ecran{position:relative;height:330px}
.ecran .portable{position:absolute;left:4%;right:12%;bottom:0;height:56%;transform:skewX(-10deg) rotate(-8deg);border-radius:10px;background:linear-gradient(180deg,#DDE2F2,#7E87A8);box-shadow:0 30px 50px rgba(0,0,0,.6)}
.ecran .fen{position:absolute;border-radius:6px;border:3px solid #E9ECF5;overflow:hidden;box-shadow:0 24px 40px rgba(0,0,0,.55)}
.ecran .f1{left:0;top:6%;width:62%;height:54%;transform:rotate(-8deg);background:linear-gradient(160deg,#7A4A30,#2A1A14)}
.ecran .f2{left:36%;top:10%;width:46%;height:62%;transform:rotate(-8deg);background:linear-gradient(180deg,#15123A,#07061A);z-index:-1}
.ecran .f1 svg{position:absolute;bottom:0;height:86%}
.ecran .f1 svg:first-child{left:16%}
.ecran .f1 svg:last-child{left:52%}
.ecran .eclair{position:absolute;right:16%;top:24%;width:46px;height:80px;filter:drop-shadow(0 0 14px #E0329A)}
.cartes-plan{display:flex;justify-content:center;gap:18px;margin-top:40px;align-items:flex-end}
.plan{width:190px;border-radius:10px;overflow:hidden;background:#1C1B2A;box-shadow:0 20px 40px rgba(0,0,0,.5)}
.plan .tete{height:62px;padding:10px;display:flex;align-items:flex-end;font:800 11px/1 var(--titre);color:#fff;text-transform:uppercase;background:radial-gradient(circle at 70% 30%,#FFB23D,#E0329A 40%,#5A2BD8 75%)}
.plan .ligne-p{margin:10px;height:40px;border-radius:6px;background:#2A2940;position:relative}
.plan .ligne-p::before{content:"";position:absolute;left:10px;top:10px;width:46px;height:9px;border-radius:3px;background:var(--orange2)}
.plan .ligne-p.b::before{background:#3D7BFF}
.plan:nth-child(1){transform:rotate(-4deg)}
.plan:nth-child(3){transform:rotate(3deg)}
.plan.icone{width:80px;height:80px;display:grid;place-items:center;background:linear-gradient(180deg,#2E8BFF,#0B5ED7);border-radius:14px;align-self:center;transform:rotate(-3deg)}
.plan.icone i{width:44px;height:44px;display:flex;gap:6px}
.plan.icone i::before,.plan.icone i::after{content:"";flex:1;background:#fff;border-radius:3px}
.plan.icone i::after{height:62%}
.montage{position:relative;width:268px;height:420px;margin:0 auto;padding:16px;border-radius:30px;border:1px solid var(--orange2);background:rgba(245,102,16,.1);box-shadow:0 0 40px rgba(245,102,16,.25)}
.montage .tel{position:relative;height:100%;border-radius:22px;overflow:hidden;border:2px solid #3A2A2A;background:radial-gradient(circle at 50% 35%,#C98060,#5A3024 55%,#1A0F0C)}
.montage .tel b{position:absolute;left:20px;top:22px;font:800 34px/.9 var(--titre);color:#fff;letter-spacing:-.04em}
.montage .tel b em{display:block;font:italic 400 30px/1 Georgia,serif;margin-left:40px}
.montage .tel svg.p{position:absolute;bottom:20%;left:50%;translate:-50% 0;height:62%}
.montage .piste{position:absolute;left:10px;right:10px;bottom:20px;height:56px}
.montage .piste i{position:absolute;left:0;right:30%;top:0;height:24px;border-radius:4px;border:2px solid var(--orange2);background:repeating-linear-gradient(90deg,#6A4030 0 22px,#8A5A44 22px 24px)}
.montage .piste u{position:absolute;left:12%;right:0;bottom:0;height:22px;border-radius:4px;background:repeating-linear-gradient(90deg,#FF8A3D 0 2px,#F56610 2px 5px)}
.appli{position:absolute;right:-30px;top:110px;width:76px;height:76px;border-radius:18px;background:linear-gradient(180deg,#2A2A2A,#0A0A0A);border:1px solid #555;display:grid;place-items:center;box-shadow:0 14px 30px rgba(0,0,0,.6)}
.appli svg{width:40px;height:40px;color:#fff}
.discord{position:relative;max-width:640px;margin:40px auto 0;height:380px}
.discord .salons{position:absolute;left:0;top:30px;width:190px;padding:20px 18px;border-radius:14px;border:1px solid var(--filet);background:#0E0C2A;font:600 11px/1 var(--texte-f);color:#fff;z-index:2}
.discord .salons span{display:block;margin-top:13px;color:#8E8BAE;font-weight:500}
.discord .salons span::before{content:"# ";color:var(--orange2)}
.discord .salons span.on{background:#1C1946;color:#fff;padding:5px 8px;margin-inline:-8px;border-radius:4px}
.discord .video{position:absolute;left:22%;right:6%;top:0;bottom:60px;padding:10px;border-radius:20px;border:1px solid var(--orange2);background:linear-gradient(180deg,#FFB27A,var(--orange))}
.discord .video div{position:relative;height:100%;border-radius:12px;overflow:hidden;background:radial-gradient(circle at 60% 30%,#F0C8A0,#8A5A44 50%,#2A1814)}
.discord .video svg{position:absolute;bottom:0;height:80%}
.discord .video svg:first-child{left:14%}
.discord .video svg:last-child{left:48%}
.discord .appel{position:absolute;right:0;bottom:30px;display:flex;gap:12px;padding:12px 16px;border-radius:16px;border:1px solid var(--filet);background:#0E0C2A;z-index:2}
.discord .appel i{width:40px;height:40px;border-radius:50%;background:#2A2850}
.discord .appel i:last-child{background:#E5484D}
.discord .bulle{position:absolute;right:-20px;top:90px;width:84px;height:64px;border-radius:26px 26px 30px 30px;background:#5865F2;box-shadow:0 14px 30px rgba(88,101,242,.4)}
.discord .bulle::before,.discord .bulle::after{content:"";position:absolute;top:24px;width:12px;height:14px;border-radius:50%;background:#0E0C2A}
.discord .bulle::before{left:22px}.discord .bulle::after{right:22px}

/* 07 · Offre : la carte avec sa plaque pêche et le panneau qui dépasse derrière */
.offre{padding:80px 0 60px}
.offre .wrap{display:grid;grid-template-columns:200px 300px 260px;justify-content:center;align-items:center}
.alerte{text-align:right;padding-right:40px}
.alerte .att{display:inline-flex;align-items:center;gap:10px;font:800 13px/1 var(--titre);color:#fff}
.alerte .att i{width:34px;height:34px;border-radius:50%;background:radial-gradient(circle,#FFB27A,var(--orange));display:grid;place-items:center;font-style:normal;font-size:18px;color:#fff;box-shadow:0 0 0 3px var(--nuit),0 0 0 4px #fff}
.alerte h2{font-size:24px;margin:22px 0 18px}
.alerte small{font-size:11px;color:#E3E1F0}
.prix-c{position:relative;z-index:2}
.prix-c::before{content:"";position:absolute;inset:-12px 8px 10px -12px;border-radius:16px;background:linear-gradient(180deg,var(--orange2),var(--peche));z-index:-1}
.prix-c .in{padding:30px 22px 22px;border-radius:16px;border:1px solid var(--filet);background:linear-gradient(180deg,#141136,#0B0A22);text-align:center}
.prix-c .de{margin-top:24px;font:700 15px/1 var(--titre);color:#D9D7EA}
.prix-c .grand{display:block;margin:10px 0 6px;font:800 54px/1 var(--titre);letter-spacing:-.04em;background:linear-gradient(180deg,#fff 40%,#9A97B6);-webkit-background-clip:text;background-clip:text;color:transparent}
.prix-c .ou{font:700 15px/1 var(--titre);color:#D9D7EA}
.cartes-pay{display:flex;justify-content:center;gap:14px;margin:22px 0 20px;opacity:.55}
.cartes-pay i{width:30px;height:12px;border-radius:2px;background:#8E8BAE}
.prix-c .sur{justify-content:center;font-size:8px}
.prix-c .btn{padding:0 20px;font-size:13px;white-space:nowrap}
.liste-c{position:relative;margin-left:-14px;padding:30px 26px 40px 40px;border-radius:0 16px 16px 0;border:1px solid var(--filet);border-left:0;background:linear-gradient(90deg,#1A1028,#100D26)}
.liste-c::after{content:"";position:absolute;left:30%;right:30%;bottom:0;height:4px;background:var(--orange2);box-shadow:0 -10px 30px rgba(245,102,16,.6)}
.liste-c h3{font:700 11px/1 var(--titre);text-decoration:underline;margin-bottom:20px;color:#fff}
.liste-c ul{list-style:none;display:grid;gap:12px;font-size:11px;color:#E3E1F0}
.liste-c li{display:flex;align-items:center;gap:10px}
.liste-c li::before{content:"";width:9px;height:5px;border-left:2px solid #fff;border-bottom:2px solid #fff;transform:rotate(-45deg) translateY(-2px)}
.liste-c li:nth-child(even)::before{border-color:var(--orange2)}
.liste-c .cadeau{width:18px;height:18px;border-radius:50%;border:1px solid #3FBF7A;display:inline-grid;place-items:center}
.liste-c .cadeau::before{content:"";width:8px;height:8px;border-radius:2px;background:var(--orange2)}

/* 08 · Garantie */
.garantie{padding:40px 0 100px}
.bande{display:grid;grid-template-columns:150px 1fr 1.3fr;gap:44px;align-items:center;padding:30px 40px;border-radius:16px;border:1px solid var(--filet);background:linear-gradient(90deg,#1E1424,#140F26)}
.sceau{width:132px;height:132px;display:grid;place-items:center;background:var(--peche);clip-path:polygon(50% 0,61% 8%,75% 5%,80% 18%,93% 25%,90% 39%,100% 50%,90% 61%,93% 75%,80% 82%,75% 95%,61% 92%,50% 100%,39% 92%,25% 95%,20% 82%,7% 75%,10% 61%,0 50%,10% 39%,7% 25%,20% 18%,25% 5%,39% 8%)}
.sceau b{width:96px;height:96px;border-radius:50%;border:2px solid #1A0A00;display:grid;place-items:center;font:800 54px/1 var(--titre);color:#1A0A00;background:#FFE1C9}
.bande h2{font-size:34px}
.bande p{font-size:13px;line-height:1.7;color:#D3D1E6}

/* 09 · Qui */
.qui{min-height:560px;overflow:hidden;background:radial-gradient(40% 60% at 75% 50%,rgba(245,102,16,.45),transparent 70%),radial-gradient(30% 40% at 95% 20%,rgba(224,50,154,.35),transparent 70%)}
.qui .wrap{display:grid;grid-template-columns:1fr 1fr;align-items:end;min-height:560px}
.qui .txt{padding:90px 0}
.qui .sur-t{font:600 13px/1 var(--titre);color:var(--orange2);text-transform:uppercase;letter-spacing:-.01em}
.qui h2{font-size:42px;margin:22px 0 26px}
.qui p{font-size:13.5px;line-height:1.75;color:#D3D1E6;margin-bottom:20px;max-width:310px}
.qui p em{font-style:normal;color:var(--peche)}
.qui .persona{position:relative;height:520px}
.qui .persona svg{position:absolute;bottom:0;left:50%;translate:-50% 0;height:100%}
.qui .neon{position:absolute;right:4%;top:14%;width:120px;height:120px;border-radius:50%;border:3px solid #FF4F7A;box-shadow:0 0 30px #FF4F7A;opacity:.6}

/* 10 · FAQ */
.faq{padding:90px 0 100px;border-top:1px solid var(--filet)}
.faq .wrap{display:grid;grid-template-columns:1fr 1.2fr;gap:70px}
.faq h2{font-size:38px;margin:22px 0 20px}
.faq .gauche p{font:500 14px/1.6 var(--titre);color:#E3E1F0;margin-bottom:34px;max-width:300px}
.btn-wa{display:inline-flex;align-items:center;gap:10px;height:44px;padding:0 22px;border-radius:12px;background:linear-gradient(90deg,#8CF59A,#D8FBDC 55%,#8CF59A);color:#06210C;font:800 13px/1 var(--titre);text-transform:uppercase;box-shadow:0 0 0 8px rgba(140,245,154,.12)}
.btn-wa svg{width:16px;height:16px}
.questions{display:grid;gap:18px}
.questions details{border-radius:12px;border:1px solid var(--filet);background:linear-gradient(90deg,#22121F,#170F24)}
.questions summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:20px;padding:16px 20px;font:600 15px/1.3 var(--titre);color:#fff;letter-spacing:-.02em}
.questions summary::-webkit-details-marker{display:none}
.questions summary::after{content:"+";font:300 26px/1 var(--texte-f);color:#fff;transition:rotate .3s var(--courbe)}
.questions details[open] summary::after{rotate:45deg}
.questions details p{padding:0 20px 20px;font-size:13px;color:#C9C6E0}

/* 11 · Pied : la bande orange */
#pied{background:linear-gradient(90deg,var(--peche),var(--orange2));color:#2A1206}
#pied .wrap{display:flex;justify-content:space-between;align-items:center;gap:24px;min-height:58px;padding:14px 0;font:500 13px/1.5 var(--titre)}
#pied .droite{text-align:right}
#pied .droite a{margin-left:14px}

@media (max-width:820px){
  .hero .wrap{grid-template-columns:1fr;text-align:center;padding-top:50px}
  .hero h1,.hero p{margin-inline:auto}
  .hero .sur{justify-content:center}
  .hero .persona{height:380px}
  .duo{flex-direction:column;align-items:center;gap:40px}
  .quatre{grid-template-columns:1fr 1fr}
  .mur{columns:1}
  .eventail{flex-wrap:wrap;gap:30px}
  .ec{margin-inline:0}
  .bloc-bonus{grid-template-columns:1fr;gap:40px;padding:40px 0}
  .bloc-bonus .ordre{order:-1}
  .appli{right:-10px}
  .discord .salons{width:150px}
  .offre .wrap{grid-template-columns:minmax(0,320px);gap:30px}
  .alerte{text-align:center;padding:0}
  .liste-c{margin:0;border-radius:16px;border-left:1px solid var(--filet)}
  .bande{grid-template-columns:1fr;text-align:center;justify-items:center;gap:20px}
  .qui .wrap{grid-template-columns:1fr}
  .qui .txt{padding:70px 0 10px}
  .qui .persona{height:380px}
  .faq .wrap{grid-template-columns:1fr;gap:40px}
  #pied .wrap{flex-direction:column;text-align:center}
  #pied .droite{text-align:center}
}
@media (max-width:480px){
  .ec{width:100%;max-width:260px}
  .ec:nth-child(n){rotate:0deg;translate:none}
  .discord{height:320px}
  .discord .salons{display:none}
  .discord .video{left:0}
  .plan{width:130px}
}
@media (prefers-reduced-motion:reduce){.ruban div,.boule .verre{animation:none}}
```
