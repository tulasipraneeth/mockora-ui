import { CheckCircle } from "lucide-react";

export default function WhyChoose() {
  const features = [
    "Previous Year Papers",
    "Exam-wise Practice",
    "Smart Test Analysis",
    "Bookmark & Revise",
    "Wrong Question Practice",
    "Progress Tracking",
  ];

  return (
    <section className="bg-[#F7FBF8] py-16">

      <div
        className="
        max-w-[1400px]
        mx-auto
        px-8
        grid
        lg:grid-cols-2
        gap-12
        items-center
        "
      >

        {/* Left Side */}

        <div>

          <h2
            className="
            text-4xl
            font-bold
            text-slate-900
            mb-10
            "
          >
            Why Students Choose Mockora?
          </h2>

          <div className="grid grid-cols-2 gap-y-8 gap-x-12">

            {features.map((feature) => (

              <div
                key={feature}
                className="
                flex
                items-center
                gap-3
                "
              >

                <CheckCircle
                  size={22}
                  className="text-green-600"
                />

                <span
                  className="
                  text-lg
                  font-medium
                  text-gray-800
                  "
                >
                  {feature}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <img
            src="/target.png"
            alt="Why Choose Mockora"
            className="
            w-full
            max-w-[500px]
            object-contain
            "
          />

        </div>

      </div>

    </section>
  );
}