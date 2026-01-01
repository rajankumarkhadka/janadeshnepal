'use client';
import MissionVision from '../../components/about/MissionVision';
import PoliticalPartyTimeline from '../../components/about/PoliticalParty';
import PageHeader from '../../components/layout/PageHeader';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  return (
    <div className="bg-white">
      <PageHeader
        title={t('title')}
        subtitle={t('subtitle')}
      />
      <MissionVision/>
      <PoliticalPartyTimeline/>

      
    </div>
  );
}
