import CategorySidebar from "../components/exams/CategorySidebar";
import ExamGrid from "../components/exams/ExamGrid";
import TopExams from "../components/exams/TopExams";
import NewUserCard from "../components/exams/NewUserCard";
import TrendingExams from "../components/exams/TrendingExams";

export default function Exams() {
  
  return (
    <div className="bg-[#F7FBF8] min-h-screen">

      <div
        className="
        max-w-[1400px]
        mx-auto
        px-8
        py-10
        grid
        grid-cols-[250px_1fr_320px]
        gap-8
        "
      >

        {/* Left Sidebar */}

        <CategorySidebar />

        {/* Main Content */}

        <div>

          <h1
            className="
            text-4xl
            font-bold
            mb-8
            "
          >
            Explore Exams
          </h1>

          <ExamGrid />

          <div className="mt-8">

            <TrendingExams />

          </div>

        </div>

        {/* Right Side */}

        <div className="space-y-6">

          <TopExams />

          <NewUserCard />

        </div>
        

      </div>
      

    </div>
    
  );
}