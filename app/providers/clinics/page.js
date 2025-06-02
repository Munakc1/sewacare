import React from 'react';

export default function PractoAssociation() {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Association with Fortis Hospitals */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800">Know more about our association with leading hospitals and clinics</h2>
          <p className="text-lg mt-4 text-gray-600">
            To make healthcare simpler and more accessible for patients through digital solutions, Practo and Fortis embarked on a journey together in August 2017. After joining hands with the hospitals in South India, our association grew stronger to cover Fortis hospitals pan India.
          </p>
          <p className="mt-4 text-gray-600">
            Our shared vision to simplify healthcare with digital solutions led to a seamless onboarding and integration of 25 hospitals across India within just 15 days!
          </p>
          <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

        {/* Data Security */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h3 className="text-3xl font-bold text-blue-800 text-center mb-6">Your Data Has Only One Owner: YOU!</h3>
          <p className="text-gray-700 text-center mb-4">You control your data and privacy on Practo. We follow stringent data policies to ensure your privacy and security.</p>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { title: '256-bit Encryption', desc: 'Data is encrypted with the highest standards for safety.' },
              { title: 'ISO 27001 Certified', desc: 'We maintain industry-leading security practices.' },
              { title: 'HIPAA Compliant Data Centers', desc: 'Our data centers are fully compliant with HIPAA standards.' }
            ].map((item, i) => (
              <div key={i} className="p-4 border rounded-lg shadow-sm bg-blue-50">
                <h4 className="font-semibold text-xl text-blue-800">{item.title}</h4>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>

          <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

        {/* ABDM Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800">Ayushman Bharat Digital Mission (ABDM)</h2>
          <p className="text-lg mt-4 text-gray-600">
            ABDM aims to develop the backbone necessary to support the integrated digital health infrastructure of the country. It bridges the gap among healthcare stakeholders, making quality healthcare accessible to all.
          </p>
          <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition">
            Know More
          </button>
        </div>

        {/* Doctor Insights */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-blue-800 text-center mb-6">For Doctors</h3>
          <p className="text-center text-gray-700 mb-6">
            Build your digital presence and enhance patient experience with Practo. Join over 1 lakh doctors trusted by 30 crore+ patients in 20+ countries.
          </p>
          <button className="block mx-auto px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

        {/* Clinic Insights */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-blue-800 text-center mb-6">For Clinics</h3>
          <p className="text-center text-gray-700 mb-6">
            Powerful tools and software that help millions of patients discover you on Practo. Trusted by 60,000 clinics offering a premium experience to over 2.5 crore patients across 5 countries.
          </p>
          <button className="block mx-auto px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

        {/* Hospital Insights */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-blue-800 text-center mb-6">For Hospitals</h3>
          <p className="text-center text-gray-700 mb-6">
            Technology products and hospital management software trusted by over 7,000 hospitals, managing 2.8 crore+ patients across 17+ countries.
          </p>
          <button className="block mx-auto px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

        {/* Practo Prime */}
        <div className="bg-blue-50 p-8 rounded-lg shadow-lg mb-12">
          <h3 className="text-3xl font-bold text-blue-800 text-center mb-6">Practo Prime</h3>
          <p className="text-center text-gray-700 mb-4">
            With Prime subscription, your clinic or hospital gets access to the 'Book' feature, enabling patients to book appointments instantly!
          </p>
          <button className="block mx-auto px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

        {/* Patient Stories */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-blue-800 text-center mb-6">Build Trust with Patient Stories</h3>
          <p className="text-center text-gray-700 mb-6">
            Patient Stories allows users to express how their appointment went. This helps other patients make informed decisions and doctors gain insights into their consultations.
          </p>
          <button className="block mx-auto px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

        {/* Help Link */}
        <div className="text-center">
          <a href="/help" className="text-blue-600 font-medium">
            Have questions? Visit our help page
          </a>
        </div>
      </div>
    </section>
  );
}
