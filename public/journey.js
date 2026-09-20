// Sahaya v1.1 — original, local SVG icons and a privacy-preserving learning journey.
// No funnel analytics, subscriptions, payments, or learner records enter this module.
export const PUBLIC_LINKS = Object.freeze({
  app: 'https://sahaya-learning.onrender.com',
  repository: 'https://github.com/lokeshmr23/1BCP308Communityproject-1',
  manual: 'https://github.com/lokeshmr23/1BCP308Communityproject-1/tree/main/reports',
  slides: 'https://github.com/lokeshmr23/1BCP308Communityproject-1/tree/main/presentation'
});
const pair = (en, kn) => ({en, kn});
export const JOURNEY_STEPS = [
  {id:'discover', label:pair('Discover','ಪರಿಚಯ'), summary:pair('Meet your learning space','ಕಲಿಕೆಯ ಪರಿಚಯ'),
   title:pair('A little help to get started.','ಪ್ರಾರಂಭಿಸಲು ಸ್ವಲ್ಪ ಸಹಾಯ.'),
   intro:pair('Sahaya is a gentle place to practise with an educator or a trusted helper. Start small, and take your time.','ಶಿಕ್ಷಕರು ಅಥವಾ ಸಹಾಯಕರೊಂದಿಗೆ ಅಭ್ಯಾಸ ಮಾಡಲು ಸಹಾಯ ಒಂದು ಸರಳ ಕಲಿಕಾ ಸಾಧನ. ನಿಧಾನವಾಗಿ ಪ್ರಾರಂಭಿಸಿ.'),
   tips:pair(['Use the language button at the top to choose English or Kannada.','Open Learning settings for larger text, contrast, and 3- or 5-card practice.','No account or timer. You can stop whenever you need a break.'],['ಮೇಲಿನ ಭಾಷೆಯ ಗುಂಡಿಯಿಂದ ಇಂಗ್ಲಿಷ್ ಅಥವಾ ಕನ್ನಡ ಆಯ್ಕೆ ಮಾಡಿ.','ದೊಡ್ಡ ಅಕ್ಷರ, ಬಣ್ಣ ವ್ಯತ್ಯಾಸ ಮತ್ತು 3 ಅಥವಾ 5 ಕಾರ್ಡ್‌ಗಳಿಗಾಗಿ ಕಲಿಕೆಯ ಆಯ್ಕೆಗಳನ್ನು ತೆರೆಯಿರಿ.','ಖಾತೆ ಅಥವಾ ಸಮಯದ ಮಿತಿ ಇಲ್ಲ. ಬೇಕಾದಾಗ ವಿರಾಮ ತೆಗೆದುಕೊಳ್ಳಿ.']),
   action:'begin', actionLabel:pair('Begin practice · Numbers','ಅಭ್ಯಾಸ ಪ್ರಾರಂಭಿಸಿ · ಸಂಖ್ಯೆಗಳು'), value:pair('Feel comfortable before your first card.','ಮೊದಲ ಕಾರ್ಡ್‌ಗೆ ಮುನ್ನ ಅನುಕೂಲವಾಗುವಂತೆ ಹೊಂದಿಸಿ.')},
  {id:'choose', label:pair('Choose','ಆಯ್ಕೆ'), summary:pair('Find an activity','ಚಟುವಟಿಕೆ ಆರಿಸಿ'),
   title:pair('One activity is a good beginning.','ಒಂದು ಚಟುವಟಿಕೆಯಿಂದ ಪ್ರಾರಂಭಿಸಿ.'),
   intro:pair('Choose numbers, colours, shapes, or everyday life. An educator can help you find the right activity.','ಸಂಖ್ಯೆಗಳು, ಬಣ್ಣಗಳು, ಆಕಾರಗಳು ಅಥವಾ ದಿನನಿತ್ಯದ ಜೀವನವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ. ಸೂಕ್ತ ಚಟುವಟಿಕೆ ಆರಿಸಲು ಶಿಕ್ಷಕರು ಸಹಾಯ ಮಾಡಬಹುದು.'),
   tips:pair(['Choose something familiar and interesting.','Each practice uses a short set of cards, not the whole pack.','Visual activities are not right for everyone. Ask your educator for an alternative if needed.'],['ಪರಿಚಿತ ಮತ್ತು ಆಸಕ್ತಿದಾಯಕ ವಿಷಯವನ್ನು ಆರಿಸಿ.','ಪ್ರತಿ ಅಭ್ಯಾಸದಲ್ಲಿ ಕೆಲವು ಕಾರ್ಡ್‌ಗಳು ಮಾತ್ರ ಇರುತ್ತವೆ.','ದೃಶ್ಯ ಚಟುವಟಿಕೆಗಳು ಎಲ್ಲರಿಗೂ ಸೂಕ್ತವಲ್ಲ. ಬೇಕಾದರೆ ಶಿಕ್ಷಕರಿಂದ ಬೇರೊಂದು ಚಟುವಟಿಕೆ ಕೇಳಿ.']),
   action:'choose', actionLabel:pair('Choose an activity','ಚಟುವಟಿಕೆ ಆರಿಸಿ'), value:pair('A relevant activity, not a one-size-fits-all path.','ನಿಮಗೆ ಸೂಕ್ತವಾದ ಚಟುವಟಿಕೆ ಆಯ್ಕೆ ಮಾಡಿ.')},
  {id:'learn', label:pair('Learn','ಕಲಿಕೆ'), summary:pair('Understand the card','ಕಾರ್ಡ್ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ'),
   title:pair('Look. Read. Choose.','ನೋಡಿ. ಓದಿ. ಆಯ್ಕೆ ಮಾಡಿ.'),
   intro:pair('Every card has one question and a few choices. A helper can read the prompt or explain what to do.','ಪ್ರತಿ ಕಾರ್ಡ್‌ನಲ್ಲಿ ಒಂದು ಪ್ರಶ್ನೆ ಮತ್ತು ಕೆಲವು ಆಯ್ಕೆಗಳಿವೆ. ಸಹಾಯಕರು ಪ್ರಶ್ನೆಯನ್ನು ಓದಿ ವಿವರಿಸಬಹುದು.'),
   tips:pair(['Read the question and look at the picture or shape.','Read aloud is optional. A matching browser voice may not be installed, and some voices need internet.','Choose an answer. When it is correct, select Next card when you are ready.'],['ಪ್ರಶ್ನೆಯನ್ನು ಓದಿ, ಚಿತ್ರ ಅಥವಾ ಆಕಾರವನ್ನು ನೋಡಿ.','ಓದಿ ಹೇಳುವ ಧ್ವನಿ ಐಚ್ಛಿಕ. ಸೂಕ್ತ ಧ್ವನಿ ಸಾಧನದಲ್ಲಿ ಇರದಿರಬಹುದು; ಕೆಲವು ಧ್ವನಿಗಳಿಗೆ ಇಂಟರ್ನೆಟ್ ಬೇಕು.','ಉತ್ತರ ಆಯ್ಕೆ ಮಾಡಿ. ಸರಿಯಾದಾಗ ಸಿದ್ಧರಾದ ಮೇಲೆ ಮುಂದಿನ ಕಾರ್ಡ್ ಆಯ್ಕೆ ಮಾಡಿ.']),
   action:'choose', actionLabel:pair('Try a learning card','ಕಲಿಕಾ ಕಾರ್ಡ್ ಪ್ರಯತ್ನಿಸಿ'), value:pair('Clear instructions, one question at a time.','ಒಂದೊಂದೇ ಪ್ರಶ್ನೆ, ಸರಳ ಸೂಚನೆಗಳು.')},
  {id:'practise', label:pair('Practise','ಅಭ್ಯಾಸ'), summary:pair('Try at your own pace','ನಿಮ್ಮ ವೇಗದಲ್ಲಿ ಪ್ರಯತ್ನಿಸಿ'),
   title:pair('Every little try counts.','ಪ್ರತಿ ಪ್ರಯತ್ನವೂ ಮುಖ್ಯ.'),
   intro:pair('There is no rush. Try again when you need to, and pause whenever you wish.','ಅವಸರವಿಲ್ಲ. ಬೇಕಾದಾಗ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ. ಬೇಕಾದಾಗ ವಿರಾಮ ತೆಗೆದುಕೊಳ್ಳಿ.'),
   tips:pair(['A wrong choice gives a gentle retry message, not a penalty.','A correct choice enables the next card. There is no automatic timed advance.','You can return to this guide during practice and resume your current card.'],['ತಪ್ಪು ಆಯ್ಕೆಗೆ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸುವ ಸಂದೇಶ ಬರುತ್ತದೆ; ದಂಡವಿಲ್ಲ.','ಸರಿಯಾದ ಆಯ್ಕೆಯ ನಂತರ ಮುಂದಿನ ಕಾರ್ಡ್ ತೆರೆಯಬಹುದು. ಸಮಯದ ಆಧಾರದ ಮೇಲೆ ಮುಂದುವರಿಯುವುದಿಲ್ಲ.','ಅಭ್ಯಾಸದ ಮಧ್ಯೆ ಈ ಮಾರ್ಗದರ್ಶಿಯನ್ನು ನೋಡಿ ಅದೇ ಕಾರ್ಡ್‌ಗೆ ಮರಳಬಹುದು.']),
   action:'practice', actionLabel:pair('Begin practice','ಅಭ್ಯಾಸ ಪ್ರಾರಂಭಿಸಿ'), value:pair('Build familiarity through supported practice.','ಸಹಾಯದೊಂದಿಗೆ ಅಭ್ಯಾಸ ಮಾಡಿ ಪರಿಚಯ ಬೆಳೆಸಿಕೊಳ್ಳಿ.')},
  {id:'review', label:pair('Review','ಪರಿಶೀಲನೆ'), summary:pair('Reflect on practice','ಅಭ್ಯಾಸ ಪರಿಶೀಲಿಸಿ'),
   title:pair('Notice the practice—not a grade.','ಅಭ್ಯಾಸವನ್ನು ನೋಡಿ, ಅಂಕಗಳನ್ನಲ್ಲ.'),
   intro:pair('My progress shows completed cards and first-try answers on this browser. Review them with your educator.','ನನ್ನ ಪ್ರಗತಿಯಲ್ಲಿ ಈ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಮುಗಿಸಿದ ಕಾರ್ಡ್‌ಗಳು ಮತ್ತು ಮೊದಲ ಪ್ರಯತ್ನದ ಉತ್ತರಗಳು ಕಾಣುತ್ತವೆ. ಶಿಕ್ಷಕರೊಂದಿಗೆ ಪರಿಶೀಲಿಸಿ.'),
   tips:pair(['These are device-level records; a shared device combines different users.','Records disappear on reload unless Remember progress is turned on.','Counts do not measure ability or learning gains. Export or clear records only as agreed with your educator.'],['ಇವು ಸಾಧನದ ದಾಖಲೆಗಳು. ಹಂಚಿಕೊಂಡ ಸಾಧನದಲ್ಲಿ ಎಲ್ಲರ ಅಭ್ಯಾಸ ಒಟ್ಟಾಗುತ್ತದೆ.','ಪ್ರಗತಿ ಉಳಿಸುವ ಆಯ್ಕೆ ಇಲ್ಲದಿದ್ದರೆ ಮರುತೆರೆದಾಗ ದಾಖಲೆಗಳು ಅಳಿಯುತ್ತವೆ.','ಈ ಸಂಖ್ಯೆಗಳು ಸಾಮರ್ಥ್ಯ ಅಥವಾ ಕಲಿಕಾ ಸುಧಾರಣೆಯ ಅಳತೆಯಲ್ಲ. ಶಿಕ್ಷಕರ ಒಪ್ಪಿಗೆಯಂತೆ ಮಾತ್ರ ದಾಖಲೆಗಳನ್ನು ರಫ್ತು ಮಾಡಿ ಅಥವಾ ಅಳಿಸಿ.']),
   action:'review', actionLabel:pair('View my progress','ನನ್ನ ಪ್ರಗತಿ ನೋಡಿ'), value:pair('Useful reflection without ranking a learner.','ಕಲಿಕಾರ್ಥಿಗೆ ಶ್ರೇಣಿ ನೀಡದೆ ಅಭ್ಯಾಸ ಪರಿಶೀಲಿಸಿ.')},
  {id:'share', label:pair('Share','ಹಂಚಿಕೆ'), summary:pair('Pass on the public link','ಸಾರ್ವಜನಿಕ ಲಿಂಕ್ ಹಂಚಿ'),
   title:pair('Share the resource, not the records.','ಸಂಪನ್ಮೂಲ ಹಂಚಿ, ದಾಖಲೆಗಳನ್ನಲ್ಲ.'),
   intro:pair('Sharing is optional. Help an educator or a friend discover Sahaya using its public application link.','ಹಂಚುವುದು ಐಚ್ಛಿಕ. ಸಾರ್ವಜನಿಕ ಲಿಂಕ್ ಮೂಲಕ ಶಿಕ್ಷಕರು ಅಥವಾ ಸ್ನೇಹಿತರಿಗೆ ಸಹಾಯ ಪರಿಚಯಿಸಿ.'),
   tips:pair(['The Share page copies or shares only the public app link.','No practice scores, session tokens, names, or exported files are added.','The public GitHub repository also has the source, manual, and classroom slides. External links need internet.'],['ಹಂಚಿಕೆ ಪುಟವು ಸಾರ್ವಜನಿಕ ಆ್ಯಪ್ ಲಿಂಕ್ ಅನ್ನು ಮಾತ್ರ ನಕಲಿಸುತ್ತದೆ ಅಥವಾ ಹಂಚುತ್ತದೆ.','ಅಭ್ಯಾಸದ ಅಂಕ, ಅವಧಿಯ ಗುರುತು, ಹೆಸರು ಅಥವಾ ರಫ್ತು ಕಡತಗಳು ಸೇರುವುದಿಲ್ಲ.','ಸಾರ್ವಜನಿಕ GitHub ಸಂಗ್ರಹದಲ್ಲಿ ಮೂಲ ಕೋಡ್, ಕೈಪಿಡಿ ಮತ್ತು ಸ್ಲೈಡ್‌ಗಳಿವೆ. ಹೊರಗಿನ ಲಿಂಕ್‌ಗಳಿಗೆ ಇಂಟರ್ನೆಟ್ ಬೇಕು.']),
   action:'share', actionLabel:pair('Share public resources','ಸಾರ್ವಜನಿಕ ಸಂಪನ್ಮೂಲ ಹಂಚಿ'), value:pair('Extend access without exposing learner information.','ಕಲಿಕಾರ್ಥಿಯ ಮಾಹಿತಿ ಬಹಿರಂಗಪಡಿಸದೆ ಸಂಪನ್ಮೂಲ ಹಂಚಿ.')}
];
export const journeyText = {
 useMe:pair('USE ME','ಬಳಸಿ'), useMeLabel:pair('USE ME — How to use Sahaya','ಬಳಸಿ — ಸಹಾಯ ಬಳಕೆಯ ಮಾರ್ಗದರ್ಶಿ'),
 journeyEyebrow:pair('YOUR LEARNING JOURNEY','ನಿಮ್ಮ ಕಲಿಕೆಯ ಪಯಣ'),
 journeyTitle:pair('A clear path, at your pace.','ನಿಮ್ಮ ವೇಗದಲ್ಲಿ ಕಲಿಕೆಯ ಪಯಣ.'),
 journeyNote:pair('Choose any step. No sign-up, no pressure.','ಯಾವುದೇ ಹಂತ ಆರಿಸಿ. ನೋಂದಣಿ ಅಥವಾ ಒತ್ತಡ ಇಲ್ಲ.'),
 guideTitle:pair('How to use Sahaya','ಸಹಾಯವನ್ನು ಬಳಸುವ ವಿಧಾನ'),
 guideIntro:pair('A short guide for learners, educators, and helpers. Explore a step, then try an activity together.','ಕಲಿಕಾರ್ಥಿಗಳು, ಶಿಕ್ಷಕರು ಮತ್ತು ಸಹಾಯಕರಿಗೆ ಸರಳ ಮಾರ್ಗದರ್ಶಿ. ಒಂದು ಹಂತ ನೋಡಿ, ನಂತರ ಒಟ್ಟಿಗೆ ಚಟುವಟಿಕೆ ಪ್ರಯತ್ನಿಸಿ.'),
 exitGuide:pair('Back to where I was','ಹಿಂದಿನ ಪುಟಕ್ಕೆ ಮರಳಿ'), chooseActivity:pair('Choose an activity','ಚಟುವಟಿಕೆ ಆರಿಸಿ'),
 guideHint:pair('First time here? Start with the short guide.','ಮೊದಲ ಭೇಟಿಯೇ? ಸರಳ ಮಾರ್ಗದರ್ಶಿಯಿಂದ ಪ್ರಾರಂಭಿಸಿ.'),
 step:pair('Step','ಹಂತ'), of:pair('of','ರಲ್ಲಿ'), previous:pair('Previous step','ಹಿಂದಿನ ಹಂತ'), next:pair('Next step','ಮುಂದಿನ ಹಂತ'),
 learningValue:pair('WHY THIS HELPS','ಇದು ಹೇಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ'),
 settings:pair('Learning settings','ಕಲಿಕೆಯ ಆಯ್ಕೆಗಳು'),
 resume:pair('Resume my practice','ನನ್ನ ಅಭ್ಯಾಸ ಮುಂದುವರಿಸಿ'),
 category:pair('Pick an activity for a new practice','ಹೊಸ ಅಭ್ಯಾಸಕ್ಕಾಗಿ ಚಟುವಟಿಕೆ ಆರಿಸಿ'),
 noTracking:pair('This is a guide, not a score or a completion tracker.','ಇದು ಮಾರ್ಗದರ್ಶಿ; ಅಂಕ ಅಥವಾ ಪೂರ್ಣಗೊಳಿಸುವಿಕೆಯ ದಾಖಲೆಯಲ್ಲ.'),
 helperTitle:pair('Learning together?','ಒಟ್ಟಿಗೆ ಕಲಿಯುತ್ತಿದ್ದೀರಾ?'),
 helperNote:pair('An educator should review language, visual tasks, and access needs before classroom use. Stop or change activities whenever a learner wishes.','ತರಗತಿಯ ಬಳಕೆಗೆ ಮೊದಲು ಶಿಕ್ಷಕರು ಭಾಷೆ, ದೃಶ್ಯ ಚಟುವಟಿಕೆ ಮತ್ತು ಅಗತ್ಯಗಳನ್ನು ಪರಿಶೀಲಿಸಬೇಕು. ಕಲಿಕಾರ್ಥಿ ಬಯಸಿದಾಗ ನಿಲ್ಲಿಸಿ ಅಥವಾ ಚಟುವಟಿಕೆ ಬದಲಿಸಿ.'),
 shareTitle:pair('Good resources are worth sharing.','ಉಪಯುಕ್ತ ಸಂಪನ್ಮೂಲಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ.'),
 shareIntro:pair('Invite someone to explore Sahaya. Only public links are shared—never your practice records.','ಸಹಾಯವನ್ನು ನೋಡಲು ಇತರರನ್ನು ಆಹ್ವಾನಿಸಿ. ಸಾರ್ವಜನಿಕ ಲಿಂಕ್‌ಗಳು ಮಾತ್ರ ಹಂಚಲ್ಪಡುತ್ತವೆ; ಅಭ್ಯಾಸದ ದಾಖಲೆಗಳಲ್ಲ.'),
 appLink:pair('Public application link','ಸಾರ್ವಜನಿಕ ಆ್ಯಪ್ ಲಿಂಕ್'), copyLink:pair('Copy app link','ಆ್ಯಪ್ ಲಿಂಕ್ ನಕಲಿಸಿ'),
 nativeShare:pair('Share app link','ಆ್ಯಪ್ ಲಿಂಕ್ ಹಂಚಿ'), copied:pair('Public app link copied. No practice records included.','ಸಾರ್ವಜನಿಕ ಆ್ಯಪ್ ಲಿಂಕ್ ನಕಲಿಸಲಾಗಿದೆ. ಅಭ್ಯಾಸದ ದಾಖಲೆಗಳು ಸೇರಿಲ್ಲ.'),
 copyFallback:pair('Automatic copying is unavailable. Select the link below and copy it manually.','ಸ್ವಯಂಚಾಲಿತ ನಕಲು ಲಭ್ಯವಿಲ್ಲ. ಕೆಳಗಿನ ಲಿಂಕ್ ಆಯ್ಕೆ ಮಾಡಿ ನಕಲಿಸಿ.'),
 shareUnavailable:pair('Sharing is unavailable here. Use Copy app link or copy the visible link.','ಇಲ್ಲಿ ಹಂಚಿಕೆ ಲಭ್ಯವಿಲ್ಲ. ಲಿಂಕ್ ನಕಲಿಸುವ ಆಯ್ಕೆ ಬಳಸಿ.'),
 repository:pair('Source code on GitHub','GitHub ಮೂಲ ಕೋಡ್'), manual:pair('Project manual','ಪ್ರಾಜೆಕ್ಟ್ ಕೈಪಿಡಿ'), slides:pair('Classroom slides','ತರಗತಿಯ ಸ್ಲೈಡ್‌ಗಳು'),
 sourceDesc:pair('Inspect the project and its sources.','ಪ್ರಾಜೆಕ್ಟ್ ಮತ್ತು ಅದರ ಮೂಲಗಳನ್ನು ನೋಡಿ.'),
 manualDesc:pair('Read the documented project baseline.','ಪ್ರಾಜೆಕ್ಟ್‌ನ ಮೂಲ ದಾಖಲೆಯನ್ನು ಓದಿ.'),
 slidesDesc:pair('Explore the classroom presentation.','ತರಗತಿಯ ಪ್ರಸ್ತುತಿಯನ್ನು ನೋಡಿ.'),
 externalNote:pair('Resource links open GitHub in a new tab and need internet. The manual and slides describe the original baseline; see the v1.1 update notes in the repository for this guide.','ಸಂಪನ್ಮೂಲ ಲಿಂಕ್‌ಗಳು ಹೊಸ ಟ್ಯಾಬ್‌ನಲ್ಲಿ GitHub ತೆರೆಯುತ್ತವೆ; ಇಂಟರ್ನೆಟ್ ಬೇಕು. ಕೈಪಿಡಿ ಮತ್ತು ಸ್ಲೈಡ್‌ಗಳು ಮೂಲ ಆವೃತ್ತಿಯನ್ನು ವಿವರಿಸುತ್ತವೆ. ಈ ಮಾರ್ಗದರ್ಶಿಗಾಗಿ v1.1 ನವೀಕರಣದ ಟಿಪ್ಪಣಿಗಳನ್ನು ನೋಡಿ.'),
 independent:pair('VTUHub is an independent educational initiative, not an official VTU channel. Sahaya is an educator-guided prototype; learning outcomes are not guaranteed.','VTUHub ಸ್ವತಂತ್ರ ಶೈಕ್ಷಣಿಕ ಉಪಕ್ರಮ; ಅಧಿಕೃತ VTU ಚಾನೆಲ್ ಅಲ್ಲ. ಸಹಾಯ ಶಿಕ್ಷಕರ ಮಾರ್ಗದರ್ಶನದ ಮಾದರಿ; ಕಲಿಕೆಯ ಫಲಿತಾಂಶಗಳ ಭರವಸೆ ನೀಡುವುದಿಲ್ಲ.'),
 shareSafety:pair('Keep names, diagnoses, screenshots of private records, and learner CSV files out of public posts.','ಹೆಸರು, ರೋಗನಿರ್ಣಯ, ಖಾಸಗಿ ದಾಖಲೆಗಳ ಚಿತ್ರ ಮತ್ತು ಕಲಿಕಾರ್ಥಿಗಳ CSV ಕಡತಗಳನ್ನು ಸಾರ್ವಜನಿಕವಾಗಿ ಹಂಚಬೇಡಿ.')
};
export const translated = (value, lang='en') => value[lang==='kn'?'kn':'en'];
export function getJourneyStep(id) { return JOURNEY_STEPS.find(s=>s.id===id) || JOURNEY_STEPS[0]; }
export function publicShareData() { return {title:'Sahaya • Community Learning', url:PUBLIC_LINKS.app}; }
const shapes={
 discover:'<circle cx="12" cy="12" r="9"/><path d="m16 8-2 6-6 2 2-6Z"/>',
 choose:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
 learn:'<path d="M12 5C8 2 4 3 2 4v15c4-2 7-1 10 1 3-2 6-3 10-1V4c-3-1-6-2-10 1Zm0 0v15"/><path d="M5 8h3m-3 4h3m8-4h3m-3 4h3"/>',
 practise:'<path d="m15 4 5 5M4 15 15 4a3.5 3.5 0 0 1 5 5L9 20l-6 1Z"/><path d="m4 15 5 5"/>',
 review:'<rect x="3" y="13" width="4" height="8" rx="1"/><rect x="10" y="8" width="4" height="13" rx="1"/><rect x="17" y="3" width="4" height="18" rx="1"/>',
 share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m9 10.5 6-4m-6 7 6 4"/>',
 help:'<circle cx="12" cy="12" r="9"/><path d="M9 9a3 3 0 1 1 5 2c-1.3.7-2 1.3-2 3m0 3h.01"/>',
 link:'<path d="m10 13 4-4m-5 8-1 1a4 4 0 0 1-6-6l4-4a4 4 0 0 1 6 0m0 8a4 4 0 0 0 6 0l4-4a4 4 0 0 0-6-6l-1 1"/>',
 check:'<path d="m5 12 4 4L19 6"/>',
 arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>'
};
export function journeyIcon(id) { return `<svg class="journey-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${shapes[id]||shapes.help}</svg>`; }
const tr=(key,lang)=>translated(journeyText[key],lang);
export function renderJourney(lang='en',active=null,mode='home') {
 return `<section class="journey-block" aria-label="${tr('journeyEyebrow',lang)}"><div class="journey-heading"><div><p class="eyebrow">${tr('journeyEyebrow',lang)}</p>${mode==='home'?`<h2>${tr('journeyTitle',lang)}</h2>`:''}<p>${tr('journeyNote',lang)}</p></div><span class="journey-badge">${journeyIcon('learn')} ${lang==='kn'?'6 ಸರಳ ಹಂತಗಳು':'6 simple steps'}</span></div><ol class="journey-steps">${JOURNEY_STEPS.map((step,i)=>`<li><button class="journey-step ${active===step.id?'is-current':''}" data-journey="${step.id}" ${active===step.id?'aria-current="step"':''} ${mode==='guide'?'aria-controls="guide-detail"':''}><span class="journey-step-top"><span class="journey-symbol">${journeyIcon(step.id)}</span><span class="journey-number">0${i+1}</span></span><span class="journey-label">${translated(step.label,lang)}</span><span class="journey-summary">${translated(step.summary,lang)}</span></button></li>`).join('')}</ol></section>`;
}
export function renderGuide(lang='en',stepId='discover',canResume=false,category='numbers') {
 const step=getJourneyStep(stepId),index=JOURNEY_STEPS.indexOf(step);
 const choices=[['numbers',pair('Numbers','ಸಂಖ್ಯೆಗಳು')],['colours',pair('Colours','ಬಣ್ಣಗಳು')],['shapes',pair('Shapes','ಆಕಾರಗಳು')],['life',pair('Everyday life','ದಿನನಿತ್ಯದ ಜೀವನ')]];
 return `<div class="guide-top"><div class="page-heading"><p class="eyebrow">${tr('useMe',lang)} / SAHAYA</p><h1>${tr('guideTitle',lang)}</h1><p>${tr('guideIntro',lang)}</p></div><button class="outline guide-exit" data-guide-exit>← ${tr('exitGuide',lang)}</button></div>${renderJourney(lang,step.id,'guide')}<section class="guide-detail" id="guide-detail" aria-labelledby="guide-step-title"><div class="guide-content"><p class="eyebrow">${tr('step',lang)} ${index+1} / 6 · ${translated(step.label,lang)}</p><h2 id="guide-step-title" tabindex="-1">${translated(step.title,lang)}</h2><p class="guide-intro">${translated(step.intro,lang)}</p><ul class="guide-tips">${translated(step.tips,lang).map(tip=>`<li><span class="tip-check">${journeyIcon('check')}</span><span>${tip}</span></li>`).join('')}</ul>${step.id==='practise'?`<label class="practice-picker" for="guide-category">${tr('category',lang)}<select id="guide-category">${choices.map(([id,label])=>`<option value="${id}" ${id===category?'selected':''}>${translated(label,lang)}</option>`).join('')}</select></label>`:''}<div class="button-row guide-actions"><button class="primary" data-guide-action="${step.action}">${translated(step.actionLabel,lang)} ${journeyIcon('arrow')}</button>${step.id==='discover'?`<button class="outline" data-guide-action="settings">${tr('settings',lang)}</button>`:''}${canResume?`<button class="outline" data-guide-action="resume">${tr('resume',lang)}</button>`:step.id==='discover'?`<button class="outline" data-guide-action="choose">${tr('chooseActivity',lang)}</button>`:''}</div></div><div class="guide-value"><span class="value-symbol">${journeyIcon(step.id)}</span><p class="eyebrow">${tr('learningValue',lang)}</p><h3>${translated(step.value,lang)}</h3><p>${tr('noTracking',lang)}</p></div></section><div class="guide-navigation"><button class="outline" data-guide-prev ${index===0?'disabled':''}>← ${tr('previous',lang)}</button><span>${index+1} / 6</span><button class="outline" data-guide-next ${index===5?'disabled':''}>${tr('next',lang)} →</button></div><div class="helper-note"><span>${journeyIcon('help')}</span><div><h3>${tr('helperTitle',lang)}</h3><p>${tr('helperNote',lang)}</p></div></div>`;
}
export function renderShare(lang='en',nativeAvailable=false) {
 return `<div class="page-heading"><p class="eyebrow">${tr('journeyEyebrow',lang)} / ${translated(JOURNEY_STEPS[5].label,lang)}</p><h1>${tr('shareTitle',lang)}</h1><p>${tr('shareIntro',lang)}</p></div><section class="share-panel" aria-labelledby="public-link-title"><div class="share-emblem">${journeyIcon('share')}</div><div class="share-fields"><h2 id="public-link-title">${tr('appLink',lang)}</h2><label for="public-app-link" class="muted">${tr('appLink',lang)}</label><input id="public-app-link" class="share-url" type="url" readonly value="${PUBLIC_LINKS.app}" spellcheck="false"><div class="button-row"><button class="primary" id="copy-app-link">${journeyIcon('link')} ${tr('copyLink',lang)}</button>${nativeAvailable?`<button class="outline" id="native-share">${journeyIcon('share')} ${tr('nativeShare',lang)}</button>`:''}</div><p id="share-feedback" class="share-feedback" role="status" aria-live="polite"></p></div></section><div class="resource-cards">${[['repository','sourceDesc','discover'],['manual','manualDesc','learn'],['slides','slidesDesc','choose']].map(([key,description,icon])=>`<a class="public-resource" href="${PUBLIC_LINKS[key]}" target="_blank" rel="noopener noreferrer"><span class="resource-symbol">${journeyIcon(icon)}</span><h2>${tr(key,lang)} ↗</h2><p>${tr(description,lang)}</p><span class="resource-destination">GitHub · ${lang==='kn'?'ಹೊಸ ಟ್ಯಾಬ್':'new tab'}</span></a>`).join('')}</div><p class="muted resource-network-note">${tr('externalNote',lang)}</p><div class="share-safety">${journeyIcon('help')}<p>${tr('shareSafety',lang)}</p></div><div class="share-bottom"><button class="outline" data-open-guide="share">${tr('useMe',lang)} · ${tr('guideTitle',lang)}</button><p>Dr. Lokesh M R · VTUHub<br><span>${tr('independent',lang)}</span></p></div>`;
}
