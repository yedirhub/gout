# Prompt · Section « Le contenu » du template D « Médical premium »
# Par Yedidia Ruben - Digital Strategist. À coller dans une IA qui code, avec ta page.

Construis une section « Le contenu » pour ma page, dans le même esprit que le code de référence plus bas. Garde la structure, le geste et les proportions ; reprends mes couleurs, mes polices et mes textes à moi.

- Son rôle : Rendre l'offre concrète, morceau par morceau.
- Où la placer : Après la bascule. Peut s'étaler sur plusieurs sections (piliers).
- Sa structure : Un titre, puis une grille de cartes, une liste numérotée, un carrousel, ou un pilier par section.
- La règle qui fait la différence : Un titre court par carte, jamais un paragraphe. Une rangée qui déborde dit « il y en a plus ».
- Le geste de cette variante : grille 3 × 2 bordée, sans ombre
- Animations : attributs data-rv, data-lignes, data-compte, data-incline, data-aimant (moteur anim.js). Sans le moteur, retire-les.
- Aucun tiret long dans les textes. Contraste de 4,5 au moins. Lisible de 360 à 1920 px.

## Le code de référence (HTML)

```html
<section class="specialites encoche" id="specialites">
  <div class="wrap centre">
    <div class="sur centre" data-rv>Orthopédie &amp; Traumatologie</div>
    <h2 data-lignes>Ce que le Dr Delorme<br><b>peut faire pour vous</b></h2>
    <p class="chapo" data-rv>Une prise en charge spécialisée des principales pathologies orthopédiques, avec un diagnostic juste et un traitement efficace.</p>
    <div class="grille3" style="text-align:left">
      <div class="carte" data-rv data-incline><div class="ico"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2v8l-2 4 2 8M15 2v8l2 4-2 8"/></svg></div><h3>Genou</h3><p>Lésions du ménisque, ligament croisé, chondropathie et arthrose. Traitement médical et chirurgical mini-invasif.</p></div>
      <div class="carte" data-rv data-incline><div class="ico"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="7" r="3"/><path d="M5 21v-5a7 7 0 0 1 14 0v5"/></svg></div><h3>Épaule &amp; <em>Coude</em></h3><p>Coiffe des rotateurs, luxations, tendinites et instabilités. Arthroscopie et rééducation ciblée.</p></div>
      <div class="carte" data-rv data-incline><div class="ico"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8c3 2 13 2 16 0M6 8l2 13M18 8l-2 13M12 10v5"/></svg></div><h3>Hanche</h3><p>Arthrose, conflit fémoro-acétabulaire et lésions du labrum. Approche conservatrice ou chirurgicale.</p></div>
      <div class="carte" data-rv data-incline><div class="ico"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M8 5h8M7 9h10M7 13h10M8 17h8"/></svg></div><h3>Colonne <em>vertébrale</em></h3><p>Lombalgie, hernie discale et scoliose. Une approche globale centrée sur votre qualité de vie.</p></div>
      <div class="carte" data-rv data-incline><div class="ico"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v11l-3 6h14l-2-4-5-2V2"/></svg></div><h3>Pied &amp; <em>Cheville</em></h3><p>Hallux valgus, fasciite plantaire et entorses à répétition. Des solutions adaptées à chaque plainte.</p></div>
      <div class="carte" data-rv data-incline><div class="ico"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg></div><h3>Orthopédie <em>du sport</em></h3><p>Blessures du sportif amateur ou professionnel : prévention, traitement et retour au terrain.</p></div>
    </div>
    <p class="appel" data-rv>Prenez rendez-vous <b>et voyons comment je peux vous aider</b></p>
    <div class="cta centre" data-rv>
      <a class="btn reflet" data-aimant href="#rdv"><span>Prendre rendez-vous<span class="long"> avec le Dr Delorme</span></span><span class="fl"><svg width="12" height="12"><use href="#fleche"/></svg></span></a>
      <div class="preuve"><span class="avs"><i></i><i></i><i></i></span><span>+<span data-compte="3200">3 200</span> patients suivis</span> <span class="etoiles">★★★★★</span></div>
    </div>
  </div>
</section>
```

## Le CSS du template d'origine (la section en dépend, ne garde que ce qu'elle utilise)

```css
:root{
  --fond:#F8F8F8; --fond-2:#F1F1F1; --blanc:#FFFFFF;
  --encre:#06122A; --texte:#4A5568; --doux:#6B7584;
  --accent:#0B5A82; --accent-clair:#5FB3DA;
  --btn-a:#042B52; --btn-b:#0A6A96; --halo:#D2DBE6;
  --nuit:#0B2847; --pied:#07162C; --bord:#DCE3EA; --bord-carte:#C9D6E2;
  --wa-a:#1E9E45; --wa-b:#0D5E1F;
  --courbe:cubic-bezier(.16,1,.3,1);
  --titre:'Inter',system-ui,sans-serif; --corps:'Poppins',system-ui,sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:var(--corps);font-size:14px;line-height:1.6;color:var(--texte);background:var(--blanc);-webkit-font-smoothing:antialiased}
img,svg{display:block;max-width:100%}
a{color:inherit;text-decoration:none}
.wrap{width:min(960px,100% - 40px);margin-inline:auto}
.wrap-l{width:min(1080px,100% - 40px);margin-inline:auto}
section{position:relative;padding:96px 0}

/* encoche : la couture entre deux fonds */
.encoche::after{content:"";position:absolute;left:50%;bottom:-17px;transform:translateX(-50%);width:64px;height:18px;background:inherit;
  clip-path:path("M0 0 H64 C50 0 44 18 32 18 C20 18 14 0 0 0 Z");z-index:2}
.encoche::before{content:"";position:absolute;left:50%;bottom:-11px;transform:translateX(-50%) rotate(45deg);width:6px;height:6px;
  border-right:1.5px solid var(--encre);border-bottom:1.5px solid var(--encre);z-index:3}
.sombre.encoche::before{border-color:#fff}

/* typographie */
.sur{display:flex;align-items:center;gap:10px;font-family:var(--titre);font-size:11px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:var(--accent);margin-bottom:18px}
.sur::before{content:"";width:24px;height:1px;background:currentColor}
.sur.centre{justify-content:center}
h1,h2,h3{font-family:var(--titre);color:var(--encre)}
h1{font-size:clamp(36px,4.2vw,56px);font-weight:300;line-height:1.05;letter-spacing:-.03em}
h2{font-size:clamp(28px,3vw,40px);font-weight:300;line-height:1.1;letter-spacing:-.025em}
h1 b,h2 b{font-weight:700}
h2 b.ac{color:var(--accent)}
.centre{text-align:center}
.chapo{max-width:440px;margin:16px auto 0;font-size:13px}

/* bouton + preuve */
.cta{display:flex;flex-direction:column;align-items:flex-start;gap:12px;margin-top:32px}
.cta.centre{align-items:center}
.btn{display:inline-flex;align-items:center;gap:18px;height:56px;padding:0 14px 0 30px;border-radius:999px;color:#fff;font-size:14px;
  background:linear-gradient(90deg,var(--btn-a),var(--btn-b) 60%,var(--btn-a));background-size:200% 100%;background-position:0 0;
  box-shadow:0 0 0 5px var(--halo);transition:background-position .5s var(--courbe),transform .25s ease-out}
.btn:hover{background-position:100% 0;transform:translateY(-1px)}
.btn .fl{width:26px;height:26px;border-radius:50%;background:#fff;color:var(--btn-a);display:grid;place-items:center;transition:transform .25s ease-out}
.btn:hover .fl{transform:rotate(45deg)}
.btn.wa{background:linear-gradient(90deg,var(--wa-a),var(--wa-b));box-shadow:none;height:48px;padding:0 26px}
.preuve{display:flex;align-items:center;gap:8px;font-size:11px;color:var(--encre)}
.sombre .preuve{color:#C8D3E0}
.avs{display:flex}
.avs i{width:22px;height:22px;border-radius:50%;border:2px solid #fff;margin-left:-7px;background:linear-gradient(135deg,#9AA7B6,#5F6B7A)}
.avs i:first-child{margin-left:0}.avs i:nth-child(2){background:linear-gradient(135deg,#C9B8A8,#8A7766)}.avs i:nth-child(3){background:linear-gradient(135deg,#B5C2CF,#6D7E90)}
.etoiles{color:var(--btn-a);letter-spacing:1px;font-size:11px}
.sombre .etoiles{color:var(--accent-clair)}

/* image d'attente */
.ph{position:relative;overflow:hidden;background:linear-gradient(160deg,#E4EAF0,#C7D2DD);border-radius:10px}
.ph span{position:absolute;left:12px;top:10px;font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:#5D6B7B;background:rgba(255,255,255,.7);padding:3px 8px;border-radius:4px}

/* 01 hero */
.hero{background:radial-gradient(60% 80% at 75% 45%,#fff 0%,var(--fond) 55%,var(--fond-2) 100%);padding:0}
.hero .wrap-l{display:grid;grid-template-columns:1fr 1.05fr;align-items:end;min-height:660px}
.hero .txt{padding:96px 0 80px}
.logo{display:flex;align-items:center;gap:10px;margin-bottom:44px}
.logo b{font-family:var(--titre);font-weight:400;font-size:24px;letter-spacing:.02em;color:var(--encre);line-height:1}
.logo small{display:block;font-size:8px;color:var(--doux);letter-spacing:.04em}
.hero p.lead{max-width:330px;margin-top:22px;font-size:13px;color:var(--encre)}
.portrait{position:relative;height:620px;align-self:end}
.portrait .silh{position:absolute;inset:auto 8% 0 12%;height:100%}
.filigrane{position:absolute;right:0;top:6%;width:220px;height:90%;opacity:.035;filter:blur(1px)}
.pastille{position:absolute;display:flex;align-items:center;gap:7px;padding:8px 14px;border-radius:999px;font-size:12px;color:var(--encre);
  background:rgba(255,255,255,.55);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.7);
  box-shadow:0 6px 20px -10px rgba(6,18,42,.3);animation:flotte 6s ease-in-out infinite}
.pastille::before{content:"✓";display:grid;place-items:center;width:14px;height:14px;border-radius:50%;background:var(--accent);color:#fff;font-size:8px}
.pastille.p2{animation-delay:-1.5s}.pastille.p3{animation-delay:-3s}
@keyframes flotte{50%{transform:translateY(-4px)}}
.sceau{position:absolute;width:86px;height:86px;border-radius:50%;background:rgba(255,255,255,.8);backdrop-filter:blur(6px);display:grid;place-items:center;box-shadow:0 8px 24px -12px rgba(6,18,42,.35)}
.sceau svg.txt-rond{position:absolute;inset:0;animation:tourne 30s linear infinite}
@keyframes tourne{to{transform:rotate(360deg)}}

/* 02 douleur */
.douleur{background:var(--blanc)}
.duo{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center}
.puces{list-style:none;margin-top:28px;display:grid;gap:14px}
.puces li{position:relative;padding-left:20px;font-size:13px;color:var(--encre)}
.puces li::before{content:"";position:absolute;left:0;top:7px;width:7px;height:7px;border-radius:50%;background:var(--accent);box-shadow:0 0 0 3px #D5E6F0}
.puces b{font-weight:500}
.empile{position:relative;height:300px}
.empile .a{position:absolute;left:0;top:0;width:66%;height:72%}
.empile .b{position:absolute;right:0;bottom:0;width:42%;height:70%;border:4px solid #fff;box-shadow:0 20px 40px -20px rgba(6,18,42,.3)}
.legende{position:absolute;left:8%;bottom:6%;width:46%;background:rgba(255,255,255,.92);backdrop-filter:blur(6px);padding:12px 14px;border-radius:6px;font-size:11px;color:var(--encre);line-height:1.45}

/* 03 spécialités */
.specialites{background:var(--fond)}
.grille3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:48px}
.carte{background:#fff;border:1.5px solid var(--bord-carte);border-radius:8px;padding:24px 22px}
.ico{width:26px;height:26px;border-radius:4px;background:var(--btn-a);color:#fff;display:grid;place-items:center;margin-bottom:16px}
.carte h3{font-size:15px;font-weight:600;letter-spacing:-.01em;margin-bottom:10px}
.carte h3 em{font-style:normal;color:var(--accent)}
.carte p{font-size:12px;line-height:1.6;color:var(--doux)}
.appel{font-family:var(--titre);font-size:20px;font-weight:300;color:var(--encre);margin-top:52px;letter-spacing:-.01em}
.appel b{font-weight:700;color:var(--accent)}
.sombre .appel{color:#fff}.sombre .appel b{color:var(--accent-clair)}

/* 04 à propos */
.apropos{background:linear-gradient(180deg,var(--fond),#fff);padding-bottom:0}
.apropos .duo{align-items:end}
.apropos .txt{padding-bottom:96px}
.apropos p{font-size:13px;color:var(--encre);margin-top:18px;max-width:420px}
.distinctions{margin-top:30px;max-width:420px}
.distinctions div{display:flex;gap:10px;align-items:center;padding:12px 0;border-bottom:1.5px solid #A9C3D6;font-size:12px;color:var(--encre)}
.distinctions b{font-weight:600}
.distinctions em{color:var(--doux)}
.apropos .portrait{height:560px}

/* 05 sombre */
.sombre{background:radial-gradient(70% 90% at 15% 30%,#163A63 0%,var(--nuit) 55%,#0A2241 100%);color:#AFC0D3}
.sombre h2{color:#fff}
.sombre .sur{color:var(--accent-clair)}
.sombre .chapo{color:#93A6BC}
.verre{position:relative;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.09);border-radius:10px;padding:28px 22px 26px}
.verre::before{content:"";position:absolute;left:22px;top:-1px;width:50px;height:3px;border-radius:0 0 3px 3px;background:linear-gradient(90deg,var(--btn-b),var(--accent-clair))}
.verre .ico{width:36px;height:36px;border-radius:6px;background:rgba(6,18,42,.6);border:1px solid rgba(255,255,255,.06)}
.verre h3{color:#fff;font-size:15px;font-weight:600;margin-bottom:10px}
.verre p{font-size:12px;color:#8396AC;line-height:1.6}
.sombre .btn{box-shadow:0 0 0 5px rgba(255,255,255,.12)}

/* 06 actes */
.actes{background:var(--fond)}
.actes .duo{align-items:start;grid-template-columns:.85fr 1.15fr}
.actes .gauche{position:sticky;top:40px}
.actes .btn .long{display:none}
.actes .gauche p{font-size:13px;color:var(--encre);margin-top:20px;max-width:330px}
.liste-num{list-style:none}
.liste-num li{display:grid;grid-template-columns:36px 1fr;padding:22px 0;border-bottom:1.5px solid #8FB2C9}
.liste-num li:first-child{padding-top:0}
.liste-num .n{font-family:var(--titre);font-size:12px;color:var(--accent);padding-top:3px}
.liste-num h3{font-size:15px;font-weight:600;margin-bottom:10px}
.liste-num p{font-size:13px;color:var(--encre);max-width:400px}

/* 07 avis */
.avis{background:linear-gradient(180deg,#F9F9F9,#F3F3F3)}
.grille4{display:grid;grid-template-columns:repeat(4,1fr);gap:36px 28px;margin-top:56px}
.av .tete{display:flex;gap:10px;align-items:center}
.av .ini{width:30px;height:30px;border-radius:50%;display:grid;place-items:center;color:#fff;font-weight:600;font-size:13px;flex:none}
.av b{display:block;font-family:var(--titre);font-size:12px;color:var(--encre);font-weight:600}
.av small{font-size:10px;color:var(--doux)}
.av .g{margin-left:auto;font-weight:700;font-size:13px;background:conic-gradient(#EA4335 0 25%,#FBBC05 0 45%,#34A853 0 70%,#4285F4 0);-webkit-background-clip:text;background-clip:text;color:transparent}
.av .note{margin:8px 0 6px;color:#F5B400;font-size:12px;letter-spacing:1px}
.av .note::after{content:" ✔";color:#4285F4;font-size:10px}
.av p{font-size:12px;color:var(--encre);line-height:1.5}

/* 08 cabinet */
.cabinet{background:linear-gradient(180deg,#F1F1F1,#fff)}
.cabinet-grille{display:grid;grid-template-columns:1fr 1fr;gap:28px 48px}
.cabinet p{font-size:13px;color:var(--encre);margin-top:18px;max-width:360px}
.photo-cab{height:260px;box-shadow:0 20px 40px -20px rgba(6,18,42,.3)}
.carte-geo{height:260px;border-radius:6px;background:
  linear-gradient(90deg,transparent 48%,#fff 48% 50%,transparent 50%) 0 0/70px 70px,
  linear-gradient(0deg,transparent 48%,#fff 48% 50%,transparent 50%) 0 0/90px 90px,
  linear-gradient(135deg,#E8EEE6,#DDE5EC)}
.cabinet .infos{display:grid;gap:12px;font-size:13px;color:var(--encre);align-content:start}
.cabinet .infos div{display:flex;gap:10px}
.cabinet .infos i{color:var(--accent);font-style:normal}

/* 09 rdv */
.rdv{background:var(--fond);padding:0}
.rdv .duo{align-items:stretch;gap:64px}
.rdv .gauche{padding:120px 0}
.rdv .gauche p{font-size:13px;color:var(--encre);margin-top:20px;max-width:330px}
.contacts{display:grid;gap:12px;margin:30px 0;font-size:12px;color:var(--encre)}
.contacts b{font-weight:600}
.form{background:#fff;padding:56px 40px}
.form h3{font-size:16px;font-weight:600}
.form .sous{font-size:12px;color:var(--encre);margin-top:6px;margin-bottom:28px}
.form label{display:block;font-size:11px;color:var(--doux);margin:18px 0 6px}
.form input,.form select{width:100%;height:40px;border:1px solid var(--bord);border-radius:6px;padding:0 12px;font:inherit;font-size:13px;color:var(--encre);background:#fff;transition:border-color .2s}
.form input:focus,.form select:focus{outline:none;border:2px solid var(--accent);padding:0 11px}
.rgpd{display:flex;gap:10px;font-size:12px;color:var(--encre);margin:26px 0 8px;align-items:flex-start}
.rgpd input{width:16px;height:16px;flex:none;margin-top:2px}
.rgpd a{color:var(--accent);font-weight:500}
.form .btn{width:100%;justify-content:center;gap:24px;padding:0 14px}

/* 10 faq */
.faq{background:#fff}
.accordeons{max-width:560px;margin:44px auto 0;display:grid;gap:10px}
.acc{background:linear-gradient(180deg,#fff,#F9FCFF);border-radius:6px;box-shadow:0 10px 30px -12px rgba(6,18,42,.18)}
.acc summary{list-style:none;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:8px;padding:16px 22px;font-size:13px;color:var(--encre);cursor:pointer}
.acc summary::-webkit-details-marker{display:none}
.acc summary .n{color:var(--accent)}
.acc summary::after{content:"+";color:var(--accent);font-size:16px;transition:transform .25s}
.acc[open] summary::after{transform:rotate(45deg)}
.acc p{padding:0 22px 18px 50px;font-size:13px}

/* 11 pied */
footer{background:var(--pied);padding:28px 0;color:#7D8DA3;font-size:10px}
footer .wrap{display:flex;justify-content:space-between;align-items:center;gap:20px}
footer .logo{margin:0}
footer .logo b{color:#fff;font-size:20px}
footer .logo small{color:#9AA8BB}

@media (prefers-reduced-motion:reduce){*{animation:none!important}}

/* responsive */
@media (max-width:900px){
  .hero .wrap-l,.duo,.cabinet-grille,.actes .duo{grid-template-columns:1fr}
  .hero .txt{padding:64px 0 24px}
  .portrait{height:480px}
  .actes .gauche{position:static}
  .grille4{grid-template-columns:repeat(2,1fr)}
  .rdv .gauche{padding:72px 0 0}
  .apropos .txt{padding-bottom:24px}
}
@media (max-width:640px){
  section{padding:72px 0}
  .grille3,.grille4{grid-template-columns:1fr}
  .form{padding:40px 20px}
  footer .wrap{flex-direction:column;text-align:center}
  .pastille{font-size:11px}
  .pastille.p2{left:0!important}
  .btn{gap:12px;padding-left:22px;font-size:13px}
  .btn .long{display:none}
}
```
