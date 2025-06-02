'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';

const locations = [
  'JP Nagar',
  'Whitefield',
  'HSR Layout',
  'Indiranagar',
  'Malleswaram',
  'Sarjapur Road',
  'Bannerghatta Road',
  'Rajajinagar',
];

const dummyResults = [
  { name: 'Dr. Ramesh', type: 'Doctor', location: 'JP Nagar, Bangalore' },
  { name: 'City Health Clinic', type: 'Clinic', location: 'Whitefield, Bangalore' },
  { name: 'Greenline Hospital', type: 'Hospital', location: 'Indiranagar, Bangalore' },
];

const SearchBar = () => {
  const [location, setLocation] = useState('Kathmandu');
  const [searchQuery, setSearchQuery] = useState('');
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowLocationDropdown(false);
        setShowSearchResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLocationClick = () => {
    setShowLocationDropdown((prev) => !prev);
    setShowSearchResults(false);
  };

  const handleInputFocus = () => {
    setShowSearchResults(true);
    setShowLocationDropdown(false);
  };

  return (
    <div className="p-4 relative z-10" ref={wrapperRef}>
      {/* Main container: flex with border and shadow */}
      <div className="flex w-full max-w-3xl mx-auto border border-gray-300 rounded-md shadow-sm">
        {/* Location box with relative positioning and fixed width */}
        <div className="relative w-1/3">
          <div
            onClick={handleLocationClick}
            className="flex items-center gap-2 px-4 py-3 cursor-pointer bg-white"
          >
            <FaMapMarkerAlt className="text-gray-500 text-sm" />
            <span className="text-gray-800 text-sm truncate">{location}</span>
          </div>

          {/* Location dropdown - width 100% relative to location box */}
          {showLocationDropdown && (
            <div className="absolute top-full left-0 mt-1 bg-white border rounded-md shadow-md w-full max-h-64 overflow-y-auto z-50 text-sm">
              <div className="px-4 py-2 text-blue-600 font-medium hover:underline cursor-pointer">
                Use my location
              </div>
              <div className="px-4 py-2 text-blue-600 font-medium hover:underline border-b cursor-pointer">
                Search in entire {location}
              </div>
              {locations.map((loc, index) => (
                <div
                  key={index}
                  className="flex items-start px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    setLocation(loc);
                    setShowLocationDropdown(false);
                  }}
                >
                  <FaSearch className="text-gray-400 mt-1 mr-2" />
                  <div>
                    <div className="font-medium">{loc}</div>
                    <div className="text-xs text-gray-500">Bangalore</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="w-[1px] bg-gray-300"></div>

        {/* Search box with relative positioning and wider width */}
        <div className="relative w-2/3">
          <div className="flex items-center gap-2 px-4 py-3 bg-white">
            <FaSearch className="text-gray-500 text-sm" />
            <input
              type="text"
              placeholder="Search doctors, clinics, hospitals, etc."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={handleInputFocus}
              className="w-full text-sm focus:outline-none bg-transparent"
            />
          </div>

          {/* Search results dropdown - width 100% relative to search box */}
          {showSearchResults && searchQuery.trim() !== '' && (
            <div className="absolute top-full left-0 mt-1 bg-white border rounded-md shadow-md w-full max-h-64 overflow-y-auto z-50 text-sm">
              <div className="px-4 py-2 font-semibold text-gray-700 border-b">Search Results</div>
              {dummyResults
                .filter((item) =>
                  item.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((result, index) => (
                  <div key={index} className="px-4 py-2 hover:bg-gray-50 border-b">
                    <div className="font-medium">{result.name}</div>
                    <div className="text-xs text-gray-500">
                      {result.type} - {result.location}
                    </div>
                  </div>
                ))}
              {dummyResults.filter(item =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
              ).length === 0 && (
                <div className="px-4 py-2 text-center text-gray-500">No results found</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
