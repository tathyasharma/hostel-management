const RoomInfo = ({ onBack }) => {
  const Icon = ({ path, size = 18, color = "currentColor" }) => (
    <svg width={size} height={size} fill="none" stroke={color} strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d={path} />
    </svg>
  );

  const roommates = [
    { name: "Arjun Mehta",    roll: "SE23UCSE101", bed: "Bed 1" },
    { name: "Tathya Sharma",  roll: "SE23UCSE173", bed: "Bed 2 (You)" },
    { name: "Rohan Verma",    roll: "SE23UCSE145", bed: "Bed 3" },
  ];

  const details = [
    { label: "Room Number",  value: "A-101" },
    { label: "Block",        value: "Block A" },
    { label: "Floor",        value: "Floor 1" },
    { label: "Room Type",    value: "3-Sharing" },
    { label: "Capacity",     value: "3 Students" },
    { label: "Status",       value: "Occupied" },
    { label: "Warden",       value: "Mr. Suresh Kumar" },
    { label: "Allocated On", value: "1st Jan 2026" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#f8f9fa", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>

      {/* Topbar */}
      <header style={{ height: 58, background: "#fff", borderBottom: "1px solid #e9ecef", padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, color: "#868e96", fontSize: 13, fontFamily: "inherit" }}>
            <Icon path="M15 19l-7-7 7-7" size={16} color="#868e96" /> Back
          </button>
          <span style={{ color: "#e9ecef" }}>|</span>
          <span style={{ fontSize: 14, fontWeight: 600, color: "#111" }}>Room Info</span>
        </div>
        <div style={{ fontSize: 13, color: "#868e96" }}>Tathya Sharma · A-101</div>
      </header>

      <div style={{ maxWidth: 700, margin: "32px auto", padding: "0 20px" }}>

        <div style={{ marginBottom: 24 }}>
          <h1 style={{ fontSize: 20, fontWeight: 600, color: "#111", margin: 0, letterSpacing: -0.5 }}>Room Information</h1>
          <p style={{ fontSize: 13.5, color: "#868e96", marginTop: 4, marginBottom: 0 }}>Your current room allocation details.</p>
        </div>

        {/* Room Banner */}
        <div style={{ background: "#111", borderRadius: 12, padding: "22px 26px", marginBottom: 20, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: 0.9, marginBottom: 6 }}>Assigned Room</div>
            <div style={{ fontSize: 36, fontWeight: 700, color: "#fff", letterSpacing: -1.5, fontFamily: "monospace", lineHeight: 1 }}>A-101</div>
            <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.5)", marginTop: 8 }}>Block A · Floor 1 · 3-Sharing</div>
          </div>
          <div style={{ background: "#f0fdf4", padding: "8px 16px", borderRadius: 8 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#15803d" }}>● Occupied</div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>

          {/* Room Details */}
          <div style={{ background: "#fff", border: "1px solid #e9ecef", borderRadius: 12, overflow: "hidden" }}>
            <div style={{ padding: "14px 20px", borderBottom: "1px solid #e9ecef" }}>
              <span style={{ fontSize: 13.5, fontWeight: 600, color: "#111" }}>Room Details</span>
            </div>
            <div style={{ padding: "4px 0" }}>
              {details.map((d, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px", borderBottom: i === details.length - 1 ? "none" : "1px solid #f8f9fa" }}>
                  <span style={{ fontSize: 12.5, color: "#868e96" }}>{d.label}</span>
                  <span style={{ fontSize: 12.5, fontWeight: 500, color: "#111" }}>{d.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Roommates */}
          <div style={{ background: "#fff", border: "1px solid #e9ecef", borderRadius: 12, overflow: "hidden" }}>
            <div style={{ padding: "14px 20px", borderBottom: "1px solid #e9ecef" }}>
              <span style={{ fontSize: 13.5, fontWeight: 600, color: "#111" }}>Roommates</span>
            </div>
            <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
              {roommates.map((r, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: r.bed.includes("You") ? "#111" : "#e9ecef", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 600, color: r.bed.includes("You") ? "#fff" : "#495057", flexShrink: 0 }}>
                    {r.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 500, color: "#111" }}>{r.name}</div>
                    <div style={{ fontSize: 11, color: "#868e96" }}>{r.roll}</div>
                  </div>
                  <span style={{ fontSize: 11, color: "#868e96", fontFamily: "monospace" }}>{r.bed}</span>
                </div>
              ))}
            </div>

            {/* Warden Info */}
            <div style={{ margin: "0 16px 16px", background: "#f8f9fa", border: "1px solid #e9ecef", borderRadius: 8, padding: "12px 14px" }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#adb5bd", textTransform: "uppercase", letterSpacing: 0.6, marginBottom: 8 }}>Block Warden</div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#e9ecef", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 600, color: "#495057" }}>SK</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#111" }}>Mr. Suresh Kumar</div>
                  <div style={{ fontSize: 11, color: "#868e96" }}>Block A Warden</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomInfo;