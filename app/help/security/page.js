import React from 'react';

export default function DataSecurity() {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Trust Foundation */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800">Trust: The Foundation on Which Practo is Built</h2>
          <p className="text-lg mt-4 text-gray-600">
            Your data has only one owner: YOU! Practo does not have access to your data and is committed to privacy. We ensure your data is never shared with any third parties.
          </p>
          <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

        {/* Data Security Policies */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h3 className="text-3xl font-bold text-blue-800 text-center mb-6">Your Data is for Your Eyes Only</h3>
          <p className="text-gray-700 text-center mb-4">
            We take every possible measure to ensure your data is secure. Practo follows stringent policies to ensure that your data is never compromised.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { title: '256-bit Encryption', desc: 'Your data is protected with world-class encryption standards.' },
              { title: 'ISO 27001 Certified', desc: 'We follow industry-leading security practices, certified by ISO.' },
              { title: 'HIPAA Compliant', desc: 'Our data centers are fully HIPAA compliant to protect healthcare information.' }
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

        {/* Security Features */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-blue-800 text-center mb-6">Security Features</h3>
          <p className="text-center text-gray-700 mb-6">
            Practo implements stringent security measures to protect both doctor and patient data from unauthorized access. Our platform is built to ensure data confidentiality, integrity, and availability.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Two-factor Authentication', desc: 'We offer two-factor authentication to ensure that only authorized users can access your data.' },
              { title: 'Remote Logout', desc: 'Get notified of suspicious logins and remotely log out devices to protect your account.' },
              { title: 'Encrypted Backups', desc: 'Your data is backed up and versioned securely across multiple locations worldwide.' },
              { title: 'No Third-Party Sharing', desc: 'Practo does not sell or share your data with any third party, ensuring your data remains private.' }
            ].map((item, i) => (
              <div key={i} className="p-4 border rounded-lg shadow-sm bg-gray-100">
                <h4 className="font-semibold text-xl text-blue-800">{item.title}</h4>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* For Doctors */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h3 className="text-3xl font-bold text-blue-800 text-center mb-6">Data Security for Doctors</h3>
          <p className="text-gray-700 text-center mb-4">
            We ensure that no one at Practo can view or access your practice data. You are in full control of what communication is sent to your patients.
          </p>

          <ul className="list-disc pl-6 text-gray-600">
            <li>We do not have access to your practice data in Ray.</li>
            <li>Doctors control communication preferences for their patients.</li>
            <li>Data security is enforced with strict policies and monitoring.</li>
            <li>We never share doctor data with any third party.</li>
          </ul>
        </div>

        {/* For Patients */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-blue-800 text-center mb-6">Data Security for Patients</h3>
          <p className="text-center text-gray-700 mb-4">
            Your health information is private and accessible only to you. Practo ensures that your data remains secure and private at all times.
          </p>

          <ul className="list-disc pl-6 text-gray-600">
            <li>Your data is encrypted and never shared with third parties without your permission.</li>
            <li>We never send promotional messages without your consent.</li>
            <li>You control who can view your health information.</li>
          </ul>
        </div>

        {/* FAQs */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-blue-800 mb-6">Frequently Asked Questions</h3>
          <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition">
            View FAQs
          </button>
        </div>
      </div>
    </section>
  );
}
