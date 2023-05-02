import { Disclosure } from '@headlessui/react';
import gdglogo from '../../assets/img/cloud_kol_logo.svg';
import { NavbarItemContent } from '../../assets/modals/navbar/datatype';
import navbarContent from '../../assets/content/navbar/content.json';

const Navbar = () => {
  return (
    <Disclosure>
      <div className="mx-auto px-4 sm:px-6 lg:px-18 fixed bg-white w-full">
        <div className="flex justify-between lg:justify-start ">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img
                className={`block h-12 w-auto mt-2 lg:mt-3 ${
                  false ? 'filter brightness-0 invert' : ''
                }`}
                src={gdglogo}
                alt="GDG Cloud Kolkata Logo"
              />
            </div>
            <div className="hidden md:hidden sm:ml-6 lg:flex sm:space-x-8">
              {navbarContent.navbarPermanent.map((item: NavbarItemContent) => {
                return (
                  <a href={item.link} key={item.title}>
                    {item.title}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="-mr-2 flex items-center lg:hidden">
            {/* Mobile menu button */}
            <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <svg style={{ height: '1.5rem' }} viewBox="0 0 18 15">
                <path
                  fill="#424242"
                  d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.031C17.335,0,18,0.665,18,1.484L18,1.484z"
                />
                <path
                  fill="#424242"
                  d="M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0c0-0.82,0.665-1.484,1.484-1.484 h15.031C17.335,6.031,18,6.696,18,7.516L18,7.516z"
                />
                <path
                  fill="#424242"
                  d="M18,13.516C18,14.335,17.335,15,16.516,15H1.484C0.665,15,0,14.335,0,13.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.031C17.335,12.031,18,12.696,18,13.516L18,13.516z"
                />
              </svg>
            </Disclosure.Button>
          </div>
        </div>
        <Disclosure.Panel className=" lg:hidden pt-4 pb-2 text-sm text-gray-500">
          <div className="pt-2 pb-3 space-y-1">
            {navbarContent.navbarPermanent.map((item: NavbarItemContent) => {
              return (
                <div key={item.title}>
                  <a href={item.link}>
                    <Disclosure.Button
                      as="span"
                      className="border-transparent text-gray-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                    >
                      {item.title}
                    </Disclosure.Button>
                  </a>
                </div>
              );
            })}
          </div>
        </Disclosure.Panel>
      </div>
    </Disclosure>
  );
};

export default Navbar;
