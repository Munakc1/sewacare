import Hero from '../components/Hero';
import Business from '../components/Business';


export default function DoctorPage() {
  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen p-6 md:p-12">
      <Hero />
      <Business />
    

      {/* Footer Countries */}
      <footer className="max-w-6xl mx-auto mt-20 py-6 text-center text-sm text-gray-600 space-x-4">
        <span>India</span>
        <span>Singapore</span>
        <span>Philippines</span>
        <span>Indonesia</span>
        <span>Brazil</span>
      </footer>
    </main>
  );
}
