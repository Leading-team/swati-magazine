import { createFileRoute, Link } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import {
  ArrowRight,
  BookOpen,
  Gift,
  Home,
  Mail,
  Megaphone,
  PencilLine,
  Truck,
} from 'lucide-react'
import currentCover from '../assets/current-cover.jpg'
import noImage from '../assets/noimage.png'
import {
  fallbackContactDetails,
  fallbackSectionDetails,
  issueHighlights,
  specialStories,
  storyCategories,
  type ContactEmailDetail,
  type IssueItem,
  type MenuSection,
  type MenuSectionResponse,
} from '../data/homepage-fallback'
import { getMenuSectionsById } from '../lib/menus'
import { useLanguage } from '../lib/language'
import { getContactEmailDetails } from '../lib/subscriptionApi'
import type { ReactNode, SyntheticEvent } from 'react'

type StoryItem = {
  title: string
  text?: string
  description?: string
  image: string
}

function handleImageError(event: SyntheticEvent<HTMLImageElement>) {
  event.currentTarget.onerror = null
  event.currentTarget.src = noImage
}

export const Route = createFileRoute('/')({
  component: IndexComponent,
})
function SectionHeading({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="flex items-end justify-between gap-4 pb-2">
      <div>
        <h2 className="mt-1 font-telugu text-2xl font-bold text-stone-950 sm:text-3xl">
          {children}
        </h2>
        <div className="h-0.5 w-9 bg-brand-crimson" />
      </div>
    </div>
  )
}

function IndexComponent() {
  const { language } = useLanguage()
  const isEnglish = language === 'en'
  const {
    data: sectionDetails,
    isLoading: isLoadingSections,
    isError: hasSectionError,
  } = useQuery<MenuSectionResponse[]>({
    queryKey: ['menuSections', 1, language],
    queryFn: ({ signal }) => getMenuSectionsById(1, { language, signal }),
    retry: false,
    staleTime: 5 * 60 * 1000,
  })
  const {
    data: contactDetails,
    isLoading: isLoadingContactDetails,
    isError: hasContactDetailsError,
  } = useQuery<ContactEmailDetail[]>({
    queryKey: ['contactEmailDetails'],
    queryFn: ({ signal }) => getContactEmailDetails({ signal }),
    retry: false,
    staleTime: 5 * 60 * 1000,
  })
  const sections = (sectionDetails?.length ? sectionDetails : fallbackSectionDetails).flatMap(
    (menu) => (Array.isArray(menu.sections) ? menu.sections : []),
  )
  const fetchedActiveContactDetails =
    contactDetails?.filter((contact) => contact.active) ?? []
  const activeContactDetails = fetchedActiveContactDetails.length
    ? fetchedActiveContactDetails
    : fallbackContactDetails
  const getSection = (name: string) =>
    sections.find((section) => section.sectionName?.trim().toLowerCase() === name)
  const getSectionHeading = (
    section: MenuSection | undefined,
    teluguFallback: string,
    englishFallback: string,
  ) => {
    const sectionTitle = section?.sectionTitle?.trim()
    const sectionName = section?.sectionName?.trim()

    if (isEnglish) {
      return sectionName || sectionTitle || englishFallback
    }

    return sectionTitle || teluguFallback
  }
  const getLocalizedText = (value?: string, englishValue?: string) => {
    const teluguValue = value?.trim()
    const englishText = englishValue?.trim()

    if (isEnglish) {
      return englishText || teluguValue || ''
    }

    return teluguValue || englishText || ''
  }
  const editionSection = getSection('editions')
  const specialSection = getSection('special')
  const storiesSection = getSection('articles')
  const journeySection = getSection('journey')
  const aboutSection = getSection('aboutus')
  const issueItems: IssueItem[] = editionSection?.tiles?.length
    ? editionSection.tiles.map((tile, index) => ({
      title: getLocalizedText(tile.title, tile.titleEn),
      description: getLocalizedText(tile.text, tile.textEn),
      icon: getLocalizedText(tile.title, tile.titleEn) || tile.title || tile.titleEn || '',
      image: tile.image?.trim(),
      color: issueHighlights[index % issueHighlights.length].color,
    }))
    : issueHighlights
  const specialItems = specialSection?.tiles?.length
    ? specialSection.tiles.map((tile, index) => ({
      category: specialStories[index % specialStories.length].category,
      title: getLocalizedText(tile.title, tile.titleEn),
      description: getLocalizedText(tile.text, tile.textEn),
      image:
        tile.image?.trim() || specialStories[index % specialStories.length].image,
      tone: specialStories[index % specialStories.length].tone,
    }))
    : specialStories
  const storyItems: StoryItem[] = storiesSection?.tiles?.length
    ? storiesSection.tiles.map((tile, index) => ({
      title: getLocalizedText(tile.title, tile.titleEn),
      text: getLocalizedText(tile.text, tile.textEn),
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
      <h1 className="sr-only">{isEnglish ? 'Swati Magazine' : 'స్వాతి పత్రిక'}</h1>
      {isLoadingSections && (
        <p role="status" className="rounded-lg bg-white px-4 py-3 text-sm text-stone-600">
          {isEnglish
            ? 'Homepage sections are loading…'
            : 'హోమ్‌పేజీ విభాగాలు లోడ్ అవుతున్నాయి…'}
        </p>
      )}
      {hasSectionError && (
        <p role="status" className="rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-900">
          {isEnglish
            ? 'Homepage sections could not be loaded. Showing available fallback content.'
            : 'హోమ్‌పేజీ విభాగాలను లోడ్ చేయలేకపోయాము. అందుబాటులో ఉన్న ప్రత్యామ్నాయ కంటెంట్‌ను చూపిస్తున్నాము.'}
        </p>
      )}
      {hasContactDetailsError && (
        <p role="status" className="rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-900">
          {isEnglish
            ? 'Contact details could not be loaded. Showing available fallback details.'
            : 'సంప్రదింపు వివరాలను లోడ్ చేయలేకపోయాము. అందుబాటులో ఉన్న ప్రత్యామ్నాయ వివరాలను చూపిస్తున్నాము.'}
        </p>
      )}
      <section className="hero grid">
        <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden sm:min-h-[340px]">
          <div className="absolute inset-x-0 top-0 h-20 " />
          <img
            src={editionSection?.coverImage?.trim() || currentCover}
            alt={isEnglish ? 'Cover of the latest Swati issue' : 'స్వాతి తాజా సంచిక ముఖచిత్రం'}
            className="relative h-[240px] max-w-full rounded-[12px] object-contain shadow-[0_22px_45px_-17px_rgba(74,22,22,0.55)] sm:h-[320px] lg:h-[360px]"
            onError={handleImageError}
          />
        </div>

        <div
          id="current-issue"
          className="flex flex-col justify-center rounded-[30px] sm:p-5"
        >
          <SectionHeading>
            {getSectionHeading(editionSection, 'ఈ సంచిక', 'Current Issue')}
          </SectionHeading>
 
          <div className="">
            {issueItems.map((item, index) => (
              <article key={item.title} className="flex items-center gap-3 border border-stone-100  px-2">
                {item.image ? (
                  <img
                    src={item.image}
                    alt=""
                    className="h-20 w-20 shrink-0  object-cover"
                    onError={handleImageError}
                  />
                ) : (
                  <div
                    className={`flex h-20 w-20 shrink-0 items-center justify-center font-telugu text-[10px] font-bold ${item.color || issueHighlights[index % issueHighlights.length].color}`}
                  >
                    {item.icon}
                  </div>
                )}
                <div className="min-w-0">
                  <h2 className="font-telugu text-base font-bold text-stone-900">{item.title}</h2>
                  <p className="mt-0.5 font-telugu text-[14px] leading-5 text-stone-600">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <a
            href="#stories"
            className="mt-4 inline-flex w-fit items-center gap-2 rounded-md bg-brand-crimson px-5 py-2 font-telugu text-sm font-bold text-white shadow-[0_12px_25px_-15px_rgba(127,29,29,0.7)] transition hover:-translate-y-0.5 hover:bg-brand-darkRed"
          >
            {isEnglish ? 'Read this issue' : 'ఈ సంచికను చదవండి'} <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <aside
          id="subscribe"
          className="relative text-center flex flex-col justify-between overflow-hidden bg-[#fffaf5] text-stone-800 shadow-[0_18px_35px_-25px_rgba(80,22,22,0.28)] sm:p-4 rounded-md"
        >
          <div className="absolute -right-7 -top-7 h-28 w-28 rounded-full border border-red-200/80" />
          <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full border border-red-200/60" />

          <div className="relative z-10">
            <div className="mb-4 inline-flex rounded-xl bg-red-50 p-3 text-brand-darkRed shadow-sm">
              <Home className="h-6 w-6" strokeWidth={1.7} />
            </div>
            <h2 className="mt-2 font-telugu text-[2.1rem] leading-[1.1] text-red-700 font-bold">
              {isEnglish ? 'Swati' : 'స్వాతి'}
              <br />
              {isEnglish ? 'At Your Home' : 'మీ ఇంటికి'}
            </h2>
            <p className="mt-3 font-telugu font-medium leading-6 text-stone-800">
              {isEnglish
                ? 'Connecting with Telugu families for 43 years…'
                : '43 ఏళ్లుగా తెలుగు కుటుంబాలతో కలిసి...'}
            </p>
            <p className="mt-3 font-telugu text-sm leading-6 text-stone-600">
              {isEnglish ? 'Your favourite issues, every month.' : 'ఇష్టమైన సంచికలు ప్రతినెలా.'}
              <br />
              {isEnglish
                ? 'Get the Swati print edition delivered to your home.'
                : 'స్వాతి ప్రింట్ సంచికను మీ ఇంటికి పంపండి.'}
            </p>
          </div>

          <div className="relative z-10 mt-6">
            <Link
              to="/subscription"
              className="mt-4 inline-flex w-fit items-center gap-2 rounded-md bg-brand-crimson px-5 py-2 font-telugu text-sm font-bold text-white shadow-[0_12px_25px_-15px_rgba(127,29,29,0.7)] transition hover:-translate-y-0.5 hover:bg-brand-darkRed"
            >
              {isEnglish ? 'Subscribe now' : 'సభ్యత్వం పొందండి'} <ArrowRight className="h-4 w-4" />
            </Link>

            <div className="mt-5 grid grid-cols-3 gap-2 text-center text-[11px] font-medium text-stone-600">
              <span className="flex flex-col items-center gap-2 rounded-xl border border-stone-200 bg-brand-cream p-2">
                <Truck className="h-5 w-5 text-brand-crimson" />
                {isEnglish ? 'Delivered' : 'మీ ఇంటికి'}
                <br />
                {isEnglish ? 'to your door' : 'నేరుగా'}
              </span>
              <span className="flex flex-col items-center gap-2 rounded-xl border border-stone-200 bg-brand-cream p-2">
                <BookOpen className="h-5 w-5 text-brand-crimson" />
                {isEnglish ? 'Print' : 'ప్రింట్'}
              </span>
              <span className="flex flex-col items-center gap-2 rounded-xl border border-stone-200 bg-brand-cream p-2">
                <Gift className="h-5 w-5 text-brand-crimson" />
                {isEnglish ? <>Special <br /> offers</> : <>ప్రత్యేక <br /> ఆఫర్లు</>}
              </span>
            </div>
          </div>
        </aside>
      </section>

      <section id="special-section" className="special-section">
        <div className="section-heading">
          <SectionHeading>
            {getSectionHeading(specialSection, 'స్వాతి ప్రత్యేకం', 'Swati Specials')}
          </SectionHeading>
          {/* <a href="/special">
            {isEnglish ? 'More special stories' : 'మరిన్ని ప్రత్యేకం'} <ArrowRight size={14} />
          </a> */}
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-5 xl:grid-cols-5">
          {specialItems.map((story, index) => (
            <article
              key={`${story.title}-${index}`}
              className={
                index === 0
                  ? 'group relative isolate col-span-2 flex h-52 flex-col justify-end overflow-hidden bg-stone-800 p-4 text-white shadow-sm sm:h-60 xl:h-36'
                  : 'group flex min-w-0 flex-col overflow-hidden'
              }
            >
              <img
                src={story.image}
                alt=""
                loading="lazy"
                onError={handleImageError}
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
                  <h3 className="font-telugu font-bold text-stone-800">{story.title}</h3>
                  <p className="mt-1 font-telugu text-[12px] leading-5 text-stone-600">{story.description}</p>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="stories" className="stories-section">
        <div className="section-heading">
          <SectionHeading>
            {getSectionHeading(storiesSection, 'కథనాలు', 'Stories')}
          </SectionHeading>
          {/* <a href="/editions">
            {isEnglish ? 'More articles' : 'మరిన్ని కథనాలు'} <ArrowRight size={14} />
          </a> */}
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
                  onError={handleImageError}
                />
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="font-telugu font-bold text-stone-800">{story.title}</h3>
                <p className="mt-1 font-telugu text-[12px] leading-5 text-stone-500">
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
          <SectionHeading>
            {getSectionHeading(journeySection, 'స్వాతి గురించి', 'About Swati')}
          </SectionHeading>
          <p className="mt-2 text-2xl font-semibold tracking-[0.12em] text-stone-500">
            {getLocalizedText(journeyTile?.title, journeyTile?.titleEn) || '1984 — 2026'}
          </p>
          <p className="mt-4 max-w-md font-telugu text-sm leading-7 text-stone-600">
            {getLocalizedText(journeyTile?.text, journeyTile?.textEn) || (isEnglish
              ? "Swati's journey continues with the love of Telugu families, stories and memories…"
              : 'తెలుగు కుటుంబాల ప్రేమాభిమానాలతో, కథలతో, జ్ఞాపకాలతో సాగుతున్న స్వాతి ప్రయాణం...')}
          </p>
          <a
            
            className="mt-4 inline-flex w-fit items-center gap-2 rounded-md bg-brand-crimson px-5 py-2 font-telugu text-sm font-bold text-white shadow-[0_12px_25px_-15px_rgba(127,29,29,0.7)] transition hover:-translate-y-0.5 hover:bg-brand-darkRed"
          >
            {isEnglish ? 'Explore our journey' : 'మా ప్రయాణం గురించి'} <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="journey-row">
          <img
            className="journey-banner"
            src={journeySection?.tiles?.[0]?.image}
            alt="Books representing Swati's 43-year journey"
            onError={handleImageError}
          />
        </div>
      </section>

      <div className="about-sections grid overflow-hidden border border-stone-200 md:grid-cols-[1.6fr_1fr]">
        <section id="about" className="about-hero flex min-h-[210px] items-center px-5 py-5 sm:px-8 sm:py-6">
          <div className="max-w-sm">
            <SectionHeading>
              {getSectionHeading(aboutSection, 'స్వాతి గురించి', 'About Swati')}
            </SectionHeading>
            <p className="mt-3 font-telugu text-sm leading-6 text-stone-700">
              {getLocalizedText(aboutTile?.title, aboutTile?.titleEn) || getLocalizedText(aboutTile?.text, aboutTile?.textEn) || (isEnglish
                ? "The story of Swati's 43-year journey alongside Telugu families…"
                : '43 సంవత్సరాలుగా తెలుగు కుటుంబాలతో కలిసి ప్రయాణిస్తున్న స్వాతి కథ...')}
            </p>
            <a
              
              className="mt-4 inline-flex w-fit items-center gap-2 rounded-md bg-brand-crimson px-5 py-2 font-telugu text-sm font-bold text-white shadow-[0_12px_25px_-15px_rgba(127,29,29,0.7)] transition hover:-translate-y-0.5 hover:bg-brand-darkRed"
            >
              {isEnglish ? 'Learn about us' : 'మా గురించి తెలుసుకోండి'} <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section id="contact" className="flex flex-col justify-center gap-3 bg-[#fffaf5] px-5 py-5 sm:px-6">
          <div>
            <SectionHeading>
              {isEnglish ? 'Contact us' : 'సంప్రదించండి'}
            </SectionHeading>
            <p className="mt-1 font-telugu text-xs leading-5 text-stone-600">
              {isEnglish
                ? 'Your thoughts, suggestions and support mean a lot to us.'
                : 'మీ అభిప్రాయాలు, సూచనలు, సహకారం మాకు ఎంతో విలువైనవి.'}
            </p>
          </div>
          {isLoadingContactDetails && (
            <p role="status" className="font-telugu text-xs text-stone-600">
              {isEnglish ? 'Loading contact details…' : 'సంప్రదింపు వివరాలు లోడ్ అవుతున్నాయి…'}
            </p>
          )}
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            {activeContactDetails.map((contact) => {
              const Icon =
                contact.id === 1 ? Megaphone : contact.id === 2 ? PencilLine : Mail
              const description = isEnglish
                ? contact.id === 1
                  ? 'Advertise with us'
                  : contact.id === 2
                    ? 'Join us'
                    : 'General enquiries'
                : contact.description

              return (
                <div key={contact.id} className="flex min-w-0 flex-col items-center rounded-xl bg-[#f4e8d9] px-2 py-3 text-center">
                  <Icon className="h-5 w-5 shrink-0 text-brand-crimson" />
                  <h3 className="mt-2 font-telugu text-xs font-bold text-stone-800">
                    {description}
                  </h3>
                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-1 break-all text-[10px] leading-4 text-stone-600 hover:text-brand-crimson"
                  >
                    {contact.email}
                  </a>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </div>

  )
}
