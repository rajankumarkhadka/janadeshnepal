import './globals.css';
import { Roboto, Noto_Sans_Devanagari } from 'next/font/google';

export const metadata = {
  title: 'Janadesh Party Nepal',
  description: 'Official website of Janadesh Party Nepal'
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto'
});

const nepali = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  weight: ['400', '500', '500', '700'],
  variable: '--font-nepali'
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="{`${roboto.variable} ${nepali.variable}`}  ">
        {children}
      </body>
    </html>
  );
}
