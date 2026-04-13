import { type FC } from 'react';
import { cn } from '@/lib/utils';

export interface LoadingSpinnerProps {
  /** Size of the spinner */
  size?: 'sm' | 'md' | 'lg';
  /** Additional classes */
  className?: string;
}

export const LoadingSpinner: FC<LoadingSpinnerProps> = ({
  size = 'md',
  className,
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4 border-2',
    md: 'h-6 w-6 border-2',
    lg: 'h-8 w-8 border-3',
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={cn(
          'animate-spin rounded-full border-neutral-200 border-t-sage-600',
          sizeClasses[size],
          className
        )}
      />
    </div>
  );
};