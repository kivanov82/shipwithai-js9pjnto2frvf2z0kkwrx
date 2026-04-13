import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function QuizCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-sage-50 to-white">
      <div className="container-custom">
        <Card className="bg-gradient-to-br from-sage-500 to-sage-600 border-0 text-white overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24" />
          
          <div className="relative z-10 py-12 px-8 text-center">
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-sage-100" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Not Sure Where to Start?
            </h2>
            <p className="text-xl text-sage-100 max-w-2xl mx-auto mb-8">
              Take our 2-minute quiz and get personalized recommendations for your home
            </p>
            <Link href="/quiz">
              <Button
                size="lg"
                className="bg-white text-sage-600 hover:bg-sage-50"
              >
                Start the Smart Home Quiz
              </Button>
            </Link>
            <p className="mt-4 text-sm text-sage-200">
              No signup required • Get instant results
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
