import { useState } from "react";

const ManageRooms = ({ onBack }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const Icon = ({ path, size = 18, color = "currentColor" }) => (
    <svg width={size} height={size} fill="none" stroke={color} strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d={path} />
    </svg>
  );

  const rooms = [
    { id: "A-101", block: "A", floor: 1, type: "3-Sharing", capacity: 3, occupied: 3, status: "Occupied",  warden: "Mr. Suresh Kumar" },
    { id: "A-102", block: "A", floor: 1, type: "3-Sharing", capacity: 3, occupied: 2, status: "Partial",   warden: "Mr. Suresh Kumar" },
    { id: "A-103", block: "A", floor: 1, type: "2-Sharing", capacity: 2, occupied: 0, status: "Vacant",    warden: "Mr. Suresh Kumar" },
    { id: "B-201", block: "B", floor: 2, type: "3-Sharing", capacity: 3, occupied: 3, status: "Occupied",  warden: "Ms. Rekha Patel"  },
    { id: "B-202", block: "B", floor: 2, type: "2-Sharing", capacity: 2, occupied: 1, status: "Partial",   warden: "Ms. Rekha Patel"  },
    { id: "C-301", block: "C", floor: 3, type: "3-Sharing", capacity: 3, occupied: 0, status: "Vacant",    warden: "Mr. Vijay Sharma" },
    { id: "C-302", block: "C", floor: 3, type: "3-Sharing", capacity: 3, occupied: 3, status: "Occupied",  warden: "Mr. Vijay Sharma" },
  ];

  const statusStyle = {
    Occupied: { background: "#fff8e6", color: "#a16207", border: "1px solid #fde68a" },
    Partial:  { background: "#eff6ff", color: "#1d4ed8", border: "1px solid #bfdbfe" },
    Vacant:   { background: "#f0fdf4", color: "#15803d", border: "1px solid #bbf7d0" },
  };

  const filtered = rooms.filter(r => {
    const matchFilter = filter === "All" || r.status === filter;
    const matchSearch = r.id.toLowerCase().includes(search.toLowerCase()) ||
                        r.warden.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <div style={{ minHeight: "100vh", background: "#f8f9fa", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>

      {/* Topbar */}
      <header style={{ height: 58, background: "#fff", borderBottom: "1px solid #e9ecef", padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, color: "#868e96", fontSize: 13, fontFamily: "inherit" }}>
            <Icon path="M15 19l-7-7 7-7" size={16} color="#868e96" /> Back
          </button>
          <span style={{ color: "#e9ecef" }}>|</span>
          <span style={{ fontSize: 14, fontWeight: 600, color: "#111" }}>Manage Rooms</span>
        </div>
        <div style={{ fontSize: 13, color: "#868e96" }}>Admin · System</div>
      </header>

      <div style={{ maxWidth: 900, margin: "32px auto", padding: "0 20px" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
          <div>
            <h1 style={{ fontSize: 20, fontWeight: 600, color: "#111", margin: 0, letterSpacing: -0.5 }}>Rooms</h1>
            <p style={{ fontSize: 13.5, color: "#868e96", marginTop: 4, marginBottom: 0 }}>{rooms.length} total rooms across all blocks</p>
          </div>
          <button style={{ padding: "9px 18px", background: "#111", color: "#fff", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
            + Add Room
          </button>
        </div>

        {/* Search + Filter */}
        <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
          <input
            type="text"
            placeholder="Search by room or warden..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ flex: 1, padding: "9px 14px", border: "1px solid #e9ecef", borderRadius: 8, fontSize: 13.5, color: "#111", outline: "none", fontFamily: "inherit", background: "#fff" }}
          />
          <div style={{ display: "flex", gap: 8 }}>
            {["All", "Occupied", "Partial", "Vacant"].map(f => (
              <button key={f} onClick={() => setFilter(f)}
                style={{ padding: "7px 16px", borderRadius: 8, border: filter === f ? "1.5px solid #111" : "1px solid #e9ecef", background: filter === f ? "#111" : "#fff", color: filter === f ? "#fff" : "#495057", fontSize: 12.5, fontWeight: filter === f ? 600 : 400, cursor: "pointer", fontFamily: "inherit" }}>
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div style={{ background: "#fff", border: "1px solid #e9ecef", borderRadius: 12, overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#f8f9fa" }}>
                {["Room", "Block", "Floor", "Type", "Capacity", "Occupied", "Warden", "Status", "Actions"].map(h => (
                  <th key={h} style={{ padding: "9px 16px", fontSize: 11, fontWeight: 600, color: "#adb5bd", textAlign: "left", letterSpacing: 0.5, textTransform: "uppercase", borderBottom: "1px solid #e9ecef" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((r, i) => (
                <tr key={r.id} style={{ background: i % 2 === 0 ? "#fff" : "#fafafa", borderBottom: i === filtered.length - 1 ? "none" : "1px solid #f1f3f5" }}>
                  <td style={{ padding: "11px 16px", fontSize: 13, fontFamily: "monospace", fontWeight: 600, color: "#111" }}>{r.id}</td>
                  <td style={{ padding: "11px 16px", fontSize: 13, color: "#495057" }}>Block {r.block}</td>
                  <td style={{ padding: "11px 16px", fontSize: 13, color: "#495057" }}>Floor {r.floor}</td>
                  <td style={{ padding: "11px 16px", fontSize: 12, color: "#868e96" }}>{r.type}</td>
                  <td style={{ padding: "11px 16px", fontSize: 13, color: "#495057", textAlign: "center" }}>{r.capacity}</td>
                  <td style={{ padding: "11px 16px", fontSize: 13, color: "#495057", textAlign: "center" }}>{r.occupied}</td>
                  <td style={{ padding: "11px 16px", fontSize: 12, color: "#868e96" }}>{r.warden}</td>
                  <td style={{ padding: "11px 16px" }}>
                    <span style={{ fontSize: 11, fontWeight: 600, padding: "3px 9px", borderRadius: 6, ...statusStyle[r.status] }}>{r.status}</span>
                  </td>
                  <td style={{ padding: "11px 16px" }}>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button style={{ fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 6, border: "1px solid #e9ecef", background: "#fff", cursor: "pointer", color: "#228be6", fontFamily: "inherit" }}>Edit</button>
                      <button style={{ fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 6, border: "1px solid #fde8e8", background: "#fff5f5", cursor: "pointer", color: "#e03131", fontFamily: "inherit" }}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageRooms;