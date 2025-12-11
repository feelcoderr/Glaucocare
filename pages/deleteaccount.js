import { useState } from "react";
import Head from "next/head";

export default function DeleteAccount() {
  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    reason: "",
    dob: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [deleted, setDeleted] = useState(false); // <-- new flag

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setMessage({ type: "", text: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    // Validation
    if (!formData.email && !formData.mobile) {
      setMessage({
        type: "error",
        text: "Please provide either email or mobile number",
      });
      return;
    }

    if (formData.mobile && !/^[0-9]{10}$/.test(formData.mobile)) {
      setMessage({
        type: "error",
        text: "Please provide a valid 10-digit mobile number",
      });
      return;
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setMessage({
        type: "error",
        text: "Please provide a valid email address",
      });
      return;
    }

    // Show confirmation modal
    setShowConfirmation(true);
  };

  const confirmDelete = async () => {
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      // NOTE: if you want to proxy via Next, call your Next API here instead.
      const response = await fetch(
        "https://api.glaucocare.in/api/v1/auth/delete-account",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      // try to parse JSON safely
      let data = null;
      try {
        data = await response.json();
      } catch (e) {
        data = null;
      }

      if (response.ok) {
        // If backend returns a message, use it; otherwise show a standard message
        const successText =
          (data && data.message) ||
          "Your account has been deleted successfully. We're sorry to see you go.";
        setMessage({ type: "success", text: successText });
        setDeleted(true); // hide form and show success screen
        setShowConfirmation(false);
        // optionally clear form (not necessary since we show success screen)
        setFormData({ email: "", mobile: "", reason: "" });
      } else {
        // Backend returned an error status; prefer backend message if present
        const errMsg =
          (data && (data.message || data.error)) ||
          `Failed to delete account (status ${response.status}). Please try again.`;
        setMessage({ type: "error", text: errMsg });
        setShowConfirmation(false);
      }
    } catch (error) {
      console.error("Delete error:", error);
      setMessage({
        type: "error",
        text:
          error?.message ||
          "An unexpected error occurred while deleting your account. Please try again later.",
      });
      setShowConfirmation(false);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({ email: "", mobile: "", reason: "" });
    setMessage({ type: "", text: "" });
    setShowConfirmation(false);
    setLoading(false);
    setDeleted(false);
  };

  return (
    <>
      <Head>
        <title>Delete Account - GlaucoCare</title>
        <meta name="description" content="Request account deletion" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Delete Account
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                We are sorry to see you go. Please provide your details below.
              </p>
            </div>

            {/* Success view: replace form when deleted */}
            {deleted ? (
              <div className="text-center">
                <div className="mb-6">
                  <svg
                    className="mx-auto h-16 w-16 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Account Deleted
                </h3>
                <p className="text-sm text-gray-600 mb-6">{message.text}</p>

                <div className="space-y-3">
                  <a
                    href="mailto:admin@glaucocare.in"
                    className="block w-full text-center bg-white border border-gray-200 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-50"
                  >
                    Contact Support
                  </a>
                </div>
              </div>
            ) : (
              <>
                {/* Alert Messages */}
                {message.text && (
                  <div
                    className={`mb-6 p-4 rounded-lg ${
                      message.type === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                    role="alert"
                    aria-live="polite"
                  >
                    <div className="flex">
                      <div className="flex-shrink-0">
                        {message.type === "success" ? (
                          <svg
                            className="h-5 w-5 text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="h-5 w-5 text-red-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">{message.text}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                      disabled={loading}
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">OR</span>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="mobile"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                      placeholder="10-digit mobile number"
                      maxLength="10"
                      disabled={loading}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="dob"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      id="dob"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                      placeholder="DDMMYYYY"
                      maxLength="10"
                      disabled={loading}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="reason"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Reason for Deletion (Optional)
                    </label>
                    <textarea
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Help us improve by sharing why you're leaving..."
                      disabled={loading}
                    ></textarea>
                  </div>

                  {/* Warning Message */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-yellow-800">
                          <strong>Warning:</strong> Deleting your account is
                          permanent and cannot be undone.
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Processing..." : "Request Account Deletion"}
                  </button>
                </form>

                {/* Contact Support */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Need help?{" "}
                    <a
                      href="mailto:admin@glaucocare.in"
                      className="text-red-600 hover:text-red-700 font-medium"
                    >
                      Contact Support
                    </a>
                  </p>
                </div>
              </>
            )}

            {/* End card content */}
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && !deleted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-2xl">
            <div className="text-center mb-4">
              <div className="mx-auto h-12 w-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Are you absolutely sure?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                This action cannot be undone. This will permanently delete your
                account and remove all your data from our servers.
              </p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowConfirmation(false)}
                className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                disabled={loading}
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                disabled={loading}
                className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-700 transition-colors disabled:opacity-50"
              >
                {loading ? "Deleting..." : "Yes, Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
