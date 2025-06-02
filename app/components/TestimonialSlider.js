'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    text: "Very easy to book, maintain history. Hassle free from older versions of booking appointment via telephone.. Thanks Practo for making it simple.",
    name: "Jyothi Bhatia",
  },
  {
    text: "Very good app. Well thought out about booking/rescheduling/canceling an appointment. Also, Doctor's feedback mechanism is good and describes all the basics in a good way.",
    name: "Rahul Sharma",
  },
  {
    text: "Very helpful. Far easier than doing same things on computer. Allows quick and easy search with speedy booking. Even maintains history of doctors visited.",
    name: "Pooja Verma",
  }
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto Slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="bg-white py-20 text-center border-t border-gray-200">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">
        What our users have to say
      </h2>

      <div className="max-w-3xl mx-auto relative px-4">
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          {testimonials[currentIndex].text}
        </p>

        <div className="flex justify-center items-center gap-2 mt-4">
          <Image
            src="/images/profile-icon.png" 
            alt="User Icon"
            width={35}
            height={35}
            className="rounded-full bg-gray-200"
          />
          <span className="font-semibold text-gray-800">
            {testimonials[currentIndex].name}
          </span>
        </div>

        <div className="flex justify-center mt-6 gap-4">
          <button
            onClick={handlePrev}
            className="text-3xl text-gray-400 hover:text-black transition"
          >
            ❮
          </button>
          <button
            onClick={handleNext}
            className="text-3xl text-gray-400 hover:text-black transition"
          >
            ❯
          </button>
        </div>

        <div className="flex justify-center mt-4 gap-2">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full ${
                idx === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
