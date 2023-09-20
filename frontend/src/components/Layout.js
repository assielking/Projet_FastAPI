import React from "react";

const Layout = ({ setLink, link, user, setUser }) => {
  const handleClick = (value) => {
    setLink(value);
  };
  const handleLogout = () => {
    setUser();
  };
  return (
    <div className=" shadow-sm">
      <aside class="flex">
        {/* <div class="flex flex-col items-center w-16 h-screen py-8 space-y-8 bg-white dwark:bg-gray-900 dwark:border-gray-700">
          <a href="#">
            <img
              class="w-auto h-6"
              src="https://merakiui.com/images/logo.svg"
              alt=""
            />
          </a>

          <a
            href="#"
            class="p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dwark:text-gray-400 dwark:hover:bg-gray-800 hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </a>

          <a
            href="#"
            class="p-1.5 text-blue-500 transition-colors duration-200 bg-blue-100 rounded-lg dwark:text-blue-400 dwark:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
          </a>

          <a
            href="#"
            class="p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dwark:text-gray-400 dwark:hover:bg-gray-800 hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
              />
            </svg>
          </a>

          <a
            href="#"
            class="p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dwark:text-gray-400 dwark:hover:bg-gray-800 hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </a>

          <a
            href="#"
            class="p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dwark:text-gray-400 dwark:hover:bg-gray-800 hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </a>
        </div> */}

        <div class="h-screen py-8 overflow-y-auto bg-white border-l border-r sm:w-64 w-60 dwark:bg-gray-900 dwark:border-gray-700">
          {/* {user && (
            <>
            <h2 class="px-5 text-lg font-medium text-gray-800 dwark:text-white">
              Username: {user[1]}
            </h2>
            <h3 className="px-5 text-md font-medium text-gray-800 dwark:text-white">
            Role: {user[0]}
            </h3>
            </>
          )} */}
          <div class="mt-8 space-y-4">
            <p className="mt-7 border-b border-b-gray-900/10"></p>
            <button
              onClick={() => handleClick(1)}
              class={`${
                link === 1 ? "bg-gray-100" : ""
              } flex items-center w-full px-5 py-2 transition-colors duration-200 dwark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none`}
            >
              <div class="object-cover w-5 h-5 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
                </svg>
              </div>

              <div class="text-left rtl:text-right">
                <h1 class="text-sm font-medium text-gray-700 capitalize dwark:text-white">
                  Prediction Poids
                </h1>
              </div>
            </button>
            <button
              onClick={() => handleClick(2)}
              class={`${
                link === 2 ? "bg-gray-100" : ""
              } flex items-center w-full px-5 py-2 transition-colors duration-200 dwark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none`}
            >
              <div class="object-cover w-5 h-5 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
                </svg>
              </div>

              <div class="text-left rtl:text-right">
                <h1 class="text-sm font-medium text-gray-700 capitalize dwark:text-white">
                  Prediction Titanic
                </h1>
              </div>
            </button>
            <button
              onClick={() => handleClick(3)}
              class={`${
                link === 3 ? "bg-gray-100" : ""
              } flex items-center w-full px-5 py-2 transition-colors duration-200 dwark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none`}
            >
              <div class="object-cover w-5 h-5 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
                </svg>
              </div>

              <div class="text-left rtl:text-right">
                <h1 class="text-sm font-medium text-gray-700 capitalize dwark:text-white">
                  Crop Image
                </h1>
              </div>
            </button>
            <button
              onClick={handleLogout}
              class={`${
                link === 4 ? "bg-gray-100" : ""
              } flex items-center w-full px-5 py-2 transition-colors duration-200 dwark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none`}
            >
              <div class="object-cover w-5 h-5 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
                </svg>
              </div>

              <div class="text-left rtl:text-right">
                <h1 class="text-sm font-medium text-gray-700 capitalize dwark:text-white">
                  Se deconnecter
                </h1>
              </div>
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Layout;
