'use client';

import React from 'react';
import { ConnectWallet, ThirdwebProvider } from '@thirdweb-dev/react';
import '@/app/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThirdwebProvider
        clientId={process.env.NEXT_PUBLIC_TW_CLIENT_ID}
        activeChain="polygon"
      >
        <body className="bg-purple-300">
          <div className="flex h-screen">
            <main className="w-full pt-16">
              <div className="flex justify-end pr-6">
                <ConnectWallet />
              </div>
              {children}
            </main>
          </div>
        </body>
      </ThirdwebProvider>
    </html>
  );
}
