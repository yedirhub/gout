# Prompt · Section « La preuve » du template Q « Ciel clair »
# Par Yedidia Ruben - Digital Strategist. À coller dans une IA qui code, avec ta page.

Construis une section « La preuve » pour ma page, dans le même esprit que le code de référence plus bas. Garde la structure, le geste et les proportions ; reprends mes couleurs, mes polices et mes textes à moi.

- Son rôle : Faire parler les autres : « ça a marché pour des gens comme moi ».
- Où la placer : Juste après la promesse, puis en rappel avant l'offre.
- Sa structure : Un titre court ou aucun, puis des avis, des messages ou des vidéos, en grille ou en rangée qui déborde.
- La règle qui fait la différence : Des avis ou des messages au format réel (Google, WhatsApp) font plus vrai que des citations encadrées.
- Le geste de cette variante : mur de captures WhatsApp en colonnes
- Animations : attributs data-rv, data-lignes, data-compte, data-incline, data-aimant (moteur anim.js). Sans le moteur, retire-les.
- Aucun tiret long dans les textes. Contraste de 4,5 au moins. Lisible de 360 à 1920 px.

## Le code de référence (HTML)

```html
<section class="avis centre" id="temoignages">
  <div class="wrap">
    <h2 data-rv>Ce que nos élèves<br><b>disent de nous</b></h2>
    <div class="murs">
      <div class="chat" data-rv><div class="tete"><i></i>Kafui</div><div class="corps"><p>Coucou Grâce <time>15:37</time></p><p>Je suis bluffée par le contenu de la formation <time>15:37</time></p><p>Heureusement que je t'ai trouvée <time>15:37</time></p><p>Pour la première fois j'ai senti que j'étais sur la fréquence de mon rêve <time>15:38</time></p></div></div>
      <div class="chat" data-rv><div class="tete"><i></i>Yasmine<em>en ligne</em></div><div class="corps"><p>Merci, vraiment merci ! Je n'ai pas de mots pour dire à quel point tu es un cadeau dans mon parcours. J'espère que toi aussi tu es aussi gâtée que tu le mérites <time>10:50</time></p><p class="moi">Merci à toi Yasmine, ça me touche <time>10:52</time></p></div></div>
      <div class="chat" data-rv><div class="tete"><i></i>Aminata</div><div class="corps"><p>Tu fais partie et tu feras toujours partie du moment le plus fort de ma vie <time>16:04</time></p></div></div>
      <div class="chat" data-rv><div class="tete"><i></i>Nadège</div><div class="corps"><p>Grâce, je viens de voir ton message et je dois te dire : je ne croyais pas en grand-chose en commençant. J'avais déjà acheté plein de formations. Celle-ci a dépassé toutes mes attentes. J'ai enfin retrouvé la bonne fréquence et j'ai signé mon plus gros contrat le mois suivant. Merci d'exister. <time>15:40</time></p></div></div>
      <div class="chat" data-rv><div class="tete"><i></i>Rose</div><div class="corps"><p>Ce que je ressens, c'est ça : j'étais vidée, découragée. Je me suis reconnectée à ma foi, j'applique les exercices chaque matin et ma semaine a changé <time>22:02</time></p><p>Merci infiniment <time>22:03</time></p></div></div>
      <div class="chat" data-rv><div class="tete"><i></i>Elodie</div><div class="corps"><p class="moi">Tu te souviens de ce qu'on a vu lors de la dernière séance ? <time>18:46</time></p><p>Trop fort ! <time>18:48</time></p><p>Tu n'as pas idée à quel point la direction que tu m'as donnée m'a reconnectée ! <time>18:51</time></p></div></div>
      <div class="chat" data-rv><div class="tete"><i></i>Ines</div><div class="corps"><p>J'étais tellement confiante, heureuse comme je ne l'avais pas été depuis des années. J'ai commencé à attirer d'autres personnes, et pour la première fois j'ai gagné en un mois plus que ce que je gagnais en un trimestre. <time>15:32</time></p></div></div>
      <div class="chat" data-rv><div class="tete"><i></i>Josiane<em>en ligne</em></div><div class="corps"><p>Grâce, je n'ai pas les mots. Je vis des choses magiques <time>16:40</time></p><p>Merci pour chaque enseignement, merci de m'avoir montré ce que je peux faire <time>16:42</time></p><p>Après 13 ans dans le même poste, j'ai décroché le travail que je voulais <time>16:44</time></p></div></div>
    </div>
    <div class="cta" data-rv><a class="btn reflet" href="#offre" data-aimant>Je rejoins L'Élan</a></div>
  </div>
</section>
```

## Le CSS du template d'origine (la section en dépend, ne garde que ce qu'elle utilise)

```css
:root{
  --ciel:#339EEF; --bouton:#1878CC; --ciel-c:#419BEC; --nuit:#06429C; --marine:#192F95; --bleu-titre:#0B47A8; --bleu-lien:#1F7FD6;
  --brume:#EFF8FE; --brume2:#D8EDFC; --brume3:#F8FCFF; --blanc:#FFFFFF;
  --encre:#171717; --texte:#2B2F36; --doux:#5A6270; --filet:#CFE4F7;
  --courbe:cubic-bezier(.16,1,.3,1);
  --police:'Inter',system-ui,sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:var(--police);font-size:15px;line-height:1.5;color:var(--texte);background:var(--blanc);-webkit-font-smoothing:antialiased;overflow-x:clip}
svg{display:block}
a{color:inherit;text-decoration:none}
h1,h2,h3{font-weight:400;color:var(--encre);line-height:1.2;letter-spacing:-.01em}
h2{font-size:clamp(26px,2.4vw,32px)}
h1 b,h2 b{font-weight:700;color:var(--bleu-titre)}
h1 b.c,h2 b.c{color:var(--ciel)}
strong{font-weight:700;color:var(--encre)}
.wrap{width:min(800px,100% - 40px);margin-inline:auto;position:relative;z-index:1}
section{position:relative}
.centre{text-align:center}

/* Emplacement d'image : brume bleue, filet ciel, format écrit au centre */
.emplacement{position:relative;overflow:hidden;width:100%;background:linear-gradient(160deg,#F4FAFF,#CFE6FB);border:1px solid #BCDCF7}
.emplacement[data-format="3:4"]{aspect-ratio:3/4}
.emplacement[data-format="4:3"]{aspect-ratio:4/3}
.emplacement[data-format="16:9"]{aspect-ratio:16/9}
.emplacement[data-format="1:1"]{aspect-ratio:1/1}
.emplacement[data-format="9:16"]{aspect-ratio:9/16}
.emplacement::after{content:attr(data-format);position:absolute;left:50%;top:50%;translate:-50% -50%;padding:5px 10px;border-radius:4px;background:rgba(255,255,255,.7);font:500 11px/1 var(--police);letter-spacing:.14em;color:var(--bleu-titre)}
.emplacement:has(img)::after{display:none}
.sombre .emplacement{background:linear-gradient(160deg,#1E2A4A,#0B1022);border-color:#26324F}
.sombre .emplacement::after{background:rgba(0,0,0,.4);color:#BFDFFB}

/* Marque : « L'Élan », Inter gras bleu ciel et petite devise */
.marque{display:inline-block;color:var(--ciel);font:700 30px/1 var(--police);letter-spacing:-.02em}
.marque small{display:block;margin-top:4px;font:400 9px/1 var(--police);letter-spacing:0;color:var(--doux)}

/* Bouton : rectangle bleu ciel aux coins 6 px, capitales fines */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:44px;padding:10px 22px;border-radius:6px;background:var(--bouton);color:#fff;
  font:400 14px/1.2 var(--police);text-transform:uppercase;letter-spacing:.01em;box-shadow:0 8px 20px rgba(51,158,239,.28);transition:background .3s,box-shadow .4s var(--courbe)}
.btn:hover{background:#0F63AE;box-shadow:0 12px 28px rgba(51,158,239,.42)}
.btn.noir{background:#000;box-shadow:0 10px 24px rgba(0,0,0,.3)}
.btn.noir:hover{background:#1E1E1E}
.btn svg{width:18px;height:18px}
.cta{margin-top:36px}

/* L'emblème : un nœud à trois boucles, bleu, flouté derrière la personne */
.noeud{position:absolute;aspect-ratio:200/190;height:auto;color:var(--ciel);filter:blur(4px);opacity:.9;pointer-events:none}

/* Fond général : brume bleue et quadrillage très léger */
.brume{background:radial-gradient(40% 30% at 0% 50%,var(--brume2),transparent 70%),radial-gradient(40% 30% at 100% 40%,var(--brume2),transparent 70%),
  linear-gradient(180deg,#fff 0,var(--brume) 30%,#fff 100%)}
.quadrille::before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(51,158,239,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(51,158,239,.06) 1px,transparent 1px);background-size:44px 44px;pointer-events:none}

/* 01 · Hero */
.hero{padding:40px 0 30px;overflow:hidden}
.hero .wrap{display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:center}
.hero h1{font-size:clamp(30px,3vw,38px);margin:22px 0 22px;line-height:1.18}
.hero p{font-size:19px;line-height:1.3;color:var(--encre);margin-bottom:26px;max-width:420px}
.hero .scene{position:relative;justify-self:end;width:min(360px,100%)}
.hero .noeud{left:-8%;top:2%;width:116%;height:auto}
.hero .scene .emplacement{width:78%;margin:0 auto;z-index:1;border:0;border-radius:50% 50% 0 0/36% 36% 0 0;-webkit-mask-image:linear-gradient(180deg,#000 74%,transparent);mask-image:linear-gradient(180deg,#000 74%,transparent)}

/* 02 · Vidéo */
.video{padding:60px 0 80px;overflow:hidden}
.video .chapo{font-size:21px;line-height:1.3;color:var(--encre)}
.video .chapo b{display:block;font-weight:700;color:var(--bleu-titre)}
.ecran-video{position:relative;max-width:620px;margin:36px auto 0;border-radius:8px;overflow:hidden;box-shadow:0 18px 40px rgba(6,66,156,.18),0 2px 6px rgba(0,0,0,.15)}
.ecran-video .emplacement{border:0;filter:grayscale(1)}
.ecran-video .lecture{position:absolute;left:50%;top:50%;translate:-50% -50%;width:64px;height:64px;border-radius:50%;background:rgba(255,255,255,.55);backdrop-filter:blur(6px);display:grid;place-items:center;z-index:2;border:0;cursor:pointer;color:#111}
.ecran-video .lecture svg{width:20px;height:20px;margin-left:3px}
.ecran-video .barre{position:absolute;left:14px;right:14px;bottom:28px;height:3px;background:rgba(255,255,255,.35);z-index:2}
.ecran-video .barre::before{content:"";position:absolute;inset:0 84% 0 0;background:#E62117}
.ecran-video .temps{position:absolute;left:14px;bottom:8px;z-index:2;font:500 11px/1 var(--police);color:#fff}

/* 03 · Défis : badges numérotés en losange */
.defis{padding:40px 0 90px}
.defis h2{max-width:460px;margin:0 auto}
.numeros{display:grid;grid-template-columns:repeat(3,1fr);gap:40px 30px;margin-top:40px}
.numero{display:grid;justify-items:center;gap:14px;font-size:16px;line-height:1.3;color:var(--encre)}
.badge{position:relative;width:62px;height:62px;display:grid;place-items:center}
.badge::before{content:"";position:absolute;inset:3px;rotate:45deg;border:1px solid #2B3446;border-radius:6px}
.badge span{position:relative;width:46px;height:46px;border-radius:6px;background:#2B8FE0;display:grid;place-items:center;font:300 28px/1 var(--police);color:#fff;box-shadow:0 6px 14px rgba(51,158,239,.35)}

/* 04 · Pourquoi : bande dégradée, ordinateur qui déborde */
.bande{background:linear-gradient(90deg,var(--nuit),#1A67C4 50%,#2B8FE0);color:#fff}
.bande.inverse{background:linear-gradient(90deg,#1878CC,#1A67C4 50%,var(--nuit))}
.bande h2,.bande h3{color:#fff}
.bande strong{color:#fff}
.pourquoi{margin-top:80px;padding:60px 0 60px}
.pourquoi .wrap{display:grid;grid-template-columns:1fr 1fr;gap:30px;align-items:center}
.pourquoi h2{font-size:clamp(26px,2.4vw,32px);line-height:1.2;margin-bottom:22px}
.pourquoi h2 .trace{position:relative;font-weight:700;white-space:nowrap}
.pourquoi h2 .trace::after{content:"";position:absolute;left:-12px;right:-6px;bottom:-2px;height:10px;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 12' preserveAspectRatio='none'%3E%3Cpath d='M2 9 C40 2 120 4 198 7' stroke='%23111' stroke-width='5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E") center/100% 100% no-repeat;z-index:-1}
.pourquoi p{font-size:15px;line-height:1.4;color:#fff;max-width:380px}
.portable{position:relative;margin:-140px 0 -40px;rotate:-8deg;justify-self:center;width:min(380px,100%)}
.portable .cadre{padding:12px 12px 16px;border-radius:14px 14px 4px 4px;background:#111;box-shadow:0 30px 50px rgba(0,0,0,.35)}
.portable .cadre .emplacement{border:0;border-radius:2px}
.portable .socle{height:22px;margin:0 -9%;border-radius:0 0 18px 18px;background:linear-gradient(180deg,#E6E8EB,#A9AEB5);box-shadow:0 20px 30px rgba(0,0,0,.3)}
.portable .socle::before{content:"";display:block;width:18%;height:6px;margin:0 auto;border-radius:0 0 6px 6px;background:#C3C7CD}

/* 05 · Témoignages : captures de messages en colonnes */
.avis{padding:100px 0 100px;overflow:hidden}
.murs{columns:3;column-gap:16px;margin-top:36px}
.chat{text-align:left;break-inside:avoid;margin-bottom:16px;border-radius:2px;overflow:hidden;background:#0D1418 repeating-linear-gradient(135deg,rgba(255,255,255,.03) 0 5px,transparent 5px 12px);font-family:system-ui,sans-serif}
.chat .tete{display:flex;align-items:center;gap:8px;height:34px;padding:0 10px;background:#1F2C33;font-size:11px;font-weight:600;color:#E9EDEF}
.chat .tete i{width:20px;height:20px;border-radius:50%;background:linear-gradient(135deg,#8C6A52,#3B2A20);flex:none}
.chat .tete em{margin-left:auto;font-style:normal;color:#00A884}
.chat .corps{padding:10px 10px 12px;display:grid;gap:6px}
.chat p{position:relative;justify-self:start;max-width:92%;padding:6px 9px 14px;border-radius:7px;background:#202C33;font-size:12px;line-height:1.38;color:#E9EDEF}
.chat p time{position:absolute;right:7px;bottom:3px;font-size:9px;color:#8696A0}
.chat p.moi{justify-self:end;background:#005C4B}

/* 06 · Piliers */
.piliers{padding:70px 0}
.piliers .wrap{display:grid;grid-template-columns:.9fr 1.1fr;gap:50px;align-items:center}
.piliers h2{font-size:20px;line-height:1.3;margin-bottom:22px}
.piliers h2 b{color:var(--encre)}
.piliers p{font-size:13.5px;line-height:1.4;color:#fff}
.piliers ul{list-style:none;display:grid;gap:18px}
.piliers li{display:flex;align-items:center;gap:12px;font-size:16px;color:#fff}
.piliers li svg{width:32px;height:32px;flex:none}

/* 07 · Contenus : cartes de modules */
.contenus{padding:90px 0 90px;overflow:hidden}
.modules{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:36px}
.module{border-radius:6px;overflow:hidden;background:var(--encre);color:#fff;text-align:center;padding-bottom:20px;box-shadow:0 14px 30px rgba(23,23,23,.2)}
.module .emplacement{border:0;-webkit-mask-image:linear-gradient(180deg,#000 70%,transparent);mask-image:linear-gradient(180deg,#000 70%,transparent)}
.module h3{margin:-24px 20px 0;position:relative;padding-bottom:12px;border-bottom:1px solid #8A8A8A;font:600 20px/1.2 var(--police);color:#fff}
.module small{display:block;margin:12px 0 12px;font:400 11px/1 var(--police);letter-spacing:.32em;color:#D6D6D6}
.module .marque{font-size:14px}
.module .marque small{font-size:6px;margin:2px 0 0;letter-spacing:0;color:#9AA3AE}

/* 08 · La mentore */
.mentore{padding:20px 0 0;overflow:hidden}
.mentore .wrap{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:end}
.mentore .scene{position:relative;width:min(340px,100%)}
.mentore .noeud{left:-14%;top:18%;width:116%}
.mentore .scene .emplacement{width:80%;margin-left:14%;z-index:1;border:0;border-radius:50% 50% 0 0/30% 30% 0 0}
.mentore .txt{align-self:center;padding-bottom:30px}
.mentore h2{margin-bottom:22px}
.mentore p{font-size:13.5px;line-height:1.45;color:var(--encre)}

/* 09 · Offre */
.offre{padding:70px 0 70px}
.offre h2{font-size:clamp(24px,2.3vw,30px);line-height:1.25;color:#fff}
.offre h2 b{color:var(--encre)}
.offre h2 b.blanc{color:#fff}
.valeurs{list-style:none;margin:26px 0 30px;display:grid;gap:4px;font-size:16px;color:#fff}
.valeurs s{font-weight:700;white-space:nowrap}
.offre .de{font-size:16px;color:#fff}
.offre .prix{display:flex;align-items:baseline;justify-content:center;gap:8px;margin:6px 0 6px;font:700 clamp(46px,5vw,58px)/1 var(--police);letter-spacing:-.02em;color:#fff}
.offre .prix small{font-size:.42em;font-weight:600}
.offre .comptant{font-size:16px;color:#fff;margin-bottom:28px}
.offre .sur{display:flex;justify-content:center;align-items:center;gap:6px;margin-top:12px;font:600 11px/1 var(--police);color:#fff}
.offre .sur svg{width:12px;height:12px}

/* 10 · Relance */
.relance{padding:70px 0 70px}
.pilule{display:inline-block;padding:7px 10px;border:1.5px solid var(--ciel);border-radius:4px;font:400 13px/1.2 var(--police);text-transform:uppercase;color:var(--nuit)}
.relance h2{margin:18px auto 22px;max-width:540px;font-size:clamp(20px,2vw,24px);line-height:1.25;font-weight:500;color:var(--bleu-titre)}
.relance h2 b{color:var(--ciel)}
.relance .btn{width:min(320px,100%);font-weight:600;font-size:13px}

/* 11 · Pied */
#pied{padding:30px 0 40px;text-align:center;font-size:11px;color:var(--doux)}
#pied .marque{font-size:18px}
#pied .marque small{font-size:6px}
#pied .ligne{margin-top:14px;letter-spacing:.06em;text-transform:uppercase}
#pied .droite{margin-top:12px;display:flex;justify-content:center;align-items:center;gap:6px;color:var(--encre)}
#pied .droite svg{width:14px;height:14px;color:var(--ciel)}

@media (max-width:820px){
  .hero .wrap{grid-template-columns:1fr;gap:0}
  .hero .scene{order:-1;justify-self:center;width:min(300px,78%)}
  .hero h1{margin-top:16px}
  .numeros{grid-template-columns:1fr 1fr}
  .pourquoi{margin-top:120px;padding-top:0}
  .pourquoi .wrap{grid-template-columns:1fr;text-align:center}
  .pourquoi p{margin-inline:auto}
  .portable{order:-1;margin:-100px auto 10px;width:min(340px,86%)}
  .murs{columns:2}
  .piliers .wrap{grid-template-columns:1fr;gap:30px}
  .modules{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;margin-inline:-20px;padding:0 20px 10px}
  .modules::-webkit-scrollbar{display:none}
  .module{flex:0 0 min(240px,68%);scroll-snap-align:center}
  .mentore .wrap{grid-template-columns:1fr;gap:10px;text-align:center}
  .mentore .scene{justify-self:center;width:min(280px,74%)}
  .mentore .txt{padding-bottom:50px}
  .mentore .noeud{top:6%;left:-6%;width:112%}
  .mentore .txt{position:relative;z-index:2}
  .mentore .scene .emplacement{margin-inline:auto}
}
@media (max-width:520px){
  .hero p{font-size:16px}
  .video .chapo{font-size:16px}
  .numeros{grid-template-columns:1fr;gap:34px}
  .murs{columns:1}
  .chat:nth-child(n+5){display:none}
  .offre .prix{font-size:44px}
}
```
