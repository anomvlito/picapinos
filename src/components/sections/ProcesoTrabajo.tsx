const pasos = [
  {
    num: '01',
    titulo: 'Diseño',
    descripcion: 'Conversamos sobre tu espacio y necesidades. Desarrollamos el diseño a medida o elegimos una pieza de nuestro catálogo.',
  },
  {
    num: '02',
    titulo: 'Fabricación',
    descripcion: 'Seleccionamos la madera, la trabajamos a mano en nuestro taller. Cada detalle es cuidado con precisión artesanal.',
  },
  {
    num: '03',
    titulo: 'Acabado',
    descripcion: 'Lijado, teñido y protección con aceites naturales. El resultado: una pieza que mejora con los años.',
  },
  {
    num: '04',
    titulo: 'Entrega',
    descripcion: 'Coordinamos la entrega e instalación en tu hogar. Tu mueble llega listo para ser parte de tu espacio.',
  },
];

export default function ProcesoTrabajo() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p
            className="text-xs tracking-widest uppercase mb-4 opacity-50"
            style={{ fontFamily: 'var(--font-model-mono)', color: 'var(--color-text)' }}
          >
            Cómo trabajamos
          </p>
          <h2
            className="text-4xl md:text-5xl leading-tight"
            style={{ fontFamily: 'var(--font-editorial-ultralight)', color: 'var(--color-text)' }}
          >
            El proceso,{' '}
            <em
              className="not-italic"
              style={{ fontFamily: 'var(--font-editorial-ultralight-italic)' }}
            >
              paso a paso.
            </em>
          </h2>
        </div>

        {/* Pasos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {pasos.map((paso) => (
            <div
              key={paso.num}
              className="p-8"
              style={{ backgroundColor: 'var(--color-bg)' }}
            >
              <p
                className="text-4xl mb-6 opacity-20"
                style={{ fontFamily: 'var(--font-model-mono)', color: 'var(--color-accent)' }}
              >
                {paso.num}
              </p>
              <h3
                className="text-xl mb-4"
                style={{ fontFamily: 'var(--font-editorial-ultralight)', color: 'var(--color-text)' }}
              >
                {paso.titulo}
              </h3>
              <p
                className="text-sm leading-relaxed opacity-60"
                style={{ fontFamily: 'var(--font-neue-montreal)', color: 'var(--color-text)' }}
              >
                {paso.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
