"use client"; // Only needed for App Router in Next.js 13+

import React, { useState } from "react";

export default function InsurancePage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send data to backend here
    setFormSubmitted(true);
  };

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-4xl font-bold mb-4 text-blue-800">
            Group Health Insurance
          </h1>
          <p className="text-gray-700 mb-6">
            Protect your team with our comprehensive group insurance plans,
            tailored for small to large enterprises.
          </p>

          <ul className="list-disc ml-6 space-y-3 text-gray-700">
            <li>Coverage for 500+ day care procedures</li>
            <li>Cashless treatment at leading hospitals</li>
            <li>Affordable premium options with no-cost EMI</li>
            <li>Easy digital onboarding and management</li>
            <li>24x7 support and quick claims process</li>
          </ul>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Request a Free Quote
          </h2>

          {formSubmitted ? (
            <div className="text-green-600 font-medium">
              ✅ Your request has been submitted!
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your company name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Contact Person
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  placeholder="10-digit phone number"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="example@company.com"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
