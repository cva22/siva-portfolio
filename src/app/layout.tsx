import config from '@/lib/config';
import { ReactChildren } from '@/lib/types';
import { Providers } from './providers';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import GoogleAnalytics from './GoogleAnalytics';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: config.siteName,
  description: config.siteDescription,
};

export default function RootLayout({ children }: ReactChildren) {
  return (
    <html lang='en' class='scroll-smooth'>
      <body className="scrollbar-thin bg-neutrals-900 text-neutrals-50 antialiased selection:bg-primary selection:text-neutrals-50">
        <GoogleAnalytics />
        <main>
          <Providers>
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}
