import { useEffect, useState } from "react";

export default function Dashboard() {

  const [stats, setStats] =
    useState({
      accuracy: 0,
      tests: 0,
      solved: 0,
      bookmarks: 0,
      wrong: 0
    });

  useEffect(() => {

    const history =
      JSON.parse(
        localStorage.getItem(
          "attemptHistory"
        ) || "[]"
      );

    const bookmarks =
      JSON.parse(
        localStorage.getItem(
          "bookmarks"
        ) || "[]"
      );

    const wrongQuestions =
      JSON.parse(
        localStorage.getItem(
          "wrongQuestions"
        ) || "[]"
      );

    let tests =
      history.length;

    let solved = 0;

    let correct = 0;

    history.forEach(test => {

      solved +=
        test.correct +
        test.wrong;

      correct +=
        test.correct;

    });

    const accuracy =
      solved > 0
        ? Math.round(
            (correct /
              solved) *
              100
          )
        : 0;

    setStats({

      accuracy,

      tests,

      solved,

      bookmarks:
        bookmarks.length,

      wrong:
        wrongQuestions.length

    });

  }, []);

  return (

    <div className="bg-[#F7FBF8] min-h-screen">

      <div
        className="
        max-w-7xl
        mx-auto
        px-8
        py-10
        "
      >

        <h1
          className="
          text-5xl
          font-bold
          mb-10
          "
        >
          Dashboard
        </h1>

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-5
          gap-6
          "
        >

          <div
            className="
            bg-white
            rounded-3xl
            p-6
            shadow-sm
            "
          >

            <div className="flex justify-center mb-4">

  <div className="relative w-24 h-24">

    <svg
      className="w-24 h-24 -rotate-90"
      viewBox="0 0 100 100"
    >

      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="#E5E7EB"
        strokeWidth="10"
        fill="none"
      />

      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="#16A34A"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="251.2"
        strokeDashoffset={
          251.2 -
          (251.2 * stats.accuracy) / 100
        }
      />

    </svg>

    <div
      className="
      absolute
      inset-0
      flex
      items-center
      justify-center
      text-xl
      font-bold
      text-green-600
      "
    >
      {stats.accuracy}%
    </div>

  </div>

</div>


            <div className="text-gray-500">
              Accuracy
            </div>

          </div>

          <div
            className="
            bg-white
            rounded-3xl
            p-6
            shadow-sm
            "
          >

            <div className="text-4xl font-bold">
              {stats.tests}
            </div>

            <div className="text-gray-500">
              Tests Completed
            </div>

          </div>

          <div
            className="
            bg-white
            rounded-3xl
            p-6
            shadow-sm
            "
          >

            <div className="text-4xl font-bold">
              {stats.solved}
            </div>

            <div className="text-gray-500">
              Questions Solved
            </div>

          </div>

          <div
            className="
            bg-white
            rounded-3xl
            p-6
            shadow-sm
            "
          >

            <div className="text-4xl font-bold">
              {stats.bookmarks}
            </div>

            <div className="text-gray-500">
              Bookmarks
            </div>

          </div>

          <div
            className="
            bg-white
            rounded-3xl
            p-6
            shadow-sm
            "
          >

            <div className="text-4xl font-bold text-red-500">
              {stats.wrong}
            </div>

            <div className="text-gray-500">
              Wrong Questions
            </div>

          </div>

        </div>
        <div
  className="
  mt-10
  bg-white
  rounded-3xl
  p-8
  shadow-sm
  "
>

  <h2
    className="
    text-2xl
    font-bold
    mb-6
    "
  >
    Recent Activity
  </h2>

  <p className="text-gray-500">
    Recent test attempts will appear here.
  </p>

</div>
<div
  className="
  mt-10
  bg-white
  rounded-3xl
  p-8
  shadow-sm
  "
>

  <h2
    className="
    text-2xl
    font-bold
    mb-6
    "
  >
    Quick Actions
  </h2>

  <div className="flex gap-4 flex-wrap">

    <button
      className="
      bg-green-600
      text-white
      px-6
      py-3
      rounded-xl
      "
    >
      Practice PYQs
    </button>

    <button
      className="
      bg-blue-600
      text-white
      px-6
      py-3
      rounded-xl
      "
    >
      View Bookmarks
    </button>

    <button
      className="
      bg-red-500
      text-white
      px-6
      py-3
      rounded-xl
      "
    >
      Wrong Practice
    </button>

  </div>

</div>

      </div>

    </div>

  );

}