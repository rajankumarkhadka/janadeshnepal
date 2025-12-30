'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from '../LanguageSwitcher';
import {
    Facebook,
    Instagram,
    Youtube,
    Twitter
} from 'lucide-react';
import { useLocale } from "next-intl";
import Container from './layout/Container';

export default function Navbar() {
    const locale = useLocale();
    const t = useTranslations('navbar');
    const pathname = usePathname();
const cleanPathname = pathname.replace(`/${locale}`, '') || '/';

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
        <header className="w-full bg-[#fafafa] fixed top-0 left-0 z-50 shadow">
            <Container>
            

                {/* 🔹 MAIN NAV */}
                <div className="flex items-center justify-between  py-4">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <Image
                            src="/assets/logo_janadesh.png"
                            alt="Janadesh Party Nepal"
                            width={80}
                            height={80}
                            className="h-[110px] w-[180px] object-contain"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between py-2 text-sm text-gray-600">
                            <span>info@janadeshnepal.org</span>

                            <div className="flex items-center gap-4">
                                <Facebook size={16} />
                                <Instagram size={16} />
                                <Youtube size={16} />
                                <Twitter size={16} />
                                <LanguageSwitcher currentLocale={locale as 'en' | 'np'} />
                            </div>
                        </div>

                        <span className='bg-gray-300 h-[1.3px] rounded ' ></span>
                        {/* Links */}
                <nav
  className={`flex gap-6 font-bold transition duration-1000 pb-2
    ${locale === 'np'
      ? 'text-[18px] leading-relaxed'
      : 'text-base leading-normal'
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
            ? 'text-green-600  pb-2 '
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
            </Container>
        </header>
    );
}
