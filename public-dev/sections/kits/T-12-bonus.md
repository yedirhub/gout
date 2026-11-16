# Prompt · Section « Les bonus » du template T « Verdict 365 »
# Par Yedidia Ruben - Digital Strategist. À coller dans une IA qui code, avec ta page.

Construis une section « Les bonus » pour ma page, dans le même esprit que le code de référence plus bas. Garde la structure, le geste et les proportions ; reprends mes couleurs, mes polices et mes textes à moi.

- Son rôle : Faire basculer l'indécis : « si j'entre maintenant, j'ai plus ».
- Où la placer : Juste après l'offre, ou entre l'offre et son rappel.
- Sa structure : Un titre « qui entre maintenant reçoit plus », un compte à rebours si la date est réelle, puis un bonus par carte avec sa valeur.
- La règle qui fait la différence : Chaque bonus a une forme physique (ticket, livre, carte), pas une icône.
- Le geste de cette variante : 5 cartes bonus, texte et visuel
- Animations : attributs data-rv, data-lignes, data-compte, data-incline, data-aimant (moteur anim.js). Sans le moteur, retire-les.
- Aucun tiret long dans les textes. Contraste de 4,5 au moins. Lisible de 360 à 1920 px.

## Le code de référence (HTML)

```html
<section class="bonus centre lignes-fond" id="bonus">
  <div class="wrap"><h2 data-rv>Et en plus de tout ça, <em>tu repars avec :</em></h2></div>
  <div class="pile" style="text-align:left">
    <div class="carte-bonus" data-rv>
      <div class="txt"><span class="etiquette">Bonus 1</span><h3>14 niches de droit rentables</h3><p>Les 12 qui existent déjà, plus 2 inédites qu'aucune cohorte n'a reçues : fiscalité des entreprises et pacte d'associés.</p>
        <p style="margin:12px 0 4px"><b>Dans chaque niche tu reçois :</b></p>
        <ul class="puces"><li>Les cours sur le fond du droit, la stratégie et la fixation du prix</li><li>Des modèles d'actes et de courriers prêts</li><li>Les mots-clés de campagne et ceux à exclure</li><li>Titres et textes d'annonces, plus des modèles de visuels</li><li>Le texte de ta page de contact</li></ul></div>
      <div class="ph"><div class="emplacement" data-img="T-bonus-carnet" data-format="3:4" data-alt="Carnet à spirale « 14 niches rentables » posé en biais, fils rouges tendus dessus"></div></div>
    </div>
    <div class="carte-bonus" data-rv>
      <div class="txt"><span class="etiquette">Bonus 2</span><h3>6 mentorats thématiques <span>en direct avec</span> Rodrigue Agbodjan</h3><p>Un par mois. Le premier : monter ton cabinet en ligne de zéro.</p></div>
      <div class="ph"><div class="emplacement" data-img="T-bonus-mentorat" data-format="4:3" data-alt="Rodrigue derrière un ordinateur portable, en visio avec un groupe d'élèves"></div></div>
    </div>
    <div class="carte-bonus avec-douze" data-rv>
      <div class="txt"><span class="etiquette">Bonus 3</span><h3>12 grandes conférences avec des confrères invités</h3><p>Une par mois, avec des noms qui comptent dans le milieu juridique, sur un thème de droit.</p></div>
      <span class="douze" aria-hidden="true">12</span>
      <div class="ph"><div class="emplacement" data-img="T-bonus-conferences" data-format="1:1" data-alt="Portrait buste de Rodrigue en costume, cravate rayée et pochette, devant le chiffre 12"></div></div>
    </div>
    <div class="carte-bonus" data-rv>
      <div class="txt"><span class="etiquette">Bonus 4</span><h3>L'Oracle, un an d'abonnement</h3><p>16 assistants d'intelligence artificielle disponibles 24 heures sur 24 sur ton WhatsApp, qui connaissent ton cabinet.</p></div>
      <div class="reseau" aria-hidden="true">
        <svg class="trait" viewBox="0 0 300 150" preserveAspectRatio="none"><path d="M0 150 L300 0" stroke="#8A1414" stroke-width="2"/><path d="M60 20 Q160 -10 290 30" stroke="#333" fill="none"/></svg>
        <i class="puce-ia" style="left:10%;top:62%;background:#fff;color:#3B6CF5"><svg><use href="#etincelle"/></svg></i>
        <i class="puce-ia" style="left:28%;top:44%;background:#fff;color:#111"><svg><use href="#infini-p"/></svg></i>
        <i class="puce-ia" style="left:44%;top:28%;background:#E2704F;color:#fff"><svg><use href="#etincelle"/></svg></i>
        <i class="puce-ia" style="left:62%;top:14%;background:#fff;color:#A35BF0"><svg><use href="#etincelle"/></svg></i>
        <i class="puce-ia" style="left:22%;top:12%;background:#1FAF38;color:#fff"><svg><use href="#camera"/></svg></i>
      </div>
    </div>
    <div class="carte-bonus" data-rv>
      <div class="txt"><span class="etiquette">Bonus 5</span><h3>Deux places pour Les Rencontres du Cabinet</h3><p>Deux entrées pour notre événement en salle à Cotonou, au mois de mars.</p></div>
      <div class="billets" aria-hidden="true">
        <div class="billet b1"><b>R<i>C</i></b><span>Rencontres<br>du cabinet</span></div>
        <div class="billet b2"><b>R<i>C</i></b><span>Événement<br>en salle</span></div>
      </div>
    </div>
  </div>
</section>
```

## Le CSS du template d'origine (la section en dépend, ne garde que ce qu'elle utilise)

```css
:root{
  --noir:#000000; --carte:#0B0B0B; --carte2:#111111; --filet:#262626;
  --rouge:#C02020; --vif:#E73535; --sang:#5F0403; --lueur:#660E0D; --bordeaux:#2D0F0F;
  --vert:#00B043; --vert-f:#0F2E1F; --vert-filet:#134F33; --mousse:#141F0F;
  --rose:#FEC2C2; --blanc:#FFFFFF; --gris:#A29C9E; --gris2:#C9C4C6; --encre:#0E0E0E;
  --courbe:cubic-bezier(.16,1,.3,1);
  --titre:'Inter Tight',system-ui,sans-serif; --mono:'JetBrains Mono',ui-monospace,monospace;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:var(--titre);font-size:15px;line-height:1.55;color:var(--gris2);background:var(--noir);-webkit-font-smoothing:antialiased;overflow-x:clip}
svg{display:block}
a{color:inherit;text-decoration:none}
h1,h2,h3{font-family:var(--titre);color:var(--blanc);line-height:1.08;letter-spacing:-.035em;font-weight:600}
h2{font-size:clamp(28px,3.4vw,50px)}
h2 em,h1 em{font-style:normal;color:var(--vif)}
b,strong{color:var(--blanc);font-weight:600}

.wrap{width:min(1200px,100% - 40px);margin-inline:auto;position:relative;z-index:1}
.etroit{width:min(780px,100% - 40px);margin-inline:auto;position:relative;z-index:1}
section{position:relative}
.centre{text-align:center}
.kicker{display:block;font:500 10px/1 var(--mono);letter-spacing:.32em;text-transform:uppercase;color:var(--vif);margin-bottom:14px}
.lignes-fond{background-image:repeating-linear-gradient(90deg,transparent 0 calc(10% - 1px),rgba(255,255,255,.045) calc(10% - 1px) 10%)}

/* Bouton vert, capitales serrées, flèche */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:52px;padding:12px 34px;border-radius:40px;background:linear-gradient(180deg,#12C552,var(--vert) 55%,#009A3A);color:#03130A;
  font:700 15px/1.15 var(--titre);letter-spacing:-.02em;text-transform:uppercase;box-shadow:0 0 0 1px rgba(255,255,255,.12) inset,0 12px 34px rgba(0,176,67,.28);transition:box-shadow .4s var(--courbe),filter .4s}
.btn:hover{filter:brightness(1.08);box-shadow:0 0 0 1px rgba(255,255,255,.2) inset,0 16px 44px rgba(0,176,67,.42)}
.btn svg{width:14px;height:14px;flex:none}
.btn.rouge{background:linear-gradient(180deg,#F04545,var(--rouge));color:#fff;box-shadow:0 12px 30px rgba(192,32,32,.35);font-size:13px}

/* Logo : le A rouge et la flèche */
.logo{display:inline-flex;align-items:center;gap:8px;color:#fff}
.logo svg{width:40px;height:34px;color:var(--vif)}
.logo span{font:800 19px/.95 var(--titre);letter-spacing:-.02em;text-transform:uppercase}
.logo small{display:block;font:500 7px/1 var(--mono);letter-spacing:.4em;color:var(--vif);margin-top:2px}

/* Panneau blanc arrondi, grille fine et coin rose */
.panneau{position:relative;background:linear-gradient(225deg,var(--rose) 0%,#FFE7E7 16%,#FFFFFF 38%);border-radius:28px;color:#2A2A2A;overflow:hidden;width:min(1920px,100%);margin-inline:auto}
.panneau::before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(0,0,0,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.035) 1px,transparent 1px);background-size:56px 56px;pointer-events:none}
.panneau h2{color:var(--encre)}
.panneau h2 em{color:var(--rouge)}
.panneau b{color:var(--encre)}

/* Séparateur : filet rouge et rond */
.coupure{height:6px;background:linear-gradient(90deg,var(--rouge),#3A0606 35%,#3A0606 65%,var(--rouge));position:relative;margin:80px 0}
.coupure i{position:absolute;left:50%;top:50%;translate:-50% -50%;width:22px;height:22px;border-radius:50%;background:#000;border:1px solid var(--rouge);display:grid;place-items:center;color:var(--vif)}
.coupure i svg{width:10px;height:10px}

/* Emplacements d'image */
.emplacement{position:relative;overflow:hidden;width:100%;background:radial-gradient(120% 90% at 70% 20%,#2A0B0B,#0D0D0D 70%);border:1px solid #2A1414}
.emplacement::after{content:attr(data-format);position:absolute;left:50%;top:50%;translate:-50% -50%;font:500 10px/1 var(--mono);letter-spacing:.3em;color:#8C5A5A;padding:6px 10px;border:1px solid #3A1A1A;border-radius:20px}
.emplacement[data-format="3:4"]{aspect-ratio:3/4}
.emplacement[data-format="4:3"]{aspect-ratio:4/3}
.emplacement[data-format="16:9"]{aspect-ratio:16/9}
.emplacement[data-format="1:1"]{aspect-ratio:1/1}
.clair .emplacement{background:linear-gradient(160deg,#F3EFEF,#DCD6D6);border-color:#E2DADA}
.clair .emplacement::after{color:#7A6A6A;border-color:#CFC4C4}

/* 01 · Hero */
.hero{padding:70px 0 90px;overflow:hidden;background:radial-gradient(50% 80% at 72% 30%,#1B0606,#000 70%)}
.hero .wrap{display:grid;grid-template-columns:1.05fr .95fr;gap:30px;align-items:center}
.hero .cohorte{font:500 10px/1 var(--mono);letter-spacing:.06em;color:#E5E5E5;text-transform:uppercase;margin:12px 0 30px}
.hero h1{font-size:clamp(34px,4.1vw,64px);color:#E9E9E9}
.hero p{margin:24px 0 34px;max-width:560px;color:#CFCFCF;font-size:18px}
.hero .appel{display:flex;flex-wrap:wrap;align-items:center;gap:16px}
.avatars{display:flex;align-items:center;gap:10px;font-size:11px;line-height:1.3;color:#BDBDBD}
.avatars i{width:22px;height:22px;border-radius:50%;border:2px solid #000;background:linear-gradient(135deg,#8E5B3C,#3B2418);margin-right:-16px}
.avatars i:nth-child(2){background:linear-gradient(135deg,#C79A6E,#6E4A2D)}
.avatars i:nth-child(3){background:linear-gradient(135deg,#5A3524,#24130B);margin-right:0}
.paie{margin:18px 0 0 70px;font-size:12px;color:#9A9A9A}
.paie b{font-weight:700}
.hero .photo{position:relative}
.hero .photo .emplacement{border-radius:4px;-webkit-mask-image:linear-gradient(180deg,#000 70%,transparent);mask-image:linear-gradient(180deg,#000 70%,transparent)}
.hero .photo{overflow:hidden}
.fils{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:2;opacity:.75}
.fils line{stroke:var(--rouge);stroke-width:.35;vector-effect:non-scaling-stroke}

/* 02 · Accès : le panneau blanc, écran et cartes */
.acces{padding:0 0 0;margin-top:-30px;z-index:2}
.acces .panneau{padding:36px 0 26px}
.acces .grille{display:grid;grid-template-columns:.9fr 1.1fr;gap:20px;align-items:center;width:min(1200px,100% - 40px);margin-inline:auto;position:relative}
.acces .emplacement{border-radius:10px}
.atouts{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.atout{position:relative;background:rgba(255,255,255,.88);border:1px solid #ECE4E4;border-radius:8px;padding:34px 24px 24px;font-size:15px;line-height:1.45;color:#3A3A3A;box-shadow:0 6px 20px rgba(80,0,0,.05)}
.atout::before{content:"";position:absolute;left:0;top:-1px;width:44%;height:4px;border-radius:0 0 4px 0;background:var(--rouge)}
.atout .ic{width:30px;height:30px;border:1px solid #E5DDDD;border-radius:5px;display:grid;place-items:center;margin-bottom:20px;color:#222}
.atout .ic svg{width:15px;height:15px}
.atout h3{font-size:21px;letter-spacing:-.02em;color:var(--encre);margin-bottom:10px;font-weight:600}
.garantie365{grid-column:1/-1;position:relative;overflow:hidden;border-radius:6px;padding:34px 24px 24px;color:#fff;background:linear-gradient(110deg,#E33030,#C21D1D 55%,#7E0A0A);font-size:15px;line-height:1.45}
.garantie365 .geant{position:absolute;right:24px;top:-62px;font:700 210px/1 var(--titre);letter-spacing:-.06em;background:linear-gradient(180deg,rgba(255,255,255,.95),rgba(255,255,255,0) 82%);-webkit-background-clip:text;background-clip:text;color:transparent;pointer-events:none}
.garantie365 .ic{width:30px;height:30px;border-radius:5px;background:#fff;color:var(--rouge);display:grid;place-items:center;margin-bottom:16px;position:relative}
.garantie365 .ic svg{width:16px;height:16px}
.garantie365 h3{font-size:19px;color:#fff;text-transform:uppercase;letter-spacing:0;margin-bottom:4px;position:relative}
.garantie365 p{position:relative;max-width:480px}

/* 03 · Douleur */
.douleur{padding:90px 0 0;background:radial-gradient(70% 50% at 50% 0,#4A0808,#000 70%)}
.douleur h2{max-width:1000px;margin-inline:auto;background:linear-gradient(180deg,#fff,#9E9E9E);-webkit-background-clip:text;background-clip:text;color:transparent}
.chiffre{display:grid;grid-template-columns:auto 1fr;gap:40px;align-items:center;max-width:960px;margin:22px auto 30px;padding:20px 0;border-block:1px solid #2C2C2C;text-align:left}
.chiffre .n{font:700 96px/1 var(--titre);letter-spacing:-.05em;background:linear-gradient(180deg,#FF6D6D,var(--rouge));-webkit-background-clip:text;background-clip:text;color:transparent}
.chiffre .n small{font-size:24px;-webkit-text-fill-color:#E5E5E5;letter-spacing:-.02em;margin-left:6px}
.chiffre p{font-size:16px;line-height:1.5;color:var(--gris)}
.douleur h3{font-size:30px;margin-bottom:16px}
.douleur .sous{max-width:780px;margin:0 auto 32px;font-size:17px;color:var(--gris)}

/* 04 · Pour qui */
.pourqui .wrap{display:grid;grid-template-columns:1fr 1fr;gap:64px 96px;align-items:start;width:min(1100px,100% - 40px)}
.pourqui h2{font-size:clamp(41.6px,2.8vw,54.4px);font-weight:500;color:#E9E9E9}
.liste-cartes{list-style:none;display:grid;gap:16px}
.liste-cartes li{display:flex;gap:22.4px;align-items:center;padding:22.4px 28.8px;border-radius:6.4px;font-size:20.8px;line-height:1.4;color:#E7ECE9;background:linear-gradient(180deg,#123A27,var(--vert-f));border:1px solid var(--vert-filet)}
.liste-cartes li svg{width:19.2px;height:19.2px;flex:none;color:#C9DCD2}
.liste-cartes.non li{background:linear-gradient(180deg,#3A1111,var(--bordeaux));border-color:#4A1818;color:#F0E4E4}
.liste-cartes.non li span{font:700 19.2px/1 var(--mono);color:#fff}
.pourqui .bloc-non{margin-top:96px}

/* 05 · Méthode : panneau blanc à 4 cartes */
.methode{margin-top:128px}
.methode .panneau{padding:89.6px 0 112px}
.methode .etroit{text-align:center}
.methode .chapeau{font-size:21.6px;color:#222;margin:25.6px auto 41.6px;max-width:896px}
.piliers{display:grid;grid-template-columns:1fr 1fr;gap:12.8px;text-align:left}
.pilier{background:linear-gradient(180deg,#FFF1F1,#FFFFFF 40%);border:1px solid #F0E5E5;border-radius:12.8px;padding:28.8px 25.6px 0;font-size:19.2px;line-height:1.45;color:#555;overflow:hidden}
.pilier h3{font-size:22.4px;letter-spacing:-.01em;color:var(--rouge);text-transform:uppercase;margin-bottom:12.8px;font-weight:600}
.pilier .emplacement{aspect-ratio:16/5 !important;margin-top:19.2px;border-radius:9.6px 9.6px 0 0;filter:grayscale(1)}
.methode .appel{text-align:center;margin-top:-26px;position:relative;z-index:3}

/* 06 · Accès à vie */
.avie{padding:112px 0 144px;background:radial-gradient(60% 40% at 50% 0,#4A0808,transparent 70%)}
.carte-vie{width:min(816px,100% - 40px);margin-inline:auto;text-align:center;padding:70.4px 54.4px 70.4px;border-radius:35.2px;background:linear-gradient(180deg,#2A0707,#120404 60%,#0A0303);border:1px solid #2B1010;font-size:19.2px;line-height:1.6;color:var(--gris)}
.carte-vie svg.infini{width:112px;height:57.6px;margin:9.6px auto 22.4px;color:var(--vif)}
.carte-vie h2{font-size:clamp(41.6px,2.8vw,48px);margin-bottom:25.6px}
.carte-vie .lead{font-size:21.6px;color:#C9C9C9;margin-bottom:22.4px}
.carte-vie p+p{margin-top:19.2px}
.carte-vie .btn{margin-top:48px;font-size:20.8px}

/* 07 · Parcours : 9 étapes + bibliothèque */
.parcours{padding:16px 0 96px}
.parcours h2 em{color:var(--rouge)}
.parcours h2,.ateliers h2{max-width:860px;margin-inline:auto}
.parcours .sous{max-width:832px;margin:35.2px auto 57.6px;font-size:20.8px;color:var(--gris)}
.etapes{display:grid;grid-template-columns:repeat(3,1fr);gap:19.2px;width:min(960px,100% - 40px);margin-inline:auto}
.etape{min-height:233.6px;padding:25.6px 28.8px;border-radius:4.8px;background:var(--carte);border:1px solid #1C1C1C;border-top:2px solid #3A0A0A;font-size:17.6px;line-height:1.5;color:var(--gris)}
.etape .num{font:700 35.2px/1 var(--mono);color:#B42626;display:block;margin-bottom:22.4px}
.etape h3{font-size:21.6px;letter-spacing:-.02em;margin-bottom:12.8px;font-weight:600}
.etape.r{background:linear-gradient(150deg,#E53434,#C21C1C 55%,#6B0505);border-color:#E33A3A;color:#FFE3E3}
.etape.r .num{color:#fff}

/* 08 · 60 jours d'IA */
.ia{padding:64px 0 112px;overflow:hidden}
.soixante{position:relative;height:400px;max-width:672px;margin:0 auto}
.soixante span{position:absolute;inset:0;font:700 416px/1 var(--titre);letter-spacing:-.07em;text-align:center;background:linear-gradient(180deg,#7A1111,rgba(80,6,6,.6) 60%,transparent 92%);-webkit-background-clip:text;background-clip:text;color:transparent}
.arc{position:absolute;left:-40px;right:-40px;top:224px;height:176px}
.arc svg{width:100%;height:100%;overflow:visible}
.puce-ia{position:absolute;width:41.6px;height:41.6px;border-radius:50%;display:grid;place-items:center;box-shadow:0 0 0 4.8px #000,0 0 28.8px rgba(255,255,255,.18)}
.puce-ia svg{width:22.4px;height:22.4px}
.nouveau{position:absolute;left:50%;bottom:-6px;translate:-50% 0;padding:8px 16px;border-radius:22.4px;background:linear-gradient(90deg,#FFB3A0,#FF8E8E);color:#3A0A0A;font:700 12.8px/1 var(--mono);letter-spacing:.2em}
.ia h2{max-width:832px;margin:54.4px auto 22.4px}
.ia .sous{max-width:752px;margin:0 auto 54.4px;font-size:20.8px;color:var(--gris)}
.frise{display:grid;grid-template-columns:repeat(4,1fr);gap:32px;max-width:992px;margin:0 auto 64px;position:relative}
.frise::before{content:"";position:absolute;left:-30px;right:-30px;top:16px;height:1px;background:linear-gradient(90deg,transparent,#5A1010 10%,#5A1010 90%,transparent)}
.frise li{list-style:none;font-size:18.4px;color:#E5E5E5;line-height:1.35;position:relative}
.frise li span{display:grid;place-items:center;width:32px;height:32px;margin:0 auto 19.2px;border-radius:50%;background:#1A0505;border:1px solid #5A1010;font:500 11.2px/1 var(--mono);color:#E5E5E5}

/* 09 · Ateliers en direct */
.ateliers{padding:48px 0 128px}
.ateliers .sous{max-width:768px;margin:25.6px auto 48px;font-size:20.8px;color:var(--gris)}
.ateliers .cartes{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;width:min(1024px,100% - 40px);margin:0 auto 41.6px;text-align:left}
.atelier{padding:25.6px 22.4px 28.8px;border-radius:4.8px;background:var(--carte);border:1px solid #1E1E1E;font-size:16.8px;line-height:1.45;color:var(--gris)}
.atelier small{display:block;text-transform:uppercase;font:500 11.2px/1 var(--mono);letter-spacing:.3em;color:var(--vif);margin-bottom:19.2px}
.atelier h3{font-size:17.6px;text-transform:uppercase;letter-spacing:0;margin-bottom:9.6px;font-weight:700}

/* 10 · Accompagnement */
.soutien{padding:0 0 112px}
.soutien .grand{display:grid;grid-template-columns:1fr 1fr;width:min(960px,100% - 40px);margin-inline:auto;border-radius:9.6px;overflow:hidden;background:linear-gradient(120deg,#1E0808,#0A0202);border:1px solid #2A1010}
.soutien .txt{padding:35.2px 38.4px}
.soutien h2{font-size:35.2px;margin-bottom:19.2px}
.puces{list-style:none}
.puces li{position:relative;padding:14.4px 0 14.4px 28.8px;border-bottom:1px solid #3A3A3A;font-size:16.8px;line-height:1.45;color:var(--gris)}
.puces li::before{content:"";position:absolute;left:0;top:24px;width:6.4px;height:6.4px;border-radius:50%;background:var(--vif)}
.soutien .ph{position:relative}
.soutien .ph .emplacement{height:100%;aspect-ratio:auto !important;min-height:384px;border:0}
.visio{position:absolute;left:19.2px;top:36%;z-index:2;padding:16px 19.2px;border-radius:50%;background:#2D6BFF;color:#fff;font:700 14.4px/1 var(--titre);letter-spacing:-.01em;box-shadow:0 16px 38.4px rgba(45,107,255,.4)}
.duel{display:grid;grid-template-columns:1fr 1fr;gap:32px;width:min(960px,100% - 40px);margin:32px auto 0}
.duel>div{padding:28.8px 32px 35.2px;border-radius:8px;border:1px solid #4A1515;background:linear-gradient(160deg,#2C1010,#1A0707)}
.duel>div.oui{border-color:#24401E;background:linear-gradient(160deg,#18260F,#0E1609)}
.duel h3{font-size:24px;padding-bottom:19.2px;border-bottom:1px solid rgba(255,255,255,.12);margin-bottom:19.2px}
.duel ul{list-style:none}
.duel li{position:relative;padding:6.4px 0 6.4px 19.2px;font-size:16px;color:#D8D8D8}
.duel li::before{content:"";position:absolute;left:0;top:16px;width:6.4px;height:6.4px;border-radius:50%;background:var(--rouge)}
.duel .oui li::before{background:#4CE07B}
.soutien .fin{max-width:672px;margin:44.8px auto 35.2px;font-size:20.8px;color:var(--gris)}

/* 11 · Résultats */
.resultats .panneau{padding:89.6px 0 89.6px}
.resultats .etroit{text-align:center;width:min(832px,100% - 40px)}
.resultats p{font-size:19.2px;margin:12.8px 0 28.8px;color:#222}
.resultats .emplacement{border-radius:12.8px}

/* 12 · Bonus */
.bonus{padding:96px 0 96px;background:radial-gradient(60% 480px at 50% 0,#4A0808,transparent 80%)}
.bonus>.wrap>h2{font-size:clamp(38.4px,2.6vw,44.8px);margin-bottom:48px;}
.bonus>.wrap>h2 em{color:var(--rouge)}
.pile{display:grid;gap:19.2px;width:min(960px,100% - 40px);margin-inline:auto}
.carte-bonus{display:grid;grid-template-columns:1fr 1fr;align-items:center;min-height:192px;border-radius:6.4px;overflow:hidden;background:var(--carte);border:1px solid #2A1212;position:relative}
.carte-bonus .txt{padding:35.2px 22.4px 35.2px 35.2px;font-size:16.8px;color:var(--gris);position:relative;z-index:2}
.etiquette{display:inline-block;text-transform:uppercase;padding:6.4px 9.6px;border:1px solid #5A1818;border-radius:4.8px;background:#1C0808;font:500 11.2px/1 var(--mono);letter-spacing:.3em;color:#E5B5B5;margin-bottom:19.2px}
.carte-bonus h3{font-size:23.2px;letter-spacing:-.02em;margin-bottom:12.8px;font-weight:600}
.carte-bonus h3 span{color:var(--gris2);font-weight:400}
.carte-bonus .ph{align-self:stretch;position:relative}
.carte-bonus .ph .emplacement{height:100%;aspect-ratio:auto !important;min-height:240px;border:0}
.carte-bonus .puces li{font-size:15.2px;padding:9.6px 0 9.6px 19.2px}
.carte-bonus .puces li::before{top:17.6px}
.douze{position:absolute;right:6%;top:-10px;font:700 272px/1 var(--titre);letter-spacing:-.06em;color:#3A0606;z-index:1;pointer-events:none}
.carte-bonus.avec-douze .ph{z-index:2}
.carte-bonus.avec-douze .ph .emplacement{background:transparent}
.reseau{position:relative;min-height:240px;align-self:stretch;overflow:hidden}
.reseau svg.trait{position:absolute;inset:0;width:100%;height:100%}
.reseau .puce-ia{width:44.8px;height:44.8px}
.billets{position:relative;min-height:240px;align-self:stretch;overflow:hidden}
.billet{position:absolute;width:336px;height:153.6px;border-radius:12.8px;background:linear-gradient(135deg,#2A2A2A,#141414);border:1px solid #3A3A3A;display:flex;align-items:center;padding:0 25.6px;gap:16px;box-shadow:0 28.8px 48px rgba(0,0,0,.6)}
.billet b{font:800 54.4px/1 var(--titre);letter-spacing:-.04em;color:#E5E5E5}
.billet b i{font-style:normal;color:var(--vif)}
.billet span{font:600 12.8px/1.25 var(--titre);text-transform:uppercase;color:#CFCFCF}
.billet::before{content:"";position:absolute;inset:9.6px;border:1px solid rgba(192,32,32,.5);border-radius:8px}
.billet.b1{right:-30px;top:19.2px;rotate:14deg}
.billet.b2{right:16px;top:96px;rotate:18deg}

/* 13 · Bonus d'action rapide */
.rapide{padding:96px 0 0}
.rapide .etroit{width:min(832px,100% - 40px)}
.rapide h2{font-size:clamp(41.6px,2.8vw,48px)}
.rapide .sous{font-size:19.2px;color:var(--gris);margin:22.4px 0 28.8px;max-width:576px}
.rangs{list-style:none;border-top:1px solid #1E1E1E}
.rangs li{display:grid;grid-template-columns:192px 1fr;gap:28.8px;padding:22.4px 0;border-bottom:1px solid #1E1E1E;font-size:15.2px;color:var(--gris)}
.rangs li>span{font:600 16px/1.3 var(--titre);color:#fff}
.rangs li>span small{font:500 9.6px/1 var(--mono);letter-spacing:.25em;color:var(--vif);margin-right:9.6px;text-transform:uppercase}
.rapide .note{font-size:12.8px;color:#7A7A7A;margin:19.2px 0 35.2px}

/* 14 · Valeur : le tableau */
.valeur{padding:0 0 80px;overflow:hidden}
.valeur::before,.valeur::after{content:"";position:absolute;top:0;bottom:0;width:288px;background:linear-gradient(90deg,#6A0E0E,transparent);opacity:.7;pointer-events:none}
.valeur::before{left:0}
.valeur::after{right:0;transform:scaleX(-1)}
.valeur h2,.inclus h2{padding-inline:20px}
.valeur h2{font-size:clamp(41.6px,2.8vw,48px);margin-bottom:38.4px}
.tableau{width:min(832px,100% - 40px);margin-inline:auto;border-radius:16px;overflow:hidden;background:var(--carte);border:1px solid #1E1E1E;text-align:left}
.tableau .ligne-t{display:flex;justify-content:space-between;gap:25.6px;padding:14.4px 22.4px;border-bottom:1px solid #161616;font-size:14.4px;color:#BDBDBD}
.tableau .ligne-t:nth-child(even){background:#0E0E0E}
.tableau .ligne-t b{font:500 14.4px/1.4 var(--mono);color:var(--vif);white-space:nowrap}
.tableau .tete{font:500 11.2px/1 var(--mono);letter-spacing:.25em;color:#8A8A8A;padding:25.6px 22.4px;background:#141414 !important}
.tableau .total{padding:25.6px 22.4px;background:linear-gradient(90deg,#3A0E12,#22090B) !important;align-items:center;border:0}
.tableau .total span{font:700 16px/1 var(--titre);color:#fff;text-transform:uppercase}
.tableau .total b{font:700 30.4px/1 var(--titre);color:#fff;letter-spacing:-.02em}
.notes{display:grid;grid-template-columns:1fr 1fr;gap:9.6px;width:min(832px,100% - 40px);margin:19.2px auto 0;text-align:left}
.notes p{padding:19.2px 19.2px 32px;border:1px solid #232323;background:#0C0C0C;font-size:13.6px;line-height:1.5;color:#A8A8A8}

/* 15 · Ce qui entre dans ton accès */
.inclus{padding:48px 0 0}
.inclus h2{font-size:clamp(35.2px,2.4vw,38.4px);margin:19.2px 0 41.6px}
.inclus .puces{width:min(512px,100% - 40px);margin-inline:auto;padding:22.4px 25.6px;border-radius:9.6px;background:#0D0D0D;border:1px solid #1E1E1E;text-align:left}
.inclus .puces li{font-size:13.6px;border-color:#232323;padding:11.2px 0 11.2px 28.8px}
.inclus .puces li::before{top:17.6px}

/* 16 · Offre */
.offre{padding:25.6px 0 112px}
.prix{width:min(592px,100% - 40px);margin-inline:auto;padding:48px 38.4px 41.6px;border-radius:22.4px;background:linear-gradient(180deg,#300808,#170404 70%);border:1px solid #6A1414;box-shadow:0 32px 96px rgba(192,32,32,.25);text-align:center}
.prix .vt{font:500 10.4px/1 var(--mono);letter-spacing:.25em;color:#C4A6A6;text-transform:uppercase}
.prix s{display:block;margin:22.4px 0 6.4px;font-size:14.4px;color:#E05050}
.prix .montant{display:flex;align-items:baseline;justify-content:center;gap:9.6px;color:#fff}
.prix .montant small{font-size:25.6px;letter-spacing:-.04em}
.prix .montant strong{font:600 clamp(54.4px,4vw,70.4px)/1 var(--titre);letter-spacing:-.04em}
.prix .comptant{font-size:14.4px;color:#BDBDBD;margin:12.8px 0 32px}
.prix .btn{font-size:20.8px;width:100%}
.prix .moyens{display:flex;flex-wrap:wrap;justify-content:center;gap:12.8px;margin-top:25.6px}
.prix .moyens i{width:41.6px;height:19.2px;border-radius:2px;background:#2A2020}
.petites{display:grid;grid-template-columns:repeat(3,1fr);gap:12.8px;width:min(608px,100% - 40px);margin:32px auto 0;text-align:left}
.petites p{padding:19.2px 16px;border-radius:8px;border:1px solid #232323;background:#0C0C0C;font-size:12.8px;line-height:1.45;color:#9A9A9A}
.petites p small{display:block;font:500 9.6px/1 var(--mono);letter-spacing:.2em;color:#E5B5B5;margin-bottom:12.8px}

/* 17 · Garantie */
.garanties .panneau{padding:32px 0 80px}
.garanties .etroit{text-align:center;width:min(832px,100% - 40px)}
.mot-geant{font:700 clamp(96px,10vw,176px)/.85 var(--titre);letter-spacing:-.04em;background:linear-gradient(180deg,#F26B6B,rgba(255,200,200,.15));-webkit-background-clip:text;background-clip:text;color:transparent;margin-bottom:-18px}
.garanties h2{position:relative}
.garanties .chapeau{font-size:18.4px;color:#222;margin:22.4px auto 38.4px;max-width:672px}
.trois{display:grid;grid-template-columns:repeat(3,1fr);gap:12.8px;text-align:left}
.trois div{min-height:288px;padding:25.6px 22.4px;border:1px solid #EBE3E3;border-left:2px solid var(--rouge);border-radius:6.4px;background:#fff;font-size:13.6px;line-height:1.55;color:#555}
.trois small{display:block;font:500 9.6px/1 var(--mono);letter-spacing:.25em;color:#8A8A8A;margin-bottom:16px;text-transform:uppercase}
.trois h3{font-size:16.8px;color:var(--encre);letter-spacing:-.01em;margin-bottom:12.8px;font-weight:600}

/* 18 · Qui */
.qui{padding:144px 0 112px;background:radial-gradient(60% 416px at 50% 0,#5A0B0B,transparent 85%)}
.qui .wrap{display:grid;grid-template-columns:.8fr 1.1fr;gap:54.4px;align-items:start;width:min(1040px,100% - 40px)}
.qui .emplacement{border-radius:19.2px;filter:grayscale(1)}
.qui h2{font-size:clamp(38.4px,2.6vw,41.6px);margin-bottom:22.4px}
.qui p{font-size:16.8px;line-height:1.5;color:var(--gris)}
.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:22.4px;margin:25.6px 0;padding-top:19.2px;border-top:1px solid #3A3A3A}
.stats b{display:block;font:600 24px/1 var(--titre);color:var(--vif);letter-spacing:-.03em;margin-bottom:9.6px}
.stats span{font-size:10.4px;line-height:1.4;color:#8A8A8A;display:block}
.qui .ensemble{font:600 20.8px/1.3 var(--titre);color:#fff;margin:16px 0 22.4px}
.qui .btn{font-size:19.2px}

/* 19 · Objections et 20 · FAQ : accordéons */
.objections{padding:32px 0 128px}
.faq{padding:64px 0 96px;background:var(--carte)}
.accord{width:min(832px,100% - 40px);margin-inline:auto}
.accord h2{font-size:clamp(38.4px,2.6vw,41.6px);margin-bottom:32px}
.accord details{border-top:1px solid #1E1E1E}
.accord details:last-of-type{border-bottom:1px solid #1E1E1E}
.accord summary{list-style:none;display:flex;justify-content:space-between;align-items:center;gap:25.6px;min-height:56px;padding:12px 2px;font-size:15.2px;font-weight:500;color:#EDEDED;cursor:pointer}
.accord summary::-webkit-details-marker{display:none}
.accord summary::after{content:"+";font:400 22.4px/1 var(--titre);color:var(--vif);transition:rotate .4s var(--courbe)}
.accord details[open] summary::after{rotate:45deg}
.accord details p{padding:0 48px 22.4px 2px;font-size:15.2px;color:var(--gris)}
.contact{text-align:center;margin-top:54.4px}
.contact h3{font-size:28.8px;margin-bottom:12.8px}
.contact p{font-size:13.6px;color:#9A9A9A;margin-bottom:19.2px}

/* 21 · Pied */
#pied{background:#0B0B0D;border-top:1px solid #1A1A1A;text-align:center;padding:41.6px 0 96px;font-size:11.2px;color:#8F8F8F}
#pied .logo svg{width:35.2px;height:28.8px}
#pied .logo span{font-size:16px}
#pied .liens{display:flex;justify-content:center;gap:19.2px;margin:16px 0 25.6px;font-size:11.2px;color:#CFCFCF}
#pied .liens a{min-height:38.4px;display:inline-flex;align-items:center}
#pied .bas{display:flex;flex-direction:column;align-items:center;gap:9.6px}
#pied .droite{display:flex;align-items:center;gap:12.8px}

/* Bureau large : on redonne la taille de lecture au texte serré du Behance */
/* Lisibilité : les plus petits textes du Behance remontent à 12 px minimum ailleurs qu'au bureau */
@media (max-width:1199px){
  .puces li,.duel li,.carte-bonus .txt,.carte-bonus .puces li,.rangs li,.tableau .ligne-t,.tableau .ligne-t b,.notes p,.inclus .puces li,.petites p,.trois div,.qui p,.accord summary,.accord details p,.contact p,#pied,#pied .liens{font-size:12px}
  .stats span{font-size:10px}
  .prix .comptant,.prix s{font-size:12px}
}
@media (max-width:820px){
  .hero{padding:44px 0 70px}
  .hero .wrap{grid-template-columns:1fr}
  .hero .photo{max-width:380px;margin-inline:auto;order:-1;width:100%}
  .paie{margin-left:0}
  .acces .grille{grid-template-columns:1fr}
  .pourqui .wrap{grid-template-columns:1fr;gap:20px}
  .pourqui .bloc-non{margin-top:30px}
  .piliers{grid-template-columns:1fr}
  .etapes{grid-template-columns:1fr 1fr}
  .ateliers .cartes{grid-template-columns:1fr 1fr}
  .soutien .grand{grid-template-columns:1fr}
  .soutien .ph .emplacement{aspect-ratio:4/3 !important;min-height:0}
  .duel{grid-template-columns:1fr}
  .carte-bonus{grid-template-columns:1fr}
  .carte-bonus .ph .emplacement{aspect-ratio:16/9 !important;min-height:0}
  .reseau,.billets{min-height:170px}
  .notes{grid-template-columns:1fr}
  .petites{grid-template-columns:1fr}
  .trois{grid-template-columns:1fr}
  .trois div{min-height:0}
  .qui .wrap{grid-template-columns:1fr}
  .qui .ph{max-width:320px}
  .frise{grid-template-columns:1fr 1fr;row-gap:26px}
  .frise::before{display:none}
  .valeur::before,.valeur::after{width:60px}
  .rangs li{grid-template-columns:1fr;gap:6px}
}
@media (max-width:480px){
  .atouts{grid-template-columns:1fr}
  .garantie365 .geant{font-size:110px;top:-30px}
  .etapes{grid-template-columns:1fr}
  .ateliers .cartes{grid-template-columns:1fr}
  .soixante{height:190px}
  .soixante span{font-size:190px}
  .arc{top:100px;left:-10px;right:-10px}
  .chiffre{grid-template-columns:1fr;gap:10px;text-align:center}
  .chiffre .n{font-size:60px}
  .douze{opacity:.5}
  .btn{padding:12px 22px;font-size:14px}
  .billet.b1{right:-60px}
}
```
