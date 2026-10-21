import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Isteyaque Ahmad Khan | Software Developer',
  description: 'Portfolio of Isteyaque Ahmad Khan — software development, AI-powered applications, and engineering design.',
  metadataBase: new URL('https://iakdev.vercel.app'),
  openGraph: {
    title: 'Isteyaque Ahmad Khan | Software Developer',
    description: 'Software development, AI-powered applications, and engineering design.',
    type: 'website'
  }
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#070811' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
