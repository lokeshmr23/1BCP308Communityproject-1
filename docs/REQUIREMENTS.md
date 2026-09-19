# Requirement and outcome ledger

## Prescribed row — wording preserved
| Sl. No. | Broad Areas/Project titles | Measurable engineering outcome | Specific POs | SDGs |
|---|---|---|---|---|
| 1 | Computer-Based Learning Tool for Mentally Challenged Students | Design and develop a web/browserbased learning tool as per the requirements of the special school. | 5, 6 | 4 |

Historical course wording is retained above only. The application and new narrative use “learners with intellectual disabilities” or “learners requiring individualized support.”

School-specific requirements have **not yet been collected or approved**. The engineering prototype is complete within the baseline below; conformance to a particular special school's requirements is pending.

| ID | Baseline requirement | Acceptance evidence | Status |
|---|---|---|---|
| R1 | Browser-based, English/Kannada activities | 30 content cards; automated locale check | Implemented; Kannada expert review pending |
| R2 | Foundational numbers, colours, shapes, daily habits | 20 authored cards; 10 optional UCI digit cards | Implemented; pedagogical validation pending |
| R3 | No timed response, retries with supportive feedback | Browser correct/retry checks | Implemented |
| R4 | Large controls, focus, contrast, larger text | CSS + automated accessibility checks | Implemented; individual access testing pending |
| R5 | Anonymous session tracking and CSV; optional local retention | Persistence, reset, export tests | Implemented; shared-device caveat |
| R6 | Offline after successful initial cache | Offline reload and activity check in Chromium | Implemented; cache eviction/voice limitations |
| R7 | Sourced district map and open resources | ODbL GeoJSON, CC BY digits, attribution | Implemented; 2021 boundary vintage |
| R8 | Open-source model and reproducible evaluation | scikit-learn 3-NN + local browser demonstration | Implemented; not learner assessment |
| R9 | Git/Render handover | Local Git history, CI, render.yaml, deployment guide | Prepared; remote deployment not performed |
| R10 | School-approved requirements and field benefit | Permission, consent, observation and feedback templates | Pending, cannot be replaced with secondary data |

## PO and SDG mapping
- **PO5:** tool selection, data provenance, implementation, model evaluation, mapping, testing and version control—with explicit limits.
- **PO6:** community relevance, local-language adaptation, safeguarding, privacy, accessibility and responsible engagement. Actual field engagement remains pending.
- **SDG 4:** supports the aim of inclusive and equitable quality education. No measured SDG indicator improvement is asserted. Intended alignment with 4.5 and 4.a is contextual, not a certification.

## Exclusions
No diagnosis, live school directory, health/learner records, authentication, cloud database, teacher analytics over identified children, or unsupported learning-gain claims. No invisible collection. No timers. Per-learner profiles and content-editing dashboards require separate requirements/security review.
