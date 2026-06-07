import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Ahmad Muntaqim — Full Stack Developer',
  description: 'Full Stack Developer berbasis di Serang, Banten. Spesialis Next.js, React, Laravel, dan PostgreSQL.',
  keywords: ['portfolio', 'developer', 'fullstack', 'nextjs', 'react', 'indonesia'],
  authors: [{ name: 'Ahmad Muntaqim' }],
  openGraph: {
    title: 'Ahmad Muntaqim — Full Stack Developer',
    description: 'Full Stack Developer berbasis di Serang, Banten.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
