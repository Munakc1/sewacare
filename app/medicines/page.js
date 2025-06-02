import Image from 'next/image';

export default function MedicinesPage() {
  return (
    <div className="px-6 py-8 max-w-7xl mx-auto text-gray-800">
      <h1 className="text-2xl font-bold mb-6">Order Medicines & Health Products Online</h1>

      <p className="mb-4">
        Find and buy medicines online with Practo Pharmacy. Browse through prescription medicines, OTC products, health & wellness products on an online pharmacy that provides hassle free service across 100+ cities in India.
      </p>

      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li><strong>Automated prescription refill:</strong> Set up scheduled refills for your online medicine orders.</li>
        <li><strong>Doorstep delivery:</strong> Get medicines delivered on time, without leaving your home.</li>
        <li><strong>Medicine order history:</strong> Easily reorder from your past orders.</li>
        <li><strong>Exclusive offers:</strong> Get cashbacks, discounts, and more!</li>
      </ul>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">INTRODUCING CONSULTATION DESK</h2>
          <p className="mb-4">Don’t self-medicate. Talk to an expert. Consult a doctor in less than 2 minutes.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">INTRODUCING FAST DELIVERY</h2>
          <p className="mb-4">Tired of waiting in a queue? Too weak to go down and buy medicines?</p>
        </div>
      </div>

      <div className="mt-10 border-t pt-6">
        <h2 className="text-xl font-semibold mb-2">Download the Practo App</h2>
        <p className="mb-4">Your home for health is one tap away. Book appointments, consult online, order health products and more.</p>

        <div className="flex items-center space-x-2">
          <span>+91</span>
          <input
            type="text"
            placeholder="Enter phone number"
            className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Send App Link
          </button>
        </div>
      </div>
    </div>
  );
}
