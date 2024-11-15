import React from 'react';
import { Link } from 'react-router-dom';
import { TextInput, Label, Button } from 'flowbite-react';

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-10 bg-gray-50">
      <div className="flex p-6 max-w-4xl mx-auto flex-col md:flex-row md:items-center gap-8 bg-white shadow-md rounded-lg">
        {/* Left section */}
        <div className="md:w-1/2 text-center md:text-left">
          <Link to="/" className="font-extrabold dark:text-gray-900 text-4xl md:text-5xl mb-2 inline-block">
            <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              ST.Josef
            </span>
            Blog
          </Link>
          <p className="text-gray-700 text-base md:text-lg mt-3">
            Sign up to stay updated with the latest news and announcements on St. Josef.
          </p>
        </div>

        {/* Right section */}
        <div className="w-full md:w-1/2">
          <form className="flex flex-col gap-6">
            <div>
              <Label className="text-lg font-semibold" value="Your username" />
              <TextInput type="text" placeholder="Username" id="username" className="h-12 mt-2" />
            </div>
            <div>
              <Label className="text-lg font-semibold" value="Your email" />
              <TextInput type="text" placeholder="Email" id="email" className="h-12 mt-2" />
            </div>
            <div>
              <Label className="text-lg font-semibold" value="Your password" />
              <TextInput type="password" placeholder="Password" id="password" className="h-12 mt-2" />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              className="w-full h-12 mt-4 text-lg font-semibold flex items-center justify-center"
            >
              Sign Up
            </Button>
          </form>
          <div className="flex justify-center gap-2 text-base mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500 hover:underline">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}