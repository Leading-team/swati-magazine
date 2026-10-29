import { useQuery } from '@tanstack/react-query'
import { Link, useRouterState } from '@tanstack/react-router'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '../lib/language'
import { getAllMenus } from '../lib/menus'
import brandImage from '../assets/header-brand.jpg'
import wordmarkImage from '../assets/header-wordmark.jpg'

type MenuItem = {
  id: number | string
  label: string
  to: string
}

const defaultMenus = [
  { id: 1, label: 'మన స్వాతి', to: '/' },
  { id: 2, label: 'సంచికలు', to: '/editions' },
  { id: 3, label: 'స్వాతి ప్రత్యేకం', to: '/special' },
  { id: 4, label: 'మా స్ఫూర్తి/సృష్టికర్తలు', to: '/inspirations' },
  { id: 5, label: 'మా 43 ఏళ్ల ప్రయాణం', to: '/journey' },
  { id: 6, label: 'సబ్‌స్క్రిప్షన్', to: '/subscription' },
  { id: 7, label: 'సంప్రదించండి', to: '/contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const {
    data: fetchedMenus,
    isError,
    error,
  } = useQuery<MenuItem[]>({
    queryKey: ['menus', language],
    queryFn: () => getAllMenus({ language }),
    retry: false,
    staleTime: 5 * 60 * 1000,
  })
  const menus = fetchedMenus?.length ? fetchedMenus : defaultMenus
  const formattedDate = new Intl.DateTimeFormat(language === 'te' ? 'te-IN' : 'en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date())
  const pathname = useRouterState({ select: (state) => state.location.pathname })
  const activeMenuId = menus.find((item) => {
    if (/^https?:\/\//i.test(item.to)) return false
    const itemPath = item.to.replace(/\/+$/, '') || '/'
    return pathname === itemPath || (itemPath !== '/' && pathname.startsWith(`${itemPath}/`))
  })?.id

  function renderMenuLink(item: MenuItem, mobile = false) {
    const active = item.id === activeMenuId
    const external = /^https?:\/\//i.test(item.to)

    const className = mobile
      ? `relative inline-block w-fit px-2 py-2 text-base font-medium transition-colors ${
          active
            ? 'text-red-700 after:absolute after:inset-x-2 after:bottom-1 after:h-0.5 after:bg-red-700'
            : 'text-stone-800 hover:text-red-700'
        }`
      : `flex-1 border-r border-stone-200 px-2 text-center text-base font-medium leading-6 transition-colors last:border-r-0 ${
          active ? 'text-red-700' : 'text-stone-900 hover:text-red-700'
        }`
    const content = mobile ? (
      item.label
    ) : (
      <span
        className={
          active
            ? 'relative inline-block pb-1 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-red-700'
            : 'inline-block'
        }
      >
        {item.label}
      </span>
    )
    const onClick = () => mobile && setOpen(false)

    return external ? (
      <a
        key={item.id}
        href={item.to}
        target="_blank"
        rel="noreferrer"
        aria-current={active ? 'page' : undefined}
        onClick={onClick}
        className={className}
      >
        {content}
      </a>
    ) : (
      <Link
        key={item.id}
        to={item.to}
        preload="intent"
        aria-current={active ? 'page' : undefined}
        onClick={onClick}
        className={className}
      >
        {content}
      </Link>
    )
  }

  return (
    <header className="sticky top-0 z-40 bg-brand-crimson text-white shadow-sm">
      <div className="border-b border-white/15">
        <div
          className="site-header-banner mx-auto grid max-w-7xl items-center px-5 py-3 sm:py-4"
          style={{
            backgroundImage: `url(${brandImage})`,
            minHeight: 'clamp(72px, 8vw, 112px)',
          }}
        >
          <div className="flex -translate-y-1 flex-col items-center justify-self-end">
            <a href="/" className="block" aria-label="Swati Publications home">
              <img
                src={wordmarkImage}
                alt="Swati Publications"
                className="h-auto max-h-12 w-36 object-contain sm:max-h-14 sm:w-48"
              />
            </a>
            <p className="mt-2 w-36 text-center text-[10px] font-medium leading-tight text-white sm:w-48 sm:text-xs">
              {formattedDate}
            </p>
          </div>
        </div>
      </div>

      <div className="border-b border-stone-200 bg-white text-stone-900">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-5 py-2.5">
          <nav aria-label="Main navigation" className="hidden min-w-0 flex-1 items-center md:flex">
            {menus.map((item) => renderMenuLink(item))}
          </nav>

          <select
            aria-label="Select language"
            value={language}
            onChange={(event) => {
              if (event.target.value === 'te' || event.target.value === 'en') {
                setLanguage(event.target.value)
              }
            }}
            className="ml-auto shrink-0 border border-stone-300 bg-white px-2 py-1 text-xs text-stone-800"
          >
            <option value="te">తెలుగు</option>
            <option value="en">English</option>
          </select>

          <button
            type="button"
            className="text-stone-700 transition-colors hover:text-brand-crimson md:hidden"
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((isOpen) => !isOpen)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-navigation" className="border-b border-stone-200 bg-white md:hidden">
          <nav aria-label="Mobile navigation" className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-3">
            {menus.map((item) => renderMenuLink(item, true))}
          </nav>
        </div>
      )}

      {/* {isError && (
        <p role="status" className="bg-amber-50 px-5 py-2 text-center text-xs text-amber-900">
          Navigation menus could not be loaded. Showing default links. {error.message}
        </p>
      )} */}
    </header>
  )
}
