'use client';

import { type FC, type InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export const RadioGroup: FC<RadioGroupProps> = ({
  name,
  options,
  value,
  onChange,
  className
}) => {
  return (
    <div className={cn('space-y-2', className)}>
      {options.map((option) => (
        <Radio
          key={option.value}
          name={name}
          value={option.value}
          label={option.label}
          checked={value === option.value}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={option.disabled}
        />
      ))}
    </div>
  );
};

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, className, id, ...props }, ref) => {
    const radioId = id || `${props.name}-${props.value}`;
    
    return (
      <div className="flex items-center">
        <input
          ref={ref}
          type="radio"
          id={radioId}
          className={cn(
            'w-5 h-5 border-2 border-neutral-300 text-sage-500',
            'focus:ring-2 focus:ring-sage-500 focus:ring-offset-2',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            className
          )}
          {...props}
        />
        {label && (
          <label
            htmlFor={radioId}
            className="ml-2 text-sm font-medium text-neutral-700 cursor-pointer"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Radio.displayName = 'Radio';