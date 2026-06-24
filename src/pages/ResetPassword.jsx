import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function ResetPassword() {

  const navigate = useNavigate();

  const [password, setPassword] =
    useState("");

  const [confirmPassword,
    setConfirmPassword] =
    useState("");

  const [loading,
    setLoading] =
    useState(false);

  const handleReset =
    async () => {

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

      const { error } =
        await supabase.auth.updateUser({

          password

        });

      setLoading(false);

      if (error) {

        alert(error.message);

        return;

      }

      alert(
        "Password updated successfully"
      );

      navigate("/login");

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
          Reset Password
        </h1>

        <p
          className="
          text-gray-500
          text-center
          mb-8
          "
        >
          Enter your new password
        </p>

        <input
          type="password"
          placeholder="New Password"
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
            ? "Updating..."
            : "Update Password"}
        </button>

      </div>

    </div>

  );

}