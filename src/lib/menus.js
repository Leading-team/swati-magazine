const API_BASE_URL =
  import.meta.env.VITE_API_URL?.trim().replace(/\/+$/, '') ||
  'https://swati-webapi-fhhjgcejfxhygre5.centralindia-01.azurewebsites.net/api'

function extractMenus(payload) {
  if (Array.isArray(payload)) return payload

  for (const key of ['data', 'result', 'items']) {
    if (Array.isArray(payload?.[key])) return payload[key]
  }

  throw new Error('The menu service returned an unexpected response.')
}

export async function getAllMenus({ language = 'te', signal } = {}) {
  const url = new URL(`${API_BASE_URL}/menulist/GetAllMenus`)
  url.searchParams.set('language', language)

  const response = await fetch(url, {
    method: 'GET',
    headers: { Accept: 'application/json' },
    signal,
  })

  if (!response.ok) {
    throw new Error(`Unable to load navigation menus (HTTP ${response.status}).`)
  }

  const menus = extractMenus(await response.json())

  return menus
    .filter(
      (menu) =>
        menu &&
        menu.active !== false &&
        (!menu.language || String(menu.language).trim().toLowerCase() === language),
    )
    .map((menu, index) => {
      const routeValue = menu.route_name ?? menu.routeName ?? '/'
      const route =
        typeof routeValue === 'string'
          ? routeValue.startsWith('/') || /^https?:\/\//i.test(routeValue)
            ? routeValue
            : `/${routeValue}`
          : '/'

      return {
        id: menu.menu_id ?? menu.menuId ?? index,
        label: String(menu.menu_name ?? menu.menuName ?? `Menu ${index + 1}`),
        to: route.toLowerCase() === '/home' ? '/' : route,
      }
    })
}

function extractMenuSections(payload) {
  let result = payload

  while (result && !Array.isArray(result)) {
    if (Array.isArray(result.sections)) return [result]

    const nestedResult = result.data ?? result.result ?? result.items
    if (!nestedResult || nestedResult === result) break
    result = nestedResult
  }

  if (Array.isArray(result)) return result

  throw new Error('The menu sections service returned an unexpected response.')
}

export async function getMenuSectionsById(menuId = 1, { signal } = {}) {
  const url = new URL(`${API_BASE_URL}/MenuSection/GetMenuSectionsById`)
  url.searchParams.set('menuId', String(menuId))

  const response = await fetch(url, {
    method: 'GET',
    headers: { Accept: 'application/json' },
    signal,
  })

  if (!response.ok) {
    throw new Error(`Unable to load homepage sections (HTTP ${response.status}).`)
  }

  return extractMenuSections(await response.json())
}
