import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Heart,
  Layers,
  PenLine,
  UsersRound,
} from "lucide-react";
import coverE1 from "../assets/E1.jpg";
import coverE2 from "../assets/E2.jpg";
import coverE3 from "../assets/E3.jpg";
import currentCover from "../assets/current-cover.jpg";
import heroBook from "../assets/edition-bg.jpg";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "మా 43 ఏళ్ల ప్రయాణం — Swathi Publications" },
      {
        name: "description",
        content: "తెలుగు కుటుంబాల ప్రేమతో 43 ఏళ్లుగా కొనసాగుతున్న స్వాతి ప్రయాణం.",
      },
    ],
  }),
  component: JourneyPage,
});

const milestones = [
  {
    year: "1984",
    title: "స్వాతి పునఃప్రారంభం",
    description: "తెలుగు కుటుంబాల కోసం ఒక కొత్త పఠన ప్రయాణం మొదలైంది.",
    image: currentCover,
  },
  {
    year: "1986",
    title: "పాఠకుల ఆదరణ",
    description: "ఇళ్లలో, గ్రంథాలయాల్లో స్వాతి ఒక ఆత్మీయ నేస్తమైంది.",
    image: coverE2,
  },
  {
    year: "1990",
    title: "కొత్త ఆలోచనలు",
    description: "కథలు, సాహిత్యం, సమకాలీన అంశాలకు విస్తృత వేదిక.",
    image: coverE1,
  },
  {
    year: "2000",
    title: "కొత్త శతాబ్దం",
    description: "కాలంతో పాటు మారుతూ, విలువలను నిలుపుకుంటూ ముందడుగు.",
    image: coverE3,
  },
  {
    year: "2010",
    title: "విస్తృత పాఠకలోకం",
    description: "కొత్త తరాలకు కూడా స్వాతి కథలు చేరువయ్యాయి.",
    image: coverE3,
  },
  {
    year: "2020",
    title: "డిజిటల్ ప్రయాణం",
    description: "ముద్రిత పత్రికతో పాటు డిజిటల్ పఠనానికి కొత్త దారులు.",
    image: heroBook,
  },
  {
    year: "2026",
    title: "43 ఏళ్ల స్ఫూర్తి",
    description: "పాఠకుల ప్రేమతో స్వాతి ప్రయాణం నిరంతరం కొనసాగుతోంది.",
    image: coverE1,
  },
];

const impact = [
  { icon: BookOpen, value: "10,000+", label: "ప్రచురిత సంచికలు" },
  { icon: UsersRound, value: "లక్షలాది", label: "ఆత్మీయ పాఠకులు" },
  { icon: PenLine, value: "వేలాది", label: "కథనాలు & రచనలు" },
  { icon: Layers, value: "అనేకాంశాలు", label: "విశేషాలు & సంపుటాలు" },
  { icon: Heart, value: "అనంతమైన", label: "పాఠకుల ప్రేమ" },
];

function JourneyPage() {
  return (
    <div>
      <main className="mx-auto max-w-7xl space-y-6 px-4 py-5 sm:px-6 lg:px-8">
        <section className="relative isolate grid min-h-72 items-center overflow-hidden rounded-lg bg-[#f8f0e5] md:grid-cols-2">
          <img
            src={heroBook}
            alt=""
            onError={(event) => {
              event.currentTarget.src = coverE2;
            }}
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#fffaf2] via-[#fffaf2]/95 to-[#fffaf2]/20 md:to-transparent" />
          <div className="max-w-xl px-6 py-10 sm:px-10 sm:py-14">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-crimson">
              Swathi · Since 1984
            </p>
            <h1 className="mt-2 font-serif text-4xl font-bold leading-tight text-stone-900 sm:text-6xl">
              మా <span className="text-brand-crimson">43</span> ఏళ్ల ప్రయాణం
            </h1>
            <p className="mt-3 font-serif text-lg font-semibold text-stone-700 sm:text-xl">
              ఒక తెలుగు కుటుంబం... అనేక తరాలకు తోడు...
            </p>
            <div className="mt-4 h-0.5 w-12 bg-brand-crimson" />
            <p className="mt-4 max-w-lg text-sm leading-6 text-stone-700 sm:text-base">
              1984లో ఒక కలగా ప్రారంభమైన స్వాతి, నేడు తెలుగు పాఠకుల జీవితంలో భాగమైంది.
              కథలు, సంస్కృతి, విలువలతో 43 ఏళ్లుగా మీతో కలిసి నడుస్తోంది.
            </p>
            <a
              href="#milestones"
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-brand-crimson px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-darkRed"
            >
              మా ప్రయాణాన్ని చూడండి <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section id="milestones" className="scroll-mt-24">
          <div className="mb-5 flex items-center gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-crimson">
                Our story
              </p>
              <h2 className="font-serif text-2xl font-bold sm:text-3xl">ముఖ్య మైలురాళ్లు</h2>
            </div>
            <span className="mt-5 h-px flex-1 bg-stone-200" />
          </div>

          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-4 right-4 top-3 hidden h-px bg-brand-crimson/50 lg:block" />
            {milestones.map((milestone) => (
              <article key={milestone.year} className="relative">
                <div className="mb-3 flex items-center gap-3 lg:justify-center">
                  <span className="z-10 h-3 w-3 shrink-0 rounded-full border-2 border-white bg-brand-crimson ring-2 ring-brand-crimson/20" />
                  <span className="font-serif text-lg font-bold text-brand-crimson">
                    {milestone.year}
                  </span>
                </div>
                <div className="overflow-hidden rounded-lg border border-stone-200 bg-[#fffaf2]">
                  <div className="p-4">
                    <h3 className="font-serif font-bold">{milestone.title}</h3>
                    <p className="mt-1 min-h-10 text-xs leading-5 text-stone-600">
                      {milestone.description}
                    </p>
                  </div>
                  <img
                    src={milestone.image}
                    alt={`${milestone.year} స్వాతి ప్రయాణం`}
                    onError={(event) => {
                      event.currentTarget.src = coverE2;
                    }}
                    className="aspect-[1.65] w-full object-cover"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[1.5fr_0.8fr]">
          <div className="relative isolate overflow-hidden rounded-lg bg-stone-900">
            <img
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1400&q=85"
              alt="పుస్తకాలతో నిండిన గ్రంథాలయం"
              onError={(event) => {
                event.currentTarget.src = currentCover;
              }}
              className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-stone-950/85 via-stone-950/60 to-stone-950/20" />
            <div className="max-w-xl px-6 py-10 text-white sm:px-9 sm:py-14">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
                Stories that stay with us
              </p>
              <h2 className="mt-2 font-serif text-2xl font-bold sm:text-3xl">
                ప్రయాణంలో కొన్ని జ్ఞాపకాలు
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/90">
                మొదటి సంచిక నుంచి నేటి డిజిటల్ పఠనం వరకు—ప్రతి పుట వెనుక రచయితల కలం,
                సంపాదకుల శ్రమ, పాఠకుల ఆదరణ ఉన్నాయి. ఆ జ్ఞాపకాలే స్వాతి ప్రయాణానికి
                అసలైన సంపద.
              </p>
            </div>
          </div>
          <blockquote className="flex flex-col justify-center rounded-lg border border-stone-200 bg-[#fffaf2] p-6 sm:p-8">
            <span aria-hidden="true" className="font-serif text-6xl leading-none text-brand-crimson/50">
              “
            </span>
            <p className="font-serif text-lg leading-8 text-stone-800">
              స్వాతి మా కుటుంబంలో ఒక భాగం. ప్రతి వారం కొత్త ఆలోచన, కొత్త కథతో మా ముందుకు
              వస్తుంది.
            </p>
            <footer className="mt-4 text-right text-sm font-semibold text-brand-crimson">
              — ఒక ఆత్మీయ పాఠకుడు
            </footer>
          </blockquote>
        </section>

        <section>
          <div className="mb-4 flex items-center gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-crimson">
                Together with you
              </p>
              <h2 className="font-serif text-2xl font-bold sm:text-3xl">43 ఏళ్లలో స్వాతి</h2>
            </div>
            <span className="mt-5 h-px flex-1 bg-stone-200" />
          </div>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 sm:grid-cols-3 lg:grid-cols-5">
            {impact.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3 bg-[#fffaf2] p-4 sm:p-5">
                <Icon aria-hidden="true" className="h-7 w-7 shrink-0 text-brand-crimson sm:h-9 sm:w-9" />
                <div>
                  <p className="font-serif text-sm font-bold text-brand-crimson sm:text-base">{value}</p>
                  <p className="mt-1 text-[11px] leading-4 text-stone-600 sm:text-xs">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="relative isolate grid min-h-64 items-center overflow-hidden rounded-lg bg-[#f8f0e5] md:grid-cols-2">
          <img
            src={heroBook}
            alt=""
            onError={(event) => {
              event.currentTarget.src = coverE2;
            }}
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#fffaf2] via-[#fffaf2]/95 to-[#fffaf2]/10" />
          <div className="max-w-xl px-6 py-10 sm:px-10 sm:py-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-crimson">
              మా కథ... మీతోనే
            </p>
            <h2 className="mt-2 font-serif text-2xl font-bold sm:text-3xl">
              తరాలు మారినా... స్వాతి తోడే...
            </h2>
            <div className="mt-3 h-0.5 w-12 bg-brand-crimson" />
            <p className="mt-4 text-sm leading-6 text-stone-700">
              కథలు, కుటుంబం, సంస్కృతి, మహిళలు, ఆరోగ్యం, ఆహారం—ప్రతీ తరానికి ప్రీతిపాత్రమైన
              కథనాలతో స్వాతి మీ ముందుకు వస్తూనే ఉంటుంది. ఈ ప్రయాణంలో మీరూ భాగస్వాములు కండి.
            </p>
            <Link
              to="/inspirations"
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-brand-crimson px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-darkRed"
            >
              మా స్ఫూర్తి వ్యక్తులను తెలుసుకోండి <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
