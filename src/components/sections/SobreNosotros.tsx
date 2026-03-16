export default function SobreNosotros() {
  return (
    <section
      className="py-24 px-6"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-4 opacity-50"
              style={{ fontFamily: 'var(--font-model-mono)', color: 'var(--color-text)' }}
            >
              Quiénes somos
            </p>
            <h2
              className="text-4xl md:text-5xl leading-tight mb-8"
              style={{ fontFamily: 'var(--font-editorial-ultralight)', color: 'var(--color-text)' }}
            >
              Un taller,{' '}
              <em
                className="not-italic"
                style={{ fontFamily: 'var(--font-editorial-ultralight-italic)' }}
              >
                una familia.
              </em>
            </h2>
            <p
              className="text-base leading-relaxed mb-6 opacity-70"
              style={{ fontFamily: 'var(--font-neue-montreal)', color: 'var(--color-text)' }}
            >
              Picapinos nació del amor por la madera y el trabajo bien hecho. Somos un taller familiar donde cada mueble es diseñado y fabricado desde cero, prestando atención a cada detalle que hace la diferencia.
            </p>
            <p
              className="text-base leading-relaxed opacity-70"
              style={{ fontFamily: 'var(--font-neue-montreal)', color: 'var(--color-text)' }}
            >
              Trabajamos con maderas nobles de Chile — roble, nogal, lenga, alerce — seleccionadas cuidadosamente para garantizar durabilidad y belleza que mejoran con el tiempo.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
              {[
                { num: '10+', label: 'Años de oficio' },
                { num: '200+', label: 'Piezas creadas' },
                { num: '100%', label: 'Hecho a mano' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-3xl mb-1"
                    style={{ fontFamily: 'var(--font-editorial-ultralight)', color: 'var(--color-accent)' }}
                  >
                    {stat.num}
                  </p>
                  <p
                    className="text-xs tracking-wider uppercase opacity-50"
                    style={{ fontFamily: 'var(--font-neue-montreal)', color: 'var(--color-text)' }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Placeholder imagen taller */}
          <div
            className="aspect-[4/5] flex items-center justify-center"
            style={{ backgroundColor: 'var(--color-border)' }}
          >
            <span
              className="text-xs tracking-widest uppercase opacity-30"
              style={{ fontFamily: 'var(--font-model-mono)', color: 'var(--color-muted)' }}
            >
              Foto del taller — próximamente
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
