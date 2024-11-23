import { Button } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();  // Get current location (pathname)

  const toggleMenu = () => setIsOpen(!isOpen);

  // Helper function to check if a link is active
  const isActive = (path) => location.pathname === path ? 'text-indigo-500' : '';

  return (
    <nav className="bg-white dark:bg-gray-800 border-b-2">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-4">
        
        {/* Logo and Blog Link */}
        <Link
          to="/"
          className="flex items-center gap-3 text-sm sm:text-xl font-semibold dark:text-white"
        >
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
            ST.Josef
          </span>
          News
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <Button className="w-12 h-12" color="gray" pill onClick={toggleMenu}>
            {/* Hamburger Icon (AiOutlineMenu) or X Icon (AiOutlineClose) */}
            {isOpen ? (
              <AiOutlineClose className="text-xl transition-all duration-300" />
            ) : (
              <AiOutlineMenu className="text-xl transition-all duration-300" />
            )}
          </Button>
        </div>

        {/* Navbar Links for Larger Screens */}
        <div className="hidden lg:flex gap-6 items-center">
          <Link to="/" className={`text-sm sm:text-lg dark:text-white hover:text-indigo-500 transition duration-200 ${isActive('/')}`}>
            Home
          </Link>
          <Link to="/about" className={`text-sm sm:text-lg dark:text-white hover:text-indigo-500 transition duration-200 ${isActive('/about')}`}>
            About
          </Link>
          <Link to="/projects" className={`text-sm sm:text-lg dark:text-white hover:text-indigo-500 transition duration-200 ${isActive('/projects')}`}>
            Projects
          </Link>

          {/* Search Bar for Large Screens */}
          <form className="flex items-center space-x-2 ml-4">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button color="gray" className="p-2">
              <AiOutlineSearch className="text-lg" />
            </Button>
          </form>
        </div>

        {/* Right Side Icons and Sign In Button */}
        <div className="flex items-center gap-4">
          <Button className="w-12 h-10 hidden sm:flex" color="gray" pill>
            <FaMoon />
          </Button>
          
          {/* Sign In Button with Gradient */}
          <Link to="/signin">
            <Button
              className="px-4 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition duration-1000 outline"
            >
              Sign In
            </Button>
          </Link>
        </div>
      </div>

      {/* Collapsible Navbar Links for Mobile */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
        <div className="flex flex-col items-center py-4">
          <Link to="/" className={`text-sm sm:text-lg dark:text-white py-2 ${isActive('/')}`}>
            Home
          </Link>
          <Link to="/about" className={`text-sm sm:text-lg dark:text-white py-2 ${isActive('/about')}`}>
            About
          </Link>
          <Link to="/projects" className={`text-sm sm:text-lg dark:text-white py-2 ${isActive('/projects')}`}>
            Projects
          </Link>

          {/* Search Bar inside the Collapsible Menu */}
          <form className="mt-4 flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button color="gray" className="p-2">
              <AiOutlineSearch className="text-lg" />
            </Button>
          </form>
        </div>
      </div>
    </nav>
  );
}