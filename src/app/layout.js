import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Ahmad Muntaqim — Full Stack Developer',
  description: 'Full Stack Developer berbasis di Indonesia. Spesialis Next.js, React, dan Node.js.',
  keywords: ['portfolio', 'developer', 'fullstack', 'nextjs', 'react', 'indonesia'],
  authors: [{ name: 'Ahmad Muntaqim' }],
  openGraph: {
    title: 'Ahmad Muntaqim — Full Stack Developer',
    description: 'Full Stack Developer berbasis di Indonesia. Spesialis Next.js, React, dan Node.js.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'light';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
