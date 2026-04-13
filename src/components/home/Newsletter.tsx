'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { Mail } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    // Mock API call - replace with real implementation
    setTimeout(() => {
      setStatus('success')
      setEmail(''))
      setTimeout(() => setStatus('idle'), 3000)
    }, 1000)
  }

  return (
    <section className="py-16 border-t">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="w-12 h-12 text-sage-500 mx-auto mb-4" />
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get the latest smart home tips, exclusive deals, and new product updates.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
              disabled={status === 'loading'}
            />
            <Button
              type="submit"
              loading={status === 'loading'}
              disabled={status === 'loading'}
            >
              Subscribe
            </Button>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-sage-600 font-medium animate-fadeIn">
              Thanks for subscribing! Check your email for confirmation.
            </p>
          )}

          <p className="mt-4 text-sm text-gray-500">
            Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  )
}
