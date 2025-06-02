'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const allOptions = [
  { src: '/images/pregnancy.png', title: 'Period doubts or Pregnancy' },
  { src: '/images/acne.png', title: 'Acne, pimple or skin issues' },
  { src: '/images/performance.png', title: 'Performance issues in bed' },
  { src: '/images/cold.png', title: 'Cold, cough or fever' },
  { src: '/images/child.png', title: 'Child not feeling well' },
  { src: '/images/depression.png', title: 'Depression or anxiety' },
  // Additional options
  { src: '/images/diabetes.png', title: 'Diabetes or sugar issues' },
  { src: '/images/heart.png', title: 'Heart or chest pain' },
  { src: '/images/stomach.png', title: 'Stomach pain or digestion' },
  { src: '/images/bones.png', title: 'Bone or joint pain' },
  { src: '/images/eye.png', title: 'Eye irritation or issues' },
  { src: '/images/allergy.png', title: 'Allergies or rashes' },
];

const ConsultOptions = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleOptions = showAll ? allOptions : allOptions.slice(0, 6);

  return (
    <div className="py-10 px-4 max-w-7xl mx-auto text-center">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
        Consult top doctors online for any health concern
      </h2>
      <p className="text-sm text-gray-500 mt-2">
        Private online consultations with verified doctors in all specialists
      </p>

      {/* Options Grid */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
        {visibleOptions.map((option, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <Image
              src={option.src}
              alt={option.title}
              width={80}
              height={80}
              className="object-contain"
            />
            <p className="mt-3 text-sm text-gray-800">{option.title}</p>
            <button className="text-blue-500 text-xs font-medium mt-1 hover:underline">
              CONSULT NOW
            </button>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      <div className="mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="border border-blue-400 text-blue-500 px-4 py-2 rounded-md text-sm hover:bg-blue-50 transition"
        >
          {showAll ? 'Show Less' : 'View All Specialities'}
        </button>
      </div>
    </div>
  );
};

export default ConsultOptions;
