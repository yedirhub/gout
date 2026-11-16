// flottant.js : ouvre et ferme le menu du bouton flottant (Ruben, 16/11/2026 15:53).
// Un clic ouvre, un clic referme ; Échap ferme et rend la main au bouton ; un clic ailleurs ferme ; aria-expanded suit.
(() => {
  const racine = document.getElementById('pf-flottant');
  if (!racine) return;
  const bouton = racine.querySelector('.pf-f-bouton'), menu = racine.querySelector('.pf-f-menu');
  const liens = () => [...menu.querySelectorAll('a')];
  const ouvrir = () => { menu.hidden = false; bouton.setAttribute('aria-expanded', 'true'); };
  const fermer = (rendre) => { menu.hidden = true; bouton.setAttribute('aria-expanded', 'false'); if (rendre) bouton.focus(); };
  bouton.addEventListener('click', () => (menu.hidden ? ouvrir() : fermer(false)));
  document.addEventListener('keydown', (e) => {
    if (menu.hidden) return;
    if (e.key === 'Escape') { e.preventDefault(); fermer(true); return; }
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {  // flèches : de lien en lien
      const l = liens(), i = l.indexOf(document.activeElement);
      e.preventDefault();
      l[(i + (e.key === 'ArrowDown' ? 1 : -1) + l.length) % l.length].focus();
    }
  });
  document.addEventListener('click', (e) => { if (!menu.hidden && !racine.contains(e.target)) fermer(false); });
  racine.addEventListener('focusout', (e) => { if (!menu.hidden && e.relatedTarget && !racine.contains(e.relatedTarget)) fermer(false); });
})();
