import { type FC, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  /** Number of columns */
  cols?: 1 | 2 | 3 | 4;
  /** Gap between items */
  gap?: 'sm' | 'md' | 'lg';
  /** Responsive behavior */
  responsive?: boolean;
}

export const Grid: FC<GridProps> = ({
  className,
  cols = 3,
  gap = 'md',
  responsive = true,
  children,
  ...props
}) => {
  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  };

  const colsClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };

  const responsiveColsClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  };

  return (
    <div
      className={cn(
        'grid',
        gapClasses[gap],
        responsive ? colsClasses[cols] : responsiveColsClasses[cols],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};