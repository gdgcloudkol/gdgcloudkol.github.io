import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import About from "../components/About";
import Follow from "../components/Follow";
import Event from "../components/Event";

const Home = () => {
  return (
    <div className="bg-white ">
      <div className=" md:px-14 lg:px-20">
        <div className=" max-w-7xl px-6 py-2 sm:py-32 lg:flex items-center lg:gap-x-10  lg:py-10">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <h1 className="mt-10 max-w-lg text-2xl font-extrabold text-gray-900 lg:text-4xl">We Help You to Grow your Skills and knowledge</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              When you join a Google Developer Group, you'll have the opportunity to learn new skills in a variety of formats. The community prides itself on being an inclusive environment where everyone and anyone interested in tech—from beginner
              developers to experienced professionals—all are welcome to join.
            </p>
            <div className="text-2xl flex flex-row gap-3 mt-2">
              <FaFacebook className="cursor-pointer" />
              <FaTwitter className="cursor-pointer" />
              <FaLinkedin className="cursor-pointer" />
              <MdEmail className="cursor-pointer" />
            </div>
            <div className="mt-6 flex items-center gap-x-6">
              <a href="/" className="rounded-md bg-[#1976D2] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1976D2]">
                Get started
              </a>
              <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more
              </a>
            </div>
          </div>
          <div className="rounded-full h-64 lg:h-72 mt-16 sm:mt-24 lg:mt-0  lg:flex-shrink-0 lg:flex-grow">
            <iframe
              className=""
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/tJ9E90KgIdg"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
        <About />
      </div>
      <div className="w-full">
        <Event name="Our Community" />
        <Event bg="black" name="Our Past" />
      </div>
      <Event name="Our" />
      <Follow />
    </div>
  );
};

export default Home;
