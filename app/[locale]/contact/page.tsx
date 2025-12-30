'use client';
import ContactSection from '../components/contact/Info';
import Container from '../components/layout/Container';
import PageHeader from '../components/layout/PageHeader';
import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <div className="bg-[#fafafa]">
      <PageHeader
        title={t('title')}
        subtitle={t('subtitle')}
      />
      <Container className="py-12">
        <ContactSection/>
        </Container>
    </div>
  );
}
