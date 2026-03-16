import { notFound } from 'next/navigation';
import Link from 'next/link';
import { productos, getProductoBySlug, formatPrecio } from '@/data/productos';
import { waLink } from '@/lib/utils';
import Badge from '@/components/ui/Badge';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return productos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const producto = getProductoBySlug(slug);
  if (!producto) return {};
  return {
    title: `${producto.nombre} — Picapinos`,
    description: producto.descripcion,
  };
}

export default async function ProductoDetalle({ params }: Props) {
  const { slug } = await params;
  const producto = getProductoBySlug(slug);

  if (!producto) notFound();

  const relacionados = productos
    .filter((p) => p.categoria === producto.categoria && p.id !== producto.id)
    .slice(0, 3);

  return (
    <div className="pt-16" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-10 text-xs opacity-50" style={{ fontFamily: 'var(--font-neue-montreal)', color: 'var(--color-text)' }}>
          <Link href="/" className="hover:opacity-100 transition-opacity">Inicio</Link>
          <span>/</span>
          <Link href="/productos" className="hover:opacity-100 transition-opacity">Muebles</Link>
          <span>/</span>
          <span>{producto.nombre}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Imagen */}
          <div
            className="aspect-square flex items-center justify-center"
            style={{ backgroundColor: 'var(--color-border)' }}
          >
            <span
              className="text-xs tracking-widest uppercase opacity-30"
              style={{ fontFamily: 'var(--font-model-mono)', color: 'var(--color-muted)' }}
            >
              Imagen próximamente
            </span>
          </div>

          {/* Detalles */}
          <div className="flex flex-col">
            <div className="flex items-start gap-3 mb-2">
              <Badge>{producto.categoria}</Badge>
            </div>

            <h1
              className="text-4xl md:text-5xl leading-tight mt-4 mb-6"
              style={{ fontFamily: 'var(--font-editorial-ultralight)', color: 'var(--color-text)' }}
            >
              {producto.nombre}
            </h1>

            <p
              className="text-2xl mb-8"
              style={{ fontFamily: 'var(--font-model-mono)', color: 'var(--color-accent)' }}
            >
              {formatPrecio(producto.precio)}
            </p>

            <p
              className="text-base leading-relaxed opacity-70 mb-8"
              style={{ fontFamily: 'var(--font-neue-montreal)', color: 'var(--color-text)' }}
            >
              {producto.descripcion}
            </p>

            {/* Specs */}
            {(producto.dimensiones || (producto.materiales && producto.materiales.length > 0)) && (
              <div
                className="flex flex-col gap-4 mb-10 py-8"
                style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
              >
                {producto.dimensiones && (
                  <div className="flex justify-between">
                    <span
                      className="text-xs tracking-widest uppercase opacity-50"
                      style={{ fontFamily: 'var(--font-model-mono)', color: 'var(--color-text)' }}
                    >
                      Dimensiones
                    </span>
                    <span
                      className="text-sm"
                      style={{ fontFamily: 'var(--font-neue-montreal)', color: 'var(--color-text)' }}
                    >
                      {producto.dimensiones}
                    </span>
                  </div>
                )}
                {producto.materiales && producto.materiales.length > 0 && (
                  <div className="flex justify-between">
                    <span
                      className="text-xs tracking-widest uppercase opacity-50"
                      style={{ fontFamily: 'var(--font-model-mono)', color: 'var(--color-text)' }}
                    >
                      Materiales
                    </span>
                    <span
                      className="text-sm"
                      style={{ fontFamily: 'var(--font-neue-montreal)', color: 'var(--color-text)' }}
                    >
                      {producto.materiales.join(', ')}
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* CTA */}
            <a
              href={waLink(producto.nombre)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-sm tracking-wider uppercase py-4 text-center transition-opacity hover:opacity-80 inline-flex items-center justify-center gap-3"
              style={{
                fontFamily: 'var(--font-neue-montreal)',
                backgroundColor: 'var(--color-accent)',
                color: '#F5F2ED',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Consultar por WhatsApp
            </a>
          </div>
        </div>

        {/* Relacionados */}
        {relacionados.length > 0 && (
          <div className="mt-24">
            <h2
              className="text-2xl mb-10"
              style={{ fontFamily: 'var(--font-editorial-ultralight)', color: 'var(--color-text)' }}
            >
              También te puede interesar
            </h2>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
              style={{ backgroundColor: 'var(--color-border)' }}
            >
              {relacionados.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/productos/${rel.slug}`}
                  className="p-6 group transition-opacity hover:opacity-70"
                  style={{ backgroundColor: 'var(--color-bg)' }}
                >
                  <div
                    className="aspect-video mb-4 flex items-center justify-center"
                    style={{ backgroundColor: 'var(--color-border)' }}
                  >
                    <span className="text-xs opacity-20" style={{ fontFamily: 'var(--font-model-mono)', color: 'var(--color-muted)' }}>
                      img
                    </span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-editorial-ultralight)', color: 'var(--color-text)' }}>
                    {rel.nombre}
                  </p>
                  <p
                    className="text-sm mt-1"
                    style={{ fontFamily: 'var(--font-model-mono)', color: 'var(--color-muted)' }}
                  >
                    {formatPrecio(rel.precio)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
