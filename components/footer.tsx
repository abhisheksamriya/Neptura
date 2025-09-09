import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#01071B] py-10  px-6 md:px-0 md:mx-auto border-t">
      <div className="flex flex-col  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
        <h1 className="text-3xl md:text-5xl font-medium ">
          <Image
            src={"/logo/okey.jpg"}
            width={10000}
            height={10000}
            className="w-40"
            alt="image"
          />{" "}
        </h1>
        <p className="text-left  text-xl  text-gray-500">+91 9394060136</p>
        <p className="text-left  text-xl  text-gray-500">
          nepturadigitalmarketing@gmail.com
        </p>
        <p className="text-left text-xl text-gray-500">
          Baldeogarh, Jaipur, Rajasthan 302031
        </p>
      </div>

      <div className="flex md:justify-center gap-x-4 mt-10">
        © 2025 Neptura. All Rights Reserved.
        <Link
          href="https://drive.google.com/file/d/1ZaqaQeo4Z_QRIxN1zk2mZfiPnTlJXj0W/view?usp=sharing"
          className="text-blue-500"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
