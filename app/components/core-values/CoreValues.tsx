'use client';

import {
  Scale,
  Sprout,
  Network,
  HeartHandshake,
  Bot,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import Container from '../layout/Container';

const values = [
  { key: 'transparency', icon: Scale, gradient: 'from-blue-500 to-blue-600', bgGradient: 'from-blue-50 to-blue-100' },
  { key: 'green', icon: Sprout, gradient: 'from-green-500 to-emerald-600', bgGradient: 'from-green-50 to-emerald-100' },
  { key: 'infrastructure', icon: Network, gradient: 'from-orange-500 to-amber-600', bgGradient: 'from-orange-50 to-amber-100' },
  { key: 'inclusivity', icon: HeartHandshake, gradient: 'from-purple-500 to-violet-600', bgGradient: 'from-purple-50 to-violet-100' },
  { key: 'digital', icon: Bot, gradient: 'from-teal-500 to-cyan-600', bgGradient: 'from-teal-50 to-cyan-100' }
];

export default function CoreValues() {
  const t = useTranslations('values');

  return (
    <section className="bg-[#fafafa] py-20">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map(({ key, icon: Icon, gradient, bgGradient }) => (
            <div
              key={key}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Background hover effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Icon (ONLY icon scales) */}
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient}
                  transition-transform duration-500 group-hover:scale-110`}
                >
                  <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                </div>

                {/* Text (NO scaling) */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t(`${key}.title`)}
                </h3>

                <p className="text-gray-600 text-base mb-6">
                  {t(`${key}.description`)}
                </p>

                {/* Why it matters */}
                <div className="rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-5 border border-gray-200 group-hover:border-gray-300 transition-colors">
                  <p className="text-sm font-bold text-gray-900 mb-1">
                    {t('why')}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {t(`${key}.why`)}
                  </p>
                </div>

                {/* Bottom accent */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${gradient}
                  scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
