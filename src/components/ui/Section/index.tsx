import { type FC, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  size?: 'sm' | 'md' | 'lg';
}

export const Section: FC<SectionProps> = ({
  size = 'md',
  className,
  children,
  ...props
}) => {
  const sizes = {
    sm: 'py-12 sm:py-16',
    md: 'py-16 sm:py-20',
    lg: 'py-20 sm:py-24'
  };
  
  return (
    <section
      className={cn(sizes[size], className)}
      {...props}
    >
      {children}
    </section>
  );
};