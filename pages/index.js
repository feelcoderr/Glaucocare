import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Menu,
  X,
  Clock,
  Eye,
  Users,
  BookOpen,
  Smartphone,
  Shield,
  Heart,
  Star,
  CheckCircle,
  AlertCircle,
  Activity,
  Calendar,
  MessageCircle,
  Download,
  ArrowRight,
  Play,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronRight,
  Zap,
  Award,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("symptoms");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Alert Banner */}
      {/*
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-2 px-3 sm:px-4 text-center">
        <p className="text-xs sm:text-sm font-medium flex items-center justify-center gap-2">
          <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
          <span className="line-clamp-1">
            January is Glaucoma Awareness Month - 50% don`t know they have it
          </span>
        </p>
      </div>
      */}

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2 sm:py-3 mt-0"
            : "bg-transparent py-3 sm:py-4 mt-7 sm:mt-8"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                About Glaucoma
              </a>
              <a
                href="#features"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Features
              </a>
              <Link
                href="/doctors"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Doctors
              </Link>
              <Link
                href="/assessment"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Assessment
              </Link>
              {/* Desktop Download (external) */}
              <a
                href="https://drive.google.com/file/d/1RJexZJj8fimSt4RCfwptMEWu0OG7ePOu/view?usp=sharing"
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
                <a
                  href="#home"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 px-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Home
                </a>
                <a
                  href="#about"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 px-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  About Glaucoma
                </a>
                <a
                  href="#features"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 px-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Features
                </a>
                <a
                  href="#testimonials"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 px-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Reviews
                </a>

                {/* Mobile Download (external) */}
                <a
                  href="https://drive.google.com/file/d/1RJexZJj8fimSt4RCfwptMEWu0OG7ePOu/view?usp=sharing"
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
      <section
        id="home"
        className="relative min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>

        {/* Animated Background Elements - Hidden on mobile for performance */}
        <div className="hidden sm:block absolute inset-0">
          <div className="absolute top-20 left-10 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                #1 Glaucoma App in India
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Protect Your Vision,
                </span>
                <br />
                <span className="text-gray-800">Take Control Today</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Join thousands managing glaucoma successfully with smart
                medication reminders, expert doctor connections, and
                personalized eye care tracking.
              </p>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href="https://forms.gle/83owVxczRSRLm15P7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center sm:justify-start gap-3 bg-black text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-gray-800 transition-all transform hover:scale-105 w-full sm:w-auto"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-lg flex items-center justify-center">
                    <Image
                      src="/app-store.png"
                      alt="App Store"
                      width={100}
                      height={100}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                  <div className="text-left">
                    <div className="text-xs opacity-80">Download on the</div>
                    <div className="text-base sm:text-lg font-semibold">
                      App Store
                    </div>
                  </div>
                </a>

                <a
                  href="https://forms.gle/83owVxczRSRLm15P7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center sm:justify-start gap-3 bg-black text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-gray-800 transition-all transform hover:scale-105 w-full sm:w-auto"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-lg flex items-center justify-center">
                    <Image
                      src="/google-play.png"
                      alt="Google Play"
                      width={100}
                      height={100}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                  <div className="text-left">
                    <div className="text-xs opacity-80">Get it on</div>
                    <div className="text-base sm:text-lg font-semibold">
                      Google Play
                    </div>
                  </div>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-200">
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">
                    4.2M+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Indians with Glaucoma
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">
                    50%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Undiagnosed
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">
                    98%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Satisfaction
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image/Visual - Hidden on very small screens */}
            <div className="relative mt-8 lg:mt-0">
              <div className="relative mx-auto w-full max-w-sm md:max-w-md">
                {/* Phone Mockup */}
                <div className="relative mx-auto w-60 sm:w-64 md:w-72 h-[500px] sm:h-[550px] md:h-[600px] bg-gradient-to-br from-gray-900 to-gray-700 rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl p-2.5 sm:p-3">
                  <div className="w-full h-full bg-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden">
                    {/* App Screen */}
                    <div className="bg-gradient-to-br from-blue-600 to-blue-400 h-full flex flex-col items-center justify-center text-white p-6 sm:p-8">
                      <div className="w-16 sm:w-20 h-16 sm:h-20 bg-white rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-6 backdrop-blur-sm">
                        <Image
                          src="/logo.png"
                          alt="logo"
                          width={70}
                          height={70}
                          className="w-12 sm:w-14 h-12 sm:h-14 object-contain"
                        />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">
                        GlaucoCare
                      </h3>
                      <p className="text-center opacity-90 text-sm sm:text-base">
                        Your Complete Eye Care Companion
                      </p>

                      {/* Mock UI Elements */}
                      <div className="mt-6 sm:mt-8 w-full space-y-2 sm:space-y-3">
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="text-xs sm:text-sm">
                              Next: Timolol at 8:00 PM
                            </span>
                          </div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <Activity className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="text-xs sm:text-sm">
                              IOP: 18 mmHg (Normal)
                            </span>
                          </div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="text-xs sm:text-sm">
                              Next Checkup: Feb 15
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements - Adjusted for mobile */}
                <div className="hidden sm:block absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-gradient-to-br from-green-400 to-green-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl shadow-lg animate-bounce">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-semibold text-xs sm:text-sm">
                      Reminder Set!
                    </span>
                  </div>
                </div>

                <div className="hidden md:block absolute bottom-20 -left-8 bg-white rounded-2xl shadow-xl p-3 sm:p-4 animate-float">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold">
                        Dr. Sharma
                      </div>
                      <div className="text-xs text-gray-500">
                        Glaucoma Specialist
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Glaucoma Section */}
      <section
        id="about"
        className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block bg-blue-100 text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              Understanding Glaucoma
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              The Silent Thief of Sight
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Glaucoma affects over 12 million Indians. Early detection and
              proper management are crucial to preserving your vision.
            </p>
          </div>

          {/* Info Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {[
              {
                icon: <Eye className="w-5 h-5 sm:w-6 sm:h-6" />,
                title: "What is Glaucoma?",
                description:
                  "A group of eye diseases that damage the optic nerve, often due to increased eye pressure.",
                color: "blue",
              },
              {
                icon: <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
                title: "Risk Factors",
                description:
                  "Age over 40, family history, diabetes, high eye pressure, and certain medications.",
                color: "amber",
              },
              {
                icon: <Activity className="w-5 h-5 sm:w-6 sm:h-6" />,
                title: "Types",
                description:
                  "Primary open-angle (90% cases) develops slowly. Angle-closure requires emergency treatment.",
                color: "purple",
              },
              {
                icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />,
                title: "Statistics",
                description:
                  "12 million Indians affected, expected to reach 16 million by 2030.",
                color: "red",
              },
              {
                icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
                title: "Early Detection",
                description:
                  "Regular eye exams are vital. Vision loss starts peripherally.",
                color: "green",
              },
              {
                icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />,
                title: "Treatment",
                description:
                  "Eye drops, laser therapy, and surgery can manage glaucoma effectively.",
                color: "pink",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div
                  className={`w-10 sm:w-12 h-10 sm:h-12 bg-${item.color}-100 rounded-lg sm:rounded-xl flex items-center justify-center text-${item.color}-600 mb-3 sm:mb-4`}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Visual Comparison */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                  Vision Comparison
                </h3>
                <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 opacity-90">
                  Glaucoma gradually damages peripheral vision. Without
                  treatment, it progresses to tunnel vision and eventually
                  complete blindness.
                </p>

                {/* Tabs (added 'Tips' tab) */}
                <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6">
                  {["symptoms", "stages", "prevention", "tips"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium transition-all text-sm sm:text-base ${
                        activeTab === tab
                          ? "bg-white text-blue-600"
                          : "bg-white/20 text-white hover:bg-white/30"
                      }`}
                      aria-pressed={activeTab === tab}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4">
                  {activeTab === "symptoms" && (
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm sm:text-base">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                        <span>Gradual loss of peripheral vision</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm sm:text-base">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                        <span>Tunnel vision in advanced stages</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm sm:text-base">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                        <span>Eye pain and headaches (acute type)</span>
                      </li>
                    </ul>
                  )}
                  {activeTab === "stages" && (
                    <ul className="space-y-2 text-sm sm:text-base">
                      <li className="flex items-start gap-2">
                        <span className="font-semibold">Stage 1:</span>
                        <span>No symptoms, detectable only by exam</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold">Stage 2:</span>
                        <span>Mild peripheral vision loss</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold">Stage 3:</span>
                        <span>Significant vision loss, daily impact</span>
                      </li>
                    </ul>
                  )}
                  {activeTab === "prevention" && (
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm sm:text-base">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                        <span>Regular eye exams every 1-2 years</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm sm:text-base">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                        <span>Control diabetes and blood pressure</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm sm:text-base">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                        <span>Protect eyes from injury</span>
                      </li>
                    </ul>
                  )}
                  {activeTab === "tips" && (
                    <ul className="space-y-2 text-sm sm:text-base">
                      <li className="flex items-start gap-2">
                        <span className="font-semibold">Tip 1:</span>
                        <span>
                          Track medication times — set phone reminders.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold">Tip 2:</span>
                        <span>Avoid rubbing eyes and protect from injury.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold">Tip 3:</span>
                        <span>Share compliance reports with your doctor.</span>
                      </li>
                    </ul>
                  )}
                </div>
              </div>

              {/* Vision Simulation */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 md:mt-0">
                <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4">
                  <div className="w-full aspect-square bg-gradient-to-br from-green-400 to-blue-400 rounded-lg sm:rounded-xl mb-2 sm:mb-3 overflow-hidden">
                    <Image
                      src="/normal-vision.png"
                      alt="normal-vision"
                      width={250}
                      height={250}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-800 font-semibold text-center text-xs sm:text-sm">
                    Normal Vision
                  </p>
                </div>
                <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4">
                  <div className="w-full aspect-square bg-gradient-to-br from-green-400 to-blue-400 rounded-lg sm:rounded-xl mb-2 sm:mb-3 relative overflow-hidden">
                    <Image
                      src="/glaucoma-vision.png"
                      alt="glaucoma-vision"
                      width={250}
                      height={250}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-800 font-semibold text-center text-xs sm:text-sm">
                    With Glaucoma
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block bg-blue-100 text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              App Features
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Everything You Need for Eye Care
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Comprehensive tools designed to make glaucoma management simple
              and effective
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {[
              {
                icon: <Clock />,
                title: "Smart Reminders",
                desc: "Never miss medications",
              },
              {
                icon: <BookOpen />,
                title: "Education Hub",
                desc: "Learn about glaucoma",
              },
              {
                icon: <Users />,
                title: "Doctor Connect",
                desc: "Find specialists easily",
              },
              {
                icon: <Activity />,
                title: "Progress Tracking",
                desc: "Monitor IOP & compliance",
              },
              {
                icon: <Zap />,
                title: "Vision Games",
                desc: "Interactive exercises",
              },
              {
                icon: <MessageCircle />,
                title: "WhatsApp",
                desc: "Direct communication",
              },
              {
                icon: <Calendar />,
                title: "Appointments",
                desc: "Schedule checkups",
              },
              {
                icon: <Shield />,
                title: "Data Security",
                desc: "Encrypted & secure",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  {React.cloneElement(feature.icon, {
                    className: "w-6 h-6 sm:w-7 sm:h-7",
                  })}
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medication Reminder Showcase */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block bg-blue-100 text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                Smart Medication Management
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
                Never Miss Your Eye Drops Again
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                Studies show 60% of glaucoma patients struggle with medication
                adherence. Our intelligent system makes it effortless.
              </p>

              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    title: "Color-Coded Alerts",
                    desc: "Instantly identify which drop and eye",
                  },
                  {
                    title: "Smart Scheduling",
                    desc: "Automatic gap timing between medications",
                  },
                  {
                    title: "Refill Reminders",
                    desc: "Never run out of essential medications",
                  },
                  {
                    title: "Compliance Reports",
                    desc: "Share usage history with your doctor",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reminder Demo */}
            <div className="order-1 lg:order-2 bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-6 md:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                    Today`s Schedule
                  </h3>
                  <p className="text-gray-500 text-sm sm:text-base">
                    3 medications pending
                  </p>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                  8:00 AM
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    name: "Latanoprost",
                    eye: "Right eye",
                    cap: "Green",
                    time: "8:00 AM",
                    done: true,
                  },
                  {
                    name: "Timolol",
                    eye: "Both eyes",
                    cap: "Yellow",
                    time: "8:00 AM",
                    done: false,
                  },
                  {
                    name: "Brimonidine",
                    eye: "Left eye",
                    cap: "Purple",
                    time: "8:00 AM",
                    done: false,
                  },
                ].map((med, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 transition-all ${
                      med.done
                        ? "bg-green-50 border-green-200"
                        : "bg-gray-50 border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    <div
                      className={`w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center ${
                        med.done ? "bg-green-500" : "bg-blue-500"
                      } text-white`}
                    >
                      {med.done ? (
                        <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                      ) : (
                        <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                        {med.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {med.eye} • {med.cap} cap
                      </p>
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-gray-500">
                      {med.time}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 sm:mt-6 bg-blue-50 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  <p className="text-xs sm:text-sm text-blue-800">
                    <span className="font-semibold">Pro Tip:</span> Wait 5
                    minutes between different eye drops
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block bg-blue-100 text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              User Reviews
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              See how GlaucoCare is transforming glaucoma management
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                name: "Rajesh Kumar",
                role: "Patient, 3 years",
                content:
                  "The medication reminders have been life-changing. I haven't missed a dose in months!",
                rating: 5,
                avatar: "RK",
              },
              {
                name: "Dr. Priya Sharma",
                role: "Ophthalmologist",
                content:
                  "I recommend GlaucoCare to all my patients. The compliance tracking is excellent.",
                rating: 5,
                avatar: "PS",
              },
              {
                name: "Meera Patel",
                role: "Caregiver",
                content:
                  "Managing my father's medications is so much easier now. The app is very intuitive.",
                rating: 5,
                avatar: "MP",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="flex gap-0.5 sm:gap-1 mb-2 sm:mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic text-sm sm:text-base">
                  {testimonial.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Start Protecting Your Vision Today
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-95 max-w-2xl mx-auto px-4">
            Join thousands who are successfully managing their glaucoma with
            GlaucoCare
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
            <a
              href="https://drive.google.com/file/d/1RJexZJj8fimSt4RCfwptMEWu0OG7ePOu/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl transition-all transform hover:scale-105 gap-2"
            >
              <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
              Download Free App
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-blue-600 transition-all gap-2"
            >
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
              Learn More
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Free to download</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>iOS & Android</span>
            </div>
          </div>
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
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About Glaucoma
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="hover:text-white transition-colors"
                  >
                    App Features
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="hover:text-white transition-colors"
                  >
                    Doctor Directory
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
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

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
