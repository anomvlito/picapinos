import Link from 'next/link';
import Image from 'next/image';
import { waLink } from '@/lib/utils';

export default function Footer() {
  return (
    <footer
      className="border-t mt-0"
      style={{ backgroundColor: 'var(--color-accent)', borderColor: 'var(--color-accent)', color: '#F5F2ED' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Marca */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/PICAPINO_01.svg"
                alt="Picapinos"
                width={48}
                height={48}
                style={{ filter: 'brightness(0) invert(1)' }}
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

        <div
          className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
          style={{ borderTop: '1px solid rgba(245,242,237,0.15)' }}
        >
          <p className="text-xs opacity-40" style={{ fontFamily: 'var(--font-model-mono)' }}>
            © {new Date().getFullYear()} Picapinos. Todos los derechos reservados.
          </p>
          <p className="text-xs opacity-40" style={{ fontFamily: 'var(--font-neue-montreal)' }}>
            Hecho a mano, con madera.
          </p>
        </div>
      </div>
    </footer>
  );
}
