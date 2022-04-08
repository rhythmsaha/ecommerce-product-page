/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MobileMenu = ({ onToggle }) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 0.5,
            }}
            exit={{ opacity: 0 }}
            className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 z-50"
        >
            <motion.aside
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                exit={{ x: -100 }}
                transition={{
                    duration: 0.3,
                }}
                className="bg-white h-screen w-4/6 px-[5%]"
            >
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
            </motion.aside>
        </motion.div>
    );
};

export default MobileMenu;
