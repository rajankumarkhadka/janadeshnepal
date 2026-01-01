'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter
} from 'lucide-react';
import Container from './layout/Container';

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations('footer');
  const pathname = usePathname();

  const links = [
    { href: '/', key: 'home' },
    { href: '/about', key: 'about' },
    { href: '/core-values', key: 'coreValues' },
    { href: '/manifesto', key: 'manifesto' },
    { href: '/policies', key: 'policies' },
    { href: '/leadership', key: 'leadership' },
    { href: '/register', key: 'join' },
    { href: '/news', key: 'news' },
    { href: '/contact', key: 'contact' }
  ];

  return (
    <footer className="w-full bg-[#fafafa] border-t border-gray-200">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-40 gap-10  justify-between py-12 lg:text-center md:text-left">

          {/* LOGO */}
          <div className=" relative w-auto h-[200px]">
            <Image
              src="/assets/logo_janadesh.png"
              alt="Janadesh Party Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

            <div className="flex flex-col  space-y-2">
              <h2 className="text-lg font-bold text-[#144a7b]">
                    {t('quickLinks')}
              </h2>

              {links.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  locale={locale}
                  className={`text-base text-[#144a7b] hover:text-green-600 ${
                    pathname === link.href ? 'font-bold' : ''
                  }`}
                >
                  {t(link.key)}
                </Link>
              ))}
            </div>

            {/* DONATE */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-[#144a7b]">
                {t('donate')}
              </h2>
              <div className="relative h-[150px] w-[150px] mx-auto md:mx-0">
                <Image
                  src="/assets/qrcode.png"
                  alt="Donate QR Code"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="space-y-3 text-center items-center text-[#144a7b]">
                  <h2 className="text-lg font-bold text-start text-[#144a7b]">
                {t('connect')}
              </h2>
              <a
                href="https://www.facebook.com/janadeshparty"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-600"
              >
                <Facebook size={16} /> Facebook
              </a>

              <a
                href="https://www.instagram.com/janadeshparty"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-600"
              >
                <Instagram size={16} /> Instagram
              </a>

              <a
                href="https://www.youtube.com/@janadeshparty"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-600"
              >
                <Youtube size={16} /> YouTube
              </a>

              <a
                href="https://twitter.com/janadeshparty"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-600"
              >
                <Twitter size={16} /> Twitter
              </a>
            </div>
        </div>
         
      </Container>
      <div className="flex justify-center py-6 border-y text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Janadesh Party. All rights reserved.
            </div>
    </footer>
  );
}
