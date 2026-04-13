'use client';

import { type FC } from 'react';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Grid } from '@/components/Grid';
import { ProductCard, type ProductCardProps } from '@/components/ProductCard';
import { Button } from '@/components/Button';

export interface ProductShowcaseProps {
  products: ProductCardProps[];
}

export const ProductShowcase: FC<ProductShowcaseProps> = ({ products }) => {
  const handleAddToCart = (productId: string) => {
    console.log('Add to cart:', productId);
    // TODO: Implement cart functionality
  };

  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Hand-picked favorites from our collection of smart home essentials.
          </p>
        </div>

        <Grid cols={4} gap="md" className="mb-12">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </Grid>

        <div className="text-center">
          <Button size="lg" variant="secondary" href="/products">
            View All Products
          </Button>
        </div>
      </Container>
    </Section>
  );
};