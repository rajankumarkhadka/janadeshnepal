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
              link.href = pdfFile; 
              link.download =
                locale === 'ne'
                  ? 'manifesto-ne.pdf'
                  : 'manifesto-en.pdf';
              link.click();
            }}
            className="px-6 py-2 rounded-full border-white/60 border bg-transparent  hover:bg-white/20 text-white font-normal shadow-lg  transition duration-300"

          >
            <span className="relative z-10 flex items-center gap-2">
              {t('downloadManifesto')}
              <span className=""><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-id="element-124"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>                    </span>
            </span>
          </button>
        }
      />

      <ManifestoPage />
    </div>
  );
}
