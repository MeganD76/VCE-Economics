/* Read the Question: task words and the question bank.
   Shared with the teacher view, which counts how many stems each student has done. */
/* What each task word asks for. */
const WORDS = {
  Define: 'Give the precise meaning, in study design language. Tailor it to the question’s context.',
  Identify: 'Name it. No explanation needed, but be specific.',
  Describe: 'Say what it is like. For data: DUDDS (direction, units, data, dates, significant points). No causes unless asked.',
  Explain: 'Say how or why: a chain from cause to effect, every link written down, finishing on what the question asked about.',
  Distinguish: 'DEF, DEF, DIF: define both, then one sentence with “whereas” that says how they differ.',
  Calculate: 'Formula, numbers, answer, unit. Show your working.',
  Illustrate: 'A fully labelled diagram: axes, curves, the shift, old and new wage and quantity.',
  Analyse: 'Break it into parts and show how they connect, using the data given.',
  Discuss: 'Look at it from more than one side or perspective.',
  Evaluate: 'Both sides (for and against), each finished on who is affected, then a judgement with a “because”.'
};

/* Questions from this year’s SACs and practice SACs, plus a few new ones.
   You don’t answer them: you find the task words and count the parts. */
const RQ = [
 { s: 'Distinguish between real GDP and real GDP per capita.', w: ['Distinguish'], p: ['Define real GDP', 'Define real GDP per capita', 'State how they differ (whereas…)'] },
 { s: 'Explain one potential cost of strong economic growth, and identify one group in society likely to be affected by it.', w: ['Explain', 'Identify'], p: ['Explain one cost', 'Name a group affected'] },
 { s: 'Identify a year in which real GDP per capita fell and explain one possible cause.', w: ['Identify', 'Explain'], p: ['Name the year', 'Explain one cause'] },
 { s: 'Describe the trend in the cash rate between 2022 and 2024 and explain how this trend would impact on aggregate demand and, in turn, Australia’s rate of economic growth.', w: ['Describe', 'Explain'], p: ['Describe the trend, 2022–2024 only', 'Explain the impact on AD', 'Carry it on to economic growth'], a: [2, 3] },
 { s: 'Evaluate the case for increasing protection of Australian manufacturing. In your response, refer to the effects on at least two economic agents.', w: ['Evaluate'], p: ['Argument for', 'Argument against', 'At least two named agents', 'Judgement with a reason'], a: [3, 4] },
 { s: 'Using a labour market diagram, illustrate and explain the impact of an increase in the participation rate on the wage rate.', w: ['Illustrate', 'Explain'], p: ['Labelled diagram', 'Explain what happens to the wage rate (why the curve shifts, then why the wage changes)'] },
 { s: 'Analyse how a depreciation of the Australian dollar is likely to affect Australian exporters and Australian households.', w: ['Analyse'], p: ['Effect on exporters', 'Effect on households'] },
 { s: 'Using the data, calculate the underemployment rate and explain what it shows that the unemployment rate does not.', w: ['Calculate', 'Explain'], p: ['Calculate the underemployment rate', 'What it shows that the unemployment rate misses'] },
 { s: 'Define international trade and identify two of Australia’s key exports.', w: ['Define', 'Identify'], p: ['Define international trade', 'Name two exports'] },
 { s: 'Calculate the labour force underutilisation rate for September 2026.', w: ['Calculate'], p: ['Working and answer with %'] },
 { s: 'Explain one reason why Australia specialises in the production and export of particular goods and services.', w: ['Explain'], p: ['One reason only, explained'] },
 { s: 'Discuss the impact of this decision from the perspective of an award-reliant worker and a small business owner. In your answer, refer to the data and to the goals of equity and efficiency.', w: ['Discuss'], p: ['The worker’s perspective', 'The small business owner’s perspective', 'Use the data', 'Equity and efficiency'] },
 { s: 'With reference to the data, analyse how the RBA’s increases in the cash rate are likely to have contributed to the change in the unemployment rate. In your answer, use the NAIRU estimate to identify the type of unemployment that has increased.', w: ['Analyse', 'Identify'], p: ['Use the data', 'Chain from cash rate to unemployment', 'Use the NAIRU to name the type of unemployment'], a: [2, 3] },
 { s: 'Explain one limitation of real GDP per capita as a measure of living standards, and identify an alternative measure of living standards that addresses this limitation.', w: ['Explain', 'Identify'], p: ['Explain one limitation', 'Name an alternative that fixes that limitation'] },
 { s: 'Describe the change in the balance on goods and services shown above and identify one factor that may have caused this change.', w: ['Describe', 'Identify'], p: ['Describe the change with data', 'Name one cause'] },
 { s: 'Explain how the unemployment rate could fall even if no jobs are created.', w: ['Explain'], p: ['How it can fall without new jobs (people leaving the labour force)'] },
 { s: 'Analyse why this policy is unlikely to be effective for these workers, and recommend a more appropriate government response.', w: ['Analyse'], p: ['Why the policy won’t work for them', 'Recommend a better response'] },
 { s: 'Describe the trend in the participation rate shown in the chart and explain one factor that may have caused it.', w: ['Describe', 'Explain'], p: ['Describe the trend with data', 'Explain one cause'] }
];
