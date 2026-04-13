import { type Metadata } from 'next'
import { QuizPage } from '@/components/Quiz/QuizPage'
import { Header } from '@/components/Layout/Header'
import { Footer } from '@/components/Layout/Footer'

export const metadata: Metadata = {
  title: 'Smart Home Quiz | Find Your Perfect Setup',
  description: 'Take our quick quiz to get personalized smart home recommendations based on your needs, budget, and lifestyle.',
}

export default function Quiz() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-sage-50 to-white">
        <QuizPage />
      </main>
      <Footer />
    </>
  )
}