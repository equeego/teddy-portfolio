import { Inter } from 'next/font/google';

import Navbar from './components/navbar';
import { AppContextProvider } from './context/app';

import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Teddy Portfolio',
  description: 'Ramarotafika Teddy Portfolio',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          <>
            <Navbar />
            <main className={`${inter.className}`}>
              {children}
            </main>
          </>
        </AppContextProvider>
        
      </body>
    </html>
  )
}
