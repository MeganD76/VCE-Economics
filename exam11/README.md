# Year 11 exam portal

Student-facing revision tools for Unit 2. Same design and record format as the Year 12 portal in `/exam/`.

- `index.html`: code word, today's tasks, links to every tool and to the existing Year 11 content tools.
- `marks-tracker.html` + `tracker-data.js`: Where your marks went. Add a new SAC or practice exam by adding an entry to `ASSESS`.
- `practice.html` + `practice-data.js`: Practice by question type, plus "Mark someone else's answer".
- `mc-practice.html` + `mc-data.js`: Multiple choice with spaced re-test.
- `read-the-question.html`: task word and two-part drill.
- `definitions.html` + `defs-data.js`: Blank page definitions and confusion pairs.
- `teacher.html`: teacher view (PIN). Shows what each student has completed and their results; click a student for the detail. Copies a plain-text progress list for Compass.
- `rtq-data.js`: the Read the Question task words and question bank (shared with the teacher view).
- `portal-data.js`: shared spine (storage, key knowledge codes, error codes, drills, re-test schedule, teacher sync, class roll).
- `portal.css`: shared styles.

Storage namespace is `econ11-2026:`. It must stay different from Year 12 (`econ2026:`) because both portals share browser storage on this site. Bump the year for each new cohort.

## Notes (November review)

- On a shared computer the portal asks "Is your code word X?" once per browser session, and every tool header has a "not you?" link.
- Practice answers are saved with the mark, and shown after marking the next time the question comes back.
- The tracker asks for a fresh "where did my marks go?" prediction every time new marks are saved.
- To make the portal findable, add this line to `LINKS` in `links.html`:
  `{ unit:"U2 Exam", title:"Year 11 exam portal", type:"Hub", url:BASE+"exam11/index.html" },`

## Teacher view

- Students pick their name from `ROLL` (in `portal-data.js`) once, on the portal home page.
- Each save sends a summary to the `vce-results` Worker, hub `ex11`, lesson `portal`: what the student has completed and their results (entered SAC marks, self-marked practice scores, MC right first try). Never what they write, and never the code word. The portal home page tells students this.
- `teacher.html` reads them back with the same PIN as the Trade and Labour Market hubs.
