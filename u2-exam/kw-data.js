/* Key words check (from Ms Dyring's scaffolding questions and "I can apply this" worksheet).
   Each question has 2–4 key words: the terms that win or lose a mark, not a full vocabulary list.
   keys: { k: shown word, v: accepted variants } or { k, all: [ ...parts ] } (found only when every part is).
   Matching: case-insensitive; each word of 3+ letters may run on (export → exports, lag → lagging), hyphens count as spaces.
   w / p = task word(s) and parts for the Read step (as in Read the question).
   off: true = not shown to students (near-duplicate of a practice question; Ms Dyring to decide).
   Shared with the teacher view. Sample lines starting "- " show as dot points. */
const KW_AREAS = { aos1: 'Economic activity (AOS1)', trade: 'International trade', labour: 'The changing labour market' };
const KW_CONTRAST = ['whereas', 'in contrast', 'on the other hand', 'while', 'unlike'];
const KW_TIP = 'These are the words that win or lose marks. Don’t write a list of them. Write an answer that makes sense to you first.';
const KW = [
 { id: 'kw1', off: true, area: 'aos1', m: 2, q: 'Define economic growth.', w: ['Define'], p: ['What economic growth is'],
   keys: [{ k: 'real GDP', v: ['real gdp', 'real gross domestic product', 'adjusted for inflation'] }, { k: 'volume', v: ['volume', 'quantity'] }, { k: 'period of time', v: ['period', 'over time', 'per year', 'a year', 'quarter'] }],
   sample: 'Economic growth is an increase in the volume of goods and services produced in an economy over a period of time, measured by the percentage change in real GDP: GDP adjusted for inflation.' },
 { id: 'kw2', area: 'aos1', m: 3, q: 'Distinguish between material and non-material living standards.', w: ['Distinguish'], p: ['What material living standards are', 'What non-material living standards are', 'How they differ (whereas…)'],
   keys: [{ k: 'goods and services', v: ['goods and services', 'goods & services'] }, { k: 'quality of life', v: ['quality of life', 'wellbeing', 'well-being', 'health', 'environment', 'leisure'] }, { k: 'whereas', v: KW_CONTRAST }],
   sample: 'Material living standards refer to the quantity and quality of goods and services people can access, usually measured by real GDP per capita, whereas non-material living standards refer to aspects of wellbeing and quality of life that are not bought or sold, such as health, the environment, leisure time and safety.' },
 { id: 'kw3', area: 'aos1', m: 4, q: 'Explain what is meant by aggregate demand, and explain its components.', w: ['Explain'], p: ['What aggregate demand is', 'Its four components'],
   keys: [{ k: 'total expenditure', v: ['total expenditure', 'total spending'] }, { k: 'final goods and services', v: ['final goods'] },
     { k: 'all four components', all: [{ k: 'consumption', v: ['consumption'] }, { k: 'investment', v: ['investment'] }, { k: 'government spending', v: ['government spending', 'government expenditure'] }, { k: 'net exports', v: ['net exports', 'x - m', 'x-m', 'exports minus imports'] }] }],
   sample: 'Aggregate demand is the total expenditure on Australia’s final goods and services over a period of time: AD = C + I + G + (X – M).\n- Consumption (C) is household spending on goods and services such as food and clothing.\n- Investment (I) is business spending on capital such as machinery and buildings.\n- Government spending (G) includes current spending, such as teachers’ wages, and capital spending, such as new roads.\n- Net exports (X – M) is overseas residents’ spending on Australian exports minus Australians’ spending on imports.' },
 { id: 'kw4', area: 'aos1', m: 4, q: 'Explain how an increase in productivity will affect the level of aggregate supply, the rate of economic growth and inflation.', w: ['Explain'], p: ['The effect on aggregate supply', 'The effect on economic growth', 'The effect on inflation'],
   keys: [{ k: 'cost per unit', v: ['cost per unit', 'costs per unit', 'unit cost', 'per unit'] }, { k: 'willingness and ability', v: ['willing', 'able', 'ability'] }, { k: 'volume', v: ['volume'] }, { k: 'general price level', v: ['price level', 'downward pressure on prices'] }],
   sample: 'Productivity is output per unit of input. When productivity rises, businesses produce more with the same resources, so their costs per unit fall. Lower costs increase producers’ willingness and ability to supply, so the volume of goods and services supplied increases and aggregate supply shifts to the right. Higher output means real GDP rises, lifting the rate of economic growth. Because more is supplied at a lower cost, there is downward pressure on the general price level, so inflation is likely to fall.' },
 { id: 'kw5', area: 'trade', m: 3, q: 'Explain how international trade has benefited Australian consumers.', w: ['Explain'], p: ['How trade has benefited consumers'],
   keys: [{ k: 'competition', v: ['competition', 'competitive', 'compete'] }, { k: 'lower prices', v: ['lower prices', 'cheaper', 'prices fall', 'prices decrease'] }, { k: 'material living standards', v: ['material living standards', 'living standards', 'mls'] }],
   sample: 'International trade opens Australian markets to imports, which increases competition for local producers. Greater competition, and access to goods from countries that produce them at a lower opportunity cost, lowers prices and widens consumers’ choice. Lower prices increase the purchasing power of consumers’ incomes, so they can buy more goods and services, improving their material living standards.' },
 { id: 'kw6', area: 'trade', m: 2, q: 'Explain one cost of trade liberalisation for Australian workers.', w: ['Explain'], p: ['One cost for workers'],
   keys: [{ k: 'import competition', v: ['import competition', 'import-competing', 'compete with imports', 'cheaper imports'] }, { k: 'structural unemployment', v: ['structural unemployment', 'structurally unemployed'] }, { k: 'skills', v: ['skills', 'mismatch', 'retrain'] }],
   sample: 'Trade liberalisation reduces protection such as tariffs, so Australian businesses in import-competing industries face more competition from cheaper imports. If they can’t compete, they cut production or close, and their workers lose their jobs. These workers’ skills often don’t match the jobs available in growing industries, so they may become structurally unemployed until they retrain or move.' },
 { id: 'kw7', area: 'labour', m: 3, q: 'Explain why a fall in economic growth may not cause an increase in the unemployment rate.', w: ['Explain'], p: ['Why the unemployment rate may not rise'],
   keys: [{ k: 'underemployment', v: ['underemploy', 'fewer hours', 'cut hours', 'reduce hours'] }, { k: 'hidden unemployment', v: ['hidden unemploy', 'discouraged', 'given up', 'stopped looking'] }, { k: 'labour force', v: ['labour force', 'participation rate'] }],
   sample: 'A fall in economic growth reduces the demand for labour, but the unemployment rate may not rise.\n- Some businesses cut workers’ hours instead of their jobs, so underemployment rises while those workers are still counted as employed.\n- Others give up looking for work because few jobs are available. These discouraged job seekers become hidden unemployed and leave the labour force, so they are not counted as unemployed.\n- The unemployment rate can stay steady while the underutilisation rate, which includes the underemployed, rises.' },
 { id: 'kw8', area: 'aos1', m: 3, q: 'Distinguish between a leading indicator and a lagging indicator. Use an example of each.', w: ['Distinguish'], p: ['A leading indicator, with an example', 'A lagging indicator, with an example', 'How they differ (whereas…)'], a: [3, 4],
   keys: [{ k: 'before', v: ['before', 'predict', 'ahead', 'future'] }, { k: 'after', v: ['after', 'confirm', 'lag'] }, { k: 'whereas', v: KW_CONTRAST }],
   sample: 'A leading indicator changes before economic activity changes, so it helps predict where the economy is heading; for example, consumer sentiment. Whereas a lagging indicator changes after economic activity has changed, so it confirms a trend that has already happened; for example, wage growth.' },
 { id: 'kw9', area: 'trade', m: 3, q: 'Explain one factor that could cause the Australian dollar to depreciate.', w: ['Explain'], p: ['One factor, and how it causes a depreciation'],
   keys: [{ k: 'demand for the AUD', v: ['demand for the aud', 'demand for aud', 'demand for the australian dollar', 'supply of aud', 'supply of the aud'] }, { k: 'relative to', v: ['relative to', 'compared with', 'compared to'] }, { k: 'depreciate', v: ['depreciat'] }],
   sample: 'If Australians spend more on imports and overseas holidays, they need more foreign currency, so they sell more Australian dollars to buy it. The supply of the AUD rises relative to the demand for it, so the Australian dollar depreciates: each Australian dollar buys less foreign currency.' },
 { id: 'kw10', area: 'trade', m: 2, q: 'Explain one benefit of a free trade agreement for Australian businesses.', w: ['Explain'], p: ['One benefit for businesses'],
   keys: [{ k: 'tariffs', v: ['tariff'] }, { k: 'larger market', v: ['larger market', 'bigger market', 'new markets', 'access to', 'more customers'] }],
   sample: 'A free trade agreement reduces or removes tariffs on Australian goods in the partner country, so Australian products become cheaper there and businesses gain access to a larger market. With more customers, they can increase sales and production, lowering their average costs through economies of scale and raising profits.' },
 { id: 'kw11', area: 'labour', m: 3, q: 'Explain how an increase in skilled migration is likely to affect the wage rate and the number employed in an occupation with a skill shortage. Explain it as you would alongside a labour market diagram.', w: ['Explain'], p: ['The effect on the wage rate', 'The effect on the number employed'],
   keys: [{ k: 'supply of labour', v: ['supply of labour', 'labour supply', 'supply curve'] }, { k: 'excess supply', v: ['excess supply', 'surplus'] }, { k: 'downward pressure', v: ['downward pressure', 'pressure on wages'] }],
   sample: 'An increase in skilled migration increases the supply of labour in that occupation, shifting the supply curve to the right. At the original wage there is now an excess supply of workers, which puts downward pressure on the wage rate. The wage falls to a new, lower equilibrium and the number of workers employed rises, easing the skill shortage.' },
 { id: 'kw12', area: 'labour', m: 2, q: 'Explain why the demand for labour is described as a derived demand.', w: ['Explain'], p: ['Why labour is a derived demand'],
   keys: [{ k: 'goods and services', v: ['goods and services', 'goods & services', 'products'] }, { k: 'produce', v: ['produce', 'production', 'output'] }],
   sample: 'Businesses employ workers to produce goods and services, so the number of workers they want depends on demand for what those workers produce. If demand for a product rises, businesses need more workers to increase production. This is why the demand for labour is a derived demand.' },
 { id: 'kw13', area: 'labour', m: 2, q: 'Explain how casualisation of the workforce may affect workers’ living standards.', w: ['Explain'], p: ['The effect on workers’ living standards'],
   keys: [{ k: 'irregular income', v: ['irregular', 'unpredictable', 'insecure', 'uncertain', 'no paid leave'] }, { k: 'living standards', v: ['living standards'] }],
   sample: 'Casual workers have no paid leave and often irregular hours, so their income can be insecure and hard to predict. This makes it harder to budget, borrow or save, which can lower their material living standards. The stress of uncertain work can also reduce their non-material living standards.' },
 { id: 'kw14', area: 'labour', m: 3, q: 'Distinguish between cyclical unemployment and structural unemployment.', w: ['Distinguish'], p: ['What cyclical unemployment is', 'What structural unemployment is', 'How they differ (whereas…)'],
   keys: [{ k: 'aggregate demand', v: ['aggregate demand', 'downturn', 'recession', 'business cycle'] }, { k: 'mismatch', v: ['mismatch', 'skills'] }, { k: 'whereas', v: KW_CONTRAST }],
   sample: 'Cyclical unemployment is caused by a fall in aggregate demand during a downturn in the business cycle, as businesses need fewer workers to produce less output. Whereas structural unemployment is caused by a mismatch between workers’ skills or location and the jobs available, often after technological change or a shift between industries, so it can last even when the economy is growing.' },
 { id: 'kw15', area: 'aos1', m: 3, q: 'Explain how floods in eastern Australia are likely to affect aggregate supply and the level of economic activity.', w: ['Explain'], p: ['The effect on aggregate supply', 'The effect on the level of economic activity'],
   keys: [{ k: 'costs', v: ['cost'] }, { k: 'willingness and ability', v: ['willing', 'able', 'ability'] }, { k: 'volume', v: ['volume'] }],
   sample: 'Floods destroy crops, damage farms, roads and factories, and disrupt supply chains, raising businesses’ costs of production. Higher costs and damaged capital reduce businesses’ willingness and ability to supply, so the volume of goods and services produced falls and aggregate supply decreases. With less output, the level of economic activity falls, and shortages of goods such as fruit and vegetables put upward pressure on prices.' },
 { id: 'kw16', off: true, area: 'aos1', m: 3, q: 'Suppose a trade war between China and the USA slows China’s economic growth. Explain how this is likely to affect Australia’s aggregate demand and level of economic activity.', w: ['Explain'], p: ['The effect on aggregate demand', 'The effect on the level of economic activity'],
   keys: [{ k: 'exports', v: ['export'] }, { k: 'net exports', v: ['net exports', 'x - m', 'x-m'] }, { k: 'production', v: ['production', 'output', 'real gdp'] }],
   sample: 'A trade war reduces trade between China and the USA, slowing China’s economic growth and incomes. China then buys fewer Australian exports such as iron ore and coal, so exports (X) fall. Net exports (X – M) are a component of aggregate demand, so AD falls, and businesses respond by cutting production, reducing the level of economic activity and employment.' },
 { id: 'kw17', area: 'trade', m: 3, q: 'Explain how trade liberalisation is likely to have affected Australia’s rate of economic growth.', w: ['Explain'], p: ['The effect on Australia’s rate of economic growth'],
   keys: [{ k: 'comparative advantage', v: ['comparative advantage', 'specialis'] }, { k: 'efficiency', v: ['efficien', 'productivity', 'economies of scale'] }, { k: 'exports', v: ['export'] }],
   sample: 'Trade liberalisation reduces protection such as tariffs, so resources move out of protected, less efficient industries and into industries where Australia has a comparative advantage, such as mining and education. Specialising increases efficiency and productivity, and access to larger export markets lets businesses gain economies of scale, so exports rise. Higher exports increase aggregate demand and higher productivity increases aggregate supply, so real GDP grows faster and Australia’s rate of economic growth increases.' }
];
const KW_ITEMS = KW.filter(x => !x.off);

/* ---- matching ---- */
const kwNorm = s => String(s || '').toLowerCase().replace(/[-–—−]/g, ' ').replace(/[’‘]/g, "'");   // same length as the original
const kwEsc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
function kwRegex(variant) {
  const toks = kwNorm(variant).trim().split(/\s+/);
  const body = toks.map(t => kwEsc(t) + (t.length > 2 ? '[a-z0-9]*' : '(?![a-z0-9])')).join('\\s+');
  return new RegExp('(^|[^a-z0-9])(' + body + ')', 'g');
}
/* All [start, end] ranges where any variant matches. */
function kwRanges(text, variants) {
  const n = kwNorm(text), out = [];
  variants.forEach(v => { const re = kwRegex(v); let m; while ((m = re.exec(n))) { const s = m.index + m[1].length; out.push([s, s + m[2].length]); if (re.lastIndex === m.index) re.lastIndex++; } });
  return out;
}
const kwHas = (text, key) => key.all ? key.all.every(p => kwRanges(text, p.v).length) : kwRanges(text, key.v).length > 0;
const kwMissingParts = (text, key) => key.all ? key.all.filter(p => !kwRanges(text, p.v).length).map(p => p.k) : [];
/* Text with every key word match wrapped in <mark> (escaped). */
function kwHighlight(text, keys) {
  let r = [];
  keys.forEach(k => (k.all || [k]).forEach(p => { r = r.concat(kwRanges(text, p.v)); }));
  r.sort((a, b) => a[0] - b[0]);
  const merged = [];
  r.forEach(x => { const l = merged[merged.length - 1]; if (l && x[0] <= l[1]) l[1] = Math.max(l[1], x[1]); else merged.push(x.slice()); });
  let out = '', i = 0;
  merged.forEach(([s, e]) => { out += esc(text.slice(i, s)) + '<mark>' + esc(text.slice(s, e)) + '</mark>'; i = e; });
  return out + esc(text.slice(i));
}
