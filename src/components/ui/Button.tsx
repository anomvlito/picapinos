import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center tracking-wider uppercase transition-opacity cursor-pointer';

    const variants = {
      primary: 'text-[#F5F2ED] hover:opacity-80',
      outline: 'border hover:opacity-70',
      ghost: 'hover:opacity-60',
    };

    const sizes = {
      sm: 'text-xs px-4 py-2',
      md: 'text-sm px-6 py-3',
      lg: 'text-sm px-8 py-4',
    };

    const styles: Record<string, React.CSSProperties> = {
      primary: { backgroundColor: 'var(--color-accent)', fontFamily: 'var(--font-neue-montreal)' },
      outline: {
        borderColor: 'var(--color-accent)',
        color: 'var(--color-accent)',
        fontFamily: 'var(--font-neue-montreal)',
      },
      ghost: { color: 'var(--color-text)', fontFamily: 'var(--font-neue-montreal)' },
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        style={styles[variant]}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
