"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [useOTP, setUseOTP] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!identifier.trim()) {
      newErrors.identifier = 'Mobile number or Email is required';
    }
    if (!useOTP && !password) {
      newErrors.password = 'Password is required';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      if (useOTP) {
        alert('✅ OTP sent to your mobile/email!');
      } else {
        alert('✅ Login successful!');
      }
      // Proceed with API/login flow
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white">
      {/* Tabs */}
      <div className="w-full max-w-6xl border-b mt-4 mb-8 flex justify-center space-x-10">
        <Link href="/login" className="text-cyan-500 border-b-2 border-cyan-500 pb-2 font-medium">
          Login
        </Link>
        <Link href="/register" className="text-gray-600 hover:text-cyan-500 pb-2">
          Register
        </Link>
      </div>

      {/* Main content */}
      <div className="w-full max-w-6xl flex items-center justify-between">
        {/* Left image */}
        <div className="w-1/2 flex justify-center">
          <Image src="/images/register-image.png" alt="Login Art" width={400} height={400} />
        </div>

        {/* Right form */}
        <div className="w-1/2 max-w-md border rounded-md p-8 shadow-sm">
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            {/* Mobile/Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number / Email ID</label>
              <input
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className={`w-full border ${errors.identifier ? 'border-red-500' : 'border-cyan-400'} rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400`}
                placeholder="Mobile Number / Email ID"
              />
              {errors.identifier && <p className="text-sm text-red-500 mt-1">{errors.identifier}</p>}
            </div>

            {/* Password */}
            {!useOTP && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400`}
                  placeholder="Password"
                />
                {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
              </div>
            )}

            {/* Options */}
            {!useOTP && (
              <div className="flex items-center justify-between">
                <label className="flex items-center text-sm space-x-2">
                  <input type="checkbox" className="accent-cyan-500" defaultChecked />
                  <span>Remember me for 30 days</span>
                </label>
                <a href="#" className="text-sm text-cyan-500 hover:underline">Forgot password?</a>
              </div>
            )}

            {/* Login with OTP Toggle */}
            <label className="flex items-center text-sm space-x-2">
              <input
                type="checkbox"
                className="accent-cyan-500"
                checked={useOTP}
                onChange={(e) => setUseOTP(e.target.checked)}
              />
              <span>Login with OTP instead of password</span>
            </label>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded"
            >
              {useOTP ? 'Send OTP' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
