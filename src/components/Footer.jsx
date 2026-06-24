import { Mail, Shield, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="
      bg-slate-900
      text-white
      mt-20
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-8
        py-16
        "
      >

        <div
          className="
          grid
          md:grid-cols-4
          gap-12
          "
        >

          {/* Brand */}

          <div>

            <h2
              className="
              text-3xl
              font-bold
              text-green-500
              mb-4
              "
            >
              Mockora
            </h2>

            <p className="text-gray-400">
              Practice. Analyze. Succeed.
            </p>

            <p className="text-gray-400 mt-3">
              Smartest PYQ &
              Competitive Exam Platform.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3
              className="
              text-lg
              font-semibold
              mb-4
              "
            >
              Quick Links
            </h3>

            <div className="space-y-3">

              <Link
                to="/"
                className="
                block
                text-gray-400
                hover:text-white
                "
              >
                Home
              </Link>

              <Link
                to="/exams"
                className="
                block
                text-gray-400
                hover:text-white
                "
              >
                Exams
              </Link>

              <Link
                to="/pricing"
                className="
                block
                text-gray-400
                hover:text-white
                "
              >
                Pricing
              </Link>

            </div>

          </div>

          {/* Legal */}

          <div>

            <h3
              className="
              text-lg
              font-semibold
              mb-4
              "
            >
              Legal
            </h3>

            <div className="space-y-3">

              <div
                className="
                flex
                items-center
                gap-2
                text-gray-400
                "
              >
                <Shield size={16} />
                Privacy Policy
              </div>

              <div
                className="
                flex
                items-center
                gap-2
                text-gray-400
                "
              >
                <FileText size={16} />
                Terms & Conditions
              </div>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3
              className="
              text-lg
              font-semibold
              mb-4
              "
            >
              Contact
            </h3>

            <div
              className="
              flex
              items-center
              gap-2
              text-gray-400
              "
            >
              <Mail size={16} />

              help@mockora.in
            </div>

          </div>

        </div>

        {/* Bottom */}

        <div
          className="
          border-t
          border-slate-700
          mt-12
          pt-6
          text-center
          text-gray-500
          "
        >
          © 2026 Mockora. All rights reserved.
        </div>

      </div>
    </footer>
  );
}