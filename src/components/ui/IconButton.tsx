import { type FC, type ButtonHTMLAttributes, type ReactElement } from 'react'
import { cn } from '@/lib/utils'

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactElement
  size?: 'sm' | 'md' | 'lg'
}

const IconButton: FC<IconButtonProps> = ({
  className,
  icon,
  size = 'md',
  ...props
}) => {
  const sizes = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
  }

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-sage-50 hover:text-sage-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
        sizes[size],
        className
      )}
      {...props}
    >
      {icon}
    </button>
  )
}

export default IconButton
