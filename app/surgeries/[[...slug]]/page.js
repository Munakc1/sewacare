'use client';
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function SurgeriesPage() {
  const { slug } = useParams();
  const [city, setCity] = useState("");
  const [ailment, setAilment] = useState("");

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-800 text-white p-8 rounded-b-3xl flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
        <div className="max-w-xl space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            {slug?.length ? `Surgery for ${slug.join(" → ")}` : "End to end care from Top Surgeons at our Practo Care Clinics"}
          </h1>
          <p className="text-lg">
            Talk to our care expert today to book your consultation. <br />
            All insurance accepted & No-cost EMI available.
          </p>
          <div className="mt-4">
            <a
              href="tel:08045685554"
              className="inline-flex items-center px-4 py-2 bg-white text-blue-800 font-medium rounded shadow hover:bg-gray-100 transition"
            >
              <span className="mr-2">📞</span> 08045685554
            </a>
          </div>
        </div>
        <div className="mt-6 lg:mt-0">
          <Image
            src="/doctor-image.png"
            alt="Doctors"
            width={400}
            height={300}
            className="rounded-xl"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="py-12 max-w-7xl mx-auto">
        <h2 className="text-xl font-semibold text-center mb-6">
          We are experts in Surgical solutions for 50+ ailments.
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {["Piles", "Hernia", "Kidney Stone", "Cataract", "Circumcision"].map((item) => (
            <div key={item} className="w-24 h-24 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-sm">🔹</span>
              </div>
              <span className="mt-2 text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Section */}
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold mb-4">Book your consultation today</h3>
        <select
          className="w-full border rounded p-2 mb-3"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="">Select City</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Delhi">Delhi</option>
        </select>
        <select
          className="w-full border rounded p-2"
          value={ailment}
          onChange={(e) => setAilment(e.target.value)}
        >
          <option value="">Select Ailment</option>
          <option value="Piles">Piles</option>
          <option value="Hernia">Hernia</option>
          <option value="Kidney Stone">Kidney Stone</option>
        </select>
      </div>
    </div>
  );
}
