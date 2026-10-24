import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Gift,
  Home,
  Mail,
  Megaphone,
  PencilLine,
  Truck,
} from 'lucide-react'
import currentCover from '../assets/current-cover.jpg'
import { getMenuSectionsById } from '../lib/menus'

export const Route = createFileRoute('/')({
  component: IndexComponent,
})
const fallbackSectionDetails = [
  {
    "menuName": "మన స్వాతి",
    "sections": [
      {
        "sectionTitle": "ఈ సంచిక",
        "sectionName": "editions",
        "coverImage": "",
        "tiles": [
          {
            "title": "రుచుల ప్రపంచం",
            "text": "ఇండియను వంటలు,ఆరోగ్యకరమయిన ఆహరం ",
            "image": "https://swatipportalstorage01.blob.core.windows.net/swati-sections-test/Food.jpg?sv=2026-10-06&se=2026-10-16T10%3A27%3A54Z&sr=b&sp=r&sig=VsUvi5gBVKNTO%2FX3vkD5O7xJmMpTp7SWojyvKn66kpY%3D"
          },
          {
            "title": "మన సంస్కృతి",
            "text": "తెలుగు వారసత్వం,ప్రతిష్టుల నందవ్యాసం",
            "image": "https://swatipportalstorage01.blob.core.windows.net/swati-sections-test/temple.jpg?sv=2026-10-06&se=2026-10-16T10%3A27%3A54Z&sr=b&sp=r&sig=iCbZxNCkFI%2BG1bM%2BhiG3lWlpMH5uxTvfeVICX4RrKGs%3D"
          },
          {
            "title": "మన కుటుంబం",
            "text": "మహిళల ఆరోగ్యం,జీవన శైలి",
            "image": "https://swatipportalstorage01.blob.core.windows.net/swati-sections-test/woman.jpg?sv=2026-10-06&se=2026-10-16T10%3A27%3A54Z&sr=b&sp=r&sig=expHf%2FnxuLmbyri6vahGAqSLE49P52Jni7zHlxTpmo0%3D"
          },
          {
            "title": "పిల్లల ప్రపంచం",
            "text": "పిల్లల కోసం ప్రత్యేక కథనాలు,చిట్టాలు",
            "image": "https://swatipportalstorage01.blob.core.windows.net/swati-sections-test/family.jpg?sv=2026-10-06&se=2026-10-16T10%3A27%3A54Z&sr=b&sp=r&sig=ogDIrc63YXl3LgI%2B1ST7HR0SpSC%2FmA0fqk%2FGqVdtZxM%3D"
          }
        ],
        sectionDesc: ""
      },
      {
        "sectionTitle": "స్వాతి ప్రత్యేకం",
        "sectionName": "special",
        "coverImage": "",
        "tiles": [
          {
            "title": "2026",
            "text": "",
            "image": "https://swatipportalstorage01.blob.core.windows.net/swati-sections-test/family.jpg?sv=2026-10-06&se=2026-10-16T10%3A27%3A54Z&sr=b&sp=r&sig=ogDIrc63YXl3LgI%2B1ST7HR0SpSC%2FmA0fqk%2FGqVdtZxM%3D"
          },
          {
            "title": "అందం & ఆరోగ్యం",
            "text": "సహజ సౌందర్యానికి చిట్కాలు",
            "image": "https://swatipportalstorage01.blob.core.windows.net/swati-sections-test/beauty.jpg?sv=2026-10-06&se=2026-10-16T10%3A27%3A54Z&sr=b&sp=r&sig=r5WySMupT0SmSPvxptJMBnAl6JhyHk9CDzRQjUMbWqs%3D"
          },
          {
            "title": "కళలు & సంస్కృతి",
            "text": "మన వారసత్వం మన గర్వం",
            "image": "https://swatipportalstorage01.blob.core.windows.net/swati-sections-test/arts.jpg?sv=2026-10-06&se=2026-10-16T10%3A27%3A54Z&sr=b&sp=r&sig=OiDWvZCaAKrh77zBw%2Boo126ISCRXuSrMb21jZCWBOyc%3D"
          },
          {
            "title": "ప్రయాణం",
            "text": "ప్రపంచ అందాల వైపు",
            "image": "https://swatipportalstorage01.blob.core.windows.net/swati-sections-test/journey.jpg?sv=2026-10-06&se=2026-10-16T10%3A27%3A54Z&sr=b&sp=r&sig=z22USjVrk%2Ffgp0nYugbEfaa%2F3ZqnMgC0RlrLBYTLPYA%3D"
          }
        ],
        sectionDesc: ""
      },
      {
        "sectionTitle": "కథనాలు",
        "sectionName": "articles",
        "coverImage": "",
        "tiles": [
          {
            "title": "కుటుంబం",
            "text": "సంబంధాలు,సంభాషణలు,సంతోషాలు",
            "image": "https://swatipportalstorage01.blob.core.windows.net/swati-sections-test/story-family.jpg?sv=2026-10-06&se=2026-10-16T10%3A27%3A54Z&sr=b&sp=r&sig=I0kGb5%2BQViz%2BCStXtvV9fn118rsnHAUt1d11skOnios%3D"
          },
          {
            "title": "వంటలు",
            "text": "రుచికరమయిన వంటకాలు,ఆరోగ్యకరమయిన ఆహారం",
            "image": "https://swatipportalstorage01.blob.core.windows.net/swati-sections-test/story-food.jpg?sv=2026-10-06&se=2026-10-16T10%3A27%3A54Z&sr=b&sp=r&sig=MqLyAG%2B04HZ4KXrvzlQUyu5GQ58IOcg6ogJCWTJp4w4%3D"
          },
          {
            "title": "ఆరోగ్యం",
            "text": "శారీరక,మానసిక ఆరోగ్యం",
            "image": "https://swatipportalstorage01.blob.core.windows.net/swati-sections-test/story-health.jpg?sv=2026-10-06&se=2026-10-16T10%3A27%3A54Z&sr=b&sp=r&sig=pKDy0B6p0SLMX8EkkiTqraeJ7wCjChPDz%2BXozr%2BVYJo%3D"
          },
          {
            "title": "ఇల్లు అందంగా",
            "text": "గృహ అలంకరణ,జీవన శైలి",
            "image": "https://swatipportalstorage01.blob.core.windows.net/swati-sections-test/story-house.jpg?sv=2026-10-06&se=2026-10-16T10%3A27%3A54Z&sr=b&sp=r&sig=0x1cAhCW2AOjJj%2Fdufj2LngoIRK%2FJQuNK2AVaAMn2bQ%3D"
          },
          {
            "title": "పిల్లల కోణం",
            "text": "పిల్లల కథలు,విద్య,వినోదం ",
            "image": "https://swatipportalstorage01.blob.core.windows.net/swati-sections-test/story-kids.jpg?sv=2026-10-06&se=2026-10-16T10%3A27%3A54Z&sr=b&sp=r&sig=D2wEC2zFCt9Qdw5afwtiN7oeoSxYjHVfN0%2B2Pv9gBAw%3D"
          },
          {
            "title": "పుస్తకాలు",
            "text": "పఠనం,సమీక్షలు,రచనలు ",
            "image": "https://swatipportalstorage01.blob.core.windows.net/swati-sections-test/story-books.jpg?sv=2026-10-06&se=2026-10-16T10%3A27%3A54Z&sr=b&sp=r&sig=oR5McDmxEbxemwcg3Cfnc7CvazTagK5eZXyN3YfuPfw%3D"
          }
        ],
        sectionDesc: ""
      },
      {
        "sectionTitle": "మా 43 ఏళ్ల ప్రయాణం",
        "sectionName": "journey",
        "coverImage": "",
        "tiles": [
          {
            "title": "1984  -  2026",
            "text": "తెలుగు కుటుంబాల ప్రేమాభిమానాలతో \r\n\r\n43 సంవత్సరాల స్వాతి ప్రయాణం...",
            "image": "https://swatipportalstorage01.blob.core.windows.net/swati-sections-test/43_image.jpg?sv=2026-10-06&se=2026-10-16T10%3A27%3A54Z&sr=b&sp=r&sig=lwa6%2Fyk%2FCBBZCnF1EHByNRq3YjMSfU27BUJiOGhuESc%3D"
          }
        ],
        sectionDesc: ""
      },
      {
        "sectionTitle": "స్వాతి గురించి",
        "sectionName": "aboutus",
        "coverImage": "",
        "tiles": [
          {
            "title": "43 సంవత్సరాలుగా తెలుగు కుటుంబంతో కలిసి\r\nప్రయాణిస్తున్న స్వాతి కథ... మన పాఠకుల ప్రేమ రచయితల స్ఫూర్తి, మా ప్రయాణం ఇంకా కొనసాగుతూనే ఉంది.",
            "text": "43 సంవత్సరాలుగా తెలుగు కుటుంబంతో కలిసి ప్రయాణిస్తున్న స్వాతి కథ...",
            "image": ""
          }
        ],
        sectionDesc: ""
      },
      {
        "sectionTitle": "సంప్రదించండి",
        "sectionName": "contactus",
        "coverImage": "",
        "tiles": [
          {
            "title": "సంస్కార వికాసం",
            "text": "క్రమశిక్షణ, బాధ్యతలు,సమాజంలో గౌరవం",
            "image": ""
          },
          {
            "title": "విద్యాభివృద్ధి కోసం",
            "text": "పుస్తకాలు, జ్ఞానం సముపార్జన",
            "image": ""
          },
          {
            "title": "సామాజిక సమభావం",
            "text": "ఇతర సమూహాలతో,విస్తృతాలు",
            "image": ""
          }
        ],
        sectionDesc: ""
      }
    ]
  }
];
const issueHighlights = [
  {
    title: 'రుచుల ప్రపంచం',
    description: 'ఇంటింటి వంటలు, ఆరోగ్యకరమైన ఆహారం',
    icon: 'రుచులు',
    color: 'bg-orange-50 text-orange-800',
  },
  {
    title: 'మన సంస్కృతి',
    description: 'తెలుగు వారసత్వం, మన సంప్రదాయాలు',
    icon: 'సంస్కృతి',
    color: 'bg-sky-50 text-sky-800',
  },
  {
    title: 'మన కుటుంబం',
    description: 'మహిళల ఆరోగ్యం, జీవన శైలి',
    icon: 'కుటుంబం',
    color: 'bg-emerald-50 text-emerald-800',
  },
]

const specialStories = [
  {
    category: 'ప్రత్యేక కథనం',
    title: 'తెరపై కొత్త వెలుగులు',
    description: 'సినిమా ప్రపంచంలోని మధురమైన విశేషాలు',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91c442a14?auto=format&fit=crop&w=900&q=85',
    tone: 'from-rose-950/80',
  },
  {
    category: 'ప్రయాణం',
    title: 'ప్రపంచ అందాల వైపు',
    description: 'మనసు దోచే ప్రదేశాల పరిచయం',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=85',
    tone: 'from-sky-950/80',
  },
  {
    category: 'ఆరోగ్యం',
    title: 'అందం & ఆరోగ్యం',
    description: 'ఆరోగ్యకరమైన జీవనానికి చిన్న చిట్కాలు',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=85',
    tone: 'from-emerald-950/80',
  },
  {
    category: 'కళలు',
    title: 'కళలు & సంస్కృతి',
    description: 'మన వారసత్వం, మన గర్వం',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=700&q=85',
    tone: 'from-amber-950/80',
  },
]

const storyCategories = [
  { title: 'కుటుంబం', description: 'సంబంధాలు, అనుబంధాలు', image: 'photo-1511895426328-dc8714191300' },
  { title: 'వంటలు', description: 'రుచికరమైన వంటకాలు', image: 'photo-1509440159596-0249088772ff' },
  { title: 'ఆరోగ్యం', description: 'శారీరక, మానసిక ఆరోగ్యం', image: 'photo-1506126613408-eca07ce68773' },
  { title: 'ఇల్లు అందంగా', description: 'గృహ అలంకరణ, జీవన శైలి', image: 'photo-1616486338812-3dadae4b4ace' },
  { title: 'పిల్లల కోణం', description: 'కథలు, విద్య, వినోదం', image: 'photo-1503454537195-1dcabb73ffb9' },
  { title: 'పుస్తకాలు', description: 'పఠనం, సమీక్షలు, రచనలు', image: 'photo-1512820790803-83ca734da794' },
]

function SectionHeading({ eyebrow, children, href }) {
  return (
    <div className="flex items-end justify-between gap-4 pb-2">
      <div>
        <h1 className="mt-1 font-telugu text-2xl font-bold text-stone-950 sm:text-3xl">
          {children}
        </h1>
        <div className="h-0.5 w-9 bg-brand-crimson" />
        {/* {eyebrow && (
          <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-crimson/70">
            {eyebrow}
          </p>
        )} */}
      </div>
    </div>
  )
}

function IndexComponent() {
  const {
    data: sectionDetails,
    isLoading: isLoadingSections,
    isError: hasSectionError,
    error: sectionError,
  } = useQuery({
    queryKey: ['menuSections', 1],
    queryFn: ({ signal }) => getMenuSectionsById(1, { signal }),
    retry: false,
    staleTime: 5 * 60 * 1000,
  })
  const sections = (sectionDetails?.length ? sectionDetails : fallbackSectionDetails).flatMap(
    (menu) => (Array.isArray(menu.sections) ? menu.sections : []),
  )
  const getSection = (name) =>
    sections.find((section) => section.sectionName?.trim().toLowerCase() === name)
  const editionSection = getSection('editions')
  const specialSection = getSection('special')
  const storiesSection = getSection('articles')
  const journeySection = getSection('journey')
  const aboutSection = getSection('aboutus')
  const issueItems = editionSection?.tiles?.length
    ? editionSection.tiles.map((tile, index) => ({
      title: tile.title,
      description: tile.text,
      icon: tile.title,
      image: tile.image?.trim(),
      color: issueHighlights[index % issueHighlights.length].color,
    }))
    : issueHighlights
  const specialItems = specialSection?.tiles?.length
    ? specialSection.tiles.map((tile, index) => ({
      category: specialStories[index % specialStories.length].category,
      title: tile.title,
      description: tile.text,
      image:
        tile.image?.trim() || specialStories[index % specialStories.length].image,
      tone: specialStories[index % specialStories.length].tone,
    }))
    : specialStories
  const storyItems = storiesSection?.tiles?.length
    ? storiesSection.tiles.map((tile, index) => ({
      ...tile,
      image:
        tile.image?.trim() ||
        `https://images.unsplash.com/${storyCategories[index % storyCategories.length].image}?auto=format&fit=crop&w=480&q=80`,
    }))
    : storyCategories.map((story) => ({
      title: story.title,
      text: story.description,
      image: `https://images.unsplash.com/${story.image}?auto=format&fit=crop&w=480&q=80`,
    }))
  const journeyTile = journeySection?.tiles?.[0]
  const aboutTile = aboutSection?.tiles?.[0]

  return (
    <div className="homePage">
      {isLoadingSections && (
        <p role="status" className="rounded-lg bg-white px-4 py-3 text-sm text-stone-600">
          Homepage sections are loading…
        </p>
      )}
      {hasSectionError && (
        <p role="alert" className="rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Homepage sections could not be loaded. Showing saved content. {sectionError.message}
        </p>
      )}
      <section className="hero grid gap-5 lg:grid-cols-[0.88fr_1.28fr_0.84fr] lg:items-stretch">
        <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-20 " />
          <img
            src={editionSection?.coverImage?.trim() || currentCover}
            alt="స్వాతి తాజా సంచిక ముఖచిత్రం"
            className="relative h-[320px] max-w-full rounded-[12px] object-contain shadow-[0_22px_45px_-17px_rgba(74,22,22,0.55)] sm:h-[360px]"
          />
        </div>

        <div
          id="current-issue"
          className="flex flex-col justify-center rounded-[30px] sm:p-5"
        >
          <SectionHeading eyebrow="పాఠకుల కోసం" href="#stories">
            {editionSection?.sectionTitle || 'ఈ సంచిక'}
          </SectionHeading>
          <p className="mt-2 max-w-xl font-telugu text-sm leading-6 text-stone-600">
            {editionSection?.sectionDesc ||
              'మీకు ఇష్టమైన...'}
          </p>

          <div className="mt-4 space-y-2">
            {issueItems.map((item, index) => (
              <article key={item.title} className="flex items-center gap-3 rounded-2xl border border-stone-100 bg-stone-50/80 p-2">
                {item.image ? (
                  <img
                    src={item.image}
                    alt=""
                    className="h-14 w-14 shrink-0 rounded-xl object-cover"
                  />
                ) : (
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl font-telugu text-[10px] font-bold ${item.color || issueHighlights[index % issueHighlights.length].color}`}
                  >
                    {item.icon}
                  </div>
                )}
                <div className="min-w-0">
                  <h3 className="font-telugu text-base font-bold text-stone-800">{item.title}</h3>
                  <p className="mt-0.5 font-telugu text-[11px] leading-5 text-stone-500">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <a
            href="#stories"
            className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-brand-crimson px-5 py-2.5 font-telugu text-sm font-bold text-white shadow-[0_12px_25px_-15px_rgba(127,29,29,0.7)] transition hover:-translate-y-0.5 hover:bg-brand-darkRed"
          >
            ఈ సంచికను చదవండి <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <aside
          id="subscribe"
          className="relative text-center flex flex-col justify-between overflow-hidden bg-[#fff7f5] text-stone-800 shadow-[0_18px_35px_-25px_rgba(80,22,22,0.28)] sm:p-4"
        >
          <div className="absolute -right-7 -top-7 h-28 w-28 rounded-full border border-red-200/80" />
          <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full border border-red-200/60" />

          <div className="relative z-10">
            <div className="mb-4 inline-flex rounded-xl bg-red-50 p-3 text-brand-darkRed shadow-sm">
              <Home className="h-6 w-6" strokeWidth={1.7} />
            </div>
            <p className="font-telugu text-[10px] font-semibold uppercase tracking-[0.18em] text-red-600">
              మీ ఇంటి సంచిక
            </p>
            <h2 className="mt-2 font-telugu text-[2.1rem] leading-[1.1] text-brand-darkRed">
              స్వాతి
              <br />
              మీ ఇంటికి
            </h2>
            <p className="mt-3 font-telugu text-sm leading-6 text-stone-600">
              43 ఏళ్లుగా తెలుగు కుటుంబాలతో కలిసి... మీకు ఇష్టమైన ప్రతి సంచిక నేరుగా మీ ఇంటికే.
            </p>
          </div>

          <div className="relative z-10 mt-6">
            <a
              href="mailto:subscriptions@swati.in"
              className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-brand-crimson px-5 py-2.5 font-telugu text-sm font-bold text-white shadow-[0_12px_25px_-15px_rgba(127,29,29,0.7)] transition hover:-translate-y-0.5 hover:bg-brand-darkRed"
            >
              సభ్యత్వం పొందండి <ArrowRight className="h-4 w-4" />
            </a>

            <div className="mt-5 grid grid-cols-3 gap-2 text-center text-[9px] font-medium text-stone-600">
              <span className="flex flex-col items-center gap-2 rounded-xl border border-stone-200 bg-white p-2">
                <Truck className="h-4 w-4 text-brand-crimson" />
                ఇంటికి
              </span>
              <span className="flex flex-col items-center gap-2 rounded-xl border border-stone-200 bg-white p-2">
                <BookOpen className="h-4 w-4 text-brand-crimson" />
                డిజిటల్
              </span>
              <span className="flex flex-col items-center gap-2 rounded-xl border border-stone-200 bg-white p-2">
                <Gift className="h-4 w-4 text-brand-crimson" />
                ఆఫర్లు
              </span>
            </div>
          </div>
        </aside>
      </section>

      <section id="special-section" className="special-section">
        <div className="section-heading">
        <SectionHeading eyebrow="పాఠకుల కోసం" href="#special-section">
          {specialSection?.sectionTitle || 'స్వాతి ప్రత్యేకం'}
        </SectionHeading>
         <a href="/special">
              మరిన్ని ప్రత్యేకం <ArrowRight size={14} />
            </a>
            </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-5 xl:grid-cols-5">
          {specialItems.map((story, index) => (
            <article
              key={`${story.title}-${index}`}
              className={
                index === 0
                  ? 'group relative isolate col-span-2 flex h-52 flex-col justify-end overflow-hidden bg-stone-800 p-4 text-white shadow-sm sm:h-60 xl:h-48'
                  : 'group flex min-w-0 flex-col overflow-hidden'
              }
            >
              <img
                src={story.image}
                alt=""
                loading="lazy"
                className={
                  index === 0
                    ? 'absolute inset-0 -z-20 h-full w-full object-cover transition duration-700 group-hover:scale-105'
                    : 'h-28 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-36 xl:h-24'
                }
              />
              {index === 0 ? (
                <>
                  <div className={`absolute inset-0 -z-10 bg-gradient-to-t ${story.tone} via-black/15 to-transparent`} />
                  <span className="mb-2 w-fit rounded-full bg-white/15 px-3 py-1 font-telugu text-[10px] font-semibold backdrop-blur">
                    {story.category}
                  </span>
                  <h3 className="font-telugu text-xl font-bold">{story.title}</h3>
                  <p className="mt-1 font-telugu text-xs text-white/80">{story.description}</p>
                </>
              ) : (
                <div className="pt-2">
                  <h3 className="font-telugu text-sm font-bold text-stone-800">{story.title}</h3>
                  <p className="mt-1 font-telugu text-[11px] leading-5 text-stone-600">{story.description}</p>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="stories" className="stories-section">
        <div className="section-heading">
        <SectionHeading eyebrow="చదవండి · తెలుసుకోండి" href="#stories">
          {storiesSection?.sectionTitle || 'కథనాలు'}
        </SectionHeading>
         <a href="/editions">
              మరిన్ని కథనాలు <ArrowRight size={14} />
            </a>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {storyItems.map((story, index) => (
            <a
              key={`${story.title}-${index}`}
              href="#current-issue"
              className="group overflow-hidden transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-24 overflow-hidden bg-rose-50 sm:h-28">
                <img
                  src={story.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="font-telugu text-sm font-bold text-stone-800">{story.title}</h3>
                <p className="mt-1 font-telugu text-[11px] leading-5 text-stone-500">
                  {story.text ?? story.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
      <section
        id="journey"
        className="grid overflow-hidden bg-[#f2e8dc] md:grid-cols-[0.85fr_1.15fr]"
      >
        <div className="flex flex-col justify-center p-7 sm:p-10">
          <SectionHeading eyebrow="మన గురించి" href="#journey">
            {journeySection?.sectionTitle || 'స్వాతి గురించి'}
          </SectionHeading>
          <p className="mt-2 text-2xl font-semibold tracking-[0.12em] text-stone-500">
            {journeyTile?.title || '1984 — 2026'}
          </p>
          <p className="mt-4 max-w-md font-telugu text-sm leading-7 text-stone-600">
            {journeyTile?.text ||
              'తెలుగు కుటుంబాల ప్రేమాభిమానాలతో, కథలతో, జ్ఞాపకాలతో సాగుతున్న స్వాతి ప్రయాణం...'}
          </p>
          <a
            href="#about"
            className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-brand-crimson px-5 py-2.5 font-telugu text-sm font-bold text-white shadow-[0_12px_25px_-15px_rgba(127,29,29,0.7)] transition hover:-translate-y-0.5 hover:bg-brand-darkRed"
          >
            మా ప్రయాణం గురించి <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="journey-row">
          <img
            className="journey-banner"
            src={journeySection?.tiles[0]?.image}
            alt="Books representing Swati's 43-year journey"
          />
        </div>
      </section>

      <div className="about-sections grid overflow-hidden border border-stone-200 md:grid-cols-[1.6fr_1fr]">
        <section id="about" className="about-hero flex min-h-[210px] items-center px-5 py-5 sm:px-8 sm:py-6">
          <div className="max-w-sm">
            <SectionHeading eyebrow="మన గురించి" href="#about">
              {aboutSection?.sectionTitle || 'స్వాతి గురించి'}
            </SectionHeading>
            <p className="mt-3 font-telugu text-sm leading-6 text-stone-700">
              {aboutTile?.title || aboutTile?.text ||
                '43 సంవత్సరాలుగా తెలుగు కుటుంబాలతో కలిసి ప్రయాణిస్తున్న స్వాతి కథ...'}
            </p>
            <a
              href="#about"
              className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-brand-crimson px-5 py-2.5 font-telugu text-sm font-bold text-white shadow-[0_12px_25px_-15px_rgba(127,29,29,0.7)] transition hover:-translate-y-0.5 hover:bg-brand-darkRed"
            >
              మా గురించి తెలుసుకోండి <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section id="contact" className="flex flex-col justify-center gap-3 bg-[#fffaf5] px-5 py-5 sm:px-6">
          <div>
            <SectionHeading eyebrow="మన గురించి" href="#contact">
              సంప్రదించండి
            </SectionHeading>
            <p className="mt-1 font-telugu text-xs leading-5 text-stone-600">
              మీ అభిప్రాయాలు, సూచనలు, సహకారం మాకు ఎంతో విలువైనవి.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            {[
              { icon: PencilLine, title: 'సంపాదకీయం', text: 'కథలు, రచనలు, పాఠకుల కోసం' },
              { icon: Megaphone, title: 'విజ్ఞాపన కోసం', text: 'ప్రకటనలు, బ్రాండ్ భాగస్వామ్యాలు' },
              { icon: Mail, title: 'సాధారణ సమాచారం', text: 'ఇతర సమాచారం, సూచనలు' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex min-w-0 flex-col items-center rounded-xl bg-[#f4e8d9] px-2 py-3 text-center">
                <Icon className="h-5 w-5 shrink-0 text-brand-crimson" />
                <h3 className="mt-2 font-telugu text-xs font-bold text-stone-800">{title}</h3>
                <p className="mt-1 font-telugu text-[10px] leading-4 text-stone-600">{text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>

  )
}
