type LegalParagraph = {
  text: string
  heading: boolean
}

export function LegalDocument({
  title,
  paragraphs,
}: {
  title: string
  paragraphs: readonly LegalParagraph[]
}) {
  return (
    <article className="mx-auto max-w-4xl px-5 py-12">
      <h1 className="font-telugu text-3xl font-bold text-stone-900 sm:text-4xl">
        {title}
      </h1>
      <div className="mt-8 space-y-5 leading-7 text-stone-700">
        {paragraphs.map(({ text, heading }, index) =>
          heading ? (
            <h2
              key={`${index}-${text}`}
              className="pt-2 font-telugu text-xl font-bold text-stone-900"
            >
              {text}
            </h2>
          ) : (
            <p key={`${index}-${text}`}>{text}</p>
          ),
        )}
      </div>
    </article>
  )
}
