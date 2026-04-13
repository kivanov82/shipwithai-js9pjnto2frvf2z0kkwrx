'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { ArrowLeft, ArrowRight, Home, Shield, Lightbulb, Thermometer, Tv } from 'lucide-react'

interface Question {
  id: string
  question: string
  options: {
    value: string
    label: string
    icon?: React.ReactNode
  }[]
}

const questions: Question[] = [
  {
    id: 'home-type',
    question: 'What type of home do you live in?',
    options: [
      { value: 'apartment', label: 'Apartment', icon: <Home size={24} /> },
      { value: 'house', label: 'House', icon: <Home size={24} /> },
      { value: 'condo', label: 'Condo', icon: <Home size={24} /> },
      { value: 'other', label: 'Other', icon: <Home size={24} /> },
    ],
  },
  {
    id: 'priority',
    question: 'What\'s your main smart home priority?',
    options: [
      { value: 'security', label: 'Security & Safety', icon: <Shield size={24} /> },
      { value: 'lighting', label: 'Lighting Control', icon: <Lightbulb size={24} /> },
      { value: 'climate', label: 'Climate & Energy', icon: <Thermometer size={24} /> },
      { value: 'entertainment', label: 'Entertainment', icon: <Tv size={24} /> },
    ],
  },
  {
    id: 'budget',
    question: 'What\'s your budget for getting started?',
    options: [
      { value: 'under-100', label: 'Under $100' },
      { value: '100-300', label: '$100 - $300' },
      { value: '300-500', label: '$300 - $500' },
      { value: 'over-500', label: 'Over $500' },
    ],
  },
  {
    id: 'tech-level',
    question: 'How comfortable are you with technology?',
    options: [
      { value: 'beginner', label: 'Beginner - Keep it simple' },
      { value: 'intermediate', label: 'Comfortable - I can figure things out' },
      { value: 'advanced', label: 'Advanced - I love tech!' },
    ],
  },
]

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers({ ...answers, [questionId]: value })
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100
  const question = questions[currentQuestion]
  const currentAnswer = answers[question.id]

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sage-50 to-white py-20">
        <div className="container-custom max-w-2xl">
          <Card className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Your Smart Home Recommendations
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Based on your answers, here\'s what we recommend to get you started:
            </p>

            {/* Recommendations would be dynamic based on answers */}
            <div className="space-y-4 mb-8">
              <div className="bg-sage-50 rounded-lg p-4 text-left">
                <h3 className="font-semibold text-gray-900 mb-2">Smart LED Bulb Starter Kit</h3>
                <p className="text-gray-600">Perfect for beginners - control your lights from anywhere</p>
                <p className="text-sage-600 font-semibold mt-2">$49.99</p>
              </div>
              <div className="bg-sage-50 rounded-lg p-4 text-left">
                <h3 className="font-semibold text-gray-900 mb-2">Video Doorbell</h3>
                <p className="text-gray-600">See who\'s at your door from your phone</p>
                <p className="text-sage-600 font-semibold mt-2">$199.99</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Button onClick={() => window.location.href = '/products'} className="flex-1">
                Shop Recommendations
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setCurrentQuestion(0)
                  setAnswers({})
                  setShowResults(false)
                }}
                className="flex-1"
              >
                Retake Quiz
              </Button>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 to-white py-20">
      <div className="container-custom max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Question {currentQuestion + 1} of {questions.length}</span>
            <span className="text-sm text-gray-600">{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-sage-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <Card>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {question.question}
          </h2>

          <div className="space-y-3 mb-8">
            {question.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(question.id, option.value)}
                className={`
                  w-full p-4 rounded-lg border-2 transition-all text-left
                  flex items-center gap-4
                  ${
                    currentAnswer === option.value
                      ? 'border-sage-500 bg-sage-50'
                      : 'border-gray-200 hover:border-sage-300 hover:bg-sage-50/50'
                  }
                `}
              >
                {option.icon && (
                  <div className={`
                    ${currentAnswer === option.value ? 'text-sage-600' : 'text-gray-400'}
                  `}>
                    {option.icon}
                  </div>
                )}
                <span className={`
                  font-medium
                  ${currentAnswer === option.value ? 'text-sage-700' : 'text-gray-700'}
                `}>
                  {option.label}
                </span>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={currentQuestion === 0}
              className="gap-2"
            >
              <ArrowLeft size={18} />
              Back
            </Button>
            <Button
              onClick={handleNext}
              disabled={!currentAnswer}
              className="gap-2"
            >
              {currentQuestion === questions.length - 1 ? 'See Results' : 'Next'}
              <ArrowRight size={18} />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
