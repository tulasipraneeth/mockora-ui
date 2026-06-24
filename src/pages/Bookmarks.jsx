import { useEffect, useState } from "react";

export default function Bookmarks() {

  const [bookmarks, setBookmarks] =
    useState([]);

  useEffect(() => {

    const data =
      JSON.parse(
        localStorage.getItem(
          "bookmarks"
        ) || "[]"
      );

    setBookmarks(data);

  }, []);

  return (

    <div className="bg-[#F7FBF8] min-h-screen">

      <div
        className="
        max-w-6xl
        mx-auto
        px-8
        py-10
        "
      >

        <h1
          className="
          text-5xl
          font-bold
          mb-10
          "
        >
          Bookmarks
        </h1>

        {bookmarks.length === 0 ? (

          <div
            className="
            bg-white
            rounded-3xl
            p-10
            text-center
            "
          >

            <h2
              className="
              text-2xl
              font-bold
              mb-3
              "
            >
              No Bookmarks Yet
            </h2>

            <p className="text-gray-500">
              Save questions while practicing.
            </p>

          </div>

        ) : (

          <div className="space-y-5">

            {bookmarks.map(
              (
                item,
                index
              ) => (

                <div
                  key={index}
                  className="
                  bg-white
                  rounded-3xl
                  p-6
                  shadow-sm
                  "
                >

                  <div
                    className="
                    flex
                    justify-between
                    items-center
                    "
                  >

                    <div>

                      <div
                        className="
                        font-bold
                        text-lg
                        "
                      >
                        {item.department}
                      </div>

                      <div className="text-gray-500">
                        {item.year}
                      </div>

                    </div>

                    <button
                      className="
                      bg-green-600
                      text-white
                      px-5
                      py-2
                      rounded-xl
                      "
                    >
                      Practice
                    </button>

                  </div>

                </div>

              )
            )}

          </div>

        )}

      </div>

    </div>

  );

}