export type Categoria = 'mesas' | 'sillas' | 'armarios' | 'otros';

export interface Producto {
  id: string;
  slug: string;
  nombre: string;
  descripcion: string;
  precio?: number;
  categoria: Categoria;
  imagenes: string[];
  materiales?: string[];
  dimensiones?: string;
  destacado?: boolean;
}
