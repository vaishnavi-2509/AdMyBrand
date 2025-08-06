import './globals.css';
import { ReactNode } from 'react';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-display' });

export const metadata = {
  title: 'ADmyBRAND AI Suite',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}> 
      <body>
        {children}
      </body>
    </html>
  );
}