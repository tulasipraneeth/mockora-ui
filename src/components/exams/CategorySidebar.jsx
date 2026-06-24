export default function CategorySidebar() {
  const categories = [
    "All Categories",
    "Engineering",
    "Medical",
    "Government Jobs",
    "Banking",
    "Railways",
    "Defence",
    "Teaching",
    "State Exams",
    "Other Exams",
  ];

  return (
    <div
      className="
      bg-white
      rounded-2xl
      border
      border-gray-100
      p-4
      "
    >
      {categories.map((category, index) => (
        <button
          key={category}
          className={`
            w-full
            text-left
            px-4
            py-3
            rounded-xl
            mb-2
            transition

            ${
              index === 0
                ? "bg-green-50 text-green-600 font-semibold"
                : "hover:bg-gray-50"
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
}