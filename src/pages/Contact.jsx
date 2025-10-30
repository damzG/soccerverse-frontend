import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Get API URL from environment variable
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    console.log("🔍 Submitting to:", `${API_URL}/api/contact`);

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("📡 Response status:", response.status);

      if (response.ok) {
        const data = await response.json();
        console.log("✅ Success:", data);
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        console.error("❌ Error:", errorData);
        setStatus("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("💥 Network error:", error);
      setStatus("❌ Error connecting to server.");
    }
  };

  return (
    <div className="bg-[#184171] min-h-screen text-white flex justify-center items-center p-6">
      <div className="max-w-lg w-full bg-white/10 p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
        <p className="text-gray-300 text-center mb-6">
          Share your thoughts, stories, or feedback about the FIFA World Cup 2026.
        </p>

        {/* Debug Info - Remove after fixing */}
        {/* <div className="mb-4 p-2 bg-black/30 rounded text-xs">
          <p>API URL: {API_URL || 'NOT SET'}</p>
        </div> */}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500 transition"
          >
            Send Message
          </button>
        </form>

        {status && (
          <p className="mt-4 text-center font-medium">{status}</p>
        )}
      </div>
    </div>
  );
}