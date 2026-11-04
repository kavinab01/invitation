import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kavin weds Sivakami | Wedding Invitation',
  description: 'With the blessings of our elders, join us to celebrate the wedding and reception of Kavin and Sivakami in Madurai.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
