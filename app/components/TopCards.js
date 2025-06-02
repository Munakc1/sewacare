'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const cardData = [
  {
    src: '/images/instant-video.png',
    title: 'Instant Video Consultation',
    subtitle: 'Connect within 60 secs',
    bgColor: '#AFCFED',
    link: '/video-consult',
  },
  {
    src: '/images/find-doctors.png',
    title: 'Find Doctors Near You',
    subtitle: 'Confirmed appointments',
    bgColor: '#98CBD6',
    link: '/doctors',
  },
  {
    src: '/images/surgeries.png',
    title: 'Surgeries',
    subtitle: 'Safe and trusted surgery centers',
    bgColor: '#D5D8FC',
    link: '/surgeries',
  },
];

const TopCards = () => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-6 py-10 px-4">
      {cardData.map((card, index) => (
        <Link key={index} href={card.link} className="w-full sm:w-[45%] md:w-[30%] max-w-[220px]">
          <div className="h-[320px] bg-white rounded-xl border border-gray-200 shadow hover:shadow-md transition overflow-hidden cursor-pointer">
            {/* Image section with bottom aligned image */}
            <div
              className="w-full h-[200px] flex items-end justify-center"
              style={{ backgroundColor: card.bgColor }}
            >
              <div className="relative w-[150px] h-[150px]">
                <Image
                  src={card.src}
                  alt={card.title}
                  fill
                  className="object-contain object-bottom"
                  sizes="(max-width: 768px) 100vw, 200px"
                />
              </div>
            </div>

            {/* Text section */}
            <div className="p-4 text-center">
              <h3 className="text-base font-semibold text-gray-800">{card.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{card.subtitle}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TopCards;
