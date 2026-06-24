export default function TopExams() {

  const exams = [
    "GATE",
    "JEE Main",
    "NEET",
    "UPSC",
    "SSC CGL"
  ];

  return (
    <div
      className="
      bg-white
      rounded-3xl
      p-6
      border
      border-gray-100
      shadow-sm
      "
    >

      <h3
        className="
        text-xl
        font-bold
        mb-5
        "
      >
        Top Exams
      </h3>

      <div className="space-y-3">

        {exams.map((exam) => (

          <div
            key={exam}
            className="
            flex
            items-center
            justify-between
            py-3
            border-b
            border-gray-100
            "
          >

            <span>{exam}</span>

            <span
              className="
              text-green-600
              font-semibold
              "
            >
              →
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}