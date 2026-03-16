import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const WA_NUMBER = '56971423057';

export function waLink(texto?: string) {
  const mensaje = texto
    ? `Hola! Me interesa el mueble: ${texto}`
    : 'Hola! Me gustaría consultar sobre sus muebles.';
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(mensaje)}`;
}
