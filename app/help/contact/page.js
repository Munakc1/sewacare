import React from 'react';

export default function HelpSection() {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800">Practo Help</h2>
          <p className="text-lg mt-4 text-gray-600">
            Type your question and search
          </p>
          <div className="mt-4 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>

        {/* Medical Newsletters */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h3 className="text-3xl font-bold text-blue-800 text-center mb-6">Medical Newsletters</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: 'Volume 1, Edition 4, October-December 2021' },
              { title: 'Volume 1, Edition 3, July-September 2021' },
              { title: 'Volume 1, Edition 2, April-June 2021' },
              { title: 'Volume 1, Edition 1, Jan-Mar 2021' }
            ].map((item, i) => (
              <div key={i} className="p-4 border rounded-lg bg-blue-50 text-center">
                <h4 className="font-semibold text-lg text-blue-800">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h3 className="text-3xl font-bold text-blue-800 text-center mb-6">Frequently Asked Questions</h3>
          <div className="space-y-6">
            {[
              { question: 'What is Practo Consult?', answer: 'Practo Consult is a platform for online consultation with doctors via video or chat.' },
              { question: 'How can I make the best of Feedback dashboard?', answer: 'The Feedback dashboard helps you track patient feedback and make necessary improvements.' },
              { question: 'How to create and edit Practo Profile?', answer: 'Visit the profile section in the app or website to create and edit your profile.' },
              { question: 'How do I enable two-factor authentication?', answer: 'Go to Settings > Security > Enable Two-factor Authentication to add extra layers of security.' },
              { question: 'How do I handle appointment scheduling?', answer: 'You can easily schedule appointments via Practo’s platform, and patients will receive automatic reminders.' }
            ].map((item, i) => (
              <div key={i} className="p-4 border rounded-lg bg-gray-100">
                <h4 className="font-semibold text-blue-800">{item.question}</h4>
                <p className="mt-2 text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h3 className="text-3xl font-bold text-blue-800 text-center mb-6">Contact Support</h3>
          <p className="text-center text-gray-600 mb-6">
            For any inquiries or concerns, you can contact our customer service team.
          </p>

          {/* Contact Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
            {[
              { title: 'For Providers', contact: 'support@practo.com' },
              { title: 'For Consumers', contact: 'Download the Practo app for live chat support' }
            ].map((item, i) => (
              <div key={i} className="p-4 border rounded-lg shadow-sm bg-blue-50">
                <h4 className="font-semibold text-lg text-blue-800">{item.title}</h4>
                <p className="text-gray-600">{item.contact}</p>
              </div>
            ))}
          </div>

          {/* Escalation Options */}
          <div className="mt-8 text-center">
            <p className="text-gray-700 mb-4">If your issue remains unresolved, escalate to:</p>
            <div className="space-x-4">
              <a
                href="mailto:practo-nodal-officer-team@practo.com"
                className="text-blue-600 hover:text-blue-800"
              >
                Nodal Officer: Mrs. Chaitra
              </a>
              <span>|</span>
              <a
                href="mailto:practo-grievance-officer-team@practo.com"
                className="text-blue-600 hover:text-blue-800"
              >
                Grievance Officer: Mr. Anshul
              </a>
            </div>
          </div>
        </div>

        {/* Terms and Privacy */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-blue-800 mb-6">Terms and Privacy</h3>
          <p className="text-gray-600">
            Please review our <span className="text-blue-600">Terms of Service</span> and <span className="text-blue-600">Privacy Policy</span> for more details.
          </p>
        </div>
      </div>
    </section>
  );
}
