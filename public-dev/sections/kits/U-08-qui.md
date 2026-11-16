# Prompt · Section « Qui est derrière » du template U « Colonnes de bronze »
# Par Yedidia Ruben - Digital Strategist. À coller dans une IA qui code, avec ta page.

Construis une section « Qui est derrière » pour ma page, dans le même esprit que le code de référence plus bas. Garde la structure, le geste et les proportions ; reprends mes couleurs, mes polices et mes textes à moi.

- Son rôle : Un humain derrière l'offre, et un lieu réel.
- Où la placer : Avant l'offre ou juste après.
- Sa structure : Un portrait d'un côté ; de l'autre, 2 paragraphes en « je » et 2 à 5 preuves de parcours (diplômes, années, chiffres).
- La règle qui fait la différence : Un objet du métier ou un cadre de story rend la personne proche. Les chiffres comptent jusqu'à leur valeur.
- Le geste de cette variante : portrait, cachet tournant au papillon
- Animations : attributs data-rv, data-lignes, data-compte, data-incline, data-aimant (moteur anim.js). Sans le moteur, retire-les.
- Aucun tiret long dans les textes. Contraste de 4,5 au moins. Lisible de 360 à 1920 px.

## Le code de référence (HTML)

```html
<section class="qui sombre" id="qui">
  <div class="fond"><div class="emplacement" data-img="U-qui-fond" data-format="9:16" data-alt="Gros plan d'Estelle souriante, lumière douce, fond crème, image d'ambiance en bord de page"></div></div>
  <div class="wrap">
    <div>
      <span class="etiq">Qui je suis</span>
      <h2 data-lignes>Et je serai ta mentore sur ce chemin</h2>
      <p data-rv>Enchantée, je suis <b>Estelle Nkoghe</b>, stratège financière d'entreprise et <b>expert-comptable de formation</b>, et c'est justement ce mélange qui fait la différence de mon travail.</p>
      <p data-rv>J'ai accompagné des centaines d'entrepreneuses en individuel, à Libreville et ailleurs, pour transformer leur entreprise avec des chiffres, de la clarté et un plan. <b>CAP MARGE</b> t'apporte exactement ce niveau de profondeur, appliqué à toi.</p>
    </div>
    <div class="portrait" data-rv>
      <div class="cachet" aria-hidden="true"><svg class="tour" viewBox="0 0 120 120"><defs><path id="rond" d="M60 60 m-48 0 a48 48 0 1 1 96 0 a48 48 0 1 1 -96 0"/></defs><circle cx="60" cy="60" r="58" fill="none" stroke="currentColor" stroke-opacity=".5"/><text><textPath href="#rond">CAP MARGE · STRUCTURE · BÉNÉFICE ·</textPath></text></svg><svg class="papillon"><use href="#papillon"/></svg></div>
      <div class="emplacement" data-img="U-portrait" data-format="3:4" data-alt="Estelle Nkoghe assise à califourchon sur une chaise, menton dans la main, chemise ample blanche et boucles perle"></div>
    </div>
  </div>
</section>
```

## Le CSS du template d'origine (la section en dépend, ne garde que ce qu'elle utilise)

```css
:root{
  --nuit:#100C07; --noir:#070707; --creme:#F8F2EB; --creme2:#F3F1ED; --blanc:#FFFFFF;
  --or:#B79E80; --bronze:#9C7E5F; --bronze-f:#7A5F42; --brun:#452D18; --texte:#4E3B2A; --doux:#6B5A49;
  --ardoise:#323435; --carte-n:#1B1B1B; --bordeaux:#280101; --rubis:#8F1110; --foret:#0F2907; --mousse:#1F3211; --wa:#018816;
  --courbe:cubic-bezier(.16,1,.3,1);
  --titre:'Plus Jakarta Sans',system-ui,sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:var(--titre);font-size:17px;line-height:1.55;color:var(--texte);background:var(--creme);-webkit-font-smoothing:antialiased;overflow-x:clip}
svg{display:block}
a{color:inherit;text-decoration:none}
h1,h2,h3{font-family:var(--titre);line-height:1.22;letter-spacing:-.02em;color:var(--brun)}
h2{font-size:clamp(25px,2.3vw,36px);font-weight:400}
h2 b{font-weight:700}
.wrap{width:min(1280px,100% - 40px);margin-inline:auto;position:relative;z-index:1}
.etroit{width:min(1040px,100% - 40px);margin-inline:auto;position:relative;z-index:1}
section{position:relative}
.centre{text-align:center}
.grille-fond{background-image:linear-gradient(rgba(140,110,80,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(140,110,80,.07) 1px,transparent 1px);background-size:64px 64px}
.etiq{display:inline-flex;align-items:center;gap:10px;font-size:13px;font-weight:500;color:var(--brun);margin-bottom:18px}
.etiq::before{content:"";width:3px;height:16px;border-radius:2px;background:var(--bronze)}
.sombre .etiq{color:#EDE3D8}
.filet{height:1px;background:#C9B8A5;width:min(1280px,100% - 40px);margin:60px auto}

/* Bouton : lingot de bronze, flèche dans un carré blanc */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:14px;min-height:56px;padding:14px 46px;border-radius:8px;
  background:linear-gradient(100deg,#D9C6B0 0%,#B9987A 30%,#9C7E5F 62%,#C6AA8A 100%);color:#fff;font:700 16px/1.2 var(--titre);
  box-shadow:0 14px 30px rgba(80,55,30,.28),inset 0 1px 0 rgba(255,255,255,.45);text-shadow:0 1px 2px rgba(60,40,20,.35);transition:box-shadow .4s var(--courbe),filter .4s}
.btn:hover{filter:brightness(1.06);box-shadow:0 18px 40px rgba(80,55,30,.38),inset 0 1px 0 rgba(255,255,255,.5)}
.btn i{width:22px;height:22px;border-radius:4px;background:#fff;color:var(--bronze);display:grid;place-items:center;flex:none}
.btn i svg{width:13px;height:13px}
.btn.contour{background:transparent;border:1.5px solid #E9E0D5;box-shadow:none;text-shadow:none}
.btn.contour:hover{background:rgba(255,255,255,.06)}

/* Logo : MÉTHODE en capitales espacées, CAP en bronze gras */
.logo{display:inline-flex;align-items:center;gap:12px;color:#fff}
.logo small{font:500 13px/1 var(--titre);letter-spacing:.45em;color:#C9B8A5}
.logo b{font:800 46px/1 var(--titre);letter-spacing:-.04em;background:linear-gradient(180deg,#F1DCC4,#B79E80 55%,#8A6A4A);-webkit-background-clip:text;background-clip:text;color:transparent}
.logo span{font:400 32px/1 var(--titre);letter-spacing:-.03em;color:#fff}

/* Emplacements d'image */
.emplacement{position:relative;overflow:hidden;width:100%;background:linear-gradient(160deg,#EFE6DA,#D9C9B5);border:1px solid #E2D5C4}
.emplacement::after{content:attr(data-format);position:absolute;left:50%;top:50%;translate:-50% -50%;font:600 11px/1 var(--titre);letter-spacing:.25em;color:#7A644E;padding:6px 12px;border:1px solid rgba(122,100,78,.35);border-radius:20px;background:rgba(255,255,255,.35)}
.emplacement[data-format="3:4"]{aspect-ratio:3/4}
.emplacement[data-format="4:3"]{aspect-ratio:4/3}
.emplacement[data-format="16:9"]{aspect-ratio:16/9}
.emplacement[data-format="1:1"]{aspect-ratio:1/1}
.emplacement[data-format="9:16"]{aspect-ratio:9/16}
.sombre .emplacement{background:linear-gradient(160deg,#2A2118,#15100B);border-color:#2E241A}
.sombre .emplacement::after{color:#C9B8A5;border-color:rgba(201,184,165,.3);background:rgba(0,0,0,.2)}

/* 01 · Hero */
.hero{background:radial-gradient(70% 90% at 75% 30%,#2A2018,var(--noir) 70%);color:#E9E1D8;overflow:hidden;padding:130px 0 170px;clip-path:ellipse(140% 100% at 50% 0)}
.hero .photo{position:absolute;right:0;top:0;bottom:0;width:58%;-webkit-mask-image:linear-gradient(90deg,transparent,#000 30%);mask-image:linear-gradient(90deg,transparent,#000 30%)}
.hero .photo .emplacement{height:100%;aspect-ratio:auto !important;border:0}
.courbe-fils{position:absolute;right:0;top:0;width:40%;height:60%;pointer-events:none;opacity:.45}
.hero .txt{max-width:600px;position:relative;z-index:2}
.hero h1{color:#fff;font-size:clamp(32px,3.3vw,46px);font-weight:600;margin:36px 0 22px;line-height:1.25}
.hero h1 em{font-style:normal;color:var(--or)}
.hero p{font-size:17px;color:#E5DCD2;max-width:540px;margin-bottom:40px}
.hero p b{color:#fff}
.descendre{position:absolute;left:50%;bottom:44px;translate:-50% 0;z-index:3;width:76px;height:76px;border-radius:50%;background:var(--creme);display:grid;place-items:center}
.descendre span{width:58px;height:58px;border-radius:50%;background:var(--or);display:grid;place-items:center;color:#fff}
.descendre svg{width:22px;height:22px}

/* 02 · Vidéo */
.video{padding:30px 0 0}
.video h2{max-width:1040px;margin:0 auto 34px}
.lecteur{position:relative;width:min(854px,100%);margin:0 auto 34px;border-radius:8px;overflow:hidden;box-shadow:0 30px 60px rgba(70,45,24,.14)}
.lecteur .commandes{position:absolute;left:50%;top:50%;translate:-50% -50%;display:flex;align-items:center;gap:10px;z-index:2}
.lecteur .commandes i{width:52px;height:52px;border-radius:50%;background:rgba(80,60,45,.55);backdrop-filter:blur(6px);display:grid;place-items:center;color:#fff}
.lecteur .commandes i.grand{width:80px;height:80px;background:rgba(90,58,40,.75)}
.lecteur .commandes svg{width:18px;height:18px}
.lecteur .commandes i.grand svg{width:28px;height:28px}

/* 03 · Les 4 piliers */
.piliers h2{max-width:1060px;margin:0 auto 46px}
.colonnes{position:relative;display:flex;justify-content:center;gap:clamp(30px,6vw,110px);padding-bottom:40px;margin-bottom:60px}
.colonnes::before{content:"";position:absolute;left:50%;bottom:20px;translate:-50% 0;width:min(810px,100%);height:190px;border-radius:50%;background:#E8E3D9}
.col{position:relative;text-align:center;font:600 12px/1.2 var(--titre);color:var(--brun)}
.col .tige{width:1.5px;height:30px;background:var(--bronze);margin:8px auto 0;position:relative}
.col .tige::before{content:"";position:absolute;left:50%;top:-4px;translate:-50% 0;width:8px;height:8px;border-radius:50%;background:var(--bronze)}
.col svg{width:96px;height:330px;filter:drop-shadow(0 18px 14px rgba(90,65,40,.25))}
.piliers .sous{max-width:880px;margin:0 auto;font-size:clamp(20px,1.9vw,30px);line-height:1.3;color:var(--brun)}
.venn{position:relative;margin:50px auto 0;width:min(620px,100%)}
.venn svg{width:100%;height:auto;overflow:visible}
.venn text{font-family:var(--titre);text-anchor:middle}
.venn .t1{font-size:24px;fill:#8E7152;font-weight:500}
.venn .t2{font-size:24px;fill:var(--brun);font-weight:700}
.venn-lignes{position:absolute;inset:0 -50vw;pointer-events:none}
.modules{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin:40px 0 46px;text-align:left;align-items:start}
.module h3{padding:16px 20px;border-radius:6px;background:linear-gradient(180deg,#A88A6A,var(--bronze));color:#fff;font-size:21px;font-weight:600;box-shadow:0 10px 20px rgba(90,65,40,.18);margin-bottom:14px}
.module h3 small{display:inline-block;padding:3px 8px;border-radius:10px;background:#fff;color:var(--bronze);font-size:10px;font-weight:600;margin-bottom:8px;letter-spacing:0}
.module h3 small{display:table}
.module h3 br{display:none}
.module details{background:#fff;border:1px solid #EFE7DD;border-radius:6px;margin-bottom:10px;box-shadow:0 4px 10px rgba(90,65,40,.05)}
.module summary{list-style:none;display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:56px;padding:10px 16px 10px 18px;font-size:15px;color:var(--texte);cursor:pointer}
.module summary::-webkit-details-marker{display:none}
.module summary::after{content:"";flex:none;width:22px;height:22px;border-radius:50%;background:var(--bronze) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M4.5 6.5 8 10l3.5-3.5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E") center/14px no-repeat;transition:rotate .4s var(--courbe)}
.module details[open] summary::after{rotate:180deg}
.module details p{padding:0 18px 14px;font-size:14px;color:var(--doux)}

/* 04 · Pour qui : bande nuit aux bords en vague, carte blanche */
.pourqui{background:var(--nuit);padding:0 0 70px}
.pourqui .vague{display:block;width:100%;height:110px;color:var(--creme)}
.pourqui .carte{position:relative;margin:-110px auto 0;width:min(1280px,100% - 40px);background:#fff;padding:40px clamp(20px,5vw,76px) 54px;text-align:center}
.pourqui .carte::before{content:"";position:absolute;left:10%;right:10%;top:-12px;height:3px;background:var(--bronze)}
.pourqui .carte::after{content:"";position:absolute;left:50%;top:-22px;translate:-50% 0;width:52px;height:24px;border-radius:5px;background:var(--bronze) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M4.5 6.5 8 10l3.5-3.5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E") center/16px no-repeat}
.pourqui h2{font-weight:600;font-size:clamp(28px,2.6vw,44px);margin-bottom:34px}
.coches{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;text-align:left}
.coche{position:relative;min-height:224px;padding:26px 20px 24px;border:1px solid #EAE2D7;background:linear-gradient(180deg,#FFFFFF,#F5EFE7);font-size:15px;line-height:1.45;color:var(--texte)}
.coche::before{content:"";position:absolute;left:20px;top:-1px;width:62px;height:3px;background:#C9B8A5}
.coche i{display:grid;place-items:center;width:58px;height:58px;border-radius:4px;background:var(--or);color:#fff;margin-bottom:28px}
.coche i svg{width:26px;height:26px}
.coche b{color:var(--brun)}

/* 05 · Plans */
.plans{background:var(--nuit);color:#E9E1D8;padding:20px 0 0}
.plans h2{color:#fff;max-width:1060px;margin:0 auto 54px}
.plans h2 b{color:#fff}
.plans h2 em{font-style:normal;font-weight:700;color:var(--or)}
.duo{display:grid;grid-template-columns:1fr 1fr;gap:30px;width:min(1100px,100% - 40px);margin:0 auto;position:relative;z-index:2;align-items:start}
.tete{position:relative;border-radius:14px;padding:40px 20px 34px;text-align:center;margin-bottom:22px}
.tete h3{font-size:clamp(28px,2.3vw,40px);font-weight:400;color:#fff;letter-spacing:-.03em}
.tete h3 b{font-weight:700}
.tete .code{display:block;width:210px;height:26px;margin:16px auto 0;background:repeating-linear-gradient(90deg,currentColor 0 2px,transparent 2px 4px,currentColor 4px 5px,transparent 5px 8px,currentColor 8px 11px,transparent 11px 13px);opacity:.5}
.basique .tete{background:var(--ardoise);color:#C9C9C9}
.premium .tete{background:linear-gradient(180deg,#C2A98B,var(--or));color:#fff;padding-top:28px}
.ideal{display:inline-block;padding:6px 18px;border-radius:20px;background:#F5E9DD;color:var(--bronze-f);font-size:14px;font-weight:600;margin-bottom:14px}
.corps{border-radius:14px;padding:22px 26px 28px}
.basique .corps{background:var(--carte-n)}
.premium .corps{background:#fff;color:var(--texte)}
.corps ul{list-style:none}
.corps li{display:flex;gap:16px;align-items:center;padding:12px 0;border-bottom:1px solid rgba(255,255,255,.12);font-size:16px;line-height:1.4}
.premium .corps li{border-color:#ECE5DC;color:var(--brun)}
.corps li svg{width:22px;height:22px;flex:none}
.corps li .oui{color:#22C55E}
.corps li.non{color:#8E8E8E}
.corps li .non-i{color:#8E8E8E}
.prix{margin:26px 0 22px;border-radius:24px;padding:20px;text-align:center;font:700 clamp(64px,7vw,116px)/1 var(--titre);letter-spacing:-.05em}
.prix small{display:block;font-size:16px;font-weight:500;letter-spacing:0;margin-top:8px}
.basique .prix{background:#131313;border:1px solid #222;color:#fff}
.basique .prix small{color:#BDBDBD}
.premium .prix{background:#FBF8F4;border:1px solid #EFE6DB;background-clip:padding-box}
.premium .prix span{background:linear-gradient(180deg,#C8AB88,#A78563);-webkit-background-clip:text;background-clip:text;color:transparent}
.premium .prix small{color:var(--doux)}
.corps .btn{width:100%}
.transition{display:block;width:100%;height:180px;margin-top:-180px;position:relative;z-index:1;color:var(--creme)}

/* 06 · Sur mesure */
.surmesure{padding:20px 0 0}
.bulle{position:relative;display:inline-block;padding:20px 40px;border-radius:40px;background:linear-gradient(90deg,#C6AE92,#B79E80);color:#fff;font-size:clamp(20px,1.9vw,30px);font-weight:500;letter-spacing:-.02em;margin-bottom:30px}
.bulle::before{content:"";position:absolute;left:-10px;bottom:4px;width:34px;height:26px;background:#C6AE92;clip-path:polygon(100% 0,100% 100%,0 100%,40% 70%)}
.surmesure p{max-width:1060px;margin:0 auto;font-size:clamp(20px,1.9vw,30px);line-height:1.4;color:var(--brun)}

/* 07 · Cas de réussite */
.cas h2{max-width:780px;margin:0 auto 46px}
.posts{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;width:min(1180px,100% - 40px);margin:0 auto;text-align:left}
.post{position:relative;background:#fff;box-shadow:0 18px 40px rgba(70,45,24,.1);padding-bottom:18px}
.post .haut{display:flex;align-items:center;gap:10px;padding:16px 16px;font-size:12px;font-weight:600;color:#1B1B1B}
.post .haut i{width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,#E9C9A8,#9C7E5F);border:2px solid #fff;box-shadow:0 0 0 1.5px #D9A8C0}
.post .haut span:last-child{margin-left:auto;letter-spacing:.1em}
.post .legende{position:absolute;left:18px;right:18px;bottom:70px;z-index:2;padding:12px 14px;background:rgba(255,255,255,.94);border-left:3px solid #C33C5C;font-size:12.5px;line-height:1.45;color:#2A2A2A}
.post .legende b{color:#A3203F}
.post .bas{display:flex;gap:14px;padding:16px 18px 0;color:#1B1B1B}
.post .bas svg{width:20px;height:20px}
.post .bas svg:first-child{color:#E0245E}
.post .bas svg:last-child{margin-left:auto}
.fleches{display:flex;justify-content:center;gap:14px;margin:30px 0 60px}
.fleches button{width:48px;height:48px;border-radius:50%;border:0;background:#D9CFC4;color:#fff;display:grid;place-items:center;cursor:pointer}
.fleches button+button{background:var(--bronze)}
.fleches svg{width:20px;height:20px}

/* 08 · Comparaison */
.versus{display:grid;grid-template-columns:1fr 1fr;gap:20px;width:min(1250px,100% - 40px);margin:0 auto 50px;text-align:left}
.camp{border-radius:12px;padding:0 50px 44px;margin-top:34px}
.camp.autres{background:var(--bordeaux)}
.camp.nous{background:var(--foret)}
.camp h3{margin:-34px -40px 30px;padding:18px 20px;border-radius:30px;text-align:center;color:#fff;font-size:22px;font-weight:600;border:2px solid rgba(255,255,255,.2)}
.autres h3{background:linear-gradient(180deg,#A3191A,var(--rubis))}
.nous h3{background:linear-gradient(180deg,#2A4418,var(--mousse))}
.nous h3 .logo small{font-size:9px}
.nous h3 .logo b{font-size:26px}
.nous h3 .logo span{font-size:19px}
.camp ul{list-style:none;display:grid;gap:14px}
.camp li{display:flex;align-items:center;gap:14px;min-height:54px;padding:10px 22px;border-radius:30px;font-size:16px;color:#fff;border:2px solid rgba(255,255,255,.22)}
.autres li{background:var(--rubis)}
.nous li{background:var(--mousse)}
.camp li svg{width:20px;height:20px;flex:none}

/* 09 · Qui */
.qui{background:var(--nuit);color:#E9E1D8;overflow:hidden}
.qui .fond{position:absolute;right:0;top:0;bottom:0;width:36%;opacity:.55}
.qui .fond .emplacement{height:100%;aspect-ratio:auto !important;border:0}
.qui .wrap{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;padding:70px 0}
.qui h2{color:var(--or);font-size:clamp(30px,2.6vw,44px);font-weight:600;margin-bottom:30px}
.qui p{font-size:clamp(17px,1.25vw,22px);line-height:1.55;color:#E9E1D8}
.qui p b{color:#fff}
.qui p+p{margin-top:30px}
.qui .portrait{position:relative}
.cachet{position:absolute;right:-60px;top:40px;width:190px;height:190px;color:#E9DCCB;z-index:3}
.cachet .tour{width:100%;height:100%;animation:tourne 22s linear infinite}
.cachet text{font:600 9px var(--titre);letter-spacing:.3em;fill:currentColor}
.cachet .papillon{position:absolute;left:50%;top:50%;translate:-50% -50%;width:56px;height:56px;color:#E9DCCB}
@keyframes tourne{to{rotate:360deg}}
@media (prefers-reduced-motion:reduce){.cachet .tour{animation:none}}
.lisiere{position:relative;height:0}
.lisiere::before{content:"";position:absolute;left:50%;translate:-50% 0;top:-3px;width:min(1160px,100% - 40px);height:4px;background:var(--bronze);z-index:3}
.lisiere::after{content:"";position:absolute;left:50%;top:-14px;translate:-50% 0;width:52px;height:30px;border-radius:5px;z-index:4;background:var(--bronze) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M4.5 6.5 8 10l3.5-3.5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E") center/16px no-repeat}

/* 10 · FAQ */
.faq{padding:80px 0 60px;background:linear-gradient(180deg,#FBF9F6,var(--creme2));overflow:hidden}
.faq>*:not(.arabesque){position:relative;z-index:1}
.faq .arabesque{position:absolute;inset:0;width:100%;height:100%;color:#E9E2D6;pointer-events:none}
.faq h2{margin-bottom:24px}
.faq .liste{width:min(1024px,100% - 40px);margin:0 auto 46px;text-align:left}
.faq details{margin-bottom:20px}
.faq summary{list-style:none;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:80px;padding:16px 40px;border-radius:12px;background:#fff;border:1px solid #E7DFD5;font-size:18px;font-weight:600;color:var(--brun);cursor:pointer}
.faq summary::-webkit-details-marker{display:none}
.faq summary::after{content:"";flex:none;width:18px;height:18px;border-radius:3px;background:var(--bronze) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M4.5 6.5 8 10l3.5-3.5' fill='none' stroke='white' stroke-width='2.4' stroke-linecap='round'/%3E%3C/svg%3E") center/12px no-repeat;transition:rotate .4s var(--courbe)}
.faq details[open] summary{background:var(--bronze);border-color:var(--bronze);color:#fff}
.faq details[open] summary::after{rotate:180deg;background-color:#fff;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M4.5 6.5 8 10l3.5-3.5' fill='none' stroke='%239C7E5F' stroke-width='2.4' stroke-linecap='round'/%3E%3C/svg%3E")}
.faq details p{margin-top:6px;padding:20px 40px;border-radius:12px;background:var(--bronze);color:#fff;font-size:15px}
.doutes{display:flex;align-items:center;gap:30px;width:min(1280px,100% - 40px);margin:70px auto 0;padding:30px 44px;border-radius:6px;background:var(--nuit);color:#E9E1D8;text-align:left}
.doutes svg.bulle-i{width:52px;height:52px;flex:none;color:var(--or)}
.doutes h3{color:#fff;font-size:clamp(24px,2.1vw,34px);font-weight:600;flex:1}
.doutes p{font-size:15px;flex:1}
.btn-wa{display:inline-flex;align-items:center;gap:10px;min-height:66px;padding:0 50px;border-radius:40px;background:linear-gradient(180deg,#0A9E22,var(--wa));color:#fff;font-weight:600;font-size:17px;box-shadow:0 10px 24px rgba(1,136,22,.3);flex:none}
.btn-wa svg{width:20px;height:20px}

/* 11 · Bandeau final */
.final{padding:70px 0 0;background:var(--creme2)}
.bandeau{display:grid;grid-template-columns:.62fr 1fr;width:min(1106px,100% - 40px);margin:0 auto;border-radius:6px 6px 0 0;overflow:hidden;background:var(--nuit)}
.bandeau .gauche{position:relative;background:var(--or);min-height:356px;overflow:hidden}
.tel{position:absolute;left:24%;top:46px;width:340px;height:520px;border-radius:52px;background:#1A1A1A;padding:10px;box-shadow:0 30px 50px rgba(0,0,0,.3)}
.tel .ecran{width:100%;height:100%;border-radius:44px;background:#fff;padding:18px 22px;font-size:12px;color:#1B1B1B}
.tel .ecran .ligne1{display:flex;justify-content:space-between;font-weight:700;margin-bottom:24px}
.tel .bloc{border:1px solid #E5E5E5;border-radius:12px;padding:12px;margin-bottom:10px;min-height:70px}
.tel .deux{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.tel .deux .bloc b{display:block;font-size:13px}
.carte-ca{position:absolute;left:8%;top:90px;z-index:2;width:270px;padding:20px 24px;border-radius:4px;background:#fff;box-shadow:0 20px 40px rgba(0,0,0,.25);display:grid;grid-template-columns:auto 1fr;gap:4px 16px;align-items:center;color:#1B1B1B;font-size:13px}
.carte-ca i{grid-row:1/4;width:46px;height:46px;border-radius:6px;background:#16A34A;color:#fff;display:grid;place-items:center}
.carte-ca i svg{width:22px;height:22px}
.carte-ca small{justify-self:start;padding:2px 8px;border-radius:10px;background:#DCFCE7;color:#166534;font-weight:600;font-size:11px}
.carte-ca b{font-size:26px;letter-spacing:-.02em;white-space:nowrap}
.bandeau .droite-b{position:relative;padding:40px 50px 40px 48px;color:#E9E1D8}
.bandeau .droite-b h2{color:#fff;font-weight:600;font-size:clamp(26px,2.3vw,36px);margin-bottom:22px}
.bandeau .droite-b h2 em{font-style:normal;color:var(--or)}
.bandeau .droite-b p{font-size:17px}
.bandeau .droite-b p+p{margin-top:18px}
.bandeau .droite-b p b{color:#fff}
.bandeau .etiq{color:#EDE3D8}
.bandeau .papillon{position:absolute;right:30px;top:28px;width:34px;height:34px;color:var(--or)}

/* 12 · Pied */
#pied{background:#0A0A0A;color:#E9E9E9;text-align:center;padding:50px 20px 60px;font-size:clamp(15px,1.3vw,22px)}
#pied a{text-decoration:underline;text-underline-offset:3px}
#pied .droite{display:flex;justify-content:center;gap:14px;margin-top:30px}
#pied .droite a{width:58px;height:58px;border-radius:6px;background:var(--or);display:grid;place-items:center;color:#fff;text-decoration:none}
#pied .droite svg{width:26px;height:26px}

@media (max-width:1100px){
  .modules{grid-template-columns:1fr 1fr}
  .coches{grid-template-columns:1fr 1fr}
  .coche{min-height:0}
}
@media (max-width:820px){
  .hero{padding:60px 0 150px;clip-path:ellipse(220% 100% at 50% 0)}
  .hero .photo{position:relative;width:100%;height:auto;-webkit-mask-image:linear-gradient(180deg,#000 70%,transparent);mask-image:linear-gradient(180deg,#000 70%,transparent);margin-bottom:-40px}
  .hero .photo .emplacement{aspect-ratio:4/3 !important;height:auto}
  .courbe-fils{display:none}
  .colonnes{gap:16px}
  .col svg{width:58px;height:200px}
  .col{font-size:11px;max-width:80px}
  .colonnes::before{height:120px}
  .duo{grid-template-columns:1fr}
  .posts{grid-template-columns:1fr;max-width:420px}
  .posts .post:nth-child(n+2){display:none}
  .versus{grid-template-columns:1fr;gap:50px}
  .camp{padding:0 20px 30px}
  .camp h3{margin:-34px -10px 26px}
  .qui .wrap{grid-template-columns:1fr;gap:40px}
  .qui .fond{display:none}
  .cachet{right:-10px;top:-40px;width:130px;height:130px}
  .doutes{flex-direction:column;align-items:flex-start;gap:16px;padding:28px 24px}
  .bandeau{grid-template-columns:1fr}
  .bandeau .gauche{min-height:340px}
  .tel{left:auto;right:6%}
  .faq summary{padding:14px 20px;font-size:16px}
  .faq details p{padding:16px 20px}
}
@media (max-width:560px){
  .modules{grid-template-columns:1fr}
  .coches{grid-template-columns:1fr}
  .colonnes{gap:6px}
  .col svg{width:50px;height:170px}
  .col{font-size:10px}
  .logo b{font-size:38px}
  .logo span{font-size:26px}
  .logo small{font-size:11px;letter-spacing:.3em}
  .btn{padding:14px 26px;font-size:15px}
  .btn-wa{padding:0 30px}
  .carte-ca{left:4%;width:230px}
  .carte-ca b{font-size:22px}
  .bandeau .droite-b{padding:30px 22px}
  .prix{font-size:56px}
}
```
