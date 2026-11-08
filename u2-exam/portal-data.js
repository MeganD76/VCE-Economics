/* =====================================================================
   Year 11 VCE Economics exam portal: shared data spine
   Every tool in /u2-exam/ reads from this file. Nothing else should hold
   its own copy of the key knowledge list, the codes or the code word.
   Modelled on /exam/portal-data.js (Year 12).
   ===================================================================== */

/* Storage namespace. MUST differ from Year 12 ('econ2026:'). Both portals
   live on the same GitHub Pages origin, so they share browser storage. */
const NS = 'econ11u2-2026:';

const clean = s => (s || '').toLowerCase().replace(/\s+/g, '');
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

const MEM = {};
const Store = {
  async get(k) {
    try { if (window.storage) { const r = await window.storage.get(NS + k); return r ? r.value : null; } } catch (e) {}
    try { const v = localStorage.getItem(NS + k); if (v !== null) return v; } catch (e) {}
    return MEM[NS + k] || null;
  },
  async set(k, v) {
    try { if (window.storage) { await window.storage.set(NS + k, v); return; } } catch (e) {}
    try { localStorage.setItem(NS + k, v); return; } catch (e) {}
    MEM[NS + k] = v;
  }
};

/* Portal settings live under keys starting with '@' so they can never
   collide with a student record, stored at econ11u2-2026:<code word>. */
const SETTINGS_CW = '@cw';

/* ---------------------------------------------------------------------
   THE STUDENT RECORD: one object per student, at econ11u2-2026:<cw>

     { v:1, cw,
       pr:[ ...practice rows... ],      // every tool appends here
       e:{ assessId:{ q:{qid:{got,max,codes:[]}}, cond:{}, ts } },  // tracker
       pred:'A'|'B'|'C'|null,          // tracker: where they think marks went
       plan:[ code, code, code ] }      // tracker: current three priorities

   A practice row:
     { t:'mc'|'pt'|'as'|'def'|'rtq',   // which tool wrote it
       q:'m12',                         // item id within that tool
       kk:'2.1.4',                      // study design code
       ok:true, got:2, max:3, pred:2,   // what each tool knows
       conf:'sure', code:'C1', ts }

   Rules:
   - ALWAYS read-modify-write the whole object (Record.update).
   - Touch only your own rows and fields.
   --------------------------------------------------------------------- */
const Record = {
  async load(cw) {
    try { const raw = await Store.get(cw); const o = raw ? JSON.parse(raw) : null; return o && typeof o === 'object' ? o : { v: 1, cw }; }
    catch (e) { return { v: 1, cw }; }
  },
  async update(cw, fn) {                        // fn mutates the freshly loaded record
    const S = await Record.load(cw);
    S.pr = S.pr || [];
    fn(S);
    await Store.set(cw, JSON.stringify(S));
    Sync.soon(S);                               // tell the teacher view (counts only)
    return S;
  },
  async push(cw, rows) { return Record.update(cw, S => rows.forEach(r => S.pr.push(r))); },
  async rows(cw, type) { const S = await Record.load(cw); const a = S.pr || []; return type ? a.filter(r => r.t === type) : a; }
};

/* Code word: from ?cw= (set by the portal), else the saved one. */
async function getCW() {
  const u = clean(new URLSearchParams(location.search).get('cw'));
  if (u.length >= 3) { await Store.set(SETTINGS_CW, u); return u; }
  const s = await Store.get(SETTINGS_CW);
  return s && s.length >= 3 ? s : null;
}
function homeLink(cw) { return 'index.html' + (cw ? '?cw=' + encodeURIComponent(cw) : ''); }
function toolLink(file, cw, extra) { return file + '?cw=' + encodeURIComponent(cw) + (extra ? '&' + extra : ''); }

/* ---------------------------------------------------------------------
   Retrieval schedule, shared by every tool (same as Year 12).
     missed once   → 6 days
     missed twice+ → 3 days
     right after a miss → one confirmation at 12 days, then retired
     right first time   → not scheduled again
   Definitions use the shorter booklet rhythm: 2 days, then 5.
   --------------------------------------------------------------------- */
const DAY = 86400000;
function dueIn(h) {
  const last = h[h.length - 1];
  if (last.ok) {
    const missed = h.some(r => !r.ok);
    return missed && h.filter(r => r.ok).length < 2 ? 12 * DAY : null;
  }
  return h.filter(r => !r.ok).length >= 2 ? 3 * DAY : 6 * DAY;
}
function dueInDef(h) {
  const last = h[h.length - 1];
  if (last.ok) {
    const missed = h.some(r => !r.ok);
    return missed && h.filter(r => r.ok).length < 2 ? 5 * DAY : null;
  }
  return 2 * DAY;
}
const isDue = (h, now = Date.now(), fn = dueIn) => { const g = fn(h); return g !== null && (now - h[h.length - 1].ts) >= g; };
const nextDue = (h, fn = dueIn) => { const g = fn(h); return g === null ? null : h[h.length - 1].ts + g; };
function historyBy(rows) { const m = {}; rows.forEach(r => { (m[r.q] = m[r.q] || []).push(r); }); Object.values(m).forEach(a => a.sort((x, y) => x.ts - y.ts)); return m; }
function whenText(ts) {
  const d = Math.ceil((ts - Date.now()) / DAY);
  return d <= 0 ? 'today' : d === 1 ? 'tomorrow' : `in ${d} days`;
}

/* ---------------------------------------------------------------------
   Key knowledge, Unit 2, in STUDY DESIGN order (VCE Economics Study
   Design 2023, v1.1). Codes are permanent: never renumber them to match
   the teaching sequence.
   AOS2 key knowledge is the same five points for each issue, so the
   issue is part of the code: 2.2T.n = international trade,
   2.2L.n = the changing labour market.
   --------------------------------------------------------------------- */
const KK = {
  '2.1.1': 'Purpose of economic activity; material and non-material living standards',
  '2.1.2': 'The five-sector circular flow model',
  '2.1.3': 'The business cycle and economic indicators',
  '2.1.4': 'Aggregate demand and the factors affecting it',
  '2.1.5': 'Aggregate supply and the factors affecting it; productive capacity',
  '2.1.6': 'Measuring economic growth with real GDP',
  '2.1.7': 'Benefits of economic growth',
  '2.1.8': 'Costs of economic growth',
  '2.1.9': 'Limitations of real GDP and real GDP per capita',
  '2.1.10': 'Alternative measures of living standards',
  '2.2T.1': 'Trade: definition and measurement (balance of payments, trade and financial flows)',
  '2.2T.2': 'Trade: why it matters (specialisation and comparative advantage)',
  '2.2T.3': 'Trade: factors (exchange rates, technology, trade tensions)',
  '2.2T.4': 'Trade: perspectives of households, business and government',
  '2.2T.5': 'Trade: responses (liberalisation, trade agreements, protection)',
  '2.2L.1': 'Labour market: definition and measures (rates, types of unemployment)',
  '2.2L.2': 'Labour market: why it matters',
  '2.2L.3': 'Labour market: factors (AD, technology, demographics, migration)',
  '2.2L.4': 'Labour market: perspectives of workers, business and government',
  '2.2L.5': 'Labour market: responses (training, childcare, minimum wage, migration)'
};
const kkArea = code => code.startsWith('2.1') ? 'aos1' : code.startsWith('2.2T') ? 'trade' : 'labour';
const AREAS = { aos1: 'Economic activity (AOS1)', trade: 'International trade', labour: 'The changing labour market' };

/* Content tools that already exist on the class site, by area. The
   tracker sends a content gap (B codes) here. */
const CONTENT = {
  aos1: { name: 'U2 AOS1 Revision (Escape the Recession)', href: '../u2-aos1-revision.html' },
  trade: { name: 'International Trade lesson tasks', href: '../U2-AOS2-International-Trade.html' },
  labour: { name: 'Changing Labour Market lesson tasks', href: '../U2-AOS2-Labour-Market.html' }
};

/* ---------------------------------------------------------------------
   Why marks were lost. Same codes as Year 12 so the language carries
   into Units 3–4. f = family. mc = multiple choice only.
   --------------------------------------------------------------------- */
const FAMILY = {
  A: { n: 'Reading the question', d: 'You knew it, but answered a different question.', c: '#B4530E' },
  B: { n: 'Knowing the content', d: 'The economics was missing or wrong. Revise it, don’t just rewrite it.', c: '#6B2D7B' },
  C: { n: 'Building the answer', d: 'You knew it, but it didn’t reach the page in a form I can mark.', c: '#12447E' }
};
const CODES = {
  M1: { n: 'Didn’t know it', f: 'B', mc: 1 },
  M2: { n: 'Down to two', f: 'B', mc: 1 },
  M3: { n: 'Misread the question', f: 'A', mc: 1 },
  M4: { n: 'Calculation slip', f: 'C', mc: 1 },
  A1: { n: 'Wrong task word', f: 'A' },
  A2: { n: 'Half the question', f: 'A' },
  A3: { n: 'Wrong direction or time period', f: 'A' },
  A4: { n: 'Ignored the data', f: 'A' },
  A6: { n: 'Off the question', f: 'A' },
  B1: { n: 'Definition missing or incomplete', f: 'B' },
  B2: { n: 'Wrong term or factor', f: 'B' },
  B3: { n: 'Chain runs the wrong way', f: 'B' },
  B4: { n: 'Half the concept', f: 'B' },
  B5: { n: 'Not study design language', f: 'B' },
  C1: { n: 'Chain stops short', f: 'C' },
  C2: { n: 'No landing', f: 'C' },
  C3: { n: 'Jumped a step', f: 'C' },
  C5: { n: 'No data', f: 'C' },
  C7: { n: 'No example', f: 'C' },
  C8: { n: 'Not enough for the marks', f: 'C' },
  C11: { n: 'Two halves not joined', f: 'C' }
};
/* One-line explanations shown in the code pickers. */
const CODE_HELP = {
  M1: 'I had no real basis for my choice.',
  M2: 'I got it down to two and picked the wrong one.',
  M3: 'I knew it but misread a NOT, a direction or a number.',
  M4: 'Right method, wrong number.',
  A1: 'The question said distinguish, evaluate or describe, and I did something else (usually just explained).',
  A2: 'The question asked for two things and I only did one.',
  A3: 'I described the wrong years, or wrote about a decrease when it asked about an increase.',
  A4: 'There was data and I didn’t use it.',
  A6: 'I wrote about things the question didn’t ask for.',
  B1: 'I didn’t define a key term, or my definition was missing a part (real, volume, per capita…).',
  B2: 'I mixed up two terms (disposable/discretionary, AD/AS, leading/lagging…).',
  B3: 'One of my arrows points the wrong way.',
  B4: 'I only knew part of the concept.',
  B5: 'I used an everyday word instead of the economics term (amount instead of volume, demand instead of aggregate demand).',
  C1: 'My chain stopped before the end, e.g. at AD instead of economic growth.',
  C2: 'I didn’t finish on the thing the question asked about (growth, living standards, the agent named).',
  C3: 'I jumped from cause to effect without the middle step.',
  C5: 'I didn’t put a figure, unit or date in.',
  C7: 'I was generic where I needed a named example.',
  C8: 'I wrote one point for a three-mark question.',
  C11: 'I explained both parts but never linked them.'
};

/* The drill for each code: short, doable, specific. `go` routes to a
   tool in this portal; `content` routes to the class content tool. */
const TASKS = {
  M1: { n: 'Blank page', t: '5 min', d: 'Write the definition or idea behind the question from memory. Check it. Note only what was missing.', go: 'definitions.html' },
  M2: { n: 'Confusion pairs', t: '10 min', d: 'Name the two options you were stuck between. Write one sentence that separates them, then one sentence using each correctly.' },
  M3: { n: 'Stem check', t: '5 min', d: 'Take ten multiple choice stems. Underline every NOT, MOST LIKELY, increase/decrease word before you read the options.', go: 'mc-practice.html' },
  M4: { n: 'Calculation run', t: '10 min', d: 'Redo it slowly with every step written: formula, numbers, answer, unit. Then do two more of the same type.', go: 'mc-practice.html', extra: 'set=calc' },
  A1: { n: 'Task word sort', t: '10 min', d: 'For each question write only the task word and the shape of answer it needs. Don’t answer them.', go: 'read-the-question.html' },
  A2: { n: 'Two-part audit', t: '10 min', d: 'Number the parts of each question in the margin before you write anything. Two things asked, two things written.', go: 'read-the-question.html' },
  A3: { n: 'Arrow check', t: '5 min', d: 'Underline every direction word and date in the question. Check every sentence of your answer runs the same way and stays in the window.', go: 'read-the-question.html' },
  A4: { n: 'Stimulus insert', t: '5 min', d: 'Take an answer where you ignored the data. Add one figure, with its unit and date, to the point it supports.', go: 'practice.html', extra: 'type=data' },
  A6: { n: 'Scope prune', t: '10 min', d: 'Cross out everything in one of your answers that doesn’t answer the task word. Check it would still get the same mark.' },
  B1: { n: 'Blank page definitions', t: '5 min', d: 'Write the definition from memory, check it, and note only the part you dropped. It comes back in 2 days, then 5.', go: 'definitions.html' },
  B2: { n: 'Confusion pairs', t: '10 min', d: 'Take the pair you mix up. Write one sentence that separates them, then one sentence using each correctly.', go: 'definitions.html' },
  B3: { n: 'Skeleton drill', t: '90 sec', d: 'Write the chain as arrows only, no sentences. Check each arrow points the way the theory says.', content: true },
  B4: { n: 'Component list', t: '5 min', d: 'List every part of the concept from memory: all five sectors, all the costs of growth, every type of unemployment. Check for gaps.', content: true },
  B5: { n: 'Term swap', t: '5 min', d: 'Find where you used an everyday word. Write the study design term next to it. Keep a running list.', go: 'definitions.html' },
  C1: { n: 'Skeleton drill', t: '90 sec', d: 'Write your answer as arrows only and count the links against the guide. The missing link is usually the second-last one. Daily for a week.', go: 'practice.html', extra: 'type=chain' },
  C2: { n: 'Landing drill', t: '5 min', d: 'Take three answers. Rewrite only the last sentence so it lands on exactly what the question asked: economic growth, material living standards, or the agent named.', go: 'practice.html', extra: 'type=chain' },
  C3: { n: 'Insert the middle', t: '10 min', d: 'Find where you jumped from cause to effect. Write the missing sentence: what happens, to whom, and which component moves.', go: 'practice.html', extra: 'type=chain' },
  C5: { n: 'Stimulus insert', t: '5 min', d: 'Add one figure with its unit and date to the point it supports. If the question gave you data, use theirs.', go: 'practice.html', extra: 'type=data' },
  C7: { n: 'Name it', t: '5 min', d: 'Replace every generic reference with a specific one. “A government policy” becomes Fee-Free TAFE or the China–Australia FTA.' },
  C8: { n: 'Mark match', t: '5 min', d: 'Count the marks, count your separate points, compare. Do it for five answers and your pattern shows.', go: 'practice.html' },
  C11: { n: 'Join the halves', t: '5 min', d: 'Find the two parts you explained separately. Write one sentence that starts “Because both…” or “As X rises…” and says what that means.', go: 'practice.html', extra: 'type=twopart' }
};

/* Question types: labels students see in the tracker and the practice bank. */
const QTYPES = {
  define: 'Definitions',
  distinguish: 'Distinguish',
  trends: 'Describing trends',
  data: 'Calculations and using data',
  chain: 'Explain a chain',
  twopart: 'Two-part questions',
  agents: 'Impact on agents and perspectives',
  diagram: 'Labour market diagrams',
  evaluate: 'Evaluate',
  mc: 'Multiple choice'
};

/* Tools: add a line here to add a card to the portal. */
const TOOLS = [
  { id: 'marks', name: 'Where your marks went', file: 'marks-tracker.html',
    blurb: 'Enter your SAC and practice exam marks question by question, then see where they actually went and get three things to work on first.' },
  { id: 'types', name: 'Practice by question type', file: 'practice.html',
    blurb: 'Questions grouped by type, with a marking guide, my tips and a sample answer. Includes marking someone else’s answer.' },
  { id: 'mc', name: 'Multiple choice practice', file: 'mc-practice.html',
    blurb: 'New multiple choice questions with why the trap answer is tempting. Brings back the ones you miss until they stick.' },
  { id: 'rtq', name: 'Read the question', file: 'read-the-question.html',
    blurb: 'Two-minute drills: find the task word and count the parts before you answer anything. This is where most marks go.' },
  { id: 'defs', name: 'Blank page definitions', file: 'definitions.html',
    blurb: 'Write key definitions from memory and check what you dropped. Missed ones come back in 2 days, then 5.' }
];

/* Backup: lets a student move their record between home and school. */
function exportCode(S) { return 'ECON11U2:' + btoa(unescape(encodeURIComponent(JSON.stringify(S)))); }
function importCode(t) { const s = String(t).trim().replace(/^ECON11U2:/, ''); return JSON.parse(decodeURIComponent(escape(atob(s)))); }

/* Shuffle (used for MC option order). */
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

/* Header used by every tool page. */
async function mountHeader(title) {
  const cw = await getCW();
  const h = document.getElementById('hdr');
  if (h) h.innerHTML = `<a class="back" href="${homeLink(cw)}">← Exam portal</a><h1>${esc(title)}</h1>
    <div class="who">${cw ? `Code word <b>${esc(cw)}</b> · <a href="index.html?switch=1">not you?</a>` : `<a href="index.html">Set your code word</a>`}</div>`;
  return cw;
}

/* ---------------------------------------------------------------------
   TEACHER VIEW SYNC
   Uses the same "vce-results" Cloudflare Worker as the Year 11 Trade and
   Labour Market hubs. Sends how much the student has done and their
   results (marks and scores), never what they wrote and never the code
   word. One record per student, always the complete summary.
   --------------------------------------------------------------------- */
const RESULTS_URL = 'https://vce-results.megan-dyring.workers.dev';
const HUB_ID = 'u2ex26';  // must differ from it26, lm26, u2aos1, the Year 12 hubs and any Unit 1 portal
// Year 11 roll (same list as the Trade and Labour Market hubs). Edit here only.
const ROLL = ["Angelyn","Bisman","Shun","Riley","Nathan","Tina","Serina","Cornelius","Solomon","Leo","Felix","Lisa"];
const slugify = s => String(s).trim().toLowerCase().replace(/[^a-z0-9_]+/g, '_').slice(0, 60);
const dayKey = t => { const d = new Date(t); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };

function summarise(S) {
  const pr = S.pr || [], E = S.e || {};
  const times = pr.map(r => r.ts).concat(Object.values(E).map(e => e.ts)).filter(Boolean);
  // first and latest attempt at each item, per tool
  const per = t => Object.values(historyBy(pr.filter(r => r.t === t))).map(h => ({ first: h[0], last: h[h.length - 1] }));
  const sum = (a, f) => a.reduce((s, x) => s + f(x), 0);
  const pt = per('pt'), mc = per('mc'), df = per('def'), rq = per('rtq'), as = per('as');
  const byType = {};
  pt.forEach(x => { const b = byType[x.last.type || 'other'] = byType[x.last.type || 'other'] || { got: 0, max: 0, n: 0 };
    b.got += x.last.got || 0; b.max += x.last.max || 0; b.n++; });
  // SAC / practice exam marks entered in Where your marks went, and why marks were lost
  const marks = {}, fam = { A: 0, B: 0, C: 0 };
  Object.entries(E).forEach(([id, e]) => {
    let got = 0, max = 0, n = 0;
    Object.values(e.q || {}).forEach(v => {
      got += v.got || 0; max += v.max || 0; n++;
      const L = (v.max || 0) - (v.got || 0);
      if (L > 0 && v.codes && v.codes.length) { const w = v.codes.length === 1 ? [1] : [0.6, 0.4];
        v.codes.forEach((c, k) => { if (CODES[c]) fam[CODES[c].f] += L * w[k]; }); }
    });
    marks[id] = { got, max, n };
  });
  Object.keys(fam).forEach(k => { fam[k] = Math.round(fam[k] * 10) / 10; });
  return {
    pt: { n: pt.length, got: sum(pt, x => x.last.got || 0), max: sum(pt, x => x.last.max || 0), byType },
    mc: { n: mc.length, first: sum(mc, x => x.first.right ? 1 : 0), now: sum(mc, x => x.last.right ? 1 : 0) },
    def: { n: df.length, full: sum(df, x => x.last.ok ? 1 : 0) },
    rtq: { n: rq.length, ok: sum(rq, x => x.last.ok ? 1 : 0) },
    as: { n: as.length, agreed: sum(as, x => x.last.ok ? 1 : 0) },
    marks, fam, plan: S.plan || [],
    last: times.length ? Math.max(...times) : null,
    updated: new Date().toISOString()
  };
}

const Sync = {
  t: null, pending: null,
  soon(S) { if (!S || !S.name || !RESULTS_URL) return; this.pending = S; clearTimeout(this.t); this.t = setTimeout(() => this.flush(), 1200); },
  flush() {
    const S = this.pending; this.pending = null; clearTimeout(this.t);
    if (!S) return;
    try {
      fetch(RESULTS_URL, { method: 'POST', keepalive: true, headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ hub: HUB_ID, name: S.name, slug: slugify(S.name), lesson: 'portal', progress: summarise(S) }) })
        .catch(() => {});                       // offline: the next save sends the full summary again
    } catch (e) {}
  }
};
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') Sync.flush(); });
window.addEventListener('pagehide', () => Sync.flush());

/* Keyboard access: the tap-to-choose chips are spans, so give each one a tab
   stop and button role, and let Enter or Space choose it. */
(function () {
  const prep = () => document.querySelectorAll('.chip:not([tabindex])').forEach(c => { c.tabIndex = 0; c.setAttribute('role', 'button'); });
  document.addEventListener('keydown', e => {
    const t = e.target;
    if (t && t.classList && t.classList.contains('chip') && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); t.click(); }
  });
  const start = () => { prep(); new MutationObserver(prep).observe(document.body, { childList: true, subtree: true }); };
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
})();
