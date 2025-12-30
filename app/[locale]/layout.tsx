import { NextIntlClientProvider } from "next-intl";
import Navbar from "./components/Navbar";
import { Roboto } from "next/font/google";
import Footer from "./components/footer";

// ✅ Roboto font configuration
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // ✅ Load translations
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body className={roboto.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {/* ✅ Navbar always visible */}
          <Navbar />

          {/* ✅ Page content */}
          <main>{children}</main>
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
