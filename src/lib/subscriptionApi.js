const API_BASE_URL =
  import.meta.env.VITE_API_URL?.trim().replace(/\/+$/, '') ||
  'https://swati-webapi-fhhjgcejfxhygre5.centralindia-01.azurewebsites.net/api'

async function request(endpoint, { method = 'GET', body, signal, unwrap = true } = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method,
    headers: {
      Accept: 'application/json',
      ...(body ? { 'Content-Type': 'application/json' } : {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
    signal,
  })

  const payload = await response.json().catch(() => null)
  if (!response.ok) {
    throw new Error(payload?.message || payload?.error || `Request failed (HTTP ${response.status}).`)
  }

  if (payload?.success === false) {
    throw new Error(payload.message || payload.error || 'The request was unsuccessful.')
  }

  return unwrap ? payload?.data ?? payload?.result ?? payload : payload
}

function asArray(payload, label) {
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload?.items)) return payload.items
  throw new Error(`The subscription service returned invalid ${label}.`)
}

export async function getSubscriptionOffers(language = 'te', { signal } = {}) {
  const params = new URLSearchParams({ language })
  return asArray(
    await request(`/subscriptionplan/GetAllSubscriptionPlans?${params}`, { signal }),
    'plans',
  )
}

export async function getSubscriptionCountries({ signal } = {}) {
  return asArray(await request('/master/GetAllCountries', { signal }), 'countries')
}

export async function getSubscriptionLanguages({ signal } = {}) {
  return asArray(await request('/master/GetAllLanguages', { signal }), 'languages')
}

export async function createSubscriptionCheckout(checkoutData) {
  return request('/payment/create-order', { method: 'POST', body: checkoutData })
}

export async function verifySubscriptionPayment(payment) {
  const result = await request('/payment/verify', {
    method: 'POST',
    unwrap: false,
    body: {
      orderId: payment.razorpay_order_id,
      paymentId: payment.razorpay_payment_id,
      signature: payment.razorpay_signature,
    },
  })

  if (result?.success !== true) {
    throw new Error(result?.message || result?.error || 'Payment could not be verified.')
  }

  return result
}
