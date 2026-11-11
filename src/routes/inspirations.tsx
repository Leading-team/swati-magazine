import { useQuery } from "@tanstack/react-query";
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
import { getAllMenus, getMenuSectionsById } from "../lib/menus";
import { useLanguage } from "../lib/language";
import { isCancellationError } from "../lib/errors";
import type { MenuSectionResponse } from "../data/homepage-fallback";
import inspirationHeader from '../assets/inspiration-header.png'
import aboutUsImage from "../assets/aboutus_img.png";

type NavigationMenu = {
  id: number | string
  to: string
}

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
      { title: "మన సంస్కృతి" },
      { title: "తెలుగు సంపద" },
      { title: "కుటుంబ కథలు" },
      { title: "జీవన పాఠాలు" },
    ],
    quote:
      "స్వాతి అనేది కేవలం ఒక పత్రిక కాదు... ఇది తెలుగు కుటుంబాల ప్రేమతో సాగుతున్న ఒక నిరంతర ప్రయాణం.",
  },
  {
    role: "సహాయ సంపాదకులు",
    roleEnglish: "Associate Editor",
    name: "మోరంపూడి మణి చందన",
    englishName: "Morampudi Mani Chandana",
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
      { title: "అమ్మాయిల ప్రపంచం" },
      { title: "మహిళా మనసు" },
      { title: "మన పిల్లలు" },
      { title: "జీవన సౌందర్యం" },
    ],
    quote:
      "ప్రతి ఇంట్లో ఒక స్వాతి ఉండాలి... మన జీవితాలను, మన ఆలోచనలను అందంగా కలిపే మంచి నేస్తంలా.",
  },
];

function InspirationsPage() {
  const { language } = useLanguage()
  const menusQuery = useQuery<NavigationMenu[]>({
    queryKey: ["menus", language],
    queryFn: ({ signal }) => getAllMenus({ language, signal }),
    retry: false,
    staleTime: 5 * 60 * 1000,
  })
  const inspirationMenu = menusQuery.data?.find(
    (menu) => menu.to.replace(/\/+$/, "") === "/inspirations",
  )
  const inspirationSectionsQuery = useQuery<MenuSectionResponse[]>({
    queryKey: ["menuSections", inspirationMenu?.id, language],
    queryFn: ({ signal }) => {
      if (inspirationMenu?.id == null) {
        throw new Error("The inspiration menu is unavailable.")
      }
      return getMenuSectionsById(inspirationMenu.id, { language, signal })
    },
    enabled: inspirationMenu?.id != null,
    retry: false,
    staleTime: 5 * 60 * 1000,
  })
  const apiImages = (inspirationSectionsQuery.data || [])
    .flatMap((menu) => menu.sections || [])
    .flatMap((section) => section.tiles || [])
    .map((tile) => tile.image?.trim())
    .filter((image): image is string => Boolean(image))
  const smallerApiImages = apiImages.filter((image) =>
    /\/43_[12]\.jpg(?:\?|$)/i.test(image),
  )
  const displayImages = smallerApiImages.length ? smallerApiImages : apiImages
  const hasImageError = [menusQuery.error, inspirationSectionsQuery.error].some(
    (error) => error && !isCancellationError(error),
  )

  return (
      <main className="mx-auto max-w-7xl px-3 py-3 sm:px-5 sm:py-5">
        {hasImageError && (
          <p role="status" className="mb-2 rounded-lg bg-amber-50 px-4 py-2 text-xs text-amber-900">
            Inspiration images could not be loaded from the API.
          </p>
        )}
        <section className="relative isolate flex min-h-40 items-center justify-center overflow-hidden bg-stone-900 text-center sm:min-h-52">

             <img
                            src={inspirationHeader}
                            alt="Swati Publications"
                            className="absolute inset-0 -z-10 h-full w-full object-cover"
                            loading="eager"
                            fetchPriority="high"
                            decoding="async"
                          />
          <div className="absolute inset-0 -z-10 from-stone-950/70 via-stone-900/60 to-stone-950/70" />
          <div className="max-w-2xl px-5 py-6 text-white sm:py-8">
            <h1 className="mt-2 font-serif text-xl font-bold leading-tight sm:text-2xl">
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
          {profiles.map((profile, index) => (
            <article
              key={profile.englishName}
              className="flex min-w-0 flex-col bg-[#fffaf2]"
            >
              <div
                className="relative isolate grid min-h-44 grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] items-stretch overflow-hidden bg-[#fffaf2] sm:min-h-48"
                style={{
                  backgroundImage: apiImages[index]
                    ? "none"
                    : "linear-gradient(90deg, #f3e5d1 0%, #fffaf2 52%)",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {apiImages[index] && (
                  <img
                    src={apiImages[index]}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 z-0 h-full w-1/2 object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    decoding="async"
                  />
                )}
                {apiImages[index] && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, rgba(255,250,242,0) 0%, rgba(255,250,242,0.08) 34%, #fffaf2 52%, #fffaf2 100%)",
                    }}
                  />
                )}
                <div aria-hidden="true" className="relative z-10" />
                <div className="relative z-10 self-center p-3 sm:p-5">
                  <p className="text-xs font-semibold text-primary text-red-700 sm:text-sm">{profile.role}</p>
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
                <h3 className="flex items-center gap-2 font-serif text-sm font-bold text-primary text-red-700 sm:text-base">
                  <Award aria-hidden="true" className="h-4 w-4 sm:h-5 sm:w-5 text-red-700" />
                  ప్రధాన కార్యసాధనలు
                </h3>
                <ul className="mt-2 space-y-1">
                  {profile.contributions.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-start gap-2 border-b border-[#eadcc8]/70 py-1 text-[10px] leading-4 last:border-0 sm:text-xs sm:leading-5">
                      <Icon
                        aria-hidden="true"
                        className="text-red-700 mt-0.5 h-3.5 w-3.5 shrink-0 text-primary sm:h-4 sm:w-4"
                      />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-4 pb-3 sm:px-5">
                <h3 className="text-red-700 flex items-center gap-2 font-serif text-sm font-bold text-primary sm:text-base">
                  <BookOpen aria-hidden="true" className="h-4 w-4 sm:h-5 sm:w-5" />
                  రచనలు / పుస్తకాలు
                </h3>
                <div className="mt-2 grid grid-cols-4 gap-2 sm:gap-3">
                  {profile.books.map((book, bookIndex) => (
                    <div key={book.title}>
                      <div className="aspect-[3/4] w-full overflow-hidden border border-rule bg-[#f3e5d1]">
                        {displayImages.length > 0 && (
                          <img
                            src={displayImages[bookIndex % displayImages.length]}
                            alt={book.title}
                            className="h-full w-full object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                        )}
                      </div>
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
                <footer className="mt-1 text-right text-[10px] font-semibold text-primary sm:text-xs text-red-700">
                  — {profile.name}
                </footer>
              </blockquote>
            </article>
          ))}
        </section>

        <section
          aria-label="Swathi publications through the years"
          className="relative isolate mt-2 min-h-64 overflow-hidden bg-[#f7ead6] sm:min-h-80 lg:min-h-96"
        >
          {apiImages[2] && (
            <img
              src={apiImages[2]}
              alt="Swathi's publishing history"
              className="absolute inset-y-0 left-0 z-0 h-full w-[48%] object-cover"
              style={{
                maskImage: "linear-gradient(to right, #000 0%, #000 72%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to right, #000 0%, #000 72%, transparent 100%)",
              }}
              loading="lazy"
              decoding="async"
            />
          )}
          {apiImages[3] && (
            <img
              src={apiImages[3]}
              alt="Swathi readers enjoying a magazine"
              className="absolute inset-y-0 left-[30%] z-10 h-full w-[44%] object-cover"
              style={{
                maskImage: "linear-gradient(to right, transparent 0%, #000 24%, #000 76%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, #000 24%, #000 76%, transparent 100%)",
              }}
              loading="lazy"
              decoding="async"
            />
          )}
          <img
            src={aboutUsImage}
            alt=""
            className="absolute inset-y-0 right-0 z-20 h-full w-[40%] object-cover object-right"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, #000 28%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, #000 28%)",
            }}
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-y-0 right-0 z-30 flex w-[34%] flex-col justify-center bg-gradient-to-l from-[#fffaf2]/90 via-[#fffaf2]/65 to-transparent px-2 text-center sm:px-4">
            <p className="font-serif text-xs leading-5 text-stone-800 sm:text-base sm:leading-7">
              రెండు తరాలు...
              <br />
              ఒకే లక్ష్యం...
              <br />
              తెలుగు కుటుంబాలతో స్వాతి...
            </p>
          </div>
        </section>
      </main>
  );
}
