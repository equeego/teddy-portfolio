import Navbar from './(components)/navbar';
import { getMenus } from "@/sanity/sanity-utils";

import '../globals.css';
import { Inter } from 'next/font/google';

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
  const menus = await getMenus();
  const isAdminRoute = false;

  return (
    <html lang="en">
      <body>
        <Navbar menus={menus} />
        <main className={`${inter.className} ${!isAdminRoute ? 'max-w-3xl mx-auto py-20' : ''}`}>{children}</main>
      </body>
    </html>
  )
}
