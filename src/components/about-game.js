import React from "react";
import {
  ArrowsExpandIcon,
  CursorClickIcon,
  HeartIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/outline";

const gameFeatures = [
  {
    id: 1,
    name: "Choose your ship",
    description: "Use Left and Right arrows to select your favorite ship.",
    icon: CursorClickIcon,
  },
  {
    id: 2,
    name: "Enemies are shooting",
    description: "Every hit by an enemy's laser reduce your life by 5%.",
    icon: ShieldExclamationIcon,
  },
  {
    id: 3,
    name: "Here comes a chaser",
    description:
      "Chaser ships follow you around when you are close by. Avoid them at all cost.",
    icon: HeartIcon,
  },
];
const howToPlay = [
  {
    id: 1,
    name: "Keyboard time!",
    description:
      "To move your ship around use the following keyboard keys: w:UP, s:DOWN, a:LEFT, d:RIGHT, space:SHOOT.",
    icon: ArrowsExpandIcon,
  },
];

export default function AboutGame() {
  return (
    <div className="py-16 overflow-hidden lg:py-20" id="about-game">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div
            className="relative"
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-delay="300"
            data-sal-easing="ease"
          >
            <h2 className="text-2xl font-extrabold leading-5 text-yellow-400 sm:text-4xl">
              About the Game
            </h2>
            <p className="mt-10 text-lg text-gray-300">
              Galaxy war is a 2D, shooter-classic arcade game where player
              controls a Spaceship and shoots alien spaceships (enemy) to save
              the galaxy.
            </p>

            <dl className="mt-10 space-y-10">
              {gameFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-purple-400">
                      {item.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-300">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <img
              className="relative mx-auto"
              width={490}
              src="https://res.cloudinary.com/zentai-consulting/image/upload/v1630346401/game-landing-page/spaceship_vsqo73.png"
              alt="Spaceship"
              data-sal="slide-left"
              data-sal-duration="500"
              data-sal-delay="400"
              data-sal-easing="ease"
            />
          </div>
        </div>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div
              className="lg:col-start-2"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
              data-sal-easing="ease"
            >
              <h2 className="text-2xl font-extrabold leading-5 text-yellow-400 sm:text-4xl">
                How to play?
              </h2>
              <p className="mt-3 text-lg text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                ex obcaecati natus eligendi delectus, cum deleniti sunt in
                labore nihil quod quibusdam expedita nemo.
              </p>

              <dl className="mt-10 space-y-10">
                {howToPlay.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-purple-400">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-300">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <img
                className="relative mx-auto"
                width={340}
                src="https://res.cloudinary.com/zentai-consulting/image/upload/v1630346873/game-landing-page/how-to-play_rpcthh.png"
                alt="Crazy guy with joystick"
                data-sal="slide-right"
                data-sal-duration="500"
                data-sal-delay="400"
                data-sal-easing="ease"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
