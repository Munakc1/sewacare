'use client';
import Image from 'next/image';

export default function LabTests() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Search Section */}
      <section className="bg-white py-10 px-6 text-center">
        <h1 className="text-2xl font-bold mb-2">Bangalore</h1>
        <p className="text-lg mb-4">Search for Tests, Packages and Profiles</p>
        <input
          type="text"
          placeholder="Search for tests..."
          className="border border-gray-300 px-4 py-2 rounded-md w-full max-w-md mx-auto"
        />
      </section>

      {/* Help Section */}
      <section className="flex flex-col items-center text-center py-6">
        <Image src="/images/help-icon.png" alt="Help" width={60} height={60} />
        <p className="mt-2 font-semibold">Need help with booking your test?</p>
        <p className="text-blue-600 text-lg font-bold mt-1">+91 8045684087</p>
      </section>

      {/* Top Booked Tests */}
      <section className="py-8 px-6">
        <h2 className="text-xl font-semibold mb-4">Top Booked Diagnostic Tests</h2>
        {/* You can map over test data here */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Example Test Card */}
          <div className="bg-white shadow-md p-4 rounded-md">Blood Sugar Test</div>
        </div>
      </section>

      {/* Partner Labs */}
      <section className="bg-white py-8 px-6 mt-10">
        <h2 className="text-xl font-semibold mb-2">Our Partner Labs</h2>
        <p>Your tests will be conducted in one of our partner labs to ensure highest accuracy of your reports.</p>
        <Image src="/images/lab.png" alt="Lab" width={200} height={100} className="mt-4" />
      </section>

      {/* Why book with us */}
      <section className="py-10 bg-gray-100 px-6">
        <h2 className="text-xl font-semibold text-center mb-8">Why book with us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <Image src="/images/home-sample.png" alt="Home Collection" width={50} height={50} />
            <p className="mt-2 font-medium">Home sample collection for FREE</p>
          </div>
          <div>
            <Image src="/images/report.png" alt="Digital Reports" width={50} height={50} />
            <p className="mt-2 font-medium">Digital reports within 24 hours</p>
          </div>
          <div>
            <Image src="/images/discount.png" alt="Offers" width={50} height={50} />
            <p className="mt-2 font-medium">Exciting offers & cashback</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-10 px-6">
        <h2 className="text-xl font-semibold text-center mb-6">How it works?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <Image src="/images/search.png" alt="Search" width={60} height={60} />
            <p className="mt-2">Search and book your test</p>
          </div>
          <div>
            <Image src="/images/sample-collection.png" alt="Collection" width={60} height={60} />
            <p className="mt-2">Get home sample collection</p>
          </div>
          <div>
            <Image src="/images/report-email.png" alt="Report" width={60} height={60} />
            <p className="mt-2">Receive your digital report</p>
          </div>
        </div>
      </section>

      {/* Practo App Download */}
      <section className="bg-white py-10 px-6 text-center">
        <h2 className="text-xl font-semibold mb-4">Download the Practo app</h2>
        <p className="mb-2">Your home for health is one tap away.</p>
        <input
          type="text"
          placeholder="+91 Enter phone number"
          className="border border-gray-300 px-4 py-2 rounded-md w-full max-w-xs"
        />
        <button className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-md">Send App Link</button>
      </section>
    </div>
  );
}
