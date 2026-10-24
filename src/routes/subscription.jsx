import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { ArrowRight, Check, Loader2, ShieldCheck, Sparkles } from 'lucide-react'
import { useState } from 'react'
import {
  createSubscriptionCheckout,
  getSubscriptionCountries,
  getSubscriptionLanguages,
  getSubscriptionOffers,
  verifySubscriptionPayment,
} from '../lib/subscriptionApi'

export const Route = createFileRoute('/subscription')({
  component: SubscriptionPage,
})

const pageCopy = {
  te: {
    eyebrow: 'స్వాతి మీ ఇంటికి',
    title: 'మీ సభ్యత్వాన్ని ఎంచుకోండి',
    description: 'వారపత్రిక, మాసపత్రిక డిజిటల్ సంచికలు మరియు ప్రత్యేక కథనాలను చదవడానికి మీకు సరైన ప్లాన్‌ను ఎంచుకోండి.',
    language: 'భాష',
    country: 'దేశం',
    loading: 'సభ్యత్వ ప్లాన్‌లు లోడ్ అవుతున్నాయి…',
    plansHeading: 'మీ పఠనానికి సరైన ప్లాన్',
    choosePrompt: 'మీకు నచ్చినది ఎంచుకోండి',
    noPlans: 'ప్రస్తుతం సభ్యత్వ ప్లాన్‌లు అందుబాటులో లేవు.',
    weekly: 'వారపత్రిక సంచిక',
    monthly: 'మాసపత్రిక సంచిక',
    allAccess: 'పూర్తి ప్రవేశం',
    term: 'చందా పథకం',
    bestValue: 'ఉత్తమ ఎంపిక',
    features: [
      'స్వాతి డిజిటల్ సంచికలకు పూర్తి ప్రవేశం',
      'ధారావాహికలు, నవలల భాండాగారానికి ప్రవేశం',
      'స్వాతి ఒరిజినల్స్, ప్రత్యేక ఎంపికలకు ప్రవేశం',
      'పరికరాల మధ్య పఠన సమకాలీకరణ',
    ],
    subscribe: 'సభ్యత్వం పొందండి',
    faqTitle: 'తరచుగా అడిగే ప్రశ్నలు',
    faqs: [
      ['ఎప్పుడైనా సభ్యత్వాన్ని రద్దు చేయవచ్చా?', 'అవును. మీ ఖాతా నుంచి సభ్యత్వాన్ని నిర్వహించండి. ఎలాంటి రుసుము లేకుండా ఎప్పుడైనా రద్దు చేయవచ్చు.'],
      ['ఏ చెల్లింపు పద్ధతులు అందుబాటులో ఉన్నాయి?', 'UPI, GPay, Paytm, ప్రధాన క్రెడిట్/డెబిట్ కార్డులు, నెట్ బ్యాంకింగ్ ద్వారా చెల్లించవచ్చు.'],
      ['డిజిటల్ సంచికలను ఎలా చదవాలి?', 'మా వెబ్‌సైట్‌లోని డిజిటల్ రీడర్‌లో మీ సంచికలను వెంటనే చదవవచ్చు.'],
      ['తర్వాత ప్లాన్‌ను మార్చుకోవచ్చా?', 'అవును. మీ సభ్యత్వాన్ని తర్వాత అప్‌గ్రేడ్ లేదా డౌన్‌గ్రేడ్ చేసుకోవచ్చు.'],
    ],
    checkoutEyebrow: 'Secure checkout',
    checkoutTitle: 'Your cart',
    deliveryAddress: 'Delivery address',
    addressPrompt: 'Where should we deliver your subscription?',
    orderSummary: 'Order summary',
    deliveryTo: 'Delivery to',
    total: 'Total',
    amountToPay: 'Amount to be paid',
    paySecurely: 'Pay securely',
    backToPlans: 'Back to plans',
    cartStep: 'Cart',
    addressStep: 'Address',
    paymentStep: 'Payment',
    courier: 'Courier',
    name: 'Full name',
    email: 'Email address',
    phone: 'Phone number',
    address: 'Address',
    city: 'City',
    state: 'State / Province',
    postalCode: 'Postal code',
    checkoutCountry: 'Country',
    startingPayment: 'Starting payment…',
    securePayment: 'Your payment is securely handled by Razorpay.',
    paymentSuccess: 'Payment successful',
    orderConfirmed: 'Your order',
    confirmed: 'has been confirmed.',
  },
  en: {
    eyebrow: 'Swati at your home',
    title: 'Choose your subscription',
    description: 'Choose the plan that suits you to read weekly and monthly editions and exclusive stories.',
    language: 'Language',
    country: 'Country',
    loading: 'Loading subscription plans…',
    plansHeading: 'The right plan for your reading',
    choosePrompt: 'Choose the plan you love',
    noPlans: 'No subscription plans are currently available.',
    weekly: 'Weekly edition',
    monthly: 'Monthly edition',
    allAccess: 'Complete access',
    term: 'Subscription period',
    bestValue: 'Best value',
    features: [
      'Full access to Swati digital editions',
      'Access to serials and novel archives',
      'Exclusive access to Swati Originals and special selections',
      'Reading sync across your devices',
    ],
    subscribe: 'Subscribe now',
    faqTitle: 'Frequently asked questions',
    faqs: [
      ['Can I cancel anytime?', 'Yes. Manage your subscription from your account and cancel anytime without a fee.'],
      ['Which payment methods are supported?', 'Pay with UPI, GPay, Paytm, major credit and debit cards, or net banking.'],
      ['How do I read digital editions?', 'Read your editions instantly using the digital reader on our website.'],
      ['Can I change plans later?', 'Yes. You can upgrade or downgrade your subscription later.'],
    ],
    checkoutEyebrow: 'Secure payment',
    checkoutTitle: 'Your cart',
    deliveryAddress: 'Delivery address',
    addressPrompt: 'Where should we deliver your subscription?',
    orderSummary: 'Order summary',
    deliveryTo: 'Delivery to',
    total: 'Total',
    amountToPay: 'Amount to be paid',
    paySecurely: 'Pay securely',
    backToPlans: 'Back to plans',
    cartStep: 'Cart',
    addressStep: 'Address',
    paymentStep: 'Payment',
    courier: 'Courier',
    name: 'Full name',
    email: 'Email address',
    phone: 'Phone number',
    address: 'Address',
    city: 'City',
    state: 'State',
    postalCode: 'Postal code',
    checkoutCountry: 'Country',
    startingPayment: 'Starting payment…',
    securePayment: 'Your payment is securely handled by Razorpay.',
    paymentSuccess: 'Payment successful',
    orderConfirmed: 'Your order',
    confirmed: 'has been confirmed.',
  },
}

let razorpayScriptPromise

function loadRazorpay() {
  if (window.Razorpay) return Promise.resolve()
  if (razorpayScriptPromise) return razorpayScriptPromise

  razorpayScriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    script.onload = () => {
      if (window.Razorpay) {
        resolve()
      } else {
        razorpayScriptPromise = undefined
        reject(new Error('Razorpay Checkout did not load correctly.'))
      }
    }
    script.onerror = () => {
      razorpayScriptPromise = undefined
      reject(new Error('Unable to load Razorpay Checkout. Please try again.'))
    }
    document.body.appendChild(script)
  })

  return razorpayScriptPromise
}

function formatPrice(amount, country) {
  if (!country) return ''
  return `${country.symbol || country.currency}${new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: 2,
  }).format(amount)}`
}

function getCountryName(code) {
  const regionCode = code?.trim().toUpperCase() === 'IND' ? 'IN' : code?.trim()
  if (!regionCode) return 'Country'

  try {
    return new Intl.DisplayNames(['en'], { type: 'region' }).of(regionCode) || regionCode
  } catch {
    return regionCode
  }
}

function getPlanEdition(title) {
  const normalized = title.toLowerCase()
  if (normalized.includes('weekly')) return 'weekly'
  if (normalized.includes('monthly')) return 'monthly'
  return undefined
}

function SubscriptionPage() {
  const [language, setLanguage] = useState('te')
  const [countryId, setCountryId] = useState('')
  const [selectedTerms, setSelectedTerms] = useState({})
  const [selectedLanguageCode, setSelectedLanguageCode] = useState('en')
  const [selectedOffer, setSelectedOffer] = useState(null)
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const [checkoutError, setCheckoutError] = useState('')
  const [successOrder, setSuccessOrder] = useState('')
  const copy = pageCopy[language]

  const offersQuery = useQuery({
    queryKey: ['subscriptionOffers', language],
    queryFn: ({ signal }) => getSubscriptionOffers(language, { signal }),
    retry: false,
    staleTime: 5 * 60 * 1000,
  })
  const countriesQuery = useQuery({
    queryKey: ['subscriptionCountries'],
    queryFn: ({ signal }) => getSubscriptionCountries({ signal }),
    retry: false,
    staleTime: 30 * 60 * 1000,
  })
  const languagesQuery = useQuery({
    queryKey: ['subscriptionLanguages'],
    queryFn: ({ signal }) => getSubscriptionLanguages({ signal }),
    retry: false,
    staleTime: 30 * 60 * 1000,
  })

  const countries = (countriesQuery.data || []).filter((country) => country.active)
  const country =
    countries.find((item) => String(item.country_id) === countryId) ||
    countries.find((item) => item.countrycode?.trim().toUpperCase() === 'IND') ||
    countries[0]
  const offers = offersQuery.data || []
  const loading = offersQuery.isLoading || countriesQuery.isLoading
  const pageError = offersQuery.error || countriesQuery.error

  function chooseOffer(offer, plan, offerIndex) {
    setCheckoutError('')
    setSelectedOffer({
      offer,
      plan,
      languageCode: offerIndex === 2 ? selectedLanguageCode : undefined,
    })
  }

  async function startPayment(event) {
    event.preventDefault()
    if (!selectedOffer || !country) return

    const formData = new FormData(event.currentTarget)
    const fullName = String(formData.get('fullName') || '').trim()
    const email = String(formData.get('email') || '').trim()
    const phone = String(formData.get('phone') || '').trim()
    if (!fullName || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !phone) {
      setCheckoutError('Please enter your name, a valid email address, and phone number.')
      return
    }

    const { offer, plan } = selectedOffer
    const subscriptionPrice = Number(plan.Price)
    const courierPrice = Number(plan.Courier_Price)
    const hasCourier = Number.isFinite(courierPrice) && courierPrice > 0
    const amount = subscriptionPrice + (hasCourier ? courierPrice : 0)
    if (!Number.isFinite(subscriptionPrice) || subscriptionPrice <= 0 || !Number.isFinite(amount)) {
      setCheckoutError('Pricing is unavailable for this plan. Please choose another plan.')
      return
    }

    setIsCheckingOut(true)
    setCheckoutError('')

    try {
      await loadRazorpay()
      if (!window.Razorpay) throw new Error('Razorpay Checkout is unavailable.')

      const offerSlug = offer.Title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
      const planId = offerSlug || `subscription-${plan.PlanName.toLowerCase().replace(/\s+/g, '-')}`
      const normalizedPlanName = plan.PlanName.toLowerCase()
      const term = normalizedPlanName.includes('year')
        ? 'oneYear'
        : normalizedPlanName.includes('month')
          ? 'sixMonths'
          : undefined
      const edition = getPlanEdition(offer.Title)
      const checkout = await createSubscriptionCheckout({
        planId,
        planSlug: offerSlug || planId,
        amount,
        countryCode: country.countrycode?.trim(),
        ...(hasCourier && edition
          ? { edition, term, chargeIds: ['subscription', 'courier'] }
          : {}),
        ...(term ? { term } : {}),
        ...(selectedOffer.languageCode ? { languageCode: selectedOffer.languageCode } : {}),
        shippingAddress: {
          fullName,
          email,
          phone,
          address: String(formData.get('address') || ''),
          city: String(formData.get('city') || ''),
          state: String(formData.get('state') || ''),
          postalCode: String(formData.get('postalCode') || ''),
          country: getCountryName(country.countrycode),
        },
      })

      if (!checkout?.orderId || !checkout?.keyId || !checkout?.amount || !checkout?.currency) {
        throw new Error('Order ID, Razorpay Key ID, amount, or currency is missing.')
      }

      const razorpay = new window.Razorpay({
        key: checkout.keyId,
        order_id: checkout.orderId,
        amount: checkout.amount,
        currency: checkout.currency,
        name: 'Swati Publications',
        description: `${offer.Title} - ${plan.PlanName}`,
        prefill: { name: fullName, email, contact: phone },
        handler: async (payment) => {
          setIsCheckingOut(true)
          setCheckoutError('')
          try {
            await verifySubscriptionPayment(payment)
            setSuccessOrder(payment.razorpay_order_id)
            setSelectedOffer(null)
          } catch (error) {
            setCheckoutError(
              error instanceof Error ? error.message : 'Unable to verify the payment.',
            )
          } finally {
            setIsCheckingOut(false)
          }
        },
        modal: {
          ondismiss: () => setIsCheckingOut(false),
        },
        theme: { color: '#8b1e24' },
      })

      razorpay.on('payment.failed', (result) => {
        setCheckoutError(
          result.error?.description || 'Payment failed. Please try again.',
        )
        setIsCheckingOut(false)
      })
      razorpay.open()
    } catch (error) {
      setCheckoutError(error instanceof Error ? error.message : 'Unable to start the payment.')
      setIsCheckingOut(false)
    }
  }

  return (
    <div className="mx-auto max-w-7xl space-y-12 py-2 sm:py-5">
      {!selectedOffer && (
        <section className="relative overflow-hidden rounded-2xl bg-brand-darkRed px-6 py-10 text-white sm:px-10 sm:py-14">
          <div className="absolute -right-12 -top-20 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -right-1 -top-10 h-52 w-52 rounded-full border border-white/10" />
          <div className="relative max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red-200">{copy.eyebrow}</p>
            <h1 className="font-telugu text-3xl font-bold leading-tight sm:text-5xl">
              {copy.title}
            </h1>
            <p className="mt-4 max-w-2xl font-telugu text-sm leading-7 text-red-100 sm:text-base">
              {copy.description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <label className="flex items-center gap-2 font-telugu text-sm">
                {copy.language}
                <select
                  value={language}
                  onChange={(event) => setLanguage(event.target.value)}
                  className="rounded-md border border-white/30 bg-white px-3 py-2 text-sm text-stone-900"
                >
                  <option value="te">తెలుగు</option>
                  <option value="en">English</option>
                </select>
              </label>
              <label className="flex items-center gap-2 font-telugu text-sm">
                {copy.country}
                <select
                  value={country?.country_id ?? ''}
                  onChange={(event) => setCountryId(event.target.value)}
                  className="max-w-56 rounded-md border border-white/30 bg-white px-3 py-2 text-sm text-stone-900"
                  disabled={countries.length === 0}
                >
                  {countries.map((item) => (
                    <option key={item.country_id} value={item.country_id}>
                      {getCountryName(item.countrycode)} ({item.currency})
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
        </section>
      )}

      {loading ? (
        <div role="status" className="flex items-center justify-center gap-3 py-16 text-stone-600">
          <Loader2 className="h-5 w-5 animate-spin" />
          {copy.loading}
        </div>
      ) : pageError ? (
        <p role="alert" className="rounded-xl bg-amber-50 p-4 text-sm text-amber-900">
          {pageError.message}
        </p>
      ) : !country ? (
        <p role="alert" className="rounded-xl bg-amber-50 p-4 text-sm text-amber-900">
          No active countries are available for subscriptions.
        </p>
      ) : offers.length === 0 ? (
        <p className="rounded-xl border border-stone-200 bg-white p-6 text-center text-stone-600">
          {copy.noPlans}
        </p>
      ) : selectedOffer ? (
        <section aria-labelledby="checkout-title" className="overflow-hidden rounded-xl border border-stone-200 bg-white">
          <div className="flex flex-wrap items-center justify-between gap-5 border-b border-stone-200 px-5 py-5 sm:px-8">
            <div>
              <p className="font-telugu text-xs font-bold uppercase tracking-widest text-brand-crimson">
                <ShieldCheck className="mr-1 inline h-4 w-4" />
                {copy.checkoutEyebrow}
              </p>
              <h2 id="checkout-title" className="mt-1 font-telugu text-2xl font-bold text-stone-900">
                {copy.checkoutTitle}
              </h2>
            </div>
            <ol aria-label="Checkout progress" className="flex items-center gap-2 text-xs font-semibold text-stone-500 sm:gap-3">
              {[copy.cartStep, copy.addressStep, copy.paymentStep].map((step, index) => (
                <li key={step} className="flex items-center gap-2">
                  <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] ${
                    index < 2 ? 'bg-brand-crimson text-white' : 'border border-stone-300 text-stone-500'
                  }`}>
                    {index + 1}
                  </span>
                  <span className={index < 2 ? 'text-brand-crimson' : ''}>{step}</span>
                  {index < 2 && <span aria-hidden="true" className="h-px w-4 bg-stone-300 sm:w-6" />}
                </li>
              ))}
            </ol>
          </div>

          <form onSubmit={startPayment} className="grid gap-5 p-4 sm:p-6 lg:grid-cols-[minmax(0,1.8fr)_minmax(260px,0.9fr)] lg:items-start">
            <section className="rounded-lg border border-stone-200 p-4 sm:p-5" aria-labelledby="delivery-address-title">
              <h3 id="delivery-address-title" className="font-telugu text-lg font-bold text-stone-900">
                {copy.deliveryAddress}
              </h3>
              <p className="mt-1 font-telugu text-sm text-stone-500">{copy.addressPrompt}</p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <label className="grid gap-1 text-xs font-medium text-stone-700">
                  {copy.name}
                  <input name="fullName" autoComplete="name" required className="h-10 rounded-md border border-stone-300 bg-stone-50 px-3 text-sm focus:border-brand-crimson focus:outline-none focus:ring-1 focus:ring-brand-crimson" />
                </label>
                <label className="grid gap-1 text-xs font-medium text-stone-700">
                  {copy.email}
                  <input name="email" type="email" autoComplete="email" required className="h-10 rounded-md border border-stone-300 bg-stone-50 px-3 text-sm focus:border-brand-crimson focus:outline-none focus:ring-1 focus:ring-brand-crimson" />
                </label>
                <label className="grid gap-1 text-xs font-medium text-stone-700 sm:col-span-2">
                  {copy.phone}
                  <input name="phone" type="tel" autoComplete="tel" required className="h-10 rounded-md border border-stone-300 bg-stone-50 px-3 text-sm focus:border-brand-crimson focus:outline-none focus:ring-1 focus:ring-brand-crimson" />
                </label>
                <label className="grid gap-1 text-xs font-medium text-stone-700 sm:col-span-2">
                  {copy.address}
                  <textarea name="address" autoComplete="street-address" rows={2} className="rounded-md border border-stone-300 bg-stone-50 px-3 py-2 text-sm focus:border-brand-crimson focus:outline-none focus:ring-1 focus:ring-brand-crimson" />
                </label>
                <label className="grid gap-1 text-xs font-medium text-stone-700">
                  {copy.city}
                  <input name="city" autoComplete="address-level2" className="h-10 rounded-md border border-stone-300 bg-stone-50 px-3 text-sm focus:border-brand-crimson focus:outline-none focus:ring-1 focus:ring-brand-crimson" />
                </label>
                <label className="grid gap-1 text-xs font-medium text-stone-700">
                  {copy.state}
                  <input name="state" autoComplete="address-level1" className="h-10 rounded-md border border-stone-300 bg-stone-50 px-3 text-sm focus:border-brand-crimson focus:outline-none focus:ring-1 focus:ring-brand-crimson" />
                </label>
                <label className="grid gap-1 text-xs font-medium text-stone-700">
                  {copy.postalCode}
                  <input name="postalCode" autoComplete="postal-code" className="h-10 rounded-md border border-stone-300 bg-stone-50 px-3 text-sm focus:border-brand-crimson focus:outline-none focus:ring-1 focus:ring-brand-crimson" />
                </label>
                <label className="grid gap-1 text-xs font-medium text-stone-700">
                  {copy.checkoutCountry}
                  <input value={getCountryName(country.countrycode)} readOnly className="h-10 rounded-md border border-stone-300 bg-stone-100 px-3 text-sm text-stone-600" />
                </label>
              </div>

              {checkoutError && (
                <p role="alert" className="mt-4 rounded-md bg-red-50 p-3 text-sm text-red-800">
                  {checkoutError}
                </p>
              )}
              <div className="mt-4 border-t border-stone-200 pt-4">
                <div className="mb-3 flex items-center justify-between font-telugu text-sm font-semibold text-stone-800">
                  <span>{copy.amountToPay}</span>
                  <span>{formatPrice(
                    Number(selectedOffer.plan.Price) +
                      (Number(selectedOffer.plan.Courier_Price) > 0
                        ? Number(selectedOffer.plan.Courier_Price)
                        : 0),
                    country,
                  )}</span>
                </div>
                <button
                  type="submit"
                  disabled={isCheckingOut}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-crimson px-4 py-3 font-telugu text-sm font-bold text-white hover:bg-brand-darkRed disabled:cursor-wait disabled:opacity-70"
                >
                  {isCheckingOut ? (
                    <><Loader2 className="h-4 w-4 animate-spin" /> {copy.startingPayment}</>
                  ) : (
                    <>{copy.paySecurely} · {formatPrice(
                      Number(selectedOffer.plan.Price) +
                        (Number(selectedOffer.plan.Courier_Price) > 0
                          ? Number(selectedOffer.plan.Courier_Price)
                          : 0),
                      country,
                    )}<ArrowRight className="h-4 w-4" /></>
                  )}
                </button>
                <p className="mt-3 text-center text-xs text-stone-500">{copy.securePayment}</p>
              </div>
            </section>

            <aside className="rounded-lg border border-stone-200 p-4 sm:p-5" aria-labelledby="order-summary-title">
              <h3 id="order-summary-title" className="font-telugu text-lg font-bold text-stone-900">
                {copy.orderSummary}
              </h3>
              {Number(selectedOffer.plan.Courier_Price) > 0 && (
                <p className="mt-3 rounded-full bg-stone-100 px-3 py-1 text-center text-xs text-stone-600">
                  {copy.deliveryTo} {getCountryName(country.countrycode)}
                </p>
              )}
              <div className="mt-4 border-b border-stone-200 pb-4">
                <p className="font-telugu text-sm font-semibold text-stone-800">{selectedOffer.offer.Title}</p>
                <p className="mt-1 text-xs text-stone-500">{selectedOffer.plan.PlanName}</p>
              </div>
              <dl className="space-y-3 py-4 text-sm">
                <div className="flex items-start justify-between gap-3">
                  <dt className="font-telugu text-stone-600">
                    {selectedOffer.offer.Title} - {selectedOffer.plan.PlanName}
                  </dt>
                  <dd className="shrink-0 font-medium text-stone-800">
                    {formatPrice(Number(selectedOffer.plan.Price), country)}
                  </dd>
                </div>
                {Number(selectedOffer.plan.Courier_Price) > 0 && (
                  <div className="flex items-center justify-between gap-3">
                    <dt className="font-telugu text-stone-600">{copy.courier}</dt>
                    <dd className="shrink-0 font-medium text-stone-800">
                      {formatPrice(Number(selectedOffer.plan.Courier_Price), country)}
                    </dd>
                  </div>
                )}
              </dl>
              <div className="flex items-center justify-between border-t border-stone-200 pt-4 font-telugu font-bold text-stone-900">
                <span>{copy.total}</span>
                <span>{formatPrice(
                  Number(selectedOffer.plan.Price) +
                    (Number(selectedOffer.plan.Courier_Price) > 0
                      ? Number(selectedOffer.plan.Courier_Price)
                      : 0),
                  country,
                )}</span>
              </div>
              <p className="mt-4 text-center text-[11px] text-stone-500">{copy.securePayment}</p>
            </aside>

            <div className="lg:col-span-2">
              <button
                type="button"
                disabled={isCheckingOut}
                onClick={() => setSelectedOffer(null)}
                className="font-telugu text-sm font-semibold text-brand-crimson hover:underline disabled:opacity-50"
              >
                {copy.backToPlans}
              </button>
            </div>
          </form>
        </section>
      ) : (
        <section aria-label="Subscription plans">
          <div className="mb-6 text-center">
            <p className="font-telugu text-sm font-semibold text-brand-crimson">{copy.choosePrompt}</p>
            <h2 className="mt-1 font-telugu text-2xl font-bold text-stone-900 sm:text-3xl">
              {copy.plansHeading}
            </h2>
          </div>
          <div className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
            {offers.map((offer, offerIndex) => {
              const plans = Array.isArray(offer.Plans) ? offer.Plans : []
              const selectedPlan =
                plans.find((item) => item.PlanName === selectedTerms[offerIndex]) || plans[0]
              const popular = offerIndex === 1
              const offerLanguages = languagesQuery.data?.filter((item) => item.active) || []

              return (
                <article
                  key={`${offer.Title}-${offerIndex}`}
                  className={`relative flex flex-col rounded-2xl bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl ${
                    popular
                      ? 'border-2 border-brand-crimson shadow-lg shadow-red-900/10'
                      : 'border border-stone-200 shadow-sm'
                  }`}
                >
                  {popular && (
                    <span className="absolute -top-3 left-5 inline-flex items-center gap-1 rounded-full bg-brand-crimson px-3 py-1 text-xs font-bold text-white">
                      <Sparkles className="h-3.5 w-3.5" /> {copy.bestValue}
                    </span>
                  )}
                  <div className="border-b border-stone-200 pb-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-crimson">
                      {offer.Title.toLowerCase().includes('weekly')
                        ? copy.weekly
                        : offer.Title.toLowerCase().includes('monthly')
                          ? copy.monthly
                          : copy.allAccess}
                    </p>
                    <h3 className="mt-2 font-telugu text-xl font-bold text-stone-900">{offer.Title}</h3>
                  </div>

                  {plans.length > 1 && (
                    <label className="mt-4 grid gap-1 font-telugu text-xs font-semibold text-stone-700">
                      {copy.term}
                      <select
                        value={selectedPlan?.PlanName || ''}
                        onChange={(event) =>
                          setSelectedTerms((current) => ({
                            ...current,
                            [offerIndex]: event.target.value,
                          }))
                        }
                        className="h-10 rounded-md border border-stone-300 bg-white px-3 text-sm"
                      >
                        {plans.map((item) => (
                          <option key={item.PlanName} value={item.PlanName}>
                            {item.PlanName}
                          </option>
                        ))}
                      </select>
                    </label>
                  )}

                  {offerIndex === 2 && offerLanguages.length > 0 && (
                    <label className="mt-3 grid gap-1 font-telugu text-xs font-semibold text-stone-700">
                      {copy.language}
                      <select
                        value={selectedLanguageCode}
                        className="h-10 rounded-md border border-stone-300 bg-white px-3 text-sm"
                        onChange={(event) => setSelectedLanguageCode(event.target.value)}
                      >
                        {offerLanguages.map((item) => (
                          <option key={item.language_id} value={item.code}>
                            {item.description}
                          </option>
                        ))}
                      </select>
                    </label>
                  )}

                  <div className="mt-5">
                    <p className="font-serif text-4xl font-bold text-stone-900">
                      {selectedPlan ? formatPrice(Number(selectedPlan.Price), country) : '—'}
                    </p>
                    <p className="mt-1 text-sm text-stone-500">
                      {selectedPlan?.PlanName}
                      {Number(selectedPlan?.Courier_Price) > 0 &&
                        ` · Courier ${formatPrice(Number(selectedPlan.Courier_Price), country)}`}
                    </p>
                  </div>

                  <ul className="mt-5 flex-1 space-y-3">
                    {copy.features.map((feature) => (
                      <li key={feature} className="flex gap-2 font-telugu text-sm leading-6 text-stone-700">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-brand-crimson" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    disabled={!selectedPlan || !country}
                    onClick={() => chooseOffer(offer, selectedPlan, offerIndex)}
                    className={`mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 font-telugu text-sm font-bold transition disabled:cursor-not-allowed disabled:opacity-50 ${
                      popular
                        ? 'bg-brand-crimson text-white hover:bg-brand-darkRed'
                        : 'border border-brand-crimson text-brand-crimson hover:bg-red-50'
                    }`}
                  >
                    {copy.subscribe} <ArrowRight className="h-4 w-4" />
                  </button>
                </article>
              )
            })}
          </div>
        </section>
      )}

      {languagesQuery.error && (
        <p role="status" className="text-sm text-amber-800">
          భాషల జాబితాను లోడ్ చేయలేకపోయాము: {languagesQuery.error.message}
        </p>
      )}

      {countriesQuery.error && !pageError && (
        <p role="alert" className="rounded-lg bg-amber-50 p-4 text-sm text-amber-900">
          {countriesQuery.error.message}
        </p>
      )}

      {successOrder && (
        <div role="status" className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-900">
          <h2 className="font-telugu text-lg font-bold">{copy.paymentSuccess}</h2>
          <p className="mt-1 text-sm">
            {copy.orderConfirmed} {successOrder} {copy.confirmed}
          </p>
        </div>
      )}

      {!selectedOffer && (
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="font-telugu text-2xl font-bold text-stone-900">{copy.faqTitle}</h2>
          <div className="mt-5 grid gap-6 sm:grid-cols-2">
            {copy.faqs.map(([question, answer]) => (
              <article key={question}>
                <h3 className="font-telugu font-bold text-stone-800">{question}</h3>
                <p className="mt-2 font-telugu text-sm leading-6 text-stone-600">{answer}</p>
              </article>
            ))}
          </div>
        </section>
      )}

    </div>
  )
}
