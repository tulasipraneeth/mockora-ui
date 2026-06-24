import {
  GraduationCap,
  FlaskConical,
  Stethoscope,
  Landmark,
  Building2,
  Shield,
  Train,
  BookOpen,
  MapPin
} from "lucide-react";

const exams = [
  {
    name: "GATE",
    icon: GraduationCap,
    color: "text-green-600"
  },
  {
    name: "JEE Main",
    icon: FlaskConical,
    color: "text-orange-500"
  },
  {
    name: "NEET",
    icon: Stethoscope,
    color: "text-purple-500"
  },
  {
    name: "UPSC",
    icon: Landmark,
    color: "text-blue-500"
  },
  {
    name: "Banking",
    icon: Building2,
    color: "text-red-500"
  },
  {
    name: "SSC",
    icon: BookOpen,
    color: "text-green-500"
  },
  {
    name: "RRB",
    icon: Train,
    color: "text-pink-500"
  },
  {
    name: "Police",
    icon: Shield,
    color: "text-blue-600"
  },
  {
    name: "Teaching",
    icon: BookOpen,
    color: "text-yellow-500"
  },
  {
    name: "State PSC",
    icon: MapPin,
    color: "text-purple-500"
  }
];

export default function PopularExams() {
  return (
    <section className="bg-white py-16">

      <div className="max-w-[1400px] mx-auto px-8">

        <h2
          className="
          text-4xl
          font-bold
          text-center
          mb-12
          "
        >
          Popular Exams
        </h2>

        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-5
          gap-6
          "
        >
          {exams.map(
            (exam) => {
              const Icon =
                exam.icon;

              return (
                <div
                  key={exam.name}
                  className="
                  bg-white
                  border
                  border-gray-100
                  rounded-3xl
                  p-6
                  shadow-sm
                  hover:shadow-lg
                  transition
                  text-center
                  cursor-pointer
                  "
                >

                  <div
                    className="
                    flex
                    justify-center
                    mb-4
                    "
                  >
                    <Icon
                      size={34}
                      className={
                        exam.color
                      }
                    />
                  </div>

                  <p
                    className="
                    font-semibold
                    text-gray-800
                    "
                  >
                    {exam.name}
                  </p>

                </div>
              );
            }
          )}
        </div>

      </div>

    </section>
  );
}