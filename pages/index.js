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
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Reviews
              </a>
              <button href="https://forms.gle/83owVxczRSRLm15P7" className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-sm sm:text-base">
                Download App
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
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
                <button href="https://forms.gle/83owVxczRSRLm15P7" className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-full font-semibold w-full">
                  Download App
                </button>
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
                <button href="https://forms.gle/83owVxczRSRLm15P7" className="flex items-center justify-center sm:justify-start gap-3 bg-black text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-gray-800 transition-all transform hover:scale-105 w-full sm:w-auto">
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
                </button>

                <button href="https://forms.gle/83owVxczRSRLm15P7" className="flex items-center justify-center sm:justify-start gap-3 bg-black text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-gray-800 transition-all transform hover:scale-105 w-full sm:w-auto">
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
                </button>
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

                {/* Tabs */}
                <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6">
                  {["symptoms", "stages", "prevention"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium transition-all text-sm sm:text-base ${
                        activeTab === tab
                          ? "bg-white text-blue-600"
                          : "bg-white/20 text-white hover:bg-white/30"
                      }`}
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

      {/* ...rest of component unchanged (features, reminders, testimonials, CTA, footer) ... */}
      {/* I omitted the remainder here to keep the example concise — paste the full unchanged remaining JSX from your original file below if needed. */}

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
