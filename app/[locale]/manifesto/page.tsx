'use client';
import ManifestoPage from '../components/about/Manifesto';
import PageHeader from '../components/layout/PageHeader';
import { useTranslations } from 'next-intl';

export default function Manifesto() {
  const t = useTranslations('manifesto');

  return (
    <div className="bg-[#fafafa]">
      <PageHeader
        title={t('title')}
        subtitle={t('subtitle')}
      />
      <ManifestoPage/>
      
    </div>
  );
}
