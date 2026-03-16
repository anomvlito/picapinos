import Link from 'next/link';
import { waLink } from '@/lib/utils';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-end pt-16"
      style={{ backgroundColor: 'var(--color-accent)' }}
    >
      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p
            className="text-xs tracking-widest uppercase mb-8 opacity-60"
            style={{ fontFamily: 'var(--font-model-mono)', color: '#F5F2ED' }}
          >
            Taller de Mueblería Artesanal — Chile
          </p>

          {/* Headline */}
          <h1
            className="text-6xl md:text-8xl lg:text-9xl leading-none mb-12"
            style={{ fontFamily: 'var(--font-editorial-ultralight)', color: '#F5F2ED' }}
          >
            Muebles que{' '}
            <em
              className="not-italic"
              style={{ fontFamily: 'var(--font-editorial-ultralight-italic)', color: '#E0D8CE' }}
            >
              duran
            </em>
            <br />
            toda la vida.
          </h1>

          {/* Subtítulo */}
          <p
            className="text-base md:text-lg max-w-md leading-relaxed mb-10 opacity-70"
            style={{ fontFamily: 'var(--font-neue-montreal)', color: '#F5F2ED' }}
          >
            Cada pieza fabricada a mano con maderas nobles. Diseño propio, calidad sin compromiso.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/productos"
              className="text-sm tracking-wider uppercase px-8 py-4 transition-opacity hover:opacity-80 inline-block"
              style={{
                fontFamily: 'var(--font-neue-montreal)',
                backgroundColor: '#F5F2ED',
                color: 'var(--color-accent)',
              }}
            >
              Ver Muebles
            </Link>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-wider uppercase px-8 py-4 transition-opacity hover:opacity-70 inline-block"
              style={{
                fontFamily: 'var(--font-neue-montreal)',
                border: '1px solid rgba(245,242,237,0.4)',
                color: '#F5F2ED',
              }}
            >
              Consultar ahora
            </a>
          </div>
        </div>

        {/* Línea decorativa inferior */}
        <div
          className="absolute bottom-0 left-6 right-6 h-px opacity-20"
          style={{ backgroundColor: '#F5F2ED' }}
        />
      </div>

      {/* Número decorativo */}
      <div
        className="absolute top-1/2 right-6 md:right-12 -translate-y-1/2 hidden lg:block select-none"
        style={{
          fontFamily: 'var(--font-model-mono)',
          color: '#F5F2ED',
          opacity: 0.04,
          fontSize: '320px',
          lineHeight: 1,
          fontWeight: 700,
        }}
      >
        P
      </div>
    </section>
  );
}
