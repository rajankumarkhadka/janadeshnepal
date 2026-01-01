'use client';
import PageHeader from '../../components/layout/PageHeader';
import { useLocale, useTranslations } from 'next-intl';
import FeaturedNews from '../../components/news/FeaturedNews';
import { newsEn } from '@/data/news/en';
import { newsNp } from '@/data/news/np';
import NewsGrid from '../../components/news/NewsGrid';
import Container from '../../components/layout/Container';

export default function News() {
  const t = useTranslations('news');
  const locale = useLocale();
  const data = locale === 'np' ? newsNp : newsEn;
  return (
    <div className="bg-white">
      <PageHeader
        title={t('title')}
        subtitle={t('subtitle')}
      />
           <Container>
    <FeaturedNews data={data.featured} />
        <NewsGrid news={data.list} />
      </Container>
    </div>
  );
}
