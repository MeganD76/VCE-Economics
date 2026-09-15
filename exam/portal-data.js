/* =====================================================================
   VCE Economics exam portal — shared data spine
   Every tool in the portal reads from this file. Nothing else should
   hold its own copy of the key knowledge list or the code word.
   ===================================================================== */

const NS = 'econ2026:';          // storage namespace — bump the year each cohort

/* ---------------------------------------------------------------------
   Identity: one code word, set once at the portal, passed to every tool
   as ?cw= so no tool has to ask again.
   --------------------------------------------------------------------- */

const clean = s => (s || '').toLowerCase().replace(/\s+/g, '');

const Store = {
  async get(k) {
    try { if (window.storage) { const r = await window.storage.get(NS + k); return r ? r.value : null; } } catch (e) {}
    try { return localStorage.getItem(NS + k); } catch (e) {}
    return null;
  },
  async set(k, v) {
    try { if (window.storage) { await window.storage.set(NS + k, v); return; } } catch (e) {}
    try { localStorage.setItem(NS + k, v); return; } catch (e) {}
  }
};

/* Portal settings live under keys starting with '@' so they can never
   collide with a student record, which is stored at econ2026:<code word>. */
const SETTINGS_CW = '@cw';

/* ---------------------------------------------------------------------
   THE STUDENT RECORD — read this before building any new tool.

   Every tool reads and writes ONE object per student, at econ2026:<cw>:

     { v:1, cw, pr:[ ...practice rows... ] }

   A practice row, as written by the multiple choice tool:

     { t:'mc',                    // which tool wrote it
       set:'vcaa2023', q:7,       // where the question came from
       kk:'4.1.17',               // STUDY DESIGN code, always
       ok:true, conf:'sure',      // right/wrong, and how sure they felt
       code:'M2',                 // why it went wrong (misses only)
       cond:{time:'full', mat:'closed', mark:'self'},
       ts:1234567890 }

   Rules:
   - ALWAYS read-modify-write the whole object. Never overwrite it with
     just your own branch, or you will wipe the other tools' data.
   - Touch only your own rows. Tag every row with your own `t`.
   - Store `kk` in study design form. Run booklet codes through
     toStudyDesign() first.
   --------------------------------------------------------------------- */

const RKEY = cw => NS + cw;

const Record = {
  async load(cw) {
    try { const raw = await Store.get(cw); return raw ? JSON.parse(raw) : { v: 1, cw }; }
    catch (e) { return { v: 1, cw }; }
  },
  async push(cw, rows) {                       // append practice rows, keep everything else
    const S = await Record.load(cw);
    S.pr = S.pr || [];
    rows.forEach(r => S.pr.push(r));
    await Store.set(cw, JSON.stringify(S));
    return S;
  },
  async rows(cw, type) {                       // e.g. rows(cw,'mc')
    const S = await Record.load(cw);
    const all = S.pr || [];
    return type ? all.filter(r => r.t === type) : all;
  }
};

/* ---------------------------------------------------------------------
   Retrieval schedule. Shared so every tool brings work back on the same
   rhythm — a student should not meet three different spacing rules.
     missed once   → 6 days
     missed twice+ → 3 days
     right after a miss → one confirmation at 12 days, then retired
     right first time   → not scheduled again
   --------------------------------------------------------------------- */

const DAY = 86400000;

function dueIn(history) {
  const last = history[history.length - 1];
  if (last.ok) {
    const missedBefore = history.some(r => !r.ok);
    return missedBefore && history.filter(r => r.ok).length < 2 ? 12 * DAY : null;
  }
  return history.filter(r => !r.ok).length >= 2 ? 3 * DAY : 6 * DAY;
}

const isDue = (history, now = Date.now()) => {
  const gap = dueIn(history);
  return gap !== null && (now - history[history.length - 1].ts) >= gap;
};

/* ---------------------------------------------------------------------
   2026 booklet compatibility.

   The printed 2026 revision booklet numbers U4 AOS1 in teaching order
   (monetary policy first). The study design has budgetary first. Every
   other area of study agrees, so only 4.1.x is remapped.

   DELETE THIS when the 2027 booklet is reprinted in study design order.
   --------------------------------------------------------------------- */

function toStudyDesign(code) {
  const m = String(code).match(/^4\.1\.(\d+)$/);
  if (!m) return code;
  const n = +m[1];
  if (n === 1) return code;                  // need for AD policies: same in both
  return n <= 8 ? `4.1.${n + 12}`            // monetary  booklet 2–8  → 14–20
                : `4.1.${n - 7}`;            // budgetary booklet 9–20 →  2–13
}

/* ---------------------------------------------------------------------
   Question types. These are the labels students see in the booklet, on
   the portal cards, and as filter tags in the question bank. Keep them
   identical in all three places — renaming one breaks the routing.
   --------------------------------------------------------------------- */

const QUESTION_TYPES = [
  'Two part questions',
  'Definitions',
  'Difference and distinguish',
  'Describing trends',
  'Relationships',
  'Factors',
  'Impact',
  'Refer to the data',
  'Elasticity',
  'Resource allocation',
  'Relative prices',
  'Transmission mechanism',
  'Government intervention',
  'Strengths and weaknesses'
];

/* ---------------------------------------------------------------------
   Error families, for the diagnostic tool's routing.
     B (conceptual)   → route by key knowledge code
     A (comprehension)→ route by question type
     C (construction) → route by scaffold, same type twice, spaced
   --------------------------------------------------------------------- */

const FAMILIES = {
  A: { name: 'Comprehension', routeBy: 'type',     note: 'Knows the content, misread the task.' },
  B: { name: 'Conceptual',    routeBy: 'kk',       note: 'Does not know the content yet.' },
  C: { name: 'Construction',  routeBy: 'scaffold', note: 'Knows it, cannot build the answer.' }
};

/* ---------------------------------------------------------------------
   Tools. Add a line here to add a card to the portal.
     live:  true  → card is a working link
     live:  false → card shows as not ready yet
   --------------------------------------------------------------------- */

const TOOLS = [
  { id: 'marks',  name: 'Where your marks went',
    blurb: 'Enter your SAC results and see where your marks actually went — and what to do about it.',
    file: 'marks-tracker.html', live: true },

  { id: 'mc',     name: 'Multiple choice practice',
    blurb: 'Past VCAA multiple choice, with how the state answered each one and why the trap option works. Brings back what you missed until it sticks.',
    file: 'mc-practice.html', live: true },

  { id: 'data',   name: 'Check my data',
    blurb: 'Test yourself on the figures in your current data workbook. Hide the numbers and see what sticks.',
    file: 'data-check.html', live: false },

  { id: 'types',  name: 'Practice tasks by question type',
    blurb: 'Filtered sets for each question type, including two part questions.',
    file: 'practice-types.html', live: false },

  { id: 'mark',   name: 'Mark my answer',
    blurb: 'Photograph a written response and get a mark with feedback against the VCAA standard.',
    file: 'marking.html', live: false },

  { id: 'exams',  name: 'Exams and tracker',
    blurb: 'Practice exams, and a record of what you sat, under what conditions, and what to work on.',
    file: 'exams.html', live: false }
];

/* ---------------------------------------------------------------------
   Key knowledge, in STUDY DESIGN order. This is the canonical spine.
   Codes are permanent: never renumber them to match a teaching sequence.
   --------------------------------------------------------------------- */

const KK = KK_DATA;   // loaded from kk-data.js

const AOS = {
  '3.1': 'Unit 3 AOS1 — markets, efficiency and government intervention',
  '3.2': 'Unit 3 AOS2 — the domestic macroeconomic goals',
  '3.3': 'Unit 3 AOS3 — Australia and the global economy',
  '4.1': 'Unit 4 AOS1 — aggregate demand policies',
  '4.2': 'Unit 4 AOS2 — aggregate supply policies'
};

const kkAos  = code => code.split('.').slice(0, 2).join('.');
const kkText = code => KK[toStudyDesign(code)] || null;
