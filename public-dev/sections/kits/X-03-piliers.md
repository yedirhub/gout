# Prompt · Section « La bascule » du template X « Braise de cinéma »
# Par Yedidia Ruben - Digital Strategist. À coller dans une IA qui code, avec ta page.

Construis une section « La bascule » pour ma page, dans le même esprit que le code de référence plus bas. Garde la structure, le geste et les proportions ; reprends mes couleurs, mes polices et mes textes à moi.

- Son rôle : Montrer pourquoi cette solution est différente.
- Où la placer : Entre la douleur et le contenu.
- Sa structure : Un titre « ce qui change tout », 3 raisons ou 3 cartes, une phrase qui résume.
- La règle qui fait la différence : Une seule section sombre ou contrastée par page : elle casse le rythme et attire l'œil.
- Le geste de cette variante : 4 cartes à pastille orange accrochée au filet
- Animations : attributs data-rv, data-lignes, data-compte, data-incline, data-aimant (moteur anim.js). Sans le moteur, retire-les.
- Aucun tiret long dans les textes. Contraste de 4,5 au moins. Lisible de 360 à 1920 px.

## Le code de référence (HTML)

```html
<section class="piliers centre" id="piliers">
  <div class="wrap">
    <span class="kicker" data-rv>Méthode</span>
    <h2 data-lignes>Les piliers de la méthode<br><em>Mayombe Médias :</em></h2>
    <p class="sous" data-rv>Chaque campagne suit un chemin testé et validé pour tirer le meilleur de votre budget.</p>
    <div class="cartes">
      <div class="pilier" data-rv><span class="ico"><svg><use href="#oeil"/></svg></span><h3>Vision du commerce</h3><p>Avant la moindre annonce, on plonge dans votre activité : votre offre, votre client, votre marché. Une publicité ne marche qu'avec un cap clair.</p></div>
      <div class="pilier" data-rv><span class="ico"><svg><use href="#eclair"/></svg></span><h3>Exécution précise</h3><p>Rien au hasard : chaque décision part des chiffres, avec des campagnes réglées pour servir l'objectif de votre entreprise.</p></div>
      <div class="pilier" data-rv><span class="ico"><svg><use href="#courbe"/></svg></span><h3>Résultats</h3><p>Notre engagement porte sur le résultat : vendre plus, gagner des clients, faire grandir votre chiffre pour de vrai.</p></div>
      <div class="pilier" data-rv><span class="ico"><svg><use href="#main"/></svg></span><h3>Partenariat</h3><p>Plus qu'une agence, nous faisons partie de votre équipe : proches, transparents, et engagés à grandir avec vous.</p></div>
    </div>
    <a class="btn reflet" href="#comparaison" data-rv data-aimant>Je veux vendre plus avec la pub <span class="fl"><svg><use href="#fleche"/></svg></span></a>
    <p class="phrase" data-rv>« Pendant que vous réfléchissez, votre concurrent vend en ligne. »</p>
  </div>
</section>
```

## Le CSS du template d'origine (la section en dépend, ne garde que ce qu'elle utilise)

```css
:root{
  --noir:#000000; --nuit:#070707; --carte:#0C0C0C; --carte2:#101010; --rangee:#0D0F12; --filet:#1E1E1E; --filet2:#2A2A2A;
  --orange:#FF4C01; --orange2:#F85707; --brule:#B03702; --braise:#7F341D; --cuivre:#88381F;
  --blanc:#FFFFFF; --texte:#D6D6D6; --doux:#A3A3A3; --gris:#8A8A8A;
  --courbe:cubic-bezier(.16,1,.3,1);
  --police:'Inter Tight',system-ui,sans-serif; --script:'Caveat','Inter Tight',cursive;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:var(--police);font-size:15px;line-height:1.6;color:var(--texte);background:var(--noir);-webkit-font-smoothing:antialiased;overflow-x:clip}
svg{display:block}
a{color:inherit;text-decoration:none}
h1,h2,h3{font-family:var(--police);color:var(--blanc);line-height:1.15;letter-spacing:-.01em;font-weight:300}
h2 em,h1 em{font-style:italic;font-weight:800}
b,strong{font-weight:700;color:var(--blanc)}
.wrap{width:min(1080px,100% - 40px);margin-inline:auto;position:relative;z-index:1}
section{position:relative}
.centre{text-align:center}

/* Le surtitre : capitales italiques très espacées, orange */
.kicker{display:block;font:italic 300 12px/1 var(--police);letter-spacing:.55em;text-transform:uppercase;color:var(--orange);margin-bottom:16px}

/* Bouton : bloc orange aux coins 6 px, flèche dans un petit carré */
.btn{display:inline-flex;align-items:center;gap:14px;min-height:48px;padding:0 22px 0 26px;border-radius:6px;background:linear-gradient(180deg,#FF5A12,var(--orange));color:#fff;
  font:700 13px/1.2 var(--police);text-transform:uppercase;letter-spacing:.02em;box-shadow:0 0 0 1px rgba(255,120,60,.35) inset,0 10px 30px rgba(255,76,1,.28);transition:box-shadow .4s var(--courbe),filter .4s}
.btn:hover{filter:brightness(1.08);box-shadow:0 0 0 1px rgba(255,160,110,.5) inset,0 14px 40px rgba(255,76,1,.45)}
.btn .fl{width:18px;height:18px;border-radius:3px;background:rgba(255,255,255,.22);display:grid;place-items:center;flex:none}
.btn .fl svg{width:10px;height:10px}
.phrase{margin-top:14px;font:italic 400 12px/1.4 var(--police);color:var(--doux)}

/* Emplacements d'image : fond braise, filet fin, format au centre */
.emplacement{position:relative;overflow:hidden;display:grid;place-items:center;
  background:radial-gradient(70% 60% at 50% 40%,#1E1009,#0B0806 75%);box-shadow:inset 0 0 0 1px rgba(255,76,1,.18)}
.emplacement::after{content:attr(data-format);font:italic 300 11px/1 var(--police);letter-spacing:.4em;color:rgba(255,140,90,.55);padding:6px 4px 6px 10px;border:1px solid rgba(255,76,1,.22);border-radius:3px}

/* 01 · Hero : le portrait dans la pénombre, la lueur orange en haut à gauche */
.hero{min-height:720px;padding:0 0 70px;background:radial-gradient(40% 55% at 0% 0%,rgba(127,52,29,.85),transparent 70%),var(--noir);overflow:hidden;border-bottom:1px solid var(--filet)}
.nav{position:relative;z-index:5;width:min(1080px,100% - 40px);margin:14px auto 0;display:flex;align-items:center;justify-content:space-between;gap:20px;padding:10px 16px 10px 18px;border:1px solid rgba(255,255,255,.12);border-radius:8px;background:rgba(10,10,10,.45);backdrop-filter:blur(10px)}
.logo{display:flex;align-items:center;gap:12px;font:300 20px/1 var(--police);color:#fff;letter-spacing:-.02em}
.logo i{width:30px;height:20px;border-radius:5px;background:var(--orange);display:block}
.nav ul{display:flex;align-items:center;gap:28px;list-style:none;font-size:13px;color:#E5E5E5}
.nav ul a:hover{color:var(--orange)}
.nav .contact{display:inline-flex;align-items:center;min-height:30px;padding:0 14px;border:1px solid rgba(255,255,255,.25);border-radius:4px;background:#1A1A1A}
.hero .scene{position:absolute;z-index:0;right:max(0px,calc(50% - 640px));top:0;bottom:0;width:min(640px,58%)}
.hero .scene .emplacement{position:absolute;inset:0;width:100%;height:100%;background:radial-gradient(45% 40% at 60% 38%,#3A1B0C,#140A05 70%,#050302);box-shadow:none}
.hero .scene::after{content:"";position:absolute;inset:0;pointer-events:none;z-index:2;background:linear-gradient(90deg,var(--noir),rgba(0,0,0,.2) 35%,transparent 60%),linear-gradient(0deg,var(--noir),transparent 30%)}
.hero .txt{position:relative;z-index:3;max-width:470px;padding-top:110px}
.hero h1{font-size:clamp(34px,4vw,48px);text-transform:uppercase;line-height:1.08;margin-bottom:22px;font-weight:300}
.hero h1 b{font-weight:800;letter-spacing:.01em}
.hero p.lead{font-size:16px;color:#ECECEC;line-height:1.45;margin-bottom:22px}
.chiffres{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:34px}
.chiffres span{display:inline-flex;align-items:center;gap:6px;min-height:26px;padding:0 10px;border:1px solid var(--filet2);border-radius:4px;background:rgba(20,20,20,.7);font:600 12px/1.2 var(--police);color:#fff}
.chiffres span i{font-style:normal;font-weight:500;color:var(--orange)}
.clients{display:flex;align-items:center;gap:12px;margin-top:22px;font-size:12px;line-height:1.3;color:#E5E5E5}
.bulles{display:flex}
.bulles i{width:34px;height:34px;border-radius:50%;border:2px solid #fff;margin-left:-10px;display:grid;place-items:center;font:700 11px/1 var(--police);font-style:normal;color:#fff}
.bulles i:first-child{margin-left:0}
.clients b{color:var(--orange);display:block}
.notif{position:absolute;z-index:4;display:flex;align-items:center;gap:12px;width:210px;padding:9px 12px;border:1px solid rgba(255,255,255,.12);border-radius:6px;background:rgba(14,14,14,.82);backdrop-filter:blur(8px);font-size:10.5px;line-height:1.3;color:#fff;box-shadow:0 18px 40px rgba(0,0,0,.5);animation:flotte 6s ease-in-out infinite}
.notif .ico{width:28px;height:28px;border-radius:5px;background:var(--orange);display:grid;place-items:center;flex:none}
.notif .ico svg{width:15px;height:15px;color:#fff}
.notif small{display:flex;justify-content:space-between;gap:8px;font-size:9px;color:var(--doux);margin-top:2px}
.notif.n1{right:max(20px,calc(50% - 560px));top:250px}
.notif.n2{left:calc(50% - 120px);bottom:70px;animation-delay:-3s}
@keyframes flotte{50%{translate:0 -8px}}
.descendre{position:absolute;left:50%;bottom:-1px;translate:-50% 0;z-index:5;width:56px;height:20px;background:var(--noir);clip-path:polygon(0 100%,50% 0,100% 100%);display:grid;place-items:end center;color:#fff}
.descendre svg{width:12px;height:12px;margin-bottom:2px}

/* 02 · Le problème : photo cadrée à gauche, texte à droite */
.probleme{background:var(--nuit);padding:60px 0 90px}
.probleme .wrap{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:center}
.probleme .emplacement{width:100%;aspect-ratio:1/1;max-width:440px;border-radius:14px}
.probleme h2{font-size:clamp(26px,2.6vw,32px);line-height:1.3;margin-bottom:22px}
.probleme p{font-size:14px;color:#E0E0E0;margin-bottom:16px;max-width:420px}
.probleme .btn{margin-top:8px}

/* 03 · Les piliers : hall sombre en fond, 4 cartes à pastille orange */
.piliers{padding:100px 0 70px;background:radial-gradient(50% 60% at 50% 50%,rgba(40,24,14,.55),transparent 75%),
  repeating-linear-gradient(90deg,transparent 0 9%,rgba(255,255,255,.025) 9% 10%,transparent 10% 20%),linear-gradient(180deg,var(--nuit),#030303 60%,var(--nuit));overflow:hidden}
.piliers h2{font-size:clamp(26px,2.6vw,32px);line-height:1.3}
.piliers .sous{font-size:14px;color:#E5E5E5;max-width:520px;margin:18px auto 0}
.cartes{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin:38px 0 34px}
.pilier{position:relative;padding:44px 22px 26px;border-top:1px solid rgba(255,76,1,.5);background:linear-gradient(180deg,rgba(18,18,18,.92),rgba(8,8,8,.6));border-radius:2px 2px 6px 6px;text-align:center}
.pilier .ico{position:absolute;left:50%;top:0;translate:-50% -1px;width:44px;height:38px;border-radius:0 0 5px 5px;background:var(--orange);display:grid;place-items:center;color:#fff}
.pilier .ico svg{width:20px;height:20px}
.pilier h3{font-size:17px;font-weight:600;margin:12px 0 12px}
.pilier p{font-size:12.5px;line-height:1.5;color:#C9C9C9}

/* 04 · Comparaison : tableau à deux têtes, braise et orange vif */
.comparaison{padding:90px 0 80px;background:radial-gradient(35% 45% at 100% 0%,rgba(136,56,31,.75),transparent 70%),radial-gradient(30% 40% at 0% 100%,rgba(136,56,31,.55),transparent 70%),var(--noir);overflow:hidden;border-top:1px solid var(--filet)}
.comparaison h2{font-size:clamp(28px,2.8vw,34px);line-height:1.3}
.comparaison .sous{font-size:14px;color:#ECECEC;max-width:540px;margin:16px auto 0}
.tableau{margin:44px auto 0;max-width:1000px;border:1px solid var(--filet2);border-radius:6px;overflow:hidden;background:rgba(10,10,10,.85)}
.tableau .tete,.tableau .ligne-t{display:grid;grid-template-columns:1fr 1fr}
.tableau .tete div{display:grid;place-items:center;min-height:52px;padding:8px 16px;font:600 12px/1.3 var(--police);text-transform:uppercase;color:#fff;text-align:center}
.tableau .tete div:first-child{background:var(--brule)}
.tableau .tete div:last-child{background:var(--orange)}
.ligne-t{border-top:1px solid var(--filet)}
.ligne-t div{display:grid;place-items:center;padding:12px 22px;min-height:52px;text-align:center;font-size:12.5px;line-height:1.45}
.ligne-t div:first-child{color:var(--gris);border-right:1px solid var(--filet)}
.ligne-t div:last-child{color:#F2F2F2}

/* 05 · La décision : deux chemins numérotés de part et d'autre */
.decision{padding:70px 0 80px;background:radial-gradient(35% 50% at 0% 20%,rgba(136,56,31,.55),transparent 70%),var(--noir);overflow:hidden}
.decision h2{font-size:clamp(26px,2.6vw,32px);line-height:1.3}
.duel{display:grid;grid-template-columns:1fr 1.5fr 1fr;align-items:center;gap:0;margin:20px 0 0}
.duel .emplacement{width:100%;aspect-ratio:4/3;background:radial-gradient(60% 60% at 50% 45%,#3A1B0C,#0A0603 80%);box-shadow:none;-webkit-mask-image:linear-gradient(0deg,transparent,#000 25%);mask-image:linear-gradient(0deg,transparent,#000 25%)}
.chemin{position:relative;z-index:2;padding:30px 18px 20px;border:1px solid var(--filet2);border-radius:6px;background:rgba(12,12,12,.85);font-size:13.5px;line-height:1.45;color:#fff}
.chemin .num{position:absolute;top:-1px;width:30px;height:32px;background:var(--orange);border:2px solid #FF8A50;display:grid;place-items:center;font:500 22px/1 var(--police);color:#fff}
.chemin.c1{text-align:right;margin-right:-30px}
.chemin.c1 .num{right:12px}
.chemin.c2{margin-left:-30px}
.chemin.c2 .num{left:12px}
.decision .btn{margin-top:18px}

/* 06 · Qui : panneau scindé, photo sur orange à gauche */
.qui{padding:40px 0 90px;background:var(--noir)}
.qui .panneau{display:grid;grid-template-columns:1fr 1.05fr;border:1px solid var(--filet2);border-radius:10px;overflow:hidden;background:var(--carte)}
.qui .photo{position:relative;background:linear-gradient(180deg,#E2582A,#C9431B)}
.qui .photo .emplacement{width:100%;height:100%;min-height:100%;aspect-ratio:3/4;background:linear-gradient(180deg,#E3592B,#B83A15);box-shadow:none}
.qui .photo .emplacement::after{color:rgba(255,255,255,.85);border-color:rgba(255,255,255,.45)}
.qui .txt{padding:46px 36px 40px}
.qui h2{font-size:clamp(24px,2.4vw,28px);text-transform:uppercase;line-height:1.2;margin-bottom:18px}
.qui h2 b{font-weight:800}
.qui p{font-size:12.5px;line-height:1.5;color:#E0E0E0;margin-bottom:12px}
.qui p.intro{font-size:14px;color:#fff}
.qui .btn{margin-top:8px}

/* 07 · Témoignages : carrousel aux bords qui s'effacent */
.temoignages{padding:70px 0 80px;background:var(--carte2);border-top:1px solid var(--filet);overflow:hidden}
.temoignages h2{font-size:clamp(26px,2.6vw,32px);line-height:1.3}
.temoignages .sous{font-size:14px;color:#ECECEC;margin-top:16px}
.carrousel{position:relative;margin:36px auto 34px;max-width:1080px}
.piste{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding:0 20px;-webkit-mask-image:linear-gradient(90deg,transparent,#000 14%,#000 86%,transparent);mask-image:linear-gradient(90deg,transparent,#000 14%,#000 86%,transparent)}
.piste::-webkit-scrollbar{display:none}
.avis{flex:0 0 230px;scroll-snap-align:center;padding:16px 14px 18px;border:1px solid var(--filet2);border-radius:6px;background:linear-gradient(180deg,#151515,#0C0C0C);text-align:left;font-size:11.5px;line-height:1.45;color:#D0D0D0}
.avis .qui-a{display:flex;align-items:center;gap:10px;margin-bottom:18px}
.avis .emplacement{width:36px;flex:none;aspect-ratio:1/1;border-radius:4px}
.avis .emplacement::after{display:none}
.avis .etoiles{color:var(--orange);font-size:9px;letter-spacing:.15em}
.avis b{display:block;font-size:11.5px}
.avis small{display:block;font-size:10px;color:var(--gris)}
.fleche{position:absolute;top:50%;translate:0 -50%;z-index:3;width:44px;height:44px;display:grid;place-items:center;border:0;background:none;cursor:pointer}
.fleche span{width:20px;height:20px;border-radius:50%;background:var(--orange);display:grid;place-items:center;color:#fff}
.fleche svg{width:10px;height:10px}
.fleche.g{left:calc(50% - 392px)}
.fleche.d{right:calc(50% - 392px)}

/* 08 · FAQ : titre à gauche, rangées à bouton orange à droite */
.faq{padding:100px 0 110px;background:linear-gradient(180deg,var(--noir),#0A0A0A 80%,#121212);border-top:1px solid var(--filet)}
.faq .wrap{display:grid;grid-template-columns:.75fr 1fr;gap:90px;align-items:start;width:min(1000px,100% - 40px)}
.faq h2{font-size:clamp(26px,2.6vw,32px);line-height:1.25;margin-bottom:18px;font-weight:400}
.faq .gauche p{font-size:15px;color:#ECECEC;line-height:1.4;margin-bottom:26px}
.faq .gauche .emplacement{width:100%;max-width:300px;aspect-ratio:4/3;border-radius:8px;margin-top:34px}
.faq details{border:1px solid var(--filet2);border-radius:6px;background:var(--rangee);margin-bottom:12px;overflow:hidden}
.faq summary{list-style:none;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:52px;padding-left:16px;cursor:pointer;font:600 14px/1.35 var(--police);color:#fff}
.faq summary::-webkit-details-marker{display:none}
.faq summary .plus{align-self:stretch;width:46px;flex:none;background:var(--orange);display:grid;place-items:center;color:#fff}
.faq summary .plus svg{width:14px;height:14px;transition:rotate .3s var(--courbe)}
.faq details[open] summary .plus svg{rotate:180deg}
.faq details p{padding:0 62px 18px 16px;font-size:13.5px;line-height:1.55;color:#CFCFCF}

/* 09 · Pied */
#pied{background:var(--noir);border-top:1px solid var(--filet);font-size:12px;color:#CFCFCF}
#pied .cols{display:grid;grid-template-columns:1.4fr .9fr 1fr 1.1fr;gap:30px;padding:56px 0 40px}
#pied .script{font:700 34px/.8 var(--script);color:#fff}
#pied .script small{display:block;font-size:22px;margin-left:4px}
#pied .presente{margin-top:16px;max-width:230px;line-height:1.55}
#pied .reseaux{display:flex;gap:8px;margin-top:16px}
#pied .reseaux a{width:44px;height:44px;display:grid;place-items:center}
#pied .reseaux span{width:30px;height:30px;border-radius:50%;background:#1C1C1C;display:grid;place-items:center;color:#fff}
#pied .reseaux svg{width:13px;height:13px}
#pied h4{font:600 14px/1 var(--police);color:#fff;margin-bottom:16px}
#pied ul{list-style:none;display:grid;gap:7px}
#pied ul a:hover{color:var(--orange)}
#pied .contact li{display:flex;align-items:center;gap:8px}
#pied .contact svg{width:14px;height:14px;flex:none}
#pied .bas{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:24px 0 34px;border-top:1px solid var(--filet);color:var(--gris);font-size:11.5px}
#pied .droite{display:flex;gap:30px;text-align:right}

@media (max-width:1000px){
  .nav ul li:not(:last-child){display:none}
  .cartes{grid-template-columns:repeat(2,1fr);gap:16px 12px}
  .faq .wrap{gap:50px}
  #pied .cols{grid-template-columns:1fr 1fr}
}
@media (max-width:820px){
  .hero{min-height:0;padding-bottom:60px;text-align:center}
  .hero .scene{position:relative;right:auto;width:100%;height:auto;aspect-ratio:3/4;max-height:520px;margin-top:-62px}
  .hero .scene .emplacement{aspect-ratio:auto}
  .hero .scene::after{background:linear-gradient(0deg,var(--noir),transparent 35%),linear-gradient(180deg,rgba(0,0,0,.6),transparent 20%)}
  .hero .txt{padding-top:0;margin:-40px auto 0;max-width:520px}
  .chiffres,.clients{justify-content:center}
  .notif.n1{right:20px;top:120px}
  .notif.n2{left:20px;top:330px;bottom:auto}
  .probleme .wrap{grid-template-columns:1fr;gap:34px}
  .probleme .emplacement{max-width:none;aspect-ratio:4/3}
  .duel{grid-template-columns:1fr 1fr;gap:12px}
  .duel .emplacement{grid-column:1/-1;grid-row:1;max-width:520px;margin:0 auto}
  .chemin.c1,.chemin.c2{margin:0;text-align:center;padding-top:44px}
  .chemin.c1 .num,.chemin.c2 .num{left:50%;right:auto;translate:-50% 0}
  .qui .panneau{grid-template-columns:1fr}
  .qui .photo .emplacement{aspect-ratio:4/3;height:auto}
  .faq .wrap{grid-template-columns:1fr;gap:30px;text-align:center}
  .faq .gauche .emplacement{margin-inline:auto}
  .faq details{text-align:left}
  .fleche.g{left:4px}.fleche.d{right:4px}
  .piste{padding:0 calc(50% - 120px)}
  .avis{flex-basis:240px}
}
@media (max-width:560px){
  .kicker{letter-spacing:.32em}
  .hero h1{font-size:32px}
  .hero .scene{aspect-ratio:4/5}
  .notif{width:190px}
  .notif.n2{display:none}
  .btn{min-height:48px;font-size:12.5px;padding:0 16px 0 20px}
  .cartes{grid-template-columns:1fr;gap:26px}
  .tableau .ligne-t div{padding:12px 10px;font-size:11.5px}
  .tableau .tete div{font-size:11px;padding:8px 10px}
  .qui .txt{padding:34px 22px}
  #pied .cols{grid-template-columns:1fr}
  #pied .bas{flex-direction:column;text-align:center}
  #pied .droite{justify-content:center;text-align:center}
}
```
