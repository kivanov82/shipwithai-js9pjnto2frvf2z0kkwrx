import { type FC, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'interactive';
}

export const Card: FC<CardProps> = ({
  variant = 'default',
  className,
  children,
  ...props
}) => {
  const baseClasses = 'bg-white rounded-xl p-6 transition-all duration-200 ease-out';
  
  const variants = {
    default: 'border border-sage-200',
    elevated: 'shadow-lg',
    interactive: 'border border-sage-200 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer'
  };
  
  return (
    <div
      className={cn(baseClasses, variants[variant], className)}
      {...props}
    >
      {children}
    </div>
  );
};