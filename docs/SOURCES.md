# Source register & attribution
Retrieved/reviewed 20 September 2026. These are secondary sources, not data from local children.

| Resource | Provenance / version | Licence / conditions | Actual use |
|---|---|---|---|
| Optical Recognition of Handwritten Digits | E. Alpaydin and C. Kaynak (1998), UCI Machine Learning Repository, DOI [10.24432/C50P49](https://doi.org/10.24432/C50P49). [Repository](https://archive.ics.uci.edu/dataset/80/optical+recognition+of+handwritten+digits) | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Retain authors, source and modification notice. | Original `optdigits.tra` (3,823) and `optdigits.tes` (1,797); all rows used for model fit/evaluation. Twenty held-out examples selected, ten converted to lesson images. |
| geoBoundaries IND ADM2 | [API metadata](https://www.geoboundaries.org/api/current/gbOpen/IND/ADM2/), ID IND-ADM2-76128533, year 2021, commit 9469f09; source: Pathways Data Pvt. Ltd., lgdirectory.gov.in | **ODbL 1.0**, as explicitly reported by this boundary's metadata—not assumed CC BY. [Licence](https://opendatacommons.org/licenses/odbl/1-0/) | One-feature extraction of simplified geometry, `shapeName == Dakshina Kannada`. Derived GeoJSON is distributed under ODbL 1.0. SVG rendered with a local equirectangular projection; north up. Approximate 20 km scale. |
| Dakshina Kannada District Administration | [About District](https://dk.nic.in/en/about-district/) | Factual contextual reference; not re-licensed as a dataset | Confirms Karnataka coastal district and Mangaluru headquarters. No government endorsement claimed. |
| Mangaluru marker | Approximate hand-entered city-centre point, 12.9141 N, 74.8560 E | Project annotation, not surveyed geospatial data | One orientation marker, not a school, service boundary or navigation waypoint. No accuracy claim. |
| Twemoji | Twitter and other contributors, [v14.0.2](https://github.com/twitter/twemoji/tree/v14.0.2), assets 1f34e, 1f34c, 1f9fc, 1f4a7 | [CC BY 4.0 graphics](https://github.com/twitter/twemoji/blob/v14.0.2/LICENSE-GRAPHICS) | Four unmodified SVG illustrations. Activity labels and questions are project-authored. |
| scikit-learn | [KNeighborsClassifier](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KNeighborsClassifier.html), version 1.6.1 | [BSD-3-Clause](https://github.com/scikit-learn/scikit-learn/blob/1.6.1/COPYING) | Executed 3-NN baseline. A small original JavaScript implementation performs equivalent browser voting. Model vectors retain UCI data attribution. |
| Noto Sans Kannada | [Google Fonts repository](https://github.com/google/fonts/tree/main/ofl/notosanskannada), downloaded 2026-09-20 | SIL OFL 1.1, bundled `public/assets/NotoSansKannada-OFL.txt` | Bundled font so Kannada does not depend on a CDN or OS font. SHA256 is in the source manifest. |
| IndicTrans2 En–Indic distilled 200M | AI4Bharat, [model card](https://huggingface.co/ai4bharat/indictrans2-en-indic-dist-200M/blob/main/README.md) | Card lists MIT, `kan_Knda`; verify current access terms before downloading | **Optional only. Not downloaded or executed.** No claim of AI translation, TTS, or LLM-based adaptation in the application. |
| Render | [Blueprint reference](https://render.com/docs/blueprint-spec) | Hosting account/terms apply; check current quotas and prices | Static deployment specification: `runtime: static`, `staticPublishPath: ./public`. No Render account action performed. |
| User-supplied course book | Community-Project-1BCP308-Book.pdf, Dr. Lokesh M R, September 2026 | Reference supplied by user. Original attribution retained. | Format and course-row reference only. Original survey/pilot numbers are not reused as observed facts. |

## Reproducible source locations
UCI archive: https://archive.ics.uci.edu/static/public/80/optical+recognition+of+handwritten+digits.zip

Pinned map download (Git LFS object):
https://media.githubusercontent.com/media/wmgeolab/geoBoundaries/9469f09/releaseData/gbOpen/IND/ADM2/geoBoundaries-IND-ADM2_simplified.geojson

Map transformation: extract the one named feature, preserve coordinate rings, render with x = longitude × cos(mid-latitude), y = latitude at a local scale. This is not a current administrative/legal boundary certification. Sea/Western Ghats background labels are contextual, not additional geospatial layers.

## Dataset/model finders (discovery only)
- [Google Dataset Search](https://datasetsearch.research.google.com/search?query=Kannada%20education)
- [Hugging Face datasets](https://huggingface.co/datasets?search=kannada) and [models](https://huggingface.co/models?search=indictrans2)
- [UCI Repository](https://archive.ics.uci.edu/datasets)
- [Open Government Data India](https://www.data.gov.in/)
- [Kaggle](https://www.kaggle.com/datasets?search=kannada)

A finder result is not automatically open-licensed or suitable. Record origin, licence, version, representation, consent constraints and expert review before integration. Do not scrape individual school/learner records.
