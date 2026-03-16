import Link from 'next/link';
import { destacados } from '@/data/productos';
import ProductCard from '@/components/ui/ProductCard';

export default function FeaturedProducts() {
  const items = destacados.slice(0, 4);

  return (
    <section className="py-24 px-6" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-4 opacity-50"
              style={{ fontFamily: 'var(--font-model-mono)', color: 'var(--color-text)' }}
            >
              Catálogo
            </p>
            <h2
              className="text-4xl md:text-5xl leading-tight"
              style={{ fontFamily: 'var(--font-editorial-ultralight)', color: 'var(--color-text)' }}
            >
              Piezas{' '}
              <em
                className="not-italic"
                style={{ fontFamily: 'var(--font-editorial-ultralight-italic)' }}
              >
                destacadas
              </em>
            </h2>
          </div>
          <Link
            href="/productos"
            className="text-sm tracking-wider uppercase transition-opacity hover:opacity-60 self-start md:self-auto"
            style={{ fontFamily: 'var(--font-neue-montreal)', color: 'var(--color-muted)' }}
          >
            Ver todo →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {items.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      </div>
    </section>
  );
}
