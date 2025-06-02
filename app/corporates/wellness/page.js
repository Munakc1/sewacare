import React from 'react';

export default function GroupHealthInsurance() {
  return (
    <section className="bg-blue-50 py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-800">Group Health Insurance</h2>
          <p className="text-gray-700 mb-6">
            Provide your employees and their families with complete health coverage. Our Group Health Insurance plans cover 500+ day care procedures with a wide range of payment options.
          </p>

          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Comprehensive plans for employees and dependents</li>
            <li>Cashless claims across top hospitals</li>
            <li>No-cost EMI options</li>
            <li>24x7 claim support & guidance</li>
            <li>Fully digital onboarding & policy management</li>
          </ul>
        </div>

        {/* Right: Form */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Get a Free Insurance Quote</h3>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Company Name</label>
              <input
                type="text"
                placeholder="e.g. Acme Corp"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Contact Person</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Phone Number</label>
              <input
                type="tel"
                placeholder="e.g. 9876543210"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Request Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
