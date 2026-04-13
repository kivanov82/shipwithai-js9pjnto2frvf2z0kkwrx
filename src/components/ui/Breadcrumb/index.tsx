import { type FC } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb: FC<BreadcrumbProps> = ({ items, className }) => {
  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center space-x-2 text-sm', className)}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && (
            <svg
              className="w-4 h-4 text-neutral-400 mx-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}
          {item.href && index < items.length - 1 ? (
            <Link
              href={item.href}
              className="text-neutral-600 hover:text-sage-600 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className={cn(
              index === items.length - 1 ? 'text-neutral-900 font-medium' : 'text-neutral-600'
            )}>
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
};