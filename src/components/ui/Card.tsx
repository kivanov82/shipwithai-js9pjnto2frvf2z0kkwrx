import { type FC, type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'interactive'
}

const Card: FC<CardProps> = ({
  className,
  variant = 'default',
  children,
  ...props
}) => {
  const baseClasses = 'bg-white rounded-xl p-6 transition-all duration-200'

  const variants = {
    default: 'border border-gray-200',
    elevated: 'shadow-lg',
    interactive: 'border border-gray-200 hover:-translate-y-0.5 hover:shadow-lg cursor-pointer',
  }

  return (
    <div
      className={cn(
        baseClasses,
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
