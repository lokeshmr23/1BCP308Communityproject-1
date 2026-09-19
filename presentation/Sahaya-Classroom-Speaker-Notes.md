# Sahaya — Classroom speaker notes

Author: Dr. Lokesh M R | Professor, Department of Information Science & Engineering | AJIET, Mangaluru

Suggested format: 20–25 minutes for the core lesson, plus optional author-profile slides and a three-minute demonstration.

Based on the complete project package and 48-page continuation report. No new field trial or educational impact is claimed.

## 01 | Opening

01 | Opening

Timing: ~45 seconds

Introduce Sahaya as a technically tested educational prototype, not a completed school intervention. The deck is built from the project ZIP and its 48-page report. The session moves from the course mandate and district context to the learner experience, open data, a small model, test evidence and responsible deployment. There are no fabricated school names, participants or learning gains.

Classroom cue: Ask: What makes an educational tool useful beyond simply working on a laptop?

Evidence / source: Report front matter; package README.md

Status discipline: These slides describe the delivered prototype and recorded technical tests. They do not claim school approval, a learner trial, educational impact, or remote Render deployment.

## 02 | Author profile

02 | Author profile

Timing: ~45 seconds

Introduce Dr. Lokesh M R as Professor in the Department of Information Science & Engineering at A J Institute of Engineering and Technology, Mangaluru, Karnataka, India, affiliated to Visvesvaraya Technological University (VTU), Belagavi. The supplied biography states over 22 years of teaching, research and administrative experience across premier institutions in Karnataka. Qualifications: Ph.D. in Computer Science & Engineering from Sathyabama Institute of Science and Technology; M.Tech in Information Technology from NIE, Mysore; B.E. in Electronics & Communication Engineering from PES College of Engineering, Mandya. These author details were supplied for the presentation and have not been independently verified.

Classroom cue: Keep the introduction brief; research, contact and acknowledgement slides are available near the end.

Evidence / source: Author information supplied by the user.

Status discipline: These slides describe the delivered prototype and recorded technical tests. They do not claim school approval, a learner trial, educational impact, or remote Render deployment.

## 03 | Prescribed project row

03 | Prescribed project row

Timing: ~1 minute

Read the engineering outcome, emphasizing the words “as per the requirements of the special school.” The title is reproduced only because it is the prescribed course wording. In the rest of the presentation use “learners with intellectual disabilities” or “learners requiring individualized support.” The generic prototype is delivered, but the school-specific part of the outcome is still pending. PO and SDG mapping is intended alignment rather than a certification or achieved score.

Classroom cue: Which part of this outcome cannot be proved with code alone? Answer: requirements from, and acceptance by, the special school.

Evidence / source: Report PDF p. 4; docs/REQUIREMENTS.md

Status discipline: These slides describe the delivered prototype and recorded technical tests. They do not claim school approval, a learner trial, educational impact, or remote Render deployment.

## 04 | Problem and scope

04 | Problem and scope

Timing: ~1 minute

Explain that these are design questions and assumptions, not findings from a local needs survey. The scope is foundational practice supported by an educator. The tool does not assess disability, rank ability, replace instruction or keep identified student accounts. Model selection comes later and serves a narrow demonstrative purpose. Requirements must reflect the actual learner, input method, communication preferences and classroom context.

Classroom cue: Ask learners to name one accessibility requirement that may differ between two users.

Evidence / source: Report Chs. 3–4; docs/REQUIREMENTS.md; docs/FIELD_PROTOCOL.md

Status discipline: These slides describe the delivered prototype and recorded technical tests. They do not claim school approval, a learner trial, educational impact, or remote Render deployment.

## 05 | District context and map provenance

05 | District context and map provenance

Timing: ~50 seconds

Identify Karnataka and Mangaluru. The outline is extracted from geoBoundaries India ADM2, represented year 2021, source Pathways Data Pvt. Ltd. and lgdirectory.gov.in. Retrieval in 2026 does not update its boundary vintage. The Mangaluru point is an approximate hand-entered orientation marker; sea shading is schematic. No school location, partnership or service coverage is implied. The derivative GeoJSON is supplied under ODbL 1.0.

Classroom cue: Why is displaying a boundary year important?

Evidence / source: Report Ch. 2 and Appendix A; public/data/dakshina-kannada.geojson; docs/SOURCES.md

Status discipline: These slides describe the delivered prototype and recorded technical tests. They do not claim school approval, a learner trial, educational impact, or remote Render deployment.

## 06 | Content composition

06 | Content composition

Timing: ~45 seconds

Count five cards each for numbers, colours, shapes and everyday life: twenty authored cards. Ten additional handwriting cards use UCI test examples and are available from the educator workspace. Do not call the twenty authored cards a secondary dataset or a survey. All thirty have both language fields. A structural language-field check is not proof of good translation or suitable teaching content. Each short session presents three or five cards, so the full pack is not shown at once.

Classroom cue: Ask the class to distinguish “authored teaching content” from “secondary data.”

Evidence / source: Report Ch. 9; public/data/lessons.json; scripts/make_lessons.py

Status discipline: These slides describe the delivered prototype and recorded technical tests. They do not claim school approval, a learner trial, educational impact, or remote Render deployment.

## 07 | Home screen walkthrough

07 | Home screen walkthrough

Timing: ~45 seconds

Point to the numbers, colours, shapes and everyday-life cards. The interface gives a clear entry point rather than starting with an assessment or profile form. This is a screenshot captured from the delivered app, not evidence of use in a school. Explain where progress, district context and educator resources live in the navigation. The live demonstration later will use the same interface.

Classroom cue: Invite one student to describe the first action they would take on this screen.

Evidence / source: Package evidence/app-desktop.png; report Part A and Ch. 8

Status discipline: These slides describe the delivered prototype and recorded technical tests. They do not claim school approval, a learner trial, educational impact, or remote Render deployment.

## 08 | Language support

08 | Language support

Timing: ~45 seconds

The Kannada screenshot shows the actual language switch, not an English-only mock-up with a translated title. A bundled Noto Sans Kannada font avoids reliance on an external font CDN. However, no local special educator has certified the text. Technical educator notes and map annotations remain English-only. Read-aloud uses the browser’s available voices and is not guaranteed to supply a Kannada voice or work offline.

Classroom cue: What should a local language reviewer check besides literal translation?

Evidence / source: Package evidence/app-kannada.png; docs/SOURCES.md; docs/REQUIREMENTS.md

Status discipline: These slides describe the delivered prototype and recorded technical tests. They do not claim school approval, a learner trial, educational impact, or remote Render deployment.

## 09 | Practice loop

09 | Practice loop

Timing: ~1 minute

A wrong answer produces supportive feedback and leaves the card available. A correct answer unlocks Next. The log distinguishes first-try success from a card completed after retries, but this does not make it an ability measure. Category sessions rotate using the device completion count; this is a simple deterministic rule, not machine-learning personalization. The screenshot was captured for the presentation from the delivered app with an automated example, not a learner trial.

Classroom cue: Ask: Why should “eventually correct” and “correct on the first try” be recorded separately?

Evidence / source: Report Ch. 8; public/engine.js and app.js; screenshot from the local delivered app

Status discipline: These slides describe the delivered prototype and recorded technical tests. They do not claim school approval, a learner trial, educational impact, or remote Render deployment.

## 10 | Accessibility and individual needs

10 | Accessibility and individual needs

Timing: ~1 minute

Describe the included design features without promising universal accessibility. The application provides larger text, contrast settings, visible focus, untimed choices and supportive feedback. Visual recognition activities still require alternatives for some users. A clean automated accessibility scan cannot establish cognitive accessibility, keyboard/switch suitability, screen-reader quality or educational usefulness. Educators and learners must validate the actual device, input method and sensory preferences.

Classroom cue: Use the displayed question. A good answer proposes an equivalent learning goal with a non-visual activity rather than merely increasing contrast.

Evidence / source: Report Ch. 11; docs/FIELD_PROTOCOL.md; evidence/accessibility.json; settings screenshot from delivered app

Status discipline: These slides describe the delivered prototype and recorded technical tests. They do not claim school approval, a learner trial, educational impact, or remote Render deployment.

## 11 | Privacy and persistence

11 | Privacy and persistence

Timing: ~1 minute

Clarify the distinction between local processing and total anonymity. The app itself does not collect names, diagnoses or accounts and does not upload practice logs. Ordinary hosting request metadata still exists, and optional browser voice providers may use the network. Persistence is off by default; opt-in storage combines practice on a shared browser. Exported CSVs remain files needing responsible handling. The CSV schema is date, session token, category, card, attempts and firstCorrect. There is no secure per-student database.

Classroom cue: Ask why shared-device progress should not be interpreted as one child’s progress.

Evidence / source: Report Ch. 8; docs/REQUIREMENTS.md; docs/DEPLOYMENT.md; public/app.js

Status discipline: These slides describe the delivered prototype and recorded technical tests. They do not claim school approval, a learner trial, educational impact, or remote Render deployment.

## 12 | Source register

12 | Source register

Timing: ~1 minute

Distinguish data, graphics, model code and fonts. The MIT project licence does not override CC BY, ODbL or OFL obligations on included materials. The district’s actual metadata lists ODbL 1.0, so do not assume every geoBoundaries feature is CC BY. AI4Bharat IndicTrans2 has a model card listing MIT and Kannada support, but is only a future candidate here. Dataset finder links are discovery aids, not live integrations or guarantees of lawful, representative data.

Classroom cue: Ask the class to identify which row contains executable model code rather than a dataset.

Evidence / source: Report Appendix A; docs/SOURCES.md; docs/MODEL_CARD.md

Status discipline: These slides describe the delivered prototype and recorded technical tests. They do not claim school approval, a learner trial, educational impact, or remote Render deployment.

## 13 | How 3-NN works

13 | How 3-NN works

Timing: ~1 minute

Use the illustrated UCI test example, row 3. The source provides sixty-four values for an eight-by-eight image, each between zero and sixteen. The model measures Euclidean distance to training vectors and uses the labels of the three nearest neighbours with uniform voting. The displayed prediction for this example is three. Python uses scikit-learn; the browser has an original small equivalent. Browser tie handling may differ in edge cases, and saved parity tests cover twenty examples. No learner drawing is collected.

Classroom cue: If two of three neighbours vote for 3 and one for 8, what is the result?

Evidence / source: Report Ch. 9; docs/MODEL_CARD.md; public/data/digits-examples.json; public/engine.js

Status discipline: These slides describe the delivered prototype and recorded technical tests. They do not claim school approval, a learner trial, educational impact, or remote Render deployment.

## 14 | Interpret the evaluation correctly

14 | Interpret the evaluation correctly

Timing: ~1 minute

The full Python reference evaluation gives 1,758 correct out of 1,797 held-out source digits, or 97.8297 percent. There are thirty-nine classification errors. Training uses the original 3,823 rows; the original source split has distinct writer groups and was not tuned on test labels here. The browser parity test checks twenty examples only. The dataset is not a validated sample of local special-school learners and does not establish fairness or clinical or pedagogical validity.

Classroom cue: Ask: Which conclusion is justified—“the model classified source digits well” or “children learned 97.83% better”?

Evidence / source: public/data/model-metrics.json; docs/MODEL_CARD.md; report Ch. 9

Status discipline: These slides describe the delivered prototype and recorded technical tests. They do not claim school approval, a learner trial, educational impact, or remote Render deployment.

## 15 | Architecture

15 | Architecture

Timing: ~1 minute

Walk left to right. Python is a build and reproducibility dependency, not part of Render’s runtime. The deployable public directory includes the lesson pack, model vectors, font and map. The browser grades practice by the authored answer key; the 3-NN model is a separate educator demonstration. A content-derived service-worker key supports offline caching after an initial complete download. Browser cache can be evicted, and direct file:// opening is not promised. No model API, database or authenticated teacher backend is present.

Classroom cue: Why can Render serve this project without a Python start command?

Evidence / source: Report Chs. 8–10; scripts/prepare_data.py; public/engine.js; render.yaml

Status discipline: These slides describe the delivered prototype and recorded technical tests. They do not claim school approval, a learner trial, educational impact, or remote Render deployment.

## 16 | Technical evidence

16 | Technical evidence

Timing: ~1 minute

The delivered package records nine passing Node tests and nineteen passing Chromium checks. The browser flow includes wrong-answer feedback, first-try counting, completion, CSV download, persistence opt-in, clearing data, language switch, map serving, model demo, source filtering, mobile width and offline use. Fifteen week checks were each run twice with equal stdout. Twenty-two source/site artifact hashes match before and after regeneration. Timing values and screenshots are not claimed byte-identical. Axe scans found zero violations in four main views but cannot certify universal accessibility. These are existing recorded results, not a new classroom evaluation.

Classroom cue: Which additional checks require real people and the actual school device?

Evidence / source: Package evidence folder; report Chs. 11 and 14

Status discipline: These slides describe the delivered prototype and recorded technical tests. They do not claim school approval, a learner trial, educational impact, or remote Render deployment.

## 17 | Live demonstration run sheet

17 | Live demonstration run sheet

Timing: ~3 minutes

Before presenting, start the app from the extracted sahaya directory using node scripts/build.mjs and node server.mjs, then visit http://localhost:3000 on the presenter computer. No cloud account is required. Have the site ready before starting the three-minute walkthrough. Use a deliberately wrong number choice, then the correct answer; explain the difference between retry and first-try success. Show language/settings, then progress and reset without entering personal data. The educator workspace demonstrates source examples only. Finish on the district map. If the app cannot run, use screenshots on slides 7–10; do not imply a deployment exists.

Classroom cue: Invite the audience to predict what changes after an incorrect answer, then demonstrate it.

Evidence / source: docs/DEPLOYMENT.md; public app; screenshot fallback slides 7–10

Status discipline: These slides describe the delivered prototype and recorded technical tests. They do not claim school approval, a learner trial, educational impact, or remote Render deployment.

## 18 | Deployment handover

18 | Deployment handover

Timing: ~1 minute

A live sandbox preview is not the same as a public Render service. The owner must create or connect a remote Git repository and authenticate through their own account. The Render Blueprint uses runtime static and publishes public/. The build command is node scripts/build.mjs; there is no backend start command or database. Check current hosting quotas and charges rather than promising universal free hosting. Verify the final HTTPS URL and initial offline cache on the actual device. The supplied Git bundle preserves local history if the source ZIP is copied without .git metadata.

Classroom cue: Ask which steps require the project owner’s account and cannot be claimed complete here.

Evidence / source: Report Ch. 15 and Appendix D; docs/DEPLOYMENT.md; render.yaml

Status discipline: These slides describe the delivered prototype and recorded technical tests. They do not claim school approval, a learner trial, educational impact, or remote Render deployment.

## 19 | Course alignment and planning

19 | Course alignment and planning

Timing: ~45 seconds

The 48-page report organizes work according to the same fifteen-week progression as the supplied book. Two hours of term work and two hours of self-learning per week produce thirty plus thirty hours. The engineering prototype was built for the delivery; the schedule is a proposed educational organization of work, not proof that a fifteen-week intervention has happened. Week 12 fieldwork remains pending. Role slots cover coordination and ethics, content and accessibility, engineering and data, and QA and documentation. Team names and guide details must be supplied locally.

Classroom cue: What should the report say if field permission is delayed? Answer: pending—not simulated participation.

Evidence / source: Report TLP table and Ch. 6; docs/plan.json; docs/PLAN.md

Status discipline: These slides describe the delivered prototype and recorded technical tests. They do not claim school approval, a learner trial, educational impact, or remote Render deployment.

## 20 | Responsible next steps

20 | Responsible next steps

Timing: ~1 minute

Make the outcome distinction explicit. The app, code, map, model and receipts are delivered outputs. School acceptance, usefulness, engagement and learning would require approved evaluation. Start with school permission and a special educator’s review. Apply caregiver consent and learner assent where required, allow stopping without penalty, and collect only necessary observations. Do not place signed forms or identifiable records in the public repository. An automation-generated CSV cannot be presented as a learner session.

Classroom cue: Ask the class to place “30 cards” and “improved independence” in the correct columns.

Evidence / source: Report Chs. 12–13; docs/FIELD_PROTOCOL.md; docs/REQUIREMENTS.md

Status discipline: These slides describe the delivered prototype and recorded technical tests. They do not claim school approval, a learner trial, educational impact, or remote Render deployment.

## 21 | Research & academic service

21 | Research & academic service

Timing: ~45 seconds

The supplied professional profile lists Cyber-Physical Systems, Artificial Immune Systems, Fault-Tolerant Computing and Multi-Agent Systems as Dr. Lokesh M R’s specialisations. It also states extensive publication in Scopus-indexed and UGC-approved journals, a granted patent, current supervision of Ph.D. scholars under VTU, invited talks at FDPs, workshops and conferences, and contributions to KSCST- and AICTE-funded projects. Life memberships: CSI and ISTE. No publication total, patent number or specific grant value has been added because none was supplied.

Classroom cue: Use the scholarly-profile links on the next slide for the author’s publication and professional records.

Evidence / source: Author biography supplied by the user; not independently verified.

Status discipline: These slides describe the delivered prototype and recorded technical tests. They do not claim school approval, a learner trial, educational impact, or remote Render deployment.

## 22 | Contact & scholarly profiles

22 | Contact & scholarly profiles

Timing: Reference only

All contact details and profile URLs are reproduced from the information supplied by the user. Email: lokeshmrmysore@gmail.com. Mobile: +91 9964050926. ORCID: https://orcid.org/0000-0003-0025-7941 . Scopus: https://www.scopus.com/authid/detail.uri?authorId=57687382800 . Google Scholar: https://scholar.google.co.in/citations?user=CCfMxaMAAAAJ . LinkedIn: https://www.linkedin.com/in/lokesh-m-r-b6880b169/ . GitHub: https://github.com/lokeshmr23 . VIDWAN: https://vidwan.inflibnet.ac.in/profile/344450 . Web of Science ID: JCF-0012-2023. Links are embedded; opening external profiles requires connectivity.

Classroom cue: Share the slide rather than asking the audience to transcribe identifiers. No live-link validation or ownership verification is claimed.

Evidence / source: User-supplied contact and profile information.

Status discipline: These slides describe the delivered prototype and recorded technical tests. They do not claim school approval, a learner trial, educational impact, or remote Render deployment.

## 23 | Acknowledgement & dedication

23 | Acknowledgement & dedication

Timing: ~30 seconds

Acknowledge VTU, Belagavi for the curriculum framework; A J Institute of Engineering and Technology, Mangaluru for infrastructure; Prof. Ian Goodfellow, Yoshua Bengio and Aaron Courville for their textbook Deep Learning; all students who provided feedback; and family for constant support and encouragement. The supplied dedication reads: “This book is dedicated to all VTU students who aspire to excel in their examinations.” The slide adapts this wording to a presentation without changing its audience or intent. The acknowledgement of general student feedback is not evidence of a special-school pilot or a learner trial for Sahaya.

Classroom cue: Thank the contributors while keeping the project’s outstanding school-validation requirements clear.

Evidence / source: Acknowledgement and dedication text supplied by the user.

Status discipline: These slides describe the delivered prototype and recorded technical tests. They do not claim school approval, a learner trial, educational impact, or remote Render deployment.

## 24 | Closing discussion

24 | Closing discussion

Timing: ~1 minute

Invite two or three responses before offering the summary. Strong answers connect technical evidence to the actual learner and classroom rather than assuming an accuracy percentage guarantees educational value. Revisit the three boundaries: no primary fieldwork yet, no clinical or learning assessment by the model, and no remote account deployment completed. The defensible conclusion is a sourced, technically tested, deployable prototype whose next step is authorized local validation.

Classroom cue: Exit ticket: Name one completed engineering result, one unsupported claim to avoid, and one next action.

Evidence / source: Report Chs. 13–15; Appendix C; docs/FIELD_PROTOCOL.md

Status discipline: These slides describe the delivered prototype and recorded technical tests. They do not claim school approval, a learner trial, educational impact, or remote Render deployment.

## 25 | Source and reproduction guide

25 | Source and reproduction guide

Timing: Reference only

Use this slide as a reference rather than reading every line aloud. The principal evidence is the delivered report and package. The source register in docs/SOURCES.md gives licence details, modifications and pinned geography provenance. Additional URLs: official district profile https://dk.nic.in/en/about-district/ ; Twemoji https://github.com/twitter/twemoji/tree/v14.0.2 ; Kannada font https://github.com/google/fonts/tree/main/ofl/notosanskannada . To reproduce, follow README.md and docs/DEPLOYMENT.md. The model card states the original split, limitations and browser parity scope. The full report retains the prescribed course row and week-led evidence.

Classroom cue: Offer the PPTX/PDF and package to anyone who wants to inspect or reproduce the evidence.

Evidence / source: Report Appendix A and Appendix D; package README.md; docs/SOURCES.md

Status discipline: These slides describe the delivered prototype and recorded technical tests. They do not claim school approval, a learner trial, educational impact, or remote Render deployment.
