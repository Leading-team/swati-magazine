import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  BookOpen,
  CalendarDays,
  FileText,
  Heart,
  PenLine,
  Users,
} from "lucide-react";
import currentCover from "../assets/current-cover.jpg";
import editionBackground from "../assets/edition-bg.jpg";
import aboutUsImage from "../assets/aboutus_img.png";

export const Route = createFileRoute("/inspirations")({
  head: () => ({
    meta: [
      { title: "మా స్ఫూర్తి — Swathi Publications" },
      {
        name: "description",
        content: "స్వాతి స్థాపకులు, సంపాదకులు, సృష్టికర్తల జీవితం మరియు సాహిత్య ప్రయాణం.",
      },
    ],
  }),
  component: InspirationsPage,
});

const profiles = [
  {
    role: "సంపాదకులు",
    roleEnglish: "Editor",
    name: "వేమూరి బాలరామ్",
    englishName: "Vemuri Balaram",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=85",
    intro:
      "తెలుగు పత్రికా రంగంలో తనదైన ముద్ర వేసిన దార్శనికుడు. స్వాతి ద్వారా కథలకు, రచయితలకు, పాఠకులకు ఒక సజీవ వేదికను నిర్మించారు.",
    contributions: [
      { icon: CalendarDays, text: "1984లో స్వాతి పునఃప్రారంభానికి ప్రేరణ" },
      { icon: BookOpen, text: "తెలుగు కుటుంబాలకు పఠన సంస్కృతిని చేరువ చేశారు" },
      { icon: PenLine, text: "సాహిత్యం, సంస్కృతి, కుటుంబ విలువలకు ప్రాధాన్యం" },
      { icon: Users, text: "ఎందరో రచయితలు, పాఠకులను ఒక్కచోట చేర్చారు" },
      { icon: Award, text: "పత్రికా రంగానికి చేసిన సేవకు చిరస్మరణీయ గుర్తింపు" },
    ],
    books: [
      { title: "మన సంస్కృతి", image: currentCover },
      { title: "తెలుగు సంపద", image: editionBackground },
      { title: "కుటుంబ కథలు", image: aboutUsImage },
      { title: "జీవన పాఠాలు", image: currentCover },
    ],
    quote:
      "స్వాతి అనేది కేవలం ఒక పత్రిక కాదు... ఇది తెలుగు కుటుంబాల ప్రేమతో సాగుతున్న ఒక నిరంతర ప్రయాణం.",
  },
  {
    role: "సహాయ సంపాదకులు",
    roleEnglish: "Associate Editor",
    name: "మోరంపూడి మణి చందన",
    englishName: "Morampudi Mani Chandana",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=85",
    intro:
      "సాహిత్యం, సంపాదకత్వం, కుటుంబ జీవితం, ఆరోగ్యం, మహిళా సాధికారత వంటి అంశాలను పాఠకులకు చేరువ చేస్తున్న సృజనాత్మక సంపాదకురాలు.",
    contributions: [
      { icon: PenLine, text: "మహిళలు, కుటుంబం, జీవనశైలిపై ప్రభావవంతమైన కథనాలు" },
      { icon: Users, text: "యువత, పిల్లలు, పెద్దల కోసం ఉపయోగకరమైన ప్రత్యేక సంచికలు" },
      { icon: FileText, text: "సమకాలీన విషయాలను సరళంగా, స్ఫూర్తిదాయకంగా అందించడం" },
      { icon: Heart, text: "సామాజిక అవగాహనకు తోడ్పడే విశేషాలు" },
      { icon: BookOpen, text: "స్వాతి ప్రత్యేక సంచికల రూపకల్పనలో కీలక పాత్ర" },
    ],
    books: [
      { title: "అమ్మాయిల ప్రపంచం", image: aboutUsImage },
      { title: "మహిళా మనసు", image: currentCover },
      { title: "మన పిల్లలు", image: editionBackground },
      { title: "జీవన సౌందర్యం", image: currentCover },
    ],
    quote:
      "ప్రతి ఇంట్లో ఒక స్వాతి ఉండాలి... మన జీవితాలను, మన ఆలోచనలను అందంగా కలిపే మంచి నేస్తంలా.",
  },
];

function InspirationsPage() {
  return (
      <div className="px-4 py-5 sm:px-6 lg:px-8">
        <section className="relative isolate flex min-h-56 items-center justify-center overflow-hidden rounded-lg bg-stone-900 text-center sm:min-h-72">
          <img
            src={editionBackground}
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-stone-950/75 via-stone-900/60 to-stone-950/75" />
          <div className="max-w-2xl px-5 py-10 text-white sm:py-14">
            <p className="text-xs font-semibold tracking-[0.3em] text-white/80 sm:text-sm">
              SWATHI · SINCE 1984
            </p>
            <h1 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-5xl">
              స్వాతి వెనుక ఉన్న
              <br />
              ఇద్దరు ప్రేరణాత్మక వ్యక్తిత్వాలు
            </h1>
            <div className="mx-auto my-4 h-px w-24 bg-amber-100/80" />
            <p className="mx-auto max-w-xl text-sm leading-6 text-white/90 sm:text-base">
              ఒక దృఢమైన ఆలోచన... ఒక దశాబ్దాల ప్రయాణం...
              <br className="hidden sm:block" />
              తెలుగు కుటుంబాల ప్రేమతో, రచయితల స్ఫూర్తితో నేటికీ కొనసాగుతున్న స్వాతి కథ.
            </p>
          </div>
        </section>

        <section className="mt-5 grid gap-5 lg:grid-cols-2">
          {profiles.map((profile) => (
            <article
              key={profile.englishName}
              className="overflow-hidden rounded-lg border border-rule bg-[#fffaf2] shadow-sm"
            >
              <div className="grid sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                <div className="min-h-64 overflow-hidden bg-secondary sm:min-h-0">
                  <img
                    src={profile.image}
                    alt={profile.englishName}
                    onError={(event) => {
                      event.currentTarget.src = currentCover;
                    }}
                    className="h-full min-h-64 w-full object-cover"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-sm font-semibold text-primary">{profile.role}</p>
                  <p className="text-xs text-muted-foreground">({profile.roleEnglish})</p>
                  <h2 className="mt-3 font-serif text-2xl font-bold leading-snug text-foreground">
                    {profile.name}
                  </h2>
                  <p className="mt-1 font-serif text-base text-muted-foreground">
                    {profile.englishName}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-foreground/80">{profile.intro}</p>
                </div>
              </div>

              <div className="border-t border-rule bg-white/60 px-5 py-4 sm:px-6">
                <h3 className="flex items-center gap-2 font-serif text-lg font-bold text-primary">
                  <Award aria-hidden="true" className="h-5 w-5" />
                  ప్రధాన కార్యసాధనలు
                </h3>
                <ul className="mt-3 space-y-2">
                  {profile.contributions.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-start gap-3 text-sm leading-5">
                      <Icon
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-5 py-4 sm:px-6">
                <h3 className="flex items-center gap-2 font-serif text-lg font-bold text-primary">
                  <BookOpen aria-hidden="true" className="h-5 w-5" />
                  రచనలు / పుస్తకాలు
                </h3>
                <div className="mt-3 grid grid-cols-4 gap-2 sm:gap-3">
                  {profile.books.map((book) => (
                    <div key={book.title}>
                      <img
                        src={book.image}
                        alt={book.title}
                        className="aspect-[3/4] w-full rounded-sm border border-rule object-cover shadow-sm"
                      />
                      <p className="mt-1 text-center text-[10px] leading-4 text-muted-foreground sm:text-xs">
                        {book.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <blockquote className="border-t border-rule bg-primary/[0.04] px-5 py-4 sm:px-6">
                <p className="font-serif text-sm italic leading-6 text-foreground/80">
                  “{profile.quote}”
                </p>
                <footer className="mt-2 text-right text-xs font-semibold text-primary">
                  — {profile.name}
                </footer>
              </blockquote>
            </article>
          ))}
        </section>

        <section className="relative isolate mt-5 grid min-h-48 items-center overflow-hidden rounded-lg bg-stone-900 sm:min-h-56 md:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1800&q=85"
            alt=""
            onError={(event) => {
              event.currentTarget.src = editionBackground;
            }}
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-stone-950/80 via-stone-950/60 to-stone-950/35" />
          <div className="px-6 py-8 text-white sm:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/75">
              A legacy of stories
            </p>
            <h2 className="mt-2 font-serif text-2xl font-bold sm:text-3xl">
              కథలతో మొదలై... తరతరాలకు స్ఫూర్తిగా
            </h2>
          </div>
          <p className="max-w-xl px-6 pb-8 text-sm leading-6 text-white/90 sm:px-10 md:py-8">
            దశాబ్దాలుగా తెలుగు పాఠకులతో కలిసి ప్రయాణిస్తున్న స్వాతి—సాహిత్యానికి, ఆలోచనలకు,
            కుటుంబ అనుబంధాలకు చిరునామా. ఈ స్ఫూర్తి ప్రయాణం ఇలాగే కొనసాగుతుంది.
          </p>
        </section>
      </div>
  );
}
