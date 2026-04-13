'use client';

import { type FC } from 'react';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { CheckIcon } from '@/components/Icons';

const benefits = [
  'Get personalized recommendations',
  'Find compatible devices',
  'Save with bundle deals',
  'Expert setup guidance',
];

export const QuizCTA: FC = () => {
  return (
    <Section background="sage" className="relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-sage-200/30 rounded-full filter blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sage-200/30 rounded-full filter blur-3xl" />
      </div>

      <Container>
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/90 backdrop-blur" padding="lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                  Not Sure Where to Start?
                </h2>
                <p className="text-lg text-neutral-600 mb-6">
                  Take our 2-minute smart home quiz and get personalized 
                  recommendations based on your home, lifestyle, and budget.
                </p>
                <ul className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-sage-600 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" href="/quiz">
                  Start the Quiz
                </Button>
              </div>
              <div className="relative h-64 md:h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-sage-100 to-sage-200 rounded-xl" />
                {/* Quiz illustration placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-sage-600">
                    <svg className="w-32 h-32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
};