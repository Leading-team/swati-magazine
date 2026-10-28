import { createFileRoute, Link } from '@tanstack/react-router'
import { Mail, Megaphone, PenLine } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: 'సంప్రదించండి — Swathi Publications' },
      {
        name: 'description',
        content: 'సంపాదకీయం, ప్రకటనలు మరియు సాధారణ సమాచారం కోసం స్వాతి ప్రచురణలను సంప్రదించండి.',
      },
    ],
  }),
  component: ContactPage,
})

const contactOptions: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: PenLine,
    title: 'సంపాదకీయం',
    description: 'కథలు, రచనలు, పాఠకుల అభిప్రాయాలు',
  },
  {
    icon: Megaphone,
    title: 'విజ్ఞాపనల కోసం',
    description: 'ప్రకటనలు మరియు బ్రాండ్ భాగస్వామ్యాలు',
  },
  {
    icon: Mail,
    title: 'సాధారణ సమాచారం',
    description: 'ఇతర సమాచారం మరియు సూచనలు',
  },
]

function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <header className="border-b border-stone-200 pb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-crimson">
          Swathi Publications
        </p>
        <h1 className="mt-2 font-serif text-3xl font-bold text-stone-900 sm:text-5xl">
          సంప్రదించండి
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-stone-600 sm:text-base">
          మీ అభిప్రాయాలు, సూచనలు, సహకారం మాకు ఎంతో విలువైనవి. మీ సందేశం ఏ అంశానికి
          సంబంధించినదో ఎంచుకోవడానికి ఈ విభాగాలను ఉపయోగించండి.
        </p>
      </header>

      <section aria-label="సంప్రదింపు విభాగాలు" className="mt-8 grid gap-4 sm:grid-cols-3">
        {contactOptions.map(({ icon: Icon, title, description }) => (
          <article
            key={title}
            className="rounded-lg border border-stone-200 bg-[#fffaf2] p-5 text-center shadow-sm"
          >
            <Icon aria-hidden="true" className="mx-auto h-7 w-7 text-brand-crimson" />
            <h2 className="mt-3 font-serif text-lg font-bold text-stone-900">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-stone-600">{description}</p>
          </article>
        ))}
      </section>

      <section className="mt-8 rounded-lg bg-[#f4e8d9] px-5 py-6 text-center sm:px-8">
        <h2 className="font-serif text-xl font-bold text-stone-900">మాతో మాట్లాడండి</h2>
        <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-stone-700">
          సంప్రదింపు వివరాలు మరియు తాజా సమాచారం కోసం మా హోమ్‌పేజీలోని సంప్రదింపు విభాగాన్ని చూడండి.
        </p>
        <Link
          to="/"
          hash="contact"
          className="mt-4 inline-flex rounded-md bg-brand-crimson px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-darkRed"
        >
          సంప్రదింపు వివరాలకు వెళ్ళండి
        </Link>
      </section>
    </main>
  )
}
