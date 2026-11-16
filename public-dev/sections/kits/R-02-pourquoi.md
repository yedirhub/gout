# Prompt · Section « La valeur » du template R « Violet atelier »
# Par Yedidia Ruben - Digital Strategist. À coller dans une IA qui code, avec ta page.

Construis une section « La valeur » pour ma page, dans le même esprit que le code de référence plus bas. Garde la structure, le geste et les proportions ; reprends mes couleurs, mes polices et mes textes à moi.

- Son rôle : Faire sentir le prix avant de le montrer.
- Où la placer : Juste avant l'offre.
- Sa structure : Un récit du chemin parcouru, une pile de prix barrés, puis le vrai prix.
- La règle qui fait la différence : Les prix d'ancrage se barrent un par un. Le vrai prix arrive en dernier, plus grand.
- Le geste de cette variante : photo carrée contre aplat violet à filets
- Animations : attributs data-rv, data-lignes, data-compte, data-incline, data-aimant (moteur anim.js). Sans le moteur, retire-les.
- Aucun tiret long dans les textes. Contraste de 4,5 au moins. Lisible de 360 à 1920 px.

## Le code de référence (HTML)

```html
<section class="pourquoi" id="pourquoi">
  <div class="ph"><div class="emplacement" data-img="R-nuancier" data-format="1:1" data-alt="Thierry Kalala tenant un nuancier de couleurs ouvert devant son menton, lampe de bureau derrière"></div></div>
  <div class="txt">
    <h2 data-lignes>Pourquoi<br>participer ?</h2>
    <ul>
      <li data-rv>Pour apprendre, en pratique, à mener un projet à 6 millions et passer un cap comme designer.</li>
      <li data-rv>Pour améliorer votre technique, la qualité de votre portfolio, votre assurance, et donc votre valeur et votre reconnaissance.</li>
      <li data-rv>Pour apprendre à facturer plus aux mêmes clients.</li>
      <li data-rv>Pour ne plus jamais parler de panne d'inspiration.</li>
    </ul>
  </div>
</section>
```

## Le CSS du template d'origine (la section en dépend, ne garde que ce qu'elle utilise)

```css
:root{
  --violet:#7360D3; --violet-p:#7A67D6; --violet-f:#5F49B9; --lilas:#AFB3F2; --brume:#CED1F7; --nacre:#E4E6FB; --ciel:#EFF2FA;
  --rose:#FF3175; --rose-btn:#E01A60; --rose-p:#FF9CC6; --menthe:#A6F5DD;
  --nuit:#0F0F11; --nuit2:#1C1B20; --ardoise:#5D5E66; --gris:#A3A3AD; --encre:#121214; --texte:#3D3D45; --blanc:#FFFFFF;
  --courbe:cubic-bezier(.16,1,.3,1);
  --f:'Red Hat Display',system-ui,sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:var(--f);font-size:15px;line-height:1.6;color:var(--texte);background:var(--blanc);-webkit-font-smoothing:antialiased;overflow-x:clip}
svg{display:block}
a{color:inherit;text-decoration:none}
h1,h2,h3{font-family:var(--f);color:var(--encre);line-height:1.12;letter-spacing:-.02em;font-weight:800}
h2{font-size:clamp(30px,3.2vw,46px)}
b,strong{font-weight:700;color:inherit}
.wrap{width:min(1040px,100% - 40px);margin-inline:auto;position:relative;z-index:1}
section{position:relative}
.sombre{background:var(--nuit);color:#C9C9D2}
.sombre h2,.sombre h3{color:#fff}

/* Emplacement d'image : vide, il fait propre (dégradé de la palette, filet, format au centre) */
.emplacement{position:relative;overflow:hidden;width:100%;background:linear-gradient(135deg,var(--nacre),var(--brume));border:1px solid rgba(95,73,185,.25)}
.emplacement[data-format="16:9"]{aspect-ratio:16/9}
.emplacement[data-format="4:3"]{aspect-ratio:4/3}
.emplacement[data-format="1:1"]{aspect-ratio:1/1}
.emplacement[data-format="3:4"]{aspect-ratio:3/4}
.emplacement[data-format="9:16"]{aspect-ratio:9/16}
.emplacement::after{content:attr(data-format);position:absolute;left:50%;top:50%;translate:-50% -50%;padding:6px 14px;border:1px solid currentColor;border-radius:20px;font:600 12px/1 var(--f);letter-spacing:.14em;color:var(--violet-f);opacity:.75}
.emplacement:has(img)::after{display:none}
.sombre .emplacement,.emplacement.nuit{background:radial-gradient(80% 90% at 60% 30%,#2B2550,#16151D);border-color:rgba(175,179,242,.18)}
.sombre .emplacement::after,.emplacement.nuit::after{color:var(--lilas)}

/* Pastille de rubrique : capitales espacées, filet arrondi */
.chip{display:inline-flex;align-items:center;height:26px;padding:0 14px;border-radius:14px;border:1px solid currentColor;font:600 10.5px/1 var(--f);letter-spacing:.2em;text-transform:uppercase}
.kicker{font:600 11px/1 var(--f);letter-spacing:.2em;text-transform:uppercase;color:var(--encre);display:flex;align-items:center;gap:8px}
.kicker::before{content:"";width:5px;height:5px;background:var(--violet-p)}

/* Bouton billet : violet, talon blanc avec un ticket */
.billet{display:inline-flex;align-items:stretch;min-height:52px;border-radius:4px;overflow:hidden;background:var(--violet-f);color:#fff;font:700 13px/1.2 var(--f);letter-spacing:.04em;text-transform:uppercase;box-shadow:0 14px 30px rgba(95,73,185,.35);transition:background .3s,box-shadow .4s var(--courbe)}
.billet span{display:flex;align-items:center;padding:0 30px}
.billet i{display:grid;place-items:center;width:56px;background:#fff;color:var(--encre)}
.billet i svg{width:26px;height:26px}
.billet:hover{background:#4E3AA3;box-shadow:0 18px 38px rgba(95,73,185,.5)}
/* Bouton rose à ombre décalée */
.btn{position:relative;display:inline-flex;align-items:center;justify-content:center;min-height:46px;padding:0 26px;border-radius:5px;background:var(--rose-btn);color:#fff;font:700 13px/1.2 var(--f);letter-spacing:.04em;text-transform:uppercase;box-shadow:-8px 8px 0 #1E1E24;transition:box-shadow .3s var(--courbe),translate .3s var(--courbe)}
.btn:hover{box-shadow:-3px 3px 0 #1E1E24}
.btn.gris{background:#5D5E66}

/* 01 · Hero : photo pleine largeur, titre en bas à gauche, infos à droite */
.hero{background:var(--nuit);color:#fff;overflow:hidden}
.hero .emplacement{border:0}
.hero .voile{position:absolute;inset:0;background:linear-gradient(90deg,rgba(10,10,14,.55),rgba(10,10,14,.05) 45%,rgba(10,10,14,.5)),linear-gradient(0deg,rgba(10,10,14,.75),transparent 55%);pointer-events:none}
.hero .haut{position:absolute;top:0;left:0;right:0;z-index:2}
.hero .haut .wrap{display:flex;justify-content:space-between;align-items:center;padding-top:28px}
.logo{display:inline-flex;align-items:center;gap:0;height:36px}
.logo .k{width:36px;height:36px;border-radius:50%;background:var(--violet-p);display:grid;place-items:center;font:800 18px/1 var(--f);color:#fff;position:relative;z-index:1}
.logo .n{height:30px;display:grid;place-items:center;margin-left:-8px;padding:0 16px 0 18px;border-radius:16px;background:#fff;font:700 14px/1 var(--f);color:var(--violet-f)}
.orga{display:flex;align-items:center;gap:8px;font:700 15px/1 var(--f);color:#fff}
.orga svg{width:20px;height:20px}
.hero .bas{position:absolute;left:0;right:0;bottom:7%;z-index:2}
.hero .bas .wrap{display:grid;grid-template-columns:1.1fr .9fr;gap:50px;align-items:end}
.hero h1{font-size:clamp(28px,2.6vw,42px);color:#fff}
.infos .ligne-i{display:flex;gap:26px;padding-bottom:14px;border-bottom:1px solid rgba(255,255,255,.35);font-size:13px;color:#fff}
.infos .ligne-i span{display:flex;align-items:center;gap:8px}
.infos .ligne-i svg{width:16px;height:16px}
.infos p{margin:16px 0 22px;font-size:15px;line-height:1.6;color:#E6E6EE;max-width:440px}

/* 02 · Pourquoi participer : photo à gauche, aplat violet à droite */
.pourquoi{display:grid;grid-template-columns:1fr 1fr;background:var(--violet)}
.pourquoi .emplacement{border:0}
.pourquoi{align-items:center}
.pourquoi .txt{padding:110px 9% 110px 11%;color:#fff}
.pourquoi h2{color:#fff;font-size:clamp(32px,3.4vw,50px);margin-bottom:40px}
.pourquoi ul{list-style:none;max-width:440px}
.pourquoi li{padding:18px 0;border-bottom:1px solid rgba(255,255,255,.45);font-size:15.5px;line-height:1.5}
.pourquoi li:last-child{border-bottom:0}

/* 03 · Pourquoi investir dans le design : texte à gauche, mockups à droite */
.design{padding:130px 0 90px;overflow:hidden}
.design::before{content:"";position:absolute;right:-10%;top:0;width:70%;height:80%;background:radial-gradient(closest-side,rgba(95,73,185,.35),transparent);pointer-events:none}
.design .wrap{display:grid;grid-template-columns:.9fr 1.1fr;gap:70px;align-items:center}
.design .chip{color:#D9D9E2;margin-bottom:16px}
.design h2{padding-bottom:28px;border-bottom:1px solid #4A4A55;margin-bottom:28px}
.design .lead{font:700 18px/1.55 var(--f);color:#fff;margin-bottom:22px}
.design p{font-size:14.5px}
.design p+p{margin-top:14px}
.collage{position:relative;padding:40px 50px 60px}
.collage .emplacement{border-radius:2px;box-shadow:0 30px 60px rgba(0,0,0,.5)}
.sticker{position:absolute;display:grid;place-items:center;text-align:center;box-shadow:0 14px 28px rgba(0,0,0,.4)}
.sticker.s1{left:10px;top:60px;width:110px;height:110px;background:#F5D33B;border:4px solid #fff;font:800 17px/1 var(--f);color:#111;rotate:-4deg}
.sticker.s2{right:10px;top:0;width:86px;height:86px;border-radius:4px;background:#F1E7DD;font:800 13px/1.05 var(--f);color:#3A2416}
.sticker.s3{left:28%;bottom:0;width:200px;height:110px;background:#151C5E;color:#A6E36A;font:800 30px/1 var(--f)}

/* 04 · Combien le marché investit : tableau à filets */
.marche{padding:40px 0 130px}
.marche .tete{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:end;margin-bottom:40px}
.marche .citation{font-style:italic;font-size:16px;color:#E3E3EA;max-width:320px;justify-self:end}
.tableau{display:grid;grid-template-columns:1fr 1fr;border:1px solid #5A5A64}
.tableau .col{display:grid}
.tableau .col div{display:grid;place-items:center;min-height:80px;padding:12px 20px;border-bottom:1px solid #5A5A64;text-align:center;font-size:16px;color:#fff}
.tableau .col div:last-child{border-bottom:0}
.tableau .col div:first-child{background:var(--violet)}
.tableau .note{border-left:1px solid #5A5A64;padding:40px 70px;font-size:14px;line-height:1.6;display:flex;flex-direction:column;justify-content:center}
.tableau .note p+p{margin-top:14px}

/* 05 · Secrets de l'atelier : fond ciel, carte à filet */
.secrets{background:var(--ciel);padding:110px 0}
.secrets .wrap{display:grid;grid-template-columns:1fr 1.1fr;gap:80px;align-items:center}
.secrets h2{margin:16px 0 0;padding-bottom:20px;border-bottom:1px solid var(--encre);max-width:360px}
.carte-filet{padding:30px 34px;border:1px solid var(--violet-f);border-radius:6px;background:var(--ciel);font-size:14.5px;color:var(--texte)}
.carte-filet .chip{color:var(--encre);margin-bottom:18px}
.carte-filet b{color:var(--encre)}
.carte-filet p+p{margin-top:16px}

/* 06 · Quand et comment : photo pleine largeur, panneau à droite */
.quand{background:var(--nuit);color:#fff;overflow:hidden}
.quand .emplacement{border:0}
.quand .voile{position:absolute;inset:0;background:linear-gradient(90deg,transparent 30%,rgba(10,10,14,.8) 62%);pointer-events:none}
.quand .contenu{position:absolute;inset:0;z-index:2;display:flex;align-items:center}
.quand .contenu .wrap{display:flex;justify-content:flex-end}
.quand .boite{width:min(460px,46%)}
.quand h2{color:#fff;font-size:clamp(30px,3vw,46px)}
.quand .sous{margin-top:12px;font:700 16px/1.4 var(--f)}
.quand .sous+p{font-size:14px;color:#C9C9D2;margin-top:4px}
.pilules{display:flex;flex-wrap:wrap;gap:10px;margin:16px 0 30px}
.pilules span{display:inline-flex;align-items:center;gap:8px;height:32px;padding:0 16px;border-radius:17px;border:1px solid rgba(255,255,255,.6);font-size:13px}
.pilules svg{width:15px;height:15px}
.liste-verre{list-style:none;padding:22px 26px;background:rgba(60,60,70,.55);backdrop-filter:blur(8px);font-size:14px}
.liste-verre li{display:flex;gap:12px;padding:7px 0}
.liste-verre li::before{content:"";width:5px;height:5px;margin-top:9px;flex:none;background:var(--lilas)}

/* 07 · Combien ça coûte : liste + deux lots */
.prix{padding:130px 0 100px}
.prix .chip{color:var(--encre)}
.prix h2{margin:12px 0 44px}
.prix .grille{display:grid;grid-template-columns:.9fr 1fr 1fr;gap:16px;align-items:start}
.puces{list-style:none;font-size:14px;color:var(--texte)}
.puces li{display:flex;gap:10px;padding:5px 0}
.puces li::before{content:"";width:5px;height:5px;margin-top:9px;flex:none;background:var(--violet-p)}
.lot{border:1px solid #2A2A30;border-radius:3px;overflow:hidden;background:#fff}
.lot .tete{display:flex;gap:10px;padding:14px 18px;border-bottom:1px solid #2A2A30}
.lot .tag{height:24px;display:grid;place-items:center;padding:0 12px;border-radius:12px;font:700 10px/1 var(--f);letter-spacing:.12em;text-transform:uppercase}
.lot .tag.plein{background:var(--encre);color:#fff}
.lot .tag.vide{border:1px solid var(--encre);color:var(--encre)}
.lot .corps{padding:26px 18px 22px}
.lot .montant{font:800 clamp(30px,2.8vw,40px)/1 var(--f);letter-spacing:-.02em;color:var(--encre)}
.lot .montant small{font-size:.5em;font-weight:700}
.lot .btn{margin:24px 0 24px 8px}
.jauge{display:flex;align-items:center;gap:10px;font-size:12.5px}
.jauge svg{width:22px;height:22px;flex:none}
.lot.ouvert{background:var(--violet);border-color:var(--violet);color:#fff}
.lot.ouvert .tete{background:var(--brume);border-color:var(--brume)}
.lot.ouvert .tag.plein{background:#fff;color:var(--violet-f)}
.lot.ouvert .tag.vide{border-color:#fff;color:#5F49B9;background:transparent}
.lot.ouvert .montant{color:#fff}

/* 08 · Pourquoi si peu cher : carte à filet, image partagée */
.peu{padding:30px 0 60px}
.carte-cadre{display:grid;grid-template-columns:1fr 1fr;gap:50px;align-items:center;padding:30px 30px 30px 20px;border:1px solid #8E8E98;border-radius:4px}
.points{display:flex;margin-bottom:22px}
.points i{width:30px;height:30px;border-radius:50%;display:grid;place-items:center}
.points i::after{content:"";width:9px;height:9px;border-radius:50%;background:var(--encre)}
.points i:first-child{background:var(--menthe)}
.points i:last-child{background:var(--lilas);margin-left:-8px}
.points i:last-child::after{background:var(--violet-f)}
.peu h2{margin-bottom:24px}
.peu p{font-size:14.5px}
.peu p+p{margin-top:16px}
.peu b{color:var(--encre)}
.duo{display:grid;grid-template-columns:1fr 1fr;border-radius:10px;overflow:hidden}
.duo .emplacement{border:0}
.duo .forme{display:grid;place-items:center;position:relative;overflow:hidden}
.duo .forme.a{background:var(--lilas)}
.duo .forme.b{background:var(--menthe)}
.duo .forme.a::before{content:"";width:72%;aspect-ratio:2/1;border-radius:200px 200px 0 0;background:#111;align-self:end}
.duo .forme.b::before{content:"";position:absolute;inset:0;background:conic-gradient(from 160deg at 30% 0,transparent 0 10deg,#111 10deg 22deg,transparent 22deg 34deg,#fff 34deg 46deg,transparent 46deg)}
.duo .cote{grid-row:span 2}

/* 09 · Les avantages : courbe vectorielle et texte */
.avantages{padding:40px 0 120px}
.avantages .wrap{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center}
.courbe{color:var(--violet-p);max-width:300px}
.courbe svg{width:100%;height:auto}
.avantages .chip{color:var(--encre);margin-bottom:18px}
.avantages p{font-size:14.5px}
.avantages p+p{margin-top:12px}
.avantages b{color:var(--encre)}

/* 10 · Le formateur : carte sombre, curseur et étiquette, tampon qui tourne */
.formateur{padding:110px 0 70px;overflow:hidden}
.formateur::before{content:"";position:absolute;left:10%;top:0;width:80%;height:700px;background:radial-gradient(closest-side,rgba(95,73,185,.32),transparent);pointer-events:none}
.formateur h2{display:flex;align-items:center;gap:16px;padding-bottom:20px;border-bottom:1px solid #4A4A55;max-width:500px;margin-bottom:40px}
.formateur h2::before{content:"";width:10px;height:10px;background:var(--violet-p);flex:none}
.profil{position:relative;display:grid;grid-template-columns:1fr 1fr;align-items:center;border-radius:10px;background:linear-gradient(90deg,#08080A 40%,#1A1820);overflow:visible}
.profil .txt{padding:40px 30px 40px 26px;font-size:14px}
.profil .txt p+p{margin-top:16px}
.profil .txt b{color:#fff}
.curseur{position:relative;margin:0 0 24px 18px}
.curseur svg{width:22px;height:22px;color:var(--violet-p);margin-left:-18px}
.etiquette{display:inline-block;padding:6px 14px;background:var(--violet-f);font:800 18px/1.2 var(--f);color:#fff}
.profil .ph{position:relative;border-radius:0 10px 10px 0;overflow:hidden}
.profil .ph .emplacement{border:0}
.profil .ph::before{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,#08080A,transparent 30%);pointer-events:none}
.tampon{position:absolute;right:-30px;top:-46px;z-index:3;width:110px;height:110px;border-radius:50%;background:#fff;color:#111;box-shadow:0 0 0 4px #0F0F11,0 0 0 5px #fff}
.tampon svg.tour{width:100%;height:100%;animation:tourne 16s linear infinite}
.tampon text{font:800 10.5px var(--f);letter-spacing:.24em;fill:currentColor}
.tampon b{position:absolute;inset:0;margin:auto;width:46px;height:46px;border-radius:50%;background:#111;color:#fff;display:grid;place-items:center;font:800 24px/1 var(--f)}
@keyframes tourne{to{rotate:360deg}}

/* 11 · Réalisations : mosaïque */
.realisations{padding:30px 0 120px}
.mosaique{display:grid;grid-template-columns:1fr 1fr 2fr;grid-template-rows:auto auto;gap:12px}
.mosaique>*{border-radius:10px;overflow:hidden}
.tuile-logo{grid-column:span 2;display:grid;place-items:center;aspect-ratio:2.25/1;background:var(--violet);font:700 clamp(28px,3vw,42px)/1 var(--f);color:#fff;letter-spacing:-.02em}
.tuile-logo span{display:flex;align-items:center;gap:12px}
.tuile-logo svg{width:44px;height:44px}
.tuile-p{display:grid;place-items:center;aspect-ratio:1;background:#0B0A1E}
.tuile-p svg{width:56%;color:#B4A954}
.mosaique .grand{grid-column:3;grid-row:1/3}
.mosaique .grand{align-self:center}

/* 12 · Invités spéciaux : silhouettes mystère */
.invites{padding:0 0 130px}
.invites .grille{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.invite{position:relative;aspect-ratio:3/4.4;padding:20px;border-radius:6px;border:1px solid #3A3A44;background:linear-gradient(180deg,#2A2A31,#121216 75%);box-shadow:inset 0 0 0 4px #1A1A1F;overflow:hidden}
.invite .chip{color:#C9C9D2;font-size:9.5px}
.invite .tete-m{position:absolute;left:50%;top:22%;translate:-50% 0;width:44%;aspect-ratio:1;border-radius:50%;background:linear-gradient(180deg,#6A6A74,#3A3A42)}
.invite .corps-m{position:absolute;left:50%;top:56%;translate:-50% 0;width:120%;aspect-ratio:1.4;border-radius:50% 50% 0 0;background:linear-gradient(180deg,#45454E,#16161A 60%)}
.invite .nom{position:absolute;left:20px;right:20px;bottom:56px;z-index:1;padding-bottom:12px;border-bottom:1px solid #55555F;font:800 16px/1 var(--f);color:#fff}
.invite small{position:absolute;left:20px;bottom:28px;z-index:1;font-size:12px;color:#B5B5C0}

/* 13 · Certificat : tablette dessinée en CSS */
.certificat{padding:20px 0 140px;overflow:hidden}
.certificat::before{content:"";position:absolute;right:0;top:-100px;width:60%;height:600px;background:radial-gradient(closest-side,rgba(95,73,185,.35),transparent);pointer-events:none}
.certificat .wrap{display:grid;grid-template-columns:.85fr 1.15fr;gap:60px;align-items:center}
.certificat .chip{color:#D9D9E2;margin-bottom:14px}
.certificat h2{margin-bottom:22px}
.certificat p{font-size:15px}
.certificat b{color:#fff}
.tablette{position:relative;padding:12px;border-radius:22px;background:#2B2B30;border:2px solid #8B8B94;box-shadow:0 40px 80px rgba(0,0,0,.6)}
.ecran{display:grid;grid-template-columns:1.3fr 1fr;gap:20px;padding:30px 26px;border-radius:12px;background:linear-gradient(135deg,#ECEDFB,#D9DBF6);color:#2A2A33;min-height:280px}
.ecran .mini{display:inline-flex;align-items:center;gap:6px;font:700 10px/1 var(--f);color:var(--violet-f)}
.ecran .mini i{width:16px;height:16px;border-radius:50%;background:var(--violet-p)}
.ecran h3{margin:16px 0 14px;font-size:clamp(22px,2.2vw,30px);color:var(--violet-f)}
.ecran h3::after{content:"";display:inline-block;width:.45em;height:.45em;margin-left:8px;border-radius:50%;background:var(--violet-p)}
.ecran .p1{font-size:10px;color:#55555F}
.ecran .nomc{font:800 13px/1 var(--f);margin:6px 0 10px;color:#2A2A33}
.ecran .p2{font-size:10.5px;line-height:1.5;color:#2A2A33}
.ecran .sig{margin-top:30px;width:60%;border-top:1px solid #2A2A33;padding-top:6px;font:700 8px/1 var(--f)}
.ecran .deco{color:var(--violet-p)}
.ecran .deco svg{width:100%;height:100%}
.stylet{position:absolute;left:12%;right:12%;bottom:-40px;height:12px;border-radius:6px;background:linear-gradient(180deg,#fff,#CFCFD6);box-shadow:0 8px 16px rgba(0,0,0,.4)}
.stylet::before{content:"";position:absolute;left:-22px;top:3px;border:6px solid transparent;border-right:22px solid #E8E8EE;border-left:0}

/* 14 · Récapitulatif : cases cochées */
.recap{padding:20px 0 130px}
.recap .kicker{color:#C9C9D2;margin-bottom:12px}
.recap h2{font-size:clamp(26px,2.4vw,34px);margin-bottom:36px}
.cases{display:grid;grid-template-columns:1fr 1fr;gap:12px;align-items:start}
.cases ul{list-style:none;display:grid;gap:12px}
.cases li{display:flex;align-items:center;gap:16px;min-height:52px;padding:10px 18px;border:1px solid #3E3E48;border-radius:4px;font-size:14px;color:#E3E3EA}
.cases li i{width:22px;height:22px;border-radius:4px;background:#4964D8;display:grid;place-items:center;flex:none}
.cases li i svg{width:14px;height:14px;color:#fff}

/* 15 · Pour qui : trois rangées photo + texte */
.pour-qui{padding:0 0 130px}
.pour-qui h2{margin-bottom:34px}
.rangee{display:grid;grid-template-columns:300px 1fr;gap:0;margin-bottom:22px;border-radius:2px;background:linear-gradient(90deg,#141418,#18171F);overflow:hidden}
.rangee .emplacement{border:0}
.rangee .txt{padding:26px 34px;font-size:14px}
.rangee h3{font-size:22px;margin-bottom:16px}
.rangee p+p{margin-top:14px}
.rangee b{color:#fff}

/* 16 · FAQ : accordéon sur fond sombre, portrait à droite */
.faq{background:#0B0B0D;overflow:hidden}
.faq .cadre{display:grid;grid-template-columns:1fr minmax(0,620px);align-items:center;max-width:1600px;margin-inline:auto}
.faq .gauche{padding:90px 50px 90px max(20px,calc((100vw - 1040px) / 2))}
.faq h2{font-size:clamp(34px,3.4vw,52px);margin-bottom:26px}
.faq details{border-bottom:1px solid #3A3A44}
.faq summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:20px;min-height:64px;padding:12px 0;font:700 16px/1.4 var(--f);color:#fff}
.faq summary::-webkit-details-marker{display:none}
.faq summary::after{content:"";flex:none;border:6px solid transparent;border-left:8px solid #fff;border-right:0;transition:rotate .3s var(--courbe)}
.faq details[open] summary::after{rotate:90deg}
.faq details p{padding:0 0 20px;font-size:14px;color:#C9C9D2}
.faq .droite-ph{position:relative;align-self:center}
.faq .droite-ph .emplacement{border:0}
.faq .droite-ph::before{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,#0B0B0D,transparent 35%);pointer-events:none}

/* 17 · Pied : nom géant en contour, barre basse */
#pied{background:var(--nuit);color:#C9C9D2;overflow:hidden}
#pied .geant{position:relative;text-align:center;font:800 clamp(80px,17vw,280px)/.9 var(--f);letter-spacing:-.02em;color:transparent;-webkit-text-stroke:1px rgba(175,179,242,.35);padding-top:60px;white-space:nowrap;background:radial-gradient(50% 80% at 50% 100%,rgba(95,73,185,.3),transparent);overflow:hidden}
#pied .barre{background:var(--nuit2)}
#pied .barre .wrap{display:flex;justify-content:space-between;align-items:center;gap:20px;min-height:110px;padding:20px 0;font-size:12.5px}
#pied .marques{display:flex;align-items:center;gap:22px;flex-wrap:wrap}
#pied .marques .logo{height:28px}
#pied .marques .logo .k{width:28px;height:28px;font-size:14px}
#pied .marques .logo .n{height:24px;font-size:12px}
#pied .droite{display:flex;align-items:center;gap:22px;flex-wrap:wrap;text-align:right}
#pied .droite a{text-decoration:underline;text-underline-offset:3px;min-height:44px;display:inline-flex;align-items:center}

@media (max-width:1080px){
  .hero .bas .wrap{gap:30px}
  .tableau .note{padding:30px}
  .prix .grille{grid-template-columns:1fr 1fr}
  .prix .puces{grid-column:span 2;columns:2;margin-bottom:10px}
}
@media (max-width:820px){
  .hero .haut .wrap{padding-top:16px}
  .hero .bas,.quand .contenu{position:relative;inset:auto;bottom:auto;padding:30px 0 50px;background:var(--nuit)}
  .hero .bas .wrap{grid-template-columns:1fr;gap:26px}
  .hero .voile{bottom:auto;height:calc(100vw * 9 / 16)}
  .pourquoi .txt{padding:50px 24px}
  .design{padding:80px 0 60px}
  .design .wrap,.secrets .wrap,.avantages .wrap,.certificat .wrap{grid-template-columns:1fr;gap:40px}
  .collage{padding:30px 20px 60px}
  .sticker.s1{width:80px;height:80px;font-size:13px}
  .sticker.s3{width:150px;height:84px;font-size:22px}
  .marche .tete{grid-template-columns:1fr}
  .marche .citation{justify-self:start}
  .tableau{grid-template-columns:1fr}
  .tableau .note{border-left:0;border-top:1px solid #5A5A64;padding:26px 20px}
  .secrets{padding:80px 0}
  .quand .voile{display:none}
  .quand .contenu .wrap{display:block}
  .quand .boite{width:auto}
  .prix{padding:80px 0}
  .prix .grille{grid-template-columns:1fr}
  .prix .puces{grid-column:auto;columns:1}
  .carte-cadre{grid-template-columns:1fr;padding:24px 18px}
  .courbe{max-width:220px}
  .profil{grid-template-columns:1fr}
  .profil .ph{border-radius:10px 10px 0 0;order:-1}
  .profil .ph::before{background:linear-gradient(0deg,#08080A,transparent 40%)}
  .tampon{right:10px;top:-40px;width:90px;height:90px}
  .tampon b{width:38px;height:38px;font-size:20px}
  .mosaique{grid-template-columns:1fr 1fr}
  .mosaique .grand{grid-column:span 2;grid-row:auto}
  .invites .grille{grid-template-columns:1fr;max-width:340px;margin-inline:auto}
  .invite{aspect-ratio:4/3.4}
  .invite .tete-m{top:18%;width:30%}
  .invite .corps-m{top:50%;width:90%}
  .cases{grid-template-columns:1fr}
  .rangee{grid-template-columns:220px 1fr}
  .rangee .txt{padding:22px 20px}
  .faq .cadre{grid-template-columns:1fr}
  .faq .gauche{padding:70px 20px 60px}
  .faq .droite-ph{order:-1;width:min(100%,460px);justify-self:center}
  .faq .droite-ph::before{background:linear-gradient(0deg,#0B0B0D,transparent 35%)}
  #pied .barre .wrap{flex-direction:column;align-items:flex-start}
  #pied .droite{text-align:left}
}
@media (max-width:600px){
  .pourquoi{grid-template-columns:1fr}
  .pourquoi .txt{padding:60px 20px}
  .rangee{grid-template-columns:1fr}
}
@media (max-width:480px){
  .infos .ligne-i{flex-wrap:wrap;gap:10px 20px}
  .billet span{padding:0 18px}
  .orga{font-size:13px}
  .lot .btn{margin-left:8px}
}
@media (prefers-reduced-motion:reduce){.tampon svg.tour{animation:none}}
```
