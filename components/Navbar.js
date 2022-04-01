/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
    const [isMobileManuOpen, setIsMobileManuOpen] = useState(true);

    const toggleMobileMenuHandler = () => {
        setIsMobileManuOpen((prev) => !prev);
    };

    return (
        <>
            {isMobileManuOpen && (
                <MobileMenu onToggle={toggleMobileMenuHandler} />
            )}
            <header className="flex items-center justify-between h-20 lg:h-28 max-w-7xl w-10/12 mx-auto lg:border-b">
                <div className="flex items-center gap-3 lg:gap-10 h-full">
                    <button
                        className="flex items-center justify-center lg:hidden"
                        onClick={toggleMobileMenuHandler}
                    >
                        <img
                            src="/images/icon-menu.svg"
                            alt="icon_menu"
                            className="object-contain h-4 w-4"
                        />
                    </button>

                    <img src={"/images/logo.svg"} alt="logo" className="" />

                    <nav className="hidden lg:flex items-center gap-8 h-full">
                        <Link href="/">
                            <a className="border-b-2 border-transparent hover:border-orange-500 h-full flex items-center transition-all duration-200">
                                Collections
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="border-b-2 border-transparent hover:border-orange-500 h-full flex items-center transition-all duration-200">
                                Men
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="border-b-2 border-transparent hover:border-orange-500 h-full flex items-center transition-all duration-200">
                                Women
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="border-b-2 border-transparent hover:border-orange-500 h-full flex items-center transition-all duration-200">
                                About
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="border-b-2 border-transparent hover:border-orange-500 h-full flex items-center transition-all duration-200">
                                Contact
                            </a>
                        </Link>
                    </nav>
                </div>

                <div className="flex items-center gap-6">
                    <button className="relative">
                        <span className="absolute top-0 right-0 -translate-y-1 translate-x-2 bg-orange-500 text-white text-[8px] w-4 h-4 flex justify-center items-center  rounded-full">
                            0
                        </span>
                        <img
                            src="/images/icon-cart.svg"
                            alt="cart-icon"
                            className="object-contain h-6 w-6"
                        />
                    </button>

                    <span className="h-7 w-7 rounded-full ">
                        <img
                            src="/images/image-avatar.png"
                            alt="avatar"
                            className="object-contain rounded-full"
                        />
                    </span>
                </div>
            </header>
        </>
    );
};

export default Navbar;
