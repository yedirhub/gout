# Prompt · Section « Le hero » du template P « Noir et or »
# Par Yedidia Ruben - Digital Strategist. À coller dans une IA qui code, avec ta page.

Construis une section « Le hero » pour ma page, dans le même esprit que le code de référence plus bas. Garde la structure, le geste et les proportions ; reprends mes couleurs, mes polices et mes textes à moi.

- Son rôle : Dire qui, quoi, pour qui en une phrase, puis faire cliquer.
- Où la placer : Toujours, en premier.
- Sa structure : Sur-titre court, titre en 2 à 3 lignes, 2 à 3 lignes de promesse, bouton, preuve sous le bouton. Un portrait ou l'objet de l'autre côté.
- La règle qui fait la différence : Une seule promesse. Le bouton et sa preuve tiennent dans le premier écran du téléphone.
- Le geste de cette variante : portrait dans un halo d'or, anneau à emblème
- Animations : attributs data-rv, data-lignes, data-compte, data-incline, data-aimant (moteur anim.js). Sans le moteur, retire-les.
- Aucun tiret long dans les textes. Contraste de 4,5 au moins. Lisible de 360 à 1920 px.

## Le code de référence (HTML)

```html
<section class="hero" id="hero">
  <span class="arche" aria-hidden="true"></span>
  <div class="wrap">
    <div class="txt">
      <div class="marque" data-rv aria-label="Trio d'Allure"><span class="mots"><span class="l1">Trio<small>d'</small></span><span class="l2">ALLURE</span></span><svg aria-hidden="true"><use href="#embleme"/></svg></div>
      <p class="date" data-rv>Atelier en direct · 24/11 à 19 h</p>
      <h1 data-lignes data-rv><em>Transformez</em> votre image en 5 jours et <em>affirmez</em> votre assurance</h1>
      <p data-rv>Découvrez comment construire votre <em>trio de style</em> et devenir une <em>référence d'élégance</em>. Vous achetez des vêtements sans arrêt, mais vous n'avez jamais rien à vous mettre ? L'image que vous renvoyez vous met mal à l'aise ? <em>Alors cet atelier est pour vous.</em></p>
      <a class="btn reflet" href="#offre" data-rv data-aimant>Je réserve ma place <svg aria-hidden="true"><use href="#fleche"/></svg></a>
    </div>
    <div class="scene">
      <span class="halo" aria-hidden="true" data-parallaxe="0.04"></span>
      <span class="triangle" aria-hidden="true"></span>
      <span class="anneau" aria-hidden="true"><svg><use href="#embleme"/></svg></span>
      <div class="emplacement" data-img="P-hero" data-format="3:4" data-alt="Leïla Benali, conseillère en image, en pull noir à col roulé, la main levée près du visage, sur fond noir"></div>
    </div>
  </div>
</section>
```

## Le CSS du template d'origine (la section en dépend, ne garde que ce qu'elle utilise)

```css
:root{
  --noir:#000000; --nuit:#0A0A0A; --carte:#161616; --carte2:#1F1F1F; --filet:#2B2B2B; --barre:#1D1D1D;
  --or:#D99C44; --or-vif:#F3A240; --or-c:#D5AC50; --or-f:#B37E1E; --brun:#522700; --or-txt:#D29A4E; --or-sombre:#8A5A12;
  --blanc:#FFFFFF; --texte:#E4E4E4; --gris:#ABABAB; --rouge:#E0585F;
  --perle:#EDEDED; --perle2:#D9D9D6; --encre:#1A1A1A; --encre2:#3A3A3A;
  --courbe:cubic-bezier(.16,1,.3,1);
  --titre:'Spectral',Georgia,serif; --corps:'Source Serif 4',Georgia,serif; --logo:'Playfair Display',Georgia,serif;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:var(--corps);font-size:15px;line-height:1.55;color:var(--texte);background:var(--noir);-webkit-font-smoothing:antialiased;overflow-x:clip}
svg{display:block}
a{color:inherit;text-decoration:none}
h1,h2,h3{font-family:var(--titre);font-weight:400;color:var(--blanc);line-height:1.15}
b,strong{font-weight:600;color:var(--blanc)}
.wrap{width:min(1080px,100% - 40px);margin-inline:auto;position:relative;z-index:1}
section{position:relative}
.centre{text-align:center}
.or{color:var(--or-txt)}

/* Emplacement d'image : cadre teinté or sur noir, format écrit au centre */
.emplacement{position:relative;overflow:hidden;width:100%;background:radial-gradient(80% 60% at 50% 35%,#2B1E0C,#0E0C09 75%);border:1px solid rgba(217,156,68,.28)}
.emplacement[data-format="3:4"]{aspect-ratio:3/4}
.emplacement[data-format="4:3"]{aspect-ratio:4/3}
.emplacement[data-format="16:9"]{aspect-ratio:16/9}
.emplacement[data-format="1:1"]{aspect-ratio:1/1}
.emplacement[data-format="9:16"]{aspect-ratio:9/16}
.emplacement::after{content:attr(data-format);position:absolute;left:50%;top:50%;translate:-50% -50%;padding:6px 12px;border:1px solid rgba(243,162,64,.35);font:500 11px/1 var(--titre);letter-spacing:.24em;color:rgba(243,162,64,.75)}
.emplacement:has(img)::after{display:none}
.clair .emplacement{background:linear-gradient(160deg,#E9E2D6,#C9BBA4);border-color:rgba(138,90,18,.25)}
.clair .emplacement::after{color:var(--or-sombre);border-color:rgba(138,90,18,.4)}

/* Marque : « Trio d'Allure », serif à fort contraste et emblème à trois pétales */
.marque{display:inline-flex;align-items:center;gap:6px;color:var(--blanc)}
.marque .mots{font-family:var(--logo);line-height:.82;letter-spacing:-.02em}
.marque .mots span{display:block}
.marque .mots .l1{font-size:1em}
.marque .mots .l1 small{font-size:.32em;font-family:var(--titre);margin-left:3px;vertical-align:.4em;color:var(--or)}
.marque .mots .l2{font-family:var(--titre);font-size:.66em;letter-spacing:.06em;margin-top:.12em}
.marque svg{width:1.5em;height:1.25em;color:var(--or)}

/* Bouton : lingot d'or brossé, texte serif foncé, flèche oblique */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:44px;padding:10px 24px;border-radius:3px;
  background:linear-gradient(180deg,#E3BC64 0%,var(--or-c) 45%,var(--or-f) 100%);color:#1A1205;
  font:600 15px/1.2 var(--corps);box-shadow:0 0 0 1px rgba(255,214,140,.25) inset,0 8px 26px rgba(217,156,68,.35);transition:box-shadow .4s var(--courbe),filter .4s}
.btn:hover{filter:brightness(1.08);box-shadow:0 0 0 1px rgba(255,214,140,.4) inset,0 10px 36px rgba(217,156,68,.55)}
.btn svg{width:13px;height:13px;flex:none}
.btn.caps{font:600 12.5px/1.2 var(--titre);letter-spacing:.06em;text-transform:uppercase}

/* 01 · Hero */
.hero{padding:96px 0 40px;overflow:hidden;background:radial-gradient(40% 60% at 70% 45%,rgba(120,72,10,.22),transparent 70%),var(--noir)}
.hero .arche{position:absolute;left:3%;top:90px;width:110px;height:430px;border:1px solid #191919;border-radius:60px 60px 0 0;opacity:.8}
.hero .arche::before,.hero .arche::after{content:"";position:absolute;left:12px;right:12px;height:1px;background:#191919;top:34%}
.hero .arche::after{top:62%}
.hero .wrap{display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:center;min-height:560px}
.hero .txt{padding-left:4%;max-width:470px}
.hero .marque{font-size:46px;margin-bottom:22px}
.hero .date{font:400 14px/1 var(--titre);letter-spacing:.08em;color:var(--gris);margin-bottom:14px}
.hero h1{font-size:clamp(30px,2.6vw,36px);text-transform:uppercase;letter-spacing:.01em;line-height:1.1;margin-bottom:20px}
.hero h1 em{font-style:normal;color:var(--or-txt)}
.hero p{font-size:15.5px;line-height:1.45;color:var(--texte);margin-bottom:30px}
.hero p em{font-style:normal;color:var(--or-txt)}
.scene{position:relative;justify-self:center;width:min(440px,100%)}
.scene .halo{position:absolute;left:50%;top:40%;width:150%;aspect-ratio:1;translate:-50% -50%;border-radius:50%;background:radial-gradient(circle,rgba(243,162,64,.42) 0,rgba(217,156,68,.14) 30%,transparent 62%)}
.scene .anneau{position:absolute;right:-6%;top:16%;width:46%;aspect-ratio:1;border-radius:50%;border:1.5px solid rgba(217,156,68,.55);display:grid;place-items:center}
.scene .anneau svg{width:58%;height:58%;color:var(--or);opacity:.8}
.scene .triangle{position:absolute;left:-14%;right:-14%;bottom:0;height:62%;background:linear-gradient(180deg,rgba(80,52,16,.0),rgba(80,52,16,.45));clip-path:polygon(50% 0,100% 100%,0 100%)}
.scene .emplacement{z-index:1;border:0;-webkit-mask-image:linear-gradient(180deg,#000 72%,transparent);mask-image:linear-gradient(180deg,#000 72%,transparent);background:radial-gradient(70% 55% at 55% 30%,#4A2E0C,#120C05 80%)}

/* 02 · Détails de l'atelier : carrousel de cartes à photo */
.atelier{padding:70px 0 90px;overflow:hidden}
.atelier h2,.temoins h2{font-size:clamp(26px,2.4vw,34px);text-transform:uppercase;letter-spacing:.01em;text-align:center}
.caroussel{position:relative;max-width:1000px;margin:44px auto 0;padding:0 44px}
.piste{display:flex;gap:18px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding:4px 2px 10px}
.piste::-webkit-scrollbar{display:none}
.jour{flex:0 0 calc((100% - 36px)/3);scroll-snap-align:start;padding:10px 10px 22px;border-radius:10px;background:linear-gradient(180deg,#1B1B1B,#0E0E0E);border:1px solid #3A2C17;box-shadow:0 0 0 1px rgba(0,0,0,.6),0 14px 34px rgba(0,0,0,.6)}
.jour .emplacement{border-radius:4px;border:0}
.jour small{display:block;margin:18px 12px 4px;font:400 12px/1 var(--corps);color:var(--gris)}
.jour h3{margin:0 12px;padding-bottom:14px;border-bottom:1px solid var(--filet);font-size:20px;font-family:var(--corps)}
.jour p{margin:14px 12px 0;font-size:13.5px;line-height:1.5;color:var(--gris)}
.fl{position:absolute;top:50%;translate:0 -50%;width:44px;height:44px;display:grid;place-items:center;border:0;background:none;color:var(--or);cursor:pointer}
.fl svg{width:12px;height:16px}
.fl.g{left:0}.fl.d{right:0}
.atelier .cta{margin-top:40px}

/* 03 · Problèmes et bénéfices : deux cartes sombres, emblème qui les coiffe */
.duel{padding:30px 0 110px;overflow:hidden}
.duel .grille{position:relative;display:grid;grid-template-columns:1fr 1fr;gap:80px;max-width:1000px;margin:0 auto}
.duel .emb{position:absolute;left:50%;top:-58px;translate:-50% 0;width:170px;height:150px;color:var(--or);z-index:2;filter:drop-shadow(0 0 22px rgba(243,162,64,.35))}
.cote{position:relative;padding:56px 44px 50px;border-radius:14px;background:linear-gradient(170deg,#262626,#121212 60%,#0C0C0C);border:1px solid #202020;box-shadow:0 30px 60px rgba(0,0,0,.6)}
.cote::before{content:"";position:absolute;top:-1px;left:22%;width:24%;height:3px;border-radius:2px;background:var(--rouge);box-shadow:0 0 18px 4px rgba(224,88,95,.55)}
.cote.bien::before{left:auto;right:22%;background:var(--or-vif);box-shadow:0 0 18px 4px rgba(243,162,64,.55)}
.cote h3{display:flex;align-items:center;justify-content:center;gap:16px;font-family:var(--corps);font-size:30px;margin-bottom:34px}
.cote h3 svg{width:38px;height:38px}
.cote ul{list-style:none;display:grid;gap:22px}
.cote li{font-size:15px;line-height:1.45;color:var(--texte)}
.cote li em{font-style:normal;color:var(--rouge)}
.cote.bien li em{color:var(--or-txt)}

/* 04 · Témoignages : bande claire au bord biseauté, captures de messages */
.clair{background:var(--perle);color:var(--encre)}
.clair h2,.clair h3{color:var(--encre)}
.clair b{color:var(--encre)}
.temoins{width:min(1460px,100%);margin:0 auto;padding:90px 0 40px;clip-path:polygon(0 30px,52% 0,100% 30px,100% 100%,0 100%);overflow:hidden}
.temoins .caroussel{max-width:1300px;padding:0 60px;margin-top:40px}
.temoins .piste{gap:14px;-webkit-mask-image:linear-gradient(90deg,rgba(0,0,0,.35),#000 18%,#000 82%,rgba(0,0,0,.35));mask-image:linear-gradient(90deg,rgba(0,0,0,.35),#000 18%,#000 82%,rgba(0,0,0,.35))}
.msg{flex:0 0 calc((100% - 56px)/5);min-width:220px;scroll-snap-align:center;padding:14px 12px;background:#0F1412 repeating-linear-gradient(45deg,rgba(255,255,255,.025) 0 6px,transparent 6px 14px);border-radius:2px;min-height:340px;display:flex;flex-direction:column;justify-content:flex-end}
.msg .bulle{position:relative;padding:10px 12px 18px;border-radius:0 8px 8px 8px;background:#232A27;font:400 13px/1.45 system-ui,sans-serif;color:#EDEDED}
.msg .bulle::before{content:"";position:absolute;left:-7px;top:0;border:7px solid transparent;border-top-color:#232A27;border-right-color:#232A27;border-width:0 7px 9px 0}
.msg .bulle time{position:absolute;right:10px;bottom:4px;font-size:10px;color:#9CA6A1}
.msg .qui{display:flex;align-items:center;gap:8px;margin-top:10px;font:500 11.5px/1 system-ui,sans-serif;color:#B9C2BE}
.msg .qui i{width:22px;height:22px;border-radius:50%;background:linear-gradient(135deg,var(--or-c),var(--brun))}
.temoins .fl{width:44px;height:44px;border-radius:50%;background:#FFFFFF;color:var(--encre);box-shadow:0 4px 14px rgba(0,0,0,.18)}
.temoins .fl svg{width:9px;height:12px}

/* 05 · Garantie, dans la même bande claire */
.garantie{width:min(1460px,100%);margin:0 auto;padding:60px 0 80px}
.garantie .wrap{display:grid;grid-template-columns:auto 1fr;gap:40px;align-items:center;max-width:860px}
.sceau{display:flex;align-items:center;gap:16px;color:var(--or-sombre)}
.sceau svg{width:110px;height:92px;color:#B98232}
.sceau b{font:400 clamp(30px,3vw,40px)/1 var(--titre);text-transform:uppercase;color:#8A5A12;letter-spacing:.02em}
.garantie p{font-size:17px;line-height:1.45;color:var(--encre2)}

/* 06 · La mentore : fond clair à feuillage, portrait sur cadre doré */
.mentore{width:min(1460px,100%);margin:0 auto;padding:80px 0 110px;overflow:hidden;background:linear-gradient(100deg,#F2F2F0 0%,#E4E4E1 45%,#CFCFCB 100%);clip-path:polygon(0 0,100% 0,100% calc(100% - 26px),62% calc(100% - 26px),58% 100%,0 100%)}
.mentore .feuille{position:absolute;color:#2F4A2C;opacity:.9}
.mentore .f1{right:-30px;top:-20px;width:240px;height:300px;rotate:200deg}
.mentore .f2{left:-70px;bottom:-110px;width:200px;height:260px;rotate:20deg}
.mentore .f3{right:40px;bottom:-60px;width:150px;height:200px;rotate:-20deg;opacity:.7}
.mentore .wrap{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;max-width:1000px}
.mentore .txt{padding-left:4%}
.mentore small{font:400 15px/1 var(--corps);color:var(--or-sombre)}
.mentore h2{font-family:var(--corps);font-size:clamp(30px,3vw,40px);color:#8A5A12;margin:10px 0 26px;padding-bottom:14px;background:linear-gradient(var(--or),var(--or)) left bottom/80px 1px no-repeat}
.mentore p{font-size:16px;line-height:1.45;color:var(--encre)}
.mentore p+p{margin-top:20px}
.portrait{position:relative;width:min(380px,100%);justify-self:center}
.portrait .dore{position:absolute;inset:8% -8% 0 4%;border-radius:22px;background:linear-gradient(135deg,#F2C26E,#B37E1E 55%,#6E4610)}
.portrait .rond{position:absolute;right:-16%;top:22%;width:44%;aspect-ratio:1;border-radius:50%;border:1.5px solid rgba(255,230,180,.85);background:radial-gradient(circle,rgba(255,210,120,.55),transparent 65%);z-index:2;display:grid;place-items:center}
.portrait .rond svg{width:56%;height:56%;color:#FFF3D6}
.portrait .emplacement{border-radius:18px}

/* 07 · Offre */
.offre{padding:80px 0 60px;background:radial-gradient(50% 60% at 60% 40%,rgba(120,72,10,.14),transparent 70%)}
.offre .wrap{display:grid;grid-template-columns:1fr 360px;gap:70px;align-items:center;max-width:860px}
.offre h2{font-size:clamp(26px,2.6vw,32px);line-height:1.15;margin-bottom:12px}
.offre h3{font:400 18px/1.3 var(--corps);color:var(--texte);margin-bottom:14px}
.coches{list-style:none;display:grid;gap:12px}
.coches li{display:flex;gap:10px;font-size:14.5px;line-height:1.4;color:var(--or-txt)}
.coches svg{width:14px;height:14px;flex:none;margin-top:4px;color:var(--or)}
.prix{padding:44px 32px 36px;border:1px solid #303030;background:linear-gradient(180deg,#0E0E0E,#050505);text-align:center}
.prix .marque{font-size:46px}
.prix .sous{margin-top:12px;text-align:left;font-size:16px;color:var(--blanc)}
.prix .montant{display:block;text-align:left;margin:4px 0 22px;font:500 52px/1 var(--corps);letter-spacing:-.02em;color:var(--blanc)}
.prix .montant small{font-size:24px;font-weight:400;letter-spacing:0}
.prix .btn{width:100%}
.moyens{display:flex;justify-content:center;flex-wrap:wrap;gap:6px;margin:14px 0 22px}
.moyens span{height:16px;padding:0 6px;border-radius:2px;background:#202020;font:600 8.5px/16px system-ui,sans-serif;color:#9A9A9A;letter-spacing:.04em}
.encart{display:flex;gap:12px;align-items:flex-start;text-align:left;padding:12px 16px;margin-top:8px;background:#1C1C1C;font-size:13px;line-height:1.4;color:var(--gris)}
.encart svg{width:18px;height:18px;flex:none;color:var(--or);margin-top:1px}

/* 08 · FAQ */
.faq{padding:40px 0 60px}
.faq h2{font:400 26px/1.2 var(--corps);margin-bottom:24px}
.faq .liste{max-width:640px;margin:0 auto;display:grid;gap:12px;text-align:left}
.faq details{background:var(--barre)}
.faq summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:44px;padding:8px 18px;font:400 14px/1.3 var(--corps);color:var(--texte)}
.faq summary::-webkit-details-marker{display:none}
.faq summary::after{content:"";width:8px;height:8px;border-right:1.5px solid var(--gris);border-bottom:1.5px solid var(--gris);rotate:45deg;translate:0 -2px;flex:none;transition:rotate .3s var(--courbe)}
.faq details[open] summary::after{rotate:225deg;translate:0 2px}
.faq details p{padding:0 18px 16px;font-size:14px;color:var(--gris)}

/* 09 · Relance WhatsApp */
.relance{padding:40px 0 70px;background:radial-gradient(40% 70% at 50% 30%,rgba(255,255,255,.05),transparent 70%)}
.relance h2{font:400 clamp(28px,2.8vw,36px)/1.15 var(--corps)}
.relance p{max-width:440px;margin:14px auto 26px;font-size:15px;color:var(--texte)}
.relance .btn svg{width:16px;height:16px}

/* 10 · Pied */
#pied{background:var(--noir);color:var(--gris);font-size:13px}
#pied .wrap{display:flex;align-items:center;gap:24px;padding:26px 0 40px;max-width:860px}
#pied .wrap>span{white-space:nowrap}
#pied .trait{flex:1;height:1px;background:linear-gradient(90deg,var(--or),rgba(217,156,68,.15))}
#pied .droite{display:flex;align-items:center;gap:8px;white-space:nowrap}
#pied .droite svg{width:16px;height:16px;color:var(--or)}

@media (max-width:1080px){
  .jour{flex-basis:calc((100% - 18px)/2)}
  .msg{flex-basis:calc((100% - 28px)/3)}
  .duel .grille{gap:40px}
  .cote{padding:56px 28px 44px}
  .offre .wrap{gap:40px}
}
@media (max-width:820px){
  .hero{padding:40px 0 30px}
  .hero .arche{display:none}
  .hero .wrap{grid-template-columns:1fr;min-height:0;gap:10px}
  .hero .scene{order:-1;width:min(340px,82%)}
  .hero .txt{padding-left:0;max-width:560px}
  .hero .marque{font-size:38px;margin-bottom:14px}
  .hero h1{font-size:28px}
  .caroussel{padding:0 36px}
  .duel{padding-top:60px}
  .duel .grille{grid-template-columns:1fr;gap:70px;max-width:540px}
  .duel .emb{top:-60px;width:140px;height:124px}
  .cote{padding-top:76px}
  .mentore .f1{top:-150px;right:-110px;width:200px}
  .mentore .f2{bottom:-150px;left:-90px}
  .temoins{clip-path:polygon(0 18px,52% 0,100% 18px,100% 100%,0 100%);padding-top:70px}
  .temoins .caroussel{padding:0 50px}
  .garantie .wrap{grid-template-columns:1fr;gap:20px;justify-items:center;text-align:center}
  .mentore{padding:60px 0 90px}
  .mentore .wrap{grid-template-columns:1fr;gap:50px}
  .mentore .txt{padding-left:0}
  .portrait{width:min(320px,80%)}
  .offre .wrap{grid-template-columns:1fr;max-width:420px}
}
@media (max-width:520px){
  .jour{flex-basis:100%}
  .msg{flex-basis:100%;min-width:0}
  .temoins .piste{-webkit-mask-image:none;mask-image:none}
  .hero h1{font-size:24px}
  .hero p{font-size:14.5px}
  .cote{padding:50px 20px 36px}
  .cote h3{font-size:25px}
  .sceau svg{width:80px;height:68px}
  .prix{padding:36px 20px 28px}
  .prix .montant{font-size:42px}
  #pied .wrap{flex-direction:column;align-items:flex-start;gap:14px}
  #pied .trait{width:100%;flex:none}
  #pied .wrap>span{white-space:normal}
}
```
