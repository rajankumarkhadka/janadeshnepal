import './globals.css';
import { Roboto } from 'next/font/google';

export const metadata = {
  title: 'Janadesh Party Nepal',
  description: 'Official website of Janadesh Party Nepal'
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto'
});



export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} `}>
        {children}
      </body>
    </html>
  );
}
