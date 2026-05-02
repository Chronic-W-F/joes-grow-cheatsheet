"use client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    if (!email) return alert("Enter email");

    const res = await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify({ name, email }),
    });

    const data = await res.json();

    if (data.status === "subscribed") {
      alert("Success! Check your email.");
    } else {
      alert("Something went wrong");
      console.log(data);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <div className="bg-gray-900 p-6 rounded-xl w-80">
        <h1 className="text-green-400 text-xl mb-2">Joe’s Grows</h1>
        <h2 className="text-2xl font-bold mb-4">
          Free Plant Deficiency Cheat Sheet
        </h2>

        <input
          className="w-full mb-2 p-2 rounded text-black"
          placeholder="Your name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full mb-4 p-2 rounded text-black"
          placeholder="Your email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="bg-green-500 w-full p-2 rounded text-black font-bold"
        >
          Get The Free Cheat Sheet
        </button>
      </div>
    </div>
  );
}