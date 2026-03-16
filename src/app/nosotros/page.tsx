import { waLink } from '@/lib/utils';

export default function NosotrosPage() {
  return (
    <div className="pt-16" style={{ backgroundColor: 'var(--color-bg)' }}>
      {/* Hero */}
      <div className="py-24 px-6" style={{ backgroundColor: 'var(--color-accent)' }}>
        <div className="max-w-7xl mx-auto">
          <p
            className="text-xs tracking-widest uppercase mb-4 opacity-50"
            style={{ fontFamily: 'var(--font-model-mono)', color: '#F5F2ED' }}
          >
            Nosotros
          </p>
          <h1
            className="text-5xl md:text-7xl leading-none"
            style={{ fontFamily: 'var(--font-editorial-ultralight)', color: '#F5F2ED' }}
          >
            El taller{' '}
            <em
              className="not-italic"
              style={{ fontFamily: 'var(--font-editorial-ultralight-italic)', color: '#E0D8CE' }}
            >
              detrás
            </em>
          </h1>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <h2
              className="text-3xl md:text-4xl leading-tight mb-8"
              style={{ fontFamily: 'var(--font-editorial-ultralight)', color: 'var(--color-text)' }}
            >
              Hacemos muebles que cuentan historias.
            </h2>
            <div className="flex flex-col gap-5">
              {[
                'Picapinos nació de la pasión por la madera y el trabajo artesanal. Somos un taller familiar ubicado en Chile, donde cada pieza es diseñada y fabricada por manos que conocen el oficio de generación en generación.',
                'Creemos que un mueble bien hecho no es un objeto de consumo, sino una inversión que se hereda. Por eso trabajamos con maderas nobles seleccionadas — roble, nogal, lenga, alerce — y las tratamos con el respeto que merecen.',
                'Nuestro proceso es simple: escuchamos, diseñamos, fabricamos. Sin intermediarios, sin fábricas. Desde el taller directamente a tu hogar.',
              ].map((text, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed opacity-70"
                  style={{ fontFamily: 'var(--font-neue-montreal)', color: 'var(--color-text)' }}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>

          {/* Valores */}
          <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            {[
              { titulo: 'Artesanía real', desc: 'Cada pieza fabricada a mano, sin procesos industriales.' },
              { titulo: 'Maderas nobles', desc: 'Solo materiales de calidad, seleccionados con cuidado.' },
              { titulo: 'Diseño propio', desc: 'Catálogo propio y piezas a medida según tu espacio.' },
              { titulo: 'Durabilidad', desc: 'Muebles que mejoran con el tiempo, no que se desgastan.' },
            ].map((valor) => (
              <div
                key={valor.titulo}
                className="p-8"
                style={{ backgroundColor: 'var(--color-surface)' }}
              >
                <h3
                  className="text-lg mb-2"
                  style={{ fontFamily: 'var(--font-editorial-ultralight)', color: 'var(--color-text)' }}
                >
                  {valor.titulo}
                </h3>
                <p
                  className="text-sm opacity-60 leading-relaxed"
                  style={{ fontFamily: 'var(--font-neue-montreal)', color: 'var(--color-text)' }}
                >
                  {valor.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 pt-12" style={{ borderTop: '1px solid var(--color-border)' }}>
          <p
            className="text-sm opacity-50 mb-4"
            style={{ fontFamily: 'var(--font-neue-montreal)', color: 'var(--color-text)' }}
          >
            ¿Querés conocer más o encargar una pieza?
          </p>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-wider uppercase px-8 py-4 transition-opacity hover:opacity-80 inline-block"
            style={{
              fontFamily: 'var(--font-neue-montreal)',
              backgroundColor: 'var(--color-accent)',
              color: '#F5F2ED',
            }}
          >
            Escribirnos por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
