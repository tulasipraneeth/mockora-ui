
import {
  FileText,
  ClipboardList,
  Bookmark,
  CircleX,
  BookOpen,
  Users,
  TrendingUp,
  GraduationCap
} from "lucide-react";
export default function Hero() {
return ( <section className="bg-[#F7FBF8]">


  <div
    className="
    max-w-[1400px]
    mx-auto
    px-8
    py-16
    grid
    lg:grid-cols-2
    gap-12
    items-center
    "
  >

    {/* LEFT SIDE */}

    <div>

      <p
        className="
        text-green-600
        font-bold
        text-2xl
        mb-4
        "
      >
        Practice. Analyze. Succeed.
      </p>

      <h1
        className="
        text-6xl
        font-extrabold
        text-slate-900
        leading-tight
        mb-6
        "
      >
        Smartest PYQ
        <br />
        & Mock Test Platform
      </h1>

      <p
        className="
        text-xl
        text-gray-600
        max-w-2xl
        mb-10
        "
      >
        Practice Previous Year Questions,
        Take Mock Tests and Boost your
        Preparation for All Competitive Exams.
      </p>

      <div className="flex gap-4 mb-12">

        <button
          className="
          bg-green-600
          hover:bg-green-700
          text-white
          px-8
          py-4
          rounded-xl
          font-semibold
          "
        >
          Start Practicing Now →
        </button>

        <button
          className="
          bg-white
          border
          border-gray-200
          px-8
          py-4
          rounded-xl
          font-semibold
          "
        >
          Explore Exams
        </button>

      </div>

      {/* Stats */}

      <div
        className="
        grid
        grid-cols-2
        lg:grid-cols-4
        gap-4
        "
      >

        <div className="bg-white p-5 rounded-2xl shadow-sm">
  <div className="text-3xl mb-2">📚</div>

  <div className="text-3xl font-bold">
    500+
  </div>

  <div className="text-gray-500">
    Exams
  </div>
</div>

<div className="bg-white p-5 rounded-2xl shadow-sm">
  <div className="text-3xl mb-2">📝</div>

  <div className="text-3xl font-bold">
    50,000+
  </div>

  <div className="text-gray-500">
    PYQs
  </div>
</div>

<div className="bg-white p-5 rounded-2xl shadow-sm">
  <div className="text-3xl mb-2">👨‍🎓</div>

  <div className="text-3xl font-bold">
    10,000+
  </div>

  <div className="text-gray-500">
    Students
  </div>
</div>

<div className="bg-white p-5 rounded-2xl shadow-sm">
  <div className="text-3xl mb-2">📈</div>

  <div className="text-3xl font-bold">
    1M+
  </div>

  <div className="text-gray-500">
    Attempts
  </div>
</div>

      </div>

    </div>

    {/* RIGHT SIDE */}

    <div className="relative flex justify-center">

      {/* Floating Progress Card */}

      <div
        className="
        absolute
        top-0
        right-8
        bg-white
        rounded-3xl
        shadow-xl
        w-[380px]
        p-6
        z-10
        "
      >

        <h3
          className="
          font-bold
          text-lg
          mb-6
          "
        >
          Your Progress
        </h3>

        <div
          className="
          grid
          grid-cols-2
          gap-6
          mb-8
          "
        >

         <div className="flex items-center gap-4">

  <div className="relative w-20 h-20">

    <svg
      className="w-20 h-20 -rotate-90"
      viewBox="0 0 100 100"
    >

      {/* Background Ring */}

      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="#E5E7EB"
        strokeWidth="10"
        fill="none"
      />

      {/* Progress Ring */}

      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="#16A34A"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="251.2"
        strokeDashoffset="70"
      />

    </svg>

    <div
      className="
      absolute
      inset-0
      flex
      items-center
      justify-center
      font-bold
      text-lg
      text-green-600
      "
    >
      72%
    </div>

  </div>

  <div>

    <div
      className="
      text-3xl
      font-bold
      "
    >
      72%
    </div>

    <div className="text-gray-500">
      Accuracy
    </div>

  </div>

</div>

          <div>
            <div className="text-gray-500">
              Tests Completed
            </div>
            <div
              className="
              text-4xl
              font-bold
              "
            >
              48
            </div>

            

          </div>

          <div>

            <div
              className="
              text-4xl
              font-bold
              "
            >
              1240
            </div>

            <div className="text-gray-500">
              Questions Solved
            </div>

          </div>

          <div>

            <div
              className="
              text-4xl
              font-bold
              "
            >
              156
            </div>

            <div className="text-gray-500">
              Bookmarks
            </div>

          </div>

        </div>

        <div
          className="
          grid
          grid-cols-4
          gap-4
          text-center
          "
        >

          <div className="flex flex-col items-center gap-2">

            <FileText
              size={24}
              className="text-green-600"
            />

            <span className="text-gray-700 text-sm">
              PYQs
            </span>

          </div>

          <div className="flex flex-col items-center gap-2">

            <ClipboardList
              size={24}
              className="text-green-600"
            />

            <span className="text-gray-700 text-sm">
              Mock Tests
            </span>

          </div>

          <div className="flex flex-col items-center gap-2">

            <Bookmark
              size={24}
              className="text-green-600"
            />

            <span className="text-gray-700 text-sm">
              Bookmarks
            </span>

          </div>

          <div className="flex flex-col items-center gap-2">

            <CircleX
              size={24}
              className="text-red-500"
            />

            <span className="text-gray-700 text-sm">
              Wrong Practice
            </span>

          </div>

        </div>

      </div>

      {/* Hero Illustration */}

      <img
        src="/hero.png"
        alt="Hero"
        className="
        w-full
        max-w-[720px]
        mt-20
        "
      />

    </div>

  </div>

</section>


);
}
