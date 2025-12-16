import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  ChevronLeft,
  Menu,
  X,
  MapPin,
  Clock,
  Phone,
  Mail,
  Star,
  CheckCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Award,
  Calendar,
  Navigation,
  Loader,
  ArrowLeft,
  Users,
} from "lucide-react";

const DoctorDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [doctor, setDoctor] = useState(null);
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
    if (id) {
      // Fetch doctor details from API
      const fetchDoctor = async () => {
        try {
          setIsLoading(true);
          setError(null);

          // Direct API call to your backend
          const response = await fetch(
            `https://api.glaucocare.in/api/v1/doctors/${id}`
          );

          if (!response.ok) {
            throw new Error("Failed to fetch doctor details");
          }

          const result = await response.json();

          // Handle the response structure from your API
          if (result.success && result.data) {
            setDoctor(result.data);
          } else {
            setDoctor(null);
          }
        } catch (error) {
          console.error("Error fetching doctor details:", error);
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      };

      fetchDoctor();
    }
  }, [id]);

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

  const handleCall = () => {
    if (doctor?.mobile) {
      window.location.href = `tel:${doctor.mobile}`;
    }
  };

  const handleEmail = () => {
    if (doctor?.email) {
      window.location.href = `mailto:${doctor.email}`;
    }
  };

  const handleGetDirections = () => {
    const coords = doctor?.location?.coordinates;
    if (Array.isArray(coords) && coords.length >= 2) {
      const [lng, lat] = coords;
      window.open(
        `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
        "_blank"
      );
    } else if (doctor?.hospitalAddress) {
      const address = encodeURIComponent(
        `${doctor.hospitalAddress.street || ""} ${
          doctor.hospitalAddress.city || ""
        }`
      );
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${address}`,
        "_blank"
      );
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading doctor details...</p>
        </div>
      </div>
    );
  }

  if (error || !doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-gray-600 text-lg mb-4">
            {error || "Doctor not found"}
          </p>
          <Link
            href="/doctors"
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            Back to Doctors List
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2 sm:py-3"
            : "bg-white py-3 sm:py-4"
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
                href="/#testimonials"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Reviews
              </Link>
              <Link
                href="/doctors"
                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                Find Doctors
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

      {/* Back Button */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-6 bg-white">
        <div className="container mx-auto px-4">
          <Link
            href="/doctors"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Doctors
          </Link>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <section className="pb-12 sm:pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {/* Doctor Image */}
              <div className="md:col-span-1">
                <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100">
                  {doctor.profilePhoto ? (
                    <Image
                      src={doctor.profilePhoto}
                      alt={doctor.fullname || "Doctor"}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Users className="w-32 h-32 text-blue-300" />
                    </div>
                  )}
                </div>
              </div>

              {/* Doctor Info */}
              <div className="md:col-span-2">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                      {doctor.fullname || "Doctor Name"}
                    </h1>
                    <p className="text-gray-600 text-base sm:text-lg mb-2">
                      {doctor.qualification || "Qualification"}
                    </p>
                    {doctor.specialty && (
                      <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-semibold text-sm">
                        {doctor.specialty}
                      </span>
                    )}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 font-medium">
                    4.8 (234 reviews)
                  </span>
                </div>

                {/* Experience */}
                <div className="flex items-center gap-2 mb-6">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">
                    {doctor.experience
                      ? `${doctor.experience}+ years experience`
                      : "Experienced practitioner"}
                  </span>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={handleCall}
                    className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </button>
                  <button
                    onClick={handleEmail}
                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                  >
                    <Mail className="w-5 h-5" />
                    Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* About */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">About</h2>
                <p className="text-gray-600 leading-relaxed">
                  {doctor.about || "No description available"}
                </p>
              </div>

              {/* Education & Achievements */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Education & Achievements
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">
                      Treated 5,000+ glaucoma patients
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">
                      Published researcher in the Indian Journal of
                      Ophthalmology
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">
                      Member of Glaucoma Society of India
                    </span>
                  </li>
                </ul>
              </div>

              {/* Availability */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-blue-600" />
                  Availability
                </h2>
                <div className="space-y-3">
                  {[
                    { day: "Monday", time: "10:00 AM - 1:00 PM" },
                    { day: "Wednesday", time: "5:00 PM - 7:00 PM" },
                    { day: "Friday", time: "10:00 AM - 1:00 PM" },
                    { day: "Saturday", time: "4:00 PM - 6:00 PM" },
                  ].map((slot, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <span className="font-semibold text-gray-800">
                        {slot.day}
                      </span>
                      <span className="text-green-600 font-medium">
                        {slot.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Contact Info */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Contact Info
                </h2>
                <div className="space-y-4">
                  <button
                    onClick={handleEmail}
                    className="w-full flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700 break-all text-left">
                      {doctor.email || "Not available"}
                    </span>
                  </button>

                  <button
                    onClick={handleCall}
                    className="w-full flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">
                      {doctor.mobile || "Not available"}
                    </span>
                  </button>

                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      {doctor.hospitalAddress?.street || ""}
                      {doctor.hospitalAddress?.city
                        ? `, ${doctor.hospitalAddress.city}`
                        : ""}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleGetDirections}
                  className="w-full mt-4 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                >
                  <Navigation className="w-5 h-5" />
                  Get Directions
                </button>
              </div>

              {/* Hospital Info */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Hospital
                </h2>
                <p className="text-gray-700 font-semibold mb-2">
                  {doctor.hospitalName || "Not specified"}
                </p>
                <p className="text-sm text-gray-600">
                  {doctor.hospitalAddress?.street || ""}
                  {doctor.hospitalAddress?.city
                    ? `, ${doctor.hospitalAddress.city}`
                    : ""}
                  {doctor.hospitalAddress?.state
                    ? `, ${doctor.hospitalAddress.state}`
                    : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Book Your Appointment Today
          </h2>
          <p className="text-base sm:text-lg mb-6 opacity-95 max-w-2xl mx-auto">
            Download GlaucoCare app for easy appointment booking and medication
            reminders
          </p>

          <a
            href="https://forms.gle/83owVxczRSRLm15P7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl transition-all transform hover:scale-105"
          >
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

export default DoctorDetailPage;
