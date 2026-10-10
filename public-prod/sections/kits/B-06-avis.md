# Prompt · Section « La preuve » du template B « Éditorial chaud »
# Par Yedidia Ruben - Digital Strategist. À coller dans une IA qui code, avec ta page.

Construis une section « La preuve » pour ma page, dans le même esprit que le code de référence plus bas. Garde la structure, le geste et les proportions ; reprends mes couleurs, mes polices et mes textes à moi.

- Son rôle : Faire parler les autres : « ça a marché pour des gens comme moi ».
- Où la placer : Juste après la promesse, puis en rappel avant l'offre.
- Sa structure : Un titre court ou aucun, puis des avis, des messages ou des vidéos, en grille ou en rangée qui déborde.
- La règle qui fait la différence : Des avis ou des messages au format réel (Google, WhatsApp) font plus vrai que des citations encadrées.
- Le geste de cette variante : cartes qui débordent à droite
- Animations : attributs data-rv, data-lignes, data-compte, data-incline, data-aimant (moteur anim.js). Sans le moteur, retire-les.
- Aucun tiret long dans les textes. Contraste de 4,5 au moins. Lisible de 360 à 1920 px.

## Le code de référence (HTML)

```html
<section class="f-creme" id="avis" style="padding-top:40px">
  <div class="wrap">
    <span class="pastille" data-rv><svg viewBox="0 0 14 14"><circle cx="5" cy="5" r="2" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="10" cy="5.5" r="1.6" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M1.5 12c0-2.5 1.6-4 3.5-4s3.5 1.5 3.5 4M8.5 9c2-.6 4 .4 4 3" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>Avis</span>
    <div class="entete-avis" data-rv><h2 data-lignes><em>Ce qu'elles disent</em> de l'autrice<br>et de son travail</h2><div class="bulles"><i></i><i></i><i></i><i></i></div></div>
    <div class="carrousel">
      <article class="c-avis" data-rv><div class="q">“</div><p>J'ai enfin compris pourquoi j'étais fatiguée en permanence. En trois semaines, mes digestions ont changé, et mon énergie aussi. Le ton est doux, jamais culpabilisant.</p><div class="qui"><i></i><div>Camille R.<small>Lectrice depuis 2025</small></div></div></article>
      <article class="c-avis" data-rv><div class="q">“</div><p>Le plan de 21 jours est d'une simplicité désarmante. Je l'ai suivi avec mon mari, et nous avons gardé presque toutes les habitudes. La liste de courses est devenue notre bible.</p><div class="qui"><i></i><div>Sophie L.<small>Lectrice depuis 2025</small></div></div></article>
      <article class="c-avis" data-rv><div class="q">“</div><p>Je me méfie des promesses santé, mais tout est sourcé et expliqué sans jargon. Ce n'est pas un régime, c'est une façon de vivre plus légère.</p><div class="qui"><i></i><div>Nadia B.<small>Lectrice depuis 2026</small></div></div></article>
      <article class="c-avis" data-rv><div class="q">“</div><p>Les recettes sont rapides, et mes enfants les mangent. Je recommande à toutes mes amies.</p><div class="qui"><i></i><div>Julie M.<small>Lectrice depuis 2026</small></div></div></article>
    </div>
  </div>
</section>
```

## Le CSS du template d'origine (la section en dépend, ne garde que ce qu'elle utilise)

```css
:root{
  --nuit:#200810; --bordeaux:#4C0B1F; --prune:#591029; --creme:#F5EDE7; --creme-c:#F4F3EA; --rose-blanc:#FFFAF9;
  --encre:#2A0A14; --texte:#4A2A33; --accent:#E8336D; --accent-c:#B81D52; --btn-a:#5E1127; --btn-b:#E8336D; --poudre:#E8ADB8;
  --bord-s:rgba(255,255,255,.14); --bord-c:#E6D9CF;
  --courbe:cubic-bezier(.16,1,.3,1);
  --serif:'Gilda Display',Georgia,serif; --sans:'Hanken Grotesk',system-ui,sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:var(--sans);font-size:15px;line-height:1.6;color:var(--texte);background:var(--nuit);-webkit-font-smoothing:antialiased;overflow-x:clip}
svg{display:block}
a{color:inherit;text-decoration:none}
.wrap{width:min(960px,100% - 40px);margin-inline:auto}
section{position:relative;padding:120px 0}
.centre{text-align:center}

/* fonds */
.f-nuit{background:var(--nuit);color:#E9D9DE}
.f-bord{background:radial-gradient(80% 60% at 50% 0%,#5A1027 0%,var(--bordeaux) 40%,#2A0913 100%);color:#E9D9DE}
.f-creme{background:var(--creme)}
.f-rose{background:var(--rose-blanc)}

/* encoche arrondie (bosse vers le haut, couleur de la section qui suit) */
.bosse{position:absolute;left:50%;top:-21px;transform:translateX(-50%);width:76px;height:22px;z-index:3;pointer-events:none}
.bosse path{fill:var(--c)}
.bosse .chev{fill:none;stroke:var(--accent);stroke-width:1.6}

/* typo */
h1,h2,h3{font-weight:400;color:inherit}
h1{font-family:var(--serif);font-size:clamp(32px,3.4vw,46px);line-height:1.15;color:#fff}
h1 em{font-style:normal;color:var(--accent)}
h2{font-family:var(--sans);font-size:clamp(28px,3vw,40px);line-height:1.15;letter-spacing:-.015em;color:var(--encre)}
h2 em{font-family:var(--serif);font-style:normal;color:var(--accent);letter-spacing:0}
.f-nuit h2,.f-bord h2{color:#fff}
.pastille{display:inline-flex;align-items:center;gap:7px;height:30px;padding:0 22px;border-radius:999px;border:1px solid var(--encre);font-size:12px;font-weight:500;color:var(--encre);margin-bottom:18px}
.f-nuit .pastille,.f-bord .pastille{border-color:rgba(255,255,255,.75);color:#fff}
.pastille svg{width:13px;height:13px}
p.lead{font-size:15px;max-width:440px}

/* bouton */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:12px;height:64px;min-width:300px;padding:0 34px;border-radius:999px;border:0;cursor:pointer;
  font:600 16px/1 var(--sans);color:#fff;background:linear-gradient(90deg,var(--btn-a),#A3224A 55%,var(--btn-b));
  box-shadow:0 0 28px rgba(232,51,109,.5),inset 0 0 0 1px rgba(255,255,255,.22);transition:box-shadow .25s ease-out,transform .25s ease-out}
.btn:hover{box-shadow:0 0 44px rgba(232,51,109,.75),inset 0 0 0 1px rgba(255,255,255,.35);transform:translateY(-1px)}
.btn .fl{width:24px;height:24px;border-radius:50%;background:#fff;color:var(--btn-a);display:grid;place-items:center;transition:transform .25s ease-out}
.btn:hover .fl{transform:translateX(3px)}
.btn.caps{font-size:14px;letter-spacing:.02em;text-transform:uppercase}
.btn.caps .fl{background:transparent;border:1.5px solid #fff;color:#fff}

/* monogramme */
.mono{color:var(--accent)}

/* image d'attente : silhouette */
.ph{position:relative;overflow:hidden;background:linear-gradient(170deg,#6A2A3D,#2A0B15)}
.ph .tag{position:absolute;left:10px;top:10px;font-size:9px;letter-spacing:.14em;text-transform:uppercase;color:#F3DCE3;background:rgba(32,8,16,.55);padding:3px 8px;border-radius:4px;z-index:2}
.ph svg.silh{position:absolute;left:0;right:0;bottom:0;width:100%;height:92%}
.ph.clair{background:linear-gradient(170deg,#EFDCE0,#C99AA7)}

/* 01 hero */
.hero{padding:0;background:radial-gradient(55% 75% at 68% 45%,#5B1A2C 0%,#2C0B15 55%,var(--nuit) 100%);overflow:hidden}
.hero::before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(90deg,rgba(255,255,255,.012) 0 2px,transparent 2px 26px);pointer-events:none}
.hero .grille{display:grid;grid-template-columns:1fr 1fr;align-items:end;min-height:820px;position:relative}
.hero .txt{padding:150px 0 170px}
.logo{display:flex;align-items:center;gap:12px;margin-bottom:44px;font-family:var(--serif);font-size:30px;color:#fff;line-height:1}
.hero p.lead{color:#F1E4E8;margin:26px 0 38px;max-width:470px}
.hero p.lead b{font-weight:600;color:#fff}
.portrait{position:relative;height:740px;align-self:end}
.portrait .ph{position:absolute;inset:0;background:none}
.portrait .fauteuil{position:absolute;left:0;right:-10%;bottom:0;height:44%;border-radius:50% 50% 0 0/40% 40% 0 0;background:radial-gradient(70% 90% at 50% 15%,#6A1A31,rgba(42,9,19,0) 80%);opacity:.8}
.signature{position:absolute;right:-2%;top:22%;color:#fff;font-family:var(--serif);font-size:20px;line-height:1.1}
.signature small{display:block;font-family:var(--sans);font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:#D9BFC7;margin-top:5px}
.signature::before{content:"";position:absolute;left:-46px;top:12px;width:40px;height:1px;background:rgba(255,255,255,.6)}
.sceau-rond{position:absolute;width:84px;height:84px;border-radius:50%;display:grid;place-items:center;background:rgba(232,51,109,.12);border:1px solid rgba(232,51,109,.45)}
.sceau-rond .txt-rond{position:absolute;inset:0;animation:tourne 40s linear infinite}
@keyframes tourne{to{transform:rotate(360deg)}}

/* 02 e-book */
.carte-ebook{position:relative;margin-top:44px;background:var(--creme-c);border:1px solid var(--bord-c);border-radius:14px;display:grid;grid-template-columns:1fr 1fr;align-items:center;min-height:440px;box-shadow:0 40px 60px -40px rgba(94,17,39,.25)}
.carte-ebook .txt{padding:48px 48px 48px 20px}
.carte-ebook .txt p{font-size:15px;color:var(--encre);margin-bottom:18px}
.carte-ebook .txt b{color:var(--accent-c);font-weight:600;text-transform:uppercase}
.scene3d{position:relative;height:100%;min-height:440px;perspective:1400px}
.arabesque{position:absolute;left:-30px;top:-24px;width:360px;height:500px;color:var(--accent);opacity:.9}
.tablette{position:absolute;border-radius:22px;background:#161012;padding:10px;box-shadow:0 30px 60px -20px rgba(94,17,39,.55),inset 0 0 0 1.5px #3A3034;transform-style:preserve-3d;transition:transform .4s ease-out}
.tablette .ecran{width:100%;height:100%;border-radius:14px;overflow:hidden;position:relative}
.t1{left:-10px;top:40px;width:220px;height:300px;transform:rotateY(18deg) rotateZ(-4deg)}
.t2{left:110px;top:-30px;width:270px;height:370px;transform:rotateY(-10deg) rotateZ(3deg)}
.couverture{position:absolute;inset:0;background:radial-gradient(80% 60% at 50% 30%,#6E1A33,#2A0913);display:flex;flex-direction:column;justify-content:flex-end;padding:18px;color:#fff}
.couverture svg.silh{position:absolute;left:10%;right:10%;top:6%;width:80%;height:62%}
.couverture .titre-c{position:relative;font-family:var(--serif);font-size:34px;line-height:.95}
.couverture .titre-c em{font-style:normal;color:var(--accent)}
.couverture small{position:relative;font-size:9px;line-height:1.35;color:#F1DDE3;margin-top:8px}
.stylet{position:absolute;right:20px;top:120px;width:8px;height:190px;border-radius:4px;background:linear-gradient(90deg,#fff,#D9D4D6);transform:rotate(32deg);box-shadow:4px 6px 12px rgba(0,0,0,.25)}

/* 03 raisons */
.grille2{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:48px;text-align:left}
.raison{position:relative;background:rgba(32,8,16,.55);border:1px solid #6D2D40;border-radius:6px;padding:30px 28px;overflow:hidden}
.raison.large{grid-column:1/-1;min-height:330px;display:grid;grid-template-columns:1fr 1fr;align-items:center}
.etiquette{display:inline-flex;align-items:center;gap:9px;height:34px;padding:0 18px;border-radius:999px;background:rgba(89,16,41,.85);color:#fff;font-size:17px;margin-bottom:24px}
.etiquette::before{content:"";width:8px;height:8px;border-radius:50%;background:var(--accent);box-shadow:0 0 10px var(--accent)}
.raison p{font-size:15px;color:#EBDCE0;max-width:420px}
.livre3d{position:absolute;right:40px;bottom:-60px;width:250px;height:340px;transform:perspective(1200px) rotateY(-24deg) rotateX(8deg) rotateZ(-8deg);transform-style:preserve-3d}
.livre3d .face{position:absolute;inset:0;border-radius:4px 10px 10px 4px;overflow:hidden;box-shadow:0 40px 60px -20px rgba(0,0,0,.6)}
.livre3d .tranche{position:absolute;top:2px;bottom:2px;right:-16px;width:16px;background:repeating-linear-gradient(0deg,#F4EEE8 0 2px,#DCD2C8 2px 3px);transform:rotateY(90deg);transform-origin:left}

/* 04 contenus */
.titre-filet{display:grid;grid-template-columns:auto 1fr auto;align-items:end;gap:24px}
.titre-filet h2{color:#fff}
.titre-filet h2 em{display:block}
.filet{height:1px;background:rgba(255,255,255,.4);margin-bottom:14px}
.rond-fl{width:36px;height:36px;border-radius:50%;background:#F5EDE7;color:var(--btn-a);display:grid;place-items:center;margin-bottom:-4px}
.carrousel{display:flex;gap:6px;margin-top:64px;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:6px;scrollbar-width:none;margin-right:calc((100vw - min(960px,100vw - 40px))/-2)}
.carrousel::-webkit-scrollbar{display:none}
.c-contenu{flex:0 0 232px;scroll-snap-align:start;background:var(--prune);border:1px solid #74203D;border-radius:6px;padding:16px 16px 30px;text-align:center;color:#EBDCE0}
.c-contenu .ph{height:140px;border-radius:6px}
.losange{width:20px;height:20px;margin:22px auto 10px;color:var(--poudre)}
.label{font-size:10px;letter-spacing:.3em;text-transform:uppercase;color:#F07AA0}
.c-contenu h3{font-family:var(--serif);font-size:30px;line-height:1;color:#fff;margin:12px 0}
.c-contenu p{font-size:12px;line-height:1.5}

/* 05 bonus */
.bonus{overflow:hidden}
.bonus .filigrane{position:absolute;right:-120px;top:50%;transform:translateY(-50%);width:500px;height:620px;opacity:.5;pointer-events:none}
.bonus .halo{position:absolute;left:55%;top:50%;width:700px;height:700px;transform:translate(-50%,-50%);background:radial-gradient(circle,#fff 0%,rgba(255,255,255,0) 60%)}
.duo{display:grid;grid-template-columns:1fr 1.1fr;gap:40px;align-items:center;position:relative}
.duo>*,.grille2>*{min-width:0}
.bonus h2 em{display:inline}
.bonus p{color:var(--encre);margin:22px 0;max-width:330px}
.prix-barre{color:var(--encre);margin-bottom:26px!important}
.prix-barre s{color:var(--encre)}
.prix-barre b{color:var(--accent-c)}
.eventail{position:relative;height:420px;perspective:1400px}
.tel{position:absolute;width:170px;height:330px;border-radius:30px;background:#151012;padding:8px;box-shadow:0 30px 50px -20px rgba(94,17,39,.45),inset 0 0 0 1.5px #3A3236}
.tel .ecran{width:100%;height:100%;border-radius:23px;overflow:hidden;position:relative}
.tel1{left:40px;top:40px;z-index:3;transform:rotateZ(-2deg)}
.tel2{left:165px;top:18px;z-index:2;transform:rotateZ(3deg) scale(.96)}
.tel3{left:280px;top:0;z-index:1;transform:rotateZ(5deg) scale(.92)}
.tel .ilot{position:absolute;top:14px;left:50%;transform:translateX(-50%);width:54px;height:15px;border-radius:10px;background:#000;z-index:3}

/* 06 avis */
.entete-avis{display:flex;justify-content:space-between;align-items:end;gap:20px}
.entete-avis h2 em{display:inline}
.bulles{display:flex}
.bulles i{width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,#F0C4CD,#D88A9B);margin-left:-8px;border:2px solid var(--creme)}
.c-avis{flex:0 0 292px;scroll-snap-align:start;background:var(--creme-c);border:1px solid var(--bord-c);border-radius:12px;padding:28px 24px;color:var(--encre)}
.c-avis .q{font-family:var(--serif);font-size:44px;line-height:.6;color:var(--accent);height:24px}
.c-avis p{font-size:13px;line-height:1.7;margin:12px 0 22px}
.c-avis .qui{display:flex;align-items:center;gap:10px;font-size:14px}
.c-avis .qui i{width:32px;height:32px;border-radius:50%;background:var(--poudre)}
.c-avis small{display:block;font-size:11px;color:#7A5A63;line-height:1.2}
.f-creme .carrousel{margin-top:40px}

/* 07 valeur */
.grille2.valeur{gap:12px}
.c-valeur{background:var(--creme);border-radius:6px;padding:10px 10px 34px;text-align:center;color:var(--encre)}
.c-valeur .visuel{position:relative;height:250px;border-radius:6px;background:var(--prune);overflow:hidden;display:grid;place-items:center;perspective:900px}
.c-valeur .lettre{position:absolute;font-family:var(--serif);font-size:380px;line-height:1;color:var(--accent);opacity:.85;right:-40px;top:-60px}
.mini-livre{position:relative;width:120px;height:170px;border-radius:2px 6px 6px 2px;overflow:hidden;transform:rotateY(-18deg) rotateZ(-8deg);box-shadow:-10px 20px 30px rgba(0,0,0,.45)}
.mini-livre .couverture{padding:10px}
.mini-livre .couverture .titre-c{font-size:15px;line-height:1}
.etiq{display:inline-flex;align-items:center;gap:6px;height:28px;padding:0 16px;border-radius:999px;background:var(--btn-a);color:#F7E6EB;font-size:10px;letter-spacing:.14em;text-transform:uppercase;margin:24px 0 14px}
.c-valeur h3{font-family:var(--serif);font-size:24px;color:var(--encre)}
.c-valeur s{display:block;font-size:20px;margin-top:10px;color:var(--encre)}
.attendez{font-size:28px;font-weight:600;color:#fff;margin-top:64px}

/* 08 bandeau croisé */
.bandeau{height:200px;overflow:hidden;padding:0;background:linear-gradient(180deg,#420C1E,var(--nuit))}
.ruban{position:absolute;left:-5%;width:110%;height:46px;display:flex;align-items:center;overflow:hidden;border-block:1px solid rgba(255,140,170,.45)}
.ruban.r1{top:70px;transform:rotate(-3deg);background:rgba(120,30,58,.55)}
.ruban.r2{top:84px;transform:rotate(3deg);background:rgba(160,40,78,.5)}
.piste{display:flex;gap:60px;white-space:nowrap;animation:defile 28s linear infinite;padding-left:30px}
.r1 .piste{animation-direction:reverse}
.piste span{display:inline-flex;align-items:center;gap:10px;font-size:13px;letter-spacing:.3em;text-transform:uppercase;color:#F6E4EA}
.piste span::before{content:"";width:9px;height:9px;transform:rotate(45deg);border:1.5px solid var(--accent)}
@keyframes defile{to{transform:translateX(-50%)}}

/* 09 offres */
.offres{background:radial-gradient(70% 60% at 50% 100%,#5A1027 0%,#2C0913 50%,var(--nuit) 100%)}
.offres .sous{color:#F1E4E8;margin-top:10px}
.offres .sous b{font-weight:600;color:#fff}
.offre{border-radius:8px;overflow:hidden;text-align:center;display:flex;flex-direction:column}
.offre .corps{padding:40px 50px 34px}
.offre.essentiel{background:var(--prune);border:1px solid #74203D;color:#F1E4E8}
.offre.complet{background:#fff;color:var(--encre)}
.etiq-pointillee{display:inline-flex;align-items:center;gap:8px;height:38px;padding:0 30px;border-radius:999px;border:1.5px dashed #E26A90;color:#FF8FB1;font-size:15px}
.complet .etiq-pointillee{color:var(--accent)}
.de{font-size:17px;margin-top:30px}
.de s{font-weight:600}
.prix{font-family:var(--sans);font-weight:700;font-size:64px;letter-spacing:-.04em;line-height:1.1;background:linear-gradient(90deg,#E8336D,#F27FA4 55%,#E8336D);-webkit-background-clip:text;background-clip:text;color:transparent}
.essentiel .prix{background:linear-gradient(90deg,#FF5C8C,#FFB1C8 55%,#FF5C8C);-webkit-background-clip:text;background-clip:text}
.inclus{list-style:none;text-align:left;margin-top:22px}
.inclus li{display:grid;grid-template-columns:32px 1fr;gap:10px;align-items:center;padding:12px 0;border-bottom:1px solid rgba(255,255,255,.18);font-size:12px;line-height:1.45}
.complet .inclus li{border-color:#D9C9CE}
.inclus li::before{content:"→";width:22px;height:22px;border-radius:50%;border:1px solid currentColor;display:grid;place-items:center;font-size:11px;opacity:.85}
.inclus b{font-weight:600}
.complet .inclus b{color:var(--btn-a)}
.offre .pied{margin-top:auto;padding:34px 30px 30px}
.essentiel .pied{background:rgba(32,8,16,.25)}
.complet .pied{background:#FFF0F5}
.paiement{display:flex;justify-content:center;gap:22px;margin-top:22px;font-size:11px;font-weight:700;letter-spacing:.06em;opacity:.55}
.garanties{display:flex;justify-content:center;gap:16px;margin-top:12px;font-size:9px;line-height:1.2;opacity:.6}
.essentiel .paiement,.essentiel .garanties{color:#fff}

/* 10 garantie */
.garantie{background:radial-gradient(60% 70% at 25% 50%,#3A0C1A 0%,var(--nuit) 70%)}
.garantie .duo{grid-template-columns:.8fr 1.2fr}
.cire-zone{position:relative;width:300px;height:300px;margin:auto;display:grid;place-items:center}
.cire-zone .txt-rond{position:absolute;inset:0;animation:tourne 40s linear infinite}
.cire{width:180px;height:180px;display:grid;place-items:center;border-radius:47% 53% 50% 50% / 52% 46% 54% 48%;
  background:radial-gradient(circle at 35% 30%,#E23A6C 0%,#B5163F 35%,#7A0B26 75%,#4E0716 100%);
  box-shadow:inset -8px -10px 22px rgba(0,0,0,.45),inset 8px 8px 18px rgba(255,140,170,.35),0 20px 40px -10px rgba(0,0,0,.6)}
.cire .anneau{width:118px;height:118px;border-radius:50%;display:grid;place-items:center;box-shadow:inset 3px 3px 6px rgba(0,0,0,.45),inset -3px -3px 6px rgba(255,140,170,.3),0 0 0 6px rgba(0,0,0,.08)}
.cire .num{font-family:var(--serif);font-size:72px;line-height:1;color:#9C1236;text-shadow:-1px -1px 0 rgba(255,150,180,.5),2px 2px 3px rgba(0,0,0,.5)}
.garantie p{color:#F1E4E8;font-size:18px;line-height:1.55;margin-top:20px;max-width:470px}

/* 11 qui suis-je */
.qui h2{font-family:var(--serif);color:var(--accent);font-size:clamp(34px,3.6vw,46px)}
.qui p{color:var(--encre);font-size:14px;margin-top:14px;max-width:400px}
.formation{margin-top:34px;max-width:360px}
.formation h4{font-size:13px;font-weight:700;color:var(--encre);margin-bottom:12px;letter-spacing:.02em}
.formation li{list-style:none;display:grid;grid-template-columns:34px 1fr;gap:8px;align-items:center;padding:12px 0;border-bottom:1px solid #CDBCC1;font-size:12px;line-height:1.45;color:var(--btn-a)}
.formation li::before{content:"→";width:22px;height:22px;border-radius:50%;border:1px solid #D7A2B2;display:grid;place-items:center;font-size:11px;color:var(--accent)}
.story{position:relative;width:min(320px,100%);height:480px;margin-left:auto;border-radius:12px;overflow:hidden;box-shadow:0 0 0 6px #FBE6EC,0 30px 60px -30px rgba(94,17,39,.5)}
.story{background:#5A1A2E}
.story .ph{position:absolute;inset:0}
.story::after{content:"";position:absolute;inset:0;z-index:2;background:linear-gradient(180deg,rgba(42,9,19,.55),rgba(42,9,19,0) 22%,rgba(42,9,19,0) 72%,rgba(42,9,19,.6))}
.story svg.silh{bottom:56px;height:84%}
.story .barres{position:absolute;top:12px;left:16px;right:16px;display:flex;gap:4px;z-index:3}
.story .barres i{flex:1;height:2px;background:rgba(255,255,255,.5)}.story .barres i:first-child{background:#fff}
.story .compte{position:absolute;top:26px;left:16px;right:16px;display:flex;align-items:center;gap:8px;font-size:11px;font-weight:600;color:#fff;z-index:3}
.story .compte i{width:22px;height:22px;border-radius:50%;background:var(--poudre)}
.story .compte span{font-weight:400;opacity:.7}
.story .compte b{margin-left:auto;font-weight:400}
.story .bas{position:absolute;bottom:14px;left:14px;right:14px;display:flex;align-items:center;gap:10px;z-index:3;color:#fff}
.story .champ{flex:1;height:34px;border-radius:999px;border:1px solid rgba(255,255,255,.8);font-size:11px;display:flex;align-items:center;padding:0 14px}
.qui .sceau-rond{right:-34px;top:90px;background:var(--btn-a);border-color:#8A2747;z-index:4}

/* 12 faq */
.faq h2{font-family:var(--sans)}
.accordeons{max-width:560px;margin:40px auto 0;display:grid;gap:10px;text-align:left}
.acc{background:var(--creme);border:1px solid var(--bord-c);border-radius:6px}
.acc summary{list-style:none;display:flex;justify-content:space-between;align-items:center;gap:12px;padding:20px 22px;font-size:15px;color:var(--encre);cursor:pointer}
.acc summary::-webkit-details-marker{display:none}
.acc summary::after{content:"";width:7px;height:7px;border-right:1.6px solid var(--accent);border-bottom:1.6px solid var(--accent);transform:rotate(45deg) translateY(-3px);transition:transform .25s}
.acc[open] summary::after{transform:rotate(225deg)}
.acc p{padding:0 22px 20px;font-size:14px;color:var(--texte)}

/* 13 pied */
footer{background:radial-gradient(60% 120% at 50% 0%,#4E0C22,var(--nuit) 70%);padding:56px 0;color:#E9D9DE;font-size:13px}
footer .wrap{display:flex;justify-content:space-between;align-items:center;gap:20px}
footer .logo{margin:0;font-size:26px}
footer .droite{text-align:right;line-height:1.7}
footer .droite span{color:#C9A9B3}

@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}

/* responsive */
@media (max-width:860px){
  .hero .grille,.carte-ebook,.duo,.garantie .duo{grid-template-columns:1fr}
  .hero .txt{padding:90px 0 20px}
  .portrait{height:560px}
  .signature{right:4%}
  .carte-ebook .txt{padding:10px 32px 44px}
  .scene3d{min-height:400px}
  .eventail{width:450px;max-width:100%;margin:auto}
  .story{margin:40px auto 0}
  .garantie .txt{text-align:center}.garantie p{margin-inline:auto}
}
@media (max-width:640px){
  section{padding:84px 0}
  .raison.large{grid-template-columns:1fr}
  .livre-para{position:relative;inset:auto}
  .livre3d{position:relative;right:auto;bottom:auto;margin:30px auto -60px}
  .tablette .couverture .titre-c{font-size:23px}
  .livre3d .couverture .titre-c{font-size:25px}
  .grille2{grid-template-columns:1fr}
  .offres .grille2 .complet{order:-1}
  .titre-filet{grid-template-columns:1fr auto}.titre-filet .filet{display:none}
  .entete-avis{flex-direction:column;align-items:flex-start}
  .btn{min-width:0;width:100%;padding:0 22px;height:58px;font-size:15px}
  .offre .corps{padding:34px 22px 24px}
  .prix{font-size:52px}
  .t1{left:0;width:170px;height:240px}.t2{left:90px;width:210px;height:290px}
  .arabesque{width:260px;height:380px}
  .eventail{height:300px;width:100%}
  .tel{width:122px;height:240px;border-radius:24px;padding:6px}.tel .ecran{border-radius:18px}
  .tel1{left:6px;top:40px}.tel2{left:102px;top:22px}.tel3{left:190px;top:6px}
  .tel .couverture .titre-c{font-size:20px!important}
  .livre3d{width:180px;height:245px}
  .bonus .filigrane{width:300px;height:372px;right:-80px}
  .portrait{height:480px}
  .signature{top:8%;font-size:17px}
  .cire-zone{scale:.85}
  footer .wrap{flex-direction:column;text-align:center}footer .droite{text-align:center}
  .qui .sceau-rond{right:8px}
}
@media (max-width:1024px){.stylet{display:none}.qui .sceau-rond{right:0}}
/* mouvement propre au style B */
[data-incline][data-rv]{transition:opacity .8s var(--courbe) var(--d,0ms),transform .5s var(--courbe)!important}
.tablettes{position:absolute;inset:0;perspective:1400px}
.livre-para{position:absolute;inset:0;pointer-events:none}
.anime .cire-zone .cire{opacity:0;transform:scale(1.35) rotate(-14deg);transition:opacity .5s ease-out .25s,transform .9s cubic-bezier(.34,1.56,.64,1) .25s}
.anime .cire-zone.vu .cire{opacity:1;transform:none}
.prix{background-size:200% 100%!important;animation:reflet-prix 6s ease-in-out infinite}
@keyframes reflet-prix{50%{background-position:100% 0}}
.hero .btn{animation:souffle 3.2s ease-in-out infinite}
@media (max-width:640px){.livre-para{position:relative;inset:auto}.btn.caps{font-size:12.5px;letter-spacing:0;padding:0 18px;gap:8px}}
@keyframes souffle{50%{box-shadow:0 0 46px rgba(232,51,109,.72),inset 0 0 0 1px rgba(255,255,255,.3)}}
```
