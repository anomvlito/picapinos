import { Producto } from '@/types';

/**
 * Catálogo de productos Picapinos
 *
 * Para agregar un producto nuevo, copia este bloque y rellena los datos:
 *
 * {
 *   id: 'id-unico',                        // número o string único
 *   slug: 'nombre-del-mueble',             // URL: /productos/nombre-del-mueble
 *   nombre: 'Nombre del Mueble',
 *   descripcion: 'Descripción del mueble.',
 *   precio: 250000,                        // en CLP, o eliminar la línea para mostrar "Consultar"
 *   categoria: 'mesas',                    // 'mesas' | 'sillas' | 'armarios' | 'otros'
 *   imagenes: ['/images/productos/foto.jpg'],  // agregar a public/images/productos/
 *   materiales: ['Roble macizo', 'Aceite de linaza'],
 *   dimensiones: '180 × 90 × 76 cm',
 *   destacado: true,                       // aparece en la sección destacados del home
 * },
 */
export const productos: Producto[] = [
  // Los productos se agregarán aquí cuando estén listos con fotos reales.
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
