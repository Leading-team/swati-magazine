import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { ArrowRight, Mail, Megaphone, Send, Users } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import aboutUsImage from '../assets/aboutus_img.png'
import { useLanguage } from '../lib/language'
import { getContactEmailDetails, submitContactEnquiry } from '../lib/subscriptionApi'

type ContactEmailDetail = {
  id: number
  description: string
  email: string
  active: boolean
}

const fallbackContacts: ContactEmailDetail[] = [
  {
    id: 1,
    description: 'మాతో ప్రకటన చేయండి',
    email: 'swatipublication2026@gmail.com',
    active: true,
  },
  {
    id: 2,
    description: 'మాతో చేరండి',
    email: 'swatipublication2026@gmail.com',
    active: true,
  },
  {
    id: 3,
    description: 'ఇతర విచారణలు',
    email: 'swatipublication2026@gmail.com',
    active: true,
  },
]

type EnquiryOption = {
  value: string
  contactId: number
  english: string
  telugu: string
}

type ContactField = 'name' | 'email' | 'phone' | 'enquiryType' | 'message'

const enquiryOptions: EnquiryOption[] = [
  {
    value: 'general',
    contactId: 3,
    english: 'General Enquiry',
    telugu: 'సాధారణ విచారణ',
  },
  {
    value: 'advertising',
    contactId: 1,
    english: 'Advertise With Us',
    telugu: 'మాతో ప్రకటన చేయండి',
  },
  {
    value: 'joining',
    contactId: 2,
    english: 'Join Us',
    telugu: 'మాతో చేరండి',
  },
  {
    value: 'other',
    contactId: 3,
    english: 'Other Queries',
    telugu: 'ఇతర విచారణలు',
  },
]

const copy = {
  en: {
    breadcrumb: 'Home / Contact Us',
    title: 'Contact Us',
    heading: 'Send us a message',
    description: 'Fill out the form below and we will get back to you as soon as possible.',
    contact: 'Contact us',
    contactPrompt: 'Choose the right team for your enquiry.',
    fullName: 'Full Name',
    email: 'Email Address',
    phone: 'Phone Number',
    enquiry: 'Enquiry Type',
    message: 'Message',
    submit: 'Submit Enquiry',
    emailNote: 'Your message will be sent securely.',
    nameInvalid: 'Enter a name between 2 and 100 characters.',
    emailInvalid: 'Enter a valid email address.',
    phoneInvalid: 'Enter a valid mobile number.',
    enquiryInvalid: 'Choose a valid enquiry type.',
    messageInvalid: 'Enter a message (up to 5,000 characters).',
    submitting: 'Sending…',
    submitSuccess: 'Your enquiry has been sent. We will get back to you soon.',
    submitFailed: 'Unable to send your enquiry. Please try again.',
    imageAlt: 'Swati magazines and flowers',
  },
  te: {
    breadcrumb: 'హోమ్ / సంప్రదించండి',
    title: 'సంప్రదించండి',
    heading: 'మాకు సందేశం పంపండి',
    description: 'క్రింది వివరాలతో ఫారమ్ నింపండి. వీలైనంత త్వరగా మిమ్మల్ని సంప్రదిస్తాము.',
    contact: 'మమ్మల్ని సంప్రదించండి',
    contactPrompt: 'మీ విచారణకు సరైన విభాగాన్ని ఎంచుకోండి.',
    fullName: 'పూర్తి పేరు',
    email: 'ఇమెయిల్ చిరునామా',
    phone: 'ఫోన్ నంబర్',
    enquiry: 'విచారణ రకం',
    message: 'సందేశం',
    submit: 'విచారణ పంపండి',
    emailNote: 'మీ సందేశం సురక్షితంగా పంపబడుతుంది.',
    nameInvalid: '2 నుండి 100 అక్షరాల మధ్య పేరు నమోదు చేయండి.',
    emailInvalid: 'సరైన ఇమెయిల్ చిరునామా నమోదు చేయండి.',
    phoneInvalid: '+91 దేశ కోడ్‌తో లేదా లేకుండా, 6–9తో ప్రారంభమయ్యే 10 అంకెల భారతీయ మొబైల్ నంబర్ నమోదు చేయండి.',
    enquiryInvalid: 'సరైన విచారణ రకాన్ని ఎంచుకోండి.',
    messageInvalid: 'సందేశాన్ని నమోదు చేయండి (గరిష్ఠంగా 5,000 అక్షరాలు).',
    submitting: 'పంపుతోంది…',
    submitSuccess: 'మీ విచారణ పంపబడింది. త్వరలో మిమ్మల్ని సంప్రదిస్తాము.',
    submitFailed: 'మీ విచారణను పంపలేకపోయాము. దయచేసి మళ్లీ ప్రయత్నించండి.',
    imageAlt: 'స్వాతి పత్రికలు మరియు పూల అలంకరణ',
  },
} as const

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: 'సంప్రదించండి — Swathi Publications' },
      {
        name: 'description',
        content: 'స్వాతి ప్రచురణలను సంప్రదించడానికి మీ వివరాలతో విచారణ ఫారమ్ నింపండి.',
      },
    ],
  }),
  component: ContactPage,
})

function ContactPage() {
  const { language } = useLanguage()
  const text = copy[language]
  const [selectedEnquiry, setSelectedEnquiry] = useState(enquiryOptions[0].value)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [submitSuccess, setSubmitSuccess] = useState('')
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<ContactField, string>>>({})
  const contactsQuery = useQuery<ContactEmailDetail[]>({
    queryKey: ['contactEmailDetails'],
    queryFn: ({ signal }) => getContactEmailDetails({ signal }),
    retry: false,
    staleTime: 5 * 60 * 1000,
  })

  const contacts = contactsQuery.data?.filter((contact) => contact.active).length
    ? contactsQuery.data.filter((contact) => contact.active)
    : fallbackContacts

  function validateField(field: ContactField, value: string) {
    const trimmedValue = value.trim()
    switch (field) {
      case 'name':
        return trimmedValue.length >= 2 && trimmedValue.length <= 100
          ? ''
          : text.nameInvalid
      case 'email':
        return trimmedValue.length <= 254 &&
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)
          ? ''
          : text.emailInvalid
      case 'phone': {
        const digits = trimmedValue.replace(/\D/g, '')
        const hasValidFormat = /^\+?[\d\s().-]+$/.test(trimmedValue)
        const mobileNumber =
          digits.length === 12 && digits.startsWith('91')
            ? digits.slice(2)
            : digits
        return hasValidFormat &&
          /^[6-9]\d{9}$/.test(mobileNumber) &&
          (digits.length === 10 ||
            (digits.length === 12 &&
              digits.startsWith('91') &&
              (!trimmedValue.startsWith('+') || trimmedValue.startsWith('+91'))))
          ? ''
          : text.phoneInvalid
      }
      case 'enquiryType':
        return enquiryOptions.some((option) => option.value === value)
          ? ''
          : text.enquiryInvalid
      case 'message':
        return trimmedValue.length > 0 && trimmedValue.length <= 5000
          ? ''
          : text.messageInvalid
    }
  }

  function updateFieldError(field: ContactField, value: string) {
    setFieldErrors((current) => ({ ...current, [field]: validateField(field, value) }))
  }

  async function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isSubmitting) return

    const form = event.currentTarget
    const formData = new FormData(form)
    const option = enquiryOptions.find((item) => item.value === selectedEnquiry)
    if (!option) {
      setSubmitError(text.submitFailed)
      return
    }

    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const phone = String(formData.get('phone') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()
    const values: Record<ContactField, string> = {
      name,
      email,
      phone,
      enquiryType: String(formData.get('enquiryType') ?? ''),
      message,
    }
    const errors: Partial<Record<ContactField, string>> = {}
    for (const field of ['name', 'email', 'phone', 'enquiryType', 'message'] as const) {
      const error = validateField(field, values[field])
      if (error) errors[field] = error
    }
    setFieldErrors(errors)
    if (Object.keys(errors).length > 0) {
      setSubmitSuccess('')
      setSubmitError('')
      const firstInvalidField = Object.keys(errors)[0]
      form.querySelector<HTMLElement>(`[name="${firstInvalidField}"]`)?.focus()
      return
    }

    setIsSubmitting(true)
    setSubmitError('')
    setSubmitSuccess('')
    try {
      await submitContactEnquiry({
        name,
        email,
        phone,
        enquiryType: option.value,
        message,
        language,
      })
      form.reset()
      setSelectedEnquiry(enquiryOptions[0].value)
      setFieldErrors({})
      setSubmitSuccess(text.submitSuccess)
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : text.submitFailed)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-4 sm:px-6 sm:py-8 lg:px-8">
      <header className="mb-8 text-center sm:mb-10">
        <h1 className="mt-2 font-serif text-3xl font-semibold text-brand-crimson sm:text-4xl">
          {text.title}
        </h1>
      </header>

      <section className="grid overflow-hidden rounded-2xl border border-[#e7dfd4] bg-white shadow-[0_20px_60px_-40px_rgba(66,40,20,0.35)] lg:grid-cols-2">
        <div className="flex flex-col bg-[#faf7f1]">
          <div className="h-64 overflow-hidden sm:h-80 lg:h-[420px]">
            <img
              src={aboutUsImage}
              alt={text.imageAlt}
              className="h-full w-full object-cover object-[72%_center]"
            />
          </div>
          <div className="grid gap-6 border-t border-[#e7dfd4] p-5 sm:grid-cols-2 sm:p-7">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-crimson">
                {language === 'en' ? 'OUR CONTACTS' : 'సంప్రదింపు వివరాలు'}
              </p>
              <h2 className="mt-2 font-serif text-lg font-bold text-brand-crimson">
                {text.contact}
              </h2>
              <p className="mt-1 text-sm leading-6 text-stone-600">{text.contactPrompt}</p>
            </div>
            <div className="space-y-3">
              {contacts.map((contact) => {
                const label = enquiryOptions.find((option) => option.contactId === contact.id)
                const Icon = contact.id === 1 ? Megaphone : contact.id === 2 ? Users : Mail
                return (
                  <a
                    key={contact.id}
                    href={`mailto:${contact.email}`}
                    className="flex min-w-0 items-start gap-2 text-sm text-stone-700 transition hover:text-brand-crimson"
                  >
                    <Icon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand-crimson" />
                    <span className="min-w-0">
                      <span className="block font-semibold">
                        {language === 'en' ? label?.english : label?.telugu}
                      </span>
                      <span className="break-all text-xs text-stone-500">{contact.email}</span>
                    </span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-8 lg:p-10">
          <div className="mb-6">
            <h2 className="font-serif text-2xl font-semibold text-brand-crimson">{text.heading}</h2>
            <p className="mt-2 max-w-lg text-sm leading-6 text-stone-600">{text.description}</p>
          </div>

          <form
            onSubmit={submitEnquiry}
            className="space-y-4"
            aria-busy={isSubmitting}
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5 text-xs font-semibold text-stone-700">
                {text.fullName}
                <input
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={100}
                  aria-invalid={Boolean(fieldErrors.name)}
                  aria-describedby={fieldErrors.name ? 'contact-name-error' : undefined}
                  onBlur={(event) => updateFieldError('name', event.currentTarget.value)}
                  onChange={(event) => {
                    if (fieldErrors.name) updateFieldError('name', event.currentTarget.value)
                  }}
                  className="h-11 rounded-md border border-stone-300 bg-white px-3 text-sm font-normal outline-none transition placeholder:text-stone-400 focus:border-brand-crimson focus:ring-2 focus:ring-brand-crimson/10"
                  placeholder={text.fullName}
                />
                {fieldErrors.name && <span id="contact-name-error" className="text-xs font-normal text-red-700">{fieldErrors.name}</span>}
              </label>
              <label className="grid gap-1.5 text-xs font-semibold text-stone-700">
                {text.email}
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  aria-invalid={Boolean(fieldErrors.email)}
                  aria-describedby={fieldErrors.email ? 'contact-email-error' : undefined}
                  onBlur={(event) => updateFieldError('email', event.currentTarget.value)}
                  onChange={(event) => {
                    if (fieldErrors.email) updateFieldError('email', event.currentTarget.value)
                  }}
                  className="h-11 rounded-md border border-stone-300 bg-white px-3 text-sm font-normal outline-none transition placeholder:text-stone-400 focus:border-brand-crimson focus:ring-2 focus:ring-brand-crimson/10"
                  placeholder={text.email}
                />
                {fieldErrors.email && <span id="contact-email-error" className="text-xs font-normal text-red-700">{fieldErrors.email}</span>}
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5 text-xs font-semibold text-stone-700">
                {text.phone}
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  maxLength={30}
                  aria-invalid={Boolean(fieldErrors.phone)}
                  aria-describedby={fieldErrors.phone ? 'contact-phone-error' : undefined}
                  onBlur={(event) => updateFieldError('phone', event.currentTarget.value)}
                  onChange={(event) => {
                    if (fieldErrors.phone) updateFieldError('phone', event.currentTarget.value)
                  }}
                  className="h-11 rounded-md border border-stone-300 bg-white px-3 text-sm font-normal outline-none transition placeholder:text-stone-400 focus:border-brand-crimson focus:ring-2 focus:ring-brand-crimson/10"
                  placeholder={text.phone}
                />
                {fieldErrors.phone && <span id="contact-phone-error" className="text-xs font-normal text-red-700">{fieldErrors.phone}</span>}
              </label>
              <label className="grid gap-1.5 text-xs font-semibold text-stone-700">
                {text.enquiry}
                <select
                  name="enquiryType"
                  value={selectedEnquiry}
                  required
                  aria-invalid={Boolean(fieldErrors.enquiryType)}
                  aria-describedby={fieldErrors.enquiryType ? 'contact-enquiry-error' : undefined}
                  onBlur={(event) => updateFieldError('enquiryType', event.currentTarget.value)}
                  onChange={(event) => {
                    setSelectedEnquiry(event.target.value)
                    if (fieldErrors.enquiryType) updateFieldError('enquiryType', event.target.value)
                  }}
                  className="h-11 rounded-md border border-stone-300 bg-white px-3 text-sm font-normal outline-none transition focus:border-brand-crimson focus:ring-2 focus:ring-brand-crimson/10"
                >
                  {enquiryOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {language === 'en' ? option.english : option.telugu}
                    </option>
                  ))}
                </select>
                {fieldErrors.enquiryType && <span id="contact-enquiry-error" className="text-xs font-normal text-red-700">{fieldErrors.enquiryType}</span>}
              </label>
            </div>
            <label className="grid gap-1.5 text-xs font-semibold text-stone-700">
              {text.message}
              <textarea
                name="message"
                rows={5}
                required
                maxLength={5000}
                aria-invalid={Boolean(fieldErrors.message)}
                aria-describedby={fieldErrors.message ? 'contact-message-error' : undefined}
                onBlur={(event) => updateFieldError('message', event.currentTarget.value)}
                onChange={(event) => {
                  if (fieldErrors.message) updateFieldError('message', event.currentTarget.value)
                }}
                className="resize-y rounded-md border border-stone-300 bg-white px-3 py-2.5 text-sm font-normal outline-none transition placeholder:text-stone-400 focus:border-brand-crimson focus:ring-2 focus:ring-brand-crimson/10"
                placeholder={text.message}
              />
              {fieldErrors.message && <span id="contact-message-error" className="text-xs font-normal text-red-700">{fieldErrors.message}</span>}
            </label>
            {submitError && (
              <p role="alert" className="rounded-md bg-red-50 p-3 text-sm text-red-800">
                {submitError}
              </p>
            )}
            {submitSuccess && (
              <p role="status" className="rounded-md bg-green-50 p-3 text-sm text-green-800">
                {submitSuccess}
              </p>
            )}
            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-5 text-stone-500">{text.emailNote}</p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-md bg-brand-crimson px-6 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-brand-darkRed focus:outline-none focus:ring-2 focus:ring-brand-crimson focus:ring-offset-2 disabled:cursor-wait disabled:opacity-70"
              >
                {isSubmitting ? text.submitting : text.submit}
                <Send aria-hidden="true" className="h-4 w-4" />
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
