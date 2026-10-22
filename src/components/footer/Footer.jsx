import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black mt-12 lg:mt-16">
      <div className="container space-y-8 px-4 py-10 sm:px-6 lg:space-y-10 lg:px-8">
        <div className="grid grid-cols-2 items-center  sm:flex sm:items-center sm:justify-between">
          <a href="https://www.buypharmaceuticalhgh.com/" target="_blank" rel="noreferrer">
            <Image src={"/images/F.png"} width={50} height={50} alt="logo" />
          </a>

          <p className="order-last sm:order-none col-span-2 mt-5 sm:mt-0 text-center text-xs text-white-500">
            &copy; 2024, Fedya Nasosovich. All rights reserved.
          </p>
          <a
            href="mailto:fedyanasosovich@gmail.com"
            className="inline-flex items-center justify-center justify-self-end rounded-full bg-darkPurple px-8 py-2 text-sm font-bold text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
