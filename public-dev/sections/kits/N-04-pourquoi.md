# Prompt · Section « La valeur » du template N « Braise de salle »
# Par Yedidia Ruben - Digital Strategist. À coller dans une IA qui code, avec ta page.

Construis une section « La valeur » pour ma page, dans le même esprit que le code de référence plus bas. Garde la structure, le geste et les proportions ; reprends mes couleurs, mes polices et mes textes à moi.

- Son rôle : Faire sentir le prix avant de le montrer.
- Où la placer : Juste avant l'offre.
- Sa structure : Un récit du chemin parcouru, une pile de prix barrés, puis le vrai prix.
- La règle qui fait la différence : Les prix d'ancrage se barrent un par un. Le vrai prix arrive en dernier, plus grand.
- Le geste de cette variante : Titre en capitales face aux cases vertes
- Animations : attributs data-rv, data-lignes, data-compte, data-incline, data-aimant (moteur anim.js). Sans le moteur, retire-les.
- Aucun tiret long dans les textes. Contraste de 4,5 au moins. Lisible de 360 à 1920 px.

## Le code de référence (HTML)

```html
<section class="pourquoi colonnes" id="pourquoi">
  <div class="wrap">
    <div class="pq">
      <div class="titre" data-rv>
        <h2>Pourquoi vous devez rejoindre <span>IB30&nbsp;?</span></h2>
        <a class="btn reflet" href="https://wa.me/22500000000?text=Bonjour%20Isma%C3%ABl%2C%20je%20rejoins%20IB30." target="_blank" rel="noopener" aria-label="Rejoindre IB30 sur WhatsApp" data-aimant><svg><use href="#fleche"/></svg></a>
      </div>
      <ul data-rv style="--d:120ms">
        <li><i aria-hidden="true"><svg><use href="#coche"/></svg></i><span><u>Une vraie transformation&nbsp;:</u> des résultats visibles et durables en moins de temps.</span></li>
        <li><i aria-hidden="true"><svg><use href="#coche"/></svg></i><span><u>Un savoir de terrain&nbsp;:</u> apprenez avec un coach qui vit ce qu'il enseigne.</span></li>
        <li><i aria-hidden="true"><svg><use href="#coche"/></svg></i><span><u>Du temps et des efforts gagnés&nbsp;:</u> évitez les erreurs qui freinent votre progression.</span></li>
        <li><i aria-hidden="true"><svg><use href="#coche"/></svg></i><span><u>Une méthode éprouvée&nbsp;:</u> des techniques validées par des athlètes confirmés.</span></li>
        <li><i aria-hidden="true"><svg><use href="#coche"/></svg></i><span><u>Un accès gratuit&nbsp;:</u> trois cours offerts qui peuvent changer votre trajectoire.</span></li>
      </ul>
    </div>
  </div>
</section>
```

## Le CSS du template d'origine (la section en dépend, ne garde que ce qu'elle utilise)

```css
:root{
  --noir:#141414; --nuit:#181614; --carte:#1E1E1E; --carte2:#1B1B1B; --filet:#2E2E2E; --gris:#484848;
  --jaune:#FFD055; --or:#FFE36F; --peche:#FFB27A; --orange:#FB8F44; --orange2:#FEA055; --dore:#ECBB73; --vert:#57E000;
  --blanc:#F5F2EE; --texte:#C9C4BE; --doux:#9A948E;
  --degrade:linear-gradient(90deg,#FFD055,#FF9E53);
  --courbe:cubic-bezier(.16,1,.3,1);
  --police:'Bai Jamjuree',system-ui,sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:var(--police);font-size:15px;line-height:1.55;color:var(--texte);background:var(--noir);-webkit-font-smoothing:antialiased;overflow-x:clip}
svg{display:block}
a{color:inherit;text-decoration:none}
h1,h2,h3{font-family:var(--police);color:var(--blanc);line-height:1.15;letter-spacing:-.01em;font-weight:500}
.wrap{width:min(1080px,100% - 40px);margin-inline:auto;position:relative;z-index:1}
section{position:relative}
.j{color:var(--jaune)} .p{color:var(--peche)} .o{color:var(--orange2)}

/* Fond : fines colonnes verticales comme dans une salle */
.colonnes{background:var(--noir) repeating-linear-gradient(90deg,transparent 0 calc(16.66% - 1px),rgba(255,255,255,.035) calc(16.66% - 1px) 16.66%)}

/* Emplacements d'image */
.emplacement{position:relative;overflow:hidden;width:100%;background:radial-gradient(80% 70% at 70% 30%,rgba(255,158,83,.22),transparent 70%),linear-gradient(160deg,#2A2420,#161412);border:1px solid rgba(236,187,115,.35)}
.emplacement[data-format="16:9"]{aspect-ratio:16/9}.emplacement[data-format="4:3"]{aspect-ratio:4/3}.emplacement[data-format="1:1"]{aspect-ratio:1/1}.emplacement[data-format="3:4"]{aspect-ratio:3/4}.emplacement[data-format="9:16"]{aspect-ratio:9/16}
.emplacement::after{content:attr(data-format);position:absolute;left:50%;top:50%;translate:-50% -50%;padding:4px 10px;border-radius:6px;border:1px solid rgba(255,208,85,.4);font:500 11px/1 var(--police);letter-spacing:.08em;color:var(--dore);background:rgba(20,20,20,.6)}
.emplacement:has(img)::after{display:none}

/* Bouton : dégradé jaune vers orange, halo chaud */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:12px;min-height:46px;padding:0 22px;border-radius:6px;background:var(--degrade);color:#1A1208;
  font:600 13px/1.2 var(--police);text-transform:uppercase;letter-spacing:.01em;box-shadow:0 0 0 1px rgba(255,208,85,.3),0 8px 30px rgba(255,158,83,.35);transition:box-shadow .4s var(--courbe),filter .4s}
.btn:hover{box-shadow:0 0 0 1px rgba(255,208,85,.5),0 10px 44px rgba(255,158,83,.6);filter:brightness(1.06)}
.btn svg{width:18px;height:18px}
.btn.grand{min-height:54px;padding:0 26px;font-size:16px}

/* 01 · Hero */
.hero{background:radial-gradient(70% 90% at 72% 40%,#5A3218 0%,#2A1A10 40%,var(--nuit) 70%);overflow:hidden;border-bottom:2px solid transparent;border-image:linear-gradient(90deg,transparent,var(--dore) 20%,var(--dore) 80%,transparent) 1}
.hero .wrap{display:grid;grid-template-columns:1fr 1.05fr;align-items:end;min-height:560px}
.hero .txt{padding:80px 0 90px;position:relative;z-index:2}
.logo{display:flex;align-items:center;gap:10px;font:500 40px/1 var(--police);color:var(--blanc);letter-spacing:-.02em}
.logo .ic{width:46px;height:46px;border-radius:8px;background:var(--degrade);display:grid;place-items:center;color:#2A1708}
.logo .ic svg{width:34px;height:34px}
.logo b{font-weight:500;color:var(--orange2)}
.hero h1{font-size:clamp(30px,2.9vw,42px);margin:30px 0 22px;max-width:460px}
.hero p{font-size:15px;color:var(--blanc);max-width:420px;margin-bottom:30px}
.hero .photo{position:relative;margin-right:-6%}
.hero .photo .emplacement{border:0;-webkit-mask-image:linear-gradient(90deg,transparent,#000 28%);mask-image:linear-gradient(90deg,transparent,#000 28%)}
.hero .lueur{position:absolute;right:8%;top:10%;width:380px;height:380px;border-radius:50%;background:radial-gradient(circle,rgba(255,158,83,.35),transparent 65%);filter:blur(10px);pointer-events:none}

/* 02 · Ce qui rend unique : 3 cartes, celle du milieu relevée */
.unique{padding:90px 0 60px;overflow:hidden}
.unique h2,.programme h2{text-align:center;font-size:clamp(26px,2.5vw,34px)}
.cartes{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:860px;margin:60px auto 0;align-items:start}
.carte{position:relative;padding:44px 40px 46px;border-radius:14px 14px 36px 14px;background:linear-gradient(180deg,#232323,var(--carte));border:1px solid var(--filet);box-shadow:0 20px 40px rgba(0,0,0,.35)}
.carte:nth-child(2){margin-top:-18px;padding-bottom:70px;border-radius:14px 14px 14px 36px}
.carte .ic{width:56px;height:56px;border-radius:10px;background:var(--orange2);display:grid;place-items:center;color:#fff}
.carte .ic svg{width:30px;height:30px}
.carte h3{font-size:19px;margin:40px 0 20px}
.carte h3 span{color:var(--jaune)}
.carte p{font-size:13px;line-height:1.5;color:var(--texte)}
.carte::after{content:"";position:absolute;left:40px;bottom:0;width:44px;height:4px;border-radius:2px 2px 0 0;background:var(--orange2)}
.carte:nth-child(2)::after{width:100px}
.descendre{width:46px;height:62px;margin:90px auto 0;border-radius:24px;border:1px solid rgba(236,187,115,.55);display:grid;place-items:center;color:var(--blanc);animation:flotte 2.4s var(--courbe) infinite}
.descendre svg{width:16px;height:30px}
@keyframes flotte{50%{translate:0 8px}}

/* 03 · Programme : onglets des 3 cours */
.programme{padding:40px 0 100px;border-bottom:2px solid transparent;border-image:linear-gradient(90deg,transparent,var(--dore) 20%,var(--dore) 80%,transparent) 1;background:radial-gradient(30% 40% at 0% 60%,rgba(255,158,83,.12),transparent),radial-gradient(30% 40% at 100% 60%,rgba(255,158,83,.12),transparent)}
.cours{display:grid;grid-template-columns:210px 210px 1fr;gap:22px;max-width:860px;margin:60px auto 0;align-items:stretch}
.onglets{display:grid;gap:12px;align-content:start}
.onglet{display:flex;align-items:center;gap:10px;height:88px;padding:0 22px;border-radius:12px 22px 12px 12px;border:1px solid var(--filet);background:var(--carte2);font:500 15px/1 var(--police);color:var(--blanc);cursor:pointer;text-align:left;white-space:nowrap;transition:background .35s,color .35s}
.onglet::before{content:"";width:4px;height:4px;border-radius:50%;background:currentColor;opacity:.7}
.onglet span{color:var(--orange2)}
.onglet[aria-selected="true"]{background:var(--orange);border-color:var(--orange);color:#1A1208}
.onglet[aria-selected="true"] span{color:#1A1208}
.onglet:hover:not([aria-selected="true"]){background:#262626}
.panneau{display:contents}
.panneau[hidden]{display:none}
.video{position:relative;border-radius:12px 34px 12px 12px;overflow:hidden;border:1px solid rgba(236,187,115,.6)}
.video .emplacement{height:100%;border:0}
.video .lecture{position:absolute;left:50%;top:50%;translate:-50% -50%;width:62px;height:62px;border-radius:50%;background:#fff;display:grid;place-items:center;color:#141414;box-shadow:0 0 0 10px rgba(255,255,255,.18);z-index:2}
.video .lecture svg{width:22px;height:22px;margin-left:4px}
.detail{padding:46px 34px 50px;border-radius:12px 34px 12px 12px;border:1px solid var(--filet);background:var(--carte2);position:relative;display:flex;flex-direction:column;justify-content:center}
.detail .tag{align-self:flex-start;height:28px;padding:0 10px;display:grid;place-items:center;border-radius:4px;border:1px solid var(--orange2);font:500 11px/1 var(--police);color:var(--texte)}
.detail h3{font-size:22px;margin:30px 0 16px}
.detail h3 span{color:var(--orange2)}
.detail p{font-size:13px}
.detail::after{content:"";position:absolute;left:34px;bottom:0;width:80px;height:4px;border-radius:2px 2px 0 0;background:var(--orange2)}

/* 04 · Pourquoi participer */
.pourquoi{padding:0 0 60px}
.pq{display:grid;grid-template-columns:.75fr 1fr;gap:26px;max-width:860px;margin:0 auto}
.pq>*{border-radius:10px;border:1px solid var(--filet);background:var(--carte)}
.pq .titre{padding:50px 54px}
.pq h2{font:600 clamp(28px,2.6vw,36px)/1.2 var(--police);text-transform:uppercase;letter-spacing:.01em}
.pq h2 span{color:var(--orange2)}
.pq .titre .btn{margin-top:30px;width:84px;padding:0}
.pq .titre .btn svg{width:34px}
.pq ul{list-style:none;padding:40px 46px;display:grid;gap:22px}
.pq li{display:flex;gap:18px;font-size:13.5px;line-height:1.45;color:var(--blanc)}
.pq li i{flex:none;width:22px;height:22px;border-radius:4px;background:var(--vert);display:grid;place-items:center;color:#fff;margin-top:2px}
.pq li i svg{width:14px;height:14px}
.pq li u{color:var(--peche);text-underline-offset:3px}

/* Bandeau qui défile */
.defile{overflow:hidden;border-top:1px solid #222;border-bottom:1px solid #1C1C1C;padding:14px 0;-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}
.defile div{display:flex;gap:28px;width:max-content;animation:file 36s linear infinite;font:600 26px/1 var(--police);text-transform:uppercase;letter-spacing:.02em;color:var(--gris);white-space:nowrap}
@keyframes file{to{transform:translateX(-50%)}}

/* 05 · Le coach : dates géantes, 3 photos en éventail */
.coach{padding:90px 0 100px;overflow:hidden}
.coach .wrap{display:grid;grid-template-columns:1.15fr 1fr;gap:60px;align-items:center;max-width:960px}
.pile{position:relative;height:520px}
.dates{position:absolute;left:0;top:50%;translate:0 -50%;display:grid;gap:0;font:600 clamp(56px,6vw,84px)/1.05 var(--police);letter-spacing:-.02em}
.dates span:nth-child(1){color:var(--blanc)} .dates span:nth-child(2){color:var(--or)} .dates span:nth-child(3){color:var(--orange2)}
.pile .ph{position:absolute;border-radius:8px;overflow:hidden;border:1px solid rgba(236,187,115,.55);box-shadow:0 30px 60px rgba(0,0,0,.6)}
.pile .ph .emplacement{border:0}
.pile .ph.a{left:15%;top:8%;width:36%;z-index:1}
.pile .ph.c{left:62%;top:20%;width:30%;z-index:1}
.pile .ph.b{left:30%;top:0;width:52%;z-index:2}
.coach h2{font-size:clamp(30px,2.8vw,40px)}
.coach h2 span{color:var(--peche)}
.coach p{font-size:14px;margin-top:22px;color:var(--texte);max-width:400px}
.coach .btn{margin-top:36px}

/* 06 · Pied jaune */
#pied{background:var(--jaune);background:linear-gradient(90deg,#FFCA76,#FFD055);color:#3A2A10;font-size:13px}
#pied .wrap{display:flex;justify-content:space-between;align-items:center;gap:20px;min-height:84px;padding:20px 0}
#pied .droite{display:flex;align-items:center;gap:10px;text-align:right}
#pied .droite a{display:inline-flex;align-items:center;gap:8px;min-height:44px;font-weight:600}
#pied .droite svg{width:20px;height:20px}

@media (max-width:1100px){
  .hero .photo{margin-right:-20px}
}
@media (max-width:860px){
  .hero .wrap{grid-template-columns:1fr;min-height:0}
  .hero .txt{padding:60px 0 10px;text-align:center}
  .hero .logo{justify-content:center}
  .hero h1,.hero p{margin-inline:auto}
  .hero .photo{margin:0 auto;width:min(520px,100% + 40px)}
  .hero .photo .emplacement{position:relative;width:100%;-webkit-mask-image:linear-gradient(180deg,transparent,#000 22%);mask-image:linear-gradient(180deg,transparent,#000 22%)}
  .cartes{grid-template-columns:1fr;max-width:440px;gap:20px}
  .carte:nth-child(2){margin-top:0}
  .cours{grid-template-columns:1fr 1fr;max-width:560px}
  .onglets{grid-column:1/-1;grid-template-columns:repeat(3,1fr)}
  .onglet{height:60px;padding:0 12px;font-size:14px;justify-content:center}
  .onglet::before{display:none}
  .pq{grid-template-columns:1fr;max-width:560px}
  .pq .titre{padding:40px 30px}
  .pq ul{padding:30px}
  .coach .wrap{grid-template-columns:1fr;gap:40px;text-align:center}
  .coach p{margin-inline:auto}
  .pile{height:460px;max-width:520px;width:100%;margin:0 auto}
}
@media (max-width:560px){
  .hero h1{font-size:28px}
  .cours{grid-template-columns:1fr}
  .onglets{grid-template-columns:1fr}
  .onglet{height:52px;justify-content:flex-start;padding:0 18px}
  .video .emplacement{aspect-ratio:4/3}
  .detail{padding:36px 26px 44px}
  .descendre{margin-top:60px}
  .defile div{font-size:20px}
  .pile{height:380px}
  .dates{font-size:50px}
  .pile .ph.b{left:28%;width:58%}
  #pied .wrap{flex-direction:column;text-align:center;gap:6px}
  #pied .droite{text-align:center}
}
@media (prefers-reduced-motion:reduce){.defile div,.descendre{animation:none}}
```
