import Link from 'next/link';
import Image from 'next/image';
import { Producto } from '@/types';
import { formatPrecio } from '@/data/productos';
import { waLink } from '@/lib/utils';
import Badge from './Badge';

interface ProductCardProps {
  producto: Producto;
}

export default function ProductCard({ producto }: ProductCardProps) {
  return (
    <article
      className="group flex flex-col"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      {/* Imagen */}
      <Link href={`/productos/${producto.slug}`} className="block overflow-hidden relative aspect-[4/3]">
        <div
          className="w-full h-full transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundColor: 'var(--color-border)' }}
        >
          {producto.imagenes[0] && producto.imagenes[0] !== '/images/productos/placeholder.jpg' ? (
            <Image
              src={producto.imagenes[0]}
              alt={producto.nombre}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center" style={{ minHeight: '200px' }}>
              <span className="text-xs tracking-widest uppercase opacity-30" style={{ fontFamily: 'var(--font-model-mono)', color: 'var(--color-muted)' }}>
                Imagen próximamente
              </span>
            </div>
          )}
        </div>
      </Link>

      {/* Info */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex items-start justify-between gap-2">
          <Link href={`/productos/${producto.slug}`}>
            <h3
              className="text-lg leading-tight hover:opacity-60 transition-opacity"
              style={{ fontFamily: 'var(--font-editorial-ultralight)', color: 'var(--color-text)' }}
            >
              {producto.nombre}
            </h3>
          </Link>
          <Badge>{producto.categoria}</Badge>
        </div>

        <p className="text-sm leading-relaxed opacity-70 line-clamp-2 flex-1" style={{ fontFamily: 'var(--font-neue-montreal)', color: 'var(--color-text)' }}>
          {producto.descripcion}
        </p>

        <div className="flex items-center justify-between mt-auto pt-3" style={{ borderTop: '1px solid var(--color-border)' }}>
          <span
            className="text-base"
            style={{ fontFamily: 'var(--font-model-mono)', color: 'var(--color-text)' }}
          >
            {formatPrecio(producto.precio)}
          </span>
          <a
            href={waLink(producto.nombre)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-wider uppercase px-4 py-2 transition-opacity hover:opacity-80"
            style={{
              fontFamily: 'var(--font-neue-montreal)',
              backgroundColor: 'var(--color-accent)',
              color: '#F5F2ED',
            }}
          >
            Consultar
          </a>
        </div>
      </div>
    </article>
  );
}
