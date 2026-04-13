'use client';

import { useEffect } from 'react';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-md text-center">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            Oops! Something went wrong
          </h1>
          <p className="text-lg text-neutral-600 mb-8">
            We encountered an unexpected error. Don’t worry, our team has been
            notified and we’re working to fix it.
          </p>
          <div className="flex gap-4 justify-center">
            <Button onClick={() => reset()}>Try Again</Button>
            <Button variant="secondary" href="/">
              Go Home
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}