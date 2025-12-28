'use client';

import { useTranslations } from 'next-intl';

export default function PoliticalPartyTimeline() {
  const t = useTranslations('journey');

  const events = t.raw('events') as {
    year: string;
    title: string;
    description: string;
  }[];

  return (
    <section className="bg-[#fafafa] py-20">
      <div className="mx-auto max-w-5xl px-4">

        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            {t('heading')}
          </h2>
          <p className="mt-2 text-gray-500">
            {t('subheading')}
          </p>
        </div>

        {/* Timeline */}
        <ul className="timeline timeline-vertical timeline-snap-icon">
          {events.map((item, index) => (
            <li key={index}>
              {index !== 0 && <hr />}

              {/* Center dot */}
              <div className="timeline-middle">
                <span className="h-4 w-4 rounded-full bg-blue-600 ring-4 ring-white block" />
              </div>

              {/* Content */}
              <div
                className={`${
                  index % 2 === 0
                    ? 'timeline-start md:text-end'
                    : 'timeline-end'
                } mb-10`}
              >
                <time className="font-semibold text-green-600">
                  {item.year}
                </time>

                <div className="mt-1 text-lg font-bold text-gray-900">
                  {item.title}
                </div>

                <p className="mt-2 max-w-sm text-gray-600">
                  {item.description}
                </p>
              </div>

              <hr />
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
