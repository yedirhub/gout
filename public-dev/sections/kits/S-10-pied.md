# Prompt · Section « Le pied » du template S « Néon juridique »
# Par Yedidia Ruben - Digital Strategist. À coller dans une IA qui code, avec ta page.

Construis une section « Le pied » pour ma page, dans le même esprit que le code de référence plus bas. Garde la structure, le geste et les proportions ; reprends mes couleurs, mes polices et mes textes à moi.

- Son rôle : La légitimité : nom, mentions, contact.
- Où la placer : En dernier.
- Sa structure : Logo, mentions légales, numéro d'ordre si le métier est réglementé, liens.
- La règle qui fait la différence : Sobre. Un filet de la couleur de la marque peut le signer.
- Le geste de cette variante : nom et pilule 360 miniature
- Animations : attributs data-rv, data-lignes, data-compte, data-incline, data-aimant (moteur anim.js). Sans le moteur, retire-les.
- Aucun tiret long dans les textes. Contraste de 4,5 au moins. Lisible de 360 à 1920 px.

## Le code de référence (HTML)

```html
<footer id="pied">
  <div class="wrap">
    <span class="marque">Ascension Digitale <span class="pilule">360</span></span>
    <span>© 2026 Cabinet Coulibaly · Ouagadougou</span>
    <div class="droite"><a href="https://wa.me/22500000000?text=Bonjour%2C%20j%27ai%20une%20question%20sur%20Ascension%20Digitale%20360." target="_blank" rel="noopener">WhatsApp</a><a href="#pied">Mentions légales</a><a href="#pied">Confidentialité</a></div>
  </div>
</footer>
```

## Le CSS du template d'origine (la section en dépend, ne garde que ce qu'elle utilise)

```css
:root{
  --nuit:#181828; --nuit2:#19101C; --aube:#28191E; --encre:#0E0D16; --violet:#381EA8; --violet2:#3917A0; --mauve:#2E1F4F;
  --neon:#09F84F; --citron:#C6F808; --vert:#08CB32; --bleu:#518DCD; --verre:#383848;
  --blanc:#FFFFFF; --texte:#C9C6D6; --doux:#9C98AE;
  --courbe:cubic-bezier(.16,1,.3,1); --f:'Sora',system-ui,sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:var(--f);font-size:15px;line-height:1.6;color:var(--texte);background:var(--nuit2);-webkit-font-smoothing:antialiased;overflow-x:clip}
svg{display:block}
a{color:inherit;text-decoration:none}
h1,h2,h3{color:var(--blanc);line-height:1.05;letter-spacing:-.02em;font-weight:700}
h2{font-size:clamp(30px,3.6vw,52px)}
b,strong{color:var(--blanc);font-weight:600}
.wrap{width:min(1120px,100% - 40px);margin-inline:auto;position:relative;z-index:1}
section{position:relative}
.centre{text-align:center}

/* Emplacement d'image : nuit violette, filet néon très léger, format au centre */
.emplacement{position:relative;overflow:hidden;width:100%;background:radial-gradient(90% 70% at 50% 30%,#3A2A6A,#1C1530 70%);border:1px solid rgba(9,248,79,.18)}
.emplacement[data-format="16:9"]{aspect-ratio:16/9}
.emplacement[data-format="4:3"]{aspect-ratio:4/3}
.emplacement[data-format="1:1"]{aspect-ratio:1/1}
.emplacement[data-format="3:4"]{aspect-ratio:3/4}
.emplacement[data-format="9:16"]{aspect-ratio:9/16}
.emplacement::after{content:attr(data-format);position:absolute;left:50%;top:50%;translate:-50% -50%;padding:6px 14px;border:1px solid currentColor;border-radius:20px;font:600 12px/1 var(--f);letter-spacing:.14em;color:var(--neon);opacity:.7}
.emplacement:has(img)::after{display:none}

/* Signature : étiquette en capitales très espacées */
.signe{font:500 11px/1.4 var(--f);letter-spacing:.32em;text-transform:uppercase;color:var(--texte)}
/* La pilule lumineuse : dégradé vert néon vers citron, double contour */
.pilule{display:inline-grid;place-items:center;min-width:150px;height:62px;padding:0 30px;border-radius:20px;background:linear-gradient(100deg,#08CB32,#09F84F 40%,#C6F808);border:3px solid #0E0D16;box-shadow:0 0 0 2px rgba(246,240,200,.8),0 0 40px rgba(9,248,79,.35);font:700 34px/1 var(--f);color:#0E0D16}
.pilule.petite{min-width:0;height:auto;min-height:40px;padding:6px 22px;border-radius:14px;font-size:clamp(16px,1.6vw,22px);border-width:2px}
/* Bouton : vert néon, texte nuit */
.btn{display:inline-flex;align-items:center;gap:14px;min-height:56px;padding:0 30px;border-radius:16px;background:linear-gradient(100deg,#09F84F,#C6F808);color:#0E0D16;font:700 14px/1.2 var(--f);letter-spacing:.04em;text-transform:uppercase;box-shadow:0 0 30px rgba(9,248,79,.3);transition:box-shadow .4s var(--courbe),filter .3s}
.btn:hover{box-shadow:0 0 50px rgba(9,248,79,.55);filter:brightness(1.05)}
.btn svg{width:18px;height:18px}
/* Notification en verre : case verte cochée, nom, signature */
.notif{display:flex;align-items:center;gap:14px;padding:14px 18px;border-radius:12px;background:rgba(56,56,72,.55);border:1px solid rgba(255,255,255,.14);backdrop-filter:blur(10px);box-shadow:0 20px 40px rgba(0,0,0,.35);color:#fff;font-size:11px;line-height:1.35}
.notif i{width:26px;height:34px;flex:none;border-radius:5px;background:linear-gradient(180deg,#C6F808,#09F84F);display:grid;place-items:center;color:#0E0D16}
.notif i svg{width:14px;height:14px}
.notif b{display:block;font:700 12px/1.2 var(--f);letter-spacing:.02em;text-transform:uppercase}
.notif .q{margin-left:auto;white-space:nowrap;text-align:right;color:var(--texte);font-size:10px}
.notif .q b{font-size:11px;text-transform:none}
/* Barres lumineuses verticales (le décor des visuels) */
.barres{position:absolute;display:flex;align-items:flex-end;gap:5px;pointer-events:none}
.barres span{width:8px;border-radius:2px;background:linear-gradient(180deg,transparent,var(--c,#09F84F));opacity:.8;filter:blur(.5px)}

/* 01 · Hero */
.hero{background:radial-gradient(70% 90% at 75% 40%,#2E1F6A,transparent 60%),linear-gradient(180deg,#181848,#181828 60%,#19101C);overflow:hidden;padding:30px 0 0}
.hero .haut{display:flex;justify-content:space-between;align-items:center;padding:6px 0 0}
.hero .haut .signe{letter-spacing:.24em}
.hero .grille{display:grid;grid-template-columns:.9fr 1.1fr;gap:20px;align-items:center;min-height:640px}
.hero .txt{text-align:center;padding:40px 0 60px}
.hero h1{font-size:clamp(44px,6vw,92px);line-height:.98}
.hero h1 small{display:block;font-size:.66em}
.hero .pilule{margin:22px 0 26px}
.hero .boite{display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap;margin:34px auto 0;max-width:460px;padding:14px 22px;background:rgba(56,56,72,.5);font-size:12.5px;color:#E6E3F0;text-align:left}
.hero .boite a{display:inline-flex;align-items:center;gap:8px;min-height:44px}
.hero .boite svg{width:16px;height:16px}
.scene{position:relative;align-self:end;padding:12% 14% 0 20%}
.arc{position:absolute;left:10%;right:4%;top:2%;bottom:24%;border-radius:999px 999px 0 0;border:52px solid var(--violet);border-bottom:0;opacity:.9;filter:drop-shadow(0 0 30px rgba(56,30,168,.6))}
.scene .emplacement{border:0;border-radius:0;-webkit-mask-image:linear-gradient(180deg,#000 80%,transparent);mask-image:linear-gradient(180deg,#000 80%,transparent)}
.scene .barres.b1{right:0;top:12%;height:60%}
.scene .barres.b2{left:4%;top:34%;height:46%;--c:var(--bleu)}
.scene .notif{position:absolute;z-index:2;width:280px}
.scene .n1{left:-6%;top:20%}
.scene .n2{right:-6%;top:6%;width:330px}
.scene .n3{right:-4%;top:58%;width:330px}

/* 02 · Chiffres et signatures */
.preuve{padding:80px 0;background:var(--nuit2);border-top:1px solid rgba(255,255,255,.06)}
.preuve .grille{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.chiffre{padding:26px 22px;border-radius:16px;background:linear-gradient(180deg,rgba(56,56,72,.6),rgba(40,25,30,.6));border:1px solid rgba(255,255,255,.08)}
.chiffre strong{display:block;font:700 clamp(30px,3vw,44px)/1 var(--f);background:linear-gradient(100deg,#09F84F,#C6F808);-webkit-background-clip:text;background-clip:text;color:transparent;margin-bottom:10px}
.chiffre span{font-size:13.5px}

/* 03 · Alerte : le problème */
.alerte{padding:110px 0;background:linear-gradient(180deg,var(--nuit2),#1D1440);overflow:hidden}
.alerte .grille{display:grid;grid-template-columns:.85fr 1.15fr;gap:70px;align-items:center}
.cadre{position:relative;border-radius:22px;overflow:hidden;box-shadow:0 30px 70px rgba(0,0,0,.5)}
.cadre .emplacement{border:0}
.cadre::before{content:"";position:absolute;inset:0;z-index:1;pointer-events:none;background:linear-gradient(0deg,rgba(14,13,22,.85),transparent 45%)}
.cadre .bas{position:absolute;left:0;right:0;bottom:22px;z-index:2;text-align:center}
.cadre .bas .signe{font-size:10px}
.tampon{position:absolute;z-index:3;width:110px;height:110px;border-radius:50%;background:rgba(56,30,168,.55);border:1px solid rgba(255,255,255,.35);backdrop-filter:blur(8px);color:#fff}
.tampon svg.tour{width:100%;height:100%;animation:tourne 18s linear infinite}
.tampon text{font:500 8.4px var(--f);letter-spacing:.24em;fill:currentColor}
.tampon svg.c{position:absolute;inset:0;margin:auto;width:40px;height:40px}
@keyframes tourne{to{rotate:360deg}}
.alerte .tampon{right:-20px;top:38%}
.alerte .pilule.petite{margin-bottom:10px}
.alerte .mot{display:inline-block;margin:0 0 6px;padding:4px 16px;border-radius:12px;background:#0E0D16;color:#fff;font:600 14px/1.3 var(--f)}
.alerte h2{margin-bottom:24px}
.alerte p{max-width:520px;font-size:16px}
.alerte p+p{margin-top:14px}
.douleurs{list-style:none;display:grid;gap:10px;margin-top:28px;max-width:520px}
.douleurs li{display:flex;gap:14px;align-items:flex-start;padding:14px 18px;border-radius:12px;background:rgba(56,56,72,.45);border:1px solid rgba(255,255,255,.08);font-size:14.5px;color:#E6E3F0}
.douleurs li::before{content:"!";flex:none;width:22px;height:22px;border-radius:50%;border:1.5px solid var(--citron);color:var(--citron);display:grid;place-items:center;font:700 12px/1 var(--f)}

/* 04 · Modules : 4 affiches verticales */
.modules{padding:110px 0;background:#0E0D16}
.modules .tete{display:flex;justify-content:space-between;align-items:end;gap:30px;margin-bottom:44px}
.modules .tete p{max-width:380px;font-size:15px}
.affiches{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
.affiche{position:relative;border-radius:10px;overflow:hidden;box-shadow:0 20px 40px rgba(0,0,0,.45)}
.affiche .emplacement{border:0}
.affiche::before{content:"";position:absolute;inset:0;z-index:1;pointer-events:none;background:linear-gradient(0deg,var(--fond,#381EA8) 32%,transparent 70%)}
.affiche .t{position:absolute;left:14px;right:14px;bottom:18px;z-index:2;text-align:center}
.affiche .t small{display:block;font:500 9px/1 var(--f);letter-spacing:.28em;text-transform:uppercase;color:rgba(255,255,255,.75);margin-bottom:10px}
.affiche h3{font-size:clamp(20px,2vw,30px);line-height:1.05}
.affiche h3 em{font-style:normal;color:var(--neon)}
.affiche.vert{--fond:#05B01F}
.affiche.vert h3 em{color:#0E0D16}
.affiche.bleu{--fond:#1E3FA0}
.affiche.vert h3,.affiche.vert .t small{color:#0E0D16}

/* 05 · Bienvenue et alignement : la mentore */
.bienvenue{padding:120px 0;background:radial-gradient(60% 60% at 20% 50%,rgba(9,248,79,.12),transparent 70%),var(--nuit2);overflow:hidden}
.bienvenue .grille{display:grid;grid-template-columns:1.1fr .9fr;gap:70px;align-items:center}
.bienvenue .signe{display:block;margin-bottom:18px}
.bienvenue h2 .plus{display:inline-grid;place-items:center;width:1em;height:1em;margin-right:12px;border-radius:50%;background:var(--neon);color:#0E0D16;font-style:normal;font-size:.8em;line-height:1;vertical-align:-.05em}
.bienvenue h2 span{display:block;font-size:.7em}
.bienvenue p{margin:22px 0 0;max-width:520px;font-size:16px}
.etapes{list-style:none;display:grid;gap:14px;margin-top:30px;counter-reset:e}
.etapes li{counter-increment:e;display:grid;grid-template-columns:52px 1fr;gap:16px;align-items:center;font-size:14.5px}
.etapes li::before{content:"0" counter(e);height:52px;display:grid;place-items:center;border-radius:14px;border:1px solid rgba(9,248,79,.45);color:var(--neon);font:700 16px/1 var(--f)}
.bienvenue .tampon{left:-24px;top:46%}
.bienvenue .barres{left:-6%;bottom:6%;height:70%;--c:var(--vert);z-index:0}

/* 06 · Témoignages : notifications et avis */
.avis{padding:110px 0;background:linear-gradient(180deg,#0E0D16,#181848);overflow:hidden}
.avis h2{margin-bottom:12px}
.avis .sous{font-size:15px;margin-bottom:46px}
.avis .grille{display:grid;grid-template-columns:1fr 1fr 1fr;gap:18px;text-align:left}
.carte-avis{padding:22px;border-radius:18px;background:rgba(56,56,72,.45);border:1px solid rgba(255,255,255,.1)}
.carte-avis .qui{display:flex;align-items:center;gap:14px;margin-bottom:16px}
.carte-avis .emplacement{width:56px;border-radius:50%;flex:none}
.carte-avis .emplacement::after{font-size:8px;padding:3px 6px;letter-spacing:.06em}
.carte-avis .qui b{display:block;font-size:14px}
.carte-avis .qui span{font-size:12px;color:var(--doux)}
.carte-avis p{font-size:14px;color:#E6E3F0}
.carte-avis .notif{margin-top:18px}
.fil{display:flex;flex-direction:column;gap:12px;justify-content:center}

/* 07 · Offre */
.offre{padding:120px 0;background:radial-gradient(50% 60% at 50% 30%,rgba(56,30,168,.55),transparent 70%),var(--nuit);overflow:hidden}
.offre .carte{position:relative;max-width:820px;margin:44px auto 0;display:grid;grid-template-columns:1.1fr .9fr;border-radius:26px;overflow:hidden;background:#28191E;border:1px solid rgba(255,255,255,.1);box-shadow:0 40px 80px rgba(0,0,0,.5);text-align:left}
.offre .liste{padding:38px 36px}
.offre .liste h3{font-size:22px;margin-bottom:20px}
.offre ul{list-style:none;display:grid;gap:12px}
.offre li{display:flex;gap:12px;font-size:14.5px;color:#E6E3F0}
.offre li i{width:22px;height:22px;flex:none;border-radius:6px;background:linear-gradient(180deg,#C6F808,#09F84F);display:grid;place-items:center;color:#0E0D16}
.offre li i svg{width:12px;height:12px}
.offre .prix{padding:38px 32px;background:linear-gradient(160deg,#381EA8,#1D1440);display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:6px}
.offre .barre{color:var(--doux);text-decoration:line-through;font-size:15px}
.offre .montant{font:800 clamp(38px,4vw,54px)/1 var(--f);color:#fff;letter-spacing:-.02em}
.offre .montant small{font-size:.38em;font-weight:600}
.offre .fois{font-size:13px;margin-bottom:18px}
.offre .gar{margin-top:16px;font-size:12px;color:var(--texte);display:flex;align-items:center;gap:8px}
.offre .gar svg{width:16px;height:16px;color:var(--neon)}

/* 08 · FAQ */
.faq{padding:110px 0;background:var(--nuit2)}
.faq .grille{display:grid;grid-template-columns:.8fr 1.2fr;gap:60px;align-items:start}
.faq .liste{display:grid;gap:10px}
.faq details{border-radius:14px;background:rgba(56,56,72,.45);border:1px solid rgba(255,255,255,.08)}
.faq summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:60px;padding:12px 22px;font:600 15px/1.35 var(--f);color:#fff}
.faq summary::-webkit-details-marker{display:none}
.faq summary::after{content:"+";flex:none;width:28px;height:28px;border-radius:50%;background:var(--neon);color:#0E0D16;display:grid;place-items:center;font:700 18px/1 var(--f);transition:rotate .3s var(--courbe)}
.faq details[open]{border-color:rgba(9,248,79,.4)}
.faq details[open] summary::after{rotate:45deg}
.faq details p{padding:0 22px 18px;font-size:14px}

/* 09 · Relance : l'ordinateur posé sur le bloc */
.relance{padding:110px 0 120px;background:radial-gradient(60% 50% at 50% 70%,rgba(255,255,255,.06),transparent 70%),#0B0B0D;overflow:hidden}
.relance h2{max-width:760px;margin:16px auto 22px}
.relance p{max-width:560px;margin:0 auto 30px;font-size:16px}
.ecran{max-width:860px;margin:60px auto 0;padding:14px 14px 0;border-radius:18px 18px 0 0;background:#2A2A2E;border:1px solid #4A4A52}
.ecran .emplacement{border:0;border-radius:6px 6px 0 0}
.socle{max-width:980px;height:18px;margin:0 auto;border-radius:0 0 18px 18px;background:linear-gradient(180deg,#5A5A62,#2A2A2E)}
.bloc{max-width:1120px;height:60px;margin:30px auto 0;background:linear-gradient(180deg,#232326,#111113);clip-path:polygon(6% 0,94% 0,100% 100%,0 100%)}

/* 10 · Pied */
#pied{background:#0E0D16;border-top:1px solid rgba(255,255,255,.08);color:var(--texte);font-size:13px}
#pied .wrap{display:flex;justify-content:space-between;align-items:center;gap:24px;flex-wrap:wrap;padding:34px 0}
#pied .marque{font:700 18px/1 var(--f);color:#fff;display:flex;align-items:center;gap:12px}
#pied .marque .pilule{min-width:0;height:30px;padding:0 12px;border-radius:9px;font-size:14px;border-width:2px;box-shadow:none}
#pied .droite{display:flex;align-items:center;gap:20px;flex-wrap:wrap}
#pied .droite a{min-height:44px;display:inline-flex;align-items:center}
#pied .droite a:hover{color:var(--neon)}

@media (max-width:1080px){
  .scene .n1{left:0}
  .scene .n2,.scene .n3{right:0}
  .affiches{grid-template-columns:repeat(2,1fr)}
}
@media (max-width:820px){
  .hero .grille,.alerte .grille,.bienvenue .grille,.faq .grille{grid-template-columns:1fr;gap:40px}
  .hero .grille{min-height:0}
  .hero .txt{padding:30px 0 10px}
  .scene{padding:0 6%;max-width:520px;margin-inline:auto;width:100%}
  .scene .notif{width:260px}
  .scene{padding:10% 10% 0}
  .scene .n1{left:0;top:auto;bottom:22%}
  .scene .n2{right:0;top:4%}
  .scene .n3{display:none}
  .preuve .grille{grid-template-columns:1fr 1fr}
  .alerte .cadre,.bienvenue .cadre{max-width:460px;margin-inline:auto;width:100%}
  .alerte .tampon{right:8px}
  .bienvenue .tampon{left:8px}
  .bienvenue>.barres{display:none}
  .bienvenue .grille>div:last-child{order:-1}
  .modules .tete{flex-direction:column;align-items:flex-start}
  .avis .grille{grid-template-columns:1fr}
  .offre .carte{grid-template-columns:1fr}
}
@media (max-width:480px){
  .hero .haut .signe{font-size:9px;letter-spacing:.14em}
  .preuve .grille{grid-template-columns:1fr}
  .affiches{gap:10px}
  .affiche h3{font-size:17px}
  .affiche .t{left:8px;right:8px}
  .affiche .t small{letter-spacing:.14em}
  .scene .notif{width:210px;padding:10px 12px}
  .notif .q{display:none}
  .tampon{width:84px;height:84px}
  .offre .liste,.offre .prix{padding:28px 20px}
  .btn{padding:0 20px;font-size:13px}
}
@media (prefers-reduced-motion:reduce){.tampon svg.tour{animation:none}}
```
