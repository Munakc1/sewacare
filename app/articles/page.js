'use client';

import { useState } from 'react';

const categories = [
  'Healthy Hair', 'Healthy Eating', 'Healthy Skin', 'Weight Loss',
  'Sexual Well-being', 'Diabetes', 'Pregnancy', 'Stress management',
  'Cancer Prevention', 'Healthy Digestion', 'Healthy Heart',
];

const articlesData = [
  {
    id: 1,
    title: 'Beja Sanskar an Ayurved Remedy for Abortions and Infertility',
    author: 'Dr.Yogesh Joshi, Ayurveda',
    snippet: 'Every person has a unique Constitution. The constitution is created when a sperm unites with the female ovum. The status ...',
    tags: ['Before pregnancy', 'Infertility'],
    views: 5,
  },
  {
    id: 2,
    title: '5 Early Signs of Dental Disease',
    author: 'Dr.Rahul Nakra, Dentist',
    snippet: 'As a Dentist, I always feel patients approach a dentist at a very late stage that is when the ...',
    tags: ['Bad Breath', 'Dental caries', 'Oral hygiene'],
    views: 18,
  },
  {
    id: 3,
    title: "Don't buy sunscreens right off the shelves. Here's how to choose right",
    author: 'Hindustan Times',
    snippet: 'To pick the right sunscreen, you must first know your skin type. Try to pick a sunscreen with a matte finish & the right SPF ...',
    tags: [],
    views: 109,
  },
  // add more as needed
];

const healthInterests = [
  'Healthy Eating', 'Everyday Fitness', 'Oral hygiene', 'Weight Loss',
  'Sexual Well-being', 'Hair care', 'Diabetes', 'Skin Care',
  'Pregnancy', 'Healthy Skin', 'Acne', 'Hair loss',
  'Back Pain', 'Stress management', 'Weight gain', 'Cancer Prevention',
  'Healthy Digestion', 'Healthy Heart',
];

export default function ArticlesPage() {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);

  const toggleInterest = (interest) => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const filteredArticles = selectedInterests.length === 0
    ? articlesData
    : articlesData.filter(article =>
        article.tags.some(tag => selectedInterests.includes(tag))
      );

  const articlesToShow = filteredArticles.slice(0, visibleCount);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      {/* Categories */}
      <section>
        <h1 className="text-3xl font-bold mb-6">Explore Health Categories</h1>
        <div className="flex flex-wrap gap-4">
          {categories.map(cat => (
            <button
              key={cat}
              className="px-4 py-2 border rounded-full text-sm font-medium hover:bg-blue-100 transition"
              onClick={() => alert(`Filter by category: ${cat}`)} // Placeholder action
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Search Bar */}
      <section>
        <input
          type="search"
          placeholder="Search articles..."
          className="w-full max-w-md px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </section>

      {/* Top Articles */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Top health articles</h2>
        <div className="space-y-6">
          {articlesToShow.map(({ id, title, author, snippet, tags, views }) => (
            <article key={id} className="border p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-sm text-gray-600 mb-2">{author}</p>
              <p className="text-gray-700 mb-3">{snippet}</p>
              {tags.length > 0 && (
                <p className="text-xs text-blue-600 mb-2">
                  {tags.join(' • ')}
                </p>
              )}
              <p className="text-xs text-gray-500">{views} views</p>
            </article>
          ))}
        </div>
        {visibleCount < filteredArticles.length && (
          <button
            onClick={() => setVisibleCount(visibleCount + 3)}
            className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Load More
          </button>
        )}
      </section>

      {/* Health Interests */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Articles based on Health interests</h2>
        <p className="mb-6">Select your interests to filter articles:</p>
        <div className="flex flex-wrap gap-3">
          {healthInterests.map((interest) => (
            <button
              key={interest}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition
                ${selectedInterests.includes(interest)
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'hover:bg-blue-100'}`}
              onClick={() => toggleInterest(interest)}
            >
              {interest}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
