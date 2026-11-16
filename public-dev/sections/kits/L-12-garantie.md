# Prompt · Section « La garantie » du template L « Ruban jaune nuit »
# Par Yedidia Ruben - Digital Strategist. À coller dans une IA qui code, avec ta page.

Construis une section « La garantie » pour ma page, dans le même esprit que le code de référence plus bas. Garde la structure, le geste et les proportions ; reprends mes couleurs, mes polices et mes textes à moi.

- Son rôle : Retirer le risque : « si ça ne vous va pas, je vous rembourse ».
- Où la placer : Après l'offre.
- Sa structure : Un objet (sceau, médaillon), un titre « le risque est pour moi », 3 lignes, un bouton.
- La règle qui fait la différence : Un objet réel plutôt qu'un bouclier. Une durée chiffrée.
- Le geste de cette variante : sceau jaune festonné qui se balance
- Animations : attributs data-rv, data-lignes, data-compte, data-incline, data-aimant (moteur anim.js). Sans le moteur, retire-les.
- Aucun tiret long dans les textes. Contraste de 4,5 au moins. Lisible de 360 à 1920 px.

## Le code de référence (HTML)

```html
<section class="garantie" id="garantie">
  <div class="wrap">
    <div class="sceau" data-rv role="img" aria-label="Sceau : 7 jours de garantie">
      <svg class="s" viewBox="0 0 240 240" aria-hidden="true"><circle cx="120" cy="120" r="98" fill="#C6EA0B"/><circle cx="120" cy="120" r="98" fill="none" stroke="#C6EA0B" stroke-width="26" stroke-linecap="round" stroke-dasharray="0 25.65"/><circle cx="120" cy="120" r="82" fill="none" stroke="#0B051B" stroke-width="3"/></svg>
      <div class="txt" aria-hidden="true"><span class="etoiles">★★★★★</span><span class="sept">7</span><span class="jours">jours de<br>garantie</span></div>
    </div>
    <div>
      <h2 data-lignes>Votre risque est NUL !<br><em>Vous avez 7 jours de garantie</em></h2>
      <p data-rv>Si, pour une raison ou une autre, le contenu ou vos premiers résultats ne vous satisfont pas, il suffit de nous écrire dans les 7 jours qui suivent l'achat : nous vous remboursons 100 % du montant payé.</p>
      <p data-rv><span class="j">Sans complication, sans question.</span> Notre priorité : que vous vous sentiez en confiance au moment d'investir dans la méthode.</p>
    </div>
  </div>
</section>
```

## Le CSS du template d'origine (la section en dépend, ne garde que ce qu'elle utilise)

```css
:root{
  --nuit:#0B051B; --nuit2:#0D0722; --nuit3:#150B2C; --carte:#190F30; --carte2:#160C2F; --violet:#220E54; --violet-c:#3B1E85;
  --jaune:#C6EA0B; --ruban:#D2F201; --jaune-p:#EAFAA1; --blanc:#FAF6FF; --rouge:#FF4953; --vert:#5BD702;
  --texte:#D9D4E6; --doux:#A49DB8; --filet:rgba(198,234,11,.22); --filet-v:rgba(170,150,230,.16);
  --courbe:cubic-bezier(.16,1,.3,1);
  --titre:'Inter Tight',system-ui,sans-serif; --corps:'Inter',system-ui,sans-serif; --ruban-f:'Barlow Condensed','Inter Tight',sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:var(--corps);font-size:15px;line-height:1.6;color:var(--texte);background:var(--nuit);-webkit-font-smoothing:antialiased;overflow-x:clip}
svg{display:block}
a{color:inherit;text-decoration:none}
h1,h2,h3{font-family:var(--titre);color:#fff;font-weight:600;letter-spacing:-.025em;line-height:1.15}
h2{font-size:clamp(26px,2.9vw,40px)}
h2 em,h1 em,h3 em{font-style:normal;color:var(--jaune)}
b,strong{color:#fff;font-weight:600}
.j{color:var(--jaune)}
.wrap{width:min(1080px,100% - 40px);margin-inline:auto;position:relative;z-index:1}
section{position:relative}
.centre{text-align:center}
/* La trame : colonnes verticales très fines, comme sur la source */
.trame{background-image:linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);background-size:calc(100% / 6) 100%}
/* Filet jaune qui sépare deux sections, plus vif au centre */
.filet{height:2px;background:linear-gradient(90deg,transparent,var(--jaune) 30%,var(--jaune) 70%,transparent);opacity:.75}

/* Bouton jaune fluo, halo qui brille */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:48px;padding:12px 30px;border-radius:4px;background:linear-gradient(180deg,#DDF65A,var(--jaune) 60%);color:var(--nuit);
  font:700 15px/1.2 var(--titre);text-transform:uppercase;letter-spacing:.01em;box-shadow:0 0 0 1px rgba(234,250,161,.6) inset,0 0 26px rgba(198,234,11,.45);transition:box-shadow .4s var(--courbe),background .4s}
.btn:hover{box-shadow:0 0 0 1px #fff inset,0 0 40px rgba(198,234,11,.7)}
.btn svg{width:16px;height:16px}
.btn:focus-visible,summary:focus-visible{outline:2px solid #fff;outline-offset:3px}
.sur{display:block;margin-top:10px;font-size:10.5px;letter-spacing:.04em;text-transform:uppercase;text-decoration:underline;text-underline-offset:3px;color:var(--doux)}

/* Le logo : étiquette dans un rond jaune */
.logo{display:inline-flex;align-items:center;gap:10px;font:800 22px/1 var(--titre);letter-spacing:-.02em;color:var(--jaune)}
.logo b{color:var(--jaune);font-weight:800}
.logo i{width:38px;height:38px;border-radius:50%;background:var(--jaune);display:grid;place-items:center;color:var(--nuit);box-shadow:0 0 0 4px rgba(198,234,11,.18),0 0 20px rgba(198,234,11,.4)}
.logo i svg{width:18px;height:18px}

/* Emplacement d'image : vide, il fait propre (violet profond, filet jaune, format au centre) */
.emplacement{position:relative;overflow:hidden;width:100%;background:radial-gradient(120% 90% at 70% 20%,#2A1760,#140A2E 70%);border:1px solid var(--filet)}
.emplacement[data-format="16:9"]{aspect-ratio:16/9}
.emplacement[data-format="4:3"]{aspect-ratio:4/3}
.emplacement[data-format="1:1"]{aspect-ratio:1/1}
.emplacement[data-format="3:4"]{aspect-ratio:3/4}
.emplacement[data-format="9:16"]{aspect-ratio:9/16}
.emplacement::after{content:attr(data-format);position:absolute;left:50%;top:50%;translate:-50% -50%;padding:4px 10px;border:1px solid rgba(198,234,11,.3);border-radius:20px;font:600 11px/1 var(--titre);letter-spacing:.14em;color:rgba(234,250,161,.7)}
.emplacement:has(img)::after{display:none}

/* 01 · Hero */
.hero{padding:40px 0 70px;overflow:hidden;background:radial-gradient(60% 60% at 15% 35%,rgba(59,30,133,.35),transparent 70%),radial-gradient(50% 60% at 90% 30%,rgba(34,14,84,.6),transparent 70%),linear-gradient(180deg,var(--nuit3),var(--nuit2))}
.hero .logo{margin-bottom:28px}
.hero h1{font-size:clamp(30px,3.4vw,46px);max-width:760px;margin:0 auto 30px}
.video{position:relative;width:min(620px,100%);margin:0 auto;border:1px solid rgba(198,234,11,.55);border-radius:6px;overflow:hidden;box-shadow:0 30px 70px rgba(0,0,0,.55),0 0 0 6px rgba(198,234,11,.05)}
.video .emplacement{border:0}
.video .voile{position:absolute;inset:0;background:linear-gradient(90deg,rgba(11,5,27,.85),rgba(11,5,27,.2) 55%,transparent);pointer-events:none}
.video .appel{position:absolute;left:7%;top:50%;translate:0 -50%;font:800 clamp(16px,2.3vw,26px)/1.1 var(--titre);text-transform:uppercase;color:#fff;text-align:left}
.video .appel em{font-style:normal;color:var(--jaune);display:block}
.lecture{position:absolute;left:50%;top:50%;translate:-50% -50%;width:64px;height:60px;border-radius:8px;background:var(--jaune);display:grid;place-items:center;color:var(--nuit);box-shadow:0 0 0 8px rgba(198,234,11,.18),0 0 30px rgba(198,234,11,.55)}
.lecture svg{width:22px;height:22px}
.video .barre{position:absolute;left:0;bottom:0;height:5px;width:12%;background:var(--rouge)}
.hero .sous{max-width:470px;margin:24px auto 22px;font-size:16px;color:var(--texte)}

/* 02 · Techniques : cartes à onglet jaune */
.techniques{padding:80px 0 60px;background:var(--nuit2)}
.techniques h2{margin-bottom:46px}
.atouts{display:grid;grid-template-columns:repeat(6,1fr);gap:18px;max-width:830px;margin:0 auto;text-align:left}
.atout{grid-column:span 2;position:relative;padding:44px 30px 30px;border-radius:4px;background:var(--carte);border:1px solid rgba(255,255,255,.05);transition:border-color .4s,translate .4s var(--courbe)}
.atout:nth-child(-n+2){grid-column:span 3}
.atout::before{content:"";position:absolute;left:30px;top:0;width:64px;height:5px;background:var(--jaune);box-shadow:0 6px 18px rgba(198,234,11,.5)}
.atout:hover{border-color:var(--filet);translate:0 -4px}
.atout .ic{width:32px;height:32px;border-radius:6px;background:rgba(255,255,255,.06);display:grid;place-items:center;color:var(--jaune);margin-bottom:16px}
.atout .ic svg{width:18px;height:18px}
.atout h3{font-size:16px;color:var(--jaune);margin-bottom:10px}
.atout p{font-size:13.5px;line-height:1.5;color:var(--texte)}
.descente{width:40px;height:62px;margin:60px auto 0;border:1px solid rgba(255,255,255,.4);border-radius:22px;display:grid;place-items:center;color:#fff}
.descente svg{width:14px;height:30px;animation:descend 2.2s var(--courbe) infinite}
@keyframes descend{0%,100%{translate:0 -4px}50%{translate:0 6px}}

/* 03 · Les rubans croisés qui défilent */
.rubans{height:300px;overflow:hidden;background:var(--nuit2)}
.ruban{position:absolute;left:-10%;width:120%;height:58px;display:flex;align-items:center;overflow:hidden;background:var(--ruban);box-shadow:0 14px 30px rgba(0,0,0,.45)}
.ruban.r1{top:118px;rotate:4.5deg;z-index:2}
.ruban.r2{top:124px;rotate:-4deg;background:#B9D60A;filter:brightness(.92)}
.ruban div{display:flex;width:max-content;animation:file 34s linear infinite;font:700 italic 30px/1 var(--ruban-f);letter-spacing:.03em;text-transform:uppercase;color:var(--nuit);white-space:nowrap}
.ruban.r2 div{animation-direction:reverse;animation-duration:40s}
.ruban span{padding-right:22px}
.ruban span::after{content:"-";padding-left:22px}
@keyframes file{to{transform:translateX(-50%)}}

/* 04 · Les trois temps */
.etapes{padding:60px 0 90px;background:var(--nuit2);overflow:hidden}
.temps{display:grid;grid-template-columns:1fr auto 1fr auto 1fr;align-items:start;gap:10px;max-width:860px;margin:0 auto}
.temps .t{text-align:center}
.temps .n{font:500 clamp(48px,5.4vw,74px)/1 var(--titre);color:var(--jaune);text-shadow:0 0 30px rgba(198,234,11,.4);letter-spacing:-.02em}
.temps p{max-width:230px;margin:14px auto 0;font-size:14px;color:var(--texte)}
.temps .chev{color:var(--jaune);margin-top:34px}
.temps .chev svg{width:20px;height:26px}
.ligne-temps{position:relative;max-width:700px;margin:40px auto 0;height:2px;background:linear-gradient(90deg,var(--jaune),rgba(255,255,255,.5))}
.ligne-temps i{position:absolute;top:50%;width:16px;height:16px;translate:-50% -50%;border-radius:50%;border:4px solid #fff;background:var(--nuit)}
.ligne-temps i:nth-child(1){left:0}.ligne-temps i:nth-child(2){left:50%}.ligne-temps i:nth-child(3){left:100%}

/* 05 · L'équipe : le téléphone et sa discussion */
.equipe{padding:70px 0 100px;background:radial-gradient(50% 60% at 30% 50%,rgba(59,30,133,.32),transparent 70%),var(--nuit)}
.equipe .wrap{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;max-width:860px}
.tel{position:relative;width:min(300px,100%);margin-inline:auto;padding:18px 14px 30px;border-radius:44px 44px 0 0;border:2px solid #3E2F6A;border-bottom:0;background:linear-gradient(180deg,#1C1236,#120A28);box-shadow:0 0 0 6px rgba(62,47,106,.25),0 40px 70px rgba(0,0,0,.5);-webkit-mask-image:linear-gradient(180deg,#000 82%,transparent);mask-image:linear-gradient(180deg,#000 82%,transparent)}
.tel .encoche{width:56px;height:6px;margin:0 auto 18px;border-radius:4px;background:#3E2F6A}
.tel .tete{display:flex;align-items:center;gap:10px;padding:0 8px 12px;font:600 13px/1 var(--titre);color:#fff}
.tel .tete .logo i{width:30px;height:30px}
.tel .tete .logo i svg{width:14px;height:14px}
.tel .tete .ics{margin-left:auto;display:flex;gap:10px;color:#fff}
.tel .tete .ics svg{width:16px;height:16px}
.tel .jour{text-align:center;font-size:11px;color:var(--doux);margin:4px 0 10px}
.msg{max-width:84%;margin-bottom:8px;padding:7px 10px;border-radius:8px;font-size:10.5px;line-height:1.4;color:#E6E1F2;background:#2A1E52}
.msg small{display:block;text-align:right;font-size:8.5px;color:var(--doux);margin-top:2px}
.msg.moi{margin-left:auto;background:#251C3A}
.msg .qui{display:block;font-size:9.5px;font-weight:600;color:var(--jaune);margin-bottom:2px}
.msg .qui.r{color:#FF8A8F}
.equipe h2{font-size:clamp(26px,2.6vw,34px);margin-bottom:24px}
.equipe p{font-size:14.5px;margin-bottom:16px}
.equipe p .j{font-weight:500}
.equipe .btn{margin-top:14px}

/* 06 · La différence : panneau blanc à encoche */
.difference{padding:70px 0 90px;background:var(--nuit)}
.panneau-blanc{position:relative;max-width:860px;margin:0 auto;padding:80px 50px 50px;border-radius:8px;background:var(--blanc);color:#2A2340;text-align:center}
.panneau-blanc .encoche{position:absolute;left:50%;top:-1px;translate:-50% 0;width:140px;height:40px;background:var(--nuit);clip-path:polygon(0 0,100% 0,62% 100%,38% 100%);display:grid;place-items:start center;color:#fff;padding-top:6px}
.panneau-blanc .encoche svg{width:24px;height:12px}
.pastille{display:inline-flex;align-items:center;gap:6px;height:32px;padding:0 20px;border-radius:20px;background:var(--nuit);color:#fff;font:600 13px/1 var(--titre);text-transform:uppercase;letter-spacing:.02em}
.pastille svg{width:14px;height:14px}
.panneau-blanc h2{color:#140C2A;margin:20px auto 36px;font-size:clamp(24px,2.5vw,32px);max-width:560px}
.duel{display:grid;grid-template-columns:1fr 1fr;gap:14px;text-align:left}
.duel li{list-style:none;display:flex;align-items:center;gap:14px;min-height:66px;padding:12px 18px;border-radius:4px;border:1px solid #E3DDF0;background:#fff;font-size:13.5px;line-height:1.4;color:#2A2340;box-shadow:0 6px 16px rgba(20,12,42,.05)}
.duel li i{width:28px;height:28px;border-radius:4px;flex:none;display:grid;place-items:center;color:#fff}
.duel li i svg{width:14px;height:14px}
.duel .non i{background:#E5343E}
.duel .oui i{background:#3E9E06}

/* 07 · Avis de l'équipe */
.avis{padding:90px 0 90px;background:radial-gradient(40% 40% at 50% 10%,rgba(59,30,133,.35),transparent 70%),var(--nuit)}
.avis h2{margin-bottom:46px}
.cartes-avis{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;text-align:left}
.c-avis{padding:24px 24px 30px;border-radius:4px;border:1px solid rgba(198,234,11,.18);background:linear-gradient(180deg,#120A27,var(--nuit));transition:border-color .4s,box-shadow .4s}
.c-avis:hover{border-color:rgba(198,234,11,.55);box-shadow:0 0 30px rgba(198,234,11,.12)}
.c-avis .id{display:flex;align-items:center;gap:12px;margin-bottom:18px}
.av{width:38px;height:38px;border-radius:50%;flex:none;display:grid;place-items:center;font:700 13px/1 var(--titre);color:var(--nuit);background:var(--jaune-p)}
.c-avis h3{font-size:17px;color:var(--jaune);line-height:1.1}
.c-avis small{display:block;font-size:11.5px;color:var(--doux)}
.c-avis p{font-size:14px;line-height:1.5}

/* 08 · Efficacité : l'orbite */
.efficacite{padding:80px 0;overflow:hidden;border-block:1px solid var(--filet-v);background:radial-gradient(40% 60% at 30% 50%,rgba(34,14,84,.5),transparent 70%),var(--nuit)}
.efficacite .wrap{display:grid;grid-template-columns:1fr 1fr;gap:50px;align-items:center;max-width:900px}
.orbite{position:relative;width:min(330px,100%);aspect-ratio:1;margin-inline:auto}
.orbite .anneau{position:absolute;border-radius:50%;border:1px solid rgba(160,130,240,.22)}
.orbite .a1{inset:0;background:radial-gradient(circle,rgba(59,30,133,.45),rgba(34,14,84,.25) 60%,transparent 72%)}
.orbite .a2{inset:12%}
.orbite .a3{inset:27%;background:rgba(34,14,84,.55)}
.orbite .coeur{position:absolute;inset:38%;border-radius:50%;background:var(--jaune);display:grid;place-items:center;color:var(--nuit);box-shadow:0 0 40px rgba(198,234,11,.45)}
.orbite .coeur svg{width:42%;height:42%}
.orbite .tour{position:absolute;inset:0;animation:orbite 40s linear infinite}
.orbite .tour>*{position:absolute;translate:-50% -50%}
.orbite .tour>i{width:12px;height:12px;border-radius:50%;background:#fff}
.orbite .tour>span{width:44px;height:44px;border-radius:50%;display:grid;place-items:center;color:#fff;animation:orbite 40s linear infinite reverse;box-shadow:0 0 0 4px rgba(255,255,255,.08)}
.orbite .tour>span svg{width:22px;height:22px}
@keyframes orbite{to{rotate:360deg}}
.efficacite h2{font-size:clamp(24px,2.4vw,32px);margin-bottom:30px}
.coches{list-style:none;display:grid;gap:20px}
.coches li{display:flex;gap:16px;font-size:13.5px;line-height:1.5}
.coches li i{width:22px;height:22px;border-radius:3px;flex:none;background:var(--jaune);display:grid;place-items:center;color:var(--nuit);margin-top:2px}
.coches li i svg{width:13px;height:13px}
.coches u{color:var(--jaune);font-weight:600;text-decoration-color:var(--jaune);text-underline-offset:3px}

/* 09 · Modules : cartes hautes, photo ou dessin, barre jaune */
.modules{padding:90px 0 80px;background:var(--nuit)}
.modules h2{margin-bottom:46px}
.grille-mod{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;max-width:860px;margin:0 auto}
.mod{position:relative;border-radius:4px;overflow:hidden;border:1px solid rgba(198,234,11,.28);background:#120A27;transition:translate .5s var(--courbe),box-shadow .5s}
.mod:hover{translate:0 -6px;box-shadow:0 18px 40px rgba(0,0,0,.5),0 0 24px rgba(198,234,11,.18)}
.mod .emplacement,.mod .illu{border:0}
.mod .illu{position:relative;aspect-ratio:9/16;overflow:hidden;background:radial-gradient(90% 60% at 50% 35%,#2A1760,#0E0721 75%)}
.mod .voile{position:absolute;inset:0;background:linear-gradient(180deg,rgba(11,5,27,.35),transparent 25%,transparent 45%,rgba(11,5,27,.92) 75%);pointer-events:none}
.mod .num{position:absolute;left:50%;top:16px;translate:-50% 0;padding:4px 12px;border-radius:14px;border:1px solid rgba(198,234,11,.45);background:rgba(11,5,27,.75);font:600 10px/1 var(--titre);letter-spacing:.06em;color:#fff;white-space:nowrap}
.mod h3{position:absolute;left:10px;right:10px;bottom:56px;text-align:center;font-size:clamp(16px,1.6vw,20px);line-height:1.08}
.mod .sig{position:absolute;left:0;right:0;bottom:24px;display:flex;justify-content:center;align-items:center;gap:4px;font:800 9px/1 var(--titre);letter-spacing:.06em;color:#fff}
.mod .sig b{color:var(--jaune)}
.mod .sig svg{width:10px;height:10px;color:var(--jaune)}
.mod::after{content:"";position:absolute;left:28%;right:28%;bottom:0;height:5px;background:var(--jaune);box-shadow:0 -4px 16px rgba(198,234,11,.6)}
/* Les dessins des modules sans photo */
.entonnoir{position:absolute;left:50%;top:22%;translate:-50% 0;width:70%;aspect-ratio:1;background:conic-gradient(from 200deg,#FF8A3D,#B5431C,#5A2A7A,#FF8A3D);clip-path:polygon(0 8%,100% 8%,62% 72%,62% 100%,38% 100%,38% 72%);opacity:.9;filter:drop-shadow(0 0 16px rgba(255,138,61,.4))}
.entonnoir::before{content:"";position:absolute;left:0;right:0;top:0;height:16%;border-radius:50%;background:radial-gradient(#3A1C3A,#FFB27A)}
.ecrans{position:absolute;inset:18% 6% 40% 14%;rotate:-8deg}
.ecrans i{position:absolute;width:46%;height:70%;border-radius:4px;background:linear-gradient(180deg,#E8EEF8,#B7C3D8);box-shadow:0 10px 20px rgba(0,0,0,.4)}
.ecrans i::before{content:"";position:absolute;left:10%;right:10%;top:10%;height:8%;border-radius:2px;background:#5B7BD8;box-shadow:0 14px 0 #C9D3E6,0 26px 0 #C9D3E6,0 38px 0 #8FD3A6}
.ecrans i:nth-child(1){left:0;top:10%}.ecrans i:nth-child(2){left:30%;top:0;z-index:1}.ecrans i:nth-child(3){left:58%;top:16%}
.reseau{position:absolute;inset:14% 4% 42%;color:#C9C3E6}
.puce-ia{position:absolute;left:50%;top:22%;translate:-50% 0;width:62%;aspect-ratio:3/4;rotate:14deg;border-radius:8px;border:2px solid #4D7BFF;background:linear-gradient(160deg,#122A6A,#0B1640);box-shadow:0 0 30px rgba(77,123,255,.45);background-image:linear-gradient(rgba(77,123,255,.35) 1px,transparent 1px),linear-gradient(90deg,rgba(77,123,255,.35) 1px,transparent 1px);background-size:14px 14px}

/* 10 · Bonus : la ligne du temps verticale */
.bonus{padding:90px 0 80px;border-top:1px solid var(--filet-v);background:radial-gradient(50% 40% at 80% 40%,rgba(34,14,84,.45),transparent 70%),var(--nuit)}
.bonus h2{margin-bottom:56px}
.fil{position:relative;max-width:860px;margin:0 auto;padding-left:44px;text-align:left}
.fil::before{content:"";position:absolute;left:10px;top:12px;bottom:40px;width:2px;background:linear-gradient(180deg,var(--jaune),rgba(198,234,11,.15))}
.b-item{position:relative;margin-bottom:60px}
.b-item .etiq{position:relative;font:500 20px/1 var(--titre);color:#fff;margin-bottom:26px}
.b-item .etiq::before{content:"";position:absolute;left:-44px;top:50%;translate:0 -50%;width:22px;height:22px;border-radius:50%;background:var(--jaune);box-shadow:0 0 0 6px rgba(198,234,11,.25),0 0 18px rgba(198,234,11,.7)}
.b-item .corps{display:grid;grid-template-columns:1.05fr .95fr;gap:50px;align-items:center}
.ecran{position:relative;padding:14px;border-radius:8px;border:1px solid rgba(198,234,11,.45);background:#120A27}
.ecran .cadre{position:relative;border-radius:6px;overflow:hidden}
.ecran .cadre .emplacement{border:0}
.direct{position:absolute;right:12px;top:12px;display:flex;align-items:center;gap:6px;padding:5px 10px;border-radius:4px;background:#E5343E;color:#fff;font:700 13px/1 var(--titre);text-transform:uppercase}
.direct i{width:8px;height:8px;border-radius:50%;background:#fff;animation:clignote 1.4s infinite}
@keyframes clignote{50%{opacity:.2}}
.commandes{position:relative;display:flex;justify-content:center;gap:12px;width:max-content;max-width:100%;margin:-30px auto 0;padding:8px 12px;border-radius:10px;background:#1B1430;border:1px solid rgba(255,255,255,.08)}
.commandes span{width:34px;height:34px;border-radius:50%;background:#2A2240;display:grid;place-items:center;color:#fff}
.commandes span svg{width:16px;height:16px}
.commandes span.raccroche{background:#E5343E}
.dossiers{display:grid;grid-template-columns:auto 1fr;gap:20px;padding:18px;border-radius:6px;background:#1B1430;border:1px solid rgba(255,255,255,.06)}
.dossiers .apps{display:grid;gap:14px}
.dossiers .apps span{width:52px;height:52px;border-radius:8px;background:#120A27;border:1px solid rgba(255,255,255,.08);display:grid;place-items:center;color:#fff;font:500 17px/1 var(--titre)}
.dossiers .apps svg{width:24px;height:28px}
.dossiers ul{list-style:none;display:grid;padding:6px 18px;border-radius:6px;background:#120A27;border:1px solid rgba(255,255,255,.06)}
.dossiers li{display:flex;align-items:center;gap:12px;padding:9px 0;font-size:13.5px;color:#fff}
.dossiers li svg{width:22px;height:18px;color:#F6C445;flex:none}
.dossiers li em{margin-left:auto;font-style:normal;padding:3px 8px;border-radius:10px;border:1px solid rgba(198,234,11,.5);font:600 8.5px/1 var(--titre);letter-spacing:.06em;text-transform:uppercase;color:var(--jaune-p)}
.b-item .kicker{display:flex;align-items:center;gap:6px;font:500 11px/1 var(--titre);letter-spacing:.04em;text-transform:uppercase;color:var(--doux);margin-bottom:16px}
.b-item .kicker svg{width:13px;height:13px;color:#FF8A8F}
.b-item h3{font-size:clamp(22px,2.2vw,28px);font-weight:500;margin-bottom:22px}
.b-item p{font-size:13.5px;line-height:1.6;max-width:380px}

/* 11 · Offre : la carte prix au centre */
.offre{padding:100px 0;border-top:1px solid var(--filet-v);overflow:hidden;background:radial-gradient(35% 50% at 50% 40%,rgba(59,30,133,.35),transparent 70%),radial-gradient(30% 50% at 10% 60%,rgba(255,255,255,.04),transparent),var(--nuit2)}
.offre .wrap{display:grid;grid-template-columns:1fr auto 1fr;gap:50px;align-items:center;max-width:900px}
.offre .gauche{text-align:right}
.offre .gauche::before{content:"";display:inline-block;width:40px;height:5px;background:var(--jaune);box-shadow:0 0 14px rgba(198,234,11,.6);margin-bottom:30px}
.offre .gauche h2{font-size:clamp(22px,2.2vw,28px);font-weight:500}
.prix{position:relative;width:300px;padding:72px 28px 26px;border-radius:4px;border:1px solid rgba(255,255,255,.12);background:linear-gradient(180deg,#1B1036,#0E0722);text-align:center;box-shadow:0 40px 80px rgba(0,0,0,.5)}
.prix .medaille{position:absolute;left:50%;top:-32px;translate:-50% 0;width:64px;height:64px;border-radius:50%;background:var(--nuit);border:2px solid var(--jaune);display:grid;place-items:center;color:var(--jaune);box-shadow:0 0 22px rgba(198,234,11,.4)}
.prix .medaille svg{width:26px;height:26px}
.prix .nom{font:800 24px/1 var(--titre);letter-spacing:-.02em;color:var(--jaune);margin-bottom:24px}
.prix .nom b{color:#fff;font-weight:800}
.prix .avant{font:700 20px/1 var(--titre);color:#fff}
.prix .avant s{color:#FF6A72;text-decoration-thickness:2px}
.prix .fois{font:600 14px/1 var(--titre);color:#fff;margin-top:8px;text-transform:uppercase}
.prix .gros{display:block;font:700 clamp(50px,5vw,66px)/1 var(--titre);letter-spacing:-.04em;color:var(--jaune);text-shadow:0 0 30px rgba(198,234,11,.35);margin:6px 0 2px}
.prix .gros small{font-size:.4em;letter-spacing:0}
.prix .comptant{font:600 12.5px/1 var(--titre);text-decoration:underline;text-underline-offset:3px;text-transform:uppercase;color:#fff}
.moyens{display:flex;flex-wrap:wrap;justify-content:center;gap:6px;margin:18px 0 18px}
.moyens span{padding:4px 7px;border-radius:3px;background:rgba(255,255,255,.12);font:600 9.5px/1 var(--titre);color:#E6E1F2}
.prix .btn{width:100%}
.prix .sur{text-transform:uppercase;font-size:9.5px;text-decoration:none}
.offre .liste{list-style:none;display:grid;gap:18px}
.offre .liste li{display:flex;gap:12px;font-size:13.5px;line-height:1.4;color:#fff}
.offre .liste li svg{width:14px;height:14px;color:var(--jaune);flex:none;margin-top:3px}

/* 12 · Garantie : le sceau festonné */
.garantie{padding:40px 0 90px;background:var(--nuit2);overflow:hidden}
.garantie .wrap{display:grid;grid-template-columns:.9fr 1.1fr;gap:60px;align-items:center;max-width:860px}
.sceau{position:relative;width:min(260px,80%);margin-inline:auto;filter:drop-shadow(0 0 40px rgba(198,234,11,.45))}
.sceau svg.s{width:100%;height:auto;animation:balance 8s ease-in-out infinite}
@keyframes balance{50%{rotate:6deg}}
.sceau .txt{position:absolute;inset:0;display:grid;place-content:center;text-align:center;color:var(--nuit)}
.sceau .etoiles{font-size:15px;letter-spacing:.12em}
.sceau .sept{font:800 104px/.9 var(--titre);letter-spacing:-.04em}
.sceau .jours{font:800 13px/1.1 var(--titre);text-transform:uppercase}
.garantie h2{font-size:clamp(24px,2.4vw,30px);font-weight:500;margin-bottom:22px}
.garantie p{font-size:14px;margin-bottom:16px;max-width:430px}

/* 13 · Histoires en vidéo */
.histoires{padding:60px 0 90px;background:var(--nuit2)}
.histoires .chapo{max-width:420px;margin:14px auto 46px;font-size:14px}
.cartes-h{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;max-width:860px;margin:0 auto;text-align:left}
.c-h{position:relative;display:grid;grid-template-columns:1fr 1fr;gap:10px;align-items:center;padding:16px;border-radius:6px;border:1px solid rgba(198,234,11,.3);background:linear-gradient(160deg,#1B1036,#0E0722)}
.c-h .tag{display:inline-block;padding:2px 8px;border-radius:10px;border:1px solid var(--jaune);font:600 8.5px/1.2 var(--titre);letter-spacing:.06em;text-transform:uppercase;color:#fff;margin-bottom:12px}
.c-h h3{font-size:14px;line-height:1.05;text-transform:uppercase;margin-bottom:12px}
.c-h h3 em{display:block}
.c-h p{font-size:11.5px;line-height:1.35}
.c-h .photo{border-radius:6px;overflow:hidden}
.c-h .photo .emplacement{border:0}
.c-h .lecture{width:46px;height:46px;border-radius:50%;left:50%;top:50%}
.c-h .lecture svg{width:16px;height:16px;margin-left:3px}

/* 14 · Le formateur */
.formateur{padding:100px 0;background:radial-gradient(40% 60% at 25% 50%,rgba(59,30,133,.4),transparent 70%),var(--nuit3);overflow:hidden}
.formateur .wrap{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;max-width:860px}
.cadre-jaune{position:relative;padding:0 0 0;background:var(--jaune);margin-top:60px;box-shadow:0 0 60px rgba(198,234,11,.25)}
.cadre-jaune .emplacement{margin-top:-60px;width:calc(100% - 0px);border:0;background:linear-gradient(180deg,transparent,rgba(11,5,27,.12)),var(--jaune)}
.cadre-jaune .emplacement::after{color:rgba(11,5,27,.6);border-color:rgba(11,5,27,.35)}
.formateur h2{font-size:clamp(28px,3vw,38px);margin-bottom:30px}
.formateur p{font-size:14px;margin-bottom:16px;max-width:400px}
.formateur .btn{margin-top:20px}

/* 15 · FAQ */
.faq{padding:90px 0 110px;background:var(--nuit)}
.faq .trait{width:60px;height:5px;margin:0 auto 34px;background:var(--jaune);box-shadow:0 6px 18px rgba(198,234,11,.5)}
.faq h2{margin-bottom:46px}
.faq .liste{max-width:660px;margin:0 auto;display:grid;gap:14px;text-align:left}
.faq details{border-radius:4px;background:var(--carte2);border:1px solid rgba(255,255,255,.07);transition:border-color .3s}
.faq details[open]{border-color:var(--filet)}
.faq summary{list-style:none;cursor:pointer;display:flex;align-items:center;gap:16px;min-height:58px;padding:12px 24px;font:500 16px/1.3 var(--titre);color:#fff}
.faq summary::-webkit-details-marker{display:none}
.faq summary::after{content:"+";margin-left:auto;font:300 26px/1 var(--titre);color:var(--jaune);transition:rotate .3s var(--courbe)}
.faq details[open] summary::after{rotate:45deg}
.faq details p{padding:0 24px 20px 50px;font-size:14px}

/* 16 · Pied jaune */
#pied{background:var(--jaune);color:var(--nuit);font-size:13px}
#pied .wrap{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:30px 0;max-width:860px}
#pied .droite{display:flex;gap:22px}
#pied .droite a{display:inline-flex;align-items:center;min-height:44px}
#pied .droite a:hover{text-decoration:underline}

@media (max-width:900px){
  .atouts{grid-template-columns:1fr 1fr}
  .atout,.atout:nth-child(-n+2){grid-column:span 1}
  .atout:last-child{grid-column:span 2}
  .grille-mod{grid-template-columns:repeat(2,1fr);max-width:460px}
  .offre .wrap{grid-template-columns:1fr;justify-items:center;gap:40px}
  .offre .gauche{text-align:center}
  .cartes-h{grid-template-columns:1fr;max-width:420px}
}
@media (max-width:820px){
  .temps{grid-template-columns:1fr;gap:30px}
  .temps .chev{margin:0 auto;rotate:90deg}
  .ligne-temps{display:none}
  .equipe .wrap,.efficacite .wrap,.garantie .wrap,.formateur .wrap{grid-template-columns:1fr;gap:50px}
  .equipe .wrap>div:last-child,.efficacite .wrap>div:last-child{text-align:left}
  .panneau-blanc{padding:70px 20px 30px}
  .duel{grid-template-columns:1fr}
  .cartes-avis{grid-template-columns:1fr;max-width:460px;margin-inline:auto}
  .b-item .corps{grid-template-columns:1fr;gap:30px}
  .formateur .wrap>div:first-child{max-width:380px;width:100%;margin-inline:auto}
  .rubans{height:220px}
  .ruban.r1{top:80px}.ruban.r2{top:86px}
  .ruban{height:46px}
  .ruban div{font-size:22px}
}
@media (max-width:520px){
  .atouts{grid-template-columns:1fr}
  .atout:last-child{grid-column:span 1}
  .fil{padding-left:34px}
  .fil::before{left:6px}
  .b-item .etiq::before{left:-38px;width:18px;height:18px}
  .dossiers{grid-template-columns:1fr}
  .dossiers .apps{grid-template-columns:repeat(3,52px)}
  .grille-mod{gap:12px}
  .mod h3{font-size:15px;bottom:50px}
  .mod .num{font-size:9px;padding:4px 8px}
  .prix{width:100%;max-width:320px}
  #pied .wrap{flex-direction:column;text-align:center;padding:20px 0}
  .hero .btn{width:100%}
}
@media (prefers-reduced-motion:reduce){.ruban div,.orbite .tour,.orbite .tour>span,.sceau svg.s,.descente svg,.direct i{animation:none}}
```
