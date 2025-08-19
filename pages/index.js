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
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg">
        <Image
          src="/logo.png"
          alt="logo"
          width={70} // Required for remote images
          height={70} // Required for remote images
        />
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
        GlaucoCare
      </span>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Alert Banner */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-2 px-4 text-center">
        <p className="text-sm font-medium flex items-center justify-center gap-2">
          <AlertCircle className="w-4 h-4" />
          January is Glaucoma Awareness Month - 50% of people with glaucoma do
          not know they have it
        </p>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3 mt-0"
            : "bg-transparent py-4 mt-8"
        }`}
        // style={{ marginTop: "32px" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
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
              <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-xl transition-all transform hover:-translate-y-0.5">
                Download App
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl rounded-b-2xl p-4 mt-2">
              <div className="flex flex-col gap-4">
                <a
                  href="#home"
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
                >
                  About Glaucoma
                </a>
                <a
                  href="#features"
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
                >
                  Features
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
                >
                  Reviews
                </a>
                <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-full font-semibold">
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
        className="relative min-h-screen pt-32 pb-20 overflow-hidden"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                <Award className="w-4 h-4" />
                #1 Glaucoma Management App in India
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Protect Your Vision,
                </span>
                <br />
                <span className="text-gray-800">Take Control Today</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Join thousands managing glaucoma successfully with smart
                medication reminders, expert doctor connections, and
                personalized eye care tracking.
              </p>

              {/* Download Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-3 bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-800 transition-all transform hover:scale-105">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <Image
                      src="/app-store.png"
                      alt="logo"
                      width={100} // Required for remote images
                      height={100} // Required for remote images
                    />
                  </div>
                  <div className="text-left">
                    <div className="text-xs opacity-80">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </button>

                <button className="flex items-center gap-3 bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-800 transition-all transform hover:scale-105">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <Image
                      src="/google-play.png"
                      alt="logo"
                      width={100} // Required for remote images
                      height={100} // Required for remote images
                    />
                  </div>
                  <div className="text-left">
                    <div className="text-xs opacity-80">Get it on</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-blue-600">4.2M+</div>
                  <div className="text-sm text-gray-600">
                    Indians with Glaucoma
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">50%</div>
                  <div className="text-sm text-gray-600">Undiagnosed Cases</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">98%</div>
                  <div className="text-sm text-gray-600">User Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Hero Image/Visual */}
            <div className="relative">
              <div className="relative mx-auto w-full max-w-md">
                {/* Phone Mockup */}
                <div className="relative mx-auto w-72 h-[600px] bg-gradient-to-br from-gray-900 to-gray-700 rounded-[3rem] shadow-2xl p-3">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    {/* App Screen */}
                    <div className="bg-gradient-to-br from-blue-600 to-blue-400 h-full flex flex-col items-center justify-center text-white p-8">
                      <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-6 backdrop-blur-sm">
                        <Image
                          src="/logo.png"
                          alt="logo"
                          width={70} // Required for remote images
                          height={70} // Required for remote images
                        />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">GlaucoCare</h3>
                      <p className="text-center opacity-90">
                        Your Complete Eye Care Companion
                      </p>

                      {/* Mock UI Elements */}
                      <div className="mt-8 w-full space-y-3">
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                          <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5" />
                            <span className="text-sm">
                              Next: Timolol at 8:00 PM
                            </span>
                          </div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                          <div className="flex items-center gap-3">
                            <Activity className="w-5 h-5" />
                            <span className="text-sm">
                              IOP: 18 mmHg (Normal)
                            </span>
                          </div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                          <div className="flex items-center gap-3">
                            <Calendar className="w-5 h-5" />
                            <span className="text-sm">
                              Next Checkup: Feb 15
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-green-400 to-green-500 text-white px-4 py-2 rounded-2xl shadow-lg animate-bounce">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-semibold">Reminder Set!</span>
                  </div>
                </div>

                <div className="absolute bottom-20 -left-8 bg-white rounded-2xl shadow-xl p-4 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Dr. Sharma</div>
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
        className="py-20 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Understanding Glaucoma
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              The Silent Thief of Sight
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Glaucoma affects over 12 million Indians. Early detection and
              proper management are crucial to preserving your vision.
            </p>
          </div>

          {/* Info Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <Eye className="w-6 h-6" />,
                title: "What is Glaucoma?",
                description:
                  "A group of eye diseases that damage the optic nerve, often due to increased eye pressure. It's the leading cause of irreversible blindness.",
                color: "blue",
              },
              {
                icon: <AlertCircle className="w-6 h-6" />,
                title: "Risk Factors",
                description:
                  "Age over 40, family history, diabetes, high eye pressure, myopia, and certain medications increase your risk.",
                color: "amber",
              },
              {
                icon: <Activity className="w-6 h-6" />,
                title: "Types",
                description:
                  "Primary open-angle (90% cases) develops slowly. Angle-closure is sudden and requires emergency treatment.",
                color: "purple",
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Statistics",
                description:
                  "12 million Indians affected, expected to reach 16 million by 2030. 90% cases go undiagnosed.",
                color: "red",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Early Detection",
                description:
                  "Regular eye exams are vital. Vision loss starts peripherally and is often unnoticed until advanced.",
                color: "green",
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Treatment",
                description:
                  "Eye drops, laser therapy, and surgery can manage glaucoma. Consistent treatment prevents vision loss.",
                color: "pink",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div
                  className={`w-12 h-12 bg-${item.color}-100 rounded-xl flex items-center justify-center text-${item.color}-600 mb-4`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Visual Comparison */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Vision Comparison</h3>
                <p className="text-lg mb-6 opacity-90">
                  Glaucoma gradually damages peripheral vision. Without
                  treatment, it progresses to tunnel vision and eventually
                  complete blindness.
                </p>

                {/* Tabs */}
                <div className="flex gap-4 mb-6">
                  {["symptoms", "stages", "prevention"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
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
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  {activeTab === "symptoms" && (
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span>Gradual loss of peripheral vision</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span>Tunnel vision in advanced stages</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span>Eye pain and headaches (acute type)</span>
                      </li>
                    </ul>
                  )}
                  {activeTab === "stages" && (
                    <ul className="space-y-2">
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
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span>Regular eye exams every 1-2 years</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span>Control diabetes and blood pressure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span>Protect eyes from injury</span>
                      </li>
                    </ul>
                  )}
                </div>
              </div>

              {/* Vision Simulation */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-4">
                  <div className="w-full max-h-fit bg-gradient-to-br from-green-400 to-blue-400 rounded-xl mb-3 overflow-hidden">
                    <Image
                      src="/normal-vision.png"
                      alt="normal-vision"
                      width={250} // Required for remote images
                      height={250} // Required for remote images
                    />
                  </div>
                  <p className="text-gray-800 font-semibold text-center">
                    Normal Vision
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-4">
                  <div className="w-full max-h-fit bg-gradient-to-br from-green-400 to-blue-400 rounded-xl mb-3 relative overflow-hidden">
                    <Image
                      src="/glaucoma-vision.png"
                      alt="glaucoma-vision"
                      width={250}
                      height={250}
                    />
                  </div>
                  <p className="text-gray-800 font-semibold text-center">
                    With Glaucoma
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              App Features
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Everything You Need for Eye Care
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools designed to make glaucoma management simple
              and effective
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Clock />,
                title: "Smart Reminders",
                desc: "Never miss medications with intelligent alerts",
              },
              {
                icon: <BookOpen />,
                title: "Education Hub",
                desc: "Learn about glaucoma with guides & videos",
              },
              {
                icon: <Users />,
                title: "Doctor Connect",
                desc: "Find and consult specialists easily",
              },
              {
                icon: <Activity />,
                title: "Progress Tracking",
                desc: "Monitor IOP and medication compliance",
              },
              {
                icon: <Zap />,
                title: "Vision Games",
                desc: "Interactive exercises for eye health",
              },
              {
                icon: <MessageCircle />,
                title: "WhatsApp Integration",
                desc: "Direct communication with care team",
              },
              {
                icon: <Calendar />,
                title: "Appointment Booking",
                desc: "Schedule and manage checkups",
              },
              {
                icon: <Shield />,
                title: "Data Security",
                desc: "Your health data is encrypted & secure",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medication Reminder Showcase */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Smart Medication Management
              </span>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Never Miss Your Eye Drops Again
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Studies show 60% of glaucoma patients struggle with medication
                adherence. Our intelligent system makes it effortless.
              </p>

              <div className="space-y-4">
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
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reminder Demo */}
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Today`s Schedule
                  </h3>
                  <p className="text-gray-500">3 medications pending</p>
                </div>
                <div className="text-3xl font-bold text-blue-600">8:00 AM</div>
              </div>

              <div className="space-y-4">
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
                    className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all ${
                      med.done
                        ? "bg-green-50 border-green-200"
                        : "bg-gray-50 border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        med.done ? "bg-green-500" : "bg-blue-500"
                      } text-white`}
                    >
                      {med.done ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <Clock className="w-6 h-6" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">
                        {med.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {med.eye} • {med.cap} cap
                      </p>
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      {med.time}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-blue-50 rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-blue-600" />
                  <p className="text-sm text-blue-800">
                    <span className="font-semibold">Pro Tip:</span> Wait 5
                    minutes between different eye drops for better absorption
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              User Reviews
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how GlaucoCare is transforming glaucoma management
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
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
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Protecting Your Vision Today
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Join thousands who are successfully managing their glaucoma with
            GlaucoCare
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all transform hover:scale-105 flex items-center gap-2">
              <Smartphone className="w-5 h-5" />
              Download Free App
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Learn More
            </button>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Free to download</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Available on iOS & Android</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="logo"
                    width={70} // Required for remote images
                    height={70} // Required for remote images
                  />
                </div>
                <span className="text-2xl font-bold">GlaucoCare</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted companion in glaucoma care. Empowering patients
                with tools for better eye health.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Glaucoma
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    App Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Doctor Directory
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
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

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>support@glaucocare.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>1800-123-4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Ahmedabad, Gujarat</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
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
