"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (!email) {
      setMessage("Enter an email first.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Success! You’re on the list.");
        setName("");
        setEmail("");
      } else {
        setMessage(data.detail || data.error || "Something went wrong.");
      }
    } catch (err) {
      setMessage("Connection error. API route may not be deployed correctly.");
    }

    setLoading(false);
  }

  return (
    <main style={styles.page}>
      <section style={styles.card}>
        <p style={styles.brand}>Joe’s Grows</p>

        <h1 style={styles.title}>Free Plant Deficiency Cheat Sheet</h1>

        <p style={styles.text}>
          Drop your email below and get Joe’s free grower cheat sheet.
        </p>

        <input
          style={styles.input}
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          style={styles.input}
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          style={styles.button}
        >
          {loading ? "Submitting..." : "Get The Free Cheat Sheet"}
        </button>

        {message && <p style={styles.message}>{message}</p>}
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#050505",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
    color: "white",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    width: "100%",
    maxWidth: "430px",
    background: "#18181b",
    borderRadius: "28px",
    padding: "34px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
    border: "1px solid #27272a",
  },
  brand: {
    color: "#7bd80f",
    fontWeight: "800",
    fontSize: "22px",
    marginBottom: "28px",
  },
  title: {
    fontSize: "46px",
    lineHeight: "1.05",
    margin: "0 0 26px",
    fontWeight: "900",
  },
  text: {
    color: "#d4d4d8",
    fontSize: "19px",
    lineHeight: "1.45",
    marginBottom: "24px",
  },
  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "17px",
    borderRadius: "18px",
    border: "none",
    marginBottom: "14px",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "17px",
    borderRadius: "18px",
    border: "none",
    background: "#7bd80f",
    color: "black",
    fontWeight: "900",
    fontSize: "18px",
  },
  message: {
    textAlign: "center",
    marginTop: "18px",
    fontSize: "15px",
  },
};
