import { type InputHTMLAttributes, type TextareaHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Error state */
  hasError?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, hasError, ...props }, ref) => {
    const baseClasses = `
      w-full h-12 px-4
      text-base text-neutral-900 placeholder:text-neutral-500
      bg-white border-2 rounded-lg
      transition-all duration-200
      focus:outline-none focus:ring-2 focus:ring-sage-500/10
      disabled:bg-neutral-50 disabled:cursor-not-allowed
    `;

    const borderClasses = hasError
      ? 'border-red-500 focus:border-red-500'
      : 'border-neutral-200 hover:border-neutral-300 focus:border-sage-500';

    return (
      <input
        ref={ref}
        className={cn(baseClasses, borderClasses, className)}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Error state */
  hasError?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, hasError, ...props }, ref) => {
    const baseClasses = `
      w-full min-h-[120px] px-4 py-3
      text-base text-neutral-900 placeholder:text-neutral-500
      bg-white border-2 rounded-lg
      transition-all duration-200 resize-y
      focus:outline-none focus:ring-2 focus:ring-sage-500/10
      disabled:bg-neutral-50 disabled:cursor-not-allowed
    `;

    const borderClasses = hasError
      ? 'border-red-500 focus:border-red-500'
      : 'border-neutral-200 hover:border-neutral-300 focus:border-sage-500';

    return (
      <textarea
        ref={ref}
        className={cn(baseClasses, borderClasses, className)}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';

export interface FormGroupProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

export const FormGroup: FC<FormGroupProps> = ({
  label,
  error,
  required,
  children,
}) => {
  return (
    <div className="mb-6">
      <label className="block text-neutral-700 font-medium mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-sm text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
};