import { useState } from "react";

const ManageTickets = ({ onBack }) => {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const [comment, setComment] = useState("");

  const Icon = ({ path, size = 18, color = "currentColor" }) => (
    <svg width={size} height={size} fill="none" stroke={color} strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d={path} />
    </svg>
  );

  const [tickets, setTickets] = useState([
    { id: "TKT-001", room: "A-101", student: "Tathya Sharma",  title: "Fan not working",        category: "Electrical",  date: "Mar 11, 2026", status: "Pending",     comments: [] },
    { id: "TKT-002", room: "A-102", student: "Arjun Mehta",    title: "Broken chair near desk", category: "Furniture",   date: "Mar 8, 2026",  status: "In Progress", comments: ["Technician assigned"] },
    { id: "TKT-003", room: "A-103", student: "Rohan Verma",    title: "Bathroom cleanliness",   category: "Cleanliness", date: "Mar 2, 2026",  status: "Resolved",    comments: ["Cleaned on Mar 3"] },
    { id: "TKT-004", room: "A-104", student: "Priya Singh",    title: "Light bulb replacement", category: "Electrical",  date: "Feb 28, 2026", status: "Pending",     comments: [] },
  ]);

  const statusStyle = {
    Pending:       { background: "#fff8e6", color: "#a16207", border: "1px solid #fde68a" },
    "In Progress": { background: "#eff6ff", color: "#1d4ed8", border: "1px solid #bfdbfe" },
    Resolved:      { background: "#f0fdf4", color: "#15803d", border: "1px solid #bbf7d0" },
  };

  const filtered = filter === "All" ? tickets : tickets.filter(t => t.status === filter);

  const updateStatus = (id, newStatus) => {
    setTickets(prev => prev.map(t => t.id === id ? { ...t, status: newStatus } : t));
    if (selected?.id === id) setSelected(prev => ({ ...prev, status: newStatus }));
  };

  const addComment = (id) => {
    if (!comment.trim()) return;
    setTickets(prev => prev.map(t => t.id === id ? { ...t, comments: [...t.comments, comment] } : t));
    if (selected?.id === id) setSelected(prev => ({ ...prev, comments: [...prev.comments, comment] }));
    setComment("");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f8f9fa", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>

      {/* Topbar */}
      <header style={{ height: 58, background: "#fff", borderBottom: "1px solid #e9ecef", padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, color: "#868e96", fontSize: 13, fontFamily: "inherit" }}>
            <Icon path="M15 19l-7-7 7-7" size={16} color="#868e96" /> Back
          </button>
          <span style={{ color: "#e9ecef" }}>|</span>
          <span style={{ fontSize: 14, fontWeight: 600, color: "#111" }}>Manage Tickets</span>
        </div>
        <div style={{ fontSize: 13, color: "#868e96" }}>Warden · Block A</div>
      </header>

      <div style={{ maxWidth: 1000, margin: "32px auto", padding: "0 20px", display: "grid", gridTemplateColumns: selected ? "1fr 380px" : "1fr", gap: 20 }}>

        {/* Left — Ticket List */}
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
            <div>
              <h1 style={{ fontSize: 20, fontWeight: 600, color: "#111", margin: 0, letterSpacing: -0.5 }}>All Tickets</h1>
              <p style={{ fontSize: 13.5, color: "#868e96", marginTop: 4, marginBottom: 0 }}>Block A · {tickets.length} total</p>
            </div>
          </div>

          {/* Filter */}
          <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
            {["All", "Pending", "In Progress", "Resolved"].map(f => (
              <button key={f} onClick={() => setFilter(f)}
                style={{ padding: "7px 16px", borderRadius: 8, border: filter === f ? "1.5px solid #111" : "1px solid #e9ecef", background: filter === f ? "#111" : "#fff", color: filter === f ? "#fff" : "#495057", fontSize: 12.5, fontWeight: filter === f ? 600 : 400, cursor: "pointer", fontFamily: "inherit" }}>
                {f}
              </button>
            ))}
          </div>

          {/* Tickets */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filtered.map(t => (
              <div key={t.id}
                onClick={() => setSelected(t)}
                style={{ background: "#fff", border: selected?.id === t.id ? "1.5px solid #111" : "1px solid #e9ecef", borderRadius: 12, padding: "16px 18px", cursor: "pointer", transition: "border 0.1s" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 12, color: "#228be6", fontFamily: "monospace", fontWeight: 500 }}>{t.id}</span>
                    <span style={{ fontSize: 11, color: "#adb5bd" }}>·</span>
                    <span style={{ fontSize: 12, color: "#868e96" }}>{t.room}</span>
                    <span style={{ fontSize: 11, color: "#adb5bd" }}>·</span>
                    <span style={{ fontSize: 12, color: "#868e96" }}>{t.category}</span>
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 600, padding: "3px 9px", borderRadius: 6, ...statusStyle[t.status] }}>{t.status}</span>
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#111", marginBottom: 4 }}>{t.title}</div>
                <div style={{ fontSize: 12, color: "#868e96" }}>{t.student} · {t.date}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Ticket Detail */}
        {selected && (
          <div style={{ background: "#fff", border: "1px solid #e9ecef", borderRadius: 12, padding: 20, height: "fit-content", position: "sticky", top: 20 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
              <span style={{ fontSize: 13.5, fontWeight: 600, color: "#111" }}>Ticket Details</span>
              <button onClick={() => setSelected(null)} style={{ background: "none", border: "none", cursor: "pointer", color: "#868e96", fontSize: 18, lineHeight: 1 }}>×</button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
              {[
                ["Ticket ID",  selected.id],
                ["Room",       selected.room],
                ["Student",    selected.student],
                ["Category",   selected.category],
                ["Date",       selected.date],
              ].map(([label, value]) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 12, color: "#868e96" }}>{label}</span>
                  <span style={{ fontSize: 12, fontWeight: 500, color: "#111" }}>{value}</span>
                </div>
              ))}
            </div>

            <div style={{ fontSize: 14, fontWeight: 600, color: "#111", marginBottom: 14 }}>{selected.title}</div>

            {/* Update Status */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#adb5bd", textTransform: "uppercase", letterSpacing: 0.6, marginBottom: 8 }}>Update Status</div>
              <div style={{ display: "flex", gap: 8 }}>
                {["Pending", "In Progress", "Resolved"].map(s => (
                  <button key={s} onClick={() => updateStatus(selected.id, s)}
                    style={{ flex: 1, padding: "7px 0", borderRadius: 7, border: selected.status === s ? "1.5px solid #111" : "1px solid #e9ecef", background: selected.status === s ? "#111" : "#fff", color: selected.status === s ? "#fff" : "#495057", fontSize: 11, fontWeight: selected.status === s ? 600 : 400, cursor: "pointer", fontFamily: "inherit" }}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Comments */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#adb5bd", textTransform: "uppercase", letterSpacing: 0.6, marginBottom: 8 }}>Comments</div>
              {selected.comments.length === 0 && (
                <div style={{ fontSize: 12.5, color: "#adb5bd", marginBottom: 10 }}>No comments yet.</div>
              )}
              {selected.comments.map((c, i) => (
                <div key={i} style={{ background: "#f8f9fa", borderRadius: 8, padding: "8px 12px", marginBottom: 8, fontSize: 12.5, color: "#495057" }}>{c}</div>
              ))}
              <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                <input value={comment} onChange={e => setComment(e.target.value)}
                  placeholder="Add a comment..."
                  style={{ flex: 1, padding: "8px 12px", border: "1px solid #e9ecef", borderRadius: 8, fontSize: 12.5, outline: "none", fontFamily: "inherit" }} />
                <button onClick={() => addComment(selected.id)}
                  style={{ padding: "8px 14px", background: "#111", color: "#fff", border: "none", borderRadius: 8, fontSize: 12.5, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
                  Add
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageTickets;