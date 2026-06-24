import {
  Cpu,
  Stethoscope,
  Landmark,
  Building2,
  Train,
  Shield,
  BookOpen,
  MapPinned,
} from "lucide-react";

const exams = [
  {
    title: "Engineering",
    exams: "120+ Exams",
    icon: Cpu,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Medical",
    exams: "45+ Exams",
    icon: Stethoscope,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Government Jobs",
    exams: "200+ Exams",
    icon: Landmark,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Banking",
    exams: "35+ Exams",
    icon: Building2,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Railways",
    exams: "25+ Exams",
    icon: Train,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Defence",
    exams: "40+ Exams",
    icon: Shield,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Teaching",
    exams: "60+ Exams",
    icon: BookOpen,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "State Exams",
    exams: "80+ Exams",
    icon: MapPinned,
    color: "bg-cyan-100 text-cyan-600",
  },
];

export default function ExamGrid() {
  return (
    <div
      className="
      grid
      md:grid-cols-2
      lg:grid-cols-4
      gap-6
      "
    >
      {exams.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
            bg-white
            rounded-3xl
            p-6
            shadow-sm
            border
            border-gray-100
            hover:shadow-lg
            transition
            cursor-pointer
            "
          >
            <div
              className={`
              w-14
              h-14
              rounded-2xl
              flex
              items-center
              justify-center
              mb-5
              ${item.color}
            `}
            >
              <Icon size={28} />
            </div>

            <h3
              className="
              text-xl
              font-bold
              mb-2
              "
            >
              {item.title}
            </h3>

            <p className="text-gray-500">
              {item.exams}
            </p>
          </div>
        );
      })}
    </div>
  );
}