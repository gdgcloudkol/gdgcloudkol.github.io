import React from "react";
import {
  SiLinkedin,
  SiGithub,
  SiTwitter,
  SiFacebook,
  SiInstagram,
} from "react-icons/si";

const Footer = () => {
  return (
    <footer className=" bg-black ">
      <hr className=" border-gray-600 sm:mx-auto mb-5" />
      <div className="md:flex md:justify-start p-6 pt-0">
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
              About
            </h2>
            <ul className="text-gray-300 ">
              <li className="mb-2">
                <a
                  href="https://gdg.community.dev/gdg-cloud-kolkata/"
                  className="hover:underline"
                >
                  GDG Cloud Kolkata
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://developers.google.com/community/gdg"
                  className="hover:underline"
                >
                  Google Developer Groups
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://developers.google.com/womentechmakers"
                  className="hover:underline"
                >
                  Women Techmakers
                </a>
              </li>
              <li>
                <a
                  href="https://developers.google.com/community/gdsc"
                  className="hover:underline"
                >
                  Google Developer Student Clubs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">
              Resources
            </h2>
            <ul className="text-gray-300">
              <li className="mb-2">
                <a className="hover:underline disabled">Become a Sponsor</a>
              </li>
              <li>
                <a className="hover:underline">Call for Speakers</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">
              Legal
            </h2>
            <ul className="text-gray-300">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
