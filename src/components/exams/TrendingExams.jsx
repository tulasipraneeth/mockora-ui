export default function TrendingExams() {

  const trending = [
    "GATE 2027",
    "JEE Advanced",
    "NEET UG",
    "UPSC CSE",
    "SSC CGL",
    "IBPS PO",
    "RRB NTPC",
    "NDA",
    "CTET",
    "APPSC"
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
        Trending Exams
      </h3>

      <div
        className="
        flex
        flex-wrap
        gap-3
        "
      >

        {trending.map((item) => (

          <button
            key={item}
            className="
            px-4
            py-2
            rounded-full
            bg-green-50
            text-green-600
            hover:bg-green-100
            transition
            "
          >
            {item}
          </button>

        ))}

      </div>

    </div>
  );
}