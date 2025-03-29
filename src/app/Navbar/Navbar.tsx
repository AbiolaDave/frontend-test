import Logo from "@/app/assets/IMG-20230625-WA0031.jpg";
import Style from "@/app/styles/Homepage.module.css";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav
        className={`bg-white shadow-md ${Style.nav} fixed w-full z-1000 sm:w-full sm:overflow-x-hidden`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div
              className={`text-2xl flex font-bold text-green-600 ${Style.logo}`}
            >
              <Image
                src={Logo}
                alt="Logo"
                className="rounded-full"
                width={40}
                height={40}
              />
              <p className="mx-4 mt-2">DEA</p>
            </div>

            <div
              className={`hidden md:flex space-x-6 items-center align-middle ${Style.actions}`}
            >
              <a href="#" className="text-gray-600 hover:text-green-500">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-green-500">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-green-500">
                Services
              </a>
              <a href="#" className="text-gray-600 hover:text-green-500">
                Contact
              </a>

              <button className="bg-green-600 py-2 px-4 rounded-lg">
                Start
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <a
              href="#"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
            >
              About
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
            >
              Services
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
