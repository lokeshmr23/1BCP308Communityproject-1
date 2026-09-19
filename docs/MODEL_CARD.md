# Model card — transparent digit baseline

**Purpose:** demonstrate reuse of a recognized secondary dataset and an open-source model implementation. The model runs in the educator view, not as a gatekeeper for learner progress.

**Algorithm:** 3-nearest neighbours, raw 64-dimensional intensities in 0..16, Euclidean metric, uniform voting, smallest class in a vote tie. Python reference: scikit-learn 1.6.1. Browser: original `predictKnn` implementation in `public/engine.js` (MIT). The exported vectors are the UCI training set (CC BY 4.0); this is not an independently pretrained foundation model.

**Split:** original 3,823-row `optdigits.tra` and 1,797-row `optdigits.tes`. UCI documents distinct writer groups (30 training / 13 testing writers). No reshuffling, tuning on test labels, augmentation or extra normalization. Source preprocessing aggregates 32×32 bitmaps into 8×8 counts. No missing values expected. Validate shape, range, labels and original split.

**Measured reference result:** 1,758 / 1,797 correct, accuracy 0.9782971619365609 (97.83%). Full confusion matrix is in `public/data/model-metrics.json`. Run `python scripts/prepare_data.py` to recompute; no internet needed after dependencies and bundled raw files are available.

**Browser validation:** 20 held-out examples are checked for prediction parity by the Node tests. The 97.83% metric is from the full Python reference evaluation, not a claim of a full browser re-evaluation. Neighbour-distance ties can be ordered differently between libraries; the browser breaks ties by source row order. Twenty examples were selected by first two test rows per label, not randomly sampled for a new evaluation.

**Not supported:** Kannada script or Kannada numerals, free-form learner handwriting, diagnosis, disability classification, ability ranking, personalized remediation, fairness guarantees or learning-gain measurement. Dataset participants do not establish representativeness for students in Dakshina Kannada. Low-resolution digits may be unsuitable for some learners. Regular counting activities do not depend on this model.

**Privacy:** no learner pixels, names, biometric or medical data collected. All model inference is local. Runtime browser speech synthesis is an unrelated optional OS/browser feature; it is not an open-source model provided here.

**Optional model discovery:** AI4Bharat IndicTrans2 is documented in SOURCES.md only, not executed. Large-model hosting is deliberately outside this static deployment.
