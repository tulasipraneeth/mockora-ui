import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function ForgotPassword() {

  const [email, setEmail] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleReset =
    async () => {

      if (!email) {
        alert("Enter your email");
        return;
      }

      setLoading(true);

      const { error } =
        await supabase.auth.resetPasswordForEmail(
          email,
          {
            redirectTo:
              window.location.origin +
              "/reset-password"
          }
        );

      setLoading(false);

      if (error) {
        alert(error.message);
        return;
      }

      alert(
        "Password reset link sent to your email."
      );

    };

  return (

    <div
      className="
      min-h-screen
      bg-[#F7FBF8]
      flex
      items-center
      justify-center
      px-4
      "
    >

      <div
        className="
        bg-white
        p-10
        rounded-3xl
        shadow-sm
        w-full
        max-w-md
        "
      >

        <h1
          className="
          text-3xl
          font-bold
          text-center
          mb-2
          "
        >
          Forgot Password
        </h1>

        <p
          className="
          text-gray-500
          text-center
          mb-8
          "
        >
          Enter your email to receive a reset link
        </p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="
          w-full
          border
          rounded-xl
          p-3
          mb-6
          "
        />

        <button
          onClick={handleReset}
          disabled={loading}
          className="
          w-full
          bg-green-600
          text-white
          py-3
          rounded-xl
          font-semibold
          "
        >
          {loading
            ? "Sending..."
            : "Send Reset Link"}
        </button>

        <div className="text-center mt-6">

          <Link
            to="/login"
            className="
            text-green-600
            font-medium
            "
          >
            Back to Login
          </Link>

        </div>

      </div>

    </div>

  );

}