import { Disclosure } from '@headlessui/react';
import gdglogo from "../../assets/img/gdglogo.png"
import { NavbarContent, NavbarItemContent } from '../../assets/modals/navbar/datatype';
import NavbarContentData from "../../assets/content/navbar/content.json"
import { useState } from 'react';

const Navbar = () => {
    const [content] = useState<NavbarContent>(NavbarContentData);
    const [navigation, setNavigation] = useState<NavbarItemContent[]>(content?.navbarPermanent);

    return (
        <Disclosure>
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-18">
                <div className="flex gap-x-5">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <img
                                className={`block h-12 w-auto mt-2 lg:mt-3 ${false ? 'filter brightness-0 invert' : ''}`}
                                src={gdglogo}
                                alt="GDG Cloud Kolkata Logo"
                            />
                            GDG Cloud
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            {navigation?.map((item: NavbarItemContent) => {
                                return (<div key={item.title}>
                                    {item.title}
                                </div>)
                            }
                            )}
                        </div>
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                        <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                            <span className="sr-only">Open main menu</span>
                            {true ? (
                                "x"
                            ) : (
                                "")}
                        </Disclosure.Button>
                    </div>
                </div>
            </div>
        </Disclosure>
    )
}

export default Navbar