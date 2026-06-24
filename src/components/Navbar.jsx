import {
  Search,
  User,
  ChevronDown
} from "lucide-react";

import {
  Link,
  useNavigate
} from "react-router-dom";

import {
  useState,
  useEffect
} from "react";

import { supabase } from "../lib/supabase";

export default function Navbar() {

  const navigate = useNavigate();

  const [user, setUser] =
    useState(null);

  const [openMenu, setOpenMenu] =
    useState(false);

  useEffect(() => {

    supabase.auth
      .getUser()
      .then(({ data }) => {

        setUser(data.user);

      });

    const {
      data: authListener
    } =
      supabase.auth.onAuthStateChange(
        (_, session) => {

          setUser(
            session?.user ?? null
          );

        }
      );

    return () => {

      authListener.subscription.unsubscribe();

    };

  }, []);

  const handleLogout =
    async () => {

      await supabase.auth.signOut();

      setOpenMenu(false);

      navigate("/");

    };

  return (

    <nav
      className="
      bg-white
      border-b
      border-gray-100
      h-20
      "
    >

      <div
        className="
        max-w-[1500px]
        mx-auto
        h-full
        px-10
        flex
        items-center
        justify-between
        "
      >

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >

          <div
            className="
            w-12
            h-12
            rounded-xl
            bg-green-600
            text-white
            flex
            items-center
            justify-center
            font-bold
            text-2xl
            shadow-sm
            "
          >
            M
          </div>

          <span
            className="
            text-4xl
            font-bold
            text-green-600
            "
          >
            Mockora
          </span>

        </Link>

        {/* Menu */}

        <div
          className="
          hidden
          lg:flex
          items-center
          gap-10
          text-[18px]
          font-medium
          "
        >

          <Link
            to="/"
            className="
            text-green-600
            relative
            "
          >
            Home

            <span
              className="
              absolute
              left-0
              -bottom-7
              w-full
              h-[3px]
              bg-green-600
              rounded-full
              "
            />
          </Link>

          <Link to="/exams">
            Exams
          </Link>

          <Link to="/bookmarks">
            Bookmarks
          </Link>

          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/pricing">
            Pricing
          </Link>

        </div>

        {/* Right Side */}

        <div
          className="
          hidden
          lg:flex
          items-center
          gap-5
          "
        >

          {/* Search */}

          <div
            className="
            flex
            items-center
            gap-3
            border
            border-gray-200
            rounded-2xl
            px-5
            py-3
            w-80
            "
          >

            <Search
              size={20}
              className="text-gray-500"
            />

            <input
              type="text"
              placeholder="Search exams..."
              className="
              outline-none
              w-full
              text-gray-600
              "
            />

          </div>

          {/* Auth */}

{user ? (

  <div className="relative">

    <button
      onClick={() =>
        setOpenMenu(!openMenu)
      }
      className="
      flex
      items-center
      gap-2
      "
    >

      <div
        className="
        w-11
        h-11
        rounded-full
        bg-green-600
        text-white
        flex
        items-center
        justify-center
        font-semibold
        text-lg
        "
      >
        {
          (user?.user_metadata?.full_name ||
          user?.email)
            ?.charAt(0)
            ?.toUpperCase()
        }
      </div>

      <ChevronDown
        size={18}
        className={`
          transition-transform
          ${openMenu ? "rotate-180" : ""}
        `}
      />

    </button>

    {openMenu && (

      <div
        className="
        absolute
        right-0
        top-14
        w-72
        bg-white
        rounded-2xl
        shadow-xl
        border
        border-gray-100
        overflow-hidden
        z-50
        "
      >

        {/* User Info */}

        <div
          className="
          p-4
          flex
          items-center
          gap-3
          border-b
          "
        >

          <div
            className="
            w-12
            h-12
            rounded-full
            bg-green-600
            text-white
            flex
            items-center
            justify-center
            font-bold
            text-lg
            "
          >
            {
              (user?.user_metadata?.full_name ||
              user?.email)
                ?.charAt(0)
                ?.toUpperCase()
            }
          </div>

          <div className="min-w-0">

            <div
              className="
              font-semibold
              text-gray-900
              truncate
              "
            >
              {user?.user_metadata?.full_name || "User"}
            </div>

            <div
              className="
              text-sm
              text-gray-500
              truncate
              "
            >
              {user?.email}
            </div>

          </div>

        </div>

        {/* Menu Items */}

        <Link
          to="/profile"
          onClick={() =>
            setOpenMenu(false)
          }
          className="
          flex
          items-center
          gap-3
          px-4
          py-3
          hover:bg-gray-50
          transition
          "
        >
          <User size={18} />
          My Profile
        </Link>

        <button
          onClick={handleLogout}
          className="
          w-full
          flex
          items-center
          gap-3
          px-4
          py-3
          text-red-500
          hover:bg-red-50
          transition
          "
        >
          🚪 Logout
        </button>

      </div>

    )}

  </div>

) : (

  <Link
    to="/login"
    className="
    bg-green-600
    hover:bg-green-700
    text-white
    px-8
    py-3
    rounded-2xl
    font-semibold
    transition
    "
  >
    Login / Sign Up
  </Link>

)}

        </div>

      </div>

    </nav>

  );

}