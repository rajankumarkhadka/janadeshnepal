'use client';

import Image from 'next/image';
import { useLocale } from 'next-intl';
import Container from '../layout/Container';
import { leadership } from '@/data/leadership';

export default function LeadershipPage() {
  const locale = useLocale() as 'np' | 'en';

  return (
    <section className="bg-white py-20">
      <Container>

        {/* PAGE TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-sky-600 mb-14">
          {locale === 'np' ? 'हाम्रो केन्द्रीय समिति' : 'Our Central Committee'}
        </h1>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.map((leader) => (
            <div
              key={leader.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-200"
            >
              {/* IMAGE */}
              <div className="relative w-full h-[320px] bg-sky-600">
                <Image
                  src={leader.image}
                  alt={leader.name[locale]}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* CONTENT */}
              <div className="text-center">
 
  <div className="before:ease relative py-3 overflow-hidden border-b border-gray-200 text-blue-500  transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-blue-500 before:duration-700 hover:text-white hover:shadow-blue-500 hover:before:h-64 hover:before:-translate-y-32">
      <span className="relative z-10">{leader.name[locale]}</span>
    </div>

                <p className="text-sm font-semibold text-gray-600 mt-2">
                  {leader.position[locale]}
                </p>

                <div className="py-3 font-semibold text-sm text-gray-700">
                  {leader.phone}
                </div>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
