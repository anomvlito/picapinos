import { Producto } from '@/types';

export const productos: Producto[] = [
  {
    id: '1',
    slug: 'mesa-comedor-roble',
    nombre: 'Mesa de Comedor Roble',
    descripcion:
      'Mesa de comedor artesanal en madera de roble macizo. Cada pieza es única, trabajada a mano con acabado natural que realza la veta de la madera. Ideal para 6 personas.',
    precio: 480000,
    categoria: 'mesas',
    imagenes: ['/images/productos/placeholder.jpg'],
    materiales: ['Roble macizo', 'Aceite de linaza'],
    dimensiones: '180 × 90 × 76 cm',
    destacado: true,
  },
  {
    id: '2',
    slug: 'mesa-centro-nogal',
    nombre: 'Mesa de Centro Nogal',
    descripcion:
      'Mesa de centro en nogal con diseño minimalista y patas de acero negro. Una pieza que equilibra calidez natural y líneas contemporáneas.',
    precio: 210000,
    categoria: 'mesas',
    imagenes: ['/images/productos/placeholder.jpg'],
    materiales: ['Nogal macizo', 'Acero negro'],
    dimensiones: '110 × 60 × 42 cm',
    destacado: true,
  },
  {
    id: '3',
    slug: 'silla-madera-cuero',
    nombre: 'Silla de Madera y Cuero',
    descripcion:
      'Silla artesanal con estructura de madera de haya y asiento en cuero natural. Diseño ergonómico que combina confort y elegancia.',
    precio: 145000,
    categoria: 'sillas',
    imagenes: ['/images/productos/placeholder.jpg'],
    materiales: ['Haya maciza', 'Cuero natural'],
    dimensiones: '45 × 48 × 88 cm',
    destacado: true,
  },
  {
    id: '4',
    slug: 'armario-pino-natural',
    nombre: 'Armario Pino Natural',
    descripcion:
      'Armario de tres puertas en pino natural con herrajes de bronce. Amplio espacio interior con estantes regulables y barra para colgar.',
    precio: 620000,
    categoria: 'armarios',
    imagenes: ['/images/productos/placeholder.jpg'],
    materiales: ['Pino macizo', 'Herrajes de bronce'],
    dimensiones: '150 × 55 × 200 cm',
    destacado: false,
  },
  {
    id: '5',
    slug: 'estanteria-flotante',
    nombre: 'Estantería Flotante',
    descripcion:
      'Set de estantes flotantes en madera de lenga patagónica. Se instalan en distintas configuraciones según el espacio disponible.',
    precio: 98000,
    categoria: 'otros',
    imagenes: ['/images/productos/placeholder.jpg'],
    materiales: ['Lenga patagónica', 'Anclajes de acero'],
    dimensiones: 'Largo: 80 cm (x3 unidades)',
    destacado: false,
  },
  {
    id: '6',
    slug: 'silla-escritorio',
    nombre: 'Silla de Escritorio',
    descripcion:
      'Silla de escritorio con estructura de madera de alerce y asiento tapizado en lino natural. Perfecta para espacios de trabajo que buscan armonía.',
    precio: 185000,
    categoria: 'sillas',
    imagenes: ['/images/productos/placeholder.jpg'],
    materiales: ['Alerce macizo', 'Lino natural'],
    dimensiones: '50 × 50 × 92 cm',
    destacado: true,
  },
];

export const destacados = productos.filter((p) => p.destacado);

export function getProductoBySlug(slug: string): Producto | undefined {
  return productos.find((p) => p.slug === slug);
}

export function getProductosByCategoria(categoria: string): Producto[] {
  return productos.filter((p) => p.categoria === categoria);
}

export function formatPrecio(precio?: number): string {
  if (!precio) return 'Consultar';
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(precio);
}
