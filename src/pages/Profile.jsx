import { useEffect, useState } from "react";
import { User, Mail, Shield, Calendar } from "lucide-react";
import { supabase } from "../lib/supabase";

export default function Profile() {

  const [user, setUser] = useState(null);

  useEffect(() => {

    supabase.auth.getUser()
      .then(({ data }) => {

        setUser(data.user);

      });

  }, []);

  if (!user) {

    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  }

  return (

    <div className="bg-[#F7FBF8] min-h-screen py-10">

      <div className="max-w-4xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-sm p-8">

          {/* Header */}

          <div className="flex items-center gap-6">

            <div
              className="
              w-24
              h-24
              rounded-full
              bg-green-600
              text-white
              flex
              items-center
              justify-center
              text-4xl
              font-bold
              "
            >
              {(user.user_metadata?.full_name || user.email)
                ?.charAt(0)
                .toUpperCase()}
            </div>

            <div>

              <h1 className="text-3xl font-bold">
                {user.user_metadata?.full_name || "Mockora User"}
              </h1>

              <p className="text-gray-500 mt-1">
                {user.email}
              </p>

            </div>

          </div>

          {/* Info Cards */}

          <div className="grid md:grid-cols-2 gap-5 mt-10">

            <div className="border rounded-2xl p-5">

              <div className="flex items-center gap-3 mb-2">
                <User className="text-green-600" />
                <span className="font-semibold">
                  Full Name
                </span>
              </div>

              <p className="text-gray-600">
                {user.user_metadata?.full_name || "Not Available"}
              </p>

            </div>

            <div className="border rounded-2xl p-5">

              <div className="flex items-center gap-3 mb-2">
                <Mail className="text-green-600" />
                <span className="font-semibold">
                  Email
                </span>
              </div>

              <p className="text-gray-600">
                {user.email}
              </p>

            </div>

            <div className="border rounded-2xl p-5">

              <div className="flex items-center gap-3 mb-2">
                <Shield className="text-green-600" />
                <span className="font-semibold">
                  Current Plan
                </span>
              </div>

              <p className="text-gray-600">
                Free Plan
              </p>

            </div>

            <div className="border rounded-2xl p-5">

              <div className="flex items-center gap-3 mb-2">
                <Calendar className="text-green-600" />
                <span className="font-semibold">
                  Joined
                </span>
              </div>

              <p className="text-gray-600">
                {new Date(
                  user.created_at
                ).toLocaleDateString()}
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}