"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email) {
      setMessage("Enter an email first.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await res.json();

      if (res.ok && (data.status === "subscribed" || data.status === "pending")) {
        setMessage("Success! You’re on the list.");
        setName("");
        setEmail("");
      } else if (data.title === "Member Exists") {
        setMessage("You’re already on the list.");
      } else {
        setMessage(data.detail || "Something went wrong.");
      }
    } catch (error) {
      setMessage("Connection error. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="w-full max-w-md rounded-3xl bg-zinc-900 p-8 shadow-xl">
        <p className="mb-6 text-xl font-bold text-lime-500">Joe’s Grows</p>

        <h1 className="mb-6 text-5xl font-bold leading-tight">
          Free Plant Deficiency Cheat Sheet
        </h1>

        <p className="mb-6 text-lg text-zinc-300">
          Drop your email below and get Joe’s free grower cheat sheet.
        </p>

        <input
          className="mb-4 w-full rounded-2xl p-4 text-black"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="mb-4 w-full rounded-2xl p-4 text-black"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full rounded-2xl bg-lime-500 p-4 font-bold text-black disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Get The Free Cheat Sheet"}
        </button>

        {message && <p className="mt-4 text-center text-sm">{message}</p>}
      </div>
    </div>
  );
}