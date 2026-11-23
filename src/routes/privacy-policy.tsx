import { createFileRoute } from '@tanstack/react-router'
import { LegalDocument } from '../components/legal-document'
import { privacyPolicyContent } from '../data/legal-content'

export const Route = createFileRoute('/privacy-policy')({
  head: () => ({
    meta: [
      { title: 'Privacy Policy — Swati Publications' },
      { name: 'description', content: 'Privacy policy for Swati Magazine.' },
    ],
  }),
  component: () => (
    <LegalDocument title="Privacy Policy" paragraphs={privacyPolicyContent} />
  ),
})
