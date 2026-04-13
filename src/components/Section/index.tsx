import { type FC, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** Padding size */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Background variant */
  background?: 'default' | 'muted' | 'sage';
}

export const Section: FC<SectionProps> = ({
  className,
  padding = 'lg',
  background = 'default',
  children,
  ...props
}) => {
  const paddingClasses = {
    none: '',
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-20',
  };

  const backgroundClasses = {
    default: 'bg-white',
    muted: 'bg-neutral-50',
    sage: 'bg-sage-50',
  };

  return (
    <section
      className={cn(
        paddingClasses[padding],
        backgroundClasses[background],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};