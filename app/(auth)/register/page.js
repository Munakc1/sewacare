"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(true);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10,}$/.test(mobile)) {
      newErrors.mobile = "Enter a valid 10-digit number";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (!agreed) {
      newErrors.agreed = "You must agree to the terms";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      alert("OTP sent to mobile!");
     
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Tabs */}
      <div className="w-full max-w-6xl border-b mt-4 mb-8 flex justify-center space-x-10">
        <Link href="/login" className="text-gray-600 hover:text-cyan-500 pb-2">
          Login
        </Link>
        <Link href="/register" className="text-cyan-500 border-b-2 border-cyan-500 pb-2 font-medium">
          Register
        </Link>
      </div>

      {/* Main content */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-start justify-between px-4 md:px-0">
        {/* Left image */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <Image src="/images/register-image.png" alt="Register Art" width={400} height={400} />
        </div>

        {/* Right form */}
        <div className="w-full md:w-1/2 max-w-md border rounded-md p-8 shadow-sm">
          <div className="mb-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Join Practo</h2>
              <p className="text-sm text-gray-500">
                Are you a doctor? <a href="/doctoregister" className="text-orange-500 hover:underline">Register Here</a>
              </p>
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={`w-full border ${
                  errors.fullName ? "border-red-500" : "border-cyan-300"
                } rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400`}
                placeholder="Full Name"
              />
              {errors.fullName && <p className="text-sm text-red-500 mt-1">{errors.fullName}</p>}
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
              <div className="flex space-x-2">
                <select className="border border-gray-300 rounded px-2 py-2 text-sm text-gray-700">
                  <option>+91 (IND)</option>
                </select>
                <input
                  type="text"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className={`flex-1 border ${
                    errors.mobile ? "border-red-500" : "border-gray-300"
                  } rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400`}
                  placeholder="Mobile Number"
                />
              </div>
              {errors.mobile && <p className="text-sm text-red-500 mt-1">{errors.mobile}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Create Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400`}
                placeholder="Password"
              />
              {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
            </div>

            {/* Checkbox */}
            <label className="flex items-start text-sm space-x-2">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 accent-cyan-500"
              />
              <span>
                Receive relevant offers and promotional communication from Practo<br />
                <span className="text-gray-500 text-xs">
                  By signing up, I agree to <a href="#" className="text-cyan-500 underline">terms</a>
                </span>
                {errors.agreed && <p className="text-sm text-red-500 mt-1">{errors.agreed}</p>}
              </span>
            </label>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-cyan-400 hover:bg-cyan-500 text-white py-2 rounded font-semibold"
            >
              Send OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
