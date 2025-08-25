"use client";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Link as ScrollLink, Element } from "react-scroll";

const Nav = () => {
  return (
    <Element
      name="top"
      className="overflow-hidden md:rounded-[6px] md:top-5 sticky w-full md:mx-auto z-50 
   xl:w-4/5 2xl:w-[68%] bg-[#01071B] flex items-center 
   justify-between py-5 md:py-6 px-4 md:px-8 "
    >
      <Link href={"/"}>
        <Image
          src={"/logo/okey.jpg"}
          alt="Logo"
          width={1000}
          height={1000}
          className="w-32 md:w-40 "
        />
      </Link>

      <div className="absolute right-1/2 translate-x-1/2 transform">
        <div className="hidden md:flex gap-x-10 items-center text-gray-100 font-medium text-lg cursor-pointer">
          <Link href={"/showcase"} className="hover:text-blue-500">
            Showcase
          </Link>

          <ScrollLink
            to="services"
            smooth={true}
            className="hover:text-blue-500"
          >
            Services
          </ScrollLink>

          <ScrollLink
            to="process"
            smooth={true}
            className="hover:text-blue-500"
          >
            Process
          </ScrollLink>

          <ScrollLink
            to="guarentees"
            smooth={true}
            className="hover:text-blue-500"
          >
            Guarentees
          </ScrollLink>
        </div>
      </div>

      <div className="flex items-center gap-x-4">
        <a
          href="tel:9394060136"
          className="hidden md:block
  py-3 
  px-6
  text-lg 
  hover:bg-[#2296EA]
  rounded-[6px]
  border-2
  border-gray-100
  text-white
  hover:text-black
  bg-[#121212]
  transition
  duration-200
     hover:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
        >
          Book a call
        </a>
        <a
          href="tel:9394060136"
          className="md:hidden text-blue-600 bg-white p-2.5 rounded-full"
        >
          <Phone size={20} />
        </a>
      </div>
    </Element>
  );
};

export default Nav;
