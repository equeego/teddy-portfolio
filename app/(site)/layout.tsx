import { getSEO } from "@/sanity/sanity-utils";
import Navbar from "./components/Navbar";
import { Poppins } from "@next/font/google";

import { AppContextProvider } from "./context/app";

import "../globals.css";

const poppins = Poppins({ weight: ["200", "300", "400", "700"], subsets: ["latin"] });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const SEO = await getSEO();
  return (
    <html lang="en">
      <body className="bg-[#fbfbfb] text-base">
        <AppContextProvider>
          <>
            <Navbar SEO={SEO} />
            <main className={`${poppins.className}`}>{children}</main>
          </>
        </AppContextProvider>
      </body>
    </html>
  );
}
