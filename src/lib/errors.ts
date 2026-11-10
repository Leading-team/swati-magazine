export function isCancellationError(error: unknown): boolean {
  if (!error || typeof error !== 'object') return false

  const candidate = error as { name?: unknown; message?: unknown }
  const normalize = (value: string) => value.toLowerCase().replace(/[^a-z]/g, '')
  const cancellationNames = new Set([
    'aborterror',
    'cancelederror',
    'cancellederror',
  ])
  const name = typeof candidate.name === 'string' ? normalize(candidate.name) : ''
  const message =
    typeof candidate.message === 'string' ? normalize(candidate.message) : ''

  return cancellationNames.has(name) || cancellationNames.has(message)
}
