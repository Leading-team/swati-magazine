import { createFileRoute } from "@tanstack/react-router";
import currentCover from "../assets/current-cover.jpg";
import editionOne from "../assets/E1.jpg";
import editionTwo from "../assets/E2.jpg";
import editionThree from "../assets/E3.jpg";

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

function EditionGroup({
  title,
  subtitle,
  editions,
}: {
  title: string;
  subtitle: string;
  editions: { title: string; image: string }[];
}) {
  if (editions.length === 0) return null;

  return (
    <section className="py-5">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-6 w-1 rounded-full bg-brand-crimson" />
        <div>
          <h2 className="font-serif text-xl font-bold text-stone-900 sm:text-2xl">{title}</h2>
          <p className="text-xs text-stone-600">{subtitle}</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-5 lg:gap-6">
        {editions.map((edition) => (
          <article key={edition.title} className="group w-[calc(50%-0.5rem)] max-w-48 sm:w-40 md:w-44">
            <div className="aspect-[3/4] overflow-hidden border border-stone-200 bg-stone-100 shadow-sm transition duration-200 group-hover:-translate-y-1 group-hover:shadow-lg">
              <img src={edition.image} alt={edition.title} className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-2 text-center font-serif text-sm font-semibold leading-5 text-stone-900 transition-colors group-hover:text-brand-crimson">
              {edition.title}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}

function EditionsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-2 border-b border-stone-200 pb-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-crimson">
            Swathi Publications
          </p>
          <h1 className="mt-1 font-serif text-3xl font-bold text-stone-900 sm:text-4xl">
            మా సంచికలు
          </h1>
          <p className="mt-2 text-sm text-stone-600">
            ప్రతి పుటలో కథలు, సంస్కృతి, ఆలోచనలు
          </p>
        </header>

        <EditionGroup
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
        />
    </main>
  );
}
