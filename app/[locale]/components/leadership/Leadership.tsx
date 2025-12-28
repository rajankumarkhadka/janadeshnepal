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
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-sky-600 mb-14">
          {locale === 'np' ? 'हाम्रो केन्द्रीय समिति' : 'Our Central Committee'}
        </h1>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
              <div className="p-5 text-center">
                <h3 
  className="text-lg font-bold text-sky-600 transition-all duration-300 cursor-pointer"
  style={{
    filter: 'none'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.filter = 'drop-shadow(0 0 25px rgba(2,132,199,1)) drop-shadow(0 0 15px rgba(2,132,199,0.8))';
    e.currentTarget.style.color = 'rgb(3 105 161)'; // sky-700
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.filter = 'none';
    e.currentTarget.style.color = 'rgb(2 132 199)'; // sky-600
  }}
>
  {leader.name[locale]}
</h3>


                <p className="text-sm text-gray-600 mt-1">
                  {leader.position[locale]}
                </p>

                <div className="mt-4 text-sm text-gray-700">
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
