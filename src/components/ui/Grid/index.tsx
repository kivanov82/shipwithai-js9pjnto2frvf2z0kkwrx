import { type FC, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
}

export const Grid: FC<GridProps> = ({
  cols = 3,
  gap = 'md',
  className,
  children,
  ...props
}) => {
  const colClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  };
  
  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8'
  };
  
  return (
    <div
      className={cn('grid', colClasses[cols], gapClasses[gap], className)}
      {...props}
    >
      {children}
    </div>
  );
};