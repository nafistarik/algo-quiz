import ProfileIntro from "@/app/profile/_components/ProfileIntro";
// import ProfileTabs from "@/app/profile/_components/ProfileTabs";
import { SiteHeader } from "@/components/SiteHeader";
import { QuizHistoryList } from "./_components/QuizHistoryList";

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 container py-8">
        <ProfileIntro />
        {/* <ProfileTabs /> */}
        <QuizHistoryList/>
      </main>
    </div>
  );
}
