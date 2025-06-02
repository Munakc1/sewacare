'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const cards = [
    {
      img: "dentist.jpg",
      title: "Dentist",
      desc: "Teething troubles? Schedule a dental checkup",
    },
    {
      img: "gynecologist.jpg",
      title: "Gynecologist/Obstetrician",
      desc: "Explore for women’s health, pregnancy and infertility treatments",
    },
    {
      img: "dietitian.jpg",
      title: "Dietitian/Nutrition",
      desc: "Get guidance on eating right, weight management and sports nutrition",
    },
    {
      img: "physiotherapist.jpg",
      title: "Physiotherapist",
      desc: "Pulled a muscle? Get it treated by a trained physiotherapist",
    },
  ];

  const allArticles = [
    {
      img: "article1.jpeg",
      category: "CORONAVIRUS",
      title: "12 Coronavirus Myths and Facts That You Should Be Aware Of",
    },
    {
      img: "article2.jpeg",
      category: "VITAMINS AND SUPPLEMENTS",
      title: "Eating Right to Build Immunity Against Cold and Viral Infections",
    },
    {
      img: "article3.jpeg",
      category: "MENTAL HEALTH",
      title: "5 Tips for Managing Stress in Daily Life",
    },
    {
      img: "article4.jpeg",
      category: "FITNESS",
      title: "Best Morning Exercises to Stay Fit and Active",
    },
  ];

  const [showMore, setShowMore] = useState(false);
  const visibleArticles = showMore ? allArticles : allArticles.slice(0, 2);

  const handleSeeAllClick = () => {
    router.push('/articles');
  };

  return (
    <div className="px-6 py-12">
      {/* Top Doctor Categories */}
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Book an appointment for an in-clinic consultation
        </h2>
        <p className="text-gray-600 mb-6">
          Find experienced doctors across all specialties
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {cards.map((item, idx) => (
            <div
              key={idx}
              className="w-[18rem] bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <Image
                src={`/images/${item.img}`}
                alt={item.title}
                width={288}
                height={176}
                className="w-full h-44 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Articles Section */}
      <div className="border-t pt-10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Read top articles from health experts
            </h2>
            <p className="text-gray-600 max-w-xl mt-2 mb-6">
              Health articles that keep you informed about good health practices and help you achieve your goals.
            </p>
            <div className="flex gap-3">
              <button
                className="bg-[#06baf2] text-white px-6 py-2 rounded-lg hover:bg-[#0ba9d9] transition"
                onClick={handleSeeAllClick}
              >
                See all articles
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {visibleArticles.map((item, idx) => (
              <div
                key={idx}
                className="w-[18rem] bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <Image
                  src={`/images/${item.img}`}
                  alt={item.title}
                  width={288}
                  height={180}
                  className="w-full h-44 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <p className="text-sm text-blue-600 font-medium">{item.category}</p>
                  <p className="font-semibold mt-2">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
