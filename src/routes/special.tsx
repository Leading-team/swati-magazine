import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Flower2,
  Heart,
  Home,
  Plane,
  Salad,
  Sparkles,
  Utensils,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import coverE1 from "../assets/E1.jpg";
import coverE2 from "../assets/E2.jpg";
import coverE3 from "../assets/E3.jpg";

export const Route = createFileRoute("/special")({
  head: () => ({
    meta: [
      { title: "స్వాతి ప్రత్యేకం — Swathi Publications" },
      {
        name: "description",
        content: "వంటలు, ఆరోగ్యం, ప్రయాణం, సంస్కృతి—స్వాతి ప్రత్యేక కథనాలు.",
      },
    ],
  }),
  component: SpecialPage,
});

const categories: { label: string; icon: LucideIcon }[] = [
  { label: "అన్నీ", icon: Home },
  { label: "ఫ్యాషన్ & అందం", icon: Sparkles },
  { label: "ఆరోగ్యం", icon: Flower2 },
  { label: "వంటలు", icon: Utensils },
  { label: "ప్రయాణం", icon: Plane },
  { label: "కుటుంబం", icon: Heart },
  { label: "కథలు", icon: BookOpen },
  { label: "జీవనశైలి", icon: Salad },
];

const stories = [
  {
    category: "వంటలు",
    title: "రుచికరమైన వంటకాలతో ఆరోగ్యకరమైన భోజనం",
    description: "ప్రతి రోజూ కొత్త రుచులు, ఇంటిల్లిపాదికీ నచ్చే వంటలు.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=85",
  },
  {
    category: "ఫ్యాషన్ & అందం",
    title: "సహజ సౌందర్యానికి చిన్న చిన్న చిట్కాలు",
    description: "మన ఇంట్లో దొరికే పదార్థాలతో అందాన్ని, ఆరోగ్యాన్ని కాపాడుకోండి.",
    image: coverE1,
  },
  {
    category: "ఆరోగ్యం",
    title: "మనసుకు, శరీరానికి నూతనోత్సాహం",
    description: "ఆరోగ్యకరమైన అలవాట్లతో ఆనందమైన జీవితం.",
    image: coverE3,
  },
  {
    category: "ప్రయాణం",
    title: "ప్రకృతి ఒడిలో మరచిపోలేని ప్రయాణం",
    description: "తెలుసుకోవాల్సిన అందమైన ప్రదేశాలు, ప్రయాణ విశేషాలు.",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=85",
  },
  {
    category: "కుటుంబం",
    title: "కుటుంబంతో ఆనందంగా గడిపే సమయం",
    description: "బంధాలను మరింత బలపరిచే మధురమైన క్షణాలు.",
    image: coverE3,
  },
  {
    category: "జీవనశైలి",
    title: "ఇంటిని అందంగా, ఆహ్లాదంగా మార్చుకోండి",
    description: "మీ ఇంటికి కొత్త కళను తీసుకొచ్చే సులభమైన ఆలోచనలు.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=85",
  },
  {
    category: "కథలు",
    title: "మనసును హత్తుకునే కథలు",
    description: "కుటుంబమంతా కలిసి చదివి ఆనందించే కథా ప్రపంచం.",
    image: coverE2,
  },
  {
    category: "వంటలు",
    title: "పండుగ వేళ ప్రత్యేకమైన వంటకాలు",
    description: "సంప్రదాయ రుచులతో మీ వేడుకలకు మరింత సందడి.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=85",
  },
];

const featuredImage =
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=90";

function SpecialPage() {
  const [selectedCategory, setSelectedCategory] = useState("అన్నీ");
  const visibleStories =
    selectedCategory === "అన్నీ"
      ? stories
      : stories.filter((story) => story.category === selectedCategory);

  return (
    <div>
      <main className="mx-auto max-w-7xl space-y-5 px-4 py-5 sm:px-6 lg:px-8">
        <section className="relative isolate flex min-h-48 items-center overflow-hidden rounded-lg bg-stone-100 sm:min-h-64">
          <img
            src={featuredImage}
            alt=""
            onError={(event) => {
              event.currentTarget.src = coverE2;
            }}
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/95 via-white/75 to-white/5" />
          <div className="max-w-xl px-6 py-8 sm:px-10 sm:py-12">
            <p className="text-xs font-semibold tracking-[0.3em] text-brand-crimson sm:text-sm">
              S W A T H I&nbsp; P R A T H Y E K A M
            </p>
            <h1 className="mt-2 font-serif text-3xl font-bold text-stone-900 sm:text-5xl">
              స్వాతి ప్రత్యేకం
            </h1>
            <p className="mt-2 max-w-lg text-sm leading-6 text-stone-700 sm:text-base">
              జీవనశైలి, ఆరోగ్యం, వంటలు, సంస్కృతి—మీ కోసం ఎన్నో ప్రత్యేక కథనాలు.
            </p>
          </div>
        </section>

        <nav aria-label="ప్రత్యేక కథనాల వర్గాలు" className="grid grid-cols-4 gap-2 sm:grid-cols-8">
          {categories.map(({ label, icon: CategoryIcon }) => (
            <button
              key={label}
              type="button"
              aria-pressed={selectedCategory === label}
              onClick={() => setSelectedCategory(label)}
              className={`flex min-h-20 flex-col items-center justify-center gap-2 rounded-md border px-1 py-3 text-center text-[11px] font-medium transition-colors sm:min-h-24 sm:text-xs ${
                selectedCategory === label
                  ? "border-brand-crimson bg-brand-crimson/5 text-brand-crimson"
                  : "border-stone-200 bg-[#fffaf2] text-stone-900 hover:border-brand-crimson/50"
              }`}
            >
              <CategoryIcon aria-hidden="true" className="h-5 w-5" />
              {label}
            </button>
          ))}
        </nav>

        <section className="relative isolate grid min-h-52 items-center overflow-hidden rounded-lg bg-stone-100 sm:min-h-64 md:grid-cols-2">
          <img
            src={featuredImage}
            alt=""
            onError={(event) => {
              event.currentTarget.src = coverE2;
            }}
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/90 to-white/10 md:to-transparent" />
          <div className="max-w-lg px-6 py-8 sm:px-10">
            <span className="inline-block rounded bg-brand-crimson px-2 py-1 text-[10px] font-semibold text-white">
              ఈ వారం ప్రత్యేకం
            </span>
            <h2 className="mt-3 font-serif text-2xl font-bold leading-snug text-stone-900 sm:text-3xl">
              మన ఇంటిని అందంగా మార్చుకోవడం ఎలా?
            </h2>
            <p className="mt-2 text-sm leading-6 text-stone-700">
              చిన్న మార్పులతో మీ ఇంటికి కొత్త అందం తీసుకురావడానికి నిపుణుల సూచనలు.
            </p>
            <a
              href="#special-stories"
              className="mt-4 inline-flex items-center gap-2 rounded bg-brand-crimson px-4 py-2 text-xs font-semibold text-white hover:bg-brand-darkRed"
            >
              కథనాలు చదవండి <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section id="special-stories" className="scroll-mt-24">
          <div className="mb-3 flex items-end justify-between border-b border-stone-200 pb-2">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-crimson">
                Swathi Special
              </p>
              <h2 className="mt-1 font-serif text-xl font-bold sm:text-2xl">
                {selectedCategory === "అన్నీ" ? "ప్రత్యేక కథనాలు" : selectedCategory}
              </h2>
            </div>
            <span className="text-xs text-stone-600">{visibleStories.length} కథనాలు</span>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {visibleStories.map((story) => (
              <article
                key={story.title}
                className="overflow-hidden rounded-md border border-stone-200 bg-[#fffaf2] shadow-sm transition-shadow hover:shadow-md"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  onError={(event) => {
                    event.currentTarget.src = coverE2;
                  }}
                  className="aspect-[1.5] w-full object-cover"
                />
                <div className="p-3">
                  <span className="inline-block rounded bg-brand-crimson/5 px-2 py-1 text-[9px] font-medium text-brand-crimson sm:text-[10px]">
                    {story.category}
                  </span>
                  <h3 className="mt-2 font-serif text-sm font-semibold leading-5 sm:text-base">
                    {story.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-stone-600">
                    {story.description}
                  </p>
                  <a
                    href="#special-stories"
                    className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand-crimson hover:underline"
                  >
                    మరింత చదవండి <ArrowRight aria-hidden="true" className="h-3 w-3" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
