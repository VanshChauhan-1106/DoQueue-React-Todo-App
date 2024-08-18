import React from "react";
import ThemeBtn from "./ThemeBtn";

function Navbar() {
  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b dark:border-gray-600 border-gray-200 dark:bg-gray-100 dark:bg-opacity-10 bg-opacity-20 backdrop-blur-lg shadow-lg dark:shadow-gray-600/50 left-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center rtl:space-x-reverse ">
          <lord-icon
            src="https://cdn.lordicon.com/oqdmuxru.json"
            trigger="loop"
            delay="1500"
            colors="primary:#351a7b"
            style={{ width: "40px", height: "40px" }}
          ></lord-icon>
          <span className="self-center text-3xl font-semibold whitespace-nowrap ml-2 font-mono dark:text-white">
            DoQueue
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <ThemeBtn />
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 border dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {/* <li>
              <a
                href="#"
                className="block py-2 px-3 bg-transparent text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 "
                aria-current="page"
              >
                Home
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
