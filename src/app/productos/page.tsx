'use client';

import { useState } from 'react';
import { productos } from '@/data/productos';
import { Categoria } from '@/types';
import ProductCard from '@/components/ui/ProductCard';

const categorias: { value: Categoria | 'todos'; label: string }[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'mesas', label: 'Mesas' },
  { value: 'sillas', label: 'Sillas' },
  { value: 'armarios', label: 'Armarios' },
  { value: 'otros', label: 'Otros' },
];

export default function ProductosPage() {
  const [categoriaActiva, setCategoriaActiva] = useState<Categoria | 'todos'>('todos');

  const productosFiltrados =
    categoriaActiva === 'todos'
      ? productos
      : productos.filter((p) => p.categoria === categoriaActiva);

  return (
    <div className="pt-16" style={{ backgroundColor: 'var(--color-bg)' }}>
      {/* Header */}
      <div
        className="py-20 px-6"
        style={{ backgroundColor: 'var(--color-accent)' }}
      >
        <div className="max-w-7xl mx-auto">
          <p
            className="text-xs tracking-widest uppercase mb-4 opacity-50"
            style={{ fontFamily: 'var(--font-model-mono)', color: '#F5F2ED' }}
          >
            Catálogo
          </p>
          <h1
            className="text-5xl md:text-7xl leading-none"
            style={{ fontFamily: 'var(--font-editorial-ultralight)', color: '#F5F2ED' }}
          >
            Nuestros{' '}
            <em
              className="not-italic"
              style={{ fontFamily: 'var(--font-editorial-ultralight-italic)', color: '#E0D8CE' }}
            >
              muebles
            </em>
          </h1>
        </div>
      </div>

      {/* Filtros */}
      <div
        className="px-6 py-6 border-b sticky top-16 z-40"
        style={{ backgroundColor: 'var(--color-bg)', borderColor: 'var(--color-border)' }}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2">
          {categorias.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setCategoriaActiva(cat.value)}
              className="text-xs tracking-widest uppercase px-4 py-2 transition-all"
              style={{
                fontFamily: 'var(--font-neue-montreal)',
                backgroundColor:
                  categoriaActiva === cat.value ? 'var(--color-accent)' : 'transparent',
                color:
                  categoriaActiva === cat.value ? '#F5F2ED' : 'var(--color-muted)',
                border: '1px solid',
                borderColor:
                  categoriaActiva === cat.value ? 'var(--color-accent)' : 'var(--color-border)',
              }}
            >
              {cat.label}
            </button>
          ))}
          <span
            className="ml-auto text-xs self-center opacity-40"
            style={{ fontFamily: 'var(--font-model-mono)', color: 'var(--color-text)' }}
          >
            {productosFiltrados.length} pieza{productosFiltrados.length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {productosFiltrados.length > 0 ? (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ backgroundColor: 'var(--color-border)' }}
          >
            {productosFiltrados.map((producto) => (
              <ProductCard key={producto.id} producto={producto} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <p
              className="text-sm opacity-40"
              style={{ fontFamily: 'var(--font-neue-montreal)', color: 'var(--color-text)' }}
            >
              No hay productos en esta categoría todavía.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
