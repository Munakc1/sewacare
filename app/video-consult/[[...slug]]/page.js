'use client'; // Only needed if you're using App Router and client-side interactivity

import Image from 'next/image';

export default function Home() {
  const doctors = [
    {
      name: 'Dr. Murtaza Ali',
      title: 'Sexologist, Psychiatrist',
      experience: '9 years experience',
      consults: '4597 consults done',
      image: '/doctors/murtaza.jpg',
    },
    {
      name: 'Dr. Prateeksha B S',
      title: 'Obstetrician, Gynecologist',
      experience: '6 years experience',
      consults: '6402 consults done',
      image: '/doctors/prateeksha.jpg',
    },
    {
      name: 'Dr. Rupal Agarwal',
      title: 'Gynecologist, Obstetrician',
      experience: '3 years experience',
      consults: '10377 consults done',
      image: '/doctors/rupal.jpg',
    },
    {
      name: 'Dr. Tejashree M',
      title: 'Obstetrician, Gynecologist',
      experience: '9 years experience',
      consults: '25506 consults done',
      image: '/doctors/tejashree.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-pink-100 py-12 px-6 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="max-w-xl space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Skip the travel! <br />
            <span className="text-3xl font-semibold">Take Online Doctor Consultation</span>
          </h1>
          <p className="text-lg text-gray-700">
            Private consultation + Audio call • Starts at just ₹199
          </p>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <Image src="/doctor1.jpg" alt="Doctor 1" width={40} height={40} className="rounded-full border-2 border-white" />
              <Image src="/doctor2.jpg" alt="Doctor 2" width={40} height={40} className="rounded-full border-2 border-white" />
              <Image src="/doctor3.jpg" alt="Doctor 3" width={40} height={40} className="rounded-full border-2 border-white" />
            </div>
            <span className="text-green-600 font-medium">+130 Doctors are online</span>
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
          </div>

          <button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded font-semibold">
            Consult Now
          </button>

          <div className="flex items-center gap-4 mt-4 text-gray-700 text-sm">
            <span>✔ Verified Doctors</span>
            <span>📄 Digital Prescription</span>
            <span>🔁 Free Followup</span>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-10 lg:mt-0">
          <Image src="/doctor-banner.png" alt="Consultation" width={500} height={400} className="rounded-lg" />
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-12 px-6 bg-white">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-semibold text-gray-900">25+ Specialities</h2>
          <button className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-100 text-sm">
            See all Specialities
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            'Gynaecology',
            'Sexology',
            'General physician',
            'Dermatology',
            'Psychiatry',
            'Stomach & digestion',
          ].map((spec, i) => (
            <div
              key={i}
              className="bg-gradient-to-b from-blue-50 to-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition"
            >
              <div className="w-20 h-20 mx-auto mb-2">
                <Image
                  src={`/icons/${spec.toLowerCase().replace(/ & | /g, '-')}.png`}
                  alt={spec}
                  width={80}
                  height={80}
                />
              </div>
              <p className="text-sm font-medium text-gray-800">{spec}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Common Health Concerns Section */}
      <section className="py-12 px-6 bg-white">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Common Health Concerns</h2>
            <p className="text-sm text-gray-600">Consult a doctor online for any health issue</p>
          </div>
          <button className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-100 text-sm font-medium">
            See All Symptoms
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { title: 'Cough & Cold?', price: 499, image: '/concerns/cough-cold.jpg' },
            { title: 'Period problems?', price: 599, image: '/concerns/period.jpg' },
            { title: 'Performance issues in bed?', price: 599, image: '/concerns/performance.jpg' },
            { title: 'Skin problems?', price: 549, image: '/concerns/skin.jpg' },
          ].map((concern, i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition">
              <img src={concern.image} alt={concern.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-md font-medium text-gray-800">{concern.title}</h3>
                <p className="text-sm text-gray-600">₹ {concern.price}</p>
                <a href="#" className="text-sky-600 text-sm font-semibold mt-2 inline-block">
                  Consult Now &gt;
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Offers Section */}
      <section className="px-6 py-12 space-y-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Offers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-200 p-6 rounded-lg flex items-center justify-between">
              <div>
                <span className="bg-white text-sm px-2 py-1 rounded font-semibold mb-2 inline-block">
                  OFFER
                </span>
                <h3 className="text-lg font-bold mt-2">Download the App & get ₹200 HealthCash</h3>
                <button className="mt-4 text-black font-medium underline flex items-center gap-1">
                  Download App <span>→</span>
                </button>
              </div>
              <Image src="/offers/app.png" alt="App" width={100} height={100} className="hidden md:block" />
            </div>

            <div className="bg-orange-300 p-6 rounded-lg flex items-center justify-between">
              <div>
                <span className="bg-white text-sm px-2 py-1 rounded font-semibold mb-2 inline-block">
                  OFFER
                </span>
                <h3 className="text-lg font-bold mt-2">Consult with specialists at just ₹199</h3>
                <button className="mt-4 text-black font-medium underline flex items-center gap-1">
                  Consult Now <span>→</span>
                </button>
              </div>
              <Image src="/offers/doctor.png" alt="Doctor" width={100} height={100} className="hidden md:block" />
            </div>
          </div>
        </div>

        {/* Our Doctors Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Our Doctors</h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {doctors.map((doc, index) => (
              <div
                key={index}
                className="min-w-[250px] bg-white border rounded-lg p-4 shadow hover:shadow-md transition"
              >
                <div className="flex items-center gap-4 mb-2">
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{doc.name}</p>
                    <p className="text-sm text-gray-600">{doc.title}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{doc.experience}</p>
                <p className="text-sm text-gray-600">{doc.consults}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
