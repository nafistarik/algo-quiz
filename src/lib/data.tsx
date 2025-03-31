import defaultThumnail from "@/assets/images/home/default-thumbnail.png";
import defaultThumnail2 from "@/assets/images/home/default-thumbnail2.jpg";

export const popularQuizzes = [
  {
    id: "1",
    title: "Sorting Algorithms",
    description:
      "Test your knowledge of Quick Sort, Merge Sort, and Bubble Sort. Pick the best algorithm for each case!",
    status: "published",
    questionCount: 12,
    questions: [],
    createdAt: new Date().toISOString(),
    thumbnail: defaultThumnail,
    totalAttempts: 1,
  },
  {
    id: "2",
    title: "Graph Theory",
    description:
      "Explore graphs, BFS, DFS, and shortest path algorithms. Strengthen your problem-solving skills!",
    status: "published",
    questionCount: 15,
    questions: [],
    createdAt: new Date().toISOString(),
    thumbnail: defaultThumnail2,
    totalAttempts: 0,
  },
  {
    id: "3",
    title: "Dynamic Programming",
    description:
      "Master DP concepts like memoization and tabulation. Solve problems efficiently!",
    status: "published",
    questionCount: 10,
    questions: [],
    createdAt: new Date().toISOString(),
    thumbnail: defaultThumnail,
    totalAttempts: 0,
  },
  {
    id: "4",
    title: "Data Structures Basics",
    description:
      "Learn about arrays, linked lists, stacks, and trees. Build a strong foundation!",
    status: "published",
    questionCount: 4,
    questions: [],
    createdAt: new Date().toISOString(),
    thumbnail: null,
    totalAttempts: 1,
  },
];

export const quizDetails = {
  id: "4",
  title: "Data Structures Basics",
  description:
    "Learn about arrays, linked lists, stacks, and trees. Build a strong foundation!",
  createdAt: new Date().toISOString(),
  questionCount: 4,
  totalMarks: 30,
  questions: [
    {
      id: "q1",
      text: "Which data structure follows the Last In, First Out (LIFO) principle?",
      options: [
        { id: "a", text: "Queue" },
        { id: "b", text: "Stack" },
        { id: "c", text: "Linked List" },
        { id: "d", text: "Array" },
      ],
      marks: 5,
    },
    {
      id: "q2",
      text: "Which data structure is best suited for implementing recursion?",
      options: [
        { id: "a", text: "Stack" },
        { id: "b", text: "Queue" },
        { id: "c", text: "Array" },
        { id: "d", text: "Graph" },
      ],
      marks: 10,
    },
    {
      id: "q3",
      text: "What is the time complexity of accessing an element in an array by index?",
      options: [
        { id: "a", text: "O(1)" },
        { id: "b", text: "O(n)" },
        { id: "c", text: "O(log n)" },
        { id: "d", text: "O(n^2)" },
      ],
      marks: 10,
    },
    {
      id: "q4",
      text: "Which data structure is used to implement a priority queue?",
      options: [
        { id: "a", text: "Stack" },
        { id: "b", text: "Heap" },
        { id: "c", text: "Linked List" },
        { id: "d", text: "Graph" },
      ],
      marks: 5,
    },
  ],
};

// export const quizResult = {
//   id: "result-4",
//   quizId: "4",
//   quizTitle: "Data Structures Basics",
//   totalQuestions: 4,
//   correctAnswers: 3,
//   wrongAnswers: 1,
//   questions: [
//     {
//       id: "q1",
//       text: "Which data structure follows the Last In, First Out (LIFO) principle?",
//       options: [
//         { id: "a", text: "Queue" },
//         { id: "b", text: "Stack" },
//         { id: "c", text: "Linked List" },
//         { id: "d", text: "Array" },
//       ],
//       correctAnswerId: "b",
//       userAnswerId: "b",
//       isCorrect: true,
//     },
//     {
//       id: "q2",
//       text: "Which data structure is best suited for implementing recursion?",
//       options: [
//         { id: "a", text: "Stack" },
//         { id: "b", text: "Queue" },
//         { id: "c", text: "Array" },
//         { id: "d", text: "Graph" },
//       ],
//       correctAnswerId: "a",
//       userAnswerId: "a",
//       isCorrect: true,
//     },
//     {
//       id: "q3",
//       text: "What is the time complexity of accessing an element in an array by index?",
//       options: [
//         { id: "a", text: "O(1)" },
//         { id: "b", text: "O(n)" },
//         { id: "c", text: "O(log n)" },
//         { id: "d", text: "O(n^2)" },
//       ],
//       correctAnswerId: "a",
//       userAnswerId: "b",
//       isCorrect: false,
//     },
//     {
//       id: "q4",
//       text: "Which data structure is used to implement a priority queue?",
//       options: [
//         { id: "a", text: "Stack" },
//         { id: "b", text: "Heap" },
//         { id: "c", text: "Linked List" },
//         { id: "d", text: "Graph" },
//       ],
//       correctAnswerId: "b",
//       userAnswerId: "b",
//       isCorrect: true,
//     },
//   ],
// };

export const quizResult = {
  attempt_id: "result-4",
  quiz: {
    id: "4",
    title: "Data Structures Basics",
    total_marks: 20,
  },
  percentage: "75.00",
  submitted_answers: [
    {
      question_id: "q1",
      answer: "Stack",
    },
    {
      question_id: "q2",
      answer: "Stack",
    },
    {
      question_id: "q3",
      answer: "O(n)",
    },
    {
      question_id: "q4",
      answer: "Heap",
    },
  ],
  correct_answers: [
    {
      question_id: "q1",
      answer: "Stack",
      marks: 5,
    },
    {
      question_id: "q2",
      answer: "Stack",
      marks: 5,
    },
    {
      question_id: "q3",
      answer: "O(1)",
      marks: 0,
    },
    {
      question_id: "q4",
      answer: "Heap",
      marks: 5,
    },
  ],
  submitted_at: "2025-03-26T10:00:00.000Z",
};

export const leaderboardDatas = {
  quiz: {
    id: "4",
    title: "Data Structures Basics",
    description:
      "Learn about arrays, linked lists, stacks, and trees. Build a strong foundation!",
    total_marks: 30,
    total_questions: 4,
  },
  stats: {
    total_attempts: 7,
    average_score: "18.57",
    highest_score: 30,
    lowest_score: 5,
  },
  attempts: [
    {
      id: "1",
      user: {
        id: "u1",
        full_name: "John Doe",
        email: "john@example.com",
      },
      submitted_answers: [
        { question_id: "q1", answer: "Stack" },
        { question_id: "q2", answer: "Queue" },
        { question_id: "q3", answer: "O(n)" },
        { question_id: "q4", answer: "Heap" },
      ],
      correct_answers: [
        { question_id: "q1", answer: "Stack", marks: 5 },
        { question_id: "q4", answer: "Heap", marks: 5 },
      ],
    },
    {
      id: "2",
      user: {
        id: "u2",
        full_name: "Jane Smith",
        email: "jane@example.com",
      },
      submitted_answers: [
        { question_id: "q1", answer: "Stack" },
        { question_id: "q2", answer: "Stack" },
        { question_id: "q3", answer: "O(1)" },
        { question_id: "q4", answer: "Heap" },
      ],
      correct_answers: [
        { question_id: "q1", answer: "Stack", marks: 5 },
        { question_id: "q2", answer: "Stack", marks: 10 },
        { question_id: "q3", answer: "O(1)", marks: 10 },
        { question_id: "q4", answer: "Heap", marks: 5 },
      ],
    },
    {
      id: "3",
      user: {
        id: "u3",
        full_name: "Charlie Brown",
        email: "charlie@example.com",
      },
      submitted_answers: [
        { question_id: "q1", answer: "Queue" },
        { question_id: "q2", answer: "Stack" },
        { question_id: "q3", answer: "O(log n)" },
        { question_id: "q4", answer: "Stack" },
      ],
      correct_answers: [{ question_id: "q2", answer: "Stack", marks: 10 }],
    },
    {
      id: "4",
      user: {
        id: "u4",
        full_name: "Emily Clark",
        email: "emily@example.com",
      },
      submitted_answers: [
        { question_id: "q1", answer: "Stack" },
        { question_id: "q2", answer: "Stack" },
        { question_id: "q3", answer: "O(1)" },
        { question_id: "q4", answer: "Heap" },
      ],
      correct_answers: [
        { question_id: "q2", answer: "Stack", marks: 10 },
        { question_id: "q3", answer: "O(1)", marks: 10 },
        { question_id: "q4", answer: "Heap", marks: 5 },
      ],
    },
    {
      id: "5",
      user: {
        id: "u5",
        full_name: "Michael Scott",
        email: "michael@example.com",
      },
      submitted_answers: [
        { question_id: "q1", answer: "Array" },
        { question_id: "q2", answer: "Queue" },
        { question_id: "q3", answer: "O(n)" },
        { question_id: "q4", answer: "Graph" },
      ],
      correct_answers: [],
    },
    {
      id: "6",
      user: {
        id: "u6",
        full_name: "Rachel Green",
        email: "rachel@example.com",
      },
      submitted_answers: [
        { question_id: "q1", answer: "Stack" },
        { question_id: "q2", answer: "Stack" },
        { question_id: "q3", answer: "O(1)" },
        { question_id: "q4", answer: "Heap" },
      ],
      correct_answers: [
        { question_id: "q1", answer: "Stack", marks: 5 },
        { question_id: "q3", answer: "O(1)", marks: 10 },
        { question_id: "q4", answer: "Heap", marks: 5 },
      ],
    },
    {
      id: "7",
      user: {
        id: "u7",
        full_name: "Ross Geller",
        email: "ross@example.com",
      },
      submitted_answers: [
        { question_id: "q1", answer: "Stack" },
        { question_id: "q2", answer: "Stack" },
        { question_id: "q3", answer: "O(1)" },
        { question_id: "q4", answer: "Heap" },
      ],
      correct_answers: [
        { question_id: "q1", answer: "Stack", marks: 5 },
        { question_id: "q2", answer: "Stack", marks: 10 },
        { question_id: "q3", answer: "O(1)", marks: 10 },
        { question_id: "q4", answer: "Heap", marks: 5 },
      ],
    },
  ],
};

// export const leaderboardData = {
//   topUsers: [
//     {
//       id: "1",
//       name: "Sophia Cao",
//       rank: 1,
//       score: 980,
//       correctAnswers: 98,
//       wrongAnswers: 2,
//       avatar: "/placeholder.svg?height=100&width=100",
//       color: "#ea4c37",
//     },
//     {
//       id: "2",
//       name: "Emma Ema",
//       rank: 2,
//       score: 950,
//       correctAnswers: 95,
//       wrongAnswers: 5,
//       avatar: "/placeholder.svg?height=100&width=100",
//       color: "#29A0F3",
//     },
//     {
//       id: "3",
//       name: "Andrew W",
//       rank: 3,
//       score: 920,
//       correctAnswers: 92,
//       wrongAnswers: 8,
//       avatar: "/placeholder.svg?height=100&width=100",
//       color: "#6366f1",
//     },
//     {
//       id: "4",
//       name: "Raya Gil Endawa",
//       rank: 4,
//       score: 890,
//       correctAnswers: 89,
//       wrongAnswers: 11,
//       avatar: "/placeholder.svg?height=100&width=100",
//       color: "#ec4899",
//     },
//     {
//       id: "5",
//       name: "Olivia Ava",
//       rank: 5,
//       score: 870,
//       correctAnswers: 87,
//       wrongAnswers: 13,
//       avatar: "/placeholder.svg?height=100&width=100",
//       color: "#8b5cf6",
//     },
//     {
//       id: "6",
//       name: "David Joshua",
//       rank: 6,
//       score: 850,
//       correctAnswers: 85,
//       wrongAnswers: 15,
//       avatar: "/placeholder.svg?height=100&width=100",
//       color: "#14b8a6",
//     },
//     {
//       id: "7",
//       name: "Charlotte Harper",
//       rank: 7,
//       score: 830,
//       correctAnswers: 83,
//       wrongAnswers: 17,
//       avatar: "/placeholder.svg?height=100&width=100",
//       color: "#f59e0b",
//     },
//     {
//       id: "8",
//       name: "Mia Evelyn",
//       rank: 8,
//       score: 810,
//       correctAnswers: 81,
//       wrongAnswers: 19,
//       avatar: "/placeholder.svg?height=100&width=100",
//       color: "#8b5cf6",
//     },
//   ],
//   currentUser: {
//     id: "current",
//     name: "Current User",
//     rank: 12,
//     score: 750,
//     correctAnswers: 75,
//     wrongAnswers: 25,
//     avatar: "/placeholder.svg?height=100&width=100",
//     color: "#ea4c37",
//   },
//   quizStats: {
//     averageScore: 78,
//     highestScore: 98,
//     lowestScore: 45,
//     totalParticipants: 124,
//   },
// };

// export const userProfile = {
//   id: "u3",
//   name: "Charlie Brown",
//   email: "charlie@example.com",
//   avatar: "/placeholder.svg?height=100&width=100",
//   quizHistory: [
//     {
//       id: "1",
//       title: "Technology Quiz",
//       date: new Date().toISOString(),
//       score: 8,
//       totalQuestions: 10,
//       resultId: "result-1",
//     },
//     {
//       id: "2",
//       title: "Science Quiz",
//       date: new Date(Date.now() - 86400000).toISOString(),
//       score: 7,
//       totalQuestions: 10,
//       resultId: "result-2",
//     },
//     {
//       id: "3",
//       title: "History Quiz",
//       date: new Date(Date.now() - 172800000).toISOString(),
//       score: 9,
//       totalQuestions: 12,
//       resultId: "result-3",
//     },
//   ],
//   achievements: [
//     {
//       id: "1",
//       title: "Quiz Master",
//       description: "Complete 10 quizzes with a score of 80% or higher",
//       earnedDate: new Date(Date.now() - 86400000).toISOString(),
//       icon: "🏆",
//       color: "#ea4c37",
//     },
//     {
//       id: "2",
//       title: "Perfect Score",
//       description: "Get a perfect score on any quiz",
//       earnedDate: new Date(Date.now() - 172800000).toISOString(),
//       icon: "🌟",
//       color: "#29A0F3",
//     },
//     {
//       id: "3",
//       title: "Speed Demon",
//       description: "Complete a quiz in less than half the allotted time",
//       earnedDate: new Date(Date.now() - 259200000).toISOString(),
//       icon: "⚡",
//       color: "#6366f1",
//     },
//   ],
// };

export const adminQuizzes = [
  {
    id: "1",
    title: "Technology Quiz",
    description: "Test your knowledge of technology",
    status: "published",
    timeLimit: 10,
    questions: [
      {
        id: "q1",
        text: "What does CPU stand for?",
        options: [
          { id: "a", text: "Central Processing Unit" },
          { id: "b", text: "Computer Personal Unit" },
          { id: "c", text: "Central Processor Unifier" },
          { id: "d", text: "Central Process Utility" },
        ],
        correctAnswerId: "a",
      },
      {
        id: "q2",
        text: "Which company created the iPhone?",
        options: [
          { id: "a", text: "Google" },
          { id: "b", text: "Microsoft" },
          { id: "c", text: "Apple" },
          { id: "d", text: "Samsung" },
        ],
        correctAnswerId: "c",
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Science Quiz",
    description: "Test your knowledge of scientific principles",
    status: "draft",
    timeLimit: 15,
    questions: [
      {
        id: "q1",
        text: "What is the chemical symbol for gold?",
        options: [
          { id: "a", text: "Go" },
          { id: "b", text: "Au" },
          { id: "c", text: "Ag" },
          { id: "d", text: "Gd" },
        ],
        correctAnswerId: "b",
      },
    ],
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: "3",
    title: "History Quiz",
    description: "Test your knowledge of historical events",
    status: "published",
    timeLimit: 12,
    questions: [
      {
        id: "q1",
        text: "In what year did World War II end?",
        options: [
          { id: "a", text: "1943" },
          { id: "b", text: "1944" },
          { id: "c", text: "1945" },
          { id: "d", text: "1946" },
        ],
        correctAnswerId: "c",
      },
      {
        id: "q2",
        text: "Who was the first President of the United States?",
        options: [
          { id: "a", text: "Thomas Jefferson" },
          { id: "b", text: "John Adams" },
          { id: "c", text: "George Washington" },
          { id: "d", text: "James Madison" },
        ],
        correctAnswerId: "c",
      },
      {
        id: "q3",
        text: "What was the name of the first artificial satellite launched into space?",
        options: [
          { id: "a", text: "Sputnik 1" },
          { id: "b", text: "Explorer 1" },
          { id: "c", text: "Vanguard 1" },
          { id: "d", text: "Apollo 1" },
        ],
        correctAnswerId: "a",
      },
    ],
    createdAt: new Date(Date.now() - 172800000).toISOString(),
  },
];

export const analyticsData = {
  totalQuizzes: 24,
  newQuizzes: 5,
  totalAttempts: 1248,
  newAttempts: 187,
  averageScore: 72,
  scoreChange: 3,
  attemptsOverTime: Array.from({ length: 30 }, (_, i) => ({
    date: new Date(Date.now() - i * 86400000).toLocaleDateString(),
    attempts: Math.floor(Math.random() * 50) + 20,
  })).reverse(),
  quizPerformance: [
    { title: "Technology", score: 78 },
    { title: "Science", score: 65 },
    { title: "History", score: 72 },
    { title: "Geography", score: 81 },
    { title: "Literature", score: 68 },
  ],
  popularQuizzes: [
    { title: "Technology", attempts: 320 },
    { title: "Geography", attempts: 280 },
    { title: "History", attempts: 240 },
    { title: "Science", attempts: 210 },
    { title: "Literature", attempts: 198 },
  ],
  topPerformers: [
    { name: "Sophia C.", score: 92 },
    { name: "Emma E.", score: 88 },
    { name: "Andrew W.", score: 85 },
    { name: "Raya G.", score: 82 },
    { name: "Olivia A.", score: 79 },
  ],
  userActivity: Array.from({ length: 30 }, (_, i) => ({
    date: new Date(Date.now() - i * 86400000).toLocaleDateString(),
    users: Math.floor(Math.random() * 30) + 10,
  })).reverse(),
};

export const defaultUser = {
  id: "u4",
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "/placeholder.svg?height=100&width=100",
  role: "user",
};


export const allAchievements = [
  {
    id: 1,
    title: "Beginner Explorer",
    description: "Attempted first quiz",
    unlocked: false,
    icon: "🌱"
  },
  {
    id: 2,
    title: "Perfectionist",
    description: "Scored 100% on a quiz",
    unlocked: false,
    icon: "🏆"
  },
  {
    id: 3,
    title: "Consistent Genius",
    description: "Scored 70%+ in all quizzes",
    unlocked: false,
    icon: "🧠"
  },
  {
    id: 4,
    title: "Master of Quizzes",
    description: "Attempted 3+ quizzes",
    unlocked: false,
    icon: "👑"
  }
];

export const dummyQuizResults = [
  {
    attempt_id: "result-1",
    quiz: {
      id: "1",
      title: "Sorting Algorithms",
      total_marks: 60,
    },
    percentage: "100.00",
    submitted_at: "2025-03-25T10:00:00.000Z"
  },
  {
    attempt_id: "result-4",
    quiz: {
      id: "4",
      title: "Data Structures Basics",
      total_marks: 20,
    },
    percentage: "75.00",
    submitted_at: "2025-03-26T10:00:00.000Z"
  }
];


