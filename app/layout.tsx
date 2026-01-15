import './globals.css';
import ReactQueryProvider from './providers/ReactQueryProvider';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='bg-[#f2f5f6]'>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
