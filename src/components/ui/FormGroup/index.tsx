import { type FC, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface FormGroupProps extends HTMLAttributes<HTMLDivElement> {
  error?: string;
}

export const FormGroup: FC<FormGroupProps> = ({
  error,
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn('mb-6', className)} {...props}>
      {children}
      {error && (
        <p className="mt-1 text-sm text-error">{error}</p>
      )}
    </div>
  );
};