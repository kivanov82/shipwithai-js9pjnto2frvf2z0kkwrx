'use client';

import { type FC, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ToastProps {
  message: string;
  variant?: 'success' | 'error' | 'warning' | 'info';
  onClose: () => void;
  duration?: number;
}

export const Toast: FC<ToastProps> = ({
  message,
  variant = 'info',
  onClose,
  duration = 5000
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);
  
  const variants = {
    success: 'bg-sage-500 text-white',
    error: 'bg-red-500 text-white',
    warning: 'bg-orange-500 text-white',
    info: 'bg-blue-500 text-white'
  };
  
  const icons = {
    success: '✓',
    error: '✕',
    warning: '!',
    info: 'i'
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
      <div className={cn(
        'flex items-center gap-3 max-w-sm px-6 py-4 rounded-lg shadow-lg',
        variants[variant]
      )}>
        <span className="text-xl">{icons[variant]}</span>
        <p className="flex-1">{message}</p>
        <button
          onClick={onClose}
          className="text-lg hover:opacity-80 transition-opacity"
        >
          ×
        </button>
      </div>
    </div>
  );
};