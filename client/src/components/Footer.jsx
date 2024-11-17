import React from 'react';
import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Social icons

export default function FooterCom() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        {/* Your page content goes here */}
      </div>

      <Footer container className="bg-gray-900 text-white border-t-8 border-teal-500">
        <div className="max-w-screen-xl mx-auto px-6 py-8 sm:px-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Intro Section */}
            <div className="flex flex-col items-center sm:items-start">
              <Link to="/" className="font-extrabold text-4xl mb-2 inline-block">
                <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                  ST.Josef
                </span>
                News
              </Link>
              <p className="text-sm text-gray-400 mt-2 text-center sm:text-left">
                Stay updated with the latest news and announcements on St. Josef. Join our community today!
              </p>
            </div>

            {/* Quick Links Section */}
            <div>
              <Footer.Title title="Quick Links" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://edu.stjoseph-sharm.com/en/Home/Login" target="_blank" rel="noopener noreferrer">
                  St.Josef Website
                </Footer.Link>
                <Footer.Link href="/about" className="hover:text-teal-500">
                  About Us
                </Footer.Link>
                <Footer.Link href="/contact" className="hover:text-teal-500">
                  Contact
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            {/* Social Links Section */}
            <div>
              <Footer.Title title="Follow Us" />
              <div className="flex space-x-4 mt-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-teal-500">
                  <FaFacebook />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-teal-500">
                  <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-teal-500">
                  <FaInstagram />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-teal-500">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="flex justify-between items-center mt-8 border-t-2 border-gray-700 pt-6">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} ST.Josef News. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-teal-500">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-teal-500">Terms of Service</Link>
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
}