import React from "react";

export default function AboutDeveloper() {
  return (
    <div className="bg-indigo-900">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-4 lg:gap-10 lg:space-y-0">
          <div className="aspect-w-3 aspect-h-2 sm:aspect-w-1 sm:aspect-h-1">
            <img
              className="object-cover shadow-lg rounded-lg"
              src="https://res.cloudinary.com/zentai-consulting/image/upload/v1630360969/game-landing-page/profile2_gwbxmg.jpg"
              alt="Otman Bouchari"
            />
          </div>
          <div className="sm:col-span-3">
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-2xl leading-6 font-medium space-y-1 text-gray-300">
                  Otman Bouchari
                </h3>
                <p className="text-purple-500 text-xl">Software Developer</p>
              </div>
              <div className="text-lg text-gray-300 space-y-5">
                <p>
                  Hello dear visitor, bellow a little bit about me and how I got
                  started with software development.
                </p>
                <p>
                  I started self-learning programming in 2009 and have worked as
                  a freelance web developer since then. Early in my journey, I
                  have developed a love for JavaScript in particular and a
                  passion for web technologies in general. I have the skill to
                  learn new technologies at a rapid pace. I have acquired
                  advanced knowledge of Javascript, React, and Node. I have
                  recently started experimenting with Python and Flask to build
                  full-stack web applications.
                </p>
                <p>
                  Currently, I am looking to join a team of like-minded
                  individuals and build functional, usable, and enjoyable
                  software. I would be a valuable asset to your team with my
                  keen attention to detail, innovative thinking, and
                  resourcefulness if given the opportunity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
