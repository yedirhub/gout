# Prompt · Section « Les bonus » du template C « Magazine affirmé »
# Par Yedidia Ruben - Digital Strategist. À coller dans une IA qui code, avec ta page.

Construis une section « Les bonus » pour ma page, dans le même esprit que le code de référence plus bas. Garde la structure, le geste et les proportions ; reprends mes couleurs, mes polices et mes textes à moi.

- Son rôle : Faire basculer l'indécis : « si j'entre maintenant, j'ai plus ».
- Où la placer : Juste après l'offre, ou entre l'offre et son rappel.
- Sa structure : Un titre « qui entre maintenant reçoit plus », un compte à rebours si la date est réelle, puis un bonus par carte avec sa valeur.
- La règle qui fait la différence : Chaque bonus a une forme physique (ticket, livre, carte), pas une icône.
- Le geste de cette variante : carrousel de couvertures
- Animations : attributs data-rv, data-lignes, data-compte, data-incline, data-aimant (moteur anim.js). Sans le moteur, retire-les.
- Aucun tiret long dans les textes. Contraste de 4,5 au moins. Lisible de 360 à 1920 px.

## Le code de référence (HTML)

```html
<section class="bonus" id="bonus">
  <div class="wrap centre">
    <div class="sur" data-rv>Bonus</div>
    <h2 data-rv>Ce que tu vas recevoir</h2>
  </div>
  <div class="rail-cadre" data-rv><div class="rail">
    <div class="ph nuit b"><h3>Cours<br>pratiques</h3><small>ATELIER MONTAGE</small></div>
    <div class="ph nuit b"><h3>Supports<br>de cours</h3><small>ATELIER MONTAGE</small></div>
    <div class="ph nuit b"><h3>Modèle de<br>devis</h3><small>ATELIER MONTAGE</small></div>
    <div class="ph nuit b"><h3>Modèle de<br>contrat</h3><small>ATELIER MONTAGE</small></div>
    <div class="ph nuit b"><h3>Groupe<br>30 jours</h3><small>ATELIER MONTAGE</small></div>
  </div></div>
  <div class="points" aria-hidden="true"><i></i><i></i><i></i></div>
  <div class="cta" data-rv style="margin-top:28px"><a class="btn reflet" data-aimant href="#offre">Je réserve ma place <svg width="16" height="16"><use href="#entree"/></svg></a></div>
</section>
```

## Le CSS du template d'origine (la section en dépend, ne garde que ce qu'elle utilise)

```css
:root{
  --creme:#F5EFEA; --creme-2:#FCF9F3; --creme-3:#F8F3E9; --blanc:#FFFFFF;
  --encre:#362725; --texte:#6E615C; --doux:#73665F;
  --rouge:#8E0012; --bordeaux:#5B0118; --corail:#CC3334;
  --filet:#E4D9D2;
  --courbe:cubic-bezier(.16,1,.3,1);
  --f:'Inter Tight',system-ui,sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:var(--f);font-size:16px;line-height:1.5;color:var(--texte);background:var(--creme);-webkit-font-smoothing:antialiased;overflow-x:hidden}
svg{display:block}
a{color:inherit;text-decoration:none}
.wrap{width:min(960px,100% - 40px);margin-inline:auto}
section{position:relative}

/* typographie */
.sur{font-size:11px;font-weight:600;letter-spacing:.02em;text-transform:uppercase;color:var(--rouge);margin-bottom:10px}
.sur::before{content:"// "}
h1,h2,h3{color:var(--encre);font-weight:400;letter-spacing:-.04em}
h1{font-size:clamp(38px,3.6vw,52px);line-height:1.04}
h2{font-size:clamp(30px,3vw,44px);line-height:1.06}
h1 em,h2 em{font-style:normal;color:var(--rouge)}
.centre{text-align:center}
b,strong{font-weight:600;color:var(--encre)}

/* bouton : rectangle plein, haut, capitales */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:12px;min-height:70px;padding:0 48px;background:var(--rouge);color:#fff;
  font-size:14px;font-weight:600;letter-spacing:.01em;text-transform:uppercase;border-radius:2px;transition:background .3s ease,transform .3s var(--courbe)}
.btn svg{transition:transform .3s var(--courbe)}
.btn:hover{background:var(--bordeaux)}
.btn:hover svg{transform:translateX(4px)}
.cta{display:flex;justify-content:center;margin-top:28px}

/* images d'attente */
.ph{position:relative;overflow:hidden;background:linear-gradient(160deg,#BDB6B2,#6F6865)}
.ph.chaud{background:linear-gradient(165deg,#E6DCD5,#BFAFA6)}
.ph.nuit{background:radial-gradient(80% 60% at 50% 30%,#4A403C,#141010)}
.ph .lab{position:absolute;left:10px;top:10px;font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:#fff;background:rgba(0,0,0,.35);padding:3px 7px;border-radius:3px}
.ph svg.silh{position:absolute;inset:auto 0 0 0;width:100%;height:92%}

/* barre de story (le motif signature) */
.story{position:absolute;left:0;right:0;top:0;padding:10px 12px;z-index:3}
.story .barres{display:flex;gap:4px}
.story .barres i{flex:1;height:2px;background:rgba(54,39,37,.25);border-radius:2px}
.story .barres i:first-child{background:rgba(54,39,37,.7)}
.story .qui{display:flex;align-items:center;gap:6px;margin-top:8px;font-size:9px;color:var(--encre)}
.story .qui i{width:16px;height:16px;border-radius:50%;background:linear-gradient(135deg,#C9A99A,#7A4E44)}
.story .qui span{margin-left:auto;letter-spacing:.2em}
.story.clair .barres i{background:rgba(255,255,255,.4)}.story.clair .barres i:first-child{background:#fff}.story.clair .qui{color:#fff}
.outils{position:absolute;display:grid;gap:12px;justify-items:center;color:var(--rouge);font-size:13px;z-index:3}
.outils svg{width:14px;height:14px}

/* 01 hero */
.hero{background:var(--creme);overflow:hidden}
.hero .wrap{display:grid;grid-template-columns:1fr 1fr;align-items:end;min-height:700px;gap:24px}
.hero .txt{padding:130px 0 110px}
.marque{display:flex;align-items:center;gap:14px;margin-bottom:20px}
.logo{display:flex;align-items:center;gap:10px}
.mono{font-size:30px;font-weight:300;color:var(--rouge);letter-spacing:-.12em;font-style:italic;line-height:1}
.logo .sep{width:1px;height:34px;background:var(--encre);opacity:.5}
.logo .nom{line-height:1.05;color:var(--encre)}
.logo .nom b{display:block;font-size:14px;font-weight:600;letter-spacing:.01em}
.logo .nom small{display:block;font-size:9px;letter-spacing:.42em;text-transform:uppercase}
.infos{display:grid;gap:4px;font-size:11px;color:var(--encre)}
.infos span{display:flex;align-items:center;gap:6px}
.infos svg{width:11px;height:11px;color:var(--rouge)}
.hero p{font-size:15px;margin-top:18px;max-width:410px}
.hero .cta{justify-content:flex-start;margin-top:40px}
.scene{position:relative;height:640px}
.anneau{position:absolute;border-radius:50%;border:16px solid var(--corail)}
.anneau.a1{width:440px;height:440px;right:-10px;top:150px}
.anneau.a2{width:250px;height:250px;left:-30px;bottom:-40px;border-width:12px}
.scene .portrait{position:absolute;inset:40px 30px 0 60px;background:none}
.scene .story{left:60px;right:50px;top:84px}

/* 02 bandeau défilant */
.bandeau{border-block:1px solid var(--filet);background:var(--creme);overflow:hidden;padding:14px 0;white-space:nowrap}
.defile{display:inline-flex;gap:0;animation:defile 40s linear infinite}
.defile span{display:inline-flex;align-items:center;font-size:14px;color:var(--doux);padding:0 40px}
.defile span::after{content:"";width:1px;height:20px;background:var(--rouge);margin-left:80px}
@keyframes defile{to{transform:translateX(-50%)}}

/* 03 vérité */
.verite{padding:90px 0}
.verite .wrap{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center}
.collage{position:relative;height:420px}
.collage .tel{position:absolute;left:30%;top:30px;width:44%;height:340px;border-radius:8px;box-shadow:0 30px 50px -30px rgba(54,39,37,.5)}
.collage .tel2{position:absolute;left:62%;top:60px;width:30%;height:240px;border-radius:6px}
.post{position:absolute;left:0;top:140px;width:38%;background:#fff;border-radius:6px;padding:12px 14px;box-shadow:0 24px 40px -24px rgba(54,39,37,.45);z-index:2}
.post .ent{display:flex;align-items:center;gap:6px;font-size:8px;color:var(--doux)}
.post .ent i{width:12px;height:12px;border-radius:50%;background:#C9A99A}
.post .q{font-size:34px;line-height:1;color:var(--rouge);margin:10px 0 2px;font-weight:700}
.post p{font-size:21px;line-height:1.05;letter-spacing:-.04em;color:var(--encre)}
.post p em{font-style:normal;color:var(--rouge);font-weight:600;background:linear-gradient(var(--rouge),var(--rouge)) 0 100%/100% 2px no-repeat}
.post .act{display:flex;gap:10px;font-size:8px;color:var(--doux);margin-top:16px}
.vues{position:absolute;display:flex;align-items:center;gap:4px;font-size:11px;font-weight:600;color:var(--encre)}
.vues::before{content:"";width:10px;height:10px;border-radius:50%;background:radial-gradient(circle,var(--rouge) 35%,transparent 40%),radial-gradient(ellipse,transparent 55%,var(--rouge) 58%)}
.verite .court{font-size:14px;font-weight:500;color:var(--rouge);margin-top:22px}
.verite hr{border:0;height:1px;background:var(--filet);width:170px;margin:26px 0}
.verite .fin{font-size:14px}

/* 04 douleurs */
.douleurs{padding:60px 0 110px}
.cartes4{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-top:36px}
.photo-carte{height:300px;border-radius:4px;border:1px solid #5d5856}
.etiq{position:absolute;left:10px;right:10px;bottom:40px;background:var(--bordeaux);color:#F1E6E3;font-size:13px;text-align:center;padding:12px 10px;outline:1px solid rgba(255,255,255,.55);outline-offset:-4px}
.etiq b{color:#fff}
.douleurs .chute{font-size:20px;line-height:1.3;letter-spacing:-.03em;margin-top:44px;color:var(--texte);font-weight:300}
.douleurs .chute b{font-weight:500}

/* 05 bande inclinée */
.bandes{height:150px;position:relative;overflow:hidden}
.bande{position:absolute;left:-5%;width:110%;white-space:nowrap;overflow:hidden;padding:16px 0}
.bande.b1{top:42px;background:var(--bordeaux);color:#F1E6E3;transform:rotate(2.2deg);z-index:2}
.bande.b2{top:50px;background:var(--creme-3);color:var(--doux);transform:rotate(-2.6deg);border-block:1px solid var(--rouge)}
.bande .defile span{color:inherit;font-size:14px;padding:0 50px}
.bande .defile span::after{content:"";width:16px;height:16px;border-radius:50%;border:1px dashed currentColor;margin-left:100px;background:none}
.bande.b2 .defile{animation-direction:reverse}

/* 06 la bascule */
.bascule{padding:80px 0 100px}
.bascule .tete{display:flex;justify-content:space-between;align-items:center;gap:30px}
.bascule h2{max-width:600px}
.sceau{position:relative;width:110px;height:110px;flex:none;border-radius:50%;border:1px solid #CDBFB8;display:grid;place-items:center}
.sceau svg.rond{position:absolute;inset:0;width:100%;height:100%;animation:tourne 30s linear infinite}
.sceau .mono{font-size:26px}
@keyframes tourne{to{transform:rotate(360deg)}}
.mosaique{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:36px}
.mosaique>*{height:170px;border-radius:4px}
.tu-montes{background:#fff;display:flex;flex-direction:column;justify-content:center;align-items:center;overflow:hidden;border:1px solid var(--filet)}
.tu-montes small{font-size:15px;color:var(--texte)}
.tu-montes small b{font-weight:600}
.tu-montes .mots{white-space:nowrap;font-size:30px;letter-spacing:-.04em;margin-top:6px;color:var(--texte);-webkit-mask:linear-gradient(90deg,transparent,rgba(0,0,0,.35) 18%,#000 38%,#000 62%,rgba(0,0,0,.35) 82%,transparent);mask:linear-gradient(90deg,transparent,rgba(0,0,0,.35) 18%,#000 38%,#000 62%,rgba(0,0,0,.35) 82%,transparent)}
.tu-montes .mots b{color:var(--encre);font-weight:500}.tu-montes .mots b em{font-style:normal;color:var(--rouge)}
.bordeaux-carte{background:var(--bordeaux);color:#E9D7D5;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}
.bordeaux-carte p{font-size:24px;line-height:1.15;color:#fff;letter-spacing:-.03em}
.bordeaux-carte small{font-size:13px;margin-top:8px}

/* 07 mot géant */
.geant{padding:60px 0 100px;background:var(--creme-3);overflow:hidden}
.scene-geant{position:relative;height:560px;margin-top:20px}
.mot{position:absolute;left:50%;top:110px;transform:translateX(-50%);font-size:min(22vw,330px);font-weight:500;letter-spacing:-.06em;line-height:.8;color:var(--rouge);white-space:nowrap}
.mot.miroir{top:calc(110px + min(22vw,330px)*.8 + 4px);transform:translateX(-50%) scaleY(-1);opacity:.07;-webkit-mask:linear-gradient(0deg,#000,transparent 60%);mask:linear-gradient(0deg,#000,transparent 60%)}
.scene-geant .assise{position:absolute;left:50%;transform:translateX(-50%);top:0;width:380px;height:540px;background:none;z-index:2}
.cartes-app{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:20px;position:relative;z-index:3}
.app{background:#fff;border-radius:6px;padding:40px 12px 46px;text-align:center;box-shadow:0 20px 40px -30px rgba(54,39,37,.35)}
.pilule{display:inline-flex;align-items:center;gap:6px}
.pilule i{width:22px;height:22px;border-radius:50%;background:#F7E7E8;display:grid;place-items:center;color:var(--rouge)}
.pilule i svg{width:11px;height:11px}
.pilule span{background:var(--bordeaux);color:#fff;font-size:9px;padding:5px 10px;border-radius:999px}
.app p{font-size:15px;color:var(--encre);margin-top:12px;letter-spacing:-.02em}
.app p b{font-weight:600}

.mot-para{position:absolute;inset:0;pointer-events:none}
.mot-glisse{display:inline-block}
/* effet magazine 1 : le mot géant se dévoile de bas en haut, comme une une de magazine qu'on imprime */
.anime .scene-geant[data-rv]{opacity:1;transform:none}
.anime .scene-geant .mot{clip-path:inset(100% 0 0 0);transition:clip-path 1.3s cubic-bezier(.16,1,.3,1) .1s}
.anime .scene-geant.vu .mot{clip-path:inset(0 0 0 0)}
/* effet magazine 2 : la première barre de story se remplit en boucle, comme une vraie story */
.story .barres i:first-child{background:rgba(54,39,37,.25)!important;position:relative;overflow:hidden}
.story .barres i:first-child::after{content:"";position:absolute;inset:0;background:rgba(54,39,37,.75);transform-origin:0 50%;animation:story 6s linear infinite}
.story.clair .barres i:first-child::after{background:#fff}
.story.clair .barres i:first-child{background:rgba(255,255,255,.4)!important}
@keyframes story{from{transform:scaleX(0)}to{transform:scaleX(1)}}
/* les mots rouges du titre se soulignent une fois arrivés */
.anime h1 em{background:linear-gradient(var(--rouge),var(--rouge)) 0 96%/0 2px no-repeat;transition:background-size .9s cubic-bezier(.16,1,.3,1) 1.1s}
.anime h1.vu em{background-size:100% 2px}

/* 08 programme */
.programme{background:linear-gradient(var(--creme-3) 0 120px,var(--creme) 120px);padding:20px 0 90px}
.boite{background:#fff;border:1px solid #E7DED8;border-radius:8px;padding:56px 56px 64px}
.boite .tete{display:flex;justify-content:space-between;align-items:center}
.fleches{display:flex}
.fleches i{width:42px;height:42px;border-radius:50%;display:grid;place-items:center;border:1.5px solid var(--rouge)}
.fleches i:first-child{background:var(--rouge);color:#fff;z-index:1}
.fleches i:last-child{margin-left:-12px;background:#fff}
.fleches svg{width:12px;height:12px}
.grille-prog{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:40px;list-style:none}
.grille-prog li{background:var(--creme);border-radius:4px;padding:22px 16px;display:flex;align-items:center;gap:12px;font-size:14px;font-weight:600;color:var(--encre);line-height:1.2;min-height:92px;letter-spacing:-.01em}
.coche{width:22px;height:22px;flex:none;border-radius:50%;background:var(--rouge);display:grid;place-items:center;color:#fff}
.coche svg{width:10px;height:10px}

/* 09 bonus */
.bonus{background:var(--creme-2);padding:20px 0 100px;overflow:hidden}
.rail-cadre{margin-top:40px;display:flex;justify-content:center}
.rail{display:flex;gap:14px;flex:none}
.rail .b{width:326px;height:430px;border-radius:6px;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;padding-bottom:22px;color:#fff;text-align:center}
.rail .b h3{color:#fff;font-size:36px;line-height:.95;font-weight:500;letter-spacing:-.04em;text-transform:uppercase;position:relative;z-index:2}
.rail .b small{font-size:8px;letter-spacing:.4em;margin-top:22px;position:relative;z-index:2;opacity:.85}
.rail .b::after{content:"";position:absolute;inset:40% 0 0;background:linear-gradient(transparent,rgba(0,0,0,.75));z-index:1}
.points{display:flex;justify-content:center;gap:4px;margin:26px auto 0;padding:3px 5px;border:1px solid var(--filet);border-radius:999px;width:max-content}
.points i{width:6px;height:6px;border-radius:50%;background:#C4A9A6}.points i:first-child{width:22px;border-radius:4px;background:var(--bordeaux)}

/* 10 investissement */
.invest{background:var(--creme-2);padding:60px 0 110px;overflow:hidden}
.invest .bandes{position:absolute;inset:0;height:auto}
.invest .bande.b1{top:300px}.invest .bande.b2{top:330px}
.offre{position:relative;z-index:3;display:grid;grid-template-columns:1fr 1fr;border:1px solid #E7DED8;border-radius:6px;overflow:visible;max-width:960px;margin:0 auto}
.offre .gauche{background:var(--creme);padding:70px 56px;border-radius:6px 0 0 6px}
.offre .gauche h2{margin-bottom:22px}
.coches{list-style:none;display:grid;gap:14px}
.coches li{display:flex;align-items:center;gap:12px;font-size:17px;color:var(--texte)}
.coches .coche{background:var(--bordeaux)}
.offre .droite{background:#fff;padding:40px 56px 36px;text-align:center;border-radius:0 6px 6px 0}
.offre .droite .logo{justify-content:center}
.prix{display:flex;align-items:flex-end;justify-content:center;gap:6px;color:var(--rouge);margin-top:40px;line-height:.8}
.prix .devant{font-size:28px;letter-spacing:-.04em;text-align:right;line-height:1}
.prix .devant small{display:block;font-size:20px}
.prix .gros{font-size:128px;font-weight:600;letter-spacing:-.07em}
.prix .cts{font-size:30px;color:var(--encre);letter-spacing:-.04em;padding-bottom:6px}
.comptant{display:inline-block;margin-top:20px;border:1.5px dashed #CFC3BD;border-radius:999px;padding:8px 18px;font-size:17px;color:var(--texte);letter-spacing:-.03em}
.comptant b{font-weight:600}
.offre .btn{width:100%;margin-top:30px}
.places{display:flex;align-items:center;justify-content:center;gap:8px;margin-top:22px;font-size:14px;color:var(--encre)}
.places svg{width:14px;height:14px;color:var(--rouge)}
.offre .infos{grid-auto-flow:column;justify-content:center;gap:16px;margin-top:16px;font-size:12px}
.offre .sceau{position:absolute;left:50%;top:-48px;transform:translateX(-50%);background:var(--creme-2);width:96px;height:96px;z-index:4}

/* 11 avis */
.avis{background:var(--creme-2);padding:20px 0 100px;overflow:hidden}
.avis .tete{display:flex;justify-content:space-between;align-items:flex-end}
.qui-av{display:flex;align-items:center}
.qui-av i{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#E8D8CF,#B49488);border:3px solid var(--creme-2)}
.qui-av i+i{margin-left:-12px;background:var(--creme-2)}
.qui-av i:last-child{background:var(--bordeaux);display:grid;place-items:center;color:#fff}
.qui-av svg{width:12px;height:12px}
.rail-avis{display:flex;gap:14px;margin-top:36px;padding-left:max(20px,calc(50% - 480px - 160px));width:max-content}
.cadre{width:300px;height:360px;background:#fff;border:1px solid #EFE7E1;border-radius:6px;padding:18px;flex:none}
.chat{height:100%;border-radius:8px;background:linear-gradient(180deg,#DCE7EE 0%,#E9D5BF 100%);padding:10px;display:flex;flex-direction:column;gap:6px;overflow:hidden}
.chat .haut{display:flex;align-items:center;gap:6px;background:rgba(255,255,255,.8);margin:-10px -10px 4px;padding:8px 10px;font-size:9px;color:#222}
.chat .haut i{width:16px;height:16px;border-radius:50%;background:#C9A99A}
.bulle{background:#fff;border-radius:6px;padding:7px 9px;font-size:10px;line-height:1.35;color:#222;max-width:88%}
.bulle.moi{align-self:flex-end;background:#DCF8C6}
.cadre.photo{padding:18px}
.cadre.photo .ph{height:100%;border-radius:6px}

/* 12 qui sommes-nous */
.nous{background:var(--creme-2);padding:120px 0 140px;overflow:hidden}
.nous .wrap{position:relative;display:grid;grid-template-columns:1.25fr 1fr;align-items:center}
.carte-nous{background:var(--bordeaux);color:#E3CFCD;padding:56px 70px 60px 60px;border-radius:6px;position:relative;z-index:2;margin-top:40px}
.carte-nous .sur{color:#F1E6E3}
.carte-nous h2{color:#fff;margin-bottom:22px}
.carte-nous p{font-size:15px;margin-bottom:18px;max-width:440px}
.carte-nous p b{color:#fff}
.chiffres{display:flex;gap:56px;margin-top:30px}
.chiffres strong{display:block;font-size:84px;line-height:.9;font-weight:300;color:#fff;letter-spacing:-.05em}
.chiffres div>span{display:block;font-size:12px;margin-top:8px;color:#E3CFCD}
.photo-nous{position:relative;height:560px;margin-left:-40px;z-index:3;border-radius:2px}
.photo-nous .story{z-index:4}
.mot-haut,.mot-bas{position:absolute;font-size:110px;font-weight:500;letter-spacing:-.05em;line-height:.8;white-space:nowrap;z-index:1}
.mot-haut{right:30px;top:-62px;color:transparent;-webkit-text-stroke:1px rgba(54,39,37,.08);background:linear-gradient(#fff,#fff);-webkit-background-clip:text;background-clip:text;color:rgba(255,255,255,.85)}
.mot-bas{right:10px;bottom:-60px;color:var(--bordeaux);z-index:4}

/* 13 faq + pied */
.faq{background:var(--bordeaux);padding:70px 0 40px;color:#E3CFCD}
.faq .sur{color:#F1E6E3}
.faq h2{color:#fff}
.questions{display:grid;gap:8px;margin-top:40px}
.qst{background:var(--creme);border-radius:4px}
.qst summary{list-style:none;display:flex;justify-content:space-between;align-items:center;gap:20px;padding:22px 22px 6px;cursor:pointer;font-size:22px;color:var(--encre);letter-spacing:-.03em}
.qst summary::-webkit-details-marker{display:none}
.qst summary i{width:40px;height:40px;flex:none;border-radius:6px;display:grid;place-items:center;background:var(--rouge);color:#fff;transition:transform .3s var(--courbe)}
.qst summary i svg{width:11px;height:11px}
.qst[open] summary i{background:none;border:1px solid var(--encre);color:var(--encre)}
.qst p{padding:0 80px 22px 22px;font-size:13px;color:var(--encre)}
.qst:not([open]) summary{padding-bottom:22px}
.pied{border-top:1px solid rgba(255,255,255,.35);margin-top:88px;padding-top:28px;display:flex;justify-content:space-between;align-items:center;gap:20px;font-size:12px;color:#F1E6E3}
.pied .logo .nom,.pied .logo .nom b,.pied .mono{color:#fff}
.pied .logo .sep{background:#fff}
.pied .logo .nom b{font-size:18px}
.pied .droite{text-align:right;line-height:1.7}
.pied .droite b{color:#fff}

@media (prefers-reduced-motion:reduce){*{animation:none!important}}

/* responsive — mesuré sur la version mobile de la référence */
@media (max-width:1024px){
  .verite .wrap,.nous .wrap{grid-template-columns:1fr}
  .cartes4,.cartes-app{grid-template-columns:repeat(2,1fr)}
  .grille-prog{grid-template-columns:repeat(2,1fr)}
  .offre{grid-template-columns:1fr}
  .offre .gauche{border-radius:6px 6px 0 0}.offre .droite{border-radius:0 0 6px 6px}
  .photo-nous{margin:0 0 -40px;order:-1;height:520px}
  .carte-nous{margin-top:0}
}
@media (max-width:860px){
  .hero .wrap{grid-template-columns:1fr}
}
@media (max-width:640px){
  .cta{padding-inline:20px}
  .coches{justify-items:start;width:max-content;max-width:100%;margin-inline:auto;text-align:left}
  .scene .outils-hero{right:14px!important;top:130px!important;font-size:11px;gap:9px}
  .wrap{width:calc(100% - 40px)}
  .hero .wrap{min-height:0;gap:0}
  .hero .scene{order:-1;height:400px;margin:0 -20px}
  .anneau.a1{width:300px;height:300px;right:-40px;top:70px;border-width:12px}
  .anneau.a2{display:none}
  .scene .portrait{inset:10px 40px 0 40px}
  .scene .story{left:20px;right:20px;top:20px}
  .hero .txt{padding:14px 0 40px;text-align:center}
  .marque{justify-content:center;margin-bottom:24px}
  h1{font-size:40px}
  .hero p{font-size:13px;margin-inline:auto}
  .hero .cta{justify-content:center;margin-top:28px}
  .btn{width:100%;padding:0 20px;font-size:13px;min-height:68px}
  .verite{padding:50px 0}
  .verite .wrap{gap:20px}
  .verite .texte{order:-1;text-align:center}
  .verite hr{display:none}
  .collage{height:300px;width:min(100%,360px);margin:auto}
  .collage .tel{height:240px}.collage .tel2{height:170px}
  .post{top:90px;width:42%}.post p{font-size:16px}.post .q{font-size:24px}
  h2{font-size:31px}
  .cartes4{grid-template-columns:1fr;gap:10px}
  .photo-carte{height:190px}
  .etiq{bottom:14px;left:60px;right:60px}
  .bascule .tete{flex-direction:column-reverse;text-align:center}
  .bascule h2{font-size:24px}
  .mosaique{grid-template-columns:1fr}
  .mosaique>*{height:120px}
  .tu-montes .mots{font-size:24px}
  .geant{padding-top:40px}
  .scene-geant{height:420px}
  .scene-geant .assise{width:260px;height:400px}
  .mot{top:110px;font-size:220px}
  .mot.reflet{top:290px}
  .cartes-app{grid-template-columns:1fr}
  .app{padding:28px 12px 34px}
  .programme{background:var(--creme)}
  .boite{padding:44px 16px 20px;border-radius:4px}
  .boite .tete{justify-content:center;text-align:center}
  .boite .fleches{display:none}
  .grille-prog{grid-template-columns:1fr;gap:12px}
  .grille-prog li{font-size:17px;min-height:92px}
  .rail .b{width:316px;height:410px}
  .offre .gauche{padding:56px 24px;text-align:center}
  .coches{justify-items:start;width:fit-content;margin-inline:auto;text-align:left}
  .offre .droite{padding:60px 20px 30px}
  .prix .gros{font-size:104px}
  .offre .infos{grid-auto-flow:row;justify-items:center}
  .avis .tete{flex-direction:column-reverse;align-items:center;gap:16px;text-align:center}
  .cadre{width:260px;height:340px}
  .nous{padding:60px 0 80px}
  .photo-nous{height:440px}
  .carte-nous{padding:70px 22px 40px;text-align:center}
  .carte-nous p{margin-inline:auto}
  .chiffres{justify-content:center;gap:30px}
  .chiffres strong{font-size:64px}
  .mot-bas{font-size:72px;bottom:auto;top:296px;right:auto;left:50%;transform:translateX(-50%);color:var(--rouge);z-index:5}
  .mot-haut{font-size:72px;right:auto;left:50%;transform:translateX(-50%);top:-40px}
  .qst summary{font-size:17px;padding:20px 14px 4px}
  .qst p{padding:0 60px 18px 14px}
  .qst summary i{width:26px;height:26px}
  .pied{flex-direction:column;text-align:center}
  .pied .droite{text-align:center}
}
```
