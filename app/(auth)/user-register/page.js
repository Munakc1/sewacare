import Image from "next/image";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-full max-w-7xl px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Left side image */}
          <div className="flex-1 max-w-md lg:max-w-none">
            <Image
              src="/images/register-image.png"
              alt="Register Illustration"
              width={600}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Right side form */}
          <div className="flex-1 max-w-md w-full">
            <div className="border rounded-md shadow p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Join Practo</h2>
                <p className="text-sm">
                  Are you a doctor?{' '}
                  <a href="#" className="text-orange-500 hover:underline">
                    Register Here
                  </a>
                </p>
              </div>

              <form className="space-y-4">
                <div>
                  <label htmlFor="fullname" className="block text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    placeholder="Full Name"
                    className="mt-1 block w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium">
                    Mobile Number
                  </label>
                  <div className="flex gap-2">
                    <select className="border rounded px-3 py-2 focus:outline-none">
                      <option>+91(IND)</option>
                    </select>
                    <input
                      type="text"
                      id="mobile"
                      placeholder="Mobile Number"
                      className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium">
                    Create Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="mt-1 block w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="offers"
                    defaultChecked
                    className="mt-1"
                  />
                  <label htmlFor="offers" className="text-sm">
                    Receive relevant offers and promotional communication from Practo
                  </label>
                </div>

                <p className="text-xs text-gray-600">
                  By signing up, I agree to <a href="#" className="text-blue-600 underline">terms</a>
                </p>

                <button
                  type="submit"
                  className="w-full bg-sky-400 hover:bg-sky-500 text-white py-2 rounded text-lg"
                >
                  Send OTP
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
