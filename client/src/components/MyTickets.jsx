import { useState } from "react";

const MyTickets = ({ onBack }) => {
  const [filter, setFilter] = useState("All");

  const Icon = ({ path, size = 18, color = "currentColor" }) => (
    <svg width={size} height={size} fill="none" stroke={color} strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d={path} />
    </svg>
  );

  const tickets = [
    { id: "TKT-001", title: "Fan not working in room", category: "Electrical", date: "Mar 11, 2026", status: "Pending", description: "The ceiling fan in my room stopped working suddenly." },
    { id: "TKT-002", title: "Broken chair near desk", category: "Furniture", date: "Mar 8, 2026", status: "In Progress", description: "One of the chairs has a broken leg and is unsafe to use." },
    { id: "TKT-003", title: "Bathroom cleanliness issue", category: "Cleanliness", date: "Mar 2, 2026", status: "Resolved", description: "The bathroom was not cleaned for 3 days." },
    { id: "TKT-004", title: "Light bulb replacement needed", category: "Electrical", date: "Feb 28, 2026", status: "Resolved", description: "The light bulb near the study table needs replacement." },
    { id: "TKT-005", title: "Window latch broken", category: "Furniture", date: "Feb 20, 2026", status: "Pending", description: "The window latch is broken and cannot be closed properly." },
  ];

  const statusStyle = {
    Pending:       { background: "#fff8e6", color: "#a16207", border: "1px solid #fde68a" },
    "In Progress": { background: "#eff6ff", color: "#1d4ed8", border: "1px solid #bfdbfe" },
    Resolved:      { background: "#f0fdf4", color: "#15803d", border: "1px solid #bbf7d0" },
  };

  const filtered = filter === "All" ? tickets : tickets.filter(t => t.status === filter);

  return (
    <div style={{ minHeight: "100vh", background: "#f8f9fa", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>

      {/* Topbar */}
      <header style={{ height: 58, background: "#fff", borderBottom: "1px solid #e9ecef", padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, color: "#868e96", fontSize: 13, fontFamily: "inherit" }}>
            <Icon path="M15 19l-7-7 7-7" size={16} color="#868e96" /> Back
          </button>
          <span style={{ color: "#e9ecef" }}>|</span>
          <span style={{ fontSize: 14, fontWeight: 600, color: "#111" }}>My Tickets</span>
        </div>
        <div style={{ fontSize: 13, color: "#868e96" }}>Tathya Sharma · A-101</div>
      </header>

      <div style={{ maxWidth: 800, margin: "32px auto", padding: "0 20px" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
          <div>
            <h1 style={{ fontSize: 20, fontWeight: 600, color: "#111", margin: 0, letterSpacing: -0.5 }}>My Complaints</h1>
            <p style={{ fontSize: 13.5, color: "#868e96", marginTop: 4, marginBottom: 0 }}>{tickets.length} total tickets</p>
          </div>
          <button onClick={() => onBack && onBack()}
            style={{ padding: "9px 18px", background: "#111", color: "#fff", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
            + New Complaint
          </button>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
          {["All", "Pending", "In Progress", "Resolved"].map(f => (
            <button key={f} onClick={() => setFilter(f)}
              style={{ padding: "7px 16px", borderRadius: 8, border: filter === f ? "1.5px solid #111" : "1px solid #e9ecef", background: filter === f ? "#111" : "#fff", color: filter === f ? "#fff" : "#495057", fontSize: 12.5, fontWeight: filter === f ? 600 : 400, cursor: "pointer", fontFamily: "inherit" }}>
              {f}
            </button>
          ))}
        </div>

        {/* Tickets */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {filtered.map(t => (
            <div key={t.id} style={{ background: "#fff", border: "1px solid #e9ecef", borderRadius: 12, padding: "18px 20px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                    <span style={{ fontSize: 12, color: "#228be6", fontFamily: "monospace", fontWeight: 500 }}>{t.id}</span>
                    <span style={{ fontSize: 11, color: "#adb5bd" }}>·</span>
                    <span style={{ fontSize: 12, color: "#868e96" }}>{t.category}</span>
                    <span style={{ fontSize: 11, color: "#adb5bd" }}>·</span>
                    <span style={{ fontSize: 12, color: "#868e96", fontFamily: "monospace" }}>{t.date}</span>
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#111", marginBottom: 6 }}>{t.title}</div>
                  <div style={{ fontSize: 12.5, color: "#868e96", lineHeight: 1.5 }}>{t.description}</div>
                </div>
                <span style={{ fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 6, whiteSpace: "nowrap", ...statusStyle[t.status] }}>{t.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyTickets;