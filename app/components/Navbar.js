'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeMainLink, setActiveMainLink] = useState(null);
  const pathname = usePathname();
  const navbarRef = useRef(null);

  const closeMenus = () => {
    setOpenDropdown(null);
    setActiveMainLink(null);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeMenus();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const linkClass = (path) =>
    `hover:text-blue-600 ${
      pathname === path
        ? 'text-blue-700 font-semibold underline decoration-[#00bcd4] underline-offset-[8px]'
        : ''
    }`;

  return (
    <div className="bg-white border-b border-gray-200 shadow-sm" ref={navbarRef}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center text-[14px] font-medium text-gray-700">
        {/* Left Section */}
        <div className="flex items-center space-x-6 flex-grow">
          <Link href="/" onClick={closeMenus}>
            <div className="flex items-center mr-8">
              <Image
                src="/images/logo.png"
                alt="Practo Logo"
                width={80}
                height={40}
                priority
                className="cursor-pointer"
              />
            </div>
          </Link>

          <Link
            href="/doctors"
            onClick={() => setActiveMainLink('doctors')}
            className={linkClass('/doctors')}
          >
            Find Doctors
          </Link>

          <Link
            href="/video-consult"
            onClick={() => setActiveMainLink('video')}
            className={linkClass('/video-consult')}
          >
            Video Consult
          </Link>

          {activeMainLink === 'surgeries' ? (
            <div className="flex space-x-4">
              <Link
                href="/medicines"
                onClick={closeMenus}
                className={linkClass('/medicines')}
              >
                Medicines
              </Link>
              <Link
                href="/lab-tests"
                onClick={closeMenus}
                className={linkClass('/lab-tests')}
              >
                Lab Tests
              </Link>
              <Link
                href="/surgeries"
                onClick={closeMenus}
                className={linkClass('/surgeries')}
              >
                Surgeries
              </Link>
            </div>
          ) : (
            <button
              onClick={() => setActiveMainLink('surgeries')}
              className="text-gray-700 hover:text-blue-600"
            >
              Surgeries
            </button>
          )}
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          {/* For Corporates */}
          <div
            className="relative flex items-center gap-2 cursor-pointer"
            onClick={() =>
              setOpenDropdown(openDropdown === 'corporates' ? null : 'corporates')
            }
          >
            <span className="bg-[#1f3bb3] text-white text-[10px] px-2 py-[2px] rounded-full font-semibold">
              NEW
            </span>
            <span className="hover:text-blue-600">For Corporates</span>
            {openDropdown === 'corporates' && (
              <div className="absolute top-full left-0 bg-white shadow-md rounded-md mt-2 w-52 p-2 z-50 text-sm text-gray-800">
                <Link href="/corporates/insurance" onClick={closeMenus} className="block px-3 py-2 hover:bg-gray-100">
                  Health & Wellness Plans
                </Link>
                <Link href="/corporates/wellness" onClick={closeMenus} className="block px-3 py-2 hover:bg-gray-100">
                  Insurance
                </Link>
              </div>
            )}
          </div>

          {/* For Providers */}
          <div
            className="relative cursor-pointer"
            onClick={() =>
              setOpenDropdown(openDropdown === 'providers' ? null : 'providers')
            }
          >
            <div className="flex items-center space-x-1 hover:text-blue-600">
              <span>For Providers</span>
            </div>
            {openDropdown === 'providers' && (
              <div className="absolute top-full left-0 bg-white shadow-md rounded-md mt-2 w-60 p-2 z-50 text-sm text-gray-800">
                <Link href="/providers/hospitals" onClick={closeMenus} className="block px-3 py-2 hover:bg-gray-100">
                  <div className="flex justify-between items-center">
                    <span>Practo Prime</span>
                    <span className="bg-[#b3a71f] text-white text-[10px] px-2 py-[2px] rounded-full font-semibold ml-2">
                      NEW
                    </span>
                  </div>
                </Link>
                <Link href="/providers/clinics" onClick={closeMenus} className="block px-3 py-2 hover:bg-gray-100">
                  Software For Providers
                </Link>
                <Link href="/providers/clinics" onClick={closeMenus} className="block px-3 py-2 hover:bg-gray-100">
                  List Your Practice for Free
                </Link>
                <Link href="/providers/clinics" onClick={closeMenus} className="block px-3 py-2 hover:bg-gray-100">
                  ABDM
                </Link>
              </div>
            )}
          </div>

          {/* Security & Help */}
          <div
            className="relative cursor-pointer"
            onClick={() => setOpenDropdown(openDropdown === 'help' ? null : 'help')}
          >
            <div className="flex items-center space-x-1 hover:text-blue-600">
              <span>Security & help</span>
            </div>
            {openDropdown === 'help' && (
              <div className="absolute top-full left-0 bg-white shadow-md rounded-md mt-2 w-48 p-2 z-50 text-sm text-gray-800">
                <Link href="/help/security" onClick={closeMenus} className="block px-3 py-2 hover:bg-gray-100">
                  Security
                </Link>
                <Link href="/help/contact" onClick={closeMenus} className="block px-3 py-2 hover:bg-gray-100">
                  Help
                </Link>
              </div>
            )}
          </div>

          {/* Login / Signup */}
          <Link href="/login" onClick={closeMenus}>
            <button className="border border-gray-300 text-gray-700 px-4 py-1.5 rounded-md hover:bg-gray-100 transition">
              Login / Signup
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;  