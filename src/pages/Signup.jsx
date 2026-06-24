import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Signup() {

  const navigate = useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [confirmPassword,
    setConfirmPassword] =
    useState("");

  const [loading,
    setLoading] =
    useState(false);

  const handleSignup =
    async () => {

      if (
        !name ||
        !email ||
        !password ||
        !confirmPassword
      ) {

        alert(
          "Please fill all fields"
        );

        return;

      }

      if (
        password !==
        confirmPassword
      ) {

        alert(
          "Passwords do not match"
        );

        return;

      }

      setLoading(true);

      const {
        error
      } =
        await supabase.auth.signUp({

          email,

          password,

          options: {

            data: {

              full_name: name

            }

          }

        });

      setLoading(false);

      if (error) {

        alert(error.message);

        return;

      }

      alert(
        "Account created successfully. Check your email."
      );

      navigate("/login");

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
          text-center
          mb-2
          "
        >
          Create Account
        </h1>

        <p
          className="
          text-gray-500
          text-center
          mb-8
          "
        >
          Join Mockora and start practicing
        </p>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
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
          mb-4
          "
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(
              e.target.value
            )
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
          onClick={handleSignup}
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
            ? "Creating..."
            : "Create Account"}
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

          Already have an account?{" "}

          <Link
            to="/login"
            className="
            text-green-600
            font-semibold
            "
          >
            Login
          </Link>

        </div>

      </div>

    </div>

  );

}