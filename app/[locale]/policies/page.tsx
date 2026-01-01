'use client';

import PageHeader from '../../components/layout/PageHeader';
import Container from '../../components/layout/Container';
import { useTranslations } from 'next-intl';
import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';

type Category =
  | 'all'
  | 'technology'
  | 'environment'
  | 'economy'
  | 'health'
  | 'education'
  | 'agriculture';

interface Policy {
  id: number;
  title: string;
  description: string;
  category: Category;
}

const categories: Category[] = [
  'all',
  'technology',
  'environment',
  'economy',
  'health',
  'education',
  'agriculture'
];

const policies: Policy[] = [
  {
    id: 1,
    title: 'Digital Governance',
    description: 'Building transparent and digital public services.',
    category: 'technology'
  },
  {
    id: 2,
    title: 'Green Nepal',
    description: 'Protecting forests and promoting sustainability.',
    category: 'environment'
  },
  {
    id: 3,
    title: 'Economic Growth',
    description: 'Supporting entrepreneurship and job creation.',
    category: 'economy'
  },
  {
    id: 4,
    title: 'Universal Healthcare',
    description: 'Affordable and accessible healthcare for all.',
    category: 'health'
  },
  {
    id: 5,
    title: 'Quality Education',
    description: 'Modern education aligned with future skills.',
    category: 'education'
  },
  {
    id: 6,
    title: 'Smart Agriculture',
    description: 'Empowering farmers with technology.',
    category: 'agriculture'
  }
];

const badgeColors: Record<Category, string> = {
  all: 'bg-gray-400',
  technology: 'bg-blue-500',
  environment: 'bg-green-500',
  economy: 'bg-orange-500',
  health: 'bg-pink-500',
  education: 'bg-purple-500',
  agriculture: 'bg-lime-500'
};

export default function Policies() {
  const t = useTranslations('policies');
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [search, setSearch] = useState('');

  const filteredPolicies = useMemo(() => {
    return policies.filter((policy) => {
      const matchCategory =
        activeCategory === 'all' || policy.category === activeCategory;

      const matchSearch =
        policy.title.toLowerCase().includes(search.toLowerCase()) ||
        policy.description.toLowerCase().includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [activeCategory, search]);

  return (
    <section className="bg-[#fafafa]">
      {/* PAGE HEADER */}
      <PageHeader
        title={t('title')}
        subtitle={t('subtitle')}
      />

      <Container className="py-14">

        {/* SECTION TITLE */}
       

        {/* FILTER + SEARCH */}
      <div className="flex flex-wrap items-center gap-4 mb-12">
  {categories.map((cat) => {
    const isActive = activeCategory === cat;

    return (
      <button
        key={cat}
        onClick={() => setActiveCategory(cat)}
        className={`
          px-6 py-2 rounded-full border border-white/60
          text-white font-normal shadow-lg
          transition-all duration-300
          ${
            isActive
              ? "bg-[#2772b0] scale-105"
              : "bg-gray-400 hover:bg-[#2772b0]"
          }
        `}
      >
        <span className="relative z-10 flex items-center gap-2">
          {t(`categories.${cat}`)}
        </span>
      </button>
    );
  })}

  {/* SEARCH */}
  <div className="ml-auto relative w-full sm:w-64">
    <Search
      size={18}
      className="absolute left-3 top-1/2 -translate-y-1/2 text-white"
    />
    <input
      type="text"
      placeholder={t("search")}
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="
        w-full pl-10 pr-4 py-2 rounded-full
        border border-gray-300
        bg-[#2772b0] text-white
        placeholder:text-white/70
        focus:outline-none
      "
    />
  </div>
</div>

        {/* POLICY CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPolicies.map((policy) => (
            <div
              key={policy.id}
              className="rounded-2xl border border-gray-300 p-6 bg-white
                flex flex-col gap-4 hover:shadow-md justify-between transition-all duration-300
                 "
            >
              <div>
                <span
                  className={`inline-block px-4 py-1 mb-4 text-sm text-white rounded-md
                    ${badgeColors[policy.category]}`}
                >
                  {t(`categories.${policy.category}`)}
                </span>

                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  {policy.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {policy.description}
                </p>
              </div>

              <button
               onClick={() => {
    const link = document.createElement('a');
    link.href = '/files/policy-technology.pdf'; // path inside /public
    link.download = 'policy-technology.pdf';
    link.click();
               }}
                className="px-6 py-2 rounded-full border border-gray-100
          text-green-500 max-w-max font-normal 
          transition-all duration-300 bg-white hover:bg-gray-100 "
>
  <span className="relative z-10 flex items-center gap-2">
                {t('readMore')} →
  </span>
              
              </button>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
