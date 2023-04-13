import React from "react";
import { ReactComponent as FacebookSVGIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as GitHubSVGIcon } from "../../assets/icons/github.svg";
import { ReactComponent as GmailSVGIcon } from "../../assets/icons/gmail.svg";
import { ReactComponent as InstagramSVGIcon } from "../../assets/icons/instagram.svg";
import { ReactComponent as LinkedInSVGIcon } from "../../assets/icons/linkedin.svg";
import { ReactComponent as TwitterSVGIcon } from "../../assets/icons/twitter.svg";

const PeopleGrid = ({ fullName, profilePicture, links }) => {
  return (
    <div
      key={fullName}
      className="flex w-full h-full dark:text-dark flex-col rounded-2xl items-center p-4 transform hover:-translate-y-2 hover:shadow-xl cursor-pointer transition duration-300 border border-g-gray-8"
    >
      <img
        loading="lazy"
        className="inline-block h-36 w-36 border-4 border-solid rounded-full ring-2 border-b-google-blue border-t-google-red border-r-google-yellow border-l-google-green bg-white"
        src={profilePicture}
        alt=""
      />
      <div className="text-2xl font-light mt-8 text-center mb-2">
        {fullName}
      </div>
      <div className="flex mt-7">
        {links.map((link) => {
          return (
            <a target="_blank" rel="noopener noreferrer" href={link.url}>
              {link?.title === "Facebook" ? (
                <FacebookSVGIcon fill="currentColor" className="w-8 h-8" />
              ) : null}
              {link?.title === "Twitter" ? (
                <TwitterSVGIcon fill="currentColor" className="w-8 h-8" />
              ) : null}
              {link?.title === "Instagram" ? (
                <InstagramSVGIcon fill="currentColor" className="w-8 h-8" />
              ) : null}
              {link?.title === "LinkedIn" ? (
                <LinkedInSVGIcon fill="currentColor" className="w-8 h-8" />
              ) : null}
              {link?.title === "Github" ? (
                <GitHubSVGIcon fill="currentColor" className="w-8 h-8" />
              ) : null}
              {link?.title === "Email" ? (
                <GmailSVGIcon fill="currentColor" className="w-8 h-8" />
              ) : null}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default PeopleGrid;
