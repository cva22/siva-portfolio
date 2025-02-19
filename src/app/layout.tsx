import config from '@/lib/config';
import { ReactChildren } from '@/lib/types';
import { Providers } from './providers';
import '@/styles/globals.css';
import type { Metadata } from 'next';

import GoogleAnalytics from './GoogleAnalytics';
import React from 'react';

// eslint-disable-next-line no-unused-vars

export const metadata: Metadata = {
  title: config.siteName,
  description: config.siteDescription,
};

export default function RootLayout({ children }: ReactChildren) {
  return (
    <html lang='en' className='scroll-smooth'>
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
