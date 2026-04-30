export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#09090b",
      color: "white",
      padding: "40px 20px",
      fontFamily: "Arial, sans-serif"
    }}>
      <section style={{
        maxWidth: "520px",
        margin: "0 auto",
        background: "#18181b",
        border: "1px solid #27272a",
        borderRadius: "24px",
        padding: "28px"
      }}>
        <p style={{ color: "#84cc16", fontWeight: "bold" }}>
          Joe’s Grows
        </p>

        <h1 style={{ fontSize: "36px", lineHeight: "1.1" }}>
          Free Plant Deficiency Cheat Sheet
        </h1>

        <p style={{ color: "#d4d4d8", lineHeight: "1.5" }}>
          Drop your email below and get Joe’s free grower cheat sheet.
        </p>

        <form>
          <input
            type="text"
            placeholder="Your name"
            style={{
              width: "100%",
              padding: "14px",
              marginBottom: "12px",
              borderRadius: "12px",
              border: "1px solid #3f3f46"
            }}
          />

          <input
            type="email"
            placeholder="Your email"
            style={{
              width: "100%",
              padding: "14px",
              marginBottom: "12px",
              borderRadius: "12px",
              border: "1px solid #3f3f46"
            }}
          />

          <button
            type="button"
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "12px",
              border: "none",
              background: "#84cc16",
              color: "#09090b",
              fontWeight: "bold",
              fontSize: "16px"
            }}
          >
            Get The Free Cheat Sheet
          </button>
        </form>
      </section>
    </main>
  );
}
