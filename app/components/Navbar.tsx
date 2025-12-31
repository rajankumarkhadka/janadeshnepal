'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import LanguageSwitcher from '../components/LanguageSwitcher';
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Menu,
  X
} from 'lucide-react';
import Container from './layout/Container';

export default function Navbar() {
  const locale = useLocale();
  const t = useTranslations('navbar');
  const pathname = usePathname();
  const cleanPathname = pathname.replace(`/${locale}`, '') || '/';
  const [open, setOpen] = useState(false);

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
    <header className="w-full bg-[#fafafa] fixed top-0 left-0 z-50">
      <Container>
        <div className="flex items-center py-3">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/logo_janadesh.png"
              alt="Janadesh Party Nepal"
              width={80}
              height={80}
              className="h-[110px] w-[145px] object-cover"
            />
          </div>

          {/* DESKTOP NAV ( > 900px ) */}
          <div className="hidden min-[901px]:flex flex-1 justify-end">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>info@janadeshnepal.org</span>

                <div className="flex items-center gap-4">
                  <Facebook size={16} />
                  <Instagram size={16} />
                  <Youtube size={16} />
                  <Twitter size={16} />
                  <LanguageSwitcher currentLocale={locale as 'en' | 'np'} />
                </div>
              </div>

              <hr className="bg-gray-300" />

              <nav
                className={`flex gap-6 font-medium transition duration-200
                  ${
                    locale === 'np'
                      ? 'text-[18px]'
                      : 'text-[16.2px] font-normal'
                  }
                `}
              >
                {links.map(({ href, key }) => (
                  <Link
                    key={key}
                    href={href}
                    locale={locale}
                    className={`transition hover:text-green-600
                      ${
                        cleanPathname === href
                          ? 'text-green-600'
                          : 'text-gray-600'
                      }
                    `}
                  >
                    {t(key)}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* MOBILE MENU BUTTON ( ≤ 900px ) */}
          <button
            className="ml-auto max-[900px]:block hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU ( ≤ 900px ) */}
        {open && (
          <div className="max-[900px]:block hidden bg-white border-t py-6">
            <nav className="flex flex-col gap-4 text-center">
              {links.map(({ href, key }) => (
                <Link
                  key={key}
                  href={href}
                  locale={locale}
                  onClick={() => setOpen(false)}
                  className={`text-lg transition
                    ${
                      cleanPathname === href
                        ? 'text-green-600 font-semibold'
                        : 'text-gray-700'
                    }
                  `}
                >
                  {t(key)}
                </Link>
              ))}
            </nav>

            <div className="flex justify-center gap-4 pt-6">
              <Facebook size={18} />
              <Instagram size={18} />
              <Youtube size={18} />
              <Twitter size={18} />
              <LanguageSwitcher currentLocale={locale as 'en' | 'np'} />
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
