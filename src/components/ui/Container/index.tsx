import { type FC, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'narrow' | 'wide';
}

export const Container: FC<ContainerProps> = ({
  size = 'default',
  className,
  children,
  ...props
}) => {
  const sizes = {
    narrow: 'max-w-4xl',
    default: 'max-w-7xl',
    wide: 'max-w-screen-2xl'
  };
  
  return (
    <div
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8',
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};