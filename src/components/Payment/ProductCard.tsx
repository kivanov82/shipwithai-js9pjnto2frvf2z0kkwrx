'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatPrice, Product } from '@/lib/stripe';
import CheckoutButton from './CheckoutButton';
import { Package, Zap } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const getCategoryIcon = (category: Product['category']) => {
    switch (category) {
      case 'controllers':
        return <Zap className="h-4 w-4" />;
      case 'sensors':
      case 'cameras':
      case 'adapters':
      case 'systems':
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: Product['category']) => {
    switch (category) {
      case 'controllers':
        return 'bg-[#B87333]/20 text-[#B87333] border-[#B87333]/30';
      case 'sensors':
        return 'bg-green-500/20 text-green-400 border-green-400/30';
      case 'cameras':
        return 'bg-blue-500/20 text-blue-400 border-blue-400/30';
      case 'adapters':
        return 'bg-purple-500/20 text-purple-400 border-purple-400/30';
      case 'systems':
        return 'bg-[#FFB347]/20 text-[#FFB347] border-[#FFB347]/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-400/30';
    }
  };

  return (
    <Card className={`bg-[#0F0E0C]/80 border-[#B87333]/20 backdrop-blur-sm hover:border-[#B87333]/40 transition-all duration-200 ${className}`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge 
            variant="outline" 
            className={`capitalize ${getCategoryColor(product.category)}`}
          >
            {getCategoryIcon(product.category)}
            {product.category}
          </Badge>
          
          {!product.inStock && (
            <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-400/30">
              Out of Stock
            </Badge>
          )}
        </div>
        
        <CardTitle className="text-white">{product.name}</CardTitle>
        <CardDescription className="text-gray-300">
          {product.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="text-2xl font-bold text-[#FFB347]">
          {formatPrice(product.price)}
        </div>
        {product.name.includes('[DEMO]') && (
          <p className="text-xs text-[#B87333] mt-1">🧪 Demo product - safe for testing</p>
        )}
      </CardContent>
      
      <CardFooter>
        <CheckoutButton product={product} />
      </CardFooter>
    </Card>
  );
}