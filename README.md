# Quiz Application

A feature-rich quiz application that allows users to participate in quizzes, track their progress, and view results. Admins can create and manage quizzes, analyze quiz performance, and view leaderboard statistics.

## 🚀 Key Features

- **User Authentication** – Secure login and registration system.
- **Quiz Management** – Admins can create, edit, and delete quizzes.
- **Question Bank** – Add, update, and remove quiz questions.
- **User Dashboard** – View quiz history and performance.
- **Leaderboard** – Track top performers.
- **Quiz Analytics** – Admin dashboard for tracking quiz statistics.
- **Light/Dark Mode** – Toggle between themes.
- **Responsive Design** – Optimized for all screen sizes.

## 📌 Usage Instructions

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/nafistarik/algo-quiz.git
cd algo-quiz
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Development Server
```sh
npm run dev
```

### 4️⃣ Open in Browser
Visit: `http://localhost:3000`

## 🛠️ Technologies Used

- **Frontend:** Next.js 15, React.js, TypeScript, Tailwind CSS
- **State Management:** React.js, RTK Query
- **Authentication:** JWT Authentication
- **Data Visualization:** Recharts (for analytics)
- **Deployment:** Vercel

## 📂 Project Structure
```bash
📦 quiz-platform
├── 📂 components    # Reusable UI components
├── 📂 pages         # Next.js pages
├── 📂 styles        # Global and component-specific styles
├── 📂 utils         # Helper functions
└── package.json     # Dependencies and scripts
```

## 📌 Application Pages & Features

### **1️⃣ Home Page**
- Hero section with CTA to start quizzes.
- List of available quizzes with filtering and search.

### **2️⃣ Authentication Pages**
- **Login & Signup:** Secure user authentication.
- **User Roles:** Users and Admins.

### **3️⃣ Quiz Page**
- Displays quiz questions one at a time.
- Timer for each quiz attempt.
- Tracks correct and incorrect answers.

### **4️⃣ Results & Leaderboard**
- View quiz performance after completion.
- Leaderboard ranking top users.

### **5️⃣ Admin Dashboard**
- **Manage Quizzes:** Create, edit, delete quizzes.
- **Quiz Analytics:** Track total attempts, scores, and performance trends.
- **User Management:** View and manage registered users.

### **6️⃣ User Dashboard**
- View completed quizzes and scores.
- Access detailed quiz history.

## ⚙️ Additional Features

- **Modals for Creating & Editing Quizzes** – Avoids unnecessary page reloads.
- **Animations & Transitions** – Smooth UI experience.
- **API Handling with RTK Query** – Efficient state and data management.
- **Accessibility Support** – Keyboard and screen-reader friendly.

## 📌 Deployment

- The application is deployed on **Vercel** for seamless performance and scalability.

## 📞 Support

For any issues or feature requests, feel free to raise an issue in the repository or contact the project maintainers.

---

🎯 **Start Quizzing Now!** 🚀

