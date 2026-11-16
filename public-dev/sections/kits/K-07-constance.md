# Prompt · Section « Le contenu » du template K « Bascule menthe »
# Par Yedidia Ruben - Digital Strategist. À coller dans une IA qui code, avec ta page.

Construis une section « Le contenu » pour ma page, dans le même esprit que le code de référence plus bas. Garde la structure, le geste et les proportions ; reprends mes couleurs, mes polices et mes textes à moi.

- Son rôle : Rendre l'offre concrète, morceau par morceau.
- Où la placer : Après la bascule. Peut s'étaler sur plusieurs sections (piliers).
- Sa structure : Un titre, puis une grille de cartes, une liste numérotée, un carrousel, ou un pilier par section.
- La règle qui fait la différence : Un titre court par carte, jamais un paragraphe. Une rangée qui déborde dit « il y en a plus ».
- Le geste de cette variante : Vidéo dans l'ordinateur, bouton menthe
- Animations : attributs data-rv, data-lignes, data-compte, data-incline, data-aimant (moteur anim.js). Sans le moteur, retire-les.
- Aucun tiret long dans les textes. Contraste de 4,5 au moins. Lisible de 360 à 1920 px.

## Le code de référence (HTML)

```html
<section class="constance grille" id="constance">
  <div class="wrap">
    <div class="ecran" data-rv>
      <div class="emplacement" data-img="K-video" data-format="16:9" data-alt="Leçon vidéo : Awa Sangaré face caméra, titre de la première leçon"></div>
      <button class="lecture" type="button" aria-label="Lire la vidéo de présentation"><svg><use href="#lecture"/></svg></button>
      <div class="socle" aria-hidden="true"></div>
    </div>
    <div class="txt-c">
      <h2 data-rv>Une régularité qui donne<br><span class="v">des résultats durables</span></h2>
      <p data-rv>Plus qu'un élan passager, cette méthode construit une routine solide qui tient.</p>
      <p data-rv>Chaque petit progrès s'additionne avec le temps et donne des résultats réels, sans dépendre des seuls jours de motivation.</p>
    </div>
  </div>
</section>
```

## Le CSS du template d'origine (la section en dépend, ne garde que ce qu'elle utilise)

```css
:root{
  --fond:#0D0C0F; --fond2:#101113; --carte:#1C1C1C; --carte-h:#333333; --filet:#2A2A2D; --tuile:#2B2B2E;
  --menthe:#01F6B3; --menthe-v:#11F7CE; --menthe-p:#83FBDE; --menthe-f:#00D7A1; --piste:#1E312F; --encre-m:#00261C;
  --rouge:#4D0108; --rouge-c:#E5484D; --or:#FCDB49; --gris:#8D8D8D; --texte:#C9CACD; --doux:#9B9CA1; --blanc:#FAFAFA;
  --courbe:cubic-bezier(.16,1,.3,1); --police:'Geist',system-ui,sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:var(--police);font-size:15px;line-height:1.55;color:var(--texte);background:var(--fond);-webkit-font-smoothing:antialiased;overflow-x:clip}
svg{display:block}
a{color:inherit;text-decoration:none}
h1,h2,h3{font-weight:500;line-height:1.15;letter-spacing:-.025em;color:#fff}
.wrap{width:min(1100px,100% - 40px);margin-inline:auto;position:relative;z-index:1}
section{position:relative}
.centre{text-align:center}
.m{color:var(--menthe-v)}

/* Titre en deux tons : 1re ligne grise en dégradé, 2e ligne menthe */
.deux{font-size:clamp(28px,2.9vw,38px)}
.deux .g{display:block;background:linear-gradient(90deg,#7E7E82,#D7D7DA 60%,#8D8D8D);-webkit-background-clip:text;background-clip:text;color:transparent}
.deux .v{display:block;color:var(--menthe-v)}
.sous{font-size:15px;color:#E6E6E8;margin-top:12px}

/* Pastille d'en-tête */
.pill{display:inline-flex;align-items:center;gap:6px;height:30px;padding:0 18px;border-radius:20px;border:1px solid #4A4A4E;background:linear-gradient(180deg,#2C2C30,#1A1A1D);font:500 11px/1 var(--police);letter-spacing:.06em;text-transform:uppercase;color:#E6E6E8}
.pill svg{width:11px;height:11px;color:var(--menthe)}
.pill.blanc{background:#fff;color:#0D0C0F;border-color:#fff;letter-spacing:.16em;font-weight:600}

/* Bouton : rectangle menthe en dégradé, coins 4 px, flèche */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:46px;padding:0 22px;border-radius:4px;
  background:linear-gradient(90deg,var(--menthe-f),var(--menthe-p) 50%,var(--menthe-f));background-size:200% 100%;color:var(--encre-m);
  font:600 12.5px/1.2 var(--police);text-transform:uppercase;letter-spacing:.01em;box-shadow:0 0 0 1px rgba(131,251,222,.4),0 10px 40px rgba(1,246,179,.28);transition:background-position .8s var(--courbe),box-shadow .4s}
.btn:hover{background-position:100% 0;box-shadow:0 0 0 1px rgba(131,251,222,.6),0 14px 50px rgba(1,246,179,.4)}
.btn svg{width:14px;height:14px}

/* Tuile d'icône : carré sombre, icône menthe */
.tuile{width:46px;height:46px;border-radius:9px;background:linear-gradient(180deg,#38383C,#232326);border:1px solid #47474B;display:grid;place-items:center;color:var(--menthe);box-shadow:0 8px 20px rgba(0,0,0,.4)}
.tuile svg{width:22px;height:22px}

/* Lignes verticales de fond */
.grille{background-image:repeating-linear-gradient(90deg,transparent 0 161px,rgba(255,255,255,.035) 161px 162px);background-position:center}

/* Emplacements d'image */
.emplacement{position:relative;overflow:hidden;aspect-ratio:3/4;border-radius:10px;background:radial-gradient(110% 80% at 70% 15%,#123C34,#0E1513 60%,#0D0C0F);border:1px solid rgba(131,251,222,.14)}
.emplacement[data-format="16:9"]{aspect-ratio:16/9}.emplacement[data-format="4:3"]{aspect-ratio:4/3}
.emplacement[data-format="1:1"]{aspect-ratio:1/1}.emplacement[data-format="9:16"]{aspect-ratio:9/16}
.emplacement::after{content:attr(data-format);position:absolute;left:50%;top:50%;translate:-50% -50%;padding:5px 12px;border-radius:4px;border:1px solid rgba(131,251,222,.3);font:500 11px/1 var(--police);letter-spacing:.14em;color:rgba(131,251,222,.75)}
.emplacement:has(img)::after{display:none}

/* Interrupteur : le geste de K */
.bascule{position:relative;flex:none;width:40px;height:24px;border-radius:14px;border:0;cursor:pointer;background:#3A3A3E;box-shadow:inset 0 1px 3px rgba(0,0,0,.5);transition:background .4s var(--courbe),box-shadow .4s}
.bascule::after{content:"";position:absolute;left:3px;top:3px;width:18px;height:18px;border-radius:50%;background:#D8DBDA;box-shadow:0 2px 5px rgba(0,0,0,.4);transition:translate .4s var(--courbe)}
.bascule[aria-checked="true"]{background:linear-gradient(90deg,#00B98A,var(--menthe));box-shadow:0 0 18px rgba(1,246,179,.45)}
.bascule[aria-checked="true"]::after{translate:16px 0}
.bascule::before{content:"";position:absolute;inset:-10px}

/* 01 · Hero */
.hero{min-height:620px;background:radial-gradient(50% 70% at 72% 30%,#0E3A33,transparent 70%),linear-gradient(90deg,#030605 30%,#06120F);overflow:hidden;border-bottom:1px solid rgba(1,246,179,.6);box-shadow:0 1px 30px rgba(1,246,179,.3)}
.hero::before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(90deg,transparent 0 60px,rgba(1,246,179,.035) 60px 61px);-webkit-mask-image:linear-gradient(90deg,transparent 40%,#000);mask-image:linear-gradient(90deg,transparent 40%,#000)}
.hero .wrap{display:grid;grid-template-columns:1fr 1.05fr;gap:30px;align-items:end;min-height:620px;width:min(1000px,100% - 40px)}
.hero .txt{align-self:center;padding:60px 0}
.logo{display:flex;align-items:center;gap:12px;margin-bottom:30px;color:var(--menthe)}
.logo svg{width:52px;height:52px}
.logo span{font:300 20px/1 var(--police);font-style:italic;letter-spacing:.02em;color:#E6E6E8;text-transform:uppercase}
.logo b{display:block;font:600 26px/1 var(--police);color:var(--menthe);letter-spacing:.01em;font-style:normal}
.hero h1{font-size:clamp(30px,3vw,40px);font-weight:600;margin-bottom:20px}
.hero p{font-size:15.5px;color:#E6E6E8;max-width:400px;margin-bottom:30px}
.scene{position:relative;align-self:end}
.scene .emplacement{width:min(420px,100%);margin-left:auto;border-radius:0;border:0;-webkit-mask-image:linear-gradient(180deg,#000 70%,transparent);mask-image:linear-gradient(180deg,#000 70%,transparent)}
.scene .tuiles{position:absolute;right:4%;top:20%;display:grid;gap:14px;z-index:2}
.scene .tuiles span{width:70px;height:70px;border-radius:10px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.18);backdrop-filter:blur(8px);display:grid;place-items:center;color:#EFFFFA}
.scene .tuiles span svg{width:34px;height:34px}
.scene .bulle{position:absolute;border-radius:50%;background:radial-gradient(circle at 35% 35%,#7FF8DA,#0B6E5A);box-shadow:0 0 20px rgba(1,246,179,.5)}

/* 02 · Ascension : trois piliers */
.ascension{padding:70px 0 40px}
.piliers{display:grid;grid-template-columns:repeat(3,1fr);gap:40px;max-width:720px;margin:56px auto 0}
.piliers .tuile{margin:0 auto 20px}
.piliers h3{font-size:15px;font-weight:600;color:var(--menthe-v);letter-spacing:-.01em;margin-bottom:6px}
.piliers p{font-size:13px;color:#D4D5D8}

/* 03 · Duel : rouge contre menthe */
.duel{padding:90px 0 90px}
.colonnes{display:grid;grid-template-columns:1fr 1fr;gap:24px;max-width:640px;margin:46px auto 0;text-align:left}
.colonnes>div{display:grid;gap:22px}
.colonnes p{display:flex;align-items:center;gap:12px;min-height:64px;padding:12px 18px;border-radius:5px;font-size:11.5px;line-height:1.4;color:#EDEDEF}
.colonnes .non p{border:1px solid #6A1A20;background:linear-gradient(90deg,#3B0A0F,#160B0D 70%)}
.colonnes .oui p{border:1px solid #145247;background:linear-gradient(90deg,#062E27,#0D1513 70%)}
.colonnes i{flex:none;width:20px;height:20px;border-radius:50%;display:grid;place-items:center;font:700 10px/1 var(--police);font-style:normal}
.colonnes .non i{background:#C62F3A;color:#FFE1E2}
.colonnes .oui i{background:#0A5C4F;color:var(--menthe)}

/* 04 · Ordre : ordinateur et calendrier */
.ordre{padding:70px 0 70px;border-top:1px solid #1A1A1D;overflow:hidden}
.portable{position:relative;width:min(500px,100% - 40px);margin:40px auto 0}
.portable .dalle{aspect-ratio:16/9;border-radius:14px 14px 0 0;border:8px solid #1A1A1C;border-bottom:0;background:#1E1E21;padding:10px;display:grid;grid-template-columns:70px 1fr 70px;gap:8px;overflow:hidden}
.cal-g{display:grid;gap:5px;align-content:start}
.cal-g i{height:4px;border-radius:2px;background:#3A3A3E}
.cal-g i:nth-child(3n){width:60%}
.cal{display:grid;grid-template-columns:repeat(7,1fr);gap:4px;align-content:start;padding-top:12px;position:relative}
.cal::before{content:"Novembre 2026";position:absolute;left:0;top:-3px;font:600 7px/1 var(--police);color:#E6E6E8}
.cal span{height:62px;border-radius:3px;background:#252528;border:1px solid #2E2E32}
.cal span.r{background:linear-gradient(180deg,#7A3E46,#4B2A30)}.cal span.v{background:linear-gradient(180deg,#3E7A5A,#2A4B3A)}
.cal span.o{background:linear-gradient(180deg,#8A5A3E,#5A3A2A);height:30px}
.portable .base{height:70px;margin:0 -34px;border-radius:0 0 30px 30px;background:linear-gradient(180deg,#1F1F22,#0F0F11);-webkit-mask-image:linear-gradient(180deg,#000,transparent);mask-image:linear-gradient(180deg,#000,transparent)}
.dock{position:relative;display:flex;gap:16px;width:max-content;margin:-46px auto 0;padding:12px 26px;border-radius:30px;background:#2A2A2D;border:1px solid #3E3E42}
.dock span{width:32px;height:32px;border-radius:8px;display:grid;place-items:center;font:700 13px/1 var(--police)}
.dock span:nth-child(1){background:#fff;color:#111;border:2px solid #111}
.dock span:nth-child(2){background:#111;color:#fff;border:2px solid #fff}
.dock span:nth-child(3){background:linear-gradient(135deg,#2A7BE4 50%,#1BA261 50%);color:#fff}
.dock span:nth-child(4){background:linear-gradient(160deg,#B78BFF,#5B2BC9);clip-path:polygon(50% 0,100% 30%,85% 100%,15% 100%,0 30%)}

/* 05 · Réglages : la carte à interrupteurs */
.reglages{padding:90px 0;border-top:1px solid #1A1A1D}
.reglages .wrap{display:grid;grid-template-columns:310px 1fr;gap:60px;align-items:center;width:min(640px,100% - 40px)}
.panneau{padding:20px 28px;border-radius:12px;border:1px solid #2E2E32;background:linear-gradient(180deg,#1E1E21,#141416);box-shadow:0 30px 60px rgba(0,0,0,.5)}
.panneau .ligne-r{display:flex;align-items:center;gap:16px;padding:12px 0}
.panneau .tuile{width:42px;height:42px}
.panneau .tuile svg{width:20px;height:20px}
.panneau h3{font-size:16px;font-weight:400;letter-spacing:-.01em}
.panneau p{font-size:11px;color:var(--doux)}
.panneau .bascule{margin-left:auto}
.reglages h2{font-size:clamp(22px,2.1vw,25px)}
.reglages h2 .v{color:var(--menthe-v);display:block}
.reglages .txt p{font-size:12px;color:#E6E6E8;margin:22px 0 26px}

/* 06 · Témoignages : mur de cartes, une carte blanche */
.temoins{padding:80px 0 90px}
.temoins h2{font-size:clamp(26px,2.6vw,32px);margin-top:18px}
.temoins .sous{font-size:12px;color:#D4D5D8;max-width:360px;margin-inline:auto}
.mur{columns:3;column-gap:28px;max-width:780px;margin:60px auto 0;text-align:left}
.avis{break-inside:avoid;margin-bottom:28px;padding:30px 28px 28px;border-radius:4px;border:1px solid #3A3A3E;background:linear-gradient(180deg,#2F2F33,#1A1A1C 70%);position:relative}
.avis h3{font-size:13.5px;font-weight:600;letter-spacing:-.01em;margin-bottom:16px;color:#EDEDEF}
.avis p{font-size:11px;line-height:1.7;color:var(--doux)}
.avis .qui{display:flex;align-items:center;gap:10px;margin-top:22px;font-size:13px;color:#E6E6E8}
.avis .qui i{width:30px;height:30px;border-radius:50%;display:grid;place-items:center;font:600 10px/1 var(--police);font-style:normal;color:#0D0C0F;background:linear-gradient(135deg,#C6A285,#7B5A44);box-shadow:0 0 0 2px #3A3A3E}
.avis.lumiere{background:linear-gradient(180deg,#FFFFFF,#E9E9E9);border-color:#fff}
.avis.lumiere h3,.avis.lumiere .qui{color:#0D0C0F}
.avis.lumiere p{color:#2E2E32}
.avis.lumiere .fleche{position:absolute;right:22px;bottom:16px;width:22px;height:22px;color:#0D0C0F}

/* 07 · Constance : vidéo dans l'ordinateur */
.constance{padding:70px 0 90px;overflow:hidden}
.constance .wrap{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:center;width:min(860px,100% - 40px)}
.ecran{position:relative}
.ecran .emplacement{border-radius:10px 10px 0 0;border:5px solid #2C2C2F;border-bottom:0}
.ecran .lecture{position:absolute;left:50%;top:44%;translate:-50% -50%;z-index:2;width:56px;height:56px;border-radius:50%;background:var(--menthe);display:grid;place-items:center;color:#0D0C0F;box-shadow:0 0 0 8px rgba(1,246,179,.2);cursor:pointer;border:0}
.ecran .lecture svg{width:20px;height:20px;translate:2px 0}
.ecran .socle{height:8px;margin:0 -30px;border-radius:2px 2px 8px 8px;background:linear-gradient(180deg,#8E8E92,#3E3E42)}
.constance h2{font-size:clamp(22px,2.1vw,25px)}
.constance h2 .v{color:var(--menthe-v)}
.constance p{font-size:12px;color:#E6E6E8;margin-top:18px}

/* 08 · Avancées : courbe de progression */
.avancees{padding:80px 0 90px;border-top:1px solid #1A1A1D;background:radial-gradient(45% 50% at 50% 65%,rgba(1,246,179,.12),transparent 70%)}
.courbe{position:relative;max-width:540px;margin:40px auto 34px;padding:28px 40px 26px;border-radius:10px;border:1px solid #2E2E32;background:#0E1011;text-align:left}
.courbe::before{content:"";position:absolute;left:20%;right:20%;top:-1px;height:2px;background:linear-gradient(90deg,transparent,var(--menthe),transparent)}
.courbe .haut{display:flex;justify-content:space-between;align-items:flex-start;gap:10px}
.courbe h3{font-size:16px;font-weight:600;color:var(--menthe-v);letter-spacing:-.02em}
.courbe small{display:block;font-size:9.5px;color:var(--doux)}
.courbe .etat{padding:4px 10px;border-radius:12px;border:1px solid var(--menthe);font:500 8.5px/1 var(--police);letter-spacing:.06em;text-transform:uppercase;color:#E6E6E8;white-space:nowrap}
.courbe svg.g{width:100%;height:auto;margin:14px 0 10px;overflow:visible}
.courbe .barre{height:5px;border-radius:3px;background:var(--piste);overflow:hidden}
.courbe .barre i{display:block;height:100%;width:91%;border-radius:3px;background:linear-gradient(90deg,#00B98A,var(--menthe-p));transform-origin:0 50%;animation:remplit 2.4s var(--courbe) both}
@keyframes remplit{from{transform:scaleX(0)}}
.courbe .pct{text-align:right;font-size:8.5px;color:var(--doux);margin-top:6px}

/* 09 · Structure : éventail de modules, liste */
.structure{padding:90px 0 80px;border-top:1px solid rgba(1,246,179,.45);overflow:hidden}
.structure::before{content:"";position:absolute;left:50%;top:200px;translate:-50% 0;width:900px;height:900px;border-radius:50%;border:1px solid #1E1E21;box-shadow:0 0 0 120px rgba(255,255,255,.008)}
.eventail{display:flex;justify-content:center;align-items:center;margin:50px auto 0;height:300px}
.mod{position:relative;width:170px;flex:none;border-radius:10px;overflow:hidden;box-shadow:0 20px 40px rgba(0,0,0,.6)}
.mod .emplacement{border-radius:10px;border-color:rgba(131,251,222,.22)}
.mod p{position:absolute;left:0;right:0;bottom:30px;z-index:2;text-align:center;font:600 17px/1.1 var(--police);color:#fff;letter-spacing:-.02em;text-shadow:0 2px 10px rgba(0,0,0,.7)}
.mod p b{color:var(--menthe-v);font-weight:600;display:block}
.mod small{position:absolute;left:0;right:0;bottom:12px;z-index:2;text-align:center;font-size:7px;letter-spacing:.08em;text-transform:uppercase;color:#C9CACD}
.mod::after{content:"";position:absolute;left:30%;right:30%;bottom:0;height:4px;border-radius:2px;background:var(--menthe);z-index:2}
.mod.l1{width:120px;margin-right:-30px;opacity:.75;z-index:0}.mod.l2{width:150px;margin-right:-30px;z-index:1}
.mod.c{width:180px;z-index:3;translate:0 -10px}
.mod.r2{width:150px;margin-left:-30px;z-index:1}.mod.r1{width:120px;margin-left:-30px;opacity:.75;z-index:0}
.liste-m{max-width:620px;margin:30px auto 0;padding:30px 46px 30px;border-radius:12px;border:1px solid #232326;background:linear-gradient(180deg,rgba(255,255,255,.02),transparent);text-align:left}
.liste-m details{border-bottom:1px solid #2A2A2D}
.liste-m summary{list-style:none;cursor:pointer;display:flex;align-items:center;gap:14px;min-height:44px;font-size:13.5px;color:#EDEDEF}
.liste-m summary::-webkit-details-marker{display:none}
.liste-m summary::before{content:"+";font:300 22px/1 var(--police);color:var(--menthe);width:14px;transition:rotate .3s var(--courbe)}
.liste-m details[open] summary::before{rotate:45deg}
.liste-m summary span{margin-left:auto;color:var(--menthe-v);font-size:13px;white-space:nowrap}
.liste-m details p{padding:0 0 14px 28px;font-size:12px;color:var(--doux)}
.liste-m .btn{width:100%;margin-top:30px}

/* 10 · Offre : investissement, carte prix, liste */
.offre{padding:90px 0 90px}
.offre .wrap{display:grid;grid-template-columns:1fr 270px 1fr;align-items:center;width:min(700px,100% - 40px)}
.offre .gauche{text-align:right;padding-right:36px;position:relative}
.offre .gauche::before{content:"";display:block;width:50px;height:4px;background:var(--menthe);margin:0 0 36px auto;box-shadow:0 0 14px rgba(1,246,179,.6)}
.offre .gauche h2{font-size:clamp(19px,1.8vw,21px);font-weight:600}
.offre .gauche h2 .v{color:var(--menthe-v);display:block}
.prix{position:relative;z-index:2;padding:34px 24px 20px;border-radius:8px;border:1px solid #3A3A3E;background:linear-gradient(180deg,#2A2A2D,#141416 60%);text-align:center;box-shadow:0 30px 60px rgba(0,0,0,.6)}
.prix .logo{justify-content:center;margin-bottom:28px}
.prix .logo svg{width:40px;height:40px}
.prix .logo span{font-size:15px}.prix .logo b{font-size:19px}
.prix .de{font-size:13px;color:#C9CACD;text-transform:uppercase}
.prix .de s{color:#fff}
.prix .montant{display:block;font:700 46px/1 var(--police);letter-spacing:-.05em;margin:6px 0;background:linear-gradient(180deg,#FFFFFF,#9B9CA1);-webkit-background-clip:text;background-clip:text;color:transparent}
.prix .ou{font-size:11.5px;color:#C9CACD;text-transform:uppercase}
.prix .ou b{color:#fff;font-weight:600}
.prix .moyens{display:flex;justify-content:center;gap:10px;margin:22px 0;opacity:.4}
.prix .moyens i{width:26px;height:10px;border-radius:2px;background:#7A7A7E}
.prix .btn{width:100%}
.prix .sur{display:block;margin-top:10px;font-size:7.5px;letter-spacing:.04em;text-transform:uppercase;color:#C9CACD}
.inclus{margin-left:-6px;padding:30px 24px 30px 30px;border-radius:0 8px 8px 0;border:1px solid #2E2E32;border-left:0;background:linear-gradient(90deg,#141416,#2A2A2D);display:grid;gap:14px;font-size:11px;color:#E6E6E8}
.inclus li{list-style:none;display:flex;gap:10px}
.inclus li::before{content:"";flex:none;width:8px;height:4px;margin-top:4px;border-left:1.5px solid var(--menthe);border-bottom:1.5px solid var(--menthe);rotate:-45deg}

/* 11 · Garantie : sceau étoilé et grand 7 */
.garantie{padding:40px 0 90px;overflow:hidden}
.garantie .wrap{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center;width:min(820px,100% - 40px)}
.sceau{position:relative;width:270px;height:270px;margin:0 auto;border-radius:50%;background:radial-gradient(circle,#15191A,#0B0D11 70%);border:1px solid #1F2326}
.sceau .sept{position:absolute;left:70%;top:50%;translate:0 -50%;font:700 240px/1 var(--police);letter-spacing:-.06em;color:var(--menthe);z-index:0;text-shadow:0 0 40px rgba(1,246,179,.3)}
.sceau .anneau{position:absolute;inset:0;z-index:1;border-radius:50%;background:radial-gradient(circle,#15191A 60%,#0B0D11)}
.sceau svg.tour{position:absolute;inset:12px;width:calc(100% - 24px);height:calc(100% - 24px);z-index:2;animation:tourne 26s linear infinite;color:#EDEDEF}
.sceau svg.tour text{font:600 11px var(--police);letter-spacing:.14em;fill:currentColor}
@keyframes tourne{to{rotate:360deg}}
.sceau .coeur{position:absolute;left:50%;top:54%;translate:-50% -50%;z-index:3;width:96px;height:96px;border-radius:50%;background:radial-gradient(circle at 40% 35%,#7FF8DA,var(--menthe) 60%,#00B98A);display:grid;place-items:center;color:#0D0C0F;box-shadow:0 0 40px rgba(1,246,179,.45)}
.sceau .coeur svg{width:40px;height:40px}
.sceau .etoiles{position:absolute;left:50%;top:62px;translate:-50% 0;z-index:3;display:flex;gap:12px;color:var(--or)}
.sceau .etoiles svg{width:15px;height:15px}
.sceau .etoiles svg:nth-child(2),.sceau .etoiles svg:nth-child(4){translate:0 -8px}
.sceau .etoiles svg:nth-child(3){translate:0 -12px}
.garantie h2{font-size:clamp(26px,2.6vw,32px);font-weight:600}
.garantie p{font-size:12px;color:#E6E6E8;margin-top:18px;max-width:330px}

/* 12 · Mentor : nom en deux tons, portrait noir et blanc */
.mentor{border-top:1px solid #1A1A1D;border-bottom:1px solid #1A1A1D;background:linear-gradient(90deg,#0D0C0F,#141416 70%,#0D0C0F);overflow:hidden}
.mentor .wrap{display:grid;grid-template-columns:1fr 1fr;gap:30px;align-items:end;width:min(780px,100% - 40px)}
.mentor .txt{align-self:center;padding:60px 0}
.mentor h2{font:600 clamp(56px,6.4vw,80px)/.95 var(--police);letter-spacing:-.04em;margin-bottom:28px}
.mentor h2 span{display:block;padding-left:.4em}
.mentor h2 b{display:block;color:var(--menthe-v);font-weight:600}
.mentor p{font-size:12px;color:#D4D5D8;margin-bottom:16px;max-width:330px}
.mentor .emplacement{width:100%;border-radius:0;border:0;filter:grayscale(1);-webkit-mask-image:linear-gradient(90deg,transparent,#000 20%,#000 80%,transparent),linear-gradient(180deg,#000 80%,transparent);-webkit-mask-composite:source-in;mask-image:linear-gradient(90deg,transparent,#000 20%,#000 80%,transparent);background:radial-gradient(80% 70% at 50% 30%,#3A3A3E,#141416 70%)}
.mentor .emplacement::after{color:#C9CACD;border-color:#4A4A4E}

/* 13 · FAQ : barres blanches numérotées */
.faq{padding:80px 0 80px}
.faq .trait{display:block;width:62px;height:4px;margin:0 auto 46px;background:#fff;box-shadow:0 8px 16px rgba(255,255,255,.2)}
.faq h2{font-size:clamp(26px,2.6vw,32px);font-weight:600}
.faq .liste{display:grid;gap:16px;max-width:512px;margin:50px auto 0;text-align:left}
.faq details{border-radius:3px;background:linear-gradient(90deg,#FFFFFF,#E9E9E9);color:#0D0C0F}
.faq summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:14px;min-height:46px;padding:0 22px;font-size:13.5px;font-weight:500}
.faq summary::-webkit-details-marker{display:none}
.faq summary::after{content:"+";font:300 22px/1 var(--police);transition:rotate .3s var(--courbe)}
.faq details[open] summary::after{rotate:45deg}
.faq details p{padding:0 22px 16px;font-size:12.5px;color:#3A3A3E}

/* 14 · Pied */
#pied{background:var(--menthe);color:var(--encre-m);font-size:10.5px}
#pied .wrap{display:flex;justify-content:space-between;align-items:center;gap:20px;width:min(650px,100% - 40px);padding:16px 0}
#pied .droite{display:flex;gap:14px}

@media (max-width:900px){
  .hero .wrap{grid-template-columns:1fr;text-align:center;min-height:0}
  .hero .txt{padding:60px 0 0}
  .logo{justify-content:center}
  .hero p{margin-inline:auto}
  .scene .emplacement{margin:0 auto}
  .scene .tuiles{right:6%}
  .reglages .wrap,.constance .wrap,.garantie .wrap,.mentor .wrap{grid-template-columns:1fr;gap:40px}
  .panneau{max-width:340px;width:100%;margin:0 auto}
  .ecran{width:calc(100% - 48px);max-width:520px;margin-inline:auto}
  .reglages .txt,.constance .txt-c,.garantie .txt-g{text-align:center}
  .garantie p{margin-inline:auto}
  .mur{columns:2}
  .offre .wrap{grid-template-columns:270px 1fr;justify-content:center;row-gap:30px}
  .offre .gauche{grid-column:1/-1;text-align:center;padding-right:0}
  .offre .gauche::before{margin-inline:auto}
  .mentor .txt{padding:60px 0 0;text-align:center}
  .mentor p{margin-inline:auto}
  .mentor .emplacement{max-width:380px;margin:0 auto}
}
@media (max-width:640px){
  .scene .tuiles span{width:54px;height:54px}
  .scene .tuiles span svg{width:26px;height:26px}
  .piliers{grid-template-columns:1fr;gap:34px}
  .colonnes{grid-template-columns:1fr}
  .portable .dalle{grid-template-columns:1fr;padding:8px}
  .cal-g{display:none}
  .cal span{height:40px}
  .dock{gap:12px;padding:10px 18px}
  .reglages .wrap{width:min(340px,100% - 40px)}
  .panneau{padding:14px 18px}
  .panneau .ligne-r{gap:12px}
  .mur{columns:1}
  .eventail{height:240px}
  .mod.l1,.mod.r1{display:none}
  .mod.l2,.mod.r2{width:120px}
  .mod.c{width:150px}
  .mod p{font-size:14px}
  .liste-m{padding:20px 18px}
  .liste-m summary{font-size:12.5px;line-height:1.3;padding:8px 0}
  .offre .wrap{grid-template-columns:1fr;max-width:320px}
  .inclus{margin:-4px 10px 0;border-radius:0 0 8px 8px;border-left:1px solid #2E2E32;border-top:0}
  .sceau{width:230px;height:230px}
  .sceau .sept{font-size:190px;left:60%}
  .sceau .coeur{width:80px;height:80px}
  .sceau svg.tour{inset:10px;width:calc(100% - 20px);height:calc(100% - 20px)}
  .sceau .etoiles{top:52px}
  .sceau .sept{left:66%}
  .mentor h2{font-size:56px}
  #pied .wrap{flex-direction:column;text-align:center}
}
@media (prefers-reduced-motion:reduce){.sceau svg.tour,.courbe .barre i{animation:none}}
```
