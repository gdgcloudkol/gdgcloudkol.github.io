import React from "react";
import { ReactComponent as FacebookSVGIcon } from "../assets/icons/facebook.svg";
import { ReactComponent as GitHubSVGIcon } from "../assets/icons/github.svg";
import { ReactComponent as GmailSVGIcon } from "../assets/icons/gmail.svg";
import { ReactComponent as InstagramSVGIcon } from "../assets/icons/instagram.svg";
import { ReactComponent as LinkedInSVGIcon } from "../assets/icons/linkedin.svg";
import { ReactComponent as TwitterSVGIcon } from "../assets/icons/twitter.svg";

const Follow = () => {
  return (
    <div className="dark:bg-black dark:text-white bg-white text-black pb-10">
      <div className="flex flex-col items-center justify-center w-full pt-4 mb-2">
        <div className="flex flex-row ">
          <div className="font-medium leading-14 text-2xl lg:text-4xl block uppercase stroke-w-1px lg:stroke-w-2px text-black ">
            Follow us for&nbsp;
          </div>
          <p
            className={`font-medium leading-14 text-2xl lg:text-4xl no-shadow uppercase}`}
          >
            UPDATES
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center lg:space-x-10 space-x-2 lg:mt-10">
        <FacebookSVGIcon
          fill="currentColor"
          className="w-8 h-8 "
        />

        <TwitterSVGIcon fill="currentColor" className="w-8 h-8 " />

        <InstagramSVGIcon
          fill="currentColor"
          className="w-8 h-8 "
        />

        <LinkedInSVGIcon
          fill="currentColor"
          className="w-8 h-8 "
        />

        <GitHubSVGIcon fill="currentColor" className="w-8 h-8 " />
        <GmailSVGIcon fill="currentColor" className="w-8 h-8 " />
      </div>
    </div>
  );
};

export default Follow;
