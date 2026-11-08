# Year 11 Unit 2 exam portal

Student-facing revision tools for Unit 2. Same design and record format as the Year 12 portal in `/exam/`.

- `index.html`: code word, today's tasks, links to every tool and to the existing Year 11 content tools.
- `marks-tracker.html` + `tracker-data.js`: Where your marks went. Add a new SAC or practice exam by adding an entry to `ASSESS`.
- `practice.html` + `practice-data.js`: Practice by question type, plus "Mark someone else's answer".
- `mc-practice.html` + `mc-data.js`: Multiple choice with spaced re-test.
- `show-dont-tell.html` + `sd-data.js`: Show, don't tell. Students rewrite a "telling" claim as a chain, then tick the links they included. Missed items come back in 2 days, then 5. The tracker links here when Explain a chain is costing marks, and from the C3 drill.
- `read-the-question.html`: task word and two-part drill. Stems can carry a stimulus (`st`), a note on limiting words (`n`) and other accepted task words (`wa`). Add new stems at the end only.
- `definitions.html` + `defs-data.js`: Blank page definitions, confusion pairs, and the "Example or definition?" round (`XD`): 10 statements sorted into Example / Not quite a definition / Full definition, then fix the ones missed.
- `teacher.html`: teacher view (PIN). Shows what each student has completed and their results; click a student for the detail. Copies a plain-text progress list for Compass.
- `rtq-data.js`: the Read the Question task words and question bank (shared with the teacher view).
- `portal-data.js`: shared spine (storage, key knowledge codes, error codes, drills, re-test schedule, teacher sync, class roll).
- `portal.css`: shared styles.

Storage namespace is `econ11u2-2026:`. It must stay different from Year 12 (`econ2026:`) and from any Unit 1 portal, because every portal shares browser storage on this site. Bump the year for each new cohort. A Unit 1 portal needs its own folder (e.g. `u1-exam`), namespace (e.g. `econ11u1-2026:`), backup prefix and `HUB_ID`.

## Notes (November review)

- On a shared computer the portal asks "Is your code word X?" once per browser session, and every tool header has a "not you?" link.
- Practice answers are saved with the mark, and shown after marking the next time the question comes back.
- The tracker asks for a fresh "where did my marks go?" prediction every time new marks are saved.
- To make the portal findable, add this line to `LINKS` in `links.html`:
  `{ unit:"U2 Exam", title:"Year 11 Unit 2 exam portal", type:"Hub", url:BASE+"u2-exam/index.html?v=1" },`

## Teacher view

- Students pick their name from `ROLL` (in `portal-data.js`) once, on the portal home page.
- Each save sends a summary to the `vce-results` Worker, hub `u2ex26`, lesson `portal`: what the student has completed and their results (entered SAC marks, self-marked practice scores, Show, don't tell links included, MC and Example or definition? right first try). Never what they write, and never the code word. The portal home page tells students this.
- `teacher.html` reads them back with the same PIN as the Trade and Labour Market hubs.
