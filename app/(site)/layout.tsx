import { Inter } from 'next/font/google';
import { getSEO } from '@/sanity/sanity-utils';
import Navbar from './components/Navbar';
import { AppContextProvider } from './context/app';

import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const SEO = await getSEO();
  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          <>
            <Navbar SEO={SEO} />
            <main className={`${inter.className}`}>{children}</main>
          </>
        </AppContextProvider>
      </body>
    </html>
  );
}
