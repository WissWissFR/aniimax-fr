// Annuaire des Aniimo par capacité Homeland : qui a quel niveau, du 4 (formes Prismana et Ombrarc) au 1.
// Données dans aniimo-data.js ; les couleurs des capacités viennent d'app.js (une seule définition).
import { ANIIMO, ANIIMO_SOURCE } from './aniimo-data.js';
import { abilityLabel } from './i18n-fr.js';

const JOBS = ['Hauling', 'Artisanship', 'Leisure', 'Perfumery'];
const ELEMENTS = ['Fire', 'Water', 'Grass', 'Lightning', 'Ice', 'Earth', 'Wind', 'Dark', 'Light'];
const escapeHtml = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const normalize = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

let abilityInfo = new Map();
let selected = 'Earth';
let levelFilter = 'all';
let query = '';
let built = false;
// Niveaux 1 et 2 repliés par défaut : en optimisation ils servent rarement.
const openedLow = new Set();

const withAbility = name => ANIIMO.filter(it => it.a[name] != null);
const maxLevel = name => Math.max(0, ...withAbility(name).map(it => it.a[name]));

const chip = (name, level) => {
    const a = abilityInfo.get(name);
    const style = a ? ` style="--ability:${a.color}"` : '';
    return `<span class="ability${a && a.dark ? ' dark' : ''}"${style}>${abilityLabel(name)}${level != null ? ` ${level}` : ''}</span>`;
};

function cardHtml(it) {
    const others = Object.entries(it.a)
        .filter(([k]) => k !== selected)
        .sort((x, y) => y[1] - x[1])
        .map(([k, lv]) => chip(k, lv)).join('');
    const form = it.f ? `<span class="aniimo-dir-form">${escapeHtml(it.f)}</span>` : '';
    return `<li class="aniimo-card">
        <img src="aniimo-icons/${it.i}.webp" alt="" width="44" height="44" loading="lazy" decoding="async">
        <div class="aniimo-card-body">
            <span class="aniimo-dir-name">${escapeHtml(it.n)}</span>${form}
            <span class="aniimo-dir-others">${others}</span>
        </div>
    </li>`;
}

function renderSide() {
    const button = name => {
        const a = abilityInfo.get(name);
        return `<button type="button" class="aniimo-dir-side-btn${name === selected ? ' on' : ''}" data-ability="${name}" style="--ability:${a ? a.color : '#888'}">
            <span class="aniimo-dir-dot"></span><span class="aniimo-dir-side-name">${abilityLabel(name)}</span>
            <span class="aniimo-dir-side-count">${withAbility(name).length}</span>
            <span class="aniimo-dir-side-max" title="Niveau maximum">${maxLevel(name)}</span>
        </button>`;
    };
    document.getElementById('aniimo-dir-side').innerHTML =
        `<h4>Métiers</h4>${JOBS.map(button).join('')}<h4>Éléments</h4>${ELEMENTS.map(button).join('')}`;
}

function renderHead(list) {
    const a = abilityInfo.get(selected);
    const top = maxLevel(selected);
    document.getElementById('aniimo-dir-head').innerHTML = `
        <div>${chip(selected)} <span class="hint small">${a ? escapeHtml(a.about) : ''}</span></div>
        <div class="hint small">${withAbility(selected).length} Aniimo · niveau maximum ${top}</div>`;
    const counts = [4, 3, 2, 1].map(l => [l, withAbility(selected).filter(it => it.a[selected] === l).length]);
    document.getElementById('aniimo-dir-levels').innerHTML = [['all', `Tous <b>${withAbility(selected).length}</b>`]]
        .concat(counts.filter(([, n]) => n > 0).map(([l, n]) => [String(l), `Niveau ${l} <b>${n}</b>`]))
        .map(([v, label]) => `<button type="button" class="aniimo-dir-pill${String(levelFilter) === v ? ' on' : ''}" data-level="${v}">${label}</button>`).join('');
}

function render() {
    renderSide();
    const body = document.getElementById('aniimo-dir-results');
    const q = normalize(query.trim());
    const pool = withAbility(selected);
    if (levelFilter !== 'all' && !pool.some(it => String(it.a[selected]) === String(levelFilter))) levelFilter = 'all';
    renderHead(pool);
    const matches = pool.filter(it => (levelFilter === 'all' || String(it.a[selected]) === String(levelFilter))
        && (!q || normalize(`${it.n} ${it.en} ${it.f || ''}`).includes(q)));
    if (!matches.length) {
        body.innerHTML = '<p class="hint">Aucun Aniimo ne correspond.</p>';
        return;
    }
    body.innerHTML = [4, 3, 2, 1].map(level => {
        const list = matches.filter(it => it.a[selected] === level);
        if (!list.length) return '';
        const heading = `Niveau ${level}<span class="aniimo-dir-level-count">${list.length}</span>`;
        const cards = `<ul class="aniimo-dir-list">${list.map(cardHtml).join('')}</ul>`;
        // Replié seulement dans la vue « Tous » sans recherche ; filtrer sur un niveau ou chercher le déplie.
        if (level <= 2 && levelFilter === 'all' && !q) {
            return `<details class="aniimo-dir-level aniimo-dir-fold level-${level}" data-level="${level}"${openedLow.has(level) ? ' open' : ''}>
                <summary>${heading}</summary>${cards}</details>`;
        }
        return `<section class="aniimo-dir-level level-${level}"><h3>${heading}</h3>${cards}</section>`;
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
                <p class="hint">Quels Aniimo travaillent au Homeland, avec quelle capacité et à quel niveau. Choisissez une capacité à gauche : les meilleurs niveaux s'affichent en premier. Le niveau 4 n'existe que sur quelques formes rares (surtout les formes Prismana).</p>
                <details class="explain">
                    <summary>Comment obtenir une forme Prismana ?</summary>
                    <p>D'après wikily.gg (noms exacts à vérifier en jeu) : les Aniimo Prismana n'apparaissent que pendant un « flux » Prismana dans une région, possible une fois le niveau 6 de la Branche atteint ; l'énergie prismatique de la région monte avec les vagues sauvages et chaque palier augmente la chance de déclencher un flux (palier 6 : garanti). Une Pierre Prismana transmet à 100 % la forme Prismana d'un parent à l'élevage, et l'Œuf de prière peut faire éclore un Aniimo Prismana mis en avant.</p>
                </details>
                <div class="aniimo-dir">
                    <nav class="aniimo-dir-side" id="aniimo-dir-side" aria-label="Capacités"></nav>
                    <div class="aniimo-dir-main">
                        <div class="aniimo-dir-head" id="aniimo-dir-head"></div>
                        <div class="aniimo-dir-toolbar">
                            <input type="text" id="aniimo-dir-search" placeholder="Chercher un Aniimo (nom français ou anglais)" autocomplete="off" aria-label="Chercher un Aniimo">
                            <div class="aniimo-dir-levels" id="aniimo-dir-levels"></div>
                        </div>
                        <div id="aniimo-dir-results"></div>
                    </div>
                </div>
                <p class="hint small">Capacités et noms français : <a href="${ANIIMO_SOURCE.url}" target="_blank" rel="noopener">${ANIIMO_SOURCE.name}</a>, relevés le ${ANIIMO_SOURCE.date}. Un Aniimo dont plusieurs formes ont les mêmes capacités n'est listé qu'une fois. Illustrations © FunPlus / Pawprint Studio.</p>
            </div>
        </div>`;
    document.body.appendChild(modal);
    modal.addEventListener('click', e => { if (e.target === modal) window.closeAniimo(); });
    modal.querySelector('.close-button').addEventListener('click', () => window.closeAniimo());
    modal.querySelector('#aniimo-dir-side').addEventListener('click', e => {
        const btn = e.target.closest('[data-ability]');
        if (!btn) return;
        selected = btn.dataset.ability;
        levelFilter = 'all';
        render();
        document.getElementById('aniimo-dir-results').scrollIntoView({ block: 'nearest' });
    });
    modal.querySelector('#aniimo-dir-levels').addEventListener('click', e => {
        const btn = e.target.closest('[data-level]');
        if (!btn) return;
        levelFilter = btn.dataset.level;
        render();
    });
    // `toggle` ne remonte pas : écoute en capture pour retenir quels niveaux bas sont dépliés.
    modal.addEventListener('toggle', e => {
        const level = Number(e.target.dataset?.level);
        if (!e.target.classList?.contains('aniimo-dir-fold') || !level) return;
        if (e.target.open) openedLow.add(level); else openedLow.delete(level);
    }, true);
    modal.querySelector('#aniimo-dir-search').addEventListener('input', e => { query = e.target.value; render(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') window.closeAniimo(); });
    built = true;
}

export function initAniimoDirectory(abilities) {
    abilityInfo = new Map(abilities.map(a => [a.name, a]));
    window.showAniimo = function() {
        if (!built) build();
        render();
        document.getElementById('aniimoModal').classList.add('show');
    };
    window.closeAniimo = function() {
        document.getElementById('aniimoModal')?.classList.remove('show');
    };
}
