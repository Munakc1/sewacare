'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function DoctorRegisterPage() {
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!mobile.match(/^[0-9]{10}$/)) newErrors.mobile = "Enter valid 10-digit mobile number.";
    if (password.length < 6) newErrors.password = "Password must be at least 6 characters.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("OTP Sent (mock)");
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10 flex flex-col items-center">
      {/* Tabs */}
      <div className="w-full max-w-6xl border-b mb-8 flex justify-center space-x-10">
        <Link href="/login" className="text-gray-600 hover:text-cyan-500 pb-2">Login</Link>
        <Link href="/register" className="text-cyan-500 border-b-2 border-cyan-500 pb-2 font-medium">Register</Link>
      </div>

      {/* Content */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image src="/images/register-image.png" alt="Doctor Registration Art" width={400} height={400} />
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2 max-w-md border rounded-md p-8 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-gray-700">Join 125,000+ doctors</p>
            <Link href="/user-register" className="text-sm text-cyan-500 hover:underline">Not a doctor?</Link>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              {errors.fullName && <p className="text-sm text-red-500 mt-1">{errors.fullName}</p>}
            </div>

            <div className="flex space-x-2">
              <select className="border rounded px-2 py-2 text-sm text-gray-700 bg-white">
                <option>+91(IND)</option>
              </select>
              <input
                type="text"
                placeholder="Mobile Number"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            {errors.mobile && <p className="text-sm text-red-500 mt-1">{errors.mobile}</p>}

            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
            </div>

            <label className="flex items-center text-sm space-x-2">
              <input type="checkbox" className="accent-cyan-500" defaultChecked />
              <span>Receive relevant offers and communication from Practo</span>
            </label>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded"
            >
              Send OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
