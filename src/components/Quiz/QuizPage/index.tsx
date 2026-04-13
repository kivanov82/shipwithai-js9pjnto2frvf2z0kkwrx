'use client'

import { type FC, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, Home, Lightbulb, Shield, Thermometer, DollarSign, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Question {
  id: string
  title: string
  description?: string
  type: 'single' | 'multiple' | 'scale'
  options: {
    value: string
    label: string
    icon?: any
    description?: string
  }[]
}

const QUESTIONS: Question[] = [
  {
    id: 'living-situation',
    title: 'What\'s your living situation?',
    description: 'This helps us recommend compatible devices',
    type: 'single',
    options: [
      { value: 'house', label: 'House', icon: Home, description: 'I own my home' },
      { value: 'apartment', label: 'Apartment', icon: Home, description: 'I rent my space' },
      { value: 'condo', label: 'Condo', icon: Home, description: 'I own a condo' },
    ]
  },
  {
    id: 'priorities',
    title: 'What are your smart home priorities?',
    description: 'Select all that apply',
    type: 'multiple',
    options: [
      { value: 'security', label: 'Security', icon: Shield, description: 'Cameras, locks, alarms' },
      { value: 'lighting', label: 'Lighting', icon: Lightbulb, description: 'Smart bulbs and switches' },
      { value: 'climate', label: 'Climate', icon: Thermometer, description: 'Heating and cooling' },
      { value: 'entertainment', label: 'Entertainment', description: 'Audio, video, gaming' },
      { value: 'convenience', label: 'Convenience', description: 'Voice control, automation' },
    ]
  },
  {
    id: 'tech-comfort',
    title: 'How comfortable are you with technology?',
    type: 'single',
    options: [
      { value: 'beginner', label: 'Beginner', description: 'I want simple, plug-and-play devices' },
      { value: 'intermediate', label: 'Intermediate', description: 'I can handle some setup' },
      { value: 'expert', label: 'Expert', description: 'I love tinkering with tech' },
    ]
  },
  {
    id: 'budget',
    title: 'What\'s your budget for smart home upgrades?',
    description: 'This helps us show options in your price range',
    type: 'single',
    options: [
      { value: 'starter', label: 'Under $500', icon: DollarSign, description: 'Start small and grow' },
      { value: 'moderate', label: '$500 - $1,500', icon: DollarSign, description: 'Room-by-room upgrades' },
      { value: 'comprehensive', label: '$1,500 - $5,000', icon: DollarSign, description: 'Whole-home basics' },
      { value: 'premium', label: '$5,000+', icon: DollarSign, description: 'Complete smart home' },
    ]
  },
  {
    id: 'voice-assistant',
    title: 'Do you have a preferred voice assistant?',
    type: 'single',
    options: [
      { value: 'alexa', label: 'Amazon Alexa' },
      { value: 'google', label: 'Google Assistant' },
      { value: 'siri', label: 'Apple Siri' },
      { value: 'none', label: 'No preference' },
    ]
  }
]

export const QuizPage: FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({})
  const [showResults, setShowResults] = useState(false)

  const question = QUESTIONS[currentQuestion]
  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers }
    
    if (question.type === 'single') {
      newAnswers[question.id] = value
    } else if (question.type === 'multiple') {
      const current = (answers[question.id] as string[]) || []
      if (current.includes(value)) {
        newAnswers[question.id] = current.filter(v => v !== value)
      } else {
        newAnswers[question.id] = [...current, value]
      }
    }

    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const isAnswered = () => {
    const answer = answers[question.id]
    if (question.type === 'single') {
      return !!answer
    } else if (question.type === 'multiple') {
      return answer && (answer as string[]).length > 0
    }
    return false
  }

  if (showResults) {
    return (
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
          >
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-10 w-10 text-sage-600" />
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Your Personalized Smart Home Plan
              </h2>
              <p className="text-lg text-neutral-600">
                Based on your answers, here\'s what we recommend:
              </p>
            </div>

            {/* Mock Recommendations */}
            <div className="space-y-6">
              <div className="border-2 border-sage-100 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Perfect Starter Bundle
                </h3>
                <p className="text-neutral-600 mb-4">
                  Begin your smart home journey with these essentials:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span>Smart LED Bulb Pro (4-pack) - Control your lighting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span>WiFi Smart Plug Bundle - Make any device smart</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span>Voice Assistant Hub - Control everything with your voice</span>
                  </li>
                </ul>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-neutral-900">$149.99</span>
                    <span className="text-sm text-neutral-500 ml-2 line-through">$199.99</span>
                  </div>
                  <button className="smart-button-primary px-6 py-2">
                    View Bundle
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-neutral-50 rounded-xl p-6">
                  <h4 className="font-semibold text-neutral-900 mb-2">
                    Professional Installation
                  </h4>
                  <p className="text-sm text-neutral-600 mb-4">
                    Let our experts set up your smart home for you
                  </p>
                  <button className="text-sage-600 hover:text-sage-700 font-medium text-sm">
                    Learn More →
                  </button>
                </div>
                <div className="bg-neutral-50 rounded-xl p-6">
                  <h4 className="font-semibold text-neutral-900 mb-2">
                    Smart Home Guide
                  </h4>
                  <p className="text-sm text-neutral-600 mb-4">
                    Download our free beginner\'s guide to smart homes
                  </p>
                  <button className="text-sage-600 hover:text-sage-700 font-medium text-sm">
                    Download PDF →
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-4 justify-center">
              <button
                onClick={() => {
                  setShowResults(false)
                  setCurrentQuestion(0)
                  setAnswers({})
                }}
                className="smart-button-outline px-6 py-2"
              >
                Retake Quiz
              </button>
              <button className="smart-button-primary px-6 py-2">
                Save My Results
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-neutral-600">
              Question {currentQuestion + 1} of {QUESTIONS.length}
            </span>
            <span className="text-sm font-medium text-neutral-600">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-sage-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={question.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-3">
              {question.title}
            </h2>
            {question.description && (
              <p className="text-lg text-neutral-600 mb-8">
                {question.description}
              </p>
            )}

            <div className={cn(
              'grid gap-4',
              question.options.length <= 3 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'
            )}>
              {question.options.map((option) => {
                const isSelected = question.type === 'single' 
                  ? answers[question.id] === option.value
                  : (answers[question.id] as string[] || []).includes(option.value)

                return (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className={cn(
                      'relative p-6 rounded-xl border-2 transition-all text-left',
                      isSelected
                        ? 'border-sage-500 bg-sage-50'
                        : 'border-neutral-200 hover:border-sage-200 bg-white'
                    )}
                  >
                    {option.icon && (
                      <option.icon className={cn(
                        'h-8 w-8 mb-3',
                        isSelected ? 'text-sage-600' : 'text-neutral-400'
                      )} />
                    )}
                    <h3 className={cn(
                      'font-semibold mb-1',
                      isSelected ? 'text-sage-700' : 'text-neutral-900'
                    )}>
                      {option.label}
                    </h3>
                    {option.description && (
                      <p className="text-sm text-neutral-600">
                        {option.description}
                      </p>
                    )}
                    {isSelected && (
                      <div className="absolute top-4 right-4">
                        <div className="w-6 h-6 bg-sage-500 rounded-full flex items-center justify-center">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    )}
                  </button>
                )
              })}
            </div>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 font-medium transition-colors',
                  currentQuestion === 0
                    ? 'text-neutral-400 cursor-not-allowed'
                    : 'text-neutral-600 hover:text-neutral-900'
                )}
              >
                <ArrowLeft className="h-4 w-4" />
                Previous
              </button>

              <button
                onClick={handleNext}
                disabled={!isAnswered()}
                className={cn(
                  'smart-button-primary px-6 py-2',
                  !isAnswered() && 'opacity-50 cursor-not-allowed'
                )}
              >
                {currentQuestion === QUESTIONS.length - 1 ? 'Get Results' : 'Next'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}