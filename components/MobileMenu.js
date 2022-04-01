/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const MobileMenu = ({ onToggle }) => {
    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 z-50">
            <aside className="bg-white h-screen w-4/6 px-[5%]">
                <div className="py-6">
                    <span onClick={onToggle}>
                        <img
                            src="/images/icon-close.svg"
                            alt="close"
                            className="object-contain h-4"
                        />
                    </span>
                </div>

                <nav className="flex flex-col gap-5 text-gray-800 mt-6">
                    <Link href="/">
                        <a className="font-bold text-lg tracking-wide">
                            Collections
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="font-bold text-lg tracking-wide">Men</a>
                    </Link>
                    <Link href="/">
                        <a className="font-bold text-lg tracking-wide">Women</a>
                    </Link>
                    <Link href="/">
                        <a className="font-bold text-lg tracking-wide">About</a>
                    </Link>
                    <Link href="/">
                        <a className="font-bold text-lg tracking-wide">
                            Contact
                        </a>
                    </Link>
                </nav>
            </aside>
        </div>
    );
};

export default MobileMenu;
