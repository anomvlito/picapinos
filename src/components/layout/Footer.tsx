import Link from 'next/link';
import Image from 'next/image';
import { waLink } from '@/lib/utils';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-accent)', color: '#F5F2ED' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Marca */}
          <div>
            <div className="mb-5">
              <Image
                src="/images/PNGs/ASSETS_PICAPINOS-19.png"
                alt="Picapinos"
                width={180}
                height={28}
                style={{ height: '26px', width: 'auto' }}
              />
            </div>
            <p className="text-sm leading-relaxed opacity-70" style={{ fontFamily: 'var(--font-neue-montreal)' }}>
              Taller de mueblería artesanal. Piezas únicas trabajadas a mano con maderas nobles de Chile.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-4 opacity-50"
              style={{ fontFamily: 'var(--font-neue-montreal)', fontWeight: 500 }}
            >
              Páginas
            </p>
            <nav className="flex flex-col gap-2">
              {[
                { href: '/', label: 'Inicio' },
                { href: '/productos', label: 'Muebles' },
                { href: '/nosotros', label: 'Nosotros' },
                { href: '/contacto', label: 'Contacto' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                  style={{ fontFamily: 'var(--font-neue-montreal)' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contacto */}
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-4 opacity-50"
              style={{ fontFamily: 'var(--font-neue-montreal)', fontWeight: 500 }}
            >
              Contacto
            </p>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm opacity-70 hover:opacity-100 transition-opacity block mb-2"
              style={{ fontFamily: 'var(--font-neue-montreal)' }}
            >
              +56 9 7142 3057
            </a>
            <p className="text-sm opacity-50" style={{ fontFamily: 'var(--font-neue-montreal)' }}>
              Chile
            </p>
          </div>
        </div>

        {/* Sello central — "La forma se convierte en memoria" */}
        <div
          className="flex justify-center py-10 mt-8"
          style={{ borderTop: '1px solid rgba(245,242,237,0.1)' }}
          aria-hidden="true"
        >
          <div className="w-28 h-28 relative opacity-20">
            <Image
              src="/images/PNGs/ASSETS_PICAPINOS-05.png"
              alt=""
              fill
              className="object-contain"
              sizes="112px"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs opacity-40" style={{ fontFamily: 'var(--font-model-mono)' }}>
            © {new Date().getFullYear()} Picapinos. Todos los derechos reservados.
          </p>
          <p className="text-xs opacity-40" style={{ fontFamily: 'var(--font-neue-montreal)' }}>
            Espacio · Memoria · Sentido
          </p>
        </div>
      </div>
    </footer>
  );
}
