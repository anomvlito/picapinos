import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const ppEditorialUltralight = localFont({
  src: '../../public/fonts/PPEditorialNew-Ultralight.otf',
  variable: '--font-editorial-ultralight',
  display: 'swap',
});

const ppEditorialUltralightItalic = localFont({
  src: '../../public/fonts/PPEditorialNew-UltralightItalic.otf',
  variable: '--font-editorial-ultralight-italic',
  display: 'swap',
});

const ppEditorialRegular = localFont({
  src: '../../public/fonts/PPEditorialNew-Regular.otf',
  variable: '--font-editorial-regular',
  display: 'swap',
});

const neueMontreal = localFont({
  src: [
    { path: '../../public/fonts/NeueMontreal-Light.otf', weight: '300' },
    { path: '../../public/fonts/NeueMontreal-Regular.otf', weight: '400' },
    { path: '../../public/fonts/NeueMontreal-Medium.otf', weight: '500' },
  ],
  variable: '--font-neue-montreal',
  display: 'swap',
});

const ppModelMono = localFont({
  src: [
    { path: '../../public/fonts/PPModelMono-Book.otf', weight: '400' },
    { path: '../../public/fonts/PPModelMono-Medium.otf', weight: '500' },
    { path: '../../public/fonts/PPModelMono-Bold.otf', weight: '700' },
  ],
  variable: '--font-model-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Picapinos — Mueblería Artesanal',
  description:
    'Taller de mueblería artesanal. Piezas únicas trabajadas a mano con maderas nobles. Diseño, fabricación y entrega a todo Chile.',
  openGraph: {
    title: 'Picapinos — Mueblería Artesanal',
    description: 'Piezas únicas trabajadas a mano con maderas nobles.',
    locale: 'es_CL',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`
        ${ppEditorialUltralight.variable}
        ${ppEditorialUltralightItalic.variable}
        ${ppEditorialRegular.variable}
        ${neueMontreal.variable}
        ${ppModelMono.variable}
      `}
    >
      <body className="font-sans antialiased" style={{ fontFamily: 'var(--font-neue-montreal), sans-serif' }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
