import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleLogin =
    async () => {

      if (!email || !password) {

        alert(
          "Please fill all fields"
        );

        return;

      }

      setLoading(true);

      const {
        error
      } =
        await supabase.auth.signInWithPassword({

          email,

          password

        });

      setLoading(false);

      if (error) {

        alert(error.message);

        return;

      }

      navigate("/dashboard");

    };

  const handleGoogleLogin =
    async () => {

      const { error } =
        await supabase.auth.signInWithOAuth({

          provider: "google",

          options: {

            redirectTo:
              window.location.origin

          }

        });

      if (error) {

        alert(error.message);

      }

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
          text-4xl
          font-bold
          mb-2
          text-center
          "
        >
          Welcome Back
        </h1>

        <p
          className="
          text-gray-500
          text-center
          mb-8
          "
        >
          Login to continue
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
          mb-4
          "
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="
          w-full
          border
          rounded-xl
          p-3
          mb-2
          "
        />

        <div className="text-right mb-6">

          <Link
            to="/forgot-password"
            className="
            text-green-600
            text-sm
            hover:underline
            "
          >
            Forgot Password?
          </Link>

        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          className="
          w-full
          bg-green-600
          hover:bg-green-700
          text-white
          py-3
          rounded-xl
          font-semibold
          transition
          "
        >
          {loading
            ? "Logging in..."
            : "Login"}
        </button>

        <div className="my-6">

          <div
            className="
            flex
            items-center
            gap-3
            "
          >

            <div className="flex-1 h-px bg-gray-200" />

            <span className="text-gray-500 text-sm">
              OR
            </span>

            <div className="flex-1 h-px bg-gray-200" />

          </div>

        </div>

        <button
          onClick={handleGoogleLogin}
          className="
          w-full
          border
          border-gray-300
          py-3
          rounded-xl
          font-medium
          flex
          items-center
          justify-center
          gap-3
          hover:bg-gray-50
          "
        >

          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="w-5 h-5"
          />

          Continue with Google

        </button>

        <div
          className="
          text-center
          mt-6
          text-gray-600
          "
        >

          Don't have an account?{" "}

          <Link
            to="/signup"
            className="
            text-green-600
            font-semibold
            "
          >
            Sign Up
          </Link>

        </div>

      </div>

    </div>

  );

}