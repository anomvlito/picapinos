import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn('inline-block text-xs px-3 py-1 tracking-widest uppercase', className)}
      style={{
        fontFamily: 'var(--font-model-mono)',
        color: 'var(--color-muted)',
        border: '1px solid var(--color-border)',
      }}
    >
      {children}
    </span>
  );
}
