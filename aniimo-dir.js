// Annuaire des Aniimo par capacité Homeland : qui a quel niveau, du 4 (formes Prismana et Ombrarc) au 1.
// Données dans aniimo-data.js ; les couleurs des capacités viennent d'app.js (une seule définition).
import { ANIIMO, ANIIMO_SOURCE } from './aniimo-data.js';
import { abilityLabel } from './i18n-fr.js';

const ORDER = ['Fire', 'Water', 'Grass', 'Lightning', 'Ice', 'Earth', 'Wind', 'Dark', 'Light', 'Hauling', 'Artisanship', 'Leisure', 'Perfumery'];
const escapeHtml = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const normalize = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

let abilityInfo = new Map();
let selected = 'Earth';
let query = '';
let built = false;

const chip = (name, level) => {
    const a = abilityInfo.get(name);
    const style = a ? ` style="--ability:${a.color}"` : '';
    return `<span class="ability${a && a.dark ? ' dark' : ''}"${style}>${abilityLabel(name)}${level != null ? ` ${level}` : ''}</span>`;
};

function entryHtml(it) {
    const others = Object.entries(it.a)
        .filter(([k]) => k !== selected)
        .sort((x, y) => y[1] - x[1])
        .map(([k, lv]) => chip(k, lv)).join(' ');
    const form = it.f ? `<span class="aniimo-dir-form">${escapeHtml(it.f)}</span>` : '';
    return `<li><span class="aniimo-dir-name">${escapeHtml(it.n)}</span>${form}<span class="aniimo-dir-others">${others}</span></li>`;
}

function render() {
    const body = document.getElementById('aniimo-dir-results');
    const q = normalize(query.trim());
    const matches = ANIIMO.filter(it => it.a[selected] != null && (!q || normalize(it.n + ' ' + it.en + ' ' + (it.f || '')).includes(q)));
    if (!matches.length) {
        body.innerHTML = '<p class="hint">Aucun Aniimo ne correspond.</p>';
        return;
    }
    const html = [4, 3, 2, 1].map(level => {
        const list = matches.filter(it => it.a[selected] === level);
        if (!list.length) return '';
        const title = `<h3>Niveau ${level} <span class="hint small">${list.length} Aniimo</span></h3>`;
        const items = `<ul class="aniimo-dir-list">${list.map(entryHtml).join('')}</ul>`;
        return level >= 3
            ? `<section class="aniimo-dir-level">${title}${items}</section>`
            : `<details class="explain aniimo-dir-level"${q ? ' open' : ''}><summary>Niveau ${level} <span class="hint small">${list.length} Aniimo</span></summary>${items}</details>`;
    }).join('');
    body.innerHTML = html;
}

function renderChips() {
    document.getElementById('aniimo-dir-abilities').innerHTML = ORDER.map(name => {
        const a = abilityInfo.get(name);
        const count = ANIIMO.filter(it => it.a[name] != null).length;
        const top = Math.max(0, ...ANIIMO.map(it => it.a[name] || 0));
        const color = a ? a.color : '#888';
        return `<button type="button" class="aniimo-dir-chip${name === selected ? ' on' : ''}" data-ability="${name}" style="--ability:${color}" title="${abilityInfo.get(name)?.about || ''}">${abilityLabel(name)}<span class="aniimo-dir-count">${count} · max ${top}</span></button>`;
    }).join('');
}

function build() {
    const modal = document.createElement('div');
    modal.id = 'aniimoModal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content wide">
            <div class="modal-header">
                <h2>Annuaire des Aniimo</h2>
                <button class="close-button" type="button" aria-label="Fermer">&times;</button>
            </div>
            <div class="modal-body">
                <p class="hint">Quel Aniimo travaille au Homeland, avec quelle capacité et à quel niveau. Choisissez une capacité pour voir qui l'a, du meilleur niveau au plus faible. Le niveau 4 n'existe que sur quelques formes rares (surtout les formes Prismana).</p>
                <details class="explain">
                    <summary>Comment obtenir une forme Prismana ?</summary>
                    <p>D'après wikily.gg (noms exacts à vérifier en jeu) : les Aniimo Prismana n'apparaissent que pendant un « flux » Prismana dans une région, possible une fois le niveau 6 de la Branche atteint ; l'énergie prismatique de la région monte avec les vagues sauvages et chaque palier augmente la chance de déclencher un flux (palier 6 : garanti). Une Pierre Prismana transmet à 100 % la forme Prismana d'un parent à l'élevage, et l'Œuf de prière peut faire éclore un Aniimo Prismana mis en avant.</p>
                </details>
                <div class="aniimo-dir-abilities" id="aniimo-dir-abilities"></div>
                <div class="skip-add">
                    <input type="text" id="aniimo-dir-search" placeholder="Chercher un Aniimo (nom français ou anglais)" autocomplete="off" aria-label="Chercher un Aniimo">
                </div>
                <div id="aniimo-dir-results"></div>
                <p class="hint small">Données : <a href="${ANIIMO_SOURCE.url}" target="_blank" rel="noopener">${ANIIMO_SOURCE.name}</a>, relevées le ${ANIIMO_SOURCE.date}. Les noms français des Aniimo viennent de cette même source ; un Aniimo avec plusieurs formes identiques n'est listé qu'une fois.</p>
            </div>
        </div>`;
    document.body.appendChild(modal);
    modal.addEventListener('click', e => { if (e.target === modal) window.closeAniimo(); });
    modal.querySelector('.close-button').addEventListener('click', () => window.closeAniimo());
    document.getElementById('aniimo-dir-abilities').addEventListener('click', e => {
        const btn = e.target.closest('[data-ability]');
        if (!btn) return;
        selected = btn.dataset.ability;
        renderChips();
        render();
    });
    document.getElementById('aniimo-dir-search').addEventListener('input', e => { query = e.target.value; render(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') window.closeAniimo(); });
    built = true;
}

export function initAniimoDirectory(abilities) {
    abilityInfo = new Map(abilities.map(a => [a.name, a]));
    window.showAniimo = function() {
        if (!built) build();
        renderChips();
        render();
        document.getElementById('aniimoModal').classList.add('show');
    };
    window.closeAniimo = function() {
        document.getElementById('aniimoModal')?.classList.remove('show');
    };
}
