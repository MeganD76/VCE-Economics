/* assess-data.js — item bank for assess.html
 * VCE Economics exam portal · Ringwood Secondary College
 *
 * STATUS: marks and codes DRAFTED for teacher verification.
 * Items from src "ar26_examiner" carry Megan's own marks (verified).
 * Items from src "ws26_structure" carry drafted marks awaiting sign-off.
 *
 * Codes are the shared 23-code taxonomy from portal-data.js. Do not add to it here.
 * Question type slugs are the shared 18. Key knowledge ids are study design order.
 */

const ASSESS_ITEMS = [

/* ============================================================
   SOURCE 1 — Evaluating responses worksheet (6 questions x 3 samples)
   Criteria tables are Megan's own, transcribed verbatim.
   Marks and codes drafted — NEEDS VERIFICATION.
   ============================================================ */

/* ---- Q1 Trends (2 marks) ---- */
{
  id: "ws-1-a", src: "ws26_structure", srcLabel: "Structure worksheet",
  q: "1a", qt: "trends", kk: "3.2.7", kkLabel: "Measurement of the rate of economic growth using real GDP",
  stem: "Referring to the data above, outline the overall trend in the rate of GDP growth over the past two years.",
  stimulus: "Rate of GDP growth, 2017–2019. Growth begins the period at approximately 2.3% per annum, fluctuates between 2% and 3%, and ends the period at approximately 2.1% per annum.",
  marks: 2,
  criteria: [
    { id: "c1", label: "Direction", hint: "Increased, decreased or remained steady — stated explicitly." },
    { id: "c2", label: "Unit of measurement", hint: "Per cent per annum, index points, dollars." },
    { id: "c3", label: "Data", hint: "The actual figures, not a range." },
    { id: "c4", label: "Dates", hint: "Dates bookending the period described." },
    { id: "c5", label: "Subject", hint: "Named precisely — the rate of GDP growth, not 'growth'." }
  ],
  answer: "In 2017 growth was around 2.2% and decreased to 2.1% in 2019.",
  actual: 1,
  criteriaMet: ["c1", "c2", "c3", "c4"],
  codesActual: ["B5"],
  why: "Four of the five DUDDS components are there — direction, units, data and dates. What costs the mark is the subject: 'growth' is not the same as 'the rate of GDP growth', and the figures carry no 'per annum'. Precision of subject is not a technicality; it is how the assessor knows which series you are reading."
},
{
  id: "ws-1-b", src: "ws26_structure", srcLabel: "Structure worksheet",
  q: "1b", qt: "trends", kk: "3.2.7", kkLabel: "Measurement of the rate of economic growth using real GDP",
  stem: "Referring to the data above, outline the overall trend in the rate of GDP growth over the past two years.",
  stimulus: "Rate of GDP growth, 2017–2019. Growth begins the period at approximately 2.3% per annum, fluctuates between 2% and 3%, and ends the period at approximately 2.1% per annum.",
  marks: 2,
  criteria: [
    { id: "c1", label: "Direction", hint: "Increased, decreased or remained steady — stated explicitly." },
    { id: "c2", label: "Unit of measurement", hint: "Per cent per annum, index points, dollars." },
    { id: "c3", label: "Data", hint: "The actual figures, not a range." },
    { id: "c4", label: "Dates", hint: "Dates bookending the period described." },
    { id: "c5", label: "Subject", hint: "Named precisely — the rate of GDP growth, not 'growth'." }
  ],
  answer: "The GDP growth rate has been bouncing up and down between 2-3%",
  actual: 0,
  criteriaMet: ["c2", "c5"],
  codesActual: ["C5"],
  why: "No dates, no figures, and no overall direction. Naming the volatility is worth something only after you have given the overall trend — here it replaces it. This is the answer the structure guide describes as worth nothing, and nothing is what it earns.",
  rewrite: {
    keep: "The GDP growth rate",
    ask: "Rewrite this as one sentence that carries all five DUDDS components. The figures are in the stimulus.",
    model: "Between 2017 and 2019 the rate of GDP growth decreased from approximately 2.3% per annum to approximately 2.1% per annum."
  }
},
{
  id: "ws-1-c", src: "ws26_structure", srcLabel: "Structure worksheet",
  q: "1c", qt: "trends", kk: "3.2.7", kkLabel: "Measurement of the rate of economic growth using real GDP",
  stem: "Referring to the data above, outline the overall trend in the rate of GDP growth over the past two years.",
  stimulus: "Rate of GDP growth, 2017–2019. Growth begins the period at approximately 2.3% per annum, fluctuates between 2% and 3%, and ends the period at approximately 2.1% per annum.",
  marks: 2,
  criteria: [
    { id: "c1", label: "Direction", hint: "Increased, decreased or remained steady — stated explicitly." },
    { id: "c2", label: "Unit of measurement", hint: "Per cent per annum, index points, dollars." },
    { id: "c3", label: "Data", hint: "The actual figures, not a range." },
    { id: "c4", label: "Dates", hint: "Dates bookending the period described." },
    { id: "c5", label: "Subject", hint: "Named precisely — the rate of GDP growth, not 'growth'." }
  ],
  answer: "There has been an overall decrease in the rate of GDP growth from around 2.3% at the beginning of 2017 to around 2.1% in 2019.",
  actual: 2,
  criteriaMet: ["c1", "c2", "c3", "c4", "c5"],
  codesActual: [],
  why: "All five components, in one sentence, with the word 'overall' doing real work — it tells the assessor this is a trend and not two data points. Full marks. If you marked this down, check what you were looking for that the question did not ask for."
},

/* ---- Q2 Market mechanism, five point process (5 marks) ---- */
{
  id: "ws-2-a", src: "ws26_structure", srcLabel: "Structure worksheet",
  q: "2a", qt: "fivepoint", kk: "3.1.10", kkLabel: "Effects of changes in supply and demand on equilibrium price and quantity",
  stem: "Explain how the market for airline tickets returns to equilibrium (5 point process) after a decrease in the price of airline fuel.",
  stimulus: null,
  marks: 5,
  criteria: [
    { id: "c1", label: "Initial equilibrium", hint: "The market is initially in equilibrium at P1, Q1." },
    { id: "c2", label: "Identify factor, positive/negative and shift", hint: "Name the factor, classify it, name the curve and direction." },
    { id: "c3", label: "Explain the outcome at the shift", hint: "At P1, consumers now demand… producers are willing to supply…" },
    { id: "c4", label: "Identify problem — shortage or excess", hint: "Name the disequilibrium." },
    { id: "c5", label: "How is the problem resolved?", hint: "Consumers bid the price up, or producers discount." },
    { id: "c6", label: "Expansion / contraction", hint: "Both movements along the curves, named." },
    { id: "c7", label: "New equilibrium — HPLQ, LPHQ, HPHQ, LPLQ", hint: "Stated and compared to the original." }
  ],
  answer: "Original equilibrium E1 at (P1, Q1) A rise in the supply for airline tickets shift the curve to left from S1 to S2. At P1, now consumer demand Q1 however the producer willing to supply more, there is an exceed in supply. Business will notice the level of stock and put them on sales to reduce the price, cause an expansion in demand and contraction in supply. This result in a new equilibrium E2 at (P2, Q2) with lower price and higher quantity.",
  actual: 3,
  criteriaMet: ["c1", "c3", "c4", "c5", "c6", "c7"],
  codesActual: ["B3"],
  why: "Six of seven components, and the whole back half of the chain is correct — surplus, producers discounting, expansion in demand with contraction in supply, LPHQ. But 'a rise in the supply… shift the curve to left' is the wrong direction, and it contradicts everything that follows. An assessor marks what is on the page, not what you meant. The factor itself is also never linked to costs of production: cheaper fuel lowers the cost per unit, which is why supply rises."
},
{
  id: "ws-2-b", src: "ws26_structure", srcLabel: "Structure worksheet",
  q: "2b", qt: "fivepoint", kk: "3.1.10", kkLabel: "Effects of changes in supply and demand on equilibrium price and quantity",
  stem: "Explain how the market for airline tickets returns to equilibrium (5 point process) after a decrease in the price of airline fuel.",
  stimulus: null,
  marks: 5,
  criteria: [
    { id: "c1", label: "Initial equilibrium", hint: "The market is initially in equilibrium at P1, Q1." },
    { id: "c2", label: "Identify factor, positive/negative and shift", hint: "Name the factor, classify it, name the curve and direction." },
    { id: "c3", label: "Explain the outcome at the shift", hint: "At P1, consumers now demand… producers are willing to supply…" },
    { id: "c4", label: "Identify problem — shortage or excess", hint: "Name the disequilibrium." },
    { id: "c5", label: "How is the problem resolved?", hint: "Consumers bid the price up, or producers discount." },
    { id: "c6", label: "Expansion / contraction", hint: "Both movements along the curves, named." },
    { id: "c7", label: "New equilibrium — HPLQ, LPHQ, HPHQ, LPLQ", hint: "Stated and compared to the original." }
  ],
  answer: "The original equilibrium is at P1 Q1. There has been an expansion in supply. As Producers are producing at Q2, consumers are still demanding at Q1. Therefore there is a surplus of supply forcing downward pressure on prices. As prices are decreased, demand is increased hence the law of demand. This forces demand to increase until demand and supply meet a new equilibrium at P2, Q3.",
  actual: 2,
  criteriaMet: ["c1", "c3", "c4", "c5"],
  codesActual: ["B2", "C2"],
  why: "'There has been an expansion in supply' is the error the structure guide flags by name. A fall in fuel costs is a non-price factor, so it shifts the curve — that is an increase in supply. An expansion is a movement along the curve caused by a change in price. The same confusion returns at the other end: 'demand is increased' should be an expansion in demand. And the answer stops at 'P2, Q3' without ever saying the new equilibrium is a lower price and a higher quantity, so it never lands.",
  rewrite: {
    keep: "The original equilibrium is at P1 Q1. A decrease in the price of airline fuel lowers the cost of production, causing",
    ask: "Finish this sentence with the correct shift language, then add the one sentence this answer is missing at the end — the new equilibrium, compared to the original.",
    model: "…an increase in supply, shifting the supply curve to the right from S1 to S2. […] The market settles at a new equilibrium at P2, Q2 — a lower price and a higher quantity than previously."
  }
},
{
  id: "ws-2-c", src: "ws26_structure", srcLabel: "Structure worksheet",
  q: "2c", qt: "fivepoint", kk: "3.1.10", kkLabel: "Effects of changes in supply and demand on equilibrium price and quantity",
  stem: "Explain how the market for airline tickets returns to equilibrium (5 point process) after a decrease in the price of airline fuel.",
  stimulus: null,
  marks: 5,
  criteria: [
    { id: "c1", label: "Initial equilibrium", hint: "The market is initially in equilibrium at P1, Q1." },
    { id: "c2", label: "Identify factor, positive/negative and shift", hint: "Name the factor, classify it, name the curve and direction." },
    { id: "c3", label: "Explain the outcome at the shift", hint: "At P1, consumers now demand… producers are willing to supply…" },
    { id: "c4", label: "Identify problem — shortage or excess", hint: "Name the disequilibrium." },
    { id: "c5", label: "How is the problem resolved?", hint: "Consumers bid the price up, or producers discount." },
    { id: "c6", label: "Expansion / contraction", hint: "Both movements along the curves, named." },
    { id: "c7", label: "New equilibrium — HPLQ, LPHQ, HPHQ, LPLQ", hint: "Stated and compared to the original." }
  ],
  answer: "the original point of equilibrium for the market of airline tickets was at (Q1,P1). A shift of the supply curve to the right caused by a decrease in the prices on running the aircraft. This then causes an excess in supply caused by the demand not meeting the supply. this then causes the price to be bid down by consumers which results in a contraction in supply and an expansion in demand. The new point of equilibrium is now at (Q2,P2) where there are lower prices and a higher quantity.",
  actual: 4,
  criteriaMet: ["c1", "c2", "c3", "c4", "c6", "c7"],
  codesActual: ["B2"],
  why: "Strong answer — correct shift, correct direction, correct expansion and contraction pair, and it lands on LPHQ. One error: 'the price to be bid down by consumers'. Consumers bid prices up when there is a shortage. With a surplus it is producers who discount to clear stock. Wrong agent, and it is the one component that is not met. Note that this answer is untidy — lower case, missing punctuation — and still earns 4. Mark the economics, not the presentation."
},

/* ---- Q3 Relative prices and reallocation (4 marks) ---- */
{
  id: "ws-3-a", src: "ws26_structure", srcLabel: "Structure worksheet",
  q: "3a", qt: "resalloc", kk: "3.1.14", kkLabel: "The role of relative prices in the allocation of resources",
  stem: "Explain the impact of an increase in gluten free diets and how this would lead to a reallocation of resources.",
  stimulus: null,
  marks: 4,
  criteria: [
    { id: "c1", label: "Markets: demand and supply", hint: "The disequilibrium at the initial price — a shortage or a surplus." },
    { id: "c2", label: "An example to illustrate the theory", hint: "Supported by a factor affecting demand or a factor affecting supply." },
    { id: "c3", label: "Relative prices", hint: "The price of one good measured in terms of another — defined, not just used." },
    { id: "c4", label: "Price signals", hint: "The price change named explicitly as a signal." },
    { id: "c5", label: "Profit motive", hint: "Producers are profit-motivated and investigate the cause." },
    { id: "c6", label: "Resources (types)", hint: "Land, labour, capital and enterprise — named." },
    { id: "c7", label: "Reallocation of resources", hint: "Stated explicitly — towards or away from what." }
  ],
  answer: "If consumer preference changes towards a gluten free diet, there will be a decrease in demand, and as there is a decrease the relative price of wheat will decrease as the businesses are still trying to sell their quantity. Therefore they will need less resources for wheat and will look to reallocate the resources into a product that is gluten free as its relative price would have increased.",
  actual: 2,
  criteriaMet: ["c2", "c3", "c7"],
  codesActual: ["C3"],
  why: "The start is right and the finish is right. The middle is missing. This answer goes straight from 'the relative price of wheat will decrease' to 'they will look to reallocate' with nothing in between — no price signal, no profit motive. Those two steps are where the marks live in a reallocation question, because they are the mechanism. Cause stated, effect stated, middle step absent: that is C3, and it is the single most common way a correct answer scores half marks."
},
{
  id: "ws-3-b", src: "ws26_structure", srcLabel: "Structure worksheet",
  q: "3b", qt: "resalloc", kk: "3.1.14", kkLabel: "The role of relative prices in the allocation of resources",
  stem: "Explain the impact of an increase in gluten free diets and how this would lead to a reallocation of resources.",
  stimulus: null,
  marks: 4,
  criteria: [
    { id: "c1", label: "Markets: demand and supply", hint: "The disequilibrium at the initial price — a shortage or a surplus." },
    { id: "c2", label: "An example to illustrate the theory", hint: "Supported by a factor affecting demand or a factor affecting supply." },
    { id: "c3", label: "Relative prices", hint: "The price of one good measured in terms of another — defined, not just used." },
    { id: "c4", label: "Price signals", hint: "The price change named explicitly as a signal." },
    { id: "c5", label: "Profit motive", hint: "Producers are profit-motivated and investigate the cause." },
    { id: "c6", label: "Resources (types)", hint: "Land, labour, capital and enterprise — named." },
    { id: "c7", label: "Reallocation of resources", hint: "Stated explicitly — towards or away from what." }
  ],
  answer: "Relative price refer to the change in the price of goods and services relative to other goods and services relate to the product, if the consumer preferences change from wheat towards a gluten free diet, price of gluten free diet increase relatively the price of wheat decrease or stay the same, this would send price signal to producers, producers then reallocate the resource towards gluten fee diet as there is more profit opportunity, therefore the resource is better allocative in the market. There's an assumption that in the perfect competitive market where resources are \"mobile\".",
  actual: 3,
  criteriaMet: ["c2", "c3", "c4", "c5", "c7"],
  codesActual: ["C10"],
  why: "This is the best economics of the three. It defines relative prices, names the price signal, names the profit motive, reaches the reallocation, and adds a resource mobility assumption nobody asked for. It is also one unpunctuated run-on sentence with broken grammar. It still earns 3. If you marked this below Sample A, you marked the writing instead of the economics — a very common and very expensive habit. The mark it loses is for never naming which resources move."
},
{
  id: "ws-3-c", src: "ws26_structure", srcLabel: "Structure worksheet",
  q: "3c", qt: "resalloc", kk: "3.1.14", kkLabel: "The role of relative prices in the allocation of resources",
  stem: "Explain the impact of an increase in gluten free diets and how this would lead to a reallocation of resources.",
  stimulus: null,
  marks: 4,
  criteria: [
    { id: "c1", label: "Markets: demand and supply", hint: "The disequilibrium at the initial price — a shortage or a surplus." },
    { id: "c2", label: "An example to illustrate the theory", hint: "Supported by a factor affecting demand or a factor affecting supply." },
    { id: "c3", label: "Relative prices", hint: "The price of one good measured in terms of another — defined, not just used." },
    { id: "c4", label: "Price signals", hint: "The price change named explicitly as a signal." },
    { id: "c5", label: "Profit motive", hint: "Producers are profit-motivated and investigate the cause." },
    { id: "c6", label: "Resources (types)", hint: "Land, labour, capital and enterprise — named." },
    { id: "c7", label: "Reallocation of resources", hint: "Stated explicitly — towards or away from what." }
  ],
  answer: "A change in consumer preference would be a demand factor causing the quantity demand to decrease. This change in demand would lead to an increase in relative price for gluten free foods. The relative price increasing being the items value in comparison to another good such as a substitute good (wheat) would indicate to profit seeking businesses that the demand for gluten free goods has increased. This lets producers know to re-allocate their resources to the production of gluten free foods rather than wheat.",
  actual: 3,
  criteriaMet: ["c2", "c3", "c4", "c5", "c7"],
  codesActual: ["B2"],
  why: "The signal and profit motive chain is complete and correct, which is why this earns 3. The error is in the first sentence: 'causing the quantity demand to decrease' is both the wrong direction for gluten free goods and the wrong term. Quantity demanded changes when price changes — that is a movement along the curve. A change in consumer preference changes demand and shifts the curve. The next sentence then contradicts it by having the relative price rise."
},

/* ---- Q4 AD factors (4 marks) ---- */
{
  id: "ws-4-a", src: "ws26_structure", srcLabel: "Structure worksheet",
  q: "4a", qt: "factors", kk: "3.2.4", kkLabel: "Aggregate demand and the factors affecting its level",
  stem: "Explain how a decrease in tax rates would impact on AD and the level of economic growth and achievement of the goal of strong and sustainable economic growth.",
  stimulus: null,
  marks: 4,
  criteria: [
    { id: "c1", label: "Description of factor", hint: "Define it before you use it." },
    { id: "c2", label: "Current conditions / policy — positive or negative", hint: "Classify the factor. May need to describe a trend." },
    { id: "c3", label: "Ceteris paribus (or equivalent)", hint: "One short clause showing you are isolating one variable." },
    { id: "c4", label: "Component of AD impacted, increase or decrease", hint: "Name C, I, G1, G2 or (X−M)." },
    { id: "c5", label: "Link to shift of AD — right or left", hint: "State the curve shift, not just that AD changes." },
    { id: "c6", label: "Link to goal(s)", hint: "Name the goal and its target." },
    { id: "c7", label: "Support with current data", hint: "A real figure." }
  ],
  answer: "A decrease in personal income tax means individuals will have more disposable income as they have less tax to pay on their incomes. This would likely increase Consumption which increases aggregate demand (total expenditure on final Australian made goods & services). Therefore increasing the rate of economic growth helping to achieve the goal of Strong & Sustainable economic growth.",
  actual: 2,
  criteriaMet: ["c4", "c6"],
  codesActual: ["C8"],
  why: "Nothing here is wrong. That is exactly why students over-mark it. The chain is correct end to end — tax down, disposable income up, consumption up, AD up, growth up, goal named — but every link is one clause, and a 4-mark question is an instruction to go four links deep. No definition of the factor, no ceteris paribus, no curve shift, no definition or target for the goal, no data. Correct but thin is a 2, not a 4. Check yourself on this one: if you gave it 3 or 4, you are rewarding the absence of error rather than the presence of depth."
},
{
  id: "ws-4-b", src: "ws26_structure", srcLabel: "Structure worksheet",
  q: "4b", qt: "factors", kk: "3.2.4", kkLabel: "Aggregate demand and the factors affecting its level",
  stem: "Explain how a decrease in tax rates would impact on AD and the level of economic growth and achievement of the goal of strong and sustainable economic growth.",
  stimulus: null,
  marks: 4,
  criteria: [
    { id: "c1", label: "Description of factor", hint: "Define it before you use it." },
    { id: "c2", label: "Current conditions / policy — positive or negative", hint: "Classify the factor. May need to describe a trend." },
    { id: "c3", label: "Ceteris paribus (or equivalent)", hint: "One short clause showing you are isolating one variable." },
    { id: "c4", label: "Component of AD impacted, increase or decrease", hint: "Name C, I, G1, G2 or (X−M)." },
    { id: "c5", label: "Link to shift of AD — right or left", hint: "State the curve shift, not just that AD changes." },
    { id: "c6", label: "Link to goal(s)", hint: "Name the goal and its target." },
    { id: "c7", label: "Support with current data", hint: "A real figure." }
  ],
  answer: "Income tax is a direct tax levied on individuals' incomes. A decrease is tax is a positive demand factor as individuals' disposable income will increase. This increase will ceterib paribus lead to an increase in consumption spending leading to an increase in AD and economic growth. The increase in AD will help achieve the goal of strong and sustainable economic growth, the highest growth rate possible leading to strong employment growth, but without running into inflationary of external pressures, around 3-3.5%, which is currently 2.2%",
  actual: 4,
  criteriaMet: ["c1", "c2", "c3", "c4", "c6", "c7"],
  codesActual: [],
  why: "Full marks. Factor defined, classified as a positive demand factor, ceteris paribus stated, component named, goal defined with its target range, and a current figure to close. The only thing missing is the words 'the AD curve shifts to the right', and at 4 marks there is not enough room to require it. Note the typos — 'a decrease is tax', 'ceterib paribus', 'inflationary of external'. Spelling is not marked. Do not deduct for it."
},
{
  id: "ws-4-c", src: "ws26_structure", srcLabel: "Structure worksheet",
  q: "4c", qt: "factors", kk: "3.2.4", kkLabel: "Aggregate demand and the factors affecting its level",
  stem: "Explain how a decrease in tax rates would impact on AD and the level of economic growth and achievement of the goal of strong and sustainable economic growth.",
  stimulus: null,
  marks: 4,
  criteria: [
    { id: "c1", label: "Description of factor", hint: "Define it before you use it." },
    { id: "c2", label: "Current conditions / policy — positive or negative", hint: "Classify the factor. May need to describe a trend." },
    { id: "c3", label: "Ceteris paribus (or equivalent)", hint: "One short clause showing you are isolating one variable." },
    { id: "c4", label: "Component of AD impacted, increase or decrease", hint: "Name C, I, G1, G2 or (X−M)." },
    { id: "c5", label: "Link to shift of AD — right or left", hint: "State the curve shift, not just that AD changes." },
    { id: "c6", label: "Link to goal(s)", hint: "Name the goal and its target." },
    { id: "c7", label: "Support with current data", hint: "A real figure." }
  ],
  answer: "A decrease in personal income tax would increase AD as people would keep more of their incomes, increasing disposable income. This would cause the AD curve to shift right, all else remaining equal and help achieve the goal of strong and sustainable economic growth, which is the highest growth with strong and employment and low inflation.",
  actual: 2,
  criteriaMet: ["c3", "c5", "c6"],
  codesActual: ["C3"],
  why: "This one has things Sample A lacks — the curve shift, ceteris paribus, a partial goal definition — and still earns the same 2. The reason is a hole in the middle: it goes from disposable income straight to AD without ever naming Consumption. AD = C + I + G1 + G2 + (X−M), and if you do not say which component moved, you have not explained the mechanism. Two answers, same mark, different faults: A was thin everywhere, C skips a step. That distinction is the whole skill."
},

/* ---- Q5 AS factors (4 marks) ---- */
{
  id: "ws-5-a", src: "ws26_structure", srcLabel: "Structure worksheet",
  q: "5a", qt: "factors", kk: "3.2.5", kkLabel: "Aggregate supply and the factors affecting its level",
  stem: "Explain the impact of an increase in oil price on aggregate supply and the achievement of the goal of strong and sustainable economic growth.",
  stimulus: null,
  marks: 4,
  dataNotRequired: true,
  criteria: [
    { id: "c1", label: "Description of factor", hint: "What it is and why it matters to producers." },
    { id: "c2", label: "Current conditions — positive or negative", hint: "Classify it as a positive or negative supply factor." },
    { id: "c3", label: "Ceteris paribus (or equivalent)", hint: "One short clause." },
    { id: "c4", label: "Impact on businesses' willingness and/or ability to supply", hint: "The distinctive AS step — do not skip it." },
    { id: "c5", label: "Link to shift of AS — right or left", hint: "State the curve shift." },
    { id: "c6", label: "Link to goal(s)", hint: "Name the goal and its target." },
    { id: "c7", label: "Support with current data", hint: "Not expected for AS factors — the exam usually supplies it." }
  ],
  answer: "An increase in the price of oil will increase the cost of production for business as oil is commonly used in the production process. This will decrease firms willingness and/or ability to supply as they will face a greater cost per unit this will decrease Aggregate supply and cause shortages in supply. As business increase prices to increase profits this will raise the general price level, real GDP will be lower making it less likely to achieve the goal of strong and sustainable economic growth.",
  actual: 3,
  criteriaMet: ["c1", "c4", "c6"],
  codesActual: ["B1"],
  why: "The strongest of the three on mechanism. It explains why oil matters, hits the willingness and ability step properly, and then does something the other two do not — it works through both macroeconomic effects, the general price level rising and real GDP falling, before naming the goal. What it loses is the goal definition and target range. Naming a goal is not the same as linking to it: the assessor wants the target so they can see you know what achievement would look like. You are not expected to quote data for AS factors."
},
{
  id: "ws-5-b", src: "ws26_structure", srcLabel: "Structure worksheet",
  q: "5b", qt: "factors", kk: "3.2.5", kkLabel: "Aggregate supply and the factors affecting its level",
  stem: "Explain the impact of an increase in oil price on aggregate supply and the achievement of the goal of strong and sustainable economic growth.",
  stimulus: null,
  marks: 4,
  dataNotRequired: true,
  criteria: [
    { id: "c1", label: "Description of factor", hint: "What it is and why it matters to producers." },
    { id: "c2", label: "Current conditions — positive or negative", hint: "Classify it as a positive or negative supply factor." },
    { id: "c3", label: "Ceteris paribus (or equivalent)", hint: "One short clause." },
    { id: "c4", label: "Impact on businesses' willingness and/or ability to supply", hint: "The distinctive AS step — do not skip it." },
    { id: "c5", label: "Link to shift of AS — right or left", hint: "State the curve shift." },
    { id: "c6", label: "Link to goal(s)", hint: "Name the goal and its target." },
    { id: "c7", label: "Support with current data", hint: "Not expected for AS factors — the exam usually supplies it." }
  ],
  answer: "With the increase in oil price the cost of production for business will increase shifting the Aggregate Supply curve left. Inflation will increase and GDP will decrease due to less AS and therefore less economic growth, making it less likely to achieve the goal of SSEG",
  actual: 2,
  criteriaMet: ["c5", "c6"],
  codesActual: ["C3"],
  why: "Everything stated is correct, and it is the only one of the three to name the curve shift. But it jumps from 'cost of production will increase' straight to 'shifting the AS curve left' with the actual mechanism missing. Why does a higher cost shift the curve? Because it reduces firms' willingness and ability to supply at every price level. That step is the one the criteria list separately, and leaving it out is the difference between describing an outcome and explaining it. Writing SSEG rather than the goal's name and target also costs you.",
  rewrite: {
    keep: "With the increase in oil price the cost of production for business will increase",
    ask: "Add the one sentence that belongs between this and the curve shift — the willingness and ability step.",
    model: "…which reduces firms' willingness and ability to supply at every price level, shifting the aggregate supply curve to the left."
  }
},
{
  id: "ws-5-c", src: "ws26_structure", srcLabel: "Structure worksheet",
  q: "5c", qt: "factors", kk: "3.2.5", kkLabel: "Aggregate supply and the factors affecting its level",
  stem: "Explain the impact of an increase in oil price on aggregate supply and the achievement of the goal of strong and sustainable economic growth.",
  stimulus: null,
  marks: 4,
  dataNotRequired: true,
  criteria: [
    { id: "c1", label: "Description of factor", hint: "What it is and why it matters to producers." },
    { id: "c2", label: "Current conditions — positive or negative", hint: "Classify it as a positive or negative supply factor." },
    { id: "c3", label: "Ceteris paribus (or equivalent)", hint: "One short clause." },
    { id: "c4", label: "Impact on businesses' willingness and/or ability to supply", hint: "The distinctive AS step — do not skip it." },
    { id: "c5", label: "Link to shift of AS — right or left", hint: "State the curve shift." },
    { id: "c6", label: "Link to goal(s)", hint: "Name the goal and its target." },
    { id: "c7", label: "Support with current data", hint: "Not expected for AS factors — the exam usually supplies it." }
  ],
  answer: "Real GDP refer to the average market price of goods and services after inflation. An increase in oil prices is a negative supply factor due to the increase in cost of production. This will decrease businesses willingness and ability to supply at all price points. This will slow growth and real GDP making it less likely to achieve the goal of SSEG.",
  actual: 3,
  criteriaMet: ["c1", "c2", "c4", "c6"],
  codesActual: ["B2"],
  why: "This ticks more boxes than Sample A and earns the same 3 — a useful reminder that ticking a criterion is not the same as earning a mark. It is the only one to classify the factor as a negative supply factor, and 'at all price points' is precisely right. But it opens with a definition of real GDP that is both unnecessary and wrong: real GDP is the total value of national production adjusted for inflation, not an average market price. A wrong definition of something the question never asked about is the worst of both worlds — it costs time and it costs credibility."
},

/* ---- Q6 Strengths and weaknesses of monetary policy (6 marks) ---- */
{
  id: "ws-6-a", src: "ws26_structure", srcLabel: "Structure worksheet",
  q: "6a", qt: "evaluate", kk: "4.1.20", kkLabel: "Strengths and weaknesses of using monetary policy",
  stem: "Describe a strength and weakness of using monetary policy to achieve the government goals and increase living standards.",
  stimulus: null,
  marks: 6,
  criteria: [
    { id: "c1", label: "Identification of a specific strength", hint: "Named, and specific to this policy." },
    { id: "c2", label: "Explanation of the specific strength", hint: "Why it is a strength — the mechanism." },
    { id: "c3", label: "Clear link between the strength and the macroeconomic goal", hint: "Named goal, with its target." },
    { id: "c4", label: "Identification of a specific weakness", hint: "Named, and specific to this policy." },
    { id: "c5", label: "Explanation of the specific weakness", hint: "How it limits the policy." },
    { id: "c6", label: "Clear link between the weakness and the macroeconomic goal", hint: "Named goal, with its target." }
  ],
  answer: "a strength of monetary policy is that is has very little implementation lag this is because it independent and doesn't have to go through the government. This is effective in achieving the goal of price stability which is the stability of the currency and is set at the CPI 2-3%, it is effective because when the cash rate is lowered this lowers the cost of money making it more inviting for households to borrow money increasing households disposable income allowing them to spend it in to economy causing the prices to rise which is the current goal of price stability. Furthermore this will then help achieve our goal of strong and sustainable economic growth because when households are spending more ten real GDP will increase and that is how you measure economic growth. therefore also improving living standards because material living standards is the access to goods and services which would increase with lower interest rates, and then so will nonmaterial because households quality of life wold also increase having more disposable income to spend.\n\na weakness of monetary policy is that it is not effective in stimulating AD during a downturn, this is because when the economy is falling households are more likely to save money not spend it or take out another loan, also because of the slow impact lag meaning it takes time for the changes to take affect. This would have a negative impact on strong and sustainable economic growth because households are spending less lowering real GDP. Furthermore spending less will also lower the CPI which not what the economy wants or needs. this will therefore have a negative impact on living standards because households availability to goods and services would have decreased and also their quality of life due to the economy being in a low point.",
  actual: 4,
  criteriaMet: ["c1", "c2", "c4", "c5", "c6"],
  codesActual: ["B2", "C5"],
  why: "Both sides are fully structured, both reach a goal, and both close on material and non-material living standards. That is worth 4. The strength's transmission is where it breaks: borrowing money does not increase disposable income. Disposable income is income after tax. What a rate cut frees up is discretionary income — what is left after committed costs like loan repayments. The examiner reports flag this exact substitution every year. There is also no contemporary data anywhere in six marks of writing."
},
{
  id: "ws-6-b", src: "ws26_structure", srcLabel: "Structure worksheet",
  q: "6b", qt: "evaluate", kk: "4.1.20", kkLabel: "Strengths and weaknesses of using monetary policy",
  stem: "Describe a strength and weakness of using monetary policy to achieve the government goals and increase living standards.",
  stimulus: null,
  marks: 6,
  criteria: [
    { id: "c1", label: "Identification of a specific strength", hint: "Named, and specific to this policy." },
    { id: "c2", label: "Explanation of the specific strength", hint: "Why it is a strength — the mechanism." },
    { id: "c3", label: "Clear link between the strength and the macroeconomic goal", hint: "Named goal, with its target." },
    { id: "c4", label: "Identification of a specific weakness", hint: "Named, and specific to this policy." },
    { id: "c5", label: "Explanation of the specific weakness", hint: "How it limits the policy." },
    { id: "c6", label: "Clear link between the weakness and the macroeconomic goal", hint: "Named goal, with its target." }
  ],
  answer: "a strength of the monetary policy is the implementation lag is extremely short which reduce interest rate go into market are sell CGS to meet the level of cash rate and mortgage rate changes therefore a positive outcome is achieved. This will those who have mortgages will have more discretionary income and their ability to purchase basic goods and services is increase therefore material living standards is increased. A weakness of the is that the monetary policy is less effective as indebtedness increases this would put strain of the wellbeing of those who are already high in debt and reduce their non-material living standards as stress levels would increase",
  actual: 2,
  criteriaMet: ["c1", "c4"],
  codesActual: ["C2", "C10"],
  why: "Both sides are identified and both reach living standards — but neither ever names a macroeconomic goal. The question asks about achieving the government goals, and this answer travels all the way to material and non-material living standards without once stopping at price stability, full employment or strong and sustainable economic growth. That is C2: the chain runs and runs and never lands where the question asked it to. The mechanism is also garbled — selling CGS raises the cash rate, which contradicts the rate cut being described. Credit where it is due: this answer uses 'discretionary income' correctly, which Sample A does not.",
  rewrite: {
    keep: "A strength of monetary policy is that the implementation lag is extremely short. Once the RBA Board decides to lower the cash rate, lending rates across the economy fall within days, leaving households with variable-rate loans more discretionary income, which supports consumption and therefore aggregate demand.",
    ask: "This version fixes the mechanism for you. Add the one sentence it is still missing — the landing on a macroeconomic goal, with its target.",
    model: "…Higher aggregate demand increases the derived demand for labour, supporting the goal of full employment, where only natural unemployment exists, currently thought to be a NAIRU of approximately 4.25%."
  }
},
{
  id: "ws-6-c", src: "ws26_structure", srcLabel: "Structure worksheet",
  q: "6c", qt: "evaluate", kk: "4.1.20", kkLabel: "Strengths and weaknesses of using monetary policy",
  stem: "Describe a strength and weakness of using monetary policy to achieve the government goals and increase living standards.",
  stimulus: null,
  marks: 6,
  criteria: [
    { id: "c1", label: "Identification of a specific strength", hint: "Named, and specific to this policy." },
    { id: "c2", label: "Explanation of the specific strength", hint: "Why it is a strength — the mechanism." },
    { id: "c3", label: "Clear link between the strength and the macroeconomic goal", hint: "Named goal, with its target." },
    { id: "c4", label: "Identification of a specific weakness", hint: "Named, and specific to this policy." },
    { id: "c5", label: "Explanation of the specific weakness", hint: "How it limits the policy." },
    { id: "c6", label: "Clear link between the weakness and the macroeconomic goal", hint: "Named goal, with its target." }
  ],
  answer: "The Monetary Policy (MP) involves the manipulation of key financial variables in the economy (cash rate) in order to achieve specific economic goals. A strength of MP is that the implementation lag is relatively short compared to other policies as it takes very little time to implement a MP decision once the Reserve Bank of Australia (RBA) Board decides to change policy settings. Once the decision is made to lower the official cash rate, the RBA will adjust the balance on exchange settlement accounts immediately to achieve the new target cash rate. This will flow into other rate provided by banks relatively quickly. Households and businesses with variable loan rates will then see the increase in the discretionary income as less income is required to pay off interest expense. This will help to stimulate Consumption and Investment and as Aggregate Demand (AD) increases, the goal of strong and sustainable economic growth (highest growth rate possible, consistent with strong employment growth, but without running into inflationary, external or environmental pressures, thought to be a rate of approximately 3-3.5%) can be achieved. The goal of full employment (a situation where only natural unemployment exists and where cyclical unemployment is the lowest rate that can be achieved without causing inflation) will also be simultaneously achieved as when AD increases, the derived demand for labour also increases. A weakness of MP is that it is less effective at stimulating AD during an economic downturn. Due to the low consumer confidence (79.5) caused by the COVID-19 pandemic, consumers are now much more likely to de-leverage as interest rates go down rather than spend more. Unfortunately, deleveraging does not contribute directly to AD, causing the inflation rate to maintain to a deflation rate of 0.3%, which is not achieving the goal of price stability (to achieve stability of the Australian currency so it does not negatively impact on consumers purchasing power and the target rate is 2 to 3%). Overall, MP aims to increase material living standard by providing households with a job to allow them to purchase goods and service as the decrease in interest rates aims to stimulate AD and non-material living standard by reassuring that their country will remain financially stable.",
  actual: 6,
  criteriaMet: ["c1", "c2", "c3", "c4", "c5", "c6"],
  codesActual: [],
  why: "Full marks, and worth reading twice to see why. Every link in the transmission is present — Board decision, exchange settlement accounts, bank lending rates, discretionary income, C and I, AD. Both goals are defined with their target ranges. Both sides carry real data: consumer confidence at 79.5, deflation at 0.3%. 'Discretionary income' is used correctly. This is what a 6 looks like, and the gap between this and Sample A is not effort — Sample A is nearly as long. It is that every sentence here does a job."
},

/* ============================================================
   SOURCE 2 — Assessing responses booklet (8 items)
   Marks are Megan's own. Codes mapped from her G/T/R/D examiner-comment
   key onto the shared A/B/C taxonomy. Criteria drafted from the
   structure guides — NEEDS VERIFICATION.
   ============================================================ */

{
  id: "ar-1", src: "ar26_examiner", srcLabel: "Assessing responses booklet",
  q: "SA1", qt: "impact", kk: "3.2.4", kkLabel: "Aggregate demand factors — rates of economic growth overseas",
  stem: "Outline one likely consequence for Australia's growth rate if a major trading partner were to enter a recession.",
  stimulus: null,
  marks: 2,
  legacyCodes: "T2, R1",
  criteria: [
    { id: "c1", label: "The effect on demand for Australian exports", hint: "Lower incomes overseas mean less spending on our exports." },
    { id: "c2", label: "The link to net exports and aggregate demand", hint: "(X−M) is a component of AD." },
    { id: "c3", label: "The consequence for Australia's rate of economic growth", hint: "What the question actually asked for." }
  ],
  answer: "A recession occurs when a country experiences two negative quarters of economic growth, which will result in higher levels of unemployment. When a trading partner experiences rising unemployment then their economy will slow down and they won't buy as much from other countries such as Australia.",
  actual: 0,
  criteriaMet: ["c1"],
  codesActual: ["C2", "A6"],
  why: "This answer never mentions Australia's growth rate — the one thing the question asked for. It gets as far as 'they won't buy as much from Australia' and stops, one step short of net exports, AD and growth. It also opens by defining a recession, which nobody asked for and which eats a third of a two-mark answer. Zero is correct: a consequence that is never stated cannot be awarded.",
  rewrite: {
    keep: "When a trading partner experiences rising unemployment then their economy will slow down and they won't buy as much from other countries such as Australia.",
    ask: "Add the sentence that finishes the job — carry it through to Australia's rate of economic growth.",
    model: "…This reduces Australia's export earnings and therefore net exports, a component of aggregate demand, so aggregate demand falls and Australia's rate of economic growth slows."
  }
},
{
  id: "ar-2", src: "ar26_examiner", srcLabel: "Assessing responses booklet",
  q: "SA2", qt: "difference", kk: "3.2.16", kkLabel: "Measurement of inflation — headline and underlying rates",
  stem: "Distinguish between the headline inflation rate and the underlying inflation rate.",
  stimulus: null,
  marks: 2,
  legacyCodes: "T3",
  criteria: [
    { id: "c1", label: "Headline inflation correctly defined", hint: "The change in the CPI across all items in the basket." },
    { id: "c2", label: "Underlying inflation correctly defined", hint: "Excludes the most volatile price movements — the trimmed mean." },
    { id: "c3", label: "The difference stated explicitly", hint: "'Distinguish' needs a sentence naming the difference." }
  ],
  answer: "Inflation is a situation when the general level of prices is rising. The headline inflation rate refers to that inflation rate reported in the daily newspapers while the underlying rate looks at the factors responsible for the headline rate of inflation.",
  actual: 1,
  criteriaMet: ["c1"],
  codesActual: ["B2", "A1"],
  why: "The underlying rate does not 'look at the factors responsible' for headline inflation — it is the same basket with the most volatile price movements stripped out, which the RBA measures as the trimmed mean. That is a wrong definition, not an imprecise one. The task word compounds it: 'distinguish' requires a sentence that names the difference, and describing two things separately is not the same as distinguishing them."
},
{
  id: "ar-3", src: "ar26_examiner", srcLabel: "Assessing responses booklet",
  q: "SA3", qt: "aud", kk: "3.3.8", kkLabel: "Effect of exchange rate movements on the goals and living standards",
  stem: "If the value of the Australian dollar were to change from US$0.90 to US$0.70, explain how this could impact Australia's tourism sector.",
  stimulus: null,
  marks: 3,
  legacyCodes: "R1, D4",
  criteria: [
    { id: "c1", label: "Identifies the change as a depreciation, using the figures", hint: "Name it, and quote the movement." },
    { id: "c2", label: "Explains the relative price mechanism", hint: "Australian holidays become cheaper in foreign currency; overseas travel dearer for Australians." },
    { id: "c3", label: "States the consequence for the tourism sector", hint: "Inbound tourism, export earnings, employment." }
  ],
  answer: "According to the figures, the value of the Australian dollar has changed against the US dollar. In this case, it has got lower. A lower dollar should be good for tourism in Australia because more tourists will come here and fewer Australians will want to travel overseas because it will be more expensive to do so. This should be good for jobs in Australia.",
  actual: 1,
  criteriaMet: ["c3"],
  codesActual: ["C3", "C6"],
  why: "The conclusion is right, which is why this feels like more than one mark. But ask why more tourists come: because a depreciation makes an Australian holiday cheaper in US dollars. That sentence is the mechanism, it is where two of the three marks sit, and it is not here. The figures are gestured at — 'according to the figures' — and then never used. Naming a depreciation and quoting the movement from US$0.90 to US$0.70 costs one line and earns a mark.",
  rewrite: {
    keep: "A lower dollar should be good for tourism in Australia because",
    ask: "Replace what follows with the actual mechanism, using the figures.",
    model: "…a depreciation from US$0.90 to US$0.70 means an Australian holiday costs an American visitor around 22% less in US dollar terms, so inbound tourist numbers rise, while overseas travel becomes dearer for Australians, encouraging them to holiday domestically."
  }
},
{
  id: "ar-4", src: "ar26_examiner", srcLabel: "Assessing responses booklet",
  q: "SA4", qt: "factors", kk: "3.2.4", kkLabel: "Aggregate demand factors — disposable income",
  stem: "Explain how the change in the Household Savings Ratio since 2013 would have affected household consumption and demand for new motor vehicles during the period 2014 to 2016.",
  stimulus: "The Household Savings Ratio falls from approximately 11% in 2013 to approximately 9% by 2016.",
  marks: 3,
  legacyCodes: "G5, R4, D4",
  criteria: [
    { id: "c1", label: "Describes the change in the HSR using the data", hint: "Direction and figures." },
    { id: "c2", label: "Explains the effect on household consumption", hint: "A lower savings ratio means more of a given income is spent." },
    { id: "c3", label: "Links specifically to demand for new motor vehicles", hint: "A durable, discretionary purchase — explain why it responds." }
  ],
  answer: "The data shows that the Household Savings ratio has fallen to around 9 per cent since 2013. As a result, households are not saving as much and spending more on buying goods and services, which includes such things as new motor vehicles. This could be because new car prices are more affordable due to them being cheaper to import as a result of the free trade agreements that Australia has signed.",
  actual: 1,
  criteriaMet: ["c1", "c2"],
  codesActual: ["A6", "C1"],
  why: "Two criteria are met and it still earns 1, which is worth sitting with. The third sentence abandons the question entirely: free trade agreements and import prices explain why cars might be cheaper, not how the savings ratio affected demand for them. A third of a three-mark answer spent outside the question is a third of the marks gone. The link to motor vehicles is also asserted rather than explained — why do car sales respond to consumption more sharply than, say, groceries?"
},
{
  id: "ar-5", src: "ar26_examiner", srcLabel: "Assessing responses booklet",
  q: "SA5", qt: "stabiliser", kk: "4.1.8", kkLabel: "The role of automatic stabilisers in the budget",
  stem: "Explain how slower rates of economic growth will impact the automatic stabilizers built into the 2019-20 Commonwealth budget.",
  stimulus: null,
  marks: 4,
  legacyCodes: "G4, T5, R1",
  criteria: [
    { id: "c1", label: "Answers on the budget year named in the question", hint: "The question says 2019-20. Answer on 2019-20." },
    { id: "c2", label: "Explains the receipts effect", hint: "Slower growth means less PAYG and company tax collected." },
    { id: "c3", label: "Explains the outlays effect", hint: "More people qualify for unemployment benefits, so welfare outlays rise." },
    { id: "c4", label: "States the direction of change in the budget outcome", hint: "The movement between years, not the sign of the number." }
  ],
  answer: "Each year when the Commonwealth budget is delivered to parliament by the Treasurer, it has built into it a number of automatic stabilizers, which adjust government revenue and spending according to what happens to the economy over the coming year. When the economy slows as it has over the past couple of years, the amount of money paid to the government in the form of taxation is less. At the same time, an economy that is slowing will mean that the government will need to pay out more in unemployment and other welfare benefits. The result will be that the 2018-19 budget will become a deficit.",
  actual: 1,
  criteriaMet: ["c2", "c3"],
  codesActual: ["A3", "A5"],
  why: "This is the answer most people over-mark, and by a lot. Nothing in it is factually wrong and it reads fluently. But it answers on the 2018-19 budget when the question named 2019-20, and an explicit instruction ignored is an instruction failure, not a typo. It then overclaims: slower growth moves the outcome towards deficit, it does not make the budget 'become a deficit' — what determines the stance is the movement between years, not the sign of the number. The receipts and outlays effects are also described rather than explained.",
  rewrite: {
    keep: "When the economy slows, the amount of money paid to the government in the form of taxation is less, and the government will need to pay out more in unemployment and other welfare benefits.",
    ask: "Add the closing sentence, on the correct budget year, stating the direction of change rather than the sign.",
    model: "…As receipts fall relative to outlays, the 2019-20 budget outcome moves towards deficit — the deficit widens relative to the previous year, which is expansionary."
  },
  teacherNote: "Megan — this mark of 1/4 is harsh against the criteria as I have drafted them, since the receipts and outlays mechanics are both there. Worth a second look: 2/4 may sit better, though 1/4 makes the stronger teaching point about instruction failures."
},
{
  id: "ar-6", src: "ar26_examiner", srcLabel: "Assessing responses booklet",
  q: "SA6", qt: "impact", kk: "3.3.4", kkLabel: "Composition and cause of net foreign debt and net foreign equities",
  stem: "'We must ensure that the size of the current account deficit is kept to an acceptable level.' Discuss.",
  stimulus: null,
  marks: 5,
  legacyCodes: "G5, T1, R1",
  criteria: [
    { id: "c1", label: "States a position on the proposition", hint: "'Discuss' needs a stance, not a survey." },
    { id: "c2", label: "One developed argument that a large CAD is a problem", hint: "Net foreign debt, servicing costs, vulnerability to a loss of confidence." },
    { id: "c3", label: "One developed argument on the other side", hint: "A CAD financing productive investment adds to future capacity." },
    { id: "c4", label: "Supporting evidence or data", hint: "A real figure." },
    { id: "c5", label: "A weighted conclusion", hint: "Which side dominates, and why." }
  ],
  answer: "I agree that it is important to ensure that the size of the current account balance is kept to an acceptable level. The Balance of Payments records transactions between Australia and the rest of the world. It involves two parts: the current account and the capital and financial account. The current account records transactions involving the export and import of goods and services and net primary and secondary incomes. Australia usually has a current account deficit each year mostly because of the high negative figure for Primary Incomes due to profits, interest and dividends being paid each year to overseas lenders and investors. If Australia keeps running current account deficits this will increase the level of foreign debt the country has because it needs to borrow money to pay for the deficit.\n\nA current account deficit can be good for Australia because it means that we are accessing more goods and services from overseas, which will result in an improvement in our standard of living. However, it can also be bad because in order to finance the deficit we need to borrow from overseas which adds to our levels of debt.",
  actual: 1,
  criteriaMet: ["c1"],
  codesActual: ["A6", "C8"],
  why: "Four of the six sentences define the balance of payments, which the question never asked about. The part that was asked — the discussion — is two sentences at the end, one for each side, neither developed, with no data and no conclusion. This is the classic five-mark trap: the answer is long, everything in it is accurate, and almost none of it is on the question. Length is not depth, and a definition you were not asked for is worth zero no matter how correct it is."
},
{
  id: "ar-7", src: "ar26_examiner", srcLabel: "Assessing responses booklet",
  q: "SA7", qt: "refdata", kk: "3.2.4", kkLabel: "Aggregate demand factors — business investment",
  stem: "With reference to Table 1, explain how changes to business investment levels have affected Australia's rate of economic growth and how the Reserve Bank has reacted to these changes.",
  stimulus: "Table 1 — GDP (annual % change) and Business Investment (share of GDP):\n2011-12: GDP 3.7, Investment 19.1\n2012-13: GDP 2.6, Investment 17.3\n2013-14: GDP 3.1, Investment 16.1\n2014-15: GDP 2.0, Investment 14.7\n2015-16: GDP 3.3, Investment 12.8",
  marks: 6,
  legacyCodes: "D3, D4, R1, R4",
  criteria: [
    { id: "c1", label: "Describes the trend in business investment correctly, using the data", hint: "A trend, not a recitation of every row." },
    { id: "c2", label: "Explains investment as a component of AD and the effect on growth", hint: "I is a component of AD — say so." },
    { id: "c3", label: "Uses the GDP data to support the link", hint: "Integrate the figures into the explanation." },
    { id: "c4", label: "Identifies the RBA's response", hint: "Cuts to the cash rate over the period." },
    { id: "c5", label: "Explains why the RBA responded that way", hint: "Conditions to stance — the arrow points this direction." },
    { id: "c6", label: "Links the response back to a goal", hint: "Named, with its target." }
  ],
  answer: "The level of business investment has changed significantly over the years shown in Table 1. From a high of 19.1 per cent as a share of GDP in 2011-12, it fell to 17.3 per cent in 2012-13, to 16.1 in 2013-14, 14.7 in 2014-15 and was 3.3 per cent in 2015-16. During the same years, the level of GDP varied from a high of 3.7 per cent in 2011-12, down to 2.6 per cent in 2012-13 before going back up again in 2013-14 and down during 2014-15.\n\nThe Reserve Bank during these years felt that it was necessary to support the economy. This was because the end of the mining boom caused the economy to slow. It thought that the economy could enter a recession. To avoid this it cut interest rates on a number of occasions to help give stimulus to the economy and create higher levels of consumer spending. This worked because Australia has been able to avoid a recession and the unemployment rate has been kept to an acceptable level.",
  actual: 2,
  criteriaMet: ["c4", "c5"],
  codesActual: ["C6", "C3"],
  why: "The first paragraph copies out every figure in the table and interprets none of them. Reciting data is not referring to it — the instruction 'with reference to Table 1' means use the numbers to support an explanation, not transcribe them. It also misreads the table: business investment in 2015-16 was 12.8 per cent, not 3.3 — 3.3 is the GDP figure from the other column. And the central mechanism never appears: investment is a component of aggregate demand, so falling investment reduces AD and slows growth. Two marks for the RBA half, nothing for the first."
},
{
  id: "ar-8", src: "ar26_examiner", srcLabel: "Assessing responses booklet",
  q: "SA8", qt: "structural", kk: "4.2.1", kkLabel: "Aggregate supply policies complementing aggregate demand policies",
  stem: "Discuss the effectiveness of using fiscal and monetary policy when tackling the problem of structural unemployment.",
  stimulus: null,
  marks: 6,
  legacyCodes: "G4, T1, T4, T5, R1",
  criteria: [
    { id: "c1", label: "Defines structural unemployment correctly", hint: "A mismatch between workers' skills and the skills demanded." },
    { id: "c2", label: "Explains that demand-side policies address cyclical, not structural, unemployment", hint: "This is the hinge of the whole question." },
    { id: "c3", label: "Assesses monetary policy against structural unemployment specifically", hint: "Effectiveness, not description." },
    { id: "c4", label: "Assesses budgetary policy, including any supply-side measures", hint: "Training, education, infrastructure." },
    { id: "c5", label: "Supporting evidence or example", hint: "A real measure or figure." },
    { id: "c6", label: "A weighted conclusion on effectiveness", hint: "Which policy, and how effective, and why." }
  ],
  answer: "Monetary policy involves the Reserve Bank making changes to its policy settings in order to affect the cost of credit in Australia. It involves the Reserve Bank changing interest rates, which represent the cost of borrowing money. Changes to interest rates mostly come about as a result of the Reserve Bank changing the target cash rate through open market operations, which is the buying, and selling of government securities in the overnight money market. If the Reserve Bank wants to raise interest rates, it sells bonds, whereas if it wants to lower them, it buys back bonds.\n\nFiscal policy (also called Budget policy) refers to the governments planned spending and revenue for the upcoming year. Budgets can be in deficit, surplus or balanced. Each type of budget impacts the economy differently.\n\nStructural unemployment is a type of natural unemployment. Natural unemployment represents around 5 per cent of Australia's workforce and consists of seasonal, hard-core, frictional and structural unemployment. Structural unemployment occurs when industries shut down or relocate as a result of a change in government policy such as when tariff levels are cut and workers are retrenched.\n\nIf the government wants to tackle structural unemployment, it can use both policies to stimulate the economy to create demand for workers. It can do this by cutting interest rates and increasing spending levels through such things as tax cuts or spending on infrastructure.",
  actual: 1,
  criteriaMet: ["c1"],
  codesActual: ["A1", "B3"],
  why: "Four paragraphs, almost all of it accurate, and it earns 1 out of 6. The task word is 'discuss the effectiveness' and the answer describes the policies instead — three paragraphs of description before the question is touched. Then the one sentence that does address it gets the economics backwards: stimulating aggregate demand creates demand for workers whose skills are already in demand. Structural unemployment is a skills mismatch, so demand-side policy largely cannot fix it. That is what makes this question interesting, and the answer walks straight past it.",
  rewrite: {
    keep: "Structural unemployment occurs when industries shut down or relocate and workers are retrenched.",
    ask: "Add the sentence that answers the question — why demand-side policy struggles here.",
    model: "…Because these workers lack the skills the growing industries demand, stimulating aggregate demand through lower interest rates or higher government spending largely cannot re-employ them. Monetary and budgetary policy are therefore of limited effectiveness against structural unemployment, which requires aggregate supply policies such as retraining and education."
  }
}

];

if (typeof module !== "undefined") { module.exports = { ASSESS_ITEMS }; }
