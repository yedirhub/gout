# Prompt · Section « La relance » du template Y « Nuit champagne »
# Par Yedidia Ruben - Digital Strategist. À coller dans une IA qui code, avec ta page.

Construis une section « La relance » pour ma page, dans le même esprit que le code de référence plus bas. Garde la structure, le geste et les proportions ; reprends mes couleurs, mes polices et mes textes à moi.

- Son rôle : Redonner le bouton à celui qui s'est décidé en route.
- Où la placer : Entre deux blocs longs, et en dernier avant le pied.
- Sa structure : Une phrase forte, une phrase d'urgence douce, le bouton.
- La règle qui fait la différence : Courte : la phrase et le bouton, rien d'autre.
- Le geste de cette variante : photo fondue, chiffres vitrés, vague claire
- Animations : attributs data-rv, data-lignes, data-compte, data-incline, data-aimant (moteur anim.js). Sans le moteur, retire-les.
- Aucun tiret long dans les textes. Contraste de 4,5 au moins. Lisible de 360 à 1920 px.

## Le code de référence (HTML)

```html
<section class="rdv sombre" id="rdv">
  <div class="scene"><div class="emplacement" data-img="Y-rdv" data-format="4:3" data-alt="Le Dr Laurent Essomba assis à son bureau, mains jointes, lampe chaude, sourire rassurant"></div></div>
  <div class="wrap">
    <div class="chiffres" data-rv>
      <div><b>+2 000</b>chirurgies du sein</div>
      <div><b>20 ans</b>de chirurgie plastique</div>
      <div><b>6 mois</b>de suivi minimum</div>
    </div>
    <div class="txt">
      <span class="surtitre" data-rv>Prenez rendez-vous</span>
      <h2 data-lignes>Le prochain pas n'est pas<br>la chirurgie. C'est une conversation.</h2>
      <p class="ordre" data-rv>Inscrit à l'Ordre national des médecins du Cameroun</p>
      <p data-rv>Écrivez au cabinet sur WhatsApp et prenez votre consultation avec le Dr Essomba. Venez avec toutes vos questions. Surtout celles que vous n'osez pas poser.</p>
      <p class="barre" data-rv>Consultation sans engagement. Si vous ressortez avec un doute, vous revenez en parler sans payer une nouvelle consultation.</p>
      <a class="btn champagne" href="https://wa.me/22500000000?text=Bonjour%20Dr%20Essomba%2C%20je%20souhaite%20prendre%20rendez-vous." target="_blank" rel="noopener" data-rv data-aimant>Je veux ma consultation <span class="rond"><svg><use href="#fleche"/></svg></span></a>
    </div>
  </div>
  <svg class="vague" viewBox="0 0 560 60" preserveAspectRatio="none" aria-hidden="true"><path d="M0 60C120 60 150 0 260 0h300v60Z" fill="#F5F6F8"/></svg>
</section>
```

## Le CSS du template d'origine (la section en dépend, ne garde que ce qu'elle utilise)

```css
:root{
  --abysse:#020D11; --nuit:#09161C; --nuit-bas:#061113; --ardoise:#16272F; --ardoise2:#293A42;
  --perle:#F5F6F8; --blanc:#FFFFFF; --filet:#E3E6EA;
  --or1:#BDA37E; --or2:#EEE1CF; --or-txt:#DDC49D; --or-fonce:#8A6F48;
  --encre:#0B181D; --texte:#3F4A50; --doux:#5F6B71; --clair-txt:#C9D2D6; --gris-nuit:#9AA7AD;
  --courbe:cubic-bezier(.16,1,.3,1);
  --serif:'Marcellus',Georgia,serif; --ital:'Cormorant Garamond',Georgia,serif; --sans:'Manrope',system-ui,sans-serif; --plume:'Pinyon Script',cursive;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:var(--sans);font-size:14px;line-height:1.55;color:var(--texte);background:var(--perle);-webkit-font-smoothing:antialiased;overflow-x:clip}
svg{display:block}
a{color:inherit;text-decoration:none}
h1,h2,h3{font-family:var(--serif);font-weight:400;color:var(--encre);line-height:1.2;letter-spacing:.01em}
h2{font-size:clamp(26px,2.9vw,36px)}
.or{color:var(--or-txt)}
.ital{font-family:var(--ital);font-style:italic;font-weight:500;color:var(--or-txt);font-size:1.12em}
.wrap{width:min(1000px,100% - 40px);margin-inline:auto;position:relative;z-index:1}
.etroit{width:min(780px,100% - 40px)}
section{position:relative}
.centre{text-align:center}
.sombre{background:var(--nuit);color:var(--clair-txt)}
.sombre h2,.sombre h3{color:#fff}
.surtitre{display:block;font:500 10.5px/1 var(--sans);letter-spacing:.06em;text-transform:uppercase;color:var(--encre);margin-bottom:10px}
.sombre .surtitre{color:var(--or-txt)}

/* Boutons : champagne dégradé sur fond sombre, ardoise sur fond clair, rond clair à flèche */
.btn{display:inline-flex;align-items:center;gap:14px;min-height:46px;padding:0 10px 0 18px;border-radius:7px;font:600 13px/1.2 var(--sans);transition:box-shadow .4s var(--courbe),filter .4s}
.btn .rond{width:22px;height:22px;border-radius:50%;display:grid;place-items:center;flex:none}
.btn .rond svg{width:11px;height:11px}
.btn.champagne{background:linear-gradient(90deg,var(--or1),var(--or2));color:var(--encre);box-shadow:0 8px 24px rgba(189,163,126,.25)}
.btn.champagne .rond{background:#fff;color:var(--encre)}
.btn.ardoise{background:linear-gradient(90deg,#0B181D,#4B585D);color:#fff;box-shadow:0 8px 22px rgba(11,24,29,.25)}
.btn.ardoise .rond{background:rgba(255,255,255,.2);color:#fff}
.btn:hover{filter:brightness(1.06);box-shadow:0 12px 30px rgba(189,163,126,.38)}

/* Emplacements d'image : nuit ou perle, filet fin, format au centre */
.emplacement{position:relative;overflow:hidden;display:grid;place-items:center;background:linear-gradient(160deg,#1C2E36,#0D1B21);box-shadow:inset 0 0 0 1px rgba(221,196,157,.22)}
.emplacement::after{content:attr(data-format);font:400 12px/1 var(--serif);letter-spacing:.2em;color:rgba(221,196,157,.75);padding:7px 10px 6px 12px;border:1px solid rgba(221,196,157,.35);border-radius:20px}
.clair .emplacement,.emplacement.clair{background:linear-gradient(160deg,#ECEEF1,#DADFE4);box-shadow:inset 0 0 0 1px rgba(11,24,29,.1)}
.clair .emplacement::after,.emplacement.clair::after{color:#6E7A80;border-color:rgba(11,24,29,.2)}

/* Monogramme tournant : initiales à la plume dans un rond, texte en cercle */
.sceau{position:absolute;width:108px;height:108px;border-radius:50%;display:grid;place-items:center;z-index:4}
.sceau .coeur{width:66px;height:66px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#2A3C44,#0B181D);border:1px solid rgba(255,255,255,.25);display:grid;place-items:center;font:400 30px/1 var(--plume);color:#E8EEF0;box-shadow:0 10px 26px rgba(0,0,0,.35)}
.sceau svg{position:absolute;inset:0;width:100%;height:100%;animation:tourne 22s linear infinite;font:500 7.6px var(--sans);letter-spacing:.22em;fill:#D5DDE0;text-transform:uppercase}
@keyframes tourne{to{rotate:360deg}}

/* Encoche à flèche entre deux sections */
.encoche{position:absolute;left:50%;translate:-50% 0;z-index:5;width:64px;height:26px;display:grid;place-items:center}
.encoche svg.forme{position:absolute;inset:0;width:100%;height:100%}
.encoche .souris{position:relative;width:14px;height:20px;border:1.5px solid currentColor;border-radius:8px;display:grid;place-items:center}
.encoche .souris svg{width:8px;height:8px}

/* 01 · Hero */
.hero{background:radial-gradient(50% 60% at 70% 30%,#13252D,transparent 70%),var(--abysse);color:var(--clair-txt);min-height:640px;overflow:hidden}
.hero .filigrane{position:absolute;left:-60px;top:-40px;font:400 520px/1 var(--plume);color:rgba(255,255,255,.035);pointer-events:none}
.nav{position:relative;z-index:6;width:min(1000px,100% - 40px);margin:12px auto 0;display:flex;align-items:center;justify-content:space-between;gap:20px;padding:8px 10px 8px 16px;border:1px solid rgba(255,255,255,.14);border-radius:10px;background:rgba(9,22,28,.55);backdrop-filter:blur(10px)}
.signe{display:flex;flex-direction:column;color:#fff}
.signe b{font:400 24px/1 var(--plume);color:#fff}
.signe small{font:600 8.5px/1 var(--sans);letter-spacing:.12em;margin-top:3px;padding-left:44px}
.nav ul{display:flex;align-items:center;gap:22px;list-style:none;font-size:12.5px;color:#E5ECEE}
.nav ul a:hover{color:var(--or-txt)}
.nav .contact{display:inline-flex;align-items:center;min-height:34px;padding:0 16px;border:1px solid rgba(255,255,255,.35);border-radius:20px}
.hero .scene{position:absolute;right:0;top:0;bottom:0;width:min(820px,54%);z-index:0}
.hero .scene .emplacement{position:absolute;inset:0;width:100%;height:100%;box-shadow:none;background:radial-gradient(50% 45% at 55% 40%,#22363F,#0B1A20 75%)}
.hero .scene::after{content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(90deg,var(--abysse),transparent 30%)}
.hero .scene .sceau{right:max(20px,calc(50vw - 500px));top:170px}
.hero .txt{position:relative;z-index:3;max-width:470px;padding:84px 0 90px}
.pastille{display:inline-flex;align-items:center;min-height:24px;padding:0 12px;border:1px solid rgba(221,196,157,.45);border-radius:14px;font:600 9.5px/1.2 var(--sans);letter-spacing:.06em;text-transform:uppercase;color:#E7ECEE;margin-bottom:14px}
.hero h1{font-size:clamp(32px,3.4vw,40px);color:#fff;margin-bottom:16px;line-height:1.18}
.hero p{font-size:13.5px;color:#D7DFE2;max-width:440px}
.hero .direct{font-size:11px;color:var(--gris-nuit);margin:18px 0 12px}
.preuve{display:flex;align-items:center;gap:12px;margin-top:28px;font-size:10.5px;line-height:1.25;color:var(--gris-nuit)}
.preuve .ronds{display:flex}
.preuve .ronds i{width:24px;height:24px;border-radius:50%;border:1.5px solid var(--or1);margin-left:-7px;background:linear-gradient(135deg,#C9A882,#6E5536)}
.preuve .ronds i:first-child{margin-left:0}
.preuve b{display:block;font:700 12px/1.2 var(--sans);color:var(--or-txt)}
.hero .encoche{bottom:-1px;color:var(--encre)}

/* 02 · L'envie : texte centré entre deux photos penchées */
.envie{padding:50px 0 50px;background:var(--perle);overflow-x:clip;z-index:2}
.envie .photo{position:absolute;z-index:2;box-shadow:0 20px 40px rgba(11,24,29,.18);border:3px solid #fff}
.envie .p1{left:max(10px,calc(50% - 580px));top:-30px;width:160px;rotate:-6deg}
.envie .p2{right:max(10px,calc(50% - 560px));bottom:-20px;width:170px;rotate:8deg}
.envie .p1 .emplacement{aspect-ratio:3/4}
.envie .p2 .emplacement{aspect-ratio:1/1}
.envie h2{font-size:clamp(26px,2.8vw,32px);margin-bottom:22px}
.envie p{font-size:13px;color:var(--texte);max-width:560px;margin-inline:auto}
.peurs{display:flex;flex-wrap:wrap;justify-content:center;gap:10px 12px;margin:24px auto;max-width:520px}
.peurs span{display:inline-flex;align-items:center;gap:8px;min-height:28px;padding:0 14px;border-radius:16px;background:#fff;box-shadow:0 2px 10px rgba(11,24,29,.06);font-size:12px;color:var(--encre)}
.peurs svg{width:12px;height:12px;color:var(--or1)}
.envie .adie{color:var(--doux);font-size:12.5px}
.envie .serif{font-family:var(--serif);font-size:14px;color:var(--encre);margin-top:22px;max-width:520px}

/* 03 · La conversation */
.conversation{padding:44px 0 56px;overflow:hidden}
.conversation .filigrane{position:absolute;right:-120px;top:40px;font:400 460px/1 var(--plume);color:rgba(255,255,255,.04);pointer-events:none}
.conversation .wrap{display:grid;grid-template-columns:.85fr 1fr;gap:66px;align-items:center;width:min(940px,100% - 40px)}
.conversation .cadre{position:relative}
.conversation .cadre .emplacement{width:100%;aspect-ratio:3/4;border-radius:12px}
.conversation .cadre .sceau{right:-36px;top:42%}
.conversation h2{font-size:clamp(24px,2.4vw,28px);margin-bottom:16px}
.conversation p{font-size:12.5px;margin-bottom:12px;color:var(--clair-txt)}
.pas{list-style:none;margin:20px 0 22px;position:relative}
.pas::before{content:"";position:absolute;left:10px;top:12px;bottom:12px;width:1px;background:rgba(255,255,255,.3)}
.pas li{position:relative;display:flex;align-items:center;gap:22px;min-height:34px;margin-bottom:8px;font:600 12.5px/1.35 var(--sans);color:#fff}
.pas li i{width:21px;height:21px;border-radius:50%;border:1px solid rgba(255,255,255,.6);background:var(--nuit);display:grid;place-items:center;font:400 11px/1 var(--serif);font-style:normal;flex:none}

/* 04 · Interventions : panneau perle aux coins arrondis, carte blanche et radiographie */
.interventions{background:var(--nuit);padding:0}
.interventions .fond{background:var(--perle);border-radius:60px 60px 0 0;padding:44px 0 64px}
.interventions h2{margin-bottom:26px}
.carte-op{display:grid;grid-template-columns:1fr 1fr;max-width:780px;margin:0 auto;border-radius:12px;overflow:hidden;background:#fff;box-shadow:0 20px 50px rgba(11,24,29,.08);text-align:left}
.carte-op .txt{padding:36px 30px 32px}
.carte-op h3{font-size:24px;margin-bottom:4px}
.carte-op .sous{display:block;font:700 9.5px/1.2 var(--sans);letter-spacing:.04em;text-transform:uppercase;color:var(--encre);padding-bottom:12px;margin-bottom:18px;border-bottom:1px solid #C9CFD3;max-width:230px}
.carte-op p{font-size:12px;margin-bottom:12px}
.etiquettes{display:flex;flex-wrap:wrap;gap:8px;margin:16px 0 22px}
.etiquettes span{display:inline-flex;align-items:center;min-height:26px;padding:0 10px;border-radius:14px;background:var(--perle);font-size:11px;color:var(--encre)}
.carte-op .emplacement{width:100%;height:100%;min-height:100%;aspect-ratio:3/4}

/* 05 · Aussi : cartes ardoise sur la nuit, radiographies alternées */
.aussi{padding:70px 0 60px;overflow:hidden}
.aussi .encoche{top:-1px;color:#fff}
.aussi h2{margin-bottom:24px}
.aussi .carte-op{background:linear-gradient(135deg,#1A2D35,#0F2027);border:1px solid rgba(255,255,255,.07);box-shadow:none;margin-bottom:22px}
.aussi .carte-op h3{color:#fff}
.aussi .carte-op .sous{color:#fff;border-color:rgba(255,255,255,.3)}
.aussi .carte-op p{color:var(--clair-txt)}
.aussi .etiquettes span{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.1);color:#DDE4E7}
.aussi .carte-op.inverse .emplacement{order:2}
.aussi .chute{font-family:var(--serif);font-size:13.5px;color:#E5ECEE;max-width:640px;margin:10px auto 0}
.vague{display:block;width:100%;height:60px;margin-bottom:-1px}

/* 06 · À propos : mosaïque de 4 photos autour du sceau */
.apropos{background:var(--perle);padding:10px 0 60px}
.apropos .rond-fleche{position:absolute;right:max(20px,calc(50% - 330px));top:-46px;z-index:3;width:44px;height:44px;border-radius:50%;background:#fff;display:grid;place-items:center;color:var(--encre);box-shadow:0 6px 18px rgba(11,24,29,.18)}
.apropos .rond-fleche svg{width:14px;height:14px}
.apropos .wrap{display:grid;grid-template-columns:1fr 1.05fr;gap:60px;align-items:center;width:min(940px,100% - 40px)}
.mosaique{position:relative;display:grid;grid-template-columns:.75fr 1fr;grid-template-rows:auto auto;gap:12px}
.mosaique .emplacement:nth-child(1){aspect-ratio:3/4}
.mosaique .emplacement:nth-child(2){aspect-ratio:4/3;align-self:start}
.mosaique .emplacement:nth-child(3){aspect-ratio:4/3;grid-column:1/2}
.mosaique .emplacement:nth-child(4){aspect-ratio:3/4;margin-top:-40%}
.mosaique .sceau{left:42%;top:50%;translate:-50% -50%;width:118px;height:118px}
.mosaique .sceau .coeur{width:76px;height:76px;font-size:34px}
.mosaique .sceau svg{fill:#3F4A50}
.apropos .surtitre{color:var(--or-fonce)}
.apropos h2{font-size:clamp(24px,2.4vw,28px);margin-bottom:14px}
.apropos .ordre{font:600 10.5px/1 var(--sans);color:var(--encre);margin-bottom:18px}
.apropos p{font-size:12.5px;margin-bottom:14px}
.apropos q{display:block;font-style:italic;color:var(--doux);quotes:"« " " »"}

/* 07 · Bandeau champagne */
.bandeau{background:linear-gradient(90deg,#C0A685,#D1BBA3 50%,#ECDFCE);padding:14px 0;overflow:hidden}
.bandeau p{font:400 13px/1.4 var(--serif);text-transform:uppercase;letter-spacing:.02em;color:var(--encre);text-align:center}

/* 08 · Avant, pendant, après : rangée de cartes blanches sur la nuit */
.suivi{padding:56px 0 40px;overflow:hidden}
.suivi .filigrane{position:absolute;left:50%;top:150px;translate:-50% 0;font:400 300px/1 var(--plume);color:rgba(255,255,255,.035);white-space:nowrap;pointer-events:none}
.suivi h2{font-size:clamp(26px,2.9vw,34px);line-height:1.25}
.rail{position:relative;margin:30px 0 26px}
.piste{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding:4px 20px 10px}
.piste::-webkit-scrollbar{display:none}
.soin{flex:0 0 260px;scroll-snap-align:center;padding:16px 16px 18px;border-radius:12px;background:#fff;text-align:left;color:var(--texte);font-size:11.5px;line-height:1.45}
.soin .ico{width:24px;height:24px;border-radius:6px;background:var(--encre);display:grid;place-items:center;color:#fff;margin-bottom:12px}
.soin .ico svg{width:13px;height:13px}
.soin h3{font:600 12.5px/1.3 var(--sans);color:var(--encre);margin-bottom:6px}
.commandes{display:flex;justify-content:center;gap:10px;margin-top:6px}
.commandes button{width:44px;height:44px;border-radius:50%;border:1px solid rgba(255,255,255,.3);background:transparent;color:#fff;display:grid;place-items:center;cursor:pointer}
.commandes button:hover{border-color:var(--or-txt);color:var(--or-txt)}
.commandes svg{width:14px;height:14px}

/* 09 · Les étapes : panneau blanc sur la nuit, frise numérotée */
.etapes{padding:20px 0 40px}
.etapes .encoche{top:-6px;color:#fff}
.etapes .panneau{display:grid;grid-template-columns:.8fr 1.2fr;gap:30px;background:linear-gradient(180deg,#fff,#F3F5F7);border-radius:16px;padding:44px 56px 40px}
.etapes .surtitre{color:var(--or1)}
.etapes h2{font-size:clamp(26px,2.6vw,30px);margin-bottom:18px;color:var(--encre)}
.frise{list-style:none;position:relative}
.frise::before{content:"";position:absolute;left:10px;top:14px;bottom:30px;width:1.5px;background:var(--encre)}
.frise li{position:relative;display:grid;grid-template-columns:22px 1fr;gap:16px;margin-bottom:16px}
.frise i{width:22px;height:22px;border-radius:4px;background:var(--encre);color:#fff;display:grid;place-items:center;font:400 11px/1 var(--serif);font-style:normal;margin-top:2px}
.frise b{display:block;font:500 14px/1.35 var(--sans);color:var(--encre)}
.frise small{display:block;font-size:10.5px;line-height:1.4;color:var(--doux);margin-top:2px}

/* 10 · Garanties : 4 cartes blanches en marches */
.garanties{padding:40px 0 60px}
.garanties h2{font-size:clamp(26px,2.6vw,30px);line-height:1.3;margin-bottom:12px}
.garanties .sous{font-size:12px;color:var(--clair-txt)}
.cartes-g{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:24px;text-align:left;align-items:start}
.carte-g{padding:18px 16px 18px;border-radius:8px;background:#fff;font-size:11px;line-height:1.45;color:var(--texte)}
.carte-g:nth-child(2){padding-bottom:30px}
.carte-g .ico{width:22px;height:22px;border-radius:5px;background:var(--encre);display:grid;place-items:center;color:#fff;margin-bottom:12px}
.carte-g .ico svg{width:12px;height:12px}
.carte-g h3{font:500 12.5px/1.3 var(--sans);color:var(--encre);margin-bottom:8px}

/* 11 · Rendez-vous : photo à gauche, chiffres vitrés, vague claire en bas à droite */
.rdv{background:var(--abysse);overflow:hidden;border-top:1px solid #12232A}
.rdv .scene{position:absolute;left:0;top:0;bottom:0;width:52%}
.rdv .scene .emplacement{position:absolute;inset:0;width:100%;height:100%;box-shadow:none;background:radial-gradient(45% 50% at 60% 40%,#22363F,#0B1A20 75%)}
.rdv .scene::after{content:"";position:absolute;inset:0;background:linear-gradient(270deg,var(--abysse),transparent 30%);pointer-events:none}
.rdv .wrap{display:grid;grid-template-columns:1fr 1fr;min-height:430px;align-items:center}
.chiffres{display:grid;gap:10px;align-self:end;margin-bottom:40px;position:relative;z-index:2;justify-items:start}
.chiffres div{padding:9px 14px;border-radius:8px;background:rgba(40,56,64,.55);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.08);font-size:9.5px;color:var(--gris-nuit);min-width:120px}
.chiffres b{display:block;font:600 13px/1.2 var(--sans);color:#E8DCC8}
.rdv .txt{padding:46px 0 70px;position:relative;z-index:2}
.rdv h2{font-size:clamp(24px,2.4vw,28px);margin-bottom:12px}
.rdv .ordre{font:600 10px/1 var(--sans);color:#fff;margin-bottom:18px}
.rdv p{font-size:12.5px;color:var(--clair-txt);margin-bottom:14px}
.rdv .barre{border-left:1px solid rgba(255,255,255,.4);padding-left:12px;color:var(--gris-nuit)}
.rdv .vague{position:absolute;right:0;bottom:-1px;width:min(560px,60%);height:60px;margin:0;z-index:1}

/* 12 · FAQ */
.faq{padding:40px 0 70px;background:var(--perle);overflow:hidden}
.faq .filigrane{position:absolute;left:-100px;top:60px;font:400 520px/1 var(--plume);color:rgba(11,24,29,.05);pointer-events:none}
.faq .wrap{display:grid;grid-template-columns:.85fr 1fr;gap:70px;align-items:start;width:min(940px,100% - 40px)}
.faq .surtitre{color:var(--or1)}
.faq h2{font-size:clamp(26px,2.6vw,30px);line-height:1.25}
.faq h2 .clair-or{color:#C3A884}
.aide{margin-top:30px;padding:18px 18px 20px;border-radius:10px;background:#fff;border:1px solid var(--filet);max-width:290px}
.aide h3{font:600 14px/1.3 var(--sans);margin-bottom:6px}
.aide p{font-size:11.5px;color:var(--doux);margin-bottom:14px}
.faq details{background:#fff;border:1px solid var(--filet);border-radius:8px;margin-bottom:8px}
.faq summary{list-style:none;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:44px;padding:8px 16px;cursor:pointer;font:600 12.5px/1.35 var(--sans);color:var(--encre)}
.faq summary::-webkit-details-marker{display:none}
.faq summary span{color:var(--or1);font-size:15px;transition:rotate .3s var(--courbe)}
.faq details[open] summary span{rotate:45deg}
.faq details p{padding:0 16px 14px;font-size:12px;color:var(--texte)}

/* 13 · Pied */
#pied{background:var(--nuit);color:var(--clair-txt);font-size:12px}
#pied .cols{display:grid;grid-template-columns:1.4fr .8fr 1fr 1.3fr;gap:30px;padding:46px 0 40px}
#pied .signe b{font-size:22px}
#pied .metier{font:500 10px/1 var(--sans);letter-spacing:.12em;text-transform:uppercase;color:var(--or-txt);margin:14px 0 12px}
#pied .presente{max-width:200px;font-size:11px;color:var(--gris-nuit)}
#pied h4{font:500 14px/1 var(--sans);color:#fff;margin-bottom:14px}
#pied ul{list-style:none;display:grid;gap:6px;font-size:11.5px;color:#E2E8EA}
#pied ul a:hover{color:var(--or-txt)}
#pied .contact li{display:flex;align-items:flex-start;gap:8px}
#pied .contact svg{width:14px;height:14px;flex:none;margin-top:2px}
#pied .bas{background:var(--nuit-bas)}
#pied .bas .wrap{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:18px 0;font-size:11px;color:var(--gris-nuit)}
#pied .droite{text-align:right}

@media (max-width:1000px){
  .nav ul li:not(:last-child){display:none}
  .envie .photo{display:none}
  .cartes-g{grid-template-columns:repeat(2,1fr)}
  #pied .cols{grid-template-columns:1fr 1fr}
}
@media (max-width:820px){
  .hero{text-align:center;min-height:0;display:flex;flex-direction:column}
  .hero .scene{order:3}
  .envie{display:flex;flex-direction:column}
  .envie .p2{order:3}
  .hero .txt{max-width:560px;margin:0 auto;padding:40px 0 20px}
  .hero p{margin-inline:auto}
  .preuve{justify-content:center}
  .hero .scene{position:relative;right:auto;width:100%;height:auto;aspect-ratio:4/3;max-height:540px}
  .hero .scene .emplacement{aspect-ratio:auto}
  .hero .scene::after{background:linear-gradient(180deg,var(--abysse),transparent 25%)}
  .hero .scene .sceau{left:24px;right:auto;top:30%}
  .envie .photo{display:block;position:relative;left:auto;right:auto;top:auto;bottom:auto;margin:0 auto 30px;width:170px;flex:none}
  .envie .p2{margin:26px auto 0}
  .conversation .wrap,.apropos .wrap,.faq .wrap{grid-template-columns:1fr;gap:36px}
  .conversation .cadre{max-width:420px;margin:0 auto;width:100%}
  .conversation .cadre .sceau{right:-10px}
  .carte-op{grid-template-columns:1fr}
  .carte-op .emplacement{aspect-ratio:4/3;height:auto}
  .aussi .carte-op.inverse .emplacement{order:0}
  .mosaique{max-width:460px;margin:0 auto;width:100%}
  .etapes .panneau{grid-template-columns:1fr;padding:34px 24px}
  .rdv .scene{position:relative;width:100%;aspect-ratio:4/3;height:auto}
  .rdv .scene::after{background:linear-gradient(0deg,var(--abysse),transparent 30%)}
  .rdv .wrap{grid-template-columns:1fr;min-height:0}
  .chiffres{position:absolute;right:0;top:-220px;justify-items:end}
  .rdv .txt{padding-top:10px}
  .aide{max-width:none}
}
@media (max-width:560px){
  .hero h1{font-size:30px}
  .hero .scene{aspect-ratio:4/5}
  .cartes-g{grid-template-columns:1fr}
  .chiffres{top:-200px}
  .chiffres div{min-width:110px;padding:7px 12px}
  .etapes .panneau{padding:30px 18px}
  .interventions .fond{border-radius:36px 36px 0 0}
  #pied .cols{grid-template-columns:1fr}
  #pied .bas .wrap{flex-direction:column;text-align:center}
  #pied .droite{text-align:center}
  .bandeau p{font-size:11.5px}
}
```
