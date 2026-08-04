# The Emperor's Inner Canon — Chapter 46 Longform (18 minutes)

**灵枢·营卫生会第十八 · The Night Watch**

**Framing:** history of ideas. Not health content.

**Format:** 16:9 landscape, 1280×720, **108 × 10s blocks = 18:00.**
**Final render:** *not run — script only, pre-production.*

> **Chapter numbering.** This is **Ling Shu 18**. The `episode-46` folder and
> "Chapter 46" are the **series slate index** from
> `docs/Emperors Inner Canon Series Blueprint.md`, whose Ling Shu parentheticals
> are all `index − 35` and none of which match the received text. Ling Shu 11 is
> 经别, a different chapter. Any on-screen citation reads **Ling Shu 18**. See
> `lingshu-18-yingwei-shenghui-translation.md` and
> `inner-canon-ch46-trailer-script-review.md` §1.1.

> A dramatized adaptation of a classical philosophical text. Not medical advice.

**Source text:** `lingshu-18-yingwei-shenghui-translation.md` in this folder — a
fresh translation of the classical text made for this production. Every classical
line quoted below traces to a numbered section there.

---

## The thesis

*The trailer sells one idea and refuses to resolve it; the episode resolves it.*
The idea: **a text that is wrong about almost everything can still be right about
the thing that matters.** Ling Shu 18 invents a physiology that does not exist and
uses it to notice two things nobody had written down before — that alertness runs
on an internal daily cycle, and that aging takes that cycle apart from both ends.

**The dramatic engine is not the text. It is Fan-di.** He asks the chapter's
question about "the old" because he is twenty-nine and has not slept properly in
months, and he would rather ask it academically. The episode is the ninety
minutes in which he stops being able to. **The fan is the tell:** snapped open he
is performing, set down he means it. He sets it down once, in Act III, and does
not pick it up again.

---

## Cast and voice

| Role | Voice | `voice_id` | Function |
|---|---|---|---|
| Narrator (V.O.) | **Arthur** | `30fc8796-ceb6-4a66-b3a7-4a145ef7f346` | history, mechanism, every compliance hedge |
| Fan-di | **Xavier** | `43173c95-3ec8-446a-a162-6504332c578b` | the Huangdi role — asks, deflects, breaks |
| Dr-Qi | **Vesper** | `c3204739-4084-41a3-9dc5-c805b307ec18` | the Qi Bo role — answers, never wins |
| Lei-Gong | **Zane** | `9ddbff06-a984-4c0d-b641-4d8ca846bf60` | the living control group; comic, then not |

`seed_audio` presets, `speech_rate` 55. **One speaker per 10s block** —
`explainer_video` takes exactly one audio per block, so every speaker change is
its own block. No block below contains two voices.

**Lei-Gong is the structural joke and the structural wound.** He is 壮者 — the
vigorous — sharp by day and asleep by night, and he has done nothing to earn
either. He sleeps through the lesson that is about him. In Act V he asks the only
question in the episode nobody wants to answer.

**Zane is measured on a five-word line only.** All of Lei-Gong's lines here are
written short by design, which suits the character, but `SKILL.md` still requires
him measured at length before a ~110-take run. See the production record.

---

## Act map

| Act | Blocks | Timecode | Beat |
|---|---|---|---|
| Cold open | 1–9 | 0:00–1:30 | The hour. The emperor awake. Title. |
| Act I — What a body runs on | 10–30 | 1:30–5:00 | The six questions; nutritive and defensive |
| Act II — Fifty circuits | 31–54 | 5:00–9:00 | The count, the tide, 合阴, the first crack |
| Act III — Why the old lie awake | 55–78 | 9:00–13:00 | The pairing, both ends of the day, the fan goes down |
| Act IV — Mist, ferment, ditch | 79–96 | 13:00–16:00 | The three burners; blood and qi; the wine question |
| Act V — The honest reckoning | 97–108 | 16:00–18:00 | What survived, what didn't, Lei-Gong's question |

Blocks are numbered **continuously across the whole episode**, not per act — the
assembly `items` array is flat, and act-local numbering makes off-by-one errors
that are expensive to find in an 18-minute render.

---

# COLD OPEN — blocks 1–9 (0:00–1:30)

**SOUND:** A water clock. One drip, then another, unhurried. No music yet.
**VISUAL:** Black. The drip is the only event. Ink-wash 2D throughout, 16:9.

**Block 1** — NARRATOR (V.O.)

> There is an hour, most nights, when nearly everyone you have ever met is
> unconscious at the same time. Two thousand years ago, somebody noticed. And
> wrote it down.

**VISUAL:** Pull up and back into an overhead of a palace compound at night, rain
on tile, roofs receding into depth. Every window dark but one.

**Block 2** — NARRATOR (V.O.)

> They did not have a word for circadian rhythm. They had a court physician, an
> emperor who could not sleep, and a very good question.

**VISUAL:** Push through the one lit window. Interior: Fan-di alone at a low
lacquer table, gold robe loosened, glasses off. **The fan is set down flat** —
the only time we see it down before Act III.

**Block 3** — NARRATOR (V.O.)

> The emperor is awake. He has been awake a while. In the morning he will ask his
> physician about it, and he will not say that he means himself.

**Block 4** — FAN-DI *(alone, to nobody — the only unperformed line he has)*

> Third watch. The lamp has burned down twice tonight. Somewhere out there ten
> thousand people are asleep at this exact moment, and I am lying here doing
> arithmetic about it.

**VISUAL:** Back outside. The single amber window in a black field. Rain.

**Block 5** — NARRATOR (V.O.)

> The text that came out of this question is called *The Meeting of Nutritive and
> Defensive Qi*. It is about sleep. It is really about aging.

**ON-SCREEN TEXT — Block 6.** Card: **靈樞·營衛生會第十八**, brushed, with
*"Ling Shu, chapter 18"* beneath in small type.

**Block 6** — NARRATOR (V.O.)

> Ling Shu, chapter eighteen. The Spiritual Pivot — the hands-on volume, the one
> about needles and channels and the mind. Written down, copied, and argued over
> for two thousand years.

**ON-SCREEN TEXT — Block 7.** Series title card.

**Block 7** — NARRATOR (V.O.)

> This is *The Emperor's Inner Canon*. The chapter is the Meeting of Nutritive and
> Defensive Qi. We are calling it The Night Watch.

**VISUAL:** Hard cut to morning. Cold clean light, the court, screens open.
*History lower-third sits here — inside the first 10 seconds is block 1, so it
goes there; this is the second placement if a longer hold is wanted.*

**Block 8** — NARRATOR (V.O.)

> By morning he has decided how to ask it. Not as a man who cannot sleep. As a
> sovereign with an academic interest in the elderly.

**SOUND:** The snap of a folding fan. Sharp, theatrical.
**VISUAL:** Fan-di enters, robe immaculate, glasses on, **fan snapping open**.

**Block 9** — NARRATOR (V.O.)

> Watch the fan. Open, he is performing. Closed and set down, he means it. He
> will not set it down again for eleven minutes.

---

# ACT I — WHAT A BODY RUNS ON — blocks 10–30 (1:30–5:00)

**VISUAL:** The court. Dr-Qi in the blue cheongsam, open bamboo scroll held
casually like a tablet. Lei-Gong slumped on a bench at the edge of frame, already
half asleep.

**Block 10** — FAN-DI *(performing)*

> Physician. A question of natural philosophy, nothing more. Where does a person
> get qi from? Where do yin and yang meet? Which one is the nutritive, which is
> the defensive?

**Block 11** — FAN-DI *(not pausing)*

> And where is the nutritive born? Where does the defensive join it? The old and
> the young are not the same. I want to know where the two of them meet.

**Block 12** — NARRATOR (V.O.)

> Six questions in one breath. In the original they arrive exactly like that — a
> man who has clearly been composing them for several hours.

**Block 13** — DR-QI

> From grain. Food goes into the stomach. What the stomach makes of it is passed
> up to the lung, and every organ in you takes its share from there.

**VISUAL:** No people. Brushed diagram: grain, a vessel, an upward stroke, a
spreading. Wet ink on paper grain.

**Block 14** — NARRATOR (V.O.)

> This is the part that sounds quaint and is not. It is a claim that everything
> the body runs on has one source, and that source is what you ate.

**Block 15** — DR-QI

> What is clear in it becomes the nutritive. What is turbid becomes the
> defensive. Two different things, made in the same place, out of the same meal.

**Block 16** — LEI-GONG *(surfacing)*

> Two? I have two of them? Nobody asked me.

**Block 17** — DR-QI

> You have both, and so does everyone. The nutritive runs inside the vessels. The
> defensive runs outside them. Same direction, same pace, and they never touch.

**ON-SCREEN TEXT — Block 18.** Card: **營在脈中，衛在脈外** / *"The nutritive within
the vessels. The defensive outside them."*

**Block 18** — NARRATOR (V.O.)

> The nutritive within the vessels. The defensive outside the vessels. Nine
> characters, and the whole rest of the chapter hangs off them.

**VISUAL:** One drawn vessel spanning the frame. A warm gold current inside the
line; a cool pale current outside it. Same direction. Never touching.

**Block 19** — NARRATOR (V.O.)

> One current feeds you. One guards you. They were named like an army — a camp
> and a garrison — and the metaphor is not decoration. It is the model.

**Block 20** — FAN-DI *(fan open, enjoying himself)*

> Charming. So I am a walking garrison town. Does the garrison ever sleep,
> physician? Or does it simply stand out there all night, in the rain, being a
> garrison?

**Block 21** — DR-QI

> It never stops. Neither of them stops. That is the first thing you have to
> accept before any of the rest of it makes sense at all.

**Block 22** — NARRATOR (V.O.)

> Here is where a modern viewer should stop being condescending. None of this is
> anatomy. All of it is systems thinking, and it is very good systems thinking.

**VISUAL:** Brush strokes closing into a loop. No figures.

**Block 23** — NARRATOR (V.O.)

> They had no microscope, no clock more precise than dripping water, and no way
> to see inside a living body. So they reasoned from what a body does.

**Block 24** — LEI-GONG

> It does nothing. I watched my grandfather do nothing for an entire afternoon.

**Block 25** — DR-QI

> He was doing a great deal. You simply could not see it. That is the whole
> problem this chapter was written to solve.

**Block 26** — NARRATOR (V.O.)

> The question they were actually asking is one we would recognise. If the body
> runs continuously, why does it not feel continuous? Why does it have a rhythm?

**VISUAL:** Time-lapse in ink: a shadow crossing a courtyard, dawn to dusk.

**Block 27** — NARRATOR (V.O.)

> Why sharp in the morning. Why heavy after dark. Why does the same body,
> unchanged, behave like two different bodies twelve hours apart?

**Block 28** — FAN-DI

> Because it is dark out. That is not an answer, that is a window. I am asking
> why the body *knows* it is dark, and you know that is what I am asking.

**Block 29** — DR-QI *(deliberately short — the pivot)*

> Then I will give you the count.

**VISUAL:** She sets the scroll down on the table. First time she has put
anything down. The room settles.

**Block 30** — NARRATOR (V.O.)

> What follows is, as far as anyone can tell, the oldest surviving attempt to put
> an actual number on the rhythm of a human day.

---

# ACT II — FIFTY CIRCUITS — blocks 31–54 (5:00–9:00)

**Block 31** — DR-QI

> The nutritive circles without rest. Fifty circuits, and then the great meeting
> comes round again. Yin and yang threaded through each other, like a ring with
> no end.

**ON-SCREEN TEXT — Block 32.** Card: **營周不休，五十而復大會，陰陽相貫，如環無端**

**Block 32** — NARRATOR (V.O.)

> Fifty circuits. Not fifty a night — fifty across a whole day and a night, and
> then the two of them meet again where they started.

**VISUAL:** A single closed ink ring fills the frame. Two points of light travel
it, one riding the inner edge of the stroke, one the outer.

**Block 33** — NARRATOR (V.O.)

> That last phrase — a ring with no end — is doing real work. It says the cycle
> has no beginning you can point to. Only a meeting point.

**Block 34** — DR-QI

> The defensive runs twenty-five circuits through yin, and twenty-five through
> yang. That is what divides your day from your night. Not the sun. The count.

**Block 35** — FAN-DI

> Twenty-five and twenty-five. You are telling me my body is keeping a tally, and
> that the tally is what makes me tired. Not the hour. The tally.

**Block 36** — DR-QI

> When the qi arrives at yang, you wake. When it arrives at yin, you rest. That
> is the entire mechanism, stated in eleven characters.

**Block 37** — NARRATOR (V.O.)

> It is wrong. There is no qi making circuits of you. But hold the *shape* of the
> claim for a moment, because the shape is the part that survived.

**VISUAL:** The ring again, now with the upper arc washed pale daylight and the
lower arc deep indigo.

**Block 38** — NARRATOR (V.O.)

> An internal count, running whether or not you are watching it, that decides
> when you are alert and when you are not. That is a clock. An internal clock.

**Block 39** — DR-QI

> At midday, yang is at flood. They called that doubled yang. At midnight, yin is
> at flood. Doubled yin. The day has two peaks and they are opposite.

**ON-SCREEN TEXT — Block 40.** Card: **日中而陽隴為重陽，夜半而陰隴為重陰**

**Block 40** — NARRATOR (V.O.)

> Doubled yang at noon. Doubled yin at midnight. Not two halves of a day — two
> extremes of one quantity, and everything between them is a slope.

**Block 41** — DR-QI

> After midnight, yin ebbs. At first light it is spent, and yang takes the qi. At
> midday yang floods. As the sun goes west it ebbs. At sundown, yin takes it.

**VISUAL:** A tide diagram in brush: water withdrawing across flats, returning.

**Block 42** — NARRATOR (V.O.)

> Four hinge points. First light, midday, sundown, midnight. Every one is a
> handover, and the language throughout is a tide going out and coming back.

**Block 43** — LEI-GONG *(deliberately short — the room's only laugh)*

> So I am the sea.

**Block 44** — NARRATOR (V.O.)

> He is closer than he knows. The chapter's own image for this is tidal, and the
> reason is that a tide was the only thing they could watch doing it.

**Block 45** — DR-QI

> And at midnight comes the great meeting. When the ten thousand people all lie
> down at once. They gave that hour a name.

**ON-SCREEN TEXT — Block 46.** Card: **夜半而大會，萬民皆臥，命曰合陰**

**Block 46** — NARRATOR (V.O.)

> 合陰. The joining of the dark. Not sleep, not night — the moment the two halves
> of you meet, and the whole population goes down together.

**VISUAL:** High overhead. The ink city. Lit windows going out in a slow wave
from the far edge toward camera, until the field is black.
**SOUND:** Everything drops out. Room tone only.

**Block 47** — NARRATOR (V.O.) *(deliberately short — the silence beat)*

> Every window. At once.

**VISUAL:** Hold on the black city. Nothing moves.

**Block 48** — NARRATOR (V.O.)

> That is the image the chapter is built around, and it is genuinely beautiful.
> Not one person sleeping. A whole city, on the same count, at the same hour.

**Block 49** — DR-QI

> And then first light, and yin is spent, and yang takes it up again. Without
> end. On the same reckoning as heaven and earth.

**ON-SCREEN TEXT — Block 50.** Card: **與天地同紀**

**Block 50** — NARRATOR (V.O.)

> On the same reckoning as heaven and earth. Not a metaphor about harmony — a
> claim that the body's clock and the sky's clock are the same instrument.

**Block 51** — NARRATOR (V.O.)

> That is what makes this more than a sleep chapter. Your rhythm is not yours.
> You are running a schedule the world handed you, and it does not consult you.

**VISUAL:** Fan-di. The fan does not move.

**Block 52** — FAN-DI *(deliberately short — the crack)*

> Then mine is broken.

**VISUAL:** Dr-Qi does not react. Does not lean in. Lei-Gong is asleep and misses
it entirely. Fan-di registers what he has just said out loud.

**Block 53** — NARRATOR (V.O.)

> There it is. He did not mean to say that, and the physician does not make him
> pay for it. She waits.

**SOUND:** The fan snaps open again. Too late, and everyone knows it.

**Block 54** — FAN-DI *(recovering)*

> Hypothetically. If a man's count were off. If he were awake at the hour when
> the ten thousand lie down. What would that mean, physician? Academically.

---

# ACT III — WHY THE OLD LIE AWAKE — blocks 55–78 (9:00–13:00)

**Block 55** — DR-QI *(deliberately short)*

> Ask me the question the text asks.

**VISUAL:** Fan-di, caught. A long beat before he answers.

**Block 56** — NARRATOR (V.O.)

> The chapter does contain his question. It is the second exchange in it, and it
> is asked about somebody else — which is presumably why it survived.

**Block 57** — FAN-DI

> Very well. Why do the old not sleep at night? And why do the young not sleep
> during the day? Two halves of one question. I assume you have both answers.

**ON-SCREEN TEXT — Block 58.** Card: **老人之不夜瞑者，何氣使然？** /
*"The old do not sleep at night — what qi makes it so?"*

**Block 58** — NARRATOR (V.O.)

> That is the emperor's line, near enough word for word. Two thousand years old,
> and still the question people type into a search box at four in the morning.

**Block 59** — NARRATOR (V.O.)

> Notice the pairing. He is not asking why the young sleep well. He is asking why
> they do not doze in the afternoon. The symmetry matters enormously.

**Block 60** — DR-QI

> In the vigorous, qi and blood are abundant. The flesh is smooth. The roads are
> open. Nutritive and defensive keep to their schedule and never lose it.

**VISUAL:** Lei-Gong, face-down on the bench, mouth open, dead asleep. Held a
beat too long.

**Block 61** — DR-QI

> Therefore: sharp by day, and asleep by night. Both. He gets both, and he has
> not earned either one, which is the most irritating thing about being twenty.

**ON-SCREEN TEXT — Block 62.** Card: **晝精而夜瞑** / *"Sharp by day, asleep by night."*

**Block 62** — NARRATOR (V.O.)

> Sharp by day and asleep by night. Four characters, and they define a working
> system rather than describe a good night's rest.

**Block 63** — NARRATOR (V.O.)

> That distinction is the reason this chapter is still worth reading. It never
> treats sleep as a thing on its own. Sleep is the visible half of a whole cycle.

**Block 64** — DR-QI

> In the old, qi and blood are ebbing. The flesh is withered. The roads are
> rough. The qi of the five organs grind against one another.

**VISUAL:** No people. An ink road narrowing between banks until the stroke
almost closes.

**Block 65** — DR-QI

> The nutritive thins out. And the defensive, finding no road open to it, turns
> around and attacks inward — against the body it was made to guard.

**ON-SCREEN TEXT — Block 66.** Card: **營氣衰少而衛氣內伐**

**Block 66** — NARRATOR (V.O.)

> The guard turns on the house. As mechanism it is fiction. As a description of
> what it feels like to lie awake at four in the morning, it is exact.

**Block 67** — NARRATOR (V.O.)

> That is the thing this text does again and again. The physiology is invented.
> The phenomenology is reported, and the reporting is honest.

**Block 68** — DR-QI *(deliberately short — the hammer)*

> Therefore: not sharp by day. And not asleep by night.

**ON-SCREEN TEXT — Block 69.** Card: **晝不精，夜不瞑** / *"Not sharp by day. Not
asleep by night."*

**Block 69** — NARRATOR (V.O.)

> Set the two lines side by side and the chapter's real argument appears, and it
> is not the one anybody quotes.

**VISUAL:** The two cards together on screen: **晝精而夜瞑** above, **晝不精，夜不瞑**
below.

**Block 70** — NARRATOR (V.O.)

> The young get both. The old lose both. This is not saying that aging moves your
> sleep to a different hour. It is saying aging takes both ends of your day.

**SOUND:** The fan closes. Not a snap — a fold. It is set down on the table.
**VISUAL:** Fan-di's hand leaves it there.

**Block 71** — NARRATOR (V.O.)

> The fan goes down. He is not asking about the elderly, and everyone in the room
> has known that for some time.

**Block 72** — FAN-DI *(deliberately short)*

> I am twenty-nine.

**Block 73** — DR-QI *(quiet, not triumphant)*

> I know. And the count does not check your age before it slips.

**Block 74** — DR-QI

> The text puts it on the old because the old are where it shows first. It is not
> a law about being old. It is a law about the roads.

**Block 75** — NARRATOR (V.O.)

> Which is, medically speaking, wrong. And which is, as an account of why this
> arrives early for some people and never for others, closer than it has any
> right to be.

**VISUAL:** Lei-Gong stirs. Sits up. Registers that the room has gone quiet and
does not know why.

**Block 76** — LEI-GONG

> What did I miss?

**VISUAL:** Nobody answers him. Fan-di does not look up.

**Block 77** — NARRATOR (V.O.)

> Nobody tells him. He is the healthiest person in the room, and the only one who
> will not understand this scene until he is a great deal older.

**VISUAL:** First grey at the window. Rain stopping.

**Block 78** — NARRATOR (V.O.)

> The chapter does not stop here. Having answered the question, it goes back and
> explains the plumbing — and the plumbing is where the writing turns strange and
> wonderful.

---

# ACT IV — MIST, FERMENT, DITCH — blocks 79–96 (13:00–16:00)

**VISUAL:** Fan-di, fan still on the table. He does not pick it up for the rest
of the episode.

**Block 79** — FAN-DI

> Where do they come from? The two of them. If they run all night, something has
> to be making them — and I would like to know what, and where, and whether
> anything can be done about it.

**Block 80** — DR-QI

> The nutritive issues from the middle burner. The defensive from the lower
> burner — though the copies disagree about that one, and have disagreed for a
> very long time.

**Block 81** — NARRATOR (V.O.)

> That is a real textual dispute, not a translation wobble. Some editions say
> lower, some say upper, and commentators have argued it for centuries. We are
> not settling it here.

**Block 82** — FAN-DI

> Burners. So there are furnaces in me now. Three of them, presumably, since
> nothing in your profession has ever once come in twos.

**Block 83** — DR-QI

> Three. And the best line anyone ever wrote about them is not mine. It is yours
> — at the end of this chapter, when you finally understand it.

**ON-SCREEN TEXT — Block 84.** Card: **上焦如霧，中焦如漚，下焦如瀆**

**Block 84** — NARRATOR (V.O.)

> The upper burner is like mist. The middle like fermenting froth. The lower like
> a drainage ditch. The emperor says it, at the end, as a man who has got it.

**VISUAL:** Triptych, no people. Mist moving through pine. Grain steeping in a
**covered** vessel, slow bubbles. Water running down a stone channel.

**Block 85** — NARRATOR (V.O.)

> Three images, and not one of them is an organ. Every one is a *process* — which
> is a remarkable thing to reach for when you are trying to describe a body.

**Block 86** — NARRATOR (V.O.)

> Mist: something spread so fine you cannot catch it. Ferment: something being
> slowly transformed. Ditch: something separated off and carried away. That is a
> metabolism, described without the word.

**Block 87** — DR-QI

> The middle one is the one that matters. It strains off the dregs, steams the
> fluids, takes the finest part of what is left, and sends it up to the lung.

**Block 88** — DR-QI

> And there it becomes blood. Nothing in the body is more precious than that. It
> is the only thing permitted to travel in the deep channels.

**ON-SCREEN TEXT — Block 89.** Card: **化其精微…乃化而為血…莫貴於此**

**Block 89** — NARRATOR (V.O.)

> Food becoming blood, and blood being the most precious thing in you. They were
> wrong about the route. They were not wrong that this is the central transaction.

**Block 90** — FAN-DI

> And blood and qi? You keep using them as though they were one word wearing two
> hats. Which is it? Are they the same thing, or are they not?

**Block 91** — DR-QI

> Different names. One kind. The nutritive and defensive are essence; blood is
> spirit. But rob a man of blood and he has no sweat. Rob him of sweat and he has
> no blood.

**ON-SCREEN TEXT — Block 92.** Card: **奪血者無汗，奪汗者無血**

**Block 92** — NARRATOR (V.O.)

> Two ways to die, the text says, and not two ways to live. It is an observation
> about losing fluid, and it is the most quietly frightening line in the chapter.

**Block 93** — NARRATOR (V.O.)

> They had noticed that a body which has lost a great deal of blood stops
> sweating. From that they concluded the two came from one supply. That is
> reasoning from evidence.

**VISUAL:** A sealed wine vessel on a table. No cups, no pouring, nobody
drinking. Brush notation beside it, as in a manuscript margin.

**Block 94** — NARRATOR (V.O.)

> There is one more question in the chapter, and it is the odd one out. Wine goes
> in after the food, the emperor says. So why does it come out first?

**Block 95** — DR-QI

> Because wine is the liquid of grain that has already been ripened. Its qi is
> fierce, and it is clear. It goes in last and it leaves first.

**Block 96** — NARRATOR (V.O.)

> A question about transit time, asked and answered in four lines. No approval in
> it, and no warning either — just a man noticing something and wanting to know
> why.

---

# ACT V — THE HONEST RECKONING — blocks 97–108 (16:00–18:00)

**Block 97** — NARRATOR (V.O.)

> That is the chapter. A clock, an explanation of aging, three burners, and a
> note about wine. Now the part where we say what is actually true.

**VISUAL:** The ink diagrams from earlier, dissolving back into loose brush
strokes and then into blank paper.

**Block 98** — NARRATOR (V.O.)

> Almost every mechanism in it is wrong. There is no nutritive qi. There is no
> defensive qi. Nothing makes fifty circuits of you between one midnight and the
> next.

**VISUAL:** Still ink-wash, but the shapes turn modern: a smooth curve rising and
falling across a day; a stepped band of sleep stages, rendered in brush.

**Block 99** — NARRATOR (V.O.)

> What is true is the shape. Human alertness does run on an internal cycle of
> roughly a day, and it does keep running when you take the light away.

**Block 100** — NARRATOR (V.O.)

> And sleep does change with age. Shorter, lighter, more broken, and it shifts
> earlier. That is one of the most reliable findings in sleep research.

**Block 101** — NARRATOR (V.O.)

> Two observations, made with no instruments at all, both still standing. What
> they could not do was explain them. So they built a model. It was wrong. It was
> also useful.

**VISUAL:** The ring diagram returns, faint, under the modern curve. They have
the same shape.

**Block 102** — NARRATOR (V.O.)

> A wrong model that makes correct predictions is not a failure. It is how most
> of science has spent most of its life. This one lasted two thousand years.

**VISUAL:** Lei-Gong, awake now, actually listening. No spark effects. He is just
a young man in a red robe paying attention.

**Block 103** — LEI-GONG

> Does it happen to everyone?

**Block 104** — DR-QI

> Yes. Not at the same speed and not at the same age. But yes. The roads narrow.
> That part they got right, and there is no version of this where they did not.

**VISUAL:** Lei-Gong takes it. He does not have a joke.

**Block 105** — NARRATOR (V.O.)

> That is the first thing all episode he has had no answer for. It is also the
> reason this chapter was written down instead of forgotten.

**VISUAL:** Full dawn. Fan-di at the open window, looking out at a city waking
up. The fan is still on the table behind him, closed.

**Block 106** — NARRATOR (V.O.)

> The emperor did not get a cure. He got a description, a name for the hour, and
> the knowledge that it happens to everybody. Sometimes that is the whole
> medicine.

**ON-SCREEN TEXT — Block 107.** Title and credit card.

**Block 107** — NARRATOR (V.O.)

> *The Emperor's Inner Canon.* The Meeting of Nutritive and Defensive Qi — Ling
> Shu, chapter eighteen. Written and edited by Joshua Chin.

**ON-SCREEN TEXT — Block 108.** Disclaimer card. Plain plate, ink grain.

**Block 108** — NARRATOR (V.O.)

> A dramatized adaptation of a classical philosophical text. Not medical advice.

---

## ON-SCREEN TEXT cards — the exception to text-free clips

`explainer_video` has **no text-overlay parameter**, and its subtitles are
Whisper-transcribed *from the voiceover* — so a quotation card carries no text
unless the text is in the clip. These eleven blocks are therefore generated
**with the Chinese in frame**, styled off the chapter key. Every other block stays
text-free.

| Block | Card | Gloss |
|---|---|---|
| 6 | 靈樞·營衛生會第十八 | the citation — **Ling Shu 18**, never "Chapter 46" |
| 18 | 營在脈中，衛在脈外 | nutritive within the vessels, defensive outside |
| 32 | 營周不休，五十而復大會，陰陽相貫，如環無端 | fifty circuits, a ring with no end |
| 40 | 日中而陽隴為重陽，夜半而陰隴為重陰 | doubled yang at noon, doubled yin at midnight |
| 46 | 夜半而大會，萬民皆臥，命曰合陰 | the great meeting; the joining of the dark |
| 50 | 與天地同紀 | on the same reckoning as heaven and earth |
| 58 | 老人之不夜瞑者，何氣使然？ | the emperor's question |
| 62 | 晝精而夜瞑 | sharp by day, asleep by night |
| 66 | 營氣衰少而衛氣內伐 | the nutritive thins, the defensive attacks inward |
| 69 | 晝不精，夜不瞑 | not sharp by day, not asleep by night |
| 84 | 上焦如霧，中焦如漚，下焦如瀆 | mist, ferment, drainage ditch |

**Generated Chinese glyphs are unreliable and cannot be checked from this host**
(the CDN has been blocked since chapter 3). Two options, and the choice is a
production decision: generate the card blocks as plain plates and add the
characters at edit time, or generate them with text in-frame and have a human
verify every glyph before the cut ships. **Default to plates plus edit-time
text** for anything a viewer could catch — especially block 6, the citation.

---

## Source mapping — translation section → blocks

| Translation § | Passage | Blocks |
|---|---|---|
| §1 | the six opening questions; grain → stomach → lung; clear/turbid; 脈中/脈外 | 10–21 |
| §1 | 營周不休，五十而復大會；25/25 | 31–36 |
| §2 | 重陽/重陰; the four hinge points; 合陰; 與天地同紀 | 39–51 |
| §3 | 老人之不夜瞑; 壯者/老者; 晝精夜瞑 vs 晝不精夜不瞑 | 57–70 |
| §4 | 營出於中焦，衛出於下焦 + the 上焦/下焦 variant | 79–81 |
| §5 | the upper burner's course | *cut — see runtime levers* |
| §6 | 漏泄, leakage sweating | *cut — see runtime levers* |
| §7 | the middle burner; 化而為血；莫貴於此 | 87–89 |
| §8 | 血之與氣，異名同類；奪血者無汗，奪汗者無血 | 90–93 |
| §9 | the lower burner's course | folded into 84–86 |
| §10 | the wine question | 94–96 |
| §11 | 上焦如霧，中焦如漚，下焦如瀆 | 84–86 |

**Naming reconciliations**, resolved in favour of `CLAUDE.md`: *Chronicle of
Balance* → **The Emperor's Inner Canon**; *Xiao-Lei* → **Lei-Gong**; Dr-Qi wears
the cast sheet's **blue** cheongsam.

**Dramatic material not in the source, flagged as invention:** Fan-di's insomnia,
his age, the fan business, Lei-Gong sleeping through the lesson, and Dr-Qi's line
about the roads not checking your age. The classical text is a Q&A with no
characterisation at all. Everything quoted as *the text* above is in the
translation; everything else is dramatisation and the compliance notes treat it
as such.

---

## Production record (Higgsfield)

**Status: script only. Nothing generated, and the step-0 gate has not been run
for this cut.** The figures below are a planning preflight, not a priced gate.

### This does not fit the credit balance. Say so before anything else.

Balance at last check (2026-08-01): **942.4 credits.**

| Clip model / tier | Credits/clip | × 108 blocks | vs 942.4 |
|---|---|---|---|
| `seedance_2_0_mini` 480p (draft) | 10 | **1,080** | **over budget** |
| `seedance_2_0_mini` 720p (full) | 25 | 2,700 | ~2.9× balance |
| `gemini_omni` 720p | 30 | 3,240 | ~3.4× balance |

Fixed costs are trivial by comparison: a landscape style key at 2, ~108 voice
takes at ~1 each (live-preflight figure — `SKILL.md`'s ~0.6 is not what the API
returns), subtitles at 0.05/voiced block ≈ 5.4 per captioned pass. **Clips are
essentially the whole bill, so the model choice is the budget.**

**An 18-minute episode does not currently fit at any tier — not even an all-draft
pass.** Three ways forward, and it is a decision, not a detail:

1. **Top up** before starting.
2. **Cut the runtime.** 90 blocks (15:00) at 480p is ~900 — inside the balance,
   barely, with nothing left for re-takes. See the runtime levers.
3. **Produce act by act across billing periods**, assembling each act as its own
   `explainer_video` job and joining at the end.

### Voice measurement — required before ~108 takes

`SKILL.md` is explicit: measure all four on one block each before committing. Two
things make it non-optional here:

- **Zane has never been measured at length** — only a five-word line at 2.3–2.6s,
  where pause overhead dominates. Lei-Gong's lines here are deliberately short,
  but "deliberately short" still has to land in a known place.
- **Arthur, Xavier and Vesper were measured on chapter 1**, and those figures are
  good — but they were measured on trailer-register lines. This script asks
  Vesper for sustained explanatory paragraphs she has not been measured on.

Budget ~4 takes (~4 credits) and write the results back into the skill's table.

### Style key — needs a 16:9 sibling

The whole chained lineage is 9:16. Longform needs a **landscape variant** derived
from the ch46 vertical key (itself chained off ch1
`4b6f7106-67da-4d1a-a553-c58ba90ac43f`), changing only the framing. Record it as
its own lineage entry — do not overwrite the vertical key, the trailer needs it.

### Assembly strategy

Per act, then join. Act assemblies that feed the join carry **no** `subtitles` —
burned-in captions are pixels, and captioning an act and then re-captioning at
the join double-layers them. The final join carries
`subtitles: { font: "anton" }` once. Caption checking happens on the 480p draft.

### Reproduction notes

- **`build_subtitles.js` cannot parse this document, and that is a real gap.** It
  looks for a three-column narration table (`| n | beat | line |`); the longform
  format `CLAUDE.md` mandates is SOUND / VISUAL / CHARACTER blocks with dialogue
  as blockquotes, which has no such table. The `.srt`/`.vtt` sidecars are tracked,
  required deliverables. **Before this episode is produced, either the script
  needs a generated narration table or `build_subtitles.js` needs to learn the
  longform format.** Nothing is blocked today — there are no take durations yet
  either way — but it blocks delivery.
- **16:9 is an inference, not a rule.** `CLAUDE.md` mandates 9:16 for trailers and
  16:9 for longform; that is followed here, but no longform has ever been produced
  in this repo. Confirm before ~108 clips.
- **Duplicated dialogue risk: none.** Dialogue appears once, in the act bodies.
  The act map and source mapping reference blocks by number only.
- **Everything about longform in `SKILL.md` is untested.** This is the pilot.
  Write what actually happens into these notes.

## Deliverables the assembler cannot produce

- **History lower-third** — *"Presented as history & philosophy"*, small, on
  screen within the first 10 seconds. Sits on **block 1**.
- **End disclaimer card** — the repo disclaimer over **block 108**, held long
  enough to read. Block 108 renders as a plain plate.
- **Human editorial credit** — *"Written & edited by Joshua Chin"* on the end card
  (block 107) **and** in the description.
- **The eleven ON-SCREEN TEXT cards** — see the table above; default to plates
  plus edit-time text.
- **Music** — licensed guqin only. The water clock, the fan snaps and the room
  tone in the SOUND lines are all manual edit-time additions with the same
  Content-ID exposure; none can be produced by this pipeline. The silence at
  blocks 47–48 comes free from block geometry around a short take.

## Compliance notes (YouTube)

- **Disclaimer** — repo string verbatim, in the blockquote above, spoken in block
  108, on screen as the end card, and in the description.
- **Health content stays philosophical — the load-bearing rule here.** Sleep is
  the highest-RPM topic on the slate precisely because of sleep-app and
  supplement advertiser overlap, and that is the pressure that turns a history
  channel into a wellness channel. **Nothing in 108 blocks tells anyone how to
  sleep.** No condition named, no remedy, no practice, no supplement, no "try
  this before bed." Everything is past tense and about a text. Blocks 97–102 state
  outright that the mechanism is wrong.
- **The modern-science blocks are the risk point, and they are hedged.** Blocks
  99–100 make two claims: that alertness runs on a roughly daily internal cycle
  which persists without light cues, and that sleep shortens, lightens, fragments
  and shifts earlier with age. Both are mainstream and both are stated as
  *findings about sleep*, not as vindication of qi. Block 98 explicitly denies the
  mechanism first, in that order, so no viewer can read the sequence as "science
  proves the ancients right."
- **Mortality / aging** — aging is the subject. It is carried by a silhouette in a
  window, a narrowing ink road, and two men talking. No illness, no bodies, no
  decline depicted. Portraits, not bodies.
- **Indulgence / alcohol** — blocks 94–96 use the wine passage. Framed as a
  transit-time question and nothing else: **a sealed vessel, no cups, no pouring,
  no drinking, nobody consuming anything.** Block 96 explicitly notes the text
  carries neither approval nor warning. Block 85's ferment image is **grain
  steeping in a covered vessel** — not a wine jar.
- **Supernatural hook** — none is raised. Nothing in the episode asks the viewer
  to believe qi is real; blocks 22–23 and 97–102 frame the whole model as
  inference under severe instrument limits.
- **Titles and thumbnails must honor the payoff** — no *secret*, *ancient trick*,
  *cure*, *doctors won't tell you*, no shocked-face thumbnail. **Open conflict:**
  the Blueprint's Ch 46 hook is *"The Ancient Science of Sleep — and Why the Old
  Sleep Badly."* *"Ancient Science of"* asserts what block 98 denies. Use a hook
  that matches the episode: *"They Were Wrong About Why. They Were Right About
  What."*
- **Citation accuracy** — **Ling Shu 18.** A channel whose differentiator is
  correcting uncritical ancient-wisdom content cannot miscount its own source.
  Block 6's card is the one a viewer can check.
- **Dramatisation is disclosed** — Fan-di's insomnia, his age, and the fan are
  invention; the classical text has no characterisation. The source mapping says
  so explicitly, and the on-screen text cards quote only the real text.
- **Hedge allocation.** Every load-bearing claim sits with **Arthur**: the "it is
  wrong" line (37), the mechanism denial (98), the modern findings (99–101), the
  title and the disclaimer (107–108). Dr-Qi states the *text's* model with the
  scroll visible in frame. Fan-di makes no factual claim in the entire episode —
  he only asks. Lei-Gong's one substantive line (103) is a question.
- **General audience, not made for kids** — self-certify at upload.
- **Prompt-stage audit — run before generating, per `CLAUDE.md`.** Read against
  ch8's `nsfw` incident, where restraint and bound-figure imagery tripped the
  filter: nothing here goes near it. The two beats that might have — block 65's
  "attacks inward" and block 92's blood line — are rendered as **a narrowing ink
  road** and **a manuscript margin**, with no human figure in either. **Assessed
  low risk; recorded as checked.** Re-run on any changed prompt.

**Residual risk: LOW**, conditional on the title and thumbnail holding the line
the narration holds, and on the block 6 citation being correct on screen.

## Runtime levers

Expressed in blocks, since blocks are what cost money.

**Cut to 15:00 (90 blocks, ~900 credits at 480p — the only version that fits the
current balance).** Drop, in this order:

| Drop | Blocks | Cost |
|---|---|---|
| Act IV's blood-and-qi passage | 90–93 | loses 奪血者無汗 — the best line in Act IV |
| The wine question | 94–96 | loses nothing structural; safest cut |
| Act I's systems-thinking aside | 22–27 | loses the "stop being condescending" argument |
| Act II's tide elaboration | 41–44 | loses Lei-Gong's one joke |
| Act V's model-quality argument | 101–102 | **do not cut** — this is the thesis |

Dropping 90–96 and 22–27 lands exactly 90 blocks and keeps every act intact.

**Stretch to 20:00 (120 blocks).** Two passages from the source are already
translated and currently unused:

- **§5, the upper burner's course** — the anatomical itinerary through throat,
  diaphragm, chest, armpit and tongue. ~6 blocks. Visually rich, entirely
  text-free, and it earns the "fifty circuits meet at the hand taiyin" payoff.
- **§6, 漏泄 / leakage sweating** — why hot food makes you sweat in the wrong
  places. ~6 blocks, genuinely strange, and it is the chapter's best evidence that
  they were watching real bodies closely.

**Block 108 is not a lever.** The end disclaimer card is a standing `CLAUDE.md`
requirement.

**Act boundaries are the re-render unit.** Each act maps to a contiguous block
range, so a single act can be re-rendered without recomputing anything.
