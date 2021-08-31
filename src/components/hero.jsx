import React from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <div className="lg:py-7">
                <a
                  href="https://github.com/obouchari"
                  className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                >
                  <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-purple-600 rounded-full">
                    Available for hire
                  </span>
                  <span className="ml-4 text-sm">Check out my GitHub</span>
                  <ChevronRightIcon
                    className="ml-2 w-5 h-5 text-gray-500"
                    aria-hidden="true"
                  />
                </a>
                <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-7 sm:text-5xl lg:mt-10">
                  <span className="block">Hey Captain!</span>
                  <span className="block text-yellow-300">
                    We are under attack!
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-100 sm:mt-7 sm:text-xl lg:text-lg xl:text-xl">
                  Space shooter is one of my favorite arcade games and I have
                  always wanted to build one myself. I’m super excited to
                  finally have the opportunity to build a similar game.
                </p>
                <div className="mt-10 sm:mt-14">
                  <a
                    href="https://galaxy-war.netlify.app"
                    className="inline-block text-center py-4 px-8 rounded-md uppercase leading-5 shadow font-semibold text-gray-900 border border-transparent bg-yellow-400"
                  >
                    Start the Game
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <a
                  href="/"
                  className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-purple-500"
                >
                  <span className="sr-only">Watch our game intro</span>
                  <img
                    className="w-full"
                    src="https://res.cloudinary.com/zentai-consulting/image/upload/v1630325690/game-landing-page/game-screenshot_m1oqze.jpg"
                    alt=""
                  />
                  <div
                    className="absolute inset-0 w-full h-full flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-20 w-20 text-purple-500"
                      fill="currentColor"
                      viewBox="0 0 84 84"
                    >
                      <circle
                        opacity="0.9"
                        cx={42}
                        cy={42}
                        r={42}
                        fill="white"
                      />
                      <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
