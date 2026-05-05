import type { FAQItem } from './Faq'

interface FaqSchemaProps {
  faqs: FAQItem[]
}

export const FaqSchema: React.FC<FaqSchemaProps> = ({ faqs }) => {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
    />
  )
}

export default FaqSchema
