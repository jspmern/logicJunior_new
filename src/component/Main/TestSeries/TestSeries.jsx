import React from "react";

function TestSeries() {
  return (
    <div style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "linear-gradient(120deg,#2ec4b6 0%,#377dff 100%)", color: "#fff", padding: "3rem 1rem" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "1.2rem", letterSpacing: "1px" }}>
        Elevate Your Success with <span style={{ color: "#ffd580" }}>Logic Junior Test Series</span>
      </h1>
      <p style={{ fontSize: "1.25rem", maxWidth: "600px", textAlign: "center", marginBottom: "2rem" }}>
        Unlock your full potential! Our industry-ready test series will soon offer expertly crafted practice sets, instant feedback, and smart analytics to help you master every concept.<br />
        <span style={{ display: "inline-block", marginTop: "1rem", fontWeight: "600", color: "#ffd580", fontSize: "1.1rem", animation: "bounce 1.2s infinite alternate" }}>
          🚧 Coming Soon: We're working hard to bring you the best test series experience. Stay tuned for updates  
        </span>
        
      </p>
      <style>{`
        @keyframes bounce {
          0% { transform: translateY(0); }
          100% { transform: translateY(-12px); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 0.85; }
        }
      `}</style>
      <style>{`
        @keyframes bounce {
          0% { transform: translateY(0); }
          100% { transform: translateY(-12px); }
        }
      `}</style>
    </div>
  );
}

export default TestSeries;