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
    status?: string
    questionCount: number
    questions: Question[]
    createdAt: string
    thumbnail? : string | StaticImageData | null
    totalAttempts?: number | null | undefined
  }
  
  export interface Question {
    id: string
    text: string
    options: {
      id: string
      text: string
    }[]
    correctAnswer?: string | null
    submittedAnswer?: string | null
    isCorrect?: boolean
  }
  
  export interface QuizResult {
    id: string
    quizId?: string
    quizTitle?: string
    totalQuestions?: number
    correctAnswers?: number
    wrongAnswers?: number
    questions: Question[]
  }

  export interface QuizResult1 {
    attempt_id: string;
    quiz: {
      id: string;
      title: string;
      total_marks: number;
    };
    percentage: string;
    submitted_answers: Answer[];
    correct_answers: CorrectAnswer[];
    submitted_at: string;
  }
  
  export interface Answer {
    question_id: string;
    answer: string;
  }
  
  export interface CorrectAnswer extends Answer {
    marks: number;
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
  
  