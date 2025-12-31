'use client';

import PageHeader from '../../components/layout/PageHeader';
import { useTranslations, useLocale } from 'next-intl';
import ManifestoPage from '../../components/manifesto/Manifesto';

export default function Manifesto() {
  const t = useTranslations('manifesto');
  const locale = useLocale(); // ✅ detect current language

  const pdfFile =
    locale === 'ne'
      ? '/files/manifesto-ne.pdf'
      : '/files/manifesto-en.pdf';

  return (
    <div className="bg-[#fafafa]">
      <PageHeader
        title={t('title')}
        subtitle={t('subtitle')}
        action={
          <button
            onClick={() => {
              const link = document.createElement('a');
              link.href = pdfFile; // ✅ language-based PDF
              link.download =
                locale === 'ne'
                  ? 'manifesto-ne.pdf'
                  : 'manifesto-en.pdf';
              link.click();
            }}
            className="relative h-[50px] px-4 overflow-hidden rounded-full
              border border-white/60 bg-transparent text-white
              shadow-2xl transition-all
              before:absolute before:inset-x-0 before:top-0 before:h-0 before:bg-white/30
              before:duration-500 before:z-0
              after:absolute after:inset-x-0 after:bottom-0 after:h-0 after:bg-white/30
              after:duration-500 after:z-0
              hover:before:h-2/4 hover:after:h-2/4"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t('downloadManifesto')}
              <span className="text-xs">⬇</span>
            </span>
          </button>
        }
      />

      <ManifestoPage />
    </div>
  );
}
