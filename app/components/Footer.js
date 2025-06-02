'use client';

import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#2c2f77] text-white py-10 px-6 sm:px-10 mt-auto">
      <div className="max-w-[1400px] mx-auto flex flex-wrap justify-between gap-10 md:gap-6">
        {/* Practo Column */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-[180px] flex-1 mb-8">
          <h4 className="text-lg mb-4">Practo</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">About</li>
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">Blog</li>
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">Careers</li>
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">Press</li>
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* For Patients Column */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-[180px] flex-1 mb-8">
          <h4 className="text-lg mb-4">For patients</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">Search for doctors</li>
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">Search for clinics</li>
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">Search for hospitals</li>
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">Practo Plus</li>
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">Covid Hospital listing</li>
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">Practo Care Clinics</li>
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">Read health articles</li>
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">Read about medicines</li>
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">Practo drive</li>
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">Health app</li>
          </ul>
        </div>

        {/* For Doctors and Clinics Column */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-[180px] flex-1 mb-8">
          <h4 className="text-lg mb-4">For doctors</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">Practo Profile</li>
          </ul>
          <h4 className="text-lg mt-6 mb-4">For clinics</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">Ray by Practo</li>
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">Practo Reach</li>
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">Ray Tab</li>
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">Practo Pro</li>
          </ul>
        </div>

        {/* For Hospitals and Corporates Column */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-[180px] flex-1 mb-8">
          <h4 className="text-lg mb-4">For hospitals</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">Insta by Practo</li>
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">Qikwell by Practo</li>
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">Practo Profile</li>
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">Practo Reach</li>
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">Practo Drive</li>
          </ul>
          <h4 className="text-lg mt-6 mb-4">For Corporates</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">Wellness Plans</li>
          </ul>
        </div>

        {/* More Column */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-[180px] flex-1 mb-8">
          <h4 className="text-lg mb-4">More</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">Help</li>
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">Developers</li>
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">Privacy Policy</li>
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">Terms & Conditions</li>
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">PCS T&C</li>
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">Healthcare Directory</li>
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">Practo Health Wiki</li>
          </ul>
        </div>

        {/* Social Column */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-[180px] flex-1 mb-8">
          <h4 className="text-lg mb-4">Social</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">Facebook</li>
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">Twitter</li>
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">LinkedIn</li>
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">Youtube</li>
            <li className="hover:underline hover:text-gray-300 transition duration-200 cursor-pointer">Github</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom (Stuck to the bottom) */}
      <div className="text-center mt-0 pb-4">
        <Image
          src="/images/logo.png"
          alt="Practo Logo"
          width={100}
          height={50}
          className="mx-auto"
        />
        <p className="mt-2 text-sm">&copy; 2017 Practo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
