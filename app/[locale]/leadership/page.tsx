'use client';
import PageHeader from '../components/layout/PageHeader';
import { useTranslations } from 'next-intl';
import Leadership from '../components/leadership/Leadership';

export default function LeadershipPage() {
  const t = useTranslations('leadership');

  return (
    <div className="bg-[#fafafa]">
      <PageHeader
        title={t('title')}
        subtitle={t('subtitle')}
      />
        <Leadership/>
     
      
    </div>
  );
}
