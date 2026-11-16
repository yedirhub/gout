# Prompt · Section « La preuve » du template O « Faisceau de scène »
# Par Yedidia Ruben - Digital Strategist. À coller dans une IA qui code, avec ta page.

Construis une section « La preuve » pour ma page, dans le même esprit que le code de référence plus bas. Garde la structure, le geste et les proportions ; reprends mes couleurs, mes polices et mes textes à moi.

- Son rôle : Faire parler les autres : « ça a marché pour des gens comme moi ».
- Où la placer : Juste après la promesse, puis en rappel avant l'offre.
- Sa structure : Un titre court ou aucun, puis des avis, des messages ou des vidéos, en grille ou en rangée qui déborde.
- La règle qui fait la différence : Des avis ou des messages au format réel (Google, WhatsApp) font plus vrai que des citations encadrées.
- Le geste de cette variante : Vignettes vidéo carrées en deux colonnes
- Animations : attributs data-rv, data-lignes, data-compte, data-incline, data-aimant (moteur anim.js). Sans le moteur, retire-les.
- Aucun tiret long dans les textes. Contraste de 4,5 au moins. Lisible de 360 à 1920 px.

## Le code de référence (HTML)

```html
<section class="resultats" id="resultats">
  <div class="wrap">
    <h2 data-rv>Ne vous étonnez pas d'obtenir<br>des <span class="o">résultats</span> comme ceux-ci...</h2>
    <div class="videos">
      <div class="vid" data-rv><div class="emplacement" data-img="O-temoin-1" data-format="1:1" data-alt="Témoignage vidéo d'une entrepreneure de Douala, face caméra"></div><span class="lecture" aria-hidden="true"><svg><use href="#lire"/></svg></span></div>
      <div class="vid" data-rv><div class="emplacement" data-img="O-temoin-2" data-format="1:1" data-alt="Témoignage vidéo d'un consultant sur scène, micro à la main"></div><span class="lecture" aria-hidden="true"><svg><use href="#lire"/></svg></span></div>
      <div class="vid" data-rv><div class="emplacement" data-img="O-temoin-3" data-format="1:1" data-alt="Témoignage vidéo d'une coach qui anime un live depuis son bureau"></div><span class="lecture" aria-hidden="true"><svg><use href="#lire"/></svg></span></div>
      <div class="vid" data-rv><div class="emplacement" data-img="O-temoin-4" data-format="1:1" data-alt="Témoignage vidéo d'un formateur devant un tableau blanc"></div><span class="lecture" aria-hidden="true"><svg><use href="#lire"/></svg></span></div>
    </div>
    <div class="action"><a class="btn reflet" href="#offre" data-aimant>Je participe&nbsp;!</a></div>
  </div>
</section>
```

## Le CSS du template d'origine (la section en dépend, ne garde que ce qu'elle utilise)

```css
:root{
  --noir:#000000; --nuit:#101010; --orange:#F5761D; --orange-f:#C85A0C; --lime:#89F21B; --vert-wa:#2DC547;
  --blanc:#FFFFFF; --texte:#E6E6E6; --gris:#BABABA; --filet:#5E5E5E; --perle:#D9D9D9; --filigrane:#EBEBEB; --rouge:#FF2A1A;
  --courbe:cubic-bezier(.16,1,.3,1);
  --police:'Inter',system-ui,sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:var(--police);font-size:16px;line-height:1.5;color:var(--texte);background:var(--noir);-webkit-font-smoothing:antialiased;overflow-x:clip}
svg{display:block}
a{color:inherit;text-decoration:none}
h1,h2,h3{font-family:var(--police);color:var(--blanc);line-height:1.2;font-weight:700;text-transform:uppercase;letter-spacing:-.005em}
h2{font-size:clamp(24px,2.4vw,30px);text-align:center}
.o{color:var(--orange)}
.wrap{width:min(920px,100% - 40px);margin-inline:auto;position:relative;z-index:1}
section{position:relative}
.centre{text-align:center}

/* Emplacements d'image */
.emplacement{position:relative;overflow:hidden;width:100%;background:radial-gradient(70% 60% at 50% 40%,rgba(245,118,29,.28),transparent 70%),linear-gradient(180deg,#1A1A1A,#0A0A0A);border:1px solid rgba(245,118,29,.45)}
.emplacement[data-format="16:9"]{aspect-ratio:16/9}.emplacement[data-format="4:3"]{aspect-ratio:4/3}.emplacement[data-format="1:1"]{aspect-ratio:1/1}.emplacement[data-format="3:4"]{aspect-ratio:3/4}.emplacement[data-format="9:16"]{aspect-ratio:9/16}
.emplacement::after{content:attr(data-format);position:absolute;left:50%;top:50%;translate:-50% -50%;padding:4px 10px;border-radius:20px;background:var(--orange);font:700 11px/1 var(--police);letter-spacing:.06em;color:#000}
.emplacement:has(img)::after{display:none}

/* Bouton vert lime lumineux : le geste de la page */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:48px;min-width:min(340px,100%);padding:0 34px;border-radius:30px;background:var(--lime);color:#0A0A0A;
  font:700 16px/1.2 var(--police);text-transform:uppercase;box-shadow:0 0 22px rgba(137,242,27,.7),0 0 4px rgba(137,242,27,.9);transition:box-shadow .4s var(--courbe),translate .35s var(--courbe)}
.btn:hover{box-shadow:0 0 38px rgba(137,242,27,.95),0 0 6px rgba(137,242,27,1)}
.btn.blanc{background:#fff;box-shadow:0 8px 24px rgba(0,0,0,.18)}
.btn.blanc:hover{box-shadow:0 12px 34px rgba(0,0,0,.3)}
.btn.wa{background:var(--vert-wa);color:#fff;box-shadow:0 0 26px rgba(45,197,71,.7);font-size:19px}
.btn.wa svg{width:26px;height:26px}
.action{text-align:center;margin-top:50px}

/* 01 · Hero : le faisceau orange derrière l'oratrice */
.hero{background:radial-gradient(60% 80% at 75% 40%,#2A1608,#0B0704 55%,#000 80%);overflow:hidden}
.hero::before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(90deg,rgba(255,255,255,.02) 0 2px,transparent 2px 9px);mask-image:linear-gradient(180deg,#000,transparent 70%);-webkit-mask-image:linear-gradient(180deg,#000,transparent 70%)}
.hero .wrap{display:grid;grid-template-columns:1.05fr 1fr;align-items:end;min-height:560px}
.hero .txt{padding:70px 0 70px;position:relative;z-index:2}
.logo{display:inline-grid;justify-items:start;gap:2px}
.logo small{display:flex;align-items:center;gap:10px;font:500 9px/1 var(--police);letter-spacing:.32em;color:var(--gris);text-transform:uppercase;width:100%}
.logo small::before,.logo small::after{content:"";flex:1;height:1px;background:var(--gris)}
.logo b{font:italic 900 30px/1 var(--police);color:var(--orange);letter-spacing:-.02em;text-transform:uppercase}
.logo span{font:italic 800 14px/1 var(--police);color:#fff;text-transform:uppercase}
.hero h1{font-size:clamp(26px,2.6vw,34px);line-height:1.3;margin:30px 0 14px}
.hero p{font-size:17px;line-height:1.4;max-width:440px;color:#fff}
.hero .btn{margin-top:36px;min-width:270px}
.scene{position:relative;align-self:stretch}
.faisceau{position:absolute;left:46%;top:-10%;width:150px;height:120%;background:linear-gradient(90deg,#F5761D,#FF9A3A 50%,#F5761D);transform:skewX(-6deg);box-shadow:0 0 60px rgba(245,118,29,.6)}
.faisceau::before,.faisceau::after{content:"";position:absolute;width:16px;height:16px;border-radius:50%;background:#fff;box-shadow:0 0 20px 8px rgba(255,200,120,.9)}
.faisceau::before{left:-8px;top:24%}
.faisceau::after{right:-8px;top:42%}
.scene .emplacement{position:absolute;left:0;right:-6%;bottom:0;width:auto;border:0;background:radial-gradient(60% 60% at 50% 40%,rgba(245,118,29,.22),transparent 70%),transparent;box-shadow:inset 0 0 0 1px rgba(245,118,29,.35);-webkit-mask-image:linear-gradient(180deg,#000 75%,transparent);mask-image:linear-gradient(180deg,#000 75%,transparent)}
.infos{position:relative;z-index:3;background:var(--orange)}
.infos ul{list-style:none;display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;width:min(920px,100% - 40px);margin:0 auto;padding:9px 0}
.infos li{display:flex;align-items:center;gap:8px;font-size:13px;color:#fff;font-weight:500}
.infos svg{width:20px;height:20px;flex:none}

/* 02 · L'appel : carte orange sur fond blanc, mot géant derrière */
.appel{background:#fff;padding:110px 0 0;overflow:hidden}
.appel .geant{position:relative;z-index:0;margin-top:-140px;font:italic 900 clamp(90px,19vw,300px)/.8 var(--police);color:var(--filigrane);text-transform:uppercase;letter-spacing:-.03em;text-align:center;white-space:nowrap;user-select:none}
.carte-appel{position:relative;z-index:1;width:min(540px,100%);margin:0 auto;padding:50px 66px 44px;border-radius:14px;background:var(--orange);text-align:center;box-shadow:-60px 30px 80px rgba(0,0,0,.12)}
.carte-appel h2{font-size:clamp(23px,2.2vw,27px);line-height:1.38}
.carte-appel p{margin:16px 0 34px;font-size:16px;color:#fff;line-height:1.4}
.carte-appel .btn{min-width:min(270px,100%)}

/* 03 · Programme : 5 cartes à filet gris */
.programme{padding:120px 0 40px}
.programme h2{margin-bottom:46px}
.cours{display:grid;gap:30px}
.cours article{padding:56px 36px 50px;border-radius:16px;border:1px solid var(--gris);min-height:330px}
.cours .tete{display:flex;align-items:center;gap:18px;margin-bottom:34px}
.cours .tag{flex:none;height:44px;padding:0 18px;display:grid;place-items:center;border-radius:6px;background:var(--orange);font:600 19px/1 var(--police);color:#fff;text-transform:uppercase}
.cours h3{font-size:18px;font-weight:600;line-height:1.4;max-width:500px}
.puces{list-style:none;display:grid;gap:22px}
.puces li{display:flex;align-items:center;gap:10px;font-size:16px;color:#fff;line-height:1.4}
.puces li::before{content:"";flex:none;width:20px;height:20px;border-radius:50%;background:var(--orange) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M8 6l4 4-4 4' stroke='white' stroke-width='2.2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") center/100%}

/* 04 · Résultats : vignettes vidéo en 2 colonnes */
.resultats{padding:90px 0 40px}
.resultats h2{line-height:1.4;margin-bottom:50px}
.videos{display:grid;grid-template-columns:1fr 1fr;gap:24px 24px}
.vid{position:relative}
.vid .emplacement{border:0;background:linear-gradient(180deg,#262626,#141414)}
.vid .emplacement::after{top:auto;bottom:14px}
.vid .lecture{position:absolute;left:50%;top:50%;translate:-50% -50%;width:70px;height:70px;border-radius:50%;background:rgba(255,255,255,.18);border:1px solid rgba(255,255,255,.35);backdrop-filter:blur(4px);display:grid;place-items:center;color:#fff;z-index:2}
.vid .lecture svg{width:26px;height:26px;margin-left:5px}

/* 05 · Ce que vous saurez faire : lignes à flèche */
.capable{padding:100px 0 40px}
.capable h2{line-height:1.35}
.capable h2::after{content:"";display:block;width:190px;height:6px;margin:16px auto 0;background:var(--orange)}
.lignes{list-style:none;max-width:564px;margin:40px auto 0}
.lignes li{display:flex;align-items:center;gap:13px;padding:24px 0 12px;border-bottom:1px solid var(--gris);font-size:16px;line-height:1.4;color:var(--texte)}
.lignes li b{color:#fff;font-weight:600}
.lignes i{flex:none;width:26px;height:26px;border-radius:50%;background:var(--orange);display:grid;place-items:center;color:#fff}
.lignes i svg{width:14px;height:14px}

/* 06 · Pour qui : cartes numérotées */
.pour{padding:120px 0 40px}
.pour h2{line-height:1.35;margin-bottom:46px}
.grille-pour{display:grid;grid-template-columns:1fr 1fr;gap:21px;max-width:652px;margin:0 auto}
.grille-pour div{display:flex;align-items:center;gap:13px;min-height:146px;padding:20px 40px 20px 20px;border-radius:8px;border:1px solid var(--gris);font-size:16px;color:#fff;line-height:1.4}
.grille-pour span{flex:none;width:26px;height:26px;border-radius:50%;background:var(--orange);display:grid;place-items:center;font:700 14px/1 var(--police);color:#fff}

/* 07 · Offre : deux formules */
.offre{padding:120px 0 40px}
.offre .accroche{max-width:560px;margin:0 auto;font-size:clamp(21px,2.1vw,25px);line-height:1.33}
.offre .accroche+p{max-width:480px;margin:14px auto 0;font-size:16px;color:#fff;text-align:center}
.offre hr{border:0;border-top:1px solid var(--gris);max-width:536px;margin:60px auto 64px}
.offre h2.choix{margin-bottom:46px}
.formule{border-radius:16px;border:1px solid var(--gris);overflow:hidden;text-align:center}
.formule+.formule{margin-top:40px}
.formule h3{height:42px;display:grid;place-items:center;background:var(--orange);font-size:20px;font-weight:600}
.formule .corps{padding:42px 56px 56px}
.formule ul{list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:16px;text-align:left}
.formule li{display:flex;align-items:center;gap:10px;min-height:66px;padding:10px 20px;border-radius:6px;border:1px solid var(--gris);font-size:12px;line-height:1.4;color:#fff}
.formule li::before{content:"";flex:none;width:17px;height:17px;border-radius:50%;background:var(--orange) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M5.5 10.5l3 3 6-7' stroke='white' stroke-width='2.4' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") center/100%}
.formule .avant{margin-top:38px;font-size:18px;color:#fff;text-transform:uppercase}
.formule .avant s{color:#8C8C8C}
.formule .prix{display:block;font:700 clamp(54px,8vw,100px)/1.05 var(--police);letter-spacing:-.03em;color:#fff;margin:6px 0 30px}
.formule .prix small{font-size:.42em;letter-spacing:0;margin-left:.15em}

/* 08 · La mentore */
.mentore{padding:120px 0 90px;overflow:hidden}
.mentore .wrap{display:grid;grid-template-columns:1fr 1.05fr;gap:20px;align-items:center}
.mentore .kicker{font:500 11px/1 var(--police);letter-spacing:.18em;color:var(--orange);text-transform:uppercase}
.mentore h2{text-align:left;font-size:clamp(24px,2.4vw,27px);margin:14px 0 26px}
.mentore p{font-size:16px;line-height:1.4;color:#fff;max-width:400px}
.mentore p+p{margin-top:22px}
.mentore .portrait{position:relative;padding:20px 0}
.mentore .portrait::before{content:"";position:absolute;left:20%;top:16%;width:60%;height:50%;border-radius:50%;background:radial-gradient(circle,rgba(245,118,29,.9),rgba(245,118,29,.2) 50%,transparent 70%);filter:blur(30px)}
.mentore .grand .emplacement{border:0;-webkit-mask-image:linear-gradient(180deg,#000 70%,transparent);mask-image:linear-gradient(180deg,#000 70%,transparent);background:radial-gradient(60% 60% at 50% 40%,rgba(245,118,29,.25),transparent 70%),linear-gradient(180deg,rgba(26,26,26,.7),rgba(10,10,10,.4));box-shadow:inset 0 0 0 1px rgba(245,118,29,.35)}
.mentore .petit{position:absolute;width:30%;border-radius:6px;overflow:hidden;box-shadow:0 18px 30px rgba(0,0,0,.5);z-index:2}
.mentore .petit .emplacement{border:1px solid var(--orange)}
.mentore .petit.a{left:4%;top:20%}
.mentore .petit.b{right:0;top:52%}

/* 09 · Pourquoi un prix si bas : bande orange */
.pourquoi{background:var(--orange);padding:76px 0 90px}
.pourquoi h2{font-size:clamp(24px,2.4vw,27px);line-height:1.4;max-width:450px;margin:0 auto}
.pourquoi hr{border:0;border-top:1px solid rgba(255,255,255,.55);max-width:450px;margin:14px auto 22px}
.pourquoi p{max-width:450px;margin:0 auto;text-align:center;font-size:16px;line-height:1.4;color:#fff}
.pourquoi .action{margin-top:36px}

/* 10 · Attention : alerte et rappel des formules */
.alerte{padding:120px 0 40px}
.alerte .wrap{display:grid;grid-template-columns:1fr 1fr;gap:30px;max-width:710px}
.danger{padding:60px 22px 46px;border-radius:12px;border:1px solid var(--gris);text-align:center}
.danger svg{width:170px;height:150px;margin:0 auto;color:var(--rouge)}
.danger .grand-titre{display:block;font:700 clamp(32px,3.4vw,42px)/1.1 var(--police);color:#fff;text-transform:uppercase;margin:12px 0 16px}
.danger .sous{font:700 17px/1.4 var(--police);color:#fff;text-transform:uppercase}
.danger .sous span{color:var(--rouge)}
.danger hr{border:0;border-top:1px solid var(--gris);margin:20px 0}
.danger p{font-size:15px;line-height:1.45;color:#fff}
.danger p b{color:var(--orange);font-weight:600}
.minis{display:grid;gap:30px}
.mini{border-radius:12px;border:1px solid var(--gris);overflow:hidden;text-align:center}
.mini h3{height:42px;display:grid;place-items:center;background:var(--orange);font-size:20px;font-weight:600}
.mini .prix{display:block;font:700 clamp(40px,4.4vw,58px)/1 var(--police);color:#fff;letter-spacing:-.02em;margin:34px 0 22px}
.mini .prix small{font-size:.42em}
.mini .btn{min-width:0;width:calc(100% - 60px);margin:0 30px 34px;font-size:15px}

/* 11 · FAQ : le mot géant qui s'efface, rangées orange */
.faq{padding:120px 0 40px}
.faq .geant{display:block;text-align:center;font:800 clamp(64px,7vw,88px)/.8 var(--police);text-transform:uppercase;background:linear-gradient(180deg,#fff 0%,#7A7A7A 55%,#000 100%);-webkit-background-clip:text;background-clip:text;color:transparent}
.faq h2{margin:4px 0 44px}
.faq details{border-radius:6px;background:var(--orange);margin-bottom:17px}
.faq summary{list-style:none;cursor:pointer;display:flex;align-items:center;gap:10px;min-height:58px;padding:10px 20px;font-size:16px;color:#fff}
.faq summary::-webkit-details-marker{display:none}
.faq summary::before{content:"";flex:none;width:26px;height:26px;border-radius:50%;background:#fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 26'%3E%3Cpath d='M13 7v12M7 13h12' stroke='%23F5761D' stroke-width='2.6' stroke-linecap='round'/%3E%3C/svg%3E") center/100%;transition:rotate .35s var(--courbe)}
.faq details[open] summary::before{rotate:45deg}
.faq details p{padding:0 20px 20px 56px;font-size:15px;line-height:1.5;color:#fff}

/* 12 · Une question ? */
.contact{padding:110px 0 120px}
.contact h2{font-size:clamp(26px,2.6vw,32px)}
.contact p{margin:10px 0 30px;font-size:18px;color:#fff}

/* 13 · Pied */
#pied{background:var(--nuit);font-size:11px;color:#E6E6E6;text-transform:uppercase;letter-spacing:.02em}
#pied .wrap{display:flex;justify-content:space-between;align-items:center;gap:20px;min-height:76px;padding:16px 0}
#pied .droite{display:flex;align-items:center;gap:8px;text-align:right}
#pied .droite a{display:inline-flex;align-items:center;gap:8px;min-height:44px}
#pied .droite svg{width:18px;height:18px}

@media (max-width:860px){
  .hero .wrap{grid-template-columns:1fr;min-height:0}
  .hero .txt{padding:50px 0 20px;text-align:center}
  .hero p{margin-inline:auto}
  .scene{height:auto;min-height:0;margin:0 auto;width:min(480px,100%)}
  .scene .emplacement{position:relative;right:auto}
  .faisceau{left:58%;width:90px}
  .infos ul{justify-content:center;gap:8px 22px}
  .carte-appel{padding:40px 26px 36px}
  .appel .geant{margin-top:-60px}
  .cours article{padding:36px 22px 34px;min-height:0}
  .cours .tete{flex-direction:column;align-items:flex-start;gap:14px}
  .mentore .wrap{grid-template-columns:1fr;gap:40px}
  .mentore .portrait{max-width:480px;width:100%;margin:0 auto}
  .alerte .wrap{grid-template-columns:1fr;max-width:440px}
}
@media (max-width:620px){
  .videos{grid-template-columns:1fr 1fr;gap:12px}
  .vid .lecture{width:50px;height:50px}
  .grille-pour{grid-template-columns:1fr}
  .grille-pour div{min-height:0;padding:20px}
  .formule .corps{padding:30px 18px 36px}
  .formule ul{grid-template-columns:1fr}
  .btn{padding:0 22px;font-size:15px}
  .btn.wa{font-size:16px}
  .hero h1{font-size:24px}
  #pied .wrap{flex-direction:column;text-align:center;gap:4px}
}
@media (prefers-reduced-motion:reduce){.faq summary::before{transition:none}}
```
