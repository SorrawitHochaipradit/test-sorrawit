import React from "react";
import { Routes, Route, Link } from "react-router";


import Home from "./page/Home";
import Calculate from "./page/Calculate";
import FetchApi from "./page/FetchApi";
import NotFound from "./page/NotFound";


const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "linear-gradient(90deg, #FFC107 0%, #FFA000 100%)", // เหลืองเข้ม
  padding: "1rem 2rem",
  marginBottom: "2rem",
  boxShadow: "0 4px 16px rgba(255, 160, 0, 0.25)",
  borderRadius: "0 0 16px 16px",
};

const linkGroupStyle = {
  display: "flex",
  gap: "2rem",
};

const linkStyle = {
  color: "#fff",
  background: "#FFA000",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "1.2rem",
  padding: "0.5rem 1.2rem",
  borderRadius: "8px",
  transition: "background 0.2s, color 0.2s",
  boxShadow: "0 2px 8px rgba(255, 193, 7, 0.15)",
};

const linkHoverStyle = {
  background: "rgb(255, 193, 7)",
  color: "#fffde7",
};

const App = () => {
  // สำหรับ hover effect ใน inline style
  const [hovered, setHovered] = React.useState("");

  return (
    <div
      style={{
        fontFamily: "Prompt, sans-serif",
        background: "#FFF8E1",
        minHeight: "100vh",
      }}
    >
      <nav style={navStyle}>
        <h1 style={{ margin: 0, fontSize: "2rem", color: "#FF8F00", letterSpacing: "2px" }}>
          สอบปลายภาค 1/2568 
        </h1>
        <div style={linkGroupStyle}>
          <Link
            to="/"
            style={hovered === "home" ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
            onMouseEnter={() => setHovered("home")}
            onMouseLeave={() => setHovered("")}
          >
            Home
          </Link>
          <Link
            to="/calculate"
            style={hovered === "calculate" ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
            onMouseEnter={() => setHovered("calculate")}
            onMouseLeave={() => setHovered("")}
          >
            Calculate
          </Link>
          <Link
            to="/fetchapi"
            style={hovered === "fetchapi" ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
            onMouseEnter={() => setHovered("fetchapi")}
            onMouseLeave={() => setHovered("")}
          >
            Fetch API
          </Link>
        </div>
      </nav>
      <div
        style={{
          padding: "0 2rem",
          background: "rgb(255, 223, 155)",
          borderRadius: "16px",
          boxShadow: "0 2px 8px rgba(255, 193, 7, 0.10)",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculate" element={<Calculate />} />
          <Route path="/fetchapi" element={<FetchApi />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;