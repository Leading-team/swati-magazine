import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { getAllMenus, getMenuSectionsById } from "../lib/menus";
import { useLanguage } from "../lib/language";
import type { MenuSectionResponse } from "../data/homepage-fallback";

type NavigationMenu = {
  id: number | string
  to: string
}

export const Route = createFileRoute("/editions")({
  head: () => ({
    meta: [
      { title: "సంచికలు — Swathi Publications" },
      {
        name: "description",
        content: "స్వాతి వారపత్రిక, మాసపత్రిక మరియు ఇతర ప్రత్యేక ప్రచురణలు.",
      },
    ],
  }),
  component: EditionsPage,
});
// function EditionGroup({
//   title,
//   subtitle,
//   editions,
// }: {
//   title: string;
//   subtitle: string;
//   editions: { title: string; image: string }[];
// }) {
//   if (editions.length === 0) return null;

//   return (
//     <section className="py-5">
//       <div className="mb-4 flex items-center gap-3">
//         <span className="h-6 w-1 rounded-full bg-brand-crimson" />
//         <div>
//           <h2 className="font-serif text-xl font-bold text-stone-900 sm:text-2xl">{title}</h2>
//           <p className="text-xs text-stone-600">{subtitle}</p>
//         </div>
//       </div>
//       <div className="flex flex-wrap justify-center gap-4 sm:gap-5 lg:gap-6">
//         {editions.map((edition) => (
//           <article key={edition.title} className="group w-[calc(50%-0.5rem)] max-w-48 sm:w-40 md:w-44">
//             <div className="aspect-[3/4] overflow-hidden border border-stone-200 bg-stone-100 shadow-sm transition duration-200 group-hover:-translate-y-1 group-hover:shadow-lg">
//               <img src={edition.image} alt={edition.title} className="h-full w-full object-cover" />
//             </div>
//             <h3 className="mt-2 text-center font-serif text-sm font-semibold leading-5 text-stone-900 transition-colors group-hover:text-brand-crimson">
//               {edition.title}
//             </h3>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }

function EditionsPage() {
  const { language } = useLanguage()
  const menusQuery = useQuery<NavigationMenu[]>({
    queryKey: ["menus", language],
    queryFn: ({ signal }) => getAllMenus({ language, signal }),
    retry: false,
    staleTime: 5 * 60 * 1000,
  })
  const editionsMenu = menusQuery.data?.find(
    (menu) => menu.to.replace(/\/+$/, "") === "/editions",
  )
  const editionsQuery = useQuery<MenuSectionResponse[]>({
    queryKey: ["menuSections", editionsMenu?.id, language],
    queryFn: ({ signal }) => {
      if (editionsMenu?.id == null) {
        throw new Error("The editions menu is unavailable.")
      }
      return getMenuSectionsById(editionsMenu.id, { language, signal })
    },
    enabled: editionsMenu?.id != null,
    retry: false,
    staleTime: 5 * 60 * 1000,
  })
  const sections = (editionsQuery.data || []).flatMap((menu) => menu.sections || [])
  const images = sections.flatMap((section) => [
    ...(section.coverImage?.trim()
      ? [{ src: section.coverImage.trim(), alt: section.sectionTitle || section.sectionName || "" }]
      : []),
    ...(section.tiles || [])
      .filter((tile) => tile.image?.trim())
      .map((tile) => ({
        src: tile.image!.trim(),
        alt: tile.title?.trim() || tile.titleEn?.trim() || section.sectionTitle || "",
      })),
  ])

  return (
    <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-2 border-b border-stone-200 pb-4 text-center">
          <h1 className="mt-1 font-serif text-3xl font-bold text-stone-900 sm:text-4xl">
            మా సంచికలు
          </h1>
          <p className="mt-2 text-sm text-stone-600">
            ప్రతి పుటలో కథలు, సంస్కృతి, ఆలోచనలు
          </p>
        </header>
         {/* <EditionGroup
          title="స్వాతి వారపత్రిక — Swati Weekly Magazine"
          subtitle="ప్రతి వారం మీ ముందుకు"
          editions={[
            { title: "ప్రస్తుత సంచిక", image: currentCover },
            { title: "స్వాతి వారపత్రిక", image: editionOne },
          ]}
        />
        <EditionGroup
          title="స్వాతి ప్రత్యేక సంచికలు — Swathi Special Editions"
          subtitle="ప్రత్యేక కథనాలు, సాహిత్యం"
          editions={[
            { title: "ప్రత్యేక సంచిక", image: editionTwo },
            { title: "సాహిత్య ప్రత్యేకం", image: editionThree },
          ]}
        /> */}

        {/* {(menusQuery.error || editionsQuery.error) && (
          <p role="alert" className="rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-900">
            {editionsQuery.error?.message || menusQuery.error?.message}
          </p>
        )} */}
        {menusQuery.isLoading || editionsQuery.isLoading ? (
          <p role="status" className="py-8 text-center text-sm text-stone-600">
            సంచికలు లోడ్ అవుతున్నాయి…
          </p>
        ) : images.length > 0 ? (
          <section aria-label="సంచికల చిత్రాలు" className="grid grid-cols-3 items-start gap-3 py-5 sm:gap-5">
            {images.map((image, index) => (
              <img
                key={`${image.src}-${index}`}
                src={image.src}
                alt={image.alt}
                className="h-auto w-full"
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            ))}
          </section>
        ) : (
          !menusQuery.error &&
          !editionsQuery.error && (
            <p className="py-8 text-center text-sm text-stone-600">
              సంచికల చిత్రాలు ప్రస్తుతం అందుబాటులో లేవు.
            </p>
          )
        )}
    </main>
  );
}
