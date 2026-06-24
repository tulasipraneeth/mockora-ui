
import {
  CheckCircle,
  Shield,
  RefreshCw,
  Headphones,
  ChevronDown,
  XCircle,
} from "lucide-react";
import { useState } from "react";
const plans = [
  {
    title: "1 Month",
    price: "₹59",
    subtitle: "/ month",
    popular: true,
  },
  {
    title: "3 Months",
    price: "₹165",
    subtitle: "/ 3 months",
  },
  {
    title: "6 Months",
    price: "₹319",
    subtitle: "/ 6 months",
  },
  {
    title: "12 Months",
    price: "₹599",
    subtitle: "/ year",
  },
];

const features = [
  "Access to PYQs",
  "Bookmark Questions",
  "Progress Tracking",
  "Performance Overview",
  "Exam-wise Practice",
  "Previous Year Papers",
];

export default function Pricing() {
    const [openFaq, setOpenFaq] =
  useState(null);

const faqs = [
  {
    question:
      "Can I change my plan later?",
    answer:
      "Yes. You can upgrade or downgrade your plan at any time."
  },
  {
    question:
      "How does billing work?",
    answer:
      "Billing is charged once at the start of your selected subscription period."
  },
  {
    question:
      "Can I get a refund?",
    answer:
      "Refund requests are reviewed according to Mockora's refund policy."
  },
  {
    question:
      "Do all plans include access to every exam?",
    answer:
      "Yes. All plans provide access to every supported exam category and PYQ collection."
  },
  {
    question:
      "What payment methods do you accept?",
    answer:
      "We support UPI, Credit Cards, Debit Cards, Net Banking and Wallet payments."
  }
];
  return (
    <div className="bg-[#F7FBF8] min-h-screen">

      <div className="max-w-7xl mx-auto px-8 py-20">

        <h1
          className="
          text-5xl
          font-bold
          text-center
          mb-4
          "
        >
          Simple, Transparent Pricing
        </h1>

        <p
          className="
          text-center
          text-gray-500
          text-xl
          mb-16
          "
        >
          Choose the perfect plan for your exam preparation.
        </p>

        <div
          className="
          grid
          lg:grid-cols-4
          gap-8
          "
        >
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`
                bg-white
                rounded-3xl
                p-8
                border
                shadow-sm
                relative

                ${
                  plan.popular
                    ? "border-green-500"
                    : "border-gray-100"
                }
              `}
            >

              {plan.popular && (
                <div
                  className="
                  absolute
                  -top-3
                  left-1/2
                  -translate-x-1/2
                  bg-green-600
                  text-white
                  px-4
                  py-1
                  rounded-full
                  text-sm
                  "
                >
                  Most Popular
                </div>
              )}

              <h3
                className="
                text-2xl
                font-bold
                mb-4
                text-center
                "
              >
                {plan.title}
              </h3>

              <div
                className="
                text-center
                mb-8
                "
              >
                <div
                  className="
                  text-5xl
                  font-bold
                  "
                >
                  {plan.price}
                </div>

                <div className="text-gray-500">
                  {plan.subtitle}
                </div>
              </div>

              <div className="space-y-4 mb-8">

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
                      size={18}
                      className="text-green-600"
                    />

                    <span>{feature}</span>

                  </div>

                ))}

              </div>

              <button
                className="
                w-full
                bg-green-600
                hover:bg-green-700
                text-white
                py-3
                rounded-xl
                font-semibold
                "
              >
                Get Started
              </button>

            </div>
          ))}
        </div>
         <div
  className="
  mt-16
  bg-white
  rounded-3xl
  border
  border-gray-100
  shadow-sm
  p-8
  "
>

  <div
    className="
    grid
    md:grid-cols-2
    lg:grid-cols-4
    gap-8
    "
  >

    <div className="flex items-start gap-4">

      <div
        className="
        w-12
        h-12
        rounded-full
        bg-green-50
        flex
        items-center
        justify-center
        "
      >
        <Shield
          size={24}
          className="text-green-600"
        />
      </div>

      <div>
        <h3 className="font-bold">
          Secure & Reliable
        </h3>

        <p className="text-gray-500 text-sm">
          Your data is safe with us
        </p>
      </div>

    </div>

    <div className="flex items-start gap-4">

      <div
        className="
        w-12
        h-12
        rounded-full
        bg-green-50
        flex
        items-center
        justify-center
        "
      >
        <RefreshCw
          size={24}
          className="text-green-600"
        />
      </div>

      <div>
        <h3 className="font-bold">
          Regular Updates
        </h3>

        <p className="text-gray-500 text-sm">
          New exams & features added
        </p>
      </div>

    </div>

    <div className="flex items-start gap-4">

      <div
        className="
        w-12
        h-12
        rounded-full
        bg-green-50
        flex
        items-center
        justify-center
        "
      >
        <Headphones
          size={24}
          className="text-green-600"
        />
      </div>

      <div>
        <h3 className="font-bold">
          24/7 Support
        </h3>

        <p className="text-gray-500 text-sm">
          We're here to help
        </p>
      </div>

    </div>

    <div className="flex items-start gap-4">

      <div
        className="
        w-12
        h-12
        rounded-full
        bg-green-50
        flex
        items-center
        justify-center
        "
      >
        <XCircle
          size={24}
          className="text-green-600"
        />
      </div>

      <div>
        <h3 className="font-bold">
          Cancel Anytime
        </h3>

        <p className="text-gray-500 text-sm">
          No hidden conditions
        </p>
      </div>

    </div>

  </div>

</div>
<div className="mt-20">

  <h2
    className="
    text-4xl
    font-bold
    text-center
    mb-10
    "
  >
    Frequently Asked Questions
  </h2>

  <div className="space-y-4">

    {faqs.map(
      (faq, index) => (

        <div
          key={index}
          className="
          bg-white
          rounded-2xl
          border
          border-gray-200
          overflow-hidden
          "
        >

          <button
            onClick={() =>
              setOpenFaq(
                openFaq === index
                  ? null
                  : index
              )
            }
            className="
            w-full
            p-6
            flex
            justify-between
            items-center
            text-left
            "
          >

            <span
              className="
              font-medium
              text-lg
              "
            >
              {faq.question}
            </span>

            <ChevronDown
              size={20}
              className={`
                transition-transform
                ${
                  openFaq === index
                    ? "rotate-180"
                    : ""
                }
              `}
            />

          </button>

          {openFaq === index && (

            <div
              className="
              px-6
              pb-6
              text-gray-600
              "
            >
              {faq.answer}
            </div>

          )}

        </div>

      )
    )}

  </div>

</div>
      </div>

    </div>
  );
}