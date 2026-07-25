// Builds decks/huangdi-neijing-top20-video-chapters.pptx
// Run: node scripts/build_chapter_deck.js
const pptxgen = require("pptxgenjs");
const path = require("path");

const BG      = "171310"; // lacquer black
const PANEL   = "241D18"; // raised panel
const PANEL2  = "2E251E";
const CREAM   = "F2E8D8";
const MUTED   = "A08D7A";
const CINNABAR= "B33A31";
const GOLD    = "D4A843";
const JADE    = "7FA37F";
const SLATE   = "6E8CA0";

const SERIF = "Cambria";
const SANS  = "Calibri";

const ARCS = {
  I:   { name: "ARC I · FOUNDATIONS",      color: GOLD },
  II:  { name: "ARC II · THE MIND",        color: CINNABAR },
  III: { name: "ARC III · SICKNESS",       color: JADE },
  IV:  { name: "ARC IV · THE PHYSICIAN",   color: SLATE },
};

const CH = [
  { arc:"I", cn:"素问 1 · 上古天真论", en:"Why the Ancients Lived to 100 and You Won't",
    desc:"The book opens with the Yellow Emperor asking a question anyone would ask: people in the old days reached a hundred and stayed vigorous, so why do we fall apart at fifty? Qi Bo's answer is a lifestyle indictment — drinking as if it were water, exhausting the body chasing pleasure, going to bed at all hours, spending vitality without ever replenishing it. The chapter then lays out the life-cycle clock that every Chinese physician since has used: women develop in seven-year stages, men in eight, from the arrival of fertility to its close. It ends by describing four grades of person who beat the clock — the sages, the accomplished, and those who simply lived in step with the world.",
    why:"The strongest opening episode in the entire canon. It states the series' thesis, hands you a testable claim about ageing, and the 7s-and-8s clock is instantly personal — every viewer will count their own stage.",
    rpm:"$9 – $16", rpmNote:"Longevity and anti-ageing draw the deepest advertiser pool in wellness.",
    hook:"“They lived a hundred years and stayed strong. What happened to us?”" },

  { arc:"I", cn:"素问 2 · 四气调神大论", en:"Living by the Four Seasons",
    desc:"A practical operating manual for the year. Each season gets its own instructions — when to sleep and when to rise, how to hold your temper, what to pursue and what to let go. In spring you sleep late and walk loose-haired in the garden; in winter you go to bed early, rise after the sun, and keep your ambitions banked like a fire. Break the season's rule and the chapter names the exact illness that arrives in the following season, because damage done in summer surfaces in autumn. Then comes the line that made the chapter famous: the superior physician does not treat disease that has already broken out — he treats the disease that has not yet arrived. Waiting until you are ill, it says, is like digging a well once you are already thirsty.",
    why:"Prevention is the book's single most modern idea and the most quotable line in Chinese medicine. It also gives you four natural act-breaks — one per season — which is a gift for a 15–20 minute structure.",
    rpm:"$7 – $13", rpmNote:"Seasonal wellness and sleep hygiene attract steady, brand-safe advertisers.",
    hook:"“Digging a well when you are already thirsty.”" },

  { arc:"I", cn:"素问 3 · 生气通天论", en:"Your Inner Sun: The Daily Arc of Yang Qi",
    desc:"This chapter makes one bold comparison and then runs with it: your yang qi is the sun of your own small sky. Lose the sun and life shortens; lose your yang and you fail the same way. It then traces the day as an arc — yang generates at dawn, peaks at noon, and begins to close at dusk, at which point the body's outer gates should shut and you should stop working, stop straining, stop exposing yourself to wind and damp. Fight that curve repeatedly and the chapter promises specific consequences. It also catalogues what wrecks yang qi: sustained anger, overexertion, rich food, damp, and the accumulated effect of one badly-run day after another.",
    why:"A two-thousand-year-old circadian rhythm chapter, and the parallel with modern chronobiology is close enough to be genuinely striking rather than a stretch. Strong visual episode — the whole thing can ride on a single sun-arc motif.",
    rpm:"$8 – $14", rpmNote:"Sleep, energy and recovery products bid aggressively on this territory.",
    hook:"“If the sun loses its place, life is cut short.”" },

  { arc:"I", cn:"素问 5 · 阴阳应象大论", en:"The Grand Theory of Yin and Yang",
    desc:"The system chapter. Yin and yang are set out not as mysticism but as a working pair of opposed tendencies — storing and releasing, cooling and heating, form and function — with the rule that each generates the other and neither exists alone. The chapter then builds the great correspondence table: five phases, five organs, five seasons, five directions, five flavours, five colours, five sounds, five emotions, all cross-indexed so that an observation in one column tells you where to act in another. Anger belongs to the Liver and to wood and to spring and to the colour green and to a sour taste — and knowing that is what turns a symptom into a treatment. It also states the diagnostic principle that heat is treated with cold and cold with heat.",
    why:"The Rosetta Stone episode. Publish it early and every later video becomes comprehensible; skip it and half the series sounds like arbitrary poetry. Dense, so it needs strong motion graphics — but it is the highest-leverage explainer in the book.",
    rpm:"$5 – $9", rpmNote:"Pure doctrine draws general education inventory, not premium health buyers.",
    hook:"“Yin and yang are the way of heaven and earth.”" },

  { arc:"I", cn:"素问 8 · 灵兰秘典论", en:"The Body as an Empire",
    desc:"The most cinematic chapter in the canon. The twelve organs are presented as the twelve offices of an imperial court, each with a title and a portfolio. The Heart is the sovereign, from whom spirit and clarity issue. The Lung is the chancellor who sets the rhythm of governance. The Liver is the general, from whom strategy and deliberation come. The Gallbladder is the upright judge who makes the decision. The Spleen and Stomach are the granary officials who handle the five flavours; the Kidneys are the office of hard labour and skill. The chapter's conclusion is political: when the sovereign is enlightened, the realm below is at peace, and a life lived that way is long — but when the sovereign is not, the twelve offices fall into danger and the whole state is imperilled.",
    why:"Ready-made drama. A court of twelve ministers is a cast, not a diagram, and it converts an anatomy lesson into palace politics — the single easiest chapter to dramatise with the existing character art.",
    rpm:"$6 – $11", rpmNote:"History-and-philosophy framing keeps it brand-safe and fully monetisable.",
    hook:"“When the ruler is enlightened, those below him are at peace.”" },

  { arc:"II", cn:"素问 13 · 移精变气论", en:"When the Old Magic Stopped Working",
    desc:"An extraordinary and rarely-quoted admission. In high antiquity, the chapter says, people lived among birds and beasts, moved to keep off cold and sheltered to escape heat, carried no exhausting ambitions and no anxious attachments — so illness stayed shallow, and a healer could cure it simply by shifting the patient's attention and turning their qi, using incantation alone. That no longer works. Today, it says, worry attacks from within and hardship from without; people neglect the rhythms of the seasons and act against the grain of the year, so sickness lodges deep in the bones and the marrow, and words alone will not shift it. The chapter then argues for close observation — colour, pulse, the patient's own account — as the replacement for magic.",
    why:"The moment the tradition drops the mystical register and turns self-critical. It is effectively an ancient discussion of placebo, belief and psychosomatic illness, and it gives a documentary its most valuable asset: a source admitting something changed.",
    rpm:"$6 – $11", rpmNote:"Mind-body and history-of-medicine framing; good watch-time, moderate ad depth.",
    hook:"“The old cures no longer work — and the book knows why.”" },

  { arc:"II", cn:"素问 39 · 举痛论", en:"All Illness Begins with Qi",
    desc:"The chapter states a sweeping principle — the hundred diseases arise from qi — and then does something unusual for an ancient text: it itemises exactly how. Anger drives qi upward. Joy slackens it. Grief consumes it. Fear drives it downward. Fright throws it into disorder. Cold contracts it, heat drains it, exertion wastes it, and prolonged brooding ties it into knots. Each of the nine gets a short physiological account of what happens inside the body when it does. The second half turns to pain itself, tracing how cold entering the vessels slows and stagnates what should be flowing, and why some pain stops when pressed while other pain gets worse — a genuinely useful piece of differential reasoning.",
    why:"The most directly relevant chapter to a modern audience. It is a stress-physiology lecture in a text older than the Roman Empire, and the nine mechanisms give you nine tight, animatable segments.",
    rpm:"$8 – $14", rpmNote:"Stress, anxiety and mental-health advertisers pay a premium here.",
    hook:"“Anger sends it up. Fear sends it down. Brooding ties it in knots.”" },

  { arc:"II", cn:"灵枢 8 · 本神", en:"The Five Spirits",
    desc:"Ancient psychiatry, and the book's most sophisticated chapter on mind. It distinguishes five aspects of the inner life and assigns each a home organ: spirit in the Heart, the ethereal soul in the Liver, the corporeal soul in the Lung, intent in the Spleen, will in the Kidneys. It then defines the vocabulary with unusual precision — what it means for the mind to remember, to intend, to deliberate, to decide — and follows each thread to its pathology. Sustained fear that finds no resolution damages the essence stored below. Grief that will not lift wears out the corporeal soul. Anxiety and overthinking scatter the spirit until it cannot be gathered. The chapter's warning to physicians is that you must examine the state of the five spirits before you treat anything at all.",
    why:"Reframes the whole tradition as psychosomatic medicine rather than folk remedy, and gives the series its emotional core. Five spirits, five organs, five failure modes — the structure writes the episode for you.",
    rpm:"$8 – $15", rpmNote:"Mental health is one of the highest-CPM categories on the platform.",
    hook:"“Examine the spirit first. Everything else follows.”" },

  { arc:"II", cn:"灵枢 43 · 淫邪发梦", en:"The Emperor's Dream Dictionary",
    desc:"Dreams treated as clinical data rather than omens. The chapter's logic is mechanical: whatever is in excess inside you produces the corresponding dream. Excess above makes you dream of flying; excess below makes you dream of falling. Too much heat brings dreams of fire and burning; too much cold brings dreams of water and drowning, and of being afraid in it. Go to bed hungry and you dream of taking things; go to bed too full and you dream of giving them away. It then runs through a list of organs and the specific dream that betrays each one when it is overloaded — anger and forests for one, weeping for another, singing or heaviness in the limbs for a third. The prescription that follows is to needle the responsible channel and the dreams stop.",
    why:"An irresistible topic with a built-in audience and unusually high shareability — viewers will test it against their own dreams in the comments. Also visually the richest chapter in the book to illustrate.",
    rpm:"$6 – $11", rpmNote:"Big reach, moderate advertiser depth; sleep brands lift the top of the range.",
    hook:"“Dream of flying, and something above is too full.”" },

  { arc:"II", cn:"灵枢 64 · 阴阳二十五人", en:"The Twenty-Five Kinds of People",
    desc:"A constitutional typology. People are first sorted into five types by element — wood, fire, earth, metal, water — each with a described build, complexion, gait, temperament and characteristic weakness. Wood types are lean, green-toned, restless and inclined to worry. Fire types are quick, sharp-shouldered, walk with urgency and burn out early. Earth types are broad, steady, generous and slow to move. Metal types are square-faced, brisk and decisive. Water types run cold, keep their own counsel and are hard to read. Each of the five is then subdivided five more ways, giving twenty-five, and the chapter ties each to the seasons it tolerates and the ones that will make it ill.",
    why:"An ancient personality test, and personality content reliably outperforms on both watch-time and sharing. The crucial difference from a modern quiz is that this one attaches medical predictions — which is the twist the episode turns on.",
    rpm:"$7 – $13", rpmNote:"High engagement plus brand-safe framing; strong comment and return rates.",
    hook:"“Which of the twenty-five are you?”" },

  { arc:"III", cn:"素问 31 · 热论", en:"Six Days of Fever",
    desc:"A febrile illness tracked as an invasion, day by day, as it moves inward through six successive layers of the body. Day one it strikes the outermost channel and you get headache, stiffness in the neck and pain down the spine. Day two it reaches the next layer and brings body heat, dry nose and sleeplessness. Each subsequent day it penetrates further, adding its own signature — dry throat, fullness in the flanks, deafness, shrivelled tongue — until, by the sixth, every channel is affected. The chapter then describes the reverse march, the fever peeling away layer by layer as the patient recovers, and states plainly at which point the disease becomes unsurvivable. It closes on how easily a relapse is caused by eating too soon.",
    why:"An epidemic thriller with a built-in countdown clock — six days, six stages, a clear point of no return. It is also the direct ancestor of all later Chinese epidemic medicine, which gives the episode real historical weight.",
    rpm:"$4 – $8", rpmNote:"Disease content risks limited ads; keep the framing historical, not advisory.",
    hook:"“Day one it takes the surface. By day six it has taken everything.”" },

  { arc:"III", cn:"素问 43 · 痹论", en:"Wind, Cold and Damp: Why Joints Ache",
    desc:"The chapter's opening move is elegant: three environmental factors — wind, cold and damp — arrive together and combine to lodge in the body, and the resulting illness is named by whichever of the three dominates. Where wind leads, the pain wanders from joint to joint. Where cold leads, the pain is fixed and severe. Where damp leads, the limbs are heavy, numb and hard to move. It then sorts the condition further by which season you were exposed in and which tissue it settled into — bone, sinew, vessel, muscle or skin — and warns that an obstruction left long enough travels inward from the joints to the organs, at which point it becomes something far more serious than a sore knee.",
    why:"Arthritis is a mass-audience complaint and the wind-cold-damp model is intuitive enough to explain in ninety seconds. It also answers the question everyone has asked — why joints ache before the weather turns — which is a superb thumbnail and title.",
    rpm:"$6 – $12", rpmNote:"Joint and mobility advertisers pay well; medical-claim risk caps the range.",
    hook:"“Why your knee knows the weather before you do.”" },

  { arc:"III", cn:"素问 47 · 奇病论", en:"Strange Cases",
    desc:"A file of bizarre presentations, each followed by an explanation. A woman nine months pregnant abruptly loses her voice — the chapter attributes it to a vessel supplying the womb being cut off by the pressure of the child, and predicts, correctly, that nothing need be done because it resolves at delivery. Wealthy men develop a persistent sweet taste in the mouth; the cause is named as too much rich and fatty food, and the condition is described as progressing to a wasting thirst — a recognisable account of diabetes, roughly two thousand years early. A child has seizures from birth, traced to a great fright the mother suffered while carrying it. There is a swelling below the navel that must not be cut, and a bitter mouth traced to a timid nature and chronic indecision.",
    why:"Case files are the oldest format in medical broadcasting and still the best. Each case is a self-contained mystery with a reveal, so the episode has four or five natural cliffhangers instead of one — ideal retention structure.",
    rpm:"$6 – $11", rpmNote:"Medical-mystery framing performs well and stays advertiser-friendly.",
    hook:"“The rich man whose mouth turned sweet.”" },

  { arc:"III", cn:"素问 74 · 至真要大论", en:"The Nineteen Rules",
    desc:"Buried in the longest treatise in the book is its most practical page: nineteen compressed rules assigning whole categories of symptom to a responsible organ or factor. All wind with shaking and dizziness belongs to the Liver. All cold with contraction and drawing-in belongs to the Kidneys. All qi that is congested and oppressive belongs to the Lung. All damp with swelling and fullness belongs to the Spleen. Others assign convulsions, rigidity, sudden violent behaviour, distension, pain and itching to heat, cold, or fire. The instruction wrapped around them matters as much as the list: examine each mechanism, find which factor is responsible, and never assume the obvious cause without checking whether excess or depletion is behind it.",
    why:"The closest thing the ancient world produced to a clinical decision algorithm, which is a genuinely surprising claim to make on camera. The audience skews practitioner and student — smaller, but high-intent and unusually loyal.",
    rpm:"$4 – $8", rpmNote:"Niche technical audience; lower reach, but strong course and book conversion.",
    hook:"“Nineteen rules that turn a symptom into a diagnosis.”" },

  { arc:"III", cn:"灵枢 10 · 经脉", en:"The Map Beneath the Skin",
    desc:"The chapter that turned needling from a collection of tricks into a system. It traces each of the twelve main channels along its full route — where it begins, what it passes through, which organs it belongs to, where it surfaces and where it meets its partner — and for each one it lists two distinct sets of symptoms: what appears when the channel itself is disturbed, and what appears when the organ it governs is failing. It opens with an anatomical claim that the channels determine life and death, resolve the hundred illnesses and adjust deficiency and excess, so they cannot be left unstudied. It also describes how the smaller connecting vessels branch off, and how a practitioner can read them at the surface by colour.",
    why:"The chapter most transformed by animation. A meridian route is nearly unreadable as prose and immediately obvious as motion graphics, so this is where production value converts directly into comprehension — and into a video people rewatch and reference.",
    rpm:"$5 – $10", rpmNote:"Core acupuncture reference topic; steady evergreen search traffic.",
    hook:"“Twelve rivers, one body, and a map two thousand years old.”" },

  { arc:"IV", cn:"素问 12 · 异法方宜论", en:"Why Medicine Is Different in Every Country",
    desc:"The Emperor notices something odd: physicians treat the same illness by completely different methods, and yet all of them get results. Qi Bo's answer is geography. In the east, by the sea, people eat fish and salt, the climate is mild, and their characteristic disorders are sores — so treatment there developed around stone needles. In the west, a country of stone and wind where people eat richly and illness arises internally, medicines and drugs developed instead. In the frozen north, where people live outdoors and eat milk, the cold lodges inside and produces fullness — so burning moxa was the answer. In the humid south, where the food is sour and fermented, fine metal needles came into use. And in the central plains, where food is plentiful and life is easy, the diseases of inactivity called for therapeutic exercise and massage.",
    why:"A theory of medical geography from an era that had no business having one, and the perfect answer to the question sceptics always raise — why this system and not another. Naturally visual, with five distinct regions to shoot or illustrate.",
    rpm:"$5 – $9", rpmNote:"History-and-anthropology framing: brand-safe, mid-tier documentary rates.",
    hook:"“Five regions, five climates, five completely different medicines.”" },

  { arc:"IV", cn:"素问 17 · 脉要精微论", en:"Reading a Life at the Wrist",
    desc:"The chapter opens with a scheduling instruction that reveals how seriously the practice was taken: the pulse should be examined at dawn, before the patient has eaten or exerted themselves and while the qi of the day is still undisturbed, because only then does the reading mean anything. It describes how a healthy pulse changes with the season — full and slightly tense in spring, flooding in summer, lighter in autumn, sunk and hidden in winter — so that the same pulse can be normal in one month and alarming in the next. It then widens out from the wrist: the sheen of the complexion, the strength of the voice, the clarity of the eyes, the way a person holds themselves, all read together. The physician is warned that the fingers alone are never enough.",
    why:"Pulse diagnosis is the single most recognisable image of Chinese medicine and the one most viewers half-believe is theatre. Showing the actual reasoning behind it is a satisfying myth-versus-method episode, and it shoots beautifully in close-up.",
    rpm:"$5 – $10", rpmNote:"Strong evergreen search interest; general health inventory.",
    hook:"“Why the pulse must be taken at dawn.”" },

  { arc:"IV", cn:"素问 25 · 宝命全形论", en:"Nothing Is More Precious Than a Human Being",
    desc:"The chapter's premise is a statement of value: heaven covers, earth carries, and among the ten thousand things that exist between them, nothing is more precious than a human being. A person is produced by the qi of heaven and earth and comes to completion under the laws of the four seasons — so caring for a life means understanding the system that made it. From that opening the chapter derives a demanding professional standard. Anyone who takes up a needle must first master five things, and the last of them is the one the text lingers on: complete concentration, the practitioner's attention gathered as though at the edge of an abyss, alert to the arrival of qi the way an archer waits on a bowstring. Treating a body carelessly, it argues, is a moral failure and not merely a technical one.",
    why:"The humanist heart of the canon, and the episode that answers the 'why should I care' question for a general audience. Works especially well placed late in a season, as the philosophical payoff after the technical episodes.",
    rpm:"$5 – $9", rpmNote:"Philosophy framing: excellent brand safety, mid-tier education rates.",
    hook:"“Of the ten thousand things, nothing is worth more than a person.”" },

  { arc:"IV", cn:"素问 77 · 疏五过论", en:"The Five Failures of a Doctor",
    desc:"The book turns on its own profession. It names five ways physicians fail their patients, and the first is the one that still stings: never asking whether this person was once wealthy and is now poor, or once honoured and now disgraced. That history, the chapter insists, is not background — it is the illness, and a body can be wrecked by a fall in circumstances without any external cause at all. The remaining faults follow the same theme: treating without taking a history, ignoring diet and habits and the patient's emotional state, failing to compare the person against what is normal for their build and age, and diagnosing from doctrine instead of from the individual in front of you. The tone throughout is prosecutorial rather than instructive.",
    why:"A genuinely unexpected chapter — an ancient text arguing that social circumstance and emotional history are clinical data. It gives the series a strong ethics episode and lands hard with viewers who have had a doctor fail to listen to them.",
    rpm:"$6 – $11", rpmNote:"Medical-ethics angle attracts professional viewers and clean ad inventory.",
    hook:"“You never asked what he lost. That was the illness.”" },

  { arc:"IV", cn:"灵枢 54 · 天年", en:"A Hundred Years, Decade by Decade",
    desc:"The chapter begins before birth, asking what a life is built from, and answers that a person is formed when two essences combine, with the spirit arriving first and the body assembled around it. Then it walks the whole span in ten-year steps. At ten the organs have settled and the qi runs low in the body, so a child loves to run. At twenty the blood is thickening and they like to move fast; at thirty they prefer to walk; at forty, to sit. At fifty the Liver begins to decline and the eyes start to dim. At sixty the Heart weakens, sorrow comes easily and they want to lie down. At seventy the flesh dries, at eighty words begin to come out wrong, at ninety the reserves are scorched and empty — and at a hundred the spirit departs and the form remains alone. It closes by asking why some are born frail and never reach it.",
    why:"The most emotionally powerful chapter in the canon and the natural season finale. Every viewer locates themselves on the scale within the first minute, and the closing image — the body left standing after the spirit has gone — is as good an ending as any documentary gets.",
    rpm:"$9 – $16", rpmNote:"Ageing and longevity, the premium end: insurance, supplements, retirement.",
    hook:"“At sixty the heart weakens and sorrow comes easily.”" },
];

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";           // 13.3 x 7.5
pres.author = "Huangdi Neijing series";
pres.title  = "Huangdi Neijing — Top 20 Chapters for Video";

const W = 13.3, H = 7.5;
const bg = { fill: BG };

function base() {
  const s = pres.addSlide();
  s.background = bg;
  return s;
}

// ---------------------------------------------------------------- title slide
{
  const s = base();
  // seal motif
  s.addShape(pres.ShapeType.roundRect, { x:0.9, y:1.5, w:1.5, h:1.5, rectRadius:0.12,
    fill:{ color:CINNABAR }, line:{ color:GOLD, width:1.5 } });
  s.addText("內\n經", { x:0.9, y:1.5, w:1.5, h:1.5, align:"center", valign:"middle",
    fontFace:SERIF, fontSize:30, bold:true, color:CREAM, lineSpacing:32 });

  s.addText("The Yellow Emperor's Inner Classic", {
    x:2.8, y:1.38, w:9.6, h:0.5, fontFace:SANS, fontSize:17, color:GOLD, charSpacing:2 });
  s.addText("Twenty Chapters Built for Video", {
    x:2.8, y:2.0, w:9.6, h:1.5, fontFace:SERIF, fontSize:50, bold:true, color:CREAM, lineSpacing:52 });
  s.addText("A layman's read of all 162 chapters, and the twenty that carry a 15–20 minute episode — with the case for each and an estimated YouTube RPM.", {
    x:2.8, y:3.6, w:9.0, h:0.9, fontFace:SANS, fontSize:15, color:MUTED, lineSpacing:22 });

  const facts = [
    ["162", "chapters in the canon"],
    ["81+81", "Basic Questions / Spiritual Pivot"],
    ["c.300 BC", "earliest layers compiled"],
  ];
  facts.forEach(([n, l], i) => {
    const x = 2.8 + i * 3.3;
    s.addText(n, { x, y:4.9, w:3.0, h:0.6, fontFace:SERIF, fontSize:34, bold:true, color:GOLD, margin:0 });
    s.addText(l, { x, y:5.5, w:3.0, h:0.5, fontFace:SANS, fontSize:12, color:MUTED, margin:0 });
  });
  s.addNotes("Opening slide. The deck covers a plain-English read of the whole canon plus the 20 chapters selected for episodes.");
}

// ------------------------------------------------------- what the book is
{
  const s = base();
  s.addText("What the book actually is", {
    x:0.7, y:0.55, w:8.5, h:0.7, fontFace:SERIF, fontSize:38, bold:true, color:CREAM });
  s.addText("Compiled c. 300 BC – 100 AD  ·  the founding text of Chinese medicine", {
    x:0.7, y:1.25, w:9.0, h:0.4, fontFace:SANS, fontSize:14, color:GOLD });

  const paras = [
    ["It is a conversation, not a manual.", "Almost the entire book is dialogue — the Emperor asks, his physicians answer. That is why it adapts to screen so readily: the drama is already in the source."],
    ["It reasons by pattern, not dissection.", "The body is mapped against the seasons, the weather, the landscape and the imperial court. Read the organs as job descriptions rather than lumps of tissue."],
    ["Its central claim is prevention.", "The superior physician treats the illness that has not yet arrived. Everything else in the book hangs off that one idea."],
  ];
  paras.forEach(([h, b], i) => {
    const y = 1.95 + i * 1.55;
    s.addShape(pres.ShapeType.ellipse, { x:0.7, y:y+0.06, w:0.42, h:0.42, fill:{ color:CINNABAR } });
    s.addText(String(i+1), { x:0.7, y:y+0.06, w:0.42, h:0.42, align:"center", valign:"middle",
      fontFace:SANS, fontSize:14, bold:true, color:CREAM });
    s.addText(h, { x:1.35, y, w:6.4, h:0.4, fontFace:SANS, fontSize:16, bold:true, color:GOLD, margin:0 });
    s.addText(b, { x:1.35, y:y+0.42, w:6.4, h:1.0, fontFace:SANS, fontSize:13, color:CREAM, lineSpacing:19, margin:0 });
  });

  // cast panel
  s.addShape(pres.ShapeType.roundRect, { x:8.5, y:1.9, w:4.1, h:4.7, rectRadius:0.03,
    fill:{ color:PANEL }, line:{ color:PANEL2, width:1 } });
  s.addText("THE CAST", { x:8.9, y:2.15, w:3.3, h:0.3, fontFace:SANS, fontSize:11, bold:true, color:GOLD, charSpacing:2, margin:0 });
  const cast = [
    ["Huangdi 黄帝", "The Yellow Emperor. Asks the questions — curious, impatient, sometimes stunned by the answer."],
    ["Qi Bo 岐伯", "Chief physician-minister. Delivers the doctrine. The voice of the tradition."],
    ["Lei Gong 雷公", "The disciple. Gets it wrong, gets corrected. The audience's stand-in."],
  ];
  cast.forEach(([n, d], i) => {
    const y = 2.6 + i * 1.35;
    s.addText(n, { x:8.9, y, w:3.3, h:0.32, fontFace:SERIF, fontSize:16, bold:true, color:CREAM, margin:0 });
    s.addText(d, { x:8.9, y:y+0.34, w:3.3, h:0.9, fontFace:SANS, fontSize:11.5, color:MUTED, lineSpacing:16, margin:0 });
  });
  s.addNotes("Framing slide: what the source is and who is in it. Character names map to the repo art (emperor-Fan, wise-Qi-2, witty-Lei).");
}

// ------------------------------------------------------- method + RPM basis
{
  const s = base();
  s.addText("How the twenty were chosen, and how RPM was estimated", {
    x:0.7, y:0.55, w:11.9, h:0.9, fontFace:SERIF, fontSize:30, bold:true, color:CREAM });

  s.addShape(pres.ShapeType.roundRect, { x:0.7, y:1.6, w:5.85, h:4.9, rectRadius:0.03,
    fill:{ color:PANEL }, line:{ color:PANEL2, width:1 } });
  s.addText("SELECTION FILTERS", { x:1.05, y:1.85, w:5.2, h:0.3, fontFace:SANS, fontSize:11, bold:true, color:GOLD, charSpacing:2, margin:0 });
  s.addText([
    { text:"A self-contained dramatic spine — a question, a turn, a resolution inside one chapter.", options:{ bullet:true, breakLine:true } },
    { text:"A real idea a modern viewer can use, test or argue with — not doctrine for its own sake.", options:{ bullet:true, breakLine:true } },
    { text:"Enough substance to fill 15–20 minutes without padding, and not so much that it needs three episodes.", options:{ bullet:true, breakLine:true } },
    { text:"Something to look at — a scene, a map, a countdown, a typology — so the episode is not a lecture over stock footage.", options:{ bullet:true, breakLine:true } },
    { text:"Commercial viability once monetised, including the demonetisation risk that comes with medical content.", options:{ bullet:true } },
  ], { x:1.05, y:2.25, w:5.2, h:4.0, fontFace:SANS, fontSize:13, color:CREAM, lineSpacing:19, paraSpaceAfter:10, margin:0 });

  s.addShape(pres.ShapeType.roundRect, { x:6.85, y:1.6, w:5.75, h:4.9, rectRadius:0.03,
    fill:{ color:PANEL }, line:{ color:PANEL2, width:1 } });
  s.addText("WHAT THE RPM FIGURES ASSUME", { x:7.2, y:1.85, w:5.1, h:0.3, fontFace:SANS, fontSize:11, bold:true, color:GOLD, charSpacing:2, margin:0 });
  s.addText([
    { text:"RPM is revenue per 1,000 views after YouTube's 45% cut, across all views — not CPM.", options:{ bullet:true, breakLine:true } },
    { text:"~60% Tier-1 audience. Traffic from South and East Asia earns 70–90% less and drags the blend down.", options:{ bullet:true, breakLine:true } },
    { text:"15–20 min runtime, clearing the 8-minute threshold for 2–3 mid-rolls. This is the biggest controllable lever.", options:{ bullet:true, breakLine:true } },
    { text:"Standard monetisation, not “limited ads.” Frame episodes as history and philosophy, not health advice — treatment claims get restricted, and Arc III is priced lower for that risk.", options:{ bullet:true } },
  ], { x:7.2, y:2.25, w:5.1, h:3.4, fontFace:SANS, fontSize:13, color:CREAM, lineSpacing:19, paraSpaceAfter:10, margin:0 });
  s.addText("Order-of-magnitude planning estimates. Real RPM on a new channel varies by more than 3× on audience geography alone.", {
    x:7.2, y:5.8, w:5.1, h:0.6, fontFace:SANS, fontSize:11, italic:true, color:MUTED, lineSpacing:15, margin:0 });
  s.addNotes("Be explicit with stakeholders that RPM here is a planning estimate, not a forecast.");
}

// ---------------------------------------------------------- chapter slides
CH.forEach((c, i) => {
  const s = base();
  const arc = ARCS[c.arc];
  const num = String(i + 1).padStart(2, "0");

  // seal motif
  s.addShape(pres.ShapeType.roundRect, { x:0.6, y:0.45, w:0.88, h:0.88, rectRadius:0.14,
    fill:{ color:arc.color }, line:{ color:PANEL2, width:1 } });
  s.addText(num, { x:0.6, y:0.45, w:0.88, h:0.88, align:"center", valign:"middle",
    fontFace:SERIF, fontSize:26, bold:true, color:BG });

  s.addText(c.en, { x:1.7, y:0.42, w:8.4, h:0.66, fontFace:SERIF, fontSize:26, bold:true, color:CREAM, margin:0, valign:"middle" });
  s.addText(c.cn, { x:1.7, y:1.10, w:8.4, h:0.32, fontFace:SANS, fontSize:14, color:arc.color, margin:0 });
  s.addText(arc.name, { x:10.3, y:0.55, w:2.4, h:0.35, align:"right",
    fontFace:SANS, fontSize:10.5, bold:true, color:MUTED, charSpacing:1.5, margin:0 });

  // left: description
  s.addShape(pres.ShapeType.roundRect, { x:0.6, y:1.7, w:7.3, h:4.25, rectRadius:0.03,
    fill:{ color:PANEL }, line:{ color:PANEL2, width:1 } });
  s.addText("WHAT'S IN THE CHAPTER", { x:0.95, y:1.93, w:6.6, h:0.28, fontFace:SANS, fontSize:10.5, bold:true, color:arc.color, charSpacing:2, margin:0 });
  s.addText(c.desc, { x:0.95, y:2.3, w:6.65, h:3.45, fontFace:SANS, fontSize:12.5, color:CREAM, lineSpacing:18.5, margin:0, valign:"top" });

  // right top: why
  s.addShape(pres.ShapeType.roundRect, { x:8.15, y:1.7, w:4.55, h:2.5, rectRadius:0.03,
    fill:{ color:PANEL }, line:{ color:PANEL2, width:1 } });
  s.addText("WHY IT MAKES AN EPISODE", { x:8.5, y:1.93, w:3.9, h:0.28, fontFace:SANS, fontSize:10.5, bold:true, color:arc.color, charSpacing:2, margin:0 });
  s.addText(c.why, { x:8.5, y:2.3, w:3.9, h:1.75, fontFace:SANS, fontSize:12, color:CREAM, lineSpacing:17.5, margin:0, valign:"top" });

  // right bottom: rpm
  s.addShape(pres.ShapeType.roundRect, { x:8.15, y:4.45, w:4.55, h:1.5, rectRadius:0.03,
    fill:{ color:PANEL }, line:{ color:PANEL2, width:1 } });
  s.addText("EST. YOUTUBE RPM", { x:8.5, y:4.60, w:2.4, h:0.26, fontFace:SANS, fontSize:10.5, bold:true, color:arc.color, charSpacing:2, margin:0 });
  s.addText(c.rpm, { x:8.5, y:4.88, w:2.5, h:0.46, fontFace:SERIF, fontSize:28, bold:true, color:GOLD, margin:0, valign:"middle" });
  s.addText(c.rpmNote, { x:8.5, y:5.37, w:3.9, h:0.52, fontFace:SANS, fontSize:10, color:MUTED, lineSpacing:13.5, margin:0 });

  // hook strip
  s.addText(c.hook, { x:0.6, y:6.2, w:12.1, h:0.75, fontFace:SERIF, fontSize:19, italic:true,
    color:arc.color, valign:"middle", margin:0 });

  s.addNotes(`${c.cn} — ${c.en}. ${arc.name}. Estimated RPM ${c.rpm}. Cold-open line: ${c.hook}`);
});

// ------------------------------------------------------------- closing slide
{
  const s = base();
  s.addText("The season at a glance", {
    x:0.7, y:0.5, w:8.0, h:0.7, fontFace:SERIF, fontSize:36, bold:true, color:CREAM });
  s.addText("Four arcs of five episodes · twenty videos · 15–20 minutes each", {
    x:0.7, y:1.24, w:9.0, h:0.35, fontFace:SANS, fontSize:14, color:GOLD });

  const cols = [
    ["I",   ["Why the Ancients Lived to 100","Living by the Four Seasons","Your Inner Sun","The Grand Theory","The Body as an Empire"]],
    ["II",  ["When the Old Magic Stopped","All Illness Begins with Qi","The Five Spirits","The Dream Dictionary","The Twenty-Five Kinds of People"]],
    ["III", ["Six Days of Fever","Wind, Cold and Damp","Strange Cases","The Nineteen Rules","The Map Beneath the Skin"]],
    ["IV",  ["Why Medicine Differs by Country","Reading a Life at the Wrist","Nothing More Precious","The Five Failures of a Doctor","A Hundred Years, Decade by Decade"]],
  ];
  cols.forEach(([key, items], i) => {
    const arc = ARCS[key];
    const x = 0.7 + i * 3.1;
    s.addShape(pres.ShapeType.roundRect, { x, y:1.75, w:2.85, h:3.5, rectRadius:0.03,
      fill:{ color:PANEL }, line:{ color:PANEL2, width:1 } });
    s.addText(arc.name.replace(" · ", "\n"), { x:x+0.25, y:1.95, w:2.4, h:0.6,
      fontFace:SANS, fontSize:10.5, bold:true, color:arc.color, charSpacing:1.5, lineSpacing:14, margin:0 });
    s.addText(items.map((t, j) => ({ text:t, options:{ breakLine: j < items.length - 1 } })), {
      x:x+0.25, y:2.6, w:2.4, h:2.5, fontFace:SANS, fontSize:11.5, color:CREAM, lineSpacing:15.5, paraSpaceAfter:9, margin:0 });
  });

  s.addShape(pres.ShapeType.roundRect, { x:0.7, y:5.42, w:11.9, h:1.0, rectRadius:0.03,
    fill:{ color:PANEL }, line:{ color:PANEL2, width:1 } });
  s.addText("HELD IN RESERVE", { x:1.05, y:5.56, w:2.5, h:0.25, fontFace:SANS, fontSize:10, bold:true, color:GOLD, charSpacing:2, margin:0 });
  s.addText("Lingshu 80 大惑论 (insomnia and dizziness — commercially the strongest topic left off the list)  ·  Lingshu 49 五色 (diagnosis by reading the face)  ·  Suwen 66–74, the Seven Great Treatises on cosmic cycles and epidemic years (needs three episodes, not one)  ·  Suwen 11 五脏别论  ·  Suwen 4 金匮真言论", {
    x:1.05, y:5.82, w:11.2, h:0.52, fontFace:SANS, fontSize:11, color:CREAM, lineSpacing:15, margin:0 });

  s.addText("Niche RPM ranges benchmarked against AIR Media-Tech, vidIQ, OutlierKit and TubeAnalytics 2026 data; blended and adjusted for audience geography, runtime and medical-content risk.", {
    x:0.7, y:6.62, w:11.9, h:0.36, fontFace:SANS, fontSize:9.5, italic:true, color:MUTED, margin:0 });
  s.addNotes("Closing overview. Reserve chapters are the first candidates for a second season.");
}

const out = path.join(__dirname, "..", "decks", "huangdi-neijing-top20-video-chapters.pptx");
pres.writeFile({ fileName: out }).then(() => console.log("wrote " + out));
