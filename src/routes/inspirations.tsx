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
      <main className="mx-auto max-w-7xl px-3 py-3 sm:px-5 sm:py-5">
        <section className="relative isolate flex min-h-40 items-center justify-center overflow-hidden bg-stone-900 text-center sm:min-h-52">
          <img
            src={editionBackground}
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-stone-950/70 via-stone-900/60 to-stone-950/70" />
          <div className="max-w-2xl px-5 py-6 text-white sm:py-8">
            <p className="text-[10px] font-semibold tracking-[0.3em] text-white/80 sm:text-xs">
              SWATHI · SINCE 1984
            </p>
            <h1 className="mt-2 font-serif text-2xl font-bold leading-tight sm:text-4xl">
              స్వాతి వెనుక ఉన్న ఇద్దరు ప్రేరణాత్మక వ్యక్తిత్వాలు
            </h1>
            <div className="mx-auto my-3 h-px w-20 bg-amber-100/80" />
            <p className="mx-auto max-w-xl text-xs leading-5 text-white/90 sm:text-sm sm:leading-6">
              ఒక దృఢమైన ఆలోచన... ఒక దశాబ్దాల ప్రయాణం...
              <br className="hidden sm:block" />
              తెలుగు కుటుంబాల ప్రేమతో, రచయితల స్ఫూర్తితో నేటికీ కొనసాగుతున్న స్వాతి కథ.
            </p>
          </div>
        </section>

        <section className="mt-2 grid gap-2 bg-[#eadcc8] lg:grid-cols-2">
          {profiles.map((profile) => (
            <article
              key={profile.englishName}
              className="flex min-w-0 flex-col bg-[#fffaf2]"
            >
              <div className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                <div className="min-h-40 overflow-hidden bg-secondary sm:min-h-48">
                  <img
                    src={profile.image}
                    alt={profile.englishName}
                    onError={(event) => {
                      event.currentTarget.src = currentCover;
                    }}
                    className="h-full min-h-40 w-full object-cover sm:min-h-48"
                  />
                </div>
                <div className="self-center p-3 sm:p-5">
                  <p className="text-xs font-semibold text-primary sm:text-sm">{profile.role}</p>
                  <p className="text-[10px] text-muted-foreground sm:text-xs">({profile.roleEnglish})</p>
                  <h2 className="mt-2 font-serif text-lg font-bold leading-snug text-foreground sm:text-2xl">
                    {profile.name}
                  </h2>
                  <p className="mt-1 font-serif text-xs text-muted-foreground sm:text-sm">
                    {profile.englishName}
                  </p>
                  <p className="mt-2 text-[10px] leading-4 text-foreground/80 sm:mt-3 sm:text-xs sm:leading-5">{profile.intro}</p>
                </div>
              </div>

              <div className="px-4 py-3 sm:px-5">
                <h3 className="flex items-center gap-2 font-serif text-sm font-bold text-primary sm:text-base">
                  <Award aria-hidden="true" className="h-4 w-4 sm:h-5 sm:w-5" />
                  ప్రధాన కార్యసాధనలు
                </h3>
                <ul className="mt-2 space-y-1">
                  {profile.contributions.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-start gap-2 border-b border-[#eadcc8]/70 py-1 text-[10px] leading-4 last:border-0 sm:text-xs sm:leading-5">
                      <Icon
                        aria-hidden="true"
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary sm:h-4 sm:w-4"
                      />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-4 pb-3 sm:px-5">
                <h3 className="flex items-center gap-2 font-serif text-sm font-bold text-primary sm:text-base">
                  <BookOpen aria-hidden="true" className="h-4 w-4 sm:h-5 sm:w-5" />
                  రచనలు / పుస్తకాలు
                </h3>
                <div className="mt-2 grid grid-cols-4 gap-2 sm:gap-3">
                  {profile.books.map((book) => (
                    <div key={book.title}>
                      <img
                        src={book.image}
                        alt={book.title}
                        className="aspect-[3/4] w-full border border-rule object-cover"
                      />
                      <p className="mt-1 text-center text-[9px] leading-3 text-muted-foreground sm:text-[10px] sm:leading-4">
                        {book.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <blockquote className="mt-auto bg-[#f7ead6] px-4 py-3 sm:px-5">
                <p className="font-serif text-xs italic leading-5 text-foreground/80 sm:text-sm">
                  “{profile.quote}”
                </p>
                <footer className="mt-1 text-right text-[10px] font-semibold text-primary sm:text-xs">
                  — {profile.name}
                </footer>
              </blockquote>
            </article>
          ))}
        </section>

        <section className="relative isolate mt-2 grid min-h-36 items-center overflow-hidden bg-stone-900 sm:min-h-44 md:grid-cols-2">
          <img
            src={editionBackground}
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-stone-950/80 via-stone-950/65 to-stone-950/45" />
          <div className="px-5 py-5 text-white sm:px-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/75 sm:text-xs">
              SWATHI · A LEGACY OF STORIES
            </p>
            <h2 className="mt-2 font-serif text-xl font-bold sm:text-2xl">
              కథలతో మొదలై... తరతరాలకు స్ఫూర్తిగా
            </h2>
          </div>
          <p className="max-w-xl px-5 pb-5 text-xs leading-5 text-white/90 sm:px-8 sm:text-sm sm:leading-6 md:py-5">
            దశాబ్దాలుగా తెలుగు పాఠకులతో కలిసి ప్రయాణిస్తున్న స్వాతి—సాహిత్యానికి, ఆలోచనలకు,
            కుటుంబ అనుబంధాలకు చిరునామా. ఈ స్ఫూర్తి ప్రయాణం ఇలాగే కొనసాగుతుంది.
          </p>
        </section>
      </main>
  );
}
