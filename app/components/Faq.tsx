'use client';

import React, { useState } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FaqProps {
  faqs: FAQItem[];
  title?: string;
  schemaPageUrl?: string;
  openByDefault?: number | null;
}

export const Faq: React.FC<FaqProps> = ({
  faqs,
  title = 'Frequently Asked Questions',
  schemaPageUrl = typeof window !== 'undefined' ? window.location.href : '',
  openByDefault = null,
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(
    openByDefault
  );

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Generate FAQ Schema Markup (JSON-LD)
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
  };

  return (
    <>
      {/* FAQ Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <section className="faq-section py-5 sm:py-5 md:py-5 px-4 sm:px-6 bg-[#FFF9F2]" style={{ fontFamily: "'Comic Neue', cursive" }}>
        <div className="max-w-6xl mx-auto">
          {/* --- Header --- */}
          <div className="text-center mb-10 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-black text-[#333333] mb-4 md:mb-6 leading-tight">
              {title} <span className="text-[#F26522]">FAQs</span>
            </h2>
            <div className="inline-block bg-[#F26522] text-white px-4 sm:px-6 py-2 rounded-full font-black text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.08em] sm:tracking-wide md:tracking-widest shadow-[3px_3px_0px_#333333] md:shadow-[4px_4px_0px_#333333]">
              Quick Answers. Peace of Mind.
            </div>
          </div>

          <div className="faq-container space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-white transition-colors flex items-center justify-between cursor-pointer"
                aria-expanded={expandedIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg sm:text-xl font-black text-[#333333]">
                  {faq.question}
                </span>
                <svg
                  className={`w-4 h-4 text-gray-600 transition-transform duration-300 ${
                    expandedIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Answer Content */}
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-300">
                  <p className="font-bold text-[#333333]/70 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
