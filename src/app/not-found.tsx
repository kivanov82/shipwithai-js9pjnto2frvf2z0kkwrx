import Link from 'next/link'
import Button from '@/components/ui/Button'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-bold text-sage-500 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Page not found
        </h2>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn\'t find the page you\'re looking for.
        </p>
        <Link href="/">
          <Button className="group">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
