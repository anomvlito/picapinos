import { waLink } from '@/lib/utils';

export default function ContactoPage() {
  return (
    <div className="pt-16" style={{ backgroundColor: 'var(--color-bg)' }}>
      {/* Header */}
      <div className="py-24 px-6" style={{ backgroundColor: 'var(--color-accent)' }}>
        <div className="max-w-7xl mx-auto">
          <p
            className="text-xs tracking-widest uppercase mb-4 opacity-50"
            style={{ fontFamily: 'var(--font-model-mono)', color: '#F5F2ED' }}
          >
            Contacto
          </p>
          <h1
            className="text-5xl md:text-7xl leading-none"
            style={{ fontFamily: 'var(--font-editorial-ultralight)', color: '#F5F2ED' }}
          >
            Hablemos{' '}
            <em
              className="not-italic"
              style={{ fontFamily: 'var(--font-editorial-ultralight-italic)', color: '#E0D8CE' }}
            >
              directo.
            </em>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info */}
          <div>
            <h2
              className="text-3xl leading-tight mb-6"
              style={{ fontFamily: 'var(--font-editorial-ultralight)', color: 'var(--color-text)' }}
            >
              La forma más rápida de contactarnos es por WhatsApp.
            </h2>
            <p
              className="text-base leading-relaxed opacity-70 mb-10"
              style={{ fontFamily: 'var(--font-neue-montreal)', color: 'var(--color-text)' }}
            >
              Respondemos en menos de 24 horas. Podemos enviarte fotos del proceso, presupuestos, plazos de entrega o simplemente charlar sobre ideas para tu espacio.
            </p>

            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-wider uppercase px-8 py-4 transition-opacity hover:opacity-80 inline-flex items-center gap-3 mb-16"
              style={{
                fontFamily: 'var(--font-neue-montreal)',
                backgroundColor: 'var(--color-accent)',
                color: '#F5F2ED',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Abrir WhatsApp
            </a>

            {/* Datos */}
            <div className="flex flex-col gap-4" style={{ borderTop: '1px solid var(--color-border)', paddingTop: '2rem' }}>
              {[
                { label: 'WhatsApp', value: '+56 9 7142 3057' },
                { label: 'País', value: 'Chile' },
                { label: 'Horario', value: 'Lun–Sáb, 9:00–19:00' },
              ].map((item) => (
                <div key={item.label} className="flex justify-between">
                  <span
                    className="text-xs tracking-widest uppercase opacity-40"
                    style={{ fontFamily: 'var(--font-model-mono)', color: 'var(--color-text)' }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="text-sm"
                    style={{ fontFamily: 'var(--font-neue-montreal)', color: 'var(--color-text)' }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Panel informativo */}
          <div
            className="p-10 h-fit"
            style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
          >
            <p
              className="text-xs tracking-widest uppercase mb-6 opacity-50"
              style={{ fontFamily: 'var(--font-model-mono)', color: 'var(--color-text)' }}
            >
              ¿Qué podés consultar?
            </p>
            <ul className="flex flex-col gap-4">
              {[
                'Precios y disponibilidad de piezas del catálogo',
                'Pedidos a medida para tu espacio',
                'Materiales, maderas y acabados',
                'Plazos de fabricación y entrega',
                'Fotos del proceso y del taller',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed opacity-70"
                  style={{ fontFamily: 'var(--font-neue-montreal)', color: 'var(--color-text)' }}
                >
                  <span className="mt-1 opacity-40 shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
