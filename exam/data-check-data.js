/* =====================================================================
   Check my data — the figures.

   UPDATE THIS FILE, NOT THE PAGE. When a new release comes out, change
   `value`, `prev`, `dir` and `period`. Changing `period` starts that
   figure fresh for every student (old attempts were about old numbers).

   Source: Trading Economics, collected 12 October 2026.
   `check: true` = Megan to confirm against the 2026 Current Data Workbook
   before students rely on it. The page shows these as "being checked".

   Fields
     id      permanent, never reuse
     kk      study design code (see kk-data.js)
     label   what students are asked for
     value   the figure            unit  shown after the number
     tol     how close counts as right (same units as value)
     period  the release it is from
     prev    the release before    dir   'up' | 'down' | 'same'
     note    one line on what it means / what to compare it with
   ===================================================================== */

const DATA_ASOF   = '12 October 2026';
const DATA_SOURCE = 'Trading Economics (ABS, RBA and Treasury releases)';

const DATA_ITEMS = [
  /* ---- Growth ----------------------------------------------------- */
  { id:'gdp-y', kk:'3.2.7', group:'Economic growth',
    label:'Real GDP growth, through the year', value:2.1, unit:'%', tol:0.1,
    period:'June quarter 2026', prev:2.5, dir:'down',
    note:'Annual growth slowed. Compare it with the economy\'s sustainable (trend) rate.' },

  { id:'gdp-q', kk:'3.2.7', group:'Economic growth',
    label:'Real GDP growth, for the quarter', value:0.4, unit:'%', tol:0.1,
    period:'June quarter 2026', prev:0.3, dir:'up',
    note:'Quarterly growth picked up slightly even though the annual rate fell.' },

  { id:'cons-conf', kk:'3.2.4', group:'Economic growth',
    label:'Consumer confidence (Westpac–MI index)', value:80.4, unit:'points', tol:1,
    period:'October 2026', prev:84.4, dir:'down',
    note:'Below 100 means pessimists outnumber optimists. A factor affecting AD through consumption.' },

  { id:'bus-conf', kk:'3.2.4', group:'Economic growth',
    label:'Business confidence (NAB survey)', value:-8, unit:'points', tol:1,
    period:'August 2026', prev:-6, dir:'down',
    note:'Negative means more firms expect conditions to worsen. A factor affecting AD through investment.' },

  /* ---- Employment ------------------------------------------------- */
  { id:'unemp', kk:'3.2.11', group:'Full employment',
    label:'Unemployment rate', value:4.6, unit:'%', tol:0.1,
    period:'August 2026', prev:4.5, dir:'up',
    note:'Edging up. Compare it with the NAIRU, which the RBA estimates at around 4½%.' },

  { id:'part', kk:'3.2.11', group:'Full employment',
    label:'Participation rate', value:67.1, unit:'%', tol:0.1,
    period:'August 2026', prev:66.9, dir:'up',
    note:'Rising participation can push unemployment up even while employment grows.' },

  { id:'wpi', kk:'3.2.18', group:'Full employment',
    label:'Wage Price Index growth, through the year', value:3.2, unit:'%', tol:0.1,
    period:'June quarter 2026', prev:3.2, dir:'same',
    note:'Wages growing slower than prices means real wages are falling.' },

  /* ---- Inflation -------------------------------------------------- */
  { id:'cpi-m', kk:'3.2.16', group:'Low and stable inflation',
    label:'Headline CPI inflation, annual (monthly CPI)', value:4.0, unit:'%', tol:0.1,
    period:'August 2026', prev:3.5, dir:'up',
    note:'Above the 2–3% target. Fuel prices jumped as the fuel excise relief ended.' },

  { id:'cpi-q', kk:'3.2.16', group:'Low and stable inflation',
    label:'Headline CPI inflation, through the year (quarterly)', value:3.9, unit:'%', tol:0.1,
    period:'June quarter 2026', prev:4.1, dir:'down',
    note:'Still above the 2–3% target band.' },

  { id:'tm', kk:'3.2.16', group:'Low and stable inflation',
    label:'Trimmed mean (underlying) inflation, through the year', value:3.6, unit:'%', tol:0.1,
    period:'June quarter 2026', prev:3.5, dir:'up',
    note:'Underlying inflation is rising too, so it is not just volatile items like fuel.' },

  /* ---- Monetary and budgetary policy ------------------------------ */
  { id:'cash', kk:'4.1.15', group:'Policy settings',
    label:'RBA cash rate target', value:4.60, unit:'%', tol:0,
    period:'September 2026 decision', prev:4.35, dir:'up',
    note:'Raised 25 basis points on 29 September, the fourth rise of 2026. A contractionary stance.' },

  { id:'budget', kk:'4.1.5', group:'Policy settings',
    label:'Budget outcome, as a share of GDP', value:-1.6, unit:'% of GDP', tol:0.1,
    period:'2025–26 (estimate)', prev:-0.8, dir:'down', check:true,
    note:'A deficit that has widened. Check which year and measure your workbook uses.' },

  /* ---- External --------------------------------------------------- */
  { id:'ca-gdp', kk:'3.3.2', group:'Australia and the global economy',
    label:'Current account balance, as a share of GDP', value:-3.7, unit:'% of GDP', tol:0.1,
    period:'June quarter 2026', prev:-3.5, dir:'down',
    note:'A deficit that has widened (the number fell further below zero).' },

  { id:'ca', kk:'3.3.2', group:'Australia and the global economy',
    label:'Current account balance, for the quarter', value:-27.2, unit:'A$ billion', tol:0.5,
    period:'June quarter 2026', prev:-25.4, dir:'down',
    note:'Remember the current account includes the primary income deficit, not just trade.' },

  { id:'trade', kk:'3.3.2', group:'Australia and the global economy',
    label:'Balance on goods and services (trade balance), for the month', value:0.5, unit:'A$ billion', tol:0.1,
    period:'August 2026', prev:1.4, dir:'down',
    note:'Still a small surplus, but shrinking as imports grew faster than exports.' },

  { id:'tot', kk:'3.3.6', group:'Australia and the global economy',
    label:'Terms of trade index', value:112, unit:'points', tol:1,
    period:'June quarter 2026', prev:117, dir:'down',
    note:'Export prices fell relative to import prices.' },

  { id:'aud', kk:'3.3.5', group:'Australia and the global economy',
    label:'Australian dollar, in US cents', value:69.8, unit:'US cents', tol:1,
    period:'12 October 2026', prev:null, dir:null,
    note:'The exchange rate moves daily, so learn the rough level, not the exact figure.' }
];
