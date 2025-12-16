import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  Eye,
  CheckCircle,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Loader,
  AlertTriangle,
  Info,
} from "lucide-react";

const AssessmentPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(true);
  const [showTest, setShowTest] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      setIsLoadingQuestions(true);
      // Replace with your actual API endpoint
      const response = await fetch(
        "https://api.glaucocare.in/api/v1/questions"
      );
      const data = await response.json();

      if (data.success && data.data) {
        setQuestions(data.data);
      } else {
        setError("Failed to load questions");
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
      setError("Failed to load assessment questions");
    } finally {
      setIsLoadingQuestions(false);
    }
  };

  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleMultipleChoice = (questionId, value) => {
    const currentAnswers = answers[questionId] || [];
    const newAnswers = currentAnswers.includes(value)
      ? currentAnswers.filter((v) => v !== value)
      : [...currentAnswers, value];

    handleAnswerChange(questionId, newAnswers);
  };

  // Calculate risk score based on answers
  const calculateRiskScore = (answers) => {
    let score = 0;

    // Question 1: Symptoms
    if (answers["1"]?.length > 3) score += 2;
    else if (answers["1"]?.length > 0) score += 1;

    // Question 2: Medical conditions
    if (answers["2"]?.includes("glaucoma")) score += 3;
    if (answers["2"]?.includes("diabetes")) score += 2;
    if (answers["2"]?.includes("high_blood_pressure")) score += 1;

    // Question 3: Dry eyes
    if (answers["3"] === "yes") score += 1;

    // Question 4: Vision difficulty
    if (answers["4"] === "both") score += 2;
    else if (answers["4"] !== "neither") score += 1;

    // Question 5: Pressure
    if (answers["5"] === "yes") score += 2;

    // Question 6: Discomfort frequency
    if (answers["6"] === "constantly") score += 2;
    else if (answers["6"] === "frequently") score += 1;

    // Question 8: Family history
    if (answers["8"]?.includes("parent") || answers["8"]?.includes("sibling")) {
      score += 3;
    }

    return score;
  };

  const getRiskLevel = (score) => {
    if (score >= 10) return "High";
    if (score >= 5) return "Moderate";
    return "Low";
  };

  const getRecommendations = (score) => {
    if (score >= 10) {
      return [
        "Schedule an appointment with an eye specialist immediately",
        "Monitor your symptoms daily",
        "Avoid eye strain from screens",
        "Keep track of any vision changes",
      ];
    } else if (score >= 5) {
      return [
        "Consider scheduling a routine eye check-up",
        "Practice the 20-20-20 rule for screen time",
        "Use artificial tears if experiencing dryness",
        "Maintain a healthy lifestyle",
      ];
    }
    return [
      "Continue regular eye check-ups annually",
      "Maintain good eye hygiene",
      "Stay hydrated and eat eye-healthy foods",
      "Protect your eyes from UV rays",
    ];
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all required questions are answered
    const unansweredRequired = questions.filter((q) => {
      if (!q.required) return false;
      const answer = answers[q.id];
      return !answer || (Array.isArray(answer) && answer.length === 0);
    });

    if (unansweredRequired.length > 0) {
      alert(
        `Please answer all required questions. Missing: ${unansweredRequired.length} question(s)`
      );
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      // Calculate risk score on frontend
      const riskScore = calculateRiskScore(answers);
      const riskLevel = getRiskLevel(riskScore);
      const recommendations = getRecommendations(riskScore);

      // Set result
      setResult({
        riskLevel: riskLevel,
        score: riskScore,
        recommendations: recommendations,
        completedAt: new Date().toISOString(),
      });

      // Scroll to results
      setTimeout(() => {
        document
          .getElementById("results")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (error) {
      console.error("Error calculating assessment:", error);
      setError("Failed to calculate assessment results");
    } finally {
      setIsLoading(false);
    }
  };

  const handleStartTest = () => {
    setShowTest(true);
    setResult(null);
    setAnswers({});
  };

  const handleRetakeTest = () => {
    setShowTest(true);
    setResult(null);
    setAnswers({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getRiskColor = (riskLevel) => {
    switch (riskLevel?.toLowerCase()) {
      case "low":
        return "text-green-600 bg-green-50 border-green-200";
      case "moderate":
        return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "high":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getRiskIcon = (riskLevel) => {
    switch (riskLevel?.toLowerCase()) {
      case "low":
        return <CheckCircle className="w-12 h-12 text-green-600" />;
      case "moderate":
        return <AlertCircle className="w-12 h-12 text-yellow-600" />;
      case "high":
        return <AlertTriangle className="w-12 h-12 text-red-600" />;
      default:
        return <Info className="w-12 h-12 text-gray-600" />;
    }
  };

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
                href="/doctors"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Doctors
              </Link>
              <Link
                href="/assessment"
                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
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
                  href="/doctors"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 px-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Find Doctors
                </Link>
                <Link
                  href="/assessment"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-blue-600 hover:text-blue-700 font-semibold py-2 px-3 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  Take Assessment
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
            <Eye className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Eye Health{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Assessment
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Take our comprehensive eye health assessment to understand your
              risk factors for glaucoma
            </p>
          </div>

          {/* Medical Disclaimer */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-yellow-900 mb-2">
                    Medical Disclaimer
                  </h3>
                  <p className="text-sm text-yellow-800">
                    This app does NOT diagnose, treat, cure, or prevent any
                    medical condition. This assessment is for informational
                    purposes only. Always consult qualified healthcare
                    professionals for medical advice, diagnosis, or treatment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {!showTest && !result && (
            <div className="text-center">
              <button
                onClick={handleStartTest}
                disabled={isLoadingQuestions}
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoadingQuestions ? (
                  <>
                    <Loader className="w-5 h-5 mr-2 animate-spin" />
                    Loading...
                  </>
                ) : (
                  "Start Assessment"
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Assessment Form */}
      {showTest && !result && (
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-8">
                {questions.map((question, index) => (
                  <div
                    key={question.id}
                    className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {question.question}
                          {question.required && (
                            <span className="text-red-500 ml-1">*</span>
                          )}
                        </h3>
                      </div>
                    </div>

                    {/* Options */}
                    {question.options && question.options.length > 0 && (
                      <div className="space-y-3">
                        {question.options.map((option) => {
                          const isSelected =
                            question.type === "multiple"
                              ? (answers[question.id] || []).includes(
                                  option.value
                                )
                              : answers[question.id] === option.value;

                          return (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => {
                                if (question.type === "multiple") {
                                  handleMultipleChoice(
                                    question.id,
                                    option.value
                                  );
                                } else {
                                  handleAnswerChange(question.id, option.value);
                                }
                              }}
                              className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                                isSelected
                                  ? "bg-blue-50 border-blue-500"
                                  : "bg-gray-50 border-gray-200 hover:border-blue-300"
                              }`}
                            >
                              <div
                                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                  isSelected
                                    ? "bg-blue-600 border-blue-600"
                                    : "border-gray-300"
                                }`}
                              >
                                {isSelected && (
                                  <CheckCircle className="w-4 h-4 text-white" />
                                )}
                              </div>
                              <span
                                className={`text-left ${
                                  isSelected
                                    ? "text-blue-900 font-medium"
                                    : "text-gray-700"
                                }`}
                              >
                                {option.label}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Text Input */}
                    {question.type === "text" && (
                      <textarea
                        value={answers[question.id] || ""}
                        onChange={(e) =>
                          handleAnswerChange(question.id, e.target.value)
                        }
                        placeholder={
                          question.detailPlaceholder || "Please specify"
                        }
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none resize-none"
                      />
                    )}

                    {/* Yes/No with Detail */}
                    {question.type === "yes_no_detail" &&
                      answers[question.id]?.choice === "yes" && (
                        <textarea
                          value={answers[question.id]?.detail || ""}
                          onChange={(e) =>
                            handleAnswerChange(question.id, {
                              ...answers[question.id],
                              detail: e.target.value,
                            })
                          }
                          placeholder={
                            question.detailPlaceholder ||
                            "Please provide details"
                          }
                          rows={3}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none resize-none mt-3"
                        />
                      )}
                  </div>
                ))}

                {error && (
                  <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                    <p className="text-red-800 text-center">{error}</p>
                  </div>
                )}

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500 text-white px-12 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader className="w-5 h-5 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Assessment"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Results Section */}
      {result && (
        <section id="results" className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Success Icon */}
              <div className="text-center mb-8">
                {getRiskIcon(result.riskLevel)}
              </div>

              {/* Risk Level Card */}
              <div
                className={`rounded-2xl p-8 border-2 mb-8 ${getRiskColor(
                  result.riskLevel
                )}`}
              >
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-2">
                    Assessment Complete
                  </h2>
                  <p className="text-lg mb-6">Your Risk Level</p>
                  <div className="inline-block bg-white/50 px-8 py-4 rounded-xl">
                    <p className="text-4xl font-bold uppercase">
                      {result.riskLevel || "Unknown"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Score */}
              {result.score !== undefined && (
                <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-center">
                  <p className="text-gray-600 mb-2">Risk Score</p>
                  <p className="text-3xl font-bold text-gray-800">
                    {result.score}/18
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Completed on{" "}
                    {new Date().toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              )}

              {/* Recommendations */}
              {result.recommendations && result.recommendations.length > 0 && (
                <div className="bg-blue-50 rounded-2xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    Recommendations
                  </h3>
                  <ul className="space-y-3">
                    {result.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-blue-800">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleRetakeTest}
                  className="inline-flex items-center justify-center bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all"
                >
                  Retake Assessment
                </button>
                <Link
                  href="/doctors"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  Find Doctors
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Get Personalized Eye Care Support
          </h2>
          <p className="text-base sm:text-lg mb-6 opacity-95 max-w-2xl mx-auto">
            Download GlaucoCare app for medication reminders, doctor
            connections, and comprehensive eye care tracking
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
                  <Link
                    href="/assessment"
                    className="hover:text-white transition-colors"
                  >
                    Take Assessment
                  </Link>
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

export default AssessmentPage;
