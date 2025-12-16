// API Route: /api/doctors
// Fetches all doctors with optional filters

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // Extract query parameters for filtering
    const { page = 1, limit = 10, specialty, city, search } = req.query;

    // Build query parameters
    const queryParams = new URLSearchParams({
      page,
      limit,
      ...(specialty && { specialty }),
      ...(city && { city }),
      ...(search && { search }),
    });

    // Replace with your actual backend API URL
    const API_BASE_URL =
      process.env.NEXT_PUBLIC_API_BASE_URL ||
      "https://api.glaucocare.in/api/v1";

    const response = await fetch(`${API_BASE_URL}/doctors?${queryParams}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch doctors");
    }

    const data = await response.json();
    console.log(response, data.data.doctors);
    return res.status(200).json({
      doctors: data.data.doctors || [],
      pagination: data.data.pagination || null,
    });
  } catch (error) {
    console.error("Error fetching doctors:", error);
    return res.status(500).json({
      message: "Failed to fetch doctors",
      error: error.message,
    });
  }
}
