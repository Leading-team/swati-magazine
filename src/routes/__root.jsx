import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'
import { SiteHeader } from '../components/site-header'
import { SiteFooter } from '../components/site-footer'

export const Route = createRootRouteWithContext()({
  component: RootComponent,
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