import { StaticImageData } from "next/image"

export interface User {
    id: string
    name: string
    email: string
    avatar?: string
    rank: number
    score: number
    correctAnswers: number
    wrongAnswers: number
    color?: string
  }
  
  export interface Quiz {
    id: string
    title: string
    description: string
    status: string
    questionCount: number
    questions: Question[]
    createdAt: string
    thumbnail? : string | StaticImageData | null
    totalAttempts: number
  }
  
  export interface Question {
    id: string
    text: string
    options: {
      id: string
      text: string
    }[]
    correctAnswerId: string
    userAnswerId?: string
    isCorrect?: boolean
  }
  
  export interface QuizResult {
    id: string
    quizId: string
    quizTitle: string
    totalQuestions: number
    correctAnswers: number
    wrongAnswers: number
    questions: Question[]
  }
  
  export interface QuizHistory {
    id: string
    title: string
    date: string
    score: number
    totalQuestions: number
    resultId: string
  }
  
  export interface Achievement {
    id: string
    title: string
    description: string
    earnedDate: string
    icon?: string
    color?: string
  }
  
  export interface QuizStats {
    averageScore: number
    highestScore: number
    lowestScore: number
    totalParticipants: number
  }
  
  export interface QuizAnalyticsData {
    totalQuizzes: number
    newQuizzes: number
    totalAttempts: number
    newAttempts: number
    averageScore: number
    scoreChange: number
    attemptsOverTime: {
      date: string
      attempts: number
    }[]
    quizPerformance: {
      title: string
      score: number
    }[]
    popularQuizzes: {
      title: string
      attempts: number
    }[]
    topPerformers: {
      name: string
      score: number
    }[]
    userActivity: {
      date: string
      users: number
    }[]
  }
  
  