// API Route: /api/doctors/[id]
// Fetches a specific doctor by ID

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ message: "Doctor ID is required" });
  }

  try {
    // Replace with your actual backend API URL
    const API_BASE_URL =
      process.env.NEXT_PUBLIC_API_BASE_URL || "http://your-backend-api.com";

    const response = await fetch(`${API_BASE_URL}/doctors/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return res.status(404).json({ message: "Doctor not found" });
      }
      throw new Error("Failed to fetch doctor details");
    }

    const data = await response.json();

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching doctor details:", error);
    return res.status(500).json({
      message: "Failed to fetch doctor details",
      error: error.message,
    });
  }
}
