import React, { useState } from "react";

interface MenuItem {
  label: string;
  href?: string;
  dropdownItems?: { label: string; href: string }[];
}

export interface NavbarProps {
  menuItems: MenuItem[];
  logo?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ menuItems, logo }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold text-blue-600">
              {logo ? logo : "Logo"}
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            {menuItems.map((item, index) =>
              item.dropdownItems ? (
                <div className="relative group" key={index}>
                  <button className="text-gray-700 hover:text-blue-600 font-medium">
                    {item.label}
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.dropdownItems.map((dropdownItem, idx) => (
                      <a
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        key={idx}
                      >
                        {dropdownItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  href={item.href}
                  className="relative group pb-1 text-gray-700 hover:text-blue-600"
                  key={index}
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3">
            {menuItems.map((item, index) =>
              item.dropdownItems ? (
                <div key={index} className="relative">
                  <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100">
                    {item.label}
                  </button>
                  <div className="pl-4 space-y-1">
                    {item.dropdownItems.map((dropdownItem, idx) => (
                      <a
                        href={dropdownItem.href}
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        key={idx}
                      >
                        {dropdownItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100"
                  key={index}
                >
                  {item.label}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
