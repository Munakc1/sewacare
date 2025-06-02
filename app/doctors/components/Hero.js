'use client';

import { useState } from 'react';

export default function DoctorsSearchPage() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="relative w-full bg-[#2d4fa0] text-white overflow-hidden">
      {/* Background Illustration */}
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-cover"
        style={{ backgroundImage: 'url(/bg-illustration.png)' }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2">Your home for health</h1>
        <h2 className="text-2xl font-semibold mb-6">Find and Book</h2>

        <div className="bg-white rounded shadow overflow-hidden text-black">
          {/* Search Box */}
          <div className="flex flex-col md:flex-row">
            {/* Location Input */}
            <div className="w-full md:w-1/3 p-3 border-b md:border-b-0 md:border-r border-gray-300 flex items-center">
              <span className="text-gray-600 mr-2">📍</span>
              <input
                type="text"
                className="w-full focus:outline-none"
                placeholder="Bangalore"
              />
            </div>

            {/* Search Input */}
            <div className="w-full md:w-2/3 p-3 flex items-center">
              <span className="text-gray-600 mr-2">🔍</span>
              <input
                type="text"
                className="w-full focus:outline-none"
                placeholder="Search doctors, clinics, hospitals, etc."
                onFocus={() => setShowDropdown(true)}
                onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
              />
            </div>
          </div>

          {/* Dropdown */}
          {showDropdown && (
            <div className="bg-white text-black mt-2 rounded shadow p-4">
              <div className="mb-2">
                <h3 className="text-sm text-gray-500">Popular Searches</h3>
                <div className="flex gap-2 mt-2 flex-wrap">
                  <span className="px-3 py-1 bg-gray-100 text-sm rounded-full flex items-center gap-1">
                    ⚡ Hysterectomy
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-sm rounded-full flex items-center gap-1">
                    ⚡ Normal Delivery
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-sm text-gray-500">Common Specialities</h3>
                <ul className="mt-2 space-y-2">
                  {[
                    'Dentist',
                    'Gynecologist/obstetrician',
                    'General Physician',
                    'Dermatologist',
                    'Ear-nose-throat (ent) Specialist',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex justify-between border-b pb-1 text-sm hover:bg-gray-100 px-2 py-1 rounded cursor-pointer"
                    >
                      <span className="flex items-center gap-2">🔍 {item}</span>
                      <span className="text-xs text-gray-500">SPECIALITY</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Right Banner (aligned within container) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-12">
        <div className="bg-white text-black rounded-lg shadow p-4 flex gap-4 items-center w-full md:w-80">
          <img src="/doctor.png" alt="Doctor" className="w-16 h-16 rounded-full" />
          <div>
            <p className="text-sm font-semibold">Book appointment with an expert surgeon</p>
            <p className="text-xs text-gray-600">Piles, Hernia & 50+ surgeries</p>
            <button className="mt-1 text-sm text-blue-600 hover:underline">KNOW MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
}
