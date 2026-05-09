export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url('/cover.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "60px", marginBottom: "20px" }}>
        Echoes of a Better Dawn
      </h1>

      <p style={{ fontSize: "22px", maxWidth: "700px" }}>
        Even silence has a story to tell.
      </p>

      <a
        href="https://amzn.in/d/0aROottP"
        target="_blank"
        style={{
          marginTop: "30px",
          padding: "15px 30px",
          background: "white",
          color: "black",
          textDecoration: "none",
          borderRadius: "12px",
          fontWeight: "bold",
        }}
      >
        Buy on Amazon
      </a>
    </main>
  );
}
