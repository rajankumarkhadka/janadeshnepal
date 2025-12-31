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
    <header className="fixed top-0 left-0 z-50 w-full bg-[#fafafa]">
      <Container>
        <div className="flex items-center py-3">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/assets/logo_janadesh.png"
              alt="Janadesh Party Nepal"
              width={80}
              height={80}
              className="h-[110px] w-[145px] object-cover"
            />
          </Link>

          {/* DESKTOP NAV (> 900px) */}
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
                      ? 'text-[18px] leading-normal'
                      : 'text-[16.2px] leading-normal font-normal'
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

          {/* MOBILE MENU BUTTON (≤ 900px) */}
          <button
            className="ml-auto max-[900px]:block hidden text-gray-800"
            onClick={() => setOpen(true)}
          >
            <Menu className='' size={28} />
          </button>
        </div>
      </Container>

      {/* MOBILE RIGHT DRAWER (≤ 900px) */}
      <div
        className={`fixed inset-0 z-50 max-[900px]:block hidden
          transition-opacity duration-300
          ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 h-full w-[400px] bg-white shadow-xl p-6 overflow-y-auto
            transform transition-transform duration-300 ease-in-out
            ${open ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <div className="flex justify-end text-gray-800 mb-6">
            <button onClick={() => setOpen(false)}>
              <X size={26} />
            </button>
          </div>

          <nav className="flex flex-col gap-5">
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
                      : 'text-gray-700 hover:text-green-600'
                  }
                `}
              >
                {t(key)}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4 mt-8">
            <Facebook size={18} />
            <Instagram size={18} />
            <Youtube size={18} />
            <Twitter size={18} />
            <LanguageSwitcher currentLocale={locale as 'en' | 'np'} />
          </div>
        </div>
      </div>
    </header>
  );
}
