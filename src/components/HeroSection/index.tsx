'use client';

import { type FC } from 'react';
import Image from 'next/image';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';

export const HeroSection: FC = () => {
  return (
    <Section padding="none" className="relative overflow-hidden bg-gradient-to-br from-sage-50 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-72 h-72 bg-sage-100 rounded-full filter blur-3xl opacity-70" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage-100 rounded-full filter blur-3xl opacity-50" />
      </div>

      <Container>
        <div className="relative py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
                Make Your Home
                <span className="text-sage-600 block">Brilliantly Smart</span>
              </h1>
              <p className="text-lg text-neutral-600 max-w-lg">
                Transform your living space with intelligent devices that learn your habits, 
                save energy, and give you complete control from anywhere in the world.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" href="/products">
                  Shop All Products
                </Button>
                <Button size="lg" variant="secondary" href="/quiz">
                  Take the Smart Home Quiz
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-8 pt-8">
                <div>
                  <p className="text-2xl font-semibold text-neutral-900">50K+</p>
                  <p className="text-sm text-neutral-600">Happy Customers</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-neutral-900">4.8/5</p>
                  <p className="text-sm text-neutral-600">Average Rating</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-neutral-900">2 Year</p>
                  <p className="text-sm text-neutral-600">Warranty</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-[400px] md:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-sage-100/20 to-sage-200/20 rounded-2xl" />
              <Image
                src="/api/placeholder/600/500"
                alt="Smart home devices"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};