import { createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router'
import { SiteHeader } from '../components/site-header'
import { SiteFooter } from '../components/site-footer'

export const Route = createRootRouteWithContext()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
})

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-warmBg">
      <SiteHeader />

      <main className="mx-auto w-full max-w-7xl flex-grow">
        <Outlet />
      </main>

      <SiteFooter />
    </div>
  )
}

function NotFoundComponent() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-16 text-center">
      <h1 className="font-telugu text-2xl font-bold text-stone-900">ఈ పేజీ అందుబాటులో లేదు</h1>
      <p className="mt-3 text-stone-600">The page you selected could not be found.</p>
      <Link
        to="/"
        className="mt-6 inline-flex rounded-md bg-brand-crimson px-5 py-2 font-telugu text-sm font-bold text-white"
      >
        స్వాతి హోమ్‌కు వెళ్ళండి
      </Link>
    </section>
  )
}