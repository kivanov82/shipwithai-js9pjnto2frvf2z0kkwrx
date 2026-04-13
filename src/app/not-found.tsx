import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';

export default function NotFound() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-md text-center">
          <h1 className="text-6xl font-bold text-sage-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
            Page not found
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            The page you’re looking for doesn’t exist or has been moved.
          </p>
          <div className="flex gap-4 justify-center">
            <Button href="/">Go Home</Button>
            <Button variant="secondary" href="/products">
              Browse Products
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}