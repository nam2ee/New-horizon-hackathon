import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Web3ModalProvider } from '../context/Web3Modal';
import { IBM_Plex_Mono as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['500'],
});

export const metadata: Metadata = {
  title: 'Helix Protocol',
  description: 'Web3 Project Funding Site With Ripple EVM Sidechain',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        {' '}
        <Web3ModalProvider>{children}</Web3ModalProvider>
      </body>
    </html>
  );
}
