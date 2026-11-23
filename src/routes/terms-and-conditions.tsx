import { createFileRoute } from '@tanstack/react-router'
import { LegalDocument } from '../components/legal-document'
import { termsAndConditionsContent } from '../data/legal-content'

export const Route = createFileRoute('/terms-and-conditions')({
  head: () => ({
    meta: [
      { title: 'Terms and Conditions — Swati Publications' },
      { name: 'description', content: 'Terms and conditions for Swati Magazine.' },
    ],
  }),
  component: () => (
    <LegalDocument title="Terms and Conditions" paragraphs={termsAndConditionsContent} />
  ),
})
