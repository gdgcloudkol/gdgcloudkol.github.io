import { useState } from "react";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import About from "../components/About";
import Follow from "../components/Follow";

const Home = () => {
  return (
    <div className="bg-white">
      <div className="">
        <div className="mx-auto max-w-7xl px-6 py-2 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-10">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <h1 className="mt-10 max-w-lg text-lg font-bold text-gray-900 sm:text-4xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              eu.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
              efficitur quam, et mattis ligula. Duis et quam venenatis mi
              porttitor iaculis eu eget justo. Nunc sed nisi vulputate, iaculis
              ipsum a, accumsan tortor. Nullam turpis ex, malesuada congue
              lectus posuere, pharetra commodo massa. Praesent neque nisi,
              mattis ac luctus.
            </p>
            <div className="text-2xl flex flex-row gap-3 mt-2">
              <FaFacebook className="cursor-pointer" />
              <FaTwitter className="cursor-pointer" />
              <FaLinkedin className="cursor-pointer" />
              <MdEmail className="cursor-pointer" />
            </div>
            <div className="mt-6 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-[#1976D2] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1976D2]"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="rounded-full mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/tJ9E90KgIdg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
          </div>
        </div>
      </div>
      <About />
      <Follow />
      
    </div>
  );
};

export default Home;
