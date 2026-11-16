# Prompt · Section « Le hero » du template V « Mosaïque dorée »
# Par Yedidia Ruben - Digital Strategist. À coller dans une IA qui code, avec ta page.

Construis une section « Le hero » pour ma page, dans le même esprit que le code de référence plus bas. Garde la structure, le geste et les proportions ; reprends mes couleurs, mes polices et mes textes à moi.

- Son rôle : Dire qui, quoi, pour qui en une phrase, puis faire cliquer.
- Où la placer : Toujours, en premier.
- Sa structure : Sur-titre court, titre en 2 à 3 lignes, 2 à 3 lignes de promesse, bouton, preuve sous le bouton. Un portrait ou l'objet de l'autre côté.
- La règle qui fait la différence : Une seule promesse. Le bouton et sa preuve tiennent dans le premier écran du téléphone.
- Le geste de cette variante : portrait doré qui sort d'une mosaïque sombre
- Animations : attributs data-rv, data-lignes, data-compte, data-incline, data-aimant (moteur anim.js). Sans le moteur, retire-les.
- Aucun tiret long dans les textes. Contraste de 4,5 au moins. Lisible de 360 à 1920 px.

## Le code de référence (HTML)

```html
<section class="hero" id="hero">
  <div class="mosaique" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
  <div class="wrap grille">
    <div>
      <a class="logo" href="#hero" aria-label="Kanté Ads Académie, retour en haut" data-rv><svg><use href="#mono"/></svg><span class="nom">Kanté<br>Ads<small>Académie</small></span></a>
      <p class="kicker" data-rv>N'accepte rien de moins que le sommet !</p>
      <h1 class="lead" data-rv>Apprends, pas à pas et sur le terrain, à <b>PARTIR DE ZÉRO</b> pour vendre en ligne à <b>GRANDE ÉCHELLE</b>, de façon <b>SÛRE</b>, sans montrer ton visage, en reprenant des campagnes qui rapportent <em>plus de 1 000 000 FCFA par mois</em> à mes élèves.</h1>
      <p class="petit" data-rv>Pour la première fois, tu as accès aux structures déjà testées qui te font vendre chaque jour et travailler d'où tu veux, sans patron et sans horaires imposés.</p>
      <div class="cta gauche" data-rv>
        <a class="btn reflet" href="#offre" data-aimant>Je veux mon accès</a>
        <div class="paie" aria-label="Paiements acceptés : Wave, Orange Money, MTN MoMo, Visa, Mastercard"><span>Wave</span><span>Orange Money</span><span>MoMo</span><span>Visa</span><span>Mastercard</span></div>
      </div>
    </div>
    <div class="photo" data-rv>
      <div class="emplacement" data-img="V-hero" data-format="3:4" data-alt="Ousmane Kanté, mains jointes, chemise en satin noir et chaîne dorée, sur fond sombre"></div>
    </div>
  </div>
</section>
```

## Le CSS du template d'origine (la section en dépend, ne garde que ce qu'elle utilise)

```css
:root{
  --noir:#111111; --gris:#1F1F1F; --filet:#2C2C2C; --filet2:#3A3A3A;
  --blanc:#EFEFEF; --beige:#EEE9E3; --doux:#B4B4B4; --sourd:#8E8E8E;
  --or:#D99C63; --or-c:#F9C58C; --or-f:#9A6430; --d1:#FFB862; --d2:#F1D4B8;
  --courbe:cubic-bezier(.16,1,.3,1);
  --sans:'Inter',system-ui,sans-serif; --serif:'Cormorant Garamond',Georgia,serif;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:var(--sans);font-size:15px;line-height:1.55;color:var(--blanc);background:var(--noir);-webkit-font-smoothing:antialiased;overflow-x:clip}
svg{display:block}
a{color:inherit;text-decoration:none}
b,strong{font-weight:700;color:#fff}
.or{color:var(--or)}
.wrap{width:min(1040px,100% - 40px);margin-inline:auto;position:relative;z-index:1}
section{position:relative}
.centre{text-align:center}
h1,h2,h3{font-weight:600;line-height:1.2;letter-spacing:-.02em;color:#fff}
h2{font-size:clamp(24px,2.6vw,34px)}

/* Logo : monogramme doré dans une arche + nom en capitales fines */
.logo{display:inline-flex;align-items:center;gap:10px;color:var(--or-c)}
.logo svg{width:38px;height:56px}
.logo .nom{font:400 22px/0.95 var(--serif);letter-spacing:.04em;text-transform:uppercase}
.logo .nom small{display:block;font:500 7.5px/1 var(--sans);letter-spacing:.55em;margin-top:6px;color:var(--d2)}

/* Bouton : pilule dégradée or pâle, halo lumineux */
.btn{display:inline-flex;align-items:center;justify-content:center;min-height:56px;padding:12px 40px;border-radius:32px;
  background:linear-gradient(90deg,var(--d1),var(--d2));color:#141414;font:700 12.5px/1.25 var(--sans);text-transform:uppercase;letter-spacing:-.01em;text-align:center;
  box-shadow:0 0 0 1px rgba(255,214,170,.35),0 8px 30px rgba(255,184,98,.32);transition:box-shadow .4s var(--courbe),filter .4s}
.btn:hover{box-shadow:0 0 0 1px rgba(255,214,170,.6),0 10px 44px rgba(255,184,98,.55);filter:brightness(1.04)}
.paie{display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-top:12px;font:600 8.5px/1 var(--sans);letter-spacing:.06em;color:#9A9A9A;text-transform:uppercase}
.paie span{padding:4px 6px;border:1px solid #333;border-radius:3px}
.cta{display:flex;flex-direction:column;align-items:center;margin-top:44px}
.cta.gauche{align-items:flex-start}
.cta.gauche .paie{justify-content:flex-start}

/* Emplacement d'image : vide, il reste propre (graphite, filet doré, format au centre) */
.emplacement{position:relative;overflow:hidden;width:100%;background:radial-gradient(90% 70% at 50% 35%,#2A2520,#161514 70%);border:1px solid rgba(217,156,99,.22)}
.emplacement::after{content:attr(data-format);position:absolute;left:50%;top:50%;translate:-50% -50%;padding:5px 12px;border:1px solid rgba(217,156,99,.4);border-radius:20px;
  font:500 11px/1 var(--sans);letter-spacing:.14em;color:rgba(239,239,239,.55);background:rgba(17,17,17,.5)}
.emplacement:has(>img)::after{display:none}
[data-format="16:9"]{aspect-ratio:16/9} [data-format="4:3"]{aspect-ratio:4/3} [data-format="1:1"]{aspect-ratio:1}
[data-format="3:4"]{aspect-ratio:3/4} [data-format="9:16"]{aspect-ratio:9/16}

/* Fond en mosaïque : tuiles de photos fantômes, très sombres */
.mosaique{position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:0}
.mosaique i{position:absolute;border-radius:6px;background:linear-gradient(180deg,rgba(255,255,255,.045),rgba(255,255,255,.01));border:1px solid rgba(255,255,255,.035)}

/* 01 · Hero */
.hero{padding:70px 0 90px;overflow:hidden;background:radial-gradient(50% 70% at 72% 40%,#2A2622,transparent 70%),var(--noir)}
.hero .grille{display:grid;grid-template-columns:1fr 1.02fr;gap:40px;align-items:center}
.hero .kicker{font:800 clamp(19px,1.9vw,24px)/1.2 var(--sans);color:var(--or);text-transform:uppercase;letter-spacing:-.01em;margin:30px 0 18px}
.hero .lead{font-weight:400;font-size:clamp(17px,1.6vw,20px);line-height:1.4;color:var(--blanc);max-width:34ch}
.hero .lead em{font-style:normal;font-weight:700;color:var(--or)}
.hero .petit{font-size:12.5px;line-height:1.5;color:var(--doux);max-width:52ch;margin-top:16px}
.hero .photo{position:relative;max-width:460px;justify-self:end;width:100%}
.hero .photo .emplacement{border-radius:4px;border:0;-webkit-mask:linear-gradient(180deg,#000 70%,transparent);mask:linear-gradient(180deg,#000 70%,transparent)}
.hero .mosaique i:nth-child(1){left:56%;top:12%;width:150px;height:200px}
.hero .mosaique i:nth-child(2){left:78%;top:8%;width:160px;height:220px}
.hero .mosaique i:nth-child(3){left:82%;top:52%;width:150px;height:200px}
.hero .mosaique i:nth-child(4){left:62%;top:60%;width:140px;height:180px}

/* 02 · Vidéo */
.video{padding:30px 0 70px;border-bottom:1px solid #262626;overflow:hidden}
.video h2{font-weight:400;font-size:clamp(20px,2vw,26px);line-height:1.3;max-width:24em;margin:0 auto 30px}
.video h2 b{font-weight:700}
.lecteur{position:relative;width:min(560px,100%);margin:0 auto;border-radius:6px;overflow:hidden;box-shadow:0 30px 60px rgba(0,0,0,.6)}
.lecteur .emplacement{border-radius:6px}
.lecteur .emplacement::after{left:auto;top:auto;right:12px;bottom:12px;translate:none}
.lecteur .sur{position:absolute;inset:0;display:flex;align-items:center;padding-left:8%;background:linear-gradient(90deg,rgba(17,17,17,.82) 25%,transparent 62%);pointer-events:none}
.lecteur .sur p{font:600 clamp(24px,3.6vw,38px)/1.02 var(--sans);text-transform:uppercase;letter-spacing:-.02em}
.lecteur .sur p span{display:block;color:var(--or)}
.lecteur button{position:absolute;left:50%;top:50%;translate:-50% -50%;width:64px;height:64px;border-radius:50%;border:1px solid rgba(249,197,140,.6);background:rgba(17,17,17,.55);color:var(--or-c);cursor:pointer;display:grid;place-items:center;transition:scale .4s var(--courbe)}
.lecteur button:hover{scale:1.08}
.lecteur button svg{width:22px;height:22px;margin-left:4px}
.video .mosaique i:nth-child(1){left:-40px;top:20%;width:180px;height:260px}
.video .mosaique i:nth-child(2){right:-40px;top:22%;width:190px;height:260px}

/* 03 · Douleur */
.douleur{padding:90px 0 60px;overflow:hidden}
.douleur .grille{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center}
.scene{position:relative}
.scene .emplacement{border-radius:8px}
.scene .anneau{position:absolute;left:-6%;top:12%;width:112%;height:76%;border:10px solid rgba(255,255,255,.06);border-radius:50%;transform:rotate(-22deg);pointer-events:none}
.douleur h2{font-weight:400;font-size:clamp(19px,1.8vw,22px);line-height:1.35}
.douleur h2 b{font-weight:700}
.douleur .petit{font-size:13.5px;color:var(--doux);margin:22px 0 22px}
.excuse{display:flex;align-items:center;gap:22px;padding:14px 22px;background:var(--gris);border-radius:5px;margin-top:10px;font-size:13.5px;line-height:1.35;color:#D6D6D6}
.excuse .ic{flex:none;width:38px;height:38px;border-radius:6px;background:var(--noir);display:grid;place-items:center;color:var(--or-c)}
.excuse .ic svg{width:20px;height:20px}

/* 04 · Différenciation : 5 cartes à objet qui déborde */
.methode{padding:40px 0 70px}
.methode h2{font-weight:400;font-size:clamp(19px,2vw,24px);line-height:1.35;max-width:26em;margin:0 auto 70px}
.methode h2 b{font-weight:700}
.cartes5{display:flex;flex-wrap:wrap;justify-content:center;gap:56px 20px;max-width:640px;margin:0 auto}
.c5{position:relative;width:calc((100% - 40px)/3);min-width:180px;background:var(--gris);border-radius:8px;padding:110px 20px 22px;text-align:left}
.c5 h3{font-size:13px;line-height:1.3;margin-bottom:10px}
.c5 p{font-size:11.5px;line-height:1.5;color:var(--doux)}
.c5 .objet{position:absolute;left:50%;top:-32px;translate:-50% 0;width:150px;height:126px}
/* objets en CSS : tableau de bord, téléphones, ordinateur */
.tab{position:absolute;inset:14px 0 20px;background:#F4F4F4;border-radius:6px;transform:rotate(-14deg) skewX(10deg);box-shadow:0 18px 30px rgba(0,0,0,.5)}
.tab::before{content:"";position:absolute;left:12%;right:30%;top:22%;height:6px;border-radius:3px;background:#C9C9C9;box-shadow:0 14px 0 #DDD,0 28px 0 #DDD}
.tab::after{content:"Vente validée";position:absolute;right:-14px;bottom:10px;padding:5px 8px;border-radius:5px;background:#fff;font:600 8px/1 var(--sans);color:#1B7F3B;box-shadow:0 6px 14px rgba(0,0,0,.35)}
.tel{position:absolute;width:52px;height:104px;border-radius:10px;background:#1A1A1A;border:3px solid #3A3A3A;box-shadow:0 14px 24px rgba(0,0,0,.5)}
.tel::before{content:"";position:absolute;inset:8px 5px;border-radius:4px;background:linear-gradient(180deg,#E9F5EC 0 30%,#fff 30%);}
.tel::after{content:"";position:absolute;left:10px;right:10px;top:42px;height:5px;border-radius:3px;background:#25A35A;box-shadow:0 12px 0 #C7C7C7,0 24px 0 #C7C7C7}
.ordi{position:absolute;left:12px;right:12px;top:10px;height:72px;border-radius:6px 6px 0 0;background:linear-gradient(135deg,#2A2622,#151515);border:3px solid #444}
.ordi::before{content:"";position:absolute;left:50%;top:50%;translate:-50% -50%;width:20px;height:20px;border-radius:50%;border:1px solid var(--or-c);box-shadow:0 0 18px rgba(249,197,140,.5)}
.ordi::after{content:"";position:absolute;left:-16px;right:-16px;bottom:-12px;height:9px;border-radius:0 0 8px 8px;background:#BDBDBD}

/* 05 · Pour qui */
.pour{padding:56px 0 80px;background:var(--gris)}
.pour h2{margin-bottom:56px}
.grille6{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.c6{position:relative;border:1px solid var(--filet2);border-radius:6px;padding:46px 30px 40px;font-size:14px;line-height:1.45;color:#DADADA;min-height:180px}
.c6::before{content:"";position:absolute;left:30px;top:-1px;width:48px;height:4px;border-radius:0 0 2px 2px;background:linear-gradient(90deg,var(--d1),var(--d2))}
.c6 .coche{width:42px;height:42px;border-radius:50%;border:1px solid #4A4A4A;display:grid;place-items:center;color:var(--or-c);margin-bottom:22px}
.c6 .coche svg{width:18px;height:18px}

/* 06 · Contenu : carrousel d'affiches */
.contenu{padding:60px 0 40px;overflow:hidden}
.contenu h2{font-size:clamp(26px,2.8vw,36px);line-height:1.18}
.contenu .sous{margin-top:10px;font-size:15px}
.rail{display:flex;justify-content:safe center;gap:14px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding:44px 20px 10px;scroll-padding-inline:20px}
.rail::-webkit-scrollbar{display:none}
.affiche{position:relative;flex:none;width:200px;scroll-snap-align:start;border-radius:6px;overflow:hidden;background:#161616}
.affiche .emplacement{border:0;border-radius:6px 6px 0 0;-webkit-mask:linear-gradient(180deg,#000 62%,transparent 98%);mask:linear-gradient(180deg,#000 62%,transparent 98%)}
.affiche .titre{position:relative;margin-top:-58px;padding:0 10px 14px;text-align:center}
.affiche .titre small{display:block;font:500 9px/1.3 var(--sans);text-transform:uppercase;letter-spacing:.08em;color:var(--blanc)}
.affiche .titre strong{display:block;font:400 25px/1 var(--serif);text-transform:uppercase;color:var(--or-c);margin-top:3px;letter-spacing:.01em}
.affiche .titre svg{width:16px;height:24px;margin:10px auto 0;color:var(--or-c);opacity:.8}
.points{display:flex;gap:6px;justify-content:center;margin-top:18px}
.points button{width:24px;height:24px;border:0;background:none;cursor:pointer;display:grid;place-items:center}
.points button::before{content:"";width:7px;height:7px;border-radius:50%;border:1px solid #777;transition:background .3s}
.points button[aria-current="true"]::before{background:var(--or);border-color:var(--or)}

/* 07 · Preuve : captures de messages d'élèves */
.preuve{padding:70px 0 40px;overflow:hidden}
.preuve h2{font-weight:400;font-size:clamp(22px,2.6vw,31px);line-height:1.3;max-width:24em;margin:0 auto}
.preuve h2 b{font-weight:700;color:#fff} .preuve h2 .or{font-weight:700}
.capture{flex:none;width:170px;scroll-snap-align:start;background:#fff;border-radius:6px;padding:10px;color:#222;font-size:10px;line-height:1.45;box-shadow:0 0 0 5px #9ED19A}
.capture .haut{padding:10px;border-radius:5px;background:#2FB98D;color:#fff;margin-bottom:8px}
.capture .haut small{display:block;font-size:8.5px;opacity:.85}
.capture .haut b{display:block;font-size:17px;color:#fff;margin-top:8px}
.capture.clair .haut{background:#F3F3F3;color:#222}
.capture.clair .haut b{color:#111}
.capture mark{background:#FFE7A6;color:#222;padding:0 2px}
.capture .bulle{background:#F1F1F1;border-radius:6px;padding:7px;margin-top:6px}
.capture .reac{display:inline-block;margin-top:6px;padding:2px 7px;border-radius:9px;background:#2C6BED;color:#fff;font-size:8.5px;font-weight:700}
.preuve .rail{padding-top:50px;padding-bottom:16px}

/* 08 · Offre */
.offre{padding:60px 0 80px;overflow:hidden;background:repeating-linear-gradient(60deg,transparent 0 140px,rgba(255,255,255,.018) 140px 141px),var(--noir)}
.offre h2{font-size:clamp(23px,2.7vw,30px);line-height:1.25;max-width:20em;margin:0 auto}
.offre .chapeau{max-width:36em;margin:16px auto 50px;font-size:15px;color:#DADADA}
.offre .chapeau b.or{color:var(--or)}
.duo{display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:center;max-width:700px;margin:0 auto}
.liste{background:var(--gris);border:1px solid var(--filet);border-radius:8px;padding:50px 30px 30px;text-align:center}
.liste h3{font:800 clamp(24px,2.6vw,29px)/1.15 var(--sans);text-transform:uppercase;letter-spacing:-.01em}
.liste h3 span{color:var(--or)}
.liste .intro{margin:20px 0 14px;font-size:15px;color:#E0E0E0}
.liste ul{list-style:none;text-align:left}
.liste li{display:flex;gap:22px;align-items:center;padding:14px 0;border-bottom:1px solid #4A4A4A;font-size:13px;line-height:1.4;color:#E4E4E4}
.liste li svg{flex:none;width:16px;height:16px;color:var(--or-c)}
.liste .gagne{padding-top:26px;font-weight:700;font-size:13px}
.prix{background:var(--beige);border-radius:8px;padding:56px 26px 36px;text-align:center;color:#333}
.prix .de{font-size:17px;color:#444} .prix .de s{color:#444}
.prix .par{font-size:19px;margin-top:20px;text-transform:uppercase;color:#222}
.prix .gros{display:block;font:800 clamp(44px,5.2vw,58px)/1.05 var(--sans);letter-spacing:-.03em;color:var(--or-f);margin:6px 0 8px}
.prix .vue{font-size:17px;color:#333} .prix .vue b{color:#111}
.prix .btn{width:100%;margin-top:24px;padding-inline:16px}
.prix .jour{font-style:italic;font-size:13px;color:#4A4A4A;margin-top:18px}
.prix .paie{color:#555} .prix .paie span{border-color:#C9C3BB}

/* 09 · Garantie et bonus */
.garantie{padding:10px 0 80px}
.deux{display:grid;grid-template-columns:1fr 1fr;gap:12px;max-width:700px;margin:0 auto}
.info{position:relative;background:var(--gris);border:1px solid var(--filet);border-radius:8px;padding:56px 32px 30px}
.info::before{content:"";position:absolute;left:32px;top:-1px;width:48px;height:4px;background:linear-gradient(90deg,var(--d1),var(--d2))}
.info .ic{position:absolute;left:32px;top:-20px;width:42px;height:42px;border-radius:50%;border:1px solid #4A4A4A;background:var(--gris);display:grid;place-items:center;color:#fff}
.info .ic svg{width:19px;height:19px}
.info h3{font-size:clamp(20px,2vw,24px);color:var(--or);margin-bottom:12px;line-height:1.2}
.info p{font-size:13.5px;color:#DADADA}
.bonus{display:grid;grid-template-columns:1fr 1fr;max-width:700px;margin:12px auto 0;background:var(--gris);border:1px solid var(--filet);border-radius:8px;overflow:hidden}
.bonus .ecran{position:relative;padding:36px 0 0 0;background:linear-gradient(160deg,#2B2B2B,#1A1A1A)}
.bonus .ecran .emplacement{border-radius:0 8px 0 0;border-left:0;border-bottom:0}
.bonus .txt{padding:22px 36px 30px}
.badge{display:inline-flex;align-items:center;gap:8px;padding:6px 26px;border:1px solid #444;border-radius:16px;font:600 10px/1 var(--sans);text-transform:uppercase;letter-spacing:.06em}
.badge svg{width:12px;height:12px;color:var(--or-c)}
.bonus h3{font:800 clamp(21px,2.1vw,24px)/1.15 var(--sans);text-transform:uppercase;color:var(--or);margin:16px 0 14px}
.bonus p{font-size:12.5px;color:#DADADA;margin-bottom:12px}
.bonus .cta{margin-top:20px}
.bonus .btn{width:100%;padding-inline:16px}

/* 10 · Qui */
.qui{padding:0 0 50px}
.carte-qui{display:grid;grid-template-columns:.86fr 1.14fr;background:#141414;border:1px solid var(--filet);border-radius:8px;overflow:hidden;max-width:1000px;margin:0 auto}
.carte-qui .emplacement{border:0;border-radius:0}
.carte-qui .photo{position:relative;min-height:560px}
.carte-qui .photo .emplacement{position:absolute;inset:0;aspect-ratio:auto}
.carte-qui .txt{padding:60px 66px}
.carte-qui h2{font-size:clamp(28px,3vw,36px);color:var(--or);margin-bottom:16px}
.carte-qui p{font-size:14px;line-height:1.6;color:#E2E2E2;margin-bottom:16px}

/* 11 · FAQ */
.faq{background:var(--beige);color:#1A1A1A;padding:56px 0 70px}
.faq .fleche{position:absolute;left:50%;top:0;translate:-50% -50%;width:22px;height:22px;border-radius:50%;background:var(--beige);border:1px solid #BDB6AD;display:grid;place-items:center;color:#444}
.faq .fleche svg{width:10px;height:10px}
.faq h2{color:#111;font-size:clamp(28px,3vw,34px);line-height:1.08;margin-bottom:34px}
.faq .liste-q{max-width:520px;margin:0 auto;text-align:left}
.faq details{border-bottom:1.5px solid #9B958D}
.faq summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;gap:16px;align-items:center;min-height:50px;padding:6px 10px;font-size:13px;color:#2A2A2A}
.faq summary::-webkit-details-marker{display:none}
.faq summary::after{content:"+";font-size:18px;font-weight:300;color:#444;transition:rotate .3s}
.faq details[open] summary::after{rotate:45deg}
.faq details p{padding:0 10px 16px;font-size:13px;color:#3D3D3D}

/* 12 · Pied */
#pied{padding:40px 0 30px;text-align:center;color:#D0D0D0;font-size:12px}
#pied .ligne-p{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:20px;max-width:860px;margin:26px auto 0;padding:24px 70px;border-block:1px solid #3A3A3A;text-align:left}
#pied .reseaux{display:flex;gap:6px}
#pied .reseaux a{width:44px;height:44px;display:grid;place-items:center;color:#fff}
#pied .reseaux svg{width:19px;height:19px}
#pied .haut{justify-self:end;display:inline-flex;align-items:center;gap:10px;min-height:44px;font-size:13px}
#pied .haut span{width:20px;height:20px;border-radius:50%;background:#fff;color:#111;display:grid;place-items:center}
#pied .haut svg{width:10px;height:10px}
#pied .legal{margin-top:18px;line-height:1.6}
#pied .droite{margin-top:14px;color:#9A9A9A}

/* Responsive */
@media (max-width:980px){
  .carte-qui .txt{padding:44px 36px}
  .cartes5{max-width:100%}
}
@media (max-width:820px){
  .hero{padding-top:44px}
  .hero .grille,.douleur .grille{grid-template-columns:1fr}
  .hero .photo{justify-self:center;max-width:380px}
  .douleur .grille{gap:40px}
  .scene{max-width:480px;margin:0 auto;width:100%}
  .grille6{grid-template-columns:1fr 1fr}
  .c5{width:calc((100% - 20px)/2)}
  .duo{grid-template-columns:1fr}
  .deux{grid-template-columns:1fr;gap:34px}
  .bonus{margin-top:34px}
  .bonus{grid-template-columns:1fr}
  .carte-qui{grid-template-columns:1fr}
  .carte-qui .photo{min-height:0;aspect-ratio:16/10}
  #pied .ligne-p{grid-template-columns:1fr;justify-items:center;text-align:center;padding:20px}
  #pied .haut{justify-self:center}
}
@media (max-width:560px){
  .grille6{grid-template-columns:1fr}
  .c5{width:100%;min-width:0}
  .btn{width:100%;padding-inline:22px}
  .cta.gauche{align-items:stretch}
  .liste,.prix{padding-inline:20px}
  .info{padding:50px 22px 26px}
  .bonus .txt{padding:22px 20px 28px}
  .carte-qui .txt{padding:34px 22px}
  .lecteur .sur p{font-size:22px}
  .lecteur button{width:52px;height:52px}
  .carte-qui .photo{aspect-ratio:3/4}
}
```
