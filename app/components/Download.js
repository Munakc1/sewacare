'use client';

export default function Download() {
  return (
    <div className="min-h-screen bg-[#f9f9fb] flex items-center justify-center px-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left Image Section */}
        <div className="rounded-xl p-2 shadow-md">
          <img
            src="/images/practo-app.png"
            alt="Practo App"
            className="w-full max-w-sm object-contain"
          />
        </div>

        {/* Right Text Section */}
        <div className="max-w-md">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-[#2b2b2b]">
            Download the Practo app
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Access video consultation with India’s top doctors on the Practo app.
            Connect with doctors online, available 24/7, from the comfort of your home.
          </p>

          <p className="text-gray-700 font-medium mb-2">
            Get the link to download the app
          </p>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex border rounded-md overflow-hidden">
              <span className="px-3 py-2 bg-gray-100 text-gray-800">+91</span>
              <input
                type="text"
                placeholder="Enter phone number"
                className="px-4 py-2 outline-none w-full"
              />
            </div>
            <button className="bg-[#06baf2] text-white px-5 py-2 rounded-md hover:bg-[#0ba9d9] transition">
              Send SMS
            </button>
          </div>

          {/* Actual Download Links */}
          <div className="flex gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.practo.fabric"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Download on Google Play"
                className="h-12"
              />
            </a>
            <a
              href="https://apps.apple.com/in/app/practo/id953772015"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on App Store"
                className="h-12"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
