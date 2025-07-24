import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-gray-900 px-4 py-2 shadow-xl fixed w-full z-10">
      <div className="flex justify-between items-center">
        {/* Logo / Heading */}
        <h2 className="text-3xl font-bold font-serif">GHOST!</h2>

             {/* Hamburger Button for Mobile & Tablets */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-6 items-center">
          <li className="cursor-pointer hover:text-purple-600">Featured</li>
          <li className="cursor-pointer hover:text-purple-600">Why Evoryte</li>
          <li className="cursor-pointer hover:text-purple-600">Testimonials</li>
          <li className="cursor-pointer hover:text-purple-600">Contact</li>
          <button className="bg-gradient-to-l from-purple-200 via-purple-400 to-purple-500 rounded-xl px-4 py-2 hover:from-purple-400 hover:to-purple-200 transition ml-[280px]">
            Send Message
          </button>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col sm:hidden mt-4 gap-4">
          <li className="cursor-pointer hover:text-purple-600">Featured</li>
          <li className="cursor-pointer hover:text-purple-600">Why Evoryte</li>
          <li className="cursor-pointer hover:text-purple-600">Testimonials</li>
          <li className="cursor-pointer hover:text-purple-600">Contact</li>
          <button className="bg-gradient-to-l from-purple-200 via-purple-400 to-purple-500 rounded-xl px-4 py-2 hover:from-purple-400 hover:to-purple-200 transition">
            Send Message
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
