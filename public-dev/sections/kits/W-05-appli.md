# Prompt · Section « La bascule » du template W « Bleu clinique »
# Par Yedidia Ruben - Digital Strategist. À coller dans une IA qui code, avec ta page.

Construis une section « La bascule » pour ma page, dans le même esprit que le code de référence plus bas. Garde la structure, le geste et les proportions ; reprends mes couleurs, mes polices et mes textes à moi.

- Son rôle : Montrer pourquoi cette solution est différente.
- Où la placer : Entre la douleur et le contenu.
- Sa structure : Un titre « ce qui change tout », 3 raisons ou 3 cartes, une phrase qui résume.
- La règle qui fait la différence : Une seule section sombre ou contrastée par page : elle casse le rythme et attire l'œil.
- Le geste de cette variante : tablette inclinée sur une bande bleue
- Animations : attributs data-rv, data-lignes, data-compte, data-incline, data-aimant (moteur anim.js). Sans le moteur, retire-les.
- Aucun tiret long dans les textes. Contraste de 4,5 au moins. Lisible de 360 à 1920 px.

## Le code de référence (HTML)

```html
<section class="appli" id="appli">
  <span class="bande" aria-hidden="true"></span><span class="bande2" aria-hidden="true"></span>
  <div class="wrap grille">
    <div style="position:relative" data-rv>
      <div class="tablette" role="img" aria-label="Application MédiKa sur tablette : recherche de spécialité">
        <div class="ecran">
          <div class="tete"><strong>MédiKa</strong><small>Quelle spécialité cherchez-vous ?</small></div>
          <div class="cherche"><svg aria-hidden="true"><use href="#loupe"/></svg>Rechercher une spécialité</div>
          <ul><li>Cardiologie</li><li>Dermatologie</li><li>Endocrinologie</li><li>Gériatrie</li><li>Gynécologie</li><li>Neurologie</li><li>Nutrition</li></ul>
        </div>
      </div>
      <div class="tel" aria-hidden="true"><div class="ecran"><div class="tete"><strong>MédiKa</strong><small>Bonjour Mariam !</small></div><div class="tuiles"><i></i><i></i></div><div class="lignes"><i></i><i></i><i></i></div></div></div>
    </div>
    <div>
      <span class="pastille" data-rv>Des avantages visibles au quotidien</span>
      <h2 data-rv>Avec MédiKa, votre entreprise offre :</h2>
      <ul class="livre">
        <li data-rv>Un accès rapide à la santé.</li>
        <li data-rv>Un médecin 24 h/24.</li>
        <li data-rv>Plus de spécialités dans une seule solution.</li>
        <li data-rv>Des examens et des ordonnances rangés.</li>
        <li data-rv>Un suivi régulier en nutrition et en santé émotionnelle.</li>
        <li data-rv>Une expérience numérique simple pour le collaborateur.</li>
        <li data-rv>Une mise en place légère pour l'entreprise.</li>
        <li data-rv>Plus de valeur perçue dans le paquet d'avantages.</li>
      </ul>
    </div>
  </div>
</section>
```

## Le CSS du template d'origine (la section en dépend, ne garde que ce qu'elle utilise)

```css
:root{
  --bleu:#125CFE; --bleu-h:#0B4BD9; --marque:#005AB2; --marine:#0D2D3D; --logo:#021B52;
  --texte:#484F58; --gris:#6B7076; --filet:#E3E8EF; --fond:#EFF1F3; --pale:#F0F6FF; --pastille:#E4EDFF; --pastille-t:#2350C9;
  --vert:#1FA35B; --jaune:#FFC83D; --blanc:#FFFFFF;
  --courbe:cubic-bezier(.16,1,.3,1);
  --titre:'Inter Tight','Inter',system-ui,sans-serif; --sans:'Inter',system-ui,sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:var(--sans);font-size:15px;line-height:1.55;color:var(--texte);background:var(--blanc);-webkit-font-smoothing:antialiased;overflow-x:clip}
svg{display:block}
a{color:inherit;text-decoration:none}
b,strong{font-weight:600;color:var(--marine)}
h1,h2,h3{font-family:var(--titre);color:var(--marine);font-weight:500;letter-spacing:-.03em;line-height:1.12}
h2{font-size:clamp(26px,2.7vw,36px)}
h3{font-size:17px;font-weight:600;letter-spacing:-.015em}
.wrap{width:min(1040px,100% - 40px);margin-inline:auto;position:relative;z-index:1}
section{position:relative}
.centre{text-align:center}

/* Logo : mot en gras serré, le K en bleu vif */
.logo{display:inline-flex;align-items:baseline;font:800 26px/1 var(--titre);letter-spacing:-.05em;color:var(--logo)}
.logo span{color:var(--bleu)}

/* Pastille de section : petite capsule bleu pâle */
.pastille{display:inline-block;padding:5px 10px;border-radius:20px;background:var(--pastille);color:var(--pastille-t);font:600 11px/1.2 var(--sans);letter-spacing:-.01em}
/* Bulle flottante sur les images */
.bulle{position:absolute;z-index:2;padding:9px 14px;border-radius:22px;background:rgba(228,237,255,.94);border:2px solid #fff;color:var(--pastille-t);font:600 12px/1.2 var(--sans);box-shadow:0 8px 20px rgba(13,45,61,.12);white-space:nowrap}
.bulle.fonce{background:var(--marque);color:#fff;border-color:var(--marque);font-size:13px;padding:11px 18px}

/* Boutons : plein bleu vif ou contour blanc */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:12px;min-height:46px;padding:10px 24px;border-radius:9px;font:600 13px/1.25 var(--sans);text-align:center;transition:background .3s,box-shadow .3s,translate .3s var(--courbe)}
.btn svg{width:14px;height:14px;flex:none}
.btn.plein{background:var(--bleu);color:#fff;box-shadow:0 8px 20px rgba(18,92,254,.28)}
.btn.plein:hover{background:var(--bleu-h)}
.btn.contour{background:#fff;color:var(--marine);border:1px solid #CBD5E1}
.btn.contour:hover{border-color:var(--bleu);color:var(--bleu)}

/* Emplacement d'image : vide, il reste propre (bleu pâle, filet, format au centre) */
.emplacement{position:relative;overflow:hidden;width:100%;background:linear-gradient(150deg,#EAF1FF,#D9E6FB 60%,#E9EEF5);border:1px solid #D3DFF2}
.emplacement::after{content:attr(data-format);position:absolute;left:50%;top:50%;translate:-50% -50%;padding:5px 11px;border-radius:20px;background:rgba(255,255,255,.75);border:1px solid #C9D7EE;
  font:600 11px/1 var(--sans);letter-spacing:.08em;color:#4A6390}
.emplacement:has(>img)::after{display:none}
[data-format="16:9"]{aspect-ratio:16/9} [data-format="4:3"]{aspect-ratio:4/3} [data-format="1:1"]{aspect-ratio:1}
[data-format="3:4"]{aspect-ratio:3/4} [data-format="9:16"]{aspect-ratio:9/16}

/* Téléphone dessiné en CSS : écran d'application */
.tel{position:relative;width:var(--l,150px);aspect-ratio:9/18.5;border-radius:24px;background:#0E1420;padding:6px;box-shadow:0 24px 40px rgba(13,45,61,.25)}
.tel .ecran{height:100%;border-radius:19px;overflow:hidden;background:#F5F8FD;display:flex;flex-direction:column;font-size:7px;color:var(--marine)}
.tel .tete{background:linear-gradient(160deg,var(--bleu),var(--marque));color:#fff;padding:16px 10px 12px}
.tel .tete strong{display:block;color:#fff;font:800 12px/1 var(--titre);letter-spacing:-.04em;text-align:center;margin-bottom:8px}
.tel .tete small{display:block;font-size:7px;line-height:1.3}
.tel .tuiles{display:grid;grid-template-columns:1fr 1fr;gap:5px;padding:8px}
.tel .tuiles i{height:34px;border-radius:5px;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.08)}
.tel .lignes{padding:0 8px;display:grid;gap:5px}
.tel .lignes i{height:14px;border-radius:4px;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.06)}

/* 01 · Hero */
.hero{padding:56px 0 50px;background:radial-gradient(60% 80% at 80% 10%,#fff,transparent 70%),radial-gradient(80% 60% at 0% 100%,#F7F9FC,transparent),var(--fond);overflow:hidden}
.hero::before,.hero::after{content:"";position:absolute;border:70px solid rgba(255,255,255,.45);border-radius:50%;pointer-events:none}
.hero::before{width:900px;height:900px;left:-420px;top:-200px}
.hero::after{width:900px;height:900px;right:-450px;top:-350px}
.hero .grille{display:grid;grid-template-columns:.86fr 1.14fr;gap:36px;align-items:center}
.hero h1{font-size:clamp(30px,3.3vw,44px);margin:22px 0 22px}
.hero .lead{font-size:13.5px;line-height:1.6;max-width:46ch}
.hero .lead b{font-weight:600}
.hero .discret{font-size:12.5px;color:var(--gris);margin-top:12px}
.hero .actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:28px}
.scene-app{position:relative;padding:30px 0 20px 70px}
.scene-app .emplacement{border-radius:16px;border:8px solid #12161F;box-shadow:0 30px 50px rgba(13,45,61,.2)}
.scene-app .tel{position:absolute;left:0;bottom:-6px;--l:148px}
.scene-app .b1{left:22%;top:8px}
.scene-app .b2{right:-6px;top:24%}
.scene-app .b3{right:-14px;top:52%}
.scene-app .b4{right:4%;bottom:-2px}
.atouts{display:flex;flex-wrap:wrap;justify-content:space-around;gap:10px 24px;margin:60px auto 0;max-width:820px;padding:14px 24px;border-radius:12px;border:1px solid #D4DEEA;background:rgba(240,244,250,.7);font-size:11.5px;color:var(--texte)}
.atouts span{display:inline-flex;align-items:center;gap:9px}
.atouts svg{width:13px;height:13px;color:var(--vert)}

/* 02 · Intro : panneau bleu pâle, collage de deux photos */
.intro{padding:34px 0 30px}
.panneau{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center;background:var(--pale);border-radius:14px;padding:34px 70px 34px 0;overflow:hidden;position:relative}
.panneau::before{content:"";position:absolute;left:0;bottom:0;width:48%;height:100%;background:linear-gradient(115deg,transparent 40%,rgba(18,92,254,.07) 40% 62%,transparent 62%);pointer-events:none}
.collage{position:relative;height:300px}
.collage .p1{position:absolute;left:18%;top:0;width:45%}
.collage .p2{position:absolute;left:39%;top:23%;width:46%}
.collage .emplacement{border-radius:8px;box-shadow:0 16px 30px rgba(13,45,61,.15)}
.collage .b1{left:13%;top:7%} .collage .b2{right:6%;top:9%} .collage .b3{left:17%;bottom:7%}
.panneau h2{margin:16px 0 18px;font-size:clamp(24px,2.3vw,30px)}
.panneau p{font-size:13px;margin-bottom:14px}

/* 03 · Solution : 6 cartes à photo */
.solution{padding:40px 0 60px}
.tete2{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:end;padding:0 0 26px;border-bottom:1px solid var(--filet);margin:0 0 26px}
.tete2 h2{font-size:clamp(25px,2.4vw,31px);margin-top:12px}
.tete2 h2 b{font-weight:600}
.tete2 p{font-size:13px}
.cartes{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.carte{background:linear-gradient(180deg,#fff 40%,#F3F7FD);border:1px solid var(--filet);border-radius:10px;padding:18px 16px 18px;display:flex;flex-direction:column}
.carte .ic{width:26px;height:26px;border-radius:7px;background:var(--pastille);color:var(--bleu);display:grid;place-items:center;margin-bottom:16px}
.carte .ic svg{width:15px;height:15px}
.carte h3{margin-bottom:10px}
.carte p{font-size:12px;color:var(--gris);margin-bottom:14px}
.carte .emplacement{margin-top:auto;border-radius:8px}
.solution .cta{text-align:center;margin-top:28px}

/* 04 · Du discours à la vie */
.rotation{padding:0 0 20px;background:linear-gradient(180deg,#fff 50%,var(--fond) 50%)}
.encart{display:grid;grid-template-columns:1fr 1.2fr;gap:40px;align-items:center;max-width:840px;margin:0 auto;padding:30px 50px;border-radius:14px;background:var(--pale);border:1px solid #DCE6F5}
.encart h2{font-size:clamp(22px,2.2vw,29px);margin-top:12px}
.encart p{font-size:12.5px;margin-bottom:8px}

/* 05 · Application */
.appli{padding:50px 0 0;background:var(--fond);overflow:hidden}
.appli .grille{display:grid;grid-template-columns:1.05fr .95fr;gap:40px;align-items:center}
.appli .bande{position:absolute;left:0;top:90px;width:42%;height:100px;background:var(--marque)}
.appli .bande2{position:absolute;left:0;bottom:0;width:0;height:0;border-left:420px solid var(--marque);border-top:200px solid transparent}
.tablette{position:relative;width:min(370px,90%);aspect-ratio:3/4;margin:0 0 -70px 60px;border-radius:30px;background:#0E1420;padding:9px;rotate:-8deg;box-shadow:0 30px 60px rgba(13,45,61,.3)}
.tablette .ecran{height:100%;border-radius:22px;overflow:hidden;background:#F6F9FE}
.tablette .tete{background:linear-gradient(160deg,var(--bleu),#1B8CF0);padding:22px 20px 60px;color:#fff;text-align:center}
.tablette .tete strong{display:block;font:800 26px/1 var(--titre);letter-spacing:-.05em;color:#fff}
.tablette .tete small{display:block;margin-top:16px;font:600 15px/1.2 var(--titre);color:#fff}
.tablette .cherche{margin:-34px 16px 12px;background:#fff;border-radius:12px;padding:12px 14px;font-size:11px;color:#8A93A0;box-shadow:0 6px 14px rgba(0,0,0,.08);display:flex;gap:8px;align-items:center}
.tablette .cherche svg{width:13px;height:13px}
.tablette ul{list-style:none;padding:0 16px;display:grid;gap:7px}
.tablette li{display:flex;justify-content:space-between;align-items:center;padding:9px 12px;background:#fff;border-radius:8px;font-size:11px;font-weight:600;color:var(--marine);box-shadow:0 1px 3px rgba(0,0,0,.06)}
.tablette li::after{content:"›";font-size:15px;color:#6E7A8C}
.appli .tel{position:absolute;right:4%;top:30px;--l:128px;rotate:4deg}
.appli h2{margin:14px 0 22px;font-size:clamp(24px,2.4vw,30px)}
.livre{list-style:none;display:grid;gap:9px;padding-bottom:60px}
.livre li{padding:3px 0 3px 14px;border-left:3px solid var(--marque);font-size:12.5px;color:var(--marine)}

/* 06 · Plans */
.plans{padding:44px 0 50px;background:radial-gradient(60% 50% at 50% 0,#fff,transparent),var(--fond)}
.plans h2{max-width:20em;margin:12px auto 30px;font-size:clamp(25px,2.5vw,32px)}
.duo{display:grid;grid-template-columns:1fr 1fr;gap:20px;max-width:700px;margin:0 auto;text-align:left;align-items:start}
.plan{position:relative;background:#fff;border:1px solid var(--filet);border-radius:14px;padding:34px 24px 24px;box-shadow:0 10px 30px rgba(13,45,61,.06)}
.plan.vedette{background:var(--marque);border-color:var(--marque);color:#DCE8F7;box-shadow:0 20px 40px rgba(0,90,178,.28)}
.plan .nom{font:600 10px/1 var(--sans);letter-spacing:.12em;text-transform:uppercase;color:#7A8088}
.plan.vedette .nom{color:#C9DBF2}
.plan .desc{font-size:11.5px;margin:14px 0 22px;min-height:52px}
.plan ul{list-style:none;display:grid;gap:9px;margin-bottom:24px}
.plan li{display:flex;gap:9px;align-items:center;font-size:11.5px}
.plan li svg{width:13px;height:13px;color:var(--vert);flex:none}
.plan.vedette li svg{color:#7EE2A8}
.plan li.extra{color:#FFE08A}
.plan li.extra em{font-style:normal;font-size:10px;opacity:.85}
.plan .btn{width:100%}
.plan.vedette .btn{background:#fff;color:var(--marine);border:0}
.plan .pop{position:absolute;right:16px;top:14px;padding:5px 11px;border-radius:12px;background:var(--jaune);color:#2B2200;font:700 10.5px/1 var(--sans)}

/* 07 · Marque employeur */
.marque-e{padding:50px 0 50px}
.marque-e .grille{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center}
.cadre{position:relative;padding:0 0 22px 0}
.cadre::before{content:"";position:absolute;left:-18px;top:28px;right:24px;bottom:0;background:#E6EEFB;border-radius:12px}
.cadre .emplacement{border-radius:10px;box-shadow:0 20px 40px rgba(13,45,61,.14)}
.cadre .b1{left:-34px;top:20%} .cadre .b2{right:-28px;top:42%} .cadre .b3{left:-20px;top:58%} .cadre .b4{right:-34px;bottom:14%}
.marque-e h2{margin:12px 0 16px;font-size:clamp(24px,2.4vw,30px)}
.marque-e p{font-size:13px;margin-bottom:16px}
.marque-e .fin{color:var(--bleu);font-weight:600}

/* 08 · Contact : formulaire */
.contact{padding:40px 0 50px;background:linear-gradient(180deg,var(--fond),#E9EEF6);overflow:hidden}
.contact .grille{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:start;max-width:820px;margin:0 auto}
.contact h2{margin:12px 0 14px;font-size:clamp(26px,2.6vw,32px)}
.contact .intro-f{font-size:12.5px;margin-bottom:18px;max-width:32ch}
.contact ul{list-style:none}
.contact li{display:flex;gap:10px;align-items:center;padding:8px 0;border-bottom:1px solid #DCE3EC;font-size:12px;color:var(--marine)}
.contact li svg{width:15px;height:15px;color:var(--vert);flex:none}
.form{background:#fff;border-radius:14px;padding:26px 22px 20px;box-shadow:0 20px 40px rgba(13,45,61,.12)}
.form h3{font-size:14px;margin-bottom:16px}
.form label{display:block;font:700 9.5px/1 var(--sans);letter-spacing:.06em;text-transform:uppercase;color:#3A4350;margin:14px 0 7px}
.form input,.form select{width:100%;height:44px;border-radius:8px;border:1px solid #E1E7EF;background:#F8FAFC;padding:0 12px;font:400 13px var(--sans);color:var(--marine)}
.form input::placeholder{color:#7C8592}
.form input:focus,.form select:focus{outline:2px solid var(--bleu);outline-offset:1px}
.form .btn{width:100%;margin-top:20px}
.form .mention{font-size:10.5px;color:#6E757D;text-align:center;margin-top:10px}

/* 09 · FAQ */
.faq{padding:40px 0 30px}
.faq h2{margin:10px 0 22px}
.faq .liste{max-width:560px;margin:0 auto;display:grid;gap:9px;text-align:left}
.faq details{border:1px solid var(--filet);border-radius:9px;background:#fff}
.faq summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:14px;min-height:48px;padding:8px 14px;font-size:13px;font-weight:500;color:var(--marine)}
.faq summary::-webkit-details-marker{display:none}
.faq summary svg{width:13px;height:13px;color:var(--bleu);flex:none;transition:rotate .3s}
.faq details[open] summary svg{rotate:180deg}
.faq details p{padding:0 14px 14px;font-size:12.5px}

/* 10 · Relance */
.relance{padding:10px 0 50px}
.encart2{display:grid;grid-template-columns:1fr 1fr;gap:30px;align-items:center;max-width:680px;margin:0 auto;padding:30px 30px;border-radius:14px;background:var(--pale)}
.encart2 .logo{font-size:30px}
.encart2 p{font:500 18px/1.35 var(--titre);color:#4A5866;margin-top:10px;letter-spacing:-.02em}
.encart2 .actions{display:grid;gap:10px}

/* 11 · Pied */
#pied{background:var(--marque);color:#DCE8F7;padding:44px 0 26px;font-size:12px}
#pied .cols{display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:30px}
#pied .logo{color:#fff;font-size:24px} #pied .logo span{color:#fff}
#pied h4{font:600 12px/1 var(--sans);color:#fff;margin-bottom:16px}
#pied p{line-height:1.6;margin-top:12px;max-width:30ch}
#pied nav a,#pied .contact-p a{display:flex;align-items:center;min-height:30px}
#pied .lgpd{display:flex;align-items:center;gap:8px;margin-top:12px;font-size:11px}
#pied .lgpd svg{width:12px;height:12px;color:#7EE2A8}
#pied .bas{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;margin-top:30px;padding-top:18px;border-top:1px solid rgba(255,255,255,.25);font-size:11px}
#pied .droite{display:flex;align-items:center;gap:16px;flex-wrap:wrap}
#pied .haut{display:inline-flex;align-items:center;gap:8px;min-height:44px}
#pied .haut span{width:18px;height:18px;border-radius:50%;background:rgba(255,255,255,.3);display:grid;place-items:center}
#pied .haut svg{width:9px;height:9px}

/* Responsive */
@media (max-width:1120px){
  .cadre .b1,.cadre .b3{left:-8px} .cadre .b2,.cadre .b4{right:-8px}
}
@media (max-width:980px){
  .scene-app{padding-left:50px}
  .scene-app .tel{--l:120px}
  .panneau{padding-right:40px}
}
@media (max-width:820px){
  .hero .grille,.panneau,.tete2,.encart,.appli .grille,.marque-e .grille,.contact .grille,.encart2{grid-template-columns:1fr}
  .scene-app{max-width:560px;margin:10px auto 0;width:100%;padding-right:30px}
  .panneau{padding:30px 24px}
  .collage{height:auto;aspect-ratio:1.35;max-width:440px;width:100%;margin:0 auto}
  .cartes{grid-template-columns:1fr 1fr}
  .encart{padding:28px 24px;gap:14px}
  .appli .bande{width:70%}
  .appli .bande2{display:none}
  .tablette{margin:20px auto -60px;width:min(320px,80%)}
  .appli .tel{right:6%;top:40px}
  .livre{padding-bottom:50px}
  .duo{grid-template-columns:1fr;max-width:440px}
  .cadre{max-width:480px;margin:0 auto 10px;width:100%}
  .contact .grille{gap:30px}
  .encart2{text-align:center}
  #pied .cols{grid-template-columns:1fr 1fr}
  #pied .cols>div:first-child{grid-column:1/-1}
}
@media (max-width:560px){
  .hero .actions .btn{width:100%}
  .scene-app{padding:30px 0 20px 40px}
  .scene-app .tel{--l:96px;border-radius:18px}
  .bulle{font-size:10.5px;padding:7px 10px}
  .scene-app .b2,.scene-app .b3{right:0}
  .atouts{justify-content:flex-start;flex-direction:column;align-items:flex-start;margin-top:40px}
  .cartes{grid-template-columns:1fr}
  .appli .tel{display:none}
  .cadre .b1,.cadre .b3{left:-6px} .cadre .b2,.cadre .b4{right:-6px}
  .cadre::before{left:-8px}
  #pied .cols{grid-template-columns:1fr}
}
```
