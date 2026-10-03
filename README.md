# aniimax-fr

Traduction française **non officielle** de [aniimax](https://github.com/ae-bii/aniimax)
([site d'origine](https://ae-bii.github.io/aniimax/)), l'optimiseur de production du Homeland du jeu Aniimo.

Le moteur (solveur Rust/WASM + HiGHS) est celui d'origine, inchangé : seuls l'interface, les textes,
les noms d'items et les noms de bâtiments sont traduits. Les noms d'items viennent du
[wiki FR](https://aniimowiki.fr/) quand ils y figurent, sinon ce sont des traductions à vérifier en jeu.
Les noms de bâtiments sont des traductions libres (le client semble les laisser en anglais) :
mettre `TRANSLATE_FACILITY_NAMES = false` dans `i18n-fr.js` pour retrouver les noms anglais.

## Lancer en local

Les workers WASM ne marchent pas en `file://` : lancer `lancer.bat` (ou `python -m http.server 8123`)
puis ouvrir <http://localhost:8123/>.

## Structure

- `i18n-fr.js` : noms d'items/métiers/personnalités + traducteur des messages renvoyés par le WASM.
- `app.js`, `index.html`, `facility-config.js`, `worker.js` : textes traduits.
- `pkg/`, `vendor/highs/`, `layout*.js`, `style.css` : repris tels quels d'aniimax.

## Licence

MIT, © aebii pour aniimax (voir `LICENSE`). Cette traduction conserve la même licence.
Projet de fans, non affilié aux créateurs d'Aniimo.
