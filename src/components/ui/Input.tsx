import { type FC, type InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'h-12 w-full px-4 border-2 rounded-lg font-sans text-base transition-all duration-200',
          'placeholder:text-gray-400',
          'focus:outline-none focus:ring-0',
          error
            ? 'border-red-500 focus:border-red-500'
            : 'border-gray-200 focus:border-sage-500 focus:shadow-[0_0_0_3px_rgba(100,120,100,0.1)]',
          'disabled:bg-gray-100 disabled:cursor-not-allowed',
          className
        )}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'

export default Input
