'use client';

import { useLocale } from 'next-intl';
import Container from '../layout/Container';

export default function ManifestoPage() {
  const locale = useLocale() as 'en' | 'np';

  return (
    <section className="bg-white py-20">
      <Container>

        {/* HEADER */}
        <header className="max-w-3xl mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
            {locale === 'en' ? 'Party Manifesto' : 'पार्टी घोषणापत्र'}
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            {locale === 'en'
              ? 'This manifesto is a solemn commitment to the people of Nepal — a roadmap for justice, prosperity, and democratic renewal.'
              : 'यो घोषणापत्र नेपाली जनताप्रति गरिएको गम्भीर प्रतिबद्धता हो — न्याय, समृद्धि र लोकतान्त्रिक पुनर्जागरणको मार्गचित्र।'}
          </p>
        </header>

        {/* VISION */}
        <section className="max-w-3xl mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {locale === 'en' ? 'Our Vision' : 'हाम्रो दृष्टिकोण'}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {locale === 'en'
              ? 'We envision a Nepal governed by transparency, strengthened by inclusive development, empowered by technology, and rooted in social justice.'
              : 'हामी पारदर्शितामार्फत सञ्चालित, समावेशी विकासद्वारा सशक्त, प्रविधिद्वारा सक्षम र सामाजिक न्यायमा आधारित नेपालको कल्पना गर्छौं।'}
          </p>
        </section>

        {/* CORE COMMITMENTS */}
        <section className="max-w-3xl mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {locale === 'en' ? 'Core Commitments' : 'मुख्य प्रतिबद्धता'}
          </h2>

          <ol className="space-y-6 list-decimal list-inside text-gray-800">
            <li>
              <strong>
                {locale === 'en' ? 'Transparent Governance' : 'पारदर्शी शासन'}
              </strong>
              <p className="mt-1 text-gray-700">
                {locale === 'en'
                  ? 'Every public decision, budget, and policy will be open to citizens.'
                  : 'हरेक सार्वजनिक निर्णय, बजेट र नीति जनतासामु खुला हुनेछ।'}
              </p>
            </li>

            <li>
              <strong>
                {locale === 'en' ? 'Inclusive Development' : 'समावेशी विकास'}
              </strong>
              <p className="mt-1 text-gray-700">
                {locale === 'en'
                  ? 'No community will be left behind in national progress.'
                  : 'राष्ट्रिय प्रगतिमा कुनै पनि समुदाय पछाडि पारिने छैन।'}
              </p>
            </li>

            <li>
              <strong>
                {locale === 'en' ? 'Economic Justice' : 'आर्थिक न्याय'}
              </strong>
              <p className="mt-1 text-gray-700">
                {locale === 'en'
                  ? 'Fair opportunities, dignified employment, and support for farmers and workers.'
                  : 'समान अवसर, सम्मानजनक रोजगारी र किसान तथा श्रमिकको संरक्षण।'}
              </p>
            </li>

            <li>
              <strong>
                {locale === 'en' ? 'Digital State' : 'डिजिटल राज्य'}
              </strong>
              <p className="mt-1 text-gray-700">
                {locale === 'en'
                  ? 'Technology-driven governance to eliminate corruption and inefficiency.'
                  : 'भ्रष्टाचार र अकुशलता अन्त्य गर्न प्रविधिमा आधारित शासन।'}
              </p>
            </li>
          </ol>
        </section>

        {/* CLOSING */}
        <section className="max-w-3xl border-t pt-10">
          <p className="text-gray-800 font-medium">
            {locale === 'en'
              ? 'This manifesto is not a promise for power — it is a promise for service.'
              : 'यो घोषणापत्र सत्ता प्राप्तिको वाचा होइन — जनसेवाको वाचा हो।'}
          </p>
        </section>

      </Container>
    </section>
  );
}
