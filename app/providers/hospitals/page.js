import React from 'react';

export default function PractoPrime() {
  return (
    <section className="bg-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-800">Practo Prime</h2>
          <p className="text-lg mt-2 text-gray-600">For Clinics & Hospitals</p>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            A technology product designed to help grow your practice and enhance the overall patient visit experience.
          </p>
          <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition">
            Get Free Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 text-center mb-12">
          <div>
            <p className="text-3xl font-bold text-blue-700">55,000+</p>
            <p className="text-gray-600">Clinics / Hospitals on Prime</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-700">1.4 Cr+</p>
            <p className="text-gray-600">Patients</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-700">9/10 ★</p>
            <p className="text-gray-600">Highly rated by patients</p>
          </div>
        </div>

        {/* Benefits */}
        <div className="space-y-10">
          {[
            {
              title: 'Visibility in Prime Listing',
              desc: 'Get premier visibility in your clinic/hospital directory. Increase appointment chances by showing up first to local patients.',
            },
            {
              title: '24x7 Instant Booking',
              desc: 'Online bookings available 24/7. Patients can book anytime, improving your walk-in rate by 2.5x.',
            },
            {
              title: 'Smart Calling System',
              desc: 'Advanced telecom switch with auto fallback & call recording dashboard ensures patients never miss a call.',
            },
            {
              title: 'Appointment Notifications',
              desc: 'Instant alerts for bookings, missed calls, and confirmations. Access insights and performance reports.',
            },
          ].map((item, i) => (
            <div key={i} className="border rounded-lg p-6 shadow-sm bg-blue-50">
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Technology Fee */}
        <div className="bg-gray-100 mt-16 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">One-Time Technology Fee</h3>
          <p className="text-gray-700 mb-2">
            A one-time platform fee applies when a patient uses our tech to connect. If cancelled, the fee is refundable.
          </p>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Receive notifications for bookings and calls</li>
            <li>Track appointments in your wallet</li>
            <li>Email/SMS reminders to recharge wallet</li>
          </ul>
        </div>

        {/* Subscription Software */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Clinic Management Software Suite</h3>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Enable digital health records</li>
            <li>Diagnosis & notes recording</li>
            <li>Advanced inventory management</li>
            <li>Smart billing & invoicing</li>
          </ul>
        </div>

        {/* Form */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-blue-800 mb-6">Join 55,000+ Clinics & Hospitals Already on Prime</h3>
          <form className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-medium">Category*</label>
              <select className="w-full border px-4 py-2 rounded-md">
                <option value="">Choose Category</option>
                <option>I own a clinic</option>
                <option>I run a hospital</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium">Name*</label>
              <input type="text" placeholder="Dr. Name" className="w-full border px-4 py-2 rounded-md" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Mobile Number*</label>
              <input type="tel" placeholder="+91 - " className="w-full border px-4 py-2 rounded-md" />
            </div>
            <div>
              <label className="block mb-1 font-medium">City*</label>
              <input type="text" placeholder="Enter City" className="w-full border px-4 py-2 rounded-md" />
            </div>
          </form>
          <p className="text-sm text-gray-500 mt-4">These details will be used solely for contact purposes.</p>
          <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition">
            Get Free Demo
          </button>
        </div>
      </div>
    </section>
  );
}
