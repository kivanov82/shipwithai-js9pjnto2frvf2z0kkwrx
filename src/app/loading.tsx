import { LoadingSpinner } from '@/components/LoadingSpinner';
import { Container } from '@/components/Container';

export default function Loading() {
  return (
    <Container className="py-20">
      <div className="flex flex-col items-center justify-center space-y-4">
        <LoadingSpinner size="lg" />
        <p className="text-neutral-600">Loading...</p>
      </div>
    </Container>
  );
}