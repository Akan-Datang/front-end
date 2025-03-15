import type React from 'react';
import '@/app/globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import type { Metadata } from 'next';

import { ThemeProvider } from '@/components/landingpage/first-layer/theme-provider';
import { ThemeContextProvider } from '@/components/landingpage/first-layer/theme-contex-provider';
import { SiteHeader } from '@/components/site-header';
import { Footer } from '@/components/footer';

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Linea - Web & Security Solutions',
  description: 'Empowering Your Business with Smart Web & Security Solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={plusJakartaSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
          storageKey="linea-theme"
        >
          <ThemeContextProvider>
            <div className="min-h-screen bg-background text-foreground flex flex-col">
              <SiteHeader />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </ThemeContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
