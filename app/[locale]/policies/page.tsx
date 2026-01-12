'use client';

import PageHeader from '../../components/layout/PageHeader';
import Container from '../../components/layout/Container';
import { useTranslations, useLocale } from 'next-intl';
import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { usePolicies } from '@/hooks/usePolicies';

export default function Policies() {
  const t = useTranslations('policies');
  const locale = useLocale() as 'en' | 'np';

  const { data, isLoading, isError } = usePolicies();

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [search, setSearch] = useState('');

  const policies = data?.results ?? [];

  const categories = useMemo(() => {
    const cats = policies.map((p: any) => p.category);
    return ['all', ...Array.from(new Set(cats))];
  }, [policies]);

  const filteredPolicies = useMemo(() => {
    return policies.filter((policy: any) => {
      const matchCategory =
        activeCategory === 'all' || policy.category === activeCategory;

      const title =
        locale === 'np' ? policy.title_ne : policy.title;

      const description =
        locale === 'np'
          ? policy.description_ne
          : policy.description;

      const matchSearch =
        title?.toLowerCase().includes(search.toLowerCase()) ||
        description?.toLowerCase().includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [policies, activeCategory, search, locale]);

  if (isLoading) {
    return <p className="text-center py-20">Loading...</p>;
  }

  if (isError) {
    return <p className="text-center py-20">Error loading policies</p>;
  }

  return (
    <section className="bg-[#fafafa]">
      <PageHeader title={t('title')} subtitle={t('subtitle')} />

      <Container className="py-14">
        <div className="flex items-center gap-4 mb-12">
          <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={String(cat)}
                onClick={() => setActiveCategory(String(cat))}
                className={`
                  px-6 py-2 rounded-full text-white transition-all
                  ${
                    activeCategory === cat
                      ? 'bg-[#2772b0] scale-105'
                      : 'bg-gray-400 hover:bg-[#2772b0]'
                  }
                `}
              >
                {String(cat) === 'all'
                  ? locale === 'np'
                    ? 'सबै'
                    : 'All'
                  : String(cat)}
              </button>
            ))}
          </div>

          <div className="relative w-32 sm:w-56">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white"
            />
            <input
              type="text"
              placeholder={t('search')}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full pl-10 pr-4 py-2 rounded-full
                bg-[#2772b0] text-white
                placeholder:text-white/70
                focus:outline-none
              "
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPolicies.map((policy: any) => (
            <div
              key={policy.id}
              className="rounded-2xl border border-gray-300 p-6 bg-white
                flex flex-col gap-4 justify-between"
            >
              <div>
                <span className="inline-block px-4 py-1 mb-4 text-sm text-white rounded-md bg-[#2772b0]">
                  {policy.category}
                </span>

                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  {locale === 'np'
                    ? policy.title_ne
                    : policy.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {locale === 'np'
                    ? policy.description_ne
                    : policy.description}
                </p>
              </div>

              <button className="px-6 py-2 rounded-full border border-gray-200 text-green-500">
                {t('readMore')} →
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
