import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  X,
  MapPin,
  Clock,
  Eye,
  Users,
  BookOpen,
  Smartphone,
  Shield,
  Heart,
  Star,
  CheckCircle,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Loader,
} from "lucide-react";

const DoctorsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Fetch doctors from API
    const fetchDoctors = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Direct API call to your backend
        const response = await fetch(
          "https://api.glaucocare.in/api/v1/doctors?page=1&limit=10"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch doctors");
        }

        const result = await response.json();

        // Handle the response structure from your API
        if (result.success && result.data && result.data.doctors) {
          setDoctors(result.data.doctors);
        } else {
          setDoctors([]);
        }
      } catch (error) {
        console.error("Error fetching doctors:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const Logo = () => (
    <div className="flex items-center gap-2 sm:gap-3">
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white shadow-lg">
        <Image
          src="/logo.png"
          alt="logo"
          width={70}
          height={70}
          className="w-full h-full object-contain"
        />
      </div>
      <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
        GlaucoCare
      </span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2 sm:py-3"
            : "bg-transparent py-3 sm:py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                About Glaucoma
              </Link>
              <Link
                href="/#features"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Features
              </Link>
              <Link
                href="/doctors"
                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                Doctors
              </Link>
              <Link
                href="/assessment"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Assessment
              </Link>
              <a
                href="https://forms.gle/83owVxczRSRLm15P7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-sm sm:text-base"
              >
                Download App
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-4 right-4 bg-white shadow-xl rounded-2xl p-4 mt-2">
              <div className="flex flex-col gap-3">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 px-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/#about"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 px-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  About Glaucoma
                </Link>
                <Link
                  href="/#features"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 px-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Features
                </Link>
                <Link
                  href="/#testimonials"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 px-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Reviews
                </Link>
                <Link
                  href="/doctors"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-blue-600 hover:text-blue-700 font-semibold py-2 px-3 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  Find Doctors
                </Link>

                <a
                  href="https://forms.gle/83owVxczRSRLm15P7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-full font-semibold w-full"
                >
                  Download App
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Find Glaucoma{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Specialists
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with experienced ophthalmologists specializing in glaucoma
              treatment and care
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">
                {doctors.length}+
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Expert Doctors
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">
                100%
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Verified</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">
                24/7
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors List Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader className="w-12 h-12 text-blue-600 animate-spin mb-4" />
              <p className="text-gray-600">Loading doctors...</p>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <div className="text-red-500 mb-4">⚠️</div>
              <p className="text-gray-600 text-lg mb-4">
                Failed to load doctors
              </p>
              <p className="text-gray-500 text-sm">{error}</p>
            </div>
          ) : doctors.length === 0 ? (
            <div className="text-center py-20">
              <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">No doctors found</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {doctors.map((doctor) => (
                <div
                  key={doctor._id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
                >
                  {/* Doctor Image */}
                  <div className="relative h-108 bg-gradient-to-br from-blue-100 to-cyan-100">
                    {doctor.profilePhoto ? (
                      <Image
                        src={doctor.profilePhoto}
                        alt={doctor.fullname || "Doctor"}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          e.target.src = "/placeholder-doctor.png";
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Users className="w-20 h-20 text-blue-300" />
                      </div>
                    )}
                  </div>

                  {/* Doctor Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {doctor.fullname || "Doctor Name"}
                    </h3>
                    <p className="text-blue-600 font-medium text-sm mb-4">
                      {doctor.specialty || "Ophthalmologist"}
                    </p>

                    {/* Hospital Info */}
                    <div className="flex items-start gap-2 mb-3">
                      <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {doctor.hospitalName || "Hospital"}
                      </p>
                    </div>

                    {/* Availability */}
                    <div className="bg-green-50 rounded-lg p-3 mb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-4 h-4 text-green-600" />
                        <p className="text-xs font-semibold text-gray-700">
                          Availability Today:
                        </p>
                      </div>
                      <p className="text-sm text-green-600 font-medium">
                        10:00 AM - 6:00 PM
                      </p>
                    </div>

                    {/* See More Button */}
                    <Link
                      href={`/doctors/${doctor._id}`}
                      className="block w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center py-3 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Need Help Finding the Right Doctor?
          </h2>
          <p className="text-base sm:text-lg mb-6 opacity-95 max-w-2xl mx-auto">
            Download GlaucoCare app for personalized doctor recommendations and
            easy appointment booking
          </p>

          <a
            href="https://forms.gle/83owVxczRSRLm15P7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl transition-all transform hover:scale-105 gap-2"
          >
            <Smartphone className="w-5 h-5" />
            Download Free App
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="text-center sm:text-left">
              <div className="flex items-center gap-3 mb-3 sm:mb-4 justify-center sm:justify-start">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="logo"
                    width={70}
                    height={70}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xl sm:text-2xl font-bold">
                  GlaucoCare
                </span>
              </div>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                Your trusted companion in glaucoma care. Empowering patients
                with tools for better eye health.
              </p>
              <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
                <a
                  target="_blank"
                  href="https://www.facebook.com/people/Glaucocare/61581924631472/"
                  className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  target="_blank"
                  href="#"
                  className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/glaucocare"
                  className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/glaucocare_app/"
                  className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                Quick Links
              </h3>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>
                  <Link
                    href="/#about"
                    className="hover:text-white transition-colors"
                  >
                    About Glaucoma
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#features"
                    className="hover:text-white transition-colors"
                  >
                    App Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/doctors"
                    className="hover:text-white transition-colors"
                  >
                    Find Doctors
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                Resources
              </h3>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Research
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Events
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                Contact
              </h3>
              <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
                <li className="flex items-center gap-2 justify-center sm:justify-start">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="break-all">admin@glaucocare.in</span>
                </li>
                <li className="flex items-center gap-2 justify-center sm:justify-start">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>+91 7621083656</span>
                </li>
                <li className="flex items-center gap-2 justify-center sm:justify-start">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Ahmedabad, Gujarat</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-gray-400">
            <p className="text-xs sm:text-sm">
              &copy; 2025 GlaucoCare. All rights reserved. | Privacy Policy |
              Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DoctorsPage;
